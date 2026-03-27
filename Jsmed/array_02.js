let arr = ["Batman", "Superman", "Wonder Woman", "Flash", "Aquaman"]
console.log(arr)

let arr1 = ["Ironman", "Captain America", "Thor", "Hulk", "Black Widow"]
console.log(arr1)


// concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
let a = arr.concat(arr1)
console.log( a) // object

console.log(arr.push(arr1)) // original array is not changed

ddewang - gjfdfg




// ... spread operator is used to expand an iterable (like an array) into individual elements.
const all_arr = [...arr, ...arr1, ...Array.from("web3 is the future")]
console.log(all_arr)




const real_another_array = [1,2,3,4,[2,5,2,],[4,5,6,[1,2,3]]]
// flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(real_another_array.flat(2)) // [1, 2, 3, 4, 2, 5, 2, 4, 5, 6, Array(3)]



// isArray() method determines whether the passed value is an Array.
Array.isArray(arr) // true

// from() method creates a new, shallow-copied Array instance from an array-like or iterable object.
console.log(Array.from("Hello"))


console.log(Array.from({name: "Dewang", age: 23})) // [] because it is not an array-like or iterable object 
    

let ab = 2
let b = 3
let c = 4

// of() method creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments.
console.log(Array.of(ab,b,c)) // [2, 3, 4]