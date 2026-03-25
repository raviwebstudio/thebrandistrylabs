import SectionHeader from './SectionHeader.jsx'
import { services } from './data.js'

function Services() {
  return (
    <section className="section section--services" id="services">
      <div className="container">
        <SectionHeader
          eyebrow="Services"
          title="Built for brands that need strategy, speed, and measurable growth."
          description="We combine channel expertise, conversion thinking, and creative direction into one focused growth engine."
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
