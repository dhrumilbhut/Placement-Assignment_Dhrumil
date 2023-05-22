const { Schema, model } = require("mongoose");

const UserModel = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  body: {
    type: String,
    required: true,
    trim: true,
  },
});

module.exports = model("UserModel", UserModel);
