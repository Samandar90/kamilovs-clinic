document.addEventListener("DOMContentLoaded", () => {
  const footerYearEl = document.getElementById("footerYear");
  if (footerYearEl) {
    footerYearEl.textContent = new Date().getFullYear();
  }

  // ===== Данные по всем направлениям =====
  const SERVICES = {
    neuro: {
      slug: "neuro",
      category: "Неврология",
      title: "Приём невролога",
      subtitle:
        "Диагностика головных болей, нарушений сна, головокружений и последствий стресса.",
      tags: ["Головные боли", "Мигрень", "Боли в спине и шее"],
      duration: "30–40 минут",
      priceRange: "от 180 000 сум",
      importantNote:
        "Если вы принимаете препараты, обязательно возьмите список лекарств с собой.",
      description:
        "На приёме невролога врач подробно расспрашивает о жалобах, режиме жизни, перенесённых заболеваниях и травмах. Проводится неврологический осмотр, оцениваются рефлексы, чувствительность, координация движений. При необходимости невролог рекомендует дополнительные обследования — МРТ, КТ, УЗИ сосудов, ЭЭГ, анализы. На основе данных выбирается схема лечения и даются рекомендации по образу жизни.",
      indications: [
        "Частые или усиливающиеся головные боли",
        "Головокружение, шум в ушах",
        "Онемение в руках или ногах",
        "Боли в спине, шее, пояснице",
        "Нарушения сна, тревожность, усталость"
      ],
      steps: [
        "Сбор жалоб и подробный опрос пациента.",
        "Неврологический осмотр и тестирование рефлексов.",
        "Назначение при необходимости МРТ, КТ, УЗИ, анализов.",
        "Постановка предварительного или окончательного диагноза.",
        "Подбор терапии и рекомендации по режиму и нагрузкам.",
        "Динамическое наблюдение и корректировка лечения."
      ],
      benefits: [
        {
          title: "Комплексный подход",
          text: "Учитываем не только симптомы, но и образ жизни, стресс, сон и сопутствующие заболевания."
        },
        {
          title: "Связка с диагностикой",
          text: "При необходимости быстро организуем МРТ, КТ, УЗИ и анализы в партнёрских центрах."
        }
      ],
      faq: [
        {
          q: "Нужно ли готовиться к приёму?",
          a: "Специальной подготовки не требуется. Желательно вспомнить все перенесённые заболевания и взять выписки, если они есть."
        }
      ],
      doctor: {
        name: "Др. Нурматова Лилия",
        role: "Врач-невролог",
        experience: "Стаж более 9 лет",
        note: "Занимается лечением головных болей, нейропатий, последствий стресса и нарушений сна."
      }
    },

    cardio: {
      slug: "cardio",
      category: "Кардиология",
      title: "Кардиолог и ЭКГ",
      subtitle:
        "Контроль давления, пульса, жалоб на боли в груди, перебои в работе сердца и одышку.",
      tags: ["Кардиолог", "ЭКГ", "Контроль давления"],
      duration: "30–60 минут",
      priceRange: "от 200 000 сум",
      importantNote:
        "Перед приёмом не рекомендуется пить крепкий кофе и энергетики. Возьмите с собой прошлые ЭКГ и анализы, если есть.",
      description:
        "На приёме кардиолога проводится оценка жалоб, измеряется давление и пульс, проводится ЭКГ. При необходимости врач назначит дополнительные исследования — ЭХО-КГ, Холтер, лабораторные анализы. По результатам подбирается лечение, даются рекомендации по питанию, нагрузкам и контролю давления.",
      indications: [
        "Боли или дискомфорт в области сердца",
        "Перебои в работе сердца, ощущение «замирания»",
        "Одышка при нагрузке или в покое",
        "Повышенное или нестабильное давление",
        "Отёки, быстрая утомляемость"
      ],
      steps: [
        "Первичная консультация и сбор анамнеза.",
        "Измерение давления, пульса, снятие ЭКГ.",
        "При необходимости — назначение ЭХО-КГ, Холтера и анализов.",
        "Анализ результатов и постановка диагноза.",
        "Подбор терапии и рекомендаций по образу жизни.",
        "Дальнейшее наблюдение и коррекция лечения."
      ],
      benefits: [
        {
          title: "Современные протоколы",
          text: "Используем актуальные международные рекомендации по лечению сердечно-сосудистых заболеваний."
        },
        {
          title: "Индивидуальный подбор терапии",
          text: "Учитываем возраст, сопутствующие заболевания и образ жизни."
        }
      ],
      faq: [
        {
          q: "Можно ли всё пройти за один визит?",
          a: "Часть обследований можно выполнить в один день, но некоторые исследования требуют отдельной записи."
        }
      ],
      doctor: {
        name: "Др. Абдурахманов Азиз",
        role: "Врач-кардиолог",
        experience: "Стаж более 10 лет",
        note: "Специализируется на гипертонии, ИБС и нарушениях ритма сердца."
      }
    },

    dental: {
      slug: "dental",
      category: "Стоматология",
      title: "Лечение и гигиена",
      subtitle:
        "Лечение кариеса, эстетическая реставрация и профессиональная чистка зубов.",
      tags: ["Лечение кариеса", "Гигиена", "Эстетическая стоматология"],
      duration: "40–60 минут",
      priceRange: "от 250 000 сум",
      importantNote:
        "Перед визитом рекомендуется почистить зубы. Сообщите врачу, если есть аллергия на препараты.",
      description:
        "На приёме стоматолог проводит осмотр полости рта, составляется план лечения. При кариесе выполняется бережная обработка и восстановление зуба современными материалами. Профессиональная гигиена позволяет удалить мягкий и твёрдый налёт, снизить риск кариеса и заболеваний дёсен.",
      indications: [
        "Боль или чувствительность зубов",
        "Неприятный запах изо рта",
        "Кровоточивость дёсен",
        "Темнеющие пломбы, сколы зубов",
        "Плановая профессиональная чистка"
      ],
      steps: [
        "Осмотр стоматолога и фото/рентген при необходимости.",
        "Составление плана лечения и согласование с пациентом.",
        "Проведение лечения (пломбирование, чистка и др.).",
        "Рекомендации по уходу, подбор щётки и пасты.",
        "Контрольный осмотр при необходимости."
      ],
      benefits: [
        {
          title: "Щадящие методики",
          text: "Используем современные анестетики и материалы, чтобы лечение проходило максимально комфортно."
        },
        {
          title: "Уделяем внимание эстетике",
          text: "Подбираем оттенок и форму пломб для естественной улыбки."
        }
      ],
      faq: [
        {
          q: "Больно ли лечить зубы?",
          a: "Мы используем местную анестезию, поэтому большинство процедур проходят без боли."
        }
      ],
      doctor: {
        name: "Др. Камилова Сабина",
        role: "Врач-стоматолог",
        experience: "Стаж 7 лет",
        note: "Специализируется на терапевтической и эстетической стоматологии."
      }
    },

    pediatrics: {
      slug: "pediatrics",
      category: "Педиатрия",
      title: "Педиатр для детей",
      subtitle:
        "Комплексный подход к здоровью ребёнка: осмотр, развитие, питание и вакцинация.",
      tags: ["Осмотр ребёнка", "Вакцинация", "Педиатр"],
      duration: "30 минут",
      priceRange: "от 180 000 сум",
      importantNote:
        "Возьмите с собой медкарту ребёнка, прививочный лист и предыдущие анализы, если они есть.",
      description:
        "Педиатр отслеживает развитие ребёнка, помогает вовремя заметить отклонения и укрепить иммунитет. На приёме врач оценивает состояние здоровья, рост, вес, отвечает на вопросы родителей по питанию, сну, режиму дня и вакцинации.",
      indications: [
        "Плановый осмотр ребёнка",
        "Частые простуды и снижение иммунитета",
        "Жалобы на боль в животе, слабость, головную боль",
        "Аллергические реакции, кожные высыпания",
        "Вопросы по питанию, набору веса и развитию"
      ],
      steps: [
        "Сбор жалоб и подробный опрос родителей.",
        "Осмотр ребёнка, измерение роста, веса, температуры.",
        "Назначение при необходимости анализов и дополнительных исследований.",
        "Постановка диагноза или рекомендаций по наблюдению.",
        "Рекомендации по питанию, режиму и вакцинации.",
        "План последующих визитов и наблюдения."
      ],
      benefits: [
        {
          title: "Дружелюбная атмосфера",
          text: "Врачи умеют находить подход к детям, чтобы приём проходил спокойно."
        },
        {
          title: "Фокус на профилактике",
          text: "Помогаем родителям выстроить режим, питание и график вакцинации."
        }
      ],
      faq: [
        {
          q: "Можно прийти без записи?",
          a: "Рекомендуем предварительную запись, чтобы сократить время ожидания. В экстренных случаях администратор предложит ближайшее время."
        }
      ],
      doctor: {
        name: "Др. Ибрагимова Мадина",
        role: "Врач-педиатр",
        experience: "Стаж 8 лет",
        note: "Специализируется на частых простудах, аллергиях и профилактике у детей."
      }
    },

    ultrasound: {
      slug: "ultrasound",
      category: "УЗ-диагностика",
      title: "УЗИ внутренних органов",
      subtitle:
        "УЗИ брюшной полости, почек, щитовидной железы, органов малого таза и беременности.",
      tags: ["УЗИ", "Диагностика", "Контроль органов"],
      duration: "15–30 минут",
      priceRange: "от 220 000 сум",
      importantNote:
        "Для некоторых видов УЗИ требуется подготовка. Администратор подскажет, как правильно подготовиться.",
      description:
        "УЗИ позволяет безболезненно и безопасно оценить состояние внутренних органов. Исследование помогает вовремя обнаружить воспаления, изменения структуры органов, кисты, камни и другие патологии.",
      indications: [
        "Боли в животе или пояснице",
        "Подозрение на заболевания печени, почек, жёлчного пузыря",
        "Плановый контроль органов малого таза",
        "Контроль течения беременности",
        "Рекомендация лечащего врача"
      ],
      steps: [
        "Подготовка (при необходимости — на голодный желудок или с наполненным мочевым пузырём).",
        "Нанесение геля на исследуемую область.",
        "Проведение УЗИ и оценка изображения на экране.",
        "Описание результатов и выдача заключения.",
        "Рекомендации по дальнейшим обследованиям или лечению."
      ],
      benefits: [
        {
          title: "Безопасный метод",
          text: "УЗИ не несёт лучевой нагрузки и подходит для частого контроля."
        },
        {
          title: "Быстрый результат",
          text: "Заключение выдается в кратчайшие сроки."
        }
      ],
      faq: [
        {
          q: "Нужно ли приходить натощак?",
          a: "Для УЗИ брюшной полости обычно требуется натощак. Точный режим подготовки уточните при записи."
        }
      ],
      doctor: {
        name: "Др. Саттаров Рустам",
        role: "Врач УЗ-диагностики",
        experience: "Стаж 11 лет",
        note: "Проводит УЗИ внутренних органов, сосудов и беременности."
      }
    },

    labs: {
      slug: "labs",
      category: "Анализы",
      title: "Лабораторные исследования",
      subtitle:
        "Общий и биохимический анализ крови, гормоны, инфекции и подготовка к операциям.",
      tags: ["Анализы крови", "Гормоны", "Инфекции"],
      duration: "10–20 минут (забор)",
      priceRange: "по прайсу",
      importantNote:
        "Для части анализов кровь сдаётся натощак. Администратор подскажет режим подготовки при записи.",
      description:
        "Лабораторная диагностика помогает оценить общее состояние организма, работу внутренних органов, уровень гормонов и выявить инфекции. Результаты анализов используются для постановки диагноза, контроля лечения и подготовки к операциям.",
      indications: [
        "Плановый чекап и профилактика",
        "Подготовка к операции или госпитализации",
        "Контроль эффективности лечения",
        "Жалобы на слабость, потерю веса, длительную температуру",
        "Рекомендация врача различных специальностей"
      ],
      steps: [
        "Оформление направления и выбор необходимых анализов.",
        "Забор крови или другого биоматериала.",
        "Передача материала в лабораторию.",
        "Подготовка результатов в указанные сроки.",
        "Передача результатов пациенту и/или врачу.",
        "При необходимости — повторные исследования для контроля."
      ],
      benefits: [
        {
          title: "Удобный формат результатов",
          text: "Результаты можно получить в распечатанном виде или по мессенджеру."
        },
        {
          title: "Широкий перечень исследований",
          text: "От базовых анализов до расширенных панелей по гормонам и инфекциям."
        }
      ],
      faq: [
        {
          q: "Все ли анализы нужно сдавать натощак?",
          a: "Часть анализов — да. При записи администратор подскажет, какой режим подходит именно вам."
        }
      ]
      // Врача можно не указывать, эта услуга больше сервисная
    }
  };

  // ===== Получаем slug из URL =====
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug");
  const service = slug ? SERVICES[slug] : null;

  if (!service) {
    const main = document.querySelector("main");
    if (main) {
      main.innerHTML = `
        <section class="sd-section">
          <div class="kc-container">
            <h1 class="sd-title">Услуга не найдена</h1>
            <p class="sd-text">
              Возможно, ссылка устарела или услуга временно недоступна.
            </p>
            <a href="services.html" class="sd-btn sd-btn--primary">
              Вернуться к услугам
            </a>
          </div>
        </section>
      `;
    }
    return;
  }

  // ===== Подставляем в DOM =====
  const byId = (id) => document.getElementById(id);

  const breadcrumbServiceName = byId("breadcrumbServiceName");
  const serviceCategory = byId("serviceCategory");
  const serviceTitle = byId("serviceTitle");
  const serviceSubtitle = byId("serviceSubtitle");
  const serviceTags = document.getElementById("serviceTags");
  const serviceDuration = byId("serviceDuration");
  const servicePriceRange = byId("servicePriceRange");
  const serviceImportantNote = byId("serviceImportantNote");
  const serviceDescription = byId("serviceDescription");
  const serviceIndications = byId("serviceIndications");
  const serviceSteps = byId("serviceSteps");
  const serviceBenefits = byId("serviceBenefits");
  const serviceFaq = byId("serviceFaq");
  const serviceDoctorCard = byId("serviceDoctorCard");

  if (breadcrumbServiceName) breadcrumbServiceName.textContent = service.category;
  if (serviceCategory) serviceCategory.textContent = service.category;
  if (serviceTitle) serviceTitle.textContent = service.title;
  if (serviceSubtitle) serviceSubtitle.textContent = service.subtitle;
  if (serviceDuration) serviceDuration.textContent = service.duration;
  if (servicePriceRange) servicePriceRange.textContent = service.priceRange;
  if (serviceImportantNote) serviceImportantNote.textContent = service.importantNote;
  if (serviceDescription) serviceDescription.textContent = service.description;

  // Теги
  if (serviceTags && Array.isArray(service.tags)) {
    serviceTags.innerHTML = "";
    service.tags.forEach((tag) => {
      const span = document.createElement("span");
      span.className = "sd-tag";
      span.textContent = tag;
      serviceTags.appendChild(span);
    });
  }

  // Показания
  if (serviceIndications && Array.isArray(service.indications)) {
    serviceIndications.innerHTML = "";
    service.indications.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      serviceIndications.appendChild(li);
    });
  }

  // Этапы
  if (serviceSteps && Array.isArray(service.steps)) {
    serviceSteps.innerHTML = "";
    service.steps.forEach((step) => {
      const li = document.createElement("li");
      li.textContent = step;
      serviceSteps.appendChild(li);
    });
  }

  // Преимущества
  if (serviceBenefits && Array.isArray(service.benefits)) {
    serviceBenefits.innerHTML = "";
    service.benefits.forEach((b) => {
      const div = document.createElement("div");
      div.className = "sd-benefit";
      div.innerHTML = `
        <h3>${b.title}</h3>
        <p>${b.text}</p>
      `;
      serviceBenefits.appendChild(div);
    });
  }

  // FAQ
  if (serviceFaq && Array.isArray(service.faq)) {
    serviceFaq.innerHTML = "";
    service.faq.forEach((item, index) => {
      const faqItem = document.createElement("div");
      faqItem.className = "sd-faq__item";
      faqItem.innerHTML = `
        <button class="sd-faq__q" data-faq-index="${index}">
          <span>${item.q}</span>
          <span class="sd-faq__toggle">+</span>
        </button>
        <div class="sd-faq__a">
          <p>${item.a}</p>
        </div>
      `;
      serviceFaq.appendChild(faqItem);
    });

    serviceFaq.addEventListener("click", (e) => {
      const btn = e.target.closest(".sd-faq__q");
      if (!btn) return;
      const item = btn.parentElement;
      const answer = item.querySelector(".sd-faq__a");
      const toggle = btn.querySelector(".sd-faq__toggle");

      const isOpen = item.classList.contains("sd-open");

      document.querySelectorAll(".sd-faq__item.sd-open").forEach((it) => {
        it.classList.remove("sd-open");
        const ans = it.querySelector(".sd-faq__a");
        const tgl = it.querySelector(".sd-faq__toggle");
        if (ans) ans.style.maxHeight = null;
        if (tgl) tgl.textContent = "+";
      });

      if (!isOpen) {
        item.classList.add("sd-open");
        answer.style.maxHeight = answer.scrollHeight + "px";
        toggle.textContent = "−";
      }
    });
  }

  // Карточка врача
  if (serviceDoctorCard && service.doctor) {
    const d = service.doctor;
    serviceDoctorCard.innerHTML = `
      <h4>Профильный врач</h4>
      <p class="sd-doctor__name">${d.name}</p>
      <p class="sd-doctor__role">${d.role}</p>
      <p class="sd-doctor__exp">${d.experience}</p>
      <p class="sd-doctor__note">${d.note}</p>
      <a href="doctors.html" class="sd-doctor__link">Все врачи клиники</a>
    `;
  }

  // Скролл к блоку деталей
  const scrollBtn = document.getElementById("scrollToDetails");
  const detailsBlock = document.getElementById("details");
  if (scrollBtn && detailsBlock) {
    scrollBtn.addEventListener("click", () => {
      detailsBlock.scrollIntoView({ behavior: "smooth" });
    });
  }
});
