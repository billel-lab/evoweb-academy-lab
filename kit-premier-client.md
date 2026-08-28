# Le Kit Premier Client 🎯

> Ta bibliothèque de mockups « cheval de Troie » — 6 secteurs courants, avec
> pour chacun : la douleur du commerçant, un prompt prêt à personnaliser, et
> le script d'approche. À utiliser à partir du Module 10 : le premier pas
> n'est plus « créer à partir de rien », c'est « choisir un secteur,
> personnaliser, envoyer ».

---

## Comment utiliser ce kit (règles, à lire d'abord)

1. **Un mockup = un prospect réel.** Tu choisis un commerce précis près de
   chez toi (pas un secteur abstrait), tu personnalises à SON nom, SES
   couleurs, SES infos — puis tu l'approches avec le script.
2. **Personnalise toujours avant d'envoyer.** Un mockup générique se
   reconnaît en 3 secondes et détruit l'effet cheval de Troie. La checklist
   de personnalisation (15 min, en bas de ce fichier) est obligatoire.
3. **Tu prépares, tu envoies toi-même.** Jamais d'envoi automatisé — même
   règle que le Module 11 : une machine PRÉPARE, elle n'envoie jamais.
4. **Les prompts s'utilisent depuis le starter du Lab** (`starter/`), avec
   ses composants faits main (`ServiceCard`, `Footer`…) comme patterns à
   pointer — pas de librairie externe.
5. **La maquette gratuite, c'est UNE page, telle quelle.** Toute
   modification demandée après le « ça m'intéresse » fait partie de la
   mission payante — donc après l'acompte de 50 % à la validation de la
   maquette. C'est la règle qui te protège du travail gratuit sans fin.
6. **L'URL du mockup devient le lien de suivi du chantier.** Après la vente,
   tu continues le développement sur le même lien vercel.app : le client
   suit l'avancement jusqu'à la livraison, où son vrai domaine prend le
   relais. Envoie le lien avec la phrase d'attente : « tu verras le site se
   construire étape par étape — entre deux étapes, c'est un chantier, c'est
   normal. »

---

## Secteur 1 — Restaurant / snack local

**Le contexte typique** : une page Facebook active, pas de site — ou un site
d'annuaire jamais mis à jour. Le menu circule en photo floue.

**Sa douleur** : invisible sur Google quand on cherche « restaurant + [ville] »,
le téléphone sonne pendant le coup de feu pour des questions dont la réponse
devrait être en ligne (horaires, menu, adresse).

**L'action unique de la page** (règle du Module 8 — une action par page) :
**réserver une table / commander** (bouton appel ou formulaire selon le commerce).

**Prompt mockup à copier dans Claude Code (depuis le starter du Lab)** :

```
Crée une landing page one-page pour un restaurant nommé [NOM], situé à
[VILLE]. Sections dans cet ordre : hero avec photo d'ambiance et bouton
« Réserver une table » (lien tel:), menu du jour en 3 catégories, horaires
et adresse avec carte, avis clients (3 placeholders), footer avec téléphone
cliquable. Réutilise le pattern du composant ServiceCard existant pour les
plats, et le Footer existant. Palette : [COULEUR PRINCIPALE] chaleureuse,
mobile-first. Une seule action sur toute la page : réserver.
```

**Script d'approche (DM/WhatsApp — le cheval de Troie)** :

> Bonjour [Prénom/Nom du resto], je suis passé chez vous [contexte réel —
> j'habite à côté / j'ai mangé chez vous]. J'ai remarqué que vous n'aviez
> pas de site pour montrer le menu et prendre les réservations — du coup
> j'en ai préparé une maquette, à votre nom, juste pour vous montrer ce que
> ça donnerait : [LIEN]. Si ça vous plaît, je vous la mets en ligne
> complète. Si non, aucun souci, elle est à vous quand même. Bonne journée !

---

## Secteur 2 — Artisan du bâtiment (électricien, plombier, chauffagiste)

**Le contexte typique** : le bouche-à-oreille marche, mais aucune présence en
ligne — les jeunes propriétaires cherchent sur Google et ne le trouvent pas.

**Sa douleur** : il perd les chantiers des moins de 40 ans, et il passe ses
soirées à répondre aux mêmes questions par téléphone.

**L'action unique** : **demander un devis** (formulaire court : nature du
problème + téléphone).

**Prompt mockup** :

```
Crée une landing page one-page pour un électricien indépendant nommé [NOM]
à [VILLE]. Sections : hero sobre avec promesse « Dépannage et installation
à [VILLE] » et bouton « Demander un devis », 3 services principaux
(réutilise le pattern ServiceCard), zone d'intervention, photos de
chantiers (placeholders), bloc confiance (années de métier, assurance,
devis gratuit), formulaire de devis court (problème + téléphone), footer
avec numéro cliquable. Palette sobre et pro : [COULEUR]. Mobile-first —
ses clients le cherchent depuis leur téléphone.
```

**Script d'approche** :

> Bonjour [Nom], je cherchais un électricien sur [VILLE] et j'ai vu que vous
> n'aviez pas de site — que votre travail passe par le bouche-à-oreille.
> C'est mon métier de faire des sites pour des artisans, alors j'ai préparé
> une maquette à votre nom pour vous montrer ce que vos futurs clients
> pourraient voir : [LIEN]. Si elle vous plaît, je la mets en ligne pour
> vous. Sinon, elle reste à vous, sans engagement.

---

## Secteur 3 — Coiffeur / institut de beauté

**Le contexte typique** : Instagram actif, réservations par DM ou téléphone —
et des rendez-vous oubliés ou pris pendant les prestations.

**Sa douleur** : chaque prise de rendez-vous interrompt une cliente en cours ;
les DM de réservation se perdent.

**L'action unique** : **prendre rendez-vous** (bouton vers téléphone ou
formulaire de demande de créneau).

**Prompt mockup** :

```
Crée une landing page one-page pour un salon de coiffure nommé [NOM] à
[VILLE]. Sections : hero visuel avec bouton « Prendre rendez-vous »,
prestations et prix (pattern ServiceCard), galerie photos (placeholders
carrés, style Instagram), équipe (1-2 portraits), horaires + adresse,
formulaire de demande de rendez-vous (prestation + jour souhaité +
téléphone), footer. Palette élégante : [COULEUR]. Mobile-first, boutons
tactiles larges.
```

**Script d'approche** :

> Bonjour [Nom du salon], je suis [contexte réel]. Votre Instagram est
> superbe — mais j'ai vu que les rendez-vous passent par DM ou téléphone.
> J'ai préparé une maquette de site à votre nom, avec la prise de
> rendez-vous intégrée, pour vous montrer ce que ça changerait : [LIEN].
> Ça vous libérerait le téléphone pendant vos prestations. Si ça vous
> parle, je vous montre la suite — sinon la maquette est cadeau.

---

## Secteur 4 — Kiné / ostéo / thérapeute

**Le contexte typique** : une fiche Google incomplète, pas de site — les
patients ne savent pas ce qui est traité ni comment prendre rendez-vous.

**Sa douleur** : des appels pour des questions basiques (remboursement,
spécialités, adresse du cabinet) entre deux patients.

**L'action unique** : **demander un rendez-vous** (formulaire : motif +
téléphone — jamais de données médicales détaillées).

**Prompt mockup** :

```
Crée une landing page one-page pour un kinésithérapeute nommé [NOM] à
[VILLE]. Sections : hero rassurant avec bouton « Demander un rendez-vous »,
spécialités traitées (pattern ServiceCard), présentation du praticien
(photo + diplômes), infos pratiques (adresse, accès, remboursement
mutuelle), formulaire de demande de rendez-vous (motif général + téléphone
— pas de détail médical), footer. Palette apaisante : [COULEUR].
Mobile-first, typographie très lisible.
```

**Script d'approche** :

> Bonjour [Nom], je suis [contexte réel — patient / voisin / recommandé
> par X]. En cherchant vos horaires, j'ai vu que vous n'aviez pas de site —
> juste la fiche Google. J'ai préparé une maquette à votre nom qui répond
> aux questions qu'on vous pose sûrement dix fois par jour (remboursements,
> spécialités, accès) : [LIEN]. Si elle vous est utile, je la mets en ligne
> pour vous. Sinon, gardez-la, c'est offert.

---

## Secteur 5 — Commerce local (boutique, torréfacteur, fleuriste…)

**Le contexte typique** : une vitrine physique soignée, zéro vitrine
numérique — ou une page Facebook dormante.

**Sa douleur** : les gens découvrent la boutique par hasard ; aucune visibilité
sur les nouveautés ni les horaires — surtout les jours fériés.

**L'action unique** : **venir en boutique** (adresse + horaires + itinéraire)
ou **commander/réserver un produit** selon le commerce.

**Prompt mockup** :

```
Crée une landing page one-page pour une boutique nommée [NOM] à [VILLE],
spécialisée en [PRODUITS]. Sections : hero avec l'ambiance de la boutique
et bouton « Nous trouver », sélection de produits phares (pattern
ServiceCard, 4-6 items), l'histoire de la boutique (3-4 lignes), horaires
détaillés + adresse + itinéraire, réseaux sociaux, footer. Palette fidèle à
l'identité de la boutique : [COULEUR]. Mobile-first.
```

**Script d'approche** :

> Bonjour [Nom], je suis client de votre boutique [détail réel]. J'ai voulu
> vérifier vos horaires en ligne l'autre jour et… je n'ai rien trouvé. Du
> coup j'ai préparé une maquette de site à votre nom, avec vos horaires,
> vos produits et votre histoire : [LIEN]. Si elle vous plaît, je la mets
> en ligne pour vous. Sinon, elle est à vous — considérez ça comme un merci
> de client.

---

## Secteur 6 — Coach / indépendant de service (coach sportif, formateur, consultant)

**Le contexte typique** : tout passe par Instagram/LinkedIn et le
bouche-à-oreille ; aucun endroit unique qui présente l'offre et capte les
demandes.

**Sa douleur** : il répète son pitch en DM vingt fois par semaine, et n'a
aucun endroit « sérieux » à montrer quand un prospect hésite.

**L'action unique** : **réserver un premier échange** (formulaire : objectif +
email/téléphone).

**Prompt mockup** :

```
Crée une landing page one-page pour un coach [SPÉCIALITÉ] nommé [NOM].
Sections : hero avec promesse orientée résultat client et bouton
« Réserver un premier échange », pour qui / pour qui pas, méthode en 3
étapes (pattern ServiceCard), témoignages (3 placeholders), offre et
tarifs (simple), formulaire de contact (objectif + email), footer. Palette
énergique mais pro : [COULEUR]. Mobile-first.
```

**Script d'approche** :

> Salut [Prénom], je suis ton contenu depuis un moment [détail réel]. J'ai
> remarqué que tout ton business passe par [Instagram/LinkedIn] — et que tu
> n'as pas de page unique à envoyer quand quelqu'un hésite. J'en ai préparé
> une maquette à ton nom, avec ta méthode et un formulaire de premier
> contact : [LIEN]. Si ça te plaît, je te la mets en ligne. Sinon,
> garde-la, elle est à toi.

---

## Checklist de personnalisation — 15 minutes, obligatoire avant tout envoi

- [ ] Le vrai nom du commerce partout (titre, hero, footer) — zéro [NOM]
      résiduel.
- [ ] Les vraies coordonnées : adresse, téléphone, horaires (vérifiés sur
      sa fiche Google ou sa devanture).
- [ ] La palette adaptée à son identité visuelle réelle (enseigne, logo,
      Instagram).
- [ ] Au moins un détail que seul un vrai observateur connaît (un plat
      signature, une spécialité, un produit phare) — c'est LE détail qui
      prouve que la maquette a été faite pour lui.
- [ ] La page passée au `/verifier` du Lab (responsive mobile, liens
      cliquables, aucune faute).
- [ ] Le script d'approche personnalisé : contexte réel en première phrase,
      jamais le template brut.
- [ ] Mockup déployé sur une URL propre (Vercel) — on envoie un lien qui
      s'ouvre, jamais une capture d'écran seule.
