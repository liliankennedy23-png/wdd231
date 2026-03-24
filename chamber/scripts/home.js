/* WEATHER */

const apiKey = "f68b0fe5ed532c6d2742127870f4ffda";

const lat = "34.0007";
const lon = "-81.0348";

const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

async function getWeather(){
try {
const response = await fetch(url);
const data = await response.json();

document.querySelector("#temperature").textContent =
`Temperature: ${data.list[0].main.temp} °F`;

document.querySelector("#description").textContent =
data.list[0].weather[0].description;

const forecast = document.querySelector("#forecast");
forecast.innerHTML = "";

const filtered = data.list.filter(item =>
item.dt_txt.includes("12:00:00")
).slice(0,3);

filtered.forEach(day => {

const div = document.createElement("div");

div.innerHTML = `
<p><strong>${new Date(day.dt_txt).toLocaleDateString()}</strong></p>
<p>${day.main.temp} °F</p>
`;

forecast.appendChild(div);

});

} catch (error){
console.log("Weather error:", error);
}
}

getWeather();

/* SPOTLIGHTS */

async function loadSpotlights(){
try {
const response = await fetch("data/members.json");
const members = await response.json();

const filtered = members.filter(member =>
member.level === "Gold" || member.level === "Silver"
);

filtered.sort(() => 0.5 - Math.random());

const selected = filtered.slice(0,3);

const container = document.querySelector("#spotlight-container");
container.innerHTML = "";

selected.forEach(member => {

const card = document.createElement("section");
card.classList.add("spotlight-card");

card.innerHTML = `
<h3>${member.name}</h3>
<img src="${member.logo}" alt="${member.name} logo">
<p>${member.phone}</p>
<p>${member.address}</p>
<a href="${member.website}" target="_blank">Visit Website</a>
<p><strong>${member.level} Member</strong></p>
`;

container.appendChild(card);

});

} catch (error){
console.log("Spotlight error:", error);
}
}

loadSpotlights();

/* HAMBURGER MENU */

const menuButton = document.querySelector("#menu-button");
const nav = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
nav.classList.toggle("open");
});

/* FOOTER */

document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;