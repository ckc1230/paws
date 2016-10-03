/******************
 * MODULE IMPORTS *
 ******************/

var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));

/************
 * DATABASE *
 ************/

var db = require('./models');

/**********
 * ROUTES *
 **********/

/*
 * HTML ENDPOINTS
 */
app.get('/', function homepage(req, res) {
	res.sendFile(__dirname + '/views/index.html');
});

app.get('/profile', function profilePage(req, res) {
	res.sendFile(__dirname + '/views/profile.html');
});

/*
 * JSON API ENDPOINTS
 */

// Get All Owners
app.get('/api/owners', function index(req, res) {
	db.Owner.find({}, function(err, allOwners) {
		if (err) { throw err; };
		res.json(allOwners);
	});
});

// Get One Owner
app.get('/api/owners/:id', function show(req, res) {
	var ownerId = req.params.id;
	db.Owner.findById(ownerId, function(err, owner) {
		if (err) { throw err; };
		res.json(owner);
	});
});

// Get All Pets
app.get('/api/pets', function index(req, res) {
	db.Pet.find().populate('owner')
		.exec(function(err, pets) {
			if (err) { return console.log("index error: " + err); };
			res.json(pets);
	});
});


// Get One Pet
app.get('/api/pets/:id', function show(req, res) {
	var petId = req.params.id;
	db.Pet.findById(petId, function(err, pet) {
		if (err) { throw err; };
		res.json(pet);
	});
});


// Create Pet
app.post('/api/pets', function(req, res) {
	if (owner == false) {
 +			console.log('hell no');
 +			res.send('Not a Valid Owner');
 +		} else {
 +			var ourOwner = owner[0]._id
 +			console.log(req.body);
 +			console.log(ourOwner)
 +			var newPet = req.body;
 +			newPet.owner = ourOwner;
 +			console.log(newPet);
 +			db.Pet.create(newPet, function(err, pet) {
 +				if (err) { console.log('so close');}
 +				res.json(pet);
 +				pet.save()
 +			})
 +		}

});

// Create Owner
app.post('/api/owners', function(req, res) {
	db.Owner.create(req.body, function(err, owner) {
		if (err) { console.log('nice try');};
		console.log('holy shit...');
		res.json(owner);
	});
});

// Delete Pet
app.delete('/api/pets/:id', function destroy(req,res) {
	var petId = req.params.id;
	db.Pet.findByIdAndRemove(petId, function(err,foundPet) {
		if (err) { console.log(err); };
		res.json(foundPet + " is gone forever :(");
	});
});

// Search Pet Name
app.get('/api/pets/name/:name', function nameSearch(req, res) {
	console.log(req.params.name);
	db.Pet.find({ name: req.params.name }, function(err, pet) {
		if (err) { console.log(err); };
		console.log(pet);
		res.json(pet);
	});
});

//server
app.listen(process.env.PORT || 8000, function() {
	console.log('The puppies are coming! On port 8000...')
});
