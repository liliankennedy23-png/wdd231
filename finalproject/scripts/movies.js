const grid = document.querySelector("#movieGrid");
const modal = document.querySelector("#modal");
const modalContent = document.querySelector("#modalContent");
const closeModal = document.querySelector("#closeModal");

let movies = [];

async function loadMovies() {
  try {
    const response = await fetch("data/movies.json");
    movies = await response.json();
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
      <img src="${movie.image}" alt="${movie.title} poster" loading="lazy">
      <h3>${movie.title}</h3>
      <p>${movie.year} • ${movie.genre}</p>
      <button data-id="${movie.id}" class="details-btn">Details</button>
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
  `;

  modal.classList.remove("hidden");

  localStorage.setItem("lastMovieViewed", movie.title);
}

closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});

loadMovies();