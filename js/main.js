"use strict";

let changeBtn = document.querySelector(".period-options .change");
let basicPrice = document.querySelector(".offer.one .price span");
let proPrice = document.querySelector(".offer.pro .price span");
let masterPrice = document.querySelector(".offer.two .price span");

// A Function To Set The Prices To The Monthly Prices
function setMonthlyPrice() {
  basicPrice.textContent = "19.99";
  proPrice.textContent = "24.99";
  masterPrice.textContent = "39.99";
}

// A Function To Set The Prices To The Annually Prices
function setAnnuallyPrice() {
  basicPrice.textContent = "199.9";
  proPrice.textContent = "249.9";
  masterPrice.textContent = "399.9";
}

// Check If There Is A Session Storage And Set The Current Price Format
if (window.sessionStorage.getItem("choice")) {
  if (window.sessionStorage.getItem("choice") === "monthly") {

    setMonthlyPrice()
    changeBtn.classList.add("clicked");

  } else {

    setAnnuallyPrice()

  }
}

changeBtn.addEventListener("click", (e) => {
  changeBtn.classList.toggle("clicked");

  if (e.target.classList.contains("clicked")) {

    setMonthlyPrice();
    // Set A Session Storage Key With The Value "monthly"
    window.sessionStorage.setItem("choice", "monthly");

  } else {

    // Set A Session Storage Key With The Value "annually"
    setAnnuallyPrice();
    window.sessionStorage.setItem("choice", "annually");

  }
});