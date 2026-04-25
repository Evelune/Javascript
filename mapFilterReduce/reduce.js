// Reduce method
const arr = [2, 3, 4, 5, 6, 7, 8, 9];

// To find sun or max Element in array we use reduce
function sum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum
}

// console.log(sum(arr));


const point = [121,2,3,2,23,3,4,2]

//  Here first value accumulator collect the total value as sum
//  Current value here is the i 
// and second argument show the inital value of the accumulator value
let score = arr.reduce(function(acc,curr){
    acc = acc + curr
    return acc
},0);


console.log(score);



let newrr = [1,2,3,4,1,3,4,2,9,5,7,4,3]

function maxElement(newArr){
    let max = 0
    for(let i = 0 ; i<newArr.length;i++){
        if(max < newArr[i]){
            max = newArr[i]
        }
    }
    return max
}

console.log(maxElement(newrr))


let findMax = newrr.reduce(function(acc ,curr){
    if(acc < curr){
        acc = curr
    }
    return acc
},0)

console.log(findMax);
