document.addEventListener('DOMContentLoaded', () => {
  const targets = document.querySelectorAll('.fade-in, .fade-rightin, .fade-leftin, .fade-downin, .wipe-leftin, .wipe-in, .wipe-leftin-low');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, {
    threshold: 0,
    rootMargin: '0px 0px -10% 0px'
  });

  targets.forEach(el => observer.observe(el));
});