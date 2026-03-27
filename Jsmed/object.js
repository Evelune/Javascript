// An object is a collection of properties, and a property is an association between a name (or key) and a value. The value of a property can be a function, in which case the property is known as a method. In JavaScript, objects are used to store keyed collections of various data and more complex entities.


// Syntax for creating an object
// const obj = {
//     key1: value1,
//     key2: value2,
//     ...
// };


// Objects literal syntax
// Objects can be created using the object literal syntax, which is a comma-separated list of key-value pairs wrapped in curly braces {}. The keys are strings (or Symbols), and the values can be of any type, including other objects or functions.

const person = {
    name: "Dewang",
    age: 23,
    city: "Delhi",
    isStudent: true,
    hobbies: ["coding", "gaming", "traveling"],
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

// if you want to access the properties of an object, you can use either dot notation or bracket notation. Dot notation is more concise and easier to read, while bracket notation allows you to access properties with keys that are not valid identifiers (e.g., keys with spaces or special characters) or when the key is stored in a variable.

// Dot notation
console.log(person.name) // Dewang
console.log(person.age) // 23

// Bracket notation 
console.log(person["name"]) // Dewang
console.log(person["age"]) // 23

// use only [] 


// ++++++++++++++++++++++++++++++++++++
console.log(person["name"]) // Dewang
console.log(person["age"]) // 23
person.greet() // Hello, my name is Dewang and I am 23 years old.





person["name"] = "Jyoti"
person["age"] = 24
person["city"] = "Dehradun"
person["hobbies"]= ["Kidding", "Cooking", "Traveling","Loving","Singing"]
console.log(person)

// freez method is used to freeze an object. A frozen object can no longer be changed; freezing an object prevents new properties from being added to it, existing properties from being removed, prevents changing the enumerability, configurability, or writability of existing properties, and prevents the values of existing properties from being changed. In essence the object becomes effectively immutable. The method returns the object that was passed in.
// Object.freeze(person)

// after freezing the object, we cannot change its properties


person["greetNew"] = function() {
    return `Hello, I am ${this.name} How are you? Jaan!`
}

let result = person.greetNew()
console.log(result) // undefined because the greetNew function does not return anything, it only logs a message to the console. When a function does not explicitly return a value, it returns undefined by default.