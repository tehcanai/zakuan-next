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
    <div>
      <Fade in={true} timeout={1000}>
        <main className={'flex flex-col justify-end self-end items-right  pt-20 pb-36 md:pt-[200px] mx-10 md:mx-80'}>
          <Chronology/>
          <a className='mt-10 underline hover:text-white' style={{color:'rgb(179,179,179)'}} href="/resume.pdf">Resume</a>
        </main>
      </Fade>
    </div>
  )
}