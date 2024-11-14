// const mongoose = require("mongoose");

// const productSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   description: { type: String, required: true },
//   price: { type: Number, required: true },
//   category: { type: String, required: true },
//   images: [{ type: String }],
//   isApproved: { type: Boolean, default: true },
// });

// module.exports = mongoose.model("Product", productSchema);
//////////
// const mongoose = require("mongoose");

// const productSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   description: { type: String, required: true },
//   price: { type: Number, required: true },
//   category: { type: String, required: true },
//   images: [{ type: String }],
//   isApproved: { type: Boolean, default: true },
//   shopOwner: { type: mongoose.Schema.Types.ObjectId, ref: "ShopOwner" },
// });

// module.exports = mongoose.model("Product", productSchema);
// /////////////////////
// const mongoose = require("mongoose");

// const productSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   description: { type: String, required: true },
//   price: { type: Number, required: true },
//   category: { type: String, required: true },
//   images: [{ type: String }],
//   isApproved: { type: Boolean, default: true },
//   isDeletedAdmin: { type: Boolean, default: false },
//   shopOwner: { type: mongoose.Schema.Types.ObjectId, ref: "ShopOwner" },
// });

// module.exports = mongoose.model("Product", productSchema);
/////////////////////////

const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },
  description: { 
    type: String, 
    required: true 
  },
  price: { 
    type: Number, 
    required: true 
  },
  category: { 
    type: String, 
    required: true 
  },
  images: [{ 
    type: String 
  }],
  isApproved: { 
    type: Boolean, 
    default: true 
  },
  isDeletedAdmin: { 
    type: Boolean, 
    default: false 
  },
  shopOwner: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "ShopOwner",
    required: true
  },
  shopOwnerName: { 
    type: String,
    required: true 
  }
});

module.exports = mongoose.model("Product", productSchema);