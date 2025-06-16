const express = require("express");
const userRouter = express.Router();
const { UserModel } = require("../model/User.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { authenticate } = require("../middlewares/middlewares");
const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

userRouter.get("/user", authenticate, async (req, res) => {
  const userId = req.userId;

  try {
    const user = await UserModel.findById(userId);

    if (!user) {
      return res.send("user not found");
    }

    res.json(user);
  } catch (err) {
    res.send({ error: err.message });
  }
});

userRouter.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existing = await UserModel.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hash = await bcrypt.hash(password, 5);

    const user = new UserModel({
      name,
      email,
      password: hash,
      role: "user",
    });

    await user.save();
    res.send({ message: "user registered" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Registration failed", error: error.message });
  }
});

// userRouter.post("/login", async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await UserModel.findOne({ email });
//     if (!user) {
//       return res.status(401).json({ message: "Invalid email or password" });
//     }
//     const match = await bcrypt.compare(password, user.password);
//     if (!match) {
//       return res.status(401).json({ message: "Invalid email or password" });
//     }

//     const token = jwt.sign(
//       { userId: user._id, role: user.role },
//       process.env.TOKEN_SALT
//     );
//     res.send({ msg: "Logged in", token: token, user: user.name, role: user.role });
//   } catch (err) {
//     res.status(500).json({ message: "Login failed", error: err.message });
//   }
// });

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email });
    if (!user || !user.password) {
      // Either no user found or user has no password (e.g., Google login only)
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.TOKEN_SALT
    );
    res.send({
      msg: "Logged in",
      token: token,
      user: user.name,
      role: user.role,
    });
  } catch (err) {
    res.status(500).json({ message: "Login failed", error: err.message });
  }
});

userRouter.post("/forgotpassword", async (req, res) => {
  const { email, password, newPassword } = req.body;

  try {
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "Email not found" });
    }

    if (user.authProvider === "google") {
      return res
        .status(403)
        .json({ message: "Google users can't reset password" });
    }
    if (password !== newPassword) {
      return res.status(401).json({ message: "Password must match" });
    }
    const hash = await bcrypt.hash(password, 5);
    await UserModel.findOneAndUpdate({ email: email }, { password: hash });
    res.send({ message: "Password updated successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to update password", error: err.message });
  }
});

userRouter.post("/google-login", async (req, res) => {
  const { idToken } = req.body;

  try {
    const ticket = await client.verifyIdToken({
      idToken,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    const { email, name } = payload;

    let user = await UserModel.findOne({ email });

    if (!user) {
      user = new UserModel({
        name,
        email,
        password: "",
        role: "user",
        authProvider: "google",
      });

      await user.save();
    }

    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.TOKEN_SALT
    );

    res.send({
      msg: "Google login success",
      token,
      user: user.name,
      role: user.role,
    });
  } catch (err) {
    res
      .status(401)
      .json({ message: "Google login failed", error: err.message });
  }
});

module.exports = { userRouter };
