"use strict";

const navLinksEl = document.querySelector(".nav-links--lists");

const navLinkConnectEl = document.querySelector(".nav-link-connect");

const navLinkCompanyEl = document.querySelector(".nav-link-company");

const navLinkProductEl = document.querySelector(".nav-link-product");

const modalNavEl = document.querySelectorAll(".modal-nav");

const modalConnectEl = document.querySelector(".modal-connect");

const modalCompanyEl = document.querySelector(".modal-company");

const modalProductEl = document.querySelector(".modal-product");

const modalNavLinksEl = document.querySelectorAll(".modal-nav-links");

const navHeaderEl = document.querySelector(".nav-header");

const menuEl = document.querySelector(".menu");

let navLinkConnectTimeout;
let navLinkCompanyTimeout;
let navLinkProductTimeout;

function showModalNav(navTimeout, modalEl) {
  clearTimeout(navTimeout);
  modalEl.classList.remove("hidden");
}

function hideModalNav(modalEl) {
  return setTimeout(() => {
    modalEl.classList.add("hidden");
  }, 200);
}

// NAVIGATION CONNECT

navLinkConnectEl.addEventListener("mouseover", () =>
  showModalNav(navLinkConnectTimeout, modalConnectEl)
);

navLinkConnectEl.addEventListener("mouseout", () => {
  navLinkConnectTimeout = hideModalNav(modalConnectEl);
});

// NAVIGATION COMPANY

navLinkCompanyEl.addEventListener("mouseover", () =>
  showModalNav(navLinkCompanyTimeout, modalCompanyEl)
);

navLinkCompanyEl.addEventListener("mouseout", () => {
  navLinkCompanyTimeout = hideModalNav(modalCompanyEl);
});

// NAVIGATION PRODUCT

navLinkProductEl.addEventListener("mouseover", () =>
  showModalNav(navLinkProductTimeout, modalProductEl)
);

navLinkProductEl.addEventListener("mouseout", () => {
  navLinkProductTimeout = hideModalNav(modalProductEl);
});

menuEl.addEventListener("click", () => {
  navHeaderEl.classList.toggle("nav-open");
});

navLinksEl.addEventListener("click", (e) => {
  const clicked = e.target.closest(".modal-nav-link");

  if (!clicked) return;

  modalNavEl.forEach((el) => {
    el.classList.add("hidden");
  });
});
