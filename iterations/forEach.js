const arr = [1, 2, 3, 4, 5];

// forEach loop
arr.forEach(function(value) {
    console.log(`The value is: ${value}`);
});


arr.forEach((value , index , array) => {
    console.log(value , index , array);
});

// for...in loop is used to iterate over the properties of an object, while for...of loop is used to iterate over the values of an iterable object (like arrays, strings, etc.).
// for...in loop iterates over the keys of an object, while for...of loop iterates over the values of an iterable object.
// for...in loop does not guarantee the order of iteration, while for...of loop iterates in the order of the values in the iterable object.
// for...in loop can be used with objects, while for...of loop can be used with arrays, strings, maps, sets, and other iterable objects.    
// for...Each loop is used to execute a provided function once for each array element. It is not used for iterating over objects or other iterable objects.