// js/forms.js
document.addEventListener("DOMContentLoaded", () => {
  const bookingForm = document.getElementById("kc-booking-form");
  const contactsForm = document.getElementById("kc-contacts-form");

  function setupForm(form, options = {}) {
    if (!form) return;

    const submitBtn = form.querySelector("button[type='submit'], .kc-btn");
    const defaultBtnText = submitBtn ? submitBtn.textContent : "";

    // Блок для сообщений (создадим один раз)
    let msgBox = form.querySelector(".kc-form-status");
    if (!msgBox) {
      msgBox = document.createElement("div");
      msgBox.className = "kc-form-status";
      form.appendChild(msgBox);
    }

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      // простая валидация на required
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      msgBox.textContent = "";
      msgBox.classList.remove("kc-form-status--success", "kc-form-status--error");

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "Отправка...";
      }

      // Собираем данные формы
      const formData = new FormData(form);
      const payload = Object.fromEntries(formData.entries());
      payload.formContext = options.context || "unknown";

      try {
        // 🔹 Здесь будет твоя реальная отправка (Telegram / backend)
        //
        // Пример шаблона для fetch:
        //
        // await fetch("https://ТВОЙ_ЭНДПОИНТ/api/lead", {
        //   method: "POST",
        //   headers: { "Content-Type": "application/json" },
        //   body: JSON.stringify(payload),
        // });
        //
        // А пока — просто имитация задержки:
        await new Promise((resolve) => setTimeout(resolve, 1200));

        // Успех
        msgBox.textContent =
          options.successText ||
          "Заявка отправлена. Мы перезвоним вам в ближайшее время.";
        msgBox.classList.add("kc-form-status--success");

        form.reset();
      } catch (err) {
        console.error("Form send error:", err);
        msgBox.textContent =
          "Не удалось отправить заявку. Попробуйте ещё раз или позвоните по телефону.";
        msgBox.classList.add("kc-form-status--error");
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = defaultBtnText;
        }
      }
    });
  }

  // Подключаем обе формы
  setupForm(bookingForm, {
    context: "booking-modal",
    successText: "Заявка на приём отправлена. Администратор свяжется с вами.",
  });

  setupForm(contactsForm, {
    context: "contacts-page",
    successText: "Спасибо! Мы получили вашу заявку и скоро свяжемся с вами.",
  });
});
