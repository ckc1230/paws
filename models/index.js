var mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/pickapet");
// mongoose.connect("mongodb://localhost/pickapet");
var Pet = require('./pets');
var Owner = require('./owners');

module.exports.Pet = Pet;
module.exports.Owner = Owner;
