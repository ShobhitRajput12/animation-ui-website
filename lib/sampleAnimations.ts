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
  {
    _id: 'sample-bioluminescent-neural-mesh',
    slug: 'bioluminescent-neural-mesh',
    title: 'Bio-Luminescent Neural Mesh',
    category: 'backgrounds',
    tag: 'threejs',
    description: 'An interactive organic neural network with bio-luminescent pulses and fluid-like vertex deformation.',
    featured: true,
    likes: 120,
    author: 'Animation AI',
    createdAt: new Date('2026-05-10T14:24:00.000Z').toISOString(),
    previewCode: `<!DOCTYPE html><html><head><style>body{margin:0;background:#010105;overflow:hidden}canvas{display:block}</style></head><body><script type="importmap">{"imports":{"three":"https://unpkg.com/three@0.160.0/build/three.module.js"}}</script><script type="module">import * as THREE from 'three';const scene=new THREE.Scene();const camera=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);const renderer=new THREE.WebGLRenderer({antialias:true,alpha:true});renderer.setSize(window.innerWidth,window.innerHeight);document.body.appendChild(renderer.domElement);const geo=new THREE.IcosahedronGeometry(10,64);const mat=new THREE.ShaderMaterial({uniforms:{uTime:{value:0},uMouse:{value:new THREE.Vector2(0,0)}},vertexShader:\`varying vec2 vUv;varying float vDist;uniform float uTime;uniform vec2 uMouse;void main(){vUv=uv;vec3 p=position;float d=distance(uv,uMouse*0.5+0.5);vDist=d;p+=normal*(sin(p.x*0.5+uTime)*0.5+cos(p.y*0.5+uTime)*0.5);p+=normal*exp(-d*5.0)*2.0*sin(uTime*10.0-d*10.0);gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.0);}\`,fragmentShader:\`varying vec2 vUv;varying float vDist;uniform float uTime;void main(){vec3 c1=vec3(0.1,0.6,0.9);vec3 c2=vec3(0.8,0.2,1.0);float pulse=sin(vDist*20.0-uTime*5.0)*0.5+0.5;vec3 color=mix(c1,c2,pulse*smoothstep(1.0,0.0,vDist));float edge=smoothstep(0.4,0.45,pulse);gl_FragColor=vec4(color*edge,edge*0.8);}\`,transparent:true,blending:THREE.AdditiveBlending,wireframe:true});const mesh=new THREE.Mesh(geo,mat);scene.add(mesh);camera.position.z=25;window.addEventListener('mousemove',(e)=>{mat.uniforms.uMouse.value.set((e.clientX/window.innerWidth)*2-1,-(e.clientY/window.innerHeight)*2+1);});function animate(){requestAnimationFrame(animate);mat.uniforms.uTime.value+=0.01;mesh.rotation.y+=0.002;renderer.render(scene,camera);}animate();window.addEventListener('resize',()=>{camera.aspect=window.innerWidth/window.innerHeight;camera.updateProjectionMatrix();renderer.setSize(window.innerWidth,window.innerHeight);});</script></body></html>`,
    code: `/* Bio-Luminescent Neural Mesh • Three.js Shader */\nconst geometry = new THREE.IcosahedronGeometry(10, 64);\nconst material = new THREE.ShaderMaterial({\n  uniforms: { uTime: { value: 0 }, uMouse: { value: new THREE.Vector2() } },\n  vertexShader: \`...\`,\n  fragmentShader: \`...\`,\n  wireframe: true,\n  transparent: true,\n  blending: THREE.AdditiveBlending\n});`,
    prompt: `Create an interactive bio-luminescent neural mesh using Three.js and custom GLSL shaders. The mesh should be a high-segment Icosahedron that deforms organically over time. Implement mouse-reactive ripples using an exponential decay function in the vertex shader.`,
  },
  {
    _id: 'sample-quantum-flux-interface',
    slug: 'quantum-flux-interface',
    title: 'Quantum Flux Interface',
    category: 'shaders',
    tag: 'react-three-fiber',
    description: 'A high-end cinematic background featuring multi-layered glass refraction over a fluid quantum flux shader field.',
    featured: true,
    likes: 85,
    author: 'Animation AI',
    createdAt: new Date('2026-05-10T14:24:00.000Z').toISOString(),
    previewCode: `<!DOCTYPE html><html><head><style>body{margin:0;background:#02020a;overflow:hidden}canvas{display:block}</style></head><body><script type="importmap">{"imports":{"three":"https://unpkg.com/three@0.160.0/build/three.module.js"}}</script><script type="module">import * as THREE from 'three';const scene=new THREE.Scene();const camera=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);const renderer=new THREE.WebGLRenderer({antialias:true});renderer.setSize(window.innerWidth,window.innerHeight);document.body.appendChild(renderer.domElement);const bgGeo=new THREE.PlaneGeometry(2,2);const bgMat=new THREE.ShaderMaterial({uniforms:{uTime:{value:0},uResolution:{value:new THREE.Vector2(window.innerWidth,window.innerHeight)}},vertexShader:\`void main(){gl_Position=vec4(position,1.0);}\`,fragmentShader:\`uniform float uTime;uniform vec2 uResolution;void main(){vec2 uv=gl_FragCoord.xy/uResolution.xy;vec3 col=0.5+0.5*cos(uTime+uv.xyx+vec3(0,2,4));gl_FragColor=vec4(col*0.2,1.0);}\`});const bg=new THREE.Mesh(bgGeo,bgMat);scene.add(bg);const glassGeo=new THREE.BoxGeometry(5,5,0.5);const glassMat=new THREE.MeshPhysicalMaterial({thickness:2,roughness:0,transmission:1,ior:1.5,color:0xffffff,envMapIntensity:1});const glass=new THREE.Mesh(glassGeo,glassMat);glass.position.z=5;scene.add(glass);camera.position.z=15;function animate(){requestAnimationFrame(animate);bgMat.uniforms.uTime.value+=0.01;glass.rotation.x+=0.01;glass.rotation.y+=0.01;renderer.render(scene,camera);}animate();</script></body></html>`,
    code: `import { Canvas } from '@react-three/fiber';\nimport { MeshTransmissionMaterial, Float } from '@react-three/drei';\n\nexport const QuantumFlux = () => (\n  <Canvas>\n    <ambientLight intensity={0.5} />\n    <Float speed={2} rotationIntensity={1} floatIntensity={1}>\n      <mesh>\n        <torusKnotGeometry args={[1, 0.3, 128, 32]} />\n        <MeshTransmissionMaterial \n          backside \n          samples={16} \n          resolution={512} \n          transmission={1} \n          roughness={0} \n          ior={1.5} \n          thickness={2} \n        />\n      </mesh>\n    </Float>\n    <ShaderBackground />\n  </Canvas>\n);`,
    prompt: `Create an ultra-premium 'Quantum Flux Interface' using React Three Fiber and Drei. The background should be a fluid shader field (GLSL) with oscillating colors.`,
  },
  {
    _id: 'sample-chromatic-refraction-singularity',
    slug: 'chromatic-refraction-singularity',
    title: 'Chromatic Refraction Singularity',
    category: 'shaders',
    tag: 'threejs',
    description: 'An interactive 3D refraction field using custom GLSL. Features recursive space-folding patterns, chromatic dispersion, and interactive light warping.',
    featured: true,
    likes: 156,
    author: 'Animation AI',
    createdAt: new Date('2026-05-10T14:50:00.000Z').toISOString(),
    previewCode: `<!DOCTYPE html><html><head><style>body{margin:0;background:#010105;overflow:hidden}canvas{display:block}</style></head><body><script type="importmap">{"imports":{"three":"https://unpkg.com/three@0.160.0/build/three.module.js"}}</script><script type="module">import * as THREE from 'three';const scene=new THREE.Scene();const camera=new THREE.Camera();camera.position.z=1;const renderer=new THREE.WebGLRenderer({antialias:true});renderer.setPixelRatio(window.devicePixelRatio);document.body.appendChild(renderer.domElement);const uniforms={uTime:{value:0},uResolution:{value:new THREE.Vector2()},uMouse:{value:new THREE.Vector2(0,0)}};const geometry=new THREE.PlaneGeometry(2,2);const material=new THREE.ShaderMaterial({uniforms:uniforms,vertexShader:\`void main(){gl_Position=vec4(position,1.0);}\`,fragmentShader:\`uniform float uTime;uniform vec2 uResolution;uniform vec2 uMouse;vec3 palette(float t){vec3 a=vec3(0.5,0.5,0.5);vec3 b=vec3(0.5,0.5,0.5);vec3 c=vec3(1.0,1.0,1.0);vec3 d=vec3(0.263,0.416,0.557);return a+b*cos(6.28318*(c*t+d));}void main(){vec2 uv=(gl_FragCoord.xy*2.0-uResolution.xy)/min(uResolution.x,uResolution.y);vec2 uv0=uv;vec3 finalColor=vec3(0.0);float mDist=length(uv-uMouse*0.5);for(float i=0.0;i<4.0;i++){uv=fract(uv*1.5)-0.5;float d=length(uv)*exp(-length(uv0));vec3 col=palette(length(uv0)+i*0.4+uTime*0.4);d=sin(d*8.0+uTime+mDist*2.0)/8.0;d=abs(d);d=pow(0.01/d,1.2);finalColor+=col*d;}gl_FragColor=vec4(finalColor,1.0);}\`});const mesh=new THREE.Mesh(geometry,material);scene.add(mesh);function resize(){renderer.setSize(window.innerWidth,window.innerHeight);uniforms.uResolution.value.set(window.innerWidth,window.innerHeight);}window.addEventListener('resize',resize);resize();window.addEventListener('mousemove',(e)=>{uniforms.uMouse.value.set((e.clientX/window.innerWidth)*2-1,-(e.clientY/window.innerHeight)*2+1);});function animate(){requestAnimationFrame(animate);uniforms.uTime.value+=0.02;renderer.render(scene,camera);}animate();</script></body></html>`,
    code: `/* Chromatic Refraction Singularity • Three.js Shader */\nconst material = new THREE.ShaderMaterial({\n  uniforms: { uTime: { value: 0 }, uResolution: { value: new THREE.Vector2() } },\n  vertexShader: \`...\`,\n  fragmentShader: \`...\`\n});`,
    prompt: `Create an advanced 'Chromatic Refraction Singularity' shader using Three.js and GLSL. The effect should feature recursive space-folding (fractal) patterns that evolve over time.`,
  },
  {
    _id: 'sample-cybernetic-neural-stream',
    slug: 'cybernetic-neural-stream',
    title: 'Cybernetic Neural Stream',
    category: 'shaders',
    tag: 'threejs',
    description: 'A high-fidelity digital matrix simulation. Combines mosaic pixelation with kinetic energy waves and interactive glitch artifacts.',
    featured: true,
    likes: 184,
    author: 'Animation AI',
    createdAt: new Date('2026-05-10T14:50:00.000Z').toISOString(),
    previewCode: `<!DOCTYPE html><html><head><style>body{margin:0;background:#000;overflow:hidden}canvas{display:block}</style></head><body><script type="importmap">{"imports":{"three":"https://unpkg.com/three@0.160.0/build/three.module.js"}}</script><script type="module">import * as THREE from 'three';const scene=new THREE.Scene();const camera=new THREE.Camera();camera.position.z=1;const renderer=new THREE.WebGLRenderer();renderer.setPixelRatio(window.devicePixelRatio);document.body.appendChild(renderer.domElement);const uniforms={uTime:{value:0},uResolution:{value:new THREE.Vector2()},uMouse:{value:new THREE.Vector2()}};const geometry=new THREE.PlaneGeometry(2,2);const material=new THREE.ShaderMaterial({uniforms,vertexShader:\`void main(){gl_Position=vec4(position,1.0);}\`,fragmentShader:\`uniform float uTime;uniform vec2 uResolution;uniform vec2 uMouse;float random(vec2 st){return fract(sin(dot(st.xy,vec2(12.9898,78.233)))*43758.5453123);}void main(){vec2 uv=gl_FragCoord.xy/uResolution.xy;vec2 mUV=uMouse*0.5+0.5;float mosaic=64.0;vec2 grid=floor(uv*mosaic)/mosaic;float n=random(grid+floor(uTime*10.0));float flow=fract(grid.y-uTime*0.5+random(vec2(grid.x))*10.0);float stream=step(0.95,random(vec2(grid.x,floor(uTime*5.0))))*step(0.1,flow);float dist=distance(uv,mUV);float glitch=step(0.98,random(vec2(uTime)))*0.2;vec3 col=vec3(0.0,0.8,1.0)*stream;col+=vec3(0.5,0.0,1.0)*step(0.99,random(grid))*n;col*=1.0-dist*0.5;col+=glitch;gl_FragColor=vec4(col,1.0);}\`});const mesh=new THREE.Mesh(geometry,material);scene.add(mesh);function resize(){renderer.setSize(window.innerWidth,window.innerHeight);uniforms.uResolution.value.set(window.innerWidth,window.innerHeight);}window.addEventListener('resize',resize);resize();window.addEventListener('mousemove',(e)=>{uniforms.uMouse.value.set((e.clientX/window.innerWidth)*2-1,-(e.clientY/window.innerHeight)*2+1);});function animate(){requestAnimationFrame(animate);uniforms.uTime.value+=0.01;renderer.render(scene,camera);}animate();</script></body></html>`,
    code: `/* Cybernetic Neural Stream • Three.js Shader */\nconst material = new THREE.ShaderMaterial({\n  uniforms: { uTime: { value: 0 }, uResolution: { value: new THREE.Vector2() } },\n  fragmentShader: \`...\`\n});`,
    prompt: `Create an interactive 'Cybernetic Neural Stream' animation using Three.js and a custom mosaic shader. The effect should simulate a digital matrix with vertical data streams.`,
  },

]

