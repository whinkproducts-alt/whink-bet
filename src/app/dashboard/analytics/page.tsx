import { BarChart2, TrendingUp, Target, Trophy, Calendar } from 'lucide-react'

const monthlyData = [
  { month: 'May', wins: 18, total: 24, roi: 12.4 },
  { month: 'Jun', wins: 21, total: 27, roi: 18.2 },
  { month: 'Jul', wins: 16, total: 22, roi: 9.1 },
  { month: 'Aug', wins: 23, total: 29, roi: 22.7 },
  { month: 'Sep', wins: 25, total: 31, roi: 28.3 },
  { month: 'Oct', wins: 11, total: 14, roi: 15.6 },
]

const leagueStats = [
  { league: 'Premier League', picks: 42, winRate: 78, color: '#38B6FF' },
  { league: 'La Liga', picks: 38, winRate: 74, color: '#00E5A0' },
  { league: 'Champions League', picks: 29, winRate: 82, color: '#CC944B' },
  { league: 'Bundesliga', picks: 24, winRate: 71, color: '#38B6FF' },
  { league: 'Serie A', picks: 21, winRate: 69, color: '#00E5A0' },
]

export default function AnalyticsPage() {
  const maxWins = Math.max(...monthlyData.map(d => d.total))

  return (
    <div className="p-6 lg:p-8 space-y-8">
      <div>
        <h1 className="text-2xl font-black mb-1">Analytics</h1>
        <p className="text-slate-500 text-sm">Performance breakdown — last 6 months</p>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Total Picks', value: '147', icon: Target, color: '#38B6FF' },
          { label: 'Correct', value: '114', icon: Trophy, color: '#00E5A0' },
          { label: 'Win Rate', value: '77.6%', icon: TrendingUp, color: '#00E5A0' },
          { label: 'Avg ROI', value: '+18.2%', icon: BarChart2, color: '#CC944B' },
        ].map(({ label, value, icon: Icon, color }) => (
          <div key={label} className="glass-card p-5">
            <div className="flex items-center gap-2 mb-3">
              <Icon size={16} style={{ color }} />
              <span className="text-xs text-slate-500">{label}</span>
            </div>
            <div className="text-2xl font-black" style={{ color }}>{value}</div>
          </div>
        ))}
      </div>

      {/* Monthly chart */}
      <div className="glass-card p-6">
        <h2 className="font-bold mb-6 flex items-center gap-2">
          <Calendar size={16} className="text-slate-500" />
          Monthly Performance
        </h2>
        <div className="flex items-end gap-3 h-48">
          {monthlyData.map(({ month, wins, total, roi }) => (
            <div key={month} className="flex-1 flex flex-col items-center gap-2">
              <span className="text-xs text-slate-500">{roi > 0 ? '+' : ''}{roi}%</span>
              <div className="w-full flex flex-col justify-end" style={{ height: 160 }}>
                <div className="relative w-full rounded-t-lg overflow-hidden"
                  style={{ height: `${(total / maxWins) * 100}%`, background: 'rgba(56,182,255,0.1)', border: '1px solid rgba(56,182,255,0.15)' }}>
                  <div className="absolute bottom-0 left-0 right-0 rounded-t-lg"
                    style={{ height: `${(wins / total) * 100}%`, background: 'linear-gradient(0deg, rgba(0,229,160,0.6), rgba(56,182,255,0.4))' }} />
                </div>
              </div>
              <div className="text-center">
                <div className="text-xs font-semibold text-slate-300">{month}</div>
                <div className="text-xs text-slate-600">{wins}/{total}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-4 mt-4 pt-4 border-t border-white/5 text-xs text-slate-500">
          <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm inline-block" style={{ background: 'rgba(0,229,160,0.6)' }} />Wins</span>
          <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm inline-block" style={{ background: 'rgba(56,182,255,0.15)' }} />Total picks</span>
        </div>
      </div>

      {/* By league */}
      <div className="glass-card p-6">
        <h2 className="font-bold mb-5">Performance by League</h2>
        <div className="space-y-4">
          {leagueStats.map(({ league, picks, winRate, color }) => (
            <div key={league}>
              <div className="flex justify-between items-center mb-1.5">
                <span className="text-sm text-slate-300">{league}</span>
                <div className="flex items-center gap-3 text-xs">
                  <span className="text-slate-500">{picks} picks</span>
                  <span className="font-bold" style={{ color }}>{winRate}%</span>
                </div>
              </div>
              <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                <div className="h-full rounded-full transition-all duration-700"
                  style={{ width: `${winRate}%`, background: `linear-gradient(90deg, ${color}88, ${color})` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
