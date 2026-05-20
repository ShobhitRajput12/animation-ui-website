import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import Animation from '@/lib/models/Animation'
import { SAMPLE_ANIMATIONS } from '@/lib/sampleAnimations'
import { ALL_COMPONENTS_DATA } from '@/lib/data-aggregator'

export const dynamic = 'force-dynamic'

// GET /api/preview/[slug] — returns raw HTML for iframe
export async function GET(
  _req: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    await connectDB()
    const anim = await Animation.findOne({ slug: params.slug })
      .select('previewCode')
      .lean() as { previewCode: string } | null

    if (!anim) {
      const localData = ALL_COMPONENTS_DATA.find(a => a.slug === params.slug)
      const sample = localData || SAMPLE_ANIMATIONS.find(a => a.slug === params.slug)
      
      if (sample) {
        return new NextResponse(sample.previewCode, {
          headers: {
            'Content-Type': 'text/html',
            'X-Frame-Options': 'SAMEORIGIN',
            'Cache-Control': 'no-store, must-revalidate',
          },
        })
      }
      return new NextResponse(
        '<html><body style="background:#0a0a0b;color:rgba(255,255,255,0.2);display:flex;align-items:center;justify-content:center;height:100vh;font-family:sans-serif;font-size:13px">Not found</body></html>',
        { headers: { 'Content-Type': 'text/html' } }
      )
    }

    return new NextResponse(anim.previewCode, {
      headers: {
        'Content-Type': 'text/html',
        'X-Frame-Options': 'SAMEORIGIN',
        'Cache-Control': 'no-store, must-revalidate',
      },
    })
  } catch (err) {
    const localData = ALL_COMPONENTS_DATA.find(a => a.slug === params.slug)
    const sample = localData || SAMPLE_ANIMATIONS.find(a => a.slug === params.slug)
    if (sample) {
      return new NextResponse(sample.previewCode, {
        headers: {
          'Content-Type': 'text/html',
          'X-Frame-Options': 'SAMEORIGIN',
          'Cache-Control': 'no-store, must-revalidate',
        },
      })
    }
    return new NextResponse(
      '<html><body style="background:#0a0a0b;color:rgba(255,255,255,0.2);display:flex;align-items:center;justify-content:center;height:100vh;font-family:sans-serif;font-size:13px">No preview</body></html>',
      { headers: { 'Content-Type': 'text/html' } }
    )
  }
}
