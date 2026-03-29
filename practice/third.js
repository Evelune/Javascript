// For Each loops

// const { use } = require("react");

let arr = [1,2,3,4,5,6,7,8,9,10]

arr.forEach((num) => {
    console.log(num)

});

const obj = {
    name : "Tokoyo",
    age : 23,
    address : "Luncknow"
}

Object.entries(obj).forEach(([key, value]) => {
  console.log(key, value);
});

console.log(Object.entries(obj))



// Object.keys(obj).forEach((key) => {
//   console.log(key);
// });



// Method used	What you get
// Object.keys()	only keys
// Object.values()	only values
// Object.entries()	key + value