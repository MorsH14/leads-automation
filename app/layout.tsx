import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import ThemeRegistry from '@/lib/ThemeRegistry';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'MorH14 Luxury Estates | Global Real Estate Registry',
  description: 'Curated luxury residences in London, Toronto, and Dubai. Bespoke advisory for international investors.',
  keywords: 'luxury real estate, london property, dubai villas, toronto mansions, elite living',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body style={{ margin: 0, padding: 0 }}>
        <ThemeRegistry>
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
