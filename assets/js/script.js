// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });
reveals.forEach(r => observer.observe(r));

// Smooth nav background on scroll
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  nav.style.background = window.scrollY > 50
    ? 'rgba(4,32,71,0.98)'
    : 'linear-gradient(to bottom, rgba(4,32,71,0.98) 0%, rgba(4,32,71,0.85) 100%)';
});
// ── Carrousel Avant/Après ──
(function() {
  const slides = document.querySelectorAll('#baCarousel .ba-slide');
  const dotsWrap = document.getElementById('baDots');
  let current = 0;

  // Créer les dots
  slides.forEach((_, i) => {
    const d = document.createElement('button');
    d.className = 'ba-dot' + (i === 0 ? ' active' : '');
    d.setAttribute('aria-label', 'Slide ' + (i+1));
    d.onclick = () => goTo(i);
    dotsWrap.appendChild(d);
  });

  function goTo(n) {
    slides[current].classList.remove('active');
    document.querySelectorAll('.ba-dot')[current].classList.remove('active');
    current = (n + slides.length) % slides.length;
    slides[current].classList.add('active');
    document.querySelectorAll('.ba-dot')[current].classList.add('active');
  }

  window.baMove = (dir) => goTo(current + dir);

  // Auto-play toutes les 4s
  setInterval(() => goTo(current + 1), 4000);
})();
// ── HERO VIDEO ──
document.addEventListener('DOMContentLoaded', function () {
    window.scrollTo(0, 0);

    const video   = document.getElementById('hero-video');
    const playBtn = document.getElementById('hero-play-btn');

    if (!video || !playBtn) return;

    // Clic sur le bouton Play
    playBtn.addEventListener('click', function (e) {
        e.preventDefault();
        if (video.paused) video.play();
    });

    // Clic sur la vidéo → Play / Pause
    video.addEventListener('click', function () {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });

    // Vidéo en lecture → cacher le bouton
    video.addEventListener('play', () => {
        playBtn.style.opacity = '0';
        playBtn.style.pointerEvents = 'none';
    });

    // Vidéo en pause → réafficher le bouton
    video.addEventListener('pause', () => {
        playBtn.style.opacity = '1';
        playBtn.style.pointerEvents = 'all';
    });
});