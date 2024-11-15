//////////////////////////////okok//
const User = require("../models/User");
const path = require("path");
const fs = require("fs");
const Payment = require("../models/Payment"); // Make sure this path is correct

exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        profileImage: user.profileImage
          ? `/uploads/${user.profileImage}`
          : null,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// exports.updateProfile = async (req, res) => {
//   try {
//     const { username, email, password } = req.body;
//     const user = await User.findById(req.user._id);
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }
//     if (req.file) {
//       if (user.profileImage) {
//         const oldImagePath = path.join(
//           __dirname,
//           "../uploads/",
//           user.profileImage
//         );
//         if (fs.existsSync(oldImagePath)) {
//           fs.unlinkSync(oldImagePath);
//         }
//       }
//       user.profileImage = req.file.filename;
//     }
//     if (username) user.username = username;
//     if (email) user.email = email;
//     if (password) user.password = password;
//     await user.save();
//     res.json({
//       user: {
//         id: user._id,
//         username: user.username,
//         email: user.email,
//         profileImage: user.profileImage
//           ? `/uploads/${user.profileImage}`
//           : null,
//       },
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server error" });
//   }
// };

//////
exports.updateProfile = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Handle profile image update
    if (req.file) {
      if (user.profileImage) {
        const oldImagePath = path.join(
          __dirname,
          "../uploads/",
          user.profileImage
        );
        if (fs.existsSync(oldImagePath)) {
          fs.unlinkSync(oldImagePath);
        }
      }
      user.profileImage = req.file.filename;
    }

    // Update user fields if provided
    if (username) user.username = username;
    if (email) user.email = email;

    // Only update password if provided and user is not using Google auth
    if (password && !user.googleId) {
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
    }

    // Save the updated user
    await user.save();

    // Return updated user info (excluding sensitive data)
    res.json({
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        profileImage: user.profileImage
          ? `/uploads/${user.profileImage}`
          : null,
      },
    });
  } catch (error) {
    console.error("Profile update error:", error);
    res.status(500).json({
      message: "Server error",
      details: error.message,
    });
  }
};

/////
exports.getUserOrders = async (req, res) => {
  try {
    // Log the user information
    console.log("Fetching orders for user:", req.user._id);

    // First, let's check if we can find any payments at all
    const totalOrders = await Payment.countDocuments();
    console.log("Total orders in database:", totalOrders);

    // Find orders for the specific user
    const orders = await Payment.find({ user: req.user._id })
      .select("createdAt status amount cartItems")
      .lean()
      .exec();

    console.log("Found orders:", orders.length);

    // If no orders found, return empty array instead of error
    if (!orders.length) {
      return res.json({ orders: [] });
    }

    // Format the orders with basic information first
    const formattedOrders = orders.map((order) => ({
      id: order._id.toString(),
      date: order.createdAt,
      status: order.status || "pending",
      amount: order.amount || 0,
      items: (order.cartItems || []).map((item) => ({
        id: item._id?.toString(),
        name: item.name || "Unknown Item",
        quantity: item.quantity || 1,
        price: item.price || 0,
        image: item.images?.[0] || "/api/placeholder/100/100",
        shopOwner: item.shopOwner?.name || "Unknown Seller",
      })),
    }));

    return res.json({ orders: formattedOrders });
  } catch (error) {
    console.error("Detailed error in getUserOrders:", error);
    return res.status(500).json({
      message: "Error fetching orders",
      error: error.message,
      stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
    });
  }
};
