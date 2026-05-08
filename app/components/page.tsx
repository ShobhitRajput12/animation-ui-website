import { connectDB } from '@/lib/mongodb'
import Animation from '@/lib/models/Animation'
import ComponentsGrid from '@/components/ui/ComponentsGrid'
import Navbar from '@/components/ui/Navbar'
import { SAMPLE_ANIMATIONS } from '@/lib/sampleAnimations'

interface PageProps {
  searchParams: {
    category?: string
    tag?: string
    search?: string
    featured?: string
  }
}

async function getAnimations(params: PageProps['searchParams']) {
  const filterLocal = (a: typeof SAMPLE_ANIMATIONS[number]) => {
    if (params.category && a.category !== params.category) return false
    if (params.tag && a.tag !== params.tag) return false
    if (params.featured && !a.featured) return false
    if (params.search && !a.title.toLowerCase().includes(params.search.toLowerCase())) return false
    return true
  }

  try {
    await connectDB()
    const filter: Record<string, unknown> = {}

    if (params.category) filter.category = params.category
    if (params.tag)      filter.tag = params.tag
    if (params.featured) filter.featured = true
    if (params.search)   filter.title = { $regex: params.search, $options: 'i' }

    const data = await Animation.find(filter)
      .select('-previewCode -code -prompt')
      .sort({ createdAt: -1 })
      .lean()

    const normalized = JSON.parse(JSON.stringify(data))
    console.log(`ComponentsPage: Found ${normalized.length} animations in DB`)
    if (Array.isArray(normalized) && normalized.length > 0) return normalized

    return SAMPLE_ANIMATIONS
      .filter(filterLocal)
      .sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1))
      .map(({ previewCode, code, prompt, ...rest }) => rest)
  } catch {
    return SAMPLE_ANIMATIONS
      .filter(filterLocal)
      .sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1))
      .map(({ previewCode, code, prompt, ...rest }) => rest)
  }
}

export default async function ComponentsPage({ searchParams }: PageProps) {
  const animations = await getAnimations(searchParams)

  const title = searchParams.search
    ? `Results for "${searchParams.search}"`
    : searchParams.category
      ? searchParams.category.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
      : 'All Components'

  return (
    <div className="flex-1 overflow-y-auto flex flex-col bg-bg-primary">
      <Navbar title={title}>
        <FilterChips active={searchParams.tag} />
      </Navbar>

      <div className="p-6">
        {animations.length === 0 ? (
          <div className="flex flex-col items-center justify-center
            h-64 text-white/20 text-sm">
            <div className="text-4xl mb-4">◌</div>
            <div>No animations yet in this category.</div>
            <div className="text-xs mt-1">Add some via the seed file!</div>
          </div>
        ) : (
          <ComponentsGrid animations={animations} />
        )}
      </div>
    </div>
  )
}

function FilterChips({ active }: { active?: string }) {
  const tags = ['All', 'CSS', 'Three.js', 'Canvas', 'GSAP', 'WebGL']
  return (
    <div className="flex items-center gap-1.5">
      {tags.map(t => {
        const slug = t === 'All' ? undefined : t.toLowerCase().replace('.', '')
        const isActive = (!active && t === 'All') || active === slug
        return (
          <a
            key={t}
            href={slug ? `?tag=${slug}` : '/components'}
            className={`text-xs px-3 py-1.5 rounded-lg font-medium
              transition-colors border
              ${isActive
                ? 'bg-purple-600 border-purple-600 text-white'
                : 'bg-white/[0.04] border-white/[0.07] text-white/40 hover:text-white hover:border-white/20'
              }`}
          >
            {t}
          </a>
        )
      })}
    </div>
  )
}
