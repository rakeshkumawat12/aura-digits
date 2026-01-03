import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import localFont from 'next/font/local';
import './globals.css';

const geist = localFont({
  src: [
    {
      path: '../fonts/Geist-Thin.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../fonts/Geist-ExtraLight.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../fonts/Geist-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../fonts/Geist-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Geist-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/Geist-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/Geist-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/Geist-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../fonts/Geist-Black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-geist',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Aura Digits - Numerology Calculator',
  description: 'Discover your life path through numerology. Calculate your Mulank, Destiny Number, and Lu Shu Grid.',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={geist.variable}>
      <body suppressHydrationWarning className={geist.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
