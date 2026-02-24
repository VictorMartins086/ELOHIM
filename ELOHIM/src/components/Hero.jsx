function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-content">
        <div className="hero-cross">✝</div>
        <h1 className="hero-title">
          <span>ELOHIM</span>
        </h1>
        <p className="hero-subtitle">Grupo de Jovens Católico</p>
        <p className="hero-description">
          Uma comunidade de fé, esperança e amor. Desde a nossa fundação, 
          caminhamos juntos buscando a presença de Deus em nossas vidas, 
          construindo laços que transcendem o tempo.
        </p>
        <a href="#historia" className="hero-cta">
          Conheça Nossa História
        </a>
      </div>
      <div className="hero-scroll-indicator">
        <span className="scroll-line"></span>
      </div>
    </section>
  )
}

export default Hero
