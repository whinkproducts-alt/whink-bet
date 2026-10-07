import getDb from './db'
import { generateId } from './auth'

export interface Match {
  id: string
  externalId: string
  homeTeam: string
  awayTeam: string
  homeTeamLogo: string
  awayTeamLogo: string
  league: string
  leagueLogo: string
  country: string
  matchDate: string
  status: string
  homeScore: number | null
  awayScore: number | null
}

export interface Prediction {
  id: string
  matchId: string
  prediction: string
  confidence: number
  tier: string
  reasoning: string
  odds: number | null
  result: string
  isPremium: boolean
  match: Match
}

// Statistical scoring engine - generates confidence scores from team data
function calculateConfidence(params: {
  homeForm: number
  awayForm: number
  h2hHomeWins: number
  h2hTotal: number
  homeGoalsAvg: number
  awayGoalsAvg: number
  leaguePosition: number
}): number {
  const { homeForm, awayForm, h2hHomeWins, h2hTotal, homeGoalsAvg, awayGoalsAvg } = params
  const formDiff = (homeForm - awayForm) * 10
  const h2hRate = h2hTotal > 0 ? (h2hHomeWins / h2hTotal) * 20 : 10
  const goalsDiff = Math.min((homeGoalsAvg - awayGoalsAvg) * 5, 10)
  const base = 60 + formDiff + h2hRate + goalsDiff
  return Math.min(Math.max(Math.round(base), 50), 97)
}

function getTier(confidence: number): string {
  if (confidence >= 90) return 'optimal'
  if (confidence >= 75) return 'high'
  return 'watching'
}

function getPredictionLabel(confidence: number, homeStrength: number, awayStrength: number): string {
  const diff = homeStrength - awayStrength
  if (diff > 0.3) return '1'
  if (diff < -0.3) return '2'
  if (Math.abs(diff) < 0.1) return 'X'
  return diff > 0 ? '1X' : 'X2'
}

// Seed database with realistic mock data for demo
export function seedPredictions() {
  const db = getDb()
  const existing = db.prepare('SELECT COUNT(*) as count FROM matches').get() as any
  if (existing.count > 0) return

  const matches = [
    {
      homeTeam: 'Manchester City', awayTeam: 'Arsenal',
      homeTeamLogo: '50', awayTeamLogo: '42',
      league: 'Premier League', country: 'England',
      homeForm: 4.2, awayForm: 3.8, homeGoals: 2.3, awayGoals: 1.8,
      prediction: '1X', odds: 2.15, isPremium: false,
    },
    {
      homeTeam: 'Real Madrid', awayTeam: 'Barcelona',
      homeTeamLogo: '541', awayTeamLogo: '529',
      league: 'La Liga', country: 'Spain',
      homeForm: 4.5, awayForm: 4.1, homeGoals: 2.6, awayGoals: 2.2,
      prediction: '1', odds: 1.92, isPremium: false,
    },
    {
      homeTeam: 'Bayern Munich', awayTeam: 'PSG',
      homeTeamLogo: '157', awayTeamLogo: '85',
      league: 'Champions League', country: 'Europe',
      homeForm: 4.3, awayForm: 4.0, homeGoals: 2.8, awayGoals: 2.1,
      prediction: 'GG', odds: 1.75, isPremium: false,
    },
    {
      homeTeam: 'Inter Milan', awayTeam: 'AC Milan',
      homeTeamLogo: '505', awayTeamLogo: '489',
      league: 'Serie A', country: 'Italy',
      homeForm: 3.9, awayForm: 3.7, homeGoals: 2.1, awayGoals: 1.9,
      prediction: 'O2.5', odds: 2.05, isPremium: false,
    },
    {
      homeTeam: 'Liverpool', awayTeam: 'Chelsea',
      homeTeamLogo: '40', awayTeamLogo: '49',
      league: 'Premier League', country: 'England',
      homeForm: 4.1, awayForm: 3.5, homeGoals: 2.5, awayGoals: 1.7,
      prediction: '1', odds: 1.85, isPremium: true,
    },
    {
      homeTeam: 'PSG', awayTeam: 'Marseille',
      homeTeamLogo: '85', awayTeamLogo: '81',
      league: 'Ligue 1', country: 'France',
      homeForm: 4.6, awayForm: 3.2, homeGoals: 3.1, awayGoals: 1.4,
      prediction: '1', odds: 1.45, isPremium: true,
    },
    {
      homeTeam: 'Atletico Madrid', awayTeam: 'Sevilla',
      homeTeamLogo: '530', awayTeamLogo: '536',
      league: 'La Liga', country: 'Spain',
      homeForm: 3.8, awayForm: 3.3, homeGoals: 1.9, awayGoals: 1.5,
      prediction: '1X', odds: 1.70, isPremium: true,
    },
    {
      homeTeam: 'Borussia Dortmund', awayTeam: 'RB Leipzig',
      homeTeamLogo: '165', awayTeamLogo: '173',
      league: 'Bundesliga', country: 'Germany',
      homeForm: 3.7, awayForm: 3.9, homeGoals: 2.2, awayGoals: 2.0,
      prediction: 'GG', odds: 1.65, isPremium: true,
    },
  ]

  const now = new Date()
  for (let i = 0; i < matches.length; i++) {
    const m = matches[i]
    const matchId = generateId()
    const predId = generateId()
    const matchDate = new Date(now.getTime() + (i + 1) * 24 * 60 * 60 * 1000).toISOString()

    const confidence = calculateConfidence({
      homeForm: m.homeForm,
      awayForm: m.awayForm,
      h2hHomeWins: 3,
      h2hTotal: 7,
      homeGoalsAvg: m.homeGoals,
      awayGoalsAvg: m.awayGoals,
      leaguePosition: 2,
    })
    const tier = getTier(confidence)

    const reasonings: Record<string, string> = {
      '1': `${m.homeTeam} have been dominant at home with strong recent form. Defensive solidity and attacking threat make them heavy favourites.`,
      '1X': `${m.homeTeam} hold a marginal edge but ${m.awayTeam} are compact and dangerous on the counter. Draw remains a real possibility.`,
      'GG': `Both sides have scored in their last 5 matches. Attacking intent on both sides makes BTTS the value play here.`,
      'O2.5': `High-scoring affair expected. Both sides average over 2 goals per game. Pace and quality in attack drives this pick.`,
      'X2': `${m.awayTeam} have been exceptional away from home. ${m.homeTeam} have conceded in their last 4 home matches.`,
    }

    db.prepare(`
      INSERT INTO matches (id, external_id, home_team, away_team, home_team_logo, away_team_logo, league, country, match_date, status)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 'upcoming')
    `).run(matchId, `ext_${i}`, m.homeTeam, m.awayTeam, m.homeTeamLogo, m.awayTeamLogo, m.league, m.country, matchDate)

    db.prepare(`
      INSERT INTO predictions (id, match_id, prediction, confidence, tier, reasoning, odds, result, is_premium)
      VALUES (?, ?, ?, ?, ?, ?, ?, 'pending', ?)
    `).run(predId, matchId, m.prediction, confidence, tier, reasonings[m.prediction] || reasonings['1X'], m.odds, m.isPremium ? 1 : 0)
  }
}

export function getPredictions(plan: string = 'free', limit: number = 20): Prediction[] {
  const db = getDb()
  seedPredictions()

  const rows = db.prepare(`
    SELECT p.*, m.home_team, m.away_team, m.home_team_logo, m.away_team_logo,
           m.league, m.country, m.match_date, m.status, m.home_score, m.away_score
    FROM predictions p
    JOIN matches m ON m.id = p.match_id
    ORDER BY p.confidence DESC
    LIMIT ?
  `).all(limit) as any[]

  return rows.map(r => ({
    id: r.id,
    matchId: r.match_id,
    prediction: plan === 'premium' || !r.is_premium ? r.prediction : '🔒',
    confidence: plan === 'premium' || !r.is_premium ? r.confidence : 0,
    tier: r.tier,
    reasoning: plan === 'premium' || !r.is_premium ? r.reasoning : 'Upgrade to Premium to unlock this prediction.',
    odds: r.odds,
    result: r.result,
    isPremium: Boolean(r.is_premium),
    match: {
      id: r.match_id,
      externalId: r.external_id,
      homeTeam: r.home_team,
      awayTeam: r.away_team,
      homeTeamLogo: r.home_team_logo,
      awayTeamLogo: r.away_team_logo,
      league: r.league,
      leagueLogo: '',
      country: r.country,
      matchDate: r.match_date,
      status: r.status,
      homeScore: r.home_score,
      awayScore: r.away_score,
    },
  }))
}

export function getStats() {
  return {
    accuracyRate: 94,
    totalPredictions: 50420,
    activeUsers: 5200,
    avgROI: 12,
    winRate: 82,
    todaysPicks: 8,
    avgConfidence: 84,
  }
}
