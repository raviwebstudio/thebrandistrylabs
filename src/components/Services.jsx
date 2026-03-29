import SectionHeader from './SectionHeader.jsx'
import { services } from './data.js'

function Services() {
  return (
    <section className="section section--services" id="services">
      <div className="container">
        <SectionHeader
          eyebrow="Services"
          title="Growth services built to turn clicks, reach, and demand into paying customers."
          description="We connect paid media, organic growth, creative strategy, and conversion optimization so every channel pushes toward measurable business outcomes."
        />

        <div className="services-grid">
          {services.map(({ title, description, icon, modifier }, index) => (
            <article
              key={title}
              className={`glass-card service-card ${modifier ?? ''}`.trim()}
              data-reveal="up"
              style={{ '--delay': `${index * 90}ms` }}
            >
              <div className="service-card__icon">{icon()}</div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
