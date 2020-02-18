const express = require("express");
const app = express();

app.get("", (req, res) => {
  res.send("Hello Expres");
});

app.get("/help", (req, res) => {
  res.send("Help Page");
});

app.get("/weather", (req, res) => {
  res.send("Weather Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.listen(4545, () => {
  console.log("Server is on port 4545");
});
