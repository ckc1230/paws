var db = require("./models");

var petList = [];
var ownerList = [];

petList.push({
	name: "theo",
	type: "dog",
	age: "1 years old",
	interested: "13",
	vaccination: true,
	fixed: true,
	gender: "male",
	picture: "https://scontent-yyz1-1.cdninstagram.com/t51.2885-15/e35/14128919_1090735680973847_1968720665_n.jpg?ig_cache_key=MTMzMzAwNjc5NzA2MTM1NTUxMQ%3D%3D.2",
	owner: "ilias",
	description: "There is little that needs to be said about Theo, the dog the legend. Not a soul enters GA that isn't affected by his charm and grace; his poise and intent. Anyone would be lucky to own such a dog and we're all stunned ilias is putting him up for adoption'
});

petList.push({
	name: "ruby",
	type: "dog",
	age: "4 years old",
	interested: "13",
	vacination: true,
	fixed: true,
	gender: "female",
	picture: "https://scontent-yyz1-1.cdninstagram.com/t51.2885-15/e35/14280350_175479136192510_3532240967484571648_n.jpg?ig_cache_key=MTM0NjAwODgxNzc3NDk2MTcyMw%3D%3D.2",
	owner: "ilias",
	description: 'Ruby is a dog who likes to have fun, and make emotional connections. She enjoys long walks on the beech and just sitting back with a friend and a beer'
});

petList.push({
	name: "maggie",
	type: "cat",
	age: "2 years old",
	interested: "13",
	vacination: true,
	fixed: true,
	gender: "female",
	picture: 'https://scontent-yyz1-1.xx.fbcdn.net/v/t1.0-0/p206x206/11949497_10153072748752727_3155146891262570335_n.jpg?oh=764c714d8d3d33d10ea070c1ea3a9466&oe=5875EFAF',
	owner: "noah",
	description: 'Maggie lives in hipster brooklyn and has truely embraced the culture. She eats the fanciest of foods and enjoys playing with technology, especially if it feeds her'
});

petList.push({
	name: "louisa",
	type: "other",
	age: "15 years old",
	interested: "13",
	vaccination: true,
	fixed: true,
	gender: "female",
	picture: 'https://scontent-yyz1-1.xx.fbcdn.net/v/t1.0-0/p206x206/1238209_10201027775790085_100547095_n.jpg?oh=40f8930ac8693e44697d0b478a0a4a7c&oe=5868CE72',
	owner: "jeff",
	description: 'Louisa is a pretty girl, just ask her. She has the intelligence of a 5 year old and maturity of a 3 year old. She would be a wonderful addition to any family'
});

petList.push({
	name: "gus",
	type: "cat",
	age: "12 years old",
	interested: "13",
	vaccination: true,
	fixed: true,
	gender: "male",
	picture: 'http://www.bandofcats.com/wp-content/uploads/2011/06/funny-cats_93.jpg',
	owner: "shirley",
	description: 'Gus is the definition of a scare-dy cat. He has been known to flinch away from a mouse and let all the women cats bully him. take pity on him and welcome him into your home'
});

petList.push({
	name: "stella",
	type: "cat",
	age: "15 years old",
	interested: "13",
	vaccination: true,
	fixed: true,
	gender: "female",
	picture: 'http://www.top13.net/wp-content/uploads/2015/10/perfectly-timed-funny-cat-pictures-5.jpg',
	owner: "mitch",
	description: 'stella is a sleek soft cat, who loves to snuggle and is an excellent mouser. as a plus, one day she will make a fantastic pair of slippers'
});

petList.push({
	name: "snuffles",
  type: "cat",
  age: "3 years old",
  interested: "13",
  vaccination: true,
  fixed: true,
  gender: "male",
  picture: "http://petful.supercopyeditors.netdna-cdn.com/wp-content/uploads/2016/02/14032864382_0566a75778_c-750x501.jpg",
  owner: "martha",
  description: "snuffles will be a wonderful addition to your family. " +
	"he’ll be by your side when you’re napping or cozying up with a book. " + 
	"even better, try playing a musical instrument while he is in the room. you’ll be in for a pleasant surprise!"
});

petList.push({
	name: "peanut",
	type: "other",
	age: "1 years old",
	interested: "13",
	vaccination: false,
	fixed: false,
	gender: "male",
	picture: "http://www.mrjohnsons.co.uk/uploads/small/copy_hamster_nutc.jpg",
	owner: "greg",
	description: "ironically, ‘peanut the hamster’ does not like peanuts! " + 
	"he actually despises peanuts and demolishes them purely to display his dominance. " + 
	"some of his favorite activities include: running on his wheel and sleeping amongst the shell of his adversary - the peanut."
});

petList.push({
	name: "dj shadez, md",
	type: "dog",
	age: "6 years old",
	interested: "13",
	vaccination: true,
	fixed: true,
	gender: "female",
	picture: "http://1.bp.blogspot.com/-4LEQPEDj4IQ/UD6pwk3dwLI/AAAAAAAAAjI/mzmMLCC5P5U/s640/black-poodle-ch%2Bjaset's%2Bsatisfaction.jpg",
	owner: "paws",
	description: "this is a dog that barks at her own beat! " + 
	"she is never shy and knows that she has your attention. " + 
	"dj shades, md is a bit high maintenance, but you’ll know exactly which areas she’ll need blankets when winter rolls around."
});

petList.push({
	name: "big bow wow",
	type: "dog",
	age: "5 years old",
	interested: "13",
	vaccination: true,
	fixed: true,
	gender: "male",
 	picture: "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s320x320/e15/11358034_1458243211142525_1167013190_n.jpg",
	owner: "ilias",
	description: 'lil bow wow has nothing on big bow wow. ' + 
	'this lovable giant is great with kids and great with young up-and-coming rappers. ' + 
	'he also had a cameo in “the fast and the furious: tokyo drift”.'
});

petList.push({
	name: "ms. sassy",
	type: "other",
	age: "3 years old",
	interested: "13",
	vaccination: false,
	fixed: false,
	gender: "female",
	picture: "http://www.thepetmatchmaker.com/wp-content/uploads/2014/08/fd428d2622b607196dab24e277422cbf-1.jpg",
	owner: "dani",
	description: '“doing squats so my ass matches my sass” is this turtle’s motto. ' + 
	'ms. sassy is definitely on the lazy side. but put her on a set of wheels, and you better keep your eyes on her. ' + 
	'she is always speeding off to who knows where.'
});

petList.push({
	name: "bob",
	type: "cat",
	age: "9 years old",
	interested: "13 years old",
	vaccination: true,
	fixed: true,
	gender: "male",
	picture: "https://media.giphy.com/media/pVkmGyqYRt4qY/giphy-facebook_s.jpg",
	owner: "paws",
	description: 'bob the blob is where you think he is...right where you left him. ' + 
	'make sure you have plenty of snacks for his appetite and do not expect him to ' + 
	'play fetch with you. maybe you can try chess?'
});

petList.push({
	name: "cupcake",
	type: "dog",
	age: "1 years old",
	interested: "13",
	vaccination: false,
	fixed: false,
	gender: "female",
	picture: "http://www.lazerhorse.org/wp-content/uploads/2014/06/Pomeranian-Puppy-sleeping.jpg",
	owner: "dani"
});

petList.push({
	name: "handsome",
	type: "other",
	age: "3 hours old",
	interested: "13",
	vaccination: false,
	fixed: false,
	gender: "male",
	picture: "http://www.indianapest.com/images/Ant_-_10.jpg",
	owner: "shirley"
});

petList.push({
	name: "fabio",
	type: "dog",
	age: "14 years old",
	interested: "13",
	vaccination: true,
	fixed: true,
	gender: "male",
	picture: "https://scontent-yyz1-1.cdninstagram.com/t51.2885-15/e35/13150791_645581085597263_1211879218_n.jpg?ig_cache_key=MTI0NjYzODY4MjcwODMwNzExNQ%3D%3D.2",
	owner: "natalia"
});

petList.push({
	name: "beethoven",
	type: "dog",
	age: "5 years old",
	interested: "13",
	vaccination: true,
	fixed: true,
	gender: "male",
	picture: "http://www.coupay.com/topoften/wp-content/uploads/2014/01/images-33.jpg",
	owner: "ilias"
});

petList.push({
	name: "garfield",
	type: "cat",
	age: "38 years old",
	interested: "13",
	vaccination: true,
	fixed: true,
	gender: "male",
	picture: "https://www.cs.cmu.edu/afs/cs.cmu.edu/academic/class/15463-f13/www/proj2/www/bcharas/worst/garfield/garfield_cat.jpg",
	owner: "dani"
});

petList.push({
	name: "tookie",
	type: "other",
	age: "19 years old",
	interested: "13",
	vaccination: true,
	fixed: false,
	gender: "male",
	picture: "http://www.animalspot.net/wp-content/uploads/2016/02/Toco-Toucan-Pictures.jpg",
	owner: "ilias"
});

petList.push({
	name: "love",
	type: "cat",
	age: "4 years old",
	interested: "13",
	vaccination: true,
	fixed: true,
	gender: "female",
	picture: "https://scontent-yyz1-1.cdninstagram.com/t51.2885-15/e35/13473237_1758580281032310_436342857_n.jpg?ig_cache_key=MTI4Mzg0MTQxMDMyNzU2MDEzMw%3D%3D.2",
	owner: "megan"
});

petList.push({
	name: "olive",
	type: "other",
	age: "3 years old",
	interested: "13",
	vaccination: true,
	fixed: true,
	gender: "female",
	picture: "https://upload.wikimedia.org/wikipedia/commons/0/02/Chinchilla-Soelvmarmorert.jpg",
	owner: "claire"
});

petList.push({
	name: "poochers",
	type: "dog",
	age: "4 years old",
	interested: "13",
	vaccination: true,
	fixed: true,
	gender: "female",
	picture: "https://scontent-yyz1-1.cdninstagram.com/t51.2885-15/e35/13707160_272207893151806_346874866_n.jpg?ig_cache_key=MTMxMDc3OTY3MzY4OTM1ODU1MA%3D%3D.2",
	owner: "michael"
});

petList.push({
	name: "stuart",
	type: "other",
	age: "17 years old",
	interested: "13",
	vaccination: true,
	fixed: true,
	gender: 'male',
	picture: 'https://media.salon.com/2002/07/stuart_little_2.jpg',
	owner: "george"
});

var ownerList = [];

ownerList.push({
	name: "ilias",
	email: "Ilias@generalassemb.ly",
	location: "san francisco, ca",
});

ownerList.push({
	name: "jeff",
	email: "Mydad@hisemail.com",
	location: "new rochelle, ny",
});

ownerList.push({
	name: "noah",
	email: "mybrother@hisemail.com",
	location: "brooklyn, ny"
});

ownerList.push({
 	name: "shirley",
	email: "girleyshirley2hawts@gmail.com",
	location: "san leandro, ca"
});

ownerList.push({
  name: "mitch",
  email: "iammitch@gmail.com",
  location: "berkeley, ca"
});

ownerList.push({
  name: "martha",
  email: "bakingislife@gmail.com",
  location: "palo alto, ca"
});

ownerList.push({
	name: "greg",
  email: "ilovecat5@gmail.com",
  location: "San Francisco, CA"
});

ownerList.push({
	name: 'paws',
	email: 'getapet@paws.com',
	location: 'san francisco, ca'
});

ownerList.push({
	name: "dani",
	email: "dani@spiritualawakenings.com",
	location: "alameda, ca"
});

ownerList.push({
	name: "megan",
	email: "megan@megan.com",
	location: "concord, ca"
});

ownerList.push({
	name: "michael",
	email: "michael@michael.com",
	location: "berkeley, ca"
});

ownerList.push({
	name: "natalia",
	email: "natalia@natalia.com",
	location: "san mateo, ca"
});

ownerList.push({
	name: "george",
	email: "george@thelittles.com",
	location: "new york city, ny"
});

ownerList.push({
	name: "claire",
	email: "claire@claire.com",
	location: "reno, nv"
});

db.Pet.remove({}, function(err, pets){
  petList.forEach(function (petData) {
    var pet = new db.Pet(petData)
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
