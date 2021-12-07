"use strict"

//{make:"ford",model:"fiesta",mileage:30000}
//document.createElement()
//element.appendChild <-- You can append to *any* element (including ones you just created)
//element.classList.add("someClass")
//element.innerHTML = "something"/someVariable


let cardHolder=document.createElement("div")
cardHolder.classList.add("Holder")
document.body.appendChild(cardHolder)

let cars=[]
    cars.push({reg: "ytr434", maker:"Ford",model:"Fiesta", colour: "White", mileage:48876, price:4710})
    cars.push({reg: "asn094", maker:"BMW",model:"X5", colour: "Blue", mileage:89815, price:6200})
    cars.push({reg: "sdm846", maker:"Mercedes-Benz",model:"G-class", colour: "Red", mileage:5647, price:9800})
    cars.push({reg: "dfk383", maker:"Jeep",model:"Wrangler", colour: "Black", mileage:2320, price:21400})
    cars.push({reg: "msj837", maker:"Audi",model:"Q2", colour: "Silver", mileage:3260, price:22330})

for (let i=0; i< cars.length; i++) {
    let card = document.createElement("div")
    card.className="card-holder"
    cardHolder.appendChild(card)

    let heading = document.createElement("h1")
    heading.classList.add("header")
    card.appendChild(heading)
    heading.innerHTML=`Reg: ${cars[i].reg} Maker: ${cars[i].maker} Model: ${cars[i].model}`

    let paragraph = document.createElement("p")
    card.appendChild(paragraph)
    paragraph.innerHTML = `Colour: ${cars[i].colour} Mileage(km): ${cars[i].mileage} Price: ${cars[i].price}`

}
