const mongoose = require("mongoose");
require("dotenv").config(); 
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/alibaba";
const connection = mongoose.connect(MONGO_URI);

module.exports = {
  connection,
};