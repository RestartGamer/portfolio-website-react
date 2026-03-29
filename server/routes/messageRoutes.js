import express from "express"
import { getMessages, createMessage } from "../controllers/messageController.js";
import { validateMessage } from "../middleware/validateMessage.js";

const router = express.Router();

router.get("/", getMessages);
router.post("/", validateMessage, createMessage);

export default router;