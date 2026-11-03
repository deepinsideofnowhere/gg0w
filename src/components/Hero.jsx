import { useEffect, useRef } from 'react'
import { useI18n } from '../i18n'
import { asset } from '../lib/base'

const ANGLE = -31 // поворот машины, градусы (минус — против часовой)
const CLEAR_AT = 0.6 // машина полностью съезжает с надписи, когда проскроллено 60% расстояния до верха надписи
const MIN_SPEED = 1.5 // на узких экранах расчётная скорость слишком мала — держим минимум

const SCROLL_DURATION = 1200 // мс; штатный smooth-скролл не настраивается, поэтому своя анимация

const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2)

// Плавный скролл к сетке постов (отступ под sticky-шапку берём из scroll-mt у #posts)
function scrollToPosts(e) {
  const target = document.getElementById('posts')
  if (!target) return
  e.preventDefault()

  const marginTop = parseFloat(getComputedStyle(target).scrollMarginTop) || 0
  const from = window.scrollY
  const to = target.getBoundingClientRect().top + from - marginTop

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    window.scrollTo(0, to)
    return
  }

  const start = performance.now()
  const step = (now) => {
    const t = Math.min((now - start) / SCROLL_DURATION, 1)
    window.scrollTo(0, from + (to - from) * easeInOutCubic(t))
    if (t < 1) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
}

export default function Hero() {
  const { t } = useI18n()
  const titleRef = useRef(null)
  const carRef = useRef(null)

  useEffect(() => {
    const title = titleRef.current
    const car = carRef.current
    const rad = (Math.abs(ANGLE) * Math.PI) / 180
    const cos = Math.cos(rad)
    const sin = Math.sin(rad)
    let speed = 0
    let frame = 0

    // Сколько машина должна проехать вдоль своей оси, чтобы целиком уйти с надписи,
    // и за сколько пикселей скролла это нужно успеть (пока надпись ещё в вьюпорте).
    const measure = () => {
      const carW = car.offsetWidth
      const carH = car.offsetHeight
      const titleH = title.offsetHeight
      const carHalfExtentY = (carH * cos + carW * sin) / 2
      const travel = (carHalfExtentY + titleH / 2) / cos
      const titleTop = title.getBoundingClientRect().top + window.scrollY
      speed = Math.max(travel / Math.max(titleTop * CLEAR_AT, 1), MIN_SPEED)
    }

    const render = () => {
      frame = 0
      const offset = window.scrollY * speed
      car.style.transform = `translate(-50%, -50%) rotate(${ANGLE}deg) translateY(${-offset}px)`
    }

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(render)
    }

    const onResize = () => {
      measure()
      render()
    }

    onResize()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)
    car.addEventListener('load', onResize)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
      car.removeEventListener('load', onResize)
    }
  }, [])

  return (
    <section
      className="relative isolate flex h-[calc(100svh-4rem)] min-h-[420px] items-center justify-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${asset('/assets/images/bg.png')})` }}
    >
      {/* затемнение снизу — плавный переход в фон страницы */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent from-70% to-ink" />

      <div ref={titleRef} className="relative w-[min(90vw,1100px)]">
        <h1>
          <img
            src={asset('/assets/images/hero-title.png')}
            alt="Mitsubishi Outlander PHEV Blog"
            className="w-full opacity-75 drop-shadow-[0_4px_24px_rgba(0,0,0,0.6)]"
          />
        </h1>

        {/* ширина 26% от надписи ≈ длина машины ~55% ширины надписи */}
        <img
          ref={carRef}
          src={asset('/assets/images/car-top.png')}
          alt=""
          className="pointer-events-none absolute top-1/2 left-1/2 w-[26%] drop-shadow-[0_30px_40px_rgba(0,0,0,0.8)] will-change-transform"
          style={{ transform: `translate(-50%, -50%) rotate(${ANGLE}deg)` }}
        />
      </div>

      <a
        href="#posts"
        onClick={scrollToPosts}
        aria-label={t.hero.toPosts}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-2xl text-neutral-400 hover:text-white"
      >
        ↓
      </a>
    </section>
  )
}
