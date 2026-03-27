// for of loop
const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];

// ["","","",...]
// [{name: "Alice", age: 25},{name: "Bob", age: 30},{name: "Charlie", age: 35},{name: "David", age: 40}]


for (let value of names) {
    console.log(`The value is: ${value} `);
}

const people = [
    {name: "Alice", age: 25},
    {name: "Bob", age: 30},
    {name: "Charlie", age: 35},
    {name: "David", age: 40}
]

for(let person of people){
    console.log(`${person.name} is ${person.age} years old.`);
}



const greeting = "Hello, Jyoti!";
for(let char of greeting){
    console.log(`Each character is: ${char}`);
}


// Map is a built-in JavaScript object that allows you to store key-value pairs. It provides a collection of methods to manipulate and access the data stored in the map. The keys in a map can be of any data type, and the values can also be of any data type. Maps are useful for situations where you need to associate values with unique keys and want to maintain the order of insertion.

const myMap = new Map();
myMap.set("name", "jyoti");
myMap.set("age", 23);
myMap.set("city", "Dehradoon");
myMap.set("hobby", "singing");

console.log(myMap);

// for(let key of myMap){
//     console.log(`Value of ${key[0]} is: ${key[1]}`);
// }


const myObject = {
    name: "jyoti",
    age: 23,
    city: "Dehradoon",
    hobby: "singing"
};

console.table(myObject);
for(let key in myObject){
    console.log(key + ': ' + myObject[key]);
}

console.log(Object.keys(myObject)); // This will give you an array of the keys in the object
console.log(Object.values(myObject)); // This will give you an array of the values in the object