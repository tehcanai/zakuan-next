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



export default function Page() {
  

  return (
    <Fade in={true} timeout={1000}>
      <main className={'flex flex-col items-left py-[150px] mx-10 md:mx-80'}>
        <h2 className={`mb-3 font-black text-[50px] md:text-[80px] ${inter.variable}`}>
          Arif Zakuan
        </h2>
        <p className={`text-3xl mb-5 ${inter.variable}`}>
          Software Developer
        </p>
        <div className='flex flex-row items-left text-2xl'>
          <a href="https://github.com/tehcanai" className='hover:text-white'>Github</a>
          <p style={{color: 'transparent'}}>•</p>
          <p>•</p>
          <p style={{color: 'transparent'}}>•</p>
          <a href="https://www.linkedin.com/in/arif-zakuan-99460820b/" className='hover:text-white'>LinkedIn</a>
        </div>
        <div className='flex flex-row items-left text-2xl mt-5 space-x-5'>
          <SiJavascript />
          <FaPython/>
          <SiDart/>
          <FaReact/>
          <SiSvelte/>
          <SiNextdotjs/>
          <SiFlutter/>
        </div>
      </main>
    </Fade>
  )
}