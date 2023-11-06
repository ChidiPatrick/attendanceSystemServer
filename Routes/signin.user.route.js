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

// passport.use(
//   new LocalStrategy(function (username, password, done) {
//     console.log("Verify function called!!");
//     // look for the user data
//     userModel.findOne({ username: username }, function (err, user) {
//       // if there is an error
//       if (err) {
//         console.log(err);
//         return done(err);
//       }
//       // if user doesn't exist
//       if (!user) {
//         console.log("User not found.");
//         return done(null, false, { message: "User not found." });
//       }
//       // if the password isn't correct
//       if (!user.verifyPassword(password)) {
//         console.log("Invalid password");
//         return done(null, false, {
//           message: "Invalid password.",
//         });
//       }
//       // if the user is properly authenticated
//       console.log("valid user");

//       return done(null, user);
//     });
//   })
// );

// Passport configuration
signInRoute.use(passport.initialize());
signInRoute.use(passport.session());

passport.use(userModel.createStrategy());

passport.serializeUser(userModel.serializeUser());
passport.deserializeUser(userModel.deserializeUser());

signInRoute.post("/", express.json(), loginUser);

module.exports = signInRoute;
