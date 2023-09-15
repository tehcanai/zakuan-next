
import { redirect } from 'next/navigation'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export default function Page() {
  
  redirect('/main/hero')
}
