// array

// const myArr = [0,1,2,3,4,5,true,"dewang"]
// console.log(myArr)

// Array element can be acced by the index
// console.log(myArr[2])
// myArr.push("6")
// console.log(myArr)

let myArr2 = new Array(1,2,3,4,5)
console.log(myArr2)

// push method adds one or more elements to the end of an array and returns the new length of the array.
myArr2.push(6)
console.log(myArr2)

// pop method removes the last element from an array and returns that element. This method changes the length of the array.
myArr2.pop()
console.log(myArr2)


// unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
myArr2.unshift(123,321)
console.log(myArr2)


// shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
myArr2.shift()
console.log(myArr2)


console.log(myArr2.includes(3)) // true 
console.log(myArr2.indexOf(4)) // 3


// slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
console.log(myArr2.slice(1,4)) // [321, 2, 3]


// splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. It returns an array containing the deleted elements. If only one element is removed, an array of one element is returned. If no elements are removed, an empty array is returned.
console.log(myArr2.splice(1,2)) // [321, 2]
console.log(myArr2) // [123, 3, 4, 5]


cons