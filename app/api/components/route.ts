import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import Animation from '@/lib/models/Animation'
import { SAMPLE_ANIMATIONS } from '@/lib/sampleAnimations'

// GET /api/components?category=backgrounds&tag=css&featured=true
export async function GET(req: NextRequest) {
  try {
    await connectDB()
    const { searchParams } = new URL(req.url)

    const filter: Record<string, unknown> = {}
    const category = searchParams.get('category')
    const tag      = searchParams.get('tag')
    const featured = searchParams.get('featured')
    const search   = searchParams.get('search')

    if (category) filter.category = category
    if (tag)      filter.tag = tag
    if (featured) filter.featured = true
    if (search)   filter.title = { $regex: search, $options: 'i' }

    const animations = await Animation.find(filter)
      .select('-previewCode -code -prompt') // lean list — no heavy fields
      .sort({ createdAt: -1 })
      .lean()

    if (animations.length > 0) {
      return NextResponse.json({ success: true, data: animations })
    }

    // If DB is empty, still show something usable in the UI.
    const filtered = SAMPLE_ANIMATIONS
      .filter(a => (category ? a.category === category : true))
      .filter(a => (tag ? a.tag === tag : true))
      .filter(a => (featured ? a.featured : true))
      .filter(a => (search ? a.title.toLowerCase().includes(search.toLowerCase()) : true))
      .sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1))
      .map(({ previewCode, code, prompt, ...rest }) => rest)

    return NextResponse.json({ success: true, data: filtered })
  } catch (err) {
    // Fallback to local samples when DB is unreachable.
    try {
      const { searchParams } = new URL(req.url)
      const category = searchParams.get('category') || undefined
      const tag = searchParams.get('tag') || undefined
      const featured = searchParams.get('featured') || undefined
      const search = searchParams.get('search') || undefined

      const filtered = SAMPLE_ANIMATIONS
        .filter(a => (category ? a.category === category : true))
        .filter(a => (tag ? a.tag === tag : true))
        .filter(a => (featured ? a.featured : true))
        .filter(a => (search ? a.title.toLowerCase().includes(search.toLowerCase()) : true))
        .sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1))
        .map(({ previewCode, code, prompt, ...rest }) => rest)

      return NextResponse.json({ success: true, data: filtered })
    } catch {
      return NextResponse.json({ success: false, error: String(err) }, { status: 500 })
    }
  }
}

// POST /api/components — add new animation
export async function POST(req: NextRequest) {
  try {
    await connectDB()
    const body = await req.json()

    const required = ['slug','title','category','tag','description','previewCode','code','prompt']
    for (const field of required) {
      if (!body[field]) {
        return NextResponse.json(
          { success: false, error: `Missing field: ${field}` },
          { status: 400 }
        )
      }
    }

    const animation = await Animation.create(body)
    return NextResponse.json({ success: true, data: animation }, { status: 201 })
  } catch (err: any) {
    if (err.code === 11000) {
      return NextResponse.json(
        { success: false, error: 'Slug already exists' },
        { status: 409 }
      )
    }
    return NextResponse.json({ success: false, error: String(err) }, { status: 500 })
  }
}
