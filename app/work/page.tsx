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
        A collection of stuff I&apos;ve built and worked on
      </p>
      <Divider className='bg-white opacity-50 my-4' flexItem={true}></Divider>
      <div className="z-10 w-full max-w-5xl justify-between items-center font-mono text-sm lg:flex flex-col pb-12">
        <div className='flex flex-wrap items-center gap-x-4 mt-8 gap-y-8'>
          <GalleryCard
          title='MyWakalah'
          description='App developed for PPZ MAIWP for their zakat payers to manage their wakalah'
          image='/work/mywklah.png'
          alt='mywakalah '
          appleStoreLink='https://apps.apple.com/my/app/mywakalah/id1544712828'
          googlePlayLink='https://play.google.com/store/apps/details?id=com.zakat.mywakalah.mywakalah'
          />
          <GalleryCard
          title='SoalUndi'
          description='Chatbot that answers your questions about the Malaysian election'
          image='/work/soalunid-portfolio.PNG'
          alt='soal undi '
          githubLink='https://github.com/tehcanai/SoalUndi'
          />
          <GalleryCard
          title='Jum'
          description='A simple app with authentication via firebase and geolocation service'
          image='/work/jum.png'
          alt='Jum '
          githubLink='https://github.com/tehcanai/jum_app'
          />
        </div>
      </div>
    </main>
    </Fade>
  )
}