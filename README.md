# EvoWeb Academy Lab 🛠️

Bienvenue dans ton atelier de travail ! Ce repo est **ton quartier général de freelance** pendant toute la formation EvoWeb Academy — et au-delà.

---

## C'est quoi ce Lab ?

Le Lab est un repo clonable qui contient :
- un **starter projet** prêt à démarrer (Next.js + Tailwind + Supabase)
- des **skills Claude Code** déjà configurés pour les tâches courantes
- des **skills business** pour la partie « vendre » du métier : brief client,
  devis & factures, relance d'impayés
- un skill **`/explique`** anti-blocage : colle ton erreur ou ce que tu n'as
  pas compris, il t'explique comme à un débutant complet
- un **agent de relecture design** intégré
- une **bibliothèque de prompts** à copier-coller
- un **WORKFLOW.md** : l'ordre des outils sur une vraie mission client
- des ressources et un journal de leçons pour progresser vite

Tu vas l'utiliser dès le Module 1 et l'enrichir au fur et à mesure. Au Module 9 (leçon « ton mini-atelier »), tu construiras ton propre atelier en partant de ce modèle.

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
├── WORKFLOW.md                ← ta mission client de A à Z, outil par outil
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
    │   ├── explique/          ← anti-blocage : explique tout comme à un débutant
    │   ├── nouveau-projet/    ← cadre et démarre un nouveau projet client
    │   ├── nouvelle-section/  ← génère une section de landing propre
    │   ├── verifier/          ← checklist avant de livrer
    │   ├── deployer-aide/     ← guide pas-à-pas pour Vercel
    │   ├── brief-client/      ← transforme une demande floue en brief clair
    │   ├── devis-facture/     ← devis et factures à TES prix, numérotés
    │   └── relance-impaye/    ← relances graduées, jamais envoyées à ta place
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

> **Note :** Copie `.env.example` en `.env.local`. Tu peux laisser les valeurs
> vides au début — le starter tourne sans aucune clé. Les clés Supabase et
> Resend ne servent qu'à partir du Module 6 (formulaire + emails).

```bash
cp .env.example .env.local
```

---

## Comment l'utiliser pendant la formation

| Module | Ce que tu fais avec le Lab |
|--------|---------------------------|
| Dès ton 1er blocage | `/explique` — colle ton erreur ou ce que tu n'as pas compris, à n'importe quel moment du parcours |
| M1 | Cloner, explorer, lancer le starter |
| M3-M4 | Utiliser les prompts de la bibliothèque (bien demander, bien vérifier) |
| M5-M8 | Construire sur le starter — et noter tes apprentissages dans `lessons.md` au fil de l'eau |
| M9 (leçon 3) | Activer les skills (`/nouvelle-section`, `/verifier`) et l'agent `/relecture-design` |
| M9 (leçon 4) | Créer ton propre atelier en partant de ce modèle (avec la section « Comment me parler » du CLAUDE.md) |
| M10 et après | Les skills business : `/brief-client` → `/devis-facture` → `/relance-impaye` — l'ordre complet est dans `WORKFLOW.md` |
| M10-M11 | Réutiliser le starter pour tes mockups de prospection « cheval de Troie » |

---

## Questions ?

Rejoins le Discord EvoWeb Academy ou pose ta question directement à Claude Code en ouvrant ce repo dans ton terminal.

Bonne construction ! 🚀
