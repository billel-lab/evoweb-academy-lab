# Bibliothèque de prompts — EvoWeb Academy Lab

Prompts prêts à copier-coller dans Claude Code. Remplace les parties entre `[crochets]` par tes vraies informations.

---

## 1. Créer une nouvelle page

**Quand l'utiliser :** tu veux ajouter une page à ton site (ex : /services, /contact, /a-propos).

```
Lis d'abord la structure de mon projet (src/app/ et src/components/) pour comprendre les conventions utilisées.

Ensuite, crée une nouvelle page Next.js App Router à l'adresse `/[slug-de-la-page]` avec :
- Titre de la page : [titre]
- Contenu : [décris ce que la page doit afficher]
- Style : sobre, mobile-first, cohérent avec le reste du site
- Composants réutilisables si possible

Montre-moi la structure du fichier avant de générer le code.
```

---

## 2. Ajouter une section Hero (bannière principale)

**Quand l'utiliser :** tu construis la page d'accueil et tu as besoin d'un premier accroche fort.

```
Lis le fichier `src/app/page.tsx` et les composants existants dans `src/components/`.

Crée une section Hero pour [nom du client / type d'activité] avec :
- Titre principal : [ex : "Menuiserie sur mesure à Bruxelles"]
- Sous-titre : [ex : "20 ans d'expérience, devis gratuit en 48h"]
- Bouton d'appel à l'action : [ex : "Demander un devis"]
- Style : sobre, professionnel, mobile-first, Tailwind CSS
- Pas de fond surchargé ni de SVG wave

Génère uniquement la section Hero en tant que composant `HeroSection.tsx`.
```

---

## 3. Ajouter une section Services

**Quand l'utiliser :** tu veux présenter les offres ou services du client sous forme de cartes.

```
Lis les fichiers existants dans `src/components/` pour respecter les conventions.

Crée une section "Services" avec les 3 services suivants :
1. [Nom du service 1] — [courte description]
2. [Nom du service 2] — [courte description]
3. [Nom du service 3] — [courte description]

Contraintes :
- Cartes Tailwind CSS, icônes lucide-react
- Mobile-first : 1 colonne sur mobile, 3 colonnes sur desktop
- Accessible (aria-label sur les icônes)

Génère le composant `ServicesSection.tsx`.
```

---

## 4. Créer un formulaire de contact relié à Supabase et envoi d'email

**Quand l'utiliser :** tu veux qu'un visiteur puisse envoyer un message, que ça soit sauvegardé en base et qu'un email soit envoyé au client.

```
Lis les fichiers `lib/supabase.ts` (ou similaire) et la structure de `src/app/` avant de coder.

Crée un formulaire de contact complet avec :
- Champs : Nom, Email, Message (tous requis)
- Validation côté client (messages d'erreur clairs en français)
- Server Action Next.js qui :
  1. Insère les données dans la table Supabase `contacts` (colonnes : nom, email, message, created_at)
  2. Envoie un email de notification via Resend à [adresse-email-du-client]
- Retour visuel : message de succès ou d'erreur après envoi
- Mobile-first, accessible

Montre-moi d'abord la migration SQL Supabase pour la table `contacts`, puis le composant.
```

---

## 5. Déboguer une erreur

**Quand l'utiliser :** tu as une erreur dans le terminal ou le navigateur et tu ne sais pas d'où ça vient.

```
Voici l'erreur que j'obtiens :

```
[colle ici le message d'erreur complet, y compris le stack trace]
```

Contexte :
- Fichier concerné : [ex : src/app/contact/page.tsx]
- Ce que je faisais : [ex : je soumets le formulaire de contact]
- Stack : Next.js 15, TypeScript, Tailwind CSS, Supabase

Lis d'abord le fichier concerné, explique ce qui cause l'erreur, puis propose un correctif.
```

---

## 6. Améliorer le design d'une section

**Quand l'utiliser :** une section existe mais elle semble terne, mal équilibrée ou peu professionnelle.

```
Lis le composant `[NomDuComposant].tsx` et le fichier `globals.css`.

Cette section ne me satisfait pas visuellement. Améliore-la avec ces contraintes :
- Style sobre et professionnel (pas de couleurs criardes ni d'effets excessifs)
- Meilleure hiérarchie typographique (titre → sous-titre → texte)
- Espacements cohérents avec Tailwind
- Responsive mobile : que ça soit parfait sur écran 375px de large
- Reste accessible (contrastes suffisants)

Explique tes choix avant de générer le code modifié.
```

---

## 7. Rendre une page responsive mobile

**Quand l'utiliser :** ta page est belle sur desktop mais cassée sur téléphone.

```
Lis le fichier `[nom-de-la-page].tsx` et liste les problèmes que tu identifies pour un écran mobile (375px de large).

Ensuite, corrige chaque problème en utilisant les classes Tailwind responsive (sm:, md:, lg:). Respecte ces règles :
- Pas de largeur fixe en px sur les éléments de contenu
- Les grilles passent de 1 colonne (mobile) à plusieurs colonnes (desktop)
- Les textes ne débordent pas
- Les boutons sont faciles à toucher (min 44px de hauteur)
- Les images sont fluides (w-full, aspect-ratio ou h-auto)

Montre les modifications ligne par ligne.
```

---

## 8. Déployer sur Vercel

**Quand l'utiliser :** ton projet est prêt et tu veux le mettre en ligne pour la première fois.

```
Mon projet Next.js est prêt à être déployé sur Vercel. Accompagne-moi étape par étape :

1. Vérifie d'abord que `.env.local` est bien dans `.gitignore`
2. Liste les variables d'environnement que je dois configurer sur Vercel (lis les fichiers du projet pour les trouver)
3. Donne-moi la marche à suivre pour :
   a. Pusher le code sur GitHub
   b. Importer le projet sur vercel.com
   c. Configurer les variables d'environnement
   d. Vérifier que le déploiement fonctionne

Sois précis et n'assume rien — j'en suis à mon premier déploiement.
```

---

## 9. Écrire un bon CLAUDE.md pour un nouveau projet client

**Quand l'utiliser :** tu démarres un nouveau projet et tu veux préparer Claude Code correctement.

```
Je démarre un nouveau projet avec ces informations :
- Client : [nom du client, type d'activité, ville]
- Objectif du site : [vitrine / e-commerce / webapp / autre]
- Pages prévues : [liste des pages]
- Couleurs souhaitées : [si connues]
- Deadline : [date approximative]

Génère un CLAUDE.md complet pour ce projet, en suivant exactement la structure du fichier CLAUDE.md du Lab EvoWeb. Inclus une section "Notes personnelles" avec les spécificités du client.
```

---

> Astuce : enrichis cette bibliothèque avec tes propres prompts qui ont bien fonctionné. Un bon prompt, ça se garde !
