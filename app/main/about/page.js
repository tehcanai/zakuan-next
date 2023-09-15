"use client"


import { Inter } from 'next/font/google'
import { Transition } from '@mantine/core';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export default function Page() {
  return (
    <Transition mounted={true} transition="fade" duration={800} timingFunction="ease">
      {(styles) => (
        <main className={'flex flex-col items-center p-20'}>
          <h2 className={`mb-3 animate-fade-in font-bold text-[80px] ${inter.variable}`} style={styles}>
            ARIF ZAKUAN
          </h2>
          <p className={`text-3xl ${inter.variable}`} style={styles}>
            Aspiring software developer building stuff for mobile and the web
          </p>
        </main>
      )}
    </Transition>
  )
}