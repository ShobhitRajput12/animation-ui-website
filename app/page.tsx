import Link from 'next/link'
import { connectDB } from '@/lib/mongodb'
import Animation from '@/lib/models/Animation'
import FeaturedGrid from '@/components/ui/FeaturedGrid'
import HomeNavbar from '@/components/ui/HomeNavbar'
import Footer from '@/components/ui/Footer'

async function getFeatured() {
  try {
    await connectDB()
    const data = await Animation.find({ featured: true })
      .select('-previewCode -code -prompt')
      .sort({ createdAt: -1 })
      .limit(6)
      .lean()
    console.log(`HomePage: Found ${data.length} featured animations`)
    return JSON.parse(JSON.stringify(data))
  } catch (err) {
    console.error('HomePage Error:', err)
    return []
  }
}

export default async function HomePage() {
  const featured = await getFeatured()

  return (
    <div className="flex-1 overflow-y-auto bg-transparent flex flex-col h-full relative">
      <HomeNavbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 flex flex-col items-center justify-center text-center min-h-[600px] overflow-hidden">
        
        <div className="relative z-10 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
            <span className="text-[10px] font-bold tracking-widest text-white/70 uppercase">Open Source • Free Forever</span>
          </div>

        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-4 leading-tight">
          <span className="text-white block">UI Animations</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 block">
            Built Different
          </span>
        </h1>

        <p className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-medium">
          Copy-paste ready Three.js, CSS & WebGL animation components.
          <br className="hidden md:block" /> Click any card to get the full code + AI prompt.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-12 mb-12">
          <div className="text-center">
            <div className="text-3xl font-black text-cyan-400 mb-1">50+</div>
            <div className="text-xs uppercase tracking-widest text-white/40 font-bold">Components</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-black text-cyan-400 mb-1">8</div>
            <div className="text-xs uppercase tracking-widest text-white/40 font-bold">Categories</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-black text-cyan-400 mb-1">Free</div>
            <div className="text-xs uppercase tracking-widest text-white/40 font-bold">Always</div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/components" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-lg shadow-purple-500/25 flex items-center gap-2">
            Browse Components <span className="text-xl leading-none">→</span>
          </Link>
          <a href="https://github.com/ShobhitRajput12/animation-ui-web" target="_blank" rel="noreferrer" className="bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.1] text-white font-bold px-8 py-4 rounded-xl transition-all hover:scale-105">
            View on GitHub
          </a>
        </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div id="components" className="p-6 max-w-7xl mx-auto w-full flex-1 mt-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-black text-white tracking-tight">⬡ Featured Animations</h2>
          <Link href="/components?featured=true"
            className="text-sm font-bold text-purple-400 hover:text-purple-300
              flex items-center gap-2 transition-colors bg-purple-400/10 hover:bg-purple-400/20 px-4 py-2 rounded-lg">
            View all →
          </Link>
        </div>

        <FeaturedGrid animations={featured} />
      </div>

      <Footer />
    </div>
  )
}
