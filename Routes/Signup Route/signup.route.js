const express = require("express");

const bodyParser = require("body-parser");
const session = require("express-session");

const object = {
  firstName: "Patrick",
  lastName: "Chidi",
  userName: "okaforpatrick302@gmail.com",
  email: "okaforpatrick302@gmail.com",
  password: "udekwe303",
  tel: 234459558,
  address: "okwuego349",
};

const {
  addNewUser,
} = require("../../Controllers/Signup Controller/signup.controller");

const signupRoute = express.Router();

signupRoute.use(
  session({
    secret: "r8q,+&1LM3)CD*zAGpx1xm{NeQhc;#",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60 * 60 * 1000 },
  })
);

signupRoute.post("/", express.json(), addNewUser);

module.exports = { signupRoute };
