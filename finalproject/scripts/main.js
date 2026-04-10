document.getElementById('year').textContent = new Date().getFullYear();

const btn = document.getElementById('menuBtn');
const nav = document.getElementById('navMenu');

btn.addEventListener('click', () => {
  nav.classList.toggle('hidden');
});

// LOCAL STORAGE EXAMPLE
localStorage.setItem('visited', 'true');