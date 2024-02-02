
import { Divider, Fade } from '@mui/material';
import Image from 'next/image';
import portraitImg from '@/public/about/portrait.png';
import StyledTimeline from '@/templates/timeline';

export default function Page() {
  
  return (
    <div id="light">
      {/* <MenuBar /> */}
      <Fade in={true} timeout={1000}>
      <main className={'flex min-h-screen flex-col items-center p-10 mx-5 lg:mx-40 xl:mx-80'}>
        <p className='font-bold text-3xl py-4'>About me</p>
        <p className='text-center font-light text-gray-700 text-lg'>
         My experiences and where I&apos;ve been
        </p>
        <Divider className='bg-white opacity-50 my-4' flexItem={true}></Divider>
        <div className='flex flex-col lg:flex-row gap-x-8'>
          <Image
            className='rounded-lg shadow-lgm h-full'
            src={portraitImg}
            alt="Picture of me"
            width={300}
            height={200}
            placeholder='blur'
          />
          <div className='pt-4 lg:pt-0'>
            <p className=' text-gray-900 font-bold py-2'>Persona</p>
            <p className=' text-gray-700 font-light py-2 '>
              Hi, I&apos;m Arif Zakuan. I&apos;m a software developer based in Malaysia. I&apos;m currently working with react, typescript, and dart for work and personal projects and learning new things as I go along.
            </p>
            <p className=' text-gray-900 font-bold py-2'>Experiences</p>
            <StyledTimeline />
          </div>
        </div>
      </main>
    </Fade>
    </div>
  );
}