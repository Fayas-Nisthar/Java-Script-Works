function getRandomNumbers(){
    console.log(Math.floor(Math.random()*100))
}
// setInterval(getRandomNumbers,500)
setTimeout(getRandomNumbers,500)

let interval=setInterval(getRandomNumbers,500)

function stop(){
    clearInterval(interval)
}
setTimeout(stop,4800)