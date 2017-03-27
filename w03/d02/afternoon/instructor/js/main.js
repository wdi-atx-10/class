console.log('main.js loaded');

var army = new Army('WDI Gang');

console.log(army);

var soldier1 = new Soldier('John');
var soldier2 = new Soldier('Jane');
var soldier3 = new Soldier('Josh', 'general');

army.addSoldier(soldier1);
army.addSoldier(soldier2);
army.addSoldier(soldier3);

console.log('Number of soldiers in the army: ', army.getSoldierCount());

army.deploy();
