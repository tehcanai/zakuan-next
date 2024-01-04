"use client"

import { Inter } from 'next/font/google'
import Fade from '@mui/material/Fade';
import React from 'react';
import Image from 'next/image';
import CoverPic from '/public/portraitkkli.png'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})



export default function CoverSection() {

  return (
    <Fade in={true} timeout={1000}>
      <main className={'flex flex-col items-center  pt-20 pb-36 md:pt-[200px] mx-10 md:mx-80'}>
        <Image
            src={CoverPic}
            width={500}
            alt="Picture of me"
            placeholder='blur'
            loading='lazy'
        />
      </main>
    </Fade>
  )
}