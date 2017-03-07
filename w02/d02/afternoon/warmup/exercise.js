var array1 = ['cow','lamb',5,6,3,6];
var array2 = ['kangaroo','crocadile'];
var array3 = [];
var decideArrayToUse = (array1.length > array2.length ? array1.length : array2.length);

for(var i=0;i < decideArrayToUse ;i++){
  if(typeof array1[i] !== 'undefined'){
    array3.push(array1[i]);
  }
  
  if(typeof array2[i] !== 'undefined'){
    array3.push(array2[i]);
  }
}

console.log(array3)
