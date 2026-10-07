import Database from 'better-sqlite3'
import path from 'path'
import fs from 'fs'

const DB_PATH = path.join(process.cwd(), 'whink-bet.db')

let db: Database.Database

function getDb(): Database.Database {
  if (!db) {
    db = new Database(DB_PATH)
    db.pragma('journal_mode = WAL')
    db.pragma('foreign_keys = ON')
    initSchema(db)
  }
  return db
}

function initSchema(db: Database.Database) {
  db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY,
      email TEXT UNIQUE NOT NULL,
      name TEXT,
      password TEXT,
      plan TEXT DEFAULT 'free',
      created_at TEXT DEFAULT (datetime('now')),
      updated_at TEXT DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS matches (
      id TEXT PRIMARY KEY,
      external_id TEXT UNIQUE,
      home_team TEXT NOT NULL,
      away_team TEXT NOT NULL,
      home_team_logo TEXT,
      away_team_logo TEXT,
      league TEXT NOT NULL,
      league_logo TEXT,
      country TEXT NOT NULL,
      match_date TEXT NOT NULL,
      status TEXT DEFAULT 'upcoming',
      home_score INTEGER,
      away_score INTEGER,
      created_at TEXT DEFAULT (datetime('now')),
      updated_at TEXT DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS predictions (
      id TEXT PRIMARY KEY,
      match_id TEXT UNIQUE NOT NULL,
      prediction TEXT NOT NULL,
      confidence INTEGER NOT NULL,
      tier TEXT NOT NULL,
      reasoning TEXT NOT NULL,
      odds REAL,
      result TEXT DEFAULT 'pending',
      is_premium INTEGER DEFAULT 0,
      created_at TEXT DEFAULT (datetime('now')),
      updated_at TEXT DEFAULT (datetime('now')),
      FOREIGN KEY (match_id) REFERENCES matches(id)
    );

    CREATE TABLE IF NOT EXISTS user_predictions (
      id TEXT PRIMARY KEY,
      user_id TEXT NOT NULL,
      prediction_id TEXT NOT NULL,
      tracked INTEGER DEFAULT 1,
      created_at TEXT DEFAULT (datetime('now')),
      FOREIGN KEY (user_id) REFERENCES users(id),
      FOREIGN KEY (prediction_id) REFERENCES predictions(id)
    );

    CREATE TABLE IF NOT EXISTS sessions (
      id TEXT PRIMARY KEY,
      user_id TEXT NOT NULL,
      token TEXT UNIQUE NOT NULL,
      expires_at TEXT NOT NULL,
      created_at TEXT DEFAULT (datetime('now')),
      FOREIGN KEY (user_id) REFERENCES users(id)
    );
  `)
}

export default getDb
