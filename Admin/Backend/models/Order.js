const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  customer: {
    type: String,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Order", orderSchema);
