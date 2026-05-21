'use client'
import { useState } from 'react'
import { Heart, Copy, Share2 } from 'lucide-react'

interface AnimationCardProps {
  _id: string
  slug: string
  title: string
  category: string
  tag: string
  description: string
  likes: number
  onOpen: (slug: string) => void
}

const TAG_STYLES: Record<string, string> = {
  css:     'bg-purple-500/10 text-purple-400 border-purple-500/20',
  threejs: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  canvas:  'bg-orange-500/10 text-orange-400 border-orange-500/20',
  gsap:    'bg-green-500/10 text-green-400 border-green-500/20',
  webgl:   'bg-pink-500/10 text-pink-400 border-pink-500/20',
  'react-three-fiber': 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
}

export default function AnimationCard({
  slug, title, tag, description, likes, onOpen
}: AnimationCardProps) {
  const [liked, setLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(likes)
  const [copied, setCopied] = useState(false)

  const handleLike = async (e: React.MouseEvent) => {
    e.stopPropagation()
    const action = liked ? 'unlike' : 'like'
    setLiked(!liked)
    setLikeCount(c => liked ? c - 1 : c + 1)
    await fetch(`/api/components/${slug}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action }),
    })
  }

  const handleCopy = async (e: React.MouseEvent) => {
    e.stopPropagation()
    // Fetch code then copy
    const res = await fetch(`/api/components/${slug}`)
    const data = await res.json()
    await navigator.clipboard.writeText(data.data.code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div
      onClick={() => onOpen(slug)}
      className="group bg-[#111113] border border-white/[0.07] rounded-xl
        overflow-hidden cursor-pointer card-hover"
    >
      {/* Preview */}
      <div className="relative h-48 bg-[#0a0a0b] overflow-hidden">
        <iframe
          src={`/api/preview/${slug}?v=3`}
          className="w-full h-full border-0 pointer-events-none"
          title={title}
          loading="lazy"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/50 opacity-0
          group-hover:opacity-100 transition-opacity flex items-center
          justify-center backdrop-blur-sm">
          <button className="bg-white/10 border border-white/20 rounded-lg
            px-4 py-2 text-sm font-semibold text-white">
            View Code
          </button>
        </div>
      </div>

      {/* Body */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-1.5">
          <h3 className="text-sm font-semibold text-white truncate">{title}</h3>
          <span className={`text-[11px] px-2 py-0.5 rounded-full border
            font-semibold flex-shrink-0 ml-2
            ${TAG_STYLES[tag] ?? 'bg-white/5 text-white/50 border-white/10'}`}>
            {tag}
          </span>
        </div>
        <p className="text-xs text-white/35 leading-relaxed line-clamp-2">
          {description}
        </p>

        {/* Actions */}
        <div className="flex items-center gap-1 mt-3 pt-3 border-t border-white/[0.06]">
          <button
            onClick={handleLike}
            className={`flex items-center gap-1.5 text-xs px-2 py-1
              rounded-md transition-colors
              ${liked
                ? 'text-pink-400 bg-pink-500/10'
                : 'text-white/30 hover:text-white/60 hover:bg-white/5'
              }`}
          >
            <Heart className={`w-3.5 h-3.5 ${liked ? 'fill-current' : ''}`} />
            {likeCount}
          </button>

          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 text-xs text-white/30
              hover:text-white/60 hover:bg-white/5 px-2 py-1 rounded-md
              transition-colors"
          >
            <Copy className="w-3.5 h-3.5" />
            {copied ? 'Copied!' : 'Copy'}
          </button>

          <button
            onClick={e => {
              e.stopPropagation()
              navigator.clipboard.writeText(`${window.location.origin}/components/${slug}`)
            }}
            className="flex items-center gap-1.5 text-xs text-white/30
              hover:text-white/60 hover:bg-white/5 px-2 py-1 rounded-md
              transition-colors ml-auto"
          >
            <Share2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  )
}
