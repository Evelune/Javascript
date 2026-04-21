// Closure :
// It is defined as function, along with lexical scope, bundle together to form a closure

function a(){
    var a = 10
    return function b(){
        console.log(a);
        
    }
}

// a() return the function b which having variable and fucntion as package called closure
a()()



// Lets make a closure function using closure
function aa(){
    var a = 0
    return function increament(){
        a++
        console.log(a);
        
    }
}

let ab = aa()
ab()
ab()