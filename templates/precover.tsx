"use client"

import { Inter } from 'next/font/google'
import Fade from '@mui/material/Fade';
import React from 'react';
import Image from 'next/image';
import CoverPic from '/public/portraitkkli.png'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})



export default function PreCoverSection() {

  return (
    <Fade in={true} timeout={1000}>
      <main className={'flex flex-col items-left  pt-20 pb-36 md:pt-[200px] mx-10 md:mx-80'}>
        <h2 className={`mb-3 font-black text-[30px] md:text-[40px] ${inter.variable}`}>
          Every album has a cover art...
        </h2>
      </main>
    </Fade>
  )
}