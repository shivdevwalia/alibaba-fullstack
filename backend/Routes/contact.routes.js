const express = require("express");
const contactRouter = express.Router();

const { ContactModel } = require("../model/Contact.model");

const {
  sendUserConfirmationEmail,
  sendAdminNotificationEmail,
} = require("../services/emailService");

const RECAPTCHA_SECRET = process.env.RECAPTCHA_SECRET;

contactRouter.post("/", async (req, res) => {
  try {
    const { name, email, phone, message, token } = req.body;

    if (!name || !email || !message || !token) {
      return res
        .status(400)
        .json({ message: "Name, email, token  and message are required." });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format." });
    }
    const captchaRes = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `secret=${RECAPTCHA_SECRET}&response=${token}`,
      }
    );

    const captchaData = await captchaRes.json();

    if (!captchaData.success || captchaData.score < 0.5) {
      return res.status(400).json({ message: "CAPTCHA verification failed." });
    }
    const newContact = new ContactModel({ name, email, phone, message });
    const savedContact = await newContact.save();

    await sendUserConfirmationEmail(email, name);
    await sendAdminNotificationEmail({ name, email, phone, message });

    res
      .status(201)
      .json({ message: "Message received!", contact: savedContact });
  } catch (err) {
    console.error("Contact form error:", err);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
});

module.exports = { contactRouter };
