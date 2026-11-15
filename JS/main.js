/**
 * JS/main.js — Version améliorée
 * Portfolio de Papa Aly Ndiaye
 * ─────────────────────────────────────────────────────────────
 * Modules :
 *   1.  Thème clair / sombre
 *   2.  Barre de lecture
 *   3.  Navbar scrollspy + burger
 *   4.  Typewriter (phrases mises à jour)
 *   5.  Compteurs animés Hero
 *   6.  Génération des compétences (niveaux Notions/Inter/Avancé)
 *   7.  Animations d'apparition (IntersectionObserver)
 *   8.  Barres de progression – rejouées à CHAQUE chargement
 *   9.  Génération des cartes projets (placeholder soigné)
 *   10. Modale projet (4 blocs + carrousel complet)
 *   11. Halo lumineux souris (désactivé sur mobile)
 * ─────────────────────────────────────────────────────────────
 */

/* ══════════════════════════════════════════
   1. THÈME CLAIR / SOMBRE
══════════════════════════════════════════ */
(function initTheme() {
  const saved = localStorage.getItem('portfolio-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = saved || (prefersDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', theme);

  const btn = document.getElementById('theme-toggle');
  if (!btn) return;

  function updateIcon() {
    const c = document.documentElement.getAttribute('data-theme');
    btn.innerHTML = c === 'dark'
      ? '<i class="fas fa-sun" aria-hidden="true"></i>'
      : '<i class="fas fa-moon" aria-hidden="true"></i>';
    btn.setAttribute('aria-label', c === 'dark' ? 'Passer au thème clair' : 'Passer au thème sombre');
  }

  updateIcon();
  btn.addEventListener('click', () => {
    const c = document.documentElement.getAttribute('data-theme');
    const next = c === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('portfolio-theme', next);
    updateIcon();
  });
})();

/* ══════════════════════════════════════════
   2. BARRE DE LECTURE
══════════════════════════════════════════ */
(function initReadingProgress() {
  const bar = document.getElementById('reading-progress');
  if (!bar) return;
  function update() {
    const st = window.scrollY;
    const dh = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (dh > 0 ? (st / dh) * 100 : 0).toFixed(1) + '%';
  }
  window.addEventListener('scroll', update, { passive: true });
  update();
})();

/* ══════════════════════════════════════════
   3. NAVBAR — Scrollspy + scroll + burger
══════════════════════════════════════════ */
(function initNavbar() {
  const navbar     = document.getElementById('navbar');
  const navLinks   = document.querySelectorAll('.nav-links a, .nav-mobile a');
  const burger     = document.querySelector('.nav-burger');
  const mobileMenu = document.querySelector('.nav-mobile');
  const sections   = document.querySelectorAll('section[id]');

  function onScroll() {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
    updateActiveLink();
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  function updateActiveLink() {
    let current = '';
    sections.forEach(s => {
      if (s.getBoundingClientRect().top <= 100) current = s.id;
    });
    navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === `#${current}`));
  }

  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (mobileMenu) { mobileMenu.classList.remove('open'); burger && burger.classList.remove('open'); }
    });
  });

  if (burger && mobileMenu) {
    burger.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      burger.classList.toggle('open', isOpen);
      burger.setAttribute('aria-expanded', isOpen.toString());
    });
  }
})();

/* ══════════════════════════════════════════
   4. TYPEWRITER — 3 phrases demandées
══════════════════════════════════════════ */
(function initTypewriter() {
  const el = document.querySelector('.typewriter-text');
  if (!el) return;

  const phrases = [
    'Étudiant en Génie logiciel',
    'Développeur full-stack',
    'Futur ingénieur IA et données'
  ];

  let pIdx = 0, cIdx = 0, deleting = false;
  const SPEED_TYPE = 70, SPEED_DELETE = 38, PAUSE_END = 1900, PAUSE_START = 420;

  function tick() {
    const phrase = phrases[pIdx];
    if (deleting) {
      el.textContent = phrase.substring(0, cIdx - 1);
      cIdx--;
      if (cIdx === 0) {
        deleting = false;
        pIdx = (pIdx + 1) % phrases.length;
        return setTimeout(tick, PAUSE_START);
      }
      return setTimeout(tick, SPEED_DELETE);
    }
    el.textContent = phrase.substring(0, cIdx + 1);
    cIdx++;
    if (cIdx === phrase.length) {
      deleting = true;
      return setTimeout(tick, PAUSE_END);
    }
    setTimeout(tick, SPEED_TYPE);
  }
  tick();
})();

/* ══════════════════════════════════════════
   5. COMPTEURS ANIMÉS HERO
══════════════════════════════════════════ */
(function initHeroCounters() {
  const counters = document.querySelectorAll('.hero-stat-num');
  if (!counters.length) return;

  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el    = entry.target;
      const target = parseInt(el.dataset.target, 10);
      const dur   = 1200;
      const step  = 16;
      let cur = 0;
      const inc = target / (dur / step);
      const timer = setInterval(() => {
        cur = Math.min(cur + inc, target);
        el.textContent = Math.round(cur);
        if (cur >= target) clearInterval(timer);
      }, step);
      obs.unobserve(el);
    });
  }, { threshold: 0.5 });

  counters.forEach(c => obs.observe(c));
})();

/* ══════════════════════════════════════════
   6. GÉNÉRATION DES COMPÉTENCES
      Niveaux : Notions (0-39) | Intermédiaire (40-69) | Avancé (70-100)
══════════════════════════════════════════ */
function levelLabel(n) {
  if (n >= 70) return { label: 'Avancé',        cls: 'lvl-advanced' };
  if (n >= 40) return { label: 'Intermédiaire', cls: 'lvl-intermediate' };
  return              { label: 'Notions',        cls: 'lvl-beginner' };
}

/** SVG inline pour UML (aucune icône Devicon disponible) */
const UML_SVG = `<svg class="skill-icon-uml-svg" viewBox="0 0 24 24" fill="none" aria-hidden="true">
  <rect x="2" y="2" width="20" height="14" rx="2" stroke="currentColor" stroke-width="1.5"/>
  <path d="M6 9l3-3 3 3 3-3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M12 20v-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
  <path d="M8 20h8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
</svg>`;

function buildSkills() {
  const container = document.getElementById('skills-container');
  if (!container || typeof skillsData === 'undefined') return;
  container.innerHTML = '';

  skillsData.forEach(cat => {
    const card = document.createElement('div');
    card.className = 'skill-category-card card-glass reveal';

    const title = document.createElement('h3');
    title.className = 'skill-category-title';
    title.innerHTML = `<i class="fas fa-${cat.icon}" aria-hidden="true"></i>${cat.category}`;
    card.appendChild(title);

    cat.skills.forEach(skill => {
      const { label, cls } = levelLabel(skill.level);
      const isUML = skill.iconClass === 'skill-icon-uml';
      const iconHtml = isUML
        ? UML_SVG
        : `<i class="${skill.iconClass}" aria-hidden="true" title="${skill.name}"></i>`;

      const item = document.createElement('div');
      item.className = 'skill-item';
      item.setAttribute('data-tooltip', skill.usedIn ? `Utilisé dans : ${skill.usedIn}` : '');

      item.innerHTML = `
        <div class="skill-header">
          <div class="skill-name-wrap">
            ${iconHtml}
            <span class="skill-name">${skill.name}</span>
          </div>
          <span class="skill-level-badge ${cls}">${label}</span>
        </div>
        <div class="skill-bar-track" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" aria-label="${skill.name} – ${label}">
          <div class="skill-bar-fill ${cls}-bar" data-level="${skill.level}"></div>
        </div>
        ${skill.usedIn ? `<div class="skill-tooltip"><i class="fas fa-folder-open" aria-hidden="true"></i> ${skill.usedIn}</div>` : ''}
      `;
      card.appendChild(item);
    });

    container.appendChild(card);
  });
}

/* ══════════════════════════════════════════
   7. ANIMATIONS D'APPARITION
══════════════════════════════════════════ */
(function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });

  function observeAll() {
    document.querySelectorAll(
      '.reveal, .reveal-left, .reveal-right, .timeline-item, .project-card'
    ).forEach(el => obs.observe(el));
  }

  window.addEventListener('load', observeAll);
  document.addEventListener('DOMContentLoaded', () => setTimeout(observeAll, 80));
})();

/* ══════════════════════════════════════════
   8. BARRES DE PROGRESSION — rejouées à CHAQUE chargement
      (aucun cache localStorage)
══════════════════════════════════════════ */
(function initSkillBars() {
  const skillsSection = document.getElementById('skills');
  if (!skillsSection) return;

  // `animated` = false à chaque chargement de page → toujours rejoué
  let animated = false;

  const obs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting && !animated) {
      animated = true;
      animateBars();
    }
  }, { threshold: 0.1 });

  obs.observe(skillsSection);

  function animateBars() {
    document.querySelectorAll('.skill-bar-fill').forEach((bar, i) => {
      const level = parseInt(bar.dataset.level, 10) || 0;
      const track = bar.closest('.skill-bar-track');

      setTimeout(() => {
        bar.style.width = level + '%';
        if (track) track.setAttribute('aria-valuenow', level);
      }, i * 55);
    });
  }
})();

/* ══════════════════════════════════════════
   9. GÉNÉRATION DES PROJETS
      Placeholder soigné avec nom + techs
══════════════════════════════════════════ */
function buildProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid || typeof projectsData === 'undefined') return;
  grid.innerHTML = '';

  projectsData.forEach((project, idx) => {
    const card = document.createElement('article');
    card.className = 'project-card card-glass';
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `Voir le projet ${project.title}`);
    card.style.transitionDelay = `${idx * 0.08}s`;

    // Image principale ou placeholder soigné
    const hasImages = project.images && project.images.length > 0;
    const techList = (project.cardTechnologies || project.technologies || [])
      .map(t => `<span>${t}</span>`).join('');

    const thumbHtml = hasImages
      ? `<img src="${encodeProjectPath(project.images[0])}"
              alt="Aperçu de ${project.title}"
              loading="lazy"
              onerror="this.parentNode.innerHTML=buildPlaceholder('${project.title.replace(/'/g, "\\'")}','${(project.cardTechnologies||[]).join(',')}');">`
      : buildPlaceholderHTML(project.title, project.cardTechnologies || []);

    const statusClass = project.status === 'En cours' ? 'badge-ongoing' : 'badge-done';
    const techBadges  = (project.cardTechnologies || project.technologies || [])
      .map(t => `<span class="tech-badge">${t}</span>`).join('');

    card.innerHTML = `
      <div class="project-thumb">
        ${thumbHtml}
        <span class="project-status-badge ${statusClass}">${project.status}</span>
      </div>
      <div class="project-body">
        <p class="project-type-label">${project.type}</p>
        <h3 class="project-title">${project.title}</h3>
        <p class="project-desc">${project.shortDescription}</p>
        <div class="tech-badges">${techBadges}</div>
        <div class="project-more">
          <i class="fas fa-arrow-right" aria-hidden="true"></i>Voir les détails
        </div>
      </div>
    `;

    function open() { showProjectModal(project); }
    card.addEventListener('click', open);
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); }
    });
    grid.appendChild(card);
  });

  // Observer les cartes
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.08 });
  grid.querySelectorAll('.project-card').forEach(c => obs.observe(c));
}

/** Placeholder soigné : dégradé + nom + techs */
function buildPlaceholderHTML(title, techs) {
  const list = techs.map(t => `<span>${t}</span>`).join('');
  return `<div class="project-thumb-placeholder" aria-label="Aperçu du projet ${title}">
    <div class="placeholder-icon"><i class="fas fa-layer-group" aria-hidden="true"></i></div>
    <div class="placeholder-title">${title}</div>
    <div class="placeholder-techs">${list}</div>
  </div>`;
}

// Version appelable depuis onerror (inline)
window.buildPlaceholder = function(title, techsStr) {
  const techs = techsStr ? techsStr.split(',') : [];
  return buildPlaceholderHTML(title, techs);
};

function encodeProjectPath(path) {
  return path.split('/').map(s => encodeURIComponent(s)).join('/');
}

/* ══════════════════════════════════════════
   10. MODALE PROJET — 4 blocs + carrousel
══════════════════════════════════════════ */
(function initModal() {
  const overlay  = document.getElementById('project-modal');
  const closeBtn = document.getElementById('modal-close-btn');
  const track    = document.getElementById('carousel-track');
  const dots     = document.getElementById('carousel-dots');
  const counter  = document.getElementById('carousel-counter');
  const prevBtn  = document.getElementById('carousel-prev');
  const nextBtn  = document.getElementById('carousel-next');

  if (!overlay) return;

  let currentIdx = 0, totalSlides = 0, touchStartX = 0, lastFocused = null;

  function closeModal() {
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastFocused) lastFocused.focus();
  }

  closeBtn && closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });

  document.addEventListener('keydown', e => {
    if (!overlay.classList.contains('open')) return;
    if (e.key === 'Escape')     closeModal();
    if (e.key === 'ArrowLeft')  navigate(-1);
    if (e.key === 'ArrowRight') navigate(1);
  });

  function navigate(dir) {
    if (totalSlides <= 1) return;
    currentIdx = (currentIdx + dir + totalSlides) % totalSlides;
    updateCarousel();
    loadAllSlideImages();
  }

  function updateCarousel() {
    if (track) track.style.transform = `translateX(-${currentIdx * 100}%)`;
    if (counter) counter.textContent = `${currentIdx + 1} / ${totalSlides}`;
    if (dots) dots.querySelectorAll('.carousel-dot').forEach((d, i) =>
      d.classList.toggle('active', i === currentIdx));
  }

  function loadAllSlideImages() {
    track && track.querySelectorAll('img[data-src]').forEach(img => {
      img.src = img.dataset.src;
      img.removeAttribute('data-src');
    });
  }

  prevBtn && prevBtn.addEventListener('click', () => navigate(-1));
  nextBtn && nextBtn.addEventListener('click', () => navigate(1));

  if (track) {
    track.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
    track.addEventListener('touchend',   e => {
      const delta = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(delta) > 48) navigate(delta > 0 ? 1 : -1);
    }, { passive: true });
  }

  window.showProjectModal = function(project) {
    lastFocused = document.activeElement;

    // ── Carrousel ──
    currentIdx  = 0;
    totalSlides = project.images && project.images.length > 0 ? project.images.length : 1;

    if (track) {
      track.innerHTML = '';
      if (!project.images || project.images.length === 0) {
        const slide = document.createElement('div');
        slide.className = 'carousel-slide';
        slide.innerHTML = `
          <div class="carousel-placeholder">
            <i class="fas fa-layer-group" aria-hidden="true"></i>
            <p>Images du projet à venir</p>
          </div>`;
        track.appendChild(slide);
      } else {
        project.images.forEach((imgPath, i) => {
          const slide = document.createElement('div');
          slide.className = 'carousel-slide';
          const img = document.createElement('img');
          img.alt = `${project.title} – capture ${i + 1}`;
          if (i === 0) { img.src = encodeProjectPath(imgPath); }
          else { img.dataset.src = encodeProjectPath(imgPath); img.setAttribute('loading', 'lazy'); }
          slide.appendChild(img);
          track.appendChild(slide);
        });
      }
    }

    // Boutons nav
    if (prevBtn && nextBtn) {
      prevBtn.style.display = totalSlides > 1 ? '' : 'none';
      nextBtn.style.display = totalSlides > 1 ? '' : 'none';
    }
    if (counter) { counter.textContent = `1 / ${totalSlides}`; counter.style.display = totalSlides > 1 ? '' : 'none'; }

    if (dots) {
      dots.innerHTML = '';
      if (totalSlides > 1) {
        for (let i = 0; i < totalSlides; i++) {
          const dot = document.createElement('button');
          dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
          dot.setAttribute('aria-label', `Diapositive ${i + 1}`);
          dot.addEventListener('click', () => { currentIdx = i; updateCarousel(); });
          dots.appendChild(dot);
        }
      }
    }
    updateCarousel();

    // ── 4 blocs de contenu ──
    const titleEl  = document.getElementById('modal-title');
    const metaEl   = document.getElementById('modal-meta');
    const ctxEl    = document.getElementById('modal-context');
    const roleEl   = document.getElementById('modal-role');
    const featEl   = document.getElementById('modal-features');
    const techEl   = document.getElementById('modal-tech-badges');
    const ghBtn    = document.getElementById('modal-github-btn');

    if (titleEl) titleEl.textContent = project.title;

    if (metaEl) {
      const sc = project.status === 'En cours' ? 'modal-badge-status-ongoing' : 'modal-badge-status-done';
      metaEl.innerHTML = `
        <span class="modal-badge modal-badge-type">${project.type}</span>
        <span class="modal-badge ${sc}">${project.status}</span>`;
    }

    if (ctxEl)  ctxEl.textContent  = project.context  || '';
    if (roleEl) roleEl.textContent = project.role || '';

    if (featEl) {
      featEl.innerHTML = (project.features || []).map(f => `
        <div class="modal-keypoint">
          <i class="fas fa-check-circle" aria-hidden="true"></i>
          <span>${f}</span>
        </div>`).join('');
    }

    if (techEl) {
      techEl.innerHTML = (project.technologies || [])
        .map(t => `<span class="tech-badge">${t}</span>`).join('');
    }

    if (ghBtn) {
      if (project.githubUrl && project.githubUrl.trim() !== '') {
        ghBtn.href = project.githubUrl;
        ghBtn.style.display = '';
      } else {
        ghBtn.style.display = 'none';
      }
    }

    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    setTimeout(() => closeBtn && closeBtn.focus(), 50);
  };
})();

/* ══════════════════════════════════════════
   11. HALO LUMINEUX SOURIS (desktop uniquement)
══════════════════════════════════════════ */
(function initMouseHalo() {
  // Ne rien faire sur mobile / si prefers-reduced-motion
  if (window.matchMedia('(max-width: 768px)').matches) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const halo = document.createElement('div');
  halo.id = 'mouse-halo';
  halo.setAttribute('aria-hidden', 'true');
  document.body.appendChild(halo);

  let mx = -300, my = -300;
  let cx = -300, cy = -300;
  let raf;

  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; }, { passive: true });

  function loop() {
    // Lerp pour un suivi doux
    cx += (mx - cx) * 0.1;
    cy += (my - cy) * 0.1;
    halo.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
    raf = requestAnimationFrame(loop);
  }
  loop();

  // Pause quand la fenêtre est cachée
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) cancelAnimationFrame(raf);
    else loop();
  });
})();

/* ══════════════════════════════════════════
   INIT AU CHARGEMENT
══════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  buildSkills();
  buildProjects();
});
