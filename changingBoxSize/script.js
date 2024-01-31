let interval
function start(){
    interval=setInterval(getRandomHeights,500)
}


function getRandomHeights(){
    let boxes=document.querySelectorAll(".box")
    for(let b of boxes){
        let h=Math.floor(Math.random()*100)+50

        b.style.width=`${h}px`
    }
}


function stop(){
    clearInterval(interval)
}