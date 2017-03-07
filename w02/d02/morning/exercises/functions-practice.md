## Functions Practice

**20 min**

Work through as many as these exercises as you can within the next 20 minutes!
<hr>
Write a function `lengths` that accepts a single parameter as an argument, namely
an array of strings. The function should return an array of numbers where each
number is the length of the corresponding string.

```javascript
var words = ["hello", "what", "is", "up", "dude"];
lengths(words);  # => [5, 4, 2, 2, 4]
```
<hr>
Write a function called `transmogrifier`. This function should accept three arguments, which you can assume will be numbers. Your function should return the "transmogrified" result.

The transmogrified result of three numbers is the product of the first two numbers, raised to the power of the third number.

For example, the transmogrified result of 5, 3, and 2 is `(5 times 3) to the power of 2` is 225. Use your function to find the following answers.

```javascript

transmogrifier(5, 4, 3);
transmogrifier(13, 12, 5);
transmogrifier(42, 13, 7);

```
<hr>
Write a function `wordReverse` that accepts a single argument, a string. The
method should return a string with the order of the words reversed. Don't worry
about punctuation.

```javascript
wordReverse("Now I know what a TV dinner feels like");
# => "like feels dinner TV a what know I Now"
wordReverse("Put Hans back on the line");
# => "line the on back Hans Put"
```
