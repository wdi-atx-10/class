(function() {
  var app = angular.module('CardsAgainstAssembly');

  app.controller('CardsController', function($http) {
    this.newCard = { question: '' };
    this.tab = 'home';

    var self = this;

    $http({
      method: 'GET',
      url: '/cards'
    }).then(function successCallback(response) {
      console.log('success', response.data);

      self.cards = response.data;
    }, function errorCallback(response) {
      console.log('error', response);
    });

    // this.cards = [
    //  { question: 'I couldn\'t complete my assignment because ________' },
    //  { question: 'I get by with a little help from ________' },
    //  { question: 'The field trip was completely ruined by ________' },
    //  { question: 'Kyle is a ________' },
    //  { question: 'What is my secret power?' }
    // ];

    this.setTab = function(tabName) {
      self.tab = tabName;
    }

    this.getTab = function() {
      return self.tab;
    }

    this.addCard = function() {
      var self = this;

      $http({
        method: 'POST',
        url: '/cards',
        data: {
          question: self.newCard.question
        }
      }).then(function successCallback(response) {

        self.cards.push({
          question: self.newCard.question
        });

      }, function errorCallback(response) {
          console.log('error', response);
      });

      this.newCard.question = '';
    };

    return this;
  });
})();