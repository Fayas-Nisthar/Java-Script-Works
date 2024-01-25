var string1="race"
var string2="care"

var sortString1=string1.split("").sort().join("")
var sortString2=string2.split("").sort().join("")
console.log(sortString1==sortString2?"anagram":"not anagram")

var arr=[8,10,3,7]
var srt=arr.sort().reverse().join("")
console.log(srt);
