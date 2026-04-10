const grid = document.querySelector('#movieGrid');

export async function loadMovies() {
  try {
    const res = await fetch('data/movies.json');
    const movies = await res.json();

    movies.forEach(movie => {
      const card = document.createElement('div');
      card.classList.add('card');

      card.innerHTML = `
        <h3>${movie.title}</h3>
        <p>${movie.year}</p>
        <p>${movie.genre}</p>
        <button data-title="${movie.title}">Details</button>
      `;

      grid.appendChild(card);
    });

  } catch (error) {
    console.error('Error loading movies:', error);
  }
}

loadMovies();