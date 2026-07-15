import { steps } from '../data'

export default function Process() {
  return (
    <section id="process" className="wrap section-pad">
      <div className="section-head" data-reveal="">
        <div className="eyebrow">How It Works</div>
        <h2>Simple, transparent, and built around your goals</h2>
      </div>

      <div className="card-grid card-grid--process">
        {steps.map((step) => (
          <div key={step.num} className="step-card" data-reveal="">
            <div className="step-num">{step.num}</div>
            <h3 className="card-title">{step.title}</h3>
            <p className="card-desc">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
