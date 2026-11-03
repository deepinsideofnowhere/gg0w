// Адрес сайта без слеша на конце: '' в корне домена, '/gg0w' на GitHub Pages без своего домена
export const BASE = import.meta.env.BASE_URL.replace(/\/$/, '')

// Адрес сайта для поисковиков: canonical, hreflang, sitemap
export const SITE_URL = 'https://gg0w.tech'

// Адрес файла из public/: '/assets/x.png' → '/gg0w/assets/x.png'
export const asset = (path) => BASE + path
