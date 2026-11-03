import SEO from '../components/SEO'
import { useI18n } from '../i18n'

// Страница «Об авторе». Сюда позже будет размещено CV.
export default function About() {
  const { t } = useI18n()

  return (
    <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 md:py-20">
      {/* TODO: убрать noindex, когда появится CV, и из pages в src/entries/server.jsx */}
      <SEO title={t.about.title} noindex />
      <h1 className="font-display text-4xl font-bold sm:text-5xl">{t.about.title}</h1>

      {/* TODO: заменить на CV */}
      <div className="mt-10 rounded-2xl border border-dashed border-line p-8 text-center text-muted sm:p-12">
        {t.about.placeholder}
      </div>
    </section>
  )
}
