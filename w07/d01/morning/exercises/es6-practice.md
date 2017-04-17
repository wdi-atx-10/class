# ES6 Practice

Convert the following ES5 code to ES6. 

### Template Literals

```js
// Template literals
var li = '<li>' +
  '<div class="row">' +
  '<div class="col-md-4">' +
    '<img src="' + moviePoster + '" height="250" alt="" />' +
  '</div>' +
  '<div class="col-md-8">' +
     '<h2>' + movieTitle + '</h2>' +
  '</div>' +
   '</div>' +
'</li>';
```

```js
var lilBoy     = "Hogarth";
var vinDiesel  = "Iron Giant";
var friendship = "best friends";

console.log("At first the " + vinDiesel + " worried " + lilBoy + ", but he " +
            "quickly realized they were " + friendship.toUpperCase() + "!");
```

### Block Scope 

```js
// This variable should not be reassignable.
var|let|const shrek = "ogre";

// This variable should be accessible outside of the block scope
var|let|const fiona = "princess";

fiona = shrek;

if (fiona === "ogre") {
  // This variable should only be valid in this block.
  var|let|const thePeople = "scared";
  console.log(thePeople);  // scared

  // This variable should only be valid in this block and should not be reassignable.
  var|let|const farquad = "dufus";
  console.log(farquad); // dufus
}

console.log(shrek); // ogre
console.log(fiona); // ogre

try {
  // Trying to change the value of `thePeople`
  thePeople = "we want a sequel";
} catch (err) {
  // but an `thePeople is not defined` error should occur.
  console.log(err);
}
```

Although constants don't change, this is true to a certain extent. We'll discuss more afterwards

```js
// Does the fact that account is constant mean that we can't update password?
// Why, or why not? And if not, how could we make it so that we can't?
// Hint: Thing to google is object freeze

const account = {
  username: "marijn",
  password: "xyzzy"
}

account.password = "s3cret" // (*much* more secure)

console.log(account.password)

// source: http://marijnhaverbeke.nl/talks/es6_falsyvalues2015/exercises/#Constant_non-constance
```

#### Challenge

```js
// This is a typical mistake to make in JavaScript. We create a number of
// functions in a loop, and refer to an outside variable from these functions.
// All of them will end up referring to the same variable, which ends up being
// incremented to 10. Thus, callbacks[2] does not log 2. It logs 10, as do all
// functions in the array.
//
// Do you know the solution for such situations in ES5? Does ES6 provide a
// cleaner solution?

// TIP: The following could be solved with one simple ES6 change
var callbacks = []
for (var i = 0; i < 10; i++) {
  callbacks.push(function() { console.log(i) })
}

callbacks[2]()

// Source: http://marijnhaverbeke.nl/talks/es6_falsyvalues2015/exercises/#Closing_over_scope
```

### Arrow Functions 

Convert the following to arrow functions

```js
function multiply(num1, num2) {
  return num1 * num2;
}

function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}

// This function returns a string padded with leading zeros
function padZeros(num, totalLen) {
  var numStr = num.toString();             
  var numZeros = totalLen - numStr.length; 
  for (var i = 1; i <= numZeros; i++) {
    numStr = "0" + numStr;
  }
  return numStr;
}

function power(base, exponent) {
  var result = 1;
  for (var i = 0; i < exponent; i++) {
    result *= base;
  }
  return result;
}

function greet(who) {
  console.log("Hello " + who);
}
```

#### Challenge

```js
var lydia = {
  esp: function() {
    this.friends = '';
    var spookyGirl = this;
    setImmediate(function() {
      spookyGirl.friends = "ghosts";
      console.log(spookyGirl.friends)
    });
  }
};

lydia.esp();
```



