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
    slug: 'aurora-background-flow',
    title: 'Aurora Background Flow',
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
    slug: 'particle-vortex-ring',
    title: 'Particle Vortex Ring',
    category: 'backgrounds',
    tag: 'threejs',
    description: 'Futuristic Three.js particle vortex ring with glowing orbits and smooth rotation.',
    featured: true,
    previewCode: `<!DOCTYPE html><html><head><style>
*{margin:0;padding:0;box-sizing:border-box}
body{background:#020205;overflow:hidden;margin:0}
canvas{display:block}
.label{position:absolute;bottom:20px;left:50%;transform:translateX(-50%);color:rgba(255,255,255,0.7);font-family:sans-serif;font-size:12px;font-weight:600;letter-spacing:4px;pointer-events:none}
</style></head><body>
<div class="label">PARTICLE VORTEX</div>
<script type="importmap">{ "imports": { "three": "https://unpkg.com/three@0.160.0/build/three.module.js" } }</script>
<script type="module">
import * as THREE from 'three';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
document.body.appendChild(renderer.domElement);
const count = 3000;
const geo = new THREE.BufferGeometry();
const pos = new Float32Array(count * 3);
const col = new Float32Array(count * 3);
const data = [];
const c1 = new THREE.Color('#7c5cfc');
const c2 = new THREE.Color('#22d3ee');
for(let i=0; i<count; i++) {
  const angle = Math.random() * Math.PI * 2;
  const radius = 2.5 + Math.random() * 0.8;
  const tilt = (Math.random() - 0.5) * 0.5;
  data.push({ angle, radius, speed: 0.005 + Math.random() * 0.01, tilt });
  const x = Math.cos(angle) * radius;
  const y = tilt;
  const z = Math.sin(angle) * radius;
  pos.set([x, y, z], i * 3);
  const mix = Math.random();
  const color = mix > 0.5 ? c1 : c2;
  col.set([color.r, color.g, color.b], i * 3);
}
geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
const mat = new THREE.PointsMaterial({ size: 0.03, vertexColors: true, transparent: true, opacity: 0.8, blending: THREE.AdditiveBlending });
const points = new THREE.Points(geo, mat);
scene.add(points);
camera.position.z = 6;
camera.position.y = 2;
camera.lookAt(0,0,0);
function animate() {
  requestAnimationFrame(animate);
  const p = points.geometry.attributes.position.array;
  for(let i=0; i<count; i++) {
    const d = data[i];
    d.angle += d.speed;
    p[i*3] = Math.cos(d.angle) * d.radius;
    p[i*3+2] = Math.sin(d.angle) * d.radius;
    p[i*3+1] = d.tilt + Math.sin(d.angle * 2) * 0.2;
  }
  points.geometry.attributes.position.needsUpdate = true;
  points.rotation.y += 0.002;
  renderer.render(scene, camera);
}
animate();
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
</script></body></html>`,
    code: `/* Particle Vortex Ring — Three.js */
const particleCount = 3000;
const geometry = new THREE.BufferGeometry();
const positions = new Float32Array(particleCount * 3);
const colors = new Float32Array(particleCount * 3);

for(let i = 0; i < particleCount; i++) {
  const angle = Math.random() * Math.PI * 2;
  const radius = 2.5 + Math.random() * 0.8;
  positions.set([Math.cos(angle)*radius, (Math.random()-0.5)*0.5, Math.sin(angle)*radius], i*3);
  const color = Math.random() > 0.5 ? '#7c5cfc' : '#22d3ee';
  const c = new THREE.Color(color);
  colors.set([c.r, c.g, c.b], i * 3);
}

geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
const material = new THREE.PointsMaterial({ size: 0.03, vertexColors: true, blending: THREE.AdditiveBlending, transparent: true });
const vortex = new THREE.Points(geometry, material);
scene.add(vortex);`,
    prompt: `Build a Three.js Particle Vortex Ring:
• 3000+ particles using BufferGeometry and Points
• Torus/Ring formation with internal orbital motion
• Colors: neon purple (#7c5cfc) and cyan (#22d3ee)
• Additive blending for glowing light effect
• Animated positions using trig functions (sin/cos)
• Perspective camera with slight tilt
• Performance optimized for 60fps
• Dark futuristic atmosphere`,
  },
  {
    slug: '3d-particle-vortex-ring',
    title: '3D Particle Vortex Ring',
    category: 'backgrounds',
    tag: 'threejs',
    description: 'Futuristic rotating 3D neon vortex ring made with glowing particles and floating geometric fragments.',
    featured: true,
    previewCode: `<!DOCTYPE html>
<html>
  <head>
    <style>
      *{margin:0;padding:0;box-sizing:border-box}
      body{
        width:100%;
        height:100vh;
        overflow:hidden;
        background:#050510;
      }
      canvas{
        display:block;
      }
    </style>
  </head>
  <body>
    <script type="module">
      import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js';
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 18;
      const renderer = new THREE.WebGLRenderer({ antialias:true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
      document.body.appendChild(renderer.domElement);
      const particleCount = 4000;
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);
      for(let i=0;i<particleCount;i++){
        const angle = Math.random() * Math.PI * 2;
        const radius = 5 + Math.sin(angle * 6) * 1.2;
        const spread = (Math.random() - 0.5) * 1.5;
        positions[i * 3] = Math.cos(angle) * radius + spread;
        positions[i * 3 + 1] = Math.sin(angle) * radius + spread;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 4;
      }
      geometry.setAttribute('position', new THREE.BufferAttribute(positions,3));
      const material = new THREE.PointsMaterial({
        color:'#7c5cfc',
        size:0.08,
        transparent:true,
        opacity:0.9,
        blending:THREE.AdditiveBlending,
        depthWrite:false
      });
      const particles = new THREE.Points(geometry, material);
      scene.add(particles);
      const fragmentGeometry = new THREE.IcosahedronGeometry(0.15,0);
      const fragmentMaterial = new THREE.MeshBasicMaterial({ color:'#22d3ee', wireframe:true });
      const fragments = [];
      for(let i=0;i<60;i++){
        const mesh = new THREE.Mesh(fragmentGeometry, fragmentMaterial);
        const angle = Math.random() * Math.PI * 2;
        const radius = 6 + Math.random() * 3;
        mesh.position.set(Math.cos(angle) * radius, Math.sin(angle) * radius, (Math.random() - 0.5) * 6);
        mesh.rotation.x = Math.random() * Math.PI;
        mesh.rotation.y = Math.random() * Math.PI;
        scene.add(mesh);
        fragments.push(mesh);
      }
      const ambient = new THREE.AmbientLight('#ffffff', 1.5);
      scene.add(ambient);
      function animate(){
        requestAnimationFrame(animate);
        particles.rotation.z += 0.002;
        particles.rotation.x += 0.001;
        fragments.forEach((mesh,index)=>{
          mesh.rotation.x += 0.01;
          mesh.rotation.y += 0.01;
          mesh.position.z = Math.sin(Date.now() * 0.001 + index) * 2;
        });
        renderer.render(scene,camera);
      }
      animate();
      window.addEventListener('resize',()=>{
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      });
    </script>
  </body>
</html>`,
    code: `/* 3D Particle Vortex Ring — Three.js */
body{
  margin:0;
  overflow:hidden;
  background:#050510;
}
canvas{
  display:block;
}`,
    prompt: `Create a futuristic 3D particle vortex ring using Three.js:
- Dark sci-fi background: #050510
- Circular neon vortex made from thousands of glowing particles
- Particle colors: purple: #7c5cfc, cyan: #22d3ee, green accents: #4ade80
- Rotating torus/vortex motion
- Floating geometric fragments orbiting around vortex
- Additive blending glow effect
- Smooth camera perspective
- Continuous slow rotation animation
- Responsive fullscreen canvas
- Use: THREE.Points, BufferGeometry, PointsMaterial, Icosahedron fragments
- Visual style: futuristic, cyberpunk, holographic, neon energy portal
- Zero UI elements
- Only animated 3D background`,
  },
  {
    slug: 'neon-flow-lines-background',
    title: 'Neon Flow Lines Background',
    category: 'backgrounds',
    tag: 'webgl',
    description: 'Dark futuristic animated background with glowing neon flow lines and smooth organic motion.',
    featured: true,
    previewCode: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Neon Flow Lines</title>
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{width:100%;height:100vh;overflow:hidden;background:#050818;font-family:sans-serif}
.wrap{position:relative;width:100%;height:100%}
.base{position:absolute;inset:0;background:radial-gradient(900px 500px at 20% 10%, rgba(124,92,252,0.18), transparent 60%),radial-gradient(700px 400px at 80% 20%, rgba(34,211,238,0.14), transparent 58%),radial-gradient(900px 700px at 50% 90%, rgba(99,102,241,0.10), transparent 60%),linear-gradient(180deg, #030513 0%, #050818 60%, #030513 100%)}
canvas{position:absolute;inset:0;width:100%;height:100%}
.label{position:absolute;bottom:20px;left:50%;transform:translateX(-50%);color:rgba(255,255,255,0.8);font-size:13px;font-weight:600;letter-spacing:3px}
</style>
</head>
<body>
<div class="wrap">
  <div class="base"></div>
  <canvas id="c"></canvas>
  <div class="label">NEON FLOW LINES</div>
</div>
<script>
(() => {
  const canvas = document.getElementById('c');
  const ctx = canvas.getContext('2d');
  let w = 0; let h = 0; let dpr = 1;
  const colors = ['rgba(124,92,252,0.95)','rgba(34,211,238,0.95)','rgba(255,255,255,0.85)','rgba(99,102,241,0.90)'];
  function resize(){
    dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
    w = canvas.clientWidth; h = canvas.clientHeight;
    canvas.width = Math.floor(w * dpr); canvas.height = Math.floor(h * dpr);
    ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.lineCap = 'round'; ctx.lineJoin = 'round';
  }
  window.addEventListener('resize', resize);
  resize();
  const lines = Array.from({ length: 26 }, (_, i) => ({
    x: Math.random() * w,
    y: Math.random() * h,
    len: 80 + Math.random() * 140,
    speed: 0.2 + Math.random() * 0.55,
    t: Math.random() * 10,
    amp: 10 + Math.random() * 30,
    freq: 0.004 + Math.random() * 0.007,
    rot: Math.random() * Math.PI * 2,
    color: colors[i % colors.length],
    width: 0.6 + Math.random() * 1.2
  }));
  function drift(n, t){ return (Math.sin(t * n) * 0.5 + Math.cos(t * 0.37 * n) * 0.5); }
  function animate(){
    ctx.clearRect(0,0,w,h);
    ctx.globalCompositeOperation = 'lighter';
    for(const L of lines){
      L.t += 0.9 * L.speed;
      L.x += drift(0.9, L.t) * 0.4;
      L.y += drift(1.3, L.t) * 0.35;
      if(L.x < -100) L.x = w + 100;
      if(L.x > w + 100) L.x = -100;
      if(L.y < -100) L.y = h + 100;
      if(L.y > h + 100) L.y = -100;
      const angle = L.rot + drift(0.7, L.t) * 0.7;
      const dx = Math.cos(angle); const dy = Math.sin(angle);
      const x0 = L.x; const y0 = L.y;
      const steps = 10;
      ctx.beginPath();
      for(let s = 0; s <= steps; s++){
        const p = s / steps;
        const along = L.len * p;
        const px = x0 + dx * along + Math.sin((L.t + p * 10) * (L.freq * 1000)) * L.amp * (1 - p) + Math.cos((L.t + p * 7) * (L.freq * 1000)) * (L.amp * 0.35);
        const py = y0 + dy * along + Math.cos((L.t + p * 11) * (L.freq * 1000)) * L.amp * (1 - p) + Math.sin((L.t + p * 5) * (L.freq * 1000)) * (L.amp * 0.25);
        if(s === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.strokeStyle = L.color;
      ctx.lineWidth = L.width + 1.8;
      ctx.shadowBlur = 18; ctx.shadowColor = L.color;
      ctx.stroke();
      ctx.shadowBlur = 0;
      ctx.lineWidth = Math.max(0.6, L.width);
      ctx.strokeStyle = L.color;
      ctx.stroke();
    }
    ctx.globalCompositeOperation = 'source-over';
    requestAnimationFrame(animate);
  }
  animate();
})();
</script>
</body>
</html>`,
    code: `/* Neon Flow Lines Background */
.neon-flow-container{position:absolute;inset:0;overflow:hidden;background:#050818}
.neon-flow-base{position:absolute;inset:0;background:radial-gradient(900px 500px at 20% 10%, rgba(124,92,252,0.18), transparent 60%),radial-gradient(700px 400px at 80% 20%, rgba(34,211,238,0.14), transparent 58%),radial-gradient(900px 700px at 50% 90%, rgba(99,102,241,0.10), transparent 60%),linear-gradient(180deg, #030513 0%, #050818 60%, #030513 100%)}
#neon-flow-canvas{position:absolute;inset:0;width:100%;height:100%}`,
    prompt: `Create a fullscreen futuristic neon flow background using WebGL or Canvas:
• Deep navy and black layered gradient backdrop
• Thin glowing neon lines with flowing scribble motion
• Colors: purple #7c5cfc, cyan #22d3ee, white, indigo
• Organic curve movement with smooth animation
• Soft glow using shadow blur and additive blending
• Abstract cyberpunk atmosphere
• Fullscreen responsive canvas overlay
• Performance friendly (~20–30 animated lines)
• Smooth cinematic motion with fluid line distortion`,
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
  {
    slug: 'torus-system',
    title: 'Torus System',
    category: 'loaders',
    tag: 'threejs',
    description: 'Glowing toroidal surface with animated meridians + parallels, floating rings, sparkles, and a HUD overlay showing simulation status.',
    featured: true,
    previewCode: `<!DOCTYPE html><html><head><meta charset="utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1" /><title>Torus System</title><style>
  *{margin:0;padding:0;box-sizing:border-box}
  body{width:100%;height:100vh;overflow:hidden;background:#020408;font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial}
  .wrap{position:relative;width:100%;height:100%}
  canvas{display:block;width:100%;height:100%}
  .hud{position:absolute;inset:0;pointer-events:none;display:flex;flex-direction:column;justify-content:space-between;padding:32px}
  .row{display:flex;justify-content:space-between;align-items:flex-start}
  .row2{display:flex;justify-content:space-between;align-items:flex-end}
  .title{color:rgba(255,255,255,.9);font-size:24px;font-weight:200;letter-spacing:2px;text-transform:uppercase}
  .divider{height:2px;width:48px;background:rgba(251,191,36,.35)}
  .status{color:rgba(255,255,255,.4);font-size:12px;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;letter-spacing:1px;text-transform:uppercase}
  .card{max-width:320px}
  .desc{color:rgba(255,255,255,.6);font-size:14px;font-weight:300;line-height:1.5}
  .pulse{width:32px;height:32px;border-radius:999px;border:1px solid rgba(255,255,255,.08);display:flex;align-items:center;justify-content:center}
  .dot{width:6px;height:6px;border-radius:999px;background:rgb(251 191 36);animation:pulse 1s ease-in-out infinite}
  .bar{flex:1;height:1px;background:rgba(255,255,255,.1);align-self:center}
  .diamond{width:48px;height:48px;border:1px solid rgba(255,255,255,.1);display:flex;align-items:center;justify-content:center;transform:rotate(45deg)}
  .diamond i{width:24px;height:24px;border:1px solid rgba(251,191,36,.3);display:block;transform:rotate(-45deg)}
  @keyframes pulse{0%,100%{transform:scale(1);opacity:.8}50%{transform:scale(1.4);opacity:1}}
</style></head><body>
  <div class="wrap">
    <canvas></canvas>
    <div class="hud">
      <div class="row">
        <div>
          <div class="title">Torus System</div>
          <div class="divider"></div>
        </div>
        <div class="status">Simulation.v4 // Active</div>
      </div>
      <div class="row2">
        <div class="card">
          <div class="desc">Parametric visualization of a toroidal surface with glowing meridians and parallel fields.</div>
          <div style="display:flex;gap:16px;margin-top:16px;align-items:center">
            <div class="pulse"><div class="dot"></div></div>
            <div class="bar"></div>
          </div>
        </div>
        <div class="diamond"><i></i></div>
      </div>
    </div>
    <script type="module">
      import * as THREE from 'https://unpkg.com/three@0.160.0/build/three.module.js';
      const canvas = document.querySelector('canvas');
      const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      const scene = new THREE.Scene();
      scene.fog = new THREE.FogExp2(0x020408, 0.05);
      const camera = new THREE.PerspectiveCamera(50, window.innerWidth/window.innerHeight, 0.1, 1000);
      camera.position.set(0, 2, 10);
      const group = new THREE.Group();
      scene.add(group);
      const torusGeo = new THREE.TorusGeometry(3, 1, 32, 100);
      const meridianMat = new THREE.LineBasicMaterial({ color: 0xfbbf24, transparent: true, opacity: 0.5 });
      const parallelMat = new THREE.LineBasicMaterial({ color: 0x22d3ee, transparent: true, opacity: 0.3 });
      const torus = new THREE.Mesh(torusGeo, new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.1 }));
      group.add(torus);
      const wireframe = new THREE.WireframeGeometry(torusGeo);
      const lines = new THREE.LineSegments(wireframe);
      lines.material = parallelMat;
      group.add(lines);
      const starCount = 400;
      const starGeo = new THREE.BufferGeometry();
      const starPos = new Float32Array(starCount * 3);
      for(let i=0; i<starCount*3; i++) starPos[i] = (Math.random()-0.5)*50;
      starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
      const starMat = new THREE.PointsMaterial({ size: 0.05, color: 0xffffff, transparent: true, opacity: 0.8 });
      const stars = new THREE.Points(starGeo, starMat);
      scene.add(stars);
      function animate() {
        requestAnimationFrame(animate);
        group.rotation.y += 0.005;
        group.rotation.x += 0.002;
        stars.rotation.y -= 0.0005;
        renderer.render(scene, camera);
      }
      animate();
      window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      });
    </script>
  </div>
</body></html>`,
    code: `// Torus System (React + Three) — conceptual summary for catalog
// - Canvas background + fog (#020408)
// - PerspectiveCamera + OrbitControls (autoRotate)
// - Stars + Float
// - TorusGeometric: meridian + parallel lines using parametric points
// - Center glow sphere + point lights
// - Postprocessing: Bloom + Noise + Vignette
// - HUD overlay: absolute inset-0, pointer-events-none, text + status + decorative elements`,
    prompt: `Create “Torus System” UI overlay + 3D torus visualization:
• Background: #020408 with fog and vignette
• Torus geometry: parametric toroidal surface lines
  - Meridians (vertical rings) in warm amber (#ffcc66)
  - Parallels (horizontal rings) in cyan (#66ccff)
• Add subtle inner glow mesh on torus core
• Add floating outer rings (thin torus geometries) with varying opacity
• Add Stars + Sparkles and Bloom/Noise postprocessing
• Animated motion: continuous rotation of torus and ring group
• HUD overlay (pointer-events-none):
  - Top-left title: “Torus System” + amber divider
  - Top-right status: “Simulation.v4 // Active”
  - Bottom-left description + pulse indicator
  - Bottom-right diamond/border accent
• Must be responsive (full screen) and visually readable on dark background`,
  },
  {
    slug: 'glass-shade',
    title: 'Glassmorphism Shade',
    category: 'shaders',
    tag: 'css',
    description: 'Soft frosted glass effect with colorful background bleed.',
    featured: true,
    previewCode: `<!DOCTYPE html><html><head><style>
  body{background:linear-gradient(45deg, #0f172a, #1e1b4b);height:100vh;display:flex;align-items:center;justify-content:center;margin:0}
  .blob{position:absolute;width:300px;height:300px;background:#7c5cfc;border-radius:50%;filter:blur(80px);animation:move 10s infinite alternate}
  @keyframes move{from{transform:translate(-50px, -50px)}to{transform:translate(50px, 50px)}}
  .glass{position:relative;width:400px;height:250px;background:rgba(255,255,255,0.05);backdrop-filter:blur(20px);border:1px solid rgba(255,255,255,0.1);border-radius:24px;display:flex;align-items:center;justify-content:center;color:white;font-family:sans-serif;font-size:24px;font-weight:700}
</style></head><body>
  <div class="blob"></div>
  <div class="glass">Frosted Glass</div>
</body></html>`,
    code: `.glass { backdrop-filter: blur(20px); background: rgba(255,255,255,0.05); }`,
    prompt: `Create a glassmorphism shade with a moving background blob.`,
  },
  {
    "slug": "particle-sphere-3d",
    "title": "3D Particle Sphere with Orbiting Rings",
    "category": "backgrounds",
    "tag": "threejs",
    "description": "A 3D particle sphere with colorful gradient and orbiting particle rings using Three.js shaders.",
    "featured": true,
    "previewCode": "<!DOCTYPE html><html><head><style>*{margin:0;padding:0;box-sizing:border-box}body{width:100%;height:100vh;overflow:hidden;background:#000}</style><script type=\"importmap\">{\"imports\":{\"three\":\"https://unpkg.com/three@0.160.0/build/three.module.js\"}}</script></head><body><div id=\"container\"></div><script type=\"module\">import * as THREE from 'three';const container=document.getElementById('container');const scene=new THREE.Scene();scene.background=new THREE.Color(0x000000);const camera=new THREE.PerspectiveCamera(60,window.innerWidth/window.innerHeight,0.1,2000);camera.position.z=500;const renderer=new THREE.WebGLRenderer({antialias:true});renderer.setSize(window.innerWidth,window.innerHeight);renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));container.appendChild(renderer.domElement);const SPHERE_COUNT=12000;const RADIUS=160;const spherePositions=new Float32Array(SPHERE_COUNT*3);const sphereColors=new Float32Array(SPHERE_COUNT*3);const sphereSizes=new Float32Array(SPHERE_COUNT);const goldenAngle=Math.PI*(3-Math.sqrt(5));for(let i=0;i<SPHERE_COUNT;i++){const y=1-(i/(SPHERE_COUNT-1))*2;const theta=goldenAngle*i;const phi=Math.acos(y);spherePositions[i*3]=RADIUS*Math.sin(phi)*Math.cos(theta);spherePositions[i*3+1]=RADIUS*Math.cos(phi);spherePositions[i*3+2]=RADIUS*Math.sin(phi)*Math.sin(theta);const t=phi/Math.PI;const hue=0.5+t*0.22;const color=new THREE.Color().setHSL(hue,0.9,0.55);sphereColors[i*3]=color.r;sphereColors[i*3+1]=color.g;sphereColors[i*3+2]=color.b;sphereSizes[i]=1.5+Math.random()*1.5}const sphereGeometry=new THREE.BufferGeometry();sphereGeometry.setAttribute('position',new THREE.BufferAttribute(spherePositions,3));sphereGeometry.setAttribute('color',new THREE.BufferAttribute(sphereColors,3));sphereGeometry.setAttribute('size',new THREE.BufferAttribute(sphereSizes,1));const sphereMaterial=new THREE.ShaderMaterial({uniforms:{uTime:{value:0}},vertexShader:'attribute float size;attribute vec3 color;varying vec3 vColor;varying float vAlpha;uniform float uTime;void main(){vColor=color;vec4 mvPosition=modelViewMatrix*vec4(position,1.0);float depthAlpha=smoothstep(-200.0,200.0,mvPosition.z);vAlpha=0.3+depthAlpha*0.7;gl_PointSize=size*(400.0/-mvPosition.z);gl_Position=projectionMatrix*mvPosition;}',fragmentShader:'varying vec3 vColor;varying float vAlpha;void main(){float dist=length(gl_PointCoord-vec2(0.5));if(dist>0.5)discard;float alpha=smoothstep(0.5,0.0,dist)*vAlpha;gl_FragColor=vec4(vColor,alpha);}',transparent:true,depthWrite:false,blending:THREE.AdditiveBlending});const sphereMesh=new THREE.Points(sphereGeometry,sphereMaterial);scene.add(sphereMesh);const ringParticlesPerRing=[2500,3000,3500];const ringMeshes=[];for(let r=0;r<3;r++){const count=ringParticlesPerRing[r];const ringRadius=RADIUS*(1.4+r*0.35);const positions=new Float32Array(count*3);const colors=new Float32Array(count*3);const sizes=new Float32Array(count);for(let i=0;i<count;i++){const angle=(i/count)*Math.PI*2;positions[i*3]=ringRadius*Math.cos(angle);positions[i*3+1]=ringRadius*Math.sin(angle);positions[i*3+2]=0;const hue=(0.33+r*0.08+(i/count)*0.1)%1.0;const color=new THREE.Color().setHSL(hue,0.8,0.55);colors[i*3]=color.r;colors[i*3+1]=color.g;colors[i*3+2]=color.b;sizes[i]=1.2+Math.random()*1.2}const ringGeometry=new THREE.BufferGeometry();ringGeometry.setAttribute('position',new THREE.BufferAttribute(positions,3));ringGeometry.setAttribute('color',new THREE.BufferAttribute(colors,3));ringGeometry.setAttribute('size',new THREE.BufferAttribute(sizes,1));const ringMaterial=new THREE.ShaderMaterial({uniforms:{uTime:{value:0}},vertexShader:'attribute float size;attribute vec3 color;varying vec3 vColor;varying float vAlpha;uniform float uTime;void main(){vColor=color;vec4 mvPosition=modelViewMatrix*vec4(position,1.0);float depthAlpha=smoothstep(-300.0,300.0,mvPosition.z);vAlpha=0.4+depthAlpha*0.6;gl_PointSize=size*(400.0/-mvPosition.z);gl_Position=projectionMatrix*mvPosition;}',fragmentShader:'varying vec3 vColor;varying float vAlpha;void main(){float dist=length(gl_PointCoord-vec2(0.5));if(dist>0.5)discard;float alpha=smoothstep(0.5,0.0,dist)*vAlpha;gl_FragColor=vec4(vColor,alpha);}',transparent:true,depthWrite:false,blending:THREE.AdditiveBlending});const ringMesh=new THREE.Points(ringGeometry,ringMaterial);ringMesh.rotation.x=Math.sin(r*1.2)*0.6;ringMesh.rotation.z=Math.cos(r*0.8)*0.3;scene.add(ringMesh);ringMeshes.push(ringMesh)}const glowGeometry=new THREE.SphereGeometry(RADIUS*0.9,32,32);const glowMaterial=new THREE.ShaderMaterial({uniforms:{uColor1:{value:new THREE.Color(0xff66cc)},uColor2:{value:new THREE.Color(0x66ccff)}},vertexShader:'varying vec3 vNormal;varying vec3 vPosition;void main(){vNormal=normalize(normalMatrix*normal);vPosition=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}',fragmentShader:'uniform vec3 uColor1;uniform vec3 uColor2;varying vec3 vNormal;varying vec3 vPosition;void main(){float intensity=pow(0.6-dot(vNormal,vec3(0,0,1.0)),2.0);float t=(vPosition.y+160.0)/320.0;vec3 color=mix(uColor2,uColor1,t);gl_FragColor=vec4(color,intensity*0.15);}',transparent:true,depthWrite:false,blending:THREE.AdditiveBlending,side:THREE.BackSide});const glowMesh=new THREE.Mesh(glowGeometry,glowMaterial);scene.add(glowMesh);let time=0;const animate=()=>{time+=0.01;sphereMesh.rotation.y=time*0.3;sphereMesh.rotation.x=Math.sin(time*0.15)*0.3;sphereMesh.rotation.z=Math.sin(time*0.1)*0.15;ringMeshes.forEach((ring,i)=>{ring.rotation.y=time*(0.2+i*0.05);ring.rotation.x=Math.sin(time*0.3+i)*0.5});sphereMaterial.uniforms.uTime.value=time;ringMeshes.forEach(ring=>{ring.material.uniforms.uTime.value=time});renderer.render(scene,camera);requestAnimationFrame(animate)};animate();window.addEventListener('resize',()=>{camera.aspect=window.innerWidth/window.innerHeight;camera.updateProjectionMatrix();renderer.setSize(window.innerWidth,window.innerHeight)});</script></body></html>",
    "code": "import React, { useEffect, useRef } from 'react';\nimport * as THREE from 'three';\n\nexport default function ParticleSphereThree() {\n  const containerRef = useRef<HTMLDivElement>(null);\n\n  useEffect(() => {\n    const container = containerRef.current;\n    if (!container) return;\n\n    const scene = new THREE.Scene();\n    scene.background = new THREE.Color(0x000000);\n\n    const camera = new THREE.PerspectiveCamera(\n      60, window.innerWidth / window.innerHeight, 0.1, 2000\n    );\n    camera.position.z = 500;\n\n    const renderer = new THREE.WebGLRenderer({ antialias: true });\n    renderer.setSize(window.innerWidth, window.innerHeight);\n    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));\n    container.appendChild(renderer.domElement);\n\n    // --- Sphere Particles ---\n    const SPHERE_COUNT = 12000;\n    const RADIUS = 160;\n    const spherePositions = new Float32Array(SPHERE_COUNT * 3);\n    const sphereColors = new Float32Array(SPHERE_COUNT * 3);\n    const sphereSizes = new Float32Array(SPHERE_COUNT);\n\n    const goldenAngle = Math.PI * (3 - Math.sqrt(5));\n    for (let i = 0; i < SPHERE_COUNT; i++) {\n      const y = 1 - (i / (SPHERE_COUNT - 1)) * 2;\n      const theta = goldenAngle * i;\n      const phi = Math.acos(y);\n\n      spherePositions[i * 3] = RADIUS * Math.sin(phi) * Math.cos(theta);\n      spherePositions[i * 3 + 1] = RADIUS * Math.cos(phi);\n      spherePositions[i * 3 + 2] = RADIUS * Math.sin(phi) * Math.sin(theta);\n\n      const t = phi / Math.PI;\n      const hue = 0.5 + t * 0.22;\n      const color = new THREE.Color().setHSL(hue, 0.9, 0.55);\n      sphereColors[i * 3] = color.r;\n      sphereColors[i * 3 + 1] = color.g;\n      sphereColors[i * 3 + 2] = color.b;\n      sphereSizes[i] = 1.5 + Math.random() * 1.5;\n    }\n\n    const sphereGeometry = new THREE.BufferGeometry();\n    sphereGeometry.setAttribute('position', new THREE.BufferAttribute(spherePositions, 3));\n    sphereGeometry.setAttribute('color', new THREE.BufferAttribute(sphereColors, 3));\n    sphereGeometry.setAttribute('size', new THREE.BufferAttribute(sphereSizes, 1));\n\n    const sphereMaterial = new THREE.ShaderMaterial({\n      uniforms: { uTime: { value: 0 } },\n      vertexShader: `\n        attribute float size;\n        attribute vec3 color;\n        varying vec3 vColor;\n        varying float vAlpha;\n        uniform float uTime;\n        void main() {\n          vColor = color;\n          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);\n          float depthAlpha = smoothstep(-200.0, 200.0, mvPosition.z);\n          vAlpha = 0.3 + depthAlpha * 0.7;\n          gl_PointSize = size * (400.0 / -mvPosition.z);\n          gl_Position = projectionMatrix * mvPosition;\n        }\n      `,\n      fragmentShader: `\n        varying vec3 vColor;\n        varying float vAlpha;\n        void main() {\n          float dist = length(gl_PointCoord - vec2(0.5));\n          if (dist > 0.5) discard;\n          float alpha = smoothstep(0.5, 0.0, dist) * vAlpha;\n          gl_FragColor = vec4(vColor, alpha);\n        }\n      `,\n      transparent: true,\n      depthWrite: false,\n      blending: THREE.AdditiveBlending,\n    });\n\n    const sphereMesh = new THREE.Points(sphereGeometry, sphereMaterial);\n    scene.add(sphereMesh);\n\n    // --- Ring Particles ---\n    const ringParticlesPerRing = [2500, 3000, 3500];\n    const ringMeshes: THREE.Points[] = [];\n\n    for (let r = 0; r < 3; r++) {\n      const count = ringParticlesPerRing[r];\n      const ringRadius = RADIUS * (1.4 + r * 0.35);\n      const positions = new Float32Array(count * 3);\n      const colors = new Float32Array(count * 3);\n      const sizes = new Float32Array(count);\n\n      for (let i = 0; i < count; i++) {\n        const angle = (i / count) * Math.PI * 2;\n        positions[i * 3] = ringRadius * Math.cos(angle);\n        positions[i * 3 + 1] = ringRadius * Math.sin(angle);\n        positions[i * 3 + 2] = 0;\n\n        const hue = (0.33 + r * 0.08 + (i / count) * 0.1) % 1.0;\n        const color = new THREE.Color().setHSL(hue, 0.8, 0.55);\n        colors[i * 3] = color.r;\n        colors[i * 3 + 1] = color.g;\n        colors[i * 3 + 2] = color.b;\n        sizes[i] = 1.2 + Math.random() * 1.2;\n      }\n\n      const ringGeometry = new THREE.BufferGeometry();\n      ringGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));\n      ringGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));\n      ringGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));\n\n      const ringMaterial = new THREE.ShaderMaterial({\n        uniforms: { uTime: { value: 0 } },\n        vertexShader: `...`,\n        fragmentShader: `...`,\n        transparent: true,\n        depthWrite: false,\n        blending: THREE.AdditiveBlending,\n      });\n\n      const ringMesh = new THREE.Points(ringGeometry, ringMaterial);\n      ringMesh.rotation.x = Math.sin(r * 1.2) * 0.6;\n      ringMesh.rotation.z = Math.cos(r * 0.8) * 0.3;\n      scene.add(ringMesh);\n      ringMeshes.push(ringMesh);\n    }\n\n    // --- Glow Sphere ---\n    const glowGeometry = new THREE.SphereGeometry(RADIUS * 0.9, 32, 32);\n    const glowMaterial = new THREE.ShaderMaterial({\n      uniforms: {\n        uColor1: { value: new THREE.Color(0xff66cc) },\n        uColor2: { value: new THREE.Color(0x66ccff) },\n      },\n      vertexShader: `...`,\n      fragmentShader: `...`,\n      transparent: true,\n      depthWrite: false,\n      blending: THREE.AdditiveBlending,\n      side: THREE.BackSide,\n    });\n    scene.add(new THREE.Mesh(glowGeometry, glowMaterial));\n\n    // --- Animation ---\n    let time = 0;\n    const animate = () => {\n      time += 0.01;\n      sphereMesh.rotation.y = time * 0.3;\n      sphereMesh.rotation.x = Math.sin(time * 0.15) * 0.3;\n      sphereMesh.rotation.z = Math.sin(time * 0.1) * 0.15;\n      ringMeshes.forEach((ring, i) => {\n        ring.rotation.y = time * (0.2 + i * 0.05);\n        ring.rotation.x = Math.sin(time * 0.3 + i) * 0.5;\n      });\n      sphereMaterial.uniforms.uTime.value = time;\n      renderer.render(scene, camera);\n      requestAnimationFrame(animate);\n    };\n    animate();\n\n    window.addEventListener('resize', () => {\n      camera.aspect = window.innerWidth / window.innerHeight;\n      camera.updateProjectionMatrix();\n      renderer.setSize(window.innerWidth, window.innerHeight);\n    });\n\n    return () => {\n      renderer.dispose();\n      container.removeChild(renderer.domElement);\n    };\n  }, []);\n\n  return <div ref={containerRef} className=\"w-full h-screen bg-black\" />;\n}",
    "prompt": "Create a 3D particle sphere visualization with Three.js:\n• Black background (#000000)\n• Central sphere with 12,000 particles arranged in Fibonacci sphere pattern\n• Color gradient from cyan/blue (bottom) to magenta/pink (top)\n• 3 orbiting particle rings with green/yellow/orange colors\n• Custom ShaderMaterial with depth-based alpha and additive blending\n• Soft inner glow sphere with gradient shader\n• Multi-axis rotation (X, Y, Z) for realistic 3D tumbling\n• Responsive to window resize\n• Smooth 60fps animation"
  },
  {
    slug: 'neon-vortex-trails',
    title: 'Neon Vortex Light Trails',
    category: 'backgrounds',
    tag: 'threejs',
    description: 'A 3D cinematic vortex of glowing green light trails with particle motion and depth of field.',
    featured: true,
    previewCode: `<!DOCTYPE html>
<html>
<head>
    <style>
        body { margin: 0; background: #000; overflow: hidden; }
        canvas { display: block; }
    </style>
</head>
<body>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
    <script>
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        const mainCurve = new THREE.CatmullRomCurve3([
            new THREE.Vector3(-10, 0, 10),
            new THREE.Vector3(0, 5, 0),
            new THREE.Vector3(10, 0, -10),
            new THREE.Vector3(0, -5, -5),
            new THREE.Vector3(-10, 0, 10)
        ]);
        mainCurve.closed = true;

        const group = new THREE.Group();
        const numLines = 150;
        
        for (let i = 0; i < numLines; i++) {
            const radius = 0.5 + Math.random() * 2;
            const angleOffset = Math.random() * Math.PI * 2;
            const points = mainCurve.getPoints(100).map(p => {
                return new THREE.Vector3(
                    p.x + Math.cos(angleOffset) * radius,
                    p.y + Math.sin(angleOffset) * radius,
                    p.z + (Math.random() - 0.5) * 0.5
                );
            });
            
            const geometry = new THREE.BufferGeometry().setFromPoints(points);
            const material = new THREE.LineBasicMaterial({ 
                color: 0x4ade80, 
                transparent: true, 
                opacity: Math.random() * 0.5 + 0.2 
            });
            const line = new THREE.Line(geometry, material);
            group.add(line);
        }

        scene.add(group);
        camera.position.z = 15;

        function animate() {
            requestAnimationFrame(animate);
            group.rotation.y += 0.002;
            group.rotation.z += 0.001;
            renderer.render(scene, camera);
        }
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });
        animate();
    </script>
</body>
</html>`,
    code: `// Three.js Neon Vortex Implementation
const setupVortex = () => {
  const points = [];
  const count = 200;
  const radius = 5;
  
  // Create circular path with noise
  for (let i = 0; i < count; i++) {
    const angle = (i / count) * Math.PI * 2;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle * 2) * 2; // Figure-8 tilt
    const z = Math.sin(angle) * radius;
    points.push(new THREE.Vector3(x, y, z));
  }
  
  const curve = new THREE.CatmullRomCurve3(points);
  const group = new THREE.Group();
  
  // Generate multiple strands
  for (let j = 0; j < 100; j++) {
    const offset = new THREE.Vector3(
      (Math.random() - 0.5) * 2,
      (Math.random() - 0.5) * 2,
      (Math.random() - 0.5) * 2
    );
    
    const strandPoints = curve.getPoints(100).map(p => p.clone().add(offset));
    const geo = new THREE.BufferGeometry().setFromPoints(strandPoints);
    const mat = new THREE.LineBasicMaterial({
      color: new THREE.Color(0.2, 1.0, 0.4),
      transparent: true,
      opacity: Math.random()
    });
    
    group.add(new THREE.Line(geo, mat));
  }
  return group;
};`,
    prompt: `Create a 3D Three.js visualization of neon green light trails: 
  • High-density glowing fiber optic strands (100+ lines)
  • Flowing in a vortex/toroidal spiral shape
  • Colors: Vibrant green (#4ade80) and lime (#a8ff78)
  • Use additive blending for glow effect
  • Add a rotating camera with slight tilt
  • Implementation should use BufferGeometry and LineBasicMaterial for performance
  • Dark background #000000 with subtle bloom/post-processing feel`
  },
  {
    slug: 'purple-galaxy-nebula',
    title: 'Purple Galaxy Nebula',
    category: 'backgrounds',
    tag: 'threejs',
    description: '3D animated spiral galaxy with 150K particles, glowing core, background stars, mouse parallax, and custom glowing cursor.',
    featured: true,
    previewCode: `<!DOCTYPE html>
<html>
<head>
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{width:100%;height:100vh;overflow:hidden;background:#000}
canvas{display:block}
</style>
</head>
<body>
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
<script>
const scene=new THREE.Scene();
const camera=new THREE.PerspectiveCamera(60,innerWidth/innerHeight,0.1,2000);
camera.position.z=500;
const renderer=new THREE.WebGLRenderer({antialias:true});
renderer.setSize(innerWidth,innerHeight);
renderer.setClearColor(0x000000,1);
document.body.appendChild(renderer.domElement);
const count=80000;
const geo=new THREE.BufferGeometry();
const pos=new Float32Array(count*3);
const col=new Float32Array(count*3);
const c1=new THREE.Color(0x9d00ff),c2=new THREE.Color(0xe0aaff),c3=new THREE.Color(0x7b2cbf);
for(let i=0;i<count;i++){
  const i3=i*3,arm=i%4,armA=(arm/4)*Math.PI*2;
  const r=Math.random()*400+20,spiral=armA+r*0.015;
  const spread=30+r*0.15;
  pos[i3]=Math.cos(spiral)*r+(Math.random()-0.5)*spread;
  pos[i3+1]=Math.sin(spiral)*r+(Math.random()-0.5)*spread;
  pos[i3+2]=(Math.random()-0.5)*spread*0.5;
  const mix=Math.random();
  let R=mix<0.33?c1.r:mix<0.66?c2.r:c3.r;
  let G=mix<0.33?c1.g:mix<0.66?c2.g:c3.g;
  let B=mix<0.33?c1.b:mix<0.66?c2.b:c3.b;
  const bright=Math.max(0.3,1-Math.sqrt(pos[i3]**2+pos[i3+1]**2)/300);
  col[i3]=R*bright;col[i3+1]=G*bright;col[i3+2]=B*bright;
}
geo.setAttribute('position',new THREE.BufferAttribute(pos,3));
geo.setAttribute('color',new THREE.BufferAttribute(col,3));
const mat=new THREE.PointsMaterial({size:2,vertexColors:true,transparent:true,opacity:0.8,blending:THREE.AdditiveBlending,depthWrite:false});
const particles=new THREE.Points(geo,mat);
scene.add(particles);
const starsGeo=new THREE.BufferGeometry();
const starsPos=new Float32Array(10000*3);
for(let i=0;i<10000;i++){
  const i3=i*3,theta=Math.random()*Math.PI*2,phi=Math.acos(2*Math.random()-1),r=600+Math.random()*800;
  starsPos[i3]=r*Math.sin(phi)*Math.cos(theta);
  starsPos[i3+1]=r*Math.sin(phi)*Math.sin(theta);
  starsPos[i3+2]=r*Math.cos(phi);
}
starsGeo.setAttribute('position',new THREE.BufferAttribute(starsPos,3));
const starsMat=new THREE.PointsMaterial({size:1.5,color:0x6644aa,transparent:true,opacity:0.6,blending:THREE.AdditiveBlending,depthWrite:false});
const stars=new THREE.Points(starsGeo,starsMat);
scene.add(stars);
let mx=0,my=0,trx=0,try_=0;
addEventListener('mousemove',e=>{mx=(e.clientX/innerWidth)*2-1;my=(e.clientY/innerHeight)*2-1});
function animate(){
  const t=performance.now()*0.001;
  const arr=geo.attributes.position.array;
  for(let i=0;i<count;i++){
    const i3=i*3,x=arr[i3],y=arr[i3+1];
    const a=Math.atan2(y,x),r=Math.sqrt(x*x+y*y);
    const s=0.0003+(1/(r+10))*0.002;
    arr[i3]=Math.cos(a+s)*r;
    arr[i3+1]=Math.sin(a+s)*r;
    arr[i3+2]+=Math.sin(t*0.5+i*0.01)*0.02;
  }
  geo.attributes.position.needsUpdate=true;
  particles.rotation.z=t*0.02;
  trx=my*0.3;try_=mx*0.3;
  particles.rotation.x+=(trx-particles.rotation.x)*0.02;
  particles.rotation.y+=(try_-particles.rotation.y)*0.02;
  stars.rotation.y=t*0.005;
  renderer.render(scene,camera);
  requestAnimationFrame(animate);
}
animate();
addEventListener('resize',()=>{camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();renderer.setSize(innerWidth,innerHeight)});
</script>
</body>
</html>`,
    code: `/* Purple Galaxy Nebula — Three.js */
import * as THREE from 'three';
export function createGalaxy(container: HTMLElement) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, innerWidth / innerHeight, 0.1, 2000);
  camera.position.z = 500;
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(innerWidth, innerHeight);
  renderer.setClearColor(0x000000, 1);
  container.appendChild(renderer.domElement);
  const particleCount = 150000;
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);
  const color1 = new THREE.Color(0x9d00ff);
  const color2 = new THREE.Color(0xe0aaff);
  const color3 = new THREE.Color(0x7b2cbf);
  for (let i = 0; i < particleCount; i++) {
    const i3 = i * 3;
    const armCount = 4;
    const armIndex = i % armCount;
    const armAngle = (armIndex / armCount) * Math.PI * 2;
    const radius = Math.random() * 400 + 20;
    const spiralAngle = armAngle + radius * 0.015;
    const spread = 30 + radius * 0.15;
    positions[i3] = Math.cos(spiralAngle) * radius + (Math.random() - 0.5) * spread;
    positions[i3 + 1] = Math.sin(spiralAngle) * radius + (Math.random() - 0.5) * spread;
    positions[i3 + 2] = (Math.random() - 0.5) * spread * 0.5;
    const colorMix = Math.random();
    let r = colorMix < 0.33 ? color1.r : colorMix < 0.66 ? color2.r : color3.r;
    let g = colorMix < 0.33 ? color1.g : colorMix < 0.66 ? color2.g : color3.g;
    let b = colorMix < 0.33 ? color1.b : colorMix < 0.66 ? color2.b : color3.b;
    const dist = Math.sqrt(positions[i3] ** 2 + positions[i3 + 1] ** 2);
    const brightness = Math.max(0.3, 1 - dist / 300);
    colors[i3] = r * brightness;
    colors[i3 + 1] = g * brightness;
    colors[i3 + 2] = b * brightness;
  }
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  const material = new THREE.ShaderMaterial({
    uniforms: { uTime: { value: 0 }, uPixelRatio: { value: Math.min(devicePixelRatio, 2) } },
    vertexShader: \`
      varying vec3 vColor;
      uniform float uPixelRatio;
      void main() {
        vColor = color;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = (2.0 + size) * uPixelRatio * (300.0 / -mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;
      }
    \`,
    fragmentShader: \`
      varying vec3 vColor;
      void main() {
        float dist = length(gl_PointCoord - vec2(0.5));
        if (dist > 0.5) discard;
        float alpha = 1.0 - smoothstep(0.0, 0.5, dist);
        alpha = pow(alpha, 1.5);
        gl_FragColor = vec4(vColor, alpha);
      }
    \`,
    transparent: true,
    vertexColors: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  const particles = new THREE.Points(geometry, material);
  scene.add(particles);
  // Core + Stars + Animation loop...
  return { scene, camera, renderer, particles };
} `,
    prompt: `Create a 3D Purple Galaxy Nebula with Three.js:
  • 150,000 particles in a 4-arm spiral galaxy formation
  • Color palette: deep purple #9d00ff, light lavender #e0aaff, violet #7b2cbf
  • Brighter particles near the center, dimmer at edges
  • Continuous orbital rotation with varying speeds by radius
  • 20,000 background stars for depth
  • Glowing central core with white/pink particles
  • Custom glowing purple cursor with dot + pulsing ring
  • Mouse parallax — galaxy tilts toward cursor
  • Custom shaders with additive blending for soft glow
  • Smooth cursor follow with lag for fluid feel`,
  },
  {
    slug: 'dynamic-3d-dna-helix',
    title: 'Interactive 3D DNA Helix Particle System',
    category: 'animations',
    tag: 'threejs',
    description: 'An interactive 3D particle system that forms a DNA helix, with mouse-guided morphing and dynamic color controls.',
    featured: true,
    previewCode: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interactive 3D DNA Helix</title>
    <style>
        body { margin: 0; padding: 0; overflow: hidden; background-color: black; font-family: 'Courier New', Courier, monospace; color: white; user-select: none; }
        #canvas-container { width: 100vw; height: 100vh; position: relative; }
        
        .ui-element { position: absolute; background: rgba(10, 10, 20, 0.6); border: 1px solid rgba(50, 50, 70, 0.4); border-radius: 8px; backdrop-filter: blur(5px); }
        
        #top-info { top: 20px; left: 50%; transform: translateX(-50%); padding: 10px 20px; text-align: center; font-size: 14px; box-shadow: 0 4px 15px rgba(0,0,0,0.5); }
        
        #bottom-controls { bottom: 20px; left: 50%; transform: translateX(-50%); padding: 15px 25px; display: flex; flex-direction: column; align-items: center; gap: 15px; box-shadow: 0 -4px 15px rgba(0,0,0,0.5); }
        
        #change-shape-btn { padding: 10px 20px; background: rgba(30, 80, 150, 0.8); border: 1px solid #3366cc; border-radius: 6px; font-weight: bold; cursor: pointer; transition: all 0.2s ease; font-size: 12px; }
        #change-shape-btn:hover { background: rgba(50, 100, 180, 0.9); box-shadow: 0 0 10px rgba(100, 150, 250, 0.6); }
        
        #color-picker { display: flex; gap: 12px; }
        .color-dot { width: 22px; height: 22px; border-radius: 50%; cursor: pointer; border: 2px solid transparent; transition: all 0.2s ease; box-shadow: 0 0 5px rgba(255,255,255,0.2); }
        .color-dot:hover { transform: scale(1.15); box-shadow: 0 0 10px rgba(255,255,255,0.4); }
        .color-dot.active { border-color: white; box-shadow: 0 0 12px rgba(255,255,255,0.7); }
        
        #orange { background-color: #ff9933; }
        #purple { background-color: #9933ff; }
        #green { background-color: #33cc33; }
        #multi { background: linear-gradient(135deg, #ff9933 0%, #33cc33 50%, #9933ff 100%); }

    </style>
</head>
<body>
    <div id="canvas-container">
        </div>

    <div id="top-info" class="ui-element">
        Shape: <span id="current-shape-text">DNA Helix</span> (Click to morph)
    </div>

    <div id="bottom-controls" class="ui-element">
        <div id="change-shape-btn">Change Shape</div>
        <div id="color-picker">
            <div id="orange" class="color-dot" data-color="#ff9933"></div>
            <div id="purple" class="color-dot" data-color="#9933ff"></div>
            <div id="green" class="color-dot" data-color="#33cc33"></div>
            <div id="multi" class="color-dot active" data-color="multi"></div>
        </div>
    </div>

    <script type="importmap">
        {
          "imports": {
            "three": "https://unpkg.com/three@0.160.0/build/three.module.js",
            "three/examples/jsm/": "https://unpkg.com/three@0.160.0/examples/jsm/"
          }
        }
    </script>
    <script type="module">
        import * as THREE from 'three';
        import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
        import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
        import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
        import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
        import { CopyShader } from 'three/examples/jsm/shaders/CopyShader.js';

        // Scene Setup
        const container = document.getElementById('canvas-container');
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 20;

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        container.appendChild(renderer.domElement);

        // Particle System Setup
        const particleCount = 2500;
        const positions = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);
        const targetPositions = new Float32Array(particleCount * 3);
        const baseColors = new Float32Array(particleCount * 3);
        const initialStates = new Float32Array(particleCount);

        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        
        const material = new THREE.PointsMaterial({
            size: 0.1,
            vertexColors: true,
            blending: THREE.AdditiveBlending,
            depthTest: false,
            transparent: true,
            opacity: 0.8
        });

        const points = new THREE.Points(geometry, material);
        scene.add(points);

        // Particle Shape Definitions
        function createHelixPositions() {
            const pos = new Float32Array(particleCount * 3);
            const cols = new Float32Array(particleCount * 3);
            const initial = new Float32Array(particleCount);
            const numTurns = 6;
            const radius = 5;
            const height = 15;
            const separation = 2; // Distance between strands

            for (let i = 0; i < particleCount; i++) {
                const strand = i < particleCount / 2 ? 1 : -1;
                const idx = i % (particleCount / 2);
                const t = idx / (particleCount / 2); // 0 to 1

                const angle = t * Math.PI * 2 * numTurns;
                const h = (t - 0.5) * height;

                // Position
                pos[i * 3 + 0] = (radius + strand * separation / 2) * Math.cos(angle);
                pos[i * 3 + 1] = h;
                pos[i * 3 + 2] = (radius + strand * separation / 2) * Math.sin(angle);
                
                // Colors - initial multi-color from image
                let col;
                if (strand === 1) {
                    col = new THREE.Color().setHSL(0.5, 0.8, 0.7); // Light Blue
                } else {
                    col = new THREE.Color().setHSL(0.3, 0.8, 0.7); // Light Green
                }
                cols[i * 3 + 0] = col.r;
                cols[i * 3 + 1] = col.g;
                cols[i * 3 + 2] = col.b;

                // Add random initial noise
                pos[i * 3 + 0] += (Math.random() - 0.5) * 0.2;
                pos[i * 3 + 1] += (Math.random() - 0.5) * 0.2;
                pos[i * 3 + 2] += (Math.random() - 0.5) * 0.2;

                // Initial positions can be random
                positions[i * 3 + 0] = (Math.random() - 0.5) * 50;
                positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
                positions[i * 3 + 2] = (Math.random() - 0.5) * 50;

                colors[i * 3 + 0] = cols[i * 3 + 0];
                colors[i * 3 + 1] = cols[i * 3 + 1];
                colors[i * 3 + 2] = cols[i * 3 + 2];
            }
            targetPositions.set(pos);
            baseColors.set(cols);
        }

        function setParticleTarget(shape) {
            const height = 15;
            const radius = 5;
            const multiColor = document.querySelector('.color-dot.active').id === 'multi';

            for (let i = 0; i < particleCount; i++) {
                const idx = i % (particleCount / 2);
                const t = idx / (particleCount / 2);
                const strand = i < particleCount / 2 ? 1 : -1;
                const h = (t - 0.5) * height;

                let tx, ty, tz;
                let t_col;

                switch(shape) {
                    case 'DNA Helix':
                        const numTurns = 6;
                        const separation = 2;
                        const angle = t * Math.PI * 2 * numTurns;
                        tx = (radius + strand * separation / 2) * Math.cos(angle);
                        ty = h;
                        tz = (radius + strand * separation / 2) * Math.sin(angle);
                        break;
                    case 'Double Helix Wave':
                        const numWaves = 4;
                        const waveAngle = t * Math.PI * 2 * numWaves;
                        const strandOffset = strand * 1.5;
                        tx = radius * Math.cos(waveAngle);
                        ty = h;
                        tz = radius * Math.sin(waveAngle) + strandOffset;
                        break;
                    case 'Particle Voids':
                        // Disperse particles to the sphere edges with noise
                        const sph_radius = 15;
                        tx = (Math.random() - 0.5) * sph_radius * 2;
                        ty = (Math.random() - 0.5) * sph_radius * 2;
                        tz = (Math.random() - 0.5) * sph_radius * 2;
                        // But slightly gravitate to a void pattern
                        break;
                }

                // Add dynamic noise to target
                targetPositions[i * 3 + 0] = tx + (Math.random() - 0.5) * 0.1;
                targetPositions[i * 3 + 1] = ty + (Math.random() - 0.5) * 0.1;
                targetPositions[i * 3 + 2] = tz + (Math.random() - 0.5) * 0.1;

                if (multiColor) {
                    // Update multi-color base on shape strands if needed
                    // For now, use the initial base colors
                    t_col = new THREE.Color(baseColors[i*3], baseColors[i*3+1], baseColors[i*3+2]);
                    colors[i * 3 + 0] = t_col.r;
                    colors[i * 3 + 1] = t_col.g;
                    colors[i * 3 + 2] = t_col.b;
                }
            }
            geometry.attributes.position.needsUpdate = true;
            geometry.attributes.color.needsUpdate = true;
        }

        // Initialize shape
        createHelixPositions();
        setParticleTarget('DNA Helix');

        // Post-processing: Bloom for glow
        const renderPass = new RenderPass(scene, camera);
        const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.0, 0.4, 0.85);
        bloomPass.threshold = 0.3;
        bloomPass.strength = 1.2;
        bloomPass.radius = 0.5;

        const composer = new EffectComposer(renderer);
        composer.addPass(renderPass);
        composer.addPass(bloomPass);

        // Animation and Mouse Interaction
        let mouseX = 0;
        let mouseY = 0;
        const lerpFactor = 0.05; // Position lerping
        const colorLerpFactor = 0.02; // Color lerping

        document.addEventListener('mousemove', (event) => {
            mouseX = (event.clientX / window.innerWidth - 0.5) * 2;
            mouseY = -(event.clientY / window.innerHeight - 0.5) * 2;
        });

        const clock = new THREE.Clock();

        function animate() {
            requestAnimationFrame(animate);
            const time = clock.getElapsedTime();

            // Lerp points to targets and add dynamic motion
            const positions = geometry.attributes.position.array;
            const colorsAttr = geometry.attributes.color.array;

            for (let i = 0; i < particleCount; i++) {
                // Lerp position to target
                positions[i * 3 + 0] += (targetPositions[i * 3 + 0] - positions[i * 3 + 0]) * lerpFactor;
                positions[i * 3 + 1] += (targetPositions[i * 3 + 1] - positions[i * 3 + 1]) * lerpFactor;
                positions[i * 3 + 2] += (targetPositions[i * 3 + 2] - positions[i * 3 + 2]) * lerpFactor;

                // Dynamic point motion (wiggling)
                positions[i * 3 + 0] += Math.sin(time + i * 0.1) * 0.01;
                positions[i * 3 + 1] += Math.cos(time + i * 0.1) * 0.01;
                positions[i * 3 + 2] += Math.sin(time + i * 0.1) * 0.01;

                // Dynamic color fading/cycling (slight)
                const currentShape = document.getElementById('current-shape-text').innerText;
                if (currentShape === 'DNA Helix') {
                    // Slight brightness oscillation for glow effect
                    const brightness = 0.7 + 0.1 * Math.sin(time * 2 + i * 0.05);
                    colorsAttr[i * 3 + 0] = baseColors[i * 3 + 0] * brightness;
                    colorsAttr[i * 3 + 1] = baseColors[i * 3 + 1] * brightness;
                    colorsAttr[i * 3 + 2] = baseColors[i * 3 + 2] * brightness;
                }
            }
            geometry.attributes.position.needsUpdate = true;
            geometry.attributes.color.needsUpdate = true;

            // Rotation and Mouse Follow for overall structure
            points.rotation.y = time * 0.2 + mouseX * 0.3; // Rotate and follow x-mouse
            points.rotation.x = mouseY * 0.2; // Tilt with y-mouse

            // Render with post-processing
            composer.render();
        }

        animate();

        // UI Interactions
        const shapes = ['DNA Helix', 'Double Helix Wave', 'Particle Voids'];
        let currentShapeIndex = 0;
        const changeShapeBtn = document.getElementById('change-shape-btn');
        const topInfoText = document.getElementById('current-shape-text');

        changeShapeBtn.addEventListener('click', () => {
            currentShapeIndex = (currentShapeIndex + 1) % shapes.length;
            const newShape = shapes[currentShapeIndex];
            topInfoText.innerText = newShape;
            setParticleTarget(newShape);
        });

        // Click on info panel to morph too
        document.getElementById('top-info').addEventListener('click', () => {
            changeShapeBtn.click();
        });

        const colorDots = document.querySelectorAll('.color-dot');
        colorDots.forEach(dot => {
            dot.addEventListener('click', () => {
                colorDots.forEach(d => d.classList.remove('active'));
                dot.classList.add('active');
                
                const colorCode = dot.getAttribute('data-color');
                const multiColor = colorCode === 'multi';

                for (let i = 0; i < particleCount; i++) {
                    const strand = i < particleCount / 2 ? 1 : -1;
                    const idx = i % (particleCount / 2);
                    const t = idx / (particleCount / 2);

                    let newColor;
                    if (multiColor) {
                        // Blend between Blue and Green based on strand
                        if (strand === 1) {
                            newColor = new THREE.Color().setHSL(0.5, 0.8, 0.7); // Light Blue
                        } else {
                            newColor = new THREE.Color().setHSL(0.3, 0.8, 0.7); // Light Green
                        }
                    } else {
                        // Single color - slightly vary per strand for depth
                        const base_col = new THREE.Color(colorCode);
                        const hsl = {};
                        base_col.getHSL(hsl);
                        hsl.l *= (0.9 + 0.2 * Math.random());
                        newColor = new THREE.Color().setHSL(hsl.h, hsl.s, hsl.l);
                    }
                    baseColors[i * 3 + 0] = newColor.r;
                    baseColors[i * 3 + 1] = newColor.g;
                    baseColors[i * 3 + 2] = newColor.b;
                }
                geometry.attributes.color.needsUpdate = true;
            });
        });

        // Window Resize Handling
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
            composer.setSize(window.innerWidth, window.innerHeight);
            bloomPass.setSize(window.innerWidth, window.innerHeight);
        });

    </script>
</body>
</html>
`,
    code: `
// Three.js Interactive DNA Helix Particle System
// Based on image data and requirements

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 20;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Particle Geometry
const particleCount = 2500;
const geometry = new THREE.BufferGeometry();
const positions = new Float32Array(particleCount * 3);
const colors = new Float32Array(particleCount * 3);
// ... initialize positions/colors for helix ...

geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

// Particle Material (additive and glowing)
const material = new THREE.PointsMaterial({
    size: 0.1,
    vertexColors: true,
    blending: THREE.AdditiveBlending,
    transparent: true,
    opacity: 0.8
});

const points = new THREE.Points(geometry, material);
scene.add(points);

// Target positions for morphing
const targetPositions = new Float32Array(particleCount * 3);
// ... function to set targets based on 'DNA Helix', 'Double Helix Wave', etc. ...

// UI Elements (CSS/HTML)
// ... Create top-info and bottom-controls panels with blur/opacity ...
// ... Add color picker dots with active states ...

// Post-processing for bloom
const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));
const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.2, 0.4, 0.85);
composer.addPass(bloomPass);

// Animation Loop
let mouseX = 0, mouseY = 0;
document.addEventListener('mousemove', e => { 
    mouseX = (e.clientX/window.innerWidth - 0.5) * 2;
    mouseY = -(e.clientY/window.innerHeight - 0.5) * 2;
});

const clock = new THREE.Clock();
function animate() {
    requestAnimationFrame(animate);
    const time = clock.getElapsedTime();
    
    const positionsAttr = geometry.attributes.position.array;
    for (let i = 0; i < particleCount; i++) {
        // Lerp positions towards targets (morphing)
        // Add time-based wiggling per particle
        // ...
    }
    geometry.attributes.position.needsUpdate = true;
    
    points.rotation.y = time * 0.2 + mouseX * 0.3; // Rotate & follow mouse
    points.rotation.x = mouseY * 0.2; // Tilt with mouse
    
    composer.render();
}
animate();

// Event Listeners for UI
// Change Shape, Color dots, etc.
`,
    prompt: `Replicate a complex interactive UI: A glowing, 3D particle system forming a DNA helix on a dark, star-field-like background. Include all UI elements precisely: A translucent top information panel stating 'Shape: DNA Helix (Click to morph)'. A translucent bottom controls panel with a 'Change Shape' button and four distinct, glowing color selection dots (Orange, Purple, Green, and a multi-color gradient dot, where multi is active). Add sophisticated motion and animation: particles should have independent time-based 'wiggling' for a living feel. The overall DNA structure should rotate slowly and tilt in 3D, and this rotation should gently follow the mouse cursor's movement. Mouse hover on color dots must have a scaling effect, and hover over the central DNA structure itself should subtly increase the particle density or 'life'. Clicking 'Change Shape' or the info panel must trigger a particle-by-particle morphing animation to different forms (e.g., a double wave or voids) while the text updates. The selected color dot must have a distinct 'active' border and glow. Color changes must dynamically update the particle colors, keeping the multi-color option as the complex Blue/Green gradient from the image. Post-processing bloom effects must make everything glow intensely. The code should be Three.js based, requiring zero external resources other than Three.js core and key post-processing passes.`,
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
