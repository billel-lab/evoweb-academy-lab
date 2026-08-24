---
name: brief-client
description: Transforme une demande client entrante (message, appel, réponse à ton mockup) en brief de projet structuré, prêt pour la conception. Se déclenche sur « prépare un brief », « nouvelle demande client », « brief pour un site de… », « j'ai un prospect intéressé », « cadre ce projet ». Sort un brief clair avec type de projet, pages, contenu, direction design et stack.
---

# Skill : Brief client

Transforme une demande floue (« je veux un site ») en brief clair et
exécutable — la fondation d'une mission qui se passe bien.

---

## Étape 1 — Qualifier

Récupère (ou déduis du contexte, ou marque `[à demander au client]`) :
- **Client** : activité, secteur, ville/zone, à qui il vend, 1-2 concurrents.
- **Besoin business** : l'objectif RÉEL (être trouvé sur Google, prendre des
  rendez-vous, recevoir des demandes de devis, vendre) — jamais « avoir un
  site » : un site est un moyen, pas un objectif.
- **Type de projet** : landing 1 page · site vitrine 3-5 pages · site +
  formulaire/RDV · site + données (Supabase).
- **Contenu disponible** : logo, photos, textes, couleurs existantes. C'est
  LE point qui retarde les missions — liste précisément ce qui manque.
- **Contraintes** : délai souhaité, budget évoqué (réfère-toi à TA grille
  tarifaire — jamais un prix inventé), langues.

## Étape 2 — Structurer le brief

Produis un document Markdown avec :
1. **Résumé** (2-3 lignes : qui, quoi, pourquoi).
2. **Objectif principal + comment on saura que ça marche** (appels, demandes
   de devis, réservations — un indicateur concret).
3. **L'action unique du site** (la règle du parcours : UNE action par page —
   réserver, appeler, demander un devis).
4. **Arborescence des pages** (ex. Accueil, Services, Réalisations, Contact).
5. **Contenu par page** : sections clés, preuves (avis, photos, chiffres), CTA.
6. **Direction design** : ambiance en 3 mots + couleurs, fidèle à l'identité
   réelle du client (enseigne, logo) — sobre et pro, jamais surchargé.
7. **Stack** : Next.js App Router · Tailwind CSS · composants faits main ·
   Supabase (si formulaire/données) · Resend (si emails) · Vercel. La stack
   du parcours — n'ajoute une dépendance que si le projet a le problème
   qu'elle résout.
8. **Livrables & délai** : ce qui sera en ligne, quand, et ce qu'il faut du
   client pour tenir la date (contenus !). Précise le mode de suivi : le
   chantier avance sur le lien vercel.app de la maquette (le client peut
   suivre en direct), et le domaine officiel — acheté par le client, à son
   nom — est branché à la livraison.
9. **Questions ouvertes** : tout ce qui est `[à demander au client]`.

## Étape 3 — Livrer

- Présente le brief + un récap de 3 lignes.
- Propose la suite logique : préparer le devis (skill **/devis-facture**),
  démarrer le projet (skill **/nouveau-projet**), ou lister les questions à
  poser au client avant de s'engager.

---

## À ne jamais faire
- Promettre un résultat commercial (« ce site vous apportera X clients ») —
  tu promets un livrable et une qualité, jamais un chiffre d'affaires
  (règle du module 8 du parcours).
- Lancer la conception sans objectif business clair.
- Accepter un périmètre flou (« on verra en cours de route ») : ce qui n'est
  pas dans le brief est un avenant, pas un dû.
- Oublier de lister le contenu manquant — c'est la cause n°1 des missions qui
  traînent.
