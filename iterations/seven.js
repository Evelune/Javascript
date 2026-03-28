const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let ans = myNums.filter((nums) => nums + 10);
console.log(ans); // [11, 12, 13, 14, 15, 16, 17, 18, 19, 20] - filter does not modify the original array. It returns a new array with the elements that satisfy the provided condition. In this case, since the condition is not properly defined (nums = nums + 10 does not return a boolean value), it will return a new array with all the elements of the original array.

const output = myNums.map((nums) => nums + 10);
console.log(output); // [11, 12, 13, 14, 15, 16, 17, 18, 19, 20] - map creates a new array populated with the results of calling a provided function on every element in the calling array. In this case, it adds 10 to each element of the original array and returns a new array with the modified values.

// filter vs map
// filter is used to create a new array with all elements that pass the test implemented by the provided function. It returns a new array with only the elements that satisfy the condition.
// map is used to create a new array populated with the results of calling a provided function on every element in the calling array. It returns a new array with the modified values based on the provided function.

myNums.forEach((value, index) => (myNums[index] = value + 10));

console.log(myNums); // [11, 12, 13, 14, 15, 16, 17, 18, 19, 20] - forEach executes a provided function once for each array element. In this case, it modifies the original array by adding 10 to each element. Therefore, the original array is changed and now contains the modified values.

const result = myNums.filter((nums) => nums > 15);
console.log(result); // [16, 17, 18, 19, 20] - filter creates a new array with all elements that pass the test implemented by the provided function. In this case, it returns a new array with only the elements that are greater than 15 from the modified original array.

const result2 = myNums
  .map((nums) => nums * 10)
  .map((nums) => nums + 1)
  .filter((nums) => nums < 30);
console.log(result2); // [31, 32, 33, 34, 35] - This code first uses map to add 10 to each element of the original array, then it uses another map to multiply each element by 1 (which does not change the values), and finally it uses filter to return a new array with only the elements that are greater than 30.


