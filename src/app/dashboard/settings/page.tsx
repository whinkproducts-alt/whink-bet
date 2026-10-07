import { cookies } from 'next/headers'
import { validateSession } from '@/lib/auth'
import { User, Shield, CreditCard, Bell, Zap, Check } from 'lucide-react'

export default async function SettingsPage() {
  const cookieStore = await cookies()
  const token = cookieStore.get('whink_session')?.value!
  const user = validateSession(token)!

  const isPremium = user.plan === 'premium'

  return (
    <div className="p-6 lg:p-8 space-y-8 max-w-2xl">
      <div>
        <h1 className="text-2xl font-black mb-1">Settings</h1>
        <p className="text-slate-500 text-sm">Manage your account and preferences</p>
      </div>

      {/* Profile */}
      <div className="glass-card p-6 space-y-5">
        <h2 className="font-bold flex items-center gap-2">
          <User size={16} className="text-slate-500" /> Profile
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-slate-400 mb-2">Full Name</label>
            <input defaultValue={user.name ?? ''} className="input-field" readOnly />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-400 mb-2">Email</label>
            <input defaultValue={user.email} className="input-field" readOnly />
          </div>
          <button className="btn-secondary text-sm py-2 px-4">Save Changes</button>
        </div>
      </div>

      {/* Plan */}
      <div id="upgrade" className="glass-card p-6 space-y-5">
        <h2 className="font-bold flex items-center gap-2">
          <CreditCard size={16} className="text-slate-500" /> Subscription
        </h2>
        <div className="flex items-center gap-3 p-3 rounded-xl"
          style={{ background: isPremium ? 'rgba(0,229,160,0.08)' : 'rgba(255,255,255,0.03)', border: `1px solid ${isPremium ? 'rgba(0,229,160,0.2)' : 'rgba(255,255,255,0.06)'}` }}>
          <div className="flex-1">
            <div className="font-bold capitalize">{user.plan} Plan</div>
            <div className="text-sm text-slate-500">{isPremium ? 'Full access to all predictions' : '3 free picks per day'}</div>
          </div>
          {isPremium ? (
            <span className="text-xs px-3 py-1 rounded-full font-bold"
              style={{ background: 'rgba(0,229,160,0.15)', color: '#00E5A0', border: '1px solid rgba(0,229,160,0.25)' }}>Active</span>
          ) : null}
        </div>

        {!isPremium && (
          <div className="rounded-xl overflow-hidden"
            style={{ background: 'linear-gradient(135deg, rgba(56,182,255,0.08), rgba(0,229,160,0.05))', border: '1px solid rgba(56,182,255,0.15)' }}>
            <div className="p-5">
              <div className="flex items-baseline gap-2 mb-4">
                <Zap size={18} style={{ color: '#38B6FF' }} />
                <span className="text-xl font-black gradient-text">Premium</span>
                <span className="text-2xl font-black">$19</span>
                <span className="text-slate-500">/month</span>
              </div>
              <div className="space-y-2 mb-5">
                {[
                  'Unlimited premium predictions',
                  'Detailed AI reasoning per pick',
                  'Priority new features',
                  'Email alerts for high-confidence picks',
                  'Advanced analytics dashboard',
                ].map(f => (
                  <div key={f} className="flex items-center gap-2 text-sm text-slate-300">
                    <Check size={14} style={{ color: '#00E5A0' }} />
                    {f}
                  </div>
                ))}
              </div>
              <button className="btn-primary w-full justify-center py-3 text-sm">
                Upgrade to Premium
              </button>
              <p className="text-center text-xs text-slate-600 mt-2">Cancel anytime · Secure payment</p>
            </div>
          </div>
        )}
      </div>

      {/* Notifications */}
      <div className="glass-card p-6 space-y-5">
        <h2 className="font-bold flex items-center gap-2">
          <Bell size={16} className="text-slate-500" /> Notifications
        </h2>
        <div className="space-y-3">
          {[
            { label: 'Email alerts for optimal picks', sub: 'Get notified for 90%+ confidence predictions' },
            { label: 'Daily summary digest', sub: 'Morning email with top 3 picks of the day' },
          ].map(({ label, sub }) => (
            <div key={label} className="flex items-start justify-between gap-4 py-2">
              <div>
                <div className="text-sm font-medium text-slate-300">{label}</div>
                <div className="text-xs text-slate-600 mt-0.5">{sub}</div>
              </div>
              <div className="w-10 h-5 rounded-full flex items-center cursor-pointer"
                style={{ background: 'rgba(56,182,255,0.3)', padding: '2px', justifyContent: 'flex-end' }}>
                <div className="w-4 h-4 rounded-full" style={{ background: '#38B6FF' }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Security */}
      <div className="glass-card p-6 space-y-5">
        <h2 className="font-bold flex items-center gap-2">
          <Shield size={16} className="text-slate-500" /> Security
        </h2>
        <button className="btn-secondary text-sm py-2 px-4">Change Password</button>
      </div>
    </div>
  )
}
