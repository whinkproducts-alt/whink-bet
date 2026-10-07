'use client'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  variant?: 'full' | 'mark'
}

export default function Logo({ size = 'md', variant = 'full' }: LogoProps) {
  const sizes = {
    sm: { mark: 28, text: 'text-lg' },
    md: { mark: 36, text: 'text-xl' },
    lg: { mark: 48, text: 'text-3xl' },
  }

  const s = sizes[size]

  return (
    <div className="flex items-center gap-2.5">
      {/* W mark - geometric diamond/hexagon shape */}
      <svg width={s.mark} height={s.mark} viewBox="0 0 40 40" fill="none">
        <defs>
          <linearGradient id="brandGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38B6FF" />
            <stop offset="100%" stopColor="#00E5A0" />
          </linearGradient>
          <linearGradient id="brandGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#38B6FF" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#00E5A0" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        {/* Hexagonal background */}
        <path d="M20 2 L36 11 L36 29 L20 38 L4 29 L4 11 Z" fill="url(#brandGrad2)" stroke="url(#brandGrad)" strokeWidth="1.5" />
        {/* W letterform */}
        <path d="M10 13 L14 27 L20 19 L26 27 L30 13" stroke="url(#brandGrad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        {/* Accent dot */}
        <circle cx="20" cy="8" r="2" fill="url(#brandGrad)" opacity="0.6" />
      </svg>

      {variant === 'full' && (
        <div className="flex flex-col leading-none">
          <span className={`font-black tracking-tight ${s.text}`} style={{
            background: 'linear-gradient(135deg, #38B6FF 0%, #00E5A0 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            WHINK
          </span>
          <span className="text-[10px] font-bold tracking-[0.25em] text-slate-400 uppercase">
            BET
          </span>
        </div>
      )}
    </div>
  )
}
