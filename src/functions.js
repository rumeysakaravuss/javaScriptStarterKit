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

let sayi1 = 10 
let sayi2 = 20 
sayi1 = sayi2
sayi2 = 100 
console.log(sayi1)

function addToCart4 (x){
    console.log(products)
}

let products = [
    {productName:"Elma", unitPrice:10,quantity:5},
    {productName:"Armut", unitPrice:10,quantity:5},
    {productName:"Karpuz", unitPrice:10,quantity:5}
]

addToCart4(products)

function add(bisey,...numbers){ //rest
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i]
    }
    console.log(total)
    console.log(bisey)
}


add(20,30)
//add(20,30,40)
//add(20,30,40,50)

let numbers = [30,10,500,600,120]
//console.log(...numbers)
console.log(Math.max(...numbers))

let [icAnadolu,Marmara,Karadeniz,[İcAnadoluSehirleri]] = [
    {name:"İç Anadolu", population:"20M"},
    {name:"Marmara", population:"30M"},
    {name:"Karadeniz", population:"10M"},
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Sinap","Trabzon"],
    ]
]

//console.log(icAnadolu.population)
//console.log(icAnadolu.name)
console.log(İcAnadoluSehirleri)

let newProductName, newUnitPrice, newQuantity
({productName:newProductName,unitPrice:newUnitPrice,quantity:newQuantity} 
= {productName:"Elma", unitPrice:10,quantity:5})

console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity) 

