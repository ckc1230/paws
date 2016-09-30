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
