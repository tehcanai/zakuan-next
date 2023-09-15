
"use client"

import { Inter } from 'next/font/google'
import HeroSection from './hero';
import AboutSection from './about';
import Cursor from '@/components/cursor';
import { useMediaQuery } from '@mui/material';
import WorkSection from './work';
import FadeInSection from '@/components/fade_section.jsx';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export default function Page() {
  const media = useMediaQuery('(min-width: 600px)');
  
  return (
    <>
      {media == true && <Cursor/>}
      <FadeInSection>
        <HeroSection/>
      </FadeInSection>

      <FadeInSection>
        <AboutSection/>
      </FadeInSection>

      <FadeInSection>
        <WorkSection/>
      </FadeInSection>
    </>
  );
}
