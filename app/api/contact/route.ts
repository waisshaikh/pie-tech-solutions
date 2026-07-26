import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const recipients = ["info@zyberly.in"];

function clean(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function escapeHtml(value: string) {
  return value.replace(
    /[&<>"']/g,
    (character) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[
        character
      ] ?? character,
  );
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const name = clean(data.name, 100);
    const email = clean(data.email, 160);
    const phone = clean(data.phone, 40);
    const company = clean(data.company, 120);
    const service = clean(data.service, 100);
    const message = clean(data.message, 5000);
    const website = clean(data.website, 200);

    // Hidden honeypot field: silently accept automated spam without sending it.
    if (website) return NextResponse.json({ ok: true });

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Please complete all required fields." },
        { status: 400 },
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT ?? "465");
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;

    if (!host || !user || !pass) {
      console.error("Contact email is not configured: missing SMTP environment variables.");
      return NextResponse.json(
        { error: "Email delivery is being configured. Please contact us directly." },
        { status: 503 },
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
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
      from: process.env.SMTP_FROM ?? `Zyberly Website <${user}>`,
      to: recipients,
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

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form delivery failed:", error);
    return NextResponse.json(
      { error: "We could not send your enquiry. Please try again." },
      { status: 500 },
    );
  }
}
