
var c = 90
if (true) {
    let a = 200
    const b = 250
    var c = 300
    console.log('Inside the block: ', a, b, c)
}

console.log('Outside the block: ', c)
// console.log('Outside the block: ', a) // ReferenceError: a is not defined
// console.log('Outside the block: ', b) // ReferenceError: b is not defined


if (true) {
    let username = "jyoti"
    if (username === "jyoti") {
        const website = "jyoti.com"
        console.log(username, website)

    }
    // console.log(website)
}
// console.log(username)




function addtwo(num){
    return num + 2
}

let x = addtwo(3)
console.log(x) // 5
// console.log(num) // ReferenceError: num is not defined   




// Here twoSum gives errpr like before initalization because of hoisting and temporal dead zone.
// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compilation phase. However, only the declarations are hoisted, not the initializations. This means that if you try to access a variable or function before it has been declared, you will get a ReferenceError.
// Temporal Dead Zone (TDZ) is the time between the start of a block and the point where a variable is declared. During this time, the variable is in a "dead zone" and cannot be accessed. If you try to access it, you will get a ReferenceError.


twoSum(3) // 5

const twoSum = function(num){
    return num + 2
}   

