import Link from 'next/link'
import { connectDB } from '@/lib/mongodb'
import Animation from '@/lib/models/Animation'
import FeaturedGrid from '@/components/ui/FeaturedGrid'
import Navbar from '@/components/ui/Navbar'

async function getFeatured() {
  await connectDB()
  const data = await Animation.find({ featured: true })
    .select('-previewCode -code -prompt')
    .sort({ createdAt: -1 })
    .limit(6)
    .lean()
  return JSON.parse(JSON.stringify(data))
}

export default async function HomePage() {
  const featured = await getFeatured()

  return (
    <div className="flex-1 overflow-y-auto bg-bg-primary">
      <Navbar title="Home" />

      <div className="p-6 max-w-7xl mx-auto">

        {/* Featured */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-bold text-white">⬡ Featured</h2>
          <Link href="/components?featured=true"
            className="text-xs text-purple-400 hover:text-purple-300
              flex items-center gap-1 transition-colors">
            View all →
          </Link>
        </div>

        <FeaturedGrid animations={featured} />

      </div>
    </div>
  )
}
