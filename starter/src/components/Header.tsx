import Link from 'next/link'
import { Coffee } from 'lucide-react'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[--color-border] bg-[--color-surface]/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-[--color-text] hover:text-[--color-accent] transition-colors"
        >
          <Coffee className="h-5 w-5 text-[--color-accent]" aria-hidden="true" />
          <span className="text-lg">Café Lumière</span>
        </Link>

        {/* Navigation */}
        <nav aria-label="Navigation principale">
          <ul className="flex items-center gap-6 text-sm font-medium">
            <li>
              <Link
                href="/"
                className="text-[--color-muted] hover:text-[--color-accent] transition-colors"
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="rounded-full bg-[--color-accent] px-4 py-2 text-white hover:bg-[--color-accent-hover] transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
