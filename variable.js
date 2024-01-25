// keywords- var, let, const (default- var)

// syntax for var declaration--var variableName=value

var companyName="Luminar";
console.log("Comany Name=",companyName);

companyName="Luminar Technolab";
console.log("Comany Name=",companyName);

// const    - is constant variable that never changes its value
// var      - is not constant, it can be update (global level scope})
// let      - it is only used inside a block    (block level scope)

var bankName="SBI"
var acno="123456789"
var balance=1300

console.log("Hi user your",acno ,bankName ,"account balance is",balance);
console.log(`Hi user your ${acno} ${bankName} account balance is ${balance}`);


var customerName="vipin"
var purchaseAmount=320
var invoiceNo=6197

console.log(`Dear ${customerName}, you have made purchase of Rs.${purchaseAmount} vide inv.no ${invoiceNo}`);


console.log(typeof(companyName))

var rating=4.9
console.log(typeof(rating));

var employeeCount=92
console.log(typeof(employeeCount));

 var isOpen=true
 console.log(typeof(isOpen));

//  Data Types in JavaScript
// 1, number
// 2, Sttring
// 3, Boolean
// 4, Undefined
// 5, null