import { Link } from 'react-router-dom'
import { getPostText } from '../data/posts'
import { useI18n } from '../i18n'
import PostCover from './PostCover'

export default function PostCard({ post }) {
  const { lang, t, path, formatDate } = useI18n()
  const text = getPostText(post, lang)
  const href = path(`/posts/${post.slug}`)

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-surface transition hover:-translate-y-1 hover:border-neutral-600">
      <Link to={href} className="block aspect-[16/10] overflow-hidden">
        <PostCover post={post} className="h-full w-full transition duration-500 group-hover:scale-105" />
      </Link>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted">
          <span className="font-medium uppercase tracking-wider text-accent">{t.categories[post.category]}</span>
          <span>·</span>
          <time dateTime={post.date} className="whitespace-nowrap">{formatDate(post.date)}</time>
          {text.lang !== lang && (
            <span className="rounded border border-line px-1.5 py-0.5 font-semibold uppercase">{text.lang}</span>
          )}
        </div>

        <h3 lang={text.lang} className="mt-3 font-display text-xl leading-snug font-bold">
          <Link to={href} className="hover:text-neutral-300">
            {text.title}
          </Link>
        </h3>

        <p lang={text.lang} className="mt-3 line-clamp-3 text-sm text-neutral-400">{text.excerpt}</p>

        <div className="mt-auto flex items-center justify-between pt-5 text-xs text-muted">
          <span>{t.post.readTime(text.readTime)}</span>
          <Link to={href} className="font-medium text-neutral-200 group-hover:text-white">
            {t.post.read}
          </Link>
        </div>
      </div>
    </article>
  )
}
