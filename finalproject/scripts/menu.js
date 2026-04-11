// scripts/menu.js

document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector("#menu");
  const nav = document.querySelector("nav");

  if (!menuButton || !nav) return;

  menuButton.addEventListener("click", () => {
    nav.classList.toggle("open");
    menuButton.classList.toggle("open");
  });
});