"use client"

import { Inter } from 'next/font/google'
import Fade from '@mui/material/Fade';
import React from 'react';


const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})


export default function ContactSection() {

  return (
    <Fade in={true} timeout={1000}>
      <main className={'flex flex-col items-left py-[100px] mx-10 md:mx-80'}>
        <h2 className={`mb-3 font-black text-[20px] md:text-[30px] ${inter.variable}`}>
          Contact me here : 
        </h2>
        <p className={`mb-3 underline underline-offset-8 text-[20px] md:text-[30px] ${inter.variable}`}>
          arif.zakuan@gmail.com
        </p>
      </main>
    </Fade>
  )
}