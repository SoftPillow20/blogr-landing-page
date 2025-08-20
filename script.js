"use strict";

// const navLinksEl = document.querySelector(".nav-links--lists");

const navLinkConnectEl = document.querySelector(".nav-link-connect");

const modalNavEl = document.querySelector(".modal-nav");

const modalNavLinksEl = document.querySelector(".modal-nav-links");

const navHeaderEl = document.querySelector(".nav-header");

const menuEl = document.querySelector(".menu");

let navLinkConnectTimeout;

navLinkConnectEl.addEventListener("mouseenter", () => {
  clearTimeout(navLinkConnectTimeout);
  modalNavEl.classList.remove("hidden");
});

navLinkConnectEl.addEventListener("mouseleave", () => {
  navLinkConnectTimeout = setTimeout(() => {
    modalNavEl.classList.add("hidden");
  }, 200);
});

modalNavLinksEl.addEventListener("click", (e) => {
  const clicked = e.target.closest(".modal-nav-link");

  if (!clicked) return;

  modalNavEl.classList.add("hidden");
});

menuEl.addEventListener("click", () => {
  navHeaderEl.classList.toggle("nav-open");
});
