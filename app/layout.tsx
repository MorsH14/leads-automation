import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ThemeRegistry from '@/lib/ThemeRegistry';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'MorH14 | Lead Automation for Real Estate Professionals',
  description: 'Turn visitors into clients with fast follow-ups — no leads left behind. The premium lead capture system for elite real estate agents.',
  keywords: 'real estate lead automation, agent CRM, lead follow-up, property lead capture, real estate marketing',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body style={{ margin: 0, padding: 0 }}>
        <ThemeRegistry>
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
