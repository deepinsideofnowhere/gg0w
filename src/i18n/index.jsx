import { createContext, useContext } from 'react'
import { useLocation } from 'react-router-dom'
import en from './en'
import ru from './ru'

export const DEFAULT_LANG = 'en'
export const LANGS = ['en', 'ru']
const DICTS = { en, ru }

const LangContext = createContext(DEFAULT_LANG)
export const LangProvider = LangContext.Provider

export function localePath(lang, path) {
  if (lang === DEFAULT_LANG) return path
  return `/${lang}${path}`
}

function stripLang(pathname) {
  for (const lang of LANGS) {
    if (lang === DEFAULT_LANG) continue
    if (pathname === `/${lang}`) return '/'
    if (pathname.startsWith(`/${lang}/`)) return pathname.slice(lang.length + 1)
  }
  return pathname
}

export function useI18n() {
  const lang = useContext(LangContext)
  const t = DICTS[lang]
  return {
    lang,
    t,
    path: (p) => localePath(lang, p),
    formatDate: (iso) => new Date(iso).toLocaleDateString(t.locale, { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }),
  }
}

export function useAlternates() {
  const { pathname } = useLocation()
  const base = stripLang(pathname).replace(/(?<=.)\/$/, '')
  return LANGS.map((lang) => ({ lang, to: localePath(lang, base) }))
}
