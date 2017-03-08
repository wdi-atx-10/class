$(function() {

  // The DOM has safely loaded, add your code in here
  $('#btn-show').on('click', function() {
    var firstName = $('#fname').val();
    var lastName = $('#lname').val();

    $('#first').text(firstName);
    $('#second').text(lastName);
  });
});
