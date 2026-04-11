// What is Function
// Block of code that perform the specific TaskController, can be invoked whenever needed

// Here name is parameter
function myfunction(name = "user"){
    // here name act as local variable of this function scope
    console.log("welcome to JS")
    console.log(`Welcome ${name}`)
}

// Here dewang is an argument
myfunction('dewang');
myfunction();


//sum function
function sum(a,b){
    return a + b;
}

// multiplication function
function multiply(a,b){
    return a*b;
}



// Arrow function 
// compact way of writing of function, these function mostly used for doing the small task


const add = (a,b) => {
    return a +b
};

let x = add(2,3)
console.log(x)




// forEach loop in Array
// it's a method used for array and string as function,
// means when a function is particulary used any object is known as method


// callback is a function that is passed to another function is known as callback 
console.log("__________________________________");

let arr = [1,2,3,4,5,6,7,8,9]
// arr.forEach(function printVal(x){
//     console.log(x)
// })

let crr = ["delhi" , "mumbai" , "jyoti"]
crr.forEach((val , index) => {
    console.log(`The value of items is ${val} at index is ${index}`)
});


// What is Higher Order Function : These are the function that are used to that take the another function as 
// parameter or returned the function 



// Map Method in Array

// arr.map(callbackfun(CSSMathValue, index, array))


let newarr = arr.map((value) => {
        return value+2
})

console.log(newarr);
// When value is even → you return the value ✅
// When value is odd → your function returns nothing ❌
// In JavaScript, a function that doesn't return anything implicitly returns undefined.






// Filter

let num = [2,3,1,2,5,2,5,4,7,6,4,7,8,9,5,3,6]
let newNum = num.filter((items)=>{
   return items%2 === 0
})

console.log(newNum);




// Reduce 
// Perform some operation & reduce the array to a single value. It returns that signle value

let items = [1,2,3,4,5,6,6,7,8,9]
const initial = 0
const sumWithInitial = items.reduce((prev,curr) => {
    return prev > curr ? prev : curr;
});

console.log(sumWithInitial);
