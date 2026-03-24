// ================================
// directory.js — FULLY FIXED VERSION
// ================================

document.addEventListener("DOMContentLoaded", () => {

    const url = "./data/members.json";
    const membersContainer = document.querySelector("#members");

    // ================================
    // FETCH MEMBER DATA
    // ================================
    async function getMembers() {
        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const data = await response.json();

            // ✅ FIXED: use data directly (not data.members)
            displayMembers(data);

        } catch (error) {
            console.error("Error loading members:", error);
        }
    }

    // ================================
    // DISPLAY MEMBERS
    // ================================
    function displayMembers(members) {

        membersContainer.innerHTML = "";

        members.forEach(member => {

            const card = document.createElement("section");
            card.classList.add("member-card");

            card.innerHTML = `
                <h3>${member.name}</h3>

                <img src="${member.logo}" 
                     alt="${member.name} logo" 
                     loading="lazy">

                <p>${member.address}</p>

                <p>${member.phone}</p>

                <a href="${member.website}" target="_blank">
                    Visit Website
                </a>

                <p><strong>${member.level} Member</strong></p>
            `;

            membersContainer.appendChild(card);
        });
    }

    getMembers();

    // ================================
    // GRID / LIST VIEW
    // ================================
    const gridButton = document.querySelector("#grid");
    const listButton = document.querySelector("#list");

    if (gridButton && listButton) {

        gridButton.addEventListener("click", () => {
            membersContainer.classList.add("grid");
            membersContainer.classList.remove("list");
        });

        listButton.addEventListener("click", () => {
            membersContainer.classList.add("list");
            membersContainer.classList.remove("grid");
        });
    }

    // ================================
    // HAMBURGER MENU
    // ================================
    const menuButton = document.querySelector("#menu-button");
    const navigation = document.querySelector(".navigation");

    if (menuButton && navigation) {
        menuButton.addEventListener("click", () => {
            navigation.classList.toggle("open");
        });

        navigation.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                navigation.classList.remove("open");
            });
        });
    }

    // ================================
    // FOOTER
    // ================================
    document.querySelector("#year").textContent = new Date().getFullYear();
    document.querySelector("#lastModified").textContent = document.lastModified;

});