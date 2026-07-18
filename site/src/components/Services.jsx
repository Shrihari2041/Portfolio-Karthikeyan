import { useEffect, useRef, useState } from 'react'
import { services } from '../data'
import Icon from './Icon'

const N = services.length
const pad2 = (n) => String(n).padStart(2, '0')

/** Per-card transform for the stacked deck.
 *  d = index - progress:  d<0 leaving (up + fade), d≈0 front, d>0 stacked below. */
function cardStyle(d) {
  if (d >= 0) {
    const c = Math.min(d, 3)
    return {
      transform: `translate(-50%, calc(-50% + ${c * 22}px)) scale(${1 - c * 0.05})`,
      opacity: d > 3.2 ? 0 : 1,
      zIndex: 100 - Math.round(d * 10),
    }
  }
  const t = Math.max(d, -1) // -1..0
  return {
    transform: `translate(-50%, calc(-50% + ${t * 84}px)) scale(${1 + t * 0.04})`,
    opacity: Math.max(0, 1 + t * 1.2),
    zIndex: 200,
  }
}

function ServiceCardBody({ svc, i }) {
  return (
    <>
      <span className="stack-ghost" aria-hidden="true">{pad2(i + 1)}</span>
      <div className="stack-index">
        {pad2(i + 1)} <span>/ {pad2(N)}</span>
      </div>
      <div className="service-icon">
        <Icon paths={svc.icon} />
      </div>
      <h3 className="card-title">{svc.title}</h3>
      <p className="card-desc">{svc.desc}</p>
      <div className="tag-row">
        {svc.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </>
  )
}

export default function Services() {
  const sectionRef = useRef(null)
  const [progress, setProgress] = useState(0) // raw 0 .. N-1
  const [reduce, setReduce] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => setReduce(mq.matches)
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  useEffect(() => {
    if (reduce) return
    const el = sectionRef.current
    if (!el) return
    let raf = 0
    const update = () => {
      raf = 0
      const total = el.offsetHeight - window.innerHeight
      const scrolled = Math.min(Math.max(-el.getBoundingClientRect().top, 0), total)
      const prog = total > 0 ? scrolled / total : 0
      setProgress(prog * (N - 1))
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
  }, [reduce])

  const head = (
    <div className="section-head" data-reveal="">
      <div className="eyebrow on-dark">What I Do</div>
      <h2>Everything your business needs to grow online</h2>
    </div>
  )

  // Reduced-motion / no-JS friendly: plain vertical list, fully readable.
  if (reduce) {
    return (
      <section id="services" className="services-stack services-stack--static">
        <div className="wrap section-pad">
          {head}
          <div className="stack-static-grid">
            {services.map((svc, i) => (
              <article key={svc.title} className="stack-card is-static">
                <ServiceCardBody svc={svc} i={i} />
              </article>
            ))}
          </div>
        </div>
      </section>
    )
  }

  // Dwell easing: hold each card, then transition — so cards advance one at a time.
  const seg = Math.min(Math.floor(progress), N - 1)
  const frac = progress - seg
  const HOLD = 0.45
  let t = frac <= HOLD ? 0 : (frac - HOLD) / (1 - HOLD)
  t = t * t * (3 - 2 * t) // smoothstep
  const effProgress = seg + t
  const prog01 = N > 1 ? effProgress / (N - 1) : 0
  const activeIndex = Math.round(effProgress)

  return (
    <section
      id="services"
      className="services-stack"
      ref={sectionRef}
      style={{ height: `calc(${N} * 112vh)` }}
    >
      <div className="services-sticky">
        <div className="wrap">
          {head}
          <div className="stack-viewport">
            {/* Left rail: line with start/end caps + progress fill + step dots */}
            <div className="stack-rail" aria-hidden="true">
              <div className="rail-track">
                <div className="rail-fill" style={{ height: `${prog01 * 100}%` }} />
              </div>
              <div className="rail-dots">
                {services.map((_, i) => (
                  <span
                    key={i}
                    className={`stack-dot${i === activeIndex ? ' is-active' : ''}${
                      i < activeIndex ? ' is-done' : ''
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="stack-cards">
              {services.map((svc, i) => (
                <article key={svc.title} className="stack-card" style={cardStyle(i - effProgress)}>
                  <ServiceCardBody svc={svc} i={i} />
                </article>
              ))}
            </div>

            {/* Right numeric index */}
            <div className="stack-nums" aria-hidden="true">
              {services.map((_, i) => (
                <span
                  key={i}
                  className={`stack-num${i === activeIndex ? ' is-active' : ''}${
                    i < activeIndex ? ' is-done' : ''
                  }`}
                >
                  {pad2(i + 1)}
                </span>
              ))}
            </div>

            {/* Mobile segmented indicator */}
            <div className="stack-mobile-bar" aria-hidden="true">
              {services.map((_, i) => (
                <span
                  key={i}
                  className={`mbar-seg${i === activeIndex ? ' is-active' : ''}${
                    i < activeIndex ? ' is-done' : ''
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
