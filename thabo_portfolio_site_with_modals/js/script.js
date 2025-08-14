/**
 * Main JavaScript for Thabo Makhubele's Portfolio
 *
 * Handles:
 * 1) Mobile menu
 * 2) Project modals (with click delegation)
 * 3) Prevent modal open when clicking buttons inside cards
 */
document.addEventListener("DOMContentLoaded", function () {

  // --- Mobile Navigation Toggle ---
  const menuIcon = document.getElementById("menu-icon");
  const navLinks = document.getElementById("nav-links");

  if (menuIcon && navLinks) {
    menuIcon.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
      });
    });
  }

  // --- Project Modal Functionality ---
  const projectsContainer = document.querySelector(".projects-grid");
  const closeModalButtons = document.querySelectorAll(".modal-close");

  // Prevent modal opening when clicking buttons inside project cards
  document.querySelectorAll(".project-card .btn-no-prop").forEach(btn => {
    btn.addEventListener("click", (e) => e.stopPropagation());
  });

  if (projectsContainer) {
    projectsContainer.addEventListener("click", (event) => {
      const card = event.target.closest(".project-card");
      if (card) {
        const modalId = card.dataset.modalTarget;
        const modal = document.querySelector(modalId);
        if (modal) {
          modal.classList.add("active");
          document.body.style.overflow = "hidden";
        }
      }
    });
  }

  closeModalButtons.forEach(button => {
    button.addEventListener("click", () => {
      closeAllModals();
    });
  });

  window.addEventListener("click", (event) => {
    if (event.target.classList.contains("modal")) {
      closeAllModals();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeAllModals();
    }
  });

  function closeAllModals() {
    const activeModals = document.querySelectorAll(".modal.active");
    activeModals.forEach(modal => {
      modal.classList.remove("active");
    });
    document.body.style.overflow = "auto";
  }
});
