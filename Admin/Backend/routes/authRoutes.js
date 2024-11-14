const express = require("express");
const authController = require("../controller/authadminController");

const router = express.Router();

router.post("/login", authController.adminLogin);

module.exports = router;
