const { CartModel } = require("../model/cart.model");
const express = require("express");
const cartRouter = express.Router();
const { authenticate } = require("../middlewares/middlewares");

cartRouter.get("/", authenticate, async (req, res) => {
  const userId = req.userId;

  try {
    const cartItems = await CartModel.find({ user: userId }).populate(
      "productId"
    );
    res.json(cartItems);
  } catch (err) {
    res.send({ error: err.message });
  }
});

cartRouter.post("/add", authenticate, async (req, res) => {
  const userId = req.userId;

  const { productId, qty = 1 } = req.body;
  try {
    let existing = await CartModel.findOne({ user: userId, productId });
    if (existing) {
      let newQty = existing.qty + 1;
      await CartModel.findOneAndUpdate(
        { user: userId, productId },
        { qty: newQty }
      );
      res.send("cart updated");
    } else {
      const newCartItem = new CartModel({
        user: userId,
        productId: productId,
        qty: qty,
      });

      await newCartItem.save();
      res.send("item added to cart");
    }
  } catch (err) {
    res.send({ error: err.message });
  }
});

cartRouter.patch("/update/:id", authenticate, async (req, res) => {
  const userId = req.userId;
  const productId = req.params.id;
  const payload = req.body;

  try {
    await CartModel.findOneAndUpdate({ user: userId, productId }, payload);
    res.send(`product with id ${productId} has been updated`);
  } catch (err) {
    res.send({ error: err.message });
  }
});

cartRouter.delete("/delete/:id", authenticate, async (req, res) => {
  const userId = req.userId;
  const productId = req.params.id;

  try {
    await CartModel.findOneAndDelete({ user: userId, productId });
    res.send(`item with id ${productId} deleted`);
  } catch (err) {
    res.send({ error: err.message });
  }
});

module.exports = { cartRouter };
