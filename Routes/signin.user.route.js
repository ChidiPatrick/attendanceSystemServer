const express = require("express");

const bodyParser = require("body-parser");
const session = require("express-session");
const passport = require("passport");
const crypto = require("crypto");
const LocalStrategy = require("passport-local").Strategy;
const userModel = require("../Models/Signup/signup.model");

const {
  verifyFunction,
  loginUser,
} = require("../Controllers/login.controller");

const signInRoute = express.Router();

const secretKey = crypto.randomBytes(32);

signInRoute.use(
  session({
    secret: secretKey,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60 * 60 * 1000 },
  })
);

passport.use(new LocalStrategy(verifyFunction));

// Passport configuration
signInRoute.use(passport.initialize());
signInRoute.use(passport.session());

passport.use(userModel.createStrategy());

passport.serializeUser(userModel.serializeUser());
passport.deserializeUser(userModel.deserializeUser());

signInRoute.post("/", express.json(), loginUser);

module.exports = signInRoute;
