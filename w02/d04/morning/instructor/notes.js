// basic syntax
$(' ')

$('h1')

$('#someId')

$('#someId p')

$('p #someId')

$('p#someId')

// <ul> <li class="className">
$('ul .className')

// <ul class="className">
$('ul.className')

// each function
$('p').each(function(){
  console.log($(this).html());
})
