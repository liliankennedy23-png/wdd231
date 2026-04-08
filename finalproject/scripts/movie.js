import { showModal } from './modal.js';

const container = document.getElementById('movies-container');
const searchInput = document.getElementById('search-input');

let allMovies = [];

async function loadMovies() {
  try {
    const res = await fetch('data/movies.json');
    const data = await res.json();
    allMovies = data;
    displayMovies(allMovies);
  } catch (err) {
    console.error('Error loading movies:', err);
  }
}

function displayMovies(movies) {
  container.innerHTML = '';
  movies.forEach(movie => {
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
}

searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  const filtered = allMovies.filter(movie => 
    movie.title.toLowerCase().includes(query) || movie.genre.toLowerCase().includes(query)
  );
  displayMovies(filtered);
});

loadMovies();