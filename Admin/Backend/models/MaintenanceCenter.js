const mongoose = require("mongoose");

const maintenanceCenterSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    address: { type: String, required: true },
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
    phone: { type: String },
    website: { type: String },
    services: [String], // List of services offered
    specializations: [String], // Electric car brands or types they specialize in
    ratings: { type: Number, min: 0, max: 5, default: 0 }, // Average rating
    openingHours: { type: String }, // Can be enhanced to a more structured format if needed
  },
  { timestamps: true }
);

maintenanceCenterSchema.index({ location: "2dsphere" });

module.exports = mongoose.model("MaintenanceCenter", maintenanceCenterSchema);
