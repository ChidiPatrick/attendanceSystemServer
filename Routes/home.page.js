const express = require("express");
const passport = require("passport");

const homePageRoute = express.Router();

homePageRoute.get("/", (req, res) => {
  console.log(req.session);
  res.send("Home page");
});

module.exports = { homePageRoute };
