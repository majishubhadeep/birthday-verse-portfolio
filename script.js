
/* =========================================================
   BIRTHDAY VERSE PORTFOLIO — INTERACTIONS
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  // Automatically update the footer year.
  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }


  // MOBILE NAVIGATION
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

      const isOpen = navLinks.classList.toggle("open");

      menuToggle.setAttribute("aria-expanded", String(isOpen));

      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
      );

    });


    // Close menu when a navigation link is clicked.
    navLinks.querySelectorAll("a").forEach((link) => {

      link.addEventListener("click", () => {

        navLinks.classList.remove("open");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.setAttribute("aria-label", "Open navigation");

      });

    });


    // Close the mobile menu when clicking outside it.
    document.addEventListener("click", (event) => {

      if (
        !navLinks.contains(event.target) &&
        !menuToggle.contains(event.target)
      ) {

        navLinks.classList.remove("open");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.setAttribute("aria-label", "Open navigation");

      }

    });

  }


  // SCROLL REVEAL ANIMATIONS
  const revealItems = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            currentObserver.unobserve(entry.target);

          }

        });

      },
      {
        threshold: 0.12
      }
    );

    revealItems.forEach((item) => {
      observer.observe(item);
    });

  } else {

    // Fallback for browsers without IntersectionObserver.
    revealItems.forEach((item) => {
      item.classList.add("visible");
    });

  }


  // SCREENSHOT ERROR HANDLING
  document.querySelectorAll(
    ".screenshot-image img, .preview-window > img"
  ).forEach((img) => {

    img.addEventListener("error", () => {

      img.alt = "Screenshot not found. Check the filename and assets folder.";

      img.style.minHeight = "180px";

      img.style.background =
        "linear-gradient(135deg, #28123b, #10051b)";

      img.style.objectFit = "contain";

    });

  });

});
