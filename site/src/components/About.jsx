import { aboutStats } from '../data'
import Counter from './Counter'
import aboutPortrait from '../assets/about-portrait.png'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="wrap section-pad">
        <div className="about-grid">
          <div className="about-photo-col" data-reveal="">
            <div className="about-photo-media">
              <img src={aboutPortrait} alt="Karthikeyan at work" />
            </div>
          </div>

          <div className="about-copy" data-reveal="">
            <div className="eyebrow on-dark">About Me</div>
            <h2 className="about-title">
              Built two companies to solve one problem: helping businesses grow
            </h2>
            <p className="about-para">
              In 2022 I founded <strong>Digitals Info</strong> to give businesses a strong
              digital presence — websites, branding, and marketing that actually bring in
              customers.
            </p>
            <p className="about-para">
              As data became the deciding factor in business, I started{' '}
              <strong>kfold.co</strong> — turning numbers into clear insights so owners can
              make confident decisions.
            </p>
            <div className="about-stats">
              {aboutStats.map((s) => (
                <div key={s.label} className="about-stat">
                  <Counter
                    className="about-stat-num"
                    target={s.count}
                    suffix={s.suffix}
                    text={s.text}
                  />
                  <div className="about-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
