# Portfolio – Papa Aly Ndiaye

Portfolio personnel développé en HTML5, CSS3 et JavaScript pur (aucun framework).

## Ouvrir le site

Double-cliquez sur **`index.html`** — aucun serveur requis.

---

## Structure des fichiers

```
Portfolio/
├── index.html                  ← Point d'entrée
├── cv_papa_aly_ndiaye.pdf      ← CV téléchargeable (à placer ici)
├── CSS/
│   ├── style.css               ← Styles principaux (variables, composants)
│   └── responsive.css          ← Media queries mobile-first
├── JS/
│   ├── main.js                 ← Logique principale (navbar, modale, animations…)
│   ├── projects-data.js        ← ⚙️ Données des projets
│   └── skills-data.js          ← ⚙️ Niveaux de compétences
└── IMAGES/
    ├── profil.jpeg             ← Photo de profil
    ├── SIGOS/                  ← Captures du projet SIGOS-VCN
    ├── JAVA/                   ← Captures du projet Emplois du temps
    └── BIBLIOTHEQUES/          ← Captures du projet Bibliothèque
```

---

## ➕ Ajouter un projet

1. Ouvrez `JS/projects-data.js`.
2. Copiez un objet existant dans le tableau `projectsData` et modifiez ses champs :

```js
{
  id: "mon-projet",                      // identifiant unique
  title: "Titre du projet",
  shortDescription: "Résumé court.",
  description: `Description longue...`, // supporte les sauts de ligne
  keyPoints: ["Point 1", "Point 2"],
  technologies: ["React", "Node.js"],
  type: "Personnel",                     // ou "Académique"
  status: "En cours",                    // ou "Terminé"
  githubUrl: "https://github.com/...",   // laisser "" pour ne pas afficher le bouton
  images: [
    "IMAGES/MON_DOSSIER/capture1.jpg",
    "IMAGES/MON_DOSSIER/capture2.jpg"
  ]
}
```

3. Placez vos images dans `IMAGES/MON_DOSSIER/`.
4. Rechargez `index.html` — la carte et la modale apparaissent automatiquement.

---

## 📊 Modifier un niveau de compétence

1. Ouvrez `JS/skills-data.js`.
2. Repérez la compétence à modifier et changez sa valeur `level` (de 0 à 100) :

```js
{
  name: "React",
  level: 60,  // ← changer ce nombre
  ...
}
```

3. Rechargez `index.html` — la barre se remplit selon le nouveau niveau.

> Les niveaux sont tous commentés `// niveaux indicatifs à ajuster honnêtement`.

---

## 📄 CV téléchargeable

Placez votre fichier CV nommé exactement **`cv_papa_aly_ndiaye.pdf`** à la racine du dossier Portfolio (à côté de `index.html`). Le bouton « Télécharger mon CV » pointera automatiquement vers ce fichier.

---

## 🌙 Thème clair / sombre

Le bouton en haut à droite de la navbar bascule le thème. La préférence est mémorisée dans le navigateur (localStorage).

---

## 🛠️ Dépendances CDN (connexion internet requise au premier chargement)

| Ressource       | Usage                              |
|-----------------|------------------------------------|
| Google Fonts    | Police Poppins                     |
| Font Awesome 6  | Icônes générales et footer         |
| Devicon 2.15    | Icônes des technologies (skills)   |

Une fois en cache, le site fonctionne hors ligne.
