import { useScrollAnimation } from '../hooks/useScrollAnimation'
import qrCode from '../Assets/qr_code.svg'

const SPOTIFY_URL = 'https://open.spotify.com/playlist/0lMTzUpSXNUnI3Px3alsE2?si=Lu4egAPrQE-pn9TDV00zig&pi=UDVgkIBmTseL4'

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
            <img src={qrCode} alt="QR Code Playlist Elohim" />
          </div>

          <div className="playlist-info">
            <h3><span className="icon-gold">♫</span> Playlist Elohim</h3>
            <p>
              As músicas que fazem parte da nossa caminhada. Louvores que nos
              conectam a Deus e fortalecem nossa fé em cada encontro.
            </p>
            <a
              href={SPOTIFY_URL}
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
