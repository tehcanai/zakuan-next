"use client"

import { Inter } from 'next/font/google'
import Fade from '@mui/material/Fade';
import React from 'react';
import Chronology from '@/components/timeline';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})



export default function AboutSection() {

  return (
    <Fade in={true} timeout={1000}>
      <main className={'flex flex-col items-left  pt-20 md:pt-[200px] mx-10 md:mx-80'}>
        <h2 className={`mb-3 font-black text-[30px] md:text-[60px] ${inter.variable}`}>
          Experience
        </h2>
        <Chronology/>
        <a className='mt-10 underline hover:text-white' style={{color:'rgb(0, 163, 255)'}} href="/resume.pdf">Resume</a>
      </main>
    </Fade>
  )
}