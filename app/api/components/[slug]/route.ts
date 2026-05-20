import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import Animation from '@/lib/models/Animation'
import { SAMPLE_ANIMATIONS } from '@/lib/sampleAnimations'
import { ALL_COMPONENTS_DATA } from '@/lib/data-aggregator'

export const dynamic = 'force-dynamic'

// GET /api/components/[slug] — full animation with code & prompt
export async function GET(
  _req: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    await connectDB()
    const animation = await Animation.findOne({ slug: params.slug }).lean()

    if (!animation) {
      const localData = ALL_COMPONENTS_DATA.find(a => a.slug === params.slug)
      const sample = (localData || SAMPLE_ANIMATIONS.find(a => a.slug === params.slug || a._id === params.slug)) ?? null
      
      if (!sample) {
        return NextResponse.json({ success: false, error: 'Not found' }, { status: 404 })
      }
      return NextResponse.json({ success: true, data: sample })
    }
    return NextResponse.json({ success: true, data: animation })
  } catch (err) {
    const localData = ALL_COMPONENTS_DATA.find(a => a.slug === params.slug)
    const sample = (localData || SAMPLE_ANIMATIONS.find(a => a.slug === params.slug || a._id === params.slug)) ?? null
    
    if (!sample) {
      return NextResponse.json({ success: false, error: 'Not found' }, { status: 404 })
    }
    return NextResponse.json({ success: true, data: sample })
  }
}

// PATCH /api/components/[slug] — like / unlike
export async function PATCH(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    await connectDB()
    const { action } = await req.json()

    const animation = await Animation.findOneAndUpdate(
      { $or: [{ slug: params.slug }, { _id: params.slug }] },
      { $inc: { likes: action === 'unlike' ? -1 : 1 } },
      { new: true }
    ).select('likes')

    if (!animation) {
      return NextResponse.json({ success: false, error: 'Not found' }, { status: 404 })
    }
    return NextResponse.json({ success: true, likes: animation.likes })
  } catch (err) {
    return NextResponse.json({ success: false, error: String(err) }, { status: 500 })
  }
}
