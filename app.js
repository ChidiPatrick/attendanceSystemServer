const express = require("express");
const crypto = require("crypto");

const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const userModel = require("./Models/Signup/signup.model");
const { signupRoute } = require("./Routes/signup.route");
const signInRoute = require("./Routes/signin.user.route");
const { failurePage } = require("./Routes/failure.page");
const { homePageRoute } = require("./Routes/home.page");
const landingPageRoute = require("./Routes/lading.page");
const {
  isAuthenticated,
} = require("./Utility handlers/authentication.util.handlers");
const cors = require("cors");
const loginRoute = require("./Routes/login.route");

const app = express();

app.use(
  cors({
    origin: "https://localhost:3000",
  })
);

app.use(express.json());
// const

// passport.use(userModel.createStrategy());

// app.set("env", "development");
// const secret = crypto.randomBytes(32);

// console.log(secret.toString("hex"));

// passport.serializeUser(userModel.serializeUser());
// passport.deserializeUser(userModel.deserializeUser());

// app.use(isAuthenticated);

app.use("/signupUser", signupRoute);
// app.use("/signinUser", signInRoute);
app.use("/success", homePageRoute);
app.use("/failure", failurePage);
app.use("/", landingPageRoute);
app.use("/signinUser", loginRoute);

module.exports = { app };
