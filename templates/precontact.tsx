"use client"

import { Inter } from 'next/font/google'
import Fade from '@mui/material/Fade';
import React from 'react';
import Chronology from '@/components/timeline';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})



export default function PreContactSection() {

  return (
    <div>
      <Fade in={true} timeout={1000}>
        <main className={'flex flex-col items-left  pt-20 pb-36 md:pt-[200px] mx-10 md:mx-80'}>
          <h2 className={`mb-3 font-black text-[30px] md:text-[40px] ${inter.variable}`}>
            So feel free to subscribe!
          </h2>
        </main>
      </Fade>
    </div>
  )
}