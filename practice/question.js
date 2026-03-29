const users = [
  { name: "A", age: 20, status: "active" },
  { name: "B", age: 17, status: "inactive" },
  { name: "C", age: 25, status: "active" },
  { name: "D", age: 16, status: "active" }
];

// Get names of users who:

// are active
// and age > 18


let result = users.filter((value)=>(value.status === "active" && value.age > 18))
console.log(result)