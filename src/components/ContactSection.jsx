import { contactDetails } from './data.js'

function ContactSection() {
  return (
    <section className="section section--cta" id="contact">
      <div className="container">
        <div className="cta-panel" data-reveal="up">
          <div className="cta-panel__copy">
            <span className="section-tag">Contact</span>
            <h2>Ready to scale your business?</h2>
            <p>
              Partner with a premium growth team that blends performance strategy, creative thinking,
              and conversion-focused execution.
            </p>
          </div>

          <div className="cta-panel__actions">
            <a
              className="button button--primary"
              href={`mailto:${contactDetails.email}?subject=Book%20Free%20Consultation`}
            >
              Book Free Consultation
            </a>
            <a className="button button--secondary" href={`mailto:${contactDetails.email}`}>
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
