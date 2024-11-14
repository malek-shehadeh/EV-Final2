// const Product = require("../models/Product");
// const multer = require("multer");
// const path = require("path");

// // Configure multer for file upload
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads/");
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + path.extname(file.originalname));
//   },
// });

// const upload = multer({ storage: storage });

// exports.addProduct = [
//   upload.array("images", 5), // Allow up to 5 images
//   async (req, res) => {
//     try {
//       const { name, description, price, category } = req.body;
//       const images = req.files.map((file) => file.path);

//       const product = new Product({
//         name,
//         description,
//         price,
//         category,
//         images,
//         isApproved: true,
//       });

//       await product.save();
//       res.status(201).json({ message: "Product added successfully", product });
//     } catch (error) {
//       res
//         .status(400)
//         .json({ message: "Error adding product", error: error.message });
//     }
//   },
// ];

// exports.getAllProducts = async (req, res) => {
//   try {
//     const products = await Product.find();
//     res.status(200).json(products);
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Error fetching products", error: error.message });
//   }
// };

// exports.deleteProduct = async (req, res) => {
//   try {
//     const product = await Product.findByIdAndDelete(req.params.id);
//     if (!product) {
//       return res.status(404).json({ message: "Product not found" });
//     }
//     res.status(200).json({ message: "Product deleted successfully" });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Error deleting product", error: error.message });
//   }
// };

// exports.updateProduct = async (req, res) => {
//   try {
//     const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//     });
//     if (!product) {
//       return res.status(404).json({ message: "Product not found" });
//     }
//     res.status(200).json(product);
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Error updating product", error: error.message });
//   }
// };
// ///////////
// const Product = require("../models/Product");
// const multer = require("multer");
// const path = require("path");

// // Configure multer for file upload
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads/");
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + path.extname(file.originalname));
//   },
// });

// const upload = multer({ storage: storage });

// exports.addProduct = [
//   upload.array("images", 5), // Allow up to 5 images
//   async (req, res) => {
//     try {
//       const { name, description, price, category } = req.body;
//       const images = req.files.map((file) => file.path);
//       const product = new Product({
//         name,
//         description,
//         price,
//         category,
//         images,
//         isApproved: true,
//       });
//       await product.save();
//       res.status(201).json({ message: "Product added successfully", product });
//     } catch (error) {
//       res
//         .status(400)
//         .json({ message: "Error adding product", error: error.message });
//     }
//   },
// ];

// exports.getAllProducts = async (req, res) => {
//   try {
//     const products = await Product.find();
//     res.status(200).json(products);
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Error fetching products", error: error.message });
//   }
// };

// exports.deleteProduct = async (req, res) => {
//   try {
//     const product = await Product.findByIdAndDelete(req.params.id);
//     if (!product) {
//       return res.status(404).json({ message: "Product not found" });
//     }
//     res.status(200).json({ message: "Product deleted successfully" });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Error deleting product", error: error.message });
//   }
// };

// exports.updateProduct = [
//   upload.array("images", 5), // Allow up to 5 images
//   async (req, res) => {
//     try {
//       const { name, description, price, category } = req.body;
//       let updateData = { name, description, price, category };

//       // If new images are uploaded, add them to the update data
//       if (req.files && req.files.length > 0) {
//         const newImages = req.files.map((file) => file.path);
//         updateData.images = newImages;
//       }

//       const product = await Product.findByIdAndUpdate(
//         req.params.id,
//         updateData,
//         { new: true }
//       );

//       if (!product) {
//         return res.status(404).json({ message: "Product not found" });
//       }

//       res.status(200).json(product);
//     } catch (error) {
//       res
//         .status(500)
//         .json({ message: "Error updating product", error: error.message });
//     }
//   },
// ];

// module.exports = exports;
// ////////////////////////////////////////
// const Product = require("../models/Product");
// const multer = require("multer");
// const path = require("path");
// const jwt = require("jsonwebtoken"); // Make sure to install this package
// const ShopOwner = require("../models/shopOwner"); // Import the ShopOwner model
// // Configure multer for file upload
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads/"); // Ensure this 'uploads/' directory exists
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + path.extname(file.originalname));
//   },
// });

// const upload = multer({ storage: storage });

// // Middleware to verify token and add user info to request
// const verifyToken = async (req, res, next) => {
//   const authHeader = req.headers["authorization"];
//   const token = authHeader && authHeader.split(" ")[1]; // Bearer TOKEN

//   if (!token) {
//     return res.status(403).json({ message: "No token provided" });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     const shopOwner = await ShopOwner.findById(decoded.id);
//     if (!shopOwner) {
//       return res.status(404).json({ message: "Shop owner not found" });
//     }
//     req.shopOwner = shopOwner;
//     next();
//   } catch (error) {
//     return res
//       .status(401)
//       .json({ message: "Unauthorized", error: error.message });
//   }
// };

// // Add product (remains the same, but now the verifyToken middleware should work correctly)
// exports.addProduct = [
//   verifyToken,
//   upload.array("images", 5),
//   async (req, res) => {
//     try {
//       const { name, description, price, category } = req.body;
//       const images = req.files.map((file) => file.path);
//       const product = new Product({
//         name,
//         description,
//         price,
//         category,
//         images,
//         isApproved: true,
//         shopOwner: req.shopOwner._id,
//       });
//       await product.save();
//       res.status(201).json({ message: "Product added successfully", product });
//     } catch (error) {
//       res
//         .status(400)
//         .json({ message: "Error adding product", error: error.message });
//     }
//   },
// ];

// // Get all products
// exports.getAllProducts = async (req, res) => {
//   try {
//     const products = await Product.find();
//     res.status(200).json(products);
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Error fetching products", error: error.message });
//   }
// };

// // Delete product
// exports.deleteProduct = async (req, res) => {
//   try {
//     const product = await Product.findByIdAndDelete(req.params.id);
//     if (!product) {
//       return res.status(404).json({ message: "Product not found" });
//     }
//     res.status(200).json({ message: "Product deleted successfully" });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Error deleting product", error: error.message });
//   }
// };

// // Update product
// exports.updateProduct = [
//   upload.array("images", 5), // Allow up to 5 images
//   async (req, res) => {
//     try {
//       const { name, description, price, category } = req.body;
//       let updateData = { name, description, price, category };

//       // If new images are uploaded, add them to the update data
//       if (req.files && req.files.length > 0) {
//         const newImages = req.files.map((file) => file.path);
//         updateData.images = newImages;
//       }

//       const product = await Product.findByIdAndUpdate(
//         req.params.id,
//         updateData,
//         { new: true }
//       );

//       if (!product) {
//         return res.status(404).json({ message: "Product not found" });
//       }

//       res.status(200).json(product);
//     } catch (error) {
//       res
//         .status(500)
//         .json({ message: "Error updating product", error: error.message });
//     }
//   },
// ];
// //////////////
// //////////////////ok 100%up وتحت الامور تمام//////////////////////////
// const Product = require("../models/Product");
// const multer = require("multer");
// const path = require("path");

// // Configure multer for file upload
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads/");
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + path.extname(file.originalname));
//   },
// });
// const upload = multer({ storage: storage });

// // Add product
// exports.addProduct = [
//   upload.array("images", 5),
//   async (req, res) => {
//     try {
//       const { name, description, price, category } = req.body;
//       const images = req.files.map((file) => file.path);
//       const product = new Product({
//         name,
//         description,
//         price,
//         category,
//         images,
//         isApproved: true,
//         shopOwner: req.user._id, // Use req.user instead of req.shopOwner
//       });
//       await product.save();
//       res.status(201).json({ message: "Product added successfully", product });
//     } catch (error) {
//       res
//         .status(400)
//         .json({ message: "Error adding product", error: error.message });
//     }
//   },
// ];

// // Get products for the logged-in shop owner
// exports.getAllProducts = async (req, res) => {
//   try {
//     const products = await Product.find({ shopOwner: req.user._id });
//     res.status(200).json(products);
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Error fetching products", error: error.message });
//   }
// };

// // Delete product
// exports.deleteProduct = async (req, res) => {
//   try {
//     const product = await Product.findOneAndDelete({
//       _id: req.params.id,
//       shopOwner: req.user._id,
//     });
//     if (!product) {
//       return res.status(404).json({
//         message: "Product not found or you're not authorized to delete it",
//       });
//     }
//     res.status(200).json({ message: "Product deleted successfully" });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Error deleting product", error: error.message });
//   }
// };

// // Update product
// exports.updateProduct = [
//   upload.array("images", 5),
//   async (req, res) => {
//     try {
//       const { name, description, price, category } = req.body;
//       let updateData = { name, description, price, category };
//       if (req.files && req.files.length > 0) {
//         const newImages = req.files.map((file) => file.path);
//         updateData.images = newImages;
//       }
//       const product = await Product.findOneAndUpdate(
//         { _id: req.params.id, shopOwner: req.user._id },
//         updateData,
//         { new: true }
//       );
//       if (!product) {
//         return res.status(404).json({
//           message: "Product not found or you're not authorized to update it",
//         });
//       }
//       res.status(200).json(product);
//     } catch (error) {
//       res
//         .status(500)
//         .json({ message: "Error updating product", error: error.message });
//     }
//   },
// ];
////////////////////////////////////////////////////

// productController.js
const Product = require("../models/Product");
const multer = require("multer");
const path = require("path");
const fs = require("fs").promises;

// Configure multer for file upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage: storage });

// Add product
/////////////////

exports.addProduct = [
  upload.array("images", 5),
  async (req, res) => {
    try {
      if (req.userType !== "shopOwner") {
        return res.status(403).json({ 
          message: "Only shop owners can add products" 
        });
      }

      const { name, description, price, category } = req.body;
      const images = req.files.map((file) => file.path);

      const product = new Product({
        name,
        description,
        price: parseFloat(price),
        category,
        images,
        isApproved: true,
        shopOwner: req.user._id,
        shopOwnerName: req.user.ownerName  // استخدام ownerName من req.user
      });

      const savedProduct = await product.save();
      
      res.status(201).json({ 
        message: "Product added successfully", 
        product: savedProduct 
      });
    } catch (error) {
      console.error('Product creation error:', error);
      res.status(400).json({ 
        message: "Error adding product", 
        error: error.message 
      });
    }
  },
];
/////////////
// Get products for the logged-in shop owner
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({ shopOwner: req.user._id });
    res.status(200).json(products);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching products", error: error.message });
  }
};

// Delete product
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findOne({
      _id: req.params.id,
      shopOwner: req.user._id,
    });
    if (!product) {
      return res.status(404).json({
        message: "Product not found or you're not authorized to delete it",
      });
    }
    // Delete associated images
    for (const imagePath of product.images) {
      await fs
        .unlink(imagePath)
        .catch((err) => console.error("Error deleting file:", err));
    }
    await Product.deleteOne({ _id: req.params.id });
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting product", error: error.message });
  }
};

// Update product
exports.updateProduct = [
  upload.array("images", 5),
  async (req, res) => {
    try {
      const { name, description, price, category } = req.body;
      let updateData = { name, description, price, category };

      const product = await Product.findOne({
        _id: req.params.id,
        shopOwner: req.user._id,
      });

      if (!product) {
        return res.status(404).json({
          message: "Product not found or you're not authorized to update it",
        });
      }

      // Handle existing images
      const existingImages = Array.isArray(req.body.existingImages)
        ? req.body.existingImages
        : req.body.existingImages
        ? [req.body.existingImages]
        : [];

      // Delete removed images
      for (const imagePath of product.images) {
        if (!existingImages.includes(path.basename(imagePath))) {
          await fs
            .unlink(imagePath)
            .catch((err) => console.error("Error deleting file:", err));
        }
      }

      updateData.images = existingImages.map(
        (filename) => `uploads/${filename}`
      );

      // Add new images
      if (req.files && req.files.length > 0) {
        const newImages = req.files.map((file) => file.path);
        updateData.images = [...updateData.images, ...newImages];
      }

      const updatedProduct = await Product.findOneAndUpdate(
        { _id: req.params.id, shopOwner: req.user._id },
        updateData,
        { new: true }
      );

      res.status(200).json(updatedProduct);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error updating product", error: error.message });
    }
  },
];
