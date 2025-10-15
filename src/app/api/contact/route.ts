import { NextResponse } from "next/server";

export const runtime = "nodejs";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, email, subject, message } = await req.json();

  // Improved validation
  function isValidEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  if (
    !name || typeof name !== "string" || name.trim().length < 2 ||
    !email || typeof email !== "string" || !isValidEmail(email) ||
    !subject || typeof subject !== "string" || subject.trim().length < 2 ||
    !message || typeof message !== "string" || message.trim().length < 10
  ) {
    return NextResponse.json(
      { error: "Please fill out all fields correctly." },
      { status: 400 }
    );
  }

  // Configure your SMTP transport (use env vars in production)
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.SES_FROM,       // Verified sender address in SES
      replyTo: email,                   // Sender's email for replies
      to: "cosmo.elford@gmail.com",     // Your receiving email address
      subject: `[Contact Form] ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }
}