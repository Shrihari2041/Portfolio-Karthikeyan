import { industries } from '../data'

export default function Industries() {
  // Duplicate the list so the marquee can loop seamlessly (-50% keyframe).
  const loop = [...industries, ...industries]

  return (
    <section id="industries" className="industries">
      <div className="wrap industries-label">Industries I&apos;ve worked with</div>
      <div className="marquee">
        <div className="marquee-track">
          {loop.map((ind, i) => (
            <span key={`${ind}-${i}`} className="industry-pill">
              {ind}
            </span>
          ))}
        </div>
        <div className="marquee-fade marquee-fade--left" />
        <div className="marquee-fade marquee-fade--right" />
      </div>
    </section>
  )
}
