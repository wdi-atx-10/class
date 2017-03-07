## My Austin Food Truck

**25 min**

There's no shortage of great options for food trucks in Austin, but you've got an idea for one that would top them all. Let's create a JavaScript object that would do your imaginary food truck justice. 

#### The End Result

With your completed food truck object, we'll be able to access the following properties and methods: 

```js
// Fill in this food truck object with all the properties and methods you'll need
var foodTruck = {
  // ... 
};

// Access the number of wheels on the food truck
var numberOfWheels = foodTruck.numberOfWheels;  // e.g. 4
console.log('Number of wheels: ', numberOfWheels);

// Determine whether the food truck is open 7 days a week 
if (foodTruck.isOpenSevenDaysAWeek) { // e.g. true
  console.log('Who needs sleep?');
} else {
  console.log("I need sleep, that's who");
}

// Get the most popular menu item 
var mostPopularItem = foodTruck.mostPopularItem;  // e.g. "Hot Cheetos"
console.log('Most popular menu item: ', mostPopularItem);

// Get the menu 
var menu = foodTruck.menuItems;   // e.g. ['Liver and Onions', 'Black eyed peas', 'Licorice'];

// Loop through the menu and output it
for (var i=0; i<menu.length; i++) {
  console.log('Menu item: ', menu[i]);
}

// Say something interesting (method)
foodTruck.saySomething(); // e.g. We love our food, and you will too

```

#### BONUS 

Add any additional properties and methods to the food truck object that you think could be useful. 
