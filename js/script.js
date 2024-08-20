// Toggle class active menu
const navbarNav = document.querySelector(".navbar-nav");
const hamburgerMenu = document.querySelector("#hamburger-menu");
const searchForm = document.querySelector(".search-form");
const searchButton = document.querySelector("#search-button");
const shoppingCart = document.querySelector(".shopping-cart");
const shoppingCartButton = document.querySelector("#shopping-cart-button");
const itemsDetailModal = document.querySelector("#items-detail-modal");
const itemsDetailButtons = document.querySelectorAll(".items-detail-button");
const closeModalButton = document.querySelector(".modal .close-icon");

// Event listener untuk hamburger menu
hamburgerMenu.addEventListener("click", () => {
  navbarNav.classList.toggle("active");
});

// Event listener untuk search button
searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  searchForm.classList.toggle("active");
  searchForm.querySelector("input").focus();
});

// Event listener untuk shopping cart button
shoppingCartButton.addEventListener("click", (e) => {
  e.preventDefault();
  shoppingCart.classList.toggle("active");
});

// Klik di luar elemen untuk menutup menu, search form, dan shopping cart
document.addEventListener("click", (e) => {
  if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  if (
    !shoppingCartButton.contains(e.target) &&
    !shoppingCart.contains(e.target)
  ) {
    shoppingCart.classList.remove("active");
  }
});

// Modal box
itemsDetailButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    itemsDetailModal.style.display = "flex";
  });
});

// Klik tombol close modal
closeModalButton.addEventListener("click", (e) => {
  e.preventDefault();
  itemsDetailModal.style.display = "none";
});

// Klik di luar modal untuk menutupnya
window.addEventListener("click", (e) => {
  if (e.target === itemsDetailModal) {
    itemsDetailModal.style.display = "none";
  }
});
