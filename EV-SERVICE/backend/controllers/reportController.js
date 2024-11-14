// const Report = require("../models/Report");
// const Comment = require("../models/Comment");

// exports.createReport = async (req, res) => {
//   const { comment_id, reason, description } = req.body;
//   const reporter_id = req.user._id;

//   try {
//     const comment = await Comment.findById(comment_id);
//     if (!comment) {
//       return res.status(404).json({ error: "Comment not found" });
//     }

//     const newReport = new Report({
//       comment_id,
//       reporter_id,
//       reason,
//       description,
//     });

//     await newReport.save();

//     res.status(201).json(newReport);
//   } catch (error) {
//     console.error("Error creating report:", error);
//     res
//       .status(500)
//       .json({ error: "An error occurred while creating the report" });
//   }
// };

// exports.getReports = async (req, res) => {
//   try {
//     const reports = await Report.find()
//       .populate("comment_id", "comment_text")
//       .populate("reporter_id", "username")
//       .sort({ created_at: -1 });

//     res.json(reports);
//   } catch (error) {
//     console.error("Error fetching reports:", error);
//     res.status(500).json({ error: "An error occurred while fetching reports" });
//   }
// };

// exports.updateReportStatus = async (req, res) => {
//   const { report_id } = req.params;
//   const { status } = req.body;

//   try {
//     const report = await Report.findByIdAndUpdate(
//       report_id,
//       { status },
//       { new: true }
//     );

//     if (!report) {
//       return res.status(404).json({ error: "Report not found" });
//     }

//     res.json(report);
//   } catch (error) {
//     console.error("Error updating report status:", error);
//     res
//       .status(500)
//       .json({ error: "An error occurred while updating the report status" });
//   }
// };
/////////////////////////////
///////////
// /////////////////////////////
// const Report = require("../models/Report");
// const Comment = require("../models/Comment");

// exports.createReport = async (req, res) => {
//   const { comment_id, reason, description } = req.body;
//   const reporter_id = req.user._id; // Assuming the user ID is set by the auth middleware

//   try {
//     const comment = await Comment.findById(comment_id);
//     if (!comment) {
//       return res.status(404).json({ error: "Comment not found" });
//     }

//     // Check if the user is trying to report their own comment
//     if (comment.user_id.toString() === reporter_id.toString()) {
//       return res
//         .status(403)
//         .json({ error: "You cannot report your own comment" });
//     }

//     // Check if the user has already reported this comment
//     const existingReport = await Report.findOne({ comment_id, reporter_id });
//     if (existingReport) {
//       return res
//         .status(400)
//         .json({ error: "You have already reported this comment" });
//     }

//     const newReport = new Report({
//       comment_id,
//       reporter_id,
//       reason,
//       description,
//     });
//     await newReport.save();
//     res.status(201).json(newReport);
//   } catch (error) {
//     console.error("Error creating report:", error);
//     res
//       .status(500)
//       .json({ error: "An error occurred while creating the report" });
//   }
// };

// exports.getReports = async (req, res) => {
//   try {
//     const reports = await Report.find()
//       .populate("comment_id", "comment_text")
//       .populate("reporter_id", "username")
//       .sort({ created_at: -1 });
//     res.json(reports);
//   } catch (error) {
//     console.error("Error fetching reports:", error);
//     res.status(500).json({ error: "An error occurred while fetching reports" });
//   }
// };

// exports.updateReportStatus = async (req, res) => {
//   const { report_id } = req.params;
//   const { status } = req.body;
//   try {
//     const report = await Report.findByIdAndUpdate(
//       report_id,
//       { status },
//       { new: true }
//     );
//     if (!report) {
//       return res.status(404).json({ error: "Report not found" });
//     }
//     res.json(report);
//   } catch (error) {
//     console.error("Error updating report status:", error);
//     res
//       .status(500)
//       .json({ error: "An error occurred while updating the report status" });
//   }
// };
////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////
// exports.createReport = async (req, res) => {
//   const { comment_id, reason, description } = req.body;
//   const reporter_id = req.user._id; // Assuming the user ID is set by the auth middleware

//   try {
//     let comment = await Comment.findById(comment_id);
//     if (!comment) {
//       // If not found as a main comment, check if it's a reply
//       comment = await Comment.findOne({ "replies._id": comment_id });
//       if (!comment) {
//         return res.status(404).json({ error: "Comment not found" });
//       }
//       // If it's a reply, find the specific reply
//       comment = comment.replies.id(comment_id);
//     }

//     // Check if the user is trying to report their own comment
//     if (comment.user_id.toString() === reporter_id.toString()) {
//       return res
//         .status(403)
//         .json({ error: "You cannot report your own comment" });
//     }

//     // Check if the user has already reported this comment
//     const existingReport = await Report.findOne({ comment_id, reporter_id });
//     if (existingReport) {
//       return res
//         .status(400)
//         .json({ error: "You have already reported this comment" });
//     }

//     const newReport = new Report({
//       comment_id,
//       reporter_id,
//       reason,
//       description,
//     });
//     await newReport.save();
//     res.status(201).json(newReport);
//   } catch (error) {
//     console.error("Error creating report:", error);
//     res
//       .status(500)
//       .json({ error: "An error occurred while creating the report" });
//   }
// };
////////////////
const mongoose = require("mongoose");

const Report = require("../models/Report");
const Comment = require("../models/Comment");

exports.createReport = async (req, res) => {
  const { comment_id, reason, description } = req.body;
  const reporter_id = req.user._id;

  try {
    // Verify that the Report model is properly loaded
    if (!Report || typeof Report.findOne !== "function") {
      throw new Error("Report model is not properly initialized");
    }

    let comment = await Comment.findById(comment_id);
    if (!comment) {
      comment = await Comment.findOne({ "replies._id": comment_id });
      if (!comment) {
        return res.status(404).json({ error: "Comment not found" });
      }
      comment = comment.replies.id(comment_id);
    }

    if (comment.user_id.toString() === reporter_id.toString()) {
      return res
        .status(403)
        .json({ error: "You cannot report your own comment" });
    }

    const existingReport = await Report.findOne({ comment_id, reporter_id });
    if (existingReport) {
      return res
        .status(400)
        .json({ error: "You have already reported this comment" });
    }

    const newReport = new Report({
      comment_id,
      reporter_id,
      reason,
      description,
    });

    await newReport.save();
    res.status(201).json(newReport);
  } catch (error) {
    console.error("Error creating report:", error);
    res.status(500).json({
      error: "An error occurred while creating the report",
      details: error.message,
    });
  }
};

/////////////
exports.getReports = async (req, res) => {
  try {
    const reports = await Report.find()
      .populate("comment_id", "comment_text")
      .populate("reporter_id", "username")
      .sort({ created_at: -1 });
    res.json(reports);
  } catch (error) {
    console.error("Error fetching reports:", error);
    res.status(500).json({ error: "An error occurred while fetching reports" });
  }
};

exports.updateReportStatus = async (req, res) => {
  const { report_id } = req.params;
  const { status } = req.body;
  try {
    const report = await Report.findByIdAndUpdate(
      report_id,
      { status },
      { new: true }
    );
    if (!report) {
      return res.status(404).json({ error: "Report not found" });
    }
    res.json(report);
  } catch (error) {
    console.error("Error updating report status:", error);
    res
      .status(500)
      .json({ error: "An error occurred while updating the report status" });
  }
};
