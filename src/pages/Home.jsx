import Hero from '../components/Hero'
import SEO from '../components/SEO'
import PostGrid from '../components/PostGrid'
import { posts } from '../data/posts'
import { useI18n } from '../i18n'

export default function Home() {
  const { t } = useI18n()

  return (
    <>
      <SEO website />
      <Hero />
      <section id="posts" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4 md:mb-10">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">{t.home.latest}</h2>
          <span className="shrink-0 text-sm text-muted">{t.home.count(posts.length)}</span>
        </div>
        <PostGrid posts={posts} />
      </section>
    </>
  )
}
