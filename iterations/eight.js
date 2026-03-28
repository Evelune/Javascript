const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const initialValue = 0;

// const sum = arr.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue
// }, 0);


const totalsum = arr.reduce((accu,curr)=>(accu+curr), 0);
console.log(totalsum); // 55 - The reduce method executes a reducer function (that you provide) on each element of the array, resulting in a single output value. In this case, it sums up all the elements of the array and returns the total.


// console.log(sum); // 55 - The reduce method executes a reducer function (that you provide) on each element of the array, resulting in a single output value. In this case, it sums up all the elements of the array and returns the total.

// The reduce method can also be used to perform other operations, such as finding the maximum or minimum value in an array, counting occurrences of values, or even flattening an array of arrays. It is a powerful method that can be used for a wide variety of tasks when working with arrays in JavaScript.    



const shoppingCart = [
    {
        items1: "Laptop",
        price: 1000,
        quantity: 1
    },
    {
        items2: "Phone",
        price: 500,
        quantity: 2 
    },
    {
        items3: "Tablet",
        price: 300,
        quantity: 1
    },
    {
        items4: "Headphones",
        price: 200,
        quantity: 3
    },
    {
        items5: "Smartwatch",
        price: 150, 
        quantity: 2
    }

]



const totalPrice = shoppingCart.reduce((accumulator, currentItem) => {
    return accumulator + (currentItem.price * currentItem.quantity);
}, 0);

console.log(totalPrice); // 2950 - The reduce method executes a reducer function (that you provide) on each element of the array, resulting in a single output value. In this case, it calculates the total price of all items in the shopping cart by multiplying the price and quantity of each item and summing them up to return the total price.   



