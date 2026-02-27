const getAQuoteSticker = document.getElementById("get-a-quote-sticker-text");
const getAQuoteDialogBox = document.getElementById("get-a-quote-dialog");
const cancelQuoteForm = document.getElementById("cancel-quote-form");
const overlay = document.getElementById("overlay");

getAQuoteSticker.addEventListener("click", () => {
  document.body.classList.add("no-scroll"); // Prevent background scroll
  overlay.classList.add("show");
  getAQuoteDialogBox.classList.add("show"); // Show dialog
  getAQuoteDialogBox.setAttribute("aria-hidden", "false"); // Accessibility
});

cancelQuoteForm.addEventListener("click", () => {
  document.body.classList.remove("no-scroll"); // Enable background scroll
  overlay.classList.remove("show");
  getAQuoteDialogBox.classList.remove("show"); // Hide dialog
  getAQuoteDialogBox.setAttribute("aria-hidden", "true"); // Accessibility
});


  document.addEventListener("DOMContentLoaded", () => {
    // Get the current path
    const currentPath = window.location.pathname;

    // Get all nav links
    const navLinks = document.querySelectorAll(".nav-link");

    // Loop through each link and add the 'active' class if it matches the current path
    navLinks.forEach((link) => {
      if (link.getAttribute("href") === currentPath) {
        link.classList.add("active");
      }
    });
  });



const mobileNavServicesDropdown = document.getElementById("mobile-nav-services-dropdown");
const mobilenavSubmenu = document.getElementById("mobilenav-submenu");
mobileNavServicesDropdown.addEventListener("click", ()=>{
  mobilenavSubmenu.classList.toggle("toggle-mobilenav-submenu");
})
