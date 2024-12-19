import './globals.css';

export const metadata = {
  title: 'William van Esveld | Glass Art',
  description: 'Portfolio van glaskunst en conceptueel werk door William van Esveld',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  );
}
