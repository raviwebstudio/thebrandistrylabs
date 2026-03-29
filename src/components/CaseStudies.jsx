import SectionHeader from './SectionHeader.jsx'
import { caseStudies, testimonials } from './data.js'

function CaseStudies() {
  return (
    <section className="section section--work" id="work">
      <div className="container">
        <SectionHeader
          eyebrow="Case studies"
          title="Proof built on real business outcomes, not vague marketing promises."
          description="Each engagement is designed to fix a specific growth bottleneck, improve conversion paths, and turn marketing spend into stronger revenue."
        />

        <div className="case-grid">
          {caseStudies.map((study, index) => (
            <article
              key={study.client}
              className="glass-card case-card"
              data-reveal="up"
              style={{ '--delay': `${index * 70}ms` }}
            >
              <span className="case-card__client">{study.clientType}</span>
              <h3 className="case-card__name">{study.client}</h3>

              <div className="case-card__stack">
                <div className="case-card__detail">
                  <span className="case-card__label">Problem</span>
                  <p>{study.problem}</p>
                </div>
                <div className="case-card__detail">
                  <span className="case-card__label">Solution</span>
                  <p>{study.solution}</p>
                </div>
              </div>

              <strong className="case-card__result">{study.result}</strong>
              <p className="case-card__outcome">{study.detail}</p>
            </article>
          ))}
        </div>

        <div className="social-proof">
          <div className="social-proof__intro" data-reveal="up">
            <span className="section-tag">Testimonials</span>
            <h3>What brands say after the growth system starts working.</h3>
            <p>
              Short feedback, clear outcomes, and the kind of trust that comes from seeing results
              show up in the numbers.
            </p>
          </div>

          <div className="testimonial-grid">
            {testimonials.map((testimonial, index) => (
              <article
                key={testimonial.name}
                className="glass-card testimonial-card"
                data-reveal="up"
                style={{ '--delay': `${80 + index * 90}ms` }}
              >
                <p className="testimonial-card__quote">"{testimonial.quote}"</p>
                <div className="testimonial-card__meta">
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.businessType}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CaseStudies
