import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SkillsGap Tracker — Track Team Skill Gaps & Training ROI',
  description: 'Analyze job requirements vs employee skills, identify training needs, track skill development progress and correlate with performance. Built for HR managers and team leads.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="5e71b16f-6db4-423a-b39b-60da73fce635"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
