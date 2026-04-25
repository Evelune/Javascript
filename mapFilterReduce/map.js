
let arr = [2,3,4,5,6,7,8]


function double(x){
    return x*2
}


function triple(x){
    return x*3
}


function binary(x){
    return x.toString(2)

}



const doubleNewArr = arr.map(double)
const tripleNewArr = arr.map(triple)
const binaryNewArr = arr.map(binary)



console.log(doubleNewArr)
console.log(tripleNewArr)
console.log(binaryNewArr)