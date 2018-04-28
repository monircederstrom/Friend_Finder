module.exports = function apiRoutes(app){
var path = require("path");
var fs = require("fs");
var puppies = require("./../data/puppies.js");

//get rout with URL /api/friends to display JSON of friends
app.get("/api/puppies", function(req, res) {
   res.json(puppies);
});

// post routes /api/friends takes incoming survey results and compatability logic
app.post("/api/puppies", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var diff;
    var diffArr = [];
    var pup = {
        name: "",
        photo: "",

      };
    var newPuppy = req.body;
    for (var i = 0; i < puppies.length; i++) {
      console.log(puppies[i].name);
      diff = 0;
        for (var j = 0; j < newPuppy.scores.length; j++) {
            diff += Math.abs(puppies[i].scores[j] - newPuppy.scores[j]);
        }
            // Reset the bestMatch to be the new friend.
        var pawfect = diffArr.indexOf(Math.min(...diffArr));
            //for (var m = 0; m < diffArr)
            //pawfect.name = puppies[i].name;
        //pawfect.photo = puppies[i].photo;
        //pawfect.friendDifference = totalDifference;
        puppies.push(newPuppy);
        console.log(newPuppy);
        fs.readFile(path.join(__dirname, "../data/puppies.json"), "utf8", function (err, data) {
          if (err) throw err;
          var json = JSON.parse(data);
          json.push(newPuppy);
          fs.writeFile(path.join(__dirname, "../data/puppies.json"), JSON.stringify(json, null, 2), function(err) {
           if (err) throw err;
          });
        });
    // Return a JSON with the user's bestMatch. This will be used by the HTML in the next page
    res.json(puppies[pup]);
      }; 
  });
  }