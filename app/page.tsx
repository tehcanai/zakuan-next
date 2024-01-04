
"use client"

import { Inter } from 'next/font/google'
import HeroSection from '../templates/hero';
import AboutSection from '../templates/about';
import Cursor from '@/components/cursor';
import { useMediaQuery } from '@mui/material';
import MusicSection from '../templates/music';
import FadeInSection from '@/components/fade_section.jsx';
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

export default function Page() {
  const media = useMediaQuery('(min-width: 768px)');
  
  return (
    <>
    <div className='flex flex-col justify-center'>
    {media == true && <Cursor/>}
      <FadeInSection>
        <CoverSection/>
      </FadeInSection>

      <FadeInSection>
        <PreCoverSection/>
      </FadeInSection>

      <FadeInSection>
        <PreAboutSection/>
      </FadeInSection>

      <FadeInSection>
        <AboutSection/>
      </FadeInSection> 

      <FadeInSection>
        <PreMusicSection/>
      </FadeInSection>

      <FadeInSection>
        <MusicSection/>
      </FadeInSection>

      <FadeInSection>
        <PreContactSection/>
      </FadeInSection>

      <FadeInSection>
        <HeroSection/>
        <ContactSection/>
      </FadeInSection>
    </div>
    </>
  );
}
