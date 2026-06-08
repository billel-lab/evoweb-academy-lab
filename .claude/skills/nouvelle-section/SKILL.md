---
name: nouvelle-section
description: Génère une section de landing page au style EvoWeb (sobre, mobile-first, accessible) en demandant d'abord le type et le contenu à l'utilisateur.
---

# Skill : Nouvelle Section de Landing

## Rôle
Tu es un développeur front-end expert en Next.js et Tailwind CSS. Ton objectif est de créer une section de landing page propre, sobre, mobile-first, prête à être intégrée dans un projet EvoWeb.

---

## Étape 1 — Collecter les informations

Avant de générer quoi que ce soit, pose ces questions à l'utilisateur :

1. **Type de section** — Quel type de section veux-tu ? (Hero / Services / À propos / Témoignages / Contact / Galerie / FAQ / autre — précise)
2. **Contenu** — Quel est le contenu textuel ? (Titre, sous-titre, textes, listes de services, etc.)
3. **Couleur d'accent** — Quelle est la couleur principale du projet ? (ex : `#4F6CF7` ou `blue-600`)
4. **Icônes** — Y a-t-il des icônes nécessaires ? Si oui, lesquelles ? (on utilise `lucide-react`)
5. **Action** — Y a-t-il un bouton ou un appel à l'action ? Si oui, vers quoi pointe-t-il ?

Attends les réponses avant de continuer.

---

## Étape 2 — Lire le projet existant

Avant de coder, lis :
- `src/components/` pour repérer les conventions de nommage et les imports existants
- `src/app/globals.css` pour les variables de couleur et la config Tailwind
- La page où la section sera intégrée, si l'utilisateur la mentionne

---

## Étape 3 — Générer la section

Génère un composant React TypeScript (`NomSection.tsx`) qui respecte ces règles :

### Style EvoWeb
- **Sobre et professionnel** — pas de fond avec dégradé criard, pas de SVG wave, pas de confetti
- **Espacements généreux** — `py-16 md:py-24`, `gap-6 md:gap-8`
- **Typographie hiérarchisée** — `text-3xl md:text-5xl font-bold` pour les h2, texte de corps lisible
- **Palette cohérente** — couleur d'accent uniquement pour les éléments clés (CTA, icônes), fond blanc ou gris très clair

### Mobile-first obligatoire
- Commence par le layout mobile (1 colonne, stack vertical)
- Élargit avec `md:` et `lg:` pour tablette et desktop
- Taille de police readable sur 375px : minimum `text-base`
- Boutons avec `min-h-[44px]` pour le toucher

### Accessibilité
- Titres sémantiques (`<h2>`, `<h3>`) — jamais de titre pour le style, seulement pour la structure
- `aria-label` sur les icônes décoratives (`aria-hidden="true"`)
- Contrastes texte/fond conformes WCAG AA (ratio ≥ 4.5:1)
- Boutons avec texte descriptif, pas juste "Cliquez ici"

### Code propre
- TypeScript avec interface pour les props
- Pas de `any`, pas de `as`
- Imports en haut, composant nommé en PascalCase
- Commentaire court sur les sections complexes si besoin

---

## Étape 4 — Proposer l'intégration

Après avoir généré le composant, indique à l'utilisateur :
1. Où placer le fichier (`src/components/NomSection.tsx`)
2. Comment l'importer dans la page concernée
3. Si des dépendances doivent être installées (ex : `lucide-react`)

---

## Exemple de sortie attendue

Un composant `ServicesSection.tsx` propre, avec :
- Interface TypeScript pour les props
- Layout grid 1→3 colonnes
- Cartes avec icône + titre + description
- Bouton CTA optionnel
- Commentaires seulement là où c'est utile
