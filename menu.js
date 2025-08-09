let button = document.querySelectorAll(".button");
let totalPrice = document.querySelector(".totalPrice");
let summa = 0


// Проходжусь по списку з кнопками і до кожної яка потрапляє в item додаю eventListener
button.forEach((item) => {
    item.addEventListener("click", function () {
        let bth_text = item.innerHTML
        let price = bth_text.split("г")[0]
        price = Number(price);

        summa += price

        totalPrice.innerHTML = "до слати: " + summa;
    })
})
