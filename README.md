<img src="http://i66.tinypic.com/2z8npc6.jpg" width="200">

# paws
<i>The "method" for finding your new best friend. Project by Chris Chan, Natalia Hess, and Toby Zitsman GA WDI 32.</i>

## Description

<b>paws</b> is a website designed for users who are looking to either adopt a new pet or put their pet up for adoption.

The user is able to search for a pet by name or by type (dog, cat, other). If the user wishes to request additional information or express interest in adoption, he or she can click on the owner's name to send an email.

On the other hand, if a user wishes to list his or her pet for adoption, he or she may simply click the "add a pet" button. This will navigate the user to a form where he or she can enter the information required to add the furry friend into our <b>paws</b> database.

> **See the published project on [Heroku](https://aqueous-atoll-30376.herokuapp.com/).**

<p><i>The original wireframes for the profile card created with Moqups</i></p>
<img src="http://i63.tinypic.com/jqkilk.png" width="400">
<br>

## Technologies Used

- JavaScript
- jQuery
- HTML
- CSS
- AJAX
- MongoDB
- Bootstrap

## Screenshots

<p><i>Homepage view listing all pets currently available for adoption</i></p>
<img src="http://i67.tinypic.com/24pje6e.png" width="500">
<br>
<p><i>Profile "card" listing name, age, gender, location, description, medical information, contact information, and how many people are interested</i></p>
<img src="http://i64.tinypic.com/20h4hhk.png" width="500">
<br>
<p><i>Search by name</i></p>
<img src="http://i64.tinypic.com/2nc41p1.png" width="500">
<br>
<p><i>Search by type (dog, cat, other)</i></p>
<img src="http://i66.tinypic.com/2cdgw7l.png" width="500">
<br>
<p><i>Post a pet modal</i></p>
<img src="http://i63.tinypic.com/2dr712p.png" width="500">
<p><i>About us page</i></p>
<img src="http://i67.tinypic.com/eqnt7a.png" width="500">

## Code Highlights

```
// Post a pet modal

$('#addThePet').on('click', function(e) {
  e.preventDefault();
  // Pet info added and submitted
  if ($('#newPetName').val() == "") {
    alert('please enter valid name for pet');
  } else if ($('#petPicture').val() == "") {
    alert('picture is not valid. please enter url for picture');
  } else if ($('#petAge').val() == "") {
    alert ('Not a valid age');
  } else {
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
                
    if ($('#petGenderM').prop('checked') == true) {
      newPet.gender = 'male';
    } else if ($('#petGenderF').prop('checked') == true) {
      newPet.gender = 'female';
    } else {
      alert('Please choose a gender');
      return;
    }
                
    $('#newPet').toggle();
    newPet.type = $('#petType').val();
                
    $.ajax({
      method: 'POST',
      url: '/api/pets',
      data: newPet,
      success: newPetSuccess,
      error: newPetError
    });
    console.log("New animal created");
  }
});
```

## Links

  - View the app on [Heroku](https://aqueous-atoll-30376.herokuapp.com/)
  - Check out our [Trello Board](https://trello.com/b/Dn7xZoyx/project-2)
