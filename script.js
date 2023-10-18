const list = document.querySelector("ul")
let myLi = ''
const buttonShowAll = document.querySelector(".show-all")
const buttonDiscont = document.querySelector(".desconto")


console.log(list)

function opções() {
    menuOptions.forEach(product => {
        myLi += `
            <li>
                <img src="${product.src}" alt="bacon-egg">
                <p>${product.name}</p>
                <p class="item-price">R$ ${product.price}</p>
            </li>
            `
    })
    list.innerHTML = myLi
}

buttonShowAll.addEventListener("click", opções)


function discount() {

    const newPrices = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9,
    }))

    console.log(newPrices)

}

buttonDiscont.addEventListener("click", discount)