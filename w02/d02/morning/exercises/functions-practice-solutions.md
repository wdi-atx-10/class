## Functions Practice (Solutions)

```js
var words = ["hello", "what", "is", "up", "dude"];

function lengths(wordsArray) {
	var lengthsArray = wordsArray.map(function(val) {
		return val.length;	
	});
	
	console.log(lengthsArray);
}

lengths(words);
```

<hr>

```js
function transmogrifier(val1, val2, power) {
	var result = Math.pow(val1 * val2, power);
	
	console.log(result);
}

transmogrifier(5, 3, 2); // 225
```

<hr>

```js
function wordReverse(string) {
	// Split string into array elements by space
	var stringArray = string.split(' ');
	
	// Reverse all elements of array
	stringArray.reverse();
	
	// Combine array elements into a single string again
	stringArray.join(' ');
	
	console.log(stringArray);
}

wordReverse("Now I know what a TV dinner feels like");
//=> "like feels dinner TV a what know I Now"
```
