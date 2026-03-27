// while loops:

let index = 0;

while(index <= 10){
    console.log(`The current index is: ${index}`);
    index = index + 2;
}


let arr = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew", "kiwi", "lemon"];

let i = 0;

while(i < arr.length){
    console.log(arr[i]);
    i++;
}


let bullet = 40;
do{
    if(bullet === 10){
        console.log(`Enemy killed! with ${bullet} bullets remaining`);
        break;
    }
    console.log(`The current bullet count is: ${bullet}`);
    bullet = bullet - 10;
}
while(bullet > 0);
