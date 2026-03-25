import { useEffect, useState } from 'react'
import About from './components/About.jsx'
import CaseStudies from './components/CaseStudies.jsx'
import ContactSection from './components/ContactSection.jsx'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import Navbar from './components/Navbar.jsx'
import Process from './components/Process.jsx'
import Services from './components/Services.jsx'
import TrustStrip from './components/TrustStrip.jsx'
import './App.css'

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
      <Navbar isScrolled={isScrolled} />

      <main>
        <Hero />
        <TrustStrip />
        <About />
        <Services />
        <CaseStudies />
        <Process />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}

export default App
