var num1=8
var num2=4
lcm=1
var lgNum=num1>num2?num1:num2
product=num1*num2
for (let i=lgNum;i<=product+1;i++){
    if((i%num1==0) && (i%num2==0)){
        lcm=i
        break
}}
console.log(lcm);
