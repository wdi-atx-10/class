// When the DOM loads, then execute
// my code
$(document).ready(function(){
  // Modify the css of .title
  $('.title').css({
    'color': 'red'
  });

  // add a class to title
  $('.title').addClass('large-text');

  // removing the class large-text from .title
  $('.title').removeClass('large-text');

  // Add something to the bottom of the given element
  $('.grocery-list').append('<li>Cashews</li>');

  // Add something to the top of the given element
  $('.grocery-list').prepend('<li>Apples</li>')

  // Change the text of something
  $('.title').text('Grocery List');

  // Error message to the bottom of the .parent div
  $('.parent').append('<p class="error">You cannot add that item!</p>');

  // $('h1.title').after('<p class="error">You cannot add that item!</p>');

  $('.grocery-list').before('<p class="error">You cannot add that item!</p>')

  // Find me the first list item, and add gum after it
  $('.grocery-list li').eq(0).after('<li>Gum</li>');

  // Fading in and out an element
  // $('.grocery-list')
  //   .fadeOut()
  //   .delay(1000)
  //   .fadeIn();

  console.log("Hello Class!!");

  console.log($('.grocery-list').hasClass('blue'));

  // if the element has the classes blue AND red, make the text blue

  if( $('.grocery-list').hasClass('blue') && $('.grocery-list').hasClass('red') ){
    $('.grocery-list').css('color','purple');
  } else if ( $('.grocery-list').hasClass('blue') ){
    $('.grocery-list').css('color','blue');
  } else if ( $('.grocery-list').hasClass('red') ){
    $('.grocery-list').css('color','red');
  }

// Finding elements relative to one another
  $('.child')
    .find('.strawberries')
    .closest('span')
    .css('color','red')
    .next()
    .css('color','green')
    .prev()
    .css('color','blue')

    // Hiding and showing elements
  $('.error').eq(1).hide();
  $('.error').eq(1).show()

  $('.error').eq(1).remove();



// How to loop through groups of elements AKA nodelist in jQuery
$('.grocery-list').find('li').each(function(index, element){
  console.log('element: ', element);
  console.log('index: ', index);

  if( $(element).hasClass('bananas') ){
    $(element).css('color','yellow')
  }
});


});
