// // const express = require("express");
// // const router = express.Router();
// // const cartController = require("../controllers/cartController");

// // router.post("/add", cartController.addToCart);
// // router.put("/update", cartController.updateCartItem);
// // router.delete("/remove/:itemId", cartController.removeFromCart);
// // router.get("/", cartController.getCart);

// // module.exports = router;
// //////

// const express = require("express");
// const router = express.Router();
// const cartController = require("../controllers/cartController");
// const protect = require("../middlewares/auth");

// router.post("/add", protect, cartController.addToCart);
// router.put("/update", protect, cartController.updateCartItem);
// router.delete("/remove/:itemId", protect, cartController.removeFromCart);
// router.get("/", protect, cartController.getCart);

// module.exports = router;
////////////////////جديييييييييد///////////////////////



// const express = require("express");
// const router = express.Router();
// const cartController = require("../controllers/cartController");
// const protect = require("../middlewares/auth");

// // Get cart items
// router.get("/", protect, cartController.getCart);

// // Add item to cart
// router.post("/add", protect, cartController.addToCart);

// // Update cart item quantity
// router.put("/update", protect, cartController.updateCartItem);

// // Remove item from cart
// router.delete("/remove/:itemId", protect, cartController.removeFromCart);

// // Clear entire cart
// router.delete("/clear", protect, async (req, res) => {
//   try {
//     // Find user's cart and clear items
//     const cart = await req.app.models.Cart.findOneAndUpdate(
//       { user: req.user._id },
//       { $set: { items: [] } },
//       { new: true }
//     );

//     if (!cart) {
//       return res.status(404).json({ message: "Cart not found" });
//     }

//     res.json({ message: "Cart cleared successfully", cart });
//   } catch (error) {
//     console.error("Error clearing cart:", error);
//     res.status(500).json({ message: "Error clearing cart" });
//   }
// });

// // Get cart count
// router.get("/count", protect, async (req, res) => {
//   try {
//     const cart = await req.app.models.Cart.findOne({ user: req.user._id });
//     const count = cart ? cart.items.reduce((total, item) => total + item.quantity, 0) : 0;
//     res.json({ count });
//   } catch (error) {
//     console.error("Error getting cart count:", error);
//     res.status(500).json({ message: "Error getting cart count" });
//   }
// });

// module.exports = router;

//////////////////


const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartController");
const protect = require("../middlewares/auth");

// Basic cart operations
router.post("/add", protect, cartController.addToCart);
router.put("/update", protect, cartController.updateCartItem);
router.delete("/remove/:itemId", protect, cartController.removeFromCart);
router.get("/", protect, cartController.getCart);

// Clear cart route
router.delete("/clear", protect, cartController.clearCart);

module.exports = router;