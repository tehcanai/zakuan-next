"use client"

import Cursor from '@/components/cursor';
import { AppShell, Navbar, Header, Space } from '@mantine/core';
import { useMediaQuery } from '@mui/material';
import Link from 'next/link';

export default function HeadLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    const media = useMediaQuery('(min-width: 600px)');
    return (
        <AppShell
          padding="md"
          header={<Header height={60} withBorder={false} p="xl" sx={{backgroundColor: 'transparent'}}>{
            <div className='flex flex-row space-x-10'>
              <Link href='/main/hero' className='hover:text-white'>Zakuan</Link>
              <Link href='/main/about' className='hover:text-white'>About</Link>
              <Link href='/main/work' className='hover:text-white'>Work</Link>
            </div>
          }</Header>}
          >
          <section>
           {media == true && <Cursor/>}
           {children}
          </section>
        </AppShell>
    )
  }