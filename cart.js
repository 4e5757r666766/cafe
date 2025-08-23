const cartDiv = document.getElementById("cart");
const selected =
    JSON.parse(localStorage.getItem("selectedItems")) || [];
  if (selected.length === 0) {
    cartDiv.innerHTML = "<p>Кошик порожній</p>";
  } else {
   selected.forEach((item) => {
     const el = document.createElement("article");
     el.innerHTML = `
    <img src="${item.img}" alt="${item.name}" width="100">
    <p>${item.name}</p>
    <button>${item.price}</button>
  `;
     cartDiv.appendChild(el);
   });
}
