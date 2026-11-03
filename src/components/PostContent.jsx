import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useI18n } from '../i18n'
import { BASE, asset } from '../lib/base'
import { fitWidth, tiltAngles } from '../lib/tilt'
import Lightbox from './Lightbox'

export default function PostContent({ blocks }) {
  const navigate = useNavigate()
  const { t, path } = useI18n()
  const [open, setOpen] = useState(null) // индекс фото в лайтбоксе

  const { images, imageIndex } = useMemo(() => {
    const list = blocks.filter((b) => b.type === 'image')
    const angles = tiltAngles(list.map((b) => b.src))
    return {
      images: list.map((b, n) => ({ ...b, src: asset(b.src), angle: angles[n] })),
      imageIndex: new Map(list.map((b, n) => [b, n])),
    }
  }, [blocks])

  const onClick = (e) => {
    const link = e.target.closest('a')
    const href = link?.getAttribute('href')
    if (!href?.startsWith('/') || link.target || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return
    e.preventDefault()
    navigate(href.slice(BASE.length))
  }

  return (
    <div
      onClick={onClick}
      className="space-y-6 text-base leading-relaxed sm:text-lg text-neutral-300 [&_a]:text-white [&_a]:underline [&_a]:decoration-accent [&_a]:underline-offset-4 [&_a:hover]:decoration-2 [&_b]:font-semibold [&_b]:text-neutral-100"
    >
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'h2':
            return <h2 key={i} className="pt-4 font-display text-2xl font-bold text-white sm:text-3xl">{block.text}</h2>
          case 'h3':
            return <h3 key={i} className="pt-2 font-display text-xl font-bold text-white">{block.text}</h3>
          case 'quote':
            return (
              <blockquote key={i} className="border-l-4 border-accent pl-5 font-display text-xl text-neutral-100 italic">
                {block.text}
              </blockquote>
            )
          case 'code':
            return (
              <pre key={i} lang="en" className="overflow-x-auto rounded-xl border border-line bg-surface p-4 font-mono text-sm leading-relaxed text-neutral-200 sm:p-5">
                <code>{block.text}</code>
              </pre>
            )
          case 'list': {
            const items = block.items.map((item, j) => <li key={j}>{item}</li>)
            return block.start === undefined
              ? <ul key={i} className="list-disc space-y-2 pl-6 marker:text-accent">{items}</ul>
              : <ol key={i} start={block.start} className="list-decimal space-y-2 pl-8 marker:text-accent">{items}</ol>
          }
          case 'image': {
            const n = imageIndex.get(block)
            const { angle } = images[n]
            return (
              <figure
                key={i}
                className="mx-auto my-10 bg-neutral-100 p-2 shadow-xl shadow-black/50 transition duration-300 hover:scale-102 sm:my-12 sm:p-3"
                style={{ width: `${fitWidth(block.width, block.height, angle) * 100}%`, rotate: `${angle}deg` }}
              >
                <button
                  type="button"
                  onClick={() => setOpen(n)}
                  aria-label={t.lightbox.enlarge(block.caption)}
                  className="block w-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  <img
                    src={asset(block.src)}
                    alt={block.alt ?? ''}
                    width={block.width}
                    height={block.height}
                    loading="lazy"
                    className="block h-auto w-full bg-neutral-300"
                  />
                </button>
                {block.caption && (
                  <figcaption className="px-1 pt-2 text-center font-display text-sm leading-snug text-neutral-700 italic">
                    {block.caption}
                  </figcaption>
                )}
              </figure>
            )
          }
          default:
            return block.html
              ? <p key={i} dangerouslySetInnerHTML={{ __html: localizeLinks(block.html, path) }} />
              : <p key={i}>{block.text}</p>
        }
      })}

      {open !== null && <Lightbox images={images} index={open} onChange={setOpen} onClose={() => setOpen(null)} />}
    </div>
  )
}

function localizeLinks(html, path) {
  return html.replace(/href="(\/[^/"][^"]*)"/g, (_, href) => `href="${BASE}${path(href)}"`)
}
