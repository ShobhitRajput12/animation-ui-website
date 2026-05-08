'use client'
import { useEffect, useState } from 'react'

export default function HeroBackground() {
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; size: number; opacity: number; duration: number; color: string }[]>([])

  useEffect(() => {
    // Generate particles
    const colors = ['#06b6d4', '#a855f7', '#3b82f6', '#ffffff'] // cyan, purple, blue, white
    const newParticles = Array.from({ length: 150 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1, // 1px to 4px
      opacity: Math.random() * 0.8 + 0.2,
      duration: Math.random() * 8 + 4, // 4s to 12s
      color: colors[Math.floor(Math.random() * colors.length)],
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-50">
      {/* Dark background base to perfectly match image */}
      <div className="absolute inset-0 bg-[#09090b]"></div>
      
      {/* Subtle Radial glow in center */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(124,92,252,0.12)_0%,_transparent_60%)]"></div>
      
      {/* Particles */}
      <div className="absolute inset-0">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-[1px] animate-float"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              opacity: p.opacity,
              backgroundColor: p.color,
              boxShadow: `0 0 ${p.size * 2}px ${p.color}`,
              animationDuration: `${p.duration}s`,
            }}
          />
        ))}
      </div>
    </div>
  )
}
