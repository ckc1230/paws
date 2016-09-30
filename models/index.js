var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/pickapet");
var Pet = require('./pets');
var Owner = require('./owners');

module.exports.Pet = Pet;
module.exports.Owner = Owner;
