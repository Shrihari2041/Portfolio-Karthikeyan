import { links, heroStats } from '../data'
import Counter from './Counter'
import heroPortrait from '../assets/hero-portrait.png'

export default function Hero() {
  return (
    <header id="home" className="wrap hero">
      <div className="hero-grid">
        <div className="hero-copy hero-in">
          <div className="badge">
            <span className="badge-dot" />
            Founder — Digitals Info &amp; kfold.co
          </div>
          <h1 className="hero-title">
            Helping your business get{' '}
            <span className="accent">found, trusted, and chosen.</span>
          </h1>
          <p className="hero-lede">
            I&apos;m Karthikeyan. I help small and growing businesses win more customers
            through professional websites, digital marketing, and smart use of data —
            clear plans, honest pricing, measurable results.
          </p>
          <div className="hero-actions">
            <a
              href={links.bookCall}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
            >
              Book a Free Discovery Call
            </a>
            <a href="#services" className="btn btn-ghost btn-lg">
              See What I Do
            </a>
          </div>
          <div className="hero-stats">
            {heroStats.map((s) => (
              <div key={s.label}>
                <Counter className="stat-num" target={s.count} suffix={s.suffix} />
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-photo-col">
          <div className="hero-photo-frame hero-in-photo">
            <div className="hero-photo-backing" />
            <div className="hero-photo-media">
              <img src={heroPortrait} alt="Karthikeyan, Business Growth Strategist" />
            </div>
            <div className="hero-photo-card">
              <div className="hero-photo-name">Karthikeyan</div>
              <div className="hero-photo-role">Business Growth Strategist</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
