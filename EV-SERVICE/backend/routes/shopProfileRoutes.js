// // shopOwnerRoutes.js
// const express = require("express");
// const router = express.Router();
// const shopOwnerController = require("../controllers/shopProfileController");
// const multer = require("multer");
// const path = require("path");

// // Set up Multer for file uploads
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads/");
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + path.extname(file.originalname));
//   },
// });

// const upload = multer({ storage: storage });

// router.get("/:id", shopOwnerController.getProfile);
// router.put(
//   "/:id",
//   upload.single("profilePicture"),
//   shopOwnerController.updateProfile
// );

// module.exports = router;
///////////////////////////////////////////
// const express = require("express");
// const router = express.Router();
// const shopOwnerController = require("../controllers/shopProfileController");
// const multer = require("multer");
// const path = require("path");

// // إعداد Multer لتحميل الملفات
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads/");
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + path.extname(file.originalname));
//   },
// });

// const upload = multer({ storage: storage });

// router.get("/:id", shopOwnerController.getProfile);
// router.put(
//   "/:id",
//   upload.single("profilePicture"),
//   shopOwnerController.updateProfile
// );

// module.exports = router;
// ////////////////////////////////////////////
// const express = require("express");
// const router = express.Router();
// const shopOwnerController = require("../controllers/shopProfileController");
// const multer = require("multer");
// const path = require("path");
// const protect = require("../middlewares/auth");

// // Multer setup for file uploads
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads/");
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + path.extname(file.originalname));
//   },
// });

// const upload = multer({ storage: storage });

// // GET route for profile
// router.get("/profile", protect, shopOwnerController.getProfile);

// // PUT route for updating profile
// router.put(
//   "/profile",
//   protect,
//   upload.single("profilePicture"),
//   shopOwnerController.updateProfile
// );

// // If you have any POST routes, make sure they are properly defined
// // For example:
// // router.post("/register", shopOwnerController.registerShopOwner);

// module.exports = router;
///////////////////////////////////////////////////////////////////////////
const express = require("express");
const router = express.Router();
const shopOwnerController = require("../controllers/shopProfileController");
const upload = require("../middlewares/uploadConfig"); // Multer upload
const protect = require("../middlewares/auth"); // Middleware للتحقق من المستخدم

// GET route for profile
router.get("/profile", protect, shopOwnerController.getProfile);

// PUT route for updating profile (including profile picture upload)
router.put(
  "/profile",
  protect,
  upload.single("profilePicture"), // Handling profile picture upload
  shopOwnerController.updateProfile
);

module.exports = router;
