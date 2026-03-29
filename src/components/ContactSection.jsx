import { useState } from 'react'
import { contactDetails } from './data.js'

function ContactSection() {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = ({ target }) => {
    const { name, value } = target
    setFormValues((currentValues) => ({
      ...currentValues,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const subject = encodeURIComponent(`Free Consultation Request | ${formValues.name}`)
    const body = encodeURIComponent(
      `Name: ${formValues.name}\nEmail: ${formValues.email}\n\nMessage:\n${formValues.message}`,
    )

    window.location.href = `mailto:${contactDetails.email}?subject=${subject}&body=${body}`
  }

  return (
    <section className="section section--cta" id="contact">
      <div className="container">
        <div className="cta-panel" data-reveal="up">
          <div className="cta-panel__copy">
            <span className="section-tag">Contact</span>
            <h2>Book a free consultation and get a growth plan built around results.</h2>
            <p>
              Tell us where the bottleneck is, what you are trying to scale, and which channels need
              sharper execution. We will help you map the next move.
            </p>

            <div className="cta-panel__highlights">
              <span>Paid ads setup</span>
              <span>Funnel optimization</span>
              <span>Weekly reporting</span>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form__grid">
              <label className="field">
                <span>Name</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formValues.name}
                  onChange={handleChange}
                  required
                />
              </label>

              <label className="field">
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formValues.email}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>

            <label className="field field--full">
              <span>Message</span>
              <textarea
                name="message"
                rows="6"
                placeholder="Tell us about your business, current challenges, and what kind of growth you want next."
                value={formValues.message}
                onChange={handleChange}
                required
              ></textarea>
            </label>

            <div className="cta-panel__actions">
              <button className="button button--primary" type="submit">
                Book Free Consultation
              </button>
              <a
                className="button button--secondary"
                href={contactDetails.whatsappHref}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp Us
              </a>
            </div>
          </form>

          <div className="contact-meta">
            <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
            <a href={contactDetails.phoneHref}>{contactDetails.phoneDisplay}</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
