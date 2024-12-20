import './globals.css';

export const metadata = {
  title: 'William van Esveld | Glass Art',
  description: 'Glass Art & Conceptual Works',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}