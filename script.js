
function openMenu() {
    let burger = document.getElementById("burger");
    let responsiveBtn = document.getElementById("responsive-btn")


    if (burger.className === "burger-menu") {
        burger.classList.add("responsive-menu");
        responsiveBtn.classList.remove("fa-bars")
        responsiveBtn.classList.add("fa-xmark")
    } else {
        burger.className = "burger-menu"
        responsiveBtn.classList.add("fa-bars")
        responsiveBtn.classList.remove("fa-xmark")
    }
}
