//////
const express = require("express");
const router = express.Router();
const reportController = require("../controller/ReportadminController");

router.get("/", reportController.getAllReports);
router.post("/", reportController.createReport);
router.put("/:id", reportController.updateReportStatus);
router.delete("/comments/:id", reportController.deleteComment);

module.exports = router;
