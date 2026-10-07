import { NextRequest, NextResponse } from 'next/server'
import getDb from '@/lib/db'
import { hashPassword, createSession } from '@/lib/auth'

export async function POST(req: NextRequest) {
  try {
    const { name, email, password } = await req.json()

    if (!name || !email || !password) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 })
    }

    if (password.length < 8) {
      return NextResponse.json({ error: 'Password must be at least 8 characters' }, { status: 400 })
    }

    const emailLower = email.toLowerCase().trim()
    const db = getDb()

    const existing = db.prepare('SELECT id FROM users WHERE email = ?').get(emailLower)
    if (existing) {
      return NextResponse.json({ error: 'An account with this email already exists' }, { status: 409 })
    }

    const passwordHash = hashPassword(password)
    const userId = require('crypto').randomBytes(16).toString('hex')
    const result = db.prepare(
      'INSERT INTO users (id, name, email, password, plan) VALUES (?, ?, ?, ?, ?)'
    ).run(userId, name.trim(), emailLower, passwordHash, 'free')

    const token = createSession(userId)

    const res = NextResponse.json({
      success: true,
      user: { id: userId, name: name.trim(), email: emailLower, plan: 'free' },
    }, { status: 201 })

    res.cookies.set('whink_session', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7,
      path: '/',
    })
    return res
  } catch (err) {
    console.error('Register error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
