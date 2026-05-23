'use client'
import { useState } from 'react'
import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import { Search, Sun, Moon } from 'lucide-react'

// Categories supported by backend filter: filter.category
const CATEGORY_KEYS = new Set([
  'backgrounds',
  'navbars',
  'footers',
  'heroes',
  'cards',
  'text-effects',
  'buttons',
  'loaders',
  'cursor',
  'modals',
  'shaders',
  'robot',
  'shades',
  'animation',
])

// Tags supported by backend filter: filter.tag
const TAG_KEYS = new Set(['css', 'threejs', 'canvas', 'gsap', 'webgl'])

// Top-level query mapping
type FilterKey = {
  kind: 'featured' | 'category' | 'tag' | 'all'
  value?: string
}

function getFilterKeyFromSidebarSlug(slug: string): FilterKey {
  if (slug === 'featured') return { kind: 'featured' }
  if (CATEGORY_KEYS.has(slug)) return { kind: 'category', value: slug }
  if (TAG_KEYS.has(slug)) return { kind: 'tag', value: slug }

  // UI-only items that should behave like "All"
  if (slug === 'all-animation') return { kind: 'all' }

  return { kind: 'all' }
}

// ── Category data ──────────────────────────────────────────────
const CATEGORIES = [
  {
    label: 'Explore',
    items: [
      { name: '✦ Featured', slug: 'featured' },
      // backend does not support newest/week/week-of; keep them as "All" for now
      { name: '◎ Newest', slug: 'all-newest' },
      { name: '⬡ Best of Week', slug: 'all-week' },
    ],
  },
  {
    label: 'Categories',
    items: [
      { name: 'Animation', slug: 'animation' },
      { name: 'Backgrounds', slug: 'backgrounds' },
      { name: 'Buttons', slug: 'buttons' },
      { name: 'Cards', slug: 'cards' },
      { name: 'Cursor', slug: 'cursor' },
      { name: 'Footer', slug: 'footers' },
      { name: 'Heroes', slug: 'heroes' },
      { name: 'Navbar', slug: 'navbars' },
      { name: '3D Robot', slug: 'robot' },
      { name: 'Shaders', slug: 'shaders' },
      { name: 'Text Effects', slug: 'text-effects' },
    ],
  },
]

export default function Sidebar() {
  const [search, setSearch] = useState('')
  const [dark, setDark] = useState(true)

  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()

  if (pathname === '/') return null


  const activeCategory = searchParams.get('category') || ''
  const activeTag = searchParams.get('tag') || ''
  const activeFeatured = searchParams.get('featured') === 'true'

  const toggleTheme = () => {
    setDark(!dark)
    document.documentElement.classList.toggle('dark')
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (search.trim()) router.push(`/components?search=${encodeURIComponent(search)}`)
  }

  const handleSidebarClick = (slug: string) => {
    const filter = getFilterKeyFromSidebarSlug(slug)

    if (filter.kind === 'featured') {
      router.push(`/components?featured=true`)
      return
    }
    if (filter.kind === 'category' && filter.value) {
      router.push(`/components?category=${filter.value}`)
      return
    }
    if (filter.kind === 'tag' && filter.value) {
      router.push(`/components?tag=${filter.value}`)
      return
    }

    // newest/week/shade/animation/etc => All
    router.push(`/components`)
  }

  const isItemActive = (slug: string) => {
    const filter = getFilterKeyFromSidebarSlug(slug)
    if (filter.kind === 'featured') return activeFeatured
    if (filter.kind === 'category' && filter.value) return activeCategory === filter.value
    if (filter.kind === 'tag' && filter.value) return activeTag === filter.value
    return false
  }

  return (
    <aside
      className="w-[220px] flex-shrink-0 bg-[#111113] border-r border-white/[0.07]
      flex flex-col overflow-y-auto h-screen scrollbar-thin"
    >
      {/* Logo */}
      <div className="px-4 py-5 border-b border-white/[0.07] flex items-center gap-2.5 flex-shrink-0">
        <div
          className="w-7 h-7 rounded-lg bg-gradient-to-br from-purple-500
          to-cyan-400 flex items-center justify-center text-white
          font-extrabold text-xs flex-shrink-0"
        >
          A
        </div>
        <span className="font-extrabold text-sm text-white tracking-tight">
          Animation <span className="text-purple-400">AI</span>
        </span>
      </div>

      {/* Search */}
      <form onSubmit={handleSearch} className="px-3 py-3 flex-shrink-0">
        <div className="relative">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/30" />
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search animations..."
            className="w-full bg-[#18181b] border border-white/[0.07]
              rounded-lg pl-8 pr-3 py-2 text-xs text-white
              placeholder:text-white/30 outline-none
              focus:border-purple-500/50 transition-colors font-sans"
          />
        </div>
      </form>

      {/* Categories */}
      <nav className="flex-1 overflow-y-auto px-2 pb-4">
        {CATEGORIES.map(group => (
          <div key={group.label} className="mb-2">
            <div
              className="px-2 py-1.5 text-[10px] font-semibold
              uppercase tracking-widest text-white/25"
            >
              {group.label}
            </div>

            {group.items.map(item => {
              const active = isItemActive(item.slug)
              return (
                <div key={item.slug} className="relative">
                  {/* Left accent border */}
                  {active && (
                    <span className="absolute left-0 top-1 bottom-1 w-[3px] rounded-full bg-purple-400" />
                  )}
                  <button
                    onClick={() => handleSidebarClick(item.slug)}
                    className={`w-full flex items-center justify-between
                      pl-4 pr-2 py-1.5 rounded-md text-[13px] text-left
                      transition-colors duration-150
                      ${active
                        ? 'bg-white/[0.08] text-white font-semibold'
                        : 'text-white/50 hover:text-white hover:bg-white/[0.04]'
                      }`}
                  >
                    <span className="truncate">{item.name}</span>
                  </button>
                </div>
              )
            })}
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div
        className="px-3 py-3 border-t border-white/[0.07] flex-shrink-0
        flex items-center justify-between"
      >
        <button
          onClick={toggleTheme}
          className="flex items-center gap-1.5 text-xs text-white/30
            hover:text-white/60 bg-[#18181b] border border-white/[0.07]
            rounded-lg px-3 py-1.5 transition-colors"
        >
          {dark ? <Sun className="w-3 h-3" /> : <Moon className="w-3 h-3" />}
          {dark ? 'Light' : 'Dark'}
        </button>
        <span className="text-[10px] text-white/20">v0.1</span>
      </div>
    </aside>
  )
}
