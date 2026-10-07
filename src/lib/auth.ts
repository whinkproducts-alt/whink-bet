import crypto from 'crypto'
import getDb from './db'

export function hashPassword(password: string): string {
  const salt = crypto.randomBytes(16).toString('hex')
  const hash = crypto.scryptSync(password, salt, 64).toString('hex')
  return `${salt}:${hash}`
}

export function verifyPassword(password: string, stored: string): boolean {
  const [salt, hash] = stored.split(':')
  const inputHash = crypto.scryptSync(password, salt, 64).toString('hex')
  return hash === inputHash
}

export function generateId(): string {
  return crypto.randomBytes(16).toString('hex')
}

export function generateToken(): string {
  return crypto.randomBytes(32).toString('hex')
}

export function createSession(userId: string): string {
  const db = getDb()
  const token = generateToken()
  const id = generateId()
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString()

  db.prepare(`
    INSERT INTO sessions (id, user_id, token, expires_at)
    VALUES (?, ?, ?, ?)
  `).run(id, userId, token, expiresAt)

  return token
}

export function validateSession(token: string): { id: string; email: string; name: string | null; plan: string } | null {
  const db = getDb()
  const session = db.prepare(`
    SELECT s.user_id, s.expires_at, u.email, u.name, u.plan
    FROM sessions s
    JOIN users u ON u.id = s.user_id
    WHERE s.token = ?
  `).get(token) as any

  if (!session) return null
  if (new Date(session.expires_at) < new Date()) {
    db.prepare('DELETE FROM sessions WHERE token = ?').run(token)
    return null
  }

  return {
    id: session.user_id,
    email: session.email,
    name: session.name,
    plan: session.plan,
  }
}

export function deleteSession(token: string): void {
  const db = getDb()
  db.prepare('DELETE FROM sessions WHERE token = ?').run(token)
}
