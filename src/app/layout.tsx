import Header from '@/components/@layout/Header';
import './globals.css';

import { Inter } from 'next/font/google';
import ThemeProvider from '@/providers/ThemeProvider';
import { createMetadata } from '@/config/seo';

const inter = Inter({ subsets: ['latin'] });

export const metadata = createMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
