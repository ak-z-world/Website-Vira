import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, interest, message, website } = body ?? {};

    // Honeypot: silently accept spam-bot submissions
    if (website) return Response.json({ ok: true });

    if (!name || !email || !interest || !message) {
      return Response.json({ error: "Please fill in all required fields." }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    const { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS, CONTACT_TO } = process.env;
    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
      console.error("Contact form: SMTP env vars not configured");
      return Response.json(
        { error: "The contact form is not configured yet. Please email us directly at hello@vertexloop.in." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT || 587),
      secure: SMTP_SECURE === "true",
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    await transporter.sendMail({
      from: `"CrackLeap Website" <${SMTP_USER}>`,
      to: CONTACT_TO || "hello@vertexloop.in",
      replyTo: email,
      subject: `CrackLeap enquiry — ${interest} — ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "—"}`,
        `Interested in: ${interest}`,
        ``,
        `Message:`,
        message,
      ].join("\n"),
    });

    return Response.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return Response.json(
      { error: "Could not send your message right now. Please email us directly at hello@vertexloop.in." },
      { status: 500 }
    );
  }
}
