import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { LangProvider } from '../i18n'
import Header from './Header'
import Footer from './Footer'
import CookieBanner from './CookieBanner'
import { trackPageView } from '../lib/analytics'

export default function Layout({ lang }) {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
    trackPageView()
  }, [pathname])

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  return (
    <LangProvider value={lang}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <CookieBanner />
      </div>
    </LangProvider>
  )
}
