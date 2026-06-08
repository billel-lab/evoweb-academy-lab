import { Coffee, MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[--color-border] bg-[--color-text] text-[--color-bg]">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {/* Marque */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Coffee className="h-5 w-5 text-[--color-accent]" aria-hidden="true" />
              <span className="text-lg font-semibold">Café Lumière</span>
            </div>
            <p className="text-sm text-[--color-border] leading-relaxed">
              Torréfaction artisanale, bons moments et café de spécialité dans un cadre chaleureux.
            </p>
          </div>

          {/* Horaires */}
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[--color-accent]">
              Horaires
            </h3>
            <ul className="space-y-1 text-sm text-[--color-border]">
              <li>Lun – Ven : 8h00 – 18h00</li>
              <li>Samedi : 9h00 – 17h00</li>
              <li>Dimanche : 10h00 – 15h00</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[--color-accent]">
              Nous trouver
            </h3>
            <ul className="space-y-2 text-sm text-[--color-border]">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[--color-accent]" aria-hidden="true" />
                12 rue des Artisans, 1000 Bruxelles
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-[--color-accent]" aria-hidden="true" />
                +32 2 123 45 67
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-[--color-accent]" aria-hidden="true" />
                bonjour@cafelumiere.be
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-center text-xs text-[--color-border]/60">
          © {year} Café Lumière. Tous droits réservés.
        </div>
      </div>
    </footer>
  )
}
