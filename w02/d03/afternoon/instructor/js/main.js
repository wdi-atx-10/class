console.log('main.js loaded');

$(document).ready(function() {
  $('p').text('This is just a little something about events');

  $('.test-form').on('submit', function(e) {
    console.log('event', e);
    var fname = $('#fname').val();

    if (!fname) {
      // Don't let them submit it
      $('#fname').css('border-color', 'red');
      e.preventDefault();
    }
  });

});
