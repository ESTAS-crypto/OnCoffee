//toggle  class active menu
const navbarNav = document.querySelector(".navbar-nav");
//menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//toggle class active search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

//toggle class active shopping cart
const shoppingCart = document.querySelector(".shopping-cart");

document.querySelector("#shopping-cart-button").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

//klik di luar elemen
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");
const sc = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  e.preventDefault();

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

// modal box //
const itemsDetailModal = document.querySelector("#items-detail-modal");
const itemsDetailButtons = document.querySelectorAll(".items-detail-button");

itemsDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemsDetailModal.style.display = "flex";
    e.preventDefault();
  };
});

//klik tombol  close icons modaal
document.querySelector(".modal .close-icon").onclick = (e) => {
  itemsDetailModal.style.display = "none";
  e.preventDefault();
};

// klik di luar modal
window.onclick = (e) => {
  if (e.target === itemsDetailModal) {
    itemsDetailModal.style.display = "none";
  }
};
