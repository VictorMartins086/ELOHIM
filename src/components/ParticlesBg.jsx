function ParticlesBg() {
  return (
    <div className="particles-bg" aria-hidden="true">
      {/* Floating orbs (rosary beads) */}
      <div className="particle particle--1"></div>
      <div className="particle particle--2"></div>
      <div className="particle particle--3"></div>
      <div className="particle particle--4"></div>
      <div className="particle particle--5"></div>
      <div className="particle particle--6"></div>
      <div className="particle particle--7"></div>
      <div className="particle particle--8"></div>
      <div className="particle particle--9"></div>
      <div className="particle particle--10"></div>
      <div className="particle particle--11"></div>
      <div className="particle particle--12"></div>

      {/* Subtle shooting lines */}
      <div className="particle-line particle-line--1"></div>
      <div className="particle-line particle-line--2"></div>
      <div className="particle-line particle-line--3"></div>

      {/* Rosary chain - vertical strand with beads */}
      <svg className="bg-rosary bg-rosary--1" viewBox="0 0 40 600" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Chain line */}
        <line x1="20" y1="0" x2="20" y2="600" stroke="currentColor" strokeWidth="0.8" strokeDasharray="4 8" />
        {/* Beads */}
        {[50, 100, 150, 200, 250, 300, 350, 400, 450, 500].map((y, i) => (
          <circle key={i} cx="20" cy={y} r={i % 5 === 0 ? 6 : 4} stroke="currentColor" strokeWidth="1" fill="none" />
        ))}
        {/* Crucifix at bottom */}
        <line x1="20" y1="530" x2="20" y2="575" stroke="currentColor" strokeWidth="1.2" />
        <line x1="12" y1="545" x2="28" y2="545" stroke="currentColor" strokeWidth="1.2" />
      </svg>

      <svg className="bg-rosary bg-rosary--2" viewBox="0 0 40 600" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="20" y1="0" x2="20" y2="600" stroke="currentColor" strokeWidth="0.8" strokeDasharray="4 8" />
        {[50, 100, 150, 200, 250, 300, 350, 400, 450, 500].map((y, i) => (
          <circle key={i} cx="20" cy={y} r={i % 5 === 0 ? 6 : 4} stroke="currentColor" strokeWidth="1" fill="none" />
        ))}
        <line x1="20" y1="530" x2="20" y2="575" stroke="currentColor" strokeWidth="1.2" />
        <line x1="12" y1="545" x2="28" y2="545" stroke="currentColor" strokeWidth="1.2" />
      </svg>

      {/* Nossa Senhora Aparecida - line art */}
      <svg className="bg-icon bg-icon--maria" viewBox="0 0 120 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Crown / halo */}
        <ellipse cx="60" cy="32" rx="18" ry="18" stroke="currentColor" strokeWidth="1" />
        <path d="M48 20 L52 10 L56 18 L60 8 L64 18 L68 10 L72 20" stroke="currentColor" strokeWidth="0.8" fill="none" />
        {/* Veil / mantle */}
        <path d="M38 40 Q60 35 82 40 Q88 80 85 120 Q60 130 35 120 Q32 80 38 40Z" stroke="currentColor" strokeWidth="1" fill="none" />
        {/* Face */}
        <ellipse cx="60" cy="48" rx="10" ry="12" stroke="currentColor" strokeWidth="0.8" />
        {/* Hands in prayer */}
        <path d="M53 90 L60 80 L67 90" stroke="currentColor" strokeWidth="0.8" fill="none" />
        {/* Robe */}
        <path d="M40 120 Q38 160 35 190 L85 190 Q82 160 80 120" stroke="currentColor" strokeWidth="1" fill="none" />
        {/* Base / cloud */}
        <path d="M30 185 Q45 195 60 192 Q75 195 90 185" stroke="currentColor" strokeWidth="0.8" fill="none" />
        {/* Stars around */}
        <path d="M20 60 L22 55 L24 60 L22 58Z" stroke="currentColor" strokeWidth="0.5" fill="currentColor" opacity="0.5" />
        <path d="M96 70 L98 65 L100 70 L98 68Z" stroke="currentColor" strokeWidth="0.5" fill="currentColor" opacity="0.5" />
        <path d="M15 100 L17 95 L19 100 L17 98Z" stroke="currentColor" strokeWidth="0.5" fill="currentColor" opacity="0.5" />
      </svg>

      {/* Cross - linear */}
      <svg className="bg-icon bg-icon--cross1" viewBox="0 0 60 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="22" y="5" width="16" height="90" rx="2" stroke="currentColor" strokeWidth="1" />
        <rect x="5" y="22" width="50" height="16" rx="2" stroke="currentColor" strokeWidth="1" />
        {/* Rays */}
        <line x1="30" y1="0" x2="30" y2="5" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
        <line x1="0" y1="30" x2="5" y2="30" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
        <line x1="55" y1="30" x2="60" y2="30" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
      </svg>

      <svg className="bg-icon bg-icon--cross2" viewBox="0 0 60 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="22" y="5" width="16" height="90" rx="2" stroke="currentColor" strokeWidth="1" />
        <rect x="5" y="22" width="50" height="16" rx="2" stroke="currentColor" strokeWidth="1" />
      </svg>

      {/* Sacred Heart - linear */}
      <svg className="bg-icon bg-icon--heart" viewBox="0 0 80 90" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M40 80 C10 55 0 35 10 20 C18 8 32 8 40 22 C48 8 62 8 70 20 C80 35 70 55 40 80Z" stroke="currentColor" strokeWidth="1" fill="none" />
        {/* Flame on top */}
        <path d="M35 18 Q40 5 45 18" stroke="currentColor" strokeWidth="0.8" fill="none" />
        <path d="M37 15 Q40 8 43 15" stroke="currentColor" strokeWidth="0.6" fill="none" />
        {/* Cross on heart */}
        <line x1="40" y1="30" x2="40" y2="50" stroke="currentColor" strokeWidth="0.8" />
        <line x1="33" y1="37" x2="47" y2="37" stroke="currentColor" strokeWidth="0.8" />
        {/* Thorns around */}
        <path d="M25 40 L22 38 L25 36" stroke="currentColor" strokeWidth="0.5" fill="none" />
        <path d="M55 40 L58 38 L55 36" stroke="currentColor" strokeWidth="0.5" fill="none" />
        <path d="M30 55 L27 53 L30 51" stroke="currentColor" strokeWidth="0.5" fill="none" />
        <path d="M50 55 L53 53 L50 51" stroke="currentColor" strokeWidth="0.5" fill="none" />
      </svg>

      {/* Dove / Holy Spirit - linear */}
      <svg className="bg-icon bg-icon--dove" viewBox="0 0 100 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Body */}
        <ellipse cx="50" cy="40" rx="18" ry="10" stroke="currentColor" strokeWidth="1" />
        {/* Head */}
        <circle cx="70" cy="33" r="6" stroke="currentColor" strokeWidth="0.8" />
        {/* Beak */}
        <path d="M76 33 L82 31 L76 35" stroke="currentColor" strokeWidth="0.6" fill="none" />
        {/* Left wing */}
        <path d="M42 32 Q20 10 10 15 Q18 22 35 35" stroke="currentColor" strokeWidth="1" fill="none" />
        {/* Right wing */}
        <path d="M55 32 Q70 12 85 10 Q78 20 62 35" stroke="currentColor" strokeWidth="1" fill="none" />
        {/* Tail */}
        <path d="M32 42 Q22 50 18 55" stroke="currentColor" strokeWidth="0.8" fill="none" />
        <path d="M32 44 Q25 55 22 58" stroke="currentColor" strokeWidth="0.8" fill="none" />
        {/* Olive branch */}
        <path d="M80 36 Q88 40 95 38" stroke="currentColor" strokeWidth="0.6" fill="none" />
        <ellipse cx="92" cy="36" rx="3" ry="2" stroke="currentColor" strokeWidth="0.5" transform="rotate(-20 92 36)" />
      </svg>

      {/* Rosary ring - circular pattern */}
      <svg className="bg-icon bg-icon--rosary-ring" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="60" cy="60" r="50" stroke="currentColor" strokeWidth="0.6" strokeDasharray="3 6" />
        {Array.from({ length: 10 }, (_, i) => {
          const angle = (i * 36 * Math.PI) / 180
          const x = 60 + 50 * Math.cos(angle)
          const y = 60 + 50 * Math.sin(angle)
          return <circle key={i} cx={x} cy={y} r={i % 5 === 0 ? 5 : 3.5} stroke="currentColor" strokeWidth="0.8" fill="none" />
        })}
        {/* Small cross pendant */}
        <line x1="60" y1="110" x2="60" y2="118" stroke="currentColor" strokeWidth="0.8" />
        <line x1="56" y1="113" x2="64" y2="113" stroke="currentColor" strokeWidth="0.8" />
      </svg>

      {/* Chi-Rho (☧) - linear */}
      <svg className="bg-icon bg-icon--chirho" viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* P (Rho) */}
        <line x1="40" y1="10" x2="40" y2="90" stroke="currentColor" strokeWidth="1.2" />
        <path d="M40 10 Q65 10 65 28 Q65 46 40 46" stroke="currentColor" strokeWidth="1.2" fill="none" />
        {/* X (Chi) */}
        <line x1="15" y1="25" x2="65" y2="70" stroke="currentColor" strokeWidth="1" />
        <line x1="65" y1="25" x2="15" y2="70" stroke="currentColor" strokeWidth="1" />
      </svg>

      {/* Alpha & Omega */}
      <svg className="bg-icon bg-icon--alpha-omega" viewBox="0 0 120 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Alpha (Α) */}
        <path d="M10 45 L25 5 L40 45" stroke="currentColor" strokeWidth="1" fill="none" />
        <line x1="17" y1="30" x2="33" y2="30" stroke="currentColor" strokeWidth="0.8" />
        {/* Omega (Ω) */}
        <path d="M75 45 L80 40 Q80 10 100 10 Q120 10 120 40 L125 45" stroke="currentColor" strokeWidth="1" fill="none" transform="translate(-20, 0)" />
      </svg>
    </div>
  )
}

export default ParticlesBg
