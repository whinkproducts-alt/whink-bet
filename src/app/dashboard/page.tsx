import { cookies } from 'next/headers'
import { validateSession } from '@/lib/auth'
import { getPredictions, getStats, seedPredictions } from '@/lib/predictions'
import PredictionCard from '@/components/ui/PredictionCard'
import { TrendingUp, Target, Trophy, Zap, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default async function DashboardPage() {
  const cookieStore = await cookies()
  const token = cookieStore.get('whink_session')?.value!
  const user = validateSession(token)!

  seedPredictions()
  const predictions = getPredictions(user.plan, 6)
  const stats = getStats()

  const statCards = [
    { label: 'Win Rate', value: `${stats.winRate}%`, icon: Trophy, color: '#00E5A0' },
    { label: "Today's Picks", value: stats.todaysPicks, icon: Target, color: '#38B6FF' },
    { label: 'Avg Confidence', value: `${stats.avgConfidence}%`, icon: TrendingUp, color: '#CC944B' },
    { label: 'Active Users', value: stats.activeUsers.toLocaleString(), icon: Zap, color: '#38B6FF' },
  ]

  return (
    <div className="p-6 lg:p-8 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-black mb-1">
          Welcome back, <span className="gradient-text">{(user.name ?? 'User').split(' ')[0]}</span>
        </h1>
        <p className="text-slate-500 text-sm">Here&apos;s your prediction dashboard for today</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map(({ label, value, icon: Icon, color }) => (
          <div key={label} className="glass-card p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: `${color}15`, border: `1px solid ${color}30` }}>
                <Icon size={18} style={{ color }} />
              </div>
              <span className="text-xs text-slate-500 font-medium">{label}</span>
            </div>
            <div className="text-2xl font-black" style={{ color }}>{value}</div>
          </div>
        ))}
      </div>

      {/* Free tier banner */}
      {user.plan === 'free' && (
        <div className="glass-card p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          style={{ background: 'linear-gradient(135deg, rgba(56,182,255,0.06), rgba(0,229,160,0.04))', borderColor: 'rgba(56,182,255,0.15)' }}>
          <div>
            <p className="font-bold text-slate-200 mb-0.5">You&apos;re on the Free plan</p>
            <p className="text-sm text-slate-500">Unlock all premium picks, higher confidence scores & detailed reasoning</p>
          </div>
          <Link href="/dashboard/settings#upgrade"
            className="btn-primary shrink-0 text-sm py-2 px-5 whitespace-nowrap">
            Upgrade to Premium <ArrowRight size={14} />
          </Link>
        </div>
      )}

      {/* Recent Predictions */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold">Today&apos;s Top Picks</h2>
          <Link href="/dashboard/predictions" className="text-sm text-blue-400 hover:text-blue-300 flex items-center gap-1">
            View all <ArrowRight size={14} />
          </Link>
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
    </div>
  )
}
