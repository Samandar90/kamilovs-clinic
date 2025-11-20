// js/modal.js
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("kc-booking-modal");
  if (!modal) return;

  const openButtons = document.querySelectorAll("[data-open-modal]");
  const closeButtons = modal.querySelectorAll("[data-modal-close]");
  const dialog = modal.querySelector(".kc-modal__dialog");

  function openModal() {
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("kc-body-locked");
  }

  function closeModal() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("kc-body-locked");
  }

  // Открытие по кнопкам с data-open-modal
  openButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      openModal();
    });
  });

  // Закрытие по кнопкам / фону
  closeButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      closeModal();
    });
  });

  // Клик по фону (backdrop)
  modal.addEventListener("click", (e) => {
    if (e.target === modal || e.target.hasAttribute("data-modal-close")) {
      closeModal();
    }
  });

  // ESC для закрытия
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("is-open")) {
      closeModal();
    }
  });
});
