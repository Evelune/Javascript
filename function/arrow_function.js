// // Here user object has a method welcomeMessage which uses the this keyword to access the username property of the user object. When we call user.welcomeMessage(), it will return a welcome message that includes the username of the user.

// // Here user is a object with properties username, password, price, and a method welcomeMessage. The welcomeMessage method uses the this keyword to access the username property of the user object and returns a welcome message that includes the username. When we call user.welcomeMessage(), it will return "Welcome jyoti to our website!" because the username property of the user object is "jyoti". If we change the username property to "jyoti123" and call user.welcomeMessage() again, it will return "Welcome jyoti123 to our website!" because the this keyword will now refer to the updated username property of the user object.


// const user = {
//     username : "jyoti",
//     password : "1234",
//     price : 1000,
//     welcomeMessage : function(){
//         // In a regular function, the value of this is determined by how the function is called. In this case, since welcomeMessage is a method of the user object, this will refer to the user object when the method is called.

//         // this.username will access the username property of the user object, which is "jyoti". So the output of the console.log statement will be: "Welcome jyoti to our website!"
//         return `Welcome ${this.username} to our website!`
//     }

// }


// console.log(user.welcomeMessage()) // Welcome jyoti to our website! 

// user.username = "jyoti123"
// console.log(user.welcomeMessage()) // Welcome jyoti123 to our website!



// console.log(this) // In the global scope, this refers to the global object (window in browsers, global in Node.js). So it will log the global object to the console.



// function chai1(){
//     console.log(this) // In a regular function, the value of this is determined by how the function is called. If you call chai() in the global scope, this will refer to the global object (window in browsers, global in Node.js). So it will log the global object to the console.
// }

// // chai()



// function chai(a){
//     let username = a
//     console.log(this.username) 
// }

// chai("jyoti")




// function love(){
//     let username = "jyoti"
//     console.log(this.username)  //Here this.username give undefined & this give global value
// }

// love()


// const love = function(){
//     let username = "jyoti"
//     console.log(this)  //Here this.username give undefined & this give global value
// }

// love()



const love = () =>{
    let username = "jyoti"
    console.log(this)  //Here this.username give undefined & this give {}
}

love()


//  Arrow functions do not have their own this context, so the value of this inside the arrow function will be determined by the surrounding context in which the function is defined. In this case, since addTwoNum is defined in the global scope, this will refer to the global object (window in browsers, global in Node.js). However, since we are not using this inside the arrow function, it does not affect the functionality of our code.
// const addTwoNum = (num1 , num2) =>{
//     return num1 + num2
// }


// Arrow functions can also be written in a more concise form when they have a single expression. In this case, the expression is implicitly returned without the need for the return keyword. So we can write the addTwoNum function as follows:

// if you use {} in arrow function then you have to use return keyword to return the value but if you remove {} then you don't need to use return keyword because it will return the value implicitly.
const addTwoNum = (num1 , num2) => (num1 + num2)

const addTwoNum1 = (num1 , num2) => ({name : "jyoti"})

console.log(addTwoNum(3,5))




arr = [1,2,3,4,5]
