import logo from '../Assets/ELOHIM logo.svg'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-brand">
        <img src={logo} alt="ELOHIM" />
      </div>
      <p className="footer-tagline">Discipulado Jovem</p>
      <hr className="footer-divider" />
      <p className="footer-copy">
        &copy; {year} Elohim &middot; Feito com <span className="footer-heart">♥</span> e muita fé
      </p>
    </footer>
  )
}

export default Footer
