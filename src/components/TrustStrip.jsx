import { trustStats } from './data.js'

function TrustStrip() {
  return (
    <section className="trust-strip">
      <div className="container">
        <div className="trust-strip__inner glass-band" data-reveal="up">
          {trustStats.map((stat) => (
            <div key={stat.label} className="trust-stat">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustStrip
