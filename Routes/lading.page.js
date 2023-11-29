const express = require("express");
const {
  isAuthenticated,
} = require("../Utility handlers/authentication.util.handlers");

const landingPageRoute = express.Router();

landingPageRoute.get("/", (req, res) => {
  console.log(req.user);
});

module.exports = landingPageRoute;
