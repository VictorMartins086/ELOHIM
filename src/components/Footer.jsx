function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-brand">ELOHIM</div>
      <p className="footer-tagline">Grupo de Jovens Católico</p>
      <hr className="footer-divider" />
      <p className="footer-copy">
        &copy; {year} Elohim &middot; Feito com <span className="footer-heart">♥</span> e muita fé
      </p>
    </footer>
  )
}

export default Footer
