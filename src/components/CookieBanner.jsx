import { useEffect, useState } from 'react'
import { useI18n } from '../i18n'
import { getConsent, loadAnalytics, onOpenCookieSettings, setConsent } from '../lib/analytics'

export default function CookieBanner() {
  const { t } = useI18n()
  // Hidden until mount: the prerendered HTML must not depend on localStorage.
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const consent = getConsent()
    if (consent === 'granted') loadAnalytics()
    else if (!consent) setOpen(true)
    return onOpenCookieSettings(() => setOpen(true))
  }, [])

  if (!open) return null

  const choose = (value) => {
    setConsent(value)
    setOpen(false)
  }

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label={t.cookies.title}
      className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-2xl rounded-2xl border border-line bg-surface/95 p-5 shadow-2xl backdrop-blur sm:p-6"
    >
      <p className="font-display text-lg font-bold">{t.cookies.title}</p>
      <p className="mt-2 text-sm leading-relaxed text-neutral-300">{t.cookies.text}</p>
      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:justify-end">
        <button
          type="button"
          onClick={() => choose('denied')}
          className="rounded-full border border-line px-5 py-2 text-sm font-medium text-white transition hover:border-neutral-500"
        >
          {t.cookies.decline}
        </button>
        <button
          type="button"
          onClick={() => choose('granted')}
          className="rounded-full bg-accent px-5 py-2 text-sm font-medium text-white transition hover:bg-accent-dark"
        >
          {t.cookies.accept}
        </button>
      </div>
    </div>
  )
}
