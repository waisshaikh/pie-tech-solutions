const express = require("express");
const nodemailer = require("nodemailer");

const app = express();
const port = Number(process.env.PORT || 3000);
const allowedOrigins = new Set(
  (process.env.ALLOWED_ORIGINS ||
    "https://zyberly.in,https://www.zyberly.in,http://127.0.0.1:3000")
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean),
);
const requestLog = new Map();

app.disable("x-powered-by");
app.use(express.json({ limit: "32kb" }));
app.use((request, response, next) => {
  const origin = request.headers.origin;
  if (origin && allowedOrigins.has(origin)) {
    response.setHeader("Access-Control-Allow-Origin", origin);
    response.setHeader("Vary", "Origin");
    response.setHeader("Access-Control-Allow-Headers", "Content-Type");
    response.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  }
  if (request.method === "OPTIONS") return response.sendStatus(204);
  next();
});

function clean(value, maxLength) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function escapeHtml(value) {
  return value.replace(
    /[&<>"']/g,
    (character) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[
        character
      ] || character,
  );
}

function isRateLimited(request) {
  const key = request.ip || request.socket.remoteAddress || "unknown";
  const now = Date.now();
  const recent = (requestLog.get(key) || []).filter((time) => now - time < 15 * 60 * 1000);
  if (recent.length >= 5) return true;
  recent.push(now);
  requestLog.set(key, recent);
  return false;
}

async function saveLeadToErp(lead) {
  const erpApiUrl = (process.env.ERP_API_URL || "").replace(/\/$/, "");
  const ingestSecret = process.env.LEAD_INGEST_SECRET;

  if (!erpApiUrl || !ingestSecret) {
    throw new Error("ERP_API_URL or LEAD_INGEST_SECRET is not configured.");
  }

  const response = await fetch(`${erpApiUrl}/leads/ingest`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Lead-Secret": ingestSecret,
    },
    body: JSON.stringify({ ...lead, source: "zyberly.in" }),
    signal: AbortSignal.timeout(10000),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`ERP rejected the lead (${response.status}): ${body.slice(0, 300)}`);
  }
}

app.get("/", (_request, response) => {
  response.json({ service: "Zyberly contact API", status: "ok" });
});

app.get("/health", (_request, response) => {
  response.json({ ok: true });
});

app.post("/contact", async (request, response) => {
  try {
    const origin = request.headers.origin;
    if (origin && !allowedOrigins.has(origin)) {
      return response.status(403).json({ error: "Origin not allowed." });
    }
    if (isRateLimited(request)) {
      return response.status(429).json({ error: "Too many requests. Please try again later." });
    }

    const name = clean(request.body.name, 100);
    const email = clean(request.body.email, 160);
    const phone = clean(request.body.phone, 40);
    const company = clean(request.body.company, 120);
    const service = clean(request.body.service, 100);
    const message = clean(request.body.message, 5000);
    const website = clean(request.body.website, 200);

    if (website) return response.json({ ok: true });
    if (!name || !email || !message) {
      return response.status(400).json({ error: "Please complete all required fields." });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return response.status(400).json({ error: "Please enter a valid email address." });
    }

    const host = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT || "465");
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    if (!host || !user || !pass) {
      console.error("Missing SMTP environment variables.");
      return response.status(503).json({ error: "Email delivery is not configured." });
    }

    const transporter = nodemailer.createTransport({
      host,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: { user, pass },
    });
    const safe = {
      name: escapeHtml(name),
      email: escapeHtml(email),
      phone: escapeHtml(phone || "Not provided"),
      company: escapeHtml(company || "Not provided"),
      service: escapeHtml(service || "Not selected"),
      message: escapeHtml(message).replace(/\n/g, "<br />"),
    };

    await transporter.sendMail({
      from: process.env.SMTP_FROM || `Zyberly Website <${user}>`,
      to: "info@zyberly.in",
      replyTo: email,
      subject: `New Zyberly enquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "Not provided"}`,
        `Company: ${company || "Not provided"}`,
        `Service: ${service || "Not selected"}`,
        "",
        message,
      ].join("\n"),
      html: `
        <div style="font-family:Arial,sans-serif;max-width:640px;color:#101512">
          <h1 style="margin-bottom:8px">New project enquiry</h1>
          <p style="margin-top:0;color:#53605a">Submitted through zyberly.in</p>
          <table style="width:100%;border-collapse:collapse;margin:24px 0">
            <tr><td style="padding:10px;border-bottom:1px solid #ddd"><strong>Name</strong></td><td style="padding:10px;border-bottom:1px solid #ddd">${safe.name}</td></tr>
            <tr><td style="padding:10px;border-bottom:1px solid #ddd"><strong>Email</strong></td><td style="padding:10px;border-bottom:1px solid #ddd">${safe.email}</td></tr>
            <tr><td style="padding:10px;border-bottom:1px solid #ddd"><strong>Phone</strong></td><td style="padding:10px;border-bottom:1px solid #ddd">${safe.phone}</td></tr>
            <tr><td style="padding:10px;border-bottom:1px solid #ddd"><strong>Company</strong></td><td style="padding:10px;border-bottom:1px solid #ddd">${safe.company}</td></tr>
            <tr><td style="padding:10px;border-bottom:1px solid #ddd"><strong>Service</strong></td><td style="padding:10px;border-bottom:1px solid #ddd">${safe.service}</td></tr>
          </table>
          <h2 style="font-size:18px">Project details</h2>
          <p style="line-height:1.7">${safe.message}</p>
        </div>
      `,
    });

    try {
      await saveLeadToErp({ name, email, phone, company, service, message });
    } catch (erpError) {
      // Preserve the existing contact-email flow if the ERP is temporarily unavailable.
      console.error("ERP lead sync failed:", erpError);
    }

    response.json({ ok: true });
  } catch (error) {
    console.error("Contact delivery failed:", error);
    response.status(500).json({ error: "We could not send your enquiry. Please try again." });
  }
});

app.use((_request, response) => {
  response.status(404).json({ error: "Not found." });
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Zyberly contact API listening on port ${port}`);
});
