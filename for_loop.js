// for (let i=100;i>=50;i--){
//     console.log(i);
// }


var num1=12
var num2=24
var minNum=num1<num2?num1:num2
var gcd=0

for(let i=2;i<=minNum;i++){
    if (num1%i==0 && num2%i==0){
        gcd=i
    }
}
console.log(gcd);


