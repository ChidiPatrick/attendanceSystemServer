const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const userModel = require("../Models/Signup/signup.model");

const loginRoute = express.Router();

const secretKey = crypto.randomBytes(32);

loginRoute.post("/", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const validpassword = await bcrypt.compare(password, user.password);

    if (!validpassword) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const token = jwt.sign({ userId: user._id }, secretKey);
    console.log(token);

    res.status(200).json([token]);
    // res.cookie = express.json({ token });
    // console.log(res);
    // res.redirect("/success");
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error logging in" });
  }
});

module.exports = loginRoute;
