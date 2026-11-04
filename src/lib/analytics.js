// Google Analytics 4 loads only after the visitor accepts cookies (GDPR).
export const GA_ID = 'G-FBMVZZ1YMT'

const KEY = 'cookie-consent'
const OPEN_EVENT = 'cookie-settings'

let loaded = false

export function getConsent() {
  try {
    return localStorage.getItem(KEY)
  } catch {
    return null
  }
}

export function setConsent(value) {
  try {
    localStorage.setItem(KEY, value)
  } catch {
    // Private mode: the choice lasts until the tab closes.
  }
  if (value === 'granted') loadAnalytics()
  else revokeAnalytics()
}

export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_EVENT))
}

export function onOpenCookieSettings(handler) {
  window.addEventListener(OPEN_EVENT, handler)
  return () => window.removeEventListener(OPEN_EVENT, handler)
}

function gtag() {
  window.dataLayer.push(arguments)
}

export function loadAnalytics() {
  if (loaded) {
    window[`ga-disable-${GA_ID}`] = false
    window.gtag('consent', 'update', { analytics_storage: 'granted' })
    return
  }
  loaded = true

  window.dataLayer = window.dataLayer || []
  window.gtag = gtag
  gtag('consent', 'default', {
    analytics_storage: 'granted',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  })
  gtag('js', new Date())
  // Page views are sent by trackPageView on every route change.
  gtag('config', GA_ID, { send_page_view: false })
  trackPageView()

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  document.head.appendChild(script)
}

function revokeAnalytics() {
  if (loaded) window.gtag('consent', 'update', { analytics_storage: 'denied' })
  window[`ga-disable-${GA_ID}`] = true

  const domain = location.hostname.replace(/^www\./, '')
  for (const cookie of document.cookie.split('; ')) {
    const name = cookie.split('=')[0]
    if (!name.startsWith('_ga')) continue
    for (const d of ['', `; domain=.${domain}`]) {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${d}`
    }
  }
}

let lastPage = null

export function trackPageView() {
  if (!loaded || window[`ga-disable-${GA_ID}`]) return
  if (location.href === lastPage) return
  lastPage = location.href
  window.gtag('event', 'page_view', {
    page_location: location.href,
    page_title: document.title,
  })
}
