/**
 * HerbNutri - Herbal and Nutrition Awareness
 * Main Interactive Application Script
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Navigation & Mobile Menu
  initNavigation();

  // 2. Render Core Four Quick Links & Herbs Grid
  renderCoreFourShortcuts();
  renderHerbsGrid(HERBS_DATA);
  initHerbFilterAndSearch();

  // 3. Herb Detail Modal Handlers
  initHerbModal();

  // 4. Interactive Health Tools (BMI & Water Calculator)
  initHealthTools();

  // 5. Tip of the Day Generator
  initTipOfTheDay();

  // 6. Interactive Herbal & Nutrition Quiz
  initQuiz();

  // 7. FAQ Accordion
  initFaqAccordion();

  // 8. Contact Form & Toast Notifications
  initContactForm();

  // 9. Back To Top Button & Scroll Spy
  initScrollFeatures();
});

/* ==========================================================================
   1. Navigation & Mobile Menu
   ========================================================================== */
function initNavigation() {
  const hamburger = document.getElementById("hamburgerBtn");
  const navLinks = document.getElementById("navLinks");
  const header = document.querySelector(".header");
  const links = document.querySelectorAll(".nav-link");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      hamburger.classList.toggle("open");
      hamburger.setAttribute("aria-expanded", isOpen);
    });

    // Close mobile menu when clicking any nav link
    links.forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        hamburger.classList.remove("open");
        hamburger.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Header shadow on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}

/* ==========================================================================
   2. Herbs Showcase & Filtering
   ========================================================================== */
function renderCoreFourShortcuts() {
  const container = document.getElementById("coreFourContainer");
  if (!container) return;

  const coreHerbs = HERBS_DATA.slice(0, 4);
  container.innerHTML = coreHerbs.map(herb => `
    <div class="core-pill-card" data-herb-id="${herb.id}">
      <img src="${herb.image}" alt="${herb.name}" class="core-pill-img" onerror="this.src='${herb.image}'">
      <div class="core-pill-text">
        <h3>${herb.name.split(" ")[0]}</h3>
        <p>${herb.badge}</p>
      </div>
    </div>
  `).join("");

  // Add click events to core four cards to open modal directly
  container.querySelectorAll(".core-pill-card").forEach(card => {
    card.addEventListener("click", () => {
      const herbId = card.getAttribute("data-herb-id");
      openHerbModal(herbId);
    });
  });
}

function renderHerbsGrid(herbs) {
  const grid = document.getElementById("herbsGrid");
  if (!grid) return;

  if (herbs.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 3rem 1rem;">
        <span style="font-size: 3rem;">🔍</span>
        <h3 style="color: var(--primary-dark); margin: 0.5rem 0;">No herbs match your search</h3>
        <p style="color: var(--text-muted);">Try searching for Tulsi, Turmeric, Ginger, Aloe Vera, or clear the filter.</p>
        <button class="btn btn-secondary btn-sm" style="margin-top: 1rem;" onclick="resetHerbFilters()">Reset All Filters</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = herbs.map(herb => `
    <article class="herb-card" data-id="${herb.id}">
      <div class="herb-card-img-wrap">
        <img 
          src="${herb.photoUrl}" 
          alt="${herb.name}" 
          class="herb-card-img" 
          loading="lazy"
          onerror="this.onerror=null; this.src='${herb.image}';"
        >
        <span class="herb-badge-top">${herb.badge}</span>
        <span class="herb-category-top">${herb.category}</span>
      </div>
      <div class="herb-card-body">
        <h3 class="herb-title">${herb.name}</h3>
        <p class="herb-scientific">${herb.scientificName}</p>
        <p class="herb-desc">${herb.description}</p>
        
        <div class="herb-key-compounds">
          <span class="compound-label">Key Bioactive Compounds</span>
          <span class="compound-value">${herb.activeCompounds}</span>
        </div>

        <div class="herb-card-footer">
          <button class="btn-card-details" data-herb-id="${herb.id}">
            <span>View Full Profile &amp; Remedies</span>
            <span>&rarr;</span>
          </button>
        </div>
      </div>
    </article>
  `).join("");

  // Attach click listeners to cards
  grid.querySelectorAll(".btn-card-details").forEach(button => {
    button.addEventListener("click", (e) => {
      e.stopPropagation();
      const herbId = button.getAttribute("data-herb-id");
      openHerbModal(herbId);
    });
  });
}

function initHerbFilterAndSearch() {
  const searchInput = document.getElementById("herbSearchInput");
  const filterButtons = document.querySelectorAll(".filter-btn");

  let currentCategory = "all";
  let searchQuery = "";

  function applyFilters() {
    let filtered = HERBS_DATA;

    if (currentCategory !== "all") {
      filtered = filtered.filter(herb => herb.category === currentCategory);
    }

    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase().trim();
      filtered = filtered.filter(herb => 
        herb.name.toLowerCase().includes(q) ||
        herb.scientificName.toLowerCase().includes(q) ||
        herb.activeCompounds.toLowerCase().includes(q) ||
        herb.description.toLowerCase().includes(q) ||
        herb.keyBenefits.some(b => b.toLowerCase().includes(q))
      );
    }

    renderHerbsGrid(filtered);
  }

  // Filter category buttons
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.getAttribute("data-category");
      applyFilters();
    });
  });

  // Search input with debounce
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      applyFilters();
    });
  }

  // Global reset helper
  window.resetHerbFilters = () => {
    if (searchInput) searchInput.value = "";
    searchQuery = "";
    currentCategory = "all";
    filterButtons.forEach(b => {
      if (b.getAttribute("data-category") === "all") b.classList.add("active");
      else b.classList.remove("active");
    });
    renderHerbsGrid(HERBS_DATA);
  };
}

/* ==========================================================================
   3. Herb Details Modal
   ========================================================================== */
function initHerbModal() {
  const modalOverlay = document.getElementById("herbModal");
  const closeBtn = document.getElementById("modalCloseBtn");

  if (!modalOverlay || !closeBtn) return;

  closeBtn.addEventListener("click", closeHerbModal);

  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
      closeHerbModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalOverlay.classList.contains("open")) {
      closeHerbModal();
    }
  });
}

function openHerbModal(herbId) {
  const herb = HERBS_DATA.find(h => h.id === herbId);
  if (!herb) return;

  const modal = document.getElementById("herbModal");
  const modalImg = document.getElementById("modalImg");
  const modalTitle = document.getElementById("modalTitle");
  const modalSci = document.getElementById("modalSci");
  const modalDesc = document.getElementById("modalDesc");
  const modalBenefits = document.getElementById("modalBenefits");
  const modalTradition = document.getElementById("modalTradition");
  const modalScience = document.getElementById("modalScience");
  const modalRecipeTitle = document.getElementById("modalRecipeTitle");
  const modalIngredients = document.getElementById("modalIngredients");
  const modalSteps = document.getElementById("modalSteps");
  const modalCaution = document.getElementById("modalCaution");

  // Fill in modal details
  modalImg.src = herb.image;
  modalImg.alt = herb.name;
  modalTitle.textContent = herb.name;
  modalSci.textContent = `${herb.scientificName} • Family: ${herb.family}`;
  modalDesc.textContent = herb.description;

  // Benefits
  modalBenefits.innerHTML = herb.keyBenefits.map(b => `
    <div class="benefit-pill-item">
      <span>🌿</span>
      <span>${b}</span>
    </div>
  `).join("");

  // Tradition & Modern Science
  modalTradition.textContent = herb.traditionalUses;
  modalScience.textContent = herb.modernScience;

  // Remedy Recipe
  modalRecipeTitle.textContent = herb.homeRemedy.title;
  modalIngredients.textContent = herb.homeRemedy.ingredients;
  modalSteps.textContent = herb.homeRemedy.steps;

  // Caution
  modalCaution.textContent = `⚠️ Dosage & Safety: ${herb.dosageAndPrecaution}`;

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeHerbModal() {
  const modal = document.getElementById("herbModal");
  if (modal) {
    modal.classList.remove("open");
    document.body.style.overflow = "";
  }
}

/* ==========================================================================
   4. Interactive Health Tools (BMI & Hydration Calculators)
   ========================================================================== */
function initHealthTools() {
  // Tabs switcher
  const tabButtons = document.querySelectorAll(".tool-tab-btn");
  const tabPanes = document.querySelectorAll(".tool-content");

  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-tab");

      tabButtons.forEach(b => b.classList.remove("active"));
      tabPanes.forEach(pane => pane.classList.remove("active"));

      btn.classList.add("active");
      document.getElementById(target).classList.add("active");
    });
  });

  // A. BMI Calculator
  const bmiWeightInput = document.getElementById("bmiWeight");
  const bmiHeightInput = document.getElementById("bmiHeight");
  const calcBmiBtn = document.getElementById("calcBmiBtn");
  const bmiScoreDisplay = document.getElementById("bmiScoreDisplay");
  const bmiStatusBadge = document.getElementById("bmiStatusBadge");
  const bmiAdviceText = document.getElementById("bmiAdviceText");

  if (calcBmiBtn) {
    calcBmiBtn.addEventListener("click", () => {
      const weight = parseFloat(bmiWeightInput.value);
      const heightCm = parseFloat(bmiHeightInput.value);

      if (isNaN(weight) || isNaN(heightCm) || weight <= 0 || heightCm <= 0) {
        showToast("Please enter valid positive numbers for height and weight.");
        return;
      }

      const heightM = heightCm / 100;
      const bmi = (weight / (heightM * heightM)).toFixed(1);

      bmiScoreDisplay.textContent = bmi;

      let category = "";
      let badgeClass = "";
      let advice = "";

      if (bmi < 18.5) {
        category = "Underweight";
        badgeClass = "badge-under";
        advice = "Focus on nutrient-dense whole foods: nuts, sprouted seeds, whole milk, paneer, and bananas. Incorporate Ashwagandha milk for stamina building.";
      } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal / Healthy Weight";
        badgeClass = "badge-normal";
        advice = "Great job! Maintain your balanced Plate Ratio (50% vegetables/fruits, 25% whole grains, 25% lean protein) and stay active with daily brisk walking.";
      } else if (bmi >= 25.0 && bmi < 29.9) {
        category = "Overweight";
        badgeClass = "badge-over";
        advice = "Incorporate thermogenic herbs like Ginger tea and Turmeric before meals. Increase dietary fiber to 30g daily and reduce refined flours and sugary sodas.";
      } else {
        category = "Obese";
        badgeClass = "badge-over";
        advice = "Prioritize whole vegetable bowls, warm water with lemon upon waking, and avoid late-night dining. Consult a certified clinical nutritionist.";
      }

      bmiStatusBadge.textContent = category;
      bmiStatusBadge.className = `result-badge ${badgeClass}`;
      bmiAdviceText.textContent = advice;
    });
  }

  // B. Water Intake Calculator
  const waterWeightInput = document.getElementById("waterWeight");
  const activitySelect = document.getElementById("activityLevel");
  const calcWaterBtn = document.getElementById("calcWaterBtn");
  const waterLitersDisplay = document.getElementById("waterLitersDisplay");
  const waterGlassesDisplay = document.getElementById("waterGlassesDisplay");
  const waterTipDisplay = document.getElementById("waterTipDisplay");

  if (calcWaterBtn) {
    calcWaterBtn.addEventListener("click", () => {
      const weight = parseFloat(waterWeightInput.value);
      const activityFactor = parseFloat(activitySelect.value);

      if (isNaN(weight) || weight <= 0) {
        showToast("Please enter a valid body weight.");
        return;
      }

      // Base: ~35ml per kg of body weight
      let dailyMl = weight * 35;
      dailyMl += activityFactor; // add exercise water requirement

      const liters = (dailyMl / 1000).toFixed(1);
      const glasses = Math.round(dailyMl / 250);

      waterLitersDisplay.textContent = `${liters} L`;
      waterGlassesDisplay.textContent = `~${glasses} Glasses (250ml each)`;
      waterTipDisplay.textContent = `Pro Tip: Infuse your daily water bottle with fresh Mint leaves or cucumber slices for refreshing natural electrolytes and superior cellular hydration!`;
    });
  }
}

/* ==========================================================================
   5. Tip of the Day Generator
   ========================================================================== */
function initTipOfTheDay() {
  const tipQuote = document.getElementById("dailyTipQuote");
  const tipAuthor = document.getElementById("dailyTipCategory");
  const btn = document.getElementById("generateTipBtn");

  if (!btn || !tipQuote) return;

  let currentIndex = 0;

  btn.addEventListener("click", () => {
    // Pick random index different from current
    let nextIndex;
    do {
      nextIndex = Math.floor(Math.random() * HEALTHY_TIPS.length);
    } while (nextIndex === currentIndex && HEALTHY_TIPS.length > 1);

    currentIndex = nextIndex;
    const item = HEALTHY_TIPS[currentIndex];

    tipQuote.style.opacity = "0";
    setTimeout(() => {
      tipQuote.textContent = `"${item.text}"`;
      tipAuthor.textContent = `${item.icon} Category: ${item.category} — ${item.title}`;
      tipQuote.style.opacity = "1";
    }, 150);
  });
}

/* ==========================================================================
   6. Interactive Herbal & Nutrition Quiz
   ========================================================================== */
function initQuiz() {
  let currentQIndex = 0;
  let score = 0;
  let hasAnsweredCurrent = false;

  const quizCard = document.getElementById("quizCard");
  const qNum = document.getElementById("quizQuestionNum");
  const qText = document.getElementById("quizQuestionText");
  const optList = document.getElementById("quizOptionsList");
  const feedbackBox = document.getElementById("quizFeedbackBox");
  const nextBtn = document.getElementById("quizNextBtn");
  const progressFill = document.getElementById("quizProgressFill");

  if (!quizCard) return;

  function loadQuestion(index) {
    hasAnsweredCurrent = false;
    const qData = QUIZ_QUESTIONS[index];

    qNum.textContent = `Question ${index + 1} of ${QUIZ_QUESTIONS.length}`;
    qText.textContent = qData.question;
    feedbackBox.className = "quiz-feedback-box";
    feedbackBox.innerHTML = "";
    nextBtn.textContent = index === QUIZ_QUESTIONS.length - 1 ? "Finish Quiz" : "Next Question";
    nextBtn.disabled = true;

    // Progress bar
    const progressPercent = ((index + 1) / QUIZ_QUESTIONS.length) * 100;
    progressFill.style.width = `${progressPercent}%`;

    // Render options
    optList.innerHTML = qData.options.map((opt, i) => `
      <button class="quiz-option-btn" data-index="${i}">
        <span>${String.fromCharCode(65 + i)}. ${opt}</span>
        <span class="quiz-opt-icon"></span>
      </button>
    `).join("");

    // Attach click listeners to option buttons
    optList.querySelectorAll(".quiz-option-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        if (hasAnsweredCurrent) return;
        hasAnsweredCurrent = true;

        const selectedIndex = parseInt(btn.getAttribute("data-index"), 10);
        handleAnswer(selectedIndex, qData);
      });
    });
  }

  function handleAnswer(selectedIdx, qData) {
    const optionBtns = optList.querySelectorAll(".quiz-option-btn");
    nextBtn.disabled = false;

    // Disable all options
    optionBtns.forEach((b, i) => {
      b.disabled = true;
      if (i === qData.correctIndex) {
        b.classList.add("correct");
        b.querySelector(".quiz-opt-icon").textContent = "✓";
      }
    });

    if (selectedIdx === qData.correctIndex) {
      score++;
      feedbackBox.className = "quiz-feedback-box success active";
      feedbackBox.innerHTML = `<strong>Correct! 🎉</strong> ${qData.explanation}`;
    } else {
      optionBtns[selectedIdx].classList.add("wrong");
      optionBtns[selectedIdx].querySelector(".quiz-opt-icon").textContent = "✕";
      feedbackBox.className = "quiz-feedback-box error active";
      feedbackBox.innerHTML = `<strong>Incorrect.</strong> ${qData.explanation}`;
    }
  }

  nextBtn.addEventListener("click", () => {
    if (!hasAnsweredCurrent) return;

    currentQIndex++;
    if (currentQIndex < QUIZ_QUESTIONS.length) {
      loadQuestion(currentQIndex);
    } else {
      showQuizResults();
    }
  });

  function showQuizResults() {
    progressFill.style.width = "100%";
    const percentage = Math.round((score / QUIZ_QUESTIONS.length) * 100);

    let badgeMessage = "";
    if (percentage === 100) {
      badgeMessage = "🏆 Herbal & Nutrition Master! You achieved a perfect score!";
    } else if (percentage >= 75) {
      badgeMessage = "🌿 Great Job! You have strong botanical and nutritional awareness.";
    } else {
      badgeMessage = "🌱 Good Effort! Explore our Herbs and Nutrition sections to boost your knowledge.";
    }

    quizCard.innerHTML = `
      <div class="quiz-complete-card">
        <div class="quiz-complete-icon">${percentage >= 75 ? "🎓" : "🌱"}</div>
        <h3 class="section-title" style="font-size: 1.8rem;">Quiz Completed!</h3>
        <p class="quiz-score-badge">${score} / ${QUIZ_QUESTIONS.length} (${percentage}%)</p>
        <p style="font-size: 1.1rem; color: var(--primary-dark); font-weight: 600; margin-bottom: 1.5rem;">${badgeMessage}</p>
        <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
          <button class="btn btn-primary" onclick="restartQuiz()">Retake Quiz</button>
          <a href="#herbs" class="btn btn-secondary">Review Herbs</a>
        </div>
      </div>
    `;
  }

  window.restartQuiz = () => {
    currentQIndex = 0;
    score = 0;
    quizCard.innerHTML = `
      <div class="quiz-progress-bar">
        <div class="quiz-progress-fill" id="quizProgressFill"></div>
      </div>
      <div class="quiz-question-number" id="quizQuestionNum"></div>
      <h3 class="quiz-question-text" id="quizQuestionText"></h3>
      <div class="quiz-options-list" id="quizOptionsList"></div>
      <div class="quiz-feedback-box" id="quizFeedbackBox"></div>
      <div class="quiz-actions">
        <button class="btn btn-primary btn-sm" id="quizNextBtn" disabled>Next Question</button>
      </div>
    `;
    // Re-bind references and load
    initQuiz();
  };

  // Start question 1
  loadQuestion(0);
}

/* ==========================================================================
   7. FAQ Accordion
   ========================================================================== */
function initFaqAccordion() {
  const container = document.getElementById("faqAccordion");
  if (!container) return;

  container.innerHTML = FAQS.map((faq, i) => `
    <div class="faq-item ${i === 0 ? "active" : ""}">
      <button class="faq-question">
        <span>${faq.q}</span>
        <span class="faq-chevron">▾</span>
      </button>
      <div class="faq-answer">
        <div class="faq-answer-inner">${faq.a}</div>
      </div>
    </div>
  `).join("");

  container.querySelectorAll(".faq-item").forEach(item => {
    const questionBtn = item.querySelector(".faq-question");
    questionBtn.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      // Close all other items for clean accordion effect
      container.querySelectorAll(".faq-item").forEach(other => {
        other.classList.remove("active");
      });

      if (!isActive) {
        item.classList.add("active");
      }
    });
  });
}

/* ==========================================================================
   8. Contact Form & Toast Notifications
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameInput = document.getElementById("contactName");
    const emailInput = document.getElementById("contactEmail");
    const queryInput = document.getElementById("contactQuery");

    if (!nameInput.value.trim() || !emailInput.value.trim() || !queryInput.value.trim()) {
      showToast("Please fill in all required fields.");
      return;
    }

    // Basic email check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
      showToast("Please enter a valid email address.");
      return;
    }

    // Simulate submission for student project
    showToast(`Thank you, ${nameInput.value.trim()}! Your message has been received.`);
    form.reset();
  });
}

function showToast(message) {
  let toast = document.getElementById("appToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "appToast";
    toast.className = "toast";
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<span>🌿</span><span>${message}</span>`;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 4000);
}

/* ==========================================================================
   9. Scroll Spy & Back To Top
   ========================================================================== */
function initScrollFeatures() {
  const backToTopBtn = document.getElementById("backToTopBtn");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");

  window.addEventListener("scroll", () => {
    const scrollPos = window.scrollY;

    // Show / hide back to top button
    if (backToTopBtn) {
      if (scrollPos > 400) {
        backToTopBtn.classList.add("visible");
      } else {
        backToTopBtn.classList.remove("visible");
      }
    }

    // Active nav link highlight on scroll
    sections.forEach(section => {
      const top = section.offsetTop - 120;
      const height = section.offsetHeight;
      const id = section.getAttribute("id");

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }
}
