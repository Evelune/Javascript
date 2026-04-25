
const user = [
  { firstName: "Alice", lastName: "Smith", age: 25 },
  { firstName: "Bob", lastName: "Johnson", age: 30 },
  { firstName: "Charlie", lastName: "Williams", age: 35 },
  { firstName: "David", lastName: "Brown", age: 25 },
];

const output = user.reduce(function (acc , cur){
    if(acc[cur.age]){        
        acc[cur.age] = ++acc[cur.age]
    }
    else{
        acc[cur.age] = 1
    }
    return acc
},{})

console.log(output);

const arr = user.map(x => x.firstName + " " + x.lastName)
console.log(arr);

const newAge = user.filter(x => x.age <=30).map(x => x.firstName)
console.log(newAge)


const newOutput = user.reduce(function (acc,curr){
    if(curr.age <= 30){
        acc.push(curr.firstName)
    }
    return acc
},[])

console.log(newOutput);
