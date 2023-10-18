const list = document.querySelector("ul")
const buttonShowAll = document.querySelector(".show-all")
const buttonDiscont = document.querySelector(".desconto")


console.log(list)

function opções(array) {
    myLi = ''


    array.forEach(product => {
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