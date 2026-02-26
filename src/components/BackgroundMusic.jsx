import { useState, useRef } from 'react'

const VIDEO_SRC = `${import.meta.env.BASE_URL}video.mp4`

function BackgroundMusic() {
  const [muted, setMuted] = useState(true)
  const videoRef = useRef(null)

  const toggleSound = () => {
    if (!videoRef.current) return
    videoRef.current.muted = !videoRef.current.muted
    setMuted(videoRef.current.muted)
  }

  return (
    <>
      {/* Visible video section */}
      <section className="bg-video-section">
        <div className="bg-video-wrapper">
          <video
            ref={videoRef}
            src={VIDEO_SRC}
            autoPlay
            muted
            loop
            playsInline
            className="bg-video"
          />
        </div>
      </section>

      {/* Floating sound toggle button */}
      <button
        className={`bg-music-btn ${!muted ? 'playing' : ''}`}
        onClick={toggleSound}
        aria-label={muted ? 'Ativar som' : 'Desativar som'}
        title={muted ? 'Ativar som' : 'Desativar som'}
      >
        {muted ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <line x1="23" y1="9" x2="17" y2="15" />
            <line x1="17" y1="9" x2="23" y2="15" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
          </svg>
        )}
        {!muted && (
          <span className="bg-music-bars">
            <span className="bg-music-bar"></span>
            <span className="bg-music-bar"></span>
            <span className="bg-music-bar"></span>
          </span>
        )}
      </button>
    </>
  )
}

export default BackgroundMusic
