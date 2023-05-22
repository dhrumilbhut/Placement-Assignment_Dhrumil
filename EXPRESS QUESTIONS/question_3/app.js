const express = require("express");
const app = express();
const blog_route = require("./routes/blog.routes");
app.get("/", (_req, res) => {
  return res.send("Running");
});
app.use(express.json());
app.use(blog_route);
module.exports = app;
