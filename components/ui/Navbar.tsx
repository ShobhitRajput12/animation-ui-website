'use client'
import React from 'react'
import Link from 'next/link'

interface NavbarProps {
  title: string
  children?: React.ReactNode
}

export default function Navbar({ title, children }: NavbarProps) {
  return (
    <div className="h-14 border-b border-white/[0.08] flex items-center
      justify-between px-6 bg-bg-secondary/80 backdrop-blur-md 
      flex-shrink-0 sticky top-0 z-50 transition-all duration-300">
      
      <div className="flex items-center gap-3">
        <span className="text-sm text-white/50 font-medium tracking-tight uppercase">{title}</span>
      </div>

      <div className="flex items-center gap-4">
        {children}
        <button className="bg-accent hover:bg-accent-light text-white
          text-xs font-bold px-5 py-2.5 rounded-xl transition-all 
          active:scale-95 shadow-lg shadow-accent/20 flex items-center gap-2">
          <span className="text-lg leading-none">+</span>
          Submit Animation
        </button>
      </div>
    </div>
  )
}
