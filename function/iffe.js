// IIFE : Immediately Invoked Function Expressions


// This is named IIFE Function
(function chai(){
    console.log("I am IIFE")
})();

// This is Anonymous IIFE Function
(function (username){
    console.log(`I am IIFE ${username}`)
})("jyoti");   //Here we are passing "jyoti" as an argument to the IIFE function, which will be received as the parameter "username" and logged to the console.

// IIFE is a JavaScript function that runs as soon as it is defined. It is a design pattern that is also known as a Self-Executing Anonymous Function and contains two major parts:

// The first part is the anonymous function with lexical scope enclosed within the Grouping Operator (). This prevents accessing variables within the IIFE idiom as well as polluting the global scope.
// The second part creates the immediately invoked function expression () through which the JavaScript engine will directly interpret the function. 

