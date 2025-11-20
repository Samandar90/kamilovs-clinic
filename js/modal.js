// modal.js
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("kc-booking-modal");
  if (!modal) return;

  const openButtons = document.querySelectorAll("[data-open-modal]");
  const closeButtons = modal.querySelectorAll("[data-modal-close]");
  const backdrop = modal.querySelector(".kc-modal__backdrop");
  const form = modal.querySelector("#kc-booking-form");

  let lastFocused = null;

  function openModal(e) {
    if (e) e.preventDefault();
    lastFocused = document.activeElement;

    modal.setAttribute("aria-hidden", "false");
    document.documentElement.style.overflow = "hidden";

    const first = modal.querySelector("input, textarea, button");
    if (first) setTimeout(() => first.focus(), 50);
  }

  function closeModal() {
    modal.setAttribute("aria-hidden", "true");
    document.documentElement.style.overflow = "";
    if (lastFocused && typeof lastFocused.focus === "function") {
      lastFocused.focus();
    }
  }

  // Открытие (все кнопки с data-open-modal)
  openButtons.forEach((btn) => {
    btn.addEventListener("click", openModal);
  });

  // Закрытие по крестикам
  closeButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      closeModal();
    });
  });

  // Закрытие по клику на фон
  if (backdrop) {
    backdrop.addEventListener("click", () => {
      closeModal();
    });
  }

  // Закрытие по Esc
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.getAttribute("aria-hidden") === "false") {
      closeModal();
    }
  });

  // Временная отправка формы (без Telegram)
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("✅ Заявка отправлена! (позже подключим Telegram)");
      form.reset();
      closeModal();
    });
  }
});
