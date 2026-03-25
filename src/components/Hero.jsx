function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="container hero__grid">
        <div className="hero__content">
          <span className="section-tag hero__tag">Performance-first digital growth</span>
          <h1>
            We turn traffic into <span>revenue.</span>
          </h1>
          <p className="hero__copy">
            Performance marketing &amp; growth strategies for modern brands.
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
            <span className="floating-card__label">Revenue efficiency</span>
            <strong>3X ROI</strong>
          </div>

          <div className="glass-card hero__panel">
            <span className="hero__panel-tag">Growth dashboard</span>
            <div className="hero__panel-row">
              <span>ROAS</span>
              <strong>4.2x</strong>
            </div>
            <div className="hero__panel-row">
              <span>CAC</span>
              <strong>-31%</strong>
            </div>
            <div className="hero__panel-row">
              <span>Pipeline</span>
              <strong>+220K</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
