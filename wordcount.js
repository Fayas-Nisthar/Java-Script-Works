// var text="hello hai hello hai hello"
// var wc={}
// text.split(" ").map(w=>w in wc?wc[w]+=1:wc[w]=1)
// console.log(wc);

var text="samplequestions"
var wc={}
text.split("").map(w=>w in wc?wc[w]+=1:wc[w]=1)
console.log(Object.entries(wc).reduce((o1,o2)=>o1[1]>o2[1]?o1:o2));