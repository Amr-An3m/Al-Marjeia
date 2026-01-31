/**
 * Al-Marjeia - Complete JavaScript
 * Includes Multi-language Support & All Animations
 * FIXED: Carousel autoplay works in both Arabic and English
 */

// ========================================
// CONFIGURATION
// ========================================
const CONFIG = {
  defaultLanguage: "en",
  supportedLanguages: ["en", "ar"],
  autoPlayDelay: 5000,
  counterDuration: 2000,
  scrollOffset: 100,
  enableParallax: true,
};

// ========================================
// TRANSLATIONS DATABASE
// ========================================
const TRANSLATIONS = {
  ar: {
    logo: "المرجعية",
    // Header & Navigation
    home: "الرئيسية",
    services: "خدماتنا",
    about: "من نحن",
    portfolio: "أعمالنا",
    contact: "اتصل بنا",
    getInTouch: "تواصل معنا",

    // Hero Section
    heroTitleLine1: "حيث تتقابل الرؤية",
    heroTitleLine2: "مع <span class='highlight'>التميز</span>",
    heroSubtitle:
      "تقدم المرجعية حلول اتصال استراتيجية، وإدارة فعالة للفعاليات، وابتكارات رقمية تحول العلامات التجارية وتخلق تأثيراً دائمًا في الشرق الأوسط وما بعده.",
    exploreServices: "اكتشف خدماتنا",
    viewOurWork: "شاهد أعمالنا",

    // Services Section
    whatWeDo: "ما نقدمه",
    ourServices: "خدماتنا",
    servicesSubtitle:
      "حلول شاملة مصممة خصيصًا لرفع مستوى علامتك التجارية وتحقيق نتائج استثنائية في كل نقطة اتصال.",
    publicRelations: "العلاقات العامة",
    prDescription:
      "علاقات إعلامية استراتيجية، وإدارة الأزمات، ورواية قصص العلامة التجارية التي تشكل الرأي العام وتبني سمعة دائمة.",
    mediaRelations: "العلاقات الإعلامية",
    crisisCommunications: "اتصالات الأزمات",
    pressReleases: "البيانات الصحفية",
    eventManagement: "إدارة الفعاليات",
    eventDescription:
      "تنفيذ فعاليات متكاملة من المفهوم إلى الإكمال، لخلق تجارب لا تنسى تجذب وتلهم.",
    corporateEvents: "الفعاليات المؤسسية",
    conferences: "المؤتمرات",
    productLaunches: "إطلاق المنتجات",
    digitalServices: "الخدمات الرقمية",
    digitalDescription:
      "حلول رقمية متطورة تحول وجودك على الإنترنت وتدفع نموًا تجاريًا قابلًا للقياس.",
    webDevelopment: "تطوير الويب",
    digitalStrategy: "الإستراتيجية الرقمية",
    uxuiDesign: "تصميم واجهة المستخدم",
    socialMedia: "وسائل التواصل الاجتماعي",
    socialDescription:
      "إدارة إستراتيجية لوسائل التواصل الاجتماعي تبني المجتمعات، وتدفع المشاركة، وتضخم صوت علامتك التجارية.",
    contentStrategy: "إستراتيجية المحتوى",
    communityManagement: "إدارة المجتمع",
    analytics: "التحليلات",
    motorsport: "رياضة السيارات",
    motorsportDescription:
      "اتصالات رياضة ميكانيكية متخصصة وإدارة فعاليات، تقديم تجارب عالية الطاقة لعشاق السباق.",
    raceEvents: "فعاليات السباق",
    sponsorship: "الرعاية",
    brandActivation: "تفعيل العلامة التجارية",
    learnMore: "المزيد",

    // About Section
    aboutAlMarjeia: "عن المرجعية",
    twoDecadesOfExcellence: "عقدان من التميز في الاتصالات",
    aboutText1:
      "تتبوأ شركة (المرجعية) مكانة رائدة في قطاع العلاقات العامة بالمملكة العربية السعودية، حيث نمزج ببراعة بين المعايير العالمية في الاتصال وبين الفهم العميق للثقافة المحلية",
    aboutText2:
      "نحن لا نقدم خدمات علاقات عامة فحسب، بل نحن شركاء استراتيجيون وصناع قصص، نأخذ على عاتقنا بناء سرديات وطنية وعلامات تجارية ذات ثقل، مرتكزين في ذلك على المصداقية والاحترافية.",
    learnOurStory: "اعرف قصتنا",
    yearsOfExcellence: "سنوات من التميز",
    ourStory: "قصتنا",
    ourStoryText:
      "عندما أطلقنا (المرجعية)، لم يكن هدفنا أن نكون الشركة الأكبر حجمًا، بل الشركة الأكثر جدارة بالثقة. لذا، ارتكزت رحلة نمونا على فهم نبض السوق السعودي، وتبني الابتكار، والالتزام بمبادئ التواصل الأصيل. ولا يزال وعدنا لعملائنا ثابتًا: صياغة قصص مؤثرة وتحقيق نتائج مستدامة تتردد أصداؤها طويلًا.",
    visionTitle: "رؤيتنا",
    visionText:
      "أن نكون 'المرجعية' الأولى، والوكالة الأكثر تأثيرًا وموثوقية في قطاع العلاقات العامة بالمملكة والمنطقة، من خلال بناء جسور متينة بين العلامات التجارية وجمهورها عبر قصص ملهمة وحملات إبداعية.",
    missionTitle: "رسالتنا",
    missionText:
      "العمل كحليف استراتيجي لعملائنا، لتمكينهم من بناء علاقات حقيقية ومثمرة مع جمهورهم، مدعومة بحملات مصممة خصيصًا لتحدث أثرًا ملموسًا وتصنع فارقًا حقيقيًا.",

    // Portfolio Section
    ourWork: "أعمالنا",
    featuredProjects: "مشاريع مميزة",
    globalTechSummit: "قمة التكنولوجيا العالمية 2023",
    globalTechDescription:
      "مؤتمر تكنولوجيا دولي لمدة ثلاثة أيام يجمع أكثر من 2000 قائد صناعي من حول العالم.",
    alRashidBrand: "إطلاق علامة الرشيد",
    alRashidDescription:
      "حملة علاقات عامة شاملة لتوسيع علامة تجارية رئيسية للتجزئة عبر منطقة الخليج.",
    digitalTransformation: "مبادرة التحول الرقمي",
    digitalTransformationDescription:
      "تحديث رقمي كامل لمقدم خدمات مالية رائد، زاد المشاركة بنسبة 300٪.",
    championshipRacing: "سلسلة السباقات للبطولة",
    championshipRacingDescription:
      "إدارة فعاليات واتصالات متكاملة لبطولة السباق الرئيسية في المنطقة.",
    socialImpact: "حملة التأثير الاجتماعي",
    socialImpactDescription:
      "حملة اجتماعية فيروسية وصلت لأكثر من 10 مليون مستخدم للتوعية البيئية والاستدامة.",
    viewProject: "عرض المشروع",

    // Timeline Section
    ourProcess: "عمليتنا",
    successJourney: "رحلة <span class='highlight'>نجاحك</span>",
    timelineSubtitle:
      "خطوات سير عمل متكاملة لضمان نجاح مشروعك من المفهوم إلى الإكمال.",
    consultation: "استشارة",
    consultationDesc: "فهم رؤيتك ومتطلباتك",
    planning: "تخطيط",
    planningDesc: "خارطة طريق إستراتيجية ومفاهيم إبداعية",
    execution: "تنفيذ",
    executionDesc: "تنفيذ وإدارة مثالية",
    monitoring: "مراقبة",
    monitoringDesc: "تتبع وتحسين في الوقت الحقيقي",
    evaluation: "تقييم",
    evaluationDesc: "قياس النجاح والتأثير",

    // Testimonials Section
    testimonials: "آراء العملاء",
    whatOurClientsSay: "ماذا يقول عملاؤنا",
    testimonialsSubtitle:
      "موثوق به من قبل العلامات التجارية الرائدة في الشرق الأوسط وما بعده. إليك ما يقولونه عن العمل معنا.",

    testimonial1Text:
      "حولت المرجعية إطلاق علامتنا التجارية إلى ظاهرة على مستوى البلاد. نهجهم الاستراتيجي وتنفيذهم المثالي تجاوز كل التوقعات.",
    testimonial1Name: "أحمد الرشيد",
    testimonial1Position: "الرئيس التنفيذي، مجموعة الرشيد",

    testimonial2Text:
      "جعلنا فريق المرجعية القمة التقنية تجربة لا تُنسى. محترفون، مبتكرون، وملتزمون بعمق.",
    testimonial2Name: "سارة ميتشل",
    testimonial2Position: "مديرة التسويق، تك جلوبال",

    testimonial3Text:
      "من الفكرة إلى خط النهاية، قدمت المرجعية فعاليات رياضية استحوذت على قلوب عشاق السباق في جميع أنحاء المنطقة.",
    testimonial3Name: "محمد الفارسي",
    testimonial3Position: "المؤسس، ريسنج أرابيا",

    testimonial4Text:
      "أحدثت خبرتهم في التحول الرقمي ثورة في وجودنا الإلكتروني. النتائج تتحدث عن نفسها - زيادة 300٪ في المشاركة.",
    testimonial4Name: "ليلى حسن",
    testimonial4Position: "مديرة التسويق، فاينانس هاب",

    testimonial5Text:
      "حملة التواصل الاجتماعي التي أنشأوها لقضيتنا البيئية وصلت للملايين وقادت تغييراً حقيقياً. عمل مؤثر حقاً.",
    testimonial5Name: "خالد العمر",
    testimonial5Position: "المدير، المبادرة الخضراء",

    testimonial6Text:
      "في اتصالات الأزمات، أثبتت المرجعية أنها لا تقدر بثمن. إرشادهم الاستراتيجي حمى سمعتنا خلال الأوقات الصعبة.",
    testimonial6Name: "فاطمة الزهراء",
    testimonial6Position: "نائب رئيس الاتصالات، إنرجي كورب",

    // Contact Section
    letsCreate: "لنخلق شيئًا استثنائيًا",
    contactSubtitle:
      "جاهز لرفع مستوى علامتك التجارية؟ تواصل معنا ولنتناقش حول كيفية مساعدتك في تحقيق أهدافك.",
    address: "العنوان",
    addressValue:
      "مبنى السلام، الطابق 12، طريق الملك فهد، الرياض، المملكة العربية السعودية",
    phone: "الهاتف",
    email: "البريد الإلكتروني",
    workingHours: "ساعات العمل",
    workingHoursValue: "الأحد - الخميس، 9:00 ص - 6:00 م",
    fullName: "الاسم الكامل",
    emailAddress: "البريد الإلكتروني",
    phoneNumber: "رقم الهاتف",
    companyName: "اسم الشركة",
    serviceInterest: "الخدمة المطلوبة",
    selectService: "اختر خدمة",
    other: "أخرى",
    message: "الرسالة",
    messagePlaceholder: "أخبرنا عن مشروعك...",
    sendMessage: "إرسال الرسالة",
    messageSent: "تم إرسال الرسالة!",
    messageSentText: "شكرًا لتواصلك. سنعود إليك خلال 24 ساعة.",

    // Footer
    footerDescription:
      "اتصالات إستراتيجية، وفعاليات مثالية، وابتكارات رقمية تحول العلامات التجارية وتخلق تأثيرًا دائمًا.",
    stayUpdated: "ابقَ على اطلاع",
    subscribeNewsletter: "اشترك في نشرتنا الإخبارية للحصول على رؤى وتحديثات.",
    yourEmail: "بريدك الإلكتروني",
    company: "روابط مهمة",
    ourTeam: "فريقنا",
    careers: "الوظائف",
    resources: "المصادر",
    blog: "المدونة",
    caseStudies: "دراسات الحالة",
    pressKit: "الحزمة الصحفية",
    faqs: "الأسئلة الشائعة",
    allRightsReserved: "جميع الحقوق محفوظة.",

    // Validation
    requiredField: "هذا الحقل مطلوب",
    sending: "جاري الإرسال...",
    thankYouSubscribe: "شكراً على الاشتراك!",
  },

  en: {}, // Will be populated from HTML
};

// ========================================
// STATE MANAGEMENT
// ========================================
const STATE = {
  currentLanguage: CONFIG.defaultLanguage,
  isMobileMenuOpen: false,
  currentSlide: 0,
  isInitialized: false,
  carouselInitialized: false,
  autoPlayTimer: null,
  isAutoPlaying: true,
};

// ========================================
// CACHE DOM ELEMENTS
// ========================================
const DOM = {
  // Header & Navigation
  header: null,
  menuToggle: null,
  mobileMenu: null,
  navLinks: null,
  mobileNavLinks: null,

  // Language Switcher
  desktopLangSwitcher: null,
  mobileLangSwitcher: null,

  // Hero
  heroBg: null,

  // Portfolio Carousel
  carouselTrack: null,
  portfolioSlides: null,
  carouselDots: null,
  carouselThumbs: null,
  prevBtn: null,
  nextBtn: null,
  carouselContainer: null,

  // Forms
  contactForm: null,
  formSuccess: null,
  newsletterForm: null,
  newsletterSuccess: null,

  // Other
  counters: null,
  serviceCards: null,
  testimonialCards: null,
  revealElements: null,
  timelineSection: null,
  timelinePath: null,
  timelinePoints: null,
};

// ========================================
// INITIALIZATION
// ========================================
function initWebsite() {
  if (STATE.isInitialized) return;

  console.log("🚀 InitializingAl-Marjeia Website...");

  // Cache DOM elements
  cacheDOMElements();

  // Initialize language system
  initLanguageSystem();

  // Initialize all components
  initAllComponents();

  // Add global styles
  addGlobalStyles();

  STATE.isInitialized = true;
  console.log("✅ Website initialized successfully!");

  // Debug info
  console.log(`🌐 Current language: ${STATE.currentLanguage}`);
  console.log(
    `🎠 Carousel slides: ${DOM.portfolioSlides ? DOM.portfolioSlides.length : 0}`,
  );
}

function cacheDOMElements() {
  DOM.header = document.getElementById("header");
  DOM.menuToggle = document.getElementById("menuToggle");
  DOM.mobileMenu = document.getElementById("mobileMenu");
  DOM.navLinks = document.querySelectorAll(".nav-link");
  DOM.mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

  DOM.desktopLangSwitcher = document.querySelector(
    ".language-switcher.desktop",
  );
  DOM.mobileLangSwitcher = document.querySelector(".language-switcher.mobile");

  DOM.heroBg = document.querySelector(".hero-bg img");

  DOM.carouselTrack = document.querySelector(".carousel-track");
  DOM.portfolioSlides = document.querySelectorAll(".portfolio-slide");
  DOM.carouselDots = document.querySelectorAll(".carousel-dots .dot");
  DOM.carouselThumbs = document.querySelectorAll(
    ".portfolio-thumbnails .thumb",
  );
  DOM.prevBtn = document.querySelector(".portfolio-nav .prev");
  DOM.nextBtn = document.querySelector(".portfolio-nav .next");
  DOM.carouselContainer = document.querySelector(".portfolio-carousel");

  DOM.contactForm = document.getElementById("contactForm");
  DOM.formSuccess = document.getElementById("formSuccess");
  DOM.newsletterForm = document.getElementById("newsletterForm");
  DOM.newsletterSuccess = document.getElementById("newsletterSuccess");

  DOM.counters = document.querySelectorAll("[data-target]");
  DOM.serviceCards = document.querySelectorAll(".service-card");
  DOM.testimonialCards = document.querySelectorAll(".testimonial-card");
  DOM.revealElements = document.querySelectorAll(
    ".service-card, .testimonial-card, .about-image, .about-content, .section-header, .story-box, .vm-item",
  );
  DOM.timelineSection = document.getElementById("timeline");
  DOM.timelinePath = document.getElementById("timeline-path");
  DOM.timelinePoints = document.querySelectorAll(".timeline-point");
}

// ========================================
// LANGUAGE SYSTEM
// ========================================
function initLanguageSystem() {
  // Detect language
  detectLanguage();

  // Apply language settings
  applyLanguageSettings();

  // Extract English texts from HTML
  extractEnglishTexts();

  // Setup language switcher UI
  setupLanguageSwitcherUI();

  // Apply translations
  applyTranslations();
}

function detectLanguage() {
  // Check localStorage first
  const savedLang = localStorage.getItem("al-marjaiya-lang");
  if (savedLang && CONFIG.supportedLanguages.includes(savedLang)) {
    STATE.currentLanguage = savedLang;
    console.log(`📚 Language from storage: ${savedLang}`);
    return;
  }

  // Detect browser language
  const browserLang = (
    navigator.language ||
    navigator.userLanguage ||
    ""
  ).slice(0, 2);
  if (browserLang === "ar") {
    STATE.currentLanguage = "ar";
    console.log(`🌍 Browser language detected: Arabic`);
  } else {
    STATE.currentLanguage = CONFIG.defaultLanguage;
    console.log(`🌍 Browser language detected: English (default)`);
  }
}

function applyLanguageSettings() {
  // Update HTML attributes
  document.documentElement.dir = STATE.currentLanguage === "ar" ? "rtl" : "ltr";
  document.documentElement.lang = STATE.currentLanguage;

  // Update body classes
  document.body.classList.remove("rtl", "ltr", "en", "ar");
  document.body.classList.add(STATE.currentLanguage === "ar" ? "rtl" : "ltr");
  document.body.classList.add(STATE.currentLanguage);

  // Adjust layout for RTL
  if (STATE.currentLanguage === "ar") {
    adjustForRTL();
  } else {
    resetToLTR();
  }
}

function adjustForRTL() {
  // Rotate arrow icons
  document.querySelectorAll(".icon-arrow").forEach((icon) => {
    icon.style.transform = "rotate(180deg)";
  });

  // Adjust portfolio navigation arrows
  if (DOM.prevBtn) DOM.prevBtn.style.transform = "rotate(180deg)";
  if (DOM.nextBtn) DOM.nextBtn.style.transform = "rotate(180deg)";

  console.log("🔄 RTL layout applied");
}

function resetToLTR() {
  // Reset arrow icons
  document.querySelectorAll(".icon-arrow").forEach((icon) => {
    icon.style.transform = "";
  });

  // Reset portfolio navigation
  if (DOM.prevBtn) DOM.prevBtn.style.transform = "";
  if (DOM.nextBtn) DOM.nextBtn.style.transform = "";

  console.log("🔄 LTR layout applied");
}

function extractEnglishTexts() {
  // Extract English text from elements with data-i18n
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (!TRANSLATIONS.en[key]) {
      if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
        TRANSLATIONS.en[key] = element.placeholder || "";
      } else if (element.tagName === "OPTION") {
        TRANSLATIONS.en[key] = element.textContent || "";
      } else {
        // Preserve HTML if present
        TRANSLATIONS.en[key] = element.innerHTML || element.textContent || "";
      }
    }
  });

  // Extract from placeholder attributes
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.getAttribute("data-i18n-placeholder");
    if (!TRANSLATIONS.en[key]) {
      TRANSLATIONS.en[key] = element.placeholder || "";
    }
  });
}

function setupLanguageSwitcherUI() {
  // Create language switcher if not exists
  if (!DOM.desktopLangSwitcher) {
    createLanguageSwitcher();
  }

  // Update active language buttons
  updateActiveLanguageButtons();

  // Setup event listeners
  setupLanguageSwitcherEvents();
}

function createLanguageSwitcher() {
  // Desktop switcher
  const desktopSwitcher = document.createElement("div");
  desktopSwitcher.className = "language-switcher desktop";
  desktopSwitcher.innerHTML = `
    <div class="language-dropdown">
      <button class="current-lang" aria-label="Current language">
        <span class="lang-flag">${STATE.currentLanguage === "ar" ? "🇸🇦" : "🇺🇸"}</span>
        <span class="lang-text">${STATE.currentLanguage === "ar" ? "العربية" : "English"}</span>
      </button>
      <div class="dropdown-menu">
        <button data-lang="en" class="${STATE.currentLanguage === "en" ? "active" : ""}">
          <span class="lang-flag">🇺🇸</span>
          <span class="lang-text">English</span>
        </button>
        <button data-lang="ar" class="${STATE.currentLanguage === "ar" ? "active" : ""}">
          <span class="lang-flag">🇸🇦</span>
          <span class="lang-text">العربية</span>
        </button>
      </div>
    </div>
  `;

  // Insert into header
  const headerInner = document.querySelector(".header-inner");
  if (headerInner) {
    const btnHeader = headerInner.querySelector(".btn-header");
    if (btnHeader) {
      headerInner.insertBefore(desktopSwitcher, btnHeader);
    } else {
      headerInner.appendChild(desktopSwitcher);
    }
  }

  // Mobile switcher
  const mobileSwitcher = document.createElement("div");
  mobileSwitcher.className = "language-switcher mobile";
  mobileSwitcher.innerHTML = `
    <div class="language-buttons">
      <button data-lang="en" class="${STATE.currentLanguage === "en" ? "active" : ""}">
        <span class="lang-flag">🇺🇸</span>
        <span class="lang-text">English</span>
      </button>
      <button data-lang="ar" class="${STATE.currentLanguage === "ar" ? "active" : ""}">
        <span class="lang-flag">🇸🇦</span>
        <span class="lang-text">العربية</span>
      </button>
    </div>
  `;

  // Insert into mobile menu
  const mobileNav = document.querySelector(".mobile-nav");
  if (mobileNav) {
    const btnMobile = mobileNav.querySelector(".btn-mobile");
    if (btnMobile) {
      mobileNav.insertBefore(mobileSwitcher, btnMobile);
    } else {
      mobileNav.appendChild(mobileSwitcher);
    }
  }

  // Update DOM cache
  DOM.desktopLangSwitcher = desktopSwitcher;
  DOM.mobileLangSwitcher = mobileSwitcher;
}

function setupLanguageSwitcherEvents() {
  console.log("🔧 Setting up language switcher events...");

  // Desktop dropdown - Get fresh elements from DOM
  const desktopSwitcher = document.querySelector(".language-switcher.desktop");

  if (desktopSwitcher) {
    console.log("✅ Desktop switcher found");
    const desktopCurrentLang = desktopSwitcher.querySelector(".current-lang");
    const desktopLangDropdown =
      desktopSwitcher.querySelector(".language-dropdown");
    const desktopDropdownMenu = desktopSwitcher.querySelector(".dropdown-menu");

    if (desktopCurrentLang && desktopLangDropdown) {
      console.log("✅ Desktop elements found, adding listeners");

      // Toggle dropdown on click - add 'open' class to language-dropdown (not dropdown-menu)
      desktopCurrentLang.addEventListener("click", function (e) {
        e.stopPropagation();
        e.preventDefault();
        desktopLangDropdown.classList.toggle("open");
        console.log(
          "🌐 Desktop language toggle clicked, dropdown open:",
          desktopLangDropdown.classList.contains("open"),
        );
      });

      // Handle language selection for desktop
      if (desktopDropdownMenu) {
        desktopDropdownMenu
          .querySelectorAll("[data-lang]")
          .forEach((button) => {
            button.addEventListener("click", function (e) {
              e.preventDefault();
              e.stopPropagation();
              const lang = this.getAttribute("data-lang");
              console.log(`🌐 Desktop language selected: ${lang}`);
              switchLanguage(lang);
              desktopLangDropdown.classList.remove("open");
            });
          });
      }
    } else {
      console.log("❌ Desktop elements NOT found");
    }
  } else {
    console.log("❌ Desktop switcher NOT found");
  }

  // Mobile language buttons
  const mobileLangButtons = document.querySelectorAll(
    ".language-switcher.mobile [data-lang]",
  );
  console.log(`📱 Found ${mobileLangButtons.length} mobile language buttons`);

  mobileLangButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      const lang = this.getAttribute("data-lang");
      console.log(`🌐 Mobile language selected: ${lang}`);
      switchLanguage(lang);

      // Close mobile menu
      if (STATE.isMobileMenuOpen) {
        closeMobileMenu();
      }
    });
  });

  // Global click to close dropdown
  document.addEventListener("click", function (e) {
    const desktopLangDropdown = document.querySelector(
      ".language-switcher.desktop .language-dropdown",
    );
    const desktopCurrentLang = document.querySelector(
      ".language-switcher.desktop .current-lang",
    );
    if (desktopLangDropdown && desktopCurrentLang) {
      if (
        !desktopCurrentLang.contains(e.target) &&
        !desktopLangDropdown.contains(e.target)
      ) {
        desktopLangDropdown.classList.remove("open");
      }
    }
  });
}

function updateActiveLanguageButtons() {
  const allLangButtons = document.querySelectorAll(
    ".language-switcher [data-lang]",
  );

  allLangButtons.forEach((button) => {
    const lang = button.getAttribute("data-lang");

    if (lang === STATE.currentLanguage) {
      button.classList.add("active");

      // Update current language display in desktop
      const parent = button.closest(".language-switcher.desktop");
      if (parent) {
        const currentLangDisplay = parent.querySelector(
          ".current-lang .lang-text",
        );
        const currentLangFlag = parent.querySelector(
          ".current-lang .lang-flag",
        );

        if (currentLangDisplay) {
          currentLangDisplay.textContent =
            button.querySelector(".lang-text").textContent;
        }
        if (currentLangFlag) {
          currentLangFlag.textContent =
            button.querySelector(".lang-flag").textContent;
        }
      }
    } else {
      button.classList.remove("active");
    }
  });
}

function applyTranslations() {
  const lang = STATE.currentLanguage;
  const translationSet = TRANSLATIONS[lang];

  if (!translationSet) {
    console.warn(`No translations found for language: ${lang}`);
    return;
  }

  // Update elements with data-i18n
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (translationSet[key] !== undefined) {
      if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
        element.placeholder = translationSet[key];
      } else if (element.tagName === "OPTION") {
        element.textContent = translationSet[key];
      } else {
        // Check if translation contains HTML
        const translation = translationSet[key];
        if (translation.includes("<") && translation.includes(">")) {
          element.innerHTML = translation;
        } else {
          element.textContent = translation;
        }
      }
    }
  });

  // Update placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.getAttribute("data-i18n-placeholder");
    if (translationSet[key] !== undefined) {
      element.placeholder = translationSet[key];
    }
  });

  // Update select options
  document.querySelectorAll("option[data-i18n]").forEach((option) => {
    const key = option.getAttribute("data-i18n");
    if (translationSet[key] !== undefined) {
      option.textContent = translationSet[key];
    }
  });

  console.log(`🌐 Translations applied: ${lang}`);
}

function switchLanguage(lang) {
  if (
    lang === STATE.currentLanguage ||
    !CONFIG.supportedLanguages.includes(lang)
  )
    return;

  console.log(`🔄 Switching language to: ${lang}`);

  // Save carousel state before switching
  const savedSlide = STATE.currentSlide;
  const wasAutoPlaying = STATE.isAutoPlaying;

  // Stop carousel autoplay during language switch
  stopCarouselAutoPlay();

  // Update state
  STATE.currentLanguage = lang;
  localStorage.setItem("al-marjaiya-lang", lang);

  // Apply language settings
  applyLanguageSettings();

  // Update UI
  updateActiveLanguageButtons();

  // Apply translations
  applyTranslations();

  // Restart animations after a short delay
  setTimeout(() => {
    restartAnimations();

    // Reinitialize carousel for RTL/LTR switch
    if (DOM.carouselTrack && DOM.portfolioSlides.length > 0) {
      console.log("🎠 Reinitializing carousel after language switch...");

      // Reset carousel to first slide
      STATE.currentSlide = 0;
      DOM.carouselTrack.style.transform = "translateX(0%)";

      // Update UI
      if (DOM.carouselDots.length > 0) {
        DOM.carouselDots.forEach((dot, i) => {
          dot.classList.toggle("active", i === 0);
        });
      }

      if (DOM.carouselThumbs.length > 0) {
        DOM.carouselThumbs.forEach((thumb, i) => {
          thumb.classList.toggle("active", i === 0);
        });
      }

      // Restart autoplay if it was playing
      if (wasAutoPlaying) {
        setTimeout(() => {
          startCarouselAutoPlay();
        }, 1000);
      }
    }
  }, 100);
}

// ========================================
// PORTFOLIO CAROUSEL - FIXED VERSION
// ========================================
function initPortfolioCarousel() {
  if (!DOM.carouselTrack || DOM.portfolioSlides.length === 0) {
    console.log("⚠️ Carousel elements not found");
    return;
  }

  console.log(
    `🎠 Initializing portfolio carousel with ${DOM.portfolioSlides.length} slides...`,
  );

  // Initialize to first slide
  STATE.currentSlide = 0;
  DOM.carouselTrack.style.transform = "translateX(0%)";

  // Clear any existing timer
  if (STATE.autoPlayTimer) {
    clearInterval(STATE.autoPlayTimer);
    STATE.autoPlayTimer = null;
  }

  // Carousel functions
  function goToSlide(index) {
    if (index < 0) index = DOM.portfolioSlides.length - 1;
    if (index >= DOM.portfolioSlides.length) index = 0;

    STATE.currentSlide = index;

    // Always use negative translateX because carousel-track has direction: ltr in both LTR and RTL
    const translateValue = `-${STATE.currentSlide * 100}%`;

    DOM.carouselTrack.style.transform = `translateX(${translateValue})`;

    updateCarouselUI();

    console.log(
      `📌 Carousel: Slide ${STATE.currentSlide + 1}/${DOM.portfolioSlides.length}`,
    );
  }

  function nextSlide() {
    goToSlide(STATE.currentSlide + 1);
  }

  function prevSlide() {
    goToSlide(STATE.currentSlide - 1);
  }

  // Expose updateCarouselUI globally
  window.updateCarouselUI = function () {
    // Update dots
    if (DOM.carouselDots.length > 0) {
      DOM.carouselDots.forEach((dot, i) => {
        dot.classList.toggle("active", i === STATE.currentSlide);
      });
    }

    // Update thumbs
    if (DOM.carouselThumbs.length > 0) {
      DOM.carouselThumbs.forEach((thumb, i) => {
        thumb.classList.toggle("active", i === STATE.currentSlide);
      });
    }
  };

  // Local reference for internal use
  const updateCarouselUI = window.updateCarouselUI;

  function startCarouselAutoPlay() {
    // Don't start if already running or only one slide
    if (STATE.autoPlayTimer || DOM.portfolioSlides.length <= 1) return;

    STATE.autoPlayTimer = setInterval(() => {
      nextSlide();
    }, CONFIG.autoPlayDelay);

    STATE.isAutoPlaying = true;
    console.log("▶️ Carousel autoplay STARTED");
  }

  function stopCarouselAutoPlay() {
    if (STATE.autoPlayTimer) {
      clearInterval(STATE.autoPlayTimer);
      STATE.autoPlayTimer = null;
      STATE.isAutoPlaying = false;
      console.log("⏸️ Carousel autoplay STOPPED");
    }
  }

  function pauseAndResumeCarousel() {
    stopCarouselAutoPlay();
    setTimeout(() => {
      if (DOM.portfolioSlides.length > 1) {
        startCarouselAutoPlay();
      }
    }, 10000); // Resume after 10 seconds
  }

  // Add event listeners (only once)
  if (DOM.prevBtn && !DOM.prevBtn.dataset.listenerAdded) {
    DOM.prevBtn.addEventListener("click", (e) => {
      e.preventDefault();
      prevSlide();
      pauseAndResumeCarousel();
    });
    DOM.prevBtn.dataset.listenerAdded = "true";
  }

  if (DOM.nextBtn && !DOM.nextBtn.dataset.listenerAdded) {
    DOM.nextBtn.addEventListener("click", (e) => {
      e.preventDefault();
      nextSlide();
      pauseAndResumeCarousel();
    });
    DOM.nextBtn.dataset.listenerAdded = "true";
  }

  // Dots navigation
  if (DOM.carouselDots.length > 0) {
    DOM.carouselDots.forEach((dot, index) => {
      if (!dot.dataset.listenerAdded) {
        dot.addEventListener("click", (e) => {
          e.preventDefault();
          goToSlide(index);
          pauseAndResumeCarousel();
        });
        dot.dataset.listenerAdded = "true";
      }
    });
  }

  // Thumbnails navigation
  if (DOM.carouselThumbs.length > 0) {
    DOM.carouselThumbs.forEach((thumb, index) => {
      if (!thumb.dataset.listenerAdded) {
        thumb.addEventListener("click", (e) => {
          e.preventDefault();
          goToSlide(index);
          pauseAndResumeCarousel();
        });
        thumb.dataset.listenerAdded = "true";
      }
    });
  }

  // Pause on hover
  if (
    DOM.carouselContainer &&
    !DOM.carouselContainer.dataset.hoverListenerAdded
  ) {
    DOM.carouselContainer.addEventListener("mouseenter", () => {
      stopCarouselAutoPlay();
    });

    DOM.carouselContainer.addEventListener("mouseleave", () => {
      if (DOM.portfolioSlides.length > 1 && STATE.isAutoPlaying) {
        startCarouselAutoPlay();
      }
    });

    DOM.carouselContainer.dataset.hoverListenerAdded = "true";
  }

  // Touch/swipe support for mobile
  let touchStartX = 0;
  let touchEndX = 0;

  if (
    DOM.carouselContainer &&
    !DOM.carouselContainer.dataset.touchListenerAdded
  ) {
    DOM.carouselContainer.addEventListener(
      "touchstart",
      (e) => {
        touchStartX = e.changedTouches[0].screenX;
      },
      { passive: true },
    );

    DOM.carouselContainer.addEventListener(
      "touchend",
      (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
      },
      { passive: true },
    );

    DOM.carouselContainer.dataset.touchListenerAdded = "true";
  }

  function handleSwipe() {
    const swipeThreshold = 50;
    const difference = touchStartX - touchEndX;

    if (Math.abs(difference) > swipeThreshold) {
      if (difference > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
      pauseAndResumeCarousel();
    }
  }

  // Initialize UI
  updateCarouselUI();

  // Start autoplay after a delay
  setTimeout(() => {
    startCarouselAutoPlay();
  }, 2000);

  STATE.carouselInitialized = true;
  console.log("✅ Carousel initialized successfully");
}

// ========================================
// CORE COMPONENTS
// ========================================
function initAllComponents() {
  console.log("🔧 Initializing all components...");

  initHeaderScroll();
  initMobileMenu();
  initSmoothScroll();
  initCounters();
  initPortfolioCarousel(); // ✅ Carousel works in both languages
  initScrollReveal();
  initForms();
  initTimeline();
  initHoverEffects();
  updateFooterYear();
  initParallax();
  initActiveNavigation();
  initButtonRipple();
  initPerformance();
}

// ========================================
// HEADER & NAVIGATION
// ========================================
function initHeaderScroll() {
  if (!DOM.header) return;

  function handleScroll() {
    if (window.scrollY > 50) {
      DOM.header.classList.add("scrolled");
    } else {
      DOM.header.classList.remove("scrolled");
    }
  }

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll(); // Initial check
}

function initMobileMenu() {
  if (!DOM.menuToggle || !DOM.mobileMenu) return;

  DOM.menuToggle.addEventListener("click", function () {
    STATE.isMobileMenuOpen = !STATE.isMobileMenuOpen;
    this.classList.toggle("active");
    DOM.mobileMenu.classList.toggle("active");
    document.body.style.overflow = STATE.isMobileMenuOpen ? "hidden" : "";
  });

  // Close menu when clicking links
  DOM.mobileNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      closeMobileMenu();
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (
      STATE.isMobileMenuOpen &&
      !DOM.mobileMenu.contains(e.target) &&
      !DOM.menuToggle.contains(e.target)
    ) {
      closeMobileMenu();
    }
  });

  // Close on escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && STATE.isMobileMenuOpen) {
      closeMobileMenu();
    }
  });
}

function closeMobileMenu() {
  if (!DOM.menuToggle || !DOM.mobileMenu) return;

  STATE.isMobileMenuOpen = false;
  DOM.menuToggle.classList.remove("active");
  DOM.mobileMenu.classList.remove("active");
  document.body.style.overflow = "";
}

// ========================================
// SMOOTH SCROLL
// ========================================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href === "#" || href === "#!") return;

      e.preventDefault();
      const target = document.querySelector(href);

      if (target) {
        const headerHeight = DOM.header ? DOM.header.offsetHeight : 0;
        const targetPosition =
          target.getBoundingClientRect().top +
          window.pageYOffset -
          headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });

        // Close mobile menu if open
        if (STATE.isMobileMenuOpen) {
          closeMobileMenu();
        }
      }
    });
  });
}

// ========================================
// COUNTER ANIMATIONS
// ========================================
function initCounters() {
  if (DOM.counters.length === 0) return;

  function animateCounter(counter) {
    const target = parseInt(counter.getAttribute("data-target"));
    const suffix = counter.getAttribute("data-suffix") || "";
    const duration = CONFIG.counterDuration;
    const startTime = performance.now();

    function updateCounter(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(easeOut * target);

      counter.textContent = current + suffix;

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    }

    requestAnimationFrame(updateCounter);
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (
          entry.isIntersecting &&
          !entry.target.classList.contains("counted")
        ) {
          entry.target.classList.add("counted");
          animateCounter(entry.target);
        }
      });
    },
    { threshold: 0.5 },
  );

  DOM.counters.forEach((counter) => observer.observe(counter));
}

// ========================================
// SCROLL REVEAL ANIMATIONS
// ========================================
function initScrollReveal() {
  if (DOM.revealElements.length === 0) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    },
  );

  DOM.revealElements.forEach((el, index) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s`;
    observer.observe(el);
  });
}

// ========================================
// FORMS
// ========================================
function initForms() {
  // Contact form
  if (DOM.contactForm) {
    DOM.contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const submitBtn = this.querySelector(".btn-submit");
      if (submitBtn) submitBtn.classList.add("loading");

      // Simulate form submission
      setTimeout(() => {
        if (submitBtn) submitBtn.classList.remove("loading");
        this.style.display = "none";
        if (DOM.formSuccess) DOM.formSuccess.classList.add("active");

        // Reset after 5 seconds
        setTimeout(() => {
          this.reset();
          this.style.display = "flex";
          if (DOM.formSuccess) DOM.formSuccess.classList.remove("active");
        }, 5000);
      }, 1500);
    });
  }

  // Newsletter form
  if (DOM.newsletterForm) {
    DOM.newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const input = this.querySelector("input");
      if (input && input.value.trim()) {
        if (DOM.newsletterSuccess)
          DOM.newsletterSuccess.classList.add("active");
        input.value = "";

        setTimeout(() => {
          if (DOM.newsletterSuccess)
            DOM.newsletterSuccess.classList.remove("active");
        }, 5000);
      }
    });
  }
}

// ========================================
// TIMELINE ANIMATION
// ========================================
function initTimeline() {
  if (!DOM.timelineSection) return;

  console.log("⏳ Initializing timeline...");

  // Reset points
  if (DOM.timelinePoints.length > 0) {
    DOM.timelinePoints.forEach((point) => {
      point.style.opacity = "0";
      point.style.transform =
        window.innerWidth <= 768 ? "translateX(-40px)" : "translateY(40px)";
      point.classList.remove("revealed");
    });
  }

  // Use GSAP if available
  if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);

    // Animate path
    if (DOM.timelinePath) {
      const pathLength = DOM.timelinePath.getTotalLength();
      DOM.timelinePath.style.strokeDasharray = pathLength;
      DOM.timelinePath.style.strokeDashoffset = pathLength;

      gsap.to(DOM.timelinePath, {
        strokeDashoffset: 0,
        duration: 2,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: DOM.timelineSection,
          start: "top 70%",
          once: true,
        },
      });
    }

    // Animate points
    if (DOM.timelinePoints.length > 0) {
      DOM.timelinePoints.forEach((point) => {
        const delay = parseFloat(point.getAttribute("data-delay")) || 0;

        gsap.to(point, {
          scrollTrigger: {
            trigger: DOM.timelineSection,
            start: "top 70%",
            once: true,
          },
          opacity: 1,
          y: 0,
          x: 0,
          duration: 0.8,
          delay: delay,
          ease: "back.out(1.7)",
          onComplete: () => {
            point.classList.add("revealed");
          },
        });
      });
    }
  } else {
    // Fallback using IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate path with CSS class
            if (DOM.timelinePath) {
              DOM.timelinePath.classList.add("animated");
            }

            // Animate points with delay
            if (DOM.timelinePoints.length > 0) {
              DOM.timelinePoints.forEach((point, index) => {
                const delay = parseFloat(point.getAttribute("data-delay")) || 0;
                setTimeout(() => {
                  point.classList.add("revealed");
                  point.style.opacity = "1";
                  point.style.transform =
                    window.innerWidth <= 768
                      ? "translateX(0)"
                      : "translateY(0)";
                }, delay * 1000);
              });
            }

            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    observer.observe(DOM.timelineSection);
  }
}

// ========================================
// HOVER EFFECTS
// ========================================
function initHoverEffects() {
  // Service cards
  if (DOM.serviceCards.length > 0) {
    DOM.serviceCards.forEach((card) => {
      card.addEventListener("mouseenter", function () {
        this.style.transform = "translateY(-10px)";
      });

      card.addEventListener("mouseleave", function () {
        this.style.transform = "translateY(0)";
      });
    });
  }

  // Testimonial cards
  if (DOM.testimonialCards.length > 0) {
    DOM.testimonialCards.forEach((card, index) => {
      const rotations = [-2, 2, -1, 1, -2, 2];
      const rotation = rotations[index % rotations.length];

      card.style.transform = `rotate(${rotation}deg)`;

      card.addEventListener("mouseenter", function () {
        this.style.transform = "rotate(0) translateY(-8px)";
      });

      card.addEventListener("mouseleave", function () {
        this.style.transform = `rotate(${rotation}deg)`;
      });
    });
  }
}

// ========================================
// FOOTER YEAR
// ========================================
function updateFooterYear() {
  const yearElement = document.getElementById("year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

// ========================================
// PARALLAX EFFECT
// ========================================
function initParallax() {
  if (
    !DOM.heroBg ||
    !CONFIG.enableParallax ||
    window.matchMedia("(pointer: coarse)").matches
  )
    return;

  window.addEventListener(
    "scroll",
    () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * 0.3;
      DOM.heroBg.style.transform = `translateY(${rate}px) scale(1.1)`;
    },
    { passive: true },
  );
}

// ========================================
// ACTIVE NAVIGATION
// ========================================
function initActiveNavigation() {
  if (DOM.navLinks.length === 0) return;

  const sections = document.querySelectorAll("section[id]");

  function highlightNavLink() {
    const scrollPos =
      window.scrollY +
      (DOM.header ? DOM.header.offsetHeight : 0) +
      CONFIG.scrollOffset;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");

      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        DOM.navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", highlightNavLink, { passive: true });
  highlightNavLink(); // Initial check
}

// ========================================
// BUTTON RIPPLE EFFECT
// ========================================
function initButtonRipple() {
  const buttons = document.querySelectorAll(".btn-primary, .btn-submit");

  buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const ripple = document.createElement("span");
      ripple.style.cssText = `
        position: absolute;
        background: rgba(255,255,255,0.3);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
        left: ${x}px;
        top: ${y}px;
        width: 100px;
        height: 100px;
        margin-left: -50px;
        margin-top: -50px;
      `;

      this.style.position = "relative";
      this.style.overflow = "hidden";
      this.appendChild(ripple);

      setTimeout(() => ripple.remove(), 600);
    });
  });
}

// ========================================
// PERFORMANCE OPTIMIZATIONS
// ========================================
function initPerformance() {
  // Lazy load images
  const lazyImages = document.querySelectorAll("img[data-src]");
  if (lazyImages.length > 0) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute("data-src");
          observer.unobserve(img);
        }
      });
    });

    lazyImages.forEach((img) => imageObserver.observe(img));
  }

  // Debounce resize events
  let resizeTimeout;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      // Reinitialize responsive components
      initTimeline();
    }, 250);
  });
}

// ========================================
// ANIMATION RESTART
// ========================================
function restartAnimations() {
  console.log("🔄 Restarting animations...");

  // Restart counters
  if (DOM.counters.length > 0) {
    DOM.counters.forEach((counter) => {
      if (counter.classList.contains("counted")) {
        counter.classList.remove("counted");
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (
                entry.isIntersecting &&
                !entry.target.classList.contains("counted")
              ) {
                entry.target.classList.add("counted");
                animateCounter(entry.target);
              }
            });
          },
          { threshold: 0.5 },
        );
        observer.observe(counter);
      }
    });
  }

  // Restart timeline
  if (DOM.timelineSection) {
    setTimeout(() => {
      initTimeline();
    }, 300);
  }

  // Restart scroll reveal
  if (DOM.revealElements.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    DOM.revealElements.forEach((el) => {
      el.classList.remove("revealed");
      el.style.opacity = "0";
      el.style.transform = "translateY(40px)";
      observer.observe(el);
    });
  }

  // Restart carousel autoplay if it should be running
  if (
    STATE.carouselInitialized &&
    DOM.portfolioSlides.length > 1 &&
    STATE.isAutoPlaying
  ) {
    setTimeout(() => {
      startCarouselAutoPlay();
    }, 1500);
  }
}

// ========================================
// GLOBAL STYLES
// ========================================
function addGlobalStyles() {
  // Add ripple animation styles
  if (!document.getElementById("ripple-styles")) {
    const style = document.createElement("style");
    style.id = "ripple-styles";
    style.textContent = `
      @keyframes ripple {
        to {
          transform: scale(4);
          opacity: 0;
        }
      }
      
      /* Reduced motion preferences */
      @media (prefers-reduced-motion: reduce) {
        *,
        *::before,
        *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      }
    `;
    document.head.appendChild(style);
  }
}

// ========================================
// EVENT LISTENERS
// ========================================
document.addEventListener("DOMContentLoaded", function () {
  console.log("📄 DOM Content Loaded");
  initWebsite();
});

window.addEventListener("load", function () {
  console.log("📦 Window Fully Loaded");

  // Reinitialize components that depend on loaded resources
  if (DOM.timelineSection) {
    setTimeout(() => {
      initTimeline();
    }, 500);
  }
});

// ========================================
// PUBLIC API & DEBUG FUNCTIONS
// ========================================
window.AlMarjeia = {
  // Language control
  switchLanguage,
  getCurrentLanguage: () => STATE.currentLanguage,
  getSupportedLanguages: () => CONFIG.supportedLanguages,

  // Carousel control
  nextSlide: () => {
    if (DOM.carouselTrack) {
      const nextIndex =
        STATE.currentSlide + 1 >= DOM.portfolioSlides.length
          ? 0
          : STATE.currentSlide + 1;
      goToSlide(nextIndex);
    }
  },
  prevSlide: () => {
    if (DOM.carouselTrack) {
      const prevIndex =
        STATE.currentSlide - 1 < 0
          ? DOM.portfolioSlides.length - 1
          : STATE.currentSlide - 1;
      goToSlide(prevIndex);
    }
  },
  goToSlide: (index) => {
    if (DOM.carouselTrack && index >= 0 && index < DOM.portfolioSlides.length) {
      goToSlide(index);
    }
  },
  startCarouselAutoPlay,
  stopCarouselAutoPlay,

  // Animation control
  restartAnimations,

  // Debug
  getState: () => ({ ...STATE }),
  debugInfo: () => {
    console.log("🔍 Debug Information:");
    console.log("- Language:", STATE.currentLanguage);
    console.log("- Carousel Slide:", STATE.currentSlide + 1);
    console.log(
      "- Total Slides:",
      DOM.portfolioSlides ? DOM.portfolioSlides.length : 0,
    );
    console.log("- Autoplay Running:", STATE.autoPlayTimer !== null);
    console.log("- Mobile Menu Open:", STATE.isMobileMenuOpen);
    console.log("- Site Initialized:", STATE.isInitialized);
  },
};

// Helper functions for carousel (needed for public API)
function goToSlide(index) {
  if (!DOM.carouselTrack || !DOM.portfolioSlides.length) return;

  if (index < 0) index = DOM.portfolioSlides.length - 1;
  if (index >= DOM.portfolioSlides.length) index = 0;

  STATE.currentSlide = index;

  // Always use negative translateX because carousel-track has direction: ltr in both LTR and RTL
  const translateValue = `-${STATE.currentSlide * 100}%`;

  DOM.carouselTrack.style.transform = `translateX(${translateValue})`;
  console.log(
    `🎠 Slide ${index + 1}/${DOM.portfolioSlides.length}, translate: ${translateValue}`,
  );

  // Update UI
  if (DOM.carouselDots.length > 0) {
    DOM.carouselDots.forEach((dot, i) => {
      dot.classList.toggle("active", i === STATE.currentSlide);
    });
  }

  if (DOM.carouselThumbs.length > 0) {
    DOM.carouselThumbs.forEach((thumb, i) => {
      thumb.classList.toggle("active", i === STATE.currentSlide);
    });
  }
}

// Auto-start carousel autoplay helper
function startCarouselAutoPlay() {
  if (
    STATE.autoPlayTimer ||
    !DOM.portfolioSlides ||
    DOM.portfolioSlides.length <= 1
  )
    return;

  STATE.autoPlayTimer = setInterval(() => {
    const nextIndex =
      STATE.currentSlide + 1 >= DOM.portfolioSlides.length
        ? 0
        : STATE.currentSlide + 1;
    goToSlide(nextIndex);
  }, CONFIG.autoPlayDelay);

  STATE.isAutoPlaying = true;
}

function stopCarouselAutoPlay() {
  if (STATE.autoPlayTimer) {
    clearInterval(STATE.autoPlayTimer);
    STATE.autoPlayTimer = null;
    STATE.isAutoPlaying = false;
  }
}

console.log("✅ Al-Marjeia JavaScript loaded successfully!");
