"use strict"

//{make:"ford",model:"fiesta",mileage:30000}
//document.createElement()
//element.appendChild <-- You can append to *any* element (including ones you just created)
//element.classList.add("someClass")
//element.innerHTML = "something"/someVariable

interface Car{

    maker:string, model:string, colour: string, mileage: number, price: number;
}

let cardHolder:HTMLDivElement=document.createElement("div")
cardHolder.classList.add("Holder")
document.body.appendChild(cardHolder)

let cars:Car[]=[]
    cars.push({maker:"Ford",model:"Fiesta", colour: "White", mileage:48876, price:4710})
    cars.push({maker:"BMW",model:"X5", colour: "Blue", mileage:89815, price:6200})
    cars.push({maker:"Mercedes-Benz",model:"G-class", colour: "Red", mileage:5647, price:9800})
    cars.push({maker:"Jeep",model:"Wrangler", colour: "Black", mileage:2320, price:21400})
    cars.push({maker:"Audi",model:"Q2", colour: "Silver", mileage:3260, price:22330})

cars=JSON.parse(localStorage.getItem("cars")!)

if (cars==null) {
    cars=[{maker:"Ford",model:"Fiesta", colour: "White", mileage:48876, price:4710}]

}


render() 

function saveCars(){

    //Store
    let carsString:string=JSON.stringify(cars)  //Converts our 'complex' array of car objects into a single string
    localStorage.setItem("cars", carsString) //permanently saves so the user can close their browser or even switch off

}   


let submitButton= <HTMLButtonElement>document.getElementById("submit")
submitButton.addEventListener("click", addCar)

function addCar(){
    let maker=(<HTMLInputElement>document.getElementById("maker")).value
    let model=(<HTMLInputElement>document.getElementById("model")).value
    let mileage=parseInt((<HTMLInputElement>document.getElementById("mileage")).value)
    let colour=(<HTMLInputElement>document.getElementById("colour")).value
    let price=parseInt((<HTMLInputElement>document.getElementById("price")).value)

    let newCar= {maker:maker,model:model,mileage:mileage,colour:colour,price:price}
    cars.push(newCar) 

    saveCars()
    render()

    }

function render() {
    
    cardHolder.innerHTML=""

    for (let i=0; i< cars.length; i++) {
        let card = document.createElement("div")
        card.className="card-holder"
        cardHolder.appendChild(card)

        let heading = document.createElement("h1")
        heading.classList.add("header")
        card.appendChild(heading)
        heading.innerHTML=`Maker: ${cars[i].maker} Model: ${cars[i].model}`

        let paragraph = document.createElement("p")
        card.appendChild(paragraph)
        paragraph.innerHTML = `Colour: ${cars[i].colour} Mileage(km): ${cars[i].mileage} Price(£): ${cars[i].price}`

    }
 
}