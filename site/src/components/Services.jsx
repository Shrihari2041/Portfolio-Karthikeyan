import { services } from '../data'
import Icon from './Icon'

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="wrap section-pad">
        <div className="section-head" data-reveal="">
          <div className="eyebrow">What I Do</div>
          <h2>Everything your business needs to grow online</h2>
          <p>
            One partner for your website, marketing, branding, and data — so you can
            focus on running your business.
          </p>
        </div>

        <div className="card-grid card-grid--services">
          {services.map((svc) => (
            <div key={svc.title} className="service-card" data-reveal="">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
