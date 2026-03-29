import { useState } from 'react'
import { navItems } from './data.js'

function Navbar({ isScrolled }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen((currentValue) => !currentValue)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__shell">
        <a className="brand" href="#home" aria-label="The Brandistry Labs home" onClick={closeMenu}>
          <span className="brand__mark" aria-hidden="true"></span>
          <span>The Brandistry Labs</span>
        </a>

        <button
          className={`navbar__toggle ${isMenuOpen ? 'navbar__toggle--open' : ''}`}
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav
          className={`navbar__links ${isMenuOpen ? 'navbar__links--open' : ''}`}
          id="primary-navigation"
          aria-label="Primary navigation"
        >
          {navItems.map((item) => (
            <a key={item.label} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="button button--nav navbar__cta" href="#contact" onClick={closeMenu}>
          Book Call
        </a>
      </div>
    </header>
  )
}

export default Navbar
