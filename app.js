const express = require("express");

const app = express();

// register view engine
app.set("view engine", "ejs");

app.listen(3000);

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/about", (req, res) => {
  res.render("about");
}); //        /about/ é para achar qualquer portnumber que tenho about

app.get("/blogs*create", (req, res) => {
  res.render("create");
});

// redirects
app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

app.use((req, res) => {
  res.status(404).render("404");
});
