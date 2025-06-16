const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
  qty: { type: Number },
});

const CartModel = mongoose.model("cart", cartSchema);

module.exports = { CartModel };
