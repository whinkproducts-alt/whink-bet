'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Logo from '@/components/ui/Logo'
import { Menu, X } from 'lucide-react'

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
        background: scrolled ? 'rgba(7,11,18,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
      }}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/">
          <Logo size="sm" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {['Features', 'How It Works', 'Predictions', 'Pricing'].map(item => (
            <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="btn-ghost text-sm">
              {item}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link href="/login" className="btn-ghost text-sm">Login</Link>
          <Link href="/register" className="btn-primary text-sm py-2 px-5">
            Start Free Trial
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
          style={{ background: 'rgba(7,11,18,0.98)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          {['Features', 'How It Works', 'Predictions', 'Pricing'].map(item => (
            <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="block py-3 text-slate-300 text-sm border-b border-white/5"
              onClick={() => setOpen(false)}>
              {item}
            </a>
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
