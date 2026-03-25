// MENU
const menuBtn = document.querySelector("#menu-button");
const nav = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
nav.classList.toggle("open");
});

// TIMESTAMP
document.querySelector("#timestamp").value = new Date().toISOString();

// FOOTER
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

// MODALS
function openModal(id){
document.getElementById(id).showModal();
}

function closeModal(id){
document.getElementById(id).close();
}