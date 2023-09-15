"use client"

import { Inter } from 'next/font/google'
import Fade from '@mui/material/Fade';
import React from 'react';
import Image from 'next/image';


const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})


export default function WorkSection() {

  return (
    <Fade in={true} timeout={1000}>
      <main className={'flex flex-col items-center py-[100px] mx-10 md:mx-80'}>
        <h2 className={`mb-3 font-black text-[30px] md:text-[40px] ${inter.variable}`}>
          SoalUndi
        </h2>
        <a href="https://github.com/tehcanai/SoalUndi" style={{color:'rgb(0, 163, 255)'}}> Github </a>
        <Image className='rounded-xl mt-10'src="/soalundi.png" width={1000} height={500} alt="Soal Undi Features"/>
      </main>
    </Fade>
  )
}