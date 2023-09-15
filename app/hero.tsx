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
      <main className={'flex flex-col items-left py-[200px] mx-10 md:mx-80'}>
        <h2 className={`mb-3 font-black text-[50px] md:text-[140px] ${inter.variable}`}>
          Arif Zakuan
        </h2>
        <div className='flex flex-col md:flex-row items-left md:space-x-8'>
            <p className={`text-3xl ${inter.variable}`}>
            Software Developer
            </p>
            <div className='flex flex-row items-left text-2xl md:text-3xl space-x-5'>
            <SiJavascript />
            <FaPython/>
            <SiDart/>
            <FaReact/>
            <SiSvelte/>
            <SiNextdotjs/>
            <SiFlutter/>
            </div>
        </div>
        
        <div className='flex flex-row items-left text-2xl mt-10'>
          <a href="https://github.com/tehcanai" className='hover:text-white'>Github</a>
          <p style={{color: 'transparent'}}>•</p>
          <p>•</p>
          <p style={{color: 'transparent'}}>•</p>
          <a href="https://www.linkedin.com/in/arif-zakuan-99460820b/" className='hover:text-white'>LinkedIn</a>
        </div>
      </main>
    </Fade>
  )
}