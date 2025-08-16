let stil2 = document.querySelector(".stil2")
let stil4_window = document.querySelector(".stil4window")
let stil3_sofa = document.querySelector(".stil3sofa")
let stil2_sofa_window = document.querySelector(".stil2sofawindow")

stil2.addEventListener("click", function () {
    stil2.style.opacity = 0
    setTimeout(function () {
        if (stil2.getAttribute("src") == "photo.img/стіл2.png") {
            stil2.setAttribute("src","photo.img/стіл2заброньовано.png")
        } 
        else {
          stil2.setAttribute("src", "photo.img/стіл2.png") 
        }
        stil2.style.opacity=1
    }, 1000)
})
