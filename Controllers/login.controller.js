// Passport-local strategy verification function
const verifyFunction = async (username, password, done) => {
  userModel
    .findOne({ username, password })
    .then((user) => {
      if (!user) {
        console.log("User not found!!!");
        return done(null, false, { message: "User does not exist" });
      }

      if (!user.verifyPassword(password)) {
        console.log("Incorrect password");
        return done(null, false, {
          message: "Incorrect password",
        });
      }

      console.log("User found");
      console.log(user);

      return done(null, user);
    })
    .catch((err) => {
      console.log(err);
      return done(err);
    });
};

// login user
const loginUser = (req, res) => {
  res.send("Welcome aboard mate").statusCode(200).json(res.body);
};

module.exports = { verifyFunction, loginUser };
