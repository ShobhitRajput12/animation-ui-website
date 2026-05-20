import ComponentsGrid from '@/components/ui/ComponentsGrid'
import Navbar from '@/components/ui/Navbar'
import { ANIMATION_DATA } from './data'

export default function AnimationCategoryPage() {
  const animations = ANIMATION_DATA.map(({ previewCode, code, prompt, ...rest }: any) => rest).sort((a: any, b: any) => (a.createdAt < b.createdAt ? 1 : -1))

  return (
    <div className="flex-1 overflow-y-auto flex flex-col bg-bg-primary">
      <Navbar title="Animation" />
      <div className="p-6">
        {animations.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-64 text-white/20 text-sm">
            <div className="text-4xl mb-4">◌</div>
            <div>No animations yet in this category.</div>
          </div>
        ) : (
          <ComponentsGrid animations={animations} />
        )}
      </div>
    </div>
  )
}
