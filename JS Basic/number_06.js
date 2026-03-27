
const score = 999
console.log(score)
console.log(typeof score)


const balance = new Number(70)
console.log(balance)
console.log(typeof balance)

console.log(typeof balance.toString())


// In JavaScript, toFixed() is a method used with numbers to control how many digits appear after the decimal point.
console.log(balance.toFixed(2))


const hundered = 100000
console.log(hundered.toLocaleString())
console.log(hundered.toLocaleString('en-IN'))


console.log(Number.MIN_SAFE_INTEGER)
console.log(Number.MIN_VALUE)
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MAX_VALUE)



// +++++++++++++++++++++++++++++ Math Library +++++++++++++++++++++++++++++++++++++
console.log(Math)
console.log(Math.abs(-78))
console.log(Math.round(4.3))
console.log(Math.round(4.6))
console.log(Math.ceil(4.2))
console.log(Math.floor(4.9))


console.log(Math.sqrt(3))

console.log(Math.min(2,3,4,1,4))
console.log(Math.max(2,3,4,9,6,1,4))


let aa=((Math.random()*10)+1)
console.log(aa)
// let one =aa.toPrecision(1)
console.log(Math.round(aa))

