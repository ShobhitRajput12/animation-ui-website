'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Copy, Check, Code2, Sparkles, ArrowLeft, Heart, Share2 } from 'lucide-react'

interface Animation {
  slug: string
  title: string
  tag: string
  category: string
  description: string
  previewCode: string
  code: string
  prompt: string
  likes: number
  author: string
}

export default function SingleAnimationView({ animation }: { animation: Animation }) {
  const [tab, setTab] = useState<'code' | 'prompt'>('code')
  const [copied, setCopied] = useState(false)
  const [liked, setLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(animation.likes)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(tab === 'code' ? animation.code : animation.prompt)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleLike = async () => {
    const action = liked ? 'unlike' : 'like'
    setLiked(!liked)
    setLikeCount(c => liked ? c - 1 : c + 1)
    await fetch(`/api/components/${animation.slug}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action }),
    })
  }

  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-bg-primary">

      {/* Top bar */}
      <div className="h-14 border-b border-white/[0.08] flex items-center
        justify-between px-6 bg-bg-secondary/80 backdrop-blur-md flex-shrink-0 z-50">
        <div className="flex items-center gap-3">
          <Link href="/components"
            className="flex items-center gap-1.5 text-xs text-white/40
              hover:text-white transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" />
            Components
          </Link>
          <span className="text-white/20">/</span>
          <span className="text-xs text-white/70 font-medium tracking-tight uppercase">{animation.title}</span>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={handleLike}
            className={`flex items-center gap-1.5 text-xs px-4 py-2
              rounded-xl border transition-all duration-200 active:scale-95
              ${liked
                ? 'text-pink-400 bg-pink-500/10 border-pink-500/20'
                : 'text-white/40 bg-white/5 border-white/10 hover:text-white hover:border-white/20'
              }`}
          >
            <Heart className={`w-3.5 h-3.5 ${liked ? 'fill-current' : ''}`} />
            {likeCount}
          </button>
          <button
            onClick={() => {
              navigator.clipboard.writeText(window.location.href)
              setCopied(true)
              setTimeout(() => setCopied(false), 2000)
            }}
            className="flex items-center gap-1.5 text-xs text-white/40
              hover:text-white bg-white/5 border border-white/10 px-4 py-2
              rounded-xl transition-all duration-200 active:scale-95 hover:border-white/20"
          >
            <Share2 className="w-3.5 h-3.5" />
            Share
          </button>
        </div>
      </div>

      {/* Main split view */}
      <div className="flex flex-1 overflow-hidden min-h-0">

        {/* Preview */}
        <div className="flex-1 bg-[#0a0a0b] overflow-hidden relative">
          <iframe
            srcDoc={animation.previewCode}
            className="w-full h-full border-0"
            title={animation.title}
            sandbox="allow-scripts"
          />
          {/* Info overlay bottom */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t
            from-black/60 to-transparent">
            <div className="flex items-end justify-between">
              <div>
                <h1 className="text-white font-bold text-lg mb-1">{animation.title}</h1>
                <p className="text-white/45 text-xs max-w-sm">{animation.description}</p>
              </div>
              <span className="text-xs text-purple-400 bg-purple-500/10
                border border-purple-500/20 px-2 py-1 rounded-lg">
                {animation.tag}
              </span>
            </div>
          </div>
        </div>

        {/* Code panel */}
        <div className="w-[460px] flex-shrink-0 flex flex-col border-l
          border-white/[0.07] bg-[#111113]">

          {/* Tabs */}
          <div className="flex border-b border-white/[0.07] flex-shrink-0">
            {(['code', 'prompt'] as const).map(t => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`flex items-center gap-1.5 px-5 py-3.5 text-xs
                  font-semibold border-b-2 transition-colors
                  ${tab === t
                    ? 'text-purple-400 border-purple-500'
                    : 'text-white/30 border-transparent hover:text-white/60'
                  }`}
              >
                {t === 'code'
                  ? <><Code2 className="w-3.5 h-3.5" /> Code</>
                  : <><Sparkles className="w-3.5 h-3.5" /> AI Prompt</>
                }
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto min-h-0">
            {tab === 'code' ? (
              <pre className="p-4 text-xs font-mono leading-relaxed
                text-[#c9d1d9] bg-[#0d1117] h-full overflow-auto
                whitespace-pre-wrap break-words">
                {animation.code}
              </pre>
            ) : (
              <div className="p-5 text-sm text-white/60 leading-relaxed
                whitespace-pre-line">
                {animation.prompt}
              </div>
            )}
          </div>

          {/* Copy button */}
          <div className="p-3 border-t border-white/[0.07] flex-shrink-0">
            <button
              onClick={handleCopy}
              className="w-full flex items-center justify-center gap-2
                bg-purple-600 hover:bg-purple-500 text-white text-sm
                font-semibold py-3 rounded-xl transition-colors"
            >
              {copied
                ? <><Check className="w-4 h-4" /> Copied!</>
                : <><Copy className="w-4 h-4" /> {tab === 'code' ? 'Copy Code' : 'Copy Prompt'}</>
              }
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
