function addToCart(quantity,productName="elma"){
    console.log("sepete eklendi : ürün : " + productName + " adet: " + quantity)
}

//addToCart()
addToCart(10)
//addToCart(15)

let sayHello = ()=>{
    console.log("Hello World!")
}

sayHello()

let sayHello2 = function() {
    console.log("hello world 2")
}

sayHello2();

function addToCart2(productName,quantity,unitPrice){
    
}
addToCart2("elma",5,10)
addToCart2("armut",2,20)
addToCart2("limon",3,15)

let product1 ={productName:"elma",unitPrice:10,quantity:5}

function addToCart3(product) {
    console.log("ürün :"+product.productName)
    console.log("adet :"+product.quantity)
    console.log("fiyat :"+product.unitPrice)
}


addToCart3(product1)

let product2 ={productName:"elma",unitPrice:10,quantity:5}
let product3 ={productName:"elma",unitPrice:10,quantity:5}
product2 = product3
product2.productName = "KARPUZ"
console.log(product3.productName)