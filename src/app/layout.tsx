import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'WHINK Bet — AI Sports Predictions',
  description: 'AI-powered sports betting analytics. Smarter predictions, transparent insights, verified accuracy.',
  keywords: 'sports betting, AI predictions, football analytics, betting tips',
  openGraph: {
    title: 'WHINK Bet — AI Sports Predictions',
    description: 'Forecast. Win. Repeat.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
