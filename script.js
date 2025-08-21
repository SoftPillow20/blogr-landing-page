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

const allLinks = document.querySelectorAll("a:link");

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

// RENDER NAVIGATION LINKS CONNECT

navLinkConnectEl.addEventListener("mouseover", () =>
  showModalNav(navLinkConnectTimeout, modalConnectEl)
);

navLinkConnectEl.addEventListener("mouseout", () => {
  navLinkConnectTimeout = hideModalNav(modalConnectEl);
});

// RENDER NAVIGATION LINKS COMPANY

navLinkCompanyEl.addEventListener("mouseover", () =>
  showModalNav(navLinkCompanyTimeout, modalCompanyEl)
);

navLinkCompanyEl.addEventListener("mouseout", () => {
  navLinkCompanyTimeout = hideModalNav(modalCompanyEl);
});

// RENDER NAVIGATION LINKS PRODUCT

navLinkProductEl.addEventListener("mouseover", () =>
  showModalNav(navLinkProductTimeout, modalProductEl)
);

navLinkProductEl.addEventListener("mouseout", () => {
  navLinkProductTimeout = hideModalNav(modalProductEl);
});

// OPEN/CLOSE MENU

menuEl.addEventListener("click", () => {
  navHeaderEl.classList.toggle("nav-open");
});

// CLOSE NAVIGATION MODAL LINKS
navLinksEl.addEventListener("click", (e) => {
  const clicked = e.target.closest(".modal-nav-link");

  if (!clicked) return;

  modalNavEl.forEach((el) => {
    el.classList.add("hidden");
  });
});

// ANIMATIONS
//   1. SCROLL VIEW ANIMATION

allLinks.forEach((link) =>
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to selected link
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({
        behavior: "smooth",
      });
    }

    if (navHeaderEl.classList.contains("nav-open")) {
      navHeaderEl.classList.toggle("nav-open");
    }
  })
);

//   2. TEXTS ANIMATION

const primaryHeaderEl = document.querySelector(".primary-header");

const heroDescriptionEl = document.querySelector(".hero-description");

const btnsContainerEl = document.querySelector(".btns-container");

window.addEventListener("load", () => {
  primaryHeaderEl.classList.add("anim");
  heroDescriptionEl.classList.add("anim");
  btnsContainerEl.classList.add("anim");
});

// LAZY LOADING - OPTIMIZATION

// RENDER LOGIN/REGISTER COMPONENT
