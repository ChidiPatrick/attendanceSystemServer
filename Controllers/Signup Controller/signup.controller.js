const userModel = require("../../Models/Signup/signup.model");

const addNewUser = async (req, res, next) => {
  await userModel
    .create(req.body)
    .then(() => res.sendStatus(200))
    .catch((err) => console.log(err));
  next();
  console.log(req.body);
};

module.exports = { addNewUser };
