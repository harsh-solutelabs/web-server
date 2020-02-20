const path = require("path");
const express = require("express");
const hbs = require("hbs");
const app = express();

//Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public/");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

//setup static directory to serve
app.use(express.static(publicDirectoryPath));

//Setup handlers engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather App",
    Name: "Harsh Mehta"
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    Name: "Harsh Mehta",
    Created_By: "SoluteLabs"
  });
});
app.get("/help", (req, res) => {
  res.render("help", {
    help_text: "This is helpfull text",
    Name: "Harsh Mehta"
  });
});
// app.get("", (req, res) => {
//   res.send("Hello Expres");
// });

// app.get("/help", (req, res) => {
//   res.send("Help Page");
// });

// app.get("/about", (req, res) => {
//   res.send("About Page");
// });

app.get("/weather", (req, res) => {
  res.send({
    forecast: "It is snowing",
    location: "Philadelphia"
  });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: 404,
    Name: "harsh mehta",
    errorMerrorMesse: "Help article found"
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: 404,
    Name: "harsh mehta",
    errorMerrorMesse: "Page not found"
  });
});

app.listen(4545, () => {
  console.log("Server is on port 4545");
});
