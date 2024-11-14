//////////////////

const Contact = require("../models/contactadmin");
const nodemailer = require("nodemailer");

// Create a transporter using the existing configuration
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "malek.shehadeh96@gmail.com",
    pass: "axuq oqty wwsh lvwc",
  },
});

exports.getAllMessages = async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching messages", error: error.message });
  }
};

exports.deleteMessage = async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.json({ message: "Message deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting message", error: error.message });
  }
};

exports.sendReply = async (req, res) => {
  const { email, subject, message } = req.body;
  const mailOptions = {
    from: "malek.shehadeh96@gmail.com",
    to: email,
    subject: `Re: ${subject}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ message: "Reply sent successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error sending reply", error: error.message });
  }
};
