(function() {
  var app = angular.module('CardsAgainstAssembly');

  app.component('appFooter', {
    bindings: {
      //the '@' binding automatically interpolates the "{{}}" if 
      //  they exist in the attributes
      madeWith: '@'
    },
    controller: function($attrs) {
      // This isn't needed with 'bindings' set to '@' above
      // this.madeWith = $attrs.madeWith;
    },
    template: `
      <footer>
        Made with <span class="heart">{{$ctrl.madeWith}}</span> at General Assembly
      </footer>
    `
  });

})();