"use client"

import { Inter } from 'next/font/google'
import Fade from '@mui/material/Fade';
import React from 'react';
import { FaGithub } from 'react-icons/fa';


const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})


export default function WorkSection() {

  return (
    <Fade in={true} timeout={1000}>
      <main className={'flex flex-col items-left py-[100px] mx-10 md:mx-80'}>
        <h2 className={`mb-3 font-black text-[30px] md:text-[60px] ${inter.variable}`}>
          Work
        </h2>
        <div className='flex flex-row items-left text-2xl mt-10'>
          <h2 className={`mb-3 text-neutral-900 text-[20px] md:text-[30px] pr-4 underline ${inter.variable}`}>
            SoalUndi
          </h2>
          <a href="https://github.com/tehcanai/SoalUndi" style={{fontSize: '30px'}}> <FaGithub/> </a>
        </div>
      </main>
    </Fade>
  )
}