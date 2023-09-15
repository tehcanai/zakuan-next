"use client"

import { Inter } from 'next/font/google'
import Fade from '@mui/material/Fade';
import { FaReact, FaPython } from 'react-icons/fa';
import { SiSvelte, SiNextdotjs, SiFlutter, SiJavascript, SiDart } from 'react-icons/si';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'
import Chronology from '@/components/timeline';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})



export default function Page() {

  return (
    <Fade in={true} timeout={1000}>
      <main className={'flex flex-col items-left py-[200px] mx-10 md:mx-80'}>
        <h2 className={`mb-3 font-black text-[50px] md:text-[80px] ${inter.variable}`}>
          About Me
        </h2>
        <Chronology/>
        <a className='mt-10 underline' href="/resume.pdf">Resume</a>
      </main>
    </Fade>
  )
}