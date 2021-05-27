let openButton = document.querySelector(".open_menu");
let closeButton = document.querySelector(".close_menu");
let toggleMenu = document.querySelector(".toggle_menu");
let mainMenu = document.querySelector(".menu_main");

let product = document.getElementById("product_button");
let productMenu = document.getElementById("product_menu");
let company = document.getElementById("company_button");
let companyMenu = document.getElementById("company_menu");
let connect = document.getElementById("connect_button");
let connectMenu = document.getElementById("connect_menu");
let body = document.querySelector("body");
let arrowProduct = product.querySelector(".arrow_dark");
let arrowCompany = company.querySelector(".arrow");
let arrowConnect = connect.querySelector(".arrow");
let lightArrowProduct = product.querySelector(".arrow_light");
let lightArrowCompany = company.querySelector(".arrow_light");
let lightArrowConnect = connect.querySelector(".arrow_light");

product.onclick = () => {
  productMenu.classList.toggle("submenu");
  arrowProduct.classList.toggle("rotate");
  lightArrowProduct.classList.toggle("rotate");
};

company.onclick = () => {
  companyMenu.classList.toggle("submenu");
  arrowCompany.classList.toggle("rotate");
  lightArrowCompany.classList.toggle("rotate");
};

connect.onclick = () => {
  connectMenu.classList.toggle("submenu");
  arrowConnect.classList.toggle("rotate");
  lightArrowConnect.classList.toggle("rotate");
};

openButton.addEventListener("click", () => {
  mainMenu.classList.add("show_menu");
  openButton.style.display = "none";
  closeButton.style.display = "block";
});

closeButton.addEventListener("click", () => {
  mainMenu.classList.remove("show_menu");
  openButton.style.display = "block";
  closeButton.style.display = "none";
  companyMenu.classList.add("submenu");
  productMenu.classList.add("submenu");
  connectMenu.classList.add("submenu");
  arrowProduct.classList.remove("rotate");
  arrowCompany.classList.remove("rotate");
  arrowConnect.classList.remove("rotate");
});

window.addEventListener("click", function (event) {
  if (!event.target.matches("#product_button")) {
    productMenu.classList.add("submenu");
    if (arrowProduct.classList.contains("rotate")) {
      arrowProduct.classList.remove("rotate");
    }
    if (lightArrowProduct.classList.contains("rotate")) {
      lightArrowProduct.classList.remove("rotate");
    }
  }
});
window.addEventListener("click", function (event) {
  if (!event.target.matches("#company_button")) {
    companyMenu.classList.add("submenu");
    if (arrowCompany.classList.contains("rotate")) {
      arrowCompany.classList.remove("rotate");
    }
    if (lightArrowCompany.classList.contains("rotate")) {
      lightArrowCompany.classList.remove("rotate");
    }
  }
});

window.addEventListener("click", function (event) {
  if (!event.target.matches("#connect_button")) {
    connectMenu.classList.add("submenu");
    if (arrowConnect.classList.contains("rotate")) {
      arrowConnect.classList.remove("rotate");
    }
    if (lightArrowConnect.classList.contains("rotate")) {
      lightArrowConnect.classList.remove("rotate");
    }
  }
});
