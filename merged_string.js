// var firstString="ABC"
// var secondString="PQR"
// var mergedString=""
// for(let i=0;i<firstString.length;i++){
//     let sum=firstString[i]+secondString[i]
//     mergedString+=sum
// }
// console.log(mergedString);


var firstString="ABC"
var secondString="PQRST"
var smallestString=firstString.length<secondString.length?firstString:secondString
var largestString=firstString.length>secondString.length?firstString:secondString
var mergedString=""
var remaining=largestString.slice(smallestString.length)
for(let i=0;i<smallestString.length;i++){
    let sum=firstString[i]+secondString[i]
    mergedString+=sum
}
if(firstString.length==secondString.length){
    console.log(mergedString);
}
else{
    console.log(mergedString+remaining );
}
