console.log('soldier.js loaded');

function Soldier(name, type) {
  this.name = name;
  this.type = type || 'footsoldier';
}

Soldier.prototype.battleCry = function() {
  console.log(this.name, ': FREEEEEDOM!!');
}
