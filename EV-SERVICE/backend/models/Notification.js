const mongoose = require("mongoose");

const NotificationSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  product_id: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
  message: { type: String, required: true },
  comment_id: { type: mongoose.Schema.Types.ObjectId, ref: "Comment" },
  created_at: { type: Date, default: Date.now },
  read: { type: Boolean, default: false },
});

module.exports = mongoose.model("Notification", NotificationSchema);
