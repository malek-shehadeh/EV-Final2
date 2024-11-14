// // const Product = require("../models/Product");

// // exports.getAllProducts = async (req, res) => {
// //   try {
// //     const products = await Product.find();
// //     res.json(products);
// //   } catch (error) {
// //     res.status(500).json({ message: error.message });
// //   }
// // };

// // exports.approveProduct = async (req, res) => {
// //   try {
// //     const product = await Product.findById(req.params.id);
// //     if (!product) {
// //       return res.status(404).json({ message: "Product not found" });
// //     }
// //     product.isApproved = req.body.isApproved;
// //     await product.save();
// //     res.json(product);
// //   } catch (error) {
// //     res.status(400).json({ message: error.message });
// //   }
// // };
// ////////////////////////////////

// // const Product = require("../models/Productsadmin");

// // exports.getAllProducts = async (req, res) => {
// //   try {
// //     const products = await Product.find();
// //     res.json(products);
// //   } catch (error) {
// //     res.status(500).json({ message: error.message });
// //   }
// // };

// // exports.approveProduct = async (req, res) => {
// //   try {
// //     const product = await Product.findById(req.params.id);
// //     if (!product) {
// //       return res.status(404).json({ message: "Product not found" });
// //     }
// //     product.isApproved = req.body.isApproved;
// //     await product.save();
// //     res.json(product);
// //   } catch (error) {
// //     res.status(400).json({ message: error.message });
// //   }
// // };

// // exports.uploadProductImage = async (req, res) => {
// //   try {
// //     if (!req.file) {
// //       return res.status(400).json({ message: "No file uploaded" });
// //     }

// //     const product = await Product.findById(req.params.id);
// //     if (!product) {
// //       return res.status(404).json({ message: "Product not found" });
// //     }

// //     const filePath = `/uploads/${req.file.filename}`;
// //     product.images.push(filePath);
// //     await product.save();

// //     res.status(200).json({
// //       message: "File uploaded successfully",
// //       filePath: filePath,
// //       product: product,
// //     });
// //   } catch (error) {
// //     res.status(400).json({ message: error.message });
// //   }
// // };
// //////////////////////
// ///////
// //////////////////////
// const Product = require("../models/Productsadmin");

// exports.getAllProducts = async (req, res) => {
//   try {
//     const products = await Product.find().populate("shopOwner", "ownerName");
//     res.json(products);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// exports.approveProduct = async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id);
//     if (!product) {
//       return res.status(404).json({ message: "Product not found" });
//     }
//     product.isApproved = req.body.isApproved;
//     await product.save();
//     res.json(product);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// exports.uploadProductImage = async (req, res) => {
//   try {
//     if (!req.file) {
//       return res.status(400).json({ message: "No file uploaded" });
//     }
//     const product = await Product.findById(req.params.id);
//     if (!product) {
//       return res.status(404).json({ message: "Product not found" });
//     }
//     const filePath = `/uploads/${req.file.filename}`;
//     product.images.push(filePath);
//     await product.save();
//     res.status(200).json({
//       message: "File uploaded successfully",
//       filePath: filePath,
//       product: product,
//     });
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };
///////////////////////////
////////
// //////////////////////////
// const Product = require("../models/Productsadmin");

// exports.getAllProducts = async (req, res) => {
//   try {
//     const products = await Product.find().populate("shopOwner", "ownerName");
//     res.json(products);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// exports.approveProduct = async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id);
//     if (!product) {
//       return res.status(404).json({ message: "Product not found" });
//     }
//     product.isApproved = req.body.isApproved;
//     await product.save();
//     res.json(product);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// exports.uploadProductImage = async (req, res) => {
//   try {
//     if (!req.file) {
//       return res.status(400).json({ message: "No file uploaded" });
//     }
//     const product = await Product.findById(req.params.id);
//     if (!product) {
//       return res.status(404).json({ message: "Product not found" });
//     }
//     const filePath = `/uploads/${req.file.filename}`;
//     product.images.push(filePath);
//     await product.save();
//     res.status(200).json({
//       message: "File uploaded successfully",
//       filePath: filePath,
//       product: product,
//     });
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// exports.deleteProductAdmin = async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id);
//     if (!product) {
//       return res.status(404).json({ message: "Product not found" });
//     }

//     // Instead of deleting the product, we'll set a flag to indicate it's deleted for admin
//     product.isDeletedAdmin = true;
//     await product.save();

//     res.json({ message: "Product deleted successfully from admin view" });
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };
///////////////////////////////////////////////////////////////////////
const Product = require("../models/Productsadmin");

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({
      isDeletedAdmin: { $ne: true },
    }).populate("shopOwner", "ownerName");
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.approveProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    product.isApproved = req.body.isApproved;
    await product.save();
    res.json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.uploadProductImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    const filePath = `/uploads/${req.file.filename}`;
    product.images.push(filePath);
    await product.save();
    res.status(200).json({
      message: "File uploaded successfully",
      filePath: filePath,
      product: product,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteProductAdmin = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Instead of deleting the product, we'll set a flag to indicate it's deleted for admin
    product.isDeletedAdmin = true;
    await product.save();

    res.json({ message: "Product deleted successfully from admin view" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
