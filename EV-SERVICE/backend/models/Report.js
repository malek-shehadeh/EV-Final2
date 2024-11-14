// //////////////////////////////////////////////////////////////////////
// const mongoose = require("mongoose");

// // Update the Report schema
// const ReportSchema = new mongoose.Schema({
//   comment_id: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Comment",
//     required: true,
//   },
//   reporter_id: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "User",
//     required: true,
//   },
//   reason: {
//     type: String,
//     required: true,
//     enum: ["spam", "offensive", "inappropriate", "other"],
//   },
//   description: {
//     type: String,
//     required: true,
//   },
//   status: {
//     type: String,
//     enum: ["pending", "reviewed", "resolved"],
//     default: "pending",
//   },
//   created_at: { type: Date, default: Date.now },
// });

// const Report = mongoose.model("Report", ReportSchema);
///////
const mongoose = require("mongoose");

const ReportSchema = new mongoose.Schema({
  comment_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comment",
    required: true,
  },
  reporter_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  reason: {
    type: String,
    required: true,
    enum: ["spam", "offensive", "inappropriate", "other"],
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "reviewed", "resolved"],
    default: "pending",
  },
  created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Report", ReportSchema);
