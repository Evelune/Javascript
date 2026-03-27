// const love  = new Object();
// console.log(love) // {}

// const love1 = {}
// console.log(love1) // {}


// love["name"] = "Jyoti"
// love["age"] = 23
// love["city"] = "Dehradun"
// love["hobbies"]= ["Kidding", "Cooking", "Traveling","Loving","Singing"]


// console.log(love)


let person = new Object();
person = {
    name: "jyoti",
    age: 23,
    city: "Dehradun",
    hobbies: ["Kidding", "Cooking", "Traveling","Loving","Singing"],
    fullName: {

        userfullName:{
        firstName: this.name,
        lastName: "Sain"
}
    }
};



console.log(typeof null) // object


const obj1 = {"a": 1, "b": 2}
const obj2 = {"c": 1, "d": 2}

// assign is used to merge two or more objects into a single object. It takes a target object and one or more source objects as arguments and copies the properties from the source objects to the target object. The syntax is as follows: 
// Object.assign(target, ...sources)
const final_obj = Object.assign({}, obj1, obj2)
console.log(final_obj) // { a: 1, b: 2, c: 1, d: 2 }


console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++")
const target = { a: 1, b: 2 };
const source = {b :4 ,c : 5};
console.table(Object.assign(target, source))
const returnedTarget = Object.assign(target, source);

console.log(target) // { a: 1, b: 4, c: 5 }
console.log(returnedTarget) // { a: 1, b: 4, c: 5 }
console.log(target === returnedTarget) // true


const newObj = {...obj1, ...obj2}
console.log(newObj) // { a: 1, b: 2, c: 1, d: 2 }



console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++")
console.table(Object.keys(person)) // [ 'name', 'age', 'city', 'hobbies', 'fullName' ]
console.log(Object.values(person)) // [ 'jyoti', 23, 'Dehradun', [ 'Kidding', 'Cooking', 'Traveling', 'Loving', 'Singing' ], { userfullName: { firstName: undefined, lastName: 'Sain' } } ]


console.log(Object.hasOwnProperty('name')) // true