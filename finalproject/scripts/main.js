// Responsive Nav
const menuButton = document.getElementById('menu-button');
const navLinks = document.getElementById('nav-links');
menuButton.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Fetch featured movies
import { showModal } from './modal.js';

async function loadFeaturedMovies() {
  try {
    const res = await fetch('data/movies.json');
    const data = await res.json();
    const featured = data.slice(0, 5); // first 5 movies
    const container = document.getElementById('featured-movies');
    featured.forEach(movie => {
      const card = document.createElement('div');
      card.className = 'movie-card';
      card.innerHTML = `
        <img src="${movie.poster}" alt="${movie.title}">
        <div class="card-info">
          <h3>${movie.title}</h3>
          <p>${movie.genre} | ${movie.year}</p>
          <p>Rating: ${movie.rating}</p>
        </div>
      `;
      card.addEventListener('click', () => showModal(movie));
      container.appendChild(card);
    });
  } catch (err) {
    console.error('Error loading featured movies:', err);
  }
}
loadFeaturedMovies();