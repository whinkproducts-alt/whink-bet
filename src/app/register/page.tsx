'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Logo from '@/components/ui/Logo'
import { Eye, EyeOff, ArrowRight, AlertCircle, CheckCircle2 } from 'lucide-react'

export default function RegisterPage() {
  const router = useRouter()
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' })
  const [showPass, setShowPass] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }))

  const rules = [
    { label: '8+ characters', ok: form.password.length >= 8 },
    { label: 'Uppercase letter', ok: /[A-Z]/.test(form.password) },
    { label: 'Number', ok: /[0-9]/.test(form.password) },
  ]

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (form.password !== form.confirm) { setError('Passwords do not match'); return }
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: form.name, email: form.email, password: form.password }),
      })
      const data = await res.json()
      if (!res.ok) { setError(data.error || 'Registration failed'); return }
      router.push('/dashboard')
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 relative"
      style={{ background: 'var(--bg-base)' }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 70% 20%, rgba(0,229,160,0.05) 0%, transparent 60%)' }} />

      <div className="w-full max-w-md relative z-10">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex justify-center mb-6">
            <Logo size="lg" />
          </Link>
          <h1 className="text-2xl font-black mb-2">Start winning smarter</h1>
          <p className="text-slate-400 text-sm">Create your free WHINK Bet account</p>
        </div>

        <div className="glass-card p-8">
          {error && (
            <div className="flex items-center gap-3 p-3 rounded-xl mb-6 text-sm"
              style={{ background: 'rgba(255,59,36,0.1)', border: '1px solid rgba(255,59,36,0.2)', color: '#FF6B55' }}>
              <AlertCircle size={16} className="shrink-0" />
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-2">Full Name</label>
              <input type="text" required value={form.name} onChange={set('name')}
                className="input-field" placeholder="Your name" />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-2">Email</label>
              <input type="email" required value={form.email} onChange={set('email')}
                className="input-field" placeholder="you@example.com" />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-2">Password</label>
              <div className="relative">
                <input type={showPass ? 'text' : 'password'} required value={form.password}
                  onChange={set('password')} className="input-field pr-12" placeholder="Create a strong password" />
                <button type="button" onClick={() => setShowPass(!showPass)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors">
                  {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {form.password && (
                <div className="flex gap-3 mt-2">
                  {rules.map(r => (
                    <div key={r.label} className="flex items-center gap-1 text-xs">
                      <CheckCircle2 size={12} className={r.ok ? 'text-emerald-400' : 'text-slate-600'} />
                      <span className={r.ok ? 'text-slate-300' : 'text-slate-600'}>{r.label}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-2">Confirm Password</label>
              <input type={showPass ? 'text' : 'password'} required value={form.confirm}
                onChange={set('confirm')} className="input-field" placeholder="Repeat password" />
            </div>

            <button type="submit" disabled={loading} className="btn-primary w-full justify-center py-3">
              {loading ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Creating account...
                </span>
              ) : (
                <>Create Free Account <ArrowRight size={16} /></>
              )}
            </button>

            <p className="text-center text-xs text-slate-600">
              By signing up, you agree to our{' '}
              <span className="text-slate-400 cursor-pointer hover:text-slate-300">Terms of Service</span>
              {' '}and{' '}
              <span className="text-slate-400 cursor-pointer hover:text-slate-300">Privacy Policy</span>
            </p>
          </form>
        </div>

        <p className="text-center text-sm text-slate-500 mt-6">
          Already have an account?{' '}
          <Link href="/login" className="text-blue-400 hover:text-blue-300 font-semibold">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}
