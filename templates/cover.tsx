


import Fade from '@mui/material/Fade';
import React from 'react';
import { FaReact, FaPython } from 'react-icons/fa';
import { SiNextdotjs, SiFlutter, SiJavascript, SiDart } from 'react-icons/si';


export default function CoverSection() {

  return (
    <Fade in={true} timeout={1000}>
      <main className={'flex flex-col md:flex-col items-left space-y-4 pt-24 pb-12 md:pt-[100px] mx-10 md:mx-80'}>
        <div className='flex flex-col items-left '>
          <div className='underline decoration-1 underline-offset-2'>
            <h2 className={`mb-3 font-black text-[70px] md:text-[120px] overline decoration-1 underline-offset-8`}>
              Arif Zakuan
            </h2>
          </div>
            <div className='flex flex-col md:flex-row items-left text-2xl md:text-3xl pb-4 md:pb-4'>
              <p className={`text-3xl pb-4 md:pb-4 md:pr-4`}>
                Software developer
              </p>
            <div className='flex flex-row space-x-5'>
              <SiJavascript color='#0E1111' alt='javascript'/>
              <FaPython color='#0E1111'/>
              <SiDart color='#0E1111'/>
              <FaReact color='#0E1111'/>
              <SiNextdotjs color='#0E1111'/>
              <SiFlutter color='#0E1111'/>
            </div>
            </div>
            <div className='flex flex-wrap md:self-start underline text-xl md:text-2xl'>
              <a className='underline hover:text-stone-700 pr-3' target="_blank" rel="noopener noreferrer" href="/resume.pdf">Resume</a>
              <a href="https://github.com/tehcanai" target="_blank" rel="noopener noreferrer" className='hover:text-stone-700 pr-3'>Github</a>
              <a href="https://www.linkedin.com/in/arif-zakuan-99460820b/" target="_blank" rel="noopener noreferrer" className='hover:text-stone-700 pr-3'>LinkedIn</a>
            </div>
        </div>
      </main>
    </Fade>
  )
}