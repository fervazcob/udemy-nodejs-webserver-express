const express = require("express");
const app = express();

const hbs = require("hbs");

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/public"));

// Partials
hbs.registerPartials(__dirname + "/views/partials");

// Helpers
require("./hbs/helpers");

// Express HBS
app.set("view engine", "hbs");

app.get("/", function (req, res) {
  res.render("home", {
    name: "fernando vazquez",
    year: new Date().getFullYear(),
  });
});

app.get("/about", function (req, res) {
  res.render("about", {
    name: "chrono trigger",
    year: new Date().getFullYear(),
  });
});

app.listen(port, () => console.log(`Escuchando en el puerto ${port}`));
