const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema({
  orderNo: { type: String, required: true },
  foodItem: { type: String, required: true },
  price: { type: String, required: true },
  quantity: { type: String, required: true }
});

module.exports = mongoose.model("Order", orderSchema);
