import Link from 'next/link'
import Logo from '@/components/ui/Logo'
import { ChevronRight } from 'lucide-react'

const LEGAL_NAV = [
  { label: 'Terms of Service', href: '/legal' },
  { label: 'Privacy Policy', href: '/legal/privacy' },
  { label: 'Cookie Policy', href: '/legal/cookies' },
  { label: 'Refund Policy', href: '/legal/refund' },
]

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-base)' }}>
      {/* Top nav bar */}
      <nav className="sticky top-0 z-50"
        style={{ background: 'rgba(7,11,18,0.95)', backdropFilter: 'blur(24px)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/">
            <Logo size="sm" />
          </Link>
          <Link href="/" className="text-xs text-slate-500 hover:text-slate-300 transition-colors flex items-center gap-1">
            ← Back to WhinkPredict
          </Link>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col lg:flex-row gap-10">
        {/* Sidebar nav */}
        <aside className="lg:w-56 shrink-0">
          <div className="glass-card p-4 sticky top-24">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 px-2">Legal Documents</div>
            <nav className="space-y-1">
              {LEGAL_NAV.map(({ label, href }) => (
                <Link key={href} href={href}
                  className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm text-slate-400 hover:text-white hover:bg-white/5 transition-all group">
                  <span>{label}</span>
                  <ChevronRight size={13} className="text-slate-600 group-hover:text-slate-400 transition-colors" />
                </Link>
              ))}
            </nav>
            <div className="mt-4 pt-4 border-t border-white/5 text-xs text-slate-600 px-2">
              Questions? <a href="mailto:support@whinkpredict.com" className="text-slate-400 hover:text-white transition-colors">Contact us</a>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 min-w-0">
          {children}
        </main>
      </div>

      {/* Footer */}
      <footer className="mt-16 py-8 px-6 text-center"
        style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="text-xs text-slate-600">© 2026 WhinkPredict · A Whink Apps Product by Whink Group. All rights reserved.</div>
        <div className="mt-1 text-xs text-slate-700">⚠️ WhinkPredict is for informational purposes only. Please bet responsibly.</div>
      </footer>
    </div>
  )
}
