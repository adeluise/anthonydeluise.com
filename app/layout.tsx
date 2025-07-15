import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { Navigation } from '../components/navigation'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Anthony DeLuise',
  description: 'Product Builder',
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>☕️</text></svg>",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@500&family=Geist:wght@400&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-ecru dark:bg-near-black transition-colors duration-200">
        <Navigation />
        {children}
        <Analytics />
      </body>
    </html>
  )
} 