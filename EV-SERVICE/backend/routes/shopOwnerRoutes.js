const express = require("express");
const router = express.Router();
const shopOwnerController = require("../controllers/shopOwnerController");
const shopProfileController = require("../controllers/shopProfileController");
const multer = require("multer");
const path = require("path");
const protect = require("../middlewares/auth");

// Configure multer for file upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Make sure this folder exists
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, "profile-" + uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: function (req, file, cb) {
    const allowedMimes = ["image/jpeg", "image/png", "image/gif"];
    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(
        new Error(
          "Invalid file type. Only jpg, png and gif image files are allowed."
        )
      );
    }
  },
});

// Registration and login routes
router.post(
  "/register",
  upload.single("licenseCertificate"),
  shopOwnerController.registerMaintenanceShop
);
router.post("/login", shopOwnerController.loginShopOwner);

// Profile routes
router.get("/profile", protect, shopProfileController.getProfile);
router.put(
  "/profile",
  protect,
  upload.single("profilePicture"),
  shopProfileController.updateProfile
);

module.exports = router;
