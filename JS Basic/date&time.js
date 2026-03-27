//  Dates: Date is an object in javascript
 
// Year , Month , date , hr, min , sec
let myDates = new Date(2023, 0 ,23,3,5 ,34)
// console.log(myDates)
// console.log(myDates.toString())
// console.log(myDates.toDateString())
console.log(myDates.toLocaleString())
// console.log(myDates.toJSON())


let newday = new Date()
console.log(newday.getMonth())

newday.toLocaleString('default',{
    weekday : "long"
})

console.log(weekday)
