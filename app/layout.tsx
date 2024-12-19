import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'William van Esveld | Glass Art',
  description: 'Glass Art & Conceptual Works',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body className="antialiased">{children}</body>
    </html>
  )
}