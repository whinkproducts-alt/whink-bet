import Link from 'next/link'
import Navbar from '@/components/marketing/Navbar'
import PredictionCard from '@/components/ui/PredictionCard'
import {
  Brain, BarChart3, Shield, Zap, ChevronRight,
  TrendingUp, Users, Target, CheckCircle, ArrowRight,
  Star, Trophy, Activity
} from 'lucide-react'

const DEMO_PREDICTIONS = [
  { homeTeam: 'Manchester City', awayTeam: 'Arsenal', league: 'Premier League', country: 'England', prediction: '1X', confidence: 89, tier: 'high', odds: 2.15, isPremium: false },
  { homeTeam: 'Real Madrid', awayTeam: 'Barcelona', league: 'La Liga', country: 'Spain', prediction: '1', confidence: 84, tier: 'high', odds: 1.92, isPremium: false },
  { homeTeam: 'Bayern Munich', awayTeam: 'PSG', league: 'Champions League', country: 'Europe', prediction: 'GG', confidence: 91, tier: 'optimal', odds: 1.75, isPremium: false },
  { homeTeam: 'Inter Milan', awayTeam: 'AC Milan', league: 'Serie A', country: 'Italy', prediction: 'O2.5', confidence: 87, tier: 'high', odds: 2.05, isPremium: false },
]

const FEATURES = [
  {
    icon: Brain,
    title: 'AI-Powered Predictions',
    stat: '94% Accuracy',
    desc: 'Advanced ML models analyse thousands of data points in real-time to deliver betting recommendations with transparent confidence scores.',
    color: '#38B6FF',
  },
  {
    icon: BarChart3,
    title: 'Real-Time Analytics',
    stat: '+12% ROI',
    desc: 'Track performance metrics and win rates with live updates. Interactive dashboards give you complete visibility into your betting performance.',
    color: '#00E5A0',
  },
  {
    icon: Activity,
    title: 'Performance Tracking',
    stat: '5K+ Users',
    desc: 'Visualise your betting history with detailed charts and comprehensive analytics. Monitor trends and optimise your strategy over time.',
    color: '#CC944B',
  },
  {
    icon: Shield,
    title: 'Transparent Insights',
    stat: '100% Clear',
    desc: 'Every prediction comes with clear reasoning and data sources. We show you exactly why our AI recommends each bet — no black boxes.',
    color: '#38B6FF',
  },
]

const HOW_IT_WORKS = [
  { step: '01', title: 'Data Collection', desc: 'Access comprehensive betting data from top leagues worldwide — real-time odds, historical patterns, team form, and head-to-head records.' },
  { step: '02', title: 'AI Analysis', desc: 'Our ML models identify patterns and calculate probability scores for each match, factoring in over 200 data signals per prediction.' },
  { step: '03', title: 'Confident Predictions', desc: 'Get actionable insights with confidence scores, transparent reasoning, and recommended bet types for every match.' },
  { step: '04', title: 'Track Results', desc: 'Monitor your performance with transparent tracking and detailed analytics dashboards. Every outcome is recorded and analysed.' },
]

const PRICING = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    features: ['5 predictions per day', 'Match previews', 'Basic analytics', 'Worth Watching tier'],
    cta: 'Get Started Free',
    href: '/register',
    highlight: false,
  },
  {
    name: 'Premium',
    price: '$19',
    period: 'per month',
    features: ['Unlimited predictions', 'Optimal & High Confidence picks', 'Full analytics dashboard', 'Performance tracking', 'Priority support', 'Early access features'],
    cta: 'Start Free Trial',
    href: '/register?plan=premium',
    highlight: true,
  },
]

const FAQ = [
  { q: 'How accurate are WHINK Bet predictions?', a: 'Our AI model is trained on millions of historical data points. Optimal Picks (90%+ confidence) have historically delivered strong win rates, but no prediction is ever a guarantee — sports always carry an element of uncertainty.' },
  { q: "What does 'confidence level' mean?", a: "Every prediction is scored: Optimal Pick (🏆 90%+) is our highest conviction call, High Confidence (🔥 75–89%) is a strong signal worth serious consideration, and Worth Watching (👀 60–74%) is a value opportunity with moderate certainty." },
  { q: 'What betting markets does WHINK Bet cover?', a: 'We cover Match Winner (1X2), Both Teams to Score (BTTS), Goals Over/Under (1.5, 2.5, 3.5), Double Chance, and Draw No Bet. More markets including Asian Handicap and Correct Score are in development.' },
  { q: 'How does the free plan work?', a: 'The Free Plan gives you 5 predictions per day with match previews and basic analytics. Full access to Optimal Picks, detailed match analysis, and unlimited predictions requires a Premium subscription.' },
  { q: 'Can I cancel my subscription anytime?', a: 'Yes. Cancel anytime from your account dashboard. Your Premium access remains active until the end of your current billing period — no charges after cancellation.' },
  { q: 'How do I manage my bankroll using WHINK Bet?', a: 'We recommend the flat-staking method — betting a fixed percentage of your bankroll (2–5%) per selection. Reserve higher stakes for Optimal Picks and never chase losses. WHINK Bet gives you the data; disciplined staking multiplies its value.' },
]

export default function HomePage() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-base)' }}>
      <Navbar />

      {/* HERO */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, #38B6FF 0%, transparent 70%)' }} />
        <div className="absolute top-40 right-10 w-64 h-64 rounded-full opacity-10 blur-3xl pointer-events-none"
          style={{ background: '#00E5A0' }} />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8 text-sm font-semibold"
            style={{ background: 'rgba(56,182,255,0.1)', border: '1px solid rgba(56,182,255,0.25)', color: '#38B6FF' }}>
            <Zap size={14} />
            AI-Powered Sports Analytics
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-none">
            Forecast.{' '}
            <span className="gradient-text">Win.</span>
            {' '}Repeat.
          </h1>

          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            AI-powered sports betting analytics that help you bet smarter, not harder.
            Transparent insights. Verified accuracy. Real results.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link href="/register" className="btn-primary text-base px-8 py-3.5">
              Start Free Trial
              <ArrowRight size={18} />
            </Link>
            <Link href="#how-it-works" className="btn-secondary text-base px-8 py-3.5">
              See How It Works
            </Link>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
            {[
              { icon: CheckCircle, label: 'Transparent insights' },
              { icon: Shield, label: 'Verified accuracy' },
              { icon: Star, label: 'Free to start' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2">
                <Icon size={15} className="text-green-400" />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats strip */}
        <div className="max-w-4xl mx-auto mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { val: '94%', label: 'Accuracy Rate' },
            { val: '50K+', label: 'Predictions Made' },
            { val: '5K+', label: 'Active Users' },
            { val: '+12%', label: 'Avg. ROI' },
          ].map(({ val, label }) => (
            <div key={label} className="glass-card p-5 text-center">
              <div className="text-3xl font-black gradient-text mb-1">{val}</div>
              <div className="text-xs text-slate-500 font-medium">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* LIVE PREDICTIONS TICKER */}
      <section className="py-6 overflow-hidden" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(56,182,255,0.03)' }}>
        <div className="ticker-wrap">
          <div className="ticker-content gap-8 px-4">
            {[...DEMO_PREDICTIONS, ...DEMO_PREDICTIONS].map((p, i) => (
              <div key={i} className="inline-flex items-center gap-3 px-4 py-2 rounded-lg mr-6"
                style={{ background: 'rgba(56,182,255,0.06)', border: '1px solid rgba(56,182,255,0.12)' }}>
                <span className="text-xs text-slate-400">{p.league}</span>
                <span className="font-semibold text-sm text-slate-200">{p.homeTeam} vs {p.awayTeam}</span>
                <span className="font-black text-sm" style={{ color: '#00E5A0' }}>{p.prediction}</span>
                <span className="text-xs font-bold" style={{ color: '#38B6FF' }}>{p.confidence}%</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4 text-xs font-semibold text-slate-400"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
              Platform Features
            </div>
            <h2 className="text-4xl font-black mb-4">Everything you need to bet smarter</h2>
            <p className="text-slate-400 max-w-xl mx-auto">Powerful AI-driven insights, real-time data, and transparent analytics — all in one place.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {FEATURES.map((f) => (
              <div key={f.title} className="glass-card glass-card-hover p-7">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: `${f.color}18`, border: `1px solid ${f.color}30` }}>
                    <f.icon size={22} style={{ color: f.color }} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-bold text-slate-100">{f.title}</h3>
                      <span className="text-xs font-black px-2 py-0.5 rounded-full"
                        style={{ background: `${f.color}15`, color: f.color }}>
                        {f.stat}
                      </span>
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PREDICTIONS SHOWCASE */}
      <section id="predictions" className="py-24 px-6" style={{ background: 'linear-gradient(180deg, transparent, rgba(56,182,255,0.03), transparent)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">Latest Successful Predictions</h2>
            <p className="text-slate-400">See exactly what our AI is picking — with full transparency on reasoning and confidence.</p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 mb-10">
            {DEMO_PREDICTIONS.map((p, i) => (
              <PredictionCard key={i} {...p} compact />
            ))}
          </div>

          <div className="text-center">
            <Link href="/register" className="btn-primary">
              Unlock All Predictions
              <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4 text-xs font-semibold text-slate-400"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
              Our Process
            </div>
            <h2 className="text-4xl font-black mb-4">How WHINK Bet Works</h2>
            <p className="text-slate-400">From data to decisions in four simple steps.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {HOW_IT_WORKS.map((step, i) => (
              <div key={step.step} className="glass-card p-7 flex gap-5"
                style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="text-5xl font-black shrink-0 leading-none"
                  style={{ background: 'linear-gradient(135deg, rgba(56,182,255,0.2), rgba(0,229,160,0.1))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  {step.step}
                </div>
                <div>
                  <h3 className="font-bold text-slate-100 mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI POWER SECTION */}
      <section className="py-24 px-6" style={{ background: 'rgba(56,182,255,0.03)', borderTop: '1px solid rgba(56,182,255,0.08)', borderBottom: '1px solid rgba(56,182,255,0.08)' }}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-6 text-xs font-semibold"
              style={{ background: 'rgba(56,182,255,0.1)', border: '1px solid rgba(56,182,255,0.2)', color: '#38B6FF' }}>
              <Brain size={12} />
              AI-Powered Predictions
            </div>
            <h2 className="text-4xl font-black mb-4">Unlock the power of<br />AI Sports Predictions</h2>
            <p className="text-slate-400 leading-relaxed mb-8">Our advanced AI analyses thousands of data points in real-time to deliver the most accurate predictions in sports betting. Every call comes with transparent reasoning so you always know the why.</p>
            <Link href="/register" className="btn-primary inline-flex">
              Unlock AI Power
              <ArrowRight size={16} />
            </Link>
          </div>
          <div className="flex-1 grid grid-cols-3 gap-4">
            {[
              { val: '94%', label: 'Accuracy Rate', color: '#38B6FF' },
              { val: '50K+', label: 'Predictions', color: '#00E5A0' },
              { val: '24/7', label: 'Live Updates', color: '#CC944B' },
            ].map(({ val, label, color }) => (
              <div key={label} className="glass-card p-5 text-center">
                <div className="text-3xl font-black mb-1" style={{ color }}>{val}</div>
                <div className="text-xs text-slate-500">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">Simple, transparent pricing</h2>
            <p className="text-slate-400">Start free. Upgrade when you're ready to go all in.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {PRICING.map((plan) => (
              <div key={plan.name} className={`glass-card p-8 relative ${plan.highlight ? 'glow-azure' : ''}`}
                style={plan.highlight ? { border: '1px solid rgba(56,182,255,0.4)', background: 'rgba(56,182,255,0.05)' } : {}}>
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-black"
                    style={{ background: 'linear-gradient(135deg, #38B6FF, #00E5A0)', color: '#070B12' }}>
                    MOST POPULAR
                  </div>
                )}
                <div className="mb-6">
                  <div className="text-sm text-slate-400 font-semibold mb-1">{plan.name}</div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black">{plan.price}</span>
                    <span className="text-slate-500 text-sm">/{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-slate-300">
                      <CheckCircle size={15} className="text-green-400 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href={plan.href}
                  className={plan.highlight ? 'btn-primary w-full justify-center' : 'btn-secondary w-full justify-center'}>
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 px-6" style={{ background: 'rgba(14,21,32,0.5)' }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">Frequently asked questions</h2>
          </div>
          <div className="space-y-3">
            {FAQ.map(({ q, a }) => (
              <details key={q} className="glass-card group">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="font-semibold text-slate-200 pr-4">{q}</span>
                  <ChevronRight size={18} className="text-slate-500 shrink-0 transition-transform group-open:rotate-90" />
                </summary>
                <p className="px-6 pb-6 text-sm text-slate-400 leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BOTTOM */}
      <section className="py-24 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at center, rgba(56,182,255,0.08) 0%, transparent 70%)' }} />
        <div className="max-w-2xl mx-auto relative z-10">
          <div className="text-xs font-bold tracking-widest text-slate-500 uppercase mb-4">Start Winning Today</div>
          <h2 className="text-5xl font-black mb-4">Ready to Make Smarter Bets?</h2>
          <p className="text-slate-400 mb-10">Join thousands of winning bettors. Get instant access to AI-powered predictions, transparent analytics, and expert insights.</p>
          <Link href="/register" className="btn-primary text-base px-10 py-4">
            Start Free Trial
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', background: 'rgba(7,11,18,0.8)' }}>
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-10">
            <div className="md:col-span-2">
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl font-black gradient-text">WHINK Bet</span>
                </div>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
                AI-powered sports betting analytics. Smarter decisions through data, transparency, and verified accuracy.
              </p>
            </div>
            <div>
              <div className="text-xs font-bold tracking-widest text-slate-500 uppercase mb-4">Product</div>
              <ul className="space-y-2">
                {['Features', 'How It Works', 'Predictions', 'Pricing', 'FAQ'].map(l => (
                  <li key={l}><a href={`#${l.toLowerCase().replace(/\s+/g, '-')}`} className="text-sm text-slate-400 hover:text-slate-200 transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-xs font-bold tracking-widest text-slate-500 uppercase mb-4">Company</div>
              <ul className="space-y-2">
                {['About WHINK', 'Contact', 'Privacy Policy', 'Terms of Service'].map(l => (
                  <li key={l}><a href="#" className="text-sm text-slate-400 hover:text-slate-200 transition-colors">{l}</a></li>
                ))}
              </ul>
              <div className="mt-4 text-sm text-slate-500">support@whinkbet.com</div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6"
            style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            <div className="text-xs text-slate-600">© 2026 WHINK Bet · A WHINK Apps Product. All rights reserved.</div>
            <div className="text-xs text-slate-700 text-center">
              ⚠️ WHINK Bet is for informational purposes only. Betting involves risk. Gamble responsibly.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
