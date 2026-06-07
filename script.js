const revealElements = document.querySelectorAll(".reveal");

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
