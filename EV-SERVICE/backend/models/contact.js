// const mongoose = require("mongoose");

// const contact = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true,
//     },
//     email: {
//         type: String,
//         required: true,
//     },
//     message: {
//         type: String,
//         required: true,
//     }

// });

// module.exports = mongoose.model("contact", contact);
//////////////////
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
