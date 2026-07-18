import { useEffect } from 'react'

/**
 * Adds `.is-visible` to every `[data-reveal]` element once it scrolls
 * into view, driving the CSS fade/rise transition. Run once at mount.
 */
export function useReveal() {
  useEffect(() => {
    // Signals JS is active so the hidden pre-reveal state applies (see index.css).
    document.documentElement.classList.add('reveal-ready')

    const els = Array.from(document.querySelectorAll('[data-reveal]'))
    if (!els.length) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      els.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12 },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}
