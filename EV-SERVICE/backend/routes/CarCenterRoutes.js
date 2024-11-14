const express = require("express");
const router = express.Router();
const carCenterController = require("../controllers/CarCenterController");

router.get("/nearest", carCenterController.getNearestCarCenters);
router.post("/add", carCenterController.addCarCenter);
router.post("/maintenance/add", carCenterController.addMaintenanceCenter);

module.exports = router;
