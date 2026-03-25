import SectionHeader from './SectionHeader.jsx'
import { processSteps } from './data.js'

function Process() {
  return (
    <section className="section section--process">
      <div className="container">
        <SectionHeader
          eyebrow="Process"
          title="A clear path from audit to scale."
          description="We keep the system simple: diagnose, prioritize, execute, and compound what performs."
        />

        <div className="process-grid">
          {processSteps.map(({ title, description, icon }, index) => (
            <article
              key={title}
              className="process-step"
              data-reveal="up"
              style={{ '--delay': `${index * 80}ms` }}
            >
              <div className="process-step__icon">{icon()}</div>
              <span className="process-step__index">0{index + 1}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
