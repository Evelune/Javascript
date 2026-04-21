// what is Callback function in JavaScript

setTimeout(function a(){
    console.log("timer");
    
},5000)

function x(y){
    console.log("x called");
    y()
}

x(function y(){
    console.log("y called");
    
})




// Deep down Event Listner
// document.querySelector("#clickMe").addEventListener("click",function(){
//     alert("Click mt kro yrr")
// })


// Closure Demo with Event Listner
function addEventListener(){
    let count = 0
    document.querySelector("#clickMe").addEventListener("click",function xyz(){
    console.log("Clicked Me",++count);
    
})
}

addEventListener()



// Garbage Collection & removeEvenetListenr


// Event Listener are heavery means they takes memory, as very function which uses as callback hold the closure take the space, and may there are mutliple event listener so all of them use closure and consume memory so we avoid to event listner so that those memory collect and clean by garbage collector