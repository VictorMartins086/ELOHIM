function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-bg">
        <div className="hero-bg-blob hero-bg-blob--gold"></div>
        <div className="hero-bg-blob hero-bg-blob--blue"></div>
        <div className="hero-bg-blob hero-bg-blob--small"></div>
      </div>

      <div className="hero-content">
        <div className="hero-emoji">&#x271D;</div>
        <h1 className="hero-title">
          <span>ELOHIM</span>
        </h1>
        <p className="hero-subtitle">Grupo de Jovens Católico</p>
        <p className="hero-description">
          Somos jovens que caminham juntos na fé, no louvor e na amizade.
          Uma história construída com muito amor, risadas e a presença de Deus!
        </p>
        <a href="#historia" className="hero-cta">
          Bora conhecer nossa história <span className="hero-cta-arrow">→</span>
        </a>
      </div>

      <div className="hero-scroll">
        <span className="hero-scroll-dot"></span>
        <span>role</span>
      </div>
    </section>
  )
}

export default Hero
