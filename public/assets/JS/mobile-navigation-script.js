const backArrow = document.getElementById('back-arrow');

const menuIcon = document.getElementById("mobile-menu-bar-expand-icon");
    const mobileDrawer = document.querySelector(".mobile-drawer");
    const drawerOverlay = document.createElement("div");

    // Add overlay to the body
    drawerOverlay.classList.add("drawer-overlay");
    document.body.appendChild(drawerOverlay);

    // Open/close the drawer
    menuIcon.addEventListener("click", () => {
      mobileDrawer.classList.toggle("open");
      drawerOverlay.classList.toggle("active");
    });

    // Close the drawer when clicking on the overlay
    drawerOverlay.addEventListener("click", () => {
      mobileDrawer.classList.remove("open");
      drawerOverlay.classList.remove("active");
    });

    backArrow.addEventListener("click", ()=>{
      mobileDrawer.classList.remove("open");
      drawerOverlay.classList.remove("active");
    })
