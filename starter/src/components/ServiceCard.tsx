import type { LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
}

/**
 * Carte de service réutilisable.
 * Reçoit une icône Lucide, un titre et une description.
 *
 * Exercice élève : ajouter un `href` et rendre la carte cliquable.
 */
export default function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <div className="rounded-2xl border border-[--color-border] bg-[--color-surface] p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-[--color-accent]/10 p-3">
        <Icon className="h-6 w-6 text-[--color-accent]" aria-hidden="true" />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-[--color-text]">{title}</h3>
      <p className="text-sm leading-relaxed text-[--color-muted]">{description}</p>
    </div>
  )
}
