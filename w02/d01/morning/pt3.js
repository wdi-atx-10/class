var groceryList = ['apples','bananas','oranges','cashews', 'cheese'];

// Methods

// add something to the end of the Array
groceryList.push('milk')
console.log(groceryList);

// add something to the beginning of the array
groceryList.unshift('gum');
console.log(groceryList);

// remove last item from an array, and set it to a variable with pop
var lastItem = groceryList.pop();
console.log(groceryList);
console.log(lastItem);

var firstItem = groceryList.shift();
console.log(groceryList);
console.log(firstItem);

/* Push / Pop will add/remove from  end of array, unshift / shift will add/remove from beginning of array. */

// Splice(where to start, how many to remove)
groceryList.splice(0,2)
console.log(groceryList)

// Slice returns to us a new array of what we are slicing out, same param syntax as splice
var newList = groceryList.slice(1,3);
console.log(newList);

// Concat method adds item to array and then returns that array, does not modify the array that you use it on. it can also take another array, and join them together.
var newList = groceryList.concat(['eggs','meat']);
groceryList.concat(['milk','eggs'])
console.log(newList);

// join takes an array and turns it into a string
var newList = groceryList.join('')
console.log(newList);

// split takes a string, and turns it into an array
var myString = 'almost done!!'.split('o');
console.log(myString);
