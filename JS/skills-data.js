/**
 * JS/skills-data.js
 * ─────────────────────────────────────────────────────────────
 * Données des compétences de Papa Aly Ndiaye.
 *
 * Pour modifier un niveau : changer la valeur de `level` (0-100).
 *   0–39  → Notions
 *   40–69 → Intermédiaire
 *   70–100 → Avancé
 *
 * IMPORTANT : les niveaux ci-dessous sont indicatifs à ajuster
 * honnêtement selon votre maîtrise réelle de chaque technologie.
 * ─────────────────────────────────────────────────────────────
 */

const skillsData = [
  {
    category: "Langages",
    icon: "code",
    skills: [
      {
        name: "Python",
        level: 72, // niveaux indicatifs à ajuster honnêtement
        iconClass: "devicon-python-plain colored",
        color: "#3776AB",
        usedIn: "SIGOS-VCN, Flask"
      },
      {
        name: "Java",
        level: 65, // niveaux indicatifs à ajuster honnêtement
        /* Java : devicon-java-plain peut être absent dans certaines versions CDN.
           On utilise devicon-java-original qui est plus fiable. */
        iconClass: "devicon-java-original colored",
        color: "#ED8B00",
        usedIn: "Gestion des salles & emplois du temps"
      },
      {
        name: "PHP",
        level: 68, // niveaux indicatifs à ajuster honnêtement
        iconClass: "devicon-php-plain colored",
        color: "#777BB4",
        usedIn: "StockPro (Laravel)"
      },
      {
        name: "C",
        level: 55, // niveaux indicatifs à ajuster honnêtement
        iconClass: "devicon-c-plain colored",
        color: "#A8B9CC",
        usedIn: "Projets académiques"
      },
      {
        name: "JavaScript",
        level: 70, // niveaux indicatifs à ajuster honnêtement
        iconClass: "devicon-javascript-plain colored",
        color: "#F7DF1E",
        usedIn: "StockPro (React), VoteNow"
      }
    ]
  },
  {
    category: "Développement Web",
    icon: "globe",
    skills: [
      {
        name: "HTML5",
        level: 85, // niveaux indicatifs à ajuster honnêtement
        iconClass: "devicon-html5-plain colored",
        color: "#E34F26",
        usedIn: "VoteNow, Portfolio"
      },
      {
        name: "CSS3",
        level: 80, // niveaux indicatifs à ajuster honnêtement
        iconClass: "devicon-css3-plain colored",
        color: "#1572B6",
        usedIn: "VoteNow, Portfolio"
      },
      {
        name: "React",
        level: 60, // niveaux indicatifs à ajuster honnêtement
        iconClass: "devicon-react-original colored",
        color: "#61DAFB",
        usedIn: "StockPro"
      },
      {
        name: "Tailwind CSS",
        level: 65, // niveaux indicatifs à ajuster honnêtement
        iconClass: "devicon-tailwindcss-plain colored",
        color: "#06B6D4",
        usedIn: "StockPro"
      },
      {
        name: "Laravel",
        level: 65, // niveaux indicatifs à ajuster honnêtement
        iconClass: "devicon-laravel-original colored",
        color: "#FF2D20",
        usedIn: "StockPro"
      },
      {
        name: "Flask",
        level: 70, // niveaux indicatifs à ajuster honnêtement
        iconClass: "devicon-flask-original",
        color: "#14b8a6",
        usedIn: "SIGOS-VCN"
      },
      {
        name: "Jinja2",
        level: 68, // niveaux indicatifs à ajuster honnêtement
        /* Jinja2 n'a pas d'icône Devicon dédiée : on utilise le logo Python */
        iconClass: "devicon-python-plain",
        color: "#B41717",
        usedIn: "SIGOS-VCN"
      }
    ]
  },
  {
    category: "Données & Conception",
    icon: "database",
    skills: [
      {
        name: "SQL",
        level: 70, // niveaux indicatifs à ajuster honnêtement
        /* devicon-azuresqldatabase peut être absent → on utilise postgresql qui est plus stable */
        iconClass: "devicon-postgresql-plain colored",
        color: "#336791",
        usedIn: "StockPro, SIGOS-VCN, Bibliothèque"
      },
      {
        name: "MySQL",
        level: 68, // niveaux indicatifs à ajuster honnêtement
        iconClass: "devicon-mysql-original colored",
        color: "#4479A1",
        usedIn: "StockPro"
      },
      {
        name: "SQLite",
        level: 65, // niveaux indicatifs à ajuster honnêtement
        iconClass: "devicon-sqlite-plain colored",
        color: "#003B57",
        usedIn: "SIGOS-VCN"
      },
      {
        name: "UML",
        level: 72, // niveaux indicatifs à ajuster honnêtement
        /* UML n'a pas d'icône Devicon → on utilise un SVG intégré via data-svg */
        iconClass: "skill-icon-uml",
        color: "#FABD14",
        usedIn: "SIGOS-VCN (11 acteurs, 4 modules)"
      }
    ]
  },
  {
    category: "Outils",
    icon: "tools",
    skills: [
      {
        name: "Git",
        level: 72, // niveaux indicatifs à ajuster honnêtement
        iconClass: "devicon-git-plain colored",
        color: "#F05032",
        usedIn: "SIGOS-VCN, StockPro"
      },
      {
        name: "GitHub",
        level: 72, // niveaux indicatifs à ajuster honnêtement
        iconClass: "devicon-github-original",
        color: "#181717",
        usedIn: "Tous les projets"
      },
      {
        name: "VS Code",
        level: 85, // niveaux indicatifs à ajuster honnêtement
        iconClass: "devicon-vscode-plain colored",
        color: "#007ACC",
        usedIn: "Développement quotidien"
      },
      {
        name: "IntelliJ",
        level: 60, // niveaux indicatifs à ajuster honnêtement
        iconClass: "devicon-intellij-plain colored",
        color: "#FE315D",
        usedIn: "Projets Java"
      },
      {
        name: "Linux",
        level: 58, // niveaux indicatifs à ajuster honnêtement
        iconClass: "devicon-linux-plain colored",
        color: "#FCC624",
        usedIn: "Environnement de développement"
      }
    ]
  }
];
