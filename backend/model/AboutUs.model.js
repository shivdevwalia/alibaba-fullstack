const mongoose = require("mongoose");

const AboutUsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    mission: {
      type: String,
    },
  },
  { timestamps: true }
);
const AboutUsModel = mongoose.model("AboutUs", AboutUsSchema);
module.exports = { AboutUsModel };
