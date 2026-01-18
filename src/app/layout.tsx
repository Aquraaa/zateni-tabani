import type { Metadata } from 'next';
import { ReactNode } from 'react';
import '@/globals.css';

export const metadata: Metadata = {
  title: 'Зацени ТАБАНИ - Удмуртская кухня',
  description: 'Доставка традиционных блюд удмуртской кухни: перепечи, табани, пицца',
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="theme-color" content="#FF0000" />
      </head>
      <body>{children}</body>
    </html>
  );
}
