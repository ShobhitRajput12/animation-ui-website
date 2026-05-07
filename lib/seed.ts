import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config({ path: '.env.local' })

import Animation from './models/Animation'

const MONGODB_URI = process.env.MONGODB_URI!

const animations = [
  // ─────────────────────────────────────────
  // BACKGROUNDS
  // ─────────────────────────────────────────
  {
    slug: 'aurora-background',
    title: 'Aurora Background',
    category: 'backgrounds',
    tag: 'css',
    description: 'Organic flowing aurora with animated blobs and color blending.',
    featured: true,
    previewCode: `<!DOCTYPE html><html><head><style>
*{margin:0;padding:0;box-sizing:border-box}
body{width:100%;height:100vh;overflow:hidden;background:#050510}
.aurora{position:absolute;inset:0;overflow:hidden}
.blob{position:absolute;border-radius:50%;filter:blur(60px);opacity:0.6}
.b1{width:200%;height:200%;background:radial-gradient(circle,#7c5cfc 0%,transparent 60%);animation:a1 8s ease-in-out infinite}
.b2{width:160%;height:160%;background:radial-gradient(circle,#22d3ee 0%,transparent 60%);animation:a2 10s ease-in-out infinite}
.b3{width:180%;height:180%;background:radial-gradient(circle,#4ade80 0%,transparent 60%);animation:a3 12s ease-in-out infinite}
@keyframes a1{0%,100%{transform:translate(-20%,-20%) scale(1.2) rotate(0deg)}50%{transform:translate(10%,10%) scale(0.9) rotate(180deg)}}
@keyframes a2{0%,100%{transform:translate(20%,20%) scale(0.9)}50%{transform:translate(-10%,-5%) scale(1.3) rotate(-120deg)}}
@keyframes a3{0%,100%{transform:translate(0%,30%) scale(1.1)}50%{transform:translate(-20%,-10%) scale(0.8)}}
.label{position:absolute;bottom:20px;left:50%;transform:translateX(-50%);color:rgba(255,255,255,0.8);font-family:sans-serif;font-size:14px;font-weight:600;letter-spacing:2px}
</style></head><body>
<div class="aurora"><div class="blob b1"></div><div class="blob b2"></div><div class="blob b3"></div></div>
<div class="label">AURORA BACKGROUND</div>
</body></html>`,
    code: `/* Aurora Background — pure CSS */
.aurora-container {
  position: absolute;
  inset: 0;
  overflow: hidden;
  background: #050510;
}
.aurora-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.6;
}
.aurora-blob-1 {
  width: 200%; height: 200%;
  background: radial-gradient(circle, #7c5cfc 0%, transparent 60%);
  animation: aurora1 8s ease-in-out infinite;
}
.aurora-blob-2 {
  width: 160%; height: 160%;
  background: radial-gradient(circle, #22d3ee 0%, transparent 60%);
  animation: aurora2 10s ease-in-out infinite;
}
.aurora-blob-3 {
  width: 180%; height: 180%;
  background: radial-gradient(circle, #4ade80 0%, transparent 60%);
  animation: aurora3 12s ease-in-out infinite;
}
@keyframes aurora1 {
  0%, 100% { transform: translate(-20%, -20%) scale(1.2) rotate(0deg); }
  50%       { transform: translate(10%, 10%) scale(0.9) rotate(180deg); }
}
@keyframes aurora2 {
  0%, 100% { transform: translate(20%, 20%) scale(0.9); }
  50%       { transform: translate(-10%, -5%) scale(1.3) rotate(-120deg); }
}
@keyframes aurora3 {
  0%, 100% { transform: translate(0%, 30%) scale(1.1); }
  50%       { transform: translate(-20%, -10%) scale(0.8); }
}`,
    prompt: `Create a pure CSS Aurora Background:
• Dark base: #050510
• 3 large radial-gradient blobs: purple #7c5cfc, cyan #22d3ee, green #4ade80
• Each blob 150–200% of container size
• blur(60px) filter for soft glow
• Independent keyframe animations at 8s, 10s, 12s
• translate + scale + rotate for organic movement
• Works as position:absolute overlay
• Zero JavaScript required`,
  },

  {
    slug: 'particle-wave',
    title: 'Particle Wave',
    category: 'backgrounds',
    tag: 'canvas',
    description: 'Mouse-reactive canvas particle grid with sinusoidal wave motion.',
    featured: true,
    previewCode: `<!DOCTYPE html><html><head><style>
*{margin:0;padding:0}body{background:#050510;overflow:hidden}
canvas{display:block}
</style></head><body>
<canvas id="c"></canvas>
<script>
const c=document.getElementById('c'),ctx=c.getContext('2d');
c.width=window.innerWidth;c.height=window.innerHeight;
const cols=40,rows=25,pts=[];
for(let i=0;i<cols;i++)for(let j=0;j<rows;j++)pts.push({x:(i/cols)*c.width,y:(j/rows)*c.height,ox:i,oy:j});
function draw(t){
  ctx.clearRect(0,0,c.width,c.height);
  ctx.fillStyle='#050510';ctx.fillRect(0,0,c.width,c.height);
  pts.forEach(p=>{
    const w=Math.sin(p.ox*0.5+t*0.002)*12+Math.cos(p.oy*0.5+t*0.0015)*8;
    const b=(w+20)/40;
    ctx.beginPath();ctx.arc(p.x,p.y+w,2,0,Math.PI*2);
    ctx.fillStyle='rgba(124,92,252,'+(0.2+b*0.7)+')';ctx.fill();
  });
  requestAnimationFrame(draw);
}
draw(0);
</script>
</body></html>`,
    code: `// Particle Wave — Canvas
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

const cols = 40, rows = 25
const points = []

for (let i = 0; i < cols; i++) {
  for (let j = 0; j < rows; j++) {
    points.push({
      x: (i / cols) * canvas.width,
      y: (j / rows) * canvas.height,
      ox: i, oy: j
    })
  }
}

function draw(t) {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.fillStyle = '#050510'
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  points.forEach(p => {
    const wave = Math.sin(p.ox * 0.5 + t * 0.002) * 12
              + Math.cos(p.oy * 0.5 + t * 0.0015) * 8
    const brightness = (wave + 20) / 40
    ctx.beginPath()
    ctx.arc(p.x, p.y + wave, 2, 0, Math.PI * 2)
    ctx.fillStyle = \`rgba(124,92,252,\${0.2 + brightness * 0.7})\`
    ctx.fill()
  })
  requestAnimationFrame(draw)
}
draw(0)`,
    prompt: `Build a Canvas particle wave background:
• 40×25 grid of dots on dark #050510 background
• Each dot displaced vertically by sin+cos wave formula
• Wave based on grid position (ox, oy) + time
• Dot opacity varies with wave height for depth feel
• Purple color #7c5cfc with alpha variation
• Smooth 60fps requestAnimationFrame loop
• Responsive to window size`,
  },

  {
    slug: 'shader-stripes',
    title: 'Shader Stripes',
    category: 'backgrounds',
    tag: 'css',
    description: 'Diagonal animated light streaks inspired by GLSL shaders.',
    featured: true,
    previewCode: `<!DOCTYPE html><html><head><style>
*{margin:0;padding:0}body{background:#050510;overflow:hidden;height:100vh;display:flex;align-items:center;justify-content:center}
.wrap{position:absolute;inset:0;overflow:hidden}
.stripes{position:absolute;inset:0;background:repeating-linear-gradient(45deg,rgba(124,92,252,0.15) 0px,rgba(34,211,238,0.3) 2px,transparent 2px,transparent 20px),repeating-linear-gradient(-45deg,rgba(251,146,60,0.1) 0px,rgba(74,222,128,0.2) 2px,transparent 2px,transparent 20px);animation:move 2s linear infinite}
@keyframes move{0%{background-position:0 0}100%{background-position:60px 60px}}
.txt{position:relative;z-index:1;font-family:sans-serif;font-size:36px;font-weight:800;color:rgba(255,255,255,0.9);text-shadow:0 0 40px rgba(124,92,252,0.8)}
</style></head><body>
<div class="wrap"><div class="stripes"></div></div>
<div class="txt">Shader Animation</div>
</body></html>`,
    code: `.shader-bg {
  position: absolute;
  inset: 0;
  background:
    repeating-linear-gradient(
      45deg,
      rgba(124,92,252,0.15) 0px,
      rgba(34,211,238,0.3) 2px,
      transparent 2px,
      transparent 20px
    ),
    repeating-linear-gradient(
      -45deg,
      rgba(251,146,60,0.1) 0px,
      rgba(74,222,128,0.2) 2px,
      transparent 2px,
      transparent 20px
    );
  animation: shader-move 2s linear infinite;
}
@keyframes shader-move {
  0%   { background-position: 0 0; }
  100% { background-position: 60px 60px; }
}`,
    prompt: `CSS shader-inspired diagonal stripe background:
• repeating-linear-gradient at 45deg and -45deg
• Colors: purple rgba(124,92,252,0.15), cyan rgba(34,211,238,0.3), orange, green
• Stripe width: 2px on, 20px off
• background-position animation moves stripes continuously
• Duration: 2s linear infinite
• Overlay text with text-shadow glow effect`,
  },

  // ─────────────────────────────────────────
  // NAVBARS
  // ─────────────────────────────────────────
  {
    slug: 'glassmorphism-navbar',
    title: 'Glassmorphism Navbar',
    category: 'navbars',
    tag: 'css',
    description: 'Frosted glass navbar with blur backdrop and border glow on scroll.',
    featured: true,
    previewCode: `<!DOCTYPE html><html><head><style>
*{margin:0;padding:0;box-sizing:border-box}
body{background:linear-gradient(135deg,#0a0a0b,#1a0a2e);min-height:100vh;font-family:sans-serif}
nav{position:fixed;top:16px;left:50%;transform:translateX(-50%);width:90%;max-width:800px;background:rgba(255,255,255,0.05);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border:1px solid rgba(255,255,255,0.1);border-radius:16px;padding:12px 24px;display:flex;align-items:center;justify-content:space-between;z-index:100;transition:all 0.3s}
nav.scrolled{background:rgba(10,10,11,0.8);border-color:rgba(124,92,252,0.3);box-shadow:0 0 30px rgba(124,92,252,0.15)}
.logo{font-size:16px;font-weight:800;color:#fff;letter-spacing:-0.5px}.logo span{color:#a78bfa}
.links{display:flex;gap:24px}.links a{color:rgba(255,255,255,0.6);text-decoration:none;font-size:13px;transition:color 0.2s}.links a:hover{color:#fff}
.cta{background:#7c5cfc;color:#fff;border:none;border-radius:8px;padding:8px 16px;font-size:13px;font-weight:600;cursor:pointer;font-family:inherit}
.hero{padding-top:140px;text-align:center;color:white}.hero h1{font-size:48px;font-weight:800}
</style></head><body>
<nav id="nav">
  <div class="logo">Animation<span>AI</span></div>
  <div class="links"><a href="#">Components</a><a href="#">Categories</a><a href="#">Docs</a></div>
  <button class="cta">Get Started</button>
</nav>
<div class="hero"><h1>Glassmorphism<br>Navbar</h1></div>
<script>
window.addEventListener('scroll',()=>{
  document.getElementById('nav').classList.toggle('scrolled',window.scrollY>20)
})
</script>
</body></html>`,
    code: `// Glassmorphism Navbar — Next.js Component
'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function GlassNavbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={\`fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-3xl
      px-6 py-3 rounded-2xl flex items-center justify-between z-50
      border transition-all duration-300
      backdrop-blur-xl
      \${scrolled
        ? 'bg-black/80 border-purple-500/30 shadow-[0_0_30px_rgba(124,92,252,0.15)]'
        : 'bg-white/5 border-white/10'
      }\`}>
      <div className="text-white font-extrabold tracking-tight">
        Animation<span className="text-purple-400">AI</span>
      </div>
      <div className="flex gap-6">
        {['Components','Categories','Docs'].map(l => (
          <Link key={l} href="#"
            className="text-white/60 hover:text-white text-sm transition-colors">
            {l}
          </Link>
        ))}
      </div>
      <button className="bg-purple-600 text-white text-sm font-semibold
        px-4 py-2 rounded-lg hover:bg-purple-500 transition-colors">
        Get Started
      </button>
    </nav>
  )
}`,
    prompt: `Build a glassmorphism navbar in Next.js + Tailwind:
• Fixed position, centered, 90% width, max 800px
• backdrop-blur-xl with bg-white/5 default state
• On scroll: bg switches to bg-black/80, purple border glow appears
• Rounded-2xl pill shape, floats above content
• Logo + nav links + CTA button layout
• Smooth transition-all duration-300 on scroll change
• useEffect scroll listener with cleanup`,
  },

  {
    slug: 'magnetic-navbar',
    title: 'Magnetic Navbar',
    category: 'navbars',
    tag: 'css',
    description: 'Minimal dark navbar with animated underline on hover and active indicator.',
    previewCode: `<!DOCTYPE html><html><head><style>
*{margin:0;padding:0;box-sizing:border-box}
body{background:#0a0a0b;font-family:sans-serif}
nav{display:flex;align-items:center;justify-content:space-between;padding:16px 32px;border-bottom:1px solid rgba(255,255,255,0.07)}
.logo{font-size:15px;font-weight:800;color:#fff}.logo span{color:#a78bfa}
.links{display:flex;gap:4px}
.link{position:relative;color:rgba(255,255,255,0.5);text-decoration:none;font-size:13px;padding:6px 12px;border-radius:8px;transition:color 0.2s,background 0.2s}
.link:hover{color:#fff;background:rgba(255,255,255,0.06)}
.link.active{color:#fff}
.link.active::after{content:'';position:absolute;bottom:2px;left:50%;transform:translateX(-50%);width:4px;height:4px;border-radius:50%;background:#7c5cfc}
.right{display:flex;gap:8px;align-items:center}
.badge{background:rgba(124,92,252,0.15);color:#a78bfa;font-size:11px;padding:2px 8px;border-radius:99px;border:1px solid rgba(124,92,252,0.3)}
</style></head><body>
<nav>
  <div class="logo">Animation<span>AI</span></div>
  <div class="links">
    <a class="link active" href="#">Home</a>
    <a class="link" href="#">Components</a>
    <a class="link" href="#">Categories</a>
    <a class="link" href="#">Docs</a>
  </div>
  <div class="right">
    <span class="badge">Beta</span>
    <button style="background:#7c5cfc;color:#fff;border:none;border-radius:8px;padding:7px 14px;font-size:12px;font-weight:600;cursor:pointer">Submit</button>
  </div>
</nav>
</body></html>`,
    code: `// Minimal Navbar — Next.js Component
'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = ['Home','Components','Categories','Docs']

export default function MinimalNavbar() {
  const pathname = usePathname()
  return (
    <nav className="flex items-center justify-between px-8 py-4
      border-b border-white/[0.07] bg-[#0a0a0b]">
      <div className="text-white font-extrabold text-sm tracking-tight">
        Animation<span className="text-purple-400">AI</span>
      </div>
      <div className="flex gap-1">
        {links.map(l => (
          <Link key={l} href="/"
            className="relative text-white/50 hover:text-white text-sm
              px-3 py-1.5 rounded-lg hover:bg-white/[0.06] transition-all
              data-[active=true]:text-white">
            {l}
            {l === 'Home' && (
              <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2
                w-1 h-1 rounded-full bg-purple-500" />
            )}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <span className="text-xs text-purple-400 bg-purple-500/10
          border border-purple-500/30 px-2 py-0.5 rounded-full">Beta</span>
        <button className="bg-purple-600 hover:bg-purple-500 text-white
          text-xs font-semibold px-3.5 py-1.5 rounded-lg transition-colors">
          Submit
        </button>
      </div>
    </nav>
  )
}`,
    prompt: `Minimal dark navbar with active dot indicator:
• Dark bg #0a0a0b, bottom border rgba(255,255,255,0.07)
• Logo left, nav links center, badge+CTA right
• Active link has small dot below using ::after pseudo-element
• Hover: bg-white/6, color white
• Beta badge: purple tinted pill with border
• usePathname for active state in Next.js`,
  },

  // ─────────────────────────────────────────
  // FOOTERS
  // ─────────────────────────────────────────
  {
    slug: 'glow-footer',
    title: 'Glow Footer',
    category: 'footers',
    tag: 'css',
    description: 'Dark footer with radial glow, grid columns, and gradient top border.',
    featured: false,
    previewCode: `<!DOCTYPE html><html><head><style>
*{margin:0;padding:0;box-sizing:border-box}
body{background:#0a0a0b;font-family:sans-serif;display:flex;flex-direction:column;min-height:100vh}
main{flex:1;display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,0.2);font-size:14px}
footer{position:relative;border-top:1px solid rgba(255,255,255,0.07);padding:48px 40px 24px;overflow:hidden}
.glow{position:absolute;top:-60px;left:50%;transform:translateX(-50%);width:400px;height:200px;background:radial-gradient(ellipse,rgba(124,92,252,0.2) 0%,transparent 70%);pointer-events:none}
.grid{display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:40px;margin-bottom:40px}
.brand p{color:rgba(255,255,255,0.4);font-size:13px;line-height:1.7;margin-top:8px;max-width:220px}
.logo{font-size:15px;font-weight:800;color:#fff}.logo span{color:#a78bfa}
h4{font-size:12px;font-weight:600;color:rgba(255,255,255,0.3);letter-spacing:0.08em;text-transform:uppercase;margin-bottom:12px}
a{display:block;color:rgba(255,255,255,0.5);text-decoration:none;font-size:13px;margin-bottom:8px;transition:color 0.2s}
a:hover{color:#fff}
.bottom{display:flex;justify-content:space-between;align-items:center;padding-top:24px;border-top:1px solid rgba(255,255,255,0.05)}
.copy{font-size:12px;color:rgba(255,255,255,0.3)}
</style></head><body>
<main>Your content here</main>
<footer>
  <div class="glow"></div>
  <div class="grid">
    <div class="brand">
      <div class="logo">Animation<span>AI</span></div>
      <p>The best collection of UI animation components for modern web apps.</p>
    </div>
    <div><h4>Product</h4><a href="#">Components</a><a href="#">Categories</a><a href="#">Submit</a></div>
    <div><h4>Resources</h4><a href="#">Docs</a><a href="#">Blog</a><a href="#">Changelog</a></div>
    <div><h4>Company</h4><a href="#">About</a><a href="#">Twitter</a><a href="#">GitHub</a></div>
  </div>
  <div class="bottom">
    <div class="copy">© 2024 Animation AI. All rights reserved.</div>
    <div class="copy">Made with ♥ by Jay</div>
  </div>
</footer>
</body></html>`,
    code: `// Glow Footer — Next.js Component
export default function GlowFooter() {
  const cols = [
    { title: 'Product',   links: ['Components','Categories','Submit','Pricing'] },
    { title: 'Resources', links: ['Docs','Blog','Changelog','API'] },
    { title: 'Company',   links: ['About','Twitter','GitHub','Contact'] },
  ]
  return (
    <footer className="relative border-t border-white/[0.07]
      px-10 pt-12 pb-6 overflow-hidden bg-[#0a0a0b]">
      {/* Glow */}
      <div className="absolute -top-16 left-1/2 -translate-x-1/2
        w-96 h-48 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="grid grid-cols-4 gap-10 mb-10 relative">
        {/* Brand */}
        <div>
          <div className="text-white font-extrabold text-sm mb-2">
            Animation<span className="text-purple-400">AI</span>
          </div>
          <p className="text-white/40 text-xs leading-relaxed max-w-[200px]">
            The best collection of UI animation components for modern web apps.
          </p>
        </div>
        {/* Link Cols */}
        {cols.map(col => (
          <div key={col.title}>
            <h4 className="text-white/30 text-[11px] font-semibold
              uppercase tracking-widest mb-3">{col.title}</h4>
            {col.links.map(l => (
              <a key={l} href="#"
                className="block text-white/50 hover:text-white
                  text-xs mb-2 transition-colors">{l}</a>
            ))}
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center pt-6
        border-t border-white/[0.05] text-white/30 text-xs">
        <span>© 2024 Animation AI. All rights reserved.</span>
        <span>Made with ♥ by Jay</span>
      </div>
    </footer>
  )
}`,
    prompt: `Dark footer with purple radial glow from top:
• 4-column grid: brand description + 3 link columns
• Radial glow: absolute element, blur-3xl, purple, behind top border
• Top border with gradient: transparent → purple → transparent (optional)
• Section headings: uppercase, tracking-wide, muted white
• Links: white/50, hover white, text-xs
• Bottom bar: border-top, copyright left, credit right
• Full dark bg #0a0a0b`,
  },

  // ─────────────────────────────────────────
  // HEROES
  // ─────────────────────────────────────────
  {
    slug: 'particle-hero',
    title: 'Particle Network Hero',
    category: 'heroes',
    tag: 'canvas',
    description: 'Full-screen hero with connected particle network and animated headline.',
    featured: true,
    previewCode: `<!DOCTYPE html><html><head><style>
*{margin:0;padding:0;box-sizing:border-box}
body{background:#050510;overflow:hidden;height:100vh;font-family:sans-serif}
canvas{position:absolute;inset:0}
.hero{position:relative;z-index:1;height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:20px}
.badge{display:inline-flex;align-items:center;gap:6px;background:rgba(124,92,252,0.12);border:1px solid rgba(124,92,252,0.3);border-radius:99px;padding:4px 12px;font-size:11px;color:#a78bfa;margin-bottom:20px;letter-spacing:0.05em}
h1{font-size:clamp(32px,6vw,64px);font-weight:800;color:#fff;letter-spacing:-2px;line-height:1.1;margin-bottom:16px}
h1 span{background:linear-gradient(135deg,#a78bfa,#22d3ee);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
p{color:rgba(255,255,255,0.5);font-size:16px;max-width:480px;line-height:1.7;margin-bottom:32px}
.btns{display:flex;gap:12px}
.btn-p{background:#7c5cfc;color:#fff;border:none;padding:12px 24px;border-radius:10px;font-weight:600;cursor:pointer;font-size:14px}
.btn-s{background:rgba(255,255,255,0.06);color:#fff;border:1px solid rgba(255,255,255,0.12);padding:12px 24px;border-radius:10px;font-weight:600;cursor:pointer;font-size:14px}
</style></head><body>
<canvas id="c"></canvas>
<div class="hero">
  <div class="badge">✦ Open Source Animation Library</div>
  <h1>Build stunning<br><span>animations</span><br>instantly</h1>
  <p>Copy-paste UI animations with code + AI prompts. Works with React, Vue, and vanilla JS.</p>
  <div class="btns">
    <button class="btn-p">Browse Components</button>
    <button class="btn-s">View on GitHub</button>
  </div>
</div>
<script>
const c=document.getElementById('c'),ctx=c.getContext('2d');
c.width=window.innerWidth;c.height=window.innerHeight;
const pts=Array.from({length:80},()=>({x:Math.random()*c.width,y:Math.random()*c.height,vx:(Math.random()-.5)*.4,vy:(Math.random()-.5)*.4,r:Math.random()*1.5+.5}));
function draw(){
  ctx.clearRect(0,0,c.width,c.height);
  pts.forEach(p=>{
    p.x+=p.vx;p.y+=p.vy;
    if(p.x<0)p.x=c.width;if(p.x>c.width)p.x=0;
    if(p.y<0)p.y=c.height;if(p.y>c.height)p.y=0;
    ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fillStyle='rgba(167,139,250,0.6)';ctx.fill();
  });
  for(let i=0;i<pts.length;i++)for(let j=i+1;j<pts.length;j++){
    const dx=pts[i].x-pts[j].x,dy=pts[i].y-pts[j].y,d=Math.sqrt(dx*dx+dy*dy);
    if(d<100){ctx.beginPath();ctx.moveTo(pts[i].x,pts[i].y);ctx.lineTo(pts[j].x,pts[j].y);ctx.strokeStyle='rgba(124,92,252,'+(1-d/100)*.15+')';ctx.stroke();}
  }
  requestAnimationFrame(draw);
}
draw();
</script>
</body></html>`,
    code: `// Particle Network Hero — React Component
'use client'
import { useEffect, useRef } from 'react'

export default function ParticleHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const c = canvasRef.current!
    const ctx = c.getContext('2d')!
    c.width = window.innerWidth
    c.height = window.innerHeight

    const pts = Array.from({ length: 80 }, () => ({
      x: Math.random() * c.width,
      y: Math.random() * c.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.5 + 0.5,
    }))

    let rafId: number
    function draw() {
      ctx.clearRect(0, 0, c.width, c.height)
      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0) p.x = c.width
        if (p.x > c.width) p.x = 0
        if (p.y < 0) p.y = c.height
        if (p.y > c.height) p.y = 0
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(167,139,250,0.6)'
        ctx.fill()
      })
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x
          const dy = pts[i].y - pts[j].y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < 100) {
            ctx.beginPath()
            ctx.moveTo(pts[i].x, pts[i].y)
            ctx.lineTo(pts[j].x, pts[j].y)
            ctx.strokeStyle = \`rgba(124,92,252,\${(1 - d / 100) * 0.15})\`
            ctx.stroke()
          }
        }
      }
      rafId = requestAnimationFrame(draw)
    }
    draw()
    return () => cancelAnimationFrame(rafId)
  }, [])

  return (
    <section className="relative h-screen bg-[#050510] overflow-hidden
      flex flex-col items-center justify-center text-center px-6">
      <canvas ref={canvasRef} className="absolute inset-0" />
      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 bg-purple-500/10
          border border-purple-500/30 rounded-full px-3 py-1 text-xs
          text-purple-300 mb-5 tracking-wide">
          ✦ Open Source Animation Library
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-white
          tracking-tight leading-tight mb-4">
          Build stunning<br />
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400
            bg-clip-text text-transparent">animations</span><br />
          instantly
        </h1>
        <p className="text-white/50 text-base max-w-md mx-auto
          leading-relaxed mb-8">
          Copy-paste UI animations with code + AI prompts.
        </p>
        <div className="flex gap-3 justify-center">
          <button className="bg-purple-600 hover:bg-purple-500 text-white
            font-semibold px-6 py-3 rounded-xl transition-colors">
            Browse Components
          </button>
          <button className="bg-white/[0.06] hover:bg-white/10 text-white
            font-semibold px-6 py-3 rounded-xl border border-white/10
            transition-colors">
            View on GitHub
          </button>
        </div>
      </div>
    </section>
  )
}`,
    prompt: `Full-screen particle network hero section:
• Canvas background: 80 floating purple dots
• Connect dots within 100px with fading lines
• Dots wrap around edges (toroidal movement)
• Slow velocity 0.4px per frame
• Overlay: badge + large headline + subtitle + 2 CTAs
• Headline has gradient span: purple to cyan
• Cleanup requestAnimationFrame on unmount
• Responsive canvas resize on window resize`,
  },

  // ─────────────────────────────────────────
  // TEXT EFFECTS
  // ─────────────────────────────────────────
  {
    slug: 'glitch-text',
    title: 'Glitch Text',
    category: 'text-effects',
    tag: 'css',
    description: 'RGB-split glitch effect with pseudo-element clipping animation.',
    featured: true,
    previewCode: `<!DOCTYPE html><html><head><style>
*{margin:0;padding:0}body{background:#050510;display:flex;align-items:center;justify-content:center;height:100vh;font-family:sans-serif;overflow:hidden}
.glitch{font-size:clamp(40px,8vw,80px);font-weight:800;color:#fff;position:relative;letter-spacing:-2px}
.glitch::before,.glitch::after{content:attr(data-text);position:absolute;left:0;top:0;width:100%}
.glitch::before{color:#22d3ee;animation:g1 2s step-start infinite}
.glitch::after{color:#fb923c;animation:g2 3s step-start infinite}
@keyframes g1{5%,15%{clip:rect(44px,9999px,56px,0);transform:translateX(-4px)}10%,20%{clip:rect(0,0,0,0)}45%,50%{clip:rect(20px,9999px,30px,0);transform:translateX(3px)}55%{clip:rect(0,0,0,0)}80%,85%{clip:rect(60px,9999px,70px,0);transform:translateX(-2px)}90%{clip:rect(0,0,0,0)}}
@keyframes g2{20%,30%{clip:rect(10px,9999px,22px,0);transform:translateX(4px)}35%{clip:rect(0,0,0,0)}65%,70%{clip:rect(38px,9999px,50px,0);transform:translateX(-3px)}75%{clip:rect(0,0,0,0)}}
</style></head><body>
<div class="glitch" data-text="GLITCH">GLITCH</div>
</body></html>`,
    code: `/* Glitch Text — CSS */
.glitch {
  font-size: clamp(40px, 8vw, 80px);
  font-weight: 800;
  color: #ffffff;
  position: relative;
}

.glitch::before,
.glitch::after {
  content: attr(data-text);
  position: absolute;
  left: 0; top: 0;
  width: 100%;
}

.glitch::before {
  color: #22d3ee; /* cyan channel */
  animation: glitch1 2s step-start infinite;
}

.glitch::after {
  color: #fb923c; /* orange channel */
  animation: glitch2 3s step-start infinite;
}

@keyframes glitch1 {
  5%, 15% {
    clip: rect(44px, 9999px, 56px, 0);
    transform: translateX(-4px);
  }
  20% { clip: rect(0, 0, 0, 0); }
  45%, 50% {
    clip: rect(20px, 9999px, 30px, 0);
    transform: translateX(3px);
  }
  55% { clip: rect(0, 0, 0, 0); }
}

@keyframes glitch2 {
  20%, 30% {
    clip: rect(10px, 9999px, 22px, 0);
    transform: translateX(4px);
  }
  35% { clip: rect(0, 0, 0, 0); }
}

/* Usage: <div class="glitch" data-text="GLITCH">GLITCH</div> */`,
    prompt: `CSS-only RGB glitch text effect:
• Base text white, large bold font
• Two ::before/::after pseudo-elements using data-text attribute
• Cyan (#22d3ee) and orange (#fb923c) color channels
• clip: rect() creates horizontal scanning slices
• step-start timing for sharp digital glitch look
• Staggered durations: 2s and 3s for random feel
• Small translateX offsets for RGB-split displacement
• Zero JavaScript required`,
  },

  {
    slug: 'shimmer-text',
    title: 'Shimmer Text',
    category: 'text-effects',
    tag: 'css',
    description: 'Infinite horizontal shimmer across a multi-color gradient headline.',
    previewCode: `<!DOCTYPE html><html><head><style>
*{margin:0;padding:0}body{background:#050510;display:flex;align-items:center;justify-content:center;height:100vh;font-family:sans-serif}
.shimmer{font-size:clamp(32px,6vw,60px);font-weight:800;letter-spacing:-2px;background:linear-gradient(90deg,#7c5cfc,#22d3ee,#4ade80,#fb923c,#7c5cfc);background-size:400px;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;animation:shimmer 3s linear infinite}
@keyframes shimmer{0%{background-position:-400px 0}100%{background-position:400px 0}}
</style></head><body>
<div class="shimmer">Animation AI</div>
</body></html>`,
    code: `/* Shimmer Text — CSS */
.shimmer-text {
  font-size: clamp(32px, 6vw, 60px);
  font-weight: 800;
  letter-spacing: -2px;

  background: linear-gradient(
    90deg,
    #7c5cfc, #22d3ee, #4ade80, #fb923c, #7c5cfc
  );
  background-size: 400px;

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  animation: shimmer 3s linear infinite;
}

@keyframes shimmer {
  0%   { background-position: -400px 0; }
  100% { background-position:  400px 0; }
}

/* Tailwind version */
/* className="bg-gradient-to-r from-purple-500 via-cyan-400 to-green-400
   bg-[length:400px] bg-clip-text text-transparent animate-shimmer" */`,
    prompt: `Animated shimmer gradient text:
• Multi-stop gradient: purple → cyan → green → orange → purple (looping)
• background-size: 400px (wider than text for travel room)
• -webkit-background-clip: text + -webkit-text-fill-color: transparent
• background-position animates from -400px to 400px
• Duration: 3s, linear, infinite
• Works at any font size — just apply class to text element
• Tailwind: bg-gradient-to-r + bg-clip-text + text-transparent`,
  },

  // ─────────────────────────────────────────
  // BUTTONS
  // ─────────────────────────────────────────
  {
    slug: 'neon-button',
    title: 'Neon Glow Button',
    category: 'buttons',
    tag: 'css',
    description: 'Button with animated neon glow pulse and gradient border.',
    previewCode: `<!DOCTYPE html><html><head><style>
*{margin:0;padding:0}body{background:#050510;display:flex;align-items:center;justify-content:center;height:100vh;gap:20px;font-family:sans-serif;flex-wrap:wrap;padding:20px}
.btn{position:relative;background:transparent;border:none;padding:0;cursor:pointer;border-radius:12px}
.btn-inner{position:relative;background:#0a0a0b;border-radius:12px;padding:14px 28px;font-size:14px;font-weight:700;color:#fff;letter-spacing:0.02em;z-index:1}
.btn::before{content:'';position:absolute;inset:-1px;border-radius:13px;background:linear-gradient(135deg,#7c5cfc,#22d3ee,#4ade80);z-index:0;animation:border-spin 3s linear infinite}
.btn::after{content:'';position:absolute;inset:-4px;border-radius:16px;background:linear-gradient(135deg,#7c5cfc,#22d3ee,#4ade80);filter:blur(12px);opacity:0;z-index:-1;transition:opacity 0.3s;animation:glow-pulse 2s ease-in-out infinite}
.btn:hover::after{opacity:0.6}
@keyframes border-spin{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}
@keyframes glow-pulse{0%,100%{opacity:0.2}50%{opacity:0.5}}
.btn-solid{background:linear-gradient(135deg,#7c5cfc,#a78bfa);border:none;padding:14px 28px;font-size:14px;font-weight:700;color:#fff;border-radius:12px;cursor:pointer;position:relative;overflow:hidden}
.btn-solid::after{content:'';position:absolute;inset:0;background:white;opacity:0;transition:opacity 0.2s}
.btn-solid:hover::after{opacity:0.1}
.btn-ghost{background:rgba(124,92,252,0.08);border:1px solid rgba(124,92,252,0.3);padding:14px 28px;font-size:14px;font-weight:700;color:#a78bfa;border-radius:12px;cursor:pointer;transition:all 0.2s}
.btn-ghost:hover{background:rgba(124,92,252,0.15);border-color:rgba(124,92,252,0.6)}
</style></head><body>
<div class="btn"><div class="btn-inner">Neon Border</div></div>
<button class="btn-solid">Gradient Fill</button>
<button class="btn-ghost">Ghost Button</button>
</body></html>`,
    code: `/* Neon Glow Button — CSS */

/* Gradient border trick using ::before */
.btn-neon {
  position: relative;
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  border-radius: 12px;
}

.btn-neon-inner {
  position: relative;
  background: #0a0a0b;
  border-radius: 12px;
  padding: 14px 28px;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  z-index: 1;
}

/* Gradient border */
.btn-neon::before {
  content: '';
  position: absolute;
  inset: -1px;
  border-radius: 13px;
  background: linear-gradient(135deg, #7c5cfc, #22d3ee, #4ade80);
  z-index: 0;
}

/* Glow on hover */
.btn-neon::after {
  content: '';
  position: absolute;
  inset: -4px;
  border-radius: 16px;
  background: linear-gradient(135deg, #7c5cfc, #22d3ee);
  filter: blur(12px);
  opacity: 0;
  z-index: -1;
  transition: opacity 0.3s;
}

.btn-neon:hover::after { opacity: 0.6; }

/* Tailwind version */
/* Use ring, ring-offset, and shadow utilities for similar effect */`,
    prompt: `Neon glow button with gradient border:
• Gradient border: use ::before pseudo-element inset -1px with gradient bg
• Inner button: dark bg #0a0a0b, rounded-xl, sits on top with z-index
• Glow effect: ::after with blur(12px) gradient, opacity 0 → 0.6 on hover
• Three variants: neon-border, solid-fill, ghost
• Solid: linear-gradient fill with white overlay on hover (opacity trick)
• Ghost: transparent bg with purple border, hover increases saturation`,
  },

  // ─────────────────────────────────────────
  // LOADERS
  // ─────────────────────────────────────────
  {
    slug: 'orbit-loader',
    title: 'Orbit Loader',
    category: 'loaders',
    tag: 'css',
    description: 'Multi-ring orbital loader with glowing planets at different speeds.',
    previewCode: `<!DOCTYPE html><html><head><style>
*{margin:0;padding:0}body{background:#050510;display:flex;align-items:center;justify-content:center;height:100vh;gap:60px}
.orbit{position:relative;width:120px;height:120px}
.core{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:16px;height:16px;border-radius:50%;background:#a78bfa;box-shadow:0 0 20px #a78bfa}
.track{position:absolute;left:50%;top:50%;border-radius:50%;border:1px solid rgba(255,255,255,0.07)}
.t1{width:60px;height:60px;margin:-30px}
.t2{width:90px;height:90px;margin:-45px}
.t3{width:120px;height:120px;margin:-60px}
.planet{position:absolute;left:50%;top:50%;border-radius:50%;width:8px;height:8px;margin:-4px}
.p1{background:#22d3ee;box-shadow:0 0 10px #22d3ee;animation:orb 2s linear infinite}
.p2{background:#fb923c;box-shadow:0 0 10px #fb923c;animation:orb 4s linear infinite;width:6px;height:6px;margin:-3px}
.p3{background:#4ade80;box-shadow:0 0 10px #4ade80;animation:orb 6s linear infinite;width:5px;height:5px;margin:-2.5px}
@keyframes orb{from{transform:rotate(0deg) translateX(30px) rotate(0deg)}to{transform:rotate(360deg) translateX(30px) rotate(-360deg)}}
.p2{--r:45px}@keyframes orb2{from{transform:rotate(120deg) translateX(var(--r)) rotate(-120deg)}to{transform:rotate(480deg) translateX(var(--r)) rotate(-480deg)}}
.p2{animation:orb2 4s linear infinite}
@keyframes orb3{from{transform:rotate(240deg) translateX(60px) rotate(-240deg)}to{transform:rotate(600deg) translateX(60px) rotate(-600deg)}}
.p3{animation:orb3 6s linear infinite}
</style></head><body>
<div class="orbit">
  <div class="track t1"></div><div class="track t2"></div><div class="track t3"></div>
  <div class="core"></div>
  <div class="planet p1"></div><div class="planet p2"></div><div class="planet p3"></div>
</div>
</body></html>`,
    code: `/* Orbit Loader — CSS */
.orbit-loader { position: relative; width: 120px; height: 120px; }

.orbit-core {
  position: absolute;
  left: 50%; top: 50%;
  transform: translate(-50%, -50%);
  width: 16px; height: 16px;
  border-radius: 50%;
  background: #a78bfa;
  box-shadow: 0 0 20px #a78bfa;
}

.orbit-track {
  position: absolute;
  left: 50%; top: 50%;
  border-radius: 50%;
  border: 1px solid rgba(255,255,255,0.07);
}
.t1 { width: 60px;  height: 60px;  margin: -30px; }
.t2 { width: 90px;  height: 90px;  margin: -45px; }
.t3 { width: 120px; height: 120px; margin: -60px; }

.planet {
  position: absolute;
  left: 50%; top: 50%;
  border-radius: 50%;
}

/* The orbit trick: rotate → translateX → counter-rotate */
@keyframes orbit1 {
  from { transform: rotate(0deg)   translateX(30px) rotate(0deg); }
  to   { transform: rotate(360deg) translateX(30px) rotate(-360deg); }
}
@keyframes orbit2 {
  from { transform: rotate(120deg) translateX(45px) rotate(-120deg); }
  to   { transform: rotate(480deg) translateX(45px) rotate(-480deg); }
}
@keyframes orbit3 {
  from { transform: rotate(240deg) translateX(60px) rotate(-240deg); }
  to   { transform: rotate(600deg) translateX(60px) rotate(-600deg); }
}`,
    prompt: `Multi-ring orbital loader in pure CSS:
• Central glowing core: 16px dot with box-shadow glow (purple)
• 3 concentric track rings: faint border circles at radii 30/45/60px
• 3 planets: cyan, orange, green — each on different track
• Orbit CSS trick: rotate(Ndeg) translateX(radius) rotate(-Ndeg)
• Speeds: 2s, 4s, 6s — inner fastest
• Planets start at staggered angles: 0°, 120°, 240°
• Each planet has matching box-shadow glow color`,
  },

  // ─────────────────────────────────────────
  // CARDS
  // ─────────────────────────────────────────
  {
    slug: 'tilt-card',
    title: 'Tilt Hover Card',
    category: 'cards',
    tag: 'css',
    description: 'CSS perspective tilt card with moving light reflection on mouse move.',
    previewCode: `<!DOCTYPE html><html><head><style>
*{margin:0;padding:0;box-sizing:border-box}body{background:#0a0a0b;display:flex;align-items:center;justify-content:center;height:100vh;font-family:sans-serif;perspective:1000px}
.card{width:280px;background:#111113;border:1px solid rgba(255,255,255,0.08);border-radius:20px;padding:28px;transform-style:preserve-3d;transition:transform 0.1s;position:relative;overflow:hidden;cursor:pointer}
.shine{position:absolute;inset:0;border-radius:20px;opacity:0;transition:opacity 0.3s;pointer-events:none;background:radial-gradient(circle at 50% 50%,rgba(255,255,255,0.15),transparent 60%)}
.card:hover .shine{opacity:1}
.icon{width:48px;height:48px;border-radius:14px;background:linear-gradient(135deg,#7c5cfc,#a78bfa);display:flex;align-items:center;justify-content:center;font-size:22px;margin-bottom:16px}
h3{font-size:16px;font-weight:700;color:#fff;margin-bottom:8px}
p{font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6}
.tag{display:inline-block;margin-top:16px;font-size:11px;color:#a78bfa;background:rgba(124,92,252,0.12);border:1px solid rgba(124,92,252,0.25);border-radius:99px;padding:2px 10px}
</style></head><body>
<div class="card" id="card">
  <div class="shine" id="shine"></div>
  <div class="icon">✦</div>
  <h3>Tilt Hover Card</h3>
  <p>Move your mouse over this card to see the 3D tilt and light reflection effect.</p>
  <div class="tag">CSS + JS</div>
</div>
<script>
const card=document.getElementById('card'),shine=document.getElementById('shine');
card.addEventListener('mousemove',e=>{
  const r=card.getBoundingClientRect();
  const x=(e.clientX-r.left)/r.width-.5;
  const y=(e.clientY-r.top)/r.height-.5;
  card.style.transform='rotateY('+(x*20)+'deg) rotateX('+(-y*20)+'deg) scale(1.03)';
  shine.style.background='radial-gradient(circle at '+(e.clientX-r.left)+'px '+(e.clientY-r.top)+'px,rgba(255,255,255,0.15),transparent 60%)';
});
card.addEventListener('mouseleave',()=>{card.style.transform='';});
</script>
</body></html>`,
    code: `// Tilt Hover Card — React Component
'use client'
import { useRef, MouseEvent } from 'react'

interface TiltCardProps {
  icon?: string
  title: string
  description: string
  tag?: string
}

export default function TiltCard({ icon='✦', title, description, tag }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const shineRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current!
    const shine = shineRef.current!
    const rect = card.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    card.style.transform = \`rotateY(\${x * 20}deg) rotateX(\${-y * 20}deg) scale(1.03)\`
    shine.style.background = \`radial-gradient(circle at \${e.clientX - rect.left}px \${e.clientY - rect.top}px, rgba(255,255,255,0.15), transparent 60%)\`
  }

  const handleMouseLeave = () => {
    const card = cardRef.current!
    card.style.transform = ''
  }

  return (
    <div ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-72 bg-[#111113] border border-white/[0.08]
        rounded-2xl p-7 cursor-pointer overflow-hidden"
      style={{ perspective: '1000px', transformStyle: 'preserve-3d',
        transition: 'transform 0.1s' }}>
      <div ref={shineRef}
        className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100
          pointer-events-none transition-opacity duration-300" />
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br
        from-purple-600 to-purple-400 flex items-center justify-center
        text-xl mb-4">{icon}</div>
      <h3 className="text-white font-bold text-base mb-2">{title}</h3>
      <p className="text-white/40 text-xs leading-relaxed">{description}</p>
      {tag && (
        <span className="inline-block mt-4 text-xs text-purple-400
          bg-purple-500/10 border border-purple-500/25 rounded-full px-2.5 py-0.5">
          {tag}
        </span>
      )}
    </div>
  )
}`,
    prompt: `3D tilt card with moving light reflection:
• CSS perspective: 1000px on parent, transform-style: preserve-3d on card
• onMouseMove: calculate normalized x/y (-0.5 to 0.5) from mouse position
• Apply rotateY(x*20deg) rotateX(-y*20deg) scale(1.03)
• Shine overlay: radial-gradient that follows mouse cursor position
• onMouseLeave: reset transform to empty string
• transition: 0.1s for smooth but responsive feel
• Card content: icon, title, description, optional tag
• Works as reusable React component with props`,
  },

  // ─────────────────────────────────────────
  // CURSOR
  // ─────────────────────────────────────────
  {
    slug: 'spotlight-cursor',
    title: 'Spotlight Cursor',
    category: 'cursor',
    tag: 'css',
    description: 'Dark page with radial spotlight that follows the cursor revealing content.',
    previewCode: `<!DOCTYPE html><html><head><style>
*{margin:0;padding:0;box-sizing:border-box}
body{background:#050510;min-height:100vh;font-family:sans-serif;cursor:none;overflow:hidden}
.spotlight{position:fixed;inset:0;background:radial-gradient(circle 200px at 50% 50%,rgba(124,92,252,0.15) 0%,transparent 100%);pointer-events:none;transition:background 0.05s}
.cursor{position:fixed;width:20px;height:20px;border:2px solid rgba(167,139,250,0.8);border-radius:50%;transform:translate(-50%,-50%);pointer-events:none;transition:transform 0.15s,width 0.2s,height 0.2s}
.content{display:flex;align-items:center;justify-content:center;height:100vh;flex-direction:column;gap:16px;color:rgba(255,255,255,0.15);text-align:center;padding:40px}
h1{font-size:48px;font-weight:800;letter-spacing:-2px}
p{font-size:14px;max-width:400px;line-height:1.7}
</style></head><body>
<div class="spotlight" id="sp"></div>
<div class="cursor" id="cur"></div>
<div class="content"><h1>Move your cursor</h1><p>The spotlight follows your cursor revealing the content underneath. Hover over elements to interact.</p></div>
<script>
const sp=document.getElementById('sp'),cur=document.getElementById('cur');
document.addEventListener('mousemove',e=>{
  sp.style.background='radial-gradient(circle 250px at '+e.clientX+'px '+e.clientY+'px,rgba(124,92,252,0.2) 0%,transparent 100%)';
  cur.style.left=e.clientX+'px';cur.style.top=e.clientY+'px';
});
</script>
</body></html>`,
    code: `// Spotlight Cursor — React Component
'use client'
import { useEffect, useState } from 'react'

export default function SpotlightCursor() {
  const [pos, setPos] = useState({ x: -999, y: -999 })

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <>
      {/* Spotlight overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-all duration-75"
        style={{
          background: \`radial-gradient(circle 250px at \${pos.x}px \${pos.y}px,
            rgba(124,92,252,0.15) 0%, transparent 100%)\`,
        }}
      />
      {/* Custom cursor ring */}
      <div
        className="pointer-events-none fixed z-40 w-5 h-5
          border-2 border-purple-400/80 rounded-full
          -translate-x-1/2 -translate-y-1/2 transition-all duration-150"
        style={{ left: pos.x, top: pos.y }}
      />
    </>
  )
}

// Add to layout.tsx:
// <SpotlightCursor />
// Add cursor-none to body`,
    prompt: `Spotlight cursor that reveals content:
• Fixed radial-gradient overlay on full screen
• gradient center follows mouse position (clientX, clientY)
• circle radius: 250px, color: rgba(124,92,252,0.15) fading to transparent
• Custom cursor: 20px ring, border-2 purple, rounded-full
• cursor: none on body to hide default cursor
• useState for mouse position, useEffect for event listener
• Cleanup on unmount
• Add to layout so it works on all pages`,
  },
]

async function seed() {
  await mongoose.connect(MONGODB_URI)
  console.log('✅ Connected to MongoDB')

  await (mongoose.models.Animation || mongoose.model('Animation',
    new mongoose.Schema({
      slug: { type: String, unique: true },
      title: String, category: String, tag: String,
      description: String, previewCode: String, code: String,
      prompt: String, likes: { type: Number, default: 0 },
      author: { type: String, default: 'Animation AI' },
      featured: { type: Boolean, default: false },
    }, { timestamps: true })
  )).deleteMany({})
  console.log('🗑️  Cleared existing animations')

  await mongoose.model('Animation').insertMany(animations)
  console.log(`🌱 Seeded ${animations.length} animations!`)

  await mongoose.disconnect()
  console.log('✅ Done!')
}

seed().catch(console.error)
