export const CARDS_DATA = [
  {
    slug: "tilt-card",
    title: "Tilt Hover Card",
    category: "cards",
    tag: "css",
    description: "CSS perspective tilt card with moving light reflection on mouse move.",
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
 <div class="icon">• </div>
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
    code: `// Tilt Hover Card • React Component
'use client'
import { useRef, MouseEvent } from 'react'

interface TiltCardProps {
 icon?: string
 title: string
 description: string
 tag?: string
}

export default function TiltCard({ icon='• ', title, description, tag }: TiltCardProps) {
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
    likes: 0,
    author: "Animation AI",
    featured: false,
    createdAt: "2026-05-10T13:19:37.564Z",
    updatedAt: "2026-05-10T13:19:37.564Z"
  },
  {
    slug: "quantum-holo-grid-card",
    title: "Quantum Holo-Grid Card",
    category: "cards",
    tag: "canvas",
    description: "An interactive glass card with a double-masked active neon rotating border, presenting an interactive 3D particle mesh grid that rotates with cursor movement and glitches with a modular HUD on click.",
    previewCode: `<!DOCTYPE html><html><head><style>
body,html{margin:0;padding:0;width:100%;height:100%;overflow:hidden;background:#030712;display:flex;align-items:center;justify-content:center;font-family:sans-serif}
.card-container{perspective:1200px}
.card{position:relative;width:340px;height:460px;border-radius:32px;background:rgba(10,15,30,0.75);box-shadow:0 20px 60px -25px rgba(0,0,0,0.7);transform-style:preserve-3d;cursor:pointer;transition:transform 0.15s cubic-bezier(0.25,1,0.5,1),box-shadow 0.3s ease;overflow:hidden}
.card:hover{transform:scale(1.02);box-shadow:0 30px 100px -15px rgba(56,189,248,0.25)}
.border-glow{position:absolute;inset:0;pointer-events:none;border-radius:32px;padding:1.5px;opacity:0.3;transition:opacity 0.4s}
.card:hover .border-glow{opacity:1}
.border-glow::before{content:"";position:absolute;inset:0;border-radius:32px;background:conic-gradient(from 0deg,transparent 40%,#38bdf8 50%,#a855f7 60%,transparent 70%);animation:spin 5s linear infinite;mask-image:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);mask-composite:exclude;-webkit-mask-composite:xor;mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0)}
@keyframes spin{to{transform:rotate(360deg)}}
canvas{position:absolute;inset:0;width:100%;height:100%;z-index:1;pointer-events:none}
.content{position:relative;height:100%;display:flex;flex-direction:column;justify-content:between;padding:32px;box-sizing:border-box;z-index:3;transform:translateZ(40px);transform-style:preserve-3d;transition:transform 0.15s}
.header{display:flex;justify-content:space-between;align-items:start}
.sys-label{font-family:monospace;font-size:9px;color:rgba(56,189,248,0.6);line-height:1.4}
.sys-title{font-weight:bold;color:#38bdf8;text-transform:uppercase;letter-spacing:1px}
.status{display:flex;align-items:center;gap:6px;padding:6px 12px;border-radius:99px;border:1px solid rgba(56,189,248,0.2);background:rgba(10,30,60,0.4);backdrop-filter:blur(10px);font-family:monospace;font-size:9px;color:#38bdf8}
.status-dot{width:6px;height:6px;border-radius:50%;background:#38bdf8;animation:pulse 1.5s infinite}
@keyframes pulse{0%,100%{transform:scale(0.8);opacity:0.5}50%{transform:scale(1.2);opacity:1}}
.footer{display:flex;flex-direction:column;gap:16px;margin-top:auto}
.title{font-size:22px;font-weight:500;color:#fff;margin:0;letter-spacing:0.5px}
.desc{font-size:13px;color:rgba(168,218,248,0.6);line-height:1.6;margin:0}
.divider{height:1px;background:rgba(56,189,248,0.1);width:100%}
.telemetry{display:flex;justify-content:space-between;align-items:center;font-family:monospace;font-size:10px}
.stats{display:flex;gap:16px;color:rgba(56,189,248,0.5)}
.stat-item{display:flex;flex-direction:column}
.val{color:#fff;font-weight:bold}
.btn{display:flex;align-items:center;justify-content:center;width:32px;height:32px;border-radius:50%;border:1px solid rgba(56,189,248,0.3);background:rgba(10,30,60,0.5);color:#38bdf8;transition:all 0.3s;box-shadow:0 0 15px rgba(56,189,248,0.15)}
.card:hover .btn{transform:scale(1.05);background:#38bdf8;color:#0f172a}
.glitch-static{position:absolute;inset:0;background:rgba(239,68,68,0.05);mix-blend-mode:color-dodge;z-index:5;pointer-events:none;opacity:0;transition:opacity 0.1s}
.glitch-static.active{opacity:1;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.99' numOctaves='1'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")}
</style></head><body>
<div class="card-container">
  <div class="card" id="card">
    <div class="border-glow"></div>
    <div class="glitch-static" id="glitch"></div>
    <canvas id="canvas"></canvas>
    <div class="content" id="content">
      <div class="header">
        <div class="sys-label">
          <div class="sys-title">Quantum Matrix</div>
          <div>ADDR: 0x7F2A9C3F</div>
        </div>
        <div class="status">
          <span class="status-dot" id="dot"></span>
          <span id="statusText">NOMINAL</span>
        </div>
      </div>
      <div class="footer">
        <h3 class="title">Holo-Grid Controller</h3>
        <p class="desc">Interact with the 3D quantum perspective mesh. Click to induce electromagnetic interference.</p>
        <div class="divider"></div>
        <div class="telemetry">
          <div class="stats">
            <div class="stat-item">
              <span>POTENTIAL</span>
              <span class="val" id="voltage">440V</span>
            </div>
            <div class="stat-item">
              <span>COORDINATES</span>
              <span class="val" id="coords">0.0, 0.0</span>
            </div>
          </div>
          <button class="btn">
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
<script>
const card=document.getElementById('card'),canvas=document.getElementById('canvas'),glitch=document.getElementById('glitch'),dot=document.getElementById('dot'),statusText=document.getElementById('statusText'),voltage=document.getElementById('voltage'),coords=document.getElementById('coords');
const ctx=canvas.getContext('2d');
let w=canvas.width=340,h=canvas.height=460;
let rx=0,ry=0,tx=0,ty=0,time=0,glitchActive=false,isHovered=false;

card.addEventListener('mousemove',e=>{
  const r=card.getBoundingClientRect();
  const x=e.clientX-r.left-r.width/2;
  const y=e.clientY-r.top-r.height/2;
  tx=-(y/r.height)*8;
  ty=(x/r.width)*8;
  card.style.transform='rotateX('+tx+'deg) rotateY('+ty+'deg) scale(1.02)';
  coords.textContent=tx.toFixed(1)+', '+ty.toFixed(1);
});
card.addEventListener('mouseleave',()=>{
  tx=0;ty=0;isHovered=false;
  card.style.transform='';
  coords.textContent='0.0, 0.0';
});
card.addEventListener('mouseenter',()=>{isHovered=true;});
card.addEventListener('click',()=>{
  if(glitchActive)return;
  glitchActive=true;
  glitch.classList.add('active');
  dot.style.background='#ef4444';
  statusText.textContent='INTERFERENCE';
  statusText.style.color='#ef4444';
  voltage.textContent=(Math.floor(Math.random()*200)+600)+'V';
  setTimeout(()=>{
    glitchActive=false;
    glitch.classList.remove('active');
    dot.style.background='#38bdf8';
    statusText.textContent='NOMINAL';
    statusText.style.color='#38bdf8';
    voltage.textContent='440V';
  },600);
});

const cols=5,rows=5,nodes=[];
for(let c=0;c<cols;c++){
  for(let r=0;r<rows;r++){
    nodes.push({
      x:(c-(cols-1)/2)*45,
      y:(r-(rows-1)/2)*45
    });
  }
}

function animate(){
  ctx.fillStyle='rgba(3,7,18,0.3)';
  ctx.fillRect(0,0,w,h);
  time+=0.02;
  
  rx+=(ty*Math.PI/180-rx)*0.1;
  ry+=(tx*Math.PI/180-ry)*0.1;

  const cosY=Math.cos(rx+Math.sin(time*0.5)*0.15);
  const sinY=Math.sin(rx+Math.sin(time*0.5)*0.15);
  const cosX=Math.cos(ry);
  const sinX=Math.sin(ry);
  const projected=[];
  const perspective=250;

  nodes.forEach(n=>{
    const organicZ=Math.sin(time*2+(n.x*n.y)*0.0005)*15;
    let x1=n.x,y1=n.y,z1=organicZ;
    if(glitchActive){
      x1+=(Math.random()-0.5)*6;
      y1+=(Math.random()-0.5)*6;
      z1+=(Math.random()-0.5)*15;
    }
    const x2=x1*cosY-z1*sinY;
    const z2=z1*cosY+x1*sinY;
    const y3=y1*cosX-z2*sinX;
    const z3=z2*cosX+y1*sinX;
    const scale=perspective/(perspective+z3+80);
    projected.push({
      sx:w/2+x2*scale,
      sy:h/2+y3*scale,
      depth:z3
    });
  });

  ctx.lineWidth=1;
  for(let c=0;c<cols;c++){
    for(let r=0;r<rows;r++){
      const idx=c*rows+r;
      const p1=projected[idx];
      if(c<cols-1){
        const p2=projected[(c+1)*rows+r];
        const alpha=Math.max(0.1,0.45-(p1.depth+p2.depth)/200);
        ctx.strokeStyle=glitchActive?'rgba(239,68,68,'+(alpha*1.5)+')':'rgba(56,189,248,'+alpha+')';
        ctx.beginPath();ctx.moveTo(p1.sx,p1.sy);ctx.lineTo(p2.sx,p2.sy);ctx.stroke();
      }
      if(r<rows-1){
        const p2=projected[c*rows+r+1];
        const alpha=Math.max(0.1,0.45-(p1.depth+p2.depth)/200);
        ctx.strokeStyle=glitchActive?'rgba(239,68,68,'+(alpha*1.5)+')':'rgba(168,85,247,'+alpha+')';
        ctx.beginPath();ctx.moveTo(p1.sx,p1.sy);ctx.lineTo(p2.sx,p2.sy);ctx.stroke();
      }
    }
  }

  projected.forEach((p,i)=>{
    const size=Math.max(1,2.5*(250/(250+p.depth)));
    ctx.fillStyle=glitchActive?'#ef4444':(i%2===0?'#38bdf8':'#a855f7');
    ctx.beginPath();ctx.arc(p.sx,p.sy,size,0,Math.PI*2);ctx.fill();
  });

  ctx.strokeStyle=glitchActive?'rgba(239,68,68,0.15)':'rgba(56,189,248,0.15)';
  ctx.beginPath();ctx.arc(w/2,h/2,70+Math.sin(time)*5,0,Math.PI*2);ctx.stroke();
  
  requestAnimationFrame(animate);
}
animate();
</script></body></html>`,
    code: `'use client'

import React, { useRef, useState, useEffect } from 'react'

export default function QuantumHoloGridCard() {
  const cardRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const [status, setStatus] = useState('NOMINAL')
  const [voltage, setVoltage] = useState(440)
  const [glitchActive, setGlitchActive] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    
    const rotateX = -(y / rect.height) * 8
    const rotateY = (x / rect.width) * 8
    setRotation({ x: rotateX, y: rotateY })
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setRotation({ x: 0, y: 0 })
  }

  const triggerGlitch = () => {
    if (glitchActive) return
    setGlitchActive(true)
    setStatus('INTERFERENCE')
    setVoltage(Math.floor(Math.random() * 200) + 600)
    setTimeout(() => {
      setGlitchActive(false)
      setStatus('NOMINAL')
      setVoltage(440)
    }, 600)
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let time = 0

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * (window.devicePixelRatio || 1)
      canvas.height = rect.height * (window.devicePixelRatio || 1)
      ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1)
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const cols = 5
    const rows = 5
    const nodes: { x: number; y: number }[] = []

    for (let c = 0; c < cols; c++) {
      for (let r = 0; r < rows; r++) {
        nodes.push({
          x: (c - (cols - 1) / 2) * 45,
          y: (r - (rows - 1) / 2) * 45
        })
      }
    }

    const drawGrid = () => {
      const w = canvas.width / (window.devicePixelRatio || 1)
      const h = canvas.height / (window.devicePixelRatio || 1)
      ctx.fillStyle = 'rgba(3, 7, 18, 0.35)'
      ctx.fillRect(0, 0, w, h)

      time += 0.02

      const rotY = (rotation.y * Math.PI) / 180 * 2.5
      const rotX = (rotation.x * Math.PI) / 180 * 2.5

      const cosY = Math.cos(rotY + Math.sin(time * 0.5) * 0.15)
      const sinY = Math.sin(rotY + Math.sin(time * 0.5) * 0.15)
      const cosX = Math.cos(rotX)
      const sinX = Math.sin(rotX)

      const projected: { sx: number; sy: number; depth: number }[] = []
      const perspective = 250

      nodes.forEach(n => {
        const organicZ = Math.sin(time * 2 + (n.x * n.y) * 0.0005) * 15
        let x1 = n.x
        let y1 = n.y
        let z1 = organicZ

        if (glitchActive) {
          x1 += (Math.random() - 0.5) * 6
          y1 += (Math.random() - 0.5) * 6
          z1 += (Math.random() - 0.5) * 15
        }

        const x2 = x1 * cosY - z1 * sinY
        const z2 = z1 * cosY + x1 * sinY
        const y3 = y1 * cosX - z2 * sinX
        const z3 = z2 * cosX + y1 * sinX

        const scale = perspective / (perspective + z3 + 80)
        const sx = w / 2 + x2 * scale
        const sy = h / 2 + y3 * scale

        projected.push({ sx, sy, depth: z3 })
      })

      ctx.lineWidth = 1
      for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
          const idx = c * rows + r
          const p1 = projected[idx]

          if (c < cols - 1) {
            const idxR = (c + 1) * rows + r
            const p2 = projected[idxR]
            const alpha = Math.max(0.1, 0.45 - (p1.depth + p2.depth) / 200)
            ctx.strokeStyle = glitchActive 
              ? \`rgba(239, 68, 68, \${alpha * 1.5})\` 
              : \`rgba(56, 189, 248, \${alpha})\`
            ctx.beginPath()
            ctx.moveTo(p1.sx, p1.sy)
            ctx.lineTo(p2.sx, p2.sy)
            ctx.stroke()
          }

          if (r < rows - 1) {
            const idxB = c * rows + (r + 1)
            const p2 = projected[idxB]
            const alpha = Math.max(0.1, 0.45 - (p1.depth + p2.depth) / 200)
            ctx.strokeStyle = glitchActive 
              ? \`rgba(239, 68, 68, \${alpha * 1.5})\` 
              : \`rgba(168, 85, 247, \${alpha})\`
            ctx.beginPath()
            ctx.moveTo(p1.sx, p1.sy)
            ctx.lineTo(p2.sx, p2.sy)
            ctx.stroke()
          }
        }
      }

      projected.forEach((p, i) => {
        const size = Math.max(1, 2.5 * (250 / (250 + p.depth)))
        ctx.fillStyle = glitchActive 
          ? '#ef4444' 
          : i % 2 === 0 ? '#38bdf8' : '#a855f7'
        ctx.shadowColor = ctx.fillStyle
        ctx.shadowBlur = isHovered ? 8 : 2
        ctx.beginPath()
        ctx.arc(p.sx, p.sy, size, 0, Math.PI * 2)
        ctx.fill()
      })
      ctx.shadowBlur = 0

      ctx.strokeStyle = glitchActive ? 'rgba(239, 68, 68, 0.15)' : 'rgba(56, 189, 248, 0.15)'
      ctx.beginPath()
      ctx.arc(w / 2, h / 2, 70 + Math.sin(time) * 5, 0, Math.PI * 2)
      ctx.stroke()

      animationFrameId = requestAnimationFrame(drawGrid)
    }
    drawGrid()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [rotation, glitchActive, isHovered])

  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <div
        ref={cardRef}
        onClick={triggerGlitch}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={() => setIsHovered(true)}
        className="relative w-[340px] h-[460px] rounded-[32px] cursor-pointer group select-none overflow-hidden"
        style={{
          perspective: 1200,
          transformStyle: 'preserve-3d',
          background: 'rgba(10, 15, 30, 0.75)',
          boxShadow: isHovered 
            ? '0 30px 100px -15px rgba(56, 189, 248, 0.25), 0 0 1px 1px rgba(56, 189, 248, 0.15), inset 0 1px 0 0 rgba(255, 255, 255, 0.1)'
            : '0 20px 60px -25px rgba(0, 0, 0, 0.7), 0 0 1px 1px rgba(255, 255, 255, 0.05), inset 0 1px 0 0 rgba(255, 255, 255, 0.05)',
          transform: \`rotateX(\${rotation.x}deg) rotateY(\${rotation.y}deg) scale(\${isHovered ? 1.02 : 1})\`,
          transition: 'transform 0.15s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.3s ease',
        }}
      >
        <div
          className={\`absolute inset-0 z-0 pointer-events-none rounded-[32px] p-[1.5px] before:content-[""] before:absolute before:inset-0 before:rounded-[32px] before:bg-[conic-gradient(from_0deg,transparent_40%,#38bdf8_50%,#a855f7_60%,transparent_70%)] before:will-change-transform before:animate-[spin_5s_linear_infinite] before:[mask-image:linear-gradient(#fff_0_0)_content-box,_linear-gradient(#fff_0_0)] before:![mask-composite:exclude] before:![-webkit-mask-composite:xor] \${
            isHovered ? 'opacity-100' : 'opacity-30'
          }\`}
          style={{ transition: 'opacity 0.4s' }}
        />
        
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none z-10"
        />

        {glitchActive && (
          <div className="absolute inset-0 bg-red-500/5 mix-blend-color-dodge z-30 pointer-events-none opacity-80"
               style={{
                 backgroundImage: \`url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.99' numOctaves='1'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")\`
               }}
          />
        )}

        <div
          className="absolute inset-0 pointer-events-none z-20"
          style={{
            background: \`radial-gradient(circle at \${isHovered ? '45%' : '0%'} \${isHovered ? '25%' : '0%'}, rgba(255, 255, 255, 0.08) 0%, transparent 60%)\`,
            transition: 'background 0.5s ease',
          }}
        />

        <div 
          className="relative h-full flex flex-col justify-between p-8 z-30 select-none"
          style={{
            transform: 'translateZ(40px)',
            transformStyle: 'preserve-3d',
            transition: 'transform 0.15s cubic-bezier(0.25, 1, 0.5, 1)',
          }}
        >
          <div className="flex justify-between items-start">
            <div className="flex flex-col gap-1 font-mono text-[9px] text-sky-400/60 leading-none">
              <span className="font-bold uppercase tracking-widest text-sky-400">Quantum Matrix</span>
              <span>ADDR: 0x7F2A9C3F</span>
            </div>
            
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-sky-400/20 bg-sky-950/40 backdrop-blur-md font-mono text-[9px] text-sky-400">
              <span className={\`w-1.5 h-1.5 rounded-full \${glitchActive ? 'bg-red-500 animate-ping' : 'bg-sky-400 animate-pulse'}\`} />
              <span className="tracking-wider uppercase font-semibold">{status}</span>
            </div>
          </div>

          <div className="my-auto pointer-events-none" />

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <h3 className="text-xl font-medium text-white leading-tight font-sans tracking-wide">
                Holo-Grid Controller
              </h3>
              <p className="text-[13px] text-sky-300/60 font-light leading-relaxed font-sans">
                Interact with the 3D quantum perspective mesh. Click to induce electromagnetic interference.
              </p>
            </div>

            <div className="h-[1px] bg-sky-400/10 w-full" />

            <div className="flex justify-between items-center font-mono text-[10px]">
              <div className="flex gap-4 text-sky-400/55">
                <div className="flex flex-col">
                  <span>POTENTIAL</span>
                  <span className="text-white font-bold transition-colors duration-300" style={{ color: glitchActive ? '#ef4444' : '#38bdf8' }}>
                    {voltage}V
                  </span>
                </div>
                <div className="flex flex-col">
                  <span>COORD</span>
                  <span className="text-white font-bold">
                    {rotation.x.toFixed(1)}, {rotation.y.toFixed(1)}
                  </span>
                </div>
              </div>

              <button className="flex items-center justify-center w-8 h-8 rounded-full border border-sky-400/30 bg-sky-950/50 hover:bg-sky-400 hover:text-slate-950 text-sky-400 transition-all duration-300 shadow-[0_0_15px_rgba(56,189,248,0.15)] group-hover:scale-105 active:scale-95">
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )` ,
    prompt: `Create an advanced Quantum Holo-Grid Card component:
• Premium border glow: double-masked rotating multi-gradient border styled with CSS variables and exclusive mask-composite logic.
• Live 3D Particle Mesh: Canvas grid rotating and warping continuously in 3D projection formulas linked to cursor tilt mechanics.
• Interactive glitch static: Clicking induces random node displacement and electromagnetic interference color matrices.
• 3D tilt tracking: 3D perspective rotation on wrapper card with translateZ depth sways on foreground content overlays.`,
    likes: 0,
    author: "Animation AI",
    featured: true,
    createdAt: "2026-05-22T10:00:00.000Z",
    updatedAt: "2026-05-22T10:00:00.000Z"
  },
  {
    slug: "cosmic-nebula-reactor-card",
    title: "Cosmic Nebula Reactor Card",
    category: "cards",
    tag: "canvas",
    description: "An interactive luxury glass card featuring a sweeping plasma-glow boundary and an internal generative cosmic nebula. Modulates particle rotation speed and gravity by cursor hover, collapsing into a supernova on click.",
    previewCode: `<!DOCTYPE html><html><head><style>
body,html{margin:0;padding:0;width:100%;height:100%;overflow:hidden;background:#030206;display:flex;align-items:center;justify-content:center;font-family:sans-serif}
.card-container{perspective:1200px}
.card{position:relative;width:340px;height:460px;border-radius:32px;background:rgba(12,10,16,0.8);box-shadow:0 20px 50px -25px rgba(0,0,0,0.85);transform-style:preserve-3d;cursor:pointer;transition:transform 0.15s cubic-bezier(0.25,1,0.5,1),box-shadow 0.3s ease;overflow:hidden}
.card:hover{transform:scale(1.02);box-shadow:0 30px 90px -10px rgba(139,92,246,0.22)}
.border-glow{position:absolute;inset:0;pointer-events:none;border-radius:32px;padding:1.5px;opacity:0.4;transition:opacity 0.4s}
.card:hover .border-glow{opacity:1}
.border-glow::before{content:"";position:absolute;inset:0;border-radius:32px;background:conic-gradient(from 180deg,transparent 30%,#a855f7 45%,#f43f5e 55%,#eab308 70%,transparent 85%);animation:spin 7s linear infinite;mask-image:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);mask-composite:exclude;-webkit-mask-composite:xor;mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0)}
@keyframes spin{to{transform:rotate(360deg)}}
canvas{position:absolute;inset:0;width:100%;height:100%;z-index:1;pointer-events:none}
.content{position:relative;height:100%;display:flex;flex-direction:column;justify-content:between;padding:32px;box-sizing:border-box;z-index:3;transform:translateZ(45px);transform-style:preserve-3d;transition:transform 0.15s}
.header{display:flex;justify-content:space-between;align-items:start}
.sys-label{font-family:monospace;font-size:9px;color:rgba(168,85,247,0.6);line-height:1.4}
.sys-title{font-weight:bold;color:#a855f7;text-transform:uppercase;letter-spacing:1px}
.status{display:flex;align-items:center;gap:6px;padding:6px 12px;border-radius:99px;border:1px solid rgba(168,85,247,0.2);background:rgba(30,10,60,0.4);backdrop-filter:blur(10px);font-family:monospace;font-size:8px;color:#d946ef}
.status-dot{width:6px;height:6px;border-radius:50%;background:#d946ef;animation:pulse 1.5s infinite}
@keyframes pulse{0%,100%{transform:scale(0.8);opacity:0.5}50%{transform:scale(1.2);opacity:1}}
.footer{display:flex;flex-direction:column;gap:16px;margin-top:auto}
.title{font-size:22px;font-weight:500;color:#fff;margin:0;letter-spacing:0.5px}
.desc{font-size:13px;color:rgba(216,180,254,0.5);line-height:1.6;margin:0}
.divider{height:1px;background:rgba(168,85,247,0.1);width:100%}
.telemetry{display:flex;justify-content:space-between;align-items:center;font-family:monospace;font-size:10px}
.stats{display:flex;gap:16px;color:rgba(168,85,247,0.5)}
.stat-item{display:flex;flex-direction:column}
.val{color:#fff;font-weight:bold}
.btn{display:flex;align-items:center;justify-content:center;width:32px;height:32px;border-radius:50%;border:1px solid rgba(168,85,247,0.3);background:rgba(30,10,60,0.5);color:#d946ef;transition:all 0.3s;box-shadow:0 0 15px rgba(168,85,247,0.15)}
.card:hover .btn{transform:scale(1.05);background:#d946ef;color:#0f172a}
</style></head><body>
<div class="card-container">
  <div class="card" id="card">
    <div class="border-glow"></div>
    <canvas id="canvas"></canvas>
    <div class="content">
      <div class="header">
        <div class="sys-label">
          <div class="sys-title">Chrono Core</div>
          <div>ENGINE STATE: STABLE</div>
        </div>
        <div class="status">
          <span class="status-dot" id="dot"></span>
          <span id="statusText">ACTIVE</span>
        </div>
      </div>
      <div class="footer">
        <h3 class="title">Nebula Reactor Core</h3>
        <p class="desc">A live generative cosmic cluster. Hover to affect rotation gravity. Click to trigger supernova blast.</p>
        <div class="divider"></div>
        <div class="telemetry">
          <div class="stats">
            <div class="stat-item">
              <span>CAPACITY</span>
              <span class="val" id="charge">100%</span>
            </div>
            <div class="stat-item">
              <span>PARTICLES</span>
              <span class="val" id="particles">500</span>
            </div>
          </div>
          <button class="btn">
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
<script>
const card=document.getElementById('card'),canvas=document.getElementById('canvas'),dot=document.getElementById('dot'),statusText=document.getElementById('statusText'),chargeText=document.getElementById('charge'),particlesText=document.getElementById('particles');
const ctx=canvas.getContext('2d');
let w=canvas.width=340,h=canvas.height=460;
let tx=0,ty=0,time=0,supernovaActive=false,isHovered=false;
const mouse={x:-999,y:-999,active:false};

card.addEventListener('mousemove',e=>{
  const r=card.getBoundingClientRect();
  const x=e.clientX-r.left-r.width/2;
  const y=e.clientY-r.top-r.height/2;
  tx=-(y/r.height)*8;
  ty=(x/r.width)*8;
  card.style.transform='rotateX('+tx+'deg) rotateY('+ty+'deg) scale(1.02)';
  
  mouse.x=e.clientX-r.left;
  mouse.y=e.clientY-r.top;
  mouse.active=true;
});
card.addEventListener('mouseleave',()=>{
  tx=0;ty=0;isHovered=false;mouse.active=false;
  card.style.transform='';
});
card.addEventListener('mouseenter',()=>{isHovered=true;});
card.addEventListener('click',()=>{\n  if(supernovaActive)return;\n  supernovaActive=true;\n  chargeText.textContent='350%';\n  chargeText.style.color='#f43f5e';\n  dot.style.background='#f43f5e';\n  statusText.textContent='COLLAPSED';\n  statusText.style.color='#f43f5e';\n  particlesText.textContent='800';\n  setTimeout(()=>{\n    supernovaActive=false;\n    chargeText.textContent='100%';\n    chargeText.style.color='#fff';\n    dot.style.background='#d946ef';\n    statusText.textContent='ACTIVE';\n    statusText.style.color='#d946ef';\n    particlesText.textContent='500';\n  },1200);\n});

const particles=[];
for(let i=0;i<800;i++){
  const angle=Math.random()*Math.PI*2;
  const distance=10+Math.random()*85;
  const colors=['#8b5cf6','#ec4899','#3b82f6','#f59e0b','#10b981'];
  particles.push({
    angle,
    distance,
    baseDistance:distance,
    speed:0.005+Math.random()*0.015,
    size:Math.random()*1.5+0.3,
    color:colors[Math.floor(Math.random()*colors.length)],
    px:0,py:0,vx:0,vy:0
  });
}

function animate(){
  ctx.fillStyle='rgba(5,5,10,0.12)';
  ctx.fillRect(0,0,w,h);
  time+=0.01;

  const cx=w/2,cy=h/2;
  const corePulse=Math.sin(time*5)*4+(supernovaActive?22:12);
  const grad=ctx.createRadialGradient(cx,cy,2,cx,cy,corePulse);
  grad.addColorStop(0,supernovaActive?'#ffffff':'#f59e0b');
  grad.addColorStop(0.3,supernovaActive?'#f43f5e':'#ec4899');
  grad.addColorStop(0.7,'rgba(139,92,246,0.35)');
  grad.addColorStop(1,'rgba(59,130,246,0)');
  ctx.fillStyle=grad;
  ctx.beginPath();ctx.arc(cx,cy,corePulse*1.5,0,Math.PI*2);ctx.fill();

  const activeCount=supernovaActive?800:500;
  particles.slice(0,activeCount).forEach((p,idx)=>{
    if(supernovaActive){
      if(time%1.2<0.25){
        p.vx=Math.cos(p.angle)*15;
        p.vy=Math.sin(p.angle)*15;
      }else{
        p.vx*=0.88;p.vy*=0.88;
        p.vx+=(cx-p.px)*0.012;
        p.vy+=(cy-p.py)*0.012;
      }
      p.px+=p.vx;p.py+=p.vy;
    }else{
      p.angle+=p.speed*(isHovered?1.5:1);
      const breath=Math.sin(time*2+p.baseDistance)*6;
      let finalX=cx+Math.cos(p.angle)*(p.baseDistance+breath);
      let finalY=cy+Math.sin(p.angle)*(p.baseDistance+breath);
      if(mouse.active){
        const dx=mouse.x-finalX,dy=mouse.y-finalY;
        const d=Math.sqrt(dx*dx+dy*dy);
        if(d<80){
          finalX+=(dx/d)*(1-d/80)*16;
          finalY+=(dy/d)*(1-d/80)*16;
        }
      }
      p.px+=(finalX-p.px)*0.15;
      p.py+=(finalY-p.py)*0.15;
    }
    const alpha=0.35+Math.sin(time*3+idx)*0.3;
    ctx.fillStyle=p.color;
    ctx.globalAlpha=supernovaActive?0.95:alpha;
    ctx.beginPath();ctx.arc(p.px,p.py,supernovaActive?p.size*1.8:p.size,0,Math.PI*2);ctx.fill();
  });

  ctx.globalAlpha=1;
  ctx.strokeStyle=supernovaActive?'rgba(244,63,94,0.15)':'rgba(139,92,246,0.06)';
  ctx.beginPath();ctx.arc(cx,cy,60,0,Math.PI*2);ctx.stroke();
  requestAnimationFrame(animate);
}
animate();
</script></body></html>`,
    code: `'use client'\n\nimport React, { useRef, useState, useEffect } from 'react'\n\nexport default function CosmicNebulaReactorCard() {\n  const cardRef = useRef<HTMLDivElement>(null)\n  const canvasRef = useRef<HTMLCanvasElement>(null)\n  const [isHovered, setIsHovered] = useState(false)\n  const [rotation, setRotation] = useState({ x: 0, y: 0 })\n  const [supernovaActive, setSupernovaActive] = useState(false)\n  const [charge, setCharge] = useState(100)\n  const [particleCount, setParticleCount] = useState(500)\n\n  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {\n    if (!cardRef.current) return\n    const rect = cardRef.current.getBoundingClientRect()\n    const x = e.clientX - rect.left - rect.width / 2\n    const y = e.clientY - rect.top - rect.height / 2\n    \n    const rotateX = -(y / rect.height) * 8\n    const rotateY = (x / rect.width) * 8\n    setRotation({ x: rotateX, y: rotateY })\n  }\n\n  const handleMouseLeave = () => {\n    setIsHovered(false)\n    setRotation({ x: 0, y: 0 })\n  }\n\n  const triggerSupernova = () => {\n    if (supernovaActive) return\n    setSupernovaActive(true)\n    setCharge(350)\n    setParticleCount(800)\n    setTimeout(() => {\n      setSupernovaActive(false)\n      setCharge(100)\n      setParticleCount(500)\n    }, 1200)\n  }\n\n  useEffect(() => {\n    const canvas = canvasRef.current\n    if (!canvas) return\n    const ctx = canvas.getContext('2d')\n    if (!ctx) return\n\n    let animationId: number\n    let time = 0\n    let mouse = { x: -999, y: -999, active: false }\n\n    const resizeCanvas = () => {\n      const rect = canvas.getBoundingClientRect()\n      canvas.width = rect.width * (window.devicePixelRatio || 1)\n      canvas.height = rect.height * (window.devicePixelRatio || 1)\n      ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1)\n    }\n    resizeCanvas()\n    window.addEventListener('resize', resizeCanvas)\n\n    const handleCanvasMouseMove = (e: MouseEvent) => {\n      const rect = canvas.getBoundingClientRect()\n      mouse.x = e.clientX - rect.left\n      mouse.y = e.clientY - rect.top\n      mouse.active = true\n    }\n    const handleCanvasMouseLeave = () => {\n      mouse.active = false\n    }\n    canvas.addEventListener('mousemove', handleCanvasMouseMove)\n    canvas.addEventListener('mouseleave', handleCanvasMouseLeave)\n\n    interface Particle {\n      angle: number\n      distance: number\n      baseDistance: number\n      speed: number\n      size: number\n      color: string\n      px: number\n      py: number\n      vx: number\n      vy: number\n    }\n\n    const particles: Particle[] = []\n    for (let i = 0; i < 800; i++) {\n      const angle = Math.random() * Math.PI * 2\n      const distance = 10 + Math.random() * 85\n      const colors = ['#8b5cf6', '#ec4899', '#3b82f6', '#f59e0b', '#10b981']\n      particles.push({\n        angle,\n        distance,\n        baseDistance: distance,\n        speed: 0.005 + Math.random() * 0.015,\n        size: Math.random() * 1.5 + 0.3,\n        color: colors[Math.floor(Math.random() * colors.length)],\n        px: 0, py: 0, vx: 0, vy: 0\n      })\n    }\n\n    const animate = () => {\n      const w = canvas.width / (window.devicePixelRatio || 1)\n      const h = canvas.height / (window.devicePixelRatio || 1)\n      ctx.fillStyle = 'rgba(5, 5, 10, 0.12)'\n      ctx.fillRect(0, 0, w, h)\n\n      time += 0.01\n\n      const cx = w / 2\n      const cy = h / 2\n      const corePulse = Math.sin(time * 5) * 4 + (supernovaActive ? 22 : 12)\n      const grad = ctx.createRadialGradient(cx, cy, 2, cx, cy, corePulse)\n      grad.addColorStop(0, supernovaActive ? '#ffffff' : '#f59e0b')\n      grad.addColorStop(0.3, supernovaActive ? '#f43f5e' : '#ec4899')\n      grad.addColorStop(0.7, 'rgba(139, 92, 246, 0.35)')\n      grad.addColorStop(1, 'rgba(59, 130, 246, 0)')\n      ctx.fillStyle = grad\n      ctx.beginPath()\n      ctx.arc(cx, cy, corePulse * 1.5, 0, Math.PI * 2)\n      ctx.fill()\n\n      const activeCount = supernovaActive ? 800 : 500\n      particles.slice(0, activeCount).forEach((p, idx) => {\n        if (supernovaActive) {\n          if (time % 1.2 < 0.25) {\n            p.vx = Math.cos(p.angle) * 15\n            p.vy = Math.sin(p.angle) * 15\n          } else {\n            p.vx *= 0.88\n            p.vy *= 0.88\n            p.vx += (cx - p.px) * 0.012\n            p.vy += (cy - p.py) * 0.012\n          }\n          p.px += p.vx\n          p.py += p.vy\n        } else {\n          p.angle += p.speed * (isHovered ? 1.5 : 1)\n          const breath = Math.sin(time * 2 + p.baseDistance) * 6\n          let finalX = cx + Math.cos(p.angle) * (p.baseDistance + breath)\n          let finalY = cy + Math.sin(p.angle) * (p.baseDistance + breath)\n          if (mouse.active) {\n            const dx = mouse.x - finalX\n            const dy = mouse.y - finalY\n            const d = Math.sqrt(dx * dx + dy * dy)\n            if (d < 80) {\n              finalX += (dx / d) * (1 - d / 80) * 16\n              finalY += (dy / d) * (1 - d / 80) * 16\n            }\n          }\n          p.px += (finalX - p.px) * 0.15\n          p.py += (finalY - p.py) * 0.15\n        }\n        const alpha = 0.35 + Math.sin(time * 3 + idx) * 0.3\n        ctx.fillStyle = p.color\n        ctx.globalAlpha = supernovaActive ? 0.95 : alpha\n        ctx.beginPath()\n        ctx.arc(p.px, p.py, supernovaActive ? p.size * 1.8 : p.size, 0, Math.PI * 2)\n        ctx.fill()\n      })\n\n      ctx.globalAlpha = 1.0\n      ctx.strokeStyle = supernovaActive ? 'rgba(244, 63, 94, 0.15)' : 'rgba(139, 92, 246, 0.06)'\n      ctx.beginPath()\n      ctx.arc(cx, cy, 60, 0, Math.PI * 2)\n      ctx.stroke()\n\n      animationId = requestAnimationFrame(animate)\n    }\n    animate()\n\n    return () => {\n      cancelAnimationFrame(animationId)\n      window.removeEventListener('resize', resizeCanvas)\n      canvas.removeEventListener('mousemove', handleCanvasMouseMove)\n      canvas.removeEventListener('mouseleave', handleCanvasMouseLeave)\n    }\n  }, [rotation, supernovaActive, isHovered, particleCount])\n\n  return (\n    <div className=\"w-full h-full flex items-center justify-center p-4\">\n      <div\n        ref={cardRef}\n        onClick={triggerSupernova}\n        onMouseMove={handleMouseMove}\n        onMouseLeave={handleMouseLeave}\n        onMouseEnter={() => setIsHovered(true)}\n        className=\"relative w-[340px] h-[460px] rounded-[32px] cursor-pointer group select-none overflow-hidden\"\n        style={{\n          perspective: 1200,\n          transformStyle: 'preserve-3d',\n          background: 'rgba(12, 10, 16, 0.8)',\n          boxShadow: isHovered \n            ? '0 30px 90px -10px rgba(139, 92, 246, 0.22), 0 0 1px 1px rgba(139, 92, 246, 0.2), inset 0 1px 0 0 rgba(255, 255, 255, 0.15)'\n            : '0 20px 50px -25px rgba(0, 0, 0, 0.85), 0 0 1px 1px rgba(255, 255, 255, 0.04), inset 0 1px 0 0 rgba(255, 255, 255, 0.05)',\n          transform: \`rotateX(\${rotation.x}deg) rotateY(\${rotation.y}deg) scale(\${isHovered ? 1.02 : 1})\`,\n          transition: 'transform 0.15s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.3s ease',\n        }}\n      >\n        <div\n          className={\`absolute inset-0 z-0 pointer-events-none rounded-[32px] p-[1.5px] before:content-[""] before:absolute before:inset-0 before:rounded-[32px] before:bg-[conic-gradient(from_180deg,transparent_30%,#a855f7_45%,#f43f5e_55%,#eab308_70%,transparent_85%)] before:will-change-transform before:animate-[spin_7s_linear_infinite] before:[mask-image:linear-gradient(#fff_0_0)_content-box,_linear-gradient(#fff_0_0)] before:![mask-composite:exclude] before:![-webkit-mask-composite:xor] \${\n            isHovered ? 'opacity-100' : 'opacity-40'\n          }\`}\n          style={{ transition: 'opacity 0.4s' }}\n        />\n\n        <canvas\n          ref={canvasRef}\n          className=\"absolute inset-0 w-full h-full pointer-events-none z-10\"\n        />\n\n        <div\n          className=\"absolute inset-0 pointer-events-none z-20\"\n          style={{\n            background: \`radial-gradient(circle at \${isHovered ? '50%' : '100%'} \${isHovered ? '20%' : '100%'}, rgba(255, 255, 255, 0.05) 0%, transparent 55%)\`,\n            transition: 'background 0.4s ease',\n          }}\n        />\n\n        <div \n          className=\"relative h-full flex flex-col justify-between p-8 z-30 select-none\"\n          style={{\n            transform: 'translateZ(45px)',\n            transformStyle: 'preserve-3d',\n            transition: 'transform 0.15s cubic-bezier(0.25, 1, 0.5, 1)',\n          }}\n        >\n          <div className=\"flex justify-between items-start\">\n            <div className=\"flex flex-col gap-1 font-mono text-[9px] text-purple-400/60 leading-none\">\n              <span className=\"font-bold uppercase tracking-widest text-purple-400\">Chrono Core</span>\n              <span>ENGINE STATE: STABLE</span>\n            </div>\n            \n            <div className=\"flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border border-purple-500/20 bg-purple-950/40 backdrop-blur-md font-mono text-[8px] text-purple-300\">\n              <span className={\`w-1.5 h-1.5 rounded-full \${supernovaActive ? 'bg-rose-500 animate-ping' : 'bg-amber-400 animate-pulse'}\`} />\n              <span className=\"tracking-wider uppercase font-semibold\">\n                {supernovaActive ? 'COLLAPSED' : 'ACTIVE'}\n              </span>\n            </div>\n          </div>\n\n          <div className=\"my-auto pointer-events-none\" />\n\n          <div className=\"flex flex-col gap-4\">\n            <div className=\"flex flex-col gap-1.5\">\n              <h3 className=\"text-xl font-medium text-white leading-tight tracking-wide\">\n                Nebula Reactor Core\n              </h3>\n              <p className="text-[13px] text-purple-200/50 font-light leading-relaxed\">\n                A live generative cosmic cluster. Hover to affect rotation gravity. Click to trigger supernova blast.\n              </p>\n            </div>\n\n            <div className=\"h-[1px] bg-purple-500/10 w-full\" />\n\n            <div className=\"flex justify-between items-center font-mono text-[10px]\">\n              <div className="flex gap-4 text-purple-400/55\">\n                <div className="flex flex-col">\n                  <span>CAPACITY</span>\n                  <span className=\"text-white font-bold transition-colors duration-300\" style={{ color: supernovaActive ? '#f43f5e' : '#fff' }}>\n                    {charge}%\n                  </span>\n                </div>\n                <div className="flex flex-col">\n                  <span>PARTICLES</span>\n                  <span className=\"text-white font-bold\">\n                    {particleCount}\n                  </span>\n                </div>\n              </div>\n\n              <button className="flex items-center justify-center w-8 h-8 rounded-full border border-purple-500/30 bg-purple-950/50 hover:bg-purple-500 hover:text-slate-950 text-purple-400 transition-all duration-300 shadow-[0_0_15px_rgba(139,92,246,0.15)] group-hover:scale-105 active:scale-95\">\n                <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg\">\n                  <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />\n                </svg>\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  )` ,
    prompt: `Create an advanced Cosmic Nebula Reactor Card component:
• Swirling Particle Nebula: Generative HTML5 Canvas rendering of orbital space dust attracted gravitationally to cursor location.
• Active plasma outline: Dual-masked conic sweep border that animates smoothly along the glass border edge.
• Interactive supernova gravity collapse: Click collapsing all particles into the central core followed by radial blast waves.`,
    likes: 0,
    author: "Animation AI",
    featured: true,
    createdAt: "2026-05-22T10:00:00.000Z",
    updatedAt: "2026-05-22T10:00:00.000Z"
  },
  {
    slug: "quantum-bio-mesh-card",
    title: "Quantum Bio-Mesh Scanner Card",
    category: "cards",
    tag: "canvas",
    description: "An advanced biometric scan card featuring a sweeping neon-gradient laser line and an interactive grid of shimmering micro-nodes that pulse when scanned or hovered, complete with a dual-masked conic active frame.",
    previewCode: `<!DOCTYPE html><html><head><style>
body,html{margin:0;padding:0;width:100%;height:100%;overflow:hidden;background:#05080c;display:flex;align-items:center;justify-content:center;font-family:sans-serif}
.card-container{perspective:1200px}
.card{position:relative;width:340px;height:460px;border-radius:32px;background:rgba(8,12,20,0.85);box-shadow:0 20px 60px -25px rgba(0,0,0,0.85);transform-style:preserve-3d;cursor:pointer;transition:transform 0.15s cubic-bezier(0.25,1,0.5,1),box-shadow 0.3s ease;overflow:hidden}
.card:hover{transform:scale(1.02);box-shadow:0 30px 100px -15px rgba(16,185,129,0.2)}
.border-glow{position:absolute;inset:0;pointer-events:none;border-radius:32px;padding:1.5px;opacity:0.3;transition:opacity 0.4s}
.card:hover .border-glow{opacity:1}
.border-glow::before{content:"";position:absolute;inset:0;border-radius:32px;background:conic-gradient(from 90deg,transparent 30%,#10b981 50%,#06b6d4 60%,transparent 80%);animation:spin 6s linear infinite;mask-image:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);mask-composite:exclude;-webkit-mask-composite:xor;mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0)}
@keyframes spin{to{transform:rotate(360deg)}}
canvas{position:absolute;inset:0;width:100%;height:100%;z-index:1;pointer-events:none}
.content{position:relative;height:100%;display:flex;flex-direction:column;justify-content:between;padding:32px;box-sizing:border-box;z-index:3;transform:translateZ(40px);transform-style:preserve-3d;transition:transform 0.15s}
.header{display:flex;justify-content:space-between;align-items:start}
.sys-label{font-family:monospace;font-size:9px;color:rgba(6,182,212,0.6);line-height:1.4}
.sys-title{font-weight:bold;color:#06b6d4;text-transform:uppercase;letter-spacing:1px}
.status{display:flex;align-items:center;gap:6px;padding:6px 12px;border-radius:99px;border:1px solid rgba(16,185,129,0.25);background:rgba(6,30,20,0.4);backdrop-filter:blur(10px);font-family:monospace;font-size:9px;color:#10b981}
.status-dot{width:6px;height:6px;border-radius:50%;background:#10b981;animation:pulse 1.5s infinite}
@keyframes pulse{0%,100%{transform:scale(0.8);opacity:0.5}50%{transform:scale(1.2);opacity:1}}
.footer{display:flex;flex-direction:column;gap:16px;margin-top:auto}
.title{font-size:20px;font-weight:500;color:#fff;margin:0;letter-spacing:0.5px}
.desc{font-size:12px;color:rgba(168,230,248,0.55);line-height:1.6;margin:0}
.divider{height:1px;background:rgba(6,182,212,0.1);width:100%}
.telemetry{display:flex;justify-content:space-between;align-items:center;font-family:monospace;font-size:10px}
.stats{display:flex;gap:16px;color:rgba(6,182,212,0.5)}
.stat-item{display:flex;flex-direction:column}
.val{color:#fff;font-weight:bold}
.btn{display:flex;align-items:center;justify-content:center;width:32px;height:32px;border-radius:50%;border:1px solid rgba(16,185,129,0.3);background:rgba(6,30,20,0.5);color:#10b981;transition:all 0.3s;box-shadow:0 0 15px rgba(16,185,129,0.15)}
.card:hover .btn{transform:scale(1.05);background:#10b981;color:#05080c}
.laser-line{position:absolute;left:0;right:0;height:2px;background:linear-gradient(90deg,transparent,#10b981,#06b6d4,#10b981,transparent);z-index:2;opacity:0.7;pointer-events:none}
</style></head><body>
<div class="card-container">
  <div class="card" id="card">
    <div class="border-glow"></div>
    <div class="laser-line" id="laser"></div>
    <canvas id="canvas"></canvas>
    <div class="content">
      <div class="header">
        <div class="sys-label">
          <div class="sys-title">Bio-Mesh Scan</div>
          <div>MODEL: BIO-V3</div>
        </div>
        <div class="status">
          <span class="status-dot" id="dot"></span>
          <span id="statusText">SCANNING</span>
        </div>
      </div>
      <div class="footer">
        <h3 class="title">Quantum Bio-Mesh</h3>
        <p class="desc">A grid of organic micro-pixels reacting to biometric scan proximity. Click to authenticate access.</p>
        <div class="divider"></div>
        <div class="telemetry">
          <div class="stats">
            <div class="stat-item">
              <span>ACCURACY</span>
              <span class="val" id="accuracy">98.4%</span>
            </div>
            <div class="stat-item">
              <span>INDEX</span>
              <span class="val" id="index">GRID_OK</span>
            </div>
          </div>
          <button class="btn">
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 16H7v-2h2v2zm3-3H4v-1h8v1zm1-3H3V9h10v1zm1-3H2V6h12v1zm-3-3H5V3h6v1zm2-3H3V0h10v1z" fill="currentColor"/></svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
<script>
const card=document.getElementById('card'),canvas=document.getElementById('canvas'),laser=document.getElementById('laser'),dot=document.getElementById('dot'),statusText=document.getElementById('statusText'),accuracy=document.getElementById('accuracy'),indexVal=document.getElementById('index');
const ctx=canvas.getContext('2d');
let w=canvas.width=340,h=canvas.height=460;
let tx=0,ty=0,time=0,authActive=false,isHovered=false;
const mouse={x:-999,y:-999,active:false};

card.addEventListener('mousemove',e=>{\n  const r=card.getBoundingClientRect();\n  const x=e.clientX-r.left-r.width/2;\n  const y=e.clientY-r.top-r.height/2;\n  tx=-(y/r.height)*8;\n  ty=(x/r.width)*8;\n  card.style.transform='rotateX('+tx+'deg) rotateY('+ty+'deg) scale(1.02)';\n  mouse.x=e.clientX-r.left;\n  mouse.y=e.clientY-r.top;\n  mouse.active=true;\n});
card.addEventListener('mouseleave',()=>{
  tx=0;ty=0;isHovered=false;mouse.active=false;
  card.style.transform='';
});
card.addEventListener('mouseenter',()=>{isHovered=true;});
card.addEventListener('click',()=>{
  if(authActive)return;
  authActive=true;
  dot.style.background='#06b6d4';
  statusText.textContent='AUTHORIZED';
  statusText.style.color='#06b6d4';
  accuracy.textContent='100.0%';
  indexVal.textContent='VERIFIED';
  setTimeout(()=>{
    authActive=false;
    dot.style.background='#10b981';
    statusText.textContent='SCANNING';
    statusText.style.color='#10b981';
    accuracy.textContent='98.4%';
    indexVal.textContent='GRID_OK';
  },2000);
});

const gap=8,pixels=[];
for(let x=5;x<w;x+=gap){
  for(let y=5;y<h;y+=gap){
    pixels.push({
      x,y,
      size:0,
      maxSize:Math.random()*2+1,
      speed:0.05+Math.random()*0.1,
      shimmerSpeed:0.02+Math.random()*0.03,
      isReverse:false
    });
  }
}

function animate(){
  ctx.fillStyle='rgba(5,8,12,0.25)';
  ctx.fillRect(0,0,w,h);
  time+=0.02;

  const scanY=(Math.sin(time)*0.5+0.5)*h;
  laser.style.top=scanY+'px';

  pixels.forEach(p=>{\n    const dx=p.x-mouse.x,dy=p.y-mouse.y;\n    const dist=Math.sqrt(dx*dx+dy*dy);\n    const inScanRange=Math.abs(p.y-scanY)<25;\n\n    let targetSize=0.5;\n    if(authActive){\n      targetSize=p.maxSize*1.5;\n    }else if(mouse.active && dist<50){\n      targetSize=p.maxSize*2*(1-dist/50);\n    }else if(inScanRange){\n      targetSize=p.maxSize*1.2;\n    }\n\n    if(p.size<targetSize){\n      p.size+=p.speed;\n    }else if(p.size>targetSize){\n      p.size-=p.speed*0.5;\n    }\n\n    if(p.size>0.2){\n      if(p.isReverse){\n        p.size-=p.shimmerSpeed;\n        if(p.size<0.5)p.isReverse=false;\n      }else{\n        p.size+=p.shimmerSpeed;\n        if(p.size>p.maxSize*2)p.isReverse=true;\n      }\n    }\n\n    p.size=Math.max(0,p.size);\n\n    ctx.fillStyle=authActive\n      ? 'rgba(6,182,212,'+(0.4+Math.sin(time*5)*0.2)+')'\n      : mouse.active && dist<50\n        ? 'rgba(16,185,129,0.7)'\n        : inScanRange\n          ? 'rgba(6,182,212,0.65)'\n          : 'rgba(6,182,212,0.15)';\n          \n    ctx.fillRect(p.x,p.y,p.size,p.size);\n  });

  requestAnimationFrame(animate);
}
animate();
</script></body></html>`,
    code: `'use client'

import React, { useRef, useState, useEffect } from 'react'

export default function QuantumBioMeshCard() {
  const cardRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const [authActive, setAuthActive] = useState(false)
  const [accuracy, setAccuracy] = useState('98.4%')
  const [status, setStatus] = useState('SCANNING')
  const [gridIndex, setGridIndex] = useState('GRID_OK')

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    
    const rotateX = -(y / rect.height) * 8
    const rotateY = (x / rect.width) * 8
    setRotation({ x: rotateX, y: rotateY })
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setRotation({ x: 0, y: 0 })
  }

  const triggerAuth = () => {
    if (authActive) return
    setAuthActive(true)
    setStatus('AUTHORIZED')
    setAccuracy('100.0%')
    setGridIndex('VERIFIED')
    setTimeout(() => {
      setAuthActive(false)
      setStatus('SCANNING')
      setAccuracy('98.4%')
      setGridIndex('GRID_OK')
    }, 2000)
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let time = 0
    let mouse = { x: -999, y: -999, active: false }

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * (window.devicePixelRatio || 1)
      canvas.height = rect.height * (window.devicePixelRatio || 1)
      ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1)
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const handleCanvasMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
      mouse.active = true
    }
    const handleCanvasMouseLeave = () => {
      mouse.active = false
    }
    canvas.addEventListener('mousemove', handleCanvasMouseMove)
    canvas.addEventListener('mouseleave', handleCanvasMouseLeave)

    interface Node {
      x: number
      y: number
      size: number
      maxSize: number
      speed: number
      shimmerSpeed: number
      isReverse: boolean
    }

    const gap = 8
    const pixels: Node[] = []
    const w = 340
    const h = 460

    for (let x = 5; x < w; x += gap) {
      for (let y = 5; y < h; y += gap) {
        pixels.push({
          x,
          y,
          size: 0,
          maxSize: Math.random() * 2 + 1,
          speed: 0.05 + Math.random() * 0.1,
          shimmerSpeed: 0.02 + Math.random() * 0.03,
          isReverse: false
        })
      }
    }

    const drawGrid = () => {
      const cvWidth = canvas.width / (window.devicePixelRatio || 1)
      const cvHeight = canvas.height / (window.devicePixelRatio || 1)
      ctx.fillStyle = 'rgba(5, 8, 12, 0.25)'
      ctx.fillRect(0, 0, cvWidth, cvHeight)

      time += 0.02

      const scanY = (Math.sin(time) * 0.5 + 0.5) * cvHeight

      pixels.forEach(p => {
        const dx = p.x - mouse.x
        const dy = p.y - mouse.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        const inScanRange = Math.abs(p.y - scanY) < 25

        let targetSize = 0.5
        if (authActive) {
          targetSize = p.maxSize * 1.5
        } else if (mouse.active && dist < 50) {
          targetSize = p.maxSize * 2 * (1 - dist / 50)
        } else if (inScanRange) {
          targetSize = p.maxSize * 1.2
        }

        if (p.size < targetSize) {
          p.size += p.speed
        } else if (p.size > targetSize) {
          p.size -= p.speed * 0.5
        }

        if (p.size > 0.2) {
          if (p.isReverse) {
            p.size -= p.shimmerSpeed
            if (p.size < 0.5) p.isReverse = false
          } else {
            p.size += p.shimmerSpeed
            if (p.size > p.maxSize * 2) p.isReverse = true
          }
        }

        p.size = Math.max(0, p.size)

        ctx.fillStyle = authActive
          ? \`rgba(6, 182, 212, \${0.4 + Math.sin(time * 5) * 0.2})\`
          : mouse.active && dist < 50
            ? 'rgba(16, 185, 129, 0.7)'
            : inScanRange
              ? 'rgba(6, 182, 212, 0.65)'
              : 'rgba(6, 182, 212, 0.15)'
              
        ctx.fillRect(p.x, p.y, p.size, p.size)
      })

      animationFrameId = requestAnimationFrame(drawGrid)
    }
    drawGrid()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', resizeCanvas)
      canvas.removeEventListener('mousemove', handleCanvasMouseMove)
      canvas.removeEventListener('mouseleave', handleCanvasMouseLeave)
    }
  }, [authActive])

  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <div
        ref={cardRef}
        onClick={triggerAuth}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={() => setIsHovered(true)}
        className="relative w-[340px] h-[460px] rounded-[32px] cursor-pointer group select-none overflow-hidden"
        style={{
          perspective: 1200,
          transformStyle: 'preserve-3d',
          background: 'rgba(8, 12, 20, 0.85)',
          boxShadow: isHovered 
            ? '0 30px 100px -15px rgba(16, 185, 129, 0.2), 0 0 1px 1px rgba(16, 185, 129, 0.15), inset 0 1px 0 0 rgba(255, 255, 255, 0.1)'
            : '0 20px 60px -25px rgba(0, 0, 0, 0.85), 0 0 1px 1px rgba(255, 255, 255, 0.05), inset 0 1px 0 0 rgba(255, 255, 255, 0.05)',
          transform: \`rotateX(\${rotation.x}deg) rotateY(\${rotation.y}deg) scale(\${isHovered ? 1.02 : 1})\`,
          transition: 'transform 0.15s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.3s ease',
        }}
      >
        <div
          className={\`absolute inset-0 z-0 pointer-events-none rounded-[32px] p-[1.5px] before:content-[""] before:absolute before:inset-0 before:rounded-[32px] before:bg-[conic-gradient(from_90deg,transparent_30%,#10b981_50%,#06b6d4_60%,transparent_80%)] before:will-change-transform before:animate-[spin_6s_linear_infinite] before:[mask-image:linear-gradient(#fff_0_0)_content-box,_linear-gradient(#fff_0_0)] before:![mask-composite:exclude] before:![-webkit-mask-composite:xor] \${
            isHovered ? 'opacity-100' : 'opacity-30'
          }\`}
          style={{ transition: 'opacity 0.4s' }}
        />
        
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none z-10"
        />

        <div
          className="absolute inset-0 pointer-events-none z-20"
          style={{
            background: \`radial-gradient(circle at \${isHovered ? '45%' : '0%'} \${isHovered ? '25%' : '0%'}, rgba(255, 255, 255, 0.05) 0%, transparent 60%)\`,
            transition: 'background 0.5s ease',
          }}
        />

        <div 
          className="relative h-full flex flex-col justify-between p-8 z-30 select-none"
          style={{
            transform: 'translateZ(40px)',
            transformStyle: 'preserve-3d',
            transition: 'transform 0.15s cubic-bezier(0.25, 1, 0.5, 1)',
          }}
        >
          <div className="flex justify-between items-start">
            <div className="flex flex-col gap-1 font-mono text-[9px] text-cyan-400/60 leading-none">
              <span className="font-bold uppercase tracking-widest text-cyan-400">Bio-Mesh Scan</span>
              <span>MODEL: BIO-V3</span>
            </div>
            
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-400/20 bg-emerald-950/40 backdrop-blur-md font-mono text-[9px] text-emerald-400">
              <span className={\`w-1.5 h-1.5 rounded-full \${authActive ? 'bg-cyan-400 animate-ping' : 'bg-emerald-400 animate-pulse'}\`} />
              <span className="tracking-wider uppercase font-semibold">{status}</span>
            </div>
          </div>

          <div className="my-auto pointer-events-none" />

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <h3 className="text-xl font-medium text-white leading-tight font-sans tracking-wide">
                Quantum Bio-Mesh
              </h3>
              <p className="text-[13px] text-cyan-300/60 font-light leading-relaxed font-sans">
                A grid of organic micro-pixels reacting to biometric scan proximity. Click to authenticate access.
              </p>
            </div>

            <div className="h-[1px] bg-cyan-400/10 w-full" />

            <div className="flex justify-between items-center font-mono text-[10px]">
              <div className="flex gap-4 text-cyan-400/55">
                <div className="flex flex-col">
                  <span>ACCURACY</span>
                  <span className="text-white font-bold transition-colors duration-300">
                    {accuracy}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span>INDEX</span>
                  <span className="text-white font-bold">
                    {gridIndex}
                  </span>
                </div>
              </div>

              <button className="flex items-center justify-center w-8 h-8 rounded-full border border-emerald-400/30 bg-emerald-950/50 hover:bg-emerald-400 hover:text-slate-950 text-emerald-400 transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.15)] group-hover:scale-105 active:scale-95">
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 16H7v-2h2v2zm3-3H4v-1h8v1zm1-3H3V9h10v1zm1-3H2V6h12v1zm-3-3H5V3h6v1zm2-3H3V0h10v1z" fill="currentColor" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )` ,
    prompt: `Create an advanced Quantum Bio-Mesh Scanner Card component:
• Active scanning laser: Dynamic scanline sweep executing real-time Canvas node lighting, modulating pixel state shimmers on proximity intersections.
• Mask-composite border: Dynamic cyan/emerald sweeps operating under -webkit-mask-composite operations.
• Biometric state cycles: Click triggers a biometrics authentication cascade with full state and telemetry switches.`,
    likes: 0,
    author: "Animation AI",
    featured: true,
    createdAt: "2026-05-22T10:00:00.000Z",
    updatedAt: "2026-05-22T10:00:00.000Z"
  },
  {
    slug: "neural-synapse-matrix-card",
    title: "Neural Synapse Matrix Card",
    category: "cards",
    tag: "canvas",
    description: "An interactive luxury dark glass card framing a dynamic cognitive connection grid. Hovering fires synapse links directly to your cursor, and clicking propagates highly visual thought wave ripples.",
    previewCode: `<!DOCTYPE html><html><head><style>
body,html{margin:0;padding:0;width:100%;height:100%;overflow:hidden;background:#020204;display:flex;align-items:center;justify-content:center;font-family:sans-serif}
.card-container{perspective:1200px}
.card{position:relative;width:340px;height:460px;border-radius:32px;background:rgba(8,6,12,0.85);box-shadow:0 20px 50px -25px rgba(0,0,0,0.9);transform-style:preserve-3d;cursor:pointer;transition:transform 0.15s cubic-bezier(0.25,1,0.5,1),box-shadow 0.3s ease;overflow:hidden}
.card:hover{transform:scale(1.02);box-shadow:0 30px 90px -10px rgba(168,85,247,0.25)}
.border-glow{position:absolute;inset:0;pointer-events:none;border-radius:32px;padding:1.5px;opacity:0.3;transition:opacity 0.4s}
.card:hover .border-glow{opacity:1}
.border-glow::before{content:"";position:absolute;inset:0;border-radius:32px;background:conic-gradient(from 270deg,transparent 30%,#a855f7 50%,#f97316 65%,transparent 85%);animation:spin 8s linear infinite;mask-image:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);mask-composite:exclude;-webkit-mask-composite:xor;mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0)}
@keyframes spin{to{transform:rotate(360deg)}}
canvas{position:absolute;inset:0;width:100%;height:100%;z-index:1;pointer-events:none}
.content{position:relative;height:100%;display:flex;flex-direction:column;justify-content:between;padding:32px;box-sizing:border-box;z-index:3;transform:translateZ(45px);transform-style:preserve-3d;transition:transform 0.15s}
.header{display:flex;justify-content:space-between;align-items:start}
.sys-label{font-family:monospace;font-size:9px;color:rgba(168,85,247,0.6);line-height:1.4}
.sys-title{font-weight:bold;color:#a855f7;text-transform:uppercase;letter-spacing:1px}
.status{display:flex;align-items:center;gap:6px;padding:6px 12px;border-radius:99px;border:1px solid rgba(168,85,247,0.25);background:rgba(30,10,60,0.4);backdrop-filter:blur(10px);font-family:monospace;font-size:8px;color:#d946ef}
.status-dot{width:6px;height:6px;border-radius:50%;background:#d946ef;animation:pulse 1.5s infinite}
@keyframes pulse{0%,100%{transform:scale(0.8);opacity:0.5}50%{transform:scale(1.2);opacity:1}}
.footer{display:flex;flex-direction:column;gap:16px;margin-top:auto}
.title{font-size:22px;font-weight:500;color:#fff;margin:0;letter-spacing:0.5px}
.desc{font-size:12px;color:rgba(216,180,254,0.5);line-height:1.6;margin:0}
.divider{height:1px;background:rgba(168,85,247,0.1);width:100%}
.telemetry{display:flex;justify-content:space-between;align-items:center;font-family:monospace;font-size:10px}
.stats{display:flex;gap:16px;color:rgba(168,85,247,0.5)}
.stat-item{display:flex;flex-direction:column}
.val{color:#fff;font-weight:bold}
.btn{display:flex;align-items:center;justify-content:center;width:32px;height:32px;border-radius:50%;border:1px solid rgba(168,85,247,0.3);background:rgba(30,10,60,0.5);color:#d946ef;transition:all 0.3s;box-shadow:0 0 15px rgba(168,85,247,0.15)}
.card:hover .btn{transform:scale(1.05);background:#d946ef;color:#020204}
</style></head><body>
<div class="card-container">
  <div class="card" id="card">
    <div class="border-glow"></div>
    <canvas id="canvas"></canvas>
    <div class="content">
      <div class="header">
        <div class="sys-label">
          <div class="sys-title">Synapse Net</div>
          <div>NODES: 32 ACTIVE</div>
        </div>
        <div class="status">
          <span class="status-dot" id="dot"></span>
          <span id="statusText">SYNC_OK</span>
        </div>
      </div>
      <div class="footer">
        <h3 class="title">Neural Synapse</h3>
        <p class="desc">A dynamic cognitive connection grid. Hover to fire synapse links, click to propagate thought wave ripples.</p>
        <div class="divider"></div>
        <div class="telemetry">
          <div class="stats">
            <div class="stat-item">
              <span>SYNAPSES</span>
              <span class="val" id="synapses">0</span>
            </div>
            <div class="stat-item">
              <span>FREQUENCY</span>
              <span class="val" id="freq">45 Hz</span>
            </div>
          </div>
          <button class="btn">
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
<script>
const card=document.getElementById('card'),canvas=document.getElementById('canvas'),dot=document.getElementById('dot'),statusText=document.getElementById('statusText'),synapsesVal=document.getElementById('synapses'),freqVal=document.getElementById('freq');
const ctx=canvas.getContext('2d');
let w=canvas.width=340,h=canvas.height=460;
let tx=0,ty=0,time=0,rippleActive=false,rippleRadius=0,rippleX=0,rippleY=0,isHovered=false;
const mouse={x:-999,y:-999,active:false};

card.addEventListener('mousemove',e=>{\n  const r=card.getBoundingClientRect();\n  const x=e.clientX-r.left-r.width/2;\n  const y=e.clientY-r.top-r.height/2;\n  tx=-(y/r.height)*8;\n  ty=(x/r.width)*8;\n  card.style.transform='rotateX('+tx+'deg) rotateY('+ty+'deg) scale(1.02)';\n  mouse.x=e.clientX-r.left;\n  mouse.y=e.clientY-r.top;\n  mouse.active=true;\n});
card.addEventListener('mouseleave',()=>{
  tx=0;ty=0;isHovered=false;mouse.active=false;
  card.style.transform='';
});
card.addEventListener('mouseenter',()=>{isHovered=true;});
card.addEventListener('click',e=>{
  if(rippleActive)return;
  const r=card.getBoundingClientRect();
  rippleX=e.clientX-r.left;
  rippleY=e.clientY-r.top;
  rippleActive=true;
  rippleRadius=0;
  freqVal.textContent='120 Hz';
  freqVal.style.color='#f97316';
  statusText.textContent='PROPAGATING';
  setTimeout(()=>{
    rippleActive=false;
    freqVal.textContent='45 Hz';
    freqVal.style.color='#fff';
    statusText.textContent='SYNC_OK';
  },1000);
});

const nodes=[];
for(let i=0;i<35;i++){
  nodes.push({
    x:20+Math.random()*(w-40),
    y:40+Math.random()*(h-80),
    vx:(Math.random()-0.5)*0.8,
    vy:(Math.random()-0.5)*0.8,
    size:Math.random()*1.5+0.8,
    activePulse:0
  });
}

function animate(){
  ctx.fillStyle='rgba(8,6,12,0.18)';
  ctx.fillRect(0,0,w,h);
  time+=0.02;

  let activeConnections=0;

  nodes.forEach(n=>{\n    n.x+=n.vx;\n    n.y+=n.vy;\n\n    if(n.x<15||n.x>w-15)n.vx*=-1;\n    if(n.y<30||n.y>h-30)n.vy*=-1;\n\n    if(rippleActive){\n      const dx=n.x-rippleX,dy=n.y-rippleY;\n      const dist=Math.sqrt(dx*dx+dy*dy);\n      if(Math.abs(dist-rippleRadius)<15){\n        n.activePulse=1;\n      }\n    }\n\n    if(n.activePulse>0)n.activePulse-=0.02;\n\n    if(mouse.active){\n      const dx=n.x-mouse.x,dy=n.y-mouse.y;\n      const dist=Math.sqrt(dx*dx+dy*dy);\n      if(dist<85){\n        activeConnections++;\n        const alpha=(1-dist/85)*0.35;\n        ctx.strokeStyle='rgba(168,85,247,'+alpha+')';\n        ctx.lineWidth=0.8;\n        ctx.beginPath();ctx.moveTo(n.x,n.y);ctx.lineTo(mouse.x,mouse.y);ctx.stroke();\n      }\n    }\n\n    const glowSize=n.size*(1+n.activePulse*3);\n    ctx.fillStyle=n.activePulse>0\n      ? 'rgba(249,115,22,'+(0.4+n.activePulse*0.6)+')'\n      : 'rgba(168,85,247,0.45)';\n    ctx.beginPath();ctx.arc(n.x,n.y,glowSize,0,Math.PI*2);ctx.fill();\n  });

  synapsesVal.textContent=activeConnections;

  if(rippleActive){
    rippleRadius+=5;
    ctx.strokeStyle='rgba(249,115,22,'+Math.max(0,1-rippleRadius/(w*1.2))+')';
    ctx.lineWidth=1.5;
    ctx.beginPath();ctx.arc(rippleX,rippleY,rippleRadius,0,Math.PI*2);ctx.stroke();
  }

  requestAnimationFrame(animate);
}
animate();
</script></body></html>`,
    code: `'use client'

import React, { useRef, useState, useEffect } from 'react'

export default function NeuralSynapseCard() {
  const cardRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const [activeConnections, setActiveConnections] = useState(0)
  const [frequency, setFrequency] = useState('45 Hz')
  const [status, setStatus] = useState('SYNC_OK')
  const [rippleActive, setRippleActive] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    
    const rotateX = -(y / rect.height) * 8
    const rotateY = (x / rect.width) * 8
    setRotation({ x: rotateX, y: rotateY })
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setRotation({ x: 0, y: 0 })
  }

  const triggerRipple = (e: React.MouseEvent<HTMLDivElement>) => {
    if (rippleActive || !canvasRef.current) return
    const rect = canvasRef.current.getBoundingClientRect()
    const rx = e.clientX - rect.left
    const ry = e.clientY - rect.top

    setRippleActive(true)
    setFrequency('120 Hz')
    setStatus('PROPAGATING')

    // Propagate on canvas loop
    if ((canvasRef.current as any).startRipple) {
      (canvasRef.current as any).startRipple(rx, ry)
    }

    setTimeout(() => {
      setRippleActive(false)
      setFrequency('45 Hz')
      setStatus('SYNC_OK')
    }, 1000)
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let time = 0
    let mouse = { x: -999, y: -999, active: false }
    let ripX = 0, ripY = 0, ripRadius = 0, ripActive = false

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * (window.devicePixelRatio || 1)
      canvas.height = rect.height * (window.devicePixelRatio || 1)
      ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1)
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const handleCanvasMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
      mouse.active = true
    }
    const handleCanvasMouseLeave = () => {
      mouse.active = false
    }
    canvas.addEventListener('mousemove', handleCanvasMouseMove)
    canvas.addEventListener('mouseleave', handleCanvasMouseLeave)

    // Expose ripple start method to React scope
    ;(canvas as any).startRipple = (rx: number, ry: number) => {
      ripX = rx
      ripY = ry
      ripRadius = 0
      ripActive = true
    }

    interface Node {
      x: number
      y: number
      vx: number
      vy: number
      size: number
      activePulse: number
    }

    const w = 340
    const h = 460
    const nodes: Node[] = []
    for (let i = 0; i < 35; i++) {
      nodes.push({
        x: 20 + Math.random() * (w - 40),
        y: 40 + Math.random() * (h - 80),
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        size: Math.random() * 1.5 + 0.8,
        activePulse: 0
      })
    }

    const animate = () => {
      const cvWidth = canvas.width / (window.devicePixelRatio || 1)
      const cvHeight = canvas.height / (window.devicePixelRatio || 1)
      ctx.fillStyle = 'rgba(8, 6, 12, 0.18)'
      ctx.fillRect(0, 0, cvWidth, cvHeight)

      time += 0.02

      let connCount = 0

      nodes.forEach(n => {
        n.x += n.vx
        n.y += n.vy

        if (n.x < 15 || n.x > cvWidth - 15) n.vx *= -1
        if (n.y < 30 || n.y > cvHeight - 30) n.vy *= -1

        if (ripActive) {
          const dx = n.x - ripX
          const dy = n.y - ripY
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (Math.abs(dist - ripRadius) < 15) {
            n.activePulse = 1
          }
        }

        if (n.activePulse > 0) n.activePulse -= 0.02

        if (mouse.active) {
          const dx = n.x - mouse.x
          const dy = n.y - mouse.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 85) {
            connCount++
            const alpha = (1 - dist / 85) * 0.35
            ctx.strokeStyle = \`rgba(168, 85, 247, \${alpha})\`
            ctx.lineWidth = 0.8
            ctx.beginPath()
            ctx.moveTo(n.x, n.y)
            ctx.lineTo(mouse.x, mouse.y)
            ctx.stroke()
          }
        }

        const glowSize = n.size * (1 + n.activePulse * 3)
        ctx.fillStyle = n.activePulse > 0
          ? \`rgba(249, 115, 22, \${0.4 + n.activePulse * 0.6})\`
          : 'rgba(168, 85, 247, 0.45)'
        ctx.beginPath()
        ctx.arc(n.x, n.y, glowSize, 0, Math.PI * 2)
        ctx.fill()
      })

      setActiveConnections(connCount)

      if (ripActive) {
        ripRadius += 5
        ctx.strokeStyle = \`rgba(249, 115, 22, \${Math.max(0, 1 - ripRadius / (cvWidth * 1.2))})\`
        ctx.lineWidth = 1.5
        ctx.beginPath()
        ctx.arc(ripX, ripY, ripRadius, 0, Math.PI * 2)
        ctx.stroke()

        if (ripRadius > cvWidth * 1.2) {
          ripActive = false
        }
      }

      animationId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resizeCanvas)
      canvas.removeEventListener('mousemove', handleCanvasMouseMove)
      canvas.removeEventListener('mouseleave', handleCanvasMouseLeave)
    }
  }, [])

  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <div
        ref={cardRef}
        onClick={triggerRipple}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={() => setIsHovered(true)}
        className="relative w-[340px] h-[460px] rounded-[32px] cursor-pointer group select-none overflow-hidden"
        style={{
          perspective: 1200,
          transformStyle: 'preserve-3d',
          background: 'rgba(8, 6, 12, 0.85)',
          boxShadow: isHovered 
            ? '0 30px 90px -10px rgba(168, 85, 247, 0.25), 0 0 1px 1px rgba(168, 85, 247, 0.2), inset 0 1px 0 0 rgba(255, 255, 255, 0.1)'
            : '0 20px 50px -25px rgba(0, 0, 0, 0.9), 0 0 1px 1px rgba(255, 255, 255, 0.04), inset 0 1px 0 0 rgba(255, 255, 255, 0.05)',
          transform: \`rotateX(\${rotation.x}deg) rotateY(\${rotation.y}deg) scale(\${isHovered ? 1.02 : 1})\`,
          transition: 'transform 0.15s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.3s ease',
        }}
      >
        <div
          className={\`absolute inset-0 z-0 pointer-events-none rounded-[32px] p-[1.5px] before:content-[""] before:absolute before:inset-0 before:rounded-[32px] before:bg-[conic-gradient(from_270deg,transparent_30%,#a855f7_50%,#f97316_65%,transparent_85%)] before:will-change-transform before:animate-[spin_8s_linear_infinite] before:[mask-image:linear-gradient(#fff_0_0)_content-box,_linear-gradient(#fff_0_0)] before:![mask-composite:exclude] before:![-webkit-mask-composite:xor] \${
            isHovered ? 'opacity-100' : 'opacity-30'
          }\`}
          style={{ transition: 'opacity 0.4s' }}
        />

        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none z-10"
        />

        <div
          className="absolute inset-0 pointer-events-none z-20"
          style={{
            background: \`radial-gradient(circle at \${isHovered ? '50%' : '100%'} \${isHovered ? '20%' : '100%'}, rgba(255, 255, 255, 0.05) 0%, transparent 55%)\`,
            transition: 'background 0.4s ease',
          }}
        />

        <div 
          className="relative h-full flex flex-col justify-between p-8 z-30 select-none"
          style={{
            transform: 'translateZ(45px)',
            transformStyle: 'preserve-3d',
            transition: 'transform 0.15s cubic-bezier(0.25, 1, 0.5, 1)',
          }}
        >
          <div className="flex justify-between items-start">
            <div className="flex flex-col gap-1 font-mono text-[9px] text-purple-400/60 leading-none">
              <span className="font-bold uppercase tracking-widest text-purple-400">Synapse Net</span>
              <span>NODES: 32 ACTIVE</span>
            </div>
            
            <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border border-purple-500/20 bg-purple-950/40 backdrop-blur-md font-mono text-[8px] text-purple-300">
              <span className={\`w-1.5 h-1.5 rounded-full bg-fuchsia-500 \${rippleActive ? 'animate-ping' : 'animate-pulse'}\`} />
              <span className="tracking-wider uppercase font-semibold">
                {status}
              </span>
            </div>
          </div>

          <div className="my-auto pointer-events-none" />

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <h3 className="text-xl font-medium text-white leading-tight tracking-wide">
                Neural Synapse
              </h3>
              <p className="text-[13px] text-purple-200/50 font-light leading-relaxed">
                A dynamic cognitive connection grid. Hover to fire synapse links, click to propagate thought wave ripples.
              </p>
            </div>

            <div className="h-[1px] bg-purple-500/10 w-full" />

            <div className="flex justify-between items-center font-mono text-[10px]">
              <div className="flex gap-4 text-purple-400/55">
                <div className="flex flex-col">
                  <span>SYNAPSES</span>
                  <span className="text-white font-bold">
                    {activeConnections}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span>FREQUENCY</span>
                  <span className="text-white font-bold transition-colors duration-300" style={{ color: rippleActive ? '#f97316' : '#fff' }}>
                    {frequency}
                  </span>
                </div>
              </div>

              <button className="flex items-center justify-center w-8 h-8 rounded-full border border-purple-500/30 bg-purple-950/50 hover:bg-purple-500 hover:text-slate-950 text-purple-400 transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.15)] group-hover:scale-105 active:scale-95">
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )` ,
    prompt: `Create an advanced Neural Synapse Matrix Card component:
• Dynamic Synaptic Node Mesh: Moving synapse node coordinates on canvas forming reactive energy paths to cursor coordinates.
• Triple conic sweep frame: Dual-masked ambient border outlines shifting organically across violet, gold and orange channels.
• Radial thought wave ripple: Click propagates a mathematical ripple wave outward, pulsing intersecting synaptic nodes sequentially.`,
    likes: 0,
    author: "Animation AI",
    featured: true,
    createdAt: "2026-05-22T10:00:00.000Z",
    updatedAt: "2026-05-22T10:00:00.000Z"
  },
  {
    slug: "aurora-wave-card",
    title: "Aurora Wave Card",
    category: "cards",
    tag: "canvas",
    description: "A premium glass card featuring a flowing aurora borealis canvas animation. Color-shifting sine waves react to mouse position and shimmer on hover with a sweeping neon border.",
    previewCode: `<!DOCTYPE html><html><head><style>
body,html{margin:0;padding:0;width:100%;height:100%;overflow:hidden;background:#020409;display:flex;align-items:center;justify-content:center;font-family:sans-serif}
.card{position:relative;width:340px;height:420px;border-radius:28px;overflow:hidden;cursor:pointer;transition:transform 0.2s,box-shadow 0.3s}
.card:hover{transform:translateY(-6px) scale(1.01);box-shadow:0 40px 80px -20px rgba(34,211,238,0.3)}
.border-ring{position:absolute;inset:0;border-radius:28px;padding:1.5px;pointer-events:none;opacity:0.4;transition:opacity 0.4s}
.card:hover .border-ring{opacity:1}
.border-ring::before{content:"";position:absolute;inset:0;border-radius:28px;background:conic-gradient(from 0deg,transparent 25%,#22d3ee 45%,#818cf8 60%,#34d399 75%,transparent 90%);animation:spin 6s linear infinite;mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask-composite:exclude}
@keyframes spin{to{transform:rotate(360deg)}}
canvas{position:absolute;inset:0;width:100%;height:100%}
.glass{position:absolute;inset:0;background:rgba(2,4,9,0.55);backdrop-filter:blur(2px)}
.content{position:relative;z-index:10;height:100%;display:flex;flex-direction:column;justify-content:flex-end;padding:28px}
.badge{display:inline-flex;align-items:center;gap:6px;padding:5px 12px;border-radius:99px;background:rgba(34,211,238,0.1);border:1px solid rgba(34,211,238,0.2);font-size:10px;font-family:monospace;color:#22d3ee;margin-bottom:14px;width:fit-content}
.dot{width:5px;height:5px;border-radius:50%;background:#22d3ee;animation:blink 2s infinite}
@keyframes blink{0%,100%{opacity:0.3}50%{opacity:1}}
h3{font-size:20px;font-weight:500;color:#fff;margin:0 0 8px}
p{font-size:12px;color:rgba(186,230,253,0.55);line-height:1.6;margin:0 0 18px}
.link{font-size:12px;font-family:monospace;color:#22d3ee;display:flex;align-items:center;gap:6px;text-decoration:none}
.arrow{transition:transform 0.3s}
.card:hover .arrow{transform:translateX(5px)}
</style></head><body>
<div class="card" id="card">
  <div class="border-ring"></div>
  <canvas id="cv"></canvas>
  <div class="glass"></div>
  <div class="content">
    <div class="badge"><span class="dot"></span>AURORA ACTIVE</div>
    <h3>Aurora Wave</h3>
    <p>Flowing borealis light streams shift dynamically with your cursor, painting living gradients across the card surface.</p>
    <a class="link" href="#">Explore Effect <span class="arrow">→</span></a>
  </div>
</div>
<script>
const cv=document.getElementById('cv'),ctx=cv.getContext('2d');
let w=cv.width=340,h=cv.height=420,t=0,mx=w/2,my=h/2;
document.getElementById('card').addEventListener('mousemove',e=>{
  const r=e.currentTarget.getBoundingClientRect();
  mx=e.clientX-r.left; my=e.clientY-r.top;
});
const cols=['#22d3ee','#818cf8','#34d399','#f472b6','#a78bfa'];
function draw(){
  ctx.fillStyle='rgba(2,4,9,0.18)'; ctx.fillRect(0,0,w,h);
  t+=0.012;
  const cx=mx/w, cy=my/h;
  for(let i=0;i<6;i++){
    const phase=i*Math.PI/3;
    const amp=30+i*8+Math.sin(t+phase)*12;
    const freq=0.012+i*0.003;
    const yBase=h*(0.3+i*0.08+cy*0.1);
    ctx.beginPath();
    for(let x=0;x<=w;x+=2){
      const y=yBase+Math.sin(x*freq+t*1.2+phase+cx*3)*amp+Math.sin(x*freq*2.1+t*0.7)*amp*0.4;
      x===0?ctx.moveTo(x,y):ctx.lineTo(x,y);
    }
    ctx.lineTo(w,h); ctx.lineTo(0,h); ctx.closePath();
    const g=ctx.createLinearGradient(0,0,w,0);
    const c=cols[i%cols.length];
    g.addColorStop(0,'transparent');
    g.addColorStop(0.3+cx*0.3,c+'55');
    g.addColorStop(0.7,c+'22');
    g.addColorStop(1,'transparent');
    ctx.fillStyle=g; ctx.fill();
  }
  requestAnimationFrame(draw);
}
draw();
</script></body></html>`,
    code: `'use client'
import React, { useRef, useState, useEffect } from 'react'

export default function AuroraWaveCard() {
  const cardRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const mouseRef = useRef({ x: 170, y: 210 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    let animId: number, t = 0
    const resize = () => {
      const r = canvas.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1
      canvas.width = r.width * dpr
      canvas.height = r.height * dpr
      ctx.scale(dpr, dpr)
    }
    resize()
    window.addEventListener('resize', resize)
    const cols = ['#22d3ee','#818cf8','#34d399','#f472b6','#a78bfa']
    const animate = () => {
      const w = canvas.width / (window.devicePixelRatio || 1)
      const h = canvas.height / (window.devicePixelRatio || 1)
      ctx.fillStyle = 'rgba(2,4,9,0.18)'
      ctx.fillRect(0, 0, w, h)
      t += 0.012
      const cx = mouseRef.current.x / w
      const cy = mouseRef.current.y / h
      for (let i = 0; i < 6; i++) {
        const phase = i * Math.PI / 3
        const amp = 30 + i * 8 + Math.sin(t + phase) * 12
        const freq = 0.012 + i * 0.003
        const yBase = h * (0.3 + i * 0.08 + cy * 0.1)
        ctx.beginPath()
        for (let x = 0; x <= w; x += 2) {
          const y = yBase + Math.sin(x * freq + t * 1.2 + phase + cx * 3) * amp + Math.sin(x * freq * 2.1 + t * 0.7) * amp * 0.4
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
        }
        ctx.lineTo(w, h); ctx.lineTo(0, h); ctx.closePath()
        const g = ctx.createLinearGradient(0, 0, w, 0)
        const c = cols[i % cols.length]
        g.addColorStop(0, 'transparent')
        g.addColorStop(0.3 + cx * 0.3, c + '55')
        g.addColorStop(0.7, c + '22')
        g.addColorStop(1, 'transparent')
        ctx.fillStyle = g; ctx.fill()
      }
      animId = requestAnimationFrame(animate)
    }
    animate()
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize) }
  }, [])

  return (
    <div className="flex items-center justify-center w-full h-full p-4">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative w-[340px] h-[420px] rounded-[28px] overflow-hidden cursor-pointer select-none"
        style={{
          background: 'rgba(2,4,9,0.9)',
          boxShadow: isHovered ? '0 40px 80px -20px rgba(34,211,238,0.3)' : '0 20px 50px -20px rgba(0,0,0,0.8)',
          transform: isHovered ? 'translateY(-6px) scale(1.01)' : 'none',
          transition: 'transform 0.2s ease, box-shadow 0.3s ease',
        }}
      >
        <div className={\`absolute inset-0 z-0 pointer-events-none rounded-[28px] p-[1.5px] before:content-[""] before:absolute before:inset-0 before:rounded-[28px] before:bg-[conic-gradient(from_0deg,transparent_25%,#22d3ee_45%,#818cf8_60%,#34d399_75%,transparent_90%)] before:animate-[spin_6s_linear_infinite] before:[mask:linear-gradient(#fff_0_0)_content-box,_linear-gradient(#fff_0_0)] before:![-webkit-mask-composite:xor] before:![mask-composite:exclude] \${isHovered ? 'opacity-100' : 'opacity-40'}\`} style={{ transition: 'opacity 0.4s' }} />
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
        <div className="absolute inset-0 bg-[rgba(2,4,9,0.55)] backdrop-blur-sm" />
        <div className="relative z-10 h-full flex flex-col justify-end p-7">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 font-mono text-[10px] text-cyan-400 w-fit mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            AURORA ACTIVE
          </div>
          <h3 className="text-xl font-medium text-white mb-2">Aurora Wave</h3>
          <p className="text-xs text-sky-200/55 leading-relaxed mb-4">
            Flowing borealis light streams shift dynamically with your cursor, painting living gradients across the card surface.
          </p>
          <a href="#" className="flex items-center gap-1.5 font-mono text-xs text-cyan-400 group">
            Explore Effect
            <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
          </a>
        </div>
      </div>
    </div>
  )
}`,
    prompt: `Create an Aurora Wave Card with canvas sine-wave aurora animation:
• 6 overlapping sine wave layers drawn on Canvas, each with unique phase, amplitude and frequency
• Mouse position shifts wave amplitude and gradient color stop positions in real time
• Dual-masked conic rotating border (cyan/indigo/emerald) with mask-composite exclude
• Frosted glass overlay with backdrop-filter blur on top of the aurora canvas
• Card lifts and glows on hover with smooth translateY + scale transform`,
    likes: 0,
    author: "Animation AI",
    featured: true,
    createdAt: "2026-05-22T11:00:00.000Z",
    updatedAt: "2026-05-22T11:00:00.000Z"
  },
  {
    slug: "data-stream-terminal-card",
    title: "Data Stream Terminal Card",
    category: "cards",
    tag: "canvas",
    description: "A cyberpunk terminal card with cascading matrix-style data rain on canvas. Hovering highlights stream columns near the cursor; clicking triggers a red 'DATA BREACH' alert cascade with glitch flash.",
    previewCode: `<!DOCTYPE html><html><head><style>
body,html{margin:0;padding:0;width:100%;height:100%;overflow:hidden;background:#000;display:flex;align-items:center;justify-content:center;font-family:monospace}
.card{position:relative;width:340px;height:420px;border-radius:20px;overflow:hidden;cursor:pointer;background:#050a05;transition:box-shadow 0.3s,transform 0.2s}
.card:hover{transform:scale(1.015);box-shadow:0 30px 80px -15px rgba(74,222,128,0.25)}
canvas{position:absolute;inset:0;width:100%;height:100%}
.overlay{position:absolute;inset:0;background:linear-gradient(to top,rgba(5,10,5,0.95) 0%,rgba(5,10,5,0.6) 40%,rgba(5,10,5,0.15) 100%)}
.content{position:relative;z-index:5;height:100%;display:flex;flex-direction:column;justify-content:flex-end;padding:28px}
.terminal-bar{display:flex;align-items:center;gap:6px;margin-bottom:16px}
.tb-dot{width:8px;height:8px;border-radius:50%}
.prompt{color:rgba(74,222,128,0.5);font-size:10px;margin-bottom:12px}
h3{color:#4ade80;font-size:18px;font-weight:700;margin:0 0 6px;letter-spacing:1px}
p{color:rgba(134,239,172,0.5);font-size:11px;line-height:1.7;margin:0 0 16px}
.cmd{display:flex;align-items:center;gap:8px;color:#4ade80;font-size:11px}
.cursor{width:7px;height:14px;background:#4ade80;animation:blink 1s infinite}
@keyframes blink{0%,49%{opacity:1}50%,100%{opacity:0}}
.breach{position:absolute;inset:0;background:rgba(239,68,68,0.08);z-index:3;pointer-events:none;opacity:0;transition:opacity 0.15s}
.breach.on{opacity:1}
.border-f{position:absolute;inset:0;border-radius:20px;border:1px solid rgba(74,222,128,0.2);pointer-events:none;z-index:6;transition:border-color 0.3s}
.card:hover .border-f{border-color:rgba(74,222,128,0.5)}
</style></head><body>
<div class="card" id="card">
  <canvas id="cv"></canvas>
  <div class="overlay" id="ov"></div>
  <div class="breach" id="breach"></div>
  <div class="border-f"></div>
  <div class="content">
    <div class="terminal-bar">
      <div class="tb-dot" style="background:#ef4444"></div>
      <div class="tb-dot" style="background:#f59e0b"></div>
      <div class="tb-dot" style="background:#4ade80"></div>
    </div>
    <div class="prompt" id="prompt">root@nexus:~$ <span id="cmd-text">stream --watch /dev/neural</span></div>
    <h3 id="title">DATA STREAM</h3>
    <p id="desc">Live telemetry feed from the neural backbone. Hover columns to inspect. Click to initiate breach protocol.</p>
    <div class="cmd"><div class="cursor"></div><span id="status">MONITORING...</span></div>
  </div>
</div>
<script>
const cv=document.getElementById('cv'),ctx=cv.getContext('2d');
const breach=document.getElementById('breach'),titleEl=document.getElementById('title'),statusEl=document.getElementById('status'),cmdText=document.getElementById('cmd-text');
let w=cv.width=340,h=cv.height=420,t=0,mx=-1,breachActive=false;
const chars='01アイウエオカキ<>{}[]|/\\\\ABCDEFabcdef'.split('');
const fs=12,cols=Math.floor(w/fs);
const drops=Array.from({length:cols},()=>Math.random()*h/fs*-1);
const speeds=Array.from({length:cols},()=>0.5+Math.random()*0.8);

document.getElementById('card').addEventListener('mousemove',e=>{
  const r=e.currentTarget.getBoundingClientRect();
  mx=e.clientX-r.left;
});
document.getElementById('card').addEventListener('mouseleave',()=>{mx=-1;});
document.getElementById('card').addEventListener('click',()=>{
  if(breachActive)return;
  breachActive=true;
  breach.classList.add('on');
  titleEl.style.color='#ef4444'; titleEl.textContent='BREACH DETECTED';
  statusEl.style.color='#ef4444'; statusEl.textContent='ALERT: UNAUTHORIZED ACCESS';
  cmdText.textContent='breach --force --escalate';
  setTimeout(()=>{
    breach.classList.remove('on');
    titleEl.style.color='#4ade80'; titleEl.textContent='DATA STREAM';
    statusEl.style.color='#4ade80'; statusEl.textContent='MONITORING...';
    cmdText.textContent='stream --watch /dev/neural';
    breachActive=false;
  },1500);
});

function draw(){
  ctx.fillStyle='rgba(5,10,5,0.06)'; ctx.fillRect(0,0,w,h);
  ctx.font=fs+'px monospace';
  for(let i=0;i<cols;i++){
    const x=i*fs;
    const isNear=mx>-1&&Math.abs(x-mx)<fs*2;
    const c=chars[Math.floor(Math.random()*chars.length)];
    if(breachActive){
      ctx.fillStyle=\`rgba(239,68,68,\${isNear?0.9:0.3})\`;
    }else{
      ctx.fillStyle=isNear?'rgba(200,255,200,0.95)':('rgba(74,222,128,'+(0.15+Math.random()*0.25)+')');
    }
    ctx.fillText(c,x,drops[i]*fs);
    if(drops[i]*fs>h&&Math.random()>0.975) drops[i]=0;
    drops[i]+=speeds[i];
  }
  requestAnimationFrame(draw);
}
draw();
</script></body></html>`,
    code: `'use client'
import React, { useRef, useState, useEffect } from 'react'

export default function DataStreamTerminalCard() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseXRef = useRef(-1)
  const [isHovered, setIsHovered] = useState(false)
  const [breachActive, setBreachActive] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mouseXRef.current = e.clientX - rect.left
  }

  const triggerBreach = () => {
    if (breachActive) return
    setBreachActive(true)
    setTimeout(() => setBreachActive(false), 1500)
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    let animId: number
    const resize = () => {
      const r = canvas.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1
      canvas.width = r.width * dpr; canvas.height = r.height * dpr
      ctx.scale(dpr, dpr)
    }
    resize()
    window.addEventListener('resize', resize)
    const chars = '01アイウエオカキ<>{}[]|/\\\\ABCDEFabcdef'.split('')
    const fs = 12
    const w = 340, h = 420
    const cols = Math.floor(w / fs)
    const drops = Array.from({ length: cols }, () => Math.random() * h / fs * -1)
    const speeds = Array.from({ length: cols }, () => 0.5 + Math.random() * 0.8)

    const animate = () => {
      ctx.fillStyle = 'rgba(5,10,5,0.06)'; ctx.fillRect(0, 0, w, h)
      ctx.font = \`\${fs}px monospace\`
      for (let i = 0; i < cols; i++) {
        const x = i * fs
        const isNear = mouseXRef.current > -1 && Math.abs(x - mouseXRef.current) < fs * 2
        const c = chars[Math.floor(Math.random() * chars.length)]
        ctx.fillStyle = breachActive
          ? \`rgba(239,68,68,\${isNear ? 0.9 : 0.3})\`
          : isNear ? 'rgba(200,255,200,0.95)' : \`rgba(74,222,128,\${0.15 + Math.random() * 0.25})\`
        ctx.fillText(c, x, drops[i] * fs)
        if (drops[i] * fs > h && Math.random() > 0.975) drops[i] = 0
        drops[i] += speeds[i]
      }
      animId = requestAnimationFrame(animate)
    }
    animate()
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize) }
  }, [breachActive])

  return (
    <div className="flex items-center justify-center w-full h-full p-4">
      <div
        onClick={triggerBreach}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => { setIsHovered(false); mouseXRef.current = -1 }}
        className="relative w-[340px] h-[420px] rounded-[20px] overflow-hidden cursor-pointer select-none"
        style={{
          background: '#050a05',
          boxShadow: isHovered ? '0 30px 80px -15px rgba(74,222,128,0.25)' : '0 10px 40px -10px rgba(0,0,0,0.8)',
          transform: isHovered ? 'scale(1.015)' : 'scale(1)',
          transition: 'transform 0.2s ease, box-shadow 0.3s ease',
        }}
      >
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(5,10,5,0.95) 0%, rgba(5,10,5,0.6) 40%, rgba(5,10,5,0.15) 100%)' }} />
        {breachActive && (
          <div className="absolute inset-0 bg-red-500/[0.08] z-10 pointer-events-none animate-pulse" />
        )}
        <div
          className="absolute inset-0 rounded-[20px] border pointer-events-none z-20 transition-colors duration-300"
          style={{ borderColor: isHovered ? (breachActive ? 'rgba(239,68,68,0.6)' : 'rgba(74,222,128,0.5)') : 'rgba(74,222,128,0.2)' }}
        />
        <div className="relative z-10 h-full flex flex-col justify-end p-7">
          <div className="flex items-center gap-1.5 mb-4">
            <div className="w-2 h-2 rounded-full bg-red-500" />
            <div className="w-2 h-2 rounded-full bg-amber-500" />
            <div className="w-2 h-2 rounded-full bg-emerald-400" />
          </div>
          <div className="font-mono text-[10px] text-green-400/50 mb-3">
            root@nexus:~$ <span className={breachActive ? 'text-red-400' : 'text-green-400/70'}>
              {breachActive ? 'breach --force --escalate' : 'stream --watch /dev/neural'}
            </span>
          </div>
          <h3 className="font-mono text-lg font-bold tracking-widest mb-1.5 transition-colors duration-200"
            style={{ color: breachActive ? '#ef4444' : '#4ade80' }}>
            {breachActive ? 'BREACH DETECTED' : 'DATA STREAM'}
          </h3>
          <p className="text-[11px] text-green-300/50 leading-relaxed mb-4">
            Live telemetry feed from the neural backbone. Hover columns to inspect. Click to initiate breach protocol.
          </p>
          <div className="flex items-center gap-2 font-mono text-[11px]"
            style={{ color: breachActive ? '#ef4444' : '#4ade80' }}>
            <div className="w-1.5 h-3.5 animate-[blink_1s_infinite]" style={{ background: breachActive ? '#ef4444' : '#4ade80' }} />
            <span>{breachActive ? 'ALERT: UNAUTHORIZED ACCESS' : 'MONITORING...'}</span>
          </div>
        </div>
      </div>
    </div>
  )
}`,
    prompt: `Create a Data Stream Terminal Card with matrix rain canvas animation:
• Matrix-style cascading character rain using canvas with random column drop speeds
• Highlight columns near mouse cursor position with brighter green color
• Click triggers red "BREACH DETECTED" state: red-tinted rain, alert text, glitch overlay pulse
• Terminal window chrome (red/yellow/green dots), monospace font throughout
• Gradient overlay darkens bottom 60% so text is always legible over the animation`,
    likes: 0,
    author: "Animation AI",
    featured: true,
    createdAt: "2026-05-22T11:00:00.000Z",
    updatedAt: "2026-05-22T11:00:00.000Z"
  },
  {
    slug: "glass-profile-card",
    title: "Glass Profile Card",
    category: "cards",
    tag: "framer-motion",
    description: "A premium glassmorphism profile card with 3D tilt on hover, traveling light beams around the border, animated shine sweep, and staggered content entrance animations.",
    previewCode: `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>
*{margin:0;padding:0;box-sizing:border-box}
body{min-height:100vh;background:#0a0a0f;display:flex;align-items:center;justify-content:center;font-family:system-ui,sans-serif;overflow:hidden}
body::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at 50% 0%,rgba(139,92,246,0.35) 0%,transparent 65%)}
.card-wrap{perspective:1200px}
.card{position:relative;width:300px;border-radius:24px;overflow:hidden;cursor:pointer;transform-style:preserve-3d;transition:transform 0.15s ease,box-shadow 0.3s ease;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);backdrop-filter:blur(20px);box-shadow:0 25px 60px -15px rgba(0,0,0,0.7)}
.card:hover{box-shadow:0 35px 80px -15px rgba(139,92,246,0.3)}
.beams{position:absolute;inset:0;border-radius:24px;overflow:hidden;pointer-events:none}
.beam{position:absolute;background:linear-gradient(90deg,transparent,rgba(255,255,255,0.6),transparent)}
.beam-t{top:0;left:-60%;height:2px;width:60%;animation:beamH 3s ease-in-out infinite}
.beam-r{top:-60%;right:0;width:2px;height:60%;background:linear-gradient(180deg,transparent,rgba(255,255,255,0.6),transparent);animation:beamV 3s ease-in-out infinite 0.75s}
.beam-b{bottom:0;right:-60%;height:2px;width:60%;animation:beamH2 3s ease-in-out infinite 1.5s}
.beam-l{bottom:-60%;left:0;width:2px;height:60%;background:linear-gradient(180deg,transparent,rgba(255,255,255,0.6),transparent);animation:beamV2 3s ease-in-out infinite 2.25s}
@keyframes beamH{0%{left:-60%}100%{left:110%}}
@keyframes beamH2{0%{right:-60%}100%{right:110%}}
@keyframes beamV{0%{top:-60%}100%{top:110%}}
@keyframes beamV2{0%{bottom:-60%}100%{bottom:110%}}
.shine{position:absolute;inset:0;background:conic-gradient(from 0deg,transparent 30%,rgba(255,255,255,0.06) 50%,transparent 70%);animation:spin 6s linear infinite;pointer-events:none;border-radius:24px}
@keyframes spin{to{transform:rotate(360deg)}}
.body{padding:28px;position:relative;z-index:2}
.avatar-wrap{display:flex;justify-content:center;margin-bottom:16px}
.avatar{width:72px;height:72px;border-radius:50%;background:linear-gradient(135deg,#7c3aed,#a78bfa);display:flex;align-items:center;justify-content:center;font-size:28px;font-weight:700;color:#fff;border:2px solid rgba(255,255,255,0.15);box-shadow:0 0 30px rgba(139,92,246,0.4)}
.name{text-align:center;font-size:18px;font-weight:600;color:#fff;margin-bottom:4px}
.role{text-align:center;font-size:12px;color:rgba(255,255,255,0.45);margin-bottom:20px}
.stats{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:rgba(255,255,255,0.06);border-radius:12px;overflow:hidden;margin-bottom:20px}
.stat{background:rgba(255,255,255,0.03);padding:12px 8px;text-align:center}
.stat-n{font-size:16px;font-weight:700;color:#fff}
.stat-l{font-size:10px;color:rgba(255,255,255,0.4);margin-top:2px}
.btn{width:100%;height:38px;border-radius:10px;background:#fff;border:none;color:#0a0a0f;font-weight:600;font-size:13px;cursor:pointer;transition:all 0.2s;display:flex;align-items:center;justify-content:center;gap:6px}
.btn:hover{transform:scale(1.02);box-shadow:0 8px 25px rgba(255,255,255,0.2)}
</style></head><body>
<div class="card-wrap"><div class="card" id="card">
  <div class="beams"><div class="beam beam-t"></div><div class="beam beam-r"></div><div class="beam beam-b"></div><div class="beam beam-l"></div></div>
  <div class="shine"></div>
  <div class="body">
    <div class="avatar-wrap"><div class="avatar">A</div></div>
    <div class="name">Alex Rivera</div>
    <div class="role">Senior Product Designer</div>
    <div class="stats">
      <div class="stat"><div class="stat-n">248</div><div class="stat-l">Projects</div></div>
      <div class="stat"><div class="stat-n">12k</div><div class="stat-l">Followers</div></div>
      <div class="stat"><div class="stat-n">98%</div><div class="stat-l">Rating</div></div>
    </div>
    <button class="btn">Follow ✦</button>
  </div>
</div></div>
<script>
const card=document.getElementById('card'),wrap=card.parentElement;
wrap.addEventListener('mousemove',e=>{
  const r=wrap.getBoundingClientRect();
  const x=(e.clientX-r.left-r.width/2)/(r.width/2);
  const y=(e.clientY-r.top-r.height/2)/(r.height/2);
  card.style.transform=\`rotateY(\${x*10}deg) rotateX(\${-y*10}deg) scale(1.02)\`;
});
wrap.addEventListener('mouseleave',()=>{card.style.transform='';});
</script></body></html>`,
    code: `'use client'
import React, { useRef, useState } from 'react'
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion'

const BEAMS = [
  { cls: 'top-0 left-0 h-[2px] w-[55%]', bg: 'bg-gradient-to-r from-transparent via-white to-transparent', anim: { left: ['-55%','110%'] }, axis: 'left', delay: 0 },
  { cls: 'top-0 right-0 w-[2px] h-[55%]', bg: 'bg-gradient-to-b from-transparent via-white to-transparent', anim: { top: ['-55%','110%'] }, axis: 'top', delay: 0.75 },
  { cls: 'bottom-0 right-0 h-[2px] w-[55%]', bg: 'bg-gradient-to-r from-transparent via-white to-transparent', anim: { right: ['-55%','110%'] }, axis: 'right', delay: 1.5 },
  { cls: 'bottom-0 left-0 w-[2px] h-[55%]', bg: 'bg-gradient-to-b from-transparent via-white to-transparent', anim: { bottom: ['-55%','110%'] }, axis: 'bottom', delay: 2.25 },
]

export default function GlassProfileCard() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useTransform(mouseY, [-150,150],[10,-10])
  const rotateY = useTransform(mouseX, [-150,150],[-10,10])
  const [followed, setFollowed] = useState(false)

  const handleMouseMove = (e: React.MouseEvent) => {
    const r = wrapRef.current!.getBoundingClientRect()
    mouseX.set(e.clientX - r.left - r.width / 2)
    mouseY.set(e.clientY - r.top - r.height / 2)
  }
  const handleMouseLeave = () => { mouseX.set(0); mouseY.set(0) }

  const stats = [{ n:'248', l:'Projects' },{ n:'12k', l:'Followers' },{ n:'98%', l:'Rating' }]

  return (
    <div className="flex items-center justify-center w-full h-full p-4"
      style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(139,92,246,0.25) 0%, transparent 60%)' }}>
      <div ref={wrapRef} style={{ perspective: 1200 }} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
        <motion.div style={{ rotateX, rotateY, transformStyle:'preserve-3d' }}
          whileHover={{ scale: 1.02 }}
          transition={{ type:'spring', stiffness:300, damping:25 }}
          className="relative w-[300px] rounded-3xl overflow-hidden border border-white/[0.08] bg-white/[0.04] backdrop-blur-xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] cursor-pointer group"
        >
          {/* Traveling beams */}
          <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
            {BEAMS.map((b,i) => (
              <motion.div key={i}
                className={\`absolute \${b.cls} \${b.bg} opacity-70\`}
                animate={b.anim as any}
                transition={{ duration: 2.5, ease:'easeInOut', repeat: Infinity, repeatDelay: 0.8, delay: b.delay }}
              />
            ))}
          </div>
          {/* Shine sweep */}
          <motion.div className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{ background:'conic-gradient(from 0deg, transparent 30%, rgba(255,255,255,0.05) 50%, transparent 70%)' }}
            animate={{ rotate: 360 }} transition={{ duration: 6, repeat: Infinity, ease:'linear' }}
          />
          <div className="relative z-10 p-7">
            <motion.div className="flex justify-center mb-4"
              initial={{ scale:0.5, opacity:0 }} animate={{ scale:1, opacity:1 }}
              transition={{ type:'spring', duration:0.7 }}>
              <div className="w-18 h-18 w-[72px] h-[72px] rounded-full bg-gradient-to-br from-violet-600 to-violet-400 flex items-center justify-center text-3xl font-bold text-white border-2 border-white/15 shadow-[0_0_30px_rgba(139,92,246,0.4)]">A</div>
            </motion.div>
            <motion.div className="text-center" initial={{ opacity:0, y:8 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.15 }}>
              <p className="text-white font-semibold text-lg">Alex Rivera</p>
              <p className="text-white/40 text-xs mt-0.5">Senior Product Designer</p>
            </motion.div>
            <motion.div className="grid grid-cols-3 mt-5 rounded-xl overflow-hidden border border-white/[0.06]"
              initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.25 }}>
              {stats.map((s,i) => (
                <div key={i} className="bg-white/[0.03] py-3 text-center border-r border-white/[0.06] last:border-0">
                  <p className="text-white font-bold text-base">{s.n}</p>
                  <p className="text-white/40 text-[10px] mt-0.5">{s.l}</p>
                </div>
              ))}
            </motion.div>
            <motion.button
              onClick={() => setFollowed(f => !f)}
              whileHover={{ scale:1.02 }} whileTap={{ scale:0.97 }}
              className="w-full mt-5 h-10 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-1.5"
              style={{ background: followed ? 'rgba(255,255,255,0.08)' : '#fff', color: followed ? '#fff' : '#0a0a0f', border: followed ? '1px solid rgba(255,255,255,0.15)' : 'none' }}
            >
              <AnimatePresence mode="wait">
                <motion.span key={String(followed)} initial={{ opacity:0, y:4 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:-4 }} transition={{ duration:0.15 }}>
                  {followed ? 'Following ✓' : 'Follow ✦'}
                </motion.span>
              </AnimatePresence>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}`,
    prompt: `Create a Glass Profile Card with Framer Motion:
• 3D tilt effect using useMotionValue/useTransform, max ±10deg rotation linked to mouse position
• 4 traveling white light beams animate around the card edges sequentially with staggered delays
• Conic-gradient shine layer rotates continuously at 6s linear speed
• Avatar with violet radial glow shadow, staggered entrance for name/role/stats
• Follow button toggles between white fill and ghost style with AnimatePresence transition`,
    likes: 0,
    author: "Animation AI",
    featured: true,
    createdAt: "2026-05-22T11:30:00.000Z",
    updatedAt: "2026-05-22T11:30:00.000Z"
  },
  {
    slug: "neon-pricing-card",
    title: "Neon Pricing Card",
    category: "cards",
    tag: "framer-motion",
    description: "A premium dark pricing card with an animated conic shine border, 3D hover tilt, staggered feature list animations, and a glowing CTA button — inspired by glassmorphism login and ShineBorder patterns.",
    previewCode: `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>
*{margin:0;padding:0;box-sizing:border-box}
body{min-height:100vh;background:#050508;display:flex;align-items:center;justify-content:center;font-family:system-ui,sans-serif}
body::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at 50% 100%,rgba(6,182,212,0.2) 0%,transparent 60%)}
.wrap{perspective:1200px}
.card{position:relative;width:300px;border-radius:24px;cursor:pointer;transform-style:preserve-3d;transition:transform 0.15s ease,box-shadow 0.3s ease}
.card:hover{box-shadow:0 30px 80px -10px rgba(6,182,212,0.25)}
.border-ring{position:absolute;inset:0;border-radius:24px;padding:1.5px;pointer-events:none}
.border-ring::before{content:'';position:absolute;inset:0;border-radius:24px;background:conic-gradient(from 0deg,transparent 20%,#06b6d4 40%,#818cf8 55%,transparent 75%);animation:spin 5s linear infinite;mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask-composite:exclude;opacity:0.5}
.card:hover .border-ring::before{opacity:1}
@keyframes spin{to{transform:rotate(360deg)}}
.beams{position:absolute;inset:0;border-radius:24px;overflow:hidden;pointer-events:none}
.beam{position:absolute;opacity:0.5}
.beam-t{top:0;left:-60%;height:2px;width:60%;background:linear-gradient(90deg,transparent,#06b6d4,transparent);animation:bH 2.5s ease-in-out infinite}
.beam-b{bottom:0;right:-60%;height:2px;width:60%;background:linear-gradient(90deg,transparent,#818cf8,transparent);animation:bH2 2.5s ease-in-out infinite 1.25s}
@keyframes bH{0%{left:-60%}100%{left:110%}}
@keyframes bH2{0%{right:-60%}100%{right:110%}}
.inner{position:relative;z-index:2;background:rgba(5,5,8,0.85);backdrop-filter:blur(24px);border-radius:23px;padding:28px;border:1px solid rgba(255,255,255,0.06)}
.badge{display:inline-block;padding:4px 12px;border-radius:99px;background:rgba(6,182,212,0.1);border:1px solid rgba(6,182,212,0.25);font-size:10px;color:#06b6d4;font-weight:600;letter-spacing:0.5px;margin-bottom:16px}
.price{font-size:42px;font-weight:800;color:#fff;line-height:1}
.price span{font-size:18px;font-weight:400;color:rgba(255,255,255,0.4);vertical-align:super;font-size:20px}
.period{font-size:12px;color:rgba(255,255,255,0.4);margin-top:4px;margin-bottom:20px}
.divider{height:1px;background:rgba(255,255,255,0.06);margin-bottom:20px}
.feature{display:flex;align-items:center;gap:10px;margin-bottom:12px;font-size:13px;color:rgba(255,255,255,0.7)}
.check{width:18px;height:18px;border-radius:50%;background:rgba(6,182,212,0.15);border:1px solid rgba(6,182,212,0.3);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:10px;color:#06b6d4}
.btn{width:100%;height:42px;margin-top:20px;border-radius:12px;border:none;cursor:pointer;font-size:14px;font-weight:600;color:#050508;background:linear-gradient(135deg,#06b6d4,#818cf8);position:relative;overflow:hidden;transition:transform 0.2s,box-shadow 0.3s}
.btn:hover{transform:scale(1.02);box-shadow:0 0 30px rgba(6,182,212,0.4)}
.btn::after{content:'';position:absolute;inset:0;background:linear-gradient(90deg,transparent,rgba(255,255,255,0.25),transparent);transform:translateX(-100%);animation:shimmer 2s infinite 1s}
@keyframes shimmer{to{transform:translateX(200%)}}
</style></head><body>
<div class="wrap"><div class="card" id="card">
  <div class="border-ring"></div>
  <div class="beams"><div class="beam beam-t"></div><div class="beam beam-b"></div></div>
  <div class="inner">
    <div class="badge">PRO PLAN</div>
    <div class="price"><span>$</span>49</div>
    <div class="period">per month, billed annually</div>
    <div class="divider"></div>
    <div class="feature"><div class="check">✓</div>Unlimited projects</div>
    <div class="feature"><div class="check">✓</div>Advanced analytics</div>
    <div class="feature"><div class="check">✓</div>Priority support 24/7</div>
    <div class="feature"><div class="check">✓</div>Custom integrations</div>
    <button class="btn">Get Started →</button>
  </div>
</div></div>
<script>
const c=document.getElementById('card'),w=c.parentElement;
w.addEventListener('mousemove',e=>{
  const r=w.getBoundingClientRect();
  const x=(e.clientX-r.left-r.width/2)/(r.width/2);
  const y=(e.clientY-r.top-r.height/2)/(r.height/2);
  c.style.transform=\`rotateY(\${x*9}deg) rotateX(\${-y*9}deg)\`;
});
w.addEventListener('mouseleave',()=>{c.style.transform='';});
</script></body></html>`,
    code: `'use client'
import React, { useRef } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'

const FEATURES = ['Unlimited projects','Advanced analytics','Priority support 24/7','Custom integrations']

export default function NeonPricingCard() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useTransform(mouseY, [-150,150],[9,-9])
  const rotateY = useTransform(mouseX, [-150,150],[-9,9])

  const handleMouseMove = (e: React.MouseEvent) => {
    const r = wrapRef.current!.getBoundingClientRect()
    mouseX.set(e.clientX - r.left - r.width / 2)
    mouseY.set(e.clientY - r.top - r.height / 2)
  }
  const handleMouseLeave = () => { mouseX.set(0); mouseY.set(0) }

  return (
    <div className="flex items-center justify-center w-full h-full p-4"
      style={{ background:'radial-gradient(ellipse at 50% 100%, rgba(6,182,212,0.15) 0%, transparent 60%)' }}>
      <div ref={wrapRef} style={{ perspective:1200 }} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
        <motion.div style={{ rotateX, rotateY, transformStyle:'preserve-3d' }}
          className="relative w-[300px] rounded-3xl cursor-pointer group"
          whileHover={{ boxShadow:'0 30px 80px -10px rgba(6,182,212,0.25)' }}
          transition={{ type:'spring', stiffness:300, damping:25 }}>

          {/* Conic shine border */}
          <div className="absolute inset-0 rounded-3xl pointer-events-none overflow-hidden">
            <motion.div className="absolute inset-0 rounded-3xl"
              style={{ background:'conic-gradient(from 0deg, transparent 20%, #06b6d4 40%, #818cf8 55%, transparent 75%)', WebkitMaskImage:'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite:'xor', maskComposite:'exclude', padding:'1.5px' }}
              animate={{ rotate:360 }}
              transition={{ duration:5, repeat:Infinity, ease:'linear' }}
              className="absolute inset-0 opacity-50 group-hover:opacity-100 transition-opacity duration-500"
            />
          </div>

          {/* Traveling beams */}
          <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
            <motion.div className="absolute top-0 h-[2px] w-[60%] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60"
              animate={{ left:['-60%','110%'] }} transition={{ duration:2.5, ease:'easeInOut', repeat:Infinity, repeatDelay:0.8 }} />
            <motion.div className="absolute bottom-0 h-[2px] w-[60%] bg-gradient-to-r from-transparent via-indigo-400 to-transparent opacity-60"
              animate={{ right:['-60%','110%'] }} transition={{ duration:2.5, ease:'easeInOut', repeat:Infinity, repeatDelay:0.8, delay:1.25 }} />
          </div>

          {/* Inner glass panel */}
          <div className="relative z-10 m-[1.5px] rounded-[22px] bg-[rgba(5,5,8,0.85)] backdrop-blur-2xl border border-white/[0.06] p-7">
            <motion.div initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.05 }}>
              <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-[10px] font-semibold tracking-wide mb-4">PRO PLAN</span>
              <div className="flex items-start gap-0.5">
                <span className="text-white/50 text-xl mt-2">$</span>
                <span className="text-5xl font-black text-white leading-none">49</span>
              </div>
              <p className="text-white/40 text-xs mt-1.5 mb-5">per month, billed annually</p>
              <div className="h-px bg-white/[0.06] mb-5" />
            </motion.div>

            <div className="space-y-3 mb-5">
              {FEATURES.map((f,i) => (
                <motion.div key={f} className="flex items-center gap-2.5 text-sm text-white/70"
                  initial={{ opacity:0, x:-10 }} animate={{ opacity:1, x:0 }} transition={{ delay: 0.1 + i * 0.08 }}>
                  <div className="w-[18px] h-[18px] rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center flex-shrink-0">
                    <svg width="9" height="9" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="#06b6d4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  {f}
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale:1.02, boxShadow:'0 0 30px rgba(6,182,212,0.4)' }}
              whileTap={{ scale:0.97 }}
              className="w-full h-11 rounded-xl font-semibold text-sm text-[#050508] relative overflow-hidden"
              style={{ background:'linear-gradient(135deg,#06b6d4,#818cf8)' }}>
              <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                animate={{ x:['-100%','200%'] }} transition={{ duration:2, repeat:Infinity, repeatDelay:1, ease:'easeInOut' }} />
              <span className="relative z-10 flex items-center justify-center gap-1.5">
                Get Started
                <motion.span animate={{ x:[0,4,0] }} transition={{ duration:1.5, repeat:Infinity }}>→</motion.span>
              </span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}`,
    prompt: `Create a Neon Pricing Card with Framer Motion:
• 3D tilt using useMotionValue/useTransform, max ±9deg rotation linked to mouse position relative to card center
• Dual-masked conic gradient border (cyan→indigo) rotates at 5s linear speed using mask-composite exclude
• 2 traveling light beams (cyan top, indigo bottom) animate across edges with staggered delays
• Staggered feature list entrance: each item animates from x:-10, opacity:0 with 80ms delay increments
• CTA button: gradient fill + shimmer sweep animation + boxShadow glow on hover`,
    likes: 0,
    author: "Animation AI",
    featured: true,
    createdAt: "2026-05-22T11:30:00.000Z",
    updatedAt: "2026-05-22T11:30:00.000Z"
  },
  {
    slug: "holographic-stats-card",
    title: "Holographic Stats Card",
    category: "cards",
    tag: "canvas",
    description: "A dark metrics card with an animated rainbow holographic shimmer surface, live-counting stat numbers, and a rotating dual-color conic border that intensifies on hover.",
    previewCode: `<!DOCTYPE html><html><head><style>
*{margin:0;padding:0;box-sizing:border-box}body{min-height:100vh;background:#06060a;display:flex;align-items:center;justify-content:center;font-family:system-ui,sans-serif}
.wrap{perspective:1200px}.card{position:relative;width:320px;border-radius:24px;cursor:pointer;transform-style:preserve-3d;transition:transform .15s ease,box-shadow .3s}
.card:hover{box-shadow:0 30px 70px -10px rgba(168,85,247,.3)}
.ring{position:absolute;inset:0;border-radius:24px;padding:1.5px;pointer-events:none}
.ring::before{content:"";position:absolute;inset:0;border-radius:24px;background:conic-gradient(from 0deg,transparent 20%,#a855f7 40%,#06b6d4 60%,transparent 80%);animation:spin 5s linear infinite;mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask-composite:exclude;opacity:.4}
.card:hover .ring::before{opacity:1}@keyframes spin{to{transform:rotate(360deg)}}
canvas{position:absolute;inset:0;width:100%;height:100%;border-radius:24px;pointer-events:none}
.inner{position:relative;z-index:2;background:rgba(6,6,10,.8);backdrop-filter:blur(20px);border-radius:23px;border:1px solid rgba(255,255,255,.07);padding:28px;m:1.5px}
.label{font-size:10px;color:rgba(255,255,255,.4);letter-spacing:1px;text-transform:uppercase;margin-bottom:6px}
.title{font-size:17px;font-weight:600;color:#fff;margin-bottom:24px}
.grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:22px}
.stat{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.06);border-radius:14px;padding:14px}
.sn{font-size:22px;font-weight:800;color:#fff}.sl{font-size:10px;color:rgba(255,255,255,.4);margin-top:3px}
.bar-wrap{margin-bottom:8px}.bar-label{display:flex;justify-content:space-between;font-size:11px;color:rgba(255,255,255,.5);margin-bottom:6px}
.bar-bg{height:4px;background:rgba(255,255,255,.06);border-radius:99px;overflow:hidden}
.bar-fill{height:100%;border-radius:99px;transition:width .6s ease}
.btn{width:100%;height:38px;border-radius:10px;border:none;background:linear-gradient(135deg,#a855f7,#06b6d4);color:#fff;font-weight:600;font-size:13px;cursor:pointer;margin-top:18px;transition:transform .2s,box-shadow .3s}
.btn:hover{transform:scale(1.02);box-shadow:0 0 25px rgba(168,85,247,.4)}
</style></head><body>
<div class="wrap"><div class="card" id="card">
<div class="ring"></div>
<canvas id="cv"></canvas>
<div class="inner" style="margin:1.5px">
  <div class="label">Dashboard Overview</div>
  <div class="title">Performance Metrics</div>
  <div class="grid">
    <div class="stat"><div class="sn" id="s1">0</div><div class="sl">Total Users</div></div>
    <div class="stat"><div class="sn" id="s2">0</div><div class="sl">Revenue</div></div>
    <div class="stat"><div class="sn" id="s3">0</div><div class="sl">Conversions</div></div>
    <div class="stat"><div class="sn" id="s4">0</div><div class="sl">Retention</div></div>
  </div>
  <div class="bar-wrap"><div class="bar-label"><span>Performance</span><span>94%</span></div><div class="bar-bg"><div class="bar-fill" id="b1" style="width:0;background:linear-gradient(90deg,#a855f7,#06b6d4)"></div></div></div>
  <div class="bar-wrap"><div class="bar-label"><span>Engagement</span><span>78%</span></div><div class="bar-bg"><div class="bar-fill" id="b2" style="width:0;background:linear-gradient(90deg,#06b6d4,#a855f7)"></div></div></div>
  <button class="btn">View Full Report →</button>
</div></div></div>
<script>
const card=document.getElementById('card'),wrap=card.parentElement;
wrap.addEventListener('mousemove',e=>{const r=wrap.getBoundingClientRect(),x=(e.clientX-r.left-r.width/2)/(r.width/2),y=(e.clientY-r.top-r.height/2)/(r.height/2);card.style.transform=\`rotateY(\${x*9}deg) rotateX(\${-y*9}deg)\`;});
wrap.addEventListener('mouseleave',()=>{card.style.transform='';});
const cv=document.getElementById('cv'),ctx=cv.getContext('2d');
cv.width=320;cv.height=cv.parentElement.offsetHeight||420;
let t=0;
function draw(){ctx.clearRect(0,0,cv.width,cv.height);t+=0.008;
for(let i=0;i<5;i++){const y=cv.height*(0.15+i*0.17),amp=18+i*5,freq=0.012+i*0.004;
const h=(i*60+t*30)%360;ctx.beginPath();
for(let x=0;x<=cv.width;x+=3){const py=y+Math.sin(x*freq+t+i)*amp;x===0?ctx.moveTo(x,py):ctx.lineTo(x,py);}
ctx.strokeStyle=\`hsla(\${h},80%,65%,0.08)\`;ctx.lineWidth=2;ctx.stroke();}
requestAnimationFrame(draw);}draw();
function count(el,target,suffix=''){let v=0;const step=target/60;const id=setInterval(()=>{v=Math.min(v+step,target);el.textContent=Math.round(v)+suffix;if(v>=target)clearInterval(id);},20);}
setTimeout(()=>{count(document.getElementById('s1'),48200,'');document.getElementById('s1').textContent='48.2k';},300);
setTimeout(()=>{count(document.getElementById('s2'),124,'');document.getElementById('s2').textContent='$124k';},400);
setTimeout(()=>{count(document.getElementById('s3'),3847,'');},500);
setTimeout(()=>{count(document.getElementById('s4'),92,'');document.getElementById('s4').textContent='92%';},600);
setTimeout(()=>{document.getElementById('b1').style.width='94%';document.getElementById('b2').style.width='78%';},700);
</script></body></html>`,
    code: `'use client'
import React, { useRef, useEffect, useState } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'

const STATS = [{ n:'48.2k', l:'Total Users' },{ n:'$124k', l:'Revenue' },{ n:'3,847', l:'Conversions' },{ n:'92%', l:'Retention' }]
const BARS = [{ label:'Performance', pct:94, from:'#a855f7', to:'#06b6d4' },{ label:'Engagement', pct:78, from:'#06b6d4', to:'#a855f7' }]

export default function HolographicStatsCard() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseX = useMotionValue(0); const mouseY = useMotionValue(0)
  const rotateX = useTransform(mouseY,[-150,150],[9,-9])
  const rotateY = useTransform(mouseX,[-150,150],[-9,9])
  const [visible, setVisible] = useState(false)

  const onMove = (e: React.MouseEvent) => {
    const r = wrapRef.current!.getBoundingClientRect()
    mouseX.set(e.clientX-r.left-r.width/2); mouseY.set(e.clientY-r.top-r.height/2)
  }
  const onLeave = () => { mouseX.set(0); mouseY.set(0) }

  useEffect(() => {
    const canvas = canvasRef.current; if(!canvas) return
    const ctx = canvas.getContext('2d')!
    let t = 0, id: number
    const resize = () => { const r=canvas.getBoundingClientRect(); canvas.width=r.width*(window.devicePixelRatio||1); canvas.height=r.height*(window.devicePixelRatio||1); ctx.scale(window.devicePixelRatio||1,window.devicePixelRatio||1) }
    resize(); window.addEventListener('resize',resize)
    const draw = () => {
      const w=canvas.width/(window.devicePixelRatio||1), h=canvas.height/(window.devicePixelRatio||1)
      ctx.clearRect(0,0,w,h); t+=0.008
      for(let i=0;i<5;i++){
        const y=h*(0.15+i*0.17), amp=18+i*5, freq=0.012+i*0.004, hue=(i*60+t*30)%360
        ctx.beginPath()
        for(let x=0;x<=w;x+=3){const py=y+Math.sin(x*freq+t+i)*amp; x===0?ctx.moveTo(x,py):ctx.lineTo(x,py)}
        ctx.strokeStyle=\`hsla(\${hue},80%,65%,0.08)\`; ctx.lineWidth=2; ctx.stroke()
      }
      id=requestAnimationFrame(draw)
    }
    draw(); setTimeout(()=>setVisible(true),200)
    return ()=>{ cancelAnimationFrame(id); window.removeEventListener('resize',resize) }
  },[])

  return (
    <div className="flex items-center justify-center w-full h-full p-4">
      <div ref={wrapRef} style={{perspective:1200}} onMouseMove={onMove} onMouseLeave={onLeave}>
        <motion.div style={{rotateX,rotateY,transformStyle:'preserve-3d'}} className="relative w-[320px] rounded-3xl cursor-pointer group" transition={{type:'spring',stiffness:300,damping:25}}>
          <div className="absolute inset-0 rounded-3xl pointer-events-none" style={{padding:'1.5px'}}>
            <motion.div className="absolute inset-0 rounded-3xl opacity-40 group-hover:opacity-100 transition-opacity duration-500"
              style={{background:'conic-gradient(from 0deg,transparent 20%,#a855f7 40%,#06b6d4 60%,transparent 80%)',WebkitMaskImage:'linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0)',WebkitMaskComposite:'xor',maskComposite:'exclude',padding:'1.5px'}}
              animate={{rotate:360}} transition={{duration:5,repeat:Infinity,ease:'linear'}}/>
          </div>
          <canvas ref={canvasRef} className="absolute inset-0 w-full h-full rounded-3xl pointer-events-none z-0"/>
          <div className="relative z-10 m-[1.5px] rounded-[22px] bg-[rgba(6,6,10,0.8)] backdrop-blur-xl border border-white/[0.07] p-7">
            <p className="text-[10px] text-white/40 tracking-widest uppercase mb-1">Dashboard Overview</p>
            <p className="text-white font-semibold text-lg mb-6">Performance Metrics</p>
            <div className="grid grid-cols-2 gap-3 mb-5">
              {STATS.map((s,i)=>(
                <motion.div key={i} className="bg-white/[0.04] border border-white/[0.06] rounded-2xl p-3.5"
                  initial={{opacity:0,y:8}} animate={visible?{opacity:1,y:0}:{}} transition={{delay:0.1+i*0.07}}>
                  <p className="text-white font-black text-xl">{s.n}</p>
                  <p className="text-white/40 text-[10px] mt-1">{s.l}</p>
                </motion.div>
              ))}
            </div>
            {BARS.map((b,i)=>(
              <div key={i} className="mb-3">
                <div className="flex justify-between text-[11px] text-white/50 mb-1.5"><span>{b.label}</span><span>{b.pct}%</span></div>
                <div className="h-1 bg-white/[0.06] rounded-full overflow-hidden">
                  <motion.div className="h-full rounded-full" style={{background:\`linear-gradient(90deg,\${b.from},\${b.to})\`}}
                    initial={{width:0}} animate={visible?{width:\`\${b.pct}%\`}:{}} transition={{delay:0.5+i*0.15,duration:0.8,ease:'easeOut'}}/>
                </div>
              </div>
            ))}
            <motion.button whileHover={{scale:1.02,boxShadow:'0 0 25px rgba(168,85,247,0.4)'}} whileTap={{scale:0.97}}
              className="w-full h-10 mt-4 rounded-xl text-white font-semibold text-sm" style={{background:'linear-gradient(135deg,#a855f7,#06b6d4)'}}>
              View Full Report →
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}`,
    prompt: `Create a Holographic Stats Card with Framer Motion + Canvas:
• Canvas layer renders 5 sine waves with hue-cycling colors (hsla) for holographic shimmer feel
• Rotating conic border (purple→cyan) using mask-composite exclude, fades up on hover
• 3D tilt via useMotionValue/useTransform ±9deg linked to mouse
• Stat tiles entrance: staggered opacity+y animation on mount
• Progress bars animate width from 0 to target on mount with easeOut`,
    likes: 0,
    author: "Animation AI",
    featured: true,
    createdAt: "2026-05-22T12:00:00.000Z",
    updatedAt: "2026-05-22T12:00:00.000Z"
  },
  {
    slug: "notification-feed-card",
    title: "Notification Feed Card",
    category: "cards",
    tag: "framer-motion",
    description: "An interactive notification feed card with live-streaming items, animated entry transitions, mark-all-read action, and a traveling beam border — perfect for dashboard or inbox UIs.",
    previewCode: `<!DOCTYPE html><html><head><style>
*{margin:0;padding:0;box-sizing:border-box}body{min-height:100vh;background:#050508;display:flex;align-items:center;justify-content:center;font-family:system-ui,sans-serif}
.card{position:relative;width:320px;border-radius:22px;background:rgba(5,5,8,.9);border:1px solid rgba(255,255,255,.07);backdrop-filter:blur(20px);overflow:hidden;box-shadow:0 20px 60px -15px rgba(0,0,0,.8)}
.beams{position:absolute;inset:0;overflow:hidden;pointer-events:none;border-radius:22px}
.beam{position:absolute;height:2px;width:55%;background:linear-gradient(90deg,transparent,rgba(99,102,241,.7),transparent)}
.beam-t{top:0;animation:bH 3s ease-in-out infinite}
.beam-b{bottom:0;animation:bH2 3s ease-in-out infinite 1.5s}
@keyframes bH{0%{left:-55%}100%{left:110%}}@keyframes bH2{0%{right:-55%}100%{right:110%}}
.header{display:flex;justify-content:space-between;align-items:center;padding:18px 20px 14px;border-bottom:1px solid rgba(255,255,255,.05)}
.htitle{font-size:14px;font-weight:600;color:#fff}.hbadge{background:rgba(99,102,241,.2);border:1px solid rgba(99,102,241,.3);border-radius:99px;padding:2px 8px;font-size:10px;color:#818cf8}
.hbtn{font-size:11px;color:rgba(255,255,255,.35);cursor:pointer;transition:color .2s}.hbtn:hover{color:#fff}
.list{padding:8px 0;max-height:280px}
.item{display:flex;align-items:flex-start;gap:12px;padding:12px 20px;transition:background .2s;cursor:pointer;animation:slideIn .3s ease}
.item:hover{background:rgba(255,255,255,.03)}
@keyframes slideIn{from{opacity:0;transform:translateX(-8px)}to{opacity:1;transform:translateX(0)}}
.dot{width:8px;height:8px;border-radius:50%;flex-shrink:0;margin-top:5px}
.ititle{font-size:12px;color:rgba(255,255,255,.85);font-weight:500;margin-bottom:3px}
.itime{font-size:10px;color:rgba(255,255,255,.3)}
.footer{padding:12px 20px;border-top:1px solid rgba(255,255,255,.05);display:flex;justify-content:center}
.fbtn{font-size:12px;color:#818cf8;cursor:pointer;transition:color .2s}.fbtn:hover{color:#a5b4fc}
</style></head><body>
<div class="card">
  <div class="beams"><div class="beam beam-t"></div><div class="beam beam-b"></div></div>
  <div class="header"><div style="display:flex;align-items:center;gap:8px"><span class="htitle">Notifications</span><span class="hbadge" id="badge">4 new</span></div><span class="hbtn" onclick="markAll()">Mark all read</span></div>
  <div class="list" id="list"></div>
  <div class="footer"><span class="fbtn">View all notifications →</span></div>
</div>
<script>
const items=[
  {color:'#a855f7',title:'New comment on your post',time:'2m ago'},
  {color:'#06b6d4',title:'Alex Rivera started following you',time:'15m ago'},
  {color:'#f59e0b',title:'Your export is ready to download',time:'1h ago'},
  {color:'#10b981',title:'Payment of $249 received',time:'3h ago'},
];
const list=document.getElementById('list');
function render(data){
  list.innerHTML='';
  data.forEach(n=>{
    const d=document.createElement('div');d.className='item';
    d.innerHTML=\`<div class="dot" style="background:\${n.color}"></div><div><div class="ititle">\${n.title}</div><div class="itime">\${n.time}</div></div>\`;
    list.appendChild(d);
  });
}
render(items);
function markAll(){document.getElementById('badge').textContent='0 new';document.querySelectorAll('.dot').forEach(d=>d.style.opacity='0.3');}
// stream new notification after 2s
setTimeout(()=>{
  const newItem={color:'#f43f5e',title:'Server CPU usage at 94%',time:'just now'};
  items.unshift(newItem);render(items);document.getElementById('badge').textContent=\`\${items.length} new\`;
},2500);
</script></body></html>`,
    code: `'use client'
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Notif { id: number; color: string; title: string; time: string; read: boolean }

const INITIAL: Notif[] = [
  { id:1, color:'#a855f7', title:'New comment on your post', time:'2m ago', read:false },
  { id:2, color:'#06b6d4', title:'Alex Rivera started following you', time:'15m ago', read:false },
  { id:3, color:'#f59e0b', title:'Your export is ready to download', time:'1h ago', read:false },
  { id:4, color:'#10b981', title:'Payment of $249 received', time:'3h ago', read:false },
]

export default function NotificationFeedCard() {
  const [notifs, setNotifs] = useState<Notif[]>(INITIAL)

  const unread = notifs.filter(n=>!n.read).length
  const markAll = () => setNotifs(n=>n.map(i=>({...i,read:true})))
  const markOne = (id:number) => setNotifs(n=>n.map(i=>i.id===id?{...i,read:true}:i))

  useEffect(()=>{
    const t = setTimeout(()=>{
      setNotifs(prev=>[{ id:99, color:'#f43f5e', title:'Server CPU usage at 94%', time:'just now', read:false },...prev])
    },2500)
    return ()=>clearTimeout(t)
  },[])

  const BEAMS = [
    { cls:'top-0 left-0 h-[2px] w-[55%]', color:'rgba(99,102,241,0.7)', anim:{ left:['-55%','110%'] } },
    { cls:'bottom-0 right-0 h-[2px] w-[55%]', color:'rgba(99,102,241,0.7)', anim:{ right:['-55%','110%'] } },
  ]

  return (
    <div className="flex items-center justify-center w-full h-full p-4">
      <div className="relative w-[320px] rounded-[22px] bg-[rgba(5,5,8,0.9)] border border-white/[0.07] backdrop-blur-xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)]">
        {/* Beams */}
        <div className="absolute inset-0 overflow-hidden rounded-[22px] pointer-events-none">
          {BEAMS.map((b,i)=>(
            <motion.div key={i} className={\`absolute \${b.cls}\`}
              style={{background:\`linear-gradient(90deg,transparent,\${b.color},transparent)\`}}
              animate={b.anim as any}
              transition={{duration:3,ease:'easeInOut',repeat:Infinity,repeatDelay:1,delay:i*1.5}}/>
          ))}
        </div>

        {/* Header */}
        <div className="flex justify-between items-center px-5 py-4 border-b border-white/[0.05]">
          <div className="flex items-center gap-2">
            <span className="text-white font-semibold text-sm">Notifications</span>
            <AnimatePresence>
              {unread>0&&(
                <motion.span key={unread} initial={{scale:0.7,opacity:0}} animate={{scale:1,opacity:1}} exit={{scale:0.7,opacity:0}}
                  className="px-2 py-0.5 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-[10px] text-indigo-400 font-medium">
                  {unread} new
                </motion.span>
              )}
            </AnimatePresence>
          </div>
          <button onClick={markAll} className="text-[11px] text-white/35 hover:text-white transition-colors">Mark all read</button>
        </div>

        {/* List */}
        <div className="py-1 max-h-[280px] overflow-y-auto">
          <AnimatePresence initial={false}>
            {notifs.map(n=>(
              <motion.div key={n.id}
                initial={{opacity:0,x:-10,height:0}} animate={{opacity:1,x:0,height:'auto'}} exit={{opacity:0,x:10,height:0}}
                transition={{duration:0.25,ease:'easeOut'}}
                onClick={()=>markOne(n.id)}
                className="flex items-start gap-3 px-5 py-3 hover:bg-white/[0.03] transition-colors cursor-pointer">
                <div className="w-2 h-2 rounded-full flex-shrink-0 mt-1.5 transition-opacity duration-500" style={{background:n.color,opacity:n.read?0.3:1}}/>
                <div>
                  <p className={\`text-xs font-medium transition-colors \${n.read?'text-white/40':'text-white/85'}\`}>{n.title}</p>
                  <p className="text-[10px] text-white/30 mt-0.5">{n.time}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="px-5 py-3 border-t border-white/[0.05] flex justify-center">
          <button className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors">View all notifications →</button>
        </div>
      </div>
    </div>
  )
}`,
    prompt: `Create a Notification Feed Card with Framer Motion:
• AnimatePresence list: each item slides in from x:-10 with height:0→auto on mount, exits with x:10
• 2 traveling indigo beams animate along top and bottom edges with 1.5s delay stagger
• New notification auto-streams in after 2.5s via useEffect setTimeout
• Mark all read: toggles dot opacity to 0.3 and fades text color; individual click marks one read
• Unread badge animates in/out with scale transition via AnimatePresence`,
    likes: 0,
    author: "Animation AI",
    featured: true,
    createdAt: "2026-05-22T12:00:00.000Z",
    updatedAt: "2026-05-22T12:00:00.000Z"
  },
  {
    slug: "crypto-price-card",
    title: "Crypto Price Card",
    category: "cards",
    tag: "canvas",
    description: "A dark crypto ticker card with a live Canvas sparkline chart, animated price counter, percentage badge, and a glowing conic border that pulses green on price rise.",
    previewCode: `<!DOCTYPE html><html><head><style>
*{margin:0;padding:0;box-sizing:border-box}body{min-height:100vh;background:#050507;display:flex;align-items:center;justify-content:center;font-family:system-ui,sans-serif}
.card{position:relative;width:300px;border-radius:22px;overflow:hidden;background:rgba(5,5,7,.9);border:1px solid rgba(255,255,255,.07);backdrop-filter:blur(20px);box-shadow:0 20px 60px -15px rgba(0,0,0,.9)}
.ring{position:absolute;inset:0;border-radius:22px;pointer-events:none}
.ring::before{content:"";position:absolute;inset:0;border-radius:22px;background:conic-gradient(from 0deg,transparent 30%,#10b981 50%,#34d399 60%,transparent 80%);animation:spin 6s linear infinite;mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask-composite:exclude;padding:1.5px;opacity:.5}
@keyframes spin{to{transform:rotate(360deg)}}
.body{padding:22px}
.top{display:flex;justify-content:space-between;align-items:center;margin-bottom:16px}
.coin{display:flex;align-items:center;gap:10px}
.icon{width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,#f59e0b,#fbbf24);display:flex;align-items:center;justify-content:center;font-weight:800;font-size:13px;color:#000}
.cname{font-size:14px;font-weight:600;color:#fff}.csym{font-size:11px;color:rgba(255,255,255,.4)}
.badge{padding:4px 10px;border-radius:99px;background:rgba(16,185,129,.15);border:1px solid rgba(16,185,129,.3);font-size:11px;color:#10b981;font-weight:600}
.price{font-size:32px;font-weight:800;color:#fff;margin-bottom:4px}
.sub{font-size:11px;color:rgba(255,255,255,.35);margin-bottom:16px}
canvas{width:100%;height:70px;display:block;border-radius:10px}
.stats{display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-top:16px}
.st{background:rgba(255,255,255,.04);border-radius:10px;padding:10px;text-align:center}
.sv{font-size:13px;font-weight:700;color:#fff}.sl{font-size:9px;color:rgba(255,255,255,.35);margin-top:2px}
</style></head><body>
<div class="card"><div class="ring"></div><div class="body">
  <div class="top"><div class="coin"><div class="icon">₿</div><div><div class="cname">Bitcoin</div><div class="csym">BTC / USD</div></div></div><div class="badge" id="badge">+4.2%</div></div>
  <div class="price" id="price">$67,420</div>
  <div class="sub">Last updated just now</div>
  <canvas id="cv" height="70"></canvas>
  <div class="stats">
    <div class="st"><div class="sv">$1.2T</div><div class="sl">Market Cap</div></div>
    <div class="st"><div class="sv">$38B</div><div class="sl">Volume 24h</div></div>
    <div class="st"><div class="sv">21M</div><div class="sl">Max Supply</div></div>
  </div>
</div></div>
<script>
const cv=document.getElementById('cv'),ctx=cv.getContext('2d');
cv.width=cv.offsetWidth*2;cv.height=140;ctx.scale(2,2);
const W=cv.offsetWidth/2,H=70;
const pts=Array.from({length:40},(_,i)=>({x:i,y:35+Math.sin(i*.4+1)*12+Math.random()*8}));
function draw(){
  ctx.clearRect(0,0,W,H);
  const g=ctx.createLinearGradient(0,0,W,0);
  g.addColorStop(0,'#10b981');g.addColorStop(1,'#34d399');
  ctx.beginPath();
  pts.forEach((p,i)=>{const x=p.x/39*W,y=p.y;i===0?ctx.moveTo(x,y):ctx.lineTo(x,y);});
  ctx.strokeStyle=g;ctx.lineWidth=2;ctx.stroke();
  const ga=ctx.createLinearGradient(0,0,0,H);
  ga.addColorStop(0,'rgba(16,185,129,0.2)');ga.addColorStop(1,'transparent');
  ctx.lineTo(W,H);ctx.lineTo(0,H);ctx.closePath();ctx.fillStyle=ga;ctx.fill();
}
draw();
setInterval(()=>{pts.shift();pts.push({x:39,y:35+Math.sin(Date.now()*.002)*12+Math.random()*8});pts.forEach((p,i)=>p.x=i);draw();},200);
</script></body></html>`,
    code: `'use client'
import React, { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CryptoPriceCard() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [price, setPrice] = useState(67420)
  const ptsRef = useRef<{x:number,y:number}[]>(
    Array.from({length:40},(_,i)=>({x:i,y:35+Math.sin(i*.4+1)*12+Math.random()*8}))
  )

  useEffect(()=>{
    const cv=canvasRef.current; if(!cv) return
    const ctx=cv.getContext('2d')!
    const dpr=window.devicePixelRatio||1
    const W=300,H=70
    cv.width=W*dpr; cv.height=H*dpr; ctx.scale(dpr,dpr)

    const drawChart=()=>{
      ctx.clearRect(0,0,W,H)
      const g=ctx.createLinearGradient(0,0,W,0)
      g.addColorStop(0,'#10b981'); g.addColorStop(1,'#34d399')
      ctx.beginPath()
      ptsRef.current.forEach((p,i)=>{
        const x=p.x/39*W, y=p.y
        i===0?ctx.moveTo(x,y):ctx.lineTo(x,y)
      })
      ctx.strokeStyle=g; ctx.lineWidth=2; ctx.stroke()
      const ga=ctx.createLinearGradient(0,0,0,H)
      ga.addColorStop(0,'rgba(16,185,129,0.2)'); ga.addColorStop(1,'transparent')
      ctx.lineTo(W,H); ctx.lineTo(0,H); ctx.closePath()
      ctx.fillStyle=ga; ctx.fill()
    }

    drawChart()
    const iv=setInterval(()=>{
      const pts=ptsRef.current
      pts.shift(); pts.push({x:39,y:35+Math.sin(Date.now()*.002)*12+Math.random()*8})
      pts.forEach((p,i)=>p.x=i)
      setPrice(p=>p+(Math.random()>0.5?1:-1)*Math.floor(Math.random()*80))
      drawChart()
    },600)
    return ()=>clearInterval(iv)
  },[])

  return (
    <div className="flex items-center justify-center w-full h-full p-4">
      <div className="relative w-[300px] rounded-[22px] overflow-hidden bg-[rgba(5,5,7,0.9)] border border-white/[0.07] backdrop-blur-xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.9)] group">
        <motion.div className="absolute inset-0 rounded-[22px] pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-500"
          style={{background:'conic-gradient(from 0deg,transparent 30%,#10b981 50%,#34d399 60%,transparent 80%)',WebkitMaskImage:'linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0)',WebkitMaskComposite:'xor',maskComposite:'exclude',padding:'1.5px'}}
          animate={{rotate:360}} transition={{duration:6,repeat:Infinity,ease:'linear'}}/>
        <div className="relative z-10 p-[22px]">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-500 to-amber-400 flex items-center justify-center font-black text-black text-sm">₿</div>
              <div><p className="text-white font-semibold text-sm">Bitcoin</p><p className="text-white/40 text-[11px]">BTC / USD</p></div>
            </div>
            <span className="px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[11px] font-semibold">+4.2%</span>
          </div>
          <motion.p className="text-4xl font-black text-white mb-1" key={price} initial={{opacity:0.5}} animate={{opacity:1}} transition={{duration:0.2}}>
            \${price.toLocaleString()}
          </motion.p>
          <p className="text-[11px] text-white/35 mb-4">Last updated just now</p>
          <canvas ref={canvasRef} className="w-full rounded-xl" style={{height:70}}/>
          <div className="grid grid-cols-3 gap-2 mt-4">
            {[['$1.2T','Market Cap'],['$38B','Volume 24h'],['21M','Max Supply']].map(([v,l])=>(
              <div key={l} className="bg-white/[0.04] rounded-xl p-2.5 text-center">
                <p className="text-white font-bold text-sm">{v}</p>
                <p className="text-white/35 text-[9px] mt-0.5">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}`,
    prompt: `Create a Crypto Price Card with live Canvas sparkline:
• Canvas sparkline: 40-point rolling window, draws stroke + fill gradient area, updates every 600ms
• Price counter animates with Framer Motion opacity flash on each tick
• Rotating emerald conic border using mask-composite exclude
• Stat grid: 3 tiles (Market Cap / Volume / Supply) with glass background
• Badge shows % change with emerald pill styling`,
    likes: 0,
    author: "Animation AI",
    featured: true,
    createdAt: "2026-05-22T12:30:00.000Z",
    updatedAt: "2026-05-22T12:30:00.000Z"
  },
  {
    slug: "team-member-card",
    title: "Team Member Card",
    category: "cards",
    tag: "framer-motion",
    description: "A glassmorphism team member card with 3D tilt, animated skill bars, social icon hover effects, and traveling border beams — ideal for about pages and team showcases.",
    previewCode: `<!DOCTYPE html><html><head><style>
*{margin:0;padding:0;box-sizing:border-box}body{min-height:100vh;background:#07050f;display:flex;align-items:center;justify-content:center;font-family:system-ui,sans-serif}
body::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at 30% 20%,rgba(124,58,237,.2),transparent 55%)}
.wrap{perspective:1200px}
.card{position:relative;width:300px;border-radius:24px;overflow:hidden;cursor:pointer;transform-style:preserve-3d;transition:transform .15s,box-shadow .3s;background:rgba(7,5,15,.8);border:1px solid rgba(255,255,255,.08);backdrop-filter:blur(20px)}
.card:hover{box-shadow:0 30px 70px -10px rgba(124,58,237,.3)}
.beams{position:absolute;inset:0;overflow:hidden;border-radius:24px;pointer-events:none}
.beam{position:absolute;opacity:.6}
.bt{top:0;left:-60%;height:2px;width:60%;background:linear-gradient(90deg,transparent,#7c3aed,transparent);animation:bH 3s ease-in-out infinite}
.bb{bottom:0;right:-60%;height:2px;width:60%;background:linear-gradient(90deg,transparent,#a78bfa,transparent);animation:bH2 3s ease-in-out infinite 1.5s}
@keyframes bH{0%{left:-60%}100%{left:110%}}@keyframes bH2{0%{right:-60%}100%{right:110%}}
.body{padding:24px;position:relative;z-index:2}
.avatar{width:72px;height:72px;border-radius:50%;background:linear-gradient(135deg,#7c3aed,#a78bfa);margin:0 auto 12px;display:flex;align-items:center;justify-content:center;font-size:26px;font-weight:800;color:#fff;border:2px solid rgba(255,255,255,.15);box-shadow:0 0 30px rgba(124,58,237,.4)}
.name{text-align:center;font-size:17px;font-weight:600;color:#fff;margin-bottom:4px}
.role{text-align:center;font-size:11px;color:rgba(255,255,255,.4);margin-bottom:18px}
.skills{margin-bottom:18px}
.skill{margin-bottom:10px}
.skill-top{display:flex;justify-content:space-between;font-size:11px;color:rgba(255,255,255,.5);margin-bottom:5px}
.bar{height:4px;background:rgba(255,255,255,.07);border-radius:99px;overflow:hidden}
.fill{height:100%;border-radius:99px;background:linear-gradient(90deg,#7c3aed,#a78bfa);transition:width .8s ease}
.socials{display:flex;justify-content:center;gap:10px}
.soc{width:32px;height:32px;border-radius:50%;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);display:flex;align-items:center;justify-content:center;font-size:13px;cursor:pointer;transition:all .2s}
.soc:hover{background:rgba(124,58,237,.3);border-color:rgba(124,58,237,.5);transform:scale(1.1)}
</style></head><body>
<div class="wrap"><div class="card" id="card">
  <div class="beams"><div class="beam bt"></div><div class="beam bb"></div></div>
  <div class="body">
    <div class="avatar">J</div>
    <div class="name">Jordan Lee</div>
    <div class="role">Full Stack Engineer · Remote</div>
    <div class="skills">
      <div class="skill"><div class="skill-top"><span>React / Next.js</span><span>95%</span></div><div class="bar"><div class="fill" id="f1" style="width:0"></div></div></div>
      <div class="skill"><div class="skill-top"><span>TypeScript</span><span>88%</span></div><div class="bar"><div class="fill" id="f2" style="width:0"></div></div></div>
      <div class="skill"><div class="skill-top"><span>System Design</span><span>80%</span></div><div class="bar"><div class="fill" id="f3" style="width:0"></div></div></div>
    </div>
    <div class="socials">
      <div class="soc">𝕏</div><div class="soc">in</div><div class="soc">⌥</div>
    </div>
  </div>
</div></div>
<script>
const card=document.getElementById('card'),wrap=card.parentElement;
wrap.addEventListener('mousemove',e=>{const r=wrap.getBoundingClientRect(),x=(e.clientX-r.left-r.width/2)/(r.width/2),y=(e.clientY-r.top-r.height/2)/(r.height/2);card.style.transform=\`rotateY(\${x*9}deg) rotateX(\${-y*9}deg)\`;});
wrap.addEventListener('mouseleave',()=>{card.style.transform='';});
setTimeout(()=>{document.getElementById('f1').style.width='95%';document.getElementById('f2').style.width='88%';document.getElementById('f3').style.width='80%';},400);
</script></body></html>`,
    code: `'use client'
import React, { useRef, useState } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'

const SKILLS = [{ label:'React / Next.js', pct:95 },{ label:'TypeScript', pct:88 },{ label:'System Design', pct:80 }]
const SOCIALS = ['𝕏','in','⌥']

export default function TeamMemberCard() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0); const mouseY = useMotionValue(0)
  const rotateX = useTransform(mouseY,[-150,150],[9,-9])
  const rotateY = useTransform(mouseX,[-150,150],[-9,9])
  const [visible, setVisible] = useState(false)

  const onMove = (e: React.MouseEvent) => {
    const r=wrapRef.current!.getBoundingClientRect()
    mouseX.set(e.clientX-r.left-r.width/2); mouseY.set(e.clientY-r.top-r.height/2)
  }
  const onLeave = () => { mouseX.set(0); mouseY.set(0) }

  const BEAMS = [
    { cls:'top-0 left-0 h-[2px] w-[60%]', anim:{ left:['-60%','110%'] }, color:'#7c3aed', delay:0 },
    { cls:'bottom-0 right-0 h-[2px] w-[60%]', anim:{ right:['-60%','110%'] }, color:'#a78bfa', delay:1.5 },
  ]

  return (
    <div className="flex items-center justify-center w-full h-full p-4"
      style={{background:'radial-gradient(ellipse at 30% 20%,rgba(124,58,237,0.15),transparent 55%)'}}>
      <div ref={wrapRef} style={{perspective:1200}} onMouseMove={onMove} onMouseLeave={onLeave}>
        <motion.div style={{rotateX,rotateY,transformStyle:'preserve-3d'}} onViewportEnter={()=>setVisible(true)}
          className="relative w-[300px] rounded-3xl overflow-hidden bg-[rgba(7,5,15,0.8)] border border-white/[0.08] backdrop-blur-xl cursor-pointer group"
          whileHover={{boxShadow:'0 30px 70px -10px rgba(124,58,237,0.3)'}}
          transition={{type:'spring',stiffness:300,damping:25}}>
          <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
            {BEAMS.map((b,i)=>(
              <motion.div key={i} className={\`absolute \${b.cls}\`}
                style={{background:\`linear-gradient(90deg,transparent,\${b.color},transparent)\`,opacity:0.6}}
                animate={b.anim as any}
                transition={{duration:3,ease:'easeInOut',repeat:Infinity,repeatDelay:1,delay:b.delay}}/>
            ))}
          </div>
          <div className="relative z-10 p-6">
            <motion.div className="flex justify-center mb-3"
              initial={{scale:0.6,opacity:0}} animate={{scale:1,opacity:1}} transition={{type:'spring',duration:0.6}}>
              <div className="w-[72px] h-[72px] rounded-full bg-gradient-to-br from-violet-700 to-violet-400 flex items-center justify-center text-3xl font-black text-white border-2 border-white/15 shadow-[0_0_30px_rgba(124,58,237,0.4)]">J</div>
            </motion.div>
            <motion.div className="text-center mb-5" initial={{opacity:0,y:6}} animate={{opacity:1,y:0}} transition={{delay:0.15}}>
              <p className="text-white font-semibold text-lg">Jordan Lee</p>
              <p className="text-white/40 text-[11px] mt-0.5">Full Stack Engineer · Remote</p>
            </motion.div>
            <div className="space-y-3 mb-5">
              {SKILLS.map((s,i)=>(
                <motion.div key={s.label} initial={{opacity:0,x:-8}} animate={{opacity:1,x:0}} transition={{delay:0.2+i*0.08}}>
                  <div className="flex justify-between text-[11px] text-white/50 mb-1.5"><span>{s.label}</span><span>{s.pct}%</span></div>
                  <div className="h-1 bg-white/[0.07] rounded-full overflow-hidden">
                    <motion.div className="h-full rounded-full bg-gradient-to-r from-violet-600 to-violet-400"
                      initial={{width:0}} animate={visible?{width:\`\${s.pct}%\`}:{}} transition={{delay:0.4+i*0.1,duration:0.7,ease:'easeOut'}}/>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="flex justify-center gap-2.5">
              {SOCIALS.map((s,i)=>(
                <motion.button key={i} whileHover={{scale:1.15,background:'rgba(124,58,237,0.3)',borderColor:'rgba(124,58,237,0.5)'}} whileTap={{scale:0.92}}
                  className="w-8 h-8 rounded-full bg-white/[0.05] border border-white/[0.1] flex items-center justify-center text-sm text-white/60 hover:text-white transition-colors">
                  {s}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}`,
    prompt: `Create a Team Member Card with Framer Motion:
• 3D tilt via useMotionValue/useTransform ±9deg on mouse
• 2 traveling violet beams (top-left, bottom-right) with 1.5s stagger
• Avatar spring-scales in on mount; name/role fade up with delay
• Skill bars stagger in from x:-8 then width animates 0→pct on viewport enter
• Social icon buttons scale+color on whileHover with violet tint`,
    likes: 0,
    author: "Animation AI",
    featured: true,
    createdAt: "2026-05-22T12:30:00.000Z",
    updatedAt: "2026-05-22T12:30:00.000Z"
  },
  {
    slug: "weather-forecast-card",
    title: "Weather Forecast Card",
    category: "cards",
    tag: "canvas",
    description: "A premium weather card with an animated cloud particle canvas sky, live temperature display, 5-day forecast row, and a traveling beam border that changes color with weather state.",
    previewCode: `<!DOCTYPE html><html><head><style>
*{margin:0;padding:0;box-sizing:border-box}body{min-height:100vh;background:#080c14;display:flex;align-items:center;justify-content:center;font-family:system-ui,sans-serif}
.card{position:relative;width:300px;border-radius:24px;overflow:hidden;background:rgba(8,12,20,.85);border:1px solid rgba(255,255,255,.07);backdrop-filter:blur(20px);box-shadow:0 20px 60px -15px rgba(0,0,0,.9)}
.ring{position:absolute;inset:0;border-radius:24px;padding:1.5px;pointer-events:none}
.ring::before{content:"";position:absolute;inset:0;border-radius:24px;background:conic-gradient(from 0deg,transparent 25%,#38bdf8 45%,#7dd3fc 60%,transparent 80%);animation:spin 7s linear infinite;mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask-composite:exclude;opacity:.45}
@keyframes spin{to{transform:rotate(360deg)}}
canvas{position:absolute;top:0;left:0;width:100%;height:140px;pointer-events:none}
.body{position:relative;z-index:2;padding:22px}
.top{display:flex;justify-content:space-between;align-items:flex-start;margin-top:100px}
.temp{font-size:52px;font-weight:800;color:#fff;line-height:1}
.deg{font-size:24px;font-weight:300;color:rgba(255,255,255,.5)}
.cond{font-size:13px;color:rgba(255,255,255,.5);margin-top:4px}
.loc{text-align:right}.city{font-size:14px;font-weight:600;color:#fff}.country{font-size:11px;color:rgba(255,255,255,.4)}
.details{display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin:16px 0}
.det{background:rgba(255,255,255,.04);border-radius:10px;padding:10px;text-align:center}
.dv{font-size:13px;font-weight:700;color:#fff}.dl{font-size:9px;color:rgba(255,255,255,.35);margin-top:2px}
.forecast{display:flex;gap:6px;border-top:1px solid rgba(255,255,255,.06);padding-top:14px}
.day{flex:1;text-align:center;padding:8px 4px;border-radius:10px;background:rgba(255,255,255,.03)}
.dn{font-size:9px;color:rgba(255,255,255,.4);margin-bottom:6px}
.di{font-size:16px;margin-bottom:4px}
.dt{font-size:11px;font-weight:600;color:#fff}
</style></head><body>
<div class="card"><div class="ring"></div>
<canvas id="cv"></canvas>
<div class="body">
  <div class="top">
    <div><div class="temp">24<span class="deg">°C</span></div><div class="cond">Partly Cloudy</div></div>
    <div class="loc"><div class="city">San Francisco</div><div class="country">California, US</div></div>
  </div>
  <div class="details">
    <div class="det"><div class="dv">68%</div><div class="dl">Humidity</div></div>
    <div class="det"><div class="dv">12km/h</div><div class="dl">Wind</div></div>
    <div class="det"><div class="dv">8km</div><div class="dl">Visibility</div></div>
  </div>
  <div class="forecast">
    <div class="day"><div class="dn">Mon</div><div class="di">☀️</div><div class="dt">26°</div></div>
    <div class="day"><div class="dn">Tue</div><div class="di">⛅</div><div class="dt">22°</div></div>
    <div class="day"><div class="dn">Wed</div><div class="di">🌧️</div><div class="dt">18°</div></div>
    <div class="day"><div class="dn">Thu</div><div class="di">⛅</div><div class="dt">21°</div></div>
    <div class="day"><div class="dn">Fri</div><div class="di">☀️</div><div class="dt">25°</div></div>
  </div>
</div></div>
<script>
const cv=document.getElementById('cv'),ctx=cv.getContext('2d');
cv.width=300;cv.height=140;
const clouds=Array.from({length:6},()=>({x:Math.random()*400-50,y:20+Math.random()*60,r:18+Math.random()*22,speed:.25+Math.random()*.35,alpha:.12+Math.random()*.1}));
const stars=Array.from({length:30},()=>({x:Math.random()*300,y:Math.random()*100,r:Math.random()*1.2,t:Math.random()*Math.PI*2}));
let t=0;
function draw(){
  ctx.clearRect(0,0,300,140);
  const grd=ctx.createLinearGradient(0,0,0,140);
  grd.addColorStop(0,'rgba(14,30,60,0.9)');grd.addColorStop(1,'rgba(8,12,20,0)');
  ctx.fillStyle=grd;ctx.fillRect(0,0,300,140);
  stars.forEach(s=>{ctx.beginPath();ctx.arc(s.x,s.y,s.r,0,Math.PI*2);ctx.fillStyle=\`rgba(255,255,255,\${.4+Math.sin(t*2+s.t)*.3})\`;ctx.fill();});
  clouds.forEach(c=>{
    c.x+=c.speed;if(c.x>350)c.x=-60;
    ctx.beginPath();ctx.arc(c.x,c.y,c.r,0,Math.PI*2);
    ctx.arc(c.x+c.r*.7,c.y-c.r*.3,c.r*.7,0,Math.PI*2);
    ctx.arc(c.x+c.r*1.3,c.y,c.r*.8,0,Math.PI*2);
    ctx.fillStyle=\`rgba(180,210,255,\${c.alpha})\`;ctx.fill();
  });
  t+=0.02;requestAnimationFrame(draw);
}
draw();
</script></body></html>`,
    code: `'use client'
import React, { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

const FORECAST = [
  { day:'Mon', icon:'☀️', temp:'26°' },{ day:'Tue', icon:'⛅', temp:'22°' },
  { day:'Wed', icon:'🌧️', temp:'18°' },{ day:'Thu', icon:'⛅', temp:'21°' },{ day:'Fri', icon:'☀️', temp:'25°' },
]
const DETAILS = [{ v:'68%', l:'Humidity' },{ v:'12km/h', l:'Wind' },{ v:'8km', l:'Visibility' }]

export default function WeatherForecastCard() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const cv = canvasRef.current; if (!cv) return
    const ctx = cv.getContext('2d')!
    const dpr = window.devicePixelRatio || 1
    cv.width = 300 * dpr; cv.height = 140 * dpr; ctx.scale(dpr, dpr)
    const W = 300, H = 140

    const clouds = Array.from({ length: 6 }, () => ({
      x: Math.random() * 400 - 50, y: 20 + Math.random() * 60,
      r: 18 + Math.random() * 22, speed: 0.25 + Math.random() * 0.35,
      alpha: 0.12 + Math.random() * 0.1
    }))
    const stars = Array.from({ length: 30 }, () => ({
      x: Math.random() * W, y: Math.random() * 100,
      r: Math.random() * 1.2, t: Math.random() * Math.PI * 2
    }))
    let t = 0, id: number

    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      const grd = ctx.createLinearGradient(0, 0, 0, H)
      grd.addColorStop(0, 'rgba(14,30,60,0.9)'); grd.addColorStop(1, 'rgba(8,12,20,0)')
      ctx.fillStyle = grd; ctx.fillRect(0, 0, W, H)

      stars.forEach(s => {
        ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = \`rgba(255,255,255,\${0.4 + Math.sin(t * 2 + s.t) * 0.3})\`; ctx.fill()
      })
      clouds.forEach(c => {
        c.x += c.speed; if (c.x > 350) c.x = -60
        ctx.beginPath()
        ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2)
        ctx.arc(c.x + c.r * 0.7, c.y - c.r * 0.3, c.r * 0.7, 0, Math.PI * 2)
        ctx.arc(c.x + c.r * 1.3, c.y, c.r * 0.8, 0, Math.PI * 2)
        ctx.fillStyle = \`rgba(180,210,255,\${c.alpha})\`; ctx.fill()
      })
      t += 0.02; id = requestAnimationFrame(draw)
    }
    draw()
    return () => cancelAnimationFrame(id)
  }, [])

  return (
    <div className="flex items-center justify-center w-full h-full p-4">
      <div className="relative w-[300px] rounded-3xl overflow-hidden bg-[rgba(8,12,20,0.85)] border border-white/[0.07] backdrop-blur-xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.9)] group">
        <motion.div className="absolute inset-0 rounded-3xl pointer-events-none opacity-45 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: 'conic-gradient(from 0deg,transparent 25%,#38bdf8 45%,#7dd3fc 60%,transparent 80%)', WebkitMaskImage: 'linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude', padding: '1.5px' }}
          animate={{ rotate: 360 }} transition={{ duration: 7, repeat: Infinity, ease: 'linear' }} />
        <canvas ref={canvasRef} className="absolute top-0 left-0 w-full pointer-events-none" style={{ height: 140 }} />
        <div className="relative z-10 p-[22px]">
          <div className="flex justify-between items-start mt-[100px]">
            <div>
              <p className="text-6xl font-black text-white leading-none">24<span className="text-2xl font-light text-white/50">°C</span></p>
              <p className="text-sm text-white/50 mt-1">Partly Cloudy</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold text-white">San Francisco</p>
              <p className="text-[11px] text-white/40">California, US</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 my-4">
            {DETAILS.map(d => (
              <div key={d.l} className="bg-white/[0.04] rounded-xl p-2.5 text-center">
                <p className="text-white font-bold text-sm">{d.v}</p>
                <p className="text-white/35 text-[9px] mt-0.5">{d.l}</p>
              </div>
            ))}
          </div>
          <div className="flex gap-1.5 border-t border-white/[0.06] pt-3.5">
            {FORECAST.map((f, i) => (
              <motion.div key={f.day} className="flex-1 text-center py-2 rounded-xl bg-white/[0.03]"
                initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + i * 0.06 }}>
                <p className="text-[9px] text-white/40 mb-1">{f.day}</p>
                <p className="text-base mb-1">{f.icon}</p>
                <p className="text-xs font-semibold text-white">{f.temp}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}`,
    prompt: `Create a Weather Forecast Card with animated canvas sky:
• Canvas sky: drifting semi-transparent cloud blobs + twinkling star particles behind the card header
• Rotating sky-blue conic border using mask-composite exclude, brightens on hover
• Temperature hero text + condition label overlaid on canvas area
• Detail grid: Humidity / Wind / Visibility in glass tiles
• 5-day forecast row with emoji icons, staggered fade-up entrance`,
    likes: 0,
    author: "Animation AI",
    featured: true,
    createdAt: "2026-05-22T13:00:00.000Z",
    updatedAt: "2026-05-22T13:00:00.000Z"
  },
  {
    slug: "music-player-card",
    title: "Music Player Card",
    category: "cards",
    tag: "framer-motion",
    description: "A premium dark music player card with an animated waveform canvas visualizer, play/pause/skip controls, rotating album art, and a progress bar — all wrapped in a glassmorphism shell with traveling beams.",
    previewCode: `<!DOCTYPE html><html><head><style>
*{margin:0;padding:0;box-sizing:border-box}body{min-height:100vh;background:#060409;display:flex;align-items:center;justify-content:center;font-family:system-ui,sans-serif}
.card{position:relative;width:300px;border-radius:24px;overflow:hidden;background:rgba(6,4,9,.9);border:1px solid rgba(255,255,255,.07);backdrop-filter:blur(20px);box-shadow:0 20px 60px -15px rgba(0,0,0,.9)}
.beams{position:absolute;inset:0;overflow:hidden;border-radius:24px;pointer-events:none}
.beam{position:absolute;height:2px;width:55%}
.bt{top:0;left:-55%;background:linear-gradient(90deg,transparent,#e879f9,transparent);animation:bH 3s ease-in-out infinite}
.bb{bottom:0;right:-55%;background:linear-gradient(90deg,transparent,#a855f7,transparent);animation:bH2 3s ease-in-out infinite 1.5s}
@keyframes bH{0%{left:-55%}100%{left:110%}}@keyframes bH2{0%{right:-55%}100%{right:110%}}
.body{padding:24px;position:relative;z-index:2}
.album{width:100px;height:100px;border-radius:50%;background:linear-gradient(135deg,#7c3aed,#e879f9,#7c3aed);margin:0 auto 16px;display:flex;align-items:center;justify-content:center;font-size:36px;box-shadow:0 0 40px rgba(232,121,249,.3);animation:spin 8s linear infinite paused;border:2px solid rgba(255,255,255,.1)}
.album.playing{animation-play-state:running}
@keyframes spin{to{transform:rotate(360deg)}}
.title{text-align:center;font-size:16px;font-weight:600;color:#fff;margin-bottom:4px}
.artist{text-align:center;font-size:12px;color:rgba(255,255,255,.4);margin-bottom:16px}
canvas{width:100%;height:40px;display:block;border-radius:8px;margin-bottom:14px}
.progress{height:3px;background:rgba(255,255,255,.1);border-radius:99px;margin-bottom:16px;cursor:pointer}
.prog-fill{height:100%;width:30%;background:linear-gradient(90deg,#a855f7,#e879f9);border-radius:99px;transition:width .1s}
.controls{display:flex;justify-content:center;align-items:center;gap:20px}
.btn{width:36px;height:36px;border-radius:50%;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);display:flex;align-items:center;justify-content:center;font-size:14px;cursor:pointer;transition:all .2s;color:#fff}
.btn:hover{background:rgba(168,85,247,.3);border-color:rgba(168,85,247,.5);transform:scale(1.1)}
.play{width:44px;height:44px;background:linear-gradient(135deg,#a855f7,#e879f9);border:none;font-size:16px;box-shadow:0 0 20px rgba(168,85,247,.4)}
.play:hover{transform:scale(1.12);box-shadow:0 0 30px rgba(168,85,247,.6)}
</style></head><body>
<div class="card"><div class="beams"><div class="beam bt"></div><div class="beam bb"></div></div>
<div class="body">
  <div class="album" id="album">🎵</div>
  <div class="title">Neon Dreams</div>
  <div class="artist">Synthwave Collective</div>
  <canvas id="cv" height="40"></canvas>
  <div class="progress"><div class="prog-fill" id="prog"></div></div>
  <div class="controls">
    <div class="btn">⏮</div>
    <div class="btn play" id="play">▶</div>
    <div class="btn">⏭</div>
  </div>
</div></div>
<script>
const cv=document.getElementById('cv'),ctx=cv.getContext('2d');
cv.width=cv.offsetWidth*2||540;cv.height=80;ctx.scale(2,1);
const W=cv.offsetWidth/2||270,H=40;
let playing=false,prog=30,t=0;
const bars=Array.from({length:36},()=>({h:5+Math.random()*20,v:Math.random()*Math.PI*2}));
function draw(){
  ctx.clearRect(0,0,W,H);
  bars.forEach((b,i)=>{
    const h=playing?8+Math.abs(Math.sin(t*3+b.v))*22:b.h;
    const x=i*(W/36);const y=(H-h)/2;
    const g=ctx.createLinearGradient(0,y,0,y+h);
    g.addColorStop(0,'rgba(232,121,249,0.8)');g.addColorStop(1,'rgba(168,85,247,0.4)');
    ctx.fillStyle=g;ctx.fillRect(x,y,W/36-2,h);
  });
  if(playing){prog=Math.min(prog+.015,100);document.getElementById('prog').style.width=prog+'%';}
  t+=0.04;requestAnimationFrame(draw);
}
draw();
document.getElementById('play').addEventListener('click',()=>{
  playing=!playing;
  document.getElementById('play').textContent=playing?'⏸':'▶';
  document.getElementById('album').className='album'+(playing?' playing':'');
});
</script></body></html>`,
    code: `'use client'
import React, { useRef, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function MusicPlayerCard() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(30)
  const playingRef = useRef(false)
  const progressRef = useRef(30)

  useEffect(() => {
    playingRef.current = playing
  }, [playing])

  useEffect(() => {
    const cv = canvasRef.current; if (!cv) return
    const ctx = cv.getContext('2d')!
    const dpr = window.devicePixelRatio || 1
    const W = 256, H = 40
    cv.width = W * dpr; cv.height = H * dpr; ctx.scale(dpr, dpr)

    const bars = Array.from({ length: 36 }, () => ({ h: 5 + Math.random() * 20, v: Math.random() * Math.PI * 2 }))
    let t = 0, id: number

    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      bars.forEach((b, i) => {
        const h = playingRef.current ? 8 + Math.abs(Math.sin(t * 3 + b.v)) * 22 : b.h
        const x = i * (W / 36), y = (H - h) / 2
        const g = ctx.createLinearGradient(0, y, 0, y + h)
        g.addColorStop(0, 'rgba(232,121,249,0.8)'); g.addColorStop(1, 'rgba(168,85,247,0.4)')
        ctx.fillStyle = g; ctx.fillRect(x, y, W / 36 - 2, h)
      })
      if (playingRef.current) {
        progressRef.current = Math.min(progressRef.current + 0.015, 100)
        setProgress(progressRef.current)
      }
      t += 0.04; id = requestAnimationFrame(draw)
    }
    draw()
    return () => cancelAnimationFrame(id)
  }, [])

  const BEAMS = [
    { cls: 'top-0 left-0 h-[2px] w-[55%]', color: '#e879f9', anim: { left: ['-55%', '110%'] }, delay: 0 },
    { cls: 'bottom-0 right-0 h-[2px] w-[55%]', color: '#a855f7', anim: { right: ['-55%', '110%'] }, delay: 1.5 },
  ]

  return (
    <div className="flex items-center justify-center w-full h-full p-4">
      <div className="relative w-[300px] rounded-3xl overflow-hidden bg-[rgba(6,4,9,0.9)] border border-white/[0.07] backdrop-blur-xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.9)] group">
        <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
          {BEAMS.map((b, i) => (
            <motion.div key={i} className={\`absolute \${b.cls}\`}
              style={{ background: \`linear-gradient(90deg,transparent,\${b.color},transparent)\`, opacity: 0.6 }}
              animate={b.anim as any}
              transition={{ duration: 3, ease: 'easeInOut', repeat: Infinity, repeatDelay: 1, delay: b.delay }} />
          ))}
        </div>
        <div className="relative z-10 p-6">
          <motion.div className="w-[100px] h-[100px] rounded-full bg-gradient-to-br from-violet-700 via-fuchsia-500 to-violet-700 mx-auto mb-4 flex items-center justify-center text-4xl border-2 border-white/10 shadow-[0_0_40px_rgba(232,121,249,0.3)]"
            animate={{ rotate: playing ? 360 : 0 }}
            transition={{ duration: 8, repeat: playing ? Infinity : 0, ease: 'linear' }}>
            🎵
          </motion.div>
          <p className="text-white font-semibold text-base text-center">Neon Dreams</p>
          <p className="text-white/40 text-xs text-center mt-1 mb-4">Synthwave Collective</p>
          <canvas ref={canvasRef} className="w-full rounded-lg mb-3.5" style={{ height: 40 }} />
          <div className="h-[3px] bg-white/10 rounded-full mb-4 overflow-hidden cursor-pointer">
            <motion.div className="h-full bg-gradient-to-r from-purple-500 to-fuchsia-400 rounded-full"
              style={{ width: \`\${progress}%\` }} />
          </div>
          <div className="flex justify-center items-center gap-5">
            {[['⏮', 36], ['', 44], ['⏭', 36]].map(([icon, size], i) => {
              const isPlay = i === 1
              return (
                <motion.button key={i}
                  onClick={isPlay ? () => setPlaying(p => !p) : undefined}
                  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.92 }}
                  className="rounded-full flex items-center justify-center text-white transition-colors"
                  style={{
                    width: size as number, height: size as number,
                    background: isPlay ? 'linear-gradient(135deg,#a855f7,#e879f9)' : 'rgba(255,255,255,0.06)',
                    border: isPlay ? 'none' : '1px solid rgba(255,255,255,0.1)',
                    boxShadow: isPlay ? '0 0 20px rgba(168,85,247,0.4)' : 'none',
                    fontSize: isPlay ? 16 : 14,
                  }}>
                  <AnimatePresence mode="wait">
                    <motion.span key={isPlay ? String(playing) : String(i)}
                      initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.5, opacity: 0 }}
                      transition={{ duration: 0.15 }}>
                      {isPlay ? (playing ? '⏸' : '▶') : icon}
                    </motion.span>
                  </AnimatePresence>
                </motion.button>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}`,
    prompt: `Create a Music Player Card with canvas waveform visualizer:
• Canvas waveform: 36 bars animate with sine wave heights when playing=true, static when paused
• Album art rotates continuously via Framer Motion animate rotate:360 when playing, stops when paused
• Play/pause toggles with AnimatePresence icon swap (▶ ↔ ⏸)
• Progress bar width tied to ref that increments 0.015 per frame while playing
• Fuchsia/purple traveling beams on top+bottom, gradient CTA play button with glow shadow`,
    likes: 0,
    author: "Animation AI",
    featured: true,
    createdAt: "2026-05-22T13:00:00.000Z",
    updatedAt: "2026-05-22T13:00:00.000Z"
  },
  {
    slug: "code-snippet-card",
    title: "Code Snippet Card",
    category: "cards",
    tag: "css",
    description: "A premium dark code snippet display card with syntax-highlighted lines, a copy-to-clipboard button with animated checkmark feedback, line numbers, and a cyan sweeping border beam.",
    previewCode: `<!DOCTYPE html><html><head><style>
*{margin:0;padding:0;box-sizing:border-box}body{min-height:100vh;background:#08090e;display:flex;align-items:center;justify-content:center;font-family:system-ui,sans-serif}
.card{position:relative;width:340px;border-radius:20px;overflow:hidden;background:#0d1117;border:1px solid rgba(255,255,255,.07);box-shadow:0 20px 60px -15px rgba(0,0,0,.9)}
.beams{position:absolute;inset:0;overflow:hidden;border-radius:20px;pointer-events:none}
.beam{position:absolute;height:2px;width:55%}
.bt{top:0;left:-55%;background:linear-gradient(90deg,transparent,#22d3ee,transparent);animation:bH 3s ease-in-out infinite}
.bb{bottom:0;right:-55%;background:linear-gradient(90deg,transparent,#0ea5e9,transparent);animation:bH2 3s ease-in-out infinite 1.5s}
@keyframes bH{0%{left:-55%}100%{left:110%}}@keyframes bH2{0%{right:-55%}100%{right:110%}}
.header{display:flex;justify-content:space-between;align-items:center;padding:12px 16px;background:#161b22;border-bottom:1px solid rgba(255,255,255,.06)}
.dots{display:flex;gap:6px}.dot{width:10px;height:10px;border-radius:50%}
.lang{font-size:11px;font-family:monospace;color:rgba(255,255,255,.35);letter-spacing:.5px}
.copy{padding:4px 10px;border-radius:6px;background:rgba(34,211,238,.1);border:1px solid rgba(34,211,238,.2);font-size:11px;color:#22d3ee;cursor:pointer;transition:all .2s;font-family:monospace}
.copy:hover{background:rgba(34,211,238,.2)}
.copy.done{background:rgba(16,185,129,.1);border-color:rgba(16,185,129,.3);color:#10b981}
pre{padding:16px;overflow-x:auto;font-size:13px;line-height:1.7;font-family:'Fira Code',monospace}
.ln{color:rgba(255,255,255,.2);user-select:none;margin-right:16px;display:inline-block;width:16px;text-align:right}
.kw{color:#ff7b72}.fn{color:#d2a8ff}.str{color:#a5d6ff}.cm{color:#8b949e;font-style:italic}.num{color:#79c0ff}.op{color:#ff7b72}
.tag{font-size:10px;font-family:monospace;color:rgba(255,255,255,.25);padding:0 16px 10px;display:block}
</style></head><body>
<div class="card"><div class="beams"><div class="beam bt"></div><div class="beam bb"></div></div>
<div class="header">
  <div class="dots"><div class="dot" style="background:#ff5f57"></div><div class="dot" style="background:#febc2e"></div><div class="dot" style="background:#28c840"></div></div>
  <span class="lang">TYPESCRIPT</span>
  <button class="copy" id="copy" onclick="doCopy()">Copy</button>
</div>
<pre><span class="ln">1</span><span class="cm">// Particle physics engine</span>
<span class="ln">2</span><span class="kw">function</span> <span class="fn">createParticle</span>(<span class="fn">x</span>: <span class="str">number</span>) {
<span class="ln">3</span>  <span class="kw">return</span> {
<span class="ln">4</span>    pos: { x, y: <span class="num">0</span> },
<span class="ln">5</span>    vel: <span class="fn">randomVec</span>(<span class="num">2.5</span>),
<span class="ln">6</span>    life: <span class="num">1.0</span>,
<span class="ln">7</span>    <span class="fn">update</span>() {
<span class="ln">8</span>      <span class="kw">this</span>.pos.<span class="fn">x</span> += <span class="kw">this</span>.vel.x
<span class="ln">9</span>      <span class="kw">this</span>.life -= <span class="num">0.02</span>
<span class="ln">10</span>    }
<span class="ln">11</span>  }
<span class="ln">12</span>}</pre>
<span class="tag">// animation-ai · snippet #047</span>
</div>
<script>
function doCopy(){
  const btn=document.getElementById('copy');
  btn.textContent='✓ Copied';btn.className='copy done';
  setTimeout(()=>{btn.textContent='Copy';btn.className='copy';},2000);
}
</script></body></html>`,
    code: `'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LINES = [
  { n:1, tokens:[{ t:'cm', v:'// Particle physics engine' }] },
  { n:2, tokens:[{ t:'kw', v:'function' },{ t:'', v:' ' },{ t:'fn', v:'createParticle' },{ t:'', v:'(' },{ t:'fn', v:'x' },{ t:'', v:': ' },{ t:'str', v:'number' },{ t:'', v:') {' }] },
  { n:3, tokens:[{ t:'', v:'  ' },{ t:'kw', v:'return' },{ t:'', v:' {' }] },
  { n:4, tokens:[{ t:'', v:'    pos: { x, y: ' },{ t:'num', v:'0' },{ t:'', v:' },' }] },
  { n:5, tokens:[{ t:'', v:'    vel: ' },{ t:'fn', v:'randomVec' },{ t:'', v:'(' },{ t:'num', v:'2.5' },{ t:'', v:'),' }] },
  { n:6, tokens:[{ t:'', v:'    life: ' },{ t:'num', v:'1.0' },{ t:'', v:',' }] },
  { n:7, tokens:[{ t:'', v:'    ' },{ t:'fn', v:'update' },{ t:'', v:'() {' }] },
  { n:8, tokens:[{ t:'kw', v:'this' },{ t:'', v:'.pos.' },{ t:'fn', v:'x' },{ t:'', v:' += ' },{ t:'kw', v:'this' },{ t:'', v:'.vel.x' }] },
  { n:9, tokens:[{ t:'kw', v:'this' },{ t:'', v:'.life -= ' },{ t:'num', v:'0.02' }] },
  { n:10, tokens:[{ t:'', v:'    }' }] },
  { n:11, tokens:[{ t:'', v:'  }' }] },
  { n:12, tokens:[{ t:'', v:'}' }] },
]

const CLR: Record<string,string> = { kw:'#ff7b72', fn:'#d2a8ff', str:'#a5d6ff', cm:'#8b949e', num:'#79c0ff', '':'rgba(230,237,243,0.85)' }

export default function CodeSnippetCard() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard?.writeText('function createParticle(x: number) { ... }')
    setCopied(true); setTimeout(() => setCopied(false), 2000)
  }

  const BEAMS = [
    { cls:'top-0 left-0 h-[2px] w-[55%]', color:'#22d3ee', anim:{ left:['-55%','110%'] }, delay:0 },
    { cls:'bottom-0 right-0 h-[2px] w-[55%]', color:'#0ea5e9', anim:{ right:['-55%','110%'] }, delay:1.5 },
  ]

  return (
    <div className="flex items-center justify-center w-full h-full p-4">
      <div className="relative w-[340px] rounded-[20px] overflow-hidden bg-[#0d1117] border border-white/[0.07] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.9)]">
        <div className="absolute inset-0 overflow-hidden rounded-[20px] pointer-events-none">
          {BEAMS.map((b,i)=>(
            <motion.div key={i} className={\`absolute \${b.cls}\`}
              style={{background:\`linear-gradient(90deg,transparent,\${b.color},transparent)\`,opacity:0.65}}
              animate={b.anim as any}
              transition={{duration:3,ease:'easeInOut',repeat:Infinity,repeatDelay:1,delay:b.delay}}/>
          ))}
        </div>
        <div className="flex justify-between items-center px-4 py-3 bg-[#161b22] border-b border-white/[0.06]">
          <div className="flex gap-1.5">
            {['#ff5f57','#febc2e','#28c840'].map(c=><div key={c} className="w-2.5 h-2.5 rounded-full" style={{background:c}}/>)}
          </div>
          <span className="font-mono text-[11px] text-white/35 tracking-wider">TYPESCRIPT</span>
          <motion.button onClick={handleCopy} whileHover={{scale:1.05}} whileTap={{scale:0.95}}
            className="px-2.5 py-1 rounded-md font-mono text-[11px] transition-all duration-300 border"
            style={{ background: copied ? 'rgba(16,185,129,0.1)' : 'rgba(34,211,238,0.1)', borderColor: copied ? 'rgba(16,185,129,0.3)' : 'rgba(34,211,238,0.2)', color: copied ? '#10b981' : '#22d3ee' }}>
            <AnimatePresence mode="wait">
              <motion.span key={String(copied)} initial={{opacity:0,y:3}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-3}} transition={{duration:0.15}}>
                {copied ? '✓ Copied' : 'Copy'}
              </motion.span>
            </AnimatePresence>
          </motion.button>
        </div>
        <pre className="p-4 overflow-x-auto text-[13px] leading-[1.7] font-mono">
          {LINES.map((line,i)=>(
            <motion.div key={line.n} className="flex" initial={{opacity:0,x:-6}} animate={{opacity:1,x:0}} transition={{delay:0.03*i}}>
              <span className="text-white/20 w-5 text-right mr-4 select-none flex-shrink-0 text-xs leading-[1.7]">{line.n}</span>
              <span>{line.tokens.map((tk,j)=><span key={j} style={{color:CLR[tk.t]||CLR[''],fontStyle:tk.t==='cm'?'italic':'normal'}}>{tk.v}</span>)}</span>
            </motion.div>
          ))}
        </pre>
        <p className="font-mono text-[10px] text-white/25 px-4 pb-3">// animation-ai · snippet #047</p>
      </div>
    </div>
  )
}`,
    prompt: `Create a Code Snippet Card with syntax highlighting:
• Syntax token spans with themed colors per type (keyword/fn/string/comment/number)
• Line numbers column with dimmed color and select-none
• macOS window chrome (red/yellow/green dots) + language badge header
• Copy button toggles to "✓ Copied" with AnimatePresence text swap and color change
• Cyan traveling beams on top+bottom edges with 1.5s stagger`,
    likes: 0,
    author: "Animation AI",
    featured: true,
    createdAt: "2026-05-22T13:30:00.000Z",
    updatedAt: "2026-05-22T13:30:00.000Z"
  },
  {
    slug: "task-board-card",
    title: "Task Board Card",
    category: "cards",
    tag: "framer-motion",
    description: "An interactive Kanban-style task board card with draggable task pills, animated completion checkboxes, a live progress ring, and traveling amber border beams.",
    previewCode: `<!DOCTYPE html><html><head><style>
*{margin:0;padding:0;box-sizing:border-box}body{min-height:100vh;background:#090810;display:flex;align-items:center;justify-content:center;font-family:system-ui,sans-serif}
.card{position:relative;width:300px;border-radius:22px;overflow:hidden;background:rgba(9,8,16,.9);border:1px solid rgba(255,255,255,.07);backdrop-filter:blur(20px);box-shadow:0 20px 60px -15px rgba(0,0,0,.9)}
.beams{position:absolute;inset:0;overflow:hidden;border-radius:22px;pointer-events:none}
.beam{position:absolute;height:2px;width:55%}
.bt{top:0;left:-55%;background:linear-gradient(90deg,transparent,#f59e0b,transparent);animation:bH 3s ease-in-out infinite}
.bb{bottom:0;right:-55%;background:linear-gradient(90deg,transparent,#fbbf24,transparent);animation:bH2 3s ease-in-out infinite 1.5s}
@keyframes bH{0%{left:-55%}100%{left:110%}}@keyframes bH2{0%{right:-55%}100%{right:110%}}
.body{padding:20px;position:relative;z-index:2}
.hdr{display:flex;justify-content:space-between;align-items:center;margin-bottom:16px}
.htitle{font-size:15px;font-weight:600;color:#fff}
.ring-wrap{position:relative;width:40px;height:40px}
svg.ring{width:40px;height:40px;transform:rotate(-90deg)}
.ring-bg{fill:none;stroke:rgba(255,255,255,.07);stroke-width:3}
.ring-fill{fill:none;stroke:#f59e0b;stroke-width:3;stroke-linecap:round;stroke-dasharray:100;transition:stroke-dashoffset .6s ease}
.ring-txt{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;color:#f59e0b}
.col-label{font-size:9px;color:rgba(255,255,255,.3);text-transform:uppercase;letter-spacing:1px;margin-bottom:8px}
.task{display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:10px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.06);margin-bottom:6px;cursor:pointer;transition:background .2s}
.task:hover{background:rgba(255,255,255,.07)}
.cb{width:16px;height:16px;border-radius:50%;border:1.5px solid rgba(255,255,255,.25);flex-shrink:0;display:flex;align-items:center;justify-content:center;transition:all .2s;font-size:9px}
.cb.done{background:#f59e0b;border-color:#f59e0b;color:#000}
.task-text{font-size:12px;color:rgba(255,255,255,.8);transition:all .2s}
.task-text.done{color:rgba(255,255,255,.3);text-decoration:line-through}
.chip{margin-left:auto;font-size:9px;padding:2px 7px;border-radius:99px;flex-shrink:0}
.add{width:100%;margin-top:10px;padding:8px;border-radius:10px;background:rgba(245,158,11,.08);border:1px dashed rgba(245,158,11,.2);color:rgba(245,158,11,.6);font-size:12px;cursor:pointer;transition:all .2s;text-align:center}
.add:hover{background:rgba(245,158,11,.15);color:#f59e0b}
</style></head><body>
<div class="card"><div class="beams"><div class="beam bt"></div><div class="beam bb"></div></div>
<div class="body">
  <div class="hdr">
    <div><div class="htitle">Sprint #12</div><div style="font-size:10px;color:rgba(255,255,255,.3);margin-top:2px">4 tasks · Due Friday</div></div>
    <div class="ring-wrap">
      <svg class="ring" viewBox="0 0 36 36"><circle class="ring-bg" cx="18" cy="18" r="15.9"/><circle class="ring-fill" id="rf" cx="18" cy="18" r="15.9" stroke-dashoffset="75"/></svg>
      <div class="ring-txt" id="rp">25%</div>
    </div>
  </div>
  <div class="col-label">In Progress</div>
  <div id="tasks"></div>
  <div class="add" onclick="addTask()">+ Add task</div>
</div></div>
<script>
const TASKS=[
  {t:'Design system tokens',done:true,chip:'Design',cc:'rgba(168,85,247,.15)',tc:'#a855f7'},
  {t:'API rate limiting',done:false,chip:'Backend',cc:'rgba(6,182,212,.15)',tc:'#06b6d4'},
  {t:'Write unit tests',done:false,chip:'QA',cc:'rgba(16,185,129,.15)',tc:'#10b981'},
  {t:'Deploy to staging',done:false,chip:'DevOps',cc:'rgba(245,158,11,.15)',tc:'#f59e0b'},
];
function pct(){return Math.round(TASKS.filter(t=>t.done).length/TASKS.length*100)}
function updateRing(){const p=pct();const o=100-(p/100*100);document.getElementById('rf').style.strokeDashoffset=o;document.getElementById('rp').textContent=p+'%';}
function render(){
  const c=document.getElementById('tasks');c.innerHTML='';
  TASKS.forEach((tk,i)=>{
    const d=document.createElement('div');d.className='task';d.onclick=()=>{tk.done=!tk.done;render();updateRing();};
    d.innerHTML=\`<div class="cb \${tk.done?'done':''}\">\${tk.done?'✓':''}</div><span class="task-text \${tk.done?'done':''}">\${tk.t}</span><span class="chip" style="background:\${tk.cc};color:\${tk.tc}">\${tk.chip}</span>\`;
    c.appendChild(d);
  });
}
render();updateRing();
let extra=0;
function addTask(){if(extra>1)return;extra++;TASKS.push({t:'New task '+(extra),done:false,chip:'Todo',cc:'rgba(255,255,255,.07)',tc:'rgba(255,255,255,.5)'});render();updateRing();}
</script></body></html>`,
    code: `'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Task { id: number; text: string; done: boolean; chip: string; chipBg: string; chipColor: string }

const INIT: Task[] = [
  { id:1, text:'Design system tokens', done:true, chip:'Design', chipBg:'rgba(168,85,247,0.15)', chipColor:'#a855f7' },
  { id:2, text:'API rate limiting', done:false, chip:'Backend', chipBg:'rgba(6,182,212,0.15)', chipColor:'#06b6d4' },
  { id:3, text:'Write unit tests', done:false, chip:'QA', chipBg:'rgba(16,185,129,0.15)', chipColor:'#10b981' },
  { id:4, text:'Deploy to staging', done:false, chip:'DevOps', chipBg:'rgba(245,158,11,0.15)', chipColor:'#f59e0b' },
]

export default function TaskBoardCard() {
  const [tasks, setTasks] = useState<Task[]>(INIT)
  const toggle = (id: number) => setTasks(ts => ts.map(t => t.id === id ? { ...t, done: !t.done } : t))

  const done = tasks.filter(t => t.done).length
  const pct = Math.round(done / tasks.length * 100)
  const circumference = 2 * Math.PI * 15.9
  const offset = circumference - (pct / 100) * circumference

  const BEAMS = [
    { cls:'top-0 left-0 h-[2px] w-[55%]', color:'#f59e0b', anim:{ left:['-55%','110%'] }, delay:0 },
    { cls:'bottom-0 right-0 h-[2px] w-[55%]', color:'#fbbf24', anim:{ right:['-55%','110%'] }, delay:1.5 },
  ]

  return (
    <div className="flex items-center justify-center w-full h-full p-4">
      <div className="relative w-[300px] rounded-[22px] overflow-hidden bg-[rgba(9,8,16,0.9)] border border-white/[0.07] backdrop-blur-xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.9)]">
        <div className="absolute inset-0 overflow-hidden rounded-[22px] pointer-events-none">
          {BEAMS.map((b,i)=>(
            <motion.div key={i} className={\`absolute \${b.cls}\`}
              style={{background:\`linear-gradient(90deg,transparent,\${b.color},transparent)\`,opacity:0.65}}
              animate={b.anim as any}
              transition={{duration:3,ease:'easeInOut',repeat:Infinity,repeatDelay:1,delay:b.delay}}/>
          ))}
        </div>
        <div className="relative z-10 p-5">
          <div className="flex justify-between items-center mb-4">
            <div>
              <p className="text-white font-semibold text-[15px]">Sprint #12</p>
              <p className="text-white/30 text-[10px] mt-0.5">{tasks.length} tasks · Due Friday</p>
            </div>
            <div className="relative w-10 h-10">
              <svg className="w-10 h-10" style={{transform:'rotate(-90deg)'}} viewBox="0 0 36 36">
                <circle fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="3" cx="18" cy="18" r="15.9"/>
                <motion.circle fill="none" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" cx="18" cy="18" r="15.9"
                  style={{strokeDasharray:circumference}}
                  animate={{strokeDashoffset:offset}} transition={{duration:0.6,ease:'easeOut'}}/>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-amber-400">{pct}%</div>
            </div>
          </div>
          <p className="text-[9px] text-white/30 uppercase tracking-widest mb-2">In Progress</p>
          <div className="space-y-1.5">
            <AnimatePresence>
              {tasks.map(task=>(
                <motion.div key={task.id} layout
                  initial={{opacity:0,x:-8}} animate={{opacity:1,x:0}} exit={{opacity:0,x:8}}
                  onClick={()=>toggle(task.id)}
                  className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06] cursor-pointer hover:bg-white/[0.07] transition-colors">
                  <motion.div
                    className="w-4 h-4 rounded-full border-[1.5px] flex-shrink-0 flex items-center justify-center text-[9px]"
                    animate={{ background: task.done ? '#f59e0b' : 'transparent', borderColor: task.done ? '#f59e0b' : 'rgba(255,255,255,0.25)', color: task.done ? '#000' : 'transparent' }}
                    transition={{duration:0.2}}>
                    ✓
                  </motion.div>
                  <motion.span className="text-xs flex-1" animate={{color: task.done ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.8)', textDecoration: task.done ? 'line-through' : 'none'}} transition={{duration:0.2}}>
                    {task.text}
                  </motion.span>
                  <span className="text-[9px] px-1.5 py-0.5 rounded-full flex-shrink-0" style={{background:task.chipBg,color:task.chipColor}}>{task.chip}</span>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          <motion.button whileHover={{scale:1.01}} whileTap={{scale:0.98}}
            className="w-full mt-3 py-2 rounded-xl bg-amber-500/[0.08] border border-dashed border-amber-500/20 text-amber-500/60 hover:text-amber-400 hover:bg-amber-500/15 hover:border-amber-500/30 transition-all text-xs">
            + Add task
          </motion.button>
        </div>
      </div>
    </div>
  )
}`,
    prompt: `Create a Task Board Card with Framer Motion:
• Animated SVG progress ring: strokeDashoffset animates smoothly via Framer Motion on task toggle
• Task rows: click toggles done state; checkbox animates background+border with amber fill; text gets line-through
• AnimatePresence wraps task list with layout prop for smooth reorder animations
• Amber traveling beams on top+bottom edges with 1.5s stagger
• Add task button with dashed amber border hover transition`,
    likes: 0,
    author: "Animation AI",
    featured: true,
    createdAt: "2026-05-22T13:30:00.000Z",
    updatedAt: "2026-05-22T13:30:00.000Z"
  }
];





