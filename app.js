const express = require("express");

const app = express();

const { signupRoute } = require("./Routes/Signup Route/signup.route");

app.use("/signupUser", signupRoute);

module.exports = { app };
