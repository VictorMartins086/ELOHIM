import { useState, useEffect } from 'react'
import logo from '../Assets/ELOHIM logo.svg'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = () => {
    setMenuOpen(false)
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <a href="#inicio" className="navbar-brand">
        <img src={logo} alt="ELOHIM" />
      </a>

      <button
        className={`navbar-toggle ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        <a href="#inicio" onClick={handleLinkClick}>Início</a>
        <a href="#historia" onClick={handleLinkClick}>História</a>
        <a href="#playlist" onClick={handleLinkClick}>Playlist</a>
      </div>
    </nav>
  )
}

export default Navbar
