

function PerformAddition(){
    let num1=document.querySelector("#box1").value
    let num2=document.querySelector("#box2").value
    let sum=Number(num1)+Number(num2)
    document.querySelector("#resultbox").innerHTML=`Addition result of ${num1} + ${num2}=${sum}`
}
function PerformSubstration(){
    let num1=+box1.value
    let num2=+box2.value
    let sub=(num1)-(num2)
    document.querySelector("#resultbox").innerHTML=`Substration result of ${num1} - ${num2}=${sub}`
}

function Multiplication(){
    let num1=+box1.value
    let num2=+box2.value
    let mult=(num1) * (num2)
    document.querySelector("#resultbox").innerHTML=`Multiplication result of ${num1} * ${num2}=${mult}`
}

function Divition(){
    let num1=+box1.value
    let num2=+box2.value
    let div=(num1) / (num2)
    document.querySelector("#resultbox").innerHTML=`Divition result of ${num1} / ${num2}=${div}`

}