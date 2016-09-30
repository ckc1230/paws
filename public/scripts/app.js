$(document).ready(function() {
	console.log("here come the kittens");
	
	var allPets = []
	var source = $('#pet-template').html();
	var template = Handlebars.compile(source);
	



//get all pets as site turns on
	$.get('/api/pets').success(function(pets) {
		pets.forEach(function() {
			render();
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

	$('#PetTarget').on('click', '.deleteBtn', function() {
		$.ajax({
			method: 'DELETE',
			url: '/api/pets/' + $(this).attr('data-id'),
			success: deleteSuccess,
			error: deleteError
		});
		
	});


})









function render() {
	$('#pet-target').empty();
	var petHtml = template({ pets: allPets });
	$('#pet-target').append(petHtml);
}