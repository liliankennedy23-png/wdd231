// ================================
// directory.js — Final Ready Version
// ================================

document.addEventListener("DOMContentLoaded", () => {

    // URL for JSON data
    const url = "./data/members.json";

    // Container for member cards
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
            displayMembers(data.members);

        } catch (error) {
            console.error("Error loading members:", error);
        }
    }

    // ================================
    // Convert membership number to text
    // ================================
    function getMembership(level) {
        if (level === 3) return "Gold Member";
        if (level === 2) return "Silver Member";
        return "Member";
    }

    // ================================
    // DISPLAY MEMBERS
    // ================================
    function displayMembers(members) {
        membersContainer.innerHTML = "";

        members.forEach(member => {
            const card = document.createElement("section");

            card.innerHTML = `
                <h3>${member.name}</h3>

                <img src="images/${member.image.trim()}" 
                     alt="${member.name} business image" 
                     loading="lazy">

                <p>${member.description}</p>

                <p><strong>Address:</strong> ${member.address}</p>

                <p><strong>Phone:</strong> ${member.phone}</p>

                <p><strong>Membership:</strong> ${getMembership(member.membership)}</p>

                <a href="${member.website}" target="_blank">Visit Website</a>
            `;

            membersContainer.appendChild(card);
        });
    }

    // Run the fetch function
    getMembers();

    // ================================
    // GRID / LIST VIEW BUTTONS
    // ================================
    const gridButton = document.querySelector("#grid");
    const listButton = document.querySelector("#list");

    gridButton.addEventListener("click", () => {
        membersContainer.classList.add("grid");
        membersContainer.classList.remove("list");
    });

    listButton.addEventListener("click", () => {
        membersContainer.classList.add("list");
        membersContainer.classList.remove("grid");
    });

    // ================================
    // MOBILE NAVIGATION MENU
    // ================================
    const menuButton = document.querySelector("#menu");
    const navigation = document.querySelector(".navigation");

    menuButton.addEventListener("click", () => {
        navigation.classList.toggle("open");
    });

    // Close menu when clicking a link
    navigation.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navigation.classList.remove("open");
        });
    });

    // ================================
    // FOOTER INFORMATION
    // ================================
    document.querySelector("#year").textContent = new Date().getFullYear();
    document.querySelector("#lastModified").textContent = document.lastModified;

});