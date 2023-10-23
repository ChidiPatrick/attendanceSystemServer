const express = require("express");

const bodyParser = require("body-parser");

const addNewUser = require("../../Controllers/Signup Controller/signup.controller");

const signupRoute = express.Router();

signupRoute.post("/", bodyParser.json(), addNewUser);

module.exports = { signupRoute };