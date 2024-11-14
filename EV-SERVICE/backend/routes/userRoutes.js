// const express = require('express');
// const router = express.Router();
// const { register, login,getAllUsers,getCurrentUser } = require('../controllers/usercontoller');
// const auth = require('../middlewares/auth');

// router.post('/register', register);
// router.post('/login', login);
// router.get('/', getAllUsers);
// router.get('/me', auth, getCurrentUser);  // New route
// module.exports = router;
///////ok top old ////
//////////////////

// const express = require("express");
// const { updateProfile, getProfile } = require("../controllers/userController");
// const { authenticate } = require("../middlewares/auth");
// const multer = require("multer");

// const router = express.Router();
// const upload = multer({ storage });

// // Endpoint to get user profile
// router.get("/profile", authenticate, getProfile);

// // Endpoint to update user profile with image upload
// router.put(
//   "/profile",
//   authenticate,
//   upload.single("profileImage"),
//   updateProfile
// );

// module.exports = router;
// ///////////ok ok //////
// const express = require("express");
// const { updateProfile, getProfile } = require("../controllers/userController");
// const { authenticate } = require("../middlewares/auth");
// const upload = require("../middlewares/multer");

// const router = express.Router();

// // Endpoint to get user profile
// router.get("/profile", authenticate, getProfile);

// // Endpoint to update user profile with image upload
// router.put(
//   "/profile",
//   authenticate,
//   upload.single("profileImage"),
//   updateProfile
// );

// module.exports = router;
/////
const express = require("express");
const userController = require("../controllers/usercontoller"); // تأكد من الاسم الصحيح للملف
const protect = require("../middlewares/auth"); // تأكد من اسم الملف
const upload = require("../middlewares/uploadConfig");
const router = express.Router();

// Endpoint to get user profile
router.get("/profile", protect, userController.getProfile);

// Endpoint to update user profile with image upload
router.put(
  "/profile",
  protect,
  upload.single("profileImage"),
  userController.updateProfile
);
///////////////////
router.get("/me", protect, async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ error: "User not authenticated" });
    }
    res.json(req.user);
  } catch (error) {
    console.error("Error fetching current user:", error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching user data" });
  }
});

module.exports = router;
//////////////////////
