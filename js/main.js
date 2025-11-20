document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll("[data-reveal]");
  if (!items.length) return;

  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    items.forEach((el) => io.observe(el));
  } else {
    // старые браузеры — просто показать
    items.forEach((el) => el.classList.add("is-in"));
  }
});

// ===== HOME SERVICES SLIDER (index) =====
document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("home-services");
  if (!root) return;

  const media = root.querySelector(".kc-hs__media");
  const slides = Array.from(root.querySelectorAll(".kc-hs__slide"));
  const prevBtn = root.querySelector(".kc-hs__nav--prev");
  const nextBtn = root.querySelector(".kc-hs__nav--next");
  const dotsWrap = root.querySelector(".kc-hs__dots");

  if (!slides.length) return;

  let index = 0;
  let autoTimer = null;
  const AUTO_MS = 4000;

  // создаём точки
  slides.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.setAttribute("aria-label", `Слайд ${i + 1}`);
    dot.addEventListener("click", () => goTo(i));
    dotsWrap.appendChild(dot);
  });

  const dots = Array.from(dotsWrap.querySelectorAll("button"));

  function update() {
    slides.forEach((s, i) =>
      s.classList.toggle("is-active", i === index)
    );
    dots.forEach((d, i) =>
      d.setAttribute("aria-current", i === index ? "true" : "false")
    );
  }

  function goTo(i) {
    const max = slides.length - 1;
    index = (i + slides.length) % slides.length;
    update();
  }

  function next() {
    goTo(index + 1);
  }
  function prev() {
    goTo(index - 1);
  }

  prevBtn && prevBtn.addEventListener("click", prev);
  nextBtn && nextBtn.addEventListener("click", next);

  // авто-прокрутка каждые 4 секунды
  function startAuto() {
    stopAuto();
    autoTimer = setInterval(next, AUTO_MS);
  }
  function stopAuto() {
    if (autoTimer) {
      clearInterval(autoTimer);
      autoTimer = null;
    }
  }

  media.addEventListener("mouseenter", stopAuto);
  media.addEventListener("mouseleave", startAuto);
  media.addEventListener(
    "touchstart",
    () => stopAuto(),
    { passive: true }
  );
  media.addEventListener(
    "touchend",
    () => startAuto(),
    { passive: true }
  );

  // простой клик по "play" — пока просто открываем YouTube, можно поменять ссылку
  media.addEventListener("click", (e) => {
    const play = e.target.closest(".kc-hs__play");
    if (!play) return;
    // здесь можно сделать свою ссылку или модалку
    window.open(
      "https://www.youtube.com/results?search_query=kamilovs+clinic",
      "_blank"
    );
  });

  // init
  update();
  startAuto();
});

document.addEventListener("DOMContentLoaded", () => {
  const docsSection = document.querySelector(".kc-docs");
  if (!docsSection) return;

  const track = docsSection.querySelector(".kc-docs__track");
  const cards = Array.from(track.querySelectorAll(".kc-docs__card"));

  if (!cards.length) return;

  const GROUP = 3;
  let groupIndex = 0;
  let autoTimer = null;

  function isDesktop() {
    return window.innerWidth > 900;
  }

  function showGroup(idx) {
    const totalGroups = Math.ceil(cards.length / GROUP);
    groupIndex = (idx + totalGroups) % totalGroups;

    const start = groupIndex * GROUP;
    const end = start + GROUP;

    cards.forEach((card, i) => {
      const visible = i >= start && i < end;
      card.style.opacity = visible ? "1" : "0";
      card.style.pointerEvents = visible ? "auto" : "none";
      card.style.position = visible ? "relative" : "absolute";
      card.style.inset = visible ? "auto" : "0";
      card.style.transform = visible
        ? "translate3d(0, var(--shift-y, 0px), 0)"
        : "translate3d(0, 20px, 0)";
      card.style.transition = "opacity 0.45s ease, transform 0.45s ease";
    });
  }

  function resetForMobile() {
    // на мобилке показываем все карточки, без групп
    cards.forEach((card) => {
      card.style.opacity = "";
      card.style.pointerEvents = "";
      card.style.position = "";
      card.style.inset = "";
      card.style.transform = "";
      card.style.transition = "";
    });
  }

  function startAuto() {
    stopAuto();
    if (!isDesktop()) return;
    showGroup(0);
    autoTimer = setInterval(() => {
      showGroup(groupIndex + 1);
    }, 4000);
  }

  function stopAuto() {
    if (autoTimer) {
      clearInterval(autoTimer);
      autoTimer = null;
    }
  }

  // включаем / выключаем в зависимости от ширины
  function handleResize() {
    if (isDesktop()) {
      startAuto();
    } else {
      stopAuto();
      resetForMobile();
    }
  }

  window.addEventListener("resize", () => {
    // небольшая задержка, чтобы не дёргалось
    clearTimeout(handleResize._t);
    handleResize._t = setTimeout(handleResize, 150);
  });

  // ==== лёгкий 3D-parallax при скролле ====
  const parallaxCards = cards;
  function updateParallax() {
    const vh = window.innerHeight;
    parallaxCards.forEach((card, i) => {
      const rect = card.getBoundingClientRect();
      const center = rect.top + rect.height / 2;
      const dist = (center - vh / 2) / vh; // -0.5…0.5
      const depth = (i % GROUP) - 1; // -1,0,1 внутри группы
      const shift = dist * 18 + depth * 4; // пиксели
      card.style.setProperty("--shift-y", shift.toFixed(1) + "px");
    });
  }

  window.addEventListener("scroll", () => {
    window.requestAnimationFrame(updateParallax);
  }, { passive: true });

  // начальная инициализация
  handleResize();
  updateParallax();
});


// ===== FOOTER: год + кнопка "наверх" =====
document.addEventListener("DOMContentLoaded", () => {
  // год в футере
  const yearEl = document.getElementById("kc-year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // кнопка "наверх"
  const toTop = document.querySelector(".kc-to-top");
  if (!toTop) return;

  const toggleToTop = () => {
    if (window.scrollY > 320) {
      toTop.classList.add("is-visible");
    } else {
      toTop.classList.remove("is-visible");
    }
  };

  toggleToTop();
  window.addEventListener("scroll", toggleToTop, { passive: true });

  toTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

