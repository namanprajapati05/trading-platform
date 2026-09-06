const { Schema, default: mongoose } = require("mongoose");

const orderSchema = new Schema({

    userId: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },

  name: {
    type: String,
    required: true,
  },

  qty: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  orderType: {
    type: String,
    enum: ["market", "limit"],
    required: true,
  },

  mode: {
    type: String,
    enum: ["BUY", "SELL"],
    required: true,
  },
});

const Order = mongoose.model("order", orderSchema);
module.exports = { Order };
