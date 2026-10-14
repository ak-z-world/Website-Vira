import { NextResponse } from "next/server";
import { Resend } from "resend";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      id,
      name,
      phone,
      courseId,
      courseName,
      shortDesc,
      tags,
      level,
      background,
      timing,
      deliveryChoice,
      language = "en",
      sourceUrl,
      createdAt,
      website, // Honeypot trap field
    } = body ?? {};

    // Honeypot check: silently drop bots
    if (website) {
      return NextResponse.json({ ok: true, dropped: true });
    }

    if (!name || !phone || !courseName) {
      return NextResponse.json(
        { error: "Missing required lead fields: name, phone, or courseName." },
        { status: 400 }
      );
    }

    const leadId = id || `LEAD-${Date.now().toString(36).toUpperCase()}`;
    const leadTime = createdAt || new Date().toISOString();
    const tagsString = Array.isArray(tags) ? tags.join(", ") : tags || "N/A";
    const subject = `New Lead: ${courseName} - ${name} - ${background || "Applicant"}`;

    const textContent = [
      `🚀 NEW CRACKLEAP LEAD CAPTURED VIA KURAL BOT`,
      `--------------------------------------------------`,
      `Lead ID: ${leadId}`,
      `Captured At: ${leadTime}`,
      `Candidate Name: ${name}`,
      `WhatsApp / Phone: ${phone}`,
      `Track / Course: ${courseName} (${courseId || "N/A"})`,
      `Level: ${level || "N/A"}`,
      `Short Description: ${shortDesc || "N/A"}`,
      `Tags: ${tagsString}`,
      `Candidate Background: ${background || "N/A"}`,
      `Target Start Timing: ${timing || "N/A"}`,
      `Syllabus Delivery Choice: ${deliveryChoice || "N/A"}`,
      `Language: ${language}`,
      `Source URL: ${sourceUrl || "crackleap.vertexloop.in"}`,
      `--------------------------------------------------`,
      `Quick Action: https://wa.me/91${phone.replace(/\D/g, "")}`,
    ].join("\n");

    const htmlContent = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 620px; margin: 0 auto; padding: 24px; background: #faf9ff; border: 1px solid #e9e2fa; border-radius: 16px;">
        <div style="background: linear-gradient(135deg, #7C3AED, #5B21B6); padding: 20px 24px; border-radius: 12px; color: #ffffff; margin-bottom: 24px;">
          <h2 style="margin: 0 0 6px; font-size: 20px; font-weight: 700;">CrackLeap Academy — New Lead</h2>
          <p style="margin: 0; font-size: 14px; opacity: 0.9;">Captured by Kural Bot • Mentored by engineers who ship</p>
        </div>

        <div style="background: #ffffff; padding: 22px; border-radius: 12px; border: 1px solid #ede9fe; margin-bottom: 20px;">
          <table style="width: 100%; border-collapse: collapse; font-size: 14px; line-height: 1.6;">
            <tr>
              <td style="padding: 8px 0; color: #64748b; width: 38%;"><strong>Candidate Name:</strong></td>
              <td style="padding: 8px 0; color: #1e1b4b; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b;"><strong>WhatsApp / Phone:</strong></td>
              <td style="padding: 8px 0; color: #7c3aed; font-weight: 700;">
                <a href="https://wa.me/91${phone.replace(/\D/g, "")}" style="color: #7c3aed; text-decoration: none;">+91 ${phone} 💬 (Open WhatsApp)</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b;"><strong>Interested Track:</strong></td>
              <td style="padding: 8px 0; color: #1e1b4b; font-weight: 600;">${courseName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b;"><strong>Track Level:</strong></td>
              <td style="padding: 8px 0; color: #1e1b4b;">${level || "Beginner to Advanced"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b;"><strong>Technologies:</strong></td>
              <td style="padding: 8px 0; color: #1e1b4b;">${tagsString}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b;"><strong>Background:</strong></td>
              <td style="padding: 8px 0; color: #1e1b4b;">${background || "N/A"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b;"><strong>Target Start:</strong></td>
              <td style="padding: 8px 0; color: #1e1b4b;">${timing || "Immediately"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b;"><strong>Delivery Choice:</strong></td>
              <td style="padding: 8px 0; color: #1e1b4b;">${deliveryChoice || "WhatsApp"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b;"><strong>Source URL:</strong></td>
              <td style="padding: 8px 0; color: #64748b; font-size: 12px; word-break: break-all;">${sourceUrl || "Direct"}</td>
            </tr>
          </table>
        </div>

        <div style="text-align: center; margin-top: 24px;">
          <a href="https://wa.me/91${phone.replace(/\D/g, "")}" style="display: inline-block; background: #7C3AED; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: 600; font-size: 14px;">
            Message Candidate on WhatsApp
          </a>
        </div>

        <p style="margin-top: 24px; text-align: center; font-size: 12px; color: #94a3b8;">
          Vertex Loop Pvt Ltd • CrackLeap Academy Admissions • Lead ID: ${leadId}
        </p>
      </div>
    `;

    let emailSent = false;
    const toAddress = "hello@vertexloop.in";

    // 1. Try Resend if RESEND_API_KEY is configured
    if (process.env.RESEND_API_KEY) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        const fromAddress = process.env.RESEND_FROM || "CrackLeap Kural <onboarding@resend.dev>";
        await resend.emails.send({
          from: fromAddress,
          to: toAddress,
          subject,
          text: textContent,
          html: htmlContent,
        });
        emailSent = true;
      } catch (resendErr) {
        console.error("Resend API error:", resendErr);
      }
    }

    // 2. Fallback to Nodemailer if SMTP is configured and Resend did not fire
    if (!emailSent) {
      const { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS, EMAIL_USER, EMAIL_PASS } =
        process.env;
      const host = SMTP_HOST || "smtp.zoho.in";
      const user = SMTP_USER || EMAIL_USER;
      const pass = SMTP_PASS || EMAIL_PASS;

      if (user && pass) {
        try {
          const transporter = nodemailer.createTransport({
            host,
            port: Number(SMTP_PORT || 587),
            secure: SMTP_SECURE === "true",
            auth: { user, pass },
          });

          await transporter.sendMail({
            from: `"CrackLeap Kural Bot" <${user}>`,
            to: toAddress,
            subject,
            text: textContent,
            html: htmlContent,
          });
          emailSent = true;
        } catch (smtpErr) {
          console.error("Nodemailer fallback error:", smtpErr);
        }
      }
    }

    // Log the lead details server-side
    console.log(`[KURAL LEAD RECORDED] ID: ${leadId} | Name: ${name} | Course: ${courseName} | Phone: ${phone} | Emailed: ${emailSent}`);

    return NextResponse.json({
      ok: true,
      leadId,
      emailSent,
      timestamp: leadTime,
    });
  } catch (err: any) {
    console.error("Kural Lead API error:", err);
    return NextResponse.json(
      { error: "Internal server error saving lead", details: err?.message },
      { status: 500 }
    );
  }
}
