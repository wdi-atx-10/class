(function() {
  var app = angular.module('CardsAgainstAssembly');

  app.component('appNav', {
    template: `
      <nav class="tabs">
        <a href="#/">Home</a>
        <a href="#/add">Add a New Card</a>
        <a href="#/about">About</a>
      </nav>
    `
  });
})();
