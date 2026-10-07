import { getPredictions, seedPredictions, getStats } from '../lib/predictions'

describe('Predictions - Data loading', () => {
  beforeAll(() => {
    seedPredictions()
  })

  it('returns predictions array for free plan', () => {
    const preds = getPredictions('free', 10)
    expect(Array.isArray(preds)).toBe(true)
    expect(preds.length).toBeGreaterThan(0)
  })

  it('locks premium predictions for free users', () => {
    const preds = getPredictions('free', 20)
    const locked = preds.filter((p: any) => p.isPremium && p.prediction === '🔒')
    expect(locked.length).toBeGreaterThan(0)
  })

  it('unlocks all predictions for premium users', () => {
    const preds = getPredictions('premium', 20)
    const locked = preds.filter((p: any) => p.prediction === '🔒')
    expect(locked.length).toBe(0)
  })

  it('each prediction has required fields', () => {
    const preds = getPredictions('premium', 5)
    preds.forEach((p: any) => {
      expect(p).toHaveProperty('match')
      expect(p.match).toHaveProperty('homeTeam')
      expect(p.match).toHaveProperty('awayTeam')
      expect(p).toHaveProperty('confidence')
      expect(p).toHaveProperty('tier')
      expect(p.match).toHaveProperty('league')
    })
  })

  it('confidence is between 0 and 100', () => {
    const preds = getPredictions('premium', 10)
    preds.forEach((p: any) => {
      expect(p.confidence).toBeGreaterThanOrEqual(0)
      expect(p.confidence).toBeLessThanOrEqual(100)
    })
  })

  it('tiers are valid values', () => {
    const preds = getPredictions('premium', 10)
    const validTiers = ['optimal', 'high', 'watching']
    preds.forEach((p: any) => {
      expect(validTiers).toContain(p.tier)
    })
  })
})

describe('Predictions - Stats', () => {
  it('returns stats object with required fields', () => {
    const stats = getStats()
    expect(stats).toHaveProperty('winRate')
    expect(stats).toHaveProperty('activeUsers')
    expect(stats.winRate).toBeGreaterThan(0)
  })
})
