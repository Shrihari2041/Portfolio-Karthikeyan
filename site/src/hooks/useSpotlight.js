import { useEffect } from 'react'

/**
 * Soft cursor-following glow on every `[data-spotlight]` section.
 * Sets `--mx`/`--my` (see components.css) and toggles `.spot-active`.
 * Skipped on touch devices and when reduced motion is requested.
 */
export function useSpotlight() {
  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduce) return

    const els = Array.from(document.querySelectorAll('[data-spotlight]'))
    if (!els.length) return

    const cleanups = els.map((el) => {
      const move = (e) => {
        const r = el.getBoundingClientRect()
        el.style.setProperty('--mx', `${e.clientX - r.left}px`)
        el.style.setProperty('--my', `${e.clientY - r.top}px`)
      }
      const enter = () => el.classList.add('spot-active')
      const leave = () => el.classList.remove('spot-active')
      el.addEventListener('pointermove', move)
      el.addEventListener('pointerenter', enter)
      el.addEventListener('pointerleave', leave)
      return () => {
        el.removeEventListener('pointermove', move)
        el.removeEventListener('pointerenter', enter)
        el.removeEventListener('pointerleave', leave)
      }
    })
    return () => cleanups.forEach((fn) => fn())
  }, [])
}
