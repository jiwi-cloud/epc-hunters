document.addEventListener("DOMContentLoaded", () => {
    const steps = document.querySelectorAll(".step");
    const prevBtn = document.getElementById("prevStep");
    const nextBtn = document.getElementById("nextStep");

    let currentStep = 0;

    function showStep(index) {
        steps.forEach((step, i) => {
            step.classList.toggle("active", i === index);
        });
    }

    function isMobile() {
        return window.innerWidth <= 767;
    }

    // Показываем шаг при загрузке
    if (isMobile()) {
        showStep(currentStep);
    }

    // Переключение по стрелкам
    prevBtn?.addEventListener("click", () => {
        if (currentStep > 0) {
            currentStep--;
            showStep(currentStep);
        }
    });

    nextBtn?.addEventListener("click", () => {
        if (currentStep < steps.length - 1) {
            currentStep++;
            showStep(currentStep);
        }
    });

    // При ресайзе — сброс отображения
    window.addEventListener("resize", () => {
        if (isMobile()) {
            showStep(currentStep);
        } else {
            steps.forEach(step => step.classList.add("active"));
        }
    });
});

/* Открытие модального окна */
  const openModal = document.querySelector('.burger');
  const modalOverlay = document.querySelector('.modal-overlay');
  const closeModal = document.querySelector('.modal-close');

  openModal.addEventListener('click', () => {
    modalOverlay.classList.add('active');
  });

  closeModal.addEventListener('click', () => {
    modalOverlay.classList.remove('active');
  });

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      modalOverlay.classList.remove('active');
    }
  });