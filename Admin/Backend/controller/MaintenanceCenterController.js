const MaintenanceCenter = require("../models/MaintenanceCenter");

exports.addMaintenanceCenter = async (req, res) => {
  try {
    const {
      name,
      address,
      latitude,
      longitude,
      phone,
      website,
      services,
      specializations,
      openingHours,
    } = req.body;

    const newMaintenanceCenter = new MaintenanceCenter({
      name,
      address,
      location: {
        type: "Point",
        coordinates: [parseFloat(longitude), parseFloat(latitude)],
      },
      phone,
      website,
      services,
      specializations,
      openingHours,
    });

    await newMaintenanceCenter.save();
    res.status(201).json(newMaintenanceCenter);
  } catch (error) {
    console.error("Error in addMaintenanceCenter:", error);
    res.status(500).json({
      message: "Error adding maintenance center",
      error: error.message,
    });
  }
};
