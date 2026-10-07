import { cookies } from 'next/headers'
import { validateSession } from '@/lib/auth'
import { getPredictions, seedPredictions } from '@/lib/predictions'
import PredictionCard from '@/components/ui/PredictionCard'
import { Filter } from 'lucide-react'

export default async function PredictionsPage() {
  const cookieStore = await cookies()
  const token = cookieStore.get('whink_session')?.value!
  const user = validateSession(token)!

  seedPredictions()
  const predictions = getPredictions(user.plan, 50)

  const tiers = ['all', 'optimal', 'high', 'watching']

  return (
    <div className="p-6 lg:p-8 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black mb-1">All Predictions</h1>
          <p className="text-slate-500 text-sm">{predictions.length} picks available today</p>
        </div>
        <div className="flex items-center gap-2 glass-card px-4 py-2 text-sm text-slate-400">
          <Filter size={14} />
          <span>Filter by tier</span>
        </div>
      </div>

      {/* Tier tabs */}
      <div className="flex gap-2 overflow-x-auto pb-1">
        {tiers.map(tier => (
          <button key={tier}
            className="px-4 py-1.5 rounded-full text-sm font-semibold whitespace-nowrap capitalize transition-all"
            style={{
              background: tier === 'all' ? 'rgba(56,182,255,0.15)' : 'rgba(255,255,255,0.05)',
              color: tier === 'all' ? '#38B6FF' : '#94a3b8',
              border: tier === 'all' ? '1px solid rgba(56,182,255,0.25)' : '1px solid rgba(255,255,255,0.06)',
            }}>
            {tier === 'all' ? 'All Picks' : tier === 'optimal' ? '🏆 Optimal' : tier === 'high' ? '🔥 High' : '👀 Watching'}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {predictions.map((p, i) => (
          <PredictionCard key={i}
            homeTeam={p.match.homeTeam}
            awayTeam={p.match.awayTeam}
            league={p.match.league}
            country={p.match.country}
            matchDate={p.match.matchDate}
            prediction={p.prediction}
            confidence={p.confidence}
            tier={p.tier}
            odds={p.odds}
            isPremium={p.isPremium}
            reasoning={p.reasoning}
          />
        ))}
      </div>
    </div>
  )
}
