// Toggle class active menu
const navbarNav = document.querySelector(".navbar-nav");
const hamburgerMenu = document.querySelector("#hamburger-menu");

hamburgerMenu.onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};

// Toggle class active search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");
const searchButton = document.querySelector("#search-button");

searchButton.onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// Toggle class active shopping cart
const shoppingCart = document.querySelector(".shopping-cart");
const shoppingCartButton = document.querySelector("#shopping-cart-button");

shoppingCartButton.onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

// Close elements when clicking outside
document.addEventListener("click", (e) => {
  // Close navbar if clicking outside
  if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  // Close search form if clicking outside
  if (!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }

  // Close shopping cart if clicking outside
  if (
    !shoppingCartButton.contains(e.target) &&
    !shoppingCart.contains(e.target)
  ) {
    shoppingCart.classList.remove("active");
  }
});

// Close elements when touching outside (for mobile)
document.addEventListener("touchstart", (e) => {
  // Close navbar if touching outside
  if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  // Close search form if touching outside
  if (!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }

  // Close shopping cart if touching outside
  if (
    !shoppingCartButton.contains(e.target) &&
    !shoppingCart.contains(e.target)
  ) {
    shoppingCart.classList.remove("active");
  }
});

// Modal box
const itemsDetailModal = document.querySelector("#items-detail-modal");
const itemsDetailButtons = document.querySelectorAll(".items-detail-button");
const closeModalButton = document.querySelector(".modal .close-icon");

itemsDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemsDetailModal.style.display = "flex";
    e.preventDefault();
  };
});

// Close modal on close icon click
closeModalButton.onclick = (e) => {
  itemsDetailModal.style.display = "none";
  e.preventDefault();
};

// Close modal on outside click
window.onclick = (e) => {
  if (e.target === itemsDetailModal) {
    itemsDetailModal.style.display = "none";
  }
};
