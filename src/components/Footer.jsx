import logo from '../Assets/ELOHIM logo.svg'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-brand">
        <img src={logo} alt="ELOHIM" />
      </div>
      <p className="footer-tagline">Discipulado Jovem</p>
      <a
        href="https://www.instagram.com/djelohim_?igsh=MWxucXM2Yzc2dzJmdA=="
        target="_blank"
        rel="noopener noreferrer"
        className="footer-instagram"
        aria-label="Instagram"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
      </a>
      <hr className="footer-divider" />
      <p className="footer-copy">
        &copy; {year} Elohim &middot; Feito com amor e muita fé
      </p>
    </footer>
  )
}

export default Footer
