var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require("path")

var puppies = require (../data/puppies.js)

module.exports = function(app){
//get rout with URL /api/friends to display JSON of friends
app.get("/api/puppies", function(req, res) {
    return res.json(puppies);
  });


// post routes /api/friends takes incoming survey results and compatability logic
app.post("/api/puppies", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newpuppies = req.body;
  
    console.log(newpuppies);
  
    // We then add the json the user sent to the character array
    puppies.push(newpuppies);
  
    // We then display the JSON to the users
    res.json(newpuppies);
  });
  
};