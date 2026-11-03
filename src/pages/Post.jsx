import { Link, useParams } from 'react-router-dom'
import PostContent from '../components/PostContent'
import PostGrid from '../components/PostGrid'
import SEO from '../components/SEO'
import { getPost, getPostText, posts } from '../data/posts'
import { localePath, useI18n } from '../i18n'
import NotFound from './NotFound'

export default function Post() {
  const { slug } = useParams()
  const { lang, t, path, formatDate } = useI18n()
  const post = getPost(slug)

  if (!post) return <NotFound />

  const text = getPostText(post, lang)
  const translated = text.lang === lang
  const related = posts.filter((p) => p.slug !== slug).slice(0, 3)

  return (
    <>
      <SEO
        title={text.title}
        description={text.excerpt}
        image={post.cover}
        article={{ date: post.date, section: t.categories[post.category] }}
        noindex={!translated}
        alternates={getPostText(post, 'en').lang === 'en'}
      />

      <article className="mx-auto max-w-4xl px-4 pt-8 pb-16 sm:px-6 md:pt-12">
        <Link to={path('/')} className="text-sm text-muted hover:text-white">{t.post.back}</Link>

        {!translated && (
          <p className="mt-6 rounded-xl border border-accent/30 bg-accent/10 p-4 text-sm leading-relaxed text-neutral-200">
            {t.post.notTranslated}{' '}
            <Link
              to={localePath(text.lang, `/posts/${slug}`)}
              hrefLang={text.lang}
              className="whitespace-nowrap font-medium text-white underline decoration-accent underline-offset-4"
            >
              {t.post.originalLink}
            </Link>
          </p>
        )}

        <header className="mt-6">
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted">
            <span className="font-medium uppercase tracking-wider text-accent">{t.categories[post.category]}</span>
            <span>·</span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span>·</span>
            <span>{t.post.readTime(text.readTime)}</span>
          </div>
          <h1 lang={text.lang} className="mt-4 font-display text-3xl leading-tight font-bold sm:text-4xl md:text-5xl">
            {text.title}
          </h1>
        </header>

        <div lang={text.lang} className="mt-10">
          <PostContent blocks={text.content} />
        </div>

        <aside className="mt-14 rounded-2xl border border-line bg-surface p-6 text-center sm:p-8">
          <p className="font-display text-xl font-bold">{t.post.supportTitle}</p>
          <p className="mt-2 text-sm text-neutral-400">{t.post.supportText}</p>
          <Link
            to={path('/donate')}
            className="mt-5 inline-block rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition hover:bg-accent-dark"
          >
            {t.nav.support}
          </Link>
        </aside>
      </article>

      {related.length > 0 && (
        <section className="border-t border-line/60">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
            <h2 className="mb-8 font-display text-2xl font-bold sm:text-3xl">{t.post.related}</h2>
            <PostGrid posts={related} />
          </div>
        </section>
      )}
    </>
  )
}
