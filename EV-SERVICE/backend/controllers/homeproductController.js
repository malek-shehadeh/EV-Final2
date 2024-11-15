const Product = require("../models/Product");
const path = require("path");
const fs = require("fs");

exports.createProduct = async (req, res) => {
  try {
    const { name, description, price, category } = req.body;

    // Handle multiple image uploads
    const images = req.files.map(
      (file) => `/uploads/products/${file.filename}`
    );

    const product = new Product({
      name,
      description,
      price,
      category,
      images,
      shopOwner: req.user._id, // Assuming you have user auth middleware
      shopOwnerName: req.user.name,
    });

    await product.save();
    res.status(201).json({ success: true, product });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find({
      isApproved: true,
      isDeletedAdmin: false,
    });
    res.status(200).json({ success: true, products });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};
