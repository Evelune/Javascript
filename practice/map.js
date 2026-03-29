let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let newarr = arr.map((num) => {
    return num * 2;
});

console.table(newarr);



// 👉 Creates NEW array
// 👉 Use when you want to change values
// In JavaScript, **`.map()` is used to transform an array into a new array.**

// 👉 It takes each item, changes it, and returns a **new array with the updated values**.



const user = {
    name : "Evelune",
    age : 23,
    address : "dehradun"
}

Object.entries(user).map(([key])=>{
    console.log(`${key} : ${user[key]}`)
})



// Object = key → value
// Array = index → value

// 👉 map() only works on arrays
// 👉 So we convert object → array → then use map()


console.log(Object.entries(user))