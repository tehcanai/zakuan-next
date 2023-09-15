
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export default function Page() {
  return (
    <main className={'flex flex-col items-center p-20'}>
      <h2 className={`mb-3 animate-fade-in font-bold text-[80px] ${inter.variable}`}>PROJECTS</h2>
    </main>
  )
}