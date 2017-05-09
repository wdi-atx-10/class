(function() {
  var app = angular.module('CardsAgainstAssembly');

  app.component('appHeader', {
    bindings: {
      title: '@'
    },
    template: `
      <header class="navbar">
        <h1 class="pull-left">{{ $ctrl.title }}</h1>
      </header>
    `
  });
})();
