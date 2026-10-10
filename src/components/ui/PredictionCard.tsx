'use client'

import { Lock, TrendingUp, Clock } from 'lucide-react'

interface PredictionCardProps {
  homeTeam: string
  awayTeam: string
  league: string
  country: string
  prediction: string
  confidence: number
  tier: string
  odds: number | null
  isPremium: boolean
  reasoning?: string
  matchDate?: string
  compact?: boolean
}

const tierConfig = {
  optimal: {
    label: 'Optimal Pick',
    emoji: '🏆',
    color: '#CC944B',
    bg: 'rgba(204,148,75,0.1)',
    border: 'rgba(204,148,75,0.25)',
    glow: 'rgba(204,148,75,0.06)',
    homeColor: '#38B6FF',
    awayColor: '#CC944B',
  },
  high: {
    label: 'High Confidence',
    emoji: '🔥',
    color: '#38B6FF',
    bg: 'rgba(56,182,255,0.1)',
    border: 'rgba(56,182,255,0.25)',
    glow: 'rgba(56,182,255,0.06)',
    homeColor: '#38B6FF',
    awayColor: '#00E5A0',
  },
  watching: {
    label: 'Worth Watching',
    emoji: '👀',
    color: '#00E5A0',
    bg: 'rgba(0,229,160,0.1)',
    border: 'rgba(0,229,160,0.25)',
    glow: 'rgba(0,229,160,0.06)',
    homeColor: '#00E5A0',
    awayColor: '#38B6FF',
  },
}

function TeamInitials(name: string) {
  return name.split(' ').map(w => w[0]).join('').slice(0, 3).toUpperCase()
}

function formatDate(dateStr?: string) {
  if (!dateStr) return null
  try {
    return new Date(dateStr).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })
  } catch {
    return dateStr
  }
}

export default function PredictionCard({
  homeTeam, awayTeam, league, country, prediction, confidence,
  tier, odds, isPremium, reasoning, matchDate, compact = false
}: PredictionCardProps) {
  const tc = tierConfig[tier as keyof typeof tierConfig] || tierConfig.watching
  const isLocked = isPremium && prediction === '🔒'

  return (
    <div className="glass-card glass-card-hover relative overflow-hidden flex flex-col group"
      style={{ boxShadow: `0 0 40px ${tc.glow}` }}>

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px]"
        style={{ background: `linear-gradient(90deg, transparent 0%, ${tc.color} 40%, ${tc.color} 60%, transparent 100%)` }} />

      {/* Hover corner glow */}
      <div className="absolute top-0 right-0 w-32 h-32 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `radial-gradient(ellipse, ${tc.color}18, transparent 70%)`, transform: 'translate(30%, -30%)' }} />

      <div className="p-5 flex flex-col gap-4 flex-1">
        {/* Header row */}
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-1.5">
            <span className="text-base leading-none">{tc.emoji}</span>
            <span className="text-xs font-bold px-2 py-0.5 rounded-full"
              style={{ background: tc.bg, color: tc.color, border: `1px solid ${tc.border}` }}>
              {tc.label}
            </span>
          </div>
          <div className="text-right shrink-0">
            <div className="text-xs text-slate-500 font-medium">{league}</div>
            {matchDate && (
              <div className="flex items-center gap-1 text-xs text-slate-600 justify-end mt-0.5">
                <Clock size={10} />
                {formatDate(matchDate)}
              </div>
            )}
          </div>
        </div>

        {/* Teams vs prediction */}
        <div className="flex items-center justify-between gap-2">
          {/* Home */}
          <div className="flex flex-col items-center gap-1.5 flex-1 min-w-0">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xs font-black shrink-0"
              style={{
                background: `${tc.homeColor}14`,
                border: `1px solid ${tc.homeColor}22`,
                color: tc.homeColor,
              }}>
              {TeamInitials(homeTeam)}
            </div>
            <span className="text-xs font-semibold text-slate-200 text-center leading-tight line-clamp-2">{homeTeam}</span>
          </div>

          {/* Middle: VS + Pick */}
          <div className="flex flex-col items-center gap-2 px-1 shrink-0">
            <span className="text-[10px] text-slate-600 font-bold tracking-widest">VS</span>
            {isLocked ? (
              <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <Lock size={16} className="text-slate-600" />
              </div>
            ) : (
              <div className="px-3 py-2 rounded-xl text-sm font-black min-w-[44px] text-center"
                style={{ background: tc.bg, color: tc.color, border: `1px solid ${tc.border}` }}>
                {prediction}
              </div>
            )}
          </div>

          {/* Away */}
          <div className="flex flex-col items-center gap-1.5 flex-1 min-w-0">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xs font-black shrink-0"
              style={{
                background: `${tc.awayColor}14`,
                border: `1px solid ${tc.awayColor}22`,
                color: tc.awayColor,
              }}>
              {TeamInitials(awayTeam)}
            </div>
            <span className="text-xs font-semibold text-slate-200 text-center leading-tight line-clamp-2">{awayTeam}</span>
          </div>
        </div>

        {/* Confidence / lock */}
        {isLocked ? (
          <div className="flex items-center gap-2 p-3 rounded-xl"
            style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
            <Lock size={13} className="text-slate-600 shrink-0" />
            <span className="text-xs text-slate-600">Upgrade to Premium to unlock</span>
          </div>
        ) : (
          <div className="space-y-1.5">
            <div className="flex justify-between items-center">
              <span className="text-xs text-slate-500">AI Confidence</span>
              <span className="text-xs font-black" style={{ color: tc.color }}>{confidence}%</span>
            </div>
            <div className="h-1 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
              <div className="h-full rounded-full transition-all duration-700"
                style={{ width: `${confidence}%`, background: `linear-gradient(90deg, ${tc.color}77, ${tc.color})` }} />
            </div>
          </div>
        )}

        {/* Reasoning snippet */}
        {reasoning && !isLocked && !compact && (
          <p className="text-[11px] text-slate-600 leading-relaxed line-clamp-2 border-t border-white/5 pt-3">{reasoning}</p>
        )}

        {/* Footer */}
        {!compact && (
          <div className="flex items-center justify-between mt-auto pt-1">
            {odds && !isLocked ? (
              <div className="flex items-center gap-1.5">
                <TrendingUp size={11} className="text-slate-600" />
                <span className="text-xs text-slate-600">Odds</span>
                <span className="text-xs font-bold text-slate-400">{odds.toFixed(2)}</span>
              </div>
            ) : <div />}
            {isPremium && !isLocked && (
              <span className="text-[10px] px-2 py-0.5 rounded-full font-bold"
                style={{ background: 'rgba(204,148,75,0.12)', color: '#CC944B', border: '1px solid rgba(204,148,75,0.2)' }}>
                Premium
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
