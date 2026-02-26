import logo from '../Assets/ELOHIM logo.svg'

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-bg">
        <div className="hero-bg-blob hero-bg-blob--gold"></div>
        <div className="hero-bg-blob hero-bg-blob--blue"></div>
        <div className="hero-bg-blob hero-bg-blob--small"></div>
      </div>

      <div className="hero-content">
        <h1 className="hero-title">
          <img src={logo} alt="ELOHIM" />
        </h1>
        <p className="hero-subtitle">Discipulado Jovem</p>
        <p className="hero-description">
          Somos jovens que caminham juntos na fé, no louvor e na amizade.
          Uma história construída com muito amor, risadas e a presença de Deus!
        </p>
        <div className="hero-buttons">
          <a href="#historia" className="hero-cta">
            Bora conhecer nossa história <span className="hero-cta-arrow">→</span>
          </a>
          <a
            href="https://www.instagram.com/djelohim_?igsh=MWxucXM2Yzc2dzJmdA=="
            target="_blank"
            rel="noopener noreferrer"
            className="hero-instagram"
          >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            Siga no Instagram
          </a>
        </div>
      </div>

      <div className="hero-scroll">
        <span className="hero-scroll-dot"></span>
        <span>role</span>
      </div>
    </section>
  )
}

export default Hero
