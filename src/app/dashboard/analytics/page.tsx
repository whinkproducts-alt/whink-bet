import { BarChart2, TrendingUp, Target, Trophy, Calendar, Flame, ArrowUpRight } from 'lucide-react'

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

const sportBreakdown = [
  { sport: '⚽ Football', picks: 84, wr: 76, color: '#38B6FF' },
  { sport: '🏀 Basketball', picks: 31, wr: 81, color: '#00E5A0' },
  { sport: '🎾 Tennis', picks: 20, wr: 75, color: '#CC944B' },
  { sport: '🏈 NFL', picks: 12, wr: 83, color: '#38B6FF' },
]

const maxTotal = Math.max(...monthlyData.map(d => d.total))

export default function AnalyticsPage() {
  const totalPicks = monthlyData.reduce((s, d) => s + d.total, 0)
  const totalWins = monthlyData.reduce((s, d) => s + d.wins, 0)
  const avgROI = (monthlyData.reduce((s, d) => s + d.roi, 0) / monthlyData.length).toFixed(1)
  const overallWR = ((totalWins / totalPicks) * 100).toFixed(1)

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-base)' }}>

      {/* Page header */}
      <div className="relative overflow-hidden px-6 lg:px-8 pt-8 pb-8"
        style={{
          background: 'linear-gradient(135deg, rgba(56,182,255,0.04) 0%, rgba(204,148,75,0.03) 100%)',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
        }}>
        <div className="absolute top-0 right-0 w-80 h-48 pointer-events-none opacity-20"
          style={{ background: 'radial-gradient(ellipse, rgba(204,148,75,0.3), transparent 70%)', filter: 'blur(40px)' }} />
        <div className="relative z-10">
          <p className="text-xs text-slate-600 mb-2 font-semibold uppercase tracking-wider">WhinkPredict</p>
          <h1 className="text-2xl font-black text-white mb-1">Analytics</h1>
          <p className="text-slate-500 text-sm">Performance breakdown · Last 6 months</p>
        </div>
      </div>

      <div className="p-6 lg:p-8 space-y-8">

        {/* KPI tiles */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: 'Total Picks', value: totalPicks.toString(), sub: 'All time', icon: Target, color: '#38B6FF', delta: null },
            { label: 'Correct', value: totalWins.toString(), sub: `of ${totalPicks} total`, icon: Trophy, color: '#00E5A0', delta: '+6 vs last month' },
            { label: 'Win Rate', value: `${overallWR}%`, sub: 'Across all sports', icon: TrendingUp, color: '#00E5A0', delta: '+2.4%' },
            { label: 'Avg ROI', value: `+${avgROI}%`, sub: 'Monthly average', icon: BarChart2, color: '#CC944B', delta: '+3.1%' },
          ].map(({ label, value, sub, icon: Icon, color, delta }) => (
            <div key={label} className="glass-card glass-card-hover p-5 relative overflow-hidden group">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                style={{ background: `radial-gradient(ellipse at 80% 0%, ${color}10, transparent 60%)` }} />
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-slate-500 font-semibold uppercase tracking-wide">{label}</span>
                <div className="w-7 h-7 rounded-lg flex items-center justify-center"
                  style={{ background: `${color}12`, border: `1px solid ${color}20` }}>
                  <Icon size={13} style={{ color }} />
                </div>
              </div>
              <div className="text-3xl font-black mb-0.5" style={{ color }}>{value}</div>
              <div className="text-xs text-slate-600">{sub}</div>
              {delta && (
                <div className="flex items-center gap-1 mt-2 text-xs font-semibold" style={{ color: '#00E5A0' }}>
                  <ArrowUpRight size={11} />
                  {delta}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Chart + sport breakdown row */}
        <div className="grid lg:grid-cols-3 gap-6">

          {/* Monthly bar chart */}
          <div className="lg:col-span-2 glass-card p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-sm font-bold text-white flex items-center gap-2">
                  <Calendar size={14} className="text-slate-500" />
                  Monthly Performance
                </h2>
                <p className="text-xs text-slate-600 mt-0.5">Wins vs total picks per month</p>
              </div>
              <div className="flex items-center gap-4 text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-sm inline-block" style={{ background: 'rgba(0,229,160,0.7)' }} />
                  Wins
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-sm inline-block" style={{ background: 'rgba(56,182,255,0.2)' }} />
                  Total
                </span>
              </div>
            </div>

            <div className="flex items-end gap-3" style={{ height: 180 }}>
              {monthlyData.map(({ month, wins, total, roi }) => (
                <div key={month} className="flex-1 flex flex-col items-center gap-1.5 group/bar">
                  <div className="text-xs font-semibold transition-colors"
                    style={{ color: roi >= 20 ? '#00E5A0' : '#CC944B' }}>
                    +{roi}%
                  </div>
                  <div className="w-full relative flex flex-col justify-end rounded-t-lg overflow-hidden"
                    style={{ height: 130, background: 'rgba(56,182,255,0.07)', border: '1px solid rgba(56,182,255,0.1)' }}>
                    {/* Win fill */}
                    <div className="absolute bottom-0 left-0 right-0 rounded-t-lg transition-all duration-700"
                      style={{
                        height: `${(total / maxTotal) * 100}%`,
                        background: 'rgba(56,182,255,0.1)',
                      }} />
                    <div className="absolute bottom-0 left-0 right-0 rounded-t-lg transition-all duration-700"
                      style={{
                        height: `${(wins / maxTotal) * 100}%`,
                        background: 'linear-gradient(0deg, rgba(0,229,160,0.8), rgba(56,182,255,0.5))',
                      }} />
                    {/* Hover tooltip */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/bar:opacity-100 transition-opacity">
                      <div className="text-xs font-black text-white bg-black/60 rounded-md px-1.5 py-0.5">{wins}/{total}</div>
                    </div>
                  </div>
                  <div className="text-xs font-semibold text-slate-400">{month}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Sport breakdown */}
          <div className="glass-card p-6">
            <h2 className="text-sm font-bold text-white mb-5 flex items-center gap-2">
              <Flame size={14} className="text-slate-500" />
              By Sport
            </h2>
            <div className="space-y-5">
              {sportBreakdown.map(({ sport, picks, wr, color }) => (
                <div key={sport}>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-xs font-semibold text-slate-300">{sport}</span>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="text-slate-600">{picks} picks</span>
                      <span className="font-black" style={{ color }}>{wr}%</span>
                    </div>
                  </div>
                  <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
                    <div className="h-full rounded-full transition-all duration-700"
                      style={{ width: `${wr}%`, background: `linear-gradient(90deg, ${color}66, ${color})` }} />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-white/5 space-y-2">
              {[
                { label: 'Best month', val: 'September', color: '#00E5A0' },
                { label: 'Win streak', val: '7 days', color: '#38B6FF' },
                { label: 'Best league', val: 'Champions League', color: '#CC944B' },
              ].map(({ label, val, color }) => (
                <div key={label} className="flex items-center justify-between">
                  <span className="text-xs text-slate-600">{label}</span>
                  <span className="text-xs font-bold" style={{ color }}>{val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* League table */}
        <div className="glass-card p-6">
          <h2 className="text-sm font-bold text-white mb-5 flex items-center gap-2">
            <Trophy size={14} className="text-slate-500" />
            Performance by League
          </h2>
          <div className="space-y-4">
            {leagueStats.map(({ league, picks, winRate, color }, i) => (
              <div key={league} className="group/row">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-black text-slate-600 w-4">#{i + 1}</span>
                    <span className="text-sm font-semibold text-slate-200">{league}</span>
                  </div>
                  <div className="flex items-center gap-4 text-xs">
                    <span className="text-slate-500">{picks} picks</span>
                    <span className="font-black w-10 text-right" style={{ color }}>{winRate}%</span>
                  </div>
                </div>
                <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.05)' }}>
                  <div className="h-full rounded-full transition-all duration-700"
                    style={{ width: `${winRate}%`, background: `linear-gradient(90deg, ${color}55, ${color})` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
