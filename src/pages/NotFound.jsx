import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { useI18n } from '../i18n'

export default function NotFound() {
  const { t, path } = useI18n()

  return (
    <section className="mx-auto max-w-xl px-4 py-24 text-center">
      <SEO title={t.notFound.title} noindex />
      <p className="font-display text-7xl font-bold text-accent">404</p>
      <h1 className="mt-4 text-2xl font-semibold">{t.notFound.title}</h1>
      <Link to={path('/')} className="mt-8 inline-block text-neutral-300 underline hover:text-white">
        {t.notFound.home}
      </Link>
    </section>
  )
}
