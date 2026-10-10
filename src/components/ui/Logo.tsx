'use client'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  variant?: 'full' | 'mark'
  showGroup?: boolean
}

export default function Logo({ size = 'md', variant = 'full', showGroup = false }: LogoProps) {
  const sizes = {
    sm: { mark: 32, text: 'text-lg', sub: 'text-[9px]' },
    md: { mark: 42, text: 'text-2xl', sub: 'text-[10px]' },
    lg: { mark: 56, text: 'text-3xl', sub: 'text-xs' },
  }

  const s = sizes[size]

  return (
    <div className="flex items-center gap-3">
      {/* WhinkPredict W Mark — target/crosshair integrated */}
      <svg width={s.mark} height={s.mark} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="wpGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38B6FF" />
            <stop offset="60%" stopColor="#00E5A0" />
            <stop offset="100%" stopColor="#CC944B" />
          </linearGradient>
          <linearGradient id="wpGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38B6FF" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#00E5A0" stopOpacity="0.05" />
          </linearGradient>
          <radialGradient id="wpGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#38B6FF" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#38B6FF" stopOpacity="0" />
          </radialGradient>
          <filter id="wpShadow">
            <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="#38B6FF" floodOpacity="0.4" />
          </filter>
        </defs>

        {/* Outer glow circle */}
        <circle cx="28" cy="28" r="26" fill="url(#wpGlow)" />

        {/* Hexagonal shield background */}
        <path d="M28 4 L48 15 L48 41 L28 52 L8 41 L8 15 Z"
          fill="url(#wpGrad2)"
          stroke="url(#wpGrad1)"
          strokeWidth="1.2"
          filter="url(#wpShadow)" />

        {/* W letterform — bold, geometric */}
        <path d="M14 18 L19 37 L28 26 L37 37 L42 18"
          stroke="url(#wpGrad1)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none" />

        {/* Crosshair/target accent — prediction symbol */}
        <circle cx="28" cy="44" r="4" fill="none" stroke="url(#wpGrad1)" strokeWidth="1.2" opacity="0.8" />
        <line x1="28" y1="41" x2="28" y2="39" stroke="url(#wpGrad1)" strokeWidth="1.2" opacity="0.8" />
        <line x1="25" y1="44" x2="23" y2="44" stroke="url(#wpGrad1)" strokeWidth="1.2" opacity="0.8" />
        <line x1="31" y1="44" x2="33" y2="44" stroke="url(#wpGrad1)" strokeWidth="1.2" opacity="0.8" />

        {/* Top accent dot cluster */}
        <circle cx="28" cy="9" r="1.5" fill="#38B6FF" opacity="0.9" />
        <circle cx="24" cy="10.5" r="1" fill="#00E5A0" opacity="0.6" />
        <circle cx="32" cy="10.5" r="1" fill="#CC944B" opacity="0.6" />
      </svg>

      {variant === 'full' && (
        <div className="flex flex-col leading-none gap-0.5">
          <div className="flex items-baseline gap-1.5">
            <span className={`font-black tracking-tight ${s.text}`} style={{
              background: 'linear-gradient(135deg, #38B6FF 0%, #00E5A0 60%, #CC944B 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              WHINK
            </span>
            <span className={`font-black tracking-tight ${s.text} text-white`}>
              Predict
            </span>
          </div>
          {showGroup && (
            <span className={`${s.sub} font-bold tracking-[0.3em] text-slate-500 uppercase`}>
              A Whink Apps Product
            </span>
          )}
        </div>
      )}
    </div>
  )
}
