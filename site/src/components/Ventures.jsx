import { ventures } from '../data'

export default function Ventures() {
  return (
    <section id="ventures" className="wrap section-pad">
      <div className="section-head" data-reveal="">
        <div className="eyebrow">My Companies</div>
        <h2>Two teams, one goal — your growth</h2>
      </div>

      <div className="card-grid card-grid--ventures">
        {ventures.map((v) => (
          <a
            key={v.name}
            href={v.url}
            target="_blank"
            rel="noopener noreferrer"
            className="venture-card"
            data-reveal=""
          >
            <div className="venture-head">
              <div className="venture-brand">
                <img src={v.logo} alt={`${v.name} logo`} className="venture-logo" />
                <div className="venture-name">{v.name}</div>
              </div>
              <span className="venture-arrow" aria-hidden="true">
                →
              </span>
            </div>
            <div className="venture-tagline">{v.tagline}</div>
            <p className="card-desc">{v.desc}</p>
            <div className="tag-row">
              {v.tags.map((tag) => (
                <span key={tag} className="tag tag--onwhite">
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
