// Filter method used to fitler in array

let arr = [2,3,4,5,6,7,8,9]

function even(x){
    return x%2 != 0
}

let newArr = arr.filter(even)
console.log(newArr);

