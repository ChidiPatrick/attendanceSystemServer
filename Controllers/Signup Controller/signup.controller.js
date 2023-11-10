const userModel = require("../../Models/Signup/signup.model");

const addNewUser = (req, res) => {
  console.log(req.body);

  userModel
    .create({
      email: req.body.email,
      tel: req.body.tel,
      username: req.body.username,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password: req.body.password,
    })
    .then(() => console.log("Done"))
    .catch((err) => console.log(err));

  //   new userModel({
  //     email: req.body.email,
  //     tel: req.body.tel,
  //     username: req.body.username,
  //     firstName: req.body.firstName,
  //     lastName: req.body.lastName,
  //     password: req.body.password,
  //   }),

  //   req.body.password,

  //   (err, user) => {
  //     if (err) {
  //       console.log(err);
  //     } else {
  //       console.log(user);
  //     }
  //   }
  // );
};

module.exports = { addNewUser };
