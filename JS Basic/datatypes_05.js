// Primitive

// 7 types : String, number, boolean, null, undefined, symbol, BigInt, 

const score = 100
const state = true


const id = Symbol('123')
const id1 = Symbol('123')
console.log(id == id1)

const bigNumber = 786875667567767676n
console.log(bigNumber)



// Reference Type: Non Primitive
// Arrays, objects, Functions,    // the datatype of non primitive are objects

const hero = ["skatiman", "kriss", "hanuman"]
console.log(hero)
console.log(hero[2])


let  myObj = {
    name:"Hitesh reshmiya",
    age : 23
}

console.log(myObj)
console.log(myObj.name)




// Function

let myFunction = function(){
    console.log("hello World")
}

console.log(typeof myFunction)
console.log(myFunction())




// —————————————————————————————————————————————————————————————————————————

// Stack Memory => Primitive type -> In stack you get the copy of referenece value

let myYoutubeName = "singhDewang"



// Heap Memory => Non-Primitive type -> In this you get the original reference

let userOne = {
    email : "dewangSingh@gmail.com",
    age: 23
}


let userTwo = userOne

userTwo.email = "singhDewang@gmail.com"


console.log(userOne)

console.table(userOne)