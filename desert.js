let button = document.querySelectorAll(".desert");
let totalPrice = document.querySelector(".totalPrice");
let summa = 0;
button.forEach((item) => {
  item.addEventListener("click", function () {
    let bth_text = item.innerHTML;
    let price = bth_text.split("г")[0];
    price = Number(price);

    summa += price;

    totalPrice.innerHTML = "до слати: " + summa;
  });
});

let oplata = document.querySelector(".oplata");
oplata.addEventListener("click", function () {
  summa = 0;
  totalPrice.innerHTML = "до слати: " + summa;
  alert("смачного!");
});

let sale = document.querySelector(".sale");
sale.addEventListener("click", function () {
  sale = Math.floor(Math.random() * (90 - 5 + 1)) + 5;

  alert(`${sale}%`);

});
