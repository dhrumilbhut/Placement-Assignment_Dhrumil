const User = require("../model/user");
const SignUpController = async (req, res, next) => {
  const { username, password } = req.body;

  if (!username && !password) {
    return res.status(401).send({
      message: "Insufficient data",
      success: false,
      data: null,
    });
  }

  try {
    const data = await User.create({ username: username, password: password });
    data.password = null;
    return res.status(201).send({
      message: "User create Successfully",
      success: true,
      data: data,
    });
  } catch (e) {
    return res.status(401).send({
      message: e.message || "Unable to create user",
      success: false,
      data: null,
    });
  }
};

module.exports = SignUpController;
