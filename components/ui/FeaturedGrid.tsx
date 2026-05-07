'use client'
import { useState } from 'react'
import AnimationCard from './AnimationCard'
import CodeModal from './CodeModal'

interface Animation {
  _id: string
  slug: string
  title: string
  category: string
  tag: string
  description: string
  likes: number
}

export default function FeaturedGrid({ animations }: { animations: Animation[] }) {
  const [openSlug, setOpenSlug] = useState<string | null>(null)

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {animations.map(anim => (
          <AnimationCard
            key={anim._id}
            {...anim}
            onOpen={setOpenSlug}
          />
        ))}
      </div>
      <CodeModal slug={openSlug} onClose={() => setOpenSlug(null)} />
    </>
  )
}
