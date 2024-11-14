// ////////////////////////////////
const CarCenter = require("../models/shopOwner");

exports.getNearestCarCenters = async (req, res, next) => {
  try {
    const { latitude, longitude } = req.query;

    if (!latitude || !longitude) {
      return res
        .status(400)
        .json({ message: "Latitude and longitude are required" });
    }

    console.log(
      `Searching for centers near latitude: ${latitude}, longitude: ${longitude}`
    );

    const nearestCarCenters = await CarCenter.aggregate([
      {
        $geoNear: {
          near: {
            type: "Point",
            coordinates: [parseFloat(longitude), parseFloat(latitude)],
          },
          distanceField: "distance",
          spherical: true,
          maxDistance: 50000, // 50km radius
        },
      },
      { $limit: 5 }, // Return the 5 nearest centers
    ]);

    console.log(`Found ${nearestCarCenters.length} centers`);

    res.json(nearestCarCenters);
  } catch (error) {
    console.error("Error in getNearestCarCenters:", error);
    next(error);
  }
};

//////////////////////////////

exports.addCarCenter = async (req, res, next) => {
  try {
    upload.single("profilePicture")(req, res, async function (err) {
      if (err instanceof multer.MulterError) {
        return res.status(400).json({ message: err.message });
      } else if (err) {
        return res.status(500).json({ message: err.message });
      }

      const { name, address, latitude, longitude, phone, website, ownerName } =
        req.body;

      const newCarCenter = new CarCenter({
        name,
        address,
        location: {
          type: "Point",
          coordinates: [parseFloat(longitude), parseFloat(latitude)],
        },
        phone,
        website,
        ownerName,
        profilePicture: req.file ? req.file.filename : null,
      });

      await newCarCenter.save();
      res.status(201).json(newCarCenter);
    });
  } catch (error) {
    console.error("Error in addCarCenter:", error);
    next(error);
  }
};

//////////////////////////////
///

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
        coordinates: [longitude, latitude],
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
    res.status(500).json({
      message: "Error adding maintenance center",
      error: error.message,
    });
  }
};
