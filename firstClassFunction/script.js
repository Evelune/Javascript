// Function Statement aka function Declaration
//  This is called function statement
function a(){
    console.log("a called")
}

// Function Expression
let b = function greet(){
    console.log("b called ");
}
b()

// The difference between function expression and function statment in hositing, a() will run with no error, while b give undefined becuase till the code reach at line number 10 than only function is assigned to b until than b is undefined.


// Anonymous Function 
// Function without name is called Anonymous Fucntion, when a function are used as values we use anonymous function
// function () {

// }

// Named Function Expression
let ab = function ab(){

}

// Difference between parameter and argument
// here a , b are called parameters
function sum(a,b){
    console.log(a+b)
}

// Here 5 ,5 is called argument
sum(5,5) 


// First Class Function
// When we function inside another function as argument is called first class function 
// Ability to use function as values and passed as argument to another function and can be returned from the another function is called first class function

var fcf = function(fun){
    return function (){

    }
}

function y(){

}

fcf(y)


// first class citizen is the same as first class function



// Arrow Function