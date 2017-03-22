console.log('main.js loaded');

$(document).ready(function() {
  var giphyApiUrl = 'http://api.giphy.com/v1/gifs';
  var apiKey = 'dc6zaTOxFJmzC';

  $.ajax('content.html')
    .done(function(response) {
      console.log('Success!', response);

      $('#content').text(response);
    })
    .fail(function() {
      alert('do something else, no good');
    });

  $.ajax({
    type: 'GET',
    url: giphyApiUrl + '/search',
    data: {
      q: 'birthday',
      api_key: apiKey
    }
  }).done(function(response) {
    var results = response.data;
    console.log('giphy search response', results);

    for (var i=0, x=results.length; i<x; i++) {
      console.log('giphy: ', results[i]);
      var image = results[i].images.downsized_medium.url;
      $('#giphys').append('<li><img src="' + image + '" /></li>');
    }
  }).fail(function() {
    alert('Please try again later');
  });
});
