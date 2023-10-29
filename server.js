const https = require("https");
const fs = require("fs");

const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

// Local directory imports
const { app } = require("./app");

mongoose.connect(process.env.MONGOOSE_URI);

mongoose.connection.on("connected", () => {
  console.log("connected!!!!");
});

const PORT = process.env.PORT || 3000;

// Routing sections

https
  .createServer(
    {
      cert: fs.readFileSync("server.cert"),
      key: fs.readFileSync("server.key"),
    },
    app
  )
  .listen(PORT, () => {
    console.log("server setting complete..");
  });
