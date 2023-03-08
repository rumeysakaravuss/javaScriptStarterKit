console.log("merhaba kodlama.io")

//JS type safe değildir.
let dolarBugun = 9.30

let dolarDun = 9.20
dolarDun = "9.20"

{
    let dolarDun = 9.10
}

console.log(dolarDun)

const euroDun = 11.2
//euroDun = 11 bunu yapamıyoruz//

console.log(euroDun)

//array
//camelCasing
//pascalCasing
let konutKredileri  = ["konut kredisi","emlak konut kredisi","kamu konut kredisi"]

console.log("<ul>")
for (let i = 0;i<3;i++){
     console.log("<li>"+konutKredileri[i]+"</li>")
}


console.log("<ul>") 


console.log(konutKredileri)