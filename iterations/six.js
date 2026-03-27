const arr = [1, 2, 3, 4, 5];

// For each does not return a new array, it simply executes the provided function once for each array element. Therefore, it returns undefined.
const value = arr.forEach(element => {
    console.log(element);
});

// console.log(value); // undefined

// *****************************************************

const myNum = [1, 2, 3, 4, 5,6,7,8,9,10];

// let outpout = myNum.filter((num) => { 
//     return num > 4; 
// }); // [5, 6, 7, 8, 9, 10]
// console.log(outpout);


// const newNums = [];
// myNum.forEach((num) => {
//     if(num > 4) {
//         newNums.push(num);
//     }
// });
// console.log(newNums); // 5, 6, 7, 8, 9, 10



const books = [
    { title: 'Book 1', author: 'Author 1', published: 2001,edition: 1 },
    { title: 'Book 2', author: 'Author 2', published: 2002,edition: 2 },
    { title: 'Book 3', author: 'Author 3', published: 2003,edition: 3 },
    { title: 'Book 4', author: 'Author 4', published: 2004,edition: 2 },
    { title: 'Book 5', author: 'Author 5', published: 2005,edition: 4 }
];



const filterBooksResult = books.filter((books) => {
    return books.published > 2002 && books.edition >= 2;
});

console.log(filterBooksResult); // [ { title: 'Book 3', author: 'Author 3', published: 2003, edition: 3 }, { title: 'Book 5', author: 'Author 5', published: 2005, edition: 4 } ] 