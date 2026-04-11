// Calculate the vowels in the stringusing the fucntion


function countVowel(str){
    let count  = 0
    for(let i = 0;i<=str.length;i++){
        str[i].toUpperCase()
        if (str[i] === 'a' || str[i] === 'e' || str[i] == 'o' || str[i] == 'u'){
            count++
        }
    }
    return count
}


// let result = countVowel("AEIOU")
// console.log(result)




let arr = [1,2,3,4,5]
let result = arr.reduce((initial,current)=>{
    return initial * current
})

console.log(result);
