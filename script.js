const preloader = document.getElementById("preloader");
function hidePreloader() {
  preloader.classList.add("loaded");
}
if ("loading" === document.readyState) {
  document.addEventListener("DOMContentLoaded", () => {
    setTimeout(hidePreloader, 800);
  });
} else {
  setTimeout(hidePreloader, 800);
}
setTimeout(hidePreloader, 3000);
const observerOptions = { threshold: 0.15, rootMargin: "0px 0px -50px 0px" },
  observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      entry.isIntersecting &&
        (
          entry.target.classList.add("in-view"),
          observer.unobserve(entry.target)
        );
    });
  }, observerOptions);
document.querySelectorAll('[class*="scroll-"]').forEach(element => {
  observer.observe(element);
});
document.querySelectorAll(".link-card").forEach(card => {
  card.setAttribute("role", "link"), card.setAttribute(
    "tabindex",
    "0"
  ), card.addEventListener("keypress", e => {
    ("Enter" === e.key || " " === e.key) && (e.preventDefault(), card.click());
  });
});
const blobs = document.querySelectorAll(".blob");
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  blobs.forEach((blob, index) => {
    const speed = 0.5 + 0.1 * index;
    blob.style.transform = `translateY(${scrollY * speed}px)`;
  });
});
console.log("🎵 Turning Pages linkhub live - Designed by WhiteHatDesigner");
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register(
      'data:text/javascript,self.addEventListener("install",e=>self.skipWaiting());self.addEventListener("activate",e=>e.waitUntil(clients.claim()));'
    )
    .catch(() => { });
}

// Custom Cursor Trail Initialization
const cursorDot = document.createElement('div');
cursorDot.classList.add('cursor-dot');
const cursorOutline = document.createElement('div');
cursorOutline.classList.add('cursor-outline');

document.body.appendChild(cursorDot);
document.body.appendChild(cursorOutline);

window.addEventListener('mousemove', (e) => {
  const posX = e.clientX;
  const posY = e.clientY;

  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;

  // Smooth follow animation for the outline
  cursorOutline.animate({
    left: `${posX}px`,
    top: `${posY}px`
  }, { duration: 500, fill: "forwards" });
});

// Add hover effects for the cursor on link cards
document.querySelectorAll('a, button, .link-card').forEach(link => {
  link.addEventListener('mouseenter', () => {
    cursorOutline.animate({
      transform: 'translate(-50%, -50%) scale(1.5)',
      backgroundColor: 'rgba(245, 158, 11, 0.1)',
      borderColor: 'rgba(245, 158, 11, 0.5)'
    }, { duration: 200, fill: "forwards" });
  });

  link.addEventListener('mouseleave', () => {
    cursorOutline.animate({
      transform: 'translate(-50%, -50%) scale(1)',
      backgroundColor: 'transparent',
      borderColor: 'rgba(167, 139, 250, 0.5)'
    }, { duration: 200, fill: "forwards" });
  });
});
