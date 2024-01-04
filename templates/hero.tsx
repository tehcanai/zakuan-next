"use client"

import { Inter } from 'next/font/google'
import { Fade } from '@mui/material';
import { FaReact, FaPython } from 'react-icons/fa';
import { SiSvelte, SiNextdotjs, SiFlutter, SiJavascript, SiDart } from 'react-icons/si';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'
import Cursor from '@/components/cursor';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})



export default function HeroSection() {
  

  return (
    <Fade in={true} timeout={1000}>
      <main className={'flex flex-col items-left pt-[150px] pb-4 mx-10 md:mx-80'}>
        <h2 className={`mb-3 font-black text-[50px] md:text-[140px] ${inter.variable}`}>
          Arif Zakuan
        </h2>
        <div className='flex flex-col md:flex-row items-left md:space-x-8'>
            <p className={`text-3xl ${inter.variable} pb-4 md:pb-0`}>
            Software Developer
            </p>
            <div className='flex flex-row items-left text-2xl md:text-3xl space-x-5'>
            <SiJavascript color='#f7df1e'/>
            <FaPython color='#006a92'/>
            <SiDart color='#12ace5'/>
            <FaReact color='#12ace5'/>
            <SiNextdotjs color='white'/>
            <SiFlutter color='#12ace5'/>
            </div>
        </div>
      </main>
    </Fade>
  )
}