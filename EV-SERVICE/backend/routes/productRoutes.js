// const express = require("express");
// const router = express.Router();
// const productController = require("../controllers/productController");

// router.post("/", productController.addProduct);
// router.get("/", productController.getAllProducts);
// router.delete("/:id", productController.deleteProduct);
// router.put("/:id", productController.updateProduct);
// module.exports = router;
// ///////////////////////
//////////////////////
///////////////////////////////////////////////////////////////////////////

// const express = require("express");
// const router = express.Router();
// const productController = require("../controllers/productController");

// // POST /api/products
// router.post("/", productController.addProduct);

// // GET /api/products
// router.get("/", productController.getAllProducts);

// // DELETE /api/products/:id
// router.delete("/:id", productController.deleteProduct);

// // PUT /api/products/:id
// router.put("/:id", productController.updateProduct);
// ////
// // router.get("/api/catalog/:id", productController.getProductById);
// ////
// module.exports = router;
////////////////////////////////////////////
/////////////ok up وتحت تمام///////////////////////
// const express = require("express");
// const router = express.Router();
// const productController = require("../controllers/productController");
// const protect = require("../middlewares/auth");

// // POST /api/products
// router.post("/", protect, productController.addProduct);

// // GET /api/products
// router.get("/", protect, productController.getAllProducts);

// // DELETE /api/products/:id
// router.delete("/:id", protect, productController.deleteProduct);

// // PUT /api/products/:id
// router.put("/:id", protect, productController.updateProduct);

// module.exports = router;
///////////////

const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const protect = require("../middlewares/auth");

// POST /api/products
router.post("/", protect, productController.addProduct);

// GET /api/products
router.get("/", protect, productController.getAllProducts);

// DELETE /api/products/:id
router.delete("/:id", protect, productController.deleteProduct);

// PUT /api/products/:id
router.put("/:id", protect, productController.updateProduct);

module.exports = router;