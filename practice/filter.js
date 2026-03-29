let arr = [1,2,3,4,5,6,7,8,9,10]


let updatedArray = arr.map((num)=>{
    if(num <=5){
        return num*5
    }
    return num
})

let result = updatedArray.filter((num)=>{
    return (num%5 == 0)
})

console.log(result)



//*******************************************************/

const data = [
    {
        name : "Evelune",
        age : 23,
        hobby : "singing",
        status : "active"
    },
    {
        name : "Tokoyo",
        age : 25,
        hobby : "dance",
        status : "active"
    },
    {
        name:"dewang singh",
        age : 25,
        hobby : "unknown",
        status : "inactive"
    }
]

let new_result = data.filter((value)=>{
   return value.status  === "active"
})

console.log(new_result)



// Array → use filter, map, forEach directly
// Object → use Object.entries()