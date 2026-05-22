export const HEROES_DATA = [ { "slug": "particle-hero", "title": "Particle Network Hero", "category": "heroes", "tag": "canvas", "description": "Full-screen hero with connected particle network and animated headline.", "previewCode": "<!DOCTYPE html><html><head><style>\n*{margin:0;padding:0;box-sizing:border-box}\nbody{background:#050510;overflow:hidden;height:100vh;font-family:sans-serif}\ncanvas{position:absolute;inset:0}\n.hero{position:relative;z-index:1;height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:20px}\n.badge{display:inline-flex;align-items:center;gap:6px;background:rgba(124,92,252,0.12);border:1px solid rgba(124,92,252,0.3);border-radius:99px;padding:4px 12px;font-size:11px;color:#a78bfa;margin-bottom:20px;letter-spacing:0.05em}\nh1{font-size:clamp(32px,6vw,64px);font-weight:800;color:#fff;letter-spacing:-2px;line-height:1.1;margin-bottom:16px}\nh1 span{background:linear-gradient(135deg,#a78bfa,#22d3ee);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}\np{color:rgba(255,255,255,0.5);font-size:16px;max-width:480px;line-height:1.7;margin-bottom:32px}\n.btns{display:flex;gap:12px}\n.btn-p{background:#7c5cfc;color:#fff;border:none;padding:12px 24px;border-radius:10px;font-weight:600;cursor:pointer;font-size:14px}\n.btn-s{background:rgba(255,255,255,0.06);color:#fff;border:1px solid rgba(255,255,255,0.12);padding:12px 24px;border-radius:10px;font-weight:600;cursor:pointer;font-size:14px}\n</style></head><body>\n<canvas id=\"c\"></canvas>\n<div class=\"hero\">\n <div class=\"badge\">• Open Source Animation Library</div>\n <h1>Build stunning<br><span>animations</span><br>instantly</h1>\n <p>Copy-paste UI animations with code + AI prompts. Works with React, Vue, and vanilla JS.</p>\n <div class=\"btns\">\n <button class=\"btn-p\">Browse Components</button>\n <button class=\"btn-s\">View on GitHub</button>\n </div>\n</div>\n<script>\nconst c=document.getElementById('c'),ctx=c.getContext('2d');\nc.width=window.innerWidth;c.height=window.innerHeight;\nconst pts=Array.from({length:80},()=>({x:Math.random()*c.width,y:Math.random()*c.height,vx:(Math.random()-.5)*.4,vy:(Math.random()-.5)*.4,r:Math.random()*1.5+.5}));\nfunction draw(){\n ctx.clearRect(0,0,c.width,c.height);\n pts.forEach(p=>{\n p.x+=p.vx;p.y+=p.vy;\n if(p.x<0)p.x=c.width;if(p.x>c.width)p.x=0;\n if(p.y<0)p.y=c.height;if(p.y>c.height)p.y=0;\n ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);\n ctx.fillStyle='rgba(167,139,250,0.6)';ctx.fill();\n });\n for(let i=0;i<pts.length;i++)for(let j=i+1;j<pts.length;j++){\n const dx=pts[i].x-pts[j].x,dy=pts[i].y-pts[j].y,d=Math.sqrt(dx*dx+dy*dy);\n if(d<100){ctx.beginPath();ctx.moveTo(pts[i].x,pts[i].y);ctx.lineTo(pts[j].x,pts[j].y);ctx.strokeStyle='rgba(124,92,252,'+(1-d/100)*.15+')';ctx.stroke();}\n }\n requestAnimationFrame(draw);\n}\ndraw();\n</script>\n</body></html>", "code": "// Particle Network Hero • React Component\n'use client'\nimport { useEffect, useRef } from 'react'\n\nexport default function ParticleHero() {\n const canvasRef = useRef<HTMLCanvasElement>(null)\n\n useEffect(() => {\n const c = canvasRef.current!\n const ctx = c.getContext('2d')!\n c.width = window.innerWidth\n c.height = window.innerHeight\n\n const pts = Array.from({ length: 80 }, () => ({\n x: Math.random() * c.width,\n y: Math.random() * c.height,\n vx: (Math.random() - 0.5) * 0.4,\n vy: (Math.random() - 0.5) * 0.4,\n r: Math.random() * 1.5 + 0.5,\n }))\n\n let rafId: number\n function draw() {\n ctx.clearRect(0, 0, c.width, c.height)\n pts.forEach(p => {\n p.x += p.vx; p.y += p.vy\n if (p.x < 0) p.x = c.width\n if (p.x > c.width) p.x = 0\n if (p.y < 0) p.y = c.height\n if (p.y > c.height) p.y = 0\n ctx.beginPath()\n ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)\n ctx.fillStyle = 'rgba(167,139,250,0.6)'\n ctx.fill()\n })\n for (let i = 0; i < pts.length; i++) {\n for (let j = i + 1; j < pts.length; j++) {\n const dx = pts[i].x - pts[j].x\n const dy = pts[i].y - pts[j].y\n const d = Math.sqrt(dx * dx + dy * dy)\n if (d < 100) {\n ctx.beginPath()\n ctx.moveTo(pts[i].x, pts[i].y)\n ctx.lineTo(pts[j].x, pts[j].y)\n ctx.strokeStyle = `rgba(124,92,252,${(1 - d / 100) * 0.15})`\n ctx.stroke()\n }\n }\n }\n rafId = requestAnimationFrame(draw)\n }\n draw()\n return () => cancelAnimationFrame(rafId)\n }, [])\n\n return (\n <section className=\"relative h-screen bg-[#050510] overflow-hidden\n flex flex-col items-center justify-center text-center px-6\">\n <canvas ref={canvasRef} className=\"absolute inset-0\" />\n <div className=\"relative z-10\">\n <div className=\"inline-flex items-center gap-2 bg-purple-500/10\n border border-purple-500/30 rounded-full px-3 py-1 text-xs\n text-purple-300 mb-5 tracking-wide\">\n • Open Source Animation Library\n </div>\n <h1 className=\"text-5xl md:text-7xl font-extrabold text-white\n tracking-tight leading-tight mb-4\">\n Build stunning<br />\n <span className=\"bg-gradient-to-r from-purple-400 to-cyan-400\n bg-clip-text text-transparent\">animations</span><br />\n instantly\n </h1>\n <p className=\"text-white/50 text-base max-w-md mx-auto\n leading-relaxed mb-8\">\n Copy-paste UI animations with code + AI prompts.\n </p>\n <div className=\"flex gap-3 justify-center\">\n <button className=\"bg-purple-600 hover:bg-purple-500 text-white\n font-semibold px-6 py-3 rounded-xl transition-colors\">\n Browse Components\n </button>\n <button className=\"bg-white/[0.06] hover:bg-white/10 text-white\n font-semibold px-6 py-3 rounded-xl border border-white/10\n transition-colors\">\n View on GitHub\n </button>\n </div>\n </div>\n </section>\n )\n}", "prompt": "Full-screen particle network hero section:\n• Canvas background: 80 floating purple dots\n• Connect dots within 100px with fading lines\n• Dots wrap around edges (toroidal movement)\n• Slow velocity 0.4px per frame\n• Overlay: badge + large headline + subtitle + 2 CTAs\n• Headline has gradient span: purple to cyan\n• Cleanup requestAnimationFrame on unmount\n• Responsive canvas resize on window resize", "likes": 0, "author": "Animation AI", "featured": true, "createdAt": "2026-05-10T13:19:37.564Z", "updatedAt": "2026-05-10T13:19:37.564Z" }
,
{
  _id: 'hero-spline-neural-launchpad',
  slug: 'spline-neural-launchpad-hero',
  title: 'Spline Neural Launchpad Hero',
  category: 'heroes',
  tag: 'react',
  description:
    'A cinematic Spline hero wrapper with cursor-reactive spotlights, floating telemetry cards, and a premium sci-fi launch layout.',
  previewCode: `<!DOCTYPE html><html><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/><style>
*{box-sizing:border-box;margin:0;padding:0}body{font-family:Arial,sans-serif;background:#04070d;overflow:hidden}
.hero{position:relative;min-height:100vh;display:grid;grid-template-columns:1.05fr .95fr;gap:32px;padding:40px;background:
radial-gradient(circle at var(--mx,20%) var(--my,18%),rgba(102,210,255,.16),transparent 24%),
radial-gradient(circle at 78% 22%,rgba(255,142,92,.12),transparent 18%),
linear-gradient(135deg,#04070d 0%,#07111d 52%,#030507 100%)}
.hero:before{content:'';position:absolute;inset:0;background:
linear-gradient(rgba(255,255,255,.035) 1px,transparent 1px),
linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px);background-size:44px 44px;mask-image:linear-gradient(to bottom,rgba(0,0,0,.9),transparent 82%);opacity:.45}
.copy,.stage{position:relative;z-index:2}
.copy{display:flex;flex-direction:column;justify-content:center;max-width:620px}
.eyebrow{display:inline-flex;align-items:center;gap:10px;width:max-content;padding:10px 14px;border-radius:999px;border:1px solid rgba(127,224,255,.22);background:rgba(8,18,29,.62);color:#b8f6ff;font-size:11px;letter-spacing:.22em;text-transform:uppercase;backdrop-filter:blur(14px)}
.dot{width:8px;height:8px;border-radius:50%;background:#7af6ff;box-shadow:0 0 18px #7af6ff}
h1{margin-top:22px;font-size:clamp(52px,7vw,96px);line-height:.92;font-weight:900;letter-spacing:-.06em;color:#f8fdff}
h1 span{display:block;background:linear-gradient(135deg,#fff 0%,#93f7ff 28%,#ffb48d 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
p{margin-top:20px;max-width:520px;color:rgba(232,245,255,.72);font-size:18px;line-height:1.7}
.cta{display:flex;gap:14px;margin-top:28px;flex-wrap:wrap}
.btn{padding:14px 18px;border-radius:18px;border:1px solid rgba(255,255,255,.12);font-weight:700;font-size:14px;cursor:pointer}
.btn.primary{background:linear-gradient(135deg,#8cefff,#ff9e78);color:#041017;border:none;box-shadow:0 18px 40px rgba(102,210,255,.18)}
.btn.secondary{background:rgba(255,255,255,.05);color:#f4fbff;backdrop-filter:blur(12px)}
.meta{display:flex;gap:16px;flex-wrap:wrap;margin-top:28px}
.chip{min-width:150px;padding:14px 16px;border-radius:22px;background:rgba(5,13,22,.64);border:1px solid rgba(255,255,255,.08);backdrop-filter:blur(12px)}
.chip b{display:block;font-size:23px;color:#fff}
.chip span{display:block;margin-top:6px;font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:rgba(182,236,255,.58)}
.stage{display:flex;align-items:center;justify-content:center}
.scene{position:relative;width:min(640px,100%);aspect-ratio:1/1.02;border-radius:36px;overflow:hidden;border:1px solid rgba(255,255,255,.1);background:
radial-gradient(circle at 24% 18%,rgba(255,255,255,.28),transparent 18%),
radial-gradient(circle at 50% 45%,rgba(110,228,255,.12),transparent 28%),
linear-gradient(180deg,#090e16 0%,#04070b 100%);
box-shadow:0 30px 90px rgba(0,0,0,.45),inset 0 1px 0 rgba(255,255,255,.08)}
.scene:before{content:'';position:absolute;inset:-20%;background:conic-gradient(from 0deg,transparent,rgba(131,240,255,.12),transparent 36%,rgba(255,170,122,.12),transparent 68%);animation:spin 12s linear infinite}
.scene:after{content:'';position:absolute;inset:0;background:linear-gradient(180deg,rgba(255,255,255,.04),transparent 20%,transparent 72%,rgba(255,255,255,.03));pointer-events:none}
.robot{position:absolute;left:50%;bottom:54px;width:230px;height:410px;transform:translateX(-50%) rotateY(calc((var(--rx,0) - .5)*24deg)) rotateX(calc((.5 - var(--ry,0))*10deg));transform-style:preserve-3d}
.head{position:absolute;top:10px;left:50%;width:116px;height:126px;transform:translateX(-50%);border-radius:38px 38px 32px 32px;background:linear-gradient(165deg,#191d23 0%,#020304 48%,#181b21 100%);box-shadow:inset 0 0 26px rgba(255,255,255,.06),0 26px 40px rgba(0,0,0,.45)}
.head:before{content:'';position:absolute;left:22px;right:22px;top:26px;height:34px;border-radius:18px;background:linear-gradient(180deg,rgba(255,255,255,.14),rgba(255,255,255,.02));box-shadow:0 0 30px rgba(158,238,255,.16) inset}
.head:after{content:'';position:absolute;left:42px;top:36px;width:32px;height:16px;border-radius:999px;background:radial-gradient(circle,#fff 0%,#c9fbff 18%,#6fefff 44%,#0c1116 85%);box-shadow:0 0 26px rgba(111,239,255,.62)}
.torso{position:absolute;left:50%;top:116px;width:170px;height:194px;transform:translateX(-50%);border-radius:34% 34% 22% 22%/24% 24% 18% 18%;background:linear-gradient(180deg,#13161c 0%,#020304 52%,#171b22 100%);box-shadow:inset 0 0 30px rgba(255,255,255,.05),0 26px 50px rgba(0,0,0,.5)}
.torso:before{content:'';position:absolute;left:50%;top:54px;width:58px;height:58px;transform:translateX(-50%);border-radius:22px;background:radial-gradient(circle,#f7ffff 0%,#7cf4ff 18%,rgba(124,244,255,.1) 48%,transparent 70%);box-shadow:0 0 30px rgba(124,244,255,.45)}
.arm,.leg{position:absolute;background:linear-gradient(180deg,#1e2229,#060709 60%,#1a1d24);box-shadow:inset 0 0 18px rgba(255,255,255,.05)}
.arm{top:136px;width:50px;height:150px;border-radius:28px}.arm.left{left:20px;transform:rotate(17deg)}.arm.right{right:20px;transform:rotate(-17deg)}
.leg{bottom:0;width:56px;height:134px;border-radius:24px}.leg.left{left:66px}.leg.right{right:66px}
.halo{position:absolute;left:50%;top:74px;width:310px;height:310px;transform:translateX(-50%);border-radius:50%;border:1px solid rgba(145,242,255,.16);box-shadow:0 0 120px rgba(125,240,255,.08) inset}
.halo:before,.halo:after{content:'';position:absolute;inset:16px;border-radius:50%;border:1px dashed rgba(255,255,255,.11)}.halo:after{inset:46px;animation:spin 18s linear reverse infinite}
.hud{position:absolute;padding:14px 16px;border-radius:20px;background:rgba(4,10,18,.76);border:1px solid rgba(255,255,255,.08);backdrop-filter:blur(14px);color:#eff9ff;min-width:164px}
.hud small{display:block;color:rgba(186,231,255,.56);font-size:10px;letter-spacing:.22em;text-transform:uppercase;margin-bottom:8px}
.hud b{font-size:24px}.hud.top{top:28px;right:24px}.hud.bottom{left:24px;bottom:28px}
.scan{position:absolute;inset:0;background:linear-gradient(180deg,transparent,rgba(132,241,255,.08),transparent);transform:translateY(-100%);animation:scan 4s linear infinite}
@keyframes spin{to{transform:rotate(360deg)}}@keyframes scan{to{transform:translateY(100%)}}@media(max-width:980px){.hero{grid-template-columns:1fr;padding:24px;gap:18px}.copy{order:2}.stage{order:1}.scene{aspect-ratio:1/1.08}}
</style></head><body><section class="hero" id="hero"><div class="copy"><div class="eyebrow"><span class="dot"></span> Spline Hero System</div><h1>Launch with a <span>living 3D scene</span></h1><p>Pair your Spline canvas with premium interface chrome, reactive lighting, and dense product messaging so the scene feels like part of the experience, not a pasted embed.</p><div class="cta"><button class="btn primary">Open Launchpad</button><button class="btn secondary">View Blueprint</button></div><div class="meta"><div class="chip"><b>120 FPS</b><span>Responsive Motion</span></div><div class="chip"><b>3 Layers</b><span>HUD + Lighting + Scene</span></div><div class="chip"><b>Hover Sync</b><span>Cursor Parallax</span></div></div></div><div class="stage"><div class="scene"><div class="scan"></div><div class="halo"></div><div class="robot"><div class="head"></div><div class="torso"></div><div class="arm left"></div><div class="arm right"></div><div class="leg left"></div><div class="leg right"></div></div><div class="hud top"><small>Scene Health</small><b>98%</b><div>Render pipeline stable</div></div><div class="hud bottom"><small>Launch Mode</small><b>Adaptive</b><div>Pointer-linked cinematic shell</div></div></div></div></section><script>const hero=document.getElementById('hero');hero.addEventListener('mousemove',e=>{const r=hero.getBoundingClientRect();const x=(e.clientX-r.left)/r.width;const y=(e.clientY-r.top)/r.height;hero.style.setProperty('--mx',x*100+'%');hero.style.setProperty('--my',y*100+'%');hero.style.setProperty('--rx',x);hero.style.setProperty('--ry',y)});</script></body></html>`,
  code: `'use client'

import { Suspense, lazy, useMemo, useState } from 'react'

const Spline = lazy(() => import('@splinetool/react-spline'))

type MetricCard = {
  value: string
  label: string
}

const METRICS: MetricCard[] = [
  { value: '120 FPS', label: 'Responsive Motion' },
  { value: '3 Layers', label: 'HUD + Lighting + Scene' },
  { value: 'Hover Sync', label: 'Cursor Parallax' },
]

interface SplineNeuralLaunchpadHeroProps {
  scene: string
}

export function SplineNeuralLaunchpadHero({ scene }: SplineNeuralLaunchpadHeroProps) {
  const [pointer, setPointer] = useState({ x: 0.24, y: 0.28 })

  const sceneTransform = useMemo(() => {
    const rotateY = (pointer.x - 0.5) * 12
    const rotateX = (0.5 - pointer.y) * 8
    return \`perspective(1800px) rotateX(\${rotateX}deg) rotateY(\${rotateY}deg)\`
  }, [pointer])

  return (
    <section
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect()
        setPointer({
          x: (event.clientX - rect.left) / rect.width,
          y: (event.clientY - rect.top) / rect.height,
        })
      }}
      onMouseLeave={() => setPointer({ x: 0.24, y: 0.28 })}
      className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[#04070d] text-white"
      style={{
        backgroundImage: \`
          radial-gradient(circle at \${pointer.x * 100}% \${pointer.y * 100}%, rgba(102,210,255,0.18), transparent 24%),
          radial-gradient(circle at 78% 22%, rgba(255,142,92,0.12), transparent 18%),
          linear-gradient(135deg, #04070d 0%, #07111d 52%, #030507 100%)
        \`,
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:44px_44px] opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent_82%)]" />

      <div className="relative z-10 grid min-h-[720px] items-center gap-8 px-6 py-8 md:px-10 lg:grid-cols-[1.05fr_.95fr] lg:px-14">
        <div className="max-w-[620px]">
          <div className="inline-flex items-center gap-3 rounded-full border border-cyan-300/20 bg-slate-950/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-100 backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(122,246,255,0.9)]" />
            Spline Hero System
          </div>

          <h1 className="mt-6 text-[clamp(3.4rem,7vw,6rem)] font-black leading-[0.92] tracking-[-0.06em] text-white">
            Launch with a
            <span className="block bg-[linear-gradient(135deg,#ffffff_0%,#93f7ff_28%,#ffb48d_100%)] bg-clip-text text-transparent">
              living 3D scene
            </span>
          </h1>

          <p className="mt-5 max-w-[540px] text-[17px] leading-8 text-white/72">
            Pair your Spline canvas with premium interface chrome, reactive lighting, and dense
            product messaging so the scene feels designed into the experience instead of pasted on top.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-[18px] bg-[linear-gradient(135deg,#8cefff,#ff9e78)] px-5 py-3 text-sm font-bold text-slate-950 shadow-[0_18px_40px_rgba(102,210,255,0.18)] transition-transform duration-300 hover:-translate-y-0.5">
              Open Launchpad
            </button>
            <button className="rounded-[18px] border border-white/12 bg-white/5 px-5 py-3 text-sm font-bold text-white/90 backdrop-blur-xl transition-colors duration-300 hover:bg-white/10">
              View Blueprint
            </button>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            {METRICS.map((item) => (
              <div
                key={item.label}
                className="min-w-[150px] rounded-[22px] border border-white/8 bg-slate-950/60 px-4 py-4 backdrop-blur-xl"
              >
                <div className="text-2xl font-bold text-white">{item.value}</div>
                <div className="mt-2 text-[11px] uppercase tracking-[0.18em] text-cyan-100/58">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div
            className="relative aspect-[1/1.02] w-full max-w-[640px] overflow-hidden rounded-[36px] border border-white/10 bg-[radial-gradient(circle_at_24%_18%,rgba(255,255,255,0.25),transparent_18%),radial-gradient(circle_at_50%_45%,rgba(110,228,255,0.12),transparent_28%),linear-gradient(180deg,#090e16_0%,#04070b_100%)] shadow-[0_30px_90px_rgba(0,0,0,0.45)]"
            style={{ transform: sceneTransform, transformStyle: 'preserve-3d' }}
          >
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_20%,transparent_72%,rgba(255,255,255,0.03))]" />
            <div className="pointer-events-none absolute inset-[-20%] animate-[spin_12s_linear_infinite] bg-[conic-gradient(from_0deg,transparent,rgba(131,240,255,0.12),transparent_36%,rgba(255,170,122,0.12),transparent_68%)]" />
            <div className="pointer-events-none absolute left-6 top-6 rounded-[20px] border border-white/8 bg-slate-950/72 px-4 py-3 text-white backdrop-blur-xl">
              <div className="text-[10px] uppercase tracking-[0.24em] text-cyan-100/58">Scene Health</div>
              <div className="mt-1 text-2xl font-bold">98%</div>
              <div className="text-sm text-white/56">Render pipeline stable</div>
            </div>
            <div className="pointer-events-none absolute bottom-6 left-6 rounded-[20px] border border-white/8 bg-slate-950/72 px-4 py-3 text-white backdrop-blur-xl">
              <div className="text-[10px] uppercase tracking-[0.24em] text-cyan-100/58">Launch Mode</div>
              <div className="mt-1 text-2xl font-bold">Adaptive</div>
              <div className="text-sm text-white/56">Pointer-linked cinematic shell</div>
            </div>

            <Suspense
              fallback={
                <div className="flex h-full items-center justify-center bg-[radial-gradient(circle_at_center,rgba(111,239,255,0.16),transparent_26%),linear-gradient(180deg,#090e16_0%,#04070b_100%)]">
                  <div className="relative h-[360px] w-[240px]">
                    <div className="absolute left-1/2 top-0 h-28 w-28 -translate-x-1/2 rounded-[36px] bg-[linear-gradient(165deg,#191d23_0%,#020304_48%,#181b21_100%)] shadow-[inset_0_0_26px_rgba(255,255,255,0.06),0_26px_40px_rgba(0,0,0,0.45)]" />
                    <div className="absolute left-1/2 top-7 h-4 w-8 -translate-x-1/2 rounded-full bg-cyan-200 shadow-[0_0_26px_rgba(111,239,255,0.62)]" />
                    <div className="absolute left-1/2 top-24 h-44 w-40 -translate-x-1/2 rounded-[34%_34%_22%_22%/24%_24%_18%_18%] bg-[linear-gradient(180deg,#13161c_0%,#020304_52%,#171b22_100%)] shadow-[inset_0_0_30px_rgba(255,255,255,0.05),0_26px_50px_rgba(0,0,0,0.5)]" />
                    <div className="absolute left-1/2 top-40 h-14 w-14 -translate-x-1/2 rounded-[22px] bg-[radial-gradient(circle,#f7ffff_0%,#7cf4ff_18%,rgba(124,244,255,0.1)_48%,transparent_70%)] shadow-[0_0_30px_rgba(124,244,255,0.45)]" />
                    <div className="absolute left-3 top-32 h-32 w-10 rotate-[16deg] rounded-[24px] bg-[linear-gradient(180deg,#1e2229,#060709_60%,#1a1d24)]" />
                    <div className="absolute right-3 top-32 h-32 w-10 -rotate-[16deg] rounded-[24px] bg-[linear-gradient(180deg,#1e2229,#060709_60%,#1a1d24)]" />
                    <div className="absolute bottom-0 left-[54px] h-28 w-12 rounded-[20px] bg-[linear-gradient(180deg,#1e2229,#060709_60%,#1a1d24)]" />
                    <div className="absolute bottom-0 right-[54px] h-28 w-12 rounded-[20px] bg-[linear-gradient(180deg,#1e2229,#060709_60%,#1a1d24)]" />
                  </div>
                </div>
              }
            >
              <Spline className="h-full w-full" scene={scene} />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  )
}`,
  prompt: `Create a highly interactive hero component called "Spline Neural Launchpad Hero".
- Use React + Next.js client component patterns with Suspense and lazy-loaded @splinetool/react-spline
- The layout should be a split hero: persuasive product copy on the left, cinematic 3D Spline stage on the right
- Add cursor-reactive radial spotlights across the section background and subtle 3D parallax rotation on the scene container
- Wrap the Spline canvas in premium UI chrome: telemetry HUD cards, glass borders, conic ambient glow, and scan overlays
- Include a polished fallback that still feels like a premium robot silhouette while the Spline scene loads
- Add strong CTA buttons and metric cards so the component works as a complete hero, not just a scene wrapper
- Visual direction: black, graphite, cyan-white, and warm ember highlights with a bold editorial feel`,
  likes: 0,
  author: 'Animation AI',
  featured: true,
  createdAt: '2026-05-22T10:20:00.000Z',
  updatedAt: '2026-05-22T10:20:00.000Z'
},
  {
    _id: 'hero-spline-immersive-showroom',
    slug: 'spline-immersive-showroom',
    title: 'Spline Immersive Showroom',
    category: 'heroes',
    tag: 'react',
    description: 'A full-bleed cinematic Spline hero with cursor-linked volumetric lighting, 3-scene switcher with flash transitions, glassmorphic HUD overlay panels, animated ticker, and a polished humanoid CSS skeleton while loading.',
    previewCode: `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{background:#030408;overflow:hidden;font-family:'Inter',system-ui;cursor:crosshair;color:#fff}
.root{position:relative;width:100vw;height:100vh;display:flex;align-items:center;justify-content:center}

/* Cursor spotlight */
.cursor-glow{position:fixed;width:600px;height:600px;pointer-events:none;border-radius:50%;background:radial-gradient(circle,rgba(80,200,255,.13) 0%,transparent 65%);transform:translate(-50%,-50%);transition:left .08s,top .08s;z-index:5}

/* Spline stage - full bleed */
.stage{position:absolute;inset:0;z-index:1}
.stage-fallback{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:radial-gradient(ellipse at 50% 40%,rgba(40,120,220,.18),transparent 55%)}

/* Cinematic overlay layers */
.overlay{position:absolute;inset:0;z-index:2;pointer-events:none}
.scanlines{position:absolute;inset:0;background:repeating-linear-gradient(0deg,rgba(0,0,0,.1) 0px,rgba(0,0,0,.1) 1px,transparent 1px,transparent 4px);opacity:.3}
.vignette{position:absolute;inset:0;background:radial-gradient(ellipse at 50% 50%,transparent 40%,rgba(0,0,0,.7) 100%)}
.glow-accent{position:absolute;border-radius:50%;filter:blur(60px);opacity:.55;transition:all .9s ease}

/* Left HUD panel */
.hud-left{position:absolute;left:24px;top:50%;transform:translateY(-50%);z-index:10;display:flex;flex-direction:column;gap:12px}
.hud-card{padding:14px 16px;border-radius:16px;background:rgba(4,8,16,.72);border:1px solid rgba(255,255,255,.07);backdrop-filter:blur(18px);min-width:170px;transition:border-color .5s}
.hud-card small{display:block;font-size:9px;letter-spacing:.22em;text-transform:uppercase;color:rgba(160,220,255,.5);margin-bottom:6px}
.hud-card strong{display:block;font-size:20px;font-weight:800;color:#fff}
.hud-card span{font-size:11px;color:rgba(200,230,255,.45);margin-top:3px;display:block}
.bar{height:4px;background:rgba(255,255,255,.08);border-radius:2px;margin-top:8px;overflow:hidden}
.bar-fill{height:100%;border-radius:2px;transition:width .8s ease,background .5s}

/* Right info panel */
.info-right{position:absolute;right:24px;top:50%;transform:translateY(-50%);z-index:10;max-width:280px}
.scene-badge{display:inline-flex;align-items:center;gap:8px;padding:7px 14px;border-radius:999px;border:1px solid rgba(255,255,255,.1);background:rgba(4,8,16,.7);font-size:10px;letter-spacing:.22em;text-transform:uppercase;backdrop-filter:blur(14px);margin-bottom:14px}
.pulse-dot{width:7px;height:7px;border-radius:50%;animation:pulse 1.6s infinite}
.info-title{font-size:28px;font-weight:900;line-height:1.1;letter-spacing:-.03em;margin-bottom:10px}
.info-body{font-size:13px;line-height:1.7;color:rgba(200,230,255,.55);margin-bottom:18px}
.info-tags{display:flex;flex-wrap:wrap;gap:6px}
.tag{padding:5px 10px;border-radius:8px;font-size:10px;font-weight:700;letter-spacing:.1em;border:1px solid rgba(255,255,255,.08);background:rgba(255,255,255,.04);color:rgba(220,240,255,.6)}

/* Bottom ticker */
.ticker{position:absolute;bottom:0;left:0;right:0;z-index:10;height:44px;border-top:1px solid rgba(255,255,255,.06);background:rgba(3,5,10,.85);backdrop-filter:blur(14px);overflow:hidden;display:flex;align-items:center}
.ticker-inner{display:flex;white-space:nowrap;animation:ticker 28s linear infinite;font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:rgba(180,220,255,.4)}
.ticker-sep{margin:0 32px;opacity:.3}

/* Scene switcher dots */
.switcher{position:absolute;bottom:60px;left:50%;transform:translateX(-50%);z-index:10;display:flex;gap:10px}
.sw-dot{width:8px;height:8px;border-radius:50%;background:rgba(255,255,255,.18);border:1px solid rgba(255,255,255,.12);cursor:pointer;pointer-events:all;transition:all .3s}
.sw-dot.active{width:24px;border-radius:4px}

/* Top bar */
.topbar{position:absolute;top:0;left:0;right:0;z-index:10;padding:16px 24px;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid rgba(255,255,255,.05);background:linear-gradient(180deg,rgba(3,5,10,.8),transparent);backdrop-filter:blur(8px)}
.topbar-left{font-size:12px;font-weight:800;letter-spacing:.25em;text-transform:uppercase;opacity:.7}
.topbar-right{display:flex;gap:16px;font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:rgba(200,230,255,.4)}

/* Flash transition */
.flash{position:absolute;inset:0;z-index:20;pointer-events:none;opacity:0;transition:opacity .1s;background:rgba(255,255,255,.06)}
.flash.active{opacity:1}

@keyframes pulse{0%,100%{opacity:1;box-shadow:0 0 0 0 currentColor}50%{opacity:.6;box-shadow:0 0 8px 3px currentColor}}
@keyframes ticker{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
@keyframes spin{to{transform:rotate(360deg)}}

/* Humanoid CSS fallback */
.human{position:relative;width:200px;height:380px}
.h-head{position:absolute;top:0;left:50%;transform:translateX(-50%);width:72px;height:82px;border-radius:36px;background:linear-gradient(160deg,#1a1e26,#050608);box-shadow:inset 0 1px 0 rgba(255,255,255,.1)}
.h-eye{position:absolute;top:28px;left:50%;transform:translateX(-50%);width:38px;height:10px;border-radius:5px;box-shadow:0 0 14px currentColor}
.h-neck{position:absolute;top:80px;left:50%;transform:translateX(-50%);width:18px;height:20px;border-radius:5px;background:#0d0f14}
.h-torso{position:absolute;top:98px;left:50%;transform:translateX(-50%);width:130px;height:150px;border-radius:34% 34% 20% 20% / 22% 22% 16% 16%;background:linear-gradient(180deg,#141820,#040506)}
.h-reactor{position:absolute;top:138px;left:50%;transform:translateX(-50%);width:36px;height:36px;border-radius:50%}
.h-arm{position:absolute;top:106px;width:36px;height:120px;border-radius:20px;background:linear-gradient(180deg,#1a1e26,#050608)}
.h-arm.l{left:16px;transform:rotate(14deg)}.h-arm.r{right:16px;transform:rotate(-14deg)}
.h-leg{position:absolute;bottom:0;width:46px;height:120px;border-radius:20px;background:linear-gradient(180deg,#1a1e26,#050608)}
.h-leg.l{left:44px}.h-leg.r{right:44px}
.h-glow{position:absolute;bottom:-12px;left:50%;transform:translateX(-50%);width:160px;height:22px;border-radius:50%;filter:blur(12px)}
</style>
</head>
<body>
<div class="root" id="root">
  <div class="cursor-glow" id="cursorGlow"></div>

  <!-- Spline stage -->
  <div class="stage">
    <div class="stage-fallback" id="fallback">
      <!-- Humanoid CSS skeleton -->
      <div class="human" id="humanoid">
        <div class="h-head"></div>
        <div class="h-eye" id="eye" style="color:#50c8ff;background:#50c8ff"></div>
        <div class="h-neck"></div>
        <div class="h-torso"></div>
        <div class="h-reactor" id="reactor" style="background:radial-gradient(circle,#50c8ff,rgba(80,200,255,.1) 65%);box-shadow:0 0 22px rgba(80,200,255,.6)"></div>
        <div class="h-arm l"></div>
        <div class="h-arm r"></div>
        <div class="h-leg l"></div>
        <div class="h-leg r"></div>
        <div class="h-glow" id="hglow" style="background:rgba(80,200,255,.4)"></div>
      </div>
    </div>
  </div>

  <!-- Overlays -->
  <div class="overlay">
    <div class="scanlines"></div>
    <div class="vignette"></div>
    <div class="glow-accent" id="accentGlow" style="width:500px;height:500px;left:50%;top:50%;transform:translate(-50%,-50%);background:radial-gradient(circle,rgba(80,200,255,.22),transparent 70%)"></div>
  </div>

  <!-- Flash -->
  <div class="flash" id="flash"></div>

  <!-- Top bar -->
  <div class="topbar">
    <div class="topbar-left">Spline Showroom</div>
    <div class="topbar-right">
      <span id="sceneName">Scene 01 / Standby</span>
      <span>·</span>
      <span id="fps">60 FPS</span>
      <span>·</span>
      <span>Realtime 3D</span>
    </div>
  </div>

  <!-- Left HUD -->
  <div class="hud-left">
    <div class="hud-card" id="card1">
      <small>Render Output</small>
      <strong id="metric1">100%</strong>
      <span id="metricLbl1">Pipeline Nominal</span>
      <div class="bar"><div class="bar-fill" id="bar1" style="width:100%;background:#50c8ff"></div></div>
    </div>
    <div class="hud-card" id="card2">
      <small>Scene State</small>
      <strong id="metric2">Standby</strong>
      <span id="metricLbl2">Awaiting signal</span>
    </div>
    <div class="hud-card" id="card3">
      <small>Cursor Track</small>
      <strong id="metric3">Active</strong>
      <span id="metricLbl3">Volumetric lock-on</span>
    </div>
  </div>

  <!-- Right panel -->
  <div class="info-right">
    <div class="scene-badge">
      <span class="pulse-dot" id="pulseD" style="background:#50c8ff;color:#50c8ff"></span>
      <span id="badgeText">LIVE RENDER</span>
    </div>
    <div class="info-title" id="infoTitle">Immersive<br/>Showroom</div>
    <div class="info-body" id="infoBody">Cursor-reactive volumetric lighting, cinematic scene transitions, and a full glassmorphic overlay HUD — all wrapped around your Spline scene.</div>
    <div class="info-tags" id="infoTags">
      <span class="tag">CURSOR LIGHT</span>
      <span class="tag">3 SCENES</span>
      <span class="tag">SUSPENSE LOAD</span>
      <span class="tag">HUD OVERLAY</span>
    </div>
  </div>

  <!-- Scene switcher -->
  <div class="switcher" id="switcher">
    <div class="sw-dot active" data-idx="0" onclick="switchScene(0)"></div>
    <div class="sw-dot" data-idx="1" onclick="switchScene(1)"></div>
    <div class="sw-dot" data-idx="2" onclick="switchScene(2)"></div>
  </div>

  <!-- Ticker -->
  <div class="ticker">
    <div class="ticker-inner" id="ticker"></div>
  </div>
</div>

<script>
const SCENES = [
  { name:'Scene 01 / Standby', badge:'LIVE RENDER', title:'Immersive\nShowroom', body:'Cursor-reactive volumetric lighting, cinematic scene transitions, and a full glassmorphic overlay HUD.', color:'#50c8ff', metric:'100%', state:'Standby', glow:'rgba(80,200,255,.22)', bar:'100%' },
  { name:'Scene 02 / Engage', badge:'ENGAGE MODE', title:'Precision\nOptics', body:'Dynamic beam focus locks onto cursor coordinates in real-time, flooding the scene with responsive rim lighting.', color:'#ffaa40', metric:'145%', state:'Engage', glow:'rgba(255,170,64,.22)', bar:'80%' },
  { name:'Scene 03 / Overdrive', badge:'OVERDRIVE', title:'Critical\nOverload', body:'Maximum reactor output. The scene floods with energy trails, particle burst, and chromatic aberration cascades.', color:'#ff3d6e', metric:'380%', state:'Critical', glow:'rgba(255,61,110,.22)', bar:'60%' },
];
let current = 0;

const tickerContent = 'Spline Immersive Showroom · Cursor Volumetric Lighting · Scene Transitions · Glassmorphic HUD · Realtime 3D · Lazy Suspense Load · Next.js Compatible · ';
document.getElementById('ticker').textContent = tickerContent + tickerContent;

function setScene(idx, flash) {
  const s = SCENES[idx];
  if (flash) {
    const f = document.getElementById('flash');
    f.classList.add('active');
    setTimeout(() => f.classList.remove('active'), 300);
  }
  // Colors
  document.getElementById('eye').style.background = s.color;
  document.getElementById('eye').style.color = s.color;
  document.getElementById('reactor').style.background = 'radial-gradient(circle,' + s.color + ',rgba(80,200,255,.1) 65%)';
  document.getElementById('reactor').style.boxShadow = '0 0 22px ' + s.color + '99';
  document.getElementById('hglow').style.background = s.color + '66';
  document.getElementById('accentGlow').style.background = 'radial-gradient(circle,' + s.glow + ',transparent 70%)';
  document.getElementById('pulseD').style.background = s.color;
  document.getElementById('pulseD').style.color = s.color;

  // HUD cards accent border
  [1,2,3].forEach(n => {
    document.getElementById('card'+n).style.borderColor = s.color + '33';
  });
  document.getElementById('bar1').style.width = s.bar;
  document.getElementById('bar1').style.background = s.color;

  // Text
  document.getElementById('sceneName').textContent = s.name;
  document.getElementById('badgeText').textContent = s.badge;
  document.getElementById('infoTitle').innerHTML = s.title.replace('\n','<br>');
  document.getElementById('infoBody').textContent = s.body;
  document.getElementById('metric1').textContent = s.metric;
  document.getElementById('metric2').textContent = s.state;

  // Dots
  document.querySelectorAll('.sw-dot').forEach((d,i) => {
    d.classList.toggle('active', i === idx);
    d.style.background = i === idx ? s.color : 'rgba(255,255,255,.18)';
  });
}

function switchScene(idx) {
  current = idx;
  setScene(idx, true);
}

// Mouse tracking
const root = document.getElementById('root');
root.addEventListener('mousemove', e => {
  const glow = document.getElementById('cursorGlow');
  glow.style.left = e.clientX + 'px';
  glow.style.top = e.clientY + 'px';

  // Tilt humanoid
  const nx = (e.clientX / window.innerWidth - 0.5);
  const ny = (e.clientY / window.innerHeight - 0.5);
  document.getElementById('humanoid').style.transform = 'rotateY(' + (nx*16) + 'deg) rotateX(' + (-ny*8) + 'deg)';
  document.getElementById('humanoid').style.transformStyle = 'preserve-3d';
});

root.addEventListener('click', () => {
  current = (current + 1) % SCENES.length;
  setScene(current, true);
});

setScene(0, false);
</script>
</body>
</html>
`,
    code: `'use client'

import { Suspense, lazy, useState, useCallback, useMemo } from 'react'

const Spline = lazy(() => import('@splinetool/react-spline'))

const SCENES = [
  {
    name: 'Scene 01 / Standby',
    badge: 'LIVE RENDER',
    title: 'Immersive Showroom',
    body: 'Cursor-reactive volumetric lighting, cinematic scene transitions, and a full glassmorphic overlay HUD — all wrapped around your Spline scene.',
    color: '#50c8ff',
    metric: '100%',
    state: 'Standby',
    barWidth: '100%',
  },
  {
    name: 'Scene 02 / Engage',
    badge: 'ENGAGE MODE',
    title: 'Precision Optics',
    body: 'Dynamic beam focus locks onto cursor coordinates in real-time, flooding the scene with responsive rim lighting and reactive depth fog.',
    color: '#ffaa40',
    metric: '145%',
    state: 'Engage',
    barWidth: '80%',
  },
  {
    name: 'Scene 03 / Overdrive',
    badge: 'OVERDRIVE',
    title: 'Critical Overload',
    body: 'Maximum reactor output. The scene floods with energy trails, particle burst, and chromatic aberration cascades at peak intensity.',
    color: '#ff3d6e',
    metric: '380%',
    state: 'Critical',
    barWidth: '60%',
  },
]

const TICKER = 'Spline Immersive Showroom · Cursor Volumetric Lighting · Scene Transitions · Glassmorphic HUD · Realtime 3D · Lazy Suspense Load · Next.js Compatible · '

interface SplineImmersiveShowroomProps {
  scene: string
  className?: string
}

export function SplineImmersiveShowroom({ scene, className }: SplineImmersiveShowroomProps) {
  const [pointer, setPointer] = useState({ x: 0.5, y: 0.5 })
  const [sceneIdx, setSceneIdx] = useState(0)
  const [flashing, setFlashing] = useState(false)

  const s = SCENES[sceneIdx]

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    setPointer({
      x: (e.clientX - r.left) / r.width,
      y: (e.clientY - r.top) / r.height,
    })
  }, [])

  const handleClick = useCallback(() => {
    setFlashing(true)
    setTimeout(() => setFlashing(false), 300)
    setSceneIdx(i => (i + 1) % SCENES.length)
  }, [])

  const switchTo = useCallback((idx: number) => {
    setFlashing(true)
    setTimeout(() => setFlashing(false), 300)
    setSceneIdx(idx)
  }, [])

  const cursorGlowStyle = useMemo(() => ({
    left: pointer.x * 100 + '%',
    top: pointer.y * 100 + '%',
  }), [pointer])

  return (
    <div
      className="relative w-full overflow-hidden rounded-[28px] border border-white/8 bg-[#030408] text-white cursor-crosshair select-none"
      style={{ minHeight: 640 }}
      onMouseMove={handleMouseMove}
      onClick={handleClick}
    >
      {/* Cursor volumetric glow - tracks mouse */}
      <div
        className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-1/2 rounded-full transition-[left,top] duration-75"
        style={{
          ...cursorGlowStyle,
          width: 580,
          height: 580,
          background: 'radial-gradient(circle, ' + s.color + '18 0%, transparent 65%)',
        }}
      />

      {/* Spline full-bleed stage */}
      <div className="absolute inset-0 z-0">
        <Suspense
          fallback={
            <div
              className="flex h-full w-full items-center justify-center"
              style={{
                background: 'radial-gradient(ellipse at 50% 40%, ' + s.color + '18, transparent 55%)',
              }}
            >
              {/* Humanoid CSS skeleton */}
              <div className="relative" style={{ width: 200, height: 380, perspective: 800 }}>
                <div className="absolute left-1/2 top-0 h-[82px] w-[72px] -translate-x-1/2 rounded-[36px] bg-[linear-gradient(160deg,#1a1e26,#050608)] shadow-[inset_0_1px_0_rgba(255,255,255,.1)]" />
                <div
                  className="absolute left-1/2 top-7 h-[10px] w-[38px] -translate-x-1/2 rounded-[5px] transition-colors duration-500"
                  style={{ background: s.color, boxShadow: '0 0 14px ' + s.color }}
                />
                <div className="absolute left-1/2 top-[80px] h-5 w-[18px] -translate-x-1/2 rounded-[5px] bg-[#0d0f14]" />
                <div className="absolute left-1/2 top-[98px] h-[150px] w-[130px] -translate-x-1/2 rounded-[34%_34%_20%_20%/22%_22%_16%_16%] bg-[linear-gradient(180deg,#141820,#040506)]" />
                <div
                  className="absolute left-1/2 top-[138px] h-9 w-9 -translate-x-1/2 rounded-full transition-all duration-500"
                  style={{ background: 'radial-gradient(circle,' + s.color + ',transparent 65%)', boxShadow: '0 0 22px ' + s.color + '99' }}
                />
                <div className="absolute left-4 top-[106px] h-[120px] w-9 rotate-[14deg] rounded-[20px] bg-[linear-gradient(180deg,#1a1e26,#050608)]" />
                <div className="absolute right-4 top-[106px] h-[120px] w-9 -rotate-[14deg] rounded-[20px] bg-[linear-gradient(180deg,#1a1e26,#050608)]" />
                <div className="absolute bottom-0 left-[44px] h-[120px] w-[46px] rounded-[20px] bg-[linear-gradient(180deg,#1a1e26,#050608)]" />
                <div className="absolute bottom-0 right-[44px] h-[120px] w-[46px] rounded-[20px] bg-[linear-gradient(180deg,#1a1e26,#050608)]" />
                <div
                  className="absolute -bottom-3 left-1/2 h-5 w-[160px] -translate-x-1/2 rounded-full blur-xl transition-colors duration-500"
                  style={{ background: s.color + '55' }}
                />
              </div>
            </div>
          }
        >
          <Spline className={className ?? 'h-full w-full'} scene={scene} />
        </Suspense>
      </div>

      {/* Scanlines */}
      <div className="pointer-events-none absolute inset-0 z-10 opacity-20" style={{ background: 'repeating-linear-gradient(0deg, rgba(0,0,0,.12) 0px, rgba(0,0,0,.12) 1px, transparent 1px, transparent 4px)' }} />

      {/* Vignette */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_50%_50%,transparent_40%,rgba(0,0,0,.65)_100%)]" />

      {/* Flash */}
      {flashing && (
        <div className="pointer-events-none absolute inset-0 z-30 bg-white/8 transition-opacity duration-100" />
      )}

      {/* Top bar */}
      <div className="absolute left-0 right-0 top-0 z-20 flex items-center justify-between border-b border-white/5 bg-[linear-gradient(180deg,rgba(3,5,10,.8),transparent)] px-5 py-3 backdrop-blur-sm">
        <span className="text-[11px] font-black uppercase tracking-[.25em] text-white/60">Spline Showroom</span>
        <div className="flex gap-4 text-[10px] uppercase tracking-[.16em] text-white/35">
          <span style={{ color: s.color }}>{s.name}</span>
          <span>·</span>
          <span>Realtime 3D</span>
        </div>
      </div>

      {/* Left HUD cards */}
      <div className="absolute left-4 top-1/2 z-20 flex -translate-y-1/2 flex-col gap-3 pointer-events-none">
        {[
          { label: 'Render Output', val: s.metric, sub: 'Pipeline ' + s.state },
          { label: 'Scene State', val: s.state, sub: 'Transition ready' },
          { label: 'Cursor Track', val: 'Active', sub: 'Volumetric lock-on' },
        ].map((card, i) => (
          <div
            key={i}
            className="min-w-[160px] rounded-2xl border bg-black/70 px-4 py-3 backdrop-blur-xl transition-all duration-500"
            style={{ borderColor: s.color + '28' }}
          >
            <div className="text-[9px] uppercase tracking-[.22em] text-white/40">{card.label}</div>
            <div className="mt-1 text-xl font-bold text-white">{card.val}</div>
            <div className="text-[11px] text-white/35">{card.sub}</div>
            {i === 0 && (
              <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/8">
                <div
                  className="h-full rounded-full transition-all duration-700"
                  style={{ width: s.barWidth, background: s.color }}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Right info panel */}
      <div className="absolute right-4 top-1/2 z-20 -translate-y-1/2 max-w-[260px] pointer-events-none">
        <div
          className="mb-3 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.22em] backdrop-blur-xl"
          style={{ borderColor: s.color + '40', background: 'rgba(4,8,16,.72)', color: s.color }}
        >
          <span
            className="h-[7px] w-[7px] rounded-full animate-pulse"
            style={{ background: s.color, boxShadow: '0 0 8px ' + s.color }}
          />
          {s.badge}
        </div>
        <h2
          className="text-[26px] font-black leading-[1.1] tracking-tight mb-2 transition-colors duration-500"
          style={{ color: '#fff' }}
        >
          {s.title}
        </h2>
        <p className="text-[12px] leading-[1.7] text-white/45 mb-4">{s.body}</p>
        <div className="flex flex-wrap gap-1.5">
          {['CURSOR LIGHT', '3 SCENES', 'HUD OVERLAY', 'SUSPENSE'].map(tag => (
            <span key={tag} className="rounded-[7px] border border-white/8 bg-white/4 px-2 py-1 text-[9px] font-bold uppercase tracking-[.1em] text-white/45">{tag}</span>
          ))}
        </div>
      </div>

      {/* Scene switcher dots */}
      <div className="absolute bottom-12 left-1/2 z-20 flex -translate-x-1/2 gap-2 pointer-events-auto">
        {SCENES.map((sc, i) => (
          <button
            key={i}
            onClick={e => { e.stopPropagation(); switchTo(i) }}
            className="rounded-full border border-white/12 transition-all duration-300"
            style={{
              width: i === sceneIdx ? 24 : 8,
              height: 8,
              background: i === sceneIdx ? s.color : 'rgba(255,255,255,.18)',
              borderRadius: 4,
            }}
          />
        ))}
      </div>

      {/* Ticker */}
      <div className="absolute bottom-0 left-0 right-0 z-20 flex h-10 items-center overflow-hidden border-t border-white/5 bg-black/80 backdrop-blur-md">
        <div
          className="flex whitespace-nowrap text-[10px] uppercase tracking-[.18em] text-white/30"
          style={{ animation: 'ticker 28s linear infinite' }}
        >
          {TICKER}{TICKER}
        </div>
      </div>

      <style>{\`@keyframes ticker{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}\`}</style>
    </div>
  )
}
`,
    prompt: `Create a highly interactive Spline hero wrapper called "Spline Immersive Showroom" that is completely different from a simple embed or split layout.\n- Full-bleed Spline scene as background, with the full overlay UI floating on top\n- Cursor-reactive volumetric glow (a large soft radial blob that follows the mouse smoothly in real-time)\n- 3 scene states (Standby/Engage/Overdrive) that change: accent color, HUD metrics, right panel title/body, and dot switcher indicator\n- Flash transition on scene switch: a brief white overlay pulse\n- Left HUD: 3 glassmorphic cards showing Render Output, Scene State, Cursor Track — with a live progress bar that changes per state\n- Right panel: scene badge with animated pulse dot, large heading, description, and tag chips\n- Bottom: scrolling ticker marquee with component keywords\n- Top bar: component name + scene name label + FPS indicator\n- Humanoid CSS fallback skeleton while Spline loads, with colored eyes/reactor that match active accent color\n- Scene switcher: pill-shaped active dot + circular inactive dots at bottom center\n- Built as a named export \`SplineImmersiveShowroom\` accepting \`scene\` and optional \`className\` props`,
    likes: 0,
    author: 'Animation AI',
    featured: true,
    createdAt: '2026-05-22T12:00:00.000Z',
    updatedAt: '2026-05-22T12:00:00.000Z'
  }
];