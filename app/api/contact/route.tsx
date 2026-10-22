import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { connectDB } from "@/lib/mongodb";
import Contact from "@/models/contact";

// Prevents HTML injection in the emails
const escapeHtml = (str: string = "") =>
  str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const NAME_REGEX = /^[A-Za-z][A-Za-z\s.'-]{1,99}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[A-Za-z]{2,}$/;
const PHONE_REGEX = /^\d{10}$/;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const phone = String(body.phone ?? "").trim();
    const message = String(body.message ?? "").trim();

    // Server-side validation (the browser checks can be bypassed)
    if (!NAME_REGEX.test(name)) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid name (letters only)." },
        { status: 400 }
      );
    }
    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid email address." },
        { status: 400 }
      );
    }
    if (phone && !PHONE_REGEX.test(phone)) {
      return NextResponse.json(
        { success: false, message: "Phone number must be exactly 10 digits." },
        { status: 400 }
      );
    }
    if (message.length > 2000) {
      return NextResponse.json(
        { success: false, message: "Message is too long (max 2000 characters)." },
        { status: 400 }
      );
    }

    // 1) Save to MongoDB first, so the lead is never lost
    await connectDB();
    const saved = await Contact.create({ name, email, phone, message });

    // 2) Then try to send the emails
    let emailSent = false;
    try {
      const port = Number(process.env.SMTP_PORT);
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port,
        secure: port === 465,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      await transporter.verify();

      // Email to admin
      await transporter.sendMail({
        from: `"Website Contact" <${process.env.SMTP_USER}>`,
        to: process.env.CONTACT_RECEIVER_EMAIL,
        subject: "New Contact Form Submission",
        html: `
          <h3>New Contact Form Submission</h3>
          <p><b>Name:</b> ${escapeHtml(name)}</p>
          <p><b>Email:</b> ${escapeHtml(email)}</p>
          <p><b>Phone:</b> ${escapeHtml(phone) || "N/A"}</p>
          <p><b>Message:</b> ${escapeHtml(message) || "N/A"}</p>
        `,
      });

      // Confirmation email to user
      await transporter.sendMail({
        from: `"Wynn Safety" <${process.env.SMTP_USER}>`,
        to: email,
        subject: "We received your message!",
        html: `
          <p>Hi ${escapeHtml(name)},</p>
          <p>Thanks for contacting us. Our team will get back to you soon.</p>
          <br/>
          <p>Best regards,<br/>Wynn Safety</p>
        `,
      });

      emailSent = true;
      await Contact.findByIdAndUpdate(saved._id, { emailSent: true });
    } catch (mailError) {
      // Message is already saved, so log the error but don't fail the request
      console.error("❌ Email error:", mailError);
    }

    return NextResponse.json({
      success: true,
      emailSent,
      message: "Message received!",
    });
  } catch (error) {
    console.error("❌ Contact API error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to process your message. Please try again.",
        // Shown in local and Preview only, hidden in Production
        debug:
          process.env.VERCEL_ENV === "production"
            ? undefined
            : error instanceof Error
            ? error.message
            : String(error),
      },
      { status: 500 }
    );
  }
}