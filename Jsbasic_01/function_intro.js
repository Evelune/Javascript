// function myfunction() {
//     console.log("This is my function");
// }

// myfunction();


// a,b,c are parameters
function add(a, b) {
    return a + b;
}

// 2,3,10,20 are arguments
console.log(add(2, 3)) // 5
console.log(add(10, 20))


function greet(name = "Guest") {
    return `Hello ${name}! Welcome to my Code!`;
}

console.log(greet("Jyoti")) // Hello Jyoti! Welcome to my Code!
console.log(greet()) // Hello Guest! Welcome to my Code!




// ... rest parameter is used to represent an indefinite number of arguments as an array. It allows a function to accept any number of arguments, which are then stored in an array. The syntax is as follows:
function calculateCartPrice( ...num1){
    return num1

}


console.log(calculateCartPrice(100,400 ,500)) // 100


const user = {
    username : "jyoti",
    age : 23,
    city : "Dehradun",

}

function displayUserInfo({username, age, city}) {
    return `Username: ${username}, Age: ${age}, City: ${city}`;
}

console.log(displayUserInfo(user)) // Username: jyoti, Age: 23, City: Dehradun



const array1 = [100, 200, 300, 400, 500]

function printFirstTwoElements(arr) {
    return `First Element: ${arr[0]}, Second Element: ${arr[1]}`;
}

console.log(printFirstTwoElements(array1)) // First Element: 100, Second Element: 200



// const obj = {
//     name: "Jyoti",
//     age: 23,
//     city: "Dehradun"
// }

function displayUserInfo1(user) {

    let a=  `Name: ${user.name}, Age: ${user.age}, City: ${user.city}`;
    console.log(a)

}

displayUserInfo1({
    name: "Jyoti",
    age: 23,
    city: "Dehradun"
})