import { connectDB } from '@/lib/mongodb'
import Animation from '@/lib/models/Animation'
import { notFound } from 'next/navigation'
import SingleAnimationView from '@/components/ui/SingleAnimationView'

interface PageProps {
  params: { slug: string }
}

async function getAnimation(slug: string) {
  await connectDB()
  const data = await Animation.findOne({ slug }).lean()
  if (!data) return null
  return JSON.parse(JSON.stringify(data))
}

export default async function AnimationPage({ params }: PageProps) {
  const anim = await getAnimation(params.slug)
  if (!anim) notFound()
  return <SingleAnimationView animation={anim} />
}
