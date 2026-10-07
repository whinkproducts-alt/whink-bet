import { hashPassword, verifyPassword, createSession, validateSession, deleteSession } from '../lib/auth'
import getDb from '../lib/db'

function seedTestUser(id: string) {
  const db = getDb()
  const hash = hashPassword('TestPass123!')
  try {
    db.prepare("INSERT INTO users (id, name, email, password, plan) VALUES (?, 'Test', ?, ?, 'free')")
      .run(id, `test-${id}@example.com`, hash)
  } catch { /* already exists */ }
}

describe('Auth - Password hashing', () => {
  it('hashes a password and produces salt:hash format', () => {
    const password = 'TestPassword123!'
    const hash = hashPassword(password)

    expect(hash).toContain(':')
    expect(hash).not.toBe(password)
  })

  it('verifies the correct password', () => {
    const password = 'AnotherTest456!'
    const hash = hashPassword(password)
    expect(verifyPassword(password, hash)).toBe(true)
  })

  it('rejects an incorrect password', () => {
    const hash = hashPassword('correct-password')
    expect(verifyPassword('wrong-password', hash)).toBe(false)
  })

  it('produces different hashes for the same password (random salt)', () => {
    const h1 = hashPassword('same-password')
    const h2 = hashPassword('same-password')
    expect(h1).not.toBe(h2)
  })

  it('generates a long enough hash', () => {
    const hash = hashPassword('password')
    const [salt, hex] = hash.split(':')
    expect(salt.length).toBe(32) // 16 bytes hex
    expect(hex.length).toBe(128) // 64 bytes hex
  })
})

describe('Auth - Sessions', () => {
  it('creates a token string for existing user', () => {
    seedTestUser('user-999')
    const token = createSession('user-999')
    expect(typeof token).toBe('string')
    expect(token.length).toBeGreaterThan(20)
  })

  it('returns null for an unknown token', () => {
    const result = validateSession('this-token-does-not-exist-xyz')
    expect(result).toBeNull()
  })

  it('validates a session and returns user data', () => {
    seedTestUser('user-888')
    const token = createSession('user-888')
    const result = validateSession(token)
    expect(result).not.toBeNull()
    expect(result?.id).toBe('user-888')
  })

  it('deletes a session without throwing', () => {
    seedTestUser('user-777')
    const token = createSession('user-777')
    expect(() => deleteSession(token)).not.toThrow()
  })

  it('invalidates a deleted session', () => {
    seedTestUser('user-666')
    const token = createSession('user-666')
    deleteSession(token)
    const result = validateSession(token)
    expect(result).toBeNull()
  })
})
