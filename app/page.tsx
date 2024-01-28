
"use client"

import { Inter, Montserrat } from 'next/font/google'
import { useMediaQuery } from '@mui/material';
import CoverSection from '@/templates/cover';

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
    <div className='h-full lg:h-screen flex flex-col justify-center'>
        <CoverSection/>
    </div>
    </>
  );
}
