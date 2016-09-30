var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Pet = require('./pets');

var OwnerSchema = new Schema({
	name: String,
	email: String,
	location: String
});

var Owner = mongoose.model('Owner', OwnerSchema);

module.exports = Owner;