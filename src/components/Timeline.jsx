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

// Divide images into 2 eras starting from Refundação
const eras = [
  {
    title: 'Refundação',
    subtitle: 'Nova Fase, Mesma Chama',
    description:
      'Um novo capítulo com energia renovada! A refundação trouxe novos rostos, novas histórias, mas o mesmo amor por Deus e pela comunidade.',
    images: allImages.slice(0, 18),
  },
  {
    title: 'Caminhada',
    subtitle: 'Crescimento & Aventuras',
    description:
      'Retiros inesquecíveis, louvores de arrepiar e momentos que ficam pra sempre no coração. O Elohim cresceu e se fortaleceu na fé!',
    images: allImages.slice(18),
  },
]

// Flatten all images for lightbox navigation
const flatImages = eras.flatMap((era) => era.images)

function Timeline() {
  const sectionRef = useScrollAnimation()
  const [lightboxIdx, setLightboxIdx] = useState(null)

  const openLightbox = useCallback((flatIdx) => {
    setLightboxIdx(flatIdx)
  }, [])

  const closeLightbox = useCallback(() => {
    setLightboxIdx(null)
  }, [])

  const navigateLightbox = useCallback(
    (direction) => {
      setLightboxIdx((prev) => {
        if (prev === null) return null
        const next = prev + direction
        if (next < 0) return flatImages.length - 1
        if (next >= flatImages.length) return 0
        return next
      })
    },
    []
  )

  // Track global image index for numbering and lightbox
  let globalIdx = 0

  return (
    <section className="section timeline-section" id="historia" ref={sectionRef}>
      <div className="section-header fade-in">
        <span className="section-label">Nossa Trajetória</span>
        <h2 className="section-title">
          A História do <span className="section-title-gold">Elohim</span>
        </h2>
        <hr className="section-divider" />
        <p className="section-description">
          Cada foto conta um pedaço da nossa história. Siga o caminho e
          reviva os momentos que nos trouxeram até aqui!
        </p>
      </div>

      <div className="timeline-path">
        {eras.map((era, eraIdx) => {
          const eraStartIdx = globalIdx
          return (
            <div key={eraIdx}>
              {/* Era marker */}
              <div className="path-era-marker fade-in">
                <span className="path-era-pill">
                  {era.title}
                </span>
                <span className="path-era-subtitle">{era.subtitle}</span>
                <p className="path-era-text">{era.description}</p>
              </div>

              {/* Images along the path */}
              {era.images.map((image, imgIdx) => {
                const currentGlobal = eraStartIdx + imgIdx
                const side = currentGlobal % 2 === 0 ? 'left' : 'right'
                const animClass = side === 'left' ? 'fade-in-left' : 'fade-in-right'
                globalIdx++

                return (
                  <div
                    className={`path-node path-node--${side} ${animClass}`}
                    key={image.id}
                    style={{ transitionDelay: `${(imgIdx % 4) * 0.08}s` }}
                  >
                    <div className="path-node-dot"></div>
                    <div className="path-node-connector"></div>
                    <div
                      className="path-card"
                      onClick={() => openLightbox(currentGlobal)}
                    >
                      <span className="path-card-number">{currentGlobal + 1}</span>
                      <img
                        className="path-card-img"
                        src={image.src}
                        alt={`Elohim - ${era.title} - Foto ${currentGlobal + 1}`}
                        loading="lazy"
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>

      {/* Lightbox */}
      {lightboxIdx !== null && (
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
            src={flatImages[lightboxIdx].src}
            alt={`Elohim - Foto ${lightboxIdx + 1}`}
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
