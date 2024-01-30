function DisplayNumber(num){
    result.value+=num
}
function ClearBox(){
    result.value=" "
}
function EvalExpr(){
    let currentExpression=result.value
    let output=eval(currentExpression)
    result.value=output
}
function BackSpace(){
    let currentvalue=result.value.slice(0,-1)
    result.value=currentvalue
}