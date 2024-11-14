const express = require("express");
const router = express.Router();
const {
  getAllOrders,
  updateOrderStatus,
} = require("../controller/orderController");

// Remove protect middleware temporarily for testing
router.get("/", getAllOrders); // Changed from /orders to /
router.patch("/:orderId/update-status", updateOrderStatus);

module.exports = router;
