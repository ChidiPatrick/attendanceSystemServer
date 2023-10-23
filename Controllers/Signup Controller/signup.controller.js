const userModel = require("../../Models/Signup/signup.model");

const addNewUser = async (req, res) => {
  await userModel
    .create(req.body)
    .then(() => {})
    .then(() => res.send(200));
};

module.exports = { addNewUser };
