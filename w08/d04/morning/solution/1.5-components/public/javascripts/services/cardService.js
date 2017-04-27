(function() {
  'use strict';

  var app = angular.module('CardsAgainstAssembly');

  app.service('CardService', function($http) {
    this.all = function(cb) {
      $http({
        method: 'GET',
        url: '/cards'
      }).then(function successCallback(response) {
        console.log('success', response.data);

        cb(response.data)
      }, function errorCallback(response) {
        console.log('error', response);
      });
    },

    this.save = function(cardData, cb) {
      $http({
        method: 'POST',
        url: '/cards',
        data: {
          question: cardData.question
        }
      }).then(function successCallback(response) {

        cb();

      }, function errorCallback(response) {
          console.log('error', response);
      });
    }
  });
})();
