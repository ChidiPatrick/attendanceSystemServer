const express = require("express");
const crypto = require("crypto");

const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const userModel = require("./Models/Signup/signup.model");

const app = express();

passport.use(userModel.createStrategy());

app.set("env", "development");
const secret = crypto.randomBytes(32);

console.log(secret.toString("hex"));

passport.serializeUser(userModel.serializeUser());
passport.deserializeUser(userModel.deserializeUser());

const { signupRoute } = require("./Routes/signup.route");
const signInRoute = require("./Routes/signin.user.route");

app.use("/signupUser", signupRoute);
app.use("/signinUser", signInRoute);

module.exports = { app };
