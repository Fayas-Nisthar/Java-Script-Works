// function maxTwo(num1,num2){
//     return num1>num2?num1:num2
// }
// console.log(maxTwo(10,20));
// // =======================
// function cube(num){
//     return num**3
// }
// console.log(cube(3));
// // =========================

// function nthDigitMax(num1,num2){
//     return num1%10>num2%10?num1:num2
// } 
// console.log(nthDigitMax(127,870));
// ==============================


function isPrime(num){
    let isprimeNum=true
    for(let i=2;i<num;i++){
        if(num%i==0){
            isprimeNum=false
            break
        }
    }
    return isprimeNum
}

function nextPrime(num){
    let p=num+1
    while(!isPrime(p)){
        p++
    }
    return p
}
console.log(nextPrime(17))