
"use client"

import { Inter, Montserrat } from 'next/font/google'
import HeroSection from '../templates/hero';
import AboutSection from '../templates/about';
import { useMediaQuery } from '@mui/material';
import MusicSection from '../templates/music';
import CoverSection from '@/templates/cover';
import PreCoverSection from '@/templates/precover';
import PreAboutSection from '@/templates/preabout';
import PreMusicSection from '@/templates/premusic';
import PreContactSection from '@/templates/precontact';
import ContactSection from '@/templates/contact';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const mons = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat'
})

export default function Page() {
  const media = useMediaQuery('(min-width: 768px)');
  
  return (
    <>
    <div className='flex flex-col justify-right'>
        <CoverSection/>
    </div>
    </>
  );
}
