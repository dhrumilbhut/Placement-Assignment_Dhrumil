const express = require("express");
const app = express();
const auth_route = require("./route/auth.route");

app.use(express.json());
app.use(auth_route);

module.exports = app;
