const revealElements = document.querySelectorAll(".reveal");
const counters = document.querySelectorAll(".counter");
let countersStarted = false;

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  { threshold: 0.14, rootMargin: "0px 0px -60px 0px" }
);

revealElements.forEach((element, index) => {
  element.style.transitionDelay = `${Math.min(index * 55, 220)}ms`;
  revealObserver.observe(element);
});

function animateCounters() {
  if (countersStarted) return;
  countersStarted = true;

  counters.forEach((counter) => {
    const target = Number(counter.dataset.target || 0);
    const suffix = counter.dataset.suffix || "";
    const duration = target === 0 ? 500 : 1450;
    const startTime = performance.now();

    function update(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.round(target * eased);

      counter.textContent = `${value}${suffix}`;

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  });
}

const stats = document.querySelector(".stats");
if (stats) {
  window.addEventListener("load", () => {
    window.setTimeout(animateCounters, 450);
  });

  const counterObserver = new IntersectionObserver(
    (entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        animateCounters();
        counterObserver.disconnect();
      }
    },
    { threshold: 0.35 }
  );

  counterObserver.observe(stats);
}

if (window.tsParticles) {
  tsParticles.load({
  id: "tsparticles",
  options: {
    fpsLimit: 60,
    particles: {
      color: {
        value: ["#7dd3fc", "#34d399", "#f6c76f", "#fb7185"]
      },
      links: {
        color: "#7dd3fc",
        distance: 150,
        enable: true,
        opacity: 0.10,
        width: 1
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce"
        },
        random: true,
        speed: { min: 0.25, max: 0.9 },
        straight: false
      },
      number: {
        density: {
          enable: true,
          area: 900
        },
        value: 42
      },
      opacity: {
        value: { min: 0.10, max: 0.32 }
      },
      shape: {
        type: "circle"
      },
      size: {
        value: { min: 1, max: 3.5 }
      }
    },
    detectRetina: true,
    background: {
      color: "transparent"
    }
  }
  });
}

const projectsToggle = document.querySelector(".projects-toggle");
const projectsPanel = document.querySelector(".projects-panel");

if (projectsToggle && projectsPanel) {
  const toggleText = projectsToggle.querySelector(".toggle-text");

  projectsToggle.addEventListener("click", () => {
    const isOpen = projectsPanel.classList.toggle("is-open");

    projectsToggle.setAttribute("aria-expanded", String(isOpen));
    projectsPanel.hidden = false;

    if (toggleText) {
      toggleText.textContent = isOpen ? "Hide Projects" : "Show Projects";
    }

    if (!isOpen) {
      window.setTimeout(() => {
        projectsPanel.hidden = true;
      }, 360);
    }

    if (isOpen) {
      projectsPanel.querySelectorAll(".reveal").forEach((card, index) => {
        card.style.transitionDelay = `${index * 90}ms`;
        card.classList.add("is-visible");
      });
    }
  });
}
