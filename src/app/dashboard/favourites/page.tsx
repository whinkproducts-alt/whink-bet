import Link from 'next/link'
import { Star, Zap, TrendingUp, Trophy, Flame, ArrowRight } from 'lucide-react'

const sampleSaved = [
  { homeTeam: 'Manchester City', awayTeam: 'Chelsea', league: 'Premier League', prediction: '1', confidence: 94, odds: 1.72, tier: 'optimal', date: 'Sat, Oct 12' },
  { homeTeam: 'Real Madrid', awayTeam: 'Atlético', league: 'La Liga', prediction: 'GG', confidence: 91, odds: 1.85, tier: 'optimal', date: 'Sun, Oct 13' },
  { homeTeam: 'LA Lakers', awayTeam: 'Golden State', league: 'NBA', prediction: 'O220.5', confidence: 93, odds: 1.88, tier: 'high', date: 'Sat, Oct 12' },
]

const tierConfig = {
  optimal: { color: '#CC944B', bg: 'rgba(204,148,75,0.1)', border: 'rgba(204,148,75,0.25)', label: '🏆 Optimal' },
  high:    { color: '#38B6FF', bg: 'rgba(56,182,255,0.1)', border: 'rgba(56,182,255,0.25)', label: '🔥 High' },
  watching:{ color: '#00E5A0', bg: 'rgba(0,229,160,0.1)', border: 'rgba(0,229,160,0.25)', label: '👀 Watching' },
}

const isEmpty = true // toggle to false to preview sample state

export default function FavouritesPage() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-base)' }}>

      {/* Header */}
      <div className="relative overflow-hidden px-6 lg:px-8 pt-8 pb-8"
        style={{
          background: 'linear-gradient(135deg, rgba(204,148,75,0.04) 0%, rgba(56,182,255,0.02) 100%)',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
        }}>
        <div className="absolute top-0 right-0 w-72 h-40 pointer-events-none opacity-20"
          style={{ background: 'radial-gradient(ellipse, rgba(204,148,75,0.4), transparent 70%)', filter: 'blur(40px)' }} />
        <div className="relative z-10">
          <p className="text-xs text-slate-600 mb-2 font-semibold uppercase tracking-wider">WhinkPredict</p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: 'rgba(204,148,75,0.12)', border: '1px solid rgba(204,148,75,0.25)' }}>
              <Star size={18} style={{ color: '#CC944B' }} />
            </div>
            <div>
              <h1 className="text-2xl font-black text-white">Favourites</h1>
              <p className="text-slate-500 text-sm mt-0.5">Your saved predictions</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 lg:p-8">

        {isEmpty ? (
          /* ── Empty state ── */
          <div className="max-w-lg mx-auto pt-8">
            <div className="glass-card p-10 flex flex-col items-center text-center">
              {/* Animated icon stack */}
              <div className="relative mb-6">
                <div className="w-20 h-20 rounded-3xl flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, rgba(204,148,75,0.15), rgba(56,182,255,0.1))',
                    border: '1px solid rgba(204,148,75,0.25)',
                    boxShadow: '0 0 40px rgba(204,148,75,0.08)',
                  }}>
                  <Star size={36} style={{ color: '#CC944B' }} />
                </div>
                {/* Decorative orbiting dots */}
                <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(56,182,255,0.2)', border: '1px solid rgba(56,182,255,0.4)' }}>
                  <Trophy size={9} style={{ color: '#38B6FF' }} />
                </div>
                <div className="absolute -bottom-1 -left-1 w-4 h-4 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(0,229,160,0.2)', border: '1px solid rgba(0,229,160,0.4)' }}>
                  <Flame size={9} style={{ color: '#00E5A0' }} />
                </div>
              </div>

              <h3 className="text-xl font-black text-white mb-2">No favourites yet</h3>
              <p className="text-sm text-slate-500 max-w-xs leading-relaxed mb-8">
                Star any prediction from the Predictions page to save it here for quick access.
              </p>

              {/* How-to steps */}
              <div className="w-full space-y-3 mb-8 text-left">
                {[
                  { step: '1', text: 'Browse today\'s picks', icon: TrendingUp, color: '#38B6FF' },
                  { step: '2', text: 'Tap the ★ star on any prediction card', icon: Star, color: '#CC944B' },
                  { step: '3', text: 'Your saved picks appear here', icon: Trophy, color: '#00E5A0' },
                ].map(({ step, text, icon: Icon, color }) => (
                  <div key={step} className="flex items-center gap-3 p-3 rounded-xl"
                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-black shrink-0"
                      style={{ background: `${color}20`, color }}>
                      {step}
                    </div>
                    <Icon size={13} style={{ color }} className="shrink-0" />
                    <span className="text-sm text-slate-400">{text}</span>
                  </div>
                ))}
              </div>

              <Link href="/dashboard/predictions"
                className="btn-primary text-sm py-2.5 px-6 w-full justify-center">
                Browse Predictions
                <ArrowRight size={14} />
              </Link>

              <div className="mt-4 text-center">
                <Link href="/dashboard/settings#upgrade"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold transition-colors"
                  style={{ color: 'rgba(56,182,255,0.7)' }}>
                  <Zap size={11} />
                  Upgrade for Naye&apos;s elite weekly picks
                </Link>
              </div>
            </div>
          </div>
        ) : (
          /* ── Saved picks list (shown when not empty) ── */
          <div className="space-y-4 max-w-3xl">
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs text-slate-500">{sampleSaved.length} saved picks</p>
              <button className="text-xs text-slate-600 hover:text-slate-400 transition-colors">Clear all</button>
            </div>
            {sampleSaved.map((p, i) => {
              const tc = tierConfig[p.tier as keyof typeof tierConfig] || tierConfig.watching
              return (
                <div key={i} className="glass-card glass-card-hover p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3 min-w-0">
                    <button className="shrink-0">
                      <Star size={18} style={{ color: '#CC944B' }} fill="#CC944B" />
                    </button>
                    <div className="min-w-0">
                      <div className="text-sm font-bold text-white truncate">{p.homeTeam} vs {p.awayTeam}</div>
                      <div className="text-xs text-slate-500 mt-0.5">{p.league} · {p.date}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="text-xs px-2 py-0.5 rounded-full font-bold"
                      style={{ background: tc.bg, color: tc.color, border: `1px solid ${tc.border}` }}>
                      {tc.label}
                    </span>
                    <div className="text-center">
                      <div className="text-xs text-slate-500">Pick</div>
                      <div className="text-base font-black" style={{ color: tc.color }}>{p.prediction}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xs text-slate-500">Conf.</div>
                      <div className="text-sm font-black" style={{ color: tc.color }}>{p.confidence}%</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xs text-slate-500">Odds</div>
                      <div className="text-sm font-bold text-slate-300">{p.odds.toFixed(2)}</div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
