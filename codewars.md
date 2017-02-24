# Codewars 

Here are challenges we've done in class and possible solutions. 

### Jenny's Secret Message

https://www.codewars.com/kata/jennys-secret-message/train/javascript

### ES6 String Addition 

https://www.codewars.com/kata/es6-string-addition/train/javascript

### Convert number to reversed array of digits

https://www.codewars.com/kata/convert-number-to-reversed-array-of-digits/train/javascript

```js
function digitize(n) {
  var stringArray = n.toString().split('').reverse();
  
  return stringArray.map(function(val) {
    return parseInt(val, 10);
  });
}
```

### Count of positives/sum of negatives 

https://www.codewars.com/kata/count-of-positives-slash-sum-of-negatives/train/javascript

```js
function countPositivesSumNegatives(input) {
    var countPositive=0, sumNegative=0;
    
    if (!input || !input.length) return [];
    
    for (var i=0, x=input.length; i<x; i++) {
      if (input[i] > 0) {
        countPositive++;
      } else {
        sumNegative += input[i];
      }
    }
    
    return [countPositive, sumNegative];
}
```


