const list = document.querySelector("ul")
const buttonShowAll = document.querySelector(".show-all")
const buttonDiscont = document.querySelector(".desconto")
const buttonSum = document.querySelector(".somar")
const buttonfilter = document.querySelector(".filtrar")

console.log(list)

function format(value){

    const currency = value.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL',
    })

    return currency
}


function opções(array) {
    myLi = ''


    array.forEach(product => {
        myLi += `
            <li>
                <img src="${product.src}" alt="bacon-egg">
                <p>${product.name}</p>
                <p class="item-price">${format(product.price)}</p>
            </li>
            `
    })
    list.innerHTML = myLi
}

buttonShowAll.addEventListener("click",() => opções(menuOptions))


function discount() {

    const newPrices = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9,
    }))

    opções(newPrices)


    console.log(newPrices)

}

buttonDiscont.addEventListener("click", discount)


function sumAll(){

    const sum = menuOptions.reduce( (acc, value) => {

       return acc + value.price

    }, 0)
    
    list.innerHTML = `
    <li>
        <p>O valor total dos itens é ${format(sum)}</p>
    </li>
    `

}

buttonSum.addEventListener("click", sumAll)


function filterVegan() {

    const filter = menuOptions.filter( (product) => product.vegan)

    opções(filter)

}

buttonfilter.addEventListener("click", filterVegan)