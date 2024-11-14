// // const Report = require("../models/Report");

// // exports.getAllReports = async (req, res) => {
// //   try {
// //     const reports = await Report.find().populate("reporter_id", "username");
// //     res.json(reports);
// //   } catch (error) {
// //     res
// //       .status(500)
// //       .json({ message: "Error fetching reports", error: error.message });
// //   }
// // };

// // exports.createReport = async (req, res) => {
// //   try {
// //     const { comment_id, reporter_id, reason, description } = req.body;
// //     const newReport = new Report({
// //       comment_id,
// //       reporter_id,
// //       reason,
// //       description,
// //     });
// //     await newReport.save();
// //     res.status(201).json(newReport);
// //   } catch (error) {
// //     res
// //       .status(400)
// //       .json({ message: "Error creating report", error: error.message });
// //   }
// // };

// // exports.updateReportStatus = async (req, res) => {
// //   try {
// //     const { id } = req.params;
// //     const { status } = req.body;
// //     const updatedReport = await Report.findByIdAndUpdate(
// //       id,
// //       { status },
// //       { new: true }
// //     );
// //     if (!updatedReport) {
// //       return res.status(404).json({ message: "Report not found" });
// //     }
// //     res.json(updatedReport);
// //   } catch (error) {
// //     res
// //       .status(400)
// //       .json({ message: "Error updating report status", error: error.message });
// //   }
// // };
// ////////////////
// const Report = require("../models/Report");
// const Comment = require("../models/Comment");

// exports.getAllReports = async (req, res) => {
//   try {
//     const reports = await Report.find().populate("reporter_id", "username");
//     res.json(reports);
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Error fetching reports", error: error.message });
//   }
// };

// exports.createReport = async (req, res) => {
//   try {
//     const { comment_id, reporter_id, reason, description } = req.body;
//     const newReport = new Report({
//       comment_id,
//       reporter_id,
//       reason,
//       description,
//     });
//     await newReport.save();
//     res.status(201).json(newReport);
//   } catch (error) {
//     res
//       .status(400)
//       .json({ message: "Error creating report", error: error.message });
//   }
// };

// exports.updateReportStatus = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { status } = req.body;
//     const updatedReport = await Report.findByIdAndUpdate(
//       id,
//       { status },
//       { new: true }
//     );
//     if (!updatedReport) {
//       return res.status(404).json({ message: "Report not found" });
//     }
//     res.json(updatedReport);
//   } catch (error) {
//     res
//       .status(400)
//       .json({ message: "Error updating report status", error: error.message });
//   }
// };

// exports.deleteComment = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const comment = await Comment.findById(id);
//     if (!comment) {
//       return res.status(404).json({ message: "Comment not found" });
//     }
//     comment.is_deleted = true;
//     await comment.save();

//     // Update all reports associated with this comment
//     await Report.updateMany({ comment_id: id }, { status: "resolved" });

//     res.json({
//       message: "Comment marked as deleted and reports resolved successfully",
//     });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Error deleting comment", error: error.message });
//   }
// };
///////////////////////////

const Report = require("../models/Report");
const Comment = require("../models/Comment");

exports.getAllReports = async (req, res) => {
  try {
    console.log("Report model:", Report);
    if (!Report || typeof Report.find !== "function") {
      throw new Error("Report model is not properly defined or imported");
    }
    const reports = await Report.find()
      .populate("reporter_id", "username")
      .populate({
        path: "comment_id",
        select: "comment_text user_id",
        populate: { path: "user_id", select: "username" },
      });
    res.json(reports);
  } catch (error) {
    console.error("Error in getAllReports:", error);
    res.status(500).json({
      message: "Error fetching reports",
      error: error.message,
      stack: process.env.NODE_ENV === "production" ? "🥞" : error.stack,
    });
  }
};

exports.createReport = async (req, res) => {
  try {
    const { comment_id, reporter_id, reason, description } = req.body;
    const newReport = new Report({
      comment_id,
      reporter_id,
      reason,
      description,
    });
    await newReport.save();
    res.status(201).json(newReport);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error creating report", error: error.message });
  }
};

exports.updateReportStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const updatedReport = await Report.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );
    if (!updatedReport) {
      return res.status(404).json({ message: "Report not found" });
    }
    res.json(updatedReport);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error updating report status", error: error.message });
  }
};

exports.deleteComment = async (req, res) => {
  try {
    const { id } = req.params;

    // Delete the comment
    const deletedComment = await Comment.findByIdAndDelete(id);
    if (!deletedComment) {
      return res.status(404).json({ message: "Comment not found" });
    }

    // Delete all reports associated with this comment
    await Report.deleteMany({ comment_id: id });

    // If the deleted comment was a reply, remove it from the parent comment's replies array
    if (deletedComment.parent_comment_id) {
      await Comment.findByIdAndUpdate(deletedComment.parent_comment_id, {
        $pull: { replies: id },
      });
    }

    // Delete all reply comments
    await Comment.deleteMany({ parent_comment_id: id });

    res.json({
      message: "Comment and associated reports deleted successfully",
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting comment", error: error.message });
  }
};
