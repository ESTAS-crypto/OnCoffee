//toggle  class active
const navbarNav = document.querySelector(".navbar-nav");
//menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
    navbarNav.classList.toggle("active");
};
//klik di luar menu menghilangkan menu
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function(e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove("active");
    }
});