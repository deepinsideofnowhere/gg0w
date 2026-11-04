import { Link } from 'react-router-dom'
import { useI18n } from '../i18n'
import { openCookieSettings } from '../lib/analytics'
import { asset } from '../lib/base'

export default function Footer() {
  const { t, path } = useI18n()
  const year = new Date().getFullYear()

  return (
    <footer className="mt-auto border-t border-line/60 bg-ink">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 py-10 sm:px-6 md:flex-row md:justify-between lg:px-8">
        <div>
          <img
            src={asset('/assets/images/logo.svg')}
            alt="Outlander PHEV Blog"
            width="479"
            height="90"
            className="h-6 w-auto sm:h-8"
          />
        </div>

        <nav className="flex flex-col items-center gap-4 text-sm md:flex-row">
          <Link
            to={path('/donate')}
            className="rounded-full bg-accent px-5 py-2 text-sm font-medium text-white transition hover:bg-accent-dark"
          >
            {t.footer.support}
          </Link>
        </nav>
      </div>
      <div className="flex flex-col items-center gap-2 border-t border-line/60 px-4 py-4 text-center text-xs text-muted sm:px-6 md:flex-row md:justify-between lg:px-8">
        <p>{t.footer.tagline}</p>
        <button type="button" onClick={openCookieSettings} className="underline-offset-4 hover:text-white hover:underline">
          {t.cookies.settings}
        </button>
        <p suppressHydrationWarning>© {year} Outlander PHEV Blog</p>
      </div>
    </footer>
  )
}
