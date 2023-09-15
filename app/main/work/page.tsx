
"use client"

import { Inter } from 'next/font/google'
import Fade from '@mui/material/Fade';
import React from 'react';


const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})


export default function Page() {

  return (
    <Fade in={true} timeout={1000}>
      <main className={'flex flex-col items-left py-[200px] mx-10 md:mx-80'}>
        <h2 className={`mb-3 font-black text-[50px] md:text-[80px] ${inter.variable}`}>
          What I Built
        </h2>
        <h2 className={`mb-3 font-black text-[50px] md:text-[50px] ${inter.variable}`}>
          MyWakalah
        </h2>
        
      </main>
    </Fade>
  )
}