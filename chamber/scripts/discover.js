import { itemsOfInterest } from './discover-data.mjs';

const gallery = document.getElementById('gallery');

// Build gallery cards with extra-credit hover effects
itemsOfInterest.forEach((item, index) => {
  const card = document.createElement('article');
  card.classList.add('card');
  card.style.gridArea = `card${index + 1}`;
  card.innerHTML = `
    <h2>${item.name}</h2>
    <figure><img src="images/${item.image}" alt="${item.name}"></figure>
    <address>${item.address}</address>
    <p>${item.description}</p>
    <button data-index="${index}" class="learn-more">Learn More</button>
  `;
  gallery.appendChild(card);
});

// Modal setup
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalImage = document.getElementById('modal-image');
const modalAddress = document.getElementById('modal-address');
const modalDescription = document.getElementById('modal-description');
const closeModal = document.querySelector('.close');

gallery.addEventListener('click', e => {
  if (e.target.classList.contains('learn-more')) {
    const index = e.target.dataset.index;
    const item = itemsOfInterest[index];
    modalTitle.textContent = item.name;
    modalImage.src = `images/${item.image}`;
    modalImage.alt = item.name;
    modalAddress.textContent = item.address;
    modalDescription.textContent = item.description;
    modal.style.display = 'block';
  }
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', e => {
  if (e.target === modal) modal.style.display = 'none';
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

// Automatic audio play with fallback
const audio = document.getElementById('background-audio');
const playButton = document.getElementById('play-audio');

audio.play().catch(() => {
  // Autoplay blocked, show button
  playButton.style.display = 'inline-block';
});

playButton.addEventListener('click', () => {
  audio.play();
  playButton.style.display = 'none';
});

// Update last modified date
document.getElementById('last-modified').textContent = document.lastModified;