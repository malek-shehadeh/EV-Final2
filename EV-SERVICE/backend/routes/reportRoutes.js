const express = require("express");
const router = express.Router();
const reportController = require("../controllers/reportController");
const protect = require("../middlewares/auth");

router.post("/", protect, reportController.createReport);
router.get("/", protect, reportController.getReports);
router.put("/:report_id", protect, reportController.updateReportStatus);

module.exports = router;
