import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'WhinkPredict — AI Sports Predictions',
  description: 'AI-powered sports predictions by WhinkPredict. Predict Smarter. Win Bigger.',
  keywords: 'sports predictions, AI predictions, football analytics, WhinkPredict, sports betting tips',
  openGraph: {
    title: 'WhinkPredict — AI Sports Predictions',
    description: 'Predict Smarter. Win Bigger.',
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
