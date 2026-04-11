import { itemsOfInterest } from './discover-data.mjs';

const gallery = document.getElementById('gallery');

/* BUILD CARDS */
itemsOfInterest.forEach((item, index) => {
  const card = document.createElement('article');
  card.classList.add('card');

  // REQUIRED: grid-area assignment
  card.style.gridArea = `card${index + 1}`;

  card.innerHTML = `
    <h3>${item.name}</h3>
    <figure>
      <img src="images/${item.image}"
           alt="${item.name}"
           loading="lazy"
           width="300"
           height="200">
    </figure>
    <address>${item.address}</address>
    <p>${item.description}</p>
    <button aria-label="Learn more about ${item.name}">
      Learn More
    </button>
  `;

  gallery.appendChild(card);
});

/* =========================
   LOCAL STORAGE MESSAGE
========================= */
const visitMessage = document.getElementById('visit-message');
const lastVisit = localStorage.getItem('lastVisit');
const now = Date.now();

if (!lastVisit) {
  visitMessage.textContent = "Welcome! Let us know if you have questions.";
} else {
  const days = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));

  visitMessage.textContent =
    days === 0
      ? "Back so soon!"
      : `You last visited ${days} day(s) ago.`;
}

localStorage.setItem('lastVisit', now);

/* =========================
   AUDIO BUTTON
========================= */
const audio = document.getElementById('background-audio');
const btn = document.getElementById('play-audio');

audio.play().catch(() => {
  btn.style.display = "inline-block";
});

btn.addEventListener("click", () => {
  audio.play();
  btn.style.display = "none";
});

/* =========================
   FOOTER DATE
========================= */
document.getElementById("last-modified").textContent = document.lastModified;