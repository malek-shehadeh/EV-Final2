const Payment = require("../models/Payment");
const mongoose = require("mongoose");

exports.getAllOrders = async (req, res) => {
  try {
    console.log("Fetching all orders...");

    console.log("MongoDB connection state:", mongoose.connection.readyState);

    const orders = await Payment.find()
      .populate({
        path: "user",
        select: "username email",
      })
      .populate({
        path: "cartItems.shopOwner.id",
        select: "ownerName",
      })
      .sort({ createdAt: -1 });

    console.log("Found orders:", orders.length);
    console.log("Sample order:", orders[0]);

    res.status(200).json(orders);
  } catch (error) {
    console.error("Error in getAllOrders:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching orders",
      error: error.message,
    });
  }
};

exports.updateOrderStatus = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { status } = req.body;

    const order = await Payment.findById(orderId);

    if (!order) {
      return res.status(404).json({
        message: "Order not found",
      });
    }

    if (order.status === "completed") {
      return res.status(400).json({
        message: "Order is already marked as completed",
      });
    }

    order.status = status;
    await order.save();

    res.json({
      success: true,
      message: "Order status updated successfully",
      order,
    });
  } catch (error) {
    console.error("Error in updateOrderStatus:", error);
    res.status(500).json({
      success: false,
      message: "Error updating order status",
      error: error.message,
    });
  }
};
