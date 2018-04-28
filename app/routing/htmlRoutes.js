module.exports = function(app){
  var path = require("path");
//get route to display survey page
app.get("/survey", function(req, res) {
    res.sendFile(path.join(_dirname, "/../public/survey.html"));
  });

//default route that leads to home.html to display homepage
app.get("/", function(req, res) {
    // res.send("homepage")
    res.sendFile(path.join(__dirname, "/../public/view.html"));
  });
};