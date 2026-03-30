const obj= {
    name : "tokoyo",
    age : 24,
    hobby : "singing"
}

// Object.entries(obj).forEach((value)=>{
//     console.log(`${value}`)
// })


Object.entries(obj).forEach(([key ,value])=>{
    console.log(`${key} ${value}`)
})