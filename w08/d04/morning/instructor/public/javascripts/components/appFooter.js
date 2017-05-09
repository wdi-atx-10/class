(function() {
  var app = angular.module('CardsAgainstAssembly');

  app.component('appFooter', {
    bindings: {
      madeWith: '@'
    },
    template: `
      <footer>
        <p>Made with <span class="heart">{{ $ctrl.madeWith }}</span> at General Assembly</p>
      </footer>
    `
  });
})();
