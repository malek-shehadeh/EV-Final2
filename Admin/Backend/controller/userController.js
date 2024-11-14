const User = require("../models/Usersadmin");

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find()
      .select("-password") // Exclude password field
      .sort({ createdAt: -1 });

    res.status(200).json(users);
  } catch (error) {
    console.error("Error in getAllUsers:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching users",
      error: error.message,
    });
  }
};
