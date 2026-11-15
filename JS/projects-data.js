/**
 * JS/projects-data.js
 * ─────────────────────────────────────────────────────────────
 * Données des projets du portfolio de Papa Aly Ndiaye.
 * Structure de la modale : context, role, features, technologies.
 * ─────────────────────────────────────────────────────────────
 */

const projectsData = [
  {
    id: "stockpro",
    title: "StockPro",
    shortDescription: "Logiciel de gestion de stock multi-rôles pour commerçants.",
    // Badges technologies affichés sur la carte
    cardTechnologies: ["Laravel", "React", "Vite"],
    // Toutes les technologies pour la modale
    technologies: ["Laravel", "React", "Vite", "PHP", "MySQL"],
    type: "Personnel",
    status: "En cours",
    githubUrl: "",
    // Blocs de la modale
    context: "StockPro est né du constat que de nombreux commerçants gèrent encore leurs stocks sur papier ou sur des tableurs non adaptés. L'objectif est de proposer une solution web accessible et multi-rôles.",
    role: "Conception de l'architecture découplée (API Laravel + front React/Vite), développement des endpoints REST, implémentation des règles métier côté serveur et de l'interface utilisateur côté client.",
    features: [
      "Gestion multi-rôles : administrateur, commerçant, client",
      "Catalogue produits avec gestion des catégories",
      "Suivi des inventaires et alertes automatiques de stock faible",
      "Enregistrement des ventes, mise à jour du stock en temps réel",
      "Génération de reçus imprimables"
    ],
    images: [
      "IMAGES/STOCKPRO/WhatsApp Image 2026-11-15 at 14.16.16.jpeg",
      "IMAGES/STOCKPRO/WhatsApp Image 2026-11-15 at 14.17.08.jpeg"
    ]
  },
  {
    id: "sigos-vcn",
    title: "SIGOS-VCN",
    shortDescription: "Système de gestion de l'occupation des espaces du CROUS-T.",
    cardTechnologies: ["Flask", "Jinja2", "SQLite"],
    technologies: ["Flask", "Python", "Jinja2", "SQLite", "Git"],
    type: "Académique",
    status: "Terminé",
    githubUrl: "",
    context: "Projet de groupe académique commandé par le CROUS de Thiès. Après une enquête de terrain auprès des agents et responsables, l'équipe a produit une modélisation UML complète : 11 acteurs, 4 modules fonctionnels (réservation, occupation, maintenance, administration).",
    role: "Participation à l'enquête de terrain, modélisation UML des cas d'utilisation, développement de modules Flask (MVC), intégration de la simulation de paiement et gestion des branches Git.",
    features: [
      "Réservation et suivi de l'occupation des espaces",
      "Notifications et upload de photos d'intervention",
      "Simulation de paiement en ligne",
      "Architecture MVC Flask + Jinja2 + SQLite",
      "Collaboration Git : branches, résolution de conflits"
    ],
    images: [
      "IMAGES/SIGOS/WhatsApp Image 2026-11-14 at 20.38.05.jpeg",
      "IMAGES/SIGOS/WhatsApp Image 2026-11-14 at 20.38.58.jpeg",
      "IMAGES/SIGOS/WhatsApp Image 2026-11-14 at 20.39.26.jpeg"
    ]
  },
  {
    id: "java-edt",
    title: "Gestion des salles & emplois du temps",
    shortDescription: "Optimisation de l'occupation des salles et prévention des conflits d'horaires.",
    cardTechnologies: ["Java", "JavaFX"],
    technologies: ["Java", "JavaFX"],
    type: "Académique",
    status: "Terminé",
    githubUrl: "",
    context: "Projet académique visant à résoudre le problème récurrent des conflits d'horaires et d'affectation des salles dans un établissement universitaire.",
    role: "Conception de la logique métier (algorithme d'affectation automatique, détection de conflits) et développement de l'interface graphique JavaFX.",
    features: [
      "Application desktop Java avec interface JavaFX",
      "Affectation automatique des salles disponibles",
      "Détection et prévention des conflits d'horaires",
      "Visualisation des plannings par classe, enseignant ou salle"
    ],
    images: [
      "IMAGES/JAVA/WhatsApp Image 2026-11-14 at 21.18.01.jpeg",
      "IMAGES/JAVA/WhatsApp Image 2026-11-14 at 21.18.29.jpeg",
      "IMAGES/JAVA/WhatsApp Image 2026-11-14 at 21.22.31.jpeg",
      "IMAGES/JAVA/WhatsApp Image 2026-11-14 at 21.23.08.jpeg"
    ]
  },
  {
    id: "bibliotheque",
    title: "Gestion des prêts – Bibliothèque",
    shortDescription: "Suivi des prêts d'une bibliothèque universitaire avec Google Sheets et AppSheet.",
    cardTechnologies: ["Google Sheets", "AppSheet"],
    technologies: ["Google Sheets", "AppSheet"],
    type: "Académique",
    status: "Terminé",
    githubUrl: "",
    context: "Projet académique consistant à outiller une bibliothèque universitaire sans développement de code traditionnel, en s'appuyant sur les outils no-code de l'écosystème Google.",
    role: "Structuration des données dans Google Sheets (ouvrages, adhérents, prêts), configuration des vues et règles AppSheet, tests fonctionnels avec les agents de la bibliothèque.",
    features: [
      "Base de données structurée dans Google Sheets",
      "Interface applicative no-code via AppSheet",
      "Suivi des emprunts et retours d'ouvrages",
      "Vérification de la disponibilité en temps réel",
      "Consultation de l'historique des transactions"
    ],
    images: [
      "IMAGES/BIBLIOTHEQUES/WhatsApp Image 2026-11-14 at 20.31.05.jpeg",
      "IMAGES/BIBLIOTHEQUES/WhatsApp Image 2026-11-14 at 20.31.16.jpeg",
      "IMAGES/BIBLIOTHEQUES/WhatsApp Image 2026-11-14 at 20.31.25.jpeg",
      "IMAGES/BIBLIOTHEQUES/WhatsApp Image 2026-11-14 at 20.31.47.jpeg",
      "IMAGES/BIBLIOTHEQUES/WhatsApp Image 2026-11-14 at 20.32.01.jpeg"
    ]
  },
  {
    id: "votenow",
    title: "VoteNow",
    shortDescription: "Prototype de plateforme de vote en ligne.",
    cardTechnologies: ["HTML5", "CSS3", "JavaScript"],
    technologies: ["HTML5", "CSS3", "JavaScript"],
    type: "Personnel",
    status: "Terminé",
    githubUrl: "",
    context: "Projet personnel explorant la conception d'une interface de vote en ligne, réalisé uniquement avec les technologies web natives (HTML5, CSS3, JavaScript pur), sans aucun framework.",
    role: "Conception de l'interface, architecture du code JavaScript (création de scrutins, recueil des votes, affichage des résultats).",
    features: [
      "Zéro dépendance : HTML5, CSS3, JavaScript natif",
      "Création de scrutins personnalisables",
      "Recueil de votes et affichage graphique des résultats",
      "Interface responsive et accessible"
    ],
    images: [
      "IMAGES/VOTENOW/WhatsApp Image 2026-11-15 at 14.07.37.jpeg",
      "IMAGES/VOTENOW/WhatsApp Image 2026-11-15 at 14.08.48.jpeg",
      "IMAGES/VOTENOW/WhatsApp Image 2026-11-15 at 14.10.22.jpeg"
    ]
  }
];
