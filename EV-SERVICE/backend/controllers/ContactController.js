// const Contact = require("../models/contact");

// // إضافة رسالة الاتصال إلى قاعدة البيانات
// exports.createContact = async (req, res) => {
//   try {
//     const { email, name, national_id, subject, message, captchaValue } =
//       req.body;

//     // التحقق من القيمة المرسلة عبر reCAPTCHA (إذا لزم الأمر)
//     if (!captchaValue) {
//       return res.status(400).json({ message: "Captcha is required" });
//     }

//     // إنشاء مستند جديد وإدخاله في قاعدة البيانات
//     const newContact = new Contact({
//       email,
//       name,
//       national_id,
//       subject,
//       message,
//       captchaValue,
//     });

//     await newContact.save();

//     res.status(201).json({ message: "Contact message saved successfully" });
//   } catch (error) {
//     console.error("Error saving contact message:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// };
// ////////
// const Contact = require("../models/contact");

// // Add contact message to the database
// exports.createContact = async (req, res) => {
//   try {
//     const { email, name, national_id, subject, message, captchaValue } =
//       req.body;

//     // Validate reCAPTCHA value (Optional: You should validate it on the server if required)
//     if (!captchaValue) {
//       return res.status(400).json({ message: "Captcha is required" });
//     }

//     // Create a new contact document and save it to the database
//     const newContact = new Contact({
//       email,
//       name,
//       national_id,
//       subject,
//       message,
//       captchaValue,
//     });

//     await newContact.save();

//     res.status(201).json({ message: "Contact message saved successfully" });
//   } catch (error) {
//     console.error("Error saving contact message:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// };
/////
const Contact = require("../models/contact");

// Add contact message to the database
exports.createContact = async (req, res) => {
  try {
    const { email, name, national_id, subject, message, captchaValue } =
      req.body;

    // Verify reCAPTCHA value if needed
    if (!captchaValue) {
      return res.status(400).json({ message: "Captcha is required" });
    }

    // Create and save new contact message
    const newContact = new Contact({
      email,
      name,
      national_id,
      subject,
      message,
      captchaValue,
    });

    await newContact.save();

    res.status(201).json({ message: "Contact message saved successfully" });
  } catch (error) {
    console.error("Error saving contact message:", error);
    res.status(500).json({ message: "Server error" });
  }
};
