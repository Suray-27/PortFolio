  // Toggle between light and dark mode
function toggleTheme() {
  document.body.classList.toggle("dark-mode");
}

// Filter projects by category
function filterProjects(category) {
  let projects = document.querySelectorAll(".project");
  let buttons = document.querySelectorAll(".filters button");

  // Show or hide projects based on category
  projects.forEach((project) => {
    if (category === "all" || project.classList.contains(category)) {
      project.style.display = "block";
    } else {
      project.style.display = "none";
    }
  });

  // Highlight the active filter button
  buttons.forEach((button) => button.classList.remove("active"));
  document
    .querySelector(`button[data-category="${category}"]`)
    .classList.add("active");
}

// Open modal for displaying images
function openModal(imageSrc) {
  const modal = document.getElementById("image-modal");
  const modalImg = document.getElementById("modal-image");
  const captionText = document.getElementById("caption");

  // Show modal and set image source and caption
  modal.style.display = "block";
  modalImg.src = imageSrc;
  captionText.innerHTML = "Skill Badge"; // Customize this caption as needed
}

// Close the modal
function closeModal() {
  const modal = document.getElementById("image-modal");
  modal.style.display = "none";
}

// Ensure modal closes on outside click (for better usability on all devices)
document.addEventListener("click", (event) => {
  const modal = document.getElementById("image-modal");
  if (event.target === modal) {
    closeModal();
  }
});
