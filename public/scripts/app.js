$(document).ready(function() {
	console.log("here come the kittens");


//get all pets as site turns on
	$.get('/api/pets').success(function(pets) {
		pets.forEach(function(pet) {
			renderPet(pet);
		});
	});

//on submit, post new animal to server and refresh page (full refresh)
	$('#newPetButton').on('submit', function(e) {
		e.preventDefault();
		var formData = $(this).serialize();
		console.log(formData);
		$.ajax({
			method: 'POST',
			url: '/api/pets',
			data: formData,
			success: newPetSuccess,
			error: newPetError
		});

	});

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
	$('#pets').prepend(html);
}
