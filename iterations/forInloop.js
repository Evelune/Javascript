const myObject = {
    name: "jyoti",
    age: 23,
    city: "Dehradoon",
    hobby: "singing"
};

for (const key in myObject) {
    console.log(key + ': ' + myObject[key]);
    
}
