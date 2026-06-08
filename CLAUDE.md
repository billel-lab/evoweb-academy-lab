# CLAUDE.md — Mon Atelier EvoWeb

<!-- Ce fichier est lu automatiquement par Claude Code quand tu ouvres le projet.
     Prends 5 minutes pour l'adapter à ton projet avant de commencer à coder.
     Les sections avec <!-- adapte ceci --> sont à modifier. -->

---

## 1. Mon projet

<!-- adapte ceci : décris ton projet en 3-4 lignes. Qui est le client ? Quel est l'objectif du site ?
     Exemple : "Vitrine pour Marie, fleuriste à Lyon. Objectif : montrer le portfolio, permettre les commandes
     en ligne, et attirer des clients locaux via le SEO." -->

**Nom du projet :** <!-- ex : marie-fleuriste -->
**Client / contexte :** <!-- ex : Marie Dupont, fleuriste indépendante, Lyon 3e -->
**Objectif principal :** <!-- ex : vitrine + formulaire de contact + galerie photos -->
**URL Vercel :** <!-- ex : marie-fleuriste.vercel.app -->

---

## 2. Stack utilisée

<!-- Garde cette section telle quelle — c'est la stack EvoWeb standard.
     Ajoute ou enlève des éléments si ton projet est différent. -->

- **Framework :** Next.js 15 App Router
- **Langage :** TypeScript
- **Styles :** Tailwind CSS v4
- **Base de données :** Supabase (PostgreSQL + Auth + Storage)
- **Emails :** Resend
- **Déploiement :** Vercel
- **Icônes :** lucide-react

---

## 3. Structure du projet

<!-- adapte ceci si ta structure est différente -->

```
src/
├── app/              ← pages et layouts (App Router)
├── components/       ← composants réutilisables
├── lib/              ← logique métier, helpers, config Supabase
└── styles/           ← globals.css (Tailwind uniquement)
```

---

## 4. Conventions de code

<!-- Ces règles aident Claude à générer du code cohérent avec tes habitudes. -->

- **TypeScript obligatoire** — pas de `any`, pas de `as` pour masquer une erreur
- **Composants réutilisables** dans `/components` — un composant = un fichier
- **Mobile-first** — penser petit écran en premier, puis tablette, puis desktop
- **Nommage :** PascalCase pour les composants (`HeroSection.tsx`), camelCase pour les fonctions
- **Pas de commentaires inutiles** — le code doit se lire comme une phrase claire
- **Variables d'environnement** dans `.env.local`, jamais hardcodées dans le code

---

## 5. Style & design

<!-- adapte ceci : décris la palette et le style attendus -->

**Couleurs :**
- Fond principal : <!-- ex : #ffffff ou #f8f9fa -->
- Couleur d'accent : <!-- ex : #4F6CF7 (bleu EvoWeb) -->
- Texte : <!-- ex : #0d1017 -->

**Style général :** Sobre, professionnel, épuré. Pas de fond surchargé, pas d'animations inutiles.

**Typographie :** Police lisible, hiérarchie claire (h1 > h2 > p).

**Design :** Mobile-first. Chaque section doit être parfaite sur téléphone avant d'être agrandie.

---

## 6. Les règles d'or de l'artisan

<!-- Ne touche pas à cette section — elle s'applique à tous tes projets. -->

### Avant de coder
- **Lis d'abord** — demande à Claude de lire les fichiers existants avant de modifier quoi que ce soit
- **Propose un plan** pour les tâches de plus de 30 minutes : Claude liste les étapes, tu valides, puis il exécute

### Pendant le code
- **Lis chaque réponse de Claude avant d'accepter** — tu es responsable du code, pas Claude
- **Committe souvent** : une feature = un commit. Message clair : `feat: ajout section contact`
- **Teste vraiment** : clique sur chaque bouton, remplis chaque formulaire, passe en mode mobile

### Sécurité
- **Jamais de secrets dans le code** — toutes les clés API vont dans `.env.local`
- **`.env.local` est dans `.gitignore`** — vérifie avant chaque commit
- **Vérifie les permissions Supabase** — Row Level Security activé sur toutes les tables

### Avant de livrer
- Passe le skill `/verifier` sur ton projet
- Teste sur mobile (vrai téléphone si possible)
- Vérifie que la page se charge rapidement
- Relis les textes pour les fautes

---

## 7. Notes personnelles

<!-- adapte ceci : ajoute ici tout ce que Claude doit savoir sur ton projet spécifique.
     Ex : "Les horaires du client sont mardi-samedi 9h-18h."
     Ex : "La page /admin est réservée, ne pas modifier."
     Ex : "Utiliser toujours le rouge #e63946 pour les alertes, c'est la charte du client." -->

<!-- (vide pour l'instant — remplis au fur et à mesure) -->
