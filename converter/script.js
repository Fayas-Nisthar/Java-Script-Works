function ToFahrenheit(){
    let c=+celsius.value
    let F=(c*9/5)+32
    document.querySelector("#fahrenheit").value=F
}
function Tocelsius(){
    let f=+fahrenheit.value
    let c=(5/9*(f-32))
    document.querySelector("#celsius").value=c

}