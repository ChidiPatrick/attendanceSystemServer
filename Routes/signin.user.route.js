const express = require("express");

const bodyParser = require("body-parser");
// const session = require("express-session");
const session = require("cookie-session");
const passport = require("passport");
const crypto = require("crypto");
const LocalStrategy = require("passport-local").Strategy;
const userModel = require("../Models/Signup/signup.model");
const bcrypt = require("bcrypt");

const { loginUser } = require("../Controllers/login.controller");

const signInRoute = express.Router();

// signInRoute.use(bodyParser.urlencoded({ extended: true }));

// signInRoute.use(
//   session({
//     secret: `${secretKey}`,
//     resave: false,
//     saveUninitialized: false,
//     cookie: { maxAge: 60 * 60 * 1000 },
//   })
// );

// Passport configuration
signInRoute.use(passport.initialize());
signInRoute.use(passport.session());

// passport.use(userModel.createStrategy());
passport.use(
  new LocalStrategy(
    { usernameField: "email", passwordField: "password" },
    async function (email, password, done) {
      userModel
        .findOne({ email })

        .then(async (user) => {
          if (!user) {
            console.log("User does not exist");
            return done(null, false, { message: "User does not exist" });
          }

          const isCorrectPassword = await bcrypt.compare(
            password,
            user.password
          );

          if (!isCorrectPassword) {
            return done(null, false, { message: "Incorrect password" });
          }

          return done(null, user);
        })
        .catch((err) => done(err, false));
    }
  )
);

passport.serializeUser(function (user, done) {
  console.log("User serialized");
  done(null, user.id);
});
passport.deserializeUser((id, done) => {
  user
    .findById(id)
    .then((user) => {
      done(err, user);
    })
    .catch((err) => console.log(err));
});

signInRoute.post(
  "/",
  express.json(),
  passport.authenticate("local", {
    successRedirect: "/success",
    failureRedirect: "/failure",
  }),
  loginUser
);

module.exports = signInRoute;
