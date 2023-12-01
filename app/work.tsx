"use client"

import { Inter } from 'next/font/google'
import Fade from '@mui/material/Fade';
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { useMediaQuery } from '@mui/material';


const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})


export default function WorkSection() {
  const media = useMediaQuery('(min-width: 600px)');
  const spotifyWidgetWidth = media ? '50%' : '100%'

  return (
    <Fade in={true} timeout={1000}>
      <main className={'flex flex-col items-left py-[100px] mx-10 md:mx-80'}>
        <h2 className={`mb-3 font-black text-[30px] md:text-[60px] ${inter.variable}`}>
          Music
        </h2>
        <iframe className='rounded-xl' src="https://open.spotify.com/embed/playlist/4C8OQdRFcFwwTpwRvOCV8V?utm_source=generator&theme=0" width={spotifyWidgetWidth} height="352" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="eager"></iframe>
      </main>
    </Fade>
  )
}