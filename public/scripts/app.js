var newPet = {
	name: "",
	type: "" ,
	age: "",
	vaccination: true,
	fixed: true,
	gender: "",
	picture: "",
	owner: ""
}
var newOwner = {
	name: "",
	email: "",
	location: ""
}
allPets = []

$(document).ready(function() {
	console.log("here come the kittens");


//get all pets as site turns on
	$.get('/api/pets').success(function(pets) {
		pets.forEach(function(pet) {
			renderPet(pet);
		});
	});

//on submit, post new animal to server and refresh page (full refresh)
		$('.addPet').on('click', function(e) {
	    e.preventDefault();
	    (console.log("I'm A Button! YAAAYYY!"));
	 //Launch choice modal
	    $('#choiceModal').modal();
	    
	    })
	
    	$('#isOwner').on('click', function(e) {
    		//owner clicked that they are registered
    	e.preventDefault();
    	(console.log("I'm a different button! YAAAYYY!"))
    	$('#choiceModal').toggle();
    	//name modal appears
    	$('#nameModal').modal();

    	})
    //after name entered, users click submit
    	$('#registeredName').on('click', function(e) {
    		e.preventDefault();
    		$('#nameModal').toggle();
    		$('#newPet').modal();

    	})


		$('#addThePet').on('click', function(e) {
			console.log("all the buttons")
			e.preventDefault();
			//pet info added and submitted
			$('#newPet').toggle();	
			newPet.name = $('#newPetName').val();
			newPet.picture = $('#petPicture').val();
			newPet.age = $('#petAge').val();
			if ($('#petFixed').prop('checked') == true) {
			newPet.fixed = true;
			} else {
			newPet.fixed = false;
			}
			if ($('#petVaccination').prop('checked') == true) {
				newPet.vaccination = true;
			} else {
				newPet.vaccination = false;
			}
			if ( $('#petGenderM').prop('checked') == true) {
				newPet.gender = 'male';
			} else {
				newPet.gender = 'female';
			}
			newPet.type = $('#petType').val();
			newPet.owner = $('#ownerName').val().toLowerCase()
			$.ajax({
	    		method: 'POST',
	    		url: '/api/pets',
	    		data: newPet,
	    		succes: console.log('hooray'),
	    		error: newPetError
	    	})
	    	console.log("New Animal");
		});
			
	    		
	    $('#isNotOwner').on('click', function(e) {
			e.preventDefault();
			//if owner is not registered, new Owner modal appears
			$('#choiceModal').toggle();
			$('#newOwner').modal();

		})	
	    $('#addTheOwner').on('click', function(e) {
	    	e.preventDefault();
	    	//after owner enters personal info, can click onto add pet
	    newOwner.name = $('#newOwnerName').val();
			newOwner.email = $('#newOwnerEmail').val();
			newOwner.location = $('#newOwnerLocation').val();
			console.log(newOwner)
	    	$('#newOwner').toggle();
	    	$('#newPet').modal();
	    	$.ajax({
	    		method: 'POST',
	    		url: '/api/owners',
	    		data: newOwner,
	    		succes: newOwnerSuccess,
	    		error: newOwnerError
	    	})
	    })

	// CLICK TO DELETE PET
	$('#pets').on('click', '.delete-pet', function(e) {
		var id = $(this).parents('.pet').data('pet-id');
		console.log('id', id);
		$.ajax({
			method: 'DELETE',
			url: '/api/pets/' + id,
			success: function() {
				$('div[data-pet-id="' + id + '"]').remove();
			}
		});
	});

	// CLICK TO OPEN HAMBURGER MENU
	$('.icon').on('click', function() {
		var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
	});
	$('.addPet').on('click', function(e) {
	    e.preventDefault();
	    (console.log("I'm A Button! YAAAYYY!"));
	    $('#songModal').modal();
	})
})

function renderPet(pet) {
	console.log('rendering pet', pet);
	var petHtml = $('#pet-template').html();
	var petsTemplate = Handlebars.compile(petHtml);
	var html = petsTemplate(pet);
	$('#pets').append(html);
}

function handleNewInput(data) {

	var newPet = new Pet();
	newPet.name = data.name;
	newPet.type = petType.val();
	newPet.owner.ref = data.ownerName;
	newPet.picture = data.picture 
	if ($('#petFixed').prop('checked') == true) {
		newPet.fixed = true;
	} else {
		newPet.fixed = false;
	}
	if ($('petVaccination:checked') = true) {
		newPet.vaccination = true;
	} else {
		newPet.vaccination = false;
	}


	var newOwner = new Owner();
	newOwner.name = data.ownerName;
	newOwner.location = data.ownerLocation;
	newOwner.email = data.ownerEmail;

}
function handleSuccess() {
	console.log('success')
}
function postError() {
	console.log("it's not gonna work")
}

// function handleSavedPet() {
// 	$('.modal-body').val('');
// 	allPets.push(json);
// 	renderPet();
// }

function newOwnerSuccess() {
	console.log('yay new owner')
}
function newOwnerError() {
	console.log('no owner')
}
function newPetSuccess() {
	console.log('pets for sale!')
}
function newPetError() {
	console.log('rejected')
}


