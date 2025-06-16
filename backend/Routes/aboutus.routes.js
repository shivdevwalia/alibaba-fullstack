const express = require("express");
const aboutUsRouter = express.Router();
const { AboutUsModel } = require("../model/AboutUs.model");
const { authenticate } = require("../middlewares/middlewares");

aboutUsRouter.get("/", async (req, res) => {
  try {
    const about = await AboutUsModel.findOne();

    if (!about) {
      return res.status(404).json({ msg: "About Us content not found." });
    }
    res.status(200).json(about);
  } catch (err) {
    res.status(500).json({ msg: "Failed to fetch About Us", error: err });
  }
});

aboutUsRouter.patch("/:id", authenticate, async (req, res) => {
  if (req.role !== "admin") {
    return res.status(403).json({ msg: "Access denied" });
  }

  try {
    const updated = await AboutUsModel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ msg: "About Us entry not found" });
    }

    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ msg: "Failed to update About Us", error: err });
  }
});

module.exports = { aboutUsRouter };
