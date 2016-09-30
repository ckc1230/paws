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
	$('#addThePet').on('click', function(e) {
		e.preventDefault()
		// console.log("New Animal");
		newPet.name = $('#newPetName').val();
		newPet.picture = $('#petPicture').val();
		newPet.age = $('#petAge').val();
		newOwner.name = $('#ownerName').val();
		newPet.owner = $('#ownerName').val();
		newOwner.location = $('#ownerLocation').val();
		newOwner.email = $('#ownerEmail').val();
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
		console.log(newPet, " and ", newOwner)
		newPet.type = $( "#petType option:selected" ).text();
		$.ajax({
			method: 'POST',
			url: '/api/pets',
			data: newPet, newOwner,
			success: handleSuccess,
			dataType: Object
		})

	});

	$('#pets').on('click', '.deleteBtn', function() {
		$.ajax({
			method: 'DELETE',
			url: '/api/pets/' + $(this).attr('data-id'),
			success: deleteSuccess,
			error: deleteError
		});

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
	$('#pets').prepend(html);
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



