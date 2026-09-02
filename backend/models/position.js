const { Schema, default: mongoose } = require("mongoose");

const positionSchema = new Schema({
  product: String,
  name: String,
  qty: Number,
  avg: Number,
  price: Number,
  net: String,
  day: String,
  isLoss: Boolean,
});

const position = mongoose.model("position", positionSchema);
module.exports = { position };
