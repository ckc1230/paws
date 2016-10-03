var db = require("./models");

var petList = [];
var ownerList = [];

petList.push({
	name: "Theo",
	type: "dog",
	age: "1",
  interested: 10,
	vaccination: true,
	fixed: true,
	gender: "male",
	picture: "https://scontent-yyz1-1.cdninstagram.com/t51.2885-15/e35/14128919_1090735680973847_1968720665_n.jpg?ig_cache_key=MTMzMzAwNjc5NzA2MTM1NTUxMQ%3D%3D.2",
  owner: "ilias",
})

petList.push({
	name: "Ruby",
	type: "dog",
	age: "4",
  interested: 2,
	vaccination: true,
	fixed: true,
	gender: "female",
	picture: "https://scontent-yyz1-1.cdninstagram.com/t51.2885-15/e35/14280350_175479136192510_3532240967484571648_n.jpg?ig_cache_key=MTM0NjAwODgxNzc3NDk2MTcyMw%3D%3D.2",
	owner: "ilias",
})

petList.push({
	name: "Maggie",
	type: "cat",
	age: "2",
  interested: 1,
	vaccination: true,
	fixed: true,
	gender: "female",
	picture: 'https://scontent-yyz1-1.xx.fbcdn.net/v/t1.0-0/p206x206/11949497_10153072748752727_3155146891262570335_n.jpg?oh=764c714d8d3d33d10ea070c1ea3a9466&oe=5875EFAF',
	owner: "ilias"
})

petList.push({
	name: "Louisa",
	type: "bird",
	age: "15",
  interested: 1,
	vaccination: true,
	fixed: true,
	gender: "female",
	picture: 'https://scontent-yyz1-1.xx.fbcdn.net/v/t1.0-0/p206x206/1238209_10201027775790085_100547095_n.jpg?oh=40f8930ac8693e44697d0b478a0a4a7c&oe=5868CE72',
	owner: "ilias"
})

petList.push({
	name: "Gus",
	type: "cat",
	age: "12",
  interested: 1,
	vaccination: true,
	fixed: true,
	gender: "male",
	picture: '',
	owner: "ilias"
})

petList.push({
	name: "Stella",
	type: "cat",
	age: "15",
  interested: 1,
	vaccination: true,
	fixed: true,
	gender: "female",
	picture: '',
	owner: "ilias"
})

petList.push({
  name: "Snuffles",
  type: "cat",
  age: "3",
  interested: 1,
  vaccination: true,
  fixed: true,
  gender: "male",
  picture: "http://petful.supercopyeditors.netdna-cdn.com/wp-content/uploads/2016/02/14032864382_0566a75778_c-750x501.jpg",
  owner: "ilias"
})

petList.push({
  name: "Peanut",
  type: "hamster",
  age: "1",
  interested: 1,
  vaccination: false,
  fixed: false,
  gender: "male",
  picture: "http://www.mrjohnsons.co.uk/uploads/small/copy_hamster_nutc.jpg",
  owner: "ilias"
})

petList.push({
  name: "DJ Shadez, MD",
  type: "dog",
  age: "6",
  interested: 1,
  vaccination: true,
  fixed: true,
  gender: "female",
  picture: "http://1.bp.blogspot.com/-4LEQPEDj4IQ/UD6pwk3dwLI/AAAAAAAAAjI/mzmMLCC5P5U/s640/black-poodle-ch%2Bjaset's%2Bsatisfaction.jpg",
  owner: "ilias"
})

petList.push({
  name: "Big Bow Wow",
  type: "dog",
  age: "5",
  interested: 1,
  vaccination: true,
  fixed: true,
  gender: "male",
  picture: "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s320x320/e15/11358034_1458243211142525_1167013190_n.jpg",
  owner: "ilias"
})

petList.push({
  name: "Ms. Sassy",
  type: "turtle",
  age: "3",
  interested: 1,
  vaccination: false,
  fixed: false,
  gender: "female",
  picture: "http://www.thepetmatchmaker.com/wp-content/uploads/2014/08/fd428d2622b607196dab24e277422cbf-1.jpg",
  owner: "ilias"
})

petList.push({
  name: "Bob",
  type: "cat",
  age: "9",
  interested: 1,
  vaccination: true,
  fixed: true,
  gender: "male",
  picture: "https://media.giphy.com/media/pVkmGyqYRt4qY/giphy-facebook_s.jpg",
  owner: "ilias"
})

petList.push({
  name: "Cupcake",
  type: "dog",
  age: "1",
  interested: 1,
  vaccination: false,
  fixed: false,
  gender: "female",
  picture: "http://www.lazerhorse.org/wp-content/uploads/2014/06/Pomeranian-Puppy-sleeping.jpg",
  owner: "ilias"
})

petList.push({
  name: "Handsome",
  type: "ant",
  age: "1",
  interested: 1,
  vaccination: false,
  fixed: false,
  gender: "male",
  picture: "http://www.indianapest.com/images/Ant_-_10.jpg",
  owner: "ilias"
})

petList.push({
  name: "Fabio",
  type: "dog",
  age: "14 years old",
  interested: 1,
  vaccination: true,
  fixed: true,
  gender: "male",
  picture: "https://scontent-yyz1-1.cdninstagram.com/t51.2885-15/e35/13150791_645581085597263_1211879218_n.jpg?ig_cache_key=MTI0NjYzODY4MjcwODMwNzExNQ%3D%3D.2",
  owner: "ilias"
});

petList.push({
  name: "Beethoven",
  type: "dog",
  age: "5 years old",
  interested: 1,
  vaccination: true,
  fixed: true,
  gender: "male",
  picture: "http://www.coupay.com/topoften/wp-content/uploads/2014/01/images-33.jpg",
  owner: "ilias"
});

petList.push({
  name: "Garfield",
  type: "cat",
  age: "38 years old",
  interested: 1,
  vaccination: true,
  fixed: true,
  gender: "male",
  picture: "https://www.cs.cmu.edu/afs/cs.cmu.edu/academic/class/15463-f13/www/proj2/www/bcharas/worst/garfield/garfield_cat.jpg",
  owner: "ilias"
});

petList.push({
  name: "Tookie",
  type: "bird",
  age: "19 years old",
  interested: 1,
  vaccination: true,
  fixed: false,
  gender: "male",
  picture: "http://www.animalspot.net/wp-content/uploads/2016/02/Toco-Toucan-Pictures.jpg",
  owner: "ilias"
});

petList.push({
  name: "Love",
  type: "cat",
  age: "4 years old",
  interested: 1,
  vaccination: true,
  fixed: true,
  gender: "female",
  picture: "https://scontent-yyz1-1.cdninstagram.com/t51.2885-15/e35/13473237_1758580281032310_436342857_n.jpg?ig_cache_key=MTI4Mzg0MTQxMDMyNzU2MDEzMw%3D%3D.2",
  owner: "ilias"
});

petList.push({
  name: "Olive",
  type: "chinchilla",
  age: "3 years old",
  interested: 1,
  vaccination: true,
  fixed: true,
  gender: "female",
  picture: "https://upload.wikimedia.org/wikipedia/commons/0/02/Chinchilla-Soelvmarmorert.jpg",
  owner: "ilias"
});

petList.push({
  name: "Poochers",
  type: "dog",
  age: "4 years old",
  interested: 1,
  vaccination: true,
  fixed: true,
  gender: "female",
  picture: "https://scontent-yyz1-1.cdninstagram.com/t51.2885-15/e35/13707160_272207893151806_346874866_n.jpg?ig_cache_key=MTMxMDc3OTY3MzY4OTM1ODU1MA%3D%3D.2",
  owner: "ilias"
});

petList.push({
  name: "Stuart",
  type: "mouse",
  age: "17 years old",
  interested: 1,
  vaccination: true,
  fixed: true,
  gender: 'male',
  picture: 'https://media.salon.com/2002/07/stuart_little_2.jpg',
  owner: "ilias"
});

var ownerList = [];

ownerList.push({
	name: 'ilias',
	email: 'Ilias@generalassemb.ly',
	location: '15 Lomardi Street',
});

ownerList.push({
	name: 'Jeff',
	email: 'Mydad@hisemail.com',
	location: 'New Rochelle, NY',
});
ownerList.push({
	name: 'Noah',
	email: 'mybrother@hisemail.com',
	location: 'Brooklyn, NY'
});

ownerList.push({
 	name: "Shirley",
    email: "girleyshirley2hawts@gmail.com",
    location: "San Leandro, CA"
});

ownerList.push({
    name: "Mitch",
    email: "iammitch@gmail.com",
    location: "Berkeley, CA"
});

ownerList.push({
    name: "Martha",
    email: "bakingislife@gmail.com",
    location: "Palo Alto, CA"
});

ownerList.push({
	name: "Greg",
    email: "ilovecat5@gmail.com",
    location: "San Francisco, CA"
});

ownerList.push({
	name: 'Pick A Pet',
	email: 'getapet@pickapet.com',
	location: '255 Busch Street'
});

db.Pet.remove({}, function(err, pets){
  petList.forEach(function (petData) {
    var pet = new db.Pet(petData);
    db.Owner.findOne({name: petData.owner}, function (err, foundOwner) {
      if (err) {
        console.log('we fucked up');
        return;
      }
      pet.owner = foundOwner;
      pet.save(function(err, savedPet) {
        if (err) {
          return console.log(err);
        }
        // console.log('saved' + savedPet.name + ' owned by ' + foundOwner.name);
      });
    });
  });
})
 

db.Owner.remove({}, function(err, owners){
	db.Owner.create(ownerList, function(err, owners){
		if (err) { return console.log('Error', err); };
		console.log("all owners:", owners);
		console.log('created', ownerList.length, 'owners');
	});
})


