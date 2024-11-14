const express = require("express");
const router = express.Router();
const ContactController = require("../controller/ContactController");

// Get all contact messages
router.get("/contact-messages", ContactController.getAllMessages);

// Delete a contact message
router.delete("/contact-messages/:id", ContactController.deleteMessage);

// Send a reply email
router.post("/send-email", ContactController.sendReply);

module.exports = router;
