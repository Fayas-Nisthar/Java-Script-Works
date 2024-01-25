var loanamount=15000
var interest=15
var tenure=1

// emi=(p*i*(1+i)^n)/(1+i)^n-1
p=loanamount
r=interest/12
i=r/100
n=tenure*12
oneplusi=(1+i)**n

emi=(p*i*oneplusi)/(oneplusi-1)

console.log(Math.round(emi))

