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
      <main className={'flex flex-row space-x-3 items-center mb-[200px] md:mb-36 mx-10 md:mx-80'}>
        <div className='flex flex-row space-x-3 text-[20px] md:text-[30px]'>
          <a href="https://github.com/tehcanai" className='hover:text-white'>Github</a>
          <a href="https://www.linkedin.com/in/arif-zakuan-99460820b/" className='hover:text-white'>LinkedIn</a>
        </div>
      </main>
    </Fade>
  )
}