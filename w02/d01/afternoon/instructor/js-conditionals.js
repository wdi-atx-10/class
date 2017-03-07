if (true) {
  // do something
}


if (blackhawksPlaying) {
  getTickets();
}

if (!blackhawksPlayingHome) {
  watchOnTv();
}

if (blackhawksPlayingHome){
  getTickets();
} else {
  watchOnTv();
}

if (blackhawksPlaying && gameInChi){
  getTickets();
} else {
  watchOnTv;
}


if (hasBike){
  rideToGA();
} else if (hasTransitPass) {
  busToGA();
} else {
  driveToGA();
}


var drink;

if (tooSleepy) {
  if (before5pm){
    drink = "coffee";
  } else {
    drink = "black tea";
  }
} else {
  if (hungry){
    drink = "smoothie";
  } else{
    drink = "water";
  }
}


// TERNARY OPERATOR

var age = 12;

var allowed = (age > 18) ? "yes" : "no";

if (age > 18) {
  console.log("yes");
} else {
  console.log("no");
}

var username = last_name ? first_name + last_name : first_name;

var username = first_name;
if (last_name) {
  username = first_name + last_name;
}

var bestCity = yourCity || "Austin";

var lunch = prompt("What do you want for lunch?");

switch(lunch){
  case 'sandwich':
    console.log("One sandwich coming right up!")
    break;
  case 'soup':
    console.log("Tomato soup on the menu!")
    break;
  case 'pie':
    console.log('That is a "very" unhealthy lunch.')
    break;
  default:
    console.log("You can eat "+ lunch)
}


var minutesBeforeWork = 90;

while (minutesBeforeWork) {
  console.log("getting ready!");
  minutesBeforeWork = minutesBeforeWork - 5;
}

var go = false;

do{
  console.log("Don't go unless you've stopped first");
} while(go);

// FOR LOOP SYNTAX

for (var i=start; i<end; i++ ) {
  // do something
}

for (var i=1; i<=10; i++ ){
  console.log(i);
}

for (var i=5; i<51; i+=5){
  console.log(i);
}


var cities = ["Austin", "Detroit", "dallas", "rome"];

for (var i = 0; i < cities.length; i++){
  console.log("I want to go to " + cities[i]);
}



// FIZZBUZZ

for (var i=1; i<=100; i++){
  if ((i % 3 === 0) && (i % 5 === 0)) {
    console.log("fizzbuzz");
  } else if (i % 3 === 0){
    console.log("fizz")
  } else if (i % 5 === 0){
    console.log("buzz")
  } else {
    console.log(i);
  }
}
