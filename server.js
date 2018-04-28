//dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// create  server (app) with express
var app = express();
var PORT = process.env.PORT || 3100;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static("./app/public"));



var htmlRoutes = require("./app/routing/htmlRoutes.js");
var apiRoutes =  require("./app/routing/apiRoutes.js");
apiRoutes(app);
htmlRoutes(app);

// Starts the server to begin listening
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });