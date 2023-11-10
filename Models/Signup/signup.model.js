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
  email: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
});

////////// Extend userBioSchema //////////
// userBioSchema.plugin(passportLocalMongoose);

const userModel = mongoose.model("users", userBioSchema);

module.exports = userModel;
