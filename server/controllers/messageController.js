

import crypto from "crypto";
import nodemailer from "nodemailer";
import { messages } from "../mock-data/messages.js";

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildContactEmail(data) {
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

export async function createMessage(req, res) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      minVersion: "TLSv1.2",
      rejectUnauthorized: false
    },
    family: 4, // 👈 force IPv4 (IMPORTANT)
  });
  try {
    const newMessage = {
      id: crypto.randomUUID(),
      ...req.validatedData,
      createdAt: new Date().toISOString(),
    };

    messages.push(newMessage);

    const emailTemplate = buildContactEmail(newMessage);

    await transporter.verify();

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
    console.log("message sent via nodemailer")
  } catch (err) {
    console.error("createMessage error:", err);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: err.message,
    });
  }
}