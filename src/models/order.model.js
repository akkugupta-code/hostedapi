const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    user_first_name: {
      type: String,
      required: true,
    },
    user_last_name: {
      type: String,
      required: false,
    },
    user_email: {
      type: String,
      required: false,
    },
    user_phone_number: {
      type: Number,
      required: true,
    },
    user_cc: {
      type: String,
      required: true,
    },
    user_address: {
      type: String,
      required: true,
    },
    total_amount: {
      type: Number,
      required: true,
    },
    Books: [
      {
        book_id: String,
        Quantity: String,
        price: Number,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
