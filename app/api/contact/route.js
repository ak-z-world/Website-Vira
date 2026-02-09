import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const data = await req.json();
    const { name, email, phone, course, message, website } = data;

    // Honeypot anti-bot check
    if (website) {
      return Response.json({ success: false }, { status: 400 });
    }

    // Basic validation
    if (!name || !email || !message) {
      return Response.json({ success: false }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Vira Academy Website" <${process.env.EMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      replyTo: email,
      subject: `New Contact Form Submission - ${name}`,
      html: `
        <div style="font-family: Arial; padding: 20px;">
          <h2 style="color:#f97316;">New Contact Inquiry</h2>

          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "N/A"}</p>
          <p><strong>Course:</strong> ${course || "N/A"}</p>

          <p><strong>Message:</strong><br/>${message}</p>
        </div>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);
    return Response.json({ success: false }, { status: 500 });
  }
}
