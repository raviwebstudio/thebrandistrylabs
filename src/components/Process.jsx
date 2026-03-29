import SectionHeader from './SectionHeader.jsx'
import { processSteps } from './data.js'

function Process() {
  return (
    <section className="section section--process" id="process">
      <div className="container">
        <SectionHeader
          eyebrow="Process"
          title="A clear operating system for turning strategy into steady growth."
          description="We keep the path focused: diagnose what is blocking results, launch what matters most, and scale what proves itself in the numbers."
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
