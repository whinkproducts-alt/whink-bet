'use client'

import { Lock, TrendingUp, Target, Eye } from 'lucide-react'

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
  optimal: { label: '🏆 Optimal Pick', color: '#00E5A0', bg: 'rgba(0,229,160,0.1)', border: 'rgba(0,229,160,0.25)' },
  high:    { label: '🔥 High Confidence', color: '#38B6FF', bg: 'rgba(56,182,255,0.1)', border: 'rgba(56,182,255,0.25)' },
  watching:{ label: '👀 Worth Watching', color: '#CC944B', bg: 'rgba(204,148,75,0.1)', border: 'rgba(204,148,75,0.25)' },
}

function TeamInitials(name: string) {
  return name.split(' ').map(w => w[0]).join('').slice(0, 3).toUpperCase()
}

export default function PredictionCard({
  homeTeam, awayTeam, league, country, prediction, confidence,
  tier, odds, isPremium, reasoning, matchDate, compact = false
}: PredictionCardProps) {
  const tc = tierConfig[tier as keyof typeof tierConfig] || tierConfig.watching
  const isLocked = isPremium && prediction === '🔒'

  return (
    <div className="glass-card glass-card-hover p-5 flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2 min-w-0">
          <span className="text-xs font-semibold px-2 py-0.5 rounded-full"
            style={{ background: tc.bg, color: tc.color, border: `1px solid ${tc.border}` }}>
            {tc.label}
          </span>
        </div>
        <div className="text-right shrink-0">
          <div className="text-xs text-slate-500 mb-0.5">{league} · {country}</div>
          {matchDate && (
            <div className="text-xs text-slate-600">
              {new Date(matchDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}
            </div>
          )}
        </div>
      </div>

      {/* Teams */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex flex-col items-center gap-2 flex-1 text-center">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center text-sm font-black"
            style={{ background: 'linear-gradient(135deg, rgba(56,182,255,0.15), rgba(0,229,160,0.1))', border: '1px solid rgba(56,182,255,0.2)', color: '#38B6FF' }}>
            {TeamInitials(homeTeam)}
          </div>
          <span className="text-sm font-semibold text-slate-200 leading-tight">{homeTeam}</span>
        </div>

        <div className="flex flex-col items-center gap-1 px-3">
          <span className="text-xs text-slate-500 font-medium">VS</span>
          {!isLocked && (
            <div className="px-3 py-1.5 rounded-lg text-lg font-black"
              style={{ background: tc.bg, color: tc.color, border: `1px solid ${tc.border}` }}>
              {prediction}
            </div>
          )}
          {isLocked && (
            <div className="px-3 py-1.5 rounded-lg"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
              <Lock size={18} className="text-slate-600" />
            </div>
          )}
        </div>

        <div className="flex flex-col items-center gap-2 flex-1 text-center">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center text-sm font-black"
            style={{ background: 'linear-gradient(135deg, rgba(0,229,160,0.15), rgba(56,182,255,0.1))', border: '1px solid rgba(0,229,160,0.2)', color: '#00E5A0' }}>
            {TeamInitials(awayTeam)}
          </div>
          <span className="text-sm font-semibold text-slate-200 leading-tight">{awayTeam}</span>
        </div>
      </div>

      {/* Confidence */}
      {!isLocked ? (
        <div className="space-y-1.5">
          <div className="flex justify-between items-center">
            <span className="text-xs text-slate-500">Confidence</span>
            <span className="text-sm font-bold" style={{ color: tc.color }}>{confidence}%</span>
          </div>
          <div className="h-1.5 rounded-full bg-slate-800 overflow-hidden">
            <div className="h-full rounded-full transition-all duration-700"
              style={{ width: `${confidence}%`, background: `linear-gradient(90deg, ${tc.color}88, ${tc.color})` }} />
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-2 p-3 rounded-xl"
          style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
          <Lock size={14} className="text-slate-600 shrink-0" />
          <span className="text-xs text-slate-500">Upgrade to Premium to unlock this prediction</span>
        </div>
      )}

      {/* Footer */}
      {!compact && (
        <div className="flex items-center justify-between pt-1 border-t border-white/5">
          {odds && !isLocked ? (
            <div className="flex items-center gap-1.5">
              <TrendingUp size={13} className="text-slate-500" />
              <span className="text-xs text-slate-500">Odds</span>
              <span className="text-sm font-bold text-slate-300">{odds.toFixed(2)}</span>
            </div>
          ) : <div />}
          {isPremium && !isLocked && (
            <span className="text-xs px-2 py-0.5 rounded-full font-semibold"
              style={{ background: 'rgba(204,148,75,0.15)', color: '#CC944B', border: '1px solid rgba(204,148,75,0.2)' }}>
              Premium
            </span>
          )}
        </div>
      )}
    </div>
  )
}
