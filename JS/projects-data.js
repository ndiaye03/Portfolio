/**
 * JS/projects-data.js
 * ─────────────────────────────────────────────────────────────
 * Données des projets du portfolio de Papa Aly Ndiaye.
 * Pour ajouter un projet : copier un objet, modifier ses champs,
 * ajouter les images dans le bon sous-dossier de IMAGES/.
 * Pour retirer un projet : supprimer l'objet correspondant.
 * ─────────────────────────────────────────────────────────────
 */

const projectsData = [
  {
    id: "stockpro",
    title: "StockPro",
    shortDescription: "Logiciel de gestion de stock multi-rôles pour commerçants.",
    description: `StockPro est une application web complète destinée aux commerçants souhaitant gérer leur activité de manière structurée.
L'application repose sur une architecture découplée : une API RESTful développée avec Laravel côté serveur, et une interface utilisateur réactive construite avec React et Vite.
Trois rôles distincts sont disponibles : administrateur, commerçant et client. Chaque rôle dispose de son propre espace fonctionnel.
Les principales fonctionnalités incluent la gestion des produits, le suivi des inventaires, l'enregistrement des ventes, les alertes automatiques en cas de stock faible, et la génération de reçus imprimables.
Le stock est mis à jour automatiquement à chaque transaction de vente, garantissant une cohérence des données en temps réel.`,
    keyPoints: [
      "Architecture découplée : API Laravel + interface React/Vite",
      "Gestion multi-rôles : administrateur, commerçant, client",
      "Alertes automatiques de stock faible",
      "Reçus imprimables générés côté client",
      "Mise à jour du stock en temps réel à chaque vente"
    ],
    technologies: ["Laravel", "React", "Vite", "PHP", "MySQL"],
    type: "Personnel",
    status: "En cours",
    githubUrl: "",
    // Dossier vide → le carrousel affiche un visuel de remplacement
    images: []
  },
  {
    id: "sigos-vcn",
    title: "SIGOS-VCN",
    shortDescription: "Système de gestion de l'occupation des espaces du CROUS-T.",
    description: `SIGOS-VCN est un système d'information développé en groupe dans le cadre d'un projet académique pour le CROUS de Thiès (CROUS-T).
Le projet a débuté par une enquête de terrain auprès des agents et responsables du CROUS-T, suivie d'une phase de modélisation UML comprenant 11 acteurs et 4 modules fonctionnels (réservation, occupation, maintenance, administration).
L'application suit une architecture MVC, développée avec Flask (Python) et Jinja2 pour le rendu côté serveur, avec une base de données SQLite.
Les fonctionnalités couvrent la gestion des réservations d'espaces, le suivi des occupations, les notifications, l'upload de photos d'intervention et une simulation de paiement en ligne.
Le développement collaboratif a été géré sous Git (branches de fonctionnalités, résolution de conflits).`,
    keyPoints: [
      "Enquête de terrain préalable à la conception",
      "Modélisation UML : 11 acteurs, 4 modules, cas d'utilisation détaillés",
      "Architecture MVC avec Flask, Jinja2, SQLite",
      "Simulation de paiement en ligne intégrée",
      "Collaboration Git avec gestion de branches et de conflits"
    ],
    technologies: ["Flask", "Python", "Jinja2", "SQLite", "Git"],
    type: "Académique",
    status: "Terminé",
    githubUrl: "",
    // Images réelles du projet – chemins relatifs depuis la racine du site
    images: [
      "IMAGES/SIGOS/WhatsApp Image 2026-11-14 at 20.38.05.jpeg",
      "IMAGES/SIGOS/WhatsApp Image 2026-11-14 at 20.38.58.jpeg",
      "IMAGES/SIGOS/WhatsApp Image 2026-11-14 at 20.39.26.jpeg"
    ]
  },
  {
    id: "java-edt",
    title: "Gestion des salles et emplois du temps",
    shortDescription: "Optimisation de l'occupation des salles et prévention des conflits d'horaires.",
    description: `Ce projet académique vise à résoudre le problème de la gestion des emplois du temps et de l'affectation des salles au sein d'un établissement universitaire.
L'application desktop, développée en Java avec l'interface graphique JavaFX, permet de planifier les cours, d'affecter automatiquement les salles disponibles et de détecter les conflits d'horaires entre classes ou enseignants.
L'accent a été mis sur la robustesse de la logique métier et la clarté de l'interface utilisateur pour des utilisateurs non techniques.`,
    keyPoints: [
      "Application desktop Java avec interface JavaFX",
      "Affectation automatique des salles disponibles",
      "Détection et prévention des conflits d'horaires",
      "Visualisation des plannings par classe, enseignant ou salle"
    ],
    technologies: ["Java", "JavaFX"],
    type: "Académique",
    status: "Terminé",
    githubUrl: "",
    images: [
      "IMAGES/JAVA/WhatsApp Image 2026-11-14 at 21.18.01.jpeg",
      "IMAGES/JAVA/WhatsApp Image 2026-11-14 at 21.18.29.jpeg",
      "IMAGES/JAVA/WhatsApp Image 2026-11-14 at 21.22.31.jpeg",
      "IMAGES/JAVA/WhatsApp Image 2026-11-14 at 21.23.08.jpeg"
    ]
  },
  {
    id: "bibliotheque",
    title: "Gestion des prêts – Bibliothèque universitaire",
    shortDescription: "Suivi des prêts d'ouvrages d'une bibliothèque universitaire, réalisé avec Google Sheets et AppSheet.",
    description: `Ce projet académique consiste en la mise en place d'un outil de gestion des prêts de livres pour une bibliothèque universitaire, sans développement de code traditionnel.
La solution repose sur Google Sheets comme base de données structurée (liste des ouvrages, adhérents, prêts en cours) et AppSheet comme interface applicative no-code, offrant une vue métier adaptée aux agents de la bibliothèque.
L'outil permet de suivre les emprunts et retours, de vérifier la disponibilité des ouvrages et de consulter l'historique des transactions.`,
    keyPoints: [
      "Solution no-code : Google Sheets + AppSheet",
      "Suivi des prêts et retours d'ouvrages",
      "Vérification de la disponibilité en temps réel",
      "Interface adaptée aux agents non-développeurs"
    ],
    technologies: ["Google Sheets", "AppSheet"],
    type: "Académique",
    status: "Terminé",
    githubUrl: "",
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
    shortDescription: "Prototype de système de vote en ligne sécurisé.",
    description: `VoteNow est un prototype de plateforme de vote en ligne développé uniquement avec les technologies web natives : HTML5, CSS3 et JavaScript pur, sans aucun framework ni bibliothèque externe.
Ce projet personnel a été réalisé pour explorer la conception d'une interface de vote claire, accessible et responsive.
Il propose la création de scrutins, le recueil de votes par bulletin secret, et l'affichage des résultats sous forme visuelle.`,
    keyPoints: [
      "Zéro dépendance : HTML5, CSS3, JavaScript natif",
      "Interface responsive et accessible",
      "Création de scrutins et recueil de votes",
      "Affichage graphique des résultats"
    ],
    technologies: ["HTML5", "CSS3", "JavaScript"],
    type: "Personnel",
    status: "Terminé",
    githubUrl: "",
    // Pas d'images disponibles pour ce projet
    images: []
  }
];
