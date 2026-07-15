import { useEffect, useRef, useState } from 'react'

/**
 * Counts up from 0 to `target` (easing out) the first time it enters view,
 * then holds. Renders `text` verbatim instead when provided (e.g. "End-to-End").
 */
export default function Counter({ target, suffix = '', text = null, className, style }) {
  const ref = useRef(null)
  const [display, setDisplay] = useState(text ?? `0${suffix}`)

  useEffect(() => {
    if (text != null) return
    const el = ref.current
    if (!el) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setDisplay(`${target}${suffix}`)
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return
          io.unobserve(el)
          const t0 = performance.now()
          const dur = 1400
          const tick = (now) => {
            const p = Math.min(1, (now - t0) / dur)
            const eased = 1 - Math.pow(1 - p, 3)
            setDisplay(`${Math.round(target * eased)}${suffix}`)
            if (p < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        })
      },
      { threshold: 0.5 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [target, suffix, text])

  return (
    <div ref={ref} className={className} style={style}>
      {text != null ? text : display}
    </div>
  )
}
