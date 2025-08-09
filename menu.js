let button = document.querySelector(".button")
let price = button.replaceAll("грн", "")
price = number(button)
let totalPrice_field = document.querySelector(".totalPrice")
buttons(){
    price = 0
    price =+ price
    totalPrice_field = price
    console.log(totalPrice_field)
}
addEventListener(click , buttons)
