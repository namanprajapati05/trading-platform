const { Schema,  default: mongoose } = require("mongoose");

const holdingSchema = new Schema({
  name: String,
  qty: Number,
  avg: Number,
  price: Number,
  net: String,
  day: String,
});

const holding = mongoose.model("holding", holdingSchema);
module.exports = { holding };
