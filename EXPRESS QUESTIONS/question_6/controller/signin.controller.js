const User = require("../model/user");
const SignInController = async (req, res, next) => {
  const { username, password } = req.body;
  if (!username && !password) {
    return res.status(401).send({
      message: "Insufficient data",
      success: false,
      data: null,
    });
  }

  try {
    const user = await User.findOne({ username: username })
      .select("password")
      .select("username");
    if (!user) {
      return res.status(401).send({
        message: "Unable to find user",
        success: false,
        data: null,
      });
    }
    if (!(await user.matchPassword(password))) {
      return res.status(401).send({
        message: "Wrong credential",
        success: false,
        data: null,
      });
    }
    const jsonWebToken = await user.getJsonWebToken();
    user.password = null;
    return res.status(201).send({
      message: "Login Successfully",
      success: true,
      data: {
        user: user,
        token: jsonWebToken,
      },
    });
  } catch (e) {
    return res.status(401).send({
      message: e.message || "Unable to find user",
      success: false,
      data: null,
    });
  }
};

module.exports = SignInController;
