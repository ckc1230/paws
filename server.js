//imports
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));

//datebase

var db = require('./models');

//html endpoints
app.get('/', function homepage(req, res) {
	res.sendFile(__dirname + '/views/index.html');
});

app.get('/profile', function profilePage(req, res) {
	res.sendFile(__dirname + '/views/profile.html');
});

//JSON API endpoints

// Get all owners
app.get('/api/owners', function index(req, res) {
	db.Owner.find({}, function(err, allOwners) {
		if (err) {throw err;};
		res.json(allOwners);
	});
});

// Get one owner
app.get('/api/owners/:id', function show(req, res) {
	var ownerId = req.params.id;
	db.Owner.findById(ownerId, function(err, owner) {
		if (err) {throw err;};
		res.json(owner);
	});
});

// Get All Pets
app.get('/api/pets', function index(req, res) {
	db.Pet.find().populate('owner')
		.exec(function(err, pets) {
			if (err) { return console.log("index error: " + err); }
			res.json(pets);
	});
});


// Get One Pet
app.get('/api/pets/:id', function show(req, res) {
	var petId = req.params.id;
	db.Pet.findById(petId, function(err, pet) {
		if (err) {throw err;};
		res.json(pet);
	});
});


// Create Pet
app.post('/api/pets', function(req, res) {
	console.log(req.body.owner)
	db.Owner.find({name: req.body.owner}, function(err,owner) {
		if (err) {throw err};
		console.log(owner)
		var ourOwner = owner[0]._id
		console.log(req.body);
		console.log(ourOwner)
		var newPet = req.body;
		newPet.owner = ourOwner;
		console.log(newPet);
		db.Pet.create(newPet, function(err, pet) {
			if (err) { console.log('so close');}
			res.json(pet);
			pet.save()
		})

	})
});

// Create Owner
app.post('/api/owners', function(req,res) {
	db.Owner.create(req.body, function(err, owner) {
		if (err) { console.log('nice try');}
		console.log('holy shit...');
		res.json(owner);
	})
})

// Delete pet
app.delete('/api/pets/:id', function destroy(req,res) {
	var petId = req.params.id;
	db.Pet.findByIdAndRemove(petId, function(err,foundPet) {
		if (err) { throw err; };
		res.json(foundPet + " is gone forever :(");
	});
});

// Update pet
app.put('/api/pets/:id', function update(req,res) {
	var updatedPet = req.body;
	var petId = req.params.id;
	console.log("petId found: " + petId);
	db.Pet.findOneAndUpdate({_id: petId}, updatedPet, function(err,foundPet) {
		if (err) {throw err};
		console.log(foundPet);
		foundPet.save();
		res.json(foundPet);
	});
});

//server
app.listen(process.env.PORT || 8000, function() {
	console.log('The puppies are coming! On port 8000...')
});
