const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelectorAll(".site-nav a");
const revealItems = document.querySelectorAll(".reveal");
const cursorGlow = document.querySelector(".cursor-glow");
const tiltCard = document.querySelector(".tilt-card");

if (menuToggle && header) {
  menuToggle.addEventListener("click", () => {
    const isOpen = header.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (header?.classList.contains("is-open")) {
      header.classList.remove("is-open");
      menuToggle?.setAttribute("aria-expanded", "false");
    }
  });
});

if (cursorGlow) {
  window.addEventListener("pointermove", (event) => {
    cursorGlow.style.opacity = "1";
    cursorGlow.style.left = `${event.clientX}px`;
    cursorGlow.style.top = `${event.clientY}px`;
  });
}

if (tiltCard) {
  tiltCard.addEventListener("pointermove", (event) => {
    const bounds = tiltCard.getBoundingClientRect();
    const centerX = bounds.left + bounds.width / 2;
    const centerY = bounds.top + bounds.height / 2;
    const rotateY = (event.clientX - centerX) / 24;
    const rotateX = (centerY - event.clientY) / 24;

    tiltCard.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  });

  tiltCard.addEventListener("pointerleave", () => {
    tiltCard.style.transform = "";
  });
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18 }
);

revealItems.forEach((item) => {
  revealObserver.observe(item);
});
