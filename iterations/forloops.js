// for loops

// for(let i = 0; i < 5; i++) {
//     console.log(i);
// }

// const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];

// for(let i = 0; i <= names.length; i++) {
//     console.log(names[i]);
// }



// break is used to exit a loop early when a certain condition is met. It allows you to stop the loop from executing further iterations once a specific condition is satisfied. This can be useful for improving efficiency and avoiding unnecessary computations.
for(let i = 0 ; i<=10;i++){
    if(i === 7){
        console.log("Found 7!");
        break
    }
    console.log(i);
}


// continue is used to skip the current iteration of a loop and move on to the next iteration. When the continue statement is encountered, the loop will immediately jump to the next iteration, bypassing any remaining code in the current iteration. This can be useful for skipping over certain values or conditions without exiting the entire loop.
for(let i = 0 ; i<=10;i++){
    if(i === 7){
        console.log("Skipping 7!");
        continue
    }
    console.log(i);
}


