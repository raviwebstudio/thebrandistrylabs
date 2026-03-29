function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="container hero__grid">
        <div className="hero__content">
          <span className="section-tag hero__tag">
            Growth systems for eCommerce, startups, local brands, and personal brands
          </span>
          <h1>
            We help ambitious brands turn traffic into <span>predictable revenue.</span>
          </h1>
          <p className="hero__copy">
            From eCommerce and local businesses to startups and personal brands, we build
            campaigns, funnels, and creative systems that convert attention into measurable
            growth.
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href="#contact">
              Book Strategy Session
            </a>
            <a className="button button--secondary" href="#work">
              View Case Studies
            </a>
          </div>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="hero__glow hero__glow--one"></div>
          <div className="hero__glow hero__glow--two"></div>
          <div className="hero__orb"></div>
          <div className="hero__ring hero__ring--one"></div>
          <div className="hero__ring hero__ring--two"></div>

          <div className="glass-card floating-card floating-card--top">
            <span className="floating-card__label">Creative velocity</span>
            <strong>28 tests / month</strong>
          </div>

          <div className="glass-card floating-card floating-card--bottom">
            <span className="floating-card__label">Average efficiency</span>
            <strong>3X ROI</strong>
          </div>

          <div className="glass-card hero__panel">
            <span className="hero__panel-tag">Results snapshot</span>
            <div className="hero__panel-row">
              <span>ROAS</span>
              <strong>4.2x</strong>
            </div>
            <div className="hero__panel-row">
              <span>Leads</span>
              <strong>+214%</strong>
            </div>
            <div className="hero__panel-row">
              <span>Revenue</span>
              <strong>+118%</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
