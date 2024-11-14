// const Product = require("../models/Product"); // Adjust the path as needed

// exports.getApprovedProducts = async (req, res) => {
//   try {
//     const products = await Product.find({ isApproved: true });
//     res.json(products);
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Error fetching products", error: error.message });
//   }
// };
// /////////////////////////////
// const Product = require("../models/Product"); // Ensure the path is correct

// exports.createProduct = async (req, res) => {
//   try {
//     const { name, description, price, category } = req.body;
//     const images = req.files.map((file) => `/uploads/${file.filename}`); // Create URL paths for images

//     const newProduct = new Product({
//       name,
//       description,
//       price,
//       category,
//       images,
//       isApproved: true, // Or any other approval logic you want
//     });

//     await newProduct.save();
//     res.status(201).json(newProduct);
//   } catch (error) {
//     res
//       .status(400)
//       .json({ message: "Error creating product", error: error.message });
//   }
// };

// exports.getApprovedProducts = async (req, res) => {
//   try {
//     const products = await Product.find({ isApproved: true });
//     res.json(products);
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Error fetching products", error: error.message });
//   }
// };
// ///////////////////////
// const Product = require("../models/Product");

// exports.createProduct = async (req, res) => {
//   try {
//     const { name, description, price, category } = req.body;
//     const images = req.files.map((file) => `/uploads/${file.filename}`);

//     const newProduct = new Product({
//       name,
//       description,
//       price,
//       category,
//       images,
//       isApproved: true,
//     });

//     await newProduct.save();
//     res.status(201).json(newProduct);
//   } catch (error) {
//     res
//       .status(400)
//       .json({ message: "Error creating product", error: error.message });
//   }
// };

// exports.getApprovedProducts = async (req, res) => {
//   try {
//     const products = await Product.find({ isApproved: true });
//     res.json(products);
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Error fetching products", error: error.message });
//   }
// };
//////////////////////////
const Product = require("../models/Product");

exports.createProduct = async (req, res) => {
  try {
    const { name, description, price, category } = req.body;
    const images = req.files.map((file) => `/uploads/${file.filename}`);
    const newProduct = new Product({
      name,
      description,
      price,
      category,
      images,
      isApproved: true,
    });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error creating product", error: error.message });
  }
};

// exports.getApprovedProducts = async (req, res) => {
//   try {
//     const products = await Product.find({ isApproved: true });
//     res.json(products);
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Error fetching products", error: error.message });
//   }
// };

/////
exports.getApprovedProducts = async (req, res) => {
  try {
    const products = await Product.find({ isApproved: true }).populate(
      "shopOwner",
      "ownerName shopPhone shopLocation"
    );
    res.json(products);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching products", error: error.message });
  }
};
///

exports.getProductDetails = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching product details",
      error: error.message,
    });
  }
};
