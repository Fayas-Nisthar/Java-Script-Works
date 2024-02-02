
fetch("https://jsonplaceholder.typicode.com/users/").then(res=>res.json()).then(data=>userDetails(data))

function userDetails(users){
    let htmlData=``
    for(let u of users)
    htmlData+=`
    <div class="card" style="width: 18rem;">
        <div class="card-header">
         Name: ${u.name}
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Username: ${u.username}</li>
          <li class="list-group-item">Email: ${u.email}</li>
          <li class="list-group-item">City: ${u.address.city}</li>
          <li class="list-group-item">Phone: ${u.phone}</li>
        </ul>
    </div>
    `
    document.querySelector("#user").innerHTML=htmlData
}
