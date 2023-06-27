const express = require('express');
const hbs = require('hbs');
const app = express();
const port = 3000;

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

app.use( express.static("public"));

app.get( "/" , (req, res) => {
  res.render("home", {
    nombre: "Hernan",
    titulo: "hbs"
  });
});

app.get( "/generic" , (req, res) => {
  res.render("generic", {
    nombre: "Hernan",
    titulo: "hbs"
  })
});

app.get( "/elements" , (req, res) => {
  res.render("elements", {
    nombre: "Hernan",
    titulo: "hbs"
  });
});

app.get( "*" , (req, res) => {
  res.redirect("404.html");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});