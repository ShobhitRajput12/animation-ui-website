import mongoose, { Schema, Document, Model } from 'mongoose'

export interface IAnimation extends Document {
  slug: string
  title: string
  category: string   // backgrounds | navbars | footers | heroes | cards | text-effects | buttons | loaders | cursor | modals
  tag: string        // css | threejs | canvas | gsap | webgl
  description: string
  previewCode: string  // full HTML (inline CSS+JS) rendered in iframe for preview
  code: string         // clean component code user copies
  prompt: string       // AI prompt to recreate this
  likes: number
  author: string
  featured: boolean
  createdAt: Date
}

const AnimationSchema = new Schema<any>(
  {
    _id:         { type: String },
    slug:        { type: String, required: true, unique: true },
    title:       { type: String, required: true },
    category:    { type: String, required: true },
    tag:         { type: String, required: true },
    description: { type: String, required: true },
    previewCode: { type: String, required: true },
    code:        { type: String, required: true },
    prompt:      { type: String, required: true },
    likes:       { type: Number, default: 0 },
    author:      { type: String, default: 'Animation AI' },
    featured:    { type: Boolean, default: false },
  },
  { timestamps: true }
)

const Animation: Model<IAnimation> =
  mongoose.models.Animation ||
  mongoose.model<IAnimation>('Animation', AnimationSchema)

export default Animation
