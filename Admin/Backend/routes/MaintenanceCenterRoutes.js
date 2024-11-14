const express = require("express");
const router = express.Router();
const MaintenanceCenterController = require("../controller/MaintenanceCenterController");

router.post(
  "/maintenance-centers",
  MaintenanceCenterController.addMaintenanceCenter
);

module.exports = router;
