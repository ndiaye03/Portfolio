/**
 * JS/main.js
 * ─────────────────────────────────────────────────────────────
 * Script principal du portfolio de Papa Aly Ndiaye.
 * Modules :
 *   1. Thème clair / sombre
 *   2. Barre de lecture
 *   3. Navbar scrollspy + burger
 *   4. Effet machine-à-écrire (typewriter)
 *   5. Génération des cartes de compétences
 *   6. Animations d'apparition (IntersectionObserver)
 *   7. Barres de progression compétences
 *   8. Génération des cartes projets
 *   9. Modale projet (carrousel, clavier, touch)
 * ─────────────────────────────────────────────────────────────
 */

/* ══════════════════════════════════════════
   1. THÈME CLAIR / SOMBRE
══════════════════════════════════════════ */
(function initTheme() {
  // Lire la préférence sauvegardée (ou la préférence système)
  const saved = localStorage.getItem('portfolio-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = saved || (prefersDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', theme);

  const btn = document.getElementById('theme-toggle');
  if (!btn) return;

  function updateIcon() {
    const current = document.documentElement.getAttribute('data-theme');
    btn.innerHTML = current === 'dark'
      ? '<i class="fas fa-sun" aria-hidden="true"></i>'
      : '<i class="fas fa-moon" aria-hidden="true"></i>';
    btn.setAttribute('aria-label', current === 'dark' ? 'Passer au thème clair' : 'Passer au thème sombre');
  }

  updateIcon();

  btn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
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

  function updateProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = pct.toFixed(1) + '%';
  }

  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();
})();

/* ══════════════════════════════════════════
   3. NAVBAR — Scrollspy + scroll + burger
══════════════════════════════════════════ */
(function initNavbar() {
  const navbar   = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-links a, .nav-mobile a');
  const burger   = document.querySelector('.nav-burger');
  const mobileMenu = document.querySelector('.nav-mobile');
  const sections = document.querySelectorAll('section[id]');

  // Scroll : fond renforcé
  function onScroll() {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    updateActiveLink();
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Scrollspy
  function updateActiveLink() {
    let current = '';
    sections.forEach(section => {
      const top = section.getBoundingClientRect().top;
      if (top <= 100) current = section.id;
    });

    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
  }

  // Défilement doux sur clic
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      // Fermer le menu mobile
      if (mobileMenu) {
        mobileMenu.classList.remove('open');
        burger && burger.classList.remove('open');
      }
    });
  });

  // Burger
  if (burger && mobileMenu) {
    burger.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      burger.classList.toggle('open', isOpen);
      burger.setAttribute('aria-expanded', isOpen.toString());
    });
  }
})();

/* ══════════════════════════════════════════
   4. EFFET MACHINE À ÉCRIRE
══════════════════════════════════════════ */
(function initTypewriter() {
  const el = document.querySelector('.typewriter-text');
  if (!el) return;

  const phrases = [
    'Développeur Full-Stack',
    'Passionné par l\'IA',
    'Étudiant en L3 Génie Logiciel',
    'Explorateur de la Data'
  ];

  let pIdx = 0;
  let cIdx = 0;
  let deleting = false;
  const SPEED_TYPE = 70;
  const SPEED_DELETE = 40;
  const PAUSE_END = 1800;
  const PAUSE_START = 400;

  function tick() {
    const phrase = phrases[pIdx];
    if (deleting) {
      el.textContent = phrase.substring(0, cIdx - 1);
      cIdx--;
      if (cIdx === 0) {
        deleting = false;
        pIdx = (pIdx + 1) % phrases.length;
        setTimeout(tick, PAUSE_START);
        return;
      }
      setTimeout(tick, SPEED_DELETE);
    } else {
      el.textContent = phrase.substring(0, cIdx + 1);
      cIdx++;
      if (cIdx === phrase.length) {
        deleting = true;
        setTimeout(tick, PAUSE_END);
        return;
      }
      setTimeout(tick, SPEED_TYPE);
    }
  }

  tick();
})();

/* ══════════════════════════════════════════
   5. GÉNÉRATION DES COMPÉTENCES
══════════════════════════════════════════ */
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
      const item = document.createElement('div');
      item.className = 'skill-item';

      item.innerHTML = `
        <div class="skill-header">
          <div class="skill-name-wrap">
            <i class="${skill.iconClass}" aria-hidden="true" title="${skill.name}"></i>
            <span class="skill-name">${skill.name}</span>
          </div>
          <span class="skill-pct" aria-label="${skill.level} pourcent">0%</span>
        </div>
        <div class="skill-bar-track" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" aria-label="${skill.name}">
          <div class="skill-bar-fill" data-level="${skill.level}"></div>
        </div>
      `;
      card.appendChild(item);
    });

    container.appendChild(card);
  });
}

/* ══════════════════════════════════════════
   6. ANIMATIONS D'APPARITION (IntersectionObserver)
══════════════════════════════════════════ */
(function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.12 });

  // Sera réappliqué après construction du DOM
  function observeAll() {
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .timeline-item, .project-card').forEach(el => {
      observer.observe(el);
    });
  }

  // Après construction complète
  window.addEventListener('load', observeAll);
  document.addEventListener('DOMContentLoaded', () => setTimeout(observeAll, 100));
})();

/* ══════════════════════════════════════════
   7. BARRES DE PROGRESSION — se remplissent à CHAQUE chargement
      (aucun cache localStorage, déclenchées par IntersectionObserver)
══════════════════════════════════════════ */
(function initSkillBars() {
  const skillsSection = document.getElementById('skills');
  if (!skillsSection) return;

  // On ne mémorise rien : animated = false à chaque page load
  let animated = false;

  const obs = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !animated) {
      animated = true;
      animateBars();
    }
  }, { threshold: 0.15 });

  obs.observe(skillsSection);

  function animateBars() {
    const bars = document.querySelectorAll('.skill-bar-fill');
    bars.forEach((bar, i) => {
      const level = parseInt(bar.dataset.level, 10) || 0;
      const pctEl = bar.closest('.skill-item')?.querySelector('.skill-pct');
      const track = bar.closest('.skill-bar-track');

      // Délai en cascade léger
      setTimeout(() => {
        bar.style.width = level + '%';

        if (track) {
          track.setAttribute('aria-valuenow', level);
        }

        // Compteur animé
        if (pctEl) {
          let start = 0;
          const duration = 900;
          const step = 16;
          const increment = level / (duration / step);

          const counter = setInterval(() => {
            start = Math.min(start + increment, level);
            pctEl.textContent = Math.round(start) + '%';
            if (start >= level) clearInterval(counter);
          }, step);
        }
      }, i * 60);
    });
  }
})();

/* ══════════════════════════════════════════
   8. GÉNÉRATION DES PROJETS
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
    // Délai d'apparition en cascade
    card.style.transitionDelay = `${idx * 0.1}s`;

    // Image principale (première du tableau ou placeholder)
    const thumbHtml = project.images.length > 0
      ? `<img src="${encodeProjectPath(project.images[0])}" alt="Aperçu de ${project.title}" loading="lazy">`
      : `<div class="project-thumb-placeholder">
           <i class="fas fa-code" aria-hidden="true"></i>
           <span>Aperçu à venir</span>
         </div>`;

    const statusClass = project.status === 'En cours' ? 'badge-ongoing' : 'badge-done';
    const techBadges = project.technologies.map(t =>
      `<span class="tech-badge">${t}</span>`
    ).join('');

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

    // Ouvrir la modale au clic ou à la touche Entrée
    function openModal() { showProjectModal(project); }
    card.addEventListener('click', openModal);
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal();
      }
    });

    grid.appendChild(card);
  });

  // Re-observer les nouvelles cartes
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.1 });

  grid.querySelectorAll('.project-card').forEach(c => observer.observe(c));
}

/** Encode les espaces dans les chemins de fichiers */
function encodeProjectPath(path) {
  return path.split('/').map(segment => encodeURIComponent(segment)).join('/');
}

/* ══════════════════════════════════════════
   9. MODALE PROJET
══════════════════════════════════════════ */
(function initModal() {
  const overlay    = document.getElementById('project-modal');
  const closeBtn   = document.getElementById('modal-close-btn');
  const track      = document.getElementById('carousel-track');
  const dots       = document.getElementById('carousel-dots');
  const counter    = document.getElementById('carousel-counter');
  const prevBtn    = document.getElementById('carousel-prev');
  const nextBtn    = document.getElementById('carousel-next');
  const modalTitle = document.getElementById('modal-title');
  const modalMeta  = document.getElementById('modal-meta');
  const modalDesc  = document.getElementById('modal-description');
  const modalKeys  = document.getElementById('modal-keypoints');
  const modalTech  = document.getElementById('modal-technologies');
  const modalGh    = document.getElementById('modal-github-btn');
  const modalFootTech = document.getElementById('modal-tech-badges');

  if (!overlay) return;

  let currentIdx = 0;
  let totalSlides = 0;
  let touchStartX = 0;
  let lastFocused = null;

  // Fermeture
  function closeModal() {
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastFocused) lastFocused.focus();
  }

  closeBtn && closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', e => {
    if (e.target === overlay) closeModal();
  });

  // Clavier global
  document.addEventListener('keydown', e => {
    if (!overlay.classList.contains('open')) return;

    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowLeft')  navigate(-1);
    if (e.key === 'ArrowRight') navigate(1);
  });

  // Carrousel
  function navigate(dir) {
    if (totalSlides <= 1) return;
    currentIdx = (currentIdx + dir + totalSlides) % totalSlides;
    updateCarousel();
  }

  function updateCarousel() {
    if (!track) return;
    track.style.transform = `translateX(-${currentIdx * 100}%)`;

    // Compteur
    if (counter) counter.textContent = `${currentIdx + 1} / ${totalSlides}`;

    // Points
    if (dots) {
      dots.querySelectorAll('.carousel-dot').forEach((d, i) => {
        d.classList.toggle('active', i === currentIdx);
      });
    }
  }

  prevBtn && prevBtn.addEventListener('click', () => navigate(-1));
  nextBtn && nextBtn.addEventListener('click', () => navigate(1));

  // Touch / Swipe
  if (track) {
    track.addEventListener('touchstart', e => {
      touchStartX = e.touches[0].clientX;
    }, { passive: true });

    track.addEventListener('touchend', e => {
      const delta = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(delta) > 50) navigate(delta > 0 ? 1 : -1);
    }, { passive: true });
  }

  // Remplissage de la modale
  window.showProjectModal = function(project) {
    lastFocused = document.activeElement;

    // ── Carrousel ──
    currentIdx = 0;
    totalSlides = project.images.length > 0 ? project.images.length : 1;

    if (track) {
      track.innerHTML = '';

      if (project.images.length === 0) {
        // Placeholder
        const slide = document.createElement('div');
        slide.className = 'carousel-slide';
        slide.innerHTML = `
          <div class="carousel-placeholder">
            <i class="fas fa-image" aria-hidden="true"></i>
            <p>Images du projet à venir</p>
          </div>
        `;
        track.appendChild(slide);
      } else {
        project.images.forEach((imgPath, i) => {
          const slide = document.createElement('div');
          slide.className = 'carousel-slide';

          const img = document.createElement('img');
          img.alt = `${project.title} – capture ${i + 1}`;
          // Lazy-loading : charger immédiatement la 1re, différer les autres
          if (i === 0) {
            img.src = encodeProjectPath(imgPath);
          } else {
            img.dataset.src = encodeProjectPath(imgPath);
            img.setAttribute('loading', 'lazy');
          }
          slide.appendChild(img);
          track.appendChild(slide);
        });
      }
    }

    // Charger les images suivantes au moment de la navigation
    function loadLazySlideImages() {
      track && track.querySelectorAll('img[data-src]').forEach(img => {
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
      });
    }

    prevBtn && prevBtn.addEventListener('click', loadLazySlideImages, { once: true });
    nextBtn && nextBtn.addEventListener('click', loadLazySlideImages, { once: true });

    // Afficher/masquer boutons fléchés
    if (prevBtn && nextBtn) {
      const show = totalSlides > 1;
      prevBtn.style.display = show ? '' : 'none';
      nextBtn.style.display = show ? '' : 'none';
    }

    // Compteur
    if (counter) {
      counter.textContent = `1 / ${totalSlides}`;
      counter.style.display = totalSlides > 1 ? '' : 'none';
    }

    // Points indicateurs
    if (dots) {
      dots.innerHTML = '';
      if (totalSlides > 1) {
        for (let i = 0; i < totalSlides; i++) {
          const dot = document.createElement('button');
          dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
          dot.setAttribute('aria-label', `Diapositive ${i + 1}`);
          dot.addEventListener('click', () => {
            currentIdx = i;
            updateCarousel();
          });
          dots.appendChild(dot);
        }
      }
    }

    updateCarousel();

    // ── Métadonnées ──
    if (modalTitle) modalTitle.textContent = project.title;

    if (modalMeta) {
      const statusClass = project.status === 'En cours'
        ? 'modal-badge-status-ongoing'
        : 'modal-badge-status-done';

      modalMeta.innerHTML = `
        <span class="modal-badge modal-badge-type">${project.type}</span>
        <span class="modal-badge ${statusClass}">${project.status}</span>
      `;
    }

    if (modalDesc) modalDesc.textContent = project.description;

    if (modalKeys) {
      modalKeys.innerHTML = project.keyPoints.map(kp => `
        <div class="modal-keypoint">
          <i class="fas fa-check-circle" aria-hidden="true"></i>
          <span>${kp}</span>
        </div>
      `).join('');
    }

    if (modalFootTech) {
      modalFootTech.innerHTML = project.technologies.map(t =>
        `<span class="tech-badge">${t}</span>`
      ).join('');
    }

    // Bouton GitHub (uniquement si lien renseigné)
    if (modalGh) {
      if (project.githubUrl && project.githubUrl.trim() !== '') {
        modalGh.href = project.githubUrl;
        modalGh.style.display = '';
      } else {
        modalGh.style.display = 'none';
      }
    }

    // Ouvrir
    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Focus sur le bouton de fermeture
    setTimeout(() => closeBtn && closeBtn.focus(), 50);
  };
})();

/* ══════════════════════════════════════════
   INIT AU CHARGEMENT
══════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  buildSkills();
  buildProjects();
});
