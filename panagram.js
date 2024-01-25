var text="quick brown fox jumped over the lazy dogs"
var alphabets="abcdefghijklmnopqrstuvwxyz"
var isPanagram=true
for(let ch of alphabets){
    if(text.indexOf(ch)==-1){
        isPanagram=false
        break
    }
}
console.log(isPanagram);