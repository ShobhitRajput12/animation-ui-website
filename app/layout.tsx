import type { Metadata } from 'next'
import { Syne, DM_Mono } from 'next/font/google'
import { Suspense } from 'react'
import './globals.css'
import Sidebar from '@/components/ui/Sidebar'
import HeroBackground from '@/components/ui/HeroBackground'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['400','500','600','700','800'],
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  variable: '--font-dm-mono',
  weight: ['300','400','500'],
})

export const metadata: Metadata = {
  title: 'Animation AI — UI Animation Library',
  description: 'Copy-paste UI animations with code + AI prompts. Backgrounds, Navbars, Heroes, and more.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${syne.variable} ${dmMono.variable} font-sans
        bg-transparent text-white overflow-hidden h-screen`}>
        <HeroBackground />
        <div className="flex h-screen relative z-10">
          <Suspense fallback={null}>
            <Sidebar />
          </Suspense>
          <main className="flex-1 overflow-hidden flex flex-col bg-transparent">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
