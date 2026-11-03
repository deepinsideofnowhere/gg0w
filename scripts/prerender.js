// Пререндер после vite build: у каждой страницы готовый HTML с текстом и SEO-тегами.
// GitHub Pages отдаёт только реальные файлы, поэтому прямые ссылки открываются с кодом 200,
// а поисковики видят текст без выполнения JS. 404.html — для всех остальных адресов.
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { createServer } from 'vite'

const dist = resolve('dist')
const template = readFileSync(resolve(dist, 'index.html'), 'utf8')

const vite = await createServer({ server: { middlewareMode: true, hmr: false }, appType: 'custom', logLevel: 'error' })
const { LANGS, SITE_URL, localePath, pages, render } = await vite.ssrLoadModule('/src/entries/server.jsx')

// renderToString складывает title, meta и link в начало, переносим их в <head>
const HEAD_TAGS = /^(?:<title\b[^>]*>[^<]*<\/title>|<meta\b[^>]*>|<link\b[^>]*>)+/

function page(path, lang) {
  const html = render(path)
  const head = html.match(HEAD_TAGS)?.[0] ?? ''
  return template
    .replace('<html lang="en">', `<html lang="${lang}">`)
    .replace('</head>', `${head}</head>`)
    .replace('<div id="root"></div>', `<div id="root">${html.slice(head.length)}</div>`)
}

function write(file, content) {
  const target = resolve(dist, file)
  mkdirSync(dirname(target), { recursive: true })
  writeFileSync(target, content)
}

// '/' → index.html, '/ru/' → ru/index.html, '/posts/x' → posts/x.html
const fileFor = (path) => (path.endsWith('/') ? `${path.slice(1)}index.html` : `${path.slice(1)}.html`)

for (const lang of LANGS) {
  for (const { path } of pages) {
    const url = localePath(lang, path)
    write(fileFor(url), page(url, lang))
  }
}
write('404.html', template) // страницу соберёт браузер: язык зависит от адреса

const urls = pages
  .filter((item) => !item.noindex)
  .flatMap(({ path, lastmod }) => {
    const alternates = LANGS.map((lang) => `    <xhtml:link rel="alternate" hreflang="${lang}" href="${SITE_URL}${localePath(lang, path)}"/>`)
    return LANGS.map((lang) => [
      '  <url>',
      `    <loc>${SITE_URL}${localePath(lang, path)}</loc>`,
      ...(lastmod ? [`    <lastmod>${lastmod}</lastmod>`] : []),
      ...alternates,
      '  </url>',
    ].join('\n'))
  })

write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`)

await vite.close()
console.log(`prerendered ${pages.length * LANGS.length} pages, sitemap: ${urls.length} urls`)
