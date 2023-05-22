const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const env_var = require("../utils/index");
const User = new Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    select: false,
  },
});

User.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, 10);
  return next();
});

User.methods = {
  async matchPassword(pass) {
    return await bcrypt.compare(pass, this.password);
  },
  async getJsonWebToken() {
    return jwt.sign({ username: this.username }, env_var.JWT_SECRET, {
      expiresIn: "2d",
    });
  },
};

module.exports = model("User", User);
