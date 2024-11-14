// const express = require("express");
// const router = express.Router();
// const productController = require("../controller/ProductController");

// router.get("/", productController.getAllProducts);
// router.put("/:id/approve", productController.approveProduct);

// module.exports = router;
///////////////////////////

// const express = require("express");
// const router = express.Router();
// const productController = require("../controller/ProductController");
// const upload = require("../config/multerConfig");

// router.get("/", productController.getAllProducts);
// router.put("/:id/approve", productController.approveProduct);
// router.post(
//   "/:id/upload-image",
//   upload.single("productImage"),
//   productController.uploadProductImage
// );

// module.exports = router;
//////////////
const express = require("express");
const router = express.Router();
const productController = require("../controller/ProductController");
const upload = require("../config/multerConfig");

router.get("/", productController.getAllProducts);
router.put("/:id/approve", productController.approveProduct);
router.post(
  "/:id/upload-image",
  upload.single("productImage"),
  productController.uploadProductImage
);
router.delete("/:id/delete-admin", productController.deleteProductAdmin);

module.exports = router;
