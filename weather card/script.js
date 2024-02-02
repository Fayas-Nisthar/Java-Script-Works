
fetch("https://api.openweathermap.org/data/2.5/weather?units=metric&q=kottayam&appid=8f9164d0bb1a347b51a7d0e25e247b6c").then(res=>res.json()).
then(data=>weatherDetails(data))

function weatherDetails(data){
  let currentdate=new Date()
  htmlData=`
  <div class="card">
  <div class="container">
    <div class="cloud front">
      <span class="left-front"></span>
      <span class="right-front"></span>
    </div>
    <span class="sun sunshine"></span>
    <span class="sun"></span>
    <div class="cloud back">
      <span class="left-back"></span>
      <span class="right-back"></span>
    </div>
  </div>

  <div class="card-header">
    <span>${data.name}<br>${data.sys.country}</span>
    <span>${currentdate.getDate()}/${currentdate.toLocaleString("default",{month:`long`})}/${currentdate.getFullYear()}</span>
    ${currentdate.getMonth()+1}
  </div>

  <span class="temp">${data.main.temp}</span>

  <div class="temp-scale">
    <span>Celcius</span>
  </div>
</div>
  `
  document.querySelector("#result").innerHTML=htmlData
}

function fetchDetails(){
  let city=box.value
  fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=8f9164d0bb1a347b51a7d0e25e247b6c`).then(res=>res.json()).
  then(data=>weatherDetails(data))
}