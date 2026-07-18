import { useEffect, useRef, useState } from 'react'
import { steps } from '../data'

export default function Process() {
  const tlRef = useRef(null)
  const [progress, setProgress] = useState(0) // 0..1 line fill

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setProgress(1)
      return
    }
    const el = tlRef.current
    if (!el) return
    let raf = 0
    const update = () => {
      raf = 0
      const r = el.getBoundingClientRect()
      const vh = window.innerHeight
      // Fill as the timeline travels from 80% -> 45% of the viewport.
      const span = r.height * 0.75
      const p = (vh * 0.8 - r.top) / span
      setProgress(Math.min(Math.max(p, 0), 1))
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  const reached = progress * (steps.length - 1)

  return (
    <section id="process" className="wrap section-pad">
      <div className="section-head" data-reveal="">
        <div className="eyebrow">How It Works</div>
        <h2>Simple, transparent, and built around your goals</h2>
      </div>

      <div className="timeline" ref={tlRef}>
        <div className="timeline-line">
          <div className="timeline-fill" style={{ height: `${progress * 100}%` }} />
        </div>
        {steps.map((step, i) => (
          <div key={step.num} className="timeline-step" data-reveal="">
            <div className={`timeline-node${reached >= i - 0.35 ? ' is-active' : ''}`}>
              {step.num}
            </div>
            <div className="timeline-content">
              <h3 className="card-title">{step.title}</h3>
              <p className="card-desc">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
