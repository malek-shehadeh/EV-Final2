// // const mongoose = require("mongoose");

// // const CommentSchema = new mongoose.Schema({
// //   product_id: {
// //     type: mongoose.Schema.Types.ObjectId,
// //     ref: "Product",
// //     required: true,
// //   },
// //   user_id: {
// //     type: mongoose.Schema.Types.ObjectId,
// //     ref: "User",
// //     required: true,
// //   },
// //   parent_comment_id: { type: mongoose.Schema.Types.ObjectId, ref: "Comment" },
// //   comment_text: { type: String, required: true },
// //   created_at: { type: Date, default: Date.now },
// // });

// // module.exports = mongoose.model("Comment", CommentSchema);
// /////////////////
// const mongoose = require("mongoose");

// const CommentSchema = new mongoose.Schema({
//   product_id: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Product",
//     required: true,
//   },
//   user_id: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "User",
//     required: true,
//   },
//   parent_comment_id: { type: mongoose.Schema.Types.ObjectId, ref: "Comment" },
//   comment_text: { type: String, required: true },
//   is_deleted: { type: Boolean, default: false },
//   created_at: { type: Date, default: Date.now },
// });

// module.exports = mongoose.model("Comment", CommentSchema);
/////////////////

const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  product_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  parent_comment_id: { type: mongoose.Schema.Types.ObjectId, ref: "Comment" },
  comment_text: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  replies: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
});

module.exports = mongoose.model("Comment", CommentSchema);
