const express = require("express");
const { OrderModel } = require("../model/Order.model");
const { ProductModel } = require("../model/Product.model");
const { CartModel } = require("../model/cart.model");
const { authenticate } = require("../middlewares/middlewares");
const { UserModel } = require("../model/User.model");
const orderRouter = express.Router();

orderRouter.post("/place", authenticate, async (req, res) => {

  try {
    const { orderItems, totalAmount } = req.body;
    const userId = req.userId;

    

    if (!orderItems || orderItems.length === 0) {
      return res.status(400).json({ msg: "No order items provided" });
    }

    for (const item of orderItems) {
      const product = await ProductModel.findById(item.product);
      if (!product) {
        return res.status(404).json({ msg: "Product not found" });
      }
      if (product.stock < item.qty) {
        return res.status(400).json({
          msg: `Insufficient stock for "${product.name}". Available: ${product.stock}`,
        });
      }
    }

    const newOrder = new OrderModel({
      user: userId,
      orderItems,
      totalAmount,
    });

    await newOrder.save();

    // ✅ Update stock for each product
    for (const item of orderItems) {
      const product = await ProductModel.findById(item.product);
      product.stock = Math.max(0, product.stock - item.qty);
      await product.save();
    }

    const deleteResult = await CartModel.deleteMany({ user: userId });
   

    res.status(201).json({ msg: "Order placed successfully", order: newOrder });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Failed to place order" });
  }
});

orderRouter.get("/", authenticate, async (req, res) => {
  try {
    if (req.role !== "admin") {
      return res.status(403).json({ msg: "Access denied: Admins only" });
    }

    const orders = await OrderModel.find()
      .populate("user", "name email")
      .populate("orderItems.product", "name price");

    res.status(200).json({ orders });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Failed to fetch orders" });
  }
});

module.exports = { orderRouter };
