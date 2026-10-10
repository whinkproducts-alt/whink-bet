'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Logo from '@/components/ui/Logo'
import { Menu, X, Zap } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(7,11,18,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(24px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(56,182,255,0.1)' : '1px solid transparent',
      }}>

      {/* Top brand bar */}
      <div className="hidden md:flex items-center justify-center py-1.5"
        style={{ background: 'rgba(56,182,255,0.06)', borderBottom: '1px solid rgba(56,182,255,0.08)' }}>
        <div className="flex items-center gap-4 text-xs text-slate-500">
          <span className="font-semibold" style={{ color: 'rgba(56,182,255,0.6)' }}>Whink Group</span>
          <span style={{ color: 'rgba(255,255,255,0.1)' }}>·</span>
          <span className="font-semibold" style={{ color: 'rgba(0,229,160,0.6)' }}>Whink Apps</span>
          <span style={{ color: 'rgba(255,255,255,0.1)' }}>·</span>
          <span className="font-semibold text-slate-300">WhinkPredict</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Logo size="sm" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {[
            { label: 'Features', href: '#features' },
            { label: "Naye's Picks", href: '/nayes-picks' },
            { label: 'How It Works', href: '#how-it-works' },
            { label: 'Pricing', href: '#pricing' },
          ].map(item => (
            <Link key={item.label} href={item.href}
              className="btn-ghost text-sm font-medium">
              {item.label === "Naye's Picks" ? (
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  {item.label}
                </span>
              ) : item.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link href="/login" className="btn-ghost text-sm">Login</Link>
          <Link href="/register" className="btn-primary text-sm py-2 px-5">
            <Zap size={14} />
            Start Free
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden btn-ghost p-2" onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden px-6 pb-6 space-y-1"
          style={{ background: 'rgba(7,11,18,0.98)', borderBottom: '1px solid rgba(56,182,255,0.1)' }}>
          {[
            { label: 'Features', href: '#features' },
            { label: "Naye's Picks", href: '/nayes-picks' },
            { label: 'How It Works', href: '#how-it-works' },
            { label: 'Pricing', href: '#pricing' },
          ].map(item => (
            <Link key={item.label} href={item.href}
              className="block py-3 text-slate-300 text-sm border-b border-white/5"
              onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
          <div className="flex flex-col gap-2 pt-4">
            <Link href="/login" className="btn-secondary justify-center">Login</Link>
            <Link href="/register" className="btn-primary justify-center">Start Free Trial</Link>
          </div>
        </div>
      )}
    </nav>
  )
}
