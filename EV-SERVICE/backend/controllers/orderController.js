// orderController.js

// Backend - orderController.js
const Payment = require("../models/Payment");

// exports.getShopOwnerOrders = async (req, res) => {
//   try {
//     if (req.userType !== "shopOwner") {
//       return res.status(403).json({
//         success: false,
//         message: "Access denied. Only shop owners can view orders.",
//       });
//     }

//     const shopOwnerId = req.user._id;
//     console.log("Shop Owner ID:", shopOwnerId);

//     const orders = await Payment.find({
//       "cartItems.shopOwner.id": shopOwnerId,
//     })
//       .populate("user", "username email")
//       .sort({ createdAt: -1 });

//     console.log("Found Orders:", orders);

//     res.json(orders);
//   } catch (error) {
//     console.error("Error in getShopOwnerOrders:", error);
//     res.status(500).json({
//       success: false,
//       message: "Error fetching orders",
//       error: error.message,
//     });
//   }
// };
////////////////////
// Add this to orderController.js
exports.getShopOwnerOrders = async (req, res) => {
  try {
    if (req.userType !== "shopOwner") {
      return res.status(403).json({
        success: false,
        message: "Access denied. Only shop owners can view orders.",
      });
    }

    const shopOwnerId = req.user._id;
    console.log("Shop Owner ID:", shopOwnerId);

    const orders = await Payment.find({
      "cartItems.shopOwner.id": shopOwnerId,
    })
      .populate("user", "username email")
      .sort({ createdAt: -1 });

    // Log the image data for debugging
    orders.forEach((order) => {
      console.log("Order ID:", order._id);
      order.cartItems.forEach((item) => {
        console.log("Item images:", item.images);
      });
    });

    res.json(orders);
  } catch (error) {
    console.error("Error in getShopOwnerOrders:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching orders",
      error: error.message,
    });
  }
};

//////
exports.updateOrderStatus = async (req, res) => {
  try {
    if (req.userType !== "shopOwner") {
      return res.status(403).json({
        message: "Access denied. Only shop owners can update orders.",
      });
    }

    const { orderId } = req.params;
    const shopOwnerId = req.user._id;

    const order = await Payment.findOne({
      _id: orderId,
      "cartItems.shopOwner.id": shopOwnerId,
    });

    if (!order) {
      return res.status(404).json({
        message: "Order not found or you do not have permission to update it",
      });
    }

    if (order.status === "completed") {
      return res.status(400).json({
        message: "Order is already marked as completed",
      });
    }

    order.status = "completed";
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
