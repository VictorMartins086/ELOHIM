import { useScrollAnimation } from '../hooks/useScrollAnimation'

function Playlist() {
  const sectionRef = useScrollAnimation()

  return (
    <section className="section playlist-section" id="playlist" ref={sectionRef}>
      <div className="section-header fade-in">
        <span className="section-label">Louvores</span>
        <h2 className="section-title">
          Nossa <span className="section-title-gold">Playlist</span>
        </h2>
        <hr className="section-divider" />
        <p className="section-description">
          A música que nos une em oração. Escaneie o QR Code ou clique no botão
          para acessar a playlist do Elohim.
        </p>
      </div>

      <div className="playlist-content fade-in">
        <div className="playlist-card">
          <div className="qr-wrapper">
            {/* 
              Substitua este placeholder pela imagem do seu QR Code.
              Coloque a imagem em src/Assets/ e importe-a, ou use uma URL direta.
              Exemplo: <img src={qrCodeImage} alt="QR Code Playlist" />
            */}
            <div className="qr-placeholder">
              <span className="qr-placeholder-icon icon-gold">📱</span>
              <span>QR CODE</span>
              <span style={{ fontSize: '0.65rem', opacity: 0.6 }}>
                Substitua pela imagem
              </span>
            </div>
          </div>

          <div className="playlist-info">
            <h3><span className="icon-gold">♫</span> Playlist Elohim</h3>
            <p>
              As músicas que fazem parte da nossa caminhada. Louvores que nos
              conectam a Deus e fortalecem nossa fé em cada encontro.
            </p>
            <a
              href="#"
              className="playlist-link"
              target="_blank"
              rel="noreferrer"
            >
              <span className="icon-gold-dark">▶</span> Ouvir Playlist
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Playlist
