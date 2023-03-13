let cart =[
    {id:1, producktName:"Telefon",quantity:3, unitPrice:4000},
    {id:2, producktName:"Bardak",quantity:2, unitPrice:30},
    {id:3, producktName:"Kalem",quantity:1, unitPrice:20},
    {id:4, producktName:"Şarj Cihazı",quantity:2, unitPrice:100},
    {id:5, producktName:"Kitap",quantity:3, unitPrice:30},
    {id:6, producktName:"Pot",quantity:5, unitPrice:150},
]

console.log("<ul>")
cart.map(praduct=>{
    console.log("<li>"+praduct.producktName +" : "
     + praduct.unitPrice * praduct.quantity+"</li>")
})
console.log("</ul>")
 



 function addToCart(sepet){
    sepet.push({id:7, producktName:"Ruhsat",quantity:1, unitPrice:20})
 }

 addToCart(cart)

 console.log(cart)

let sayi = 10

function sayiTopla(number){
    number+= 1
}
sayiTopla(sayi)
console.log(sayi)
