import './globals.css'

export const metadata = {
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
      <body>{children}</body>
    </html>
  )
}