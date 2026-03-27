let firstName = "Dewang"
let lastName = "Singh"




// Not recommended
console.log(firstName + lastName)


// use string intercolection method used in modern days
console.log(`My name is: ${firstName.toUpperCase()} ${lastName.toUpperCase()}`)


const gameName = new String("Dewang-Singh")
console.log(gameName[0])
console.log(gameName.replace('w','o'))
console.log(gameName.__proto__)


console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))       // by this we can see the char present at that particular index
console.log(gameName.indexOf('w'))
console.log(gameName)


const newString1 = gameName.substring(-6,3)   //Here is negative value does not get respect


const newString = gameName.slice(-8,2)
console.log(newString)



const fullname = "     dewang Singh  "

console.log(fullname.trim())


const url = "https://dewang.com/dewang%07singh"
console.log(url.replace("%07","-"))

console.log(url.includes("sundar"))



console.log(gameName.split('e'))