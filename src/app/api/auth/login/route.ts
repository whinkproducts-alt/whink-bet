import { NextRequest, NextResponse } from 'next/server'
import getDb from '@/lib/db'
import { verifyPassword, createSession } from '@/lib/auth'

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json()

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password required' }, { status: 400 })
    }

    const db = getDb()
    const user = db.prepare('SELECT * FROM users WHERE email = ?').get(email.toLowerCase().trim()) as any

    if (!user || !verifyPassword(password, user.password)) {
      return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 })
    }

    const token = createSession(String(user.id))

    const res = NextResponse.json({ success: true, user: { id: user.id, name: user.name, email: user.email, plan: user.plan } })
    res.cookies.set('whink_session', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: '/',
    })
    return res
  } catch (err) {
    console.error('Login error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
