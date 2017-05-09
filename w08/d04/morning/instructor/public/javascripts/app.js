(function() {
  var app = angular.module('CardsAgainstAssembly', ['ngRoute']);

  app.config(function($routeProvider) {
    $routeProvider
      .when('/add', {
        templateUrl: '/templates/_addView.html'
      })
      .when('/about', {
        templateUrl: '/templates/_aboutView.html'
      })
      .otherwise({
        templateUrl: '/templates/_homeView.html'
      });
  });
})();
