let button = document.querySelectorAll(".button");
let totalPrice = document.querySelector(".totalPrice");
let summa = 0;

// Проходжусь по списку з кнопками і до кожної яка потрапляє в item додаю eventListener
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

let lito_btn = document.querySelector(".button_scroll_summer");

lito_btn.addEventListener("click", () => {
  let lito_section = document.querySelector(".summer_section");
  lito_section.scrollIntoView({ behavior: "smooth", block: "start" });
});
let ocin_btn = document.querySelector(".button_scroll_ocin");

ocin_btn.addEventListener("click", () => {
  let ocin_section = document.querySelector(".ocin_section");
  ocin_section.scrollIntoView({ behavior: "smooth", block: "start" });
});
let zuma_btn = document.querySelector(".button_scroll_winter");

zuma_btn.addEventListener("click", () => {
  let zuma_section = document.querySelector(".winter_section");
  zuma_section.scrollIntoView({ behavior: "smooth", block: "start" });
});
let spring_btn = document.querySelector(".button_scroll_spring");

spring_btn.addEventListener("click", () => {
  let spring_section = document.querySelector(".spring_section");
  spring_section.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});

let classic_btn = document.querySelector(".button_scroll_classic");

classic_btn.addEventListener("click", () => {
  let classic_section = document.querySelector(".classic_section");
  classic_section.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});



const articles = document.querySelectorAll("article");
articles.forEach((article) => {
  article.addEventListener("click", () => {
    const name = article.querySelector("p").textContent;
    const price = article.querySelector("button").textContent;
    const img = article.querySelector("img").src;

    const item = { name, price, img };

    let selected =
      JSON.parse(localStorage.getItem("selectedItems")) || [];
    
    selected.push(item);

     localStorage.setItem("selectedItems", JSON.stringify(selected));

    window.location.href = "cart.html";
  });
});

