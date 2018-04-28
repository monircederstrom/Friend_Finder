var fs = require("fs");
var path = require("path");
var doggie = fs.readFileSync(path.join(__dirname, "puppies.json"));
var puppies = JSON.parse(doggie);
//export arrray
module.exports = puppies;