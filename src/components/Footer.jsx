import { contactDetails, footerNavItems, socialLinks } from './data.js'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand footer__column">
          <a className="brand" href="#home">
            <span className="brand__mark" aria-hidden="true"></span>
            <span>The Brandistry Labs</span>
          </a>
          <p>
            Revenue-focused digital marketing for eCommerce brands, startups, local businesses, and
            personal brands ready to scale with clarity.
          </p>
        </div>

        <div className="footer__links footer__column">
          <span className="footer__heading">Navigation</span>
          {footerNavItems.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>

        <div className="footer__contact footer__column">
          <span className="footer__heading">Contact</span>
          <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
          <a href={contactDetails.phoneHref}>{contactDetails.phoneDisplay}</a>
          <span>Based in India, partnering globally.</span>
        </div>

        <div className="footer__social footer__column">
          <span className="footer__heading">Social</span>
          <div className="social-links">
            {socialLinks.map(({ label, href, icon }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}>
                {icon()}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>&copy; {year} The Brandistry Labs. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
