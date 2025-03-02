import type { Metadata } from 'next';
import { Roboto_Condensed } from 'next/font/google';
import './globals.scss';
import Header from '@/components/Header';
import Providers from './providers';

const robotoCondensed = Roboto_Condensed({
  variable: '--font-roboto-condensed',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'MARVEL characters',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={`${robotoCondensed.variable}`}>
        <Providers>
          <Header></Header>
          {children}
        </Providers>
      </body>
    </html>
  );
}
