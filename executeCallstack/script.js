// Javascript Execution Context and Call Stack

// Global Execution Context
console.log("Global Execution Context");

// Function Execution Context
function firstFunction() {
    console.log("First Function Execution Context");
    secondFunction();
}

function secondFunction() {
    console.log("Second Function Execution Context");
}

// Call the first function to see the call stack in action
firstFunction();

// The expected output will be:
// Global Execution Context
// First Function Execution Context
// Second Function Execution Context

// This demonstrates how the JavaScript engine creates execution contexts for each function call and manages them using the call stack.     

// Javascript is a single-threaded language, which means it can only execute one piece of code at a time. The call stack is a data structure that keeps track of the execution context of the currently executing code. When a function is called, a new execution context is created and pushed onto the call stack. When the function finishes executing, its execution context is popped off the stack, and control returns to the previous context.