const mongoose = require("mongoose");

const shopOwnerSchema = new mongoose.Schema({
  ownerName: { type: String, required: true },
  shopPhone: { type: String, required: true },
  shopLocation: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  licenseCertificate: { type: String, required: true }, // This will store the file path
  isApproved: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("ShopOwner", shopOwnerSchema);
