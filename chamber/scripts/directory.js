const url = "data/members.json";

const membersContainer = document.querySelector("#members");

// FETCH MEMBERS USING ASYNC/AWAIT
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


// DISPLAY MEMBERS
function displayMembers(members) {

    membersContainer.innerHTML = ""; // prevents duplicates

    members.forEach(member => {

        const card = document.createElement("section");

        card.innerHTML = `
            <h3>${member.name}</h3>

            <img src="images/${member.image}" 
                 alt="${member.name} business image" 
                 loading="lazy">

            <p>${member.description}</p>

            <p><strong>Address:</strong> ${member.address}</p>

            <p><strong>Phone:</strong> ${member.phone}</p>

            <p><strong>Membership Level:</strong> ${member.membership}</p>

            <a href="${member.website}" target="_blank">Visit Website</a>
        `;

        membersContainer.appendChild(card);

    });

}


// RUN FETCH
getMembers();


// GRID / LIST VIEW TOGGLE
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


// MOBILE NAVIGATION MENU
const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {

    navigation.classList.toggle("open");

});


// FOOTER INFORMATION
document.querySelector("#year").textContent = new Date().getFullYear();

document.querySelector("#lastModified").textContent = document.lastModified;