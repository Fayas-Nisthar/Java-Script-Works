var product={
    code:"sku10",
    title:"oreo",
    category:"food",
    avlqty:50
}

// console.log(product.title);

if("price" in product){
    console.log("found");
}
else{
    console.log("not found");
}

product["price"]=500
console.log(product);