var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PetSchema = new Schema({
	name: String,
	type: String,
	age: Number,
	vaccination: String,
	neutered: String,
	gender: String,
	picture: String,
	privateOwner: Boolean
});

var Pet = mongoose.model('Pet', PetSchema);

module.exports = Pet;