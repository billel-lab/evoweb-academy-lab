import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Café Lumière — Torréfaction artisanale',
  description:
    'Café Lumière vous accueille dans un espace chaleureux pour déguster des cafés de spécialité torréfiés à la main. Brunch, pâtisseries maison et bons moments.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
