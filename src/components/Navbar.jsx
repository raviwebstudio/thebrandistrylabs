import { navItems } from './data.js'

function Navbar({ isScrolled }) {
  return (
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
  )
}

export default Navbar
