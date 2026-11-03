import { useAlternates, useI18n } from '../i18n'
import { SITE_URL } from '../lib/base'

const SITE_NAME = 'Mitsubishi Outlander PHEV'
const DEFAULT_IMAGE = '/assets/posts/car/01.jpg'
const AUTHOR = 'deepinsideofnowhere'

// Теги для поисковиков и соцсетей. React поднимает их в <head>, при сборке они попадают в HTML.
//   title       — заголовок страницы, без него общий заголовок блога
//   article     — { date, section }: страница статьи, добавляет разметку BlogPosting
//   website     — главная, добавляет разметку WebSite
//   noindex     — не индексировать
//   alternates  — false, если у страницы нет версии на другом языке
export default function SEO({ title, description, image = DEFAULT_IMAGE, article, website, noindex, alternates = true }) {
  const { lang, t } = useI18n()
  const links = useAlternates().map((alt) => ({ lang: alt.lang, href: SITE_URL + alt.to }))
  const canonical = links.find((link) => link.lang === lang).href
  const defaultHref = links[0].href // первый язык в LANGS — английский, язык по умолчанию

  const fullTitle = title ? `${title} — ${SITE_NAME}` : t.seo.title
  const summary = description ?? t.seo.description
  const imageUrl = SITE_URL + image
  const ogLocale = t.locale.replace('-', '_')

  const data = article
    ? {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'BlogPosting',
            headline: title,
            description: summary,
            image: imageUrl,
            datePublished: article.date,
            inLanguage: lang,
            mainEntityOfPage: canonical,
            articleSection: article.section,
            about: { '@type': 'Thing', name: SITE_NAME },
            author: { '@type': 'Person', name: AUTHOR },
          },
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: t.nav.home, item: `${SITE_URL}${lang === 'en' ? '/' : `/${lang}/`}` },
              { '@type': 'ListItem', position: 2, name: title, item: canonical },
            ],
          },
        ],
      }
    : website && {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: fullTitle,
        description: summary,
        url: canonical,
        inLanguage: lang,
      }

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={summary} />
      {noindex && <meta name="robots" content="noindex" />}
      {!noindex && <link rel="canonical" href={canonical} />}
      {!noindex && alternates && links.map((link) => (
        <link key={link.lang} rel="alternate" hrefLang={link.lang} href={link.href} />
      ))}
      {!noindex && alternates && <link rel="alternate" hrefLang="x-default" href={defaultHref} />}

      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content={article ? 'article' : 'website'} />
      <meta property="og:title" content={title ?? fullTitle} />
      <meta property="og:description" content={summary} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:locale" content={ogLocale} />
      {article && <meta property="article:published_time" content={article.date} />}
      {article && <meta property="article:section" content={article.section} />}
      <meta name="twitter:card" content="summary_large_image" />

      {data && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
        />
      )}
    </>
  )
}
