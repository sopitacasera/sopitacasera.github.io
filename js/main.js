/* ===== PROGRESS BAR ===== */
const progressBar = document.getElementById('progress-bar');
window.addEventListener('scroll', () => {
  const pct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  progressBar.style.width = pct + '%';
}, { passive: true });

/* ===== STICKY NAV ===== */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

/* ===== BURGER MENU ===== */
const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');
burger?.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

/* ===== SMOOTH SCROLL ===== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

/* ===== TYPEWRITER ===== */
const roles = [
  'Azure Cloud Engineer',
  'Automatizacion con IA',
  'DevSecOps Engineer',
  'Tech Lead',
  'Full Stack Developer'
];
const typeEl = document.getElementById('typewriter');
let roleIdx = 0, charIdx = 0, isDeleting = false;

function type() {
  const current = roles[roleIdx];
  typeEl.textContent = isDeleting
    ? current.substring(0, charIdx--)
    : current.substring(0, charIdx++);

  let delay = isDeleting ? 50 : 90;
  if (!isDeleting && charIdx === current.length + 1) {
    delay = 1800;
    isDeleting = true;
  } else if (isDeleting && charIdx === 0) {
    isDeleting = false;
    roleIdx = (roleIdx + 1) % roles.length;
    delay = 400;
  }
  setTimeout(type, delay);
}
type();

/* ===== ANIMATED COUNTERS ===== */
function animateCounter(card) {
  const target = parseInt(card.dataset.target, 10);
  const span = card.querySelector('.counter');
  if (!span) return;
  const duration = 1800;
  const start = performance.now();

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    span.textContent = Math.round(eased * target);
    if (progress < 1) requestAnimationFrame(update);
    else span.textContent = target;
  }
  requestAnimationFrame(update);
}

/* ===== INTERSECTION OBSERVER — reveal + counters ===== */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    revealObserver.unobserve(entry.target);
  });
}, { threshold: 0.12 });

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    animateCounter(entry.target);
    counterObserver.unobserve(entry.target);
  });
}, { threshold: 0.5 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
document.querySelectorAll('.stat-card[data-target]').forEach(el => counterObserver.observe(el));

/* ===== ACTIVE NAV LINK ON SCROLL ===== */
const sections = document.querySelectorAll('section[id]');
const navLinksAll = document.querySelectorAll('.nav-link[href^="#"]');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    navLinksAll.forEach(l => l.classList.remove('active'));
    const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
    active?.classList.add('active');
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => sectionObserver.observe(s));

/* ===== SCROLL-TO-TOP (appears after 300px) ===== */
const scrollBtn = document.createElement('button');
scrollBtn.id = 'scroll-top';
scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollBtn.style.cssText = `
  position:fixed; bottom:1.75rem; right:1.75rem; z-index:900;
  width:44px; height:44px; border-radius:50%; border:none; cursor:pointer;
  background:var(--primary); color:#fff; font-size:1rem;
  display:flex; align-items:center; justify-content:center;
  opacity:0; pointer-events:none;
  box-shadow:0 4px 16px rgba(46,158,247,0.35);
  transition:opacity 0.3s ease, transform 0.3s ease;
`;
document.body.appendChild(scrollBtn);

window.addEventListener('scroll', () => {
  const show = window.scrollY > 300;
  scrollBtn.style.opacity = show ? '1' : '0';
  scrollBtn.style.pointerEvents = show ? 'auto' : 'none';
}, { passive: true });

scrollBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* ===== CARD HOVER TILT (subtle 3D) ===== */
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `translateY(-4px) rotateX(${-y * 5}deg) rotateY(${x * 5}deg)`;
    card.style.transition = 'transform 0.1s ease';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
    card.style.transition = 'all 0.3s ease';
  });
});
