const https = require("https");
const fs = require("fs");

const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

mongoose.connect(process.env.MONGOOSE_URI);

mongoose.connection.on("connected", () => {
  console.log("connected!!!!");
});

const PORT = 3000;

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
