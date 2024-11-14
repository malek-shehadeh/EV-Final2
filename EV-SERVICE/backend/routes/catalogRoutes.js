// const express = require("express");
// const router = express.Router();
// const productController = require("../controllers/catalogController"); // Adjust the path as needed

// router.get("/approved", productController.getApprovedProducts);

// module.exports = router;
// ////////////////////////
// const express = require("express");
// const router = express.Router();
// const multer = require("multer");
// const path = require("path");
// const catalogController = require("../controllers/catalogController");

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads/");
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + path.extname(file.originalname));
//   },
// });

// const upload = multer({ storage: storage });

// router.post("/", upload.array("images", 5), catalogController.createProduct);
// router.get("/approved", catalogController.getApprovedProducts);

// module.exports = router;
///////////////////
const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const catalogController = require("../controllers/catalogController");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

router.post("/", upload.array("images", 5), catalogController.createProduct);
router.get("/approved", catalogController.getApprovedProducts);
router.get("/:id", catalogController.getProductDetails); // New route for product details

module.exports = router;
