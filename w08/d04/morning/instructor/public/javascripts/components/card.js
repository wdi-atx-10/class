(function() {
  var app = angular.module('CardsAgainstAssembly');

  app.component('card', {
    bindings: {
      question: '@'
    },
    template: `
      <div class="card" ng-click="flipcard=!flipcard">
        <h4 ng-show="flipcard" class="card-title">{{ $ctrl.question }}</h4>
        <h6>Cards Against Assembly</h6>
      </div>
    `
  });
})();
