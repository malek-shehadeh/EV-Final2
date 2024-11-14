// const express = require("express");
// const { register, login } = require("../controllers/authController");
// const router = express.Router();

// router.post("/register", register);
// router.post("/login", login);

// module.exports = router;
/////////
const express = require("express");
const {
  register,
  login,
  googleSignup,
} = require("../controllers/authController");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/google-signup", googleSignup);

module.exports = router;
