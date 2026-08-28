---
name: devis-facture
description: Génère un devis (DEV) ou une facture (FAC) professionnel pour TON activité de freelance web. Se déclenche sur « fais un devis », « crée une facture », « devis pour [client] », « facture [client] », « combien je facture pour… ». Utilise TES infos (fichier facturation.md) et TA grille tarifaire — jamais de prix ni de mentions inventés.
---

# Skill : Devis & factures

Produit un document commercial propre, prêt à envoyer — au nom de TON
activité, à TES prix.

---

## Étape 0 — Tes infos (une seule fois)

Cherche un fichier `facturation.md` à la racine de l'atelier. S'il n'existe
pas, propose de le créer MAINTENANT avec ce squelette (c'est ton atelier qui
grandit) :

```markdown
# Mes infos de facturation
- Nom / entreprise : [à compléter]
- Adresse : [à compléter]
- N° d'entreprise / TVA : [à compléter — demande à ton comptable si doute]
- Email + téléphone : [à compléter]
- IBAN : [à compléter]
- Dernier n° de devis émis : DEV-2026-000
- Dernier n° de facture émis : FAC-2026-000

## Ma grille (fourchettes de référence : grille-tarifaire.md à la racine du Lab)
- Landing 1 page : [ton prix] €
- Site vitrine 3-5 pages : [ton prix] €
- Option formulaire + emails : +[ton prix] €
- Maintenance mensuelle : [ton prix] €/mois
```

Sans ces infos, mets `[à compléter]` dans le document — n'invente JAMAIS un
IBAN, un numéro d'entreprise ou une mention fiscale.

## Étape 1 — Collecter

- **Type** : devis (préfixe `DEV`) ou facture (préfixe `FAC`).
- **Client** : nom, contact, email, adresse (+ n° TVA si professionnel).
- **Prestation(s)** : libellé clair + description en une phrase + prix — tiré
  de TA grille (fourchettes de départ : lis `grille-tarifaire.md` à la racine
  du Lab). Rappels du parcours : **jamais sous 400 €**, et **un prix ferme**,
  jamais une fourchette (la fourchette est ton outil interne).

## Étape 2 — Règles (non négociables)

- Devise **EUR**.
- **Acompte de 50 % à la validation de la maquette, solde à la livraison** —
  et on ne commence pas le chantier avant réception de l'acompte.
- Devis **valable 30 jours**.
- **Numérotation séquentielle** `DEV-AAAA-NNN` / `FAC-AAAA-NNN` : lis le
  dernier numéro dans `facturation.md`, incrémente, puis mets le fichier à
  jour. Ne réutilise jamais un numéro.
- **TVA : selon TON statut.** C'est une question pour ton comptable (comme vu
  au module 10) — mets la mention `[TVA : à confirmer avec ton comptable]`
  plutôt que d'inventer un taux ou une exonération.

## Étape 3 — Produire le document

- Mise en page sobre, 1 page : en-tête (toi / le client / date + numéro),
  tableau des prestations (libellé · description · prix), total, bloc
  acompte + échéance, coordonnées de paiement (IBAN), mention de validité.
- Format : Markdown propre par défaut (copiable dans un email ou un document).
  Si un outil de génération PDF/DOCX est disponible dans l'environnement,
  propose-le.
- Nom du fichier : `DEV-AAAA-NNN_NomClient.md` (ou .pdf).

## Étape 4 — Livrer

- Présente le document + un récap : numéro, client, montant total, acompte
  dû, validité.
- Mets à jour le dernier numéro dans `facturation.md`.
- Propose la suite : le script de présentation du devis (ta Grille Tarifaire
  du parcours en contient un, section 4), ou préparer l'email d'envoi —
  **que TU enverras toi-même**.

---

## À ne jamais faire
- Inventer un prix, un taux de TVA, un IBAN ou une mention légale.
- Donner une fourchette au client — un chiffre ferme.
- Réutiliser ou sauter un numéro de document.
- Envoyer quoi que ce soit automatiquement : tu prépares, l'artisan envoie.
