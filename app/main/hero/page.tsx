"use client"

import { Inter } from 'next/font/google'
import { Fade } from '@mui/material';
import { FaReact, FaPython } from 'react-icons/fa';
import { SiSvelte, SiNextdotjs, SiFlutter, SiJavascript, SiDart } from 'react-icons/si';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export default function Page() {
  return (
    <Fade in={true} timeout={1000}>
      <main className={'flex flex-col items-left py-[200px] mx-10 md:mx-80'}>
        <h2 className={`mb-3 font-black text-[50px] md:text-[80px] ${inter.variable}`}>
          ARIF ZAKUAN
        </h2>
        <p className={`text-3xl mb-5 ${inter.variable}`}>
          Software Developer
        </p>
        <div className='flex flex-row items-left text-2xl'>
          <a href="https://github.com/tehcanai" className='hover:underline-offset-2'>Github • </a>
          <a href="https://www.linkedin.com/in/arif-zakuan-99460820b/">LinkedIn</a>
        </div>
        <div className='flex flex-row items-left text-2xl mt-5 space-x-5'>
          <SiJavascript/>
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