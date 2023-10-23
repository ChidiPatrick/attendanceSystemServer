const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const userBioSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  tel: {
    type: Number,
    required: true,
  },
});

////////// Extend userBioSchema //////////
userBioSchema.plugin(passportLocalMongoose, {
  usernameField: "email",
});

const userModel = mongoose.model("user", userBioSchema);

module.exports = userModel;
