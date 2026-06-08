import Link from 'next/link'
import { Coffee, Croissant, Users } from 'lucide-react'
import ServiceCard from '@/components/ServiceCard'

// --- Données statiques ---
// Exercice : déplacer ces données dans un fichier `src/lib/data.ts`
const services = [
  {
    icon: Coffee,
    title: 'Cafés de spécialité',
    description:
      'Nos grains sont sélectionnés chez des producteurs engagés, torréfiés à la main en petites quantités pour vous offrir une tasse unique chaque matin.',
  },
  {
    icon: Croissant,
    title: 'Brunch & pâtisseries',
    description:
      'Viennoiseries fraîches, toasts avocado et formules brunch du samedi matin. Tout est préparé chaque jour par notre équipe avec des produits locaux.',
  },
  {
    icon: Users,
    title: 'Privatisation',
    description:
      "Vous organisez un événement professionnel ou une célébration ? Réservez l'espace entier pour votre groupe jusqu'à 40 personnes.",
  },
]

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[--color-bg]">
        {/* Fond géométrique sobre */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(200,133,58,0.12),transparent)]"
        />

        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[--color-accent]">
            Torréfaction artisanale · Bruxelles
          </p>
          <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-[--color-text] sm:text-5xl lg:text-6xl">
            Le café qui prend<br />
            <span className="text-[--color-accent]">le temps de bien faire</span>
          </h1>
          <p className="mx-auto mb-10 max-w-xl text-lg text-[--color-muted]">
            Chez Café Lumière, chaque tasse est une invitation à ralentir. Grains d'origine, torréfaction locale, ambiance chaleureuse — venez comme vous êtes.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-full bg-[--color-accent] px-8 py-3.5 text-base font-semibold text-white shadow-md hover:bg-[--color-accent-hover] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--color-accent]"
          >
            Nous contacter
          </Link>
        </div>
      </section>

      {/* ── À PROPOS ──────────────────────────────────────── */}
      <section className="bg-[--color-surface] py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center">
            {/* Texte */}
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[--color-accent]">
                Notre histoire
              </p>
              <h2 className="mb-5 text-3xl font-bold text-[--color-text]">
                Un café ouvert en 2019, par passion
              </h2>
              <p className="mb-4 text-[--color-muted]">
                Café Lumière est né d'une conviction simple : un bon café ne s'improvise pas. Léa et Thomas, fondateurs et torréfacteurs, ont sillonné l'Éthiopie, la Colombie et le Burundi pour nouer des partenariats directs avec des producteurs.
              </p>
              <p className="text-[--color-muted]">
                Aujourd'hui, notre atelier de torréfaction est ouvert à la visite. Venez voir, sentir et comprendre comment votre tasse prend vie — c'est ça, Café Lumière.
              </p>
            </div>

            {/* Bloc visuel sobre — image placeholder -->
                Exercice : remplacer par un <Image> Next.js
            */}
            <div
              aria-hidden="true"
              className="aspect-square w-full rounded-2xl bg-[--color-accent]/8 border border-[--color-border] flex items-center justify-center"
            >
              <div className="text-center text-[--color-muted]/40">
                <Coffee className="mx-auto mb-3 h-16 w-16" />
                <p className="text-sm">Photo de l'atelier</p>
                <p className="text-xs mt-1 opacity-60">Remplace par &lt;Image&gt; Next.js</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────── */}
      <section className="bg-[--color-bg] py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[--color-accent]">
              Ce que nous proposons
            </p>
            <h2 className="text-3xl font-bold text-[--color-text]">Nos prestations</h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
