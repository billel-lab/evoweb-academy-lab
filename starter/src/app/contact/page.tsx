'use client'

import { useState, type FormEvent } from 'react'
import { Send, CheckCircle } from 'lucide-react'

/**
 * Page Contact — formulaire stub côté client.
 *
 * MODULE 6 (Supabase + Resend) : pour brancher ce formulaire :
 *   1. Créer une Server Action dans `src/app/actions/contact.ts`
 *   2. Insérer la soumission dans la table Supabase `messages`
 *   3. Envoyer un e-mail de confirmation via Resend
 *   4. Remplacer handleSubmit par un appel à la Server Action
 *
 * Pour l'instant, le formulaire simule la confirmation côté client.
 */

interface FormState {
  name: string
  email: string
  message: string
}

const INITIAL_STATE: FormState = { name: '', email: '', message: '' }

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    // --- Stub : simule un appel réseau (0.8 s) ---
    // Remplace cette ligne par une vraie Server Action en Module 6
    await new Promise((resolve) => setTimeout(resolve, 800))

    setLoading(false)
    setSubmitted(true)
    setForm(INITIAL_STATE)
  }

  return (
    <section className="bg-[--color-bg] py-16 sm:py-24">
      <div className="mx-auto max-w-xl px-4 sm:px-6">
        {/* En-tête */}
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[--color-accent]">
            On vous écoute
          </p>
          <h1 className="text-3xl font-bold text-[--color-text] sm:text-4xl">
            Contactez-nous
          </h1>
          <p className="mt-4 text-[--color-muted]">
            Réservation, privatisation ou juste envie de dire bonjour — écrivez-nous, nous répondons sous 24 h.
          </p>
        </div>

        {/* Confirmation */}
        {submitted ? (
          <div className="flex flex-col items-center gap-4 rounded-2xl border border-[--color-border] bg-[--color-surface] p-10 text-center shadow-sm">
            <CheckCircle className="h-12 w-12 text-green-500" aria-hidden="true" />
            <h2 className="text-xl font-semibold text-[--color-text]">Message envoyé !</h2>
            <p className="text-[--color-muted]">
              Merci pour votre message. Nous vous répondrons dans les meilleurs délais.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-2 text-sm font-medium text-[--color-accent] underline-offset-4 hover:underline"
            >
              Envoyer un autre message
            </button>
          </div>
        ) : (
          /* Formulaire */
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-[--color-border] bg-[--color-surface] p-8 shadow-sm space-y-6"
            noValidate
          >
            {/* Nom */}
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block text-sm font-medium text-[--color-text]"
              >
                Votre nom <span aria-hidden="true" className="text-[--color-accent]">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Marie Dupont"
                className="w-full rounded-xl border border-[--color-border] bg-[--color-bg] px-4 py-3 text-sm text-[--color-text] placeholder-[--color-muted]/50 transition focus:border-[--color-accent] focus:outline-none focus:ring-2 focus:ring-[--color-accent]/20"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-medium text-[--color-text]"
              >
                Adresse e-mail <span aria-hidden="true" className="text-[--color-accent]">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                value={form.email}
                onChange={handleChange}
                placeholder="marie@exemple.com"
                className="w-full rounded-xl border border-[--color-border] bg-[--color-bg] px-4 py-3 text-sm text-[--color-text] placeholder-[--color-muted]/50 transition focus:border-[--color-accent] focus:outline-none focus:ring-2 focus:ring-[--color-accent]/20"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-sm font-medium text-[--color-text]"
              >
                Votre message <span aria-hidden="true" className="text-[--color-accent]">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Bonjour, je voudrais…"
                className="w-full resize-none rounded-xl border border-[--color-border] bg-[--color-bg] px-4 py-3 text-sm text-[--color-text] placeholder-[--color-muted]/50 transition focus:border-[--color-accent] focus:outline-none focus:ring-2 focus:ring-[--color-accent]/20"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-[--color-accent] px-6 py-3.5 text-base font-semibold text-white shadow-md transition hover:bg-[--color-accent-hover] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--color-accent] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" aria-hidden="true" />
                  Envoi en cours…
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" aria-hidden="true" />
                  Envoyer le message
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
