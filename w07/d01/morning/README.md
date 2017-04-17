## ES6

### Learning Objectives

* Understand how ES6 differs from JavaScript now
* Explain when we can and can't use ES6 with the landscape today
* Use the following enhancements in code:
  - Template literals / String interpolation
  - `let` vs `const` vs `var`
  - Block scope
  - Arrow functions
  - Shorthand properties / Object enhancements
  - Default parameters
  - Classes and inheritance
  - Spread operator
  - Destructured assignment
  - Import and export
  - Promises

### Babel

https://babeljs.io/

### Webpack

https://webpack.github.io/

### String Updates

#### Multi-line Strings

```js
// ES5
"<h1>❤ unicorns</h1>\n" +
"<p>Unicorn pegasus pony rainbows pegasus pony kittens. Pop pigeon rainbows pony delight kittens kittens surprise. Wereunicorn delight pony pony social unicorn surprise.</p>\n" +
"<ol>\n" +
"<li>Yea! Yeah!</li>\n" +
"<li>Yeah, woo-hoo!</li>\n" +
"</ol>"
```

```js
// ES6
`<h1>❤ unicorns</h1>
<p>Unicorn pegasus pony rainbows pegasus pony kittens. Pop pigeon rainbows pony delight kittens kittens surprise. Wereunicorn delight pony pony social unicorn surprise.</p>
<ol>
<li>Yea! Yeah!</li>
<li>Yeah, woo-hoo!</li>
</ol>`
```

#### Template Literals / String Interpolation

```js
// ES5
var name = "Sam", age = 71;
"Hello my name is "+ name +" and I'm "+ age +" years old!"
```

```js
// ES6
var name = "bob", age = 71;
`Hello my name is ${name} and I'm ${age} years old!`
```

#### New String Methods

```js
// ES5
var string = 'food';
var substring = 'foo';

console.log(string.indexOf(substring) > -1);
```
```js
// ES6
const string = 'food';
const substring = 'foo';

console.log(string.includes(substring));
```

```js
// ES5
function repeat(string, count) {
    var strings = [];
    while(strings.length < count) {
        strings.push(string);
    }
    return strings.join('');
}
```

```js
// ES6
// String.repeat(numberOfRepetitions)
'meow'.repeat(3); // 'meowmeowmeow'
```

### `let` vs `const` vs `var`

#### Let

`let` is the new `var`.

The `let` statement declares a **block scope** local variable, optionally initializing it to a value.

```js
// ES5
function varTest() {
  var x = 1;
  if (true) {
    var x = 2;  // same variable!
    console.log(x);  // 2
  }
  console.log(x);  // 2
}

// ES6
function letTest() {
  let x = 1;
  if (true) {
    let x = 2;  // different variable
    console.log(x);  // 2
  }
  console.log(x);  // 1
}

varTest();
letTest();
```

#### Const

Everything `let` does `const` also does, except that `const` can't be reassigned. The const declaration creates a read-only reference to a value. It does not mean the value it holds is immutable. `const` requires an initial value.

```js
// ES6
const MY_FAV = 7;

// this will throw an error in Firefox and Chrome (but does not fail in Safari)
MY_FAV = 20;

// will print 7
console.log("my favorite number is: " + MY_FAV);
```

### Arrow Functions

Arrows are a function shorthand using the `=>` syntax. The two biggest motivations for arrows were **shorter functions** and **lexical `this`**. Arrows can make your code cleaner and more intuitive. 

#### Fat Arrows for Functions

```js
// ES5
var add = function(x, y) {
	return x + y;
}
```

```js
// ES6
var add = (x , y) => x + y;
```

> Tip: When only one variable is used, the parenthesis can even also be omitted `x => x * x`.

Arrows can also be used with block statements. It should be noted that in blocks the `return` is not automatic and needs to be explicitly stated. This still saves having to write `function`.

```js
// ES5
$('#pizza-btn').click(function (event) {
  preheatOven();
  pizzaInOven();
  return 'I love za!';
});

// ES6
$('#pizza-btn').click((event) => {
  preheatOven();
  pizzaInOven();
  return 'I love za!'
});
```

#### Fat Arrows for `this`

The `this` in an arrow function is set to the `this` value of the enclosing execution context.

**Context** refers to the object that the currently executing function is attached to - determined in most cases by how a function is called. The value of `this` references whatever the current context is. **Scope** is where a variable can be referenced (where it's defined).

Here we have a function, in this case an Object constructor function. Inside our function is a method that executes a callback function. We want the ovenTemp of the Oven to increase every 1000 ms.

```js
// ES5
function Oven () {
  this.ovenTemp = 0; // here `this` references instance of Oven constructor

  setInterval(function preheatOven() {
    // preheatOven() redefines context of `this`
    this.ovenTemp++;  // here `this` references the global object, undesired action
  }, 1000);
}
```

What does `this` refer to in both spots?
- The `Oven.ovenTemp` doesn't change because our callback changed the context of `this`.

How can we fix the problem?
- One way we can remedy the problem by [binding](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) `this`.

```js
// ES5
function Oven () {
  this.ovenTemp = 0; // here `this` references instance of Oven constructor

  setInterval(function preheatOven() {
    this.ovenTemp++;  
  }, 1000).bind(this);
}
```

Another, more performant, way to fix the problem is to store the top level `this` reference/context in a variable, commonly seen as `self = this`.

```js
// ES5
function Oven () {
  var self = this; // stores top level `this` reference
  self.ovenTemp = 0;

  setInterval(function preheatOven() {
    self.ovenTemp++; // performs desired action
  }, 1000);
}
```

A better solution with ES6 is to leverage the lexical scoping of arrow functions.

```js
// ES6
function Oven () {
  this.ovenTemp = 0;

  setInterval(() => {
    this.ovenTemp++;  // here `this` references instance of Oven constructor, as desired
  }, 1000);
}
```

In this particular example we can use an anonymous callback and refactor to one line.

```js
// ES6
function Oven () {
  this.ovenTemp = 0;
  setInterval(() => { this.ovenTemp++; }, 1000);
}
```

> Best practice is to use arrow functions whenever you need to preserve the value of `this`.

### Object Enhancements

```js
// ES6
let firstName = 'Mike';
let lastName = 'Jones';

let person = { firstName, lastName };

console.log(person);

let mascot = 'Moose';
let team = { person, mascot };

console.log(team);
```

Shorthand for methods:

```js
// ES6
let firstName = 'Mike';
let lastName = 'Jones';

let person = { 
  firstName, 
  lastName,
  sayHello() {
    console.log('I am saying hello');
  }
};

person.sayHello();
```

### Default Parameters

```js
// ES5
function addTwoNumbers(x, y) {
  x = x || 0;
  y = y || 0;
  return x + y;
}

// ES6
function addTwoNumbers(x=0, y=0) {
  return x + y;
}

addTwoNumbers(2, 4); // 6
addTwoNumbers(2); // 2
addTwoNumbers(); // 0
```

```js
// ES6
function append(value, array = []) {
  array.push(value);
  return array;
}

append(1); // 1
```

### Classes and Inheritance

```js
// ES5
function Pizza(name, temperature) {
  this.name = name;
  this.temperature = temperature
}

Pizza.prototype.heatUp = function () {
  return this.temperature + 20;
};
```

```js
// ES6
class Pizza {
  constructor(name, temperature) {
    this.name = name;
    this.temperature = temperature;
  }

  heatUp() {
    return this.temperature + 20;
  }
  
  static sayCool() {
  	console.log("cool!");
  }
}

Pizza.sayCool();
// > "cool!"

let za = new Pizza("cheese", "hot")

za.sayCool();
// TypeError: za.sayCool is not a function
```

#### Extending a Base Class

```js
// ES6
class Rectangle extends Polygon {
  constructor(height, width) {
    super(height, width);
    this.name = 'Rectangle';
  }
  
  // Here, sayName() is a subclassed method which
  // overrides their superclass method of the same name.
  sayName() {
    console.log('Sup! My name is ', this.name + '.');
    super.sayHistory();
  }
}
```

### Spread Operator

```js
// ES6
let first = [1, 2, 3];
let second = [4, 5, 6];

console.log(...first);

function add(a, b, c) {
  return a + b + c;
}

console.log(add(...second));
```

### Destructured Assignment

Destructing makes it easier to extract data from objects and arrays (even deeply nested) and store them in variables with a more convenient syntax.

```js
// ES5
var arr = [1, 2, 3, 4];
var a = arr[0];
var b = arr[1];
var c = arr[2];
var d = arr[3];

// ES6
let [a, b, c, d] = [1, 2, 3, 4];

console.log(a); // 1
console.log(b); // 2
```

```js
// ES5
var luke = { occupation: 'jedi', father: 'anakin' };
var occupation = luke.occupation; // 'jedi'
var father = luke.father; // 'anakin'

// ES6
let luke = { occupation: 'jedi', father: 'anakin' };
let {occupation, father} = luke;

console.log(occupation); // 'jedi'
console.log(father); // 'anakin'
```

For destructing objects the assigned name needs to match the keys of the object

```js
// ES6
let x = { y: "pizza", z: 100 }
let { foo, bar } = x // not useful: neither foo or bar are in 'x'

console.log(foo); // undefined
console.log(bar); // undefined
```

```js
// ES6
// Only interested in the `color` property of this array
var { color } = {
  color: 'blue',
  up: 'sky'
}

console.log(color);

// Interested in two properties
var { color, up } = {
  color: 'blue',
  up: 'sky'
}

console.log(color);
console.log(up);
```

```js
// Only interested in the third value of this array
let names = ['Mike', 'Joe', 'John']
let [,,john] = names;

console.log('Name is: ', john);
```

### Import and Export

```js
// File: lib/math.js

export function sum(x, y) {
  return x + y;
}
export var pi = 3.141593;
```

```js
// File: app.js

import * as math from "lib/math";
console.log("2π = " + math.sum(math.pi, math.pi));
```

```js
// File: otherApp.js

import { sum, pi } from "lib/math";
console.log("2π = " + sum(pi, pi));
```

## Reference

* http://www.es6fiddle.net
* https://egghead.io/courses/learn-es6-ecmascript-2015
* https://babeljs.io/docs/learn-es2015/
