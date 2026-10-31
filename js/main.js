/* ===== I18N TRANSLATIONS ===== */
const i18n = {
  es: {
    'nav.about': 'Sobre mí', 'nav.experience': 'Experiencia', 'nav.projects': 'Proyectos',
    'nav.stack': 'Stack', 'nav.certs': 'Certs', 'nav.contact': 'Contacto',
    'hero.available': 'Disponible para nuevas oportunidades',
    'hero.greeting': 'Hola, soy',
    'hero.desc': 'Diseño y entrego soluciones corporativas completas en producción: arquitectura, desarrollo, CI/CD y operación en <strong>Microsoft Azure</strong>. Automatizo con <strong>IA y Python</strong> lo que antes tomaba horas. <strong>Secure by Design</strong> desde el primer commit.',
    'hero.cta1': 'Ver proyectos', 'hero.cta2': 'Escríbeme',
    'hero.location': 'Quito, Ecuador &nbsp;&middot;&nbsp; Remoto / Híbrido',
    'tag.ai': 'Automatización &amp; IA',
    'stat.1': 'de trabajo manual eliminado por mes con automatizaciones',
    'stat.2': 'reducción en tiempo de respuesta a alertas de seguridad',
    'stat.3': 'soluciones corporativas entregadas en producción',
    'stat.4': 'reducción en gasto cloud (Azure FinOps)',
    'section.about': 'Sobre mí', 'section.experience': 'Experiencia',
    'section.projects': 'Proyectos destacados', 'section.stack': 'Stack técnico',
    'section.certs': 'Certificaciones', 'section.contact': 'Hablemos',
    'about.p1': 'Ingeniera de Software Full-Stack con experiencia liderando de extremo a extremo <strong>soluciones corporativas en producción</strong>: desde la definición de arquitectura y requerimientos hasta el despliegue, la operación y la optimización de costos en <strong>Microsoft Azure</strong>.',
    'about.p2': 'Diseño aplicaciones web e integraciones mediante APIs REST con <strong>React y FastAPI (Python)</strong>, y construyo automatizaciones con IA que eliminan trabajo manual a escala. Mi diferenciador es la seguridad aplicada al ciclo de desarrollo (<strong>DevSecOps, Zero Trust, ISO/IEC 27001</strong>): entrego software rápido, mantenible y seguro desde el diseño.',
    'about.p3': 'Ejerzo <strong>liderazgo técnico</strong> mediante code reviews, definición de estándares y mentoría a desarrolladores.',
    'about.edu': 'Ingeniería en Software &mdash; EPN (2020&ndash;2026)',
    'about.company': 'IST AMERICAS &mdash; Desarrolladora de Innovación',
    'about.lang': 'Español (nativo) &middot; Inglés B2 profesional',
    'about.loc': 'Quito, Ecuador &middot; Remote-friendly',
    'about.role': 'Full-Stack Engineer &amp; Tech Lead',
    'exp.title': 'Desarrolladora de Innovación', 'exp.date': 'Dic 2024 &ndash; Presente', 'exp.badge': 'En curso',
    'exp.h1.title': 'Liderazgo técnico', 'exp.h1.desc': 'Dirigí equipo de 4 desarrolladores bajo Scrum, definiendo arquitectura, prioridades y entregables.',
    'exp.h2.title': 'Full-Stack E2E', 'exp.h2.desc': '+10 soluciones corporativas en producción con React + FastAPI + PostgreSQL desde requerimiento hasta operación.',
    'exp.h3.title': 'Automatización &amp; IA', 'exp.h3.desc': 'Ahorré 40h/mes con n8n + Python + LLMs. Alertas SOC de 10 min a 2 min (reducción del 80%).',
    'exp.h4.title': 'Azure &amp; DevOps', 'exp.h4.desc': 'CI/CD 60% más rápido con GitHub Actions. Auditoría FinOps redujo gasto cloud en 20%.',
    'exp.h5.title': 'DevSecOps &amp; Zero Trust', 'exp.h5.desc': 'Cloudflare ZTNA, políticas ISO 27001 para M365, evaluaciones de vulnerabilidades pre-producción.',
    'exp.h6.title': 'Data &amp; BI', 'exp.h6.desc': 'Modelé y optimicé bases de datos PostgreSQL listas para alta concurrencia. Dashboards en Power BI.',
    'proj.featured': 'Proyecto destacado',
    'proj.1.title': 'Plataforma SOC/NOC con IA',
    'proj.1.desc': 'Reemplacé un proceso manual en Excel con una plataforma que ingiere alertas de seguridad (EDR, NDR) automáticamente, las enriquece con score de IOCs y análisis generado por IA, y notifica al cliente por correo y WhatsApp en menos de 2 minutos. Incluye portal de clientes, informes automáticos (Word, PDF, PowerPoint, Excel) y correos HTML con branding.',
    'proj.1.m1': 'respuesta (antes 10+ manual)', 'proj.1.m2': 'clientes atendidos', 'proj.1.m3': 'automatizado',
    'proj.2.title': 'Bot de Protección de Marca', 'proj.2.desc': 'Bot de WhatsApp que recibe URLs dañinas para la marca del cliente, abre el ticket de takedown automáticamente en la herramienta de gestión, notifica por correo y registra en la plataforma. Eliminó el traspaso manual entre herramientas y correo.',
    'proj.3.title': 'Automatización Google Ads Takedown', 'proj.3.desc': 'Servicio en Python desplegado como Azure Container Job que gestiona automáticamente la baja de anuncios maliciosos que suplantan marcas de clientes, integrado mediante APIs de terceros. Cero intervención manual.',
    'proj.4.desc': 'Suite de pruebas QA: flujo E2E de compra como invitado en OpenCart y pruebas CRUD de API REST para PetStore. Diseño de casos de prueba, ejecución y reporte de defectos.',
    'stack.ai': 'Automatización &amp; IA', 'stack.security': 'Seguridad', 'stack.data': 'Datos &amp; Prácticas',
    'cert.tag.security': 'Seguridad', 'cert.tag.methods': 'Metodologías', 'cert.tag.cybersec': 'Ciberseguridad',
    'cert.1.desc': 'Information Security Associate &mdash; SGSI, gestión de riesgos y controles',
    'cert.2.desc': 'LLMs, código seguro, mitigación de prompt injection',
    'cert.3.desc': 'Professional Certificate &mdash; Análisis de requerimientos y entrega iterativa',
    'cert.6.desc': 'Módulo 1 &mdash; Certificado Phishing Prevention &amp; Ransomware Protection',
    'contact.intro': '¿Tienes un proyecto, una posición abierta o una idea que requiere <strong>Full-Stack, Cloud o Automatización con IA</strong>? Escríbeme &mdash; respondo rápido.',
    'contact.cta': 'Envíame un email', 'contact.or': 'o también por',
  },
  en: {
    'nav.about': 'About', 'nav.experience': 'Experience', 'nav.projects': 'Projects',
    'nav.stack': 'Stack', 'nav.certs': 'Certs', 'nav.contact': 'Contact',
    'hero.available': 'Available for new opportunities',
    'hero.greeting': 'Hi, I am',
    'hero.desc': 'I design and deliver end-to-end corporate solutions in production: architecture, development, CI/CD and operations on <strong>Microsoft Azure</strong>. I automate with <strong>AI and Python</strong> what used to take hours. <strong>Secure by Design</strong> from the first commit.',
    'hero.cta1': 'View projects', 'hero.cta2': 'Email me',
    'hero.location': 'Quito, Ecuador &nbsp;&middot;&nbsp; Remote / Hybrid',
    'tag.ai': 'Automation &amp; AI',
    'stat.1': 'hours of manual work eliminated per month via automation',
    'stat.2': 'reduction in security alert response time',
    'stat.3': 'corporate solutions shipped to production',
    'stat.4': 'cloud cost reduction (Azure FinOps)',
    'section.about': 'About me', 'section.experience': 'Experience',
    'section.projects': 'Featured projects', 'section.stack': 'Tech stack',
    'section.certs': 'Certifications', 'section.contact': "Let's talk",
    'about.p1': 'Full-Stack Software Engineer with experience leading end-to-end <strong>corporate solutions in production</strong>: from architecture definition and requirements to deployment, operations and cost optimization on <strong>Microsoft Azure</strong>.',
    'about.p2': 'I design web applications and REST API integrations with <strong>React and FastAPI (Python)</strong>, and build AI-powered automations that eliminate manual work at scale. My differentiator is security applied to the development lifecycle (<strong>DevSecOps, Zero Trust, ISO/IEC 27001</strong>): I deliver fast, maintainable and secure software from design.',
    'about.p3': 'I exercise <strong>technical leadership</strong> through code reviews, standards definition and mentoring developers.',
    'about.edu': 'Software Engineering &mdash; EPN (2020&ndash;2026)',
    'about.company': 'IST AMERICAS &mdash; Innovation Developer',
    'about.lang': 'Spanish (native) &middot; English B2 professional',
    'about.loc': 'Quito, Ecuador &middot; Remote-friendly',
    'about.role': 'Full-Stack Engineer &amp; Tech Lead',
    'exp.title': 'Innovation Developer', 'exp.date': 'Dec 2024 &ndash; Present', 'exp.badge': 'Current',
    'exp.h1.title': 'Technical Leadership', 'exp.h1.desc': 'Led a team of 4 developers under Scrum, defining architecture, priorities and deliverables.',
    'exp.h2.title': 'Full-Stack E2E', 'exp.h2.desc': '10+ corporate solutions in production with React + FastAPI + PostgreSQL from requirements to operations.',
    'exp.h3.title': 'Automation &amp; AI', 'exp.h3.desc': 'Saved 40h/month with n8n + Python + LLMs. SOC alerts from 10 min to 2 min (80% reduction).',
    'exp.h4.title': 'Azure &amp; DevOps', 'exp.h4.desc': 'CI/CD 60% faster with GitHub Actions. FinOps audit reduced cloud spend by 20%.',
    'exp.h5.title': 'DevSecOps &amp; Zero Trust', 'exp.h5.desc': 'Cloudflare ZTNA, ISO 27001 policies for M365, pre-production vulnerability assessments.',
    'exp.h6.title': 'Data &amp; BI', 'exp.h6.desc': 'Modeled and optimized PostgreSQL databases ready for high concurrency. Power BI dashboards.',
    'proj.featured': 'Featured project',
    'proj.1.title': 'SOC/NOC Platform with AI',
    'proj.1.desc': 'Replaced a manual Excel process with a platform that automatically ingests security alerts (EDR, NDR), enriches them with IOC scores and AI-generated analysis, and notifies the client via email and WhatsApp in under 2 minutes. Includes client portal, automated reports (Word, PDF, PowerPoint, Excel) and branded HTML emails.',
    'proj.1.m1': 'response (before 10+ manual)', 'proj.1.m2': 'clients served', 'proj.1.m3': 'automated',
    'proj.2.title': 'Brand Protection Bot', 'proj.2.desc': 'WhatsApp bot that receives harmful URLs targeting client brands, automatically opens the takedown ticket in the management tool, notifies by email and logs in the platform. Eliminated manual handoff between tools and email.',
    'proj.3.title': 'Google Ads Takedown Automation', 'proj.3.desc': 'Python service deployed as an Azure Container Job that automatically manages the removal of malicious ads impersonating client brands, integrated via third-party APIs. Zero manual intervention.',
    'proj.4.desc': 'QA test suite: E2E guest checkout flow on OpenCart and REST API CRUD tests for PetStore. Test case design, execution and defect reporting.',
    'stack.ai': 'Automation &amp; AI', 'stack.security': 'Security', 'stack.data': 'Data &amp; Practices',
    'cert.tag.security': 'Security', 'cert.tag.methods': 'Methodologies', 'cert.tag.cybersec': 'Cybersecurity',
    'cert.1.desc': 'Information Security Associate &mdash; ISMS, risk management and controls',
    'cert.2.desc': 'LLMs, secure code generation, prompt injection mitigation',
    'cert.3.desc': 'Professional Certificate &mdash; Requirements analysis and iterative delivery',
    'cert.6.desc': 'Module 1 &mdash; Phishing Prevention &amp; Ransomware Protection Certificate',
    'contact.intro': 'Do you have a project, an open position or an idea that needs <strong>Full-Stack, Cloud or AI Automation</strong>? Write me &mdash; I respond quickly.',
    'contact.cta': 'Send me an email', 'contact.or': 'or reach me on',
  }
};

let currentLang = 'es';

function applyLang(lang) {
  const t = i18n[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key].replace(/&amp;/g, '&').replace(/&middot;/g, '·').replace(/&mdash;/g, '—').replace(/&ndash;/g, '–').replace(/&nbsp;/g, ' ');
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
  document.documentElement.lang = lang;
  currentLang = lang;
}

/* ===== LANG TOGGLE BUTTON ===== */
document.getElementById('lang-toggle')?.addEventListener('click', function() {
  const next = currentLang === 'es' ? 'en' : 'es';
  applyLang(next);
  this.textContent = next === 'es' ? 'EN' : 'ES';
  this.classList.toggle('active', next === 'en');
});

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
