
$(function(){

  function addItem(item){
    $('ul.grocery-list').prepend(generateItem(item));
    return false;
  }

  function persistItem(itemName, itemUrl){
    // firebase persist
    return false;
  }

  function getItemImage(){

  };

  function generateItem(item){
    return [
      '<li class="list-group-item">',
        item,
        '<span class="buttons">',
          // '<i class="fa fa-pencil-square-o" aria-hidden="true"></i>',
          '<i class="fa fa-trash-o" aria-hidden="true"></i>',
        '</span>',
      '</li>'
    ].join('');
  }

  function getImage(query){
    return 'https://pixabay.com/api/?key=5133048-a963ff10359220f758c58ed2c&q=' + query;
  }

  function setHandlers(){

    $('form.grocery-search').on('submit',function(e){
      e.preventDefault();
      var $input = $(this).find('.grocery-input');
      addItem($input.val());
      $input.val('');
    });

  }

  function main(){
    setHandlers()
  }

  main();
});
