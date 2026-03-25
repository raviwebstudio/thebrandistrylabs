import SectionHeader from './SectionHeader.jsx'
import { caseStudies } from './data.js'

function CaseStudies() {
  return (
    <section className="section section--work" id="work">
      <div className="container">
        <SectionHeader
          eyebrow="Case studies"
          title="Proof, not promises."
          description="Every engagement is built around clearer positioning, better conversion paths, and stronger return on spend."
        />

        <div className="case-grid">
          {caseStudies.map((study, index) => (
            <article
              key={study.client}
              className="glass-card case-card"
              data-reveal={study.reveal}
              style={{ '--delay': `${index * 90}ms` }}
            >
              <span className="case-card__client">{study.client}</span>
              <p className="case-card__problem">{study.problem}</p>
              <strong className="case-card__result">{study.result}</strong>
              <p className="case-card__outcome">{study.outcome}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CaseStudies
