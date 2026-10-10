'use client'

import Image from 'next/image'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  variant?: 'full' | 'mark'
  showGroup?: boolean
}

export default function Logo({ size = 'md', variant = 'full', showGroup = false }: LogoProps) {
  const sizes = {
    sm: { px: 120, h: 36, sub: 'text-[9px]' },
    md: { px: 160, h: 44, sub: 'text-[10px]' },
    lg: { px: 200, h: 56, sub: 'text-xs' },
  }

  const s = sizes[size]

  if (variant === 'mark') {
    return (
      <Image
        src="/brand/logo.png"
        alt="WhinkPredict"
        width={s.h}
        height={s.h}
        style={{ objectFit: 'contain' }}
        priority
      />
    )
  }

  return (
    <div className="flex items-center gap-2">
      <Image
        src="/brand/logo.png"
        alt="WhinkPredict"
        width={s.px}
        height={s.h}
        style={{ objectFit: 'contain', maxHeight: s.h }}
        priority
      />
      {showGroup && (
        <span className={`${s.sub} font-bold tracking-[0.3em] text-slate-500 uppercase`}>
          A Whink Apps Product
        </span>
      )}
    </div>
  )
}
