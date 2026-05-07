export type SampleAnimation = {
  _id: string
  slug: string
  title: string
  category: string
  tag: string
  description: string
  featured: boolean
  previewCode: string
  code: string
  prompt: string
  likes: number
  author: string
  createdAt: string
}

// Fallback dataset used when MongoDB is unreachable (e.g. corporate DNS blocks Atlas SRV lookups).
// Keep this intentionally small so it doesn't bloat server renders.
export const SAMPLE_ANIMATIONS: SampleAnimation[] = [
  {
    _id: 'sample-aurora-background',
    slug: 'aurora-background',
    title: 'Aurora Background',
    category: 'backgrounds',
    tag: 'css',
    description: 'Organic flowing aurora with animated blobs and color blending.',
    featured: true,
    likes: 42,
    author: 'Animation AI',
    createdAt: new Date('2026-01-01T00:00:00.000Z').toISOString(),
    previewCode: `<!DOCTYPE html><html><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/><style>
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
.label{position:absolute;bottom:20px;left:50%;transform:translateX(-50%);color:rgba(255,255,255,0.8);font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;font-size:12px;font-weight:700;letter-spacing:3px}
</style></head><body>
<div class="aurora"><div class="blob b1"></div><div class="blob b2"></div><div class="blob b3"></div></div>
<div class="label">AURORA</div>
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
}`,
    prompt: `Create a pure CSS Aurora Background with 3 animated radial-gradient blobs (purple/cyan/green), blur(60px), and independent keyframes at 8s/10s/12s over a dark base.`,
  },
  {
    _id: 'sample-particle-wave',
    slug: 'particle-wave',
    title: 'Particle Wave',
    category: 'backgrounds',
    tag: 'canvas',
    description: 'Canvas particle grid with gentle sinusoidal wave motion.',
    featured: true,
    likes: 27,
    author: 'Animation AI',
    createdAt: new Date('2026-01-02T00:00:00.000Z').toISOString(),
    previewCode: `<!DOCTYPE html><html><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/><style>
*{margin:0;padding:0}body{background:#050510;overflow:hidden}
canvas{display:block}
</style></head><body>
<canvas id="c"></canvas>
<script>
const c=document.getElementById('c'),ctx=c.getContext('2d');
function resize(){c.width=innerWidth;c.height=innerHeight}
addEventListener('resize',resize);resize();
const cols=44,rows=26,pts=[];
for(let i=0;i<cols;i++)for(let j=0;j<rows;j++)pts.push({x:(i/(cols-1))*c.width,y:(j/(rows-1))*c.height,ox:i,oy:j});
function draw(t){
  ctx.clearRect(0,0,c.width,c.height);
  ctx.fillStyle='#050510';ctx.fillRect(0,0,c.width,c.height);
  for(const p of pts){
    const w=Math.sin(p.ox*0.45+t*0.0022)*12+Math.cos(p.oy*0.55+t*0.0016)*8;
    const a=0.18+((w+20)/40)*0.72;
    ctx.beginPath();ctx.arc(p.x,p.y+w,2.1,0,Math.PI*2);
    ctx.fillStyle='rgba(124,92,252,'+a+')';ctx.fill();
  }
  requestAnimationFrame(draw);
}
requestAnimationFrame(draw);
</script>
</body></html>`,
    code: `// Particle Wave — Canvas (minimal)
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')`,
    prompt: `Create a full-screen canvas particle grid that animates with sinusoidal wave motion (sin/cos based on grid position + time) over a dark background.`,
  },
]

