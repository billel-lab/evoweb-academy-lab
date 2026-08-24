# Journal de leçons — Mon Atelier EvoWeb

> Ce fichier est ton carnet de bord d'artisan. À chaque fois que tu commets une erreur, que tu bloques longtemps sur quelque chose, ou que tu découvres une meilleure façon de faire — tu l'écris ici.
>
> Le principe est simple : noter pour ne jamais refaire deux fois la même erreur. Au Module 9 (leçon 4 — ton mini-atelier), tu reliras ce journal et tu verras à quel point tu as progressé.

---

## Template d'entrée

Copie-colle ce bloc et remplis-le :

```
## [YYYY-MM-DD] — [titre court]

**Ce qui s'est passé :**
[Décris la situation en 1-2 phrases. Qu'est-ce qui a mal tourné ou ce que tu as découvert ?]

**La règle à suivre :**
[Formule une règle claire que tu peux appliquer la prochaine fois.]
```

---

## Exemples

## [2026-01-15] — Variables d'environnement dans le code

**Ce qui s'est passé :**
J'ai hardcodé ma clé Supabase directement dans `lib/supabase.ts` pour aller vite. Claude me l'a signalé mais j'ai quand même committé. La clé s'est retrouvée sur GitHub.

**La règle à suivre :**
Toutes les clés API vont dans `.env.local`, jamais dans le code. Vérifier avec `git diff` avant chaque commit que aucune valeur sensible n'apparaît.

---

## [2026-02-03] — Accepter le code de Claude sans le lire

**Ce qui s'est passé :**
Claude a généré un composant `ContactForm.tsx` et j'ai tout accepté sans lire. Le formulaire envoyait les données sans validation côté serveur — n'importe qui pouvait soumettre n'importe quoi.

**La règle à suivre :**
Lire chaque bloc de code avant de l'accepter. Si je ne comprends pas une partie, demander à Claude de l'expliquer. Je suis responsable du code qui tourne sur le serveur de mon client.

---

<!-- Continue ici avec tes propres leçons -->
