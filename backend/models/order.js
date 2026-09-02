const { Schema, default: mongoose } = require("mongoose");

const orderSchema = new Schema({
  name: String,
  qty: Number,
  price: Number,
  mode: String,
});


const order = mongoose.model("order", orderSchema);
module.export = { orderSchema };
