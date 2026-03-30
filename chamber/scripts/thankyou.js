// NAV MENU
const menuBtn = document.querySelector("#menu-button");
const nav = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
});

// FOOTER
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

// GET FORM DATA
const params = new URLSearchParams(window.location.search);

const results = document.querySelector("#results");

results.innerHTML = `
<p><strong>First Name:</strong> ${params.get("fname")}</p>
<p><strong>Last Name:</strong> ${params.get("lname")}</p>
<p><strong>Email:</strong> ${params.get("email")}</p>
<p><strong>Phone:</strong> ${params.get("phone")}</p>
<p><strong>Business:</strong> ${params.get("business")}</p>
<p><strong>Membership Level:</strong> ${params.get("membership")}</p>
<p><strong>Date Submitted:</strong> ${params.get("timestamp")}</p>
`;