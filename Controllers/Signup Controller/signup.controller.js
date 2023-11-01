const userModel = require("../../Models/Signup/signup.model");

const addNewUser = (req, res) => {
  console.log(req.body);

  userModel.register(
    new userModel({
      email: req.body.email,
      tel: req.body.tel,
      username: req.body.username,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password: req.body.password,

      // firstName: "Patrick",
      // lastName: "Chido",
      // password: "304q03",
      // tel: 233449483,
      // username: "okaforpatrick302@gmail.com",
      // email: "okaforpatrick302@gmail.com",
      // address: "Okwuego",
    }),

    req.body.password,

    (err, user) => {
      if (err) {
        console.log(err);
      } else {
        console.log(user);
      }
    }
  );
};

module.exports = { addNewUser };
