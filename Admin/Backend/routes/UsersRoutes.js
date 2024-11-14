const express = require("express");
const router = express.Router();
const { getAllUsers } = require("../controller/userController");
const { updateUserStatus } = require("../controller/UsersController");

router.get("/", getAllUsers);
router.patch("/:id", updateUserStatus);
module.exports = router;
