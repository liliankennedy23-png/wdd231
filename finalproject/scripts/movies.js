const grid = document.getElementById("movieGrid");
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");

let movies = [];

// LOAD JSON
async function loadMovies() {
  try {
    const response = await fetch("data/movies.json");
    movies = await response.json();
    displayMovies(movies);
  } catch (error) {
    console.error("Movie load error:", error);
  }
}

// DISPLAY MOVIES
function displayMovies(list) {
  grid.innerHTML = "";

  list.forEach(movie => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${movie.image}" alt="${movie.title} poster" loading="lazy">
      <h3>${movie.title}</h3>
      <p>${movie.year} • ${movie.genre}</p>
      <button class="detailsBtn" data-id="${movie.id}">Details</button>
    `;

    grid.appendChild(card);
  });

  document.querySelectorAll(".detailsBtn").forEach(btn => {
    btn.addEventListener("click", openModal);
  });
}

// OPEN MODAL
function openModal(e) {
  const movie = movies.find(m => m.id == e.target.dataset.id);

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

loadMovies();