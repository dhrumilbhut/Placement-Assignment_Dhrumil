import express from "express";
const app = express();
const AuthMiddleWare = require("./middleware/auth_middleware");
import fetch from "node-fetch";

app.get("/", (_req, res) => {
  return res.send("Running");
});
app.get("/post", AuthMiddleWare, async (_req, res, next) => {
  res.send(await postGenerator());
});

const postGenerator = async () => {
  const post = [];
  for (let index = 0; index < 20; index++) {
    const rawData = await fetch("https://api.chucknorris.io/jokes/random");
    const jsonData = await rawData.json();
    post.push(jsonData);
  }
  return post;
};

export default app;
