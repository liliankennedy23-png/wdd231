// MENU TOGGLE
const menuBtn = document.querySelector("#menu-button");
const nav = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
});

// TIMESTAMP
document.querySelector("#timestamp").value = new Date().toISOString();

// FOOTER
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

// MODAL FUNCTIONALITY
const modalLinks = document.querySelectorAll(".modal-link");
const modalCloseButtons = document.querySelectorAll(".modal-close");

// Open modal on click
modalLinks.forEach(link => {
    link.addEventListener("click", function(e){
        e.preventDefault();
        const modalId = this.dataset.modal;
        const modal = document.getElementById(modalId);
        modal.showModal();

        // Close modal when clicking outside
        modal.addEventListener("click", (event) => {
            const rect = modal.getBoundingClientRect();
            const isInDialog = (
                rect.top <= event.clientY && event.clientY <= rect.top + rect.height &&
                rect.left <= event.clientX && event.clientX <= rect.left + rect.width
            );
            if (!isInDialog) {
                modal.close();
            }
        });
    });
});

// Close modal on click of Close button
modalCloseButtons.forEach(btn => {
    btn.addEventListener("click", function(){
        const modalId = this.dataset.modal;
        document.getElementById(modalId).close();
    });
});