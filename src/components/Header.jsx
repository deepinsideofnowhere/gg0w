import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useAlternates, useI18n } from '../i18n'
import { asset } from '../lib/base'

function LangSwitch() {
  const { lang, t } = useI18n()
  const alternates = useAlternates()

  return (
    <nav aria-label={t.nav.language} className="flex items-center rounded-full border border-line p-0.5 text-xs font-semibold">
      {alternates.map((alt) => (
        <Link
          key={alt.lang}
          to={alt.to}
          hrefLang={alt.lang}
          aria-current={alt.lang === lang ? 'true' : undefined}
          className="rounded-full px-2.5 py-1 uppercase text-neutral-400 transition hover:text-white aria-current:bg-neutral-700 aria-current:text-white"
        >
          {alt.lang}
        </Link>
      ))}
    </nav>
  )
}

function Burger({ open }) {
  const bar = 'absolute left-0 h-[3px] w-full rounded-full bg-current transition-transform duration-300 ease-out motion-reduce:transition-none'
  return (
    <span aria-hidden="true" className="relative block h-5 w-7">
      <span className={`${bar} top-[5px] ${open ? 'translate-y-[4px] rotate-45' : ''}`} />
      <span className={`${bar} top-[13px] ${open ? '-translate-y-[4px] -rotate-45' : ''}`} />
    </span>
  )
}

function MobileMenu({ open, onClose }) {
  const { t, path } = useI18n()
  const items = [
    // { to: path('/about'), label: t.nav.about },
    { to: path('/car'), label: t.nav.car },
  ]
  const reveal = (i) => ({
    className: `transition duration-500 ease-out motion-reduce:transition-none ${open ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`,
    style: { transitionDelay: open ? `${150 + i * 70}ms` : '0ms' },
  })

  return (
    <div className={`fixed inset-x-0 top-16 bottom-0 z-40 overflow-hidden md:hidden ${open ? '' : 'pointer-events-none'}`}>
      <div
        id="mobile-menu"
        inert={!open}
        className={`flex h-full flex-col justify-between overflow-y-auto bg-ink px-4 pt-10 pb-10 transition-transform duration-500 ease-[cubic-bezier(0.7,0,0.2,1)] motion-reduce:transition-none sm:px-6 ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <nav className="flex flex-col gap-5">
          {items.map((item, i) => (
            <div key={item.to} {...reveal(i)}>
              <NavLink
                to={item.to}
                end
                onClick={onClose}
                className="block text-[clamp(1.75rem,9vw,2.5rem)] leading-tight font-bold text-white uppercase transition-colors hover:text-accent aria-[current=page]:text-accent"
              >
                {item.label}
              </NavLink>
            </div>
          ))}
        </nav>

        <div {...reveal(items.length)}>
          <p className="mb-3 text-sm text-muted">{t.nav.language}</p>
          <div className="flex">
            <LangSwitch />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const { t, path } = useI18n()

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    if (!open) return
    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    const desktop = window.matchMedia('(min-width: 48rem)')
    const onResize = () => desktop.matches && setOpen(false)
    document.addEventListener('keydown', onKey)
    desktop.addEventListener('change', onResize)
    return () => {
      document.body.style.overflow = overflow
      document.removeEventListener('keydown', onKey)
      desktop.removeEventListener('change', onResize)
    }
  }, [open])

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-line/60 bg-ink/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <Link to={path('/')} aria-label={t.nav.home} className="min-w-0 shrink">
            <img
              src={asset('/assets/images/logo.svg')}
              alt="Outlander PHEV Blog"
              width="479"
              height="90"
              className="h-6 w-auto max-w-full object-contain object-left sm:h-8"
            />
          </Link>

          <div className="flex items-center gap-3 md:gap-8">
            <Link to={path('/car')} className="hidden text-sm text-neutral-300 transition hover:text-white md:block">
              {t.nav.car}
            </Link>
            <div className="hidden md:block">
              <LangSwitch />
            </div>
            <Link
              to={path('/donate')}
              className="rounded-full bg-accent px-5 py-2 text-sm font-medium text-white transition hover:bg-accent-dark"
            >
              {t.nav.support}
            </Link>
            <button
              type="button"
              className="-mr-2 p-2 text-white md:hidden"
              aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
            >
              <Burger open={open} />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  )
}
