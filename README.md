# EvoWeb Academy Lab 🛠️

Bienvenue dans ton atelier de travail ! Ce repo est **ton quartier général de freelance** pendant toute la formation EvoWeb Academy — et au-delà.

---

## C'est quoi ce Lab ?

Le Lab est un repo clonable qui contient :
- un **starter projet** prêt à démarrer (Next.js + Tailwind + Supabase)
- des **skills Claude Code** déjà configurés pour les tâches courantes
- un **agent de relecture design** intégré
- une **bibliothèque de prompts** à copier-coller
- des ressources et un journal de leçons pour progresser vite

Tu vas l'utiliser dès le Module 1 et l'enrichir au fur et à mesure. En Module 8, tu construiras ton propre atelier en partant de ce modèle.

---

## Cloner le Lab

```bash
git clone https://github.com/billel-lab/evoweb-academy-lab.git
cd evoweb-academy-lab
```

---

## Ce que contient le repo

```
evoweb-academy-lab/
│
├── README.md                  ← tu es ici
├── CLAUDE.md                  ← instructions pour Claude Code (à adapter à chaque projet)
├── lessons.md                 ← ton journal de leçons (remplis-le au fil du temps)
├── ressources.md              ← liens utiles curatés
│
├── starter/                   ← projet Next.js de départ (un autre agent gère ça)
│
├── prompts/
│   └── bibliotheque.md        ← prompts prêts à l'emploi pour Claude Code
│
└── .claude/
    ├── skills/
    │   ├── nouvelle-section/  ← génère une section de landing propre
    │   ├── verifier/          ← checklist avant de livrer
    │   └── deployer-aide/     ← guide pas-à-pas pour Vercel
    └── agents/
        └── relecture-design.md ← relecteur design bienveillant
```

---

## Lancer le starter

```bash
cd starter
npm install
npm run dev
```

Ouvre ensuite [http://localhost:3000](http://localhost:3000) dans ton navigateur.

> **Note :** Copie `.env.example` en `.env.local` et remplis tes clés Supabase avant de démarrer.

```bash
cp .env.example .env.local
```

---

## Comment l'utiliser pendant la formation

| Module | Ce que tu fais avec le Lab |
|--------|---------------------------|
| M1 | Cloner, explorer, lancer le starter |
| M2-M3 | Utiliser les prompts de la bibliothèque pour tes premières pages |
| M4-M5 | Activer les skills (`/nouvelle-section`, `/verifier`) |
| M6 | Utiliser l'agent `/relecture-design` sur tes projets |
| M7 | Remplir `lessons.md` avec tes apprentissages |
| M8 | Créer ton propre atelier en partant de ce modèle |

---

## Questions ?

Rejoins le Discord EvoWeb Academy ou pose ta question directement à Claude Code en ouvrant ce repo dans ton terminal.

Bonne construction ! 🚀
