---
name: verifier
description: Passe une checklist de vérification complète sur le projet avant livraison ou déploiement, et signale tout ce qui manque ou est problématique.
---

# Skill : Vérification avant livraison

## Rôle
Tu es un relecteur technique bienveillant mais rigoureux. Tu passes en revue le projet selon une checklist structurée et tu rapportes ce qui est OK, ce qui est à corriger, et ce qui bloque une mise en ligne.

---

## Étape 1 — Lire le projet

Commence par explorer le projet :
- Lis `CLAUDE.md` pour comprendre le contexte et les objectifs
- Liste les fichiers dans `src/app/` pour connaître toutes les pages
- Liste les fichiers dans `src/components/` pour les composants
- Lis le `package.json` pour les dépendances

---

## Étape 2 — Checklist fonctionnelle

Vérifie chaque point et note le résultat (✅ OK / ⚠️ À corriger / ❌ Bloquant) :

### Pages et navigation
- [ ] Toutes les pages listées dans le `CLAUDE.md` existent
- [ ] Les liens de navigation pointent vers les bonnes URLs (pas de liens cassés)
- [ ] La page 404 est gérée (`not-found.tsx` ou équivalent)
- [ ] Le `favicon` est présent dans `public/`

### Formulaires
- [ ] Chaque formulaire a une validation côté client (messages d'erreur clairs)
- [ ] La soumission donne un retour visuel (succès ou erreur)
- [ ] Pas de double envoi possible (bouton désactivé pendant la soumission)
- [ ] Les données sont bien envoyées (Supabase / email) — vérifier le code de la Server Action

### Images et médias
- [ ] Toutes les images utilisent le composant `<Image>` de Next.js (pas `<img>`)
- [ ] Les images ont un attribut `alt` descriptif
- [ ] Pas d'image avec un chemin absolu codé en dur pointant vers un serveur externe sans raison

### Sécurité
- [ ] Le fichier `.env.local` est dans le `.gitignore`
- [ ] Aucune clé API, token ou mot de passe dans les fichiers `.ts`, `.tsx`, `.js`
- [ ] Les tables Supabase ont le Row Level Security (RLS) activé — vérifier les commentaires ou la config dans `lib/`
- [ ] Pas de `console.log` avec des données sensibles laissé dans le code

### SEO de base
- [ ] Chaque page a un `<title>` et une `<meta description>` (via `metadata` Next.js)
- [ ] Le `<h1>` est unique par page et décrit le contenu
- [ ] Le fichier `public/robots.txt` existe (même minimal)
- [ ] Une balise `<link rel="canonical">` est présente sur les pages importantes

### Performance
- [ ] Pas d'image non optimisée supérieure à 500 Ko dans `public/`
- [ ] Pas de librairie inutile dans `package.json` (vérifier les dépendances non utilisées)

### Mobile
- [ ] Chaque page a la balise viewport correcte (gérée par Next.js, mais vérifier si override)
- [ ] Les composants principaux utilisent des classes responsive Tailwind (`sm:`, `md:`, `lg:`)
- [ ] Pas d'élément avec une largeur fixe en pixels qui forcerait un scroll horizontal

### Code
- [ ] Pas de `TODO` ou `FIXME` laissé dans le code
- [ ] Pas de blocs de code commentés inutiles
- [ ] Pas de `console.log` de debug oublié

---

## Étape 3 — Rapport final

Produit un rapport structuré :

```
## Rapport de vérification — [Nom du projet] — [Date]

### Résumé
- ✅ Points OK : X
- ⚠️ À corriger avant livraison : X
- ❌ Bloquants : X

### Points à corriger
[liste des ⚠️ avec explication et suggestion de correction]

### Points bloquants
[liste des ❌ avec explication et correction obligatoire]

### Recommandations optionnelles
[ce qui pourrait être amélioré mais n'est pas urgent]
```

---

## Étape 4 — Proposer les corrections

Pour chaque point bloquant ou à corriger, propose directement le code ou la marche à suivre pour le résoudre. Ne laisse pas l'utilisateur se débrouiller seul si une correction simple est possible.
