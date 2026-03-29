// Cache all page elements
const allContentDivs = document.querySelectorAll(".page");

// Navigation handler function
const route = function () {
  const hash = window.location.hash;
  const contentDiv = document.getElementById(hash.slice(1));
  console.log(contentDiv);

  // Hide all pages
  allContentDivs.forEach((div) => {
    div.style.display = "none";
  });

  // Show selected page or 404 if not found
  if (contentDiv === null) {
    document.getElementById("404").style.display = "block";
  } else {
    contentDiv.style.display = "block";
  }
};

// Trigger route on hash change
window.addEventListener("hashchange", route);

// Trigger route on initial page load
window.addEventListener("load", route);
