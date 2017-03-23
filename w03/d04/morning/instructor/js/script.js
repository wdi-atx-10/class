$(function(){
  getRandomJoke();

  $('#joke-form').on('submit', function(e){
    e.preventDefault();
    getRandomJoke();
  })
});

function getRandomJoke(){
  var apiUrl = 'http://api.icndb.com/jokes/random';
  var data = {};

  $.ajax({
    url: apiUrl,
    data: data
  })
  .done(function(response){
    console.log('response', response);
    var joke = response.value.joke;
    $('p').text(joke);
  })
  .fail(function(error){
    console.log('error', error);
  })
  .always(function(){
    console.log("I always work!");
  });
}
