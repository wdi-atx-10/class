(function() {
  var app = angular.module('CardsAgainstAssembly');

  app.component('newCard', {
    controller: function($http, $location, CardService) {
      this.newCard = { question: '' };

      this.addCard = function() {
        var self = this;

        CardService.save({
          question: self.newCard.question
        }, function() {
          // Redirect back to the homepage and display all the cards
          // @todo: Instead of reloading all cards just push this one
          $location.path('/');
          self.newCard.question = '';
        })
      };
    },
    template: `
      <section class="container-fluid">
        <div class="row">
          <form name="add-card" id="add-card" ng-submit="$ctrl.addCard()">
            <input type="text" name="question" id="question" placeholder="What's your question?" ng-model="$ctrl.newCard.question">
          </form>
          <br>
          <div class="card">
            <h4 class="card-title">{{ $ctrl.newCard.question }}</h4>
            <h6>Cards Against Assembly</h6>
          </div>
        </div>
      </section>
    `
  });

})();
