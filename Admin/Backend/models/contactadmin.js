const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    name: { type: String, required: true },
    national_id: { type: String },
    subject: { type: String },
    message: { type: String, required: true },
    captchaValue: { type: String },
  },
  { timestamps: true }
);

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
