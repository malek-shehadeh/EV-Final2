const ShopOwner = require("../models/shopOwner");
const fs = require("fs");
const path = require("path");

exports.getProfile = async (req, res) => {
  try {
    const shopOwner = await ShopOwner.findById(req.user).select("-password");
    if (!shopOwner) {
      return res.status(404).json({ message: "Shop owner not found" });
    }
    const response = {
      ...shopOwner.toObject(),
      profilePicture: shopOwner.profilePicture
        ? `/uploads/${shopOwner.profilePicture}`
        : null,
    };
    res.json(response);
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const updates = req.body;
    const shopOwner = await ShopOwner.findById(req.user);

    if (!shopOwner) {
      return res.status(404).json({ message: "Shop owner not found" });
    }

    // Handle profile picture upload
    if (req.file) {
      // Delete old profile picture if it exists
      if (shopOwner.profilePicture) {
        const oldImagePath = path.join(
          __dirname,
          "../uploads",
          shopOwner.profilePicture
        );
        if (fs.existsSync(oldImagePath)) {
          fs.unlinkSync(oldImagePath);
        }
      }
      // Save only the filename
      shopOwner.profilePicture = req.file.filename;
    }

    // Update all allowed fields
    const allowedUpdates = [
      "ownerName",
      "shopPhone",
      "email",
      "name",
      "address",
      "website",
      "services",
      "specializations",
      "openingHours",
      "location",
    ];

    allowedUpdates.forEach((field) => {
      if (updates[field] !== undefined) {
        if (field === "services" || field === "specializations") {
          shopOwner[field] = Array.isArray(updates[field])
            ? updates[field]
            : updates[field].split(",").map((item) => item.trim());
        } else if (
          field === "location" &&
          updates.latitude &&
          updates.longitude
        ) {
          shopOwner.location = {
            type: "Point",
            coordinates: [
              parseFloat(updates.longitude),
              parseFloat(updates.latitude),
            ],
          };
        } else if (field !== "location") {
          shopOwner[field] = updates[field];
        }
      }
    });

    await shopOwner.save();
    res.json({
      message: "Profile updated successfully",
      shopOwner: {
        ...shopOwner.toObject(),
        profilePicture: shopOwner.profilePicture
          ? `/uploads/${shopOwner.profilePicture}`
          : null,
      },
    });
  } catch (error) {
    console.error("Error in updateProfile:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
