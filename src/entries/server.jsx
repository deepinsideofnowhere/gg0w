import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { posts } from '../data/posts'
import { LANGS, localePath } from '../i18n'
import { BASE, SITE_URL } from '../lib/base'
import App from './App'

export { BASE, LANGS, SITE_URL, localePath }

export const pages = [
  { path: '/', lastmod: posts[0].date },
  { path: '/car' },
  { path: '/donate' },
  { path: '/about', noindex: true },
  ...posts.map((post) => ({ path: `/posts/${post.slug}`, lastmod: post.date })),
]

export function render(path) {
  return renderToString(
    <StaticRouter location={BASE + path} basename={BASE || '/'}>
      <App />
    </StaticRouter>,
  )
}
