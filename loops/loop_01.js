// const prompt = require
const prompt = require("prompt-sync")();

// let n = prompt("Enter the number : ");
// for(let i = 1 ; i<=n;i++){
//     console.log(`${i} i love u `)
// }



// for-of loop
let str = "Dewang"
for(let v of str){
    console.log(v);
    
}


//for in loop
let student = {
    name : "Evelune",
    age : 23,
    hobby : "fun discussion"
}

for(let items in student){
    console.log(student[items])
}


// practice Question
let gameNumber = 25
let guessNumber = null
do{
     guessNumber = Number(prompt("Guess the game number"))
}while(gameNumber != guessNumber)
console.log("Congraculation your guess the right number");



let st = "dewang singh"
let inp = prompt("Enter your name : ")
console.log(inp);

