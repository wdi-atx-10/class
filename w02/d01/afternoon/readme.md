# JS Control Flow

## Learning Objectives
- Explain what Control Flow is
- List the main comparison operators and their purposes
- Predict the output of boolean expressions, including "truthy" and "falsey" values
- Write syntactically correct conditional statements
- Use comparison operators to evaluate and compare statements
- Use boolean logic (!, &&, ||) to combine and manipulate conditionals
- Compare & contrast for and while loops
- Identify the dangers of a loop that does not alter the state of the program
- Compare and contrast the 'break' and 'continue' statements and identify when to use each

## Truthy/Falsey

Anything NOT falsey is truthy - so what is falsey?

##### All of the following become false when converted to a Boolean:

- false
- 0 (zero)
- "" (empty string)
- null
- undefined
- NaN: Not a Number

##### All other values become true when converted to a Boolean

#### Basic Boolean Operators

| English | "and" | "or" | "not" or "bang" | "double bang" |
| ------------- |:-------------|:-------------|:-------------| :------- |
| Javascript | `&&` | &#124;&#124; | `!` | `!!` | |  
| e.g. | `a && b` | a  &#124;&#124; b | `!b` | `!!b` |
| English | A and B | A or B | not B | not NOT B |

#### Boolean Comparison Operators

| strict equality | loose equality | not strictly equal | not loosely equal | greater than | less than | greater than or equal to | less than or equal to |
| ------------- |:-------------|:-------------|:-------------|:-------------|:-------------|:-------------|:-------------|
| `===` | `==` | `!==` | `!=` | `>` | `<` | `>=` | `<=` |

### Boolean/Logical Operators
Logical operators will always return a boolean value `true` or `false`. Use these when we want to check more than one variable in conditional statement.

- **AND**, denoted `&&`
- **OR**, denoted `||`
- **NOT**, denoted `!`

#### && (AND)

The `&&` operator requires both left and right values to be `true` in order to return `true`:

```js
true && true
//=> true
```

Any other combination is false.

```js
true && false
//=> false

false && false
//=> false
```

#### || (OR)

The `||` operator requires just one of the left or right values to be `true` in order to return true.

```js
true || false
//=> true

false || true
//=> true

false || false
//=> false
```

Only `false || false` will return `false`

The `!` takes a value and returns the opposite boolean value, i.e.

```js
!(true)
//=> false
```

### Loops

For Loop Syntax:
```js
	for (var i = start; i < end; i++) {
	  // do something
	}
```
While Loop Syntax:
```js
while (true) {
  // an infinite loop!
}
```

Do While Loop Syntax:
  ```js
do {

    // The thing to do at least once!

} while(  /* some condition */  );
```

*More Advanced Example:* You are flipping a coin and want to stop when it lands on tails. A for loop wouldn't work here. `.floor` rounds down. `.random` picks between 0-1.

```js
var coinFace = Math.floor(Math.random() * 2);

while(coinFace === 0){
	console.log("Heads! Flipping again...");
	var coinFace = Math.floor(Math.random() * 2);
}
console.log("Tails! Done flipping.");
```


### `break` and `continue`

- The `break` statement terminates the current loop - it "jumps out" of a loop.

- In contrast to the break statement, `continue` does not terminate the execution of the loop entirely, it "jumps over" one iteration in the loop.
	- In a `while` loop, it jumps back to the condition.
	- In a `for` loop, it jumps to the update expression.
