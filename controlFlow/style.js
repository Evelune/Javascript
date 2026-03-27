// Control Flow

// if...else
let age = 20;

if (age < 18) {
    console.log("You are a minor.");
} else {
    console.log("You are an adult.");
}

// switch
let day = "Monday";

switch (day) {
    case "Monday":
        console.log("Start of the week.");
        break;
    case "Friday":
        console.log("End of the week.");
        break;
    default:
        console.log("Midweek.");
}

// for loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// while loop
let count = 0;
while (count < 5) {
    console.log(count);
    count++;
}

// do...while loop
let num = 0;
do {
    console.log(num);
    num++;
} while (num < 5);

// Ternary operator
let isMember = true;
let price = isMember ? "$2.00" : "$10.00";
console.log(price);

// Control flow statements allow you to control the execution of your code based on certain conditions or to repeat certain blocks of code. They are essential for creating dynamic and responsive applications.    