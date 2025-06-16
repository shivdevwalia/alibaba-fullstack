const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  images: [String],
  category: String,
  stock: Number,

  variants: [
    {
      attributes: {
        type: Map,
        of: String,
      },
      price: Number,
      stock: Number,
      sku: String,
    },
  ],

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const ProductModel = mongoose.model("Product", productSchema);

module.exports = { ProductModel };
