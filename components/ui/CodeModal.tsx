'use client'
import { useEffect, useState, useCallback } from 'react'
import { X, Copy, Check, Code2, Sparkles } from 'lucide-react'

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
}

interface CodeModalProps {
  slug: string | null
  onClose: () => void
}

export default function CodeModal({ slug, onClose }: CodeModalProps) {
  const [anim, setAnim] = useState<Animation | null>(null)
  const [loading, setLoading] = useState(false)
  const [tab, setTab] = useState<'code' | 'prompt'>('code')
  const [copied, setCopied] = useState(false)

  const fetchAnim = useCallback(async () => {
    if (!slug) return
    setLoading(true)
    try {
      const res = await fetch(`/api/components/${slug}`)
      const data = await res.json()
      setAnim(data.data)
    } finally {
      setLoading(false)
    }
  }, [slug])

  useEffect(() => {
    fetchAnim()
    setTab('code')
  }, [fetchAnim])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose])

  const handleCopy = async () => {
    if (!anim) return
    await navigator.clipboard.writeText(tab === 'code' ? anim.code : anim.prompt)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  if (!slug) return null

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md
        flex items-center justify-center p-6"
      onClick={e => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-[#111113] border border-white/[0.1] rounded-2xl
        w-full max-w-5xl max-h-[90vh] flex flex-col overflow-hidden
        shadow-2xl">

        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4
          border-b border-white/[0.07] flex-shrink-0">
          <div className="flex items-center gap-3">
            <h2 className="text-sm font-bold text-white">
              {loading ? 'Loading…' : anim?.title}
            </h2>
            {anim && (
              <span className="text-[11px] text-purple-400 bg-purple-500/10
                border border-purple-500/20 px-2 py-0.5 rounded-full">
                {anim.tag}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-lg bg-white/5 border border-white/[0.07]
              flex items-center justify-center text-white/40
              hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Body */}
        <div className="flex flex-1 overflow-hidden min-h-0">

          {/* Preview — left */}
          <div className="flex-1 bg-[#0a0a0b] border-r border-white/[0.07]
            overflow-hidden relative min-w-0">
            {loading ? (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-purple-500/30
                  border-t-purple-500 rounded-full animate-spin" />
              </div>
            ) : anim ? (
              <iframe
                srcDoc={anim.previewCode}
                className="w-full h-full border-0"
                title={anim.title}
                sandbox="allow-scripts"
              />
            ) : null}
          </div>

          {/* Code Panel — right */}
          <div className="w-[420px] flex-shrink-0 flex flex-col min-w-0">

            {/* Tabs */}
            <div className="flex border-b border-white/[0.07] flex-shrink-0">
              {(['code', 'prompt'] as const).map(t => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`flex items-center gap-1.5 px-5 py-3 text-xs
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
              {loading ? (
                <div className="p-5 space-y-2">
                  {[...Array(8)].map((_, i) => (
                    <div key={i}
                      className="h-4 bg-white/5 rounded animate-pulse"
                      style={{ width: `${60 + Math.random() * 40}%` }} />
                  ))}
                </div>
              ) : anim ? (
                tab === 'code' ? (
                  <pre className="p-4 text-xs font-mono leading-relaxed
                    text-[#c9d1d9] bg-[#0d1117] h-full overflow-auto
                    whitespace-pre-wrap break-words">
                    {anim.code}
                  </pre>
                ) : (
                  <div className="p-5 text-sm text-white/60 leading-relaxed
                    whitespace-pre-line">
                    {anim.prompt}
                  </div>
                )
              ) : null}
            </div>

            {/* Footer */}
            <div className="p-3 border-t border-white/[0.07] flex gap-2 flex-shrink-0">
              <button
                onClick={handleCopy}
                className="flex-1 flex items-center justify-center gap-2
                  bg-purple-600 hover:bg-purple-500 text-white text-xs
                  font-semibold py-2.5 rounded-lg transition-colors"
              >
                {copied
                  ? <><Check className="w-3.5 h-3.5" /> Copied!</>
                  : <><Copy className="w-3.5 h-3.5" /> {tab === 'code' ? 'Copy Code' : 'Copy Prompt'}</>
                }
              </button>
              <button
                onClick={() => setTab(tab === 'code' ? 'prompt' : 'code')}
                className="px-4 bg-white/5 hover:bg-white/10 text-white/50
                  hover:text-white text-xs font-semibold rounded-lg
                  transition-colors border border-white/[0.07]"
              >
                {tab === 'code' ? 'Prompt' : 'Code'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
