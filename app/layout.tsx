
import './globals.css'
import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import { GeistMono } from 'geist/font/mono';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import GAScript from '@/components/ga';
import StyledNavBar from '@/templates/navbar';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const mons = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat'
})

export const metadata: Metadata = {
  title: 'Arif Zakuan',
  description: 'Arif Zakuan Portfolio Site',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <head>
        <title>Arif Zakuan</title>
      </head>
        <body className={GeistMono.className}>
          <StyledNavBar />
          {children}
          <GAScript/>
          <Analytics/>
          <SpeedInsights/>
        </body>
    </html>

  )
}
