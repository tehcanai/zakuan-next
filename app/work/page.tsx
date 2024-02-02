import GalleryCard from '@/templates/gallery_card'
import { Input } from '@/components/ui/input'
import Divider from '@mui/material/Divider'
import Fade from '@mui/material/Fade/Fade'
import Image from 'next/image'

export default function Page() {
  return (
    <Fade in={true} timeout={1000}>
    <main className="flex min-h-screen flex-col items-center p-10 mx-5 lg:mx-40 xl:mx-80">
      <p className='font-bold text-3xl py-4'>Kerja</p>
      <p className='text-center font-light text-gray-700 text-lg'>
        A collection of stuff I&apos;ve built
      </p>
      <Divider className='bg-white opacity-50 my-4' flexItem={true}></Divider>
      <div className="z-10 w-full max-w-5xl justify-between font-mono text-sm lg:flex flex-col">
        <div className='flex flex-wrap items-center gap-x-4 mt-8 gap-y-16 first:px-4 first:py-4'>
          <GalleryCard
          title='SoalUndi'
          image='/work/soalunid-portfolio.PNG'
          alt='soal undi '
          githubLink=''
          />
        </div>
      </div>
    </main>
    </Fade>
  )
}