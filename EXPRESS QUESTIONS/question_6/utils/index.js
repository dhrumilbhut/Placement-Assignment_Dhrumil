require("dotenv").config();
module.exports = env_var = {
  MONGOBD_URL: process.env.MONGODB_URL,
  JWT_SECRET: process.env.JWT_SECRET,
};
