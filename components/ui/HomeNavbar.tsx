'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { Search, Moon, Sun } from 'lucide-react'

export default function HomeNavbar() {
  const [dark, setDark] = useState(true)

  const toggleTheme = () => {
    setDark(!dark)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <div className="h-20 flex items-center justify-between px-8 bg-transparent sticky top-0 z-50">
      
      {/* Left: Logo */}
      <Link href="/" className="flex items-center gap-2">
        <span className="font-black text-2xl tracking-tight text-white">
          Animation<span className="text-purple-500">UI</span>
        </span>
      </Link>

      {/* Middle: Search (Perfectly Centered) */}
      <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-full max-w-[400px]">
        <div className="relative w-full">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
          <input 
            type="text" 
            placeholder="Search animations..." 
            className="w-full bg-[#18181b]/80 border border-white/[0.05] rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-white/30 outline-none focus:border-purple-500/50 transition-all shadow-sm"
          />
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-4">
        <button onClick={toggleTheme} className="w-10 h-10 rounded-xl bg-[#18181b]/80 border border-white/[0.05] flex items-center justify-center text-white/60 hover:text-white transition-colors">
          {dark ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
        </button>
        <Link href="/components" className="bg-accent hover:bg-accent-light text-white text-sm font-bold px-4 py-2 rounded-xl transition-all active:scale-95 shadow-lg shadow-accent/20">
          Submit Component
        </Link>
      </div>

    </div>
  )
}
