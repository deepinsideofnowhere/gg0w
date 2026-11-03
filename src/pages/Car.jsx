import PostContent from '../components/PostContent'
import SEO from '../components/SEO'
import { carPost, getPostText } from '../data/posts'
import { useI18n } from '../i18n'

export default function Car() {
  const { lang } = useI18n()
  const text = getPostText(carPost, lang)

  return (
    <>
      <SEO title={text.title} description={text.excerpt} />

      <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 md:py-20">
        <h1 lang={text.lang} className="font-display text-4xl font-bold sm:text-5xl">{text.title}</h1>
        <div lang={text.lang} className="mt-10">
          <PostContent blocks={text.content} />
        </div>
      </article>
    </>
  )
}
