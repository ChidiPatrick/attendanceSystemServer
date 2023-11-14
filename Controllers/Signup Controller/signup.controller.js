const bcrypt = require("bcrypt");

const userModel = require("../../Models/Signup/signup.model");

const addNewUser = async (req, res) => {
  console.log(req.body);

  const { email } = req.body;

  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  const userEmail = await userModel.findOne({ email });

  if (userEmail) {
    return res.send("User already exists!");
  }

  userModel
    .create({
      email: req.body.email,
      tel: req.body.tel,
      username: req.body.username,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password: hashedPassword,
    })
    .then(() => console.log("Done"))
    .catch((err) => console.log(err));
};

module.exports = { addNewUser };
