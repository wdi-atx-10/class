console.log('army.js loaded');

function Army(name) {
  this.name = name;
  this.soldiers = [];
}

Army.prototype.getSoldierCount = function() {
  return this.soldiers.length;
}

Army.prototype.addSoldier = function(soldier) {
  this.soldiers.push(soldier);
}

Army.prototype.deploy = function() {
  for (var i=0, x=this.soldiers.length; i<x; i++) {
    this.soldiers[i].battleCry();
  }
}
