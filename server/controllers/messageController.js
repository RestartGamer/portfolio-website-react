import crypto from "crypto";
import {messages} from "../mock-data/messages.js";

export function getMessages(req, res) {
  res.status(200).json(messages);
}

export function createMessage(req, res) {
  try {
    const newMessage = {
      id: crypto.randomUUID(),
      ...req.validatedData,
      createdAt: new Date().toISOString(),
    };

    messages.push(newMessage);

    res.status(201).json({
      success: true,
      message: "Message created successfully",
      data: newMessage,
    });
  } catch (err) {
    console.error("createMessage error:", err);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}