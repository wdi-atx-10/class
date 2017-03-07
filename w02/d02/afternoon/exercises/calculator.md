# Javascript Calculator 

**20 mins**

Your task is to create a Javascript object that represents a calculator. It should have methods that provide it with the following functionality...

* Addition
* Subtraction
* Multiplication
* Division

You should be able to run these methods like so from your browser's Javascript console...
```js
calculator.add(1,2);
// => 3
```

### Bonus 1

Give your calculator memory and allow it to persist the result of multiple operations.

* Store this result in a `value` property.
* Give your calculator a `clear` method that resets `value`.

For example:

```js
calculator.add(1)
// value is 1
calculator.add(2)
// value is 3
calculator.add(2)
// value is 5
calculator.multiply(2)
// value is 10
```
