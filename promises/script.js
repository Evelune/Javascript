const cart = ["table","chair","chips","maggi"]


// In this we use the callback 
createOrder(cart , function(Order){
    procedTopayment(OrderID)
})



// Here we use the promises in this when the promise object filled with real data than only it called the procedTopayment, 
// here we have the control of code over with us

const promise = createOrder(cart)
promise.then(function (OrderID){
    procedTopayment(OrderID)
})