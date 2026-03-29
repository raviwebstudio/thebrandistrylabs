import SectionHeader from './SectionHeader.jsx'
import { growthPlans, whyChooseUs } from './data.js'

function WhyChooseUs() {
  return (
    <section className="section section--why" id="why-us">
      <div className="container">
        <SectionHeader
          eyebrow="Why choose us"
          title="A growth partner built for sharp strategy, fast execution, and clear revenue impact."
          description="We keep the structure lean, the reporting transparent, and the work focused on outcomes that matter to eCommerce brands, startups, local businesses, and personal brands."
        />

        <div className="why-grid">
          {whyChooseUs.map(({ title, description, icon }, index) => (
            <article
              key={title}
              className="glass-card why-card"
              data-reveal="up"
              style={{ '--delay': `${index * 80}ms` }}
            >
              <div className="service-card__icon">{icon()}</div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>

        <div className="offer-block">
          <div className="offer-block__intro" data-reveal="up">
            <span className="section-tag">Offer</span>
            <h3>Simple engagement options designed to move growth forward fast.</h3>
            <p>
              No bloated pricing tables. Just focused support for brands that want better performance,
              cleaner funnels, and clearer reporting.
            </p>
          </div>

          <div className="offer-grid">
            {growthPlans.map((plan, index) => (
              <article
                key={plan.eyebrow}
                className={`glass-card offer-card ${plan.featured ? 'offer-card--featured' : ''}`.trim()}
                data-reveal="up"
                style={{ '--delay': `${120 + index * 90}ms` }}
              >
                <span className="offer-card__eyebrow">{plan.eyebrow}</span>
                <h3>{plan.name}</h3>
                <p>{plan.description}</p>

                <ul className="offer-card__list">
                  {plan.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <a
                  className={`button ${plan.featured ? 'button--primary' : 'button--secondary'}`}
                  href={plan.ctaHref}
                >
                  {plan.ctaLabel}
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
