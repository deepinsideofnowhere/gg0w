import { useEffect, useRef } from 'react'
import { useI18n } from '../i18n'

const LIGHTBOX_TILT = 0.4 // в попапе наклон слабее, чем в статье — фото крупное

// Попап с фотографией. images: [{ src, alt, caption, angle }]
export default function Lightbox({ images, index, onChange, onClose }) {
  const { t } = useI18n()
  const image = images[index]
  const closeRef = useRef(null)
  const touchX = useRef(null)
  const count = images.length

  const prev = () => onChange((index - 1 + count) % count)
  const next = () => onChange((index + 1) % count)

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  })

  // блокируем прокрутку страницы под попапом
  useEffect(() => {
    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => {
      document.body.style.overflow = overflow
    }
  }, [])

  const onTouchStart = (e) => (touchX.current = e.touches[0].clientX)
  const onTouchEnd = (e) => {
    if (touchX.current === null) return
    const dx = e.changedTouches[0].clientX - touchX.current
    touchX.current = null
    if (Math.abs(dx) > 50) (dx > 0 ? prev : next)()
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={image.caption || image.alt || t.lightbox.photo}
      className="fixed inset-0 z-100 flex items-center justify-center bg-black/85 backdrop-blur-sm transition duration-300 starting:opacity-0"
      onClick={onClose}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <figure
        key={image.src}
        onClick={(e) => e.stopPropagation()}
        className="bg-neutral-100 p-2 shadow-2xl transition duration-300 ease-out starting:scale-90 starting:opacity-0 sm:p-3"
        style={{ rotate: `${image.angle * LIGHTBOX_TILT}deg` }}
      >
        <img
          src={image.src}
          alt={image.alt ?? ''}
          className="block h-auto max-h-[78svh] w-auto max-w-[86vw] select-none"
          draggable="false"
        />
        {image.caption && (
          <figcaption className="max-w-[86vw] px-1 pt-2 text-center font-display text-sm text-neutral-700 italic sm:text-base">
            {image.caption}
          </figcaption>
        )}
      </figure>

      <button
        ref={closeRef}
        type="button"
        aria-label={t.lightbox.close}
        onClick={onClose}
        className="absolute top-3 right-3 rounded-full p-2 text-neutral-300 transition hover:bg-white/10 hover:text-white"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>

      {count > 1 && (
        <>
          <button
            type="button"
            aria-label={t.lightbox.prev}
            onClick={(e) => (e.stopPropagation(), prev())}
            className="absolute left-2 hidden rounded-full p-3 text-neutral-300 transition hover:bg-white/10 hover:text-white sm:block"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 5l-7 7 7 7" />
            </svg>
          </button>
          <button
            type="button"
            aria-label={t.lightbox.next}
            onClick={(e) => (e.stopPropagation(), next())}
            className="absolute right-2 hidden rounded-full p-3 text-neutral-300 transition hover:bg-white/10 hover:text-white sm:block"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <p className="absolute bottom-4 text-sm text-neutral-400">
            {index + 1} / {count}
          </p>
        </>
      )}
    </div>
  )
}
