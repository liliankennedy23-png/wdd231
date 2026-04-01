import { itemsOfInterest } from './discover-data.mjs';

const gallery = document.getElementById('gallery');

// Build gallery cards
itemsOfInterest.forEach((item, index) => {
  const card = document.createElement('article');
  card.classList.add('card');
  card.style.gridArea = `card${index + 1}`;
  card.innerHTML = `
    <h2>${item.name}</h2>
    <figure><img src="${item.image}" alt="${item.name}"></figure>
    <address>${item.address}</address>
    <p>${item.description}</p>
    <button data-name="${item.name}" class="learn-more">Learn More</button>
  `;
  gallery.appendChild(card);
});

// Learn More button alerts
gallery.addEventListener('click', e => {
  if (e.target.classList.contains('learn-more')) {
    alert(`More info about ${e.target.dataset.name}!`);
  }
});

// localStorage: track last visit
const lastVisit = localStorage.getItem('lastVisit');
const now = Date.now();
const visitMessage = document.getElementById('visit-message');

if (!lastVisit) {
  visitMessage.textContent = "Welcome! Let us know if you have any questions.";
} else {
  const diffDays = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
  if (diffDays === 0) {
    visitMessage.textContent = "Back so soon! Awesome!";
  } else {
    visitMessage.textContent = `You last visited ${diffDays} ${diffDays === 1 ? 'day' : 'days'} ago.`;
  }
}

localStorage.setItem('lastVisit', now);

// Background audio play after click
const audio = document.getElementById('background-audio');
const playButton = document.getElementById('play-audio');

playButton.addEventListener('click', () => {
  audio.play().catch(e => console.log("Autoplay blocked:", e));
  playButton.style.display = 'none'; // hide button once playing
});