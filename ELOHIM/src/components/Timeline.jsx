import { useState, useCallback } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

// Import all images from Assets eagerly
const imageModules = import.meta.glob('../Assets/*.jpeg', { eager: true })

// Build ordered array: 36 (oldest) down to 1 (newest)
const totalImages = 36
const allImages = []
for (let i = totalImages; i >= 1; i--) {
  const key = `../Assets/${i}.jpeg`
  if (imageModules[key]) {
    allImages.push({
      id: i,
      src: imageModules[key].default,
    })
  }
}

// Divide images into 3 eras
const eras = [
  {
    title: 'Fundação',
    years: 'O Início',
    description:
      'O começo de tudo. Um grupo de jovens unidos pela fé, com o desejo de viver o Evangelho e transformar vidas através do amor de Cristo. Os primeiros passos de uma história que marcaria gerações.',
    images: allImages.slice(0, 12), // images 36-25
  },
  {
    title: 'Caminhada',
    years: 'Crescimento',
    description:
      'Anos de crescimento, aprendizado e fortalecimento da comunidade. Retiros, encontros, louvores e momentos que moldaram a identidade do Elohim. Cada desafio superado nos tornou mais fortes na fé.',
    images: allImages.slice(12, 24), // images 24-13
  },
  {
    title: 'Refundação',
    years: 'Dias Atuais',
    description:
      'Um novo capítulo. A refundação trouxe renovação espiritual e um compromisso ainda maior com a missão. Hoje, o Elohim segue firme, levando a Palavra de Deus aos jovens com a mesma chama do início.',
    images: allImages.slice(24), // images 12-1
  },
]

function Timeline() {
  const sectionRef = useScrollAnimation()
  const [lightboxImage, setLightboxImage] = useState(null)
  const [, setLightboxIndex] = useState({ era: 0, img: 0 })

  const openLightbox = useCallback((eraIdx, imgIdx) => {
    setLightboxImage(eras[eraIdx].images[imgIdx].src)
    setLightboxIndex({ era: eraIdx, img: imgIdx })
  }, [])

  const closeLightbox = useCallback(() => {
    setLightboxImage(null)
  }, [])

  const navigateLightbox = useCallback((direction) => {
    setLightboxIndex((prev) => {
      const era = eras[prev.era]
      let newImg = prev.img + direction
      let newEra = prev.era

      if (newImg < 0) {
        newEra = prev.era - 1
        if (newEra < 0) newEra = eras.length - 1
        newImg = eras[newEra].images.length - 1
      } else if (newImg >= era.images.length) {
        newEra = prev.era + 1
        if (newEra >= eras.length) newEra = 0
        newImg = 0
      }

      setLightboxImage(eras[newEra].images[newImg].src)
      return { era: newEra, img: newImg }
    })
  }, [])

  return (
    <section className="section section-darker" id="historia" ref={sectionRef}>
      <div className="section-header fade-in">
        <span className="section-label">Nossa Trajetória</span>
        <h2 className="section-title">
          A História do <span className="section-title-gold">Elohim</span>
        </h2>
        <hr className="section-divider" />
        <p className="section-description">
          Do primeiro encontro até os dias de hoje, cada momento faz parte de uma história
          escrita pela mão de Deus. Conheça a trajetória do nosso grupo de jovens.
        </p>
      </div>

      <div className="timeline-container">
        {eras.map((era, eraIdx) => (
          <div className="timeline-era fade-in" key={eraIdx}>
            <div className="era-header">
              <span className="era-badge">{era.title}</span>
              <span className="era-years">{era.years}</span>
              <p className="era-description">{era.description}</p>
            </div>

            <div className="era-gallery">
              {era.images.map((image, imgIdx) => (
                <div
                  className="era-gallery-item fade-in"
                  key={image.id}
                  style={{ transitionDelay: `${imgIdx * 0.05}s` }}
                  onClick={() => openLightbox(eraIdx, imgIdx)}
                >
                  <img
                    src={image.src}
                    alt={`Elohim - ${era.title} - Foto ${image.id}`}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>
            ✕
          </button>
          <button
            className="lightbox-nav lightbox-prev"
            onClick={(e) => {
              e.stopPropagation()
              navigateLightbox(-1)
            }}
          >
            ‹
          </button>
          <img
            src={lightboxImage}
            alt="Elohim"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="lightbox-nav lightbox-next"
            onClick={(e) => {
              e.stopPropagation()
              navigateLightbox(1)
            }}
          >
            ›
          </button>
        </div>
      )}
    </section>
  )
}

export default Timeline
