const express = require("express");

const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const userModel = require("./Models/Signup/signup.model");

const app = express();

passport.use(userModel.createStrategy());

passport.serializeUser(userModel.serializeUser());
passport.deserializeUser(userModel.deserializeUser());

const { signupRoute } = require("./Routes/Signup Route/signup.route");

app.use("/signupUser", signupRoute);

module.exports = { app };
