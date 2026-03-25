import SectionHeader from './SectionHeader.jsx'

function About() {
  return (
    <section className="section section--about" id="about">
      <div className="container about-grid">
        <div data-reveal="left">
          <SectionHeader
            eyebrow="About"
            title="A data-driven, creative, performance-focused agency."
            description="The Brandistry Labs helps ambitious brands align sharp positioning with high-conversion execution, so every click, creative, and campaign works harder."
          />
        </div>

        <div className="about-cards" data-reveal="right">
          <article className="glass-card about-card">
            <span className="about-card__label">Creative + Analytics</span>
            <p>We pair bold ideas with real performance data to make faster, smarter marketing decisions.</p>
          </article>
          <article className="glass-card about-card">
            <span className="about-card__label">Lean, Senior-Led Execution</span>
            <p>Strategy, media, and conversion work stay tightly connected so momentum never gets lost.</p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default About
