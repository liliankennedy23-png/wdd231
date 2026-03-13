const url = "data/members.json";

const membersContainer = document.querySelector("#members");

async function getMembers(){

try{

const response = await fetch(url);

const data = await response.json();

displayMembers(data.members);

}

catch(error){

console.error("Error loading members:", error);

}

}

function displayMembers(members){

members.forEach(member=>{

const card=document.createElement("section");

card.innerHTML=`

<h3>${member.name}</h3>

<img src="images/${member.image}" alt="${member.name}" loading="lazy">

<p>${member.description}</p>

<p>${member.address}</p>

<p>${member.phone}</p>

<a href="${member.website}" target="_blank">Visit Website</a>

`;

membersContainer.appendChild(card);

});

}

getMembers();


// GRID / LIST BUTTONS

const gridButton=document.querySelector("#grid");
const listButton=document.querySelector("#list");

gridButton.addEventListener("click",()=>{

membersContainer.classList.add("grid");
membersContainer.classList.remove("list");

});

listButton.addEventListener("click",()=>{

membersContainer.classList.add("list");
membersContainer.classList.remove("grid");

});


// MOBILE NAVIGATION

const menuButton=document.querySelector("#menu");
const navigation=document.querySelector(".navigation");

menuButton.addEventListener("click",()=>{

navigation.classList.toggle("open");

});


// FOOTER YEAR

document.querySelector("#year").textContent=new Date().getFullYear();

document.querySelector("#lastModified").textContent=document.lastModified;