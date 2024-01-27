"use client"

import { Inter, Montserrat } from 'next/font/google'
import Fade from '@mui/material/Fade';
import React from 'react';
import Image from 'next/image';
import CoverPic from '/public/portraitkkli.png'
import { FaReact, FaPython } from 'react-icons/fa';
import { SiSvelte, SiNextdotjs, SiFlutter, SiJavascript, SiDart } from 'react-icons/si';


export default function CoverSection() {

  return (
    <Fade in={true} timeout={1000}>
      <main className={'flex flex-col self-stretch md:flex-row items-left pt-24 pb-12 md:pt-[200px] mx-10 md:mx-80'}>
        <div className='flex flex-col items-left '>
          <div className='underline decoration-1 underline-offset-2'>
            <h2 className={`mb-3 font-black text-[70px] md:text-[120px] overline decoration-1 underline-offset-8`}>
              Arif Zakuan
            </h2>
          </div>
            <div className='flex flex-col md:flex-row items-left text-2xl md:text-3xl pb-4 md:pb-4'>
              <p className={`text-3xl pb-4 md:pb-4 md:pr-4`}>
                dev@ikhlas.com
              </p>
            <div className='flex flex-row space-x-5'>
              <SiJavascript color='white' alt='javascript'/>
              <FaPython color='white'/>
              <SiDart color='white'/>
              <FaReact color='white'/>
              <SiNextdotjs color='white'/>
              <SiFlutter color='white'/>
            </div>
            </div>
              <p className={`text-2xl pb-4 md:pb-4 `}>
                prev. built <a href="https://apps.apple.com/my/app/mywakalah/id1544712828" target="_blank" rel="noopener noreferrer" className='hover:text-white underline'>MyWakalah</a> app
              </p>
            <div className='flex flex-row space-x-3 md:self-end pt-2 underline text-xl md:text-2xl'>
              <a className='underline hover:text-white' target="_blank" rel="noopener noreferrer" href="/resume.pdf">Resume</a>
              <a href="https://github.com/tehcanai" target="_blank" rel="noopener noreferrer" className='hover:text-white'>Github</a>
              <a href="https://www.linkedin.com/in/arif-zakuan-99460820b/" target="_blank" rel="noopener noreferrer" className='hover:text-white'>LinkedIn</a>
            </div>
        </div>
      </main>
    </Fade>
  )
}