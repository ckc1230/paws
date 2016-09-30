$(document).ready(function() {
	console.log("here come the kittens");

//get all pets as site turns on
	$.get('/api/pets').success(function(pets) {
		pets.forEach(function(pet) {
			renderPet(pet);
		});
	});

//on submit, post new animal to server and refresh page (full refresh)
	$('#pets').on('click', '.edit-pet',function(e) {
	    e.preventDefault();
	    console.log("I'm A Button! YAAAYYY!");
  		var petId = $(this).closest('.pet').attr('data-pet-id');
			var $petRow = getPetRowById(petId);

    	$petRow.find('.edit-form').toggle();
	    $petRow.find('.edit-pet').toggle();
	    $petRow.find('.save-changes').toggle();
	})


	$('#pets').on('click', '.save-changes', function(e) {
		e.preventDefault();
		var petId = $(this).parents('.pet').data('pet-id');
		// var petId = $(this).closest('.pet').attr('data-pet-id');
		var $petRow = getPetRowById(petId);
  	$petRow.find('.edit-form').toggle();
    $petRow.find('.edit-pet').toggle();
    $petRow.find('.save-changes').toggle();
  
	  var petData = {
	    name: $petRow.find('input[name="edit-pet-name"]').val(),
	    age: $petRow.find('input[name="edit-pet-age"]').val(),
	    // owner: {
	    // 	location: $petRow.find('input[name="edit-pet-location"]').val() 
	    // }
	  };
	  console.log(petData);
    
    $.ajax({
    	method: 'PUT',
    	url: '/api/pets/' + petId,
    	data: petData,
    	success: function(data) {
     		$.get('/api/pets').success(function(pets) {
					pets.forEach(function(pet) {
					renderPet(pet);
					});
				});

     		// console.log(data);


     		// renderPet(data);
    }
	})


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
	// console.log('rendering pet', pet);
	var petHtml = $('#pet-template').html();
	var petsTemplate = Handlebars.compile(petHtml);
	var html = petsTemplate(pet);
	$('#pets').append(html);
}})

function reRenderPet(pet) {
	// console.log('rendering pet', pet);
	var petId = pet._id;
	console.log(pet);
	var $petRow = getPetRowById(petId);
	console.log($petRow);
	var petHtml = $('#pet-template').html();
	var petsTemplate = Handlebars.compile(petHtml);
	var html = petsTemplate(pet);
	$petRow.append(html);
}

function getPetRowById(id) {
  return $('[data-pet-id=' + id + ']');
}
