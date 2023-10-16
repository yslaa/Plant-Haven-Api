const mongoose = require("mongoose");
const { RESOURCE } = require("../constants/index");

const transactionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "Please enter a user"],
    ref: RESOURCE.USER,
  },
  product: [
    {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "Please enter a product"],
      ref: RESOURCE.PRODUCT,
    },
  ],
  status: {
    type: String,
    enum: {
      values: ["pending", "paid", "not paid", "cancelled"],
    },
    default: "pending",
  },
  date: {
    type: Date,
    required: [true, "Please enter a date"],
  },
});

module.exports = mongoose.model(RESOURCE.TRANSACTION, transactionSchema);
