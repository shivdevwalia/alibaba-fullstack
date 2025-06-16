const express = require("express");
const adminRouter = express.Router();
const { ProductModel } = require("../model/Product.model");
const { authenticate } = require("../middlewares/middlewares");

const authAdmin = (req, res, next) => {
  if (req.role !== "admin") {
    res.send("access denied");
  } else {
    next();
  }
};

adminRouter.get("/", authenticate, authAdmin, async (req, res) => {
  try {
    const products = await ProductModel.find();
    res.json(products);
  } catch (err) {
    res.send({ error: err.message });
  }
});

adminRouter.post("/add", authenticate, authAdmin, async (req, res) => {
  try {
    const product = new ProductModel(req.body);
    await product.save();
    res.send("product added");
  } catch (err) {
    res.send({ error: err.message });
  }
});

adminRouter.patch("/update/:id", authenticate, authAdmin, async (req, res) => {
  const productId = req.params.id;
  try {
    await ProductModel.findByIdAndUpdate(productId, req.body);
    res.send(`Product with id ${productId} updated`);
  } catch (err) {
    res.send({ error: err.message });
  }
});

adminRouter.delete("/delete/:id", authenticate, authAdmin, async (req, res) => {
  const productId = req.params.id;
  try {
    const deletedProduct = await ProductModel.findByIdAndDelete(productId);
    if (!deletedProduct) {
      return res.status(404).send(`Product with id ${productId} not found`);
    }
    res.send(`Product with id ${productId} deleted`);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

module.exports = { adminRouter };
