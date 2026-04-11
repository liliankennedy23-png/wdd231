const grid = document.querySelector("#movie-grid");
const modal = document.querySelector("#movie-modal");
const modalContent = document.querySelector("#modal-content");

let movies = [];

async function loadMovies() {
  try {
    const res = await fetch("data/movies.json");
    movies = await res.json();
    displayMovies(movies);
  } catch (error) {
    console.error("Error loading movies:", error);
  }
}

function displayMovies(list) {
  grid.innerHTML = "";

  list.forEach(movie => {
    const card = document.createElement("div");
    card.classList.add("movie-card");

    card.innerHTML = `
      <img src="${movie.image}" alt="${movie.title} poster">
      <h3>${movie.title}</h3>
      <p>${movie.year} • ${movie.genre}</p>
      <button class="details-btn" data-id="${movie.id}">Details</button>
    `;

    grid.appendChild(card);
  });

  document.querySelectorAll(".details-btn").forEach(btn => {
    btn.addEventListener("click", showModal);
  });
}

function showModal(e) {
  const id = e.target.dataset.id;
  const movie = movies.find(m => m.id == id);

  modalContent.innerHTML = `
    <h2>${movie.title}</h2>
    <img src="${movie.image}" alt="${movie.title}">
    <p><strong>Director:</strong> ${movie.director}</p>
    <p><strong>Rating:</strong> ${movie.rating}</p>
    <p>${movie.description}</p>
    <button id="close-modal">Close</button>
  `;

  modal.style.display = "block";

  document.querySelector("#close-modal").addEventListener("click", () => {
    modal.style.display = "none";
  });

  // LOCAL STORAGE (rubric requirement)
  localStorage.setItem("lastMovieViewed", movie.title);
}

loadMovies();