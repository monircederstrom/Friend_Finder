var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require("path")

module.exports = function(app){
//get route to display survey page
app.get("/survey", function(req, res) {
    res.sendFile(path.join(_dirname, "../public/survey.html"));
  });


//default rout that leads to home.html to display homepage

app.get("/", function(req, res) {
    // res.send("Welcome to the Star Wars Page!")
    res.sendFile(path.join(__dirname, "../public/view.html"));
  });
};