const express = require("express");

const bodyParser = require("body-parser");
const session = require("express-session");
const passport = require("passport");
const crypto = require("crypto");
const LocalStrategy = require("passport-local").Strategy;
const userModel = require("../Models/Signup/signup.model");

const { loginUser } = require("../Controllers/login.controller");

const signInRoute = express.Router();

const secretKey = crypto.randomBytes(32);

// signInRoute.use(bodyParser.urlencoded({ extended: true }));

signInRoute.use(
  session({
    secret: `${secretKey}`,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60 * 60 * 1000 },
  })
);

// Passport configuration
signInRoute.use(passport.initialize());
signInRoute.use(passport.session());

// passport.use(userModel.createStrategy());
passport.use(
  new LocalStrategy(function (username, password, done) {
    userModel
      .findOne({ username, password })
      .then((user) => {
        if (!user) {
          return done(null, false, { message: "User does not exist" });
        }

        if (user.password !== password) {
          return done(null, false, { message: "Incorrect password" });
        }
        console.log(user);

        return done(null, true);
      })
      .catch((err) => done(err, false));
  })
);

passport.serializeUser((user, done) => {
  done(null, { firstName: user.firstName, tel: user.tel, id: user.id });
});
passport.deserializeUser((user, done) => {
  user
    .findById(id)
    .then((user) => {
      done(null, user);
    })
    .catch((err) => console.log(err));
});

signInRoute.post(
  "/",
  express.json(),
  passport.authenticate("local", {
    successRedirect: "/success",
    failureRedirect: "/failure",
    // failureFlash: true,
  }),
  loginUser
);

module.exports = signInRoute;
