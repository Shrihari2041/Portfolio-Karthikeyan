import { testimonials } from '../data'

export default function Testimonials() {
  return (
    <section id="testimonials" className="wrap section-pad">
      <div className="section-head" data-reveal="">
        <div className="eyebrow">Results</div>
        <h2>What business owners say</h2>
      </div>

      <div className="card-grid card-grid--testimonials">
        {testimonials.map((t) => (
          <div key={t.company} className="testimonial-card" data-reveal="">
            <div className="quote-mark" aria-hidden="true">
              &ldquo;
            </div>
            <p className="testimonial-quote">{t.quote}</p>
            <div className="testimonial-author">
              <div className="avatar">{t.initials}</div>
              <div>
                <div className="author-role">{t.role}</div>
                <div className="author-company">{t.company}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
