import { links } from '../data'

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="wrap section-pad">
        <div className="contact-grid">
          <div className="contact-copy" data-reveal="">
            <div className="eyebrow on-dark">Get in Touch</div>
            <h2 className="contact-title">Let&apos;s build something meaningful together</h2>
            <p className="contact-lede">
              Whether you need a website, more customers, or clearer insight into your
              numbers — tell me about your business and I&apos;ll show you a practical way
              forward. The first call is free.
            </p>
            <div className="contact-actions">
              <a
                href={links.bookCall}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg"
              >
                Book a Free Discovery Call
              </a>
              <a
                href={links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-dark btn-lg"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="contact-cards" data-reveal="">
            <a href={`mailto:${links.email}`} className="contact-row">
              <span className="contact-row-label">Email</span>
              <span className="contact-row-value">{links.email}</span>
            </a>
            <a href={`tel:${links.phone}`} className="contact-row">
              <span className="contact-row-label">Phone</span>
              <span className="contact-row-value">{links.phoneDisplay}</span>
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-row"
            >
              <span className="contact-row-label">LinkedIn</span>
              <span className="contact-row-value">{links.linkedinDisplay}</span>
            </a>
            <div className="contact-row contact-row--static">
              <span className="contact-row-label">Companies</span>
              <span className="contact-row-value">
                <a href={links.digitalsInfo} target="_blank" rel="noopener noreferrer" className="teal-link">
                  Digitals Info
                </a>{' '}
                ·{' '}
                <a href={links.kfold} target="_blank" rel="noopener noreferrer" className="teal-link">
                  kfold.co
                </a>
              </span>
            </div>
          </div>
        </div>

        <div className="contact-footer">
          <span>© 2026 Karthikeyan. All rights reserved.</span>
          <span>Founder · Entrepreneur · Business Growth Strategist</span>
        </div>
      </div>
    </section>
  )
}
