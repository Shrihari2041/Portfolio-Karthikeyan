import { useEffect, useState } from 'react'
import { navItems, links } from '../data'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  // Close the mobile menu if the viewport grows to desktop width.
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 820px)')
    const onChange = () => setMenuOpen(false)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const close = () => setMenuOpen(false)

  return (
    <nav className="nav">
      <div className="wrap nav-inner">
        <a href="#home" className="brand">
          Karthikeyan<span className="brand-dot">.</span>
        </a>

        <div className="nav-right">
          <div className="nav-links">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </div>
          <a href="#contact" className="btn btn-primary btn-sm nav-cta">
            Let&apos;s Connect
          </a>
          <button
            className="nav-toggle"
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="nav-mobile">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="nav-mobile-link" onClick={close}>
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn btn-primary nav-mobile-cta"
            onClick={close}
          >
            Let&apos;s Connect
          </a>
        </div>
      )}
    </nav>
  )
}
