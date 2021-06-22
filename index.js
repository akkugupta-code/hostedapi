const express = require("express");
const app = express();
const importData = require("./bookdata.json");
let port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("hello world");
});
app.get("/getBooks", (req, res) => {
  res.send(importData);
});
app.listen(port, () => {
  console.log("example app is listening on port `port`");
});
