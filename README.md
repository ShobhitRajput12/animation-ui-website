# Animation AI 🎨

> UI animation component library — 21st.dev style — built with Next.js + Tailwind + MongoDB

---

## 🚀 Quick Setup (5 steps)

### 1. Install dependencies
```bash
npm install
```

### 2. MongoDB setup
- Go to [mongodb.atlas.com](https://cloud.mongodb.com)
- Create free cluster → Get connection string
- Open `.env.local` and paste your URI:
```
MONGODB_URI=mongodb+srv://YOUR_USER:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/animation-ai
```

### 3. Seed the database (adds all starter animations)
```bash
npm run seed
```
You'll see:
```
✅ Connected to MongoDB
🗑️  Cleared existing animations
🌱 Seeded 13 animations!
✅ Done!
```

### 4. Run the dev server
```bash
npm run dev
```

### 5. Open browser
```
http://localhost:3000
```

---

## 📁 Project Structure

```
animation-ai/
├── app/
│   ├── page.tsx                    ← Home page (hero + featured)
│   ├── layout.tsx                  ← Root layout with sidebar
│   ├── globals.css                 ← Tailwind + custom styles
│   ├── components/
│   │   ├── page.tsx               ← All animations grid (filter by category)
│   │   └── [slug]/page.tsx        ← Single animation full view
│   └── api/
│       ├── components/route.ts    ← GET all, POST new
│       ├── components/[id]/route.ts ← GET one, PATCH likes
│       └── preview/[slug]/route.ts  ← Serve iframe HTML
│
├── components/ui/
│   ├── Sidebar.tsx               ← Left nav with all categories
│   ├── AnimationCard.tsx         ← Card with iframe preview
│   ├── CodeModal.tsx             ← Popup: code + prompt tabs
│   ├── FeaturedGrid.tsx          ← Home page grid
│   ├── ComponentsGrid.tsx        ← Components page grid
│   └── SingleAnimationView.tsx   ← Full detail page
│
├── lib/
│   ├── mongodb.ts               ← DB connection
│   ├── models/Animation.ts      ← Mongoose schema
│   └── seed.ts                  ← Add/update animations here ✅
│
└── .env.local                   ← Your MongoDB URI goes here
```

---

## ➕ How to add your new animation

Open `lib/seed.ts` and add a new object to the `animations` array:

```ts
{
  slug: 'my-cool-navbar',           // unique URL slug
  title: 'My Cool Navbar',
  category: 'navbars',              // see categories below
  tag: 'css',                       // css | threejs | canvas | gsap | webgl
  description: 'A short description of what this does.',
  featured: false,                  // true = shows on home page
  previewCode: `<!DOCTYPE html>
<html><head><style>
  /* your animation CSS here */
</style></head><body>
  <!-- your animation HTML here -->
  <script>
    // your animation JS here
  </script>
</body></html>`,
  code: `/* Clean code the user will copy */
.my-navbar { ... }`,
  prompt: `AI prompt to recreate this animation:
• Step 1
• Step 2
• Colors: #xxx`,
}
```

Then run:
```bash
npm run seed
```

Done! Your animation will appear on the website. ✅

---

## 📂 Available Categories

| Category | slug |
|---|---|
| Backgrounds | `backgrounds` |
| Navbars | `navbars` |
| Footers | `footers` |
| Heroes | `heroes` |
| Cards | `cards` |
| Text Effects | `text-effects` |
| Buttons | `buttons` |
| Loaders | `loaders` |
| Cursor | `cursor` |
| Modals | `modals` |

---

## 🔌 API Endpoints

| Method | URL | Description |
|---|---|---|
| GET | `/api/components` | Get all animations |
| GET | `/api/components?category=navbars` | Filter by category |
| GET | `/api/components?tag=css` | Filter by tag |
| GET | `/api/components?featured=true` | Featured only |
| GET | `/api/components?search=particle` | Search |
| POST | `/api/components` | Add new animation |
| GET | `/api/components/:slug` | Get one (with code+prompt) |
| PATCH | `/api/components/:slug` | Like / unlike |
| GET | `/api/preview/:slug` | Raw HTML for iframe |

---

## 🛠️ Tech Stack

- **Next.js 14** — App Router, Server Components
- **Tailwind CSS** — Styling
- **MongoDB + Mongoose** — Database
- **Lucide React** — Icons
- **Syne + DM Mono** — Fonts

---

Made with ♥ by Jay
