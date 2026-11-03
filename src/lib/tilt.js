// Наклон фотографий в статье — «приложенные бумажные фото».
// Угол псевдослучайный, но детерминированный (зависит от пути к файлу),
// поэтому не меняется между рендерами и визитами.

const MIN_ANGLE = 1 // меньше — выглядит как случайный перекос, а не наклон
const MAX_ANGLE = 5
const MIN_DIFF = 1 // соседние фото должны заметно отличаться по углу

// FNV-1a: строка → 32-битный seed
function hash(str) {
  let h = 0x811c9dc5
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i)
    h = Math.imul(h, 0x01000193)
  }
  return h >>> 0
}

// mulberry32: seed → генератор чисел [0, 1)
function random(seed) {
  return () => {
    seed = (seed + 0x6d2b79f5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

// Углы для списка фото одной статьи: направление чередуется,
// величина от MIN_ANGLE до MAX_ANGLE и отличается от предыдущей минимум на MIN_DIFF.
export function tiltAngles(srcs) {
  let prev = 0
  return srcs.map((src, i) => {
    const rand = random(hash(src))
    const sign = i === 0 ? (rand() < 0.5 ? -1 : 1) : -Math.sign(prev)
    let magnitude
    do {
      magnitude = MIN_ANGLE + rand() * (MAX_ANGLE - MIN_ANGLE)
    } while (Math.abs(magnitude - Math.abs(prev)) < MIN_DIFF)
    prev = Math.round(sign * magnitude * 5) / 5
    return prev
  })
}

// Доля ширины контейнера, при которой повёрнутое фото (с рамкой) в него помещается.
// Вертикальные кадры дополнительно ужимаем, чтобы не растягивались на несколько экранов.
export function fitWidth(width, height, angle) {
  const ratio = width && height ? height / width : 3 / 4
  const rad = (Math.abs(angle) * Math.PI) / 180
  const fit = 1 / (Math.cos(rad) + ratio * Math.sin(rad))
  const cap = ratio > 1 ? 0.6 : ratio > 0.9 ? 0.8 : 1
  return Math.min(fit * 0.94, cap)
}
