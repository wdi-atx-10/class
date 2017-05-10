$(function(){
  getJoke();


  function getJoke(){
    var getJoke = $.ajax('/getjoke',{
      method: 'POST'
    });

    getJoke.done(function(joke){
      console.log('joke is: ', joke)
      $('h1').text(joke)
    });

    getJoke.fail(function(error){
      $('h1').text('man, your a newb')
    });
  }

  $('#changejoke').on('click', function(e){
    e.preventDefault()
    getJoke()

  })
})
