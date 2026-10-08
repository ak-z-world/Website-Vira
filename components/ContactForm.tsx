"use client";

import { useState } from "react";
import { COURSE_INTERESTS } from "@/data/courses";
import { CheckIcon, SendIcon } from "@/components/icons";

type Status = "idle" | "sending" | "ok" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      phone: String(fd.get("phone") || ""),
      interest: String(fd.get("interest") || ""),
      message: String(fd.get("message") || ""),
      website: String(fd.get("website") || ""), // honeypot
    };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (res.ok && data.ok) {
        setStatus("ok");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
        setError(data.error || "Something went wrong. Please email us directly.");
      }
    } catch {
      setStatus("error");
      setError("Could not send your message. Please email us directly at hello@vertexloop.in.");
    }
  }

  return (
    <div className="form-card">
      {status === "ok" && (
        <div className="form-alert ok" role="status">
          <CheckIcon size={16} /> Thank you — your message has been sent. We&apos;ll get back to you shortly.
        </div>
      )}
      {status === "error" && (
        <div className="form-alert err" role="alert">{error}</div>
      )}
      <form onSubmit={onSubmit} noValidate={false}>
        <div className="form-row">
          <div className="field">
            <label htmlFor="cf-name">Full name *</label>
            <input id="cf-name" name="name" type="text" required autoComplete="name" placeholder="Your name" />
          </div>
          <div className="field">
            <label htmlFor="cf-email">Email *</label>
            <input id="cf-email" name="email" type="email" required autoComplete="email" placeholder="you@example.com" />
          </div>
        </div>
        <div className="form-row">
          <div className="field">
            <label htmlFor="cf-phone">Phone / WhatsApp</label>
            <input id="cf-phone" name="phone" type="tel" autoComplete="tel" placeholder="+91 ..." />
          </div>
          <div className="field">
            <label htmlFor="cf-interest">I&apos;m interested in *</label>
            <select id="cf-interest" name="interest" required defaultValue="">
              <option value="" disabled>Select an option</option>
              {COURSE_INTERESTS.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="field">
          <label htmlFor="cf-message">Message *</label>
          <textarea id="cf-message" name="message" required placeholder="Tell us about your goals — or, for colleges, about your institution and batches." />
        </div>
        {/* Honeypot — invisible to humans */}
        <input className="hp-field" type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
        <button type="submit" className="btn btn-primary" disabled={status === "sending"} style={{ width: "100%" }}>
          {status === "sending" ? "Sending..." : (<><SendIcon size={17} /> Send Message</>)}
        </button>
        <p className="form-note">
          By submitting, you agree to be contacted about CrackLeap programs. We never share your details.
        </p>
      </form>
    </div>
  );
}
