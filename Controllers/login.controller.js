// Passport-local strategy verification function

// login user
const loginUser = (req, res) => {
  // req.cookie.user =;
  console.log(req.session);
};

module.exports = { loginUser };
