var MyPromise= new Promise((res,rej)=>{
    let completedStatus=true
    if(completedStatus==true){
        res("completed")
    }
})

MyPromise.then(res=>console.log("name will be marked in placement form"))