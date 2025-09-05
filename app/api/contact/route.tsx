import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    // ✅ Configure SMTP
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", // Change if using another SMTP provider
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // ✅ Send email to Admin
    await transporter.sendMail({
      from: `"Website Contact" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: "New Contact Form Submission",
      html: `
        <h3>New Contact Form Submission</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone || "N/A"}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    // ✅ Send confirmation email to User
    await transporter.sendMail({
      from: `"Your Company" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "We received your message!",
      html: `
        <p>Hi ${name},</p>
        <p>Thanks for contacting us. Our team will get back to you soon.</p>
        <p><b>Your Message:</b></p>
        <blockquote>${message}</blockquote>
        <br/>
        <p>Best regards,<br/>Your Company</p>
      `,
    });

    return NextResponse.json({ success: true, message: "Emails sent successfully!" });
  } catch (error) {
    console.error("❌ Email error:", error);
    return NextResponse.json({ success: false, message: "Failed to send email." }, { status: 500 });
  }
}
