'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import Logo from '@/components/ui/Logo'
import {
  LayoutDashboard, TrendingUp, BarChart2, Star, Settings, LogOut,
  ChevronLeft, ChevronRight, Zap
} from 'lucide-react'

const nav = [
  { href: '/dashboard', label: 'Overview', icon: LayoutDashboard },
  { href: '/dashboard/predictions', label: 'Predictions', icon: TrendingUp },
  { href: '/dashboard/analytics', label: 'Analytics', icon: BarChart2 },
  { href: '/dashboard/favourites', label: 'Favourites', icon: Star },
  { href: '/dashboard/settings', label: 'Settings', icon: Settings },
]

interface SidebarProps {
  user: { name: string; email: string; plan: string }
}

export default function Sidebar({ user }: SidebarProps) {
  const pathname = usePathname()
  const router = useRouter()
  const [collapsed, setCollapsed] = useState(false)

  async function handleLogout() {
    await fetch('/api/auth/logout', { method: 'POST' })
    router.push('/')
  }

  return (
    <aside className="flex flex-col h-screen sticky top-0 transition-all duration-300"
      style={{
        width: collapsed ? 72 : 240,
        background: 'rgba(7,11,18,0.95)',
        borderRight: '1px solid rgba(255,255,255,0.06)',
        backdropFilter: 'blur(20px)',
      }}>
      {/* Logo */}
      <div className="h-16 flex items-center px-4 border-b border-white/5">
        <Link href="/dashboard">
          {collapsed ? <Logo size="sm" variant="mark" /> : <Logo size="sm" />}
        </Link>
      </div>

      {/* Nav */}
      <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
        {nav.map(({ href, label, icon: Icon }) => {
          const active = pathname === href
          return (
            <Link key={href} href={href}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150"
              style={{
                background: active ? 'rgba(56,182,255,0.1)' : 'transparent',
                color: active ? '#38B6FF' : '#94a3b8',
                border: active ? '1px solid rgba(56,182,255,0.2)' : '1px solid transparent',
              }}
              title={collapsed ? label : undefined}>
              <Icon size={18} className="shrink-0" />
              {!collapsed && <span>{label}</span>}
            </Link>
          )
        })}
      </nav>

      {/* Upgrade CTA */}
      {user.plan === 'free' && !collapsed && (
        <div className="m-3 p-4 rounded-xl"
          style={{ background: 'linear-gradient(135deg, rgba(56,182,255,0.1), rgba(0,229,160,0.08))', border: '1px solid rgba(56,182,255,0.15)' }}>
          <div className="flex items-center gap-2 mb-2">
            <Zap size={14} style={{ color: '#38B6FF' }} />
            <span className="text-xs font-bold text-slate-200">Go Premium</span>
          </div>
          <p className="text-xs text-slate-500 mb-3">Unlock all picks + premium confidence scores</p>
          <Link href="/dashboard/settings#upgrade"
            className="block text-center text-xs font-bold py-1.5 rounded-lg transition-all"
            style={{ background: 'linear-gradient(135deg, #38B6FF, #00E5A0)', color: '#070B12' }}>
            Upgrade — $19/mo
          </Link>
        </div>
      )}

      {/* User + collapse */}
      <div className="border-t border-white/5 p-3 space-y-1">
        {!collapsed && (
          <div className="px-3 py-2 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-black"
              style={{ background: 'linear-gradient(135deg, #38B6FF, #00E5A0)', color: '#070B12' }}>
              {user.name?.[0]?.toUpperCase()}
            </div>
            <div className="min-w-0">
              <div className="text-sm font-semibold text-slate-200 truncate">{user.name}</div>
              <div className="text-xs text-slate-500 truncate capitalize">{user.plan} plan</div>
            </div>
          </div>
        )}
        <button onClick={handleLogout}
          className="flex items-center gap-3 w-full px-3 py-2 rounded-xl text-sm text-slate-500 hover:text-slate-300 transition-colors"
          title={collapsed ? 'Logout' : undefined}>
          <LogOut size={16} className="shrink-0" />
          {!collapsed && <span>Logout</span>}
        </button>
        <button onClick={() => setCollapsed(!collapsed)}
          className="flex items-center gap-3 w-full px-3 py-2 rounded-xl text-xs text-slate-600 hover:text-slate-400 transition-colors">
          {collapsed ? <ChevronRight size={16} /> : <><ChevronLeft size={16} /><span>Collapse</span></>}
        </button>
      </div>
    </aside>
  )
}
