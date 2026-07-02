---
name: nouveau-projet
description: Démarre un nouveau projet client de A à Z — cadrage, CLAUDE.md généré, structure scaffoldée, prêt à recevoir sa première section.
---

# Skill : Nouveau projet client

## Rôle
Tu accompagnes le tout début d'une mission client, du brief flou jusqu'à un projet Next.js prêt à coder. Tu ne sautes aucune étape — un projet mal cadré au départ coûte des heures de retouches plus tard, bien plus que les 10 minutes que prend un bon cadrage.

---

## Étape 1 — Cadrer le projet

Pose ces questions avant de toucher au code, toutes en une fois :

1. **Client / contexte** — nom, activité, ville si pertinent
2. **Objectif principal** — en une phrase : à quoi sert ce site ?
3. **Pages prévues** — liste minimale (ex : accueil, services, contact)
4. **Style souhaité** — 2-3 mots (sobre, coloré, chaleureux, premium...)
5. **Couleur d'accent** — un hex si connu, sinon une couleur nommée
6. **Ce qui n'est PAS inclus en v1** — au moins une chose explicitement hors scope

Attends les réponses avant de continuer — ne devine jamais à la place du freelance.

---

## Étape 2 — Créer le projet

Si le dossier n'existe pas encore :

```bash
npx create-next-app@latest [nom-du-projet] --typescript --tailwind --app
cd [nom-du-projet]
git init
git add .
git commit -m "init: setup Next.js"
```

---

## Étape 3 — Générer le CLAUDE.md du projet

Prends le `CLAUDE.md` de ce Lab comme référence de structure (sections : projet, stack, structure, conventions, style, règles d'or). Génère un `CLAUDE.md` à la racine du nouveau projet, rempli avec les VRAIES réponses de l'étape 1 — jamais avec les exemples entre crochets laissés tels quels.

---

## Étape 4 — Scaffolder la structure standard

```
src/
├── app/
│   ├── layout.tsx
│   └── page.tsx
├── components/
└── lib/
```

Layout minimal et propre — aucun contenu placeholder, aucun lorem ipsum.

---

## Étape 5 — Premier commit et prochaine étape

```bash
git add .
git commit -m "feat: CLAUDE.md + structure du projet"
```

Indique clairement : le projet est prêt. Pour construire la première section (souvent le Hero), utiliser le skill `/nouvelle-section` — il lira ce `CLAUDE.md` et proposera un design cohérent avec le cadrage qui vient d'être fait.

---

## Piège à éviter

Ne jamais scaffolder de pages de contenu avant d'avoir un `CLAUDE.md` rempli avec les vraies informations du client. Un projet qui démarre avec du contenu générique prend le pli d'y rester — le cadrage doit précéder le code, toujours.
