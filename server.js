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

// Update One Owner
app.put('/api/owners/:id', function put(req, res) {
	var updatedOwner = req.body;
	var ownerId = req.params.id;
	db.Owner.findOneAndUpdate({_id: ownerId}, updatedOwner, {new: true}, function(err,foundOwner) {
		if (err) {throw err};
		console.log(foundOwner);
		foundOwner.save();
		res.json(foundOwner);
	});
})

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
	console.log(req.body.owner, "hello")
	db.Owner.find({name: req.body.owner}, function(err,owner) {
		if (owner == false) {
			console.log('hell no');
			res.send('No');
		} else {
				console.log(owner)
				var ourOwner = owner[0]._id
				var newPet = req.body;
				newPet.owner = ourOwner;
				db.Pet.create(newPet, function(err, pet) {
			if (err) { console.log('so close');}
			res.json(pet);
			pet.save()
		})

		}
	})

})

// Create Owner
app.post('/api/owners', function(req, res) {
	db.Owner.create(req.body, function(err, owner) {
		if (err) { console.log('nice try');};
		console.log('it worked');
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

// Update pet
app.put('/api/pets/:id', function update(req,res) {
	var updatedPet = req.body;
	var petId = req.params.id;
	console.log("petId found: " + petId);
	db.Pet.findOneAndUpdate({_id: petId}, updatedPet, {new: true}, function(err,foundPet) {
		if (err) {throw err};
		console.log(foundPet);
		foundPet.save();
		res.json(foundPet);
	});
});

// Update Likes
app.patch('/api/pets/:id', function patch(req, res) {
	var petId = req.params.id;
	console.log(petId);
	db.Pet.findById(petId).populate('owner')
	.exec(function(err, pet) {
		if (err) {throw err; };
		console.log(pet)
		pet.interested = pet.interested + 1;
		console.log(pet);
		pet.save();
		res.json(pet);
	})
})

// Search Pet Name
app.get('/api/namesearch', function nameSearch(req, res) {
	console.log(req.query.name);
	var petName = req.query.name;
	db.Pet.find({ name: petName }).populate('owner')
	.exec(function (err, pet) {
		if (err) { console.log(err); };
		console.log(pet);
		res.json(pet);
	});
});
	 
// Search by pet type

app.get('/api/search', function show(req, res) {
	console.log(req.query);
	if (req.query.type == 'all') {
		db.Pet.find().populate('owner')
        .exec(function(err, pet) {
	        if (err) {console.log('WAAAHH')}
	        res.json(pet); 
    	});
	} else {
    	var petType = req.query.type;
    	db.Pet.find({ type: petType }).populate('owner')
        .exec(function(err, pet) {
        	if (err) {console.log('WAAAHH')}
        	res.json(pet); 
    	});
    }
});

//server
app.listen(process.env.PORT || 8000, function() {
	console.log('The puppies are coming! On port 8000...')
});
