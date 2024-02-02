

fetch("https://fakestoreapi.com/products/").then(res=>res.json()).then(data=>displayProducts(data))

  function displayProducts(product){
    let htmlData=``
    for(let p of product){
      htmlData+=`
        <div class="col-4">
            <div class="card" style="width: 18rem;">
                <img src="${p.image}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${p.title}</h5>
                  <h5 class="card-title">$${p.price}</h5>
                  <p class="card-text">${p.description}</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
        </div>
      `
    }
    document.querySelector("#result").innerHTML=htmlData
  }
