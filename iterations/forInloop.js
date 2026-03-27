const myObject = {
    name: "jyoti",
    age: 23,
    city: "Dehradoon",
    hobby: "singing",
    // name : "Jyoti Sain"
};

for (const key in myObject) {
    console.log(key + ': ' + myObject[key]);
}

// Difference between object and map
// 1. Object is a collection of key-value pairs, while Map is a collection of key-value pairs where keys can be of any data type.
// 2. Object keys are always strings or symbols, while Map keys can be of any data type, including objects and functions.
// 3. Object does not maintain the order of its properties, while Map maintains the order of its entries.
// 4. Object has a prototype chain, while Map does not have a prototype chain.
// 5. Object has built-in methods like hasOwnProperty(), while Map has built-in methods like set(), get(), and delete().


// Differences between for...in and for...of loops in JavaScript:
// 1. for...in loop is used to iterate over the properties of an object, while for...of loop is used to iterate over the values of an iterable object (like arrays, strings, etc.).
// 2. for...in loop iterates over the keys of an object, while for...of loop iterates over the values of an iterable object.
// 3. for...in loop does not guarantee the order of iteration, while for...of loop iterates in the order of the values in the iterable object.
// 4. for...in loop can be used with objects, while for...of loop can be used with arrays, strings, maps, sets, and other iterable objects.


// example of for...in loop
const person = {
    name: "Alice",
    age: 30,
    city: "New York"
};

for (const key in person) {
    console.log(key + ': ' + person[key]);
}

// example of for...of loop
const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];

for (const name of names) {
    console.log(name);
}


// Here char is the variable that represents each character in the string "Hello, World!" during the iteration of the for...of loop. The loop will iterate through each character in the string and log it to the console.
let str = "Hello, World!";
for (const char of str) {
    console.log(char);
}

// Here char is the variable that represents the index of each character in the string "Hello, World!" during the iteration of the for...in loop. The loop will iterate through each index in the string and log it to the console.
for (const char in str) {
    console.log(char);
}



const myMap = new Map();
myMap.set("name", "jyoti");
myMap.set("age", 23);
myMap.set("city", "Dehradoon");
myMap.set("hobby", "singing");



// Here for in loop not work with map because map is an iterable object and for in loop is used to iterate over the properties of an object, while for of loop is used to iterate over the values of an iterable object (like arrays, strings, etc.). So we can use for of loop to iterate over the entries of the map.
for(let key of myMap){
    console.log(key[0] + ': ' + key[1]);
}