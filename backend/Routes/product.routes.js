const express = require("express");
const productRouter = express.Router();
const { ProductModel } = require("../model/Product.model");

productRouter.get("/", async (req, res) => {
  const { category, q, sort } = req.query;

  try {
    let filter = {};

    if (category) {
      filter.category = { $regex: category, $options: "i" };
    }

    if (q) {
      filter.name = { $regex: q, $options: "i" }; 
    }

    let sortOption = {};
    if (sort === "asc") {
      sortOption.price = 1;
    } else if (sort === "desc") {
      sortOption.price = -1;
    }

    const products = await ProductModel.find(filter).sort(sortOption);
    res.json(products);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

productRouter.get("/:id", async (req, res) => {
  try {
    const product = await ProductModel.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = { productRouter };
