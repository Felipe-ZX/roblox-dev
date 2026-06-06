tsParticles.load({
  id: "tsparticles",
  options: {
    fpsLimit: 60,
    particles: {
      color: {
        value: ["#7dd3fc", "#34d399", "#f6c76f"]
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
        value: 38
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
