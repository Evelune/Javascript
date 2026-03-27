const loggedIn = true;

if (loggedIn) {
    console.log("Welcome back!");
} else {
    console.log("Please log in.");
}   


const creditCardNumber = "1234-5678-9012-345";

if (creditCardNumber && creditCardNumber.length === 19) {
    console.log("Valid credit card number.");
} else {
    console.log("Invalid credit card number.");
}



console.log(Boolean("2"));