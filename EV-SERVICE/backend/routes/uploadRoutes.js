// const express = require("express");
// const upload = require("../middlewares/multerConfig");

// const router = express.Router();

// // Endpoint for image upload
// router.post("/", upload.single("profileImage"), (req, res) => {
//   try {
//     if (!req.file) {
//       return res.status(400).json({ message: "No file uploaded" });
//     }
//     res.status(200).json({
//       message: "File uploaded successfully",
//       filePath: `/uploads/${req.file.filename}`,
//     });
//   } catch (error) {
//     res.status(500).json({ message: "Server error during file upload" });
//   }
// });

// module.exports = router;
/////////////////
const express = require("express");
const multer = require("multer");
const path = require("path");

const router = express.Router();

// Configure Multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Specify the folder to store the images
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Rename the file with a timestamp
  },
});

const upload = multer({ storage: storage });

// POST route to handle profile image upload
router.post("/profile-image", upload.single("profileImage"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  const filePath = `/uploads/${req.file.filename}`;

  // You can store the image path in the database here
  // Example: req.user.profileImage = filePath; await req.user.save();

  res.status(200).json({
    message: "File uploaded successfully",
    filePath: filePath,
  });
});

module.exports = router;
