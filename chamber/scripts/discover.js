import { itemsOfInterest } from './discover-data.mjs';

const gallery = document.getElementById('gallery');

// Build cards dynamically
itemsOfInterest.forEach((item, index) => {
  const card = document.createElement('article');
  card.classList.add('card');
  card.style.gridArea = `card${index + 1}`;
  card.innerHTML = `
    <h2>${item.name}</h2>
    <figure><img src="${item.image}" alt="${item.name}"></figure>
    <address>${item.address}</address>
    <p>${item.description}</p>
    <button onclick="alert('More info about ${item.name}!')">Learn More</button>
  `;
  gallery.appendChild(card);
});

// LocalStorage: track last visit
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