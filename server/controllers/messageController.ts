import crypto from "crypto";
import nodemailer from "nodemailer";
import type { Request, Response } from "express";
import type { ContactFormData } from "../../shared/config/schema.js";

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

type EmailTemplate = {
  subject: string;
  text: string;
  html: string;
};

type MessageData = ContactFormData & {
  id: string;
  createdAt: string;
};

function buildContactEmail(data: MessageData): EmailTemplate {
  const safeName = escapeHtml(data.name);
  const safeEmail = escapeHtml(data.email);
  const safeInquiry = escapeHtml(data.inquiry);
  const safeMessage = escapeHtml(data.message).replace(/\n/g, "<br />");
  return {
    subject: `Portfolio Contact: ${safeInquiry}`,
    text: `
          Name: ${data.name}
          Email: ${data.email}
          Inquiry: ${data.inquiry}

          Message:
          ${data.message}
              `.trim(),
    html:
      `
                <h2>Portfolio Contact Form</h2>
                <p><strong>Name:</strong> ${safeName}</p>
                <p><strong>Email:</strong> ${safeEmail}</p>
                <p><strong>Inquiry:</strong> ${safeInquiry}</p>
                <p><strong>Message:</strong></p>
                <p>${safeMessage}</p>
              `,
  };
}

export async function createMessage(req: Request, res: Response): Promise<void> {
  // Variable avoids excess-property check; family (force IPv4) is valid at runtime but absent from @types/nodemailer.
  // Non-null assertions on EMAIL_USER/PASS preserve original behavior (runtime fails if unset, same as JS).
  const smtpOptions = {
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER!,
      pass: process.env.EMAIL_PASS!,
    },
    tls: {
      minVersion: "TLSv1.2" as const,
      rejectUnauthorized: false,
    },
    family: 4,
  };
  const transporter = nodemailer.createTransport(smtpOptions);

  try {
    const newMessage: MessageData = {
      id: crypto.randomUUID(),
      ...req.validatedData,
      createdAt: new Date().toISOString(),
    };

    const emailTemplate = buildContactEmail(newMessage);

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      replyTo: newMessage.email,
      subject: emailTemplate.subject,
      text: emailTemplate.text,
      html: emailTemplate.html,
    });

    res.status(201).json({
      success: true,
      message: "Message created and email sent successfully",
      data: newMessage,
    });
    console.log("message sent via nodemailer");
  } catch (err) {
    console.error("createMessage error:", err);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: err instanceof Error ? err.message : String(err),
    });
  }
}
