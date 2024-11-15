const express = require("express");
const router = express.Router();
const upload = require("../middlewares/uploadConfig");
const {
  createProduct,
  getProducts,
} = require("../controllers/homeproductController");
const auth = require("../middlewares/auth"); // Your auth middleware

router.post("/create", auth, upload.array("images", 5), createProduct);
router.get("/", getProducts);

module.exports = router;
