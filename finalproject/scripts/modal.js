const modal = document.getElementById('modal');
const content = document.getElementById('modalContent');

window.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    content.innerHTML = `<h2>${e.target.dataset.title}</h2>`;
    modal.classList.remove('hidden');
  }
});

document.getElementById('closeModal').onclick = () => {
  modal.classList.add('hidden');
};