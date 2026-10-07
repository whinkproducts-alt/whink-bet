# WHINK Bet

AI-powered sports betting analytics SaaS. Built by WHINK Group.

## Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS v4 + custom WHINK Design System
- SQLite via better-sqlite3
- Custom auth (scrypt + token sessions)
- Statistical prediction engine

## Setup

```bash
cp .env.example .env.local
# Fill in your values

npm install
npm run dev
```

## Test

```bash
npm test
```

## Deploy (Render)

The `render.yaml` file configures a free-tier web service with a 1GB persistent disk for the SQLite database.

1. Connect your GitHub repo to Render
2. Render detects `render.yaml` automatically
3. Set `NEXTAUTH_SECRET` in Render environment variables
4. Deploy

Live URL: https://whink-bet.onrender.com
