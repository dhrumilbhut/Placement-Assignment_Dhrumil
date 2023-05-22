const express = require("express");
const SignUpController = require("../controller/signup.controller");
const SignInController = require("../controller/signin.controller");
const auth_route = express.Router();

auth_route.post("/signup", SignUpController);
auth_route.get("/signin", SignInController);

module.exports = auth_route;
