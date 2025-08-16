let stil2 = document.querySelector(".stil2");
let stil4_window = document.querySelector(".stil4window");
let stil3_sofa = document.querySelector(".stil3sofa");
let stil2_sofa_window = document.querySelector(".stil2sofawindow");

function anime_opacity(object, previus_img, next_img) {
  object.addEventListener("click", function () {
    object.style.opacity = 0;
    setTimeout(function () {
      if (object.getAttribute("src") == previus_img) {
        object.setAttribute("src", next_img);
      } else {
        object.setAttribute("src", previus_img);
      }
      object.style.opacity = 1;
    }, 1000);
  });
}
anime_opacity(
  stil2,
  "photo.img/стіл2.png",
  "photo.img/стіл2заброньовано.png"
);
anime_opacity(
  stil4_window,
  "photo.img/стіл4вікно.png",
  "photo.img/стіл4вікнозаброньвано.png"
);
anime_opacity(
  stil3_sofa,
  "photo.img/стіл3диван.png",
  "photo.img/стіл3диван заброньовано.png"
);
anime_opacity(
  stil2_sofa_window,
  "photo.img/стіл2диванвікно.png",
  "photo.img/стіл2диванвікнозаброньовано.png"
);