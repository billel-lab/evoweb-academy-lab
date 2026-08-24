# Café Lumière — Starter EvoWeb Academy

Mini-vitrine Next.js 16 + Tailwind CSS v4 pour un café fictif.
C'est ta **base de départ** : elle tourne, elle est propre, tu peux la modifier librement.

---

## Lancer le projet

```bash
cd starter
npm install
npm run dev
```

Ouvre [http://localhost:3000](http://localhost:3000) dans ton navigateur.

---

## Commandes disponibles

| Commande        | Description                                  |
|-----------------|----------------------------------------------|
| `npm run dev`   | Serveur de développement (hot reload)        |
| `npm run build` | Build de production                          |
| `npm run start` | Serveur de production (après build)          |
| `npm run lint`  | Vérification ESLint                          |

---

## Structure du projet

```
starter/
├── src/
│   ├── app/
│   │   ├── globals.css        ← tokens de couleur + styles de base
│   │   ├── layout.tsx         ← layout racine (Header + Footer)
│   │   ├── page.tsx           ← page d'accueil (Hero + À propos + Services)
│   │   └── contact/
│   │       └── page.tsx       ← formulaire de contact (stub client)
│   └── components/
│       ├── Header.tsx          ← barre de navigation
│       ├── Footer.tsx          ← pied de page
│       └── ServiceCard.tsx     ← carte de service réutilisable
├── package.json
├── tsconfig.json
├── next.config.ts
└── postcss.config.mjs
```

---

## Exercices suggérés

1. **Module 2 — Lire et modifier du code** : Modifie les couleurs dans `globals.css` (`--color-accent`, `--color-bg`…) et vois le résultat en direct.
2. **Module 3 — Diriger Claude Code** : Demande à Claude Code d'ajouter une quatrième carte dans la section "Nos prestations" (`src/app/page.tsx`) — en pointant le pattern `ServiceCard` existant dans ton prompt.
3. **Module 4 — Vérifier le travail de l'IA** : Demande une modification à Claude Code, puis vérifie-la toi-même (`npm run build` + relecture de la page) avant de l'accepter.
4. **Module 5 — Ta première page** : Remplace le bloc placeholder "Photo de l'atelier" par un vrai `<Image>` Next.js. Pour aller plus loin : déplace les données `services` dans un fichier `src/lib/data.ts` et type-les correctement.
5. **Module 6 — Supabase + Resend** : Branche le formulaire de contact (`src/app/contact/page.tsx`) sur une Server Action qui insère dans la table Supabase `contacts` et envoie un e-mail de confirmation avec Resend.

---

## Stack

- **Framework** : [Next.js 16](https://nextjs.org) (App Router)
- **Styles** : [Tailwind CSS v4](https://tailwindcss.com)
- **Langage** : TypeScript strict
- **Icônes** : [lucide-react](https://lucide.dev)

---

_Projet pédagogique — EvoWeb Academy. Modifie tout, casse tout, apprends._
