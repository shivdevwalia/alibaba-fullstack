const mongoose = require("mongoose");

function removeLinks(input) {
  if (!input || typeof input !== "string") return input;
  return input
    .replace(/https?:\/\/[^\s]+/gi, "") // Remove http/https links
    .replace(/www\.[^\s]+/gi, ""); // Remove www. links
}

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
      set: removeLinks, // Sanitize name
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      set: removeLinks, // Sanitize email
    },
    phone: {
      type: String,
      trim: true,
      maxlength: 20,
      set: removeLinks, // Sanitize phone
    },
    message: {
      type: String,
      required: true,
      trim: true,
      maxlength: 2000,
      set: removeLinks, // Sanitize message
    },
  },
  { timestamps: true }
);

const ContactModel = mongoose.model("Contact", contactSchema);
module.exports = { ContactModel };
