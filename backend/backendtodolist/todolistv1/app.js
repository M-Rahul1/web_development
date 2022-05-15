const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var items = ["Buy food", "Cook food", "Eat food"];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {

  var today = new Date();

  var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };
  
  var day = today.toLocaleDateString("en-US", options);

  res.render("list", {
    kindOfDay: day, newlistitems:items
  });
});

app.post("/", function (req, res) {
  var item = req.body.newitem;
  items.push(item);
  res.redirect("/");
});

