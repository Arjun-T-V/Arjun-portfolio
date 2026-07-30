// Get modal elements
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.getElementById("close");

// Open certificate when "View Certificate" is clicked
document.querySelectorAll(".view-btn").forEach(button => {

    button.addEventListener("click", () => {

        modal.style.display = "flex";
        modalImg.src = button.dataset.img;

    });

});

// Close button
closeBtn.addEventListener("click", () => {

    modal.style.display = "none";

});

// Close when clicking outside the certificate
modal.addEventListener("click", (event) => {

    if (event.target === modal) {

        modal.style.display = "none";

    }

});

// Close using Escape key
document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        modal.style.display = "none";

    }

});

// Disable right click
document.addEventListener("contextmenu", (event) => {

    event.preventDefault();

});

// Disable dragging images
document.addEventListener("dragstart", (event) => {

    event.preventDefault();

});