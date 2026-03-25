import { useEffect, useState } from 'react'
import './App.css'

const services = [
  {
    title: 'Performance Marketing',
    description:
      'Full-funnel media buying that sharpens CAC, scales winners, and turns demand into predictable revenue.',
    icon: ChartIcon,
    modifier: 'service-card--wide',
  },
  {
    title: 'SEO Growth',
    description:
      'Search strategies built to compound organic traffic and capture high-intent demand.',
    icon: SearchIcon,
    modifier: 'service-card--tall',
  },
  {
    title: 'Paid Ads',
    description:
      'Creative-led campaigns across Meta, Google, and YouTube with constant testing loops.',
    icon: MegaphoneIcon,
  },
  {
    title: 'Social Media Strategy',
    description:
      'Positioning, content systems, and channel planning designed to grow relevance and response.',
    icon: SparkIcon,
  },
  {
    title: 'Conversion Optimization',
    description:
      'Landing page and funnel improvements that turn traffic spikes into bottom-line gains.',
    icon: FunnelIcon,
    modifier: 'service-card--wide',
  },
]

const caseStudies = [
  {
    client: 'Aurelia Skincare',
    problem: 'Paid social spend was rising while blended return kept flattening quarter over quarter.',
    result: '4.2x ROAS',
    outcome: 'Scaled monthly revenue by 118% in 90 days through creative testing and funnel cleanup.',
  },
  {
    client: 'Northlane Interiors',
    problem: 'Organic traffic was stagnant and high-intent category pages were invisible on search.',
    result: '+186% SEO Traffic',
    outcome: 'Lifted qualified sessions and generated a 3.4x increase in non-brand leads from search.',
  },
  {
    client: 'Vanta Health',
    problem: 'Lead volume looked healthy, but demo quality and downstream conversion were inconsistent.',
    result: '-38% CAC',
    outcome: 'Refined channel mix, messaging, and CRO to improve sales-qualified pipeline efficiency.',
  },
]

const processSteps = [
  {
    title: 'Audit',
    description: 'We diagnose the funnel, messaging gaps, media mix, and the leaks slowing growth.',
    icon: AuditIcon,
  },
  {
    title: 'Strategy',
    description: 'We define the growth thesis, priorities, and KPIs around revenue, not vanity metrics.',
    icon: CompassIcon,
  },
  {
    title: 'Execution',
    description: 'We launch creatives, campaigns, landing pages, and testing systems with tight feedback loops.',
    icon: RocketIcon,
  },
  {
    title: 'Scale',
    description: 'We double down on what converts, improve efficiency, and unlock the next growth ceiling.',
    icon: ScaleIcon,
  },
]

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com', icon: LinkedInIcon },
  { label: 'Instagram', href: 'https://www.instagram.com', icon: InstagramIcon },
  { label: 'X', href: 'https://x.com', icon: XIcon },
]

function App() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    const revealElements = document.querySelectorAll('[data-reveal]')
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    if (prefersReducedMotion) {
      revealElements.forEach((element) => element.classList.add('is-visible'))
      return () => window.removeEventListener('scroll', handleScroll)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -10% 0px',
      },
    )

    revealElements.forEach((element) => observer.observe(element))

    return () => {
      window.removeEventListener('scroll', handleScroll)
      observer.disconnect()
    }
  }, [])

  return (
    <div className="page-shell">
      <header className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
        <div className="container navbar__shell">
          <a className="brand" href="#home" aria-label="The Brandistry Labs home">
            <span className="brand__mark" aria-hidden="true"></span>
            <span>The Brandistry Labs</span>
          </a>

          <nav className="navbar__links" aria-label="Primary navigation">
            {navItems.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <a className="button button--nav" href="#contact">
            Call Now
          </a>
        </div>
      </header>

      <main>
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

        <section className="trust-strip">
          <div className="container trust-strip__inner glass-band" data-reveal="up">
            <div className="trust-stat">
              <strong>50+</strong>
              <span>Clients</span>
            </div>
            <div className="trust-stat">
              <strong>3X</strong>
              <span>Average ROI Focus</span>
            </div>
            <div className="trust-stat">
              <strong>100+</strong>
              <span>Campaigns Launched</span>
            </div>
          </div>
        </section>

        <section className="section section--services" id="services">
          <div className="container">
            <SectionHeader
              eyebrow="Services"
              title="Built for brands that need strategy, speed, and measurable growth."
              description="We combine channel expertise, conversion thinking, and creative direction into one focused growth engine."
            />

            <div className="services-grid">
              {services.map(({ title, description, icon, modifier }, index) => (
                <article
                  key={title}
                  className={`glass-card service-card ${modifier ?? ''}`.trim()}
                  data-reveal="up"
                  style={{ '--delay': `${index * 90}ms` }}
                >
                  <div className="service-card__icon">{icon()}</div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

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
                  data-reveal={index % 2 === 0 ? 'left' : 'right'}
                  style={{ '--delay': `${index * 100}ms` }}
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

        <section className="section section--cta" id="contact">
          <div className="container">
            <div className="cta-panel" data-reveal="up">
              <div>
                <span className="section-tag">Ready to scale your business?</span>
                <h2>Growth systems that look premium and perform under pressure.</h2>
              </div>
              <a className="button button--primary" href="mailto:hello@thebrandistrylabs.com">
                Get Free Consultation
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <div className="footer__brand">
            <a className="brand" href="#home">
              <span className="brand__mark" aria-hidden="true"></span>
              <span>The Brandistry Labs</span>
            </a>
            <p>Performance marketing for brands that want clarity, creativity, and stronger revenue outcomes.</p>
          </div>

          <div className="footer__links">
            {navItems.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>

          <div className="footer__contact">
            <a href="mailto:hello@thebrandistrylabs.com">hello@thebrandistrylabs.com</a>
            <span>Based in India, partnering globally.</span>
            <div className="social-links">
              {socialLinks.map(({ label, href, icon }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}>
                  {icon()}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="section-header" data-reveal="up">
      <span className="section-tag">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

function IconBase({ children }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      {children}
    </svg>
  )
}

function ChartIcon() {
  return (
    <IconBase>
      <path d="M4 19h16" />
      <path d="M7 15.5 11 11l3 3 5-6" />
      <path d="M16 8h3v3" />
    </IconBase>
  )
}

function SearchIcon() {
  return (
    <IconBase>
      <circle cx="11" cy="11" r="5.5" />
      <path d="m16 16 4 4" />
    </IconBase>
  )
}

function MegaphoneIcon() {
  return (
    <IconBase>
      <path d="M4 12v-2a2 2 0 0 1 2-2h3l7-3v14l-7-3H6a2 2 0 0 1-2-2v-2Z" />
      <path d="m8 16 1.5 4" />
    </IconBase>
  )
}

function SparkIcon() {
  return (
    <IconBase>
      <path d="m12 3 1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8L12 3Z" />
      <path d="m19 15 .9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15Z" />
    </IconBase>
  )
}

function FunnelIcon() {
  return (
    <IconBase>
      <path d="M4 6h16l-6.5 7.5v4.5l-3 1v-5.5L4 6Z" />
    </IconBase>
  )
}

function AuditIcon() {
  return (
    <IconBase>
      <rect x="5" y="4" width="14" height="16" rx="2" />
      <path d="M8.5 9h7" />
      <path d="M8.5 13h7" />
      <path d="M8.5 17h4" />
    </IconBase>
  )
}

function CompassIcon() {
  return (
    <IconBase>
      <circle cx="12" cy="12" r="8" />
      <path d="m10 14 2-6 2 2-4 4Z" />
    </IconBase>
  )
}

function RocketIcon() {
  return (
    <IconBase>
      <path d="M14.5 5.5c3 1 4 4.5 4 4.5s-1 3.5-4 4.5l-4 4-1.5-5.5 5.5-7.5Z" />
      <path d="M8 13 5 16" />
      <path d="m6 18-1 1" />
    </IconBase>
  )
}

function ScaleIcon() {
  return (
    <IconBase>
      <path d="M12 4v16" />
      <path d="M6 8h12" />
      <path d="m6 8-3 5h6l-3-5Z" />
      <path d="m18 8-3 5h6l-3-5Z" />
      <path d="M8 20h8" />
    </IconBase>
  )
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.5 8.5A1.5 1.5 0 1 0 6.5 5.5a1.5 1.5 0 0 0 0 3ZM5.3 9.8h2.4V18H5.3V9.8Zm4 0h2.3V11h.1c.3-.6 1.1-1.4 2.7-1.4 2.9 0 3.4 1.9 3.4 4.5V18h-2.4v-3.5c0-1.6 0-2.9-1.8-2.9s-2 1.4-2 2.8V18H9.3V9.8Z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="4.5" />
      <circle cx="12" cy="12" r="3.5" />
      <path d="M16.8 7.2h.01" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M5 5h3.6l4 5.2L17 5h2l-5.5 6.4L19.2 19h-3.6l-4.2-5.5L6.6 19h-2l5.7-6.7L5 5Z" />
    </svg>
  )
}

export default App
