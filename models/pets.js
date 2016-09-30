var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Owner = require('./owners');

var PetSchema = new Schema({
	name: String,
	type: String,
	age: String,
	vaccination: Boolean,
	fixed: Boolean,
	gender: String,
	picture: String,
	owner: [Owner.schema]
});

var Pet = mongoose.model('Pet', PetSchema);

module.exports = Pet;