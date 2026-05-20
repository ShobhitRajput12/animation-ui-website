import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config({ path: '.env.local' })

import Animation from './models/Animation'
import { ALL_COMPONENTS_DATA } from './data-aggregator'

const MONGODB_URI = process.env.MONGODB_URI!

// DATA HAS BEEN EXTRACTED TO INDIVIDUAL CATEGORY FOLDERS
// Do not add data here. Add it directly to the respective app/category/[category]/data.ts
const animations: any[] = ALL_COMPONENTS_DATA

async function seedDatabase() {
  try {
    await mongoose.connect(MONGODB_URI)
    console.log('✅ Connected to MongoDB')

    // Optional: Clear existing data if you want to wipe the remote DB too
    await Animation.deleteMany({})
    console.log('🗑️  Cleared existing animations')

    if (animations.length > 0) {
      await Animation.insertMany(animations)
      console.log(`🌱 Seeded ${animations.length} animations!`)
    } else {
      console.log(`ℹ️ No animations to seed. (Data is now statically hosted in category folders)`)
    }

    console.log('✅ Done!')
    process.exit(0)
  } catch (error) {
    console.error('❌ Error seeding database:', error)
    process.exit(1)
  }
}

seedDatabase()
