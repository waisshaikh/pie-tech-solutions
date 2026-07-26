"use client";

import { FormEvent, useState } from "react";
import { Check, LoaderCircle, Send } from "lucide-react";

type FormStatus = { type: "idle" | "sending" | "success" | "error"; message?: string };

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>({ type: "idle" });

  async function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus({ type: "sending" });

    try {
      const endpoint =
        process.env.NEXT_PUBLIC_CONTACT_API_URL ||
        "https://api.zyberly.in/contact";
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData.entries())),
      });
      const result = await response.json();

      if (!response.ok) throw new Error(result.error || "Unable to send your enquiry.");

      form.reset();
      setStatus({
        type: "success",
        message: "Thank you. Your enquiry has been sent to the Zyberly team.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Unable to send your enquiry.",
      });
    }
  }

  return (
    <form className="contact-premium-form" onSubmit={submitForm}>
      <div className="contact-form-top">
        <span className="mono-label">PROJECT ENQUIRY</span>
        <span>01 / 01</span>
      </div>
      <div className="contact-form-grid">
        <label>YOUR NAME*<input required name="name" maxLength={100} placeholder="Jane Smith" /></label>
        <label>WORK EMAIL*<input required type="email" name="email" maxLength={160} placeholder="jane@company.com" /></label>
        <label>PHONE NUMBER<input type="tel" name="phone" maxLength={40} placeholder="+91" /></label>
        <label>COMPANY<input name="company" maxLength={120} placeholder="Your company" /></label>
      </div>
      <label>WHAT CAN WE HELP WITH?
        <select name="service" defaultValue="">
          <option value="" disabled>Select a service</option>
          <option>Web Development</option>
          <option>Mobile App Development</option>
          <option>UI/UX Design</option>
          <option>Branding & Identity</option>
          <option>Digital Marketing</option>
          <option>Custom Software</option>
        </select>
      </label>
      <label className="contact-honeypot" aria-hidden="true">
        WEBSITE<input name="website" tabIndex={-1} autoComplete="off" />
      </label>
      <label>TELL US ABOUT THE PROJECT*
        <textarea required name="message" maxLength={5000} rows={6} placeholder="A few words about your goals, timing and what success looks like..." />
      </label>
      <button
        type="submit"
        className={`contact-submit ${status.type}`}
        disabled={status.type === "sending" || status.type === "success"}
      >
        <span className="contact-submit-shine" aria-hidden="true" />
        <span className="contact-submit-copy">
          {status.type === "sending" && <><span>SENDING YOUR ENQUIRY</span><LoaderCircle className="contact-submit-spinner" size={19} /></>}
          {status.type === "success" && <><span>ENQUIRY SENT</span><Check className="contact-submit-check" size={20} /></>}
          {(status.type === "idle" || status.type === "error") && <><span>SEND YOUR ENQUIRY</span><Send size={18} /></>}
        </span>
      </button>
      <p>By submitting this form, you agree that we may contact you about your enquiry.</p>
      {status.message && (
        <div className={`contact-form-status ${status.type}`} role="status" aria-live="polite">
          {status.message}
        </div>
      )}
    </form>
  );
}
