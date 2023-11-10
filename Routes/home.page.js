const express = require("express");

const homePageRoute = express.Router();

homePageRoute.post("/", (req, res) => {
  res.send("Home page");
});

module.exports = { homePageRoute };
