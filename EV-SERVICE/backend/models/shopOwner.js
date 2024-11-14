// // const mongoose = require("mongoose");

// // const shopOwnerSchema = new mongoose.Schema({
// //   ownerName: { type: String, required: true },
// //   shopPhone: { type: String, required: true },
// //   shopLocation: { type: String, required: true },
// //   email: { type: String, required: true, unique: true },
// //   password: { type: String, required: true },
// //   licenseCertificate: { type: String, required: true }, // This will store the file path
// //   isApproved: { type: Boolean, default: false },
// //   createdAt: { type: Date, default: Date.now },
// // });

// // module.exports = mongoose.model("ShopOwner", shopOwnerSchema);
// ///////////////////////////////old top///////////////////////////////////////

// // const mongoose = require("mongoose");

// // const maintenanceShopSchema = new mongoose.Schema(
// //   {
// //     // Shop Owner fields
// //     ownerName: { type: String, required: true },
// //     shopPhone: { type: String, required: true },
// //     email: { type: String, required: true, unique: true },
// //     password: { type: String, required: true },
// //     licenseCertificate: { type: String, required: true }, // This will store the file path
// //     isApproved: { type: Boolean, default: false },

// //     // Maintenance Center fields
// //     name: { type: String, required: true },
// //     address: { type: String, required: true },
// //     location: {
// //       type: {
// //         type: String,
// //         enum: ["Point"],
// //         required: true,
// //       },
// //       coordinates: {
// //         type: [Number],
// //         required: true,
// //       },
// //     },
// //     website: { type: String },
// //     services: [String], // List of services offered
// //     specializations: [String], // Electric car brands or types they specialize in
// //     ratings: { type: Number, min: 0, max: 5, default: 0 }, // Average rating
// //     openingHours: { type: String }, // Can be enhanced to a more structured format if needed
// //   },
// //   { timestamps: true }
// // );

// // // Set up the geospatial index on the location field
// // maintenanceShopSchema.index({ location: "2dsphere" });

// // module.exports = mongoose.model("ShopOwner", maintenanceShopSchema);
// ///////////
// // maintenanceShopSchema.js
// const mongoose = require("mongoose");

// const maintenanceShopSchema = new mongoose.Schema(
//   {
//     // Shop Owner fields
//     ownerName: { type: String, required: true },
//     shopPhone: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
//     licenseCertificate: { type: String, required: true }, // This will store the file path
//     isApproved: { type: Boolean, default: false },
//     profilePicture: { type: String }, // New field for profile picture

//     // Maintenance Center fields
//     name: { type: String, required: true },
//     address: { type: String, required: true },
//     location: {
//       type: {
//         type: String,
//         enum: ["Point"],
//         required: true,
//       },
//       coordinates: {
//         type: [Number],
//         required: true,
//       },
//     },
//     website: { type: String },
//     services: [String], // List of services offered
//     specializations: [String], // Electric car brands or types they specialize in
//     ratings: { type: Number, min: 0, max: 5, default: 0 }, // Average rating
//     openingHours: { type: String }, // Can be enhanced to a more structured format if needed
//   },
//   { timestamps: true }
// );

// // Set up the geospatial index on the location field
// maintenanceShopSchema.index({ location: "2dsphere" });

// module.exports = mongoose.model("ShopOwner", maintenanceShopSchema);
///////////////////////////////
const mongoose = require("mongoose");

const maintenanceShopSchema = new mongoose.Schema(
  {
    // Shop Owner fields
    ownerName: {
      type: String,
      required: true,
    },
    shopPhone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    licenseCertificate: {
      type: String,
      required: true,
    },
    isApproved: {
      type: Boolean,
      default: false,
    },
    profilePicture: {
      type: String,
    },
    // Maintenance Center fields
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    location: {
      type: {
        type: String,
        enum: ["Point"],
        required: true,
      },
      coordinates: {
        type: [Number],
        required: true,
      },
    },
    website: {
      type: String,
    },
    services: [String],
    specializations: [String],
    ratings: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },
    openingHours: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// Set up the geospatial index
maintenanceShopSchema.index({ location: "2dsphere" });

module.exports = mongoose.model("ShopOwner", maintenanceShopSchema);
