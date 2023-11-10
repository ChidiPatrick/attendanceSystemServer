const express = require("express");

const failurePage = express.Router();

failurePage.post("/", (req, res) => {
  res.send("You're in the failure page");
});

module.exports = { failurePage };
