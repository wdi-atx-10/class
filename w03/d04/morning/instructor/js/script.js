$(function(){
  // getRandomJoke();

  $('#joke-form').on('submit', function(e){
    e.preventDefault();
    getRandomJoke();
  })
});

function getRandomJoke(){
  var apiUrl = 'http://api.icndb.com/jokes/random/';
  apiUrl += $('#numberOfJokes').val();
  console.log(apiUrl);
  var data = {};

  var firstName = $('#first-name').val();
  var lastName = $('#last-name').val();

  if (firstName.length > 0){
    data.firstName = firstName
  }

  if (lastName.length > 0){
    data.lastName = lastName
  }

  // console.log('form data', data)

  $.ajax({
    url: apiUrl,
    data: data
  })
  .done(function(response){
    // console.log('response', response);
    var oldJoke = $('#featured-jokes').html();
    $('#previous-jokes').prepend(oldJoke);
    $('#featured-jokes').html('');

    var jokeArray = response.value;
    // console.log(jokeArray)
    jokeArray.forEach(function(jokeObject){
      $('#featured-jokes').append('<li>'+ jokeObject.joke + '</li>');
      // var li = $('<li />');
      // li.text(jokeObject.joke);
      // $('#featured-jokes').append(li);
    });
  })
  .fail(function(error){
    console.log('error', error);
  })
  .always(function(){
    console.log("I always work!");
  });
}
