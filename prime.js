var num=23
is_prime=true

for (let i=2;i<num;i++){
    if (num%i==0){
        is_prime=false
        break
    }
}
console.log(is_prime);