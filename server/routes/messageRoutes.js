import express from "express"
import { createMessage } from "../controllers/messageController.js";
import { validateMessage } from "../middleware/validateMessage.js";

const router = express.Router();

router.post("/", validateMessage, createMessage);

export default router;