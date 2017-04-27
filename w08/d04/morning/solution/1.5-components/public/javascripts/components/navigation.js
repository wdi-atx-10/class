(function() {
  var app = angular.module('CardsAgainstAssembly');

  app.component('navigation', {
    controller: function() {
      this.tab = 'home';

      this.setTab = function(tabName) {
        this.tab = tabName;
      }

      this.getTab = function() {
        return this.tab;
      }
    },
    template: `
      <nav class="tabs">
        <a ng-click="$ctrl.setTab('home')" ng-class="{ 'active' : $ctrl.getTab() === 'home' }" href="#/">Home</a>
        <a ng-click="$ctrl.setTab('new')" ng-class="{ 'active' : $ctrl.getTab() === 'new' }" href="#/new">Add a New Card</a>
        <a ng-click="$ctrl.setTab('about')" ng-class="{ 'active' : $ctrl.getTab() === 'about' }" href="#/about">About</a>
      </nav>
    `
  });

})();