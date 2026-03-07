const url = "data/members.json";
const membersContainer = document.querySelector("#members");

async function getMembers() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayMembers(data);
    } catch (error) {
        console.error("Error loading members:", error);
    }
}

function displayMembers(members) {
    members.forEach(member => {

        const card = document.createElement("section");
        const name = document.createElement("h3");
        const image = document.createElement("img");
        const address = document.createElement("p");
        const phone = document.createElement("p");
        const website = document.createElement("a");
        const description = document.createElement("p");

        name.textContent = member.name;

        image.setAttribute("src", `images/${member.image}`);
        image.setAttribute("alt", `${member.name} business image`);
        image.setAttribute("loading", "lazy");
        image.setAttribute("width", "300");

        address.textContent = member.address;
        phone.textContent = member.phone;
        description.textContent = member.description;

        website.setAttribute("href", member.website);
        website.setAttribute("target", "_blank");
        website.textContent = "Visit Website";

        card.appendChild(name);
        card.appendChild(image);
        card.appendChild(description);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);

        membersContainer.appendChild(card);
    });
}

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


// FOOTER INFO

document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;