// Function to display the clicked image in a modal overlay
function displayImage() {
  console.log("Image clicked");
  const modal = document.querySelector(".modal");
  modal.style.display = "flex";
  // Set the modal image source to the clicked image's source
  modal.querySelector(".modal-content").src = event.target.src;
}

// Get reference to modal element
const modal = document.querySelector(".modal");
// Add click event listener to close modal when clicking on the overlay
modal.addEventListener("click", function (event) {
  // Close modal if clicking on the modal background (not the image)
  if (
    event.target.classList.contains("close") ||
    event.target.classList.contains("modal")
  ) {
    modal.style.display = "none";
  }
});
