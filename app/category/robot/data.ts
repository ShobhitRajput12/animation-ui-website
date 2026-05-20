export const ROBOT_DATA = [
  {
    _id: 'robot-holographic-sentinel',
    slug: 'holographic-sentinel-robot',
    title: 'Holographic Sentinel Robot',
    category: 'robot',
    tag: 'css',
    description:
      'A layered 3D robot sentinel with cursor-tracked head movement, animated scan beams, and click-to-switch operating modes.',
    previewCode: `<!DOCTYPE html><html><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/><style>
*{box-sizing:border-box;margin:0;padding:0}
body{overflow:hidden;background:radial-gradient(circle at top,#17304d 0%,#07111d 38%,#03060b 100%);font-family:Inter,system-ui,sans-serif}
.stage{position:relative;width:100vw;height:100vh;display:flex;align-items:center;justify-content:center;perspective:1600px;overflow:hidden}
.glow{position:absolute;inset:-20%;background:
radial-gradient(circle at var(--mx,50%) var(--my,50%),rgba(88,224,255,.16),transparent 22%),
radial-gradient(circle at 50% 10%,rgba(85,255,191,.08),transparent 38%);
filter:blur(8px)}
.grid{position:absolute;inset:-10%;background:
linear-gradient(rgba(130,220,255,.06) 1px,transparent 1px),
linear-gradient(90deg,rgba(130,220,255,.06) 1px,transparent 1px);
background-size:48px 48px;transform:rotateX(78deg) translateY(42vh);transform-origin:center top;opacity:.6}
.bot-wrap{position:relative;transform-style:preserve-3d;transform:rotateX(calc(var(--rx,0deg) - 8deg)) rotateY(var(--ry,0deg)) translateY(var(--float,0px));transition:transform .18s ease-out}
.bot-wrap::after{content:'';position:absolute;left:50%;top:78%;width:280px;height:90px;transform:translate3d(-50%,0,-120px) rotateX(90deg);background:radial-gradient(circle,rgba(63,227,255,.32),transparent 70%);filter:blur(14px)}
.robot{position:relative;width:290px;height:380px;transform-style:preserve-3d}
.halo{position:absolute;left:50%;top:14px;width:180px;height:180px;border-radius:50%;transform:translateX(-50%) translateZ(-10px);border:1px solid rgba(94,240,255,.28);box-shadow:0 0 40px rgba(79,226,255,.18) inset;animation:spin 9s linear infinite}
.halo::before,.halo::after{content:'';position:absolute;inset:18px;border-radius:50%;border:1px dashed rgba(155,255,235,.22)}
.head{position:absolute;left:50%;top:36px;width:170px;height:132px;transform:translateX(-50%) translateZ(42px);transform-style:preserve-3d}
.head-shell,.head-glass,.head-rim,.visor,.eye,.chin,.antenna,.antenna-dot,.panel,.torso,.core,.collar,.arm,.forearm,.hand,.ring,.base{position:absolute;transform-style:preserve-3d}
.head-shell{inset:0;border-radius:34px;background:linear-gradient(160deg,#dff6ff 0%,#81bfd7 35%,#133043 100%);border:1px solid rgba(255,255,255,.22);box-shadow:inset 0 1px 0 rgba(255,255,255,.45),0 18px 30px rgba(0,0,0,.32)}
.head-rim{inset:10px;border-radius:26px;border:1px solid rgba(95,240,255,.28);transform:translateZ(18px)}
.head-glass{left:16px;right:16px;top:22px;height:54px;border-radius:22px;background:linear-gradient(180deg,rgba(180,245,255,.55),rgba(42,107,148,.18));backdrop-filter:blur(8px);transform:translateZ(24px);overflow:hidden;border:1px solid rgba(176,242,255,.38)}
.visor{inset:0;background:linear-gradient(90deg,transparent,rgba(255,255,255,.6),transparent);transform:translateX(-120%);animation:sweep 3.2s ease-in-out infinite}
.eye{top:18px;width:20px;height:20px;border-radius:50%;background:radial-gradient(circle,#d8ffff 0%,#57e8ff 35%,#1186c5 100%);box-shadow:0 0 18px rgba(87,232,255,.85);transform:translateZ(28px)}
.eye.left{left:48px}.eye.right{right:48px}
.chin{left:50%;bottom:16px;width:74px;height:18px;border-radius:0 0 16px 16px;background:linear-gradient(180deg,#9cd5e8,#22465f);transform:translateX(-50%) translateZ(15px)}
.antenna{left:50%;top:-28px;width:10px;height:32px;border-radius:999px;background:linear-gradient(180deg,#9ad9e8,#254f65);transform:translateX(-50%) translateZ(8px)}
.antenna-dot{left:50%;top:-14px;width:20px;height:20px;border-radius:50%;background:radial-gradient(circle,var(--accent,#6af7ff),#0a698d 70%);box-shadow:0 0 16px var(--accent,#6af7ff);transform:translateX(-50%) translateZ(16px);animation:pulse 1.8s ease-in-out infinite}
.torso{left:50%;top:154px;width:220px;height:176px;border-radius:34px;background:linear-gradient(165deg,#d9f3ff 0%,#8ec6d8 24%,#102637 75%,#08131d 100%);transform:translateX(-50%);border:1px solid rgba(255,255,255,.18);box-shadow:inset 0 1px 0 rgba(255,255,255,.32),0 24px 40px rgba(0,0,0,.35)}
.collar{left:50%;top:-16px;width:132px;height:36px;border-radius:20px;background:linear-gradient(180deg,#9acfe0,#27495f);transform:translateX(-50%) translateZ(16px)}
.core{left:50%;top:52px;width:94px;height:94px;border-radius:28px;background:
radial-gradient(circle at 50% 50%,rgba(255,255,255,.9),rgba(123,244,255,.6) 22%,rgba(31,117,158,.5) 48%,rgba(6,16,24,.2) 68%),
linear-gradient(160deg,#7ff4ff,#123249);
transform:translateX(-50%) translateZ(36px);box-shadow:0 0 26px rgba(89,236,255,.42),inset 0 0 18px rgba(255,255,255,.35);animation:corePulse 2.4s ease-in-out infinite}
.ring{left:50%;top:98px;width:150px;height:150px;border-radius:50%;border:1px solid rgba(97,240,255,.3);transform:translateX(-50%) translateZ(16px) rotateX(76deg);animation:spin 8s linear infinite}
.panel{top:44px;width:54px;height:98px;border-radius:18px;background:linear-gradient(180deg,rgba(115,245,255,.48),rgba(12,37,54,.4));border:1px solid rgba(135,240,255,.28);transform:translateZ(18px)}
.panel.left{left:22px}.panel.right{right:22px}
.panel::before{content:'';position:absolute;left:10px;right:10px;top:18px;height:2px;background:rgba(196,252,255,.8);box-shadow:0 16px 0 rgba(196,252,255,.35),0 32px 0 rgba(196,252,255,.55),0 48px 0 rgba(196,252,255,.3)}
.arm{top:182px;width:44px;height:108px;border-radius:22px;background:linear-gradient(180deg,#b5ecff,#345d74 70%,#112433);border:1px solid rgba(255,255,255,.14)}
.arm.left{left:18px;transform:translateZ(12px) rotateZ(12deg)}
.arm.right{right:18px;transform:translateZ(12px) rotateZ(-12deg)}
.forearm{left:4px;bottom:-68px;width:36px;height:76px;border-radius:18px;background:linear-gradient(180deg,#8adfff,#20475d);animation:armSwing 3.5s ease-in-out infinite}
.arm.right .forearm{animation-delay:-1.75s}
.hand{left:50%;bottom:-14px;width:30px;height:30px;border-radius:50%;background:radial-gradient(circle,#b8fbff,#276988 70%);transform:translateX(-50%)}
.base{position:absolute;left:50%;bottom:12px;width:168px;height:32px;border-radius:999px;background:linear-gradient(180deg,rgba(109,234,255,.42),rgba(5,20,32,.32));border:1px solid rgba(130,240,255,.22);transform:translateX(-50%) translateZ(4px);box-shadow:0 0 24px rgba(86,220,255,.16)}
.label{position:absolute;bottom:24px;left:50%;transform:translateX(-50%);padding:10px 14px;border:1px solid rgba(115,232,255,.18);border-radius:999px;background:rgba(4,15,26,.52);color:rgba(217,250,255,.9);font-size:11px;font-weight:700;letter-spacing:.32em;text-transform:uppercase;backdrop-filter:blur(10px)}
.hud{position:absolute;left:32px;top:30px;width:210px;padding:16px;border-radius:18px;background:rgba(7,16,28,.48);border:1px solid rgba(116,232,255,.16);color:#d7fbff;backdrop-filter:blur(10px);box-shadow:0 20px 35px rgba(0,0,0,.16)}
.hud .eyebrow{font-size:10px;letter-spacing:.28em;text-transform:uppercase;color:#74f1ff;margin-bottom:10px}
.hud h1{font-size:20px;line-height:1.05;margin-bottom:8px}
.hud p{font-size:12px;line-height:1.55;color:rgba(215,251,255,.66)}
.hud .mode{margin-top:14px;font-size:11px;letter-spacing:.22em;text-transform:uppercase;color:var(--accent,#6af7ff)}
.hint{position:absolute;right:30px;bottom:28px;color:rgba(218,250,255,.54);font-size:11px;letter-spacing:.14em;text-transform:uppercase}
@keyframes sweep{0%,18%{transform:translateX(-125%)}48%,100%{transform:translateX(130%)}}
@keyframes pulse{0%,100%{transform:translateX(-50%) translateZ(16px) scale(1)}50%{transform:translateX(-50%) translateZ(16px) scale(1.16)}}
@keyframes corePulse{0%,100%{box-shadow:0 0 26px rgba(89,236,255,.42),inset 0 0 18px rgba(255,255,255,.35)}50%{box-shadow:0 0 42px rgba(89,236,255,.72),inset 0 0 28px rgba(255,255,255,.52)}}
@keyframes spin{from{transform:translateX(-50%) translateZ(16px) rotateX(76deg) rotateZ(0deg)}to{transform:translateX(-50%) translateZ(16px) rotateX(76deg) rotateZ(360deg)}}
@keyframes armSwing{0%,100%{transform:rotateZ(-10deg)}50%{transform:rotateZ(16deg)}}
</style></head><body>
<div class="stage" id="stage">
  <div class="glow"></div>
  <div class="grid"></div>
  <div class="hud">
    <div class="eyebrow">3D Robot</div>
    <h1>Sentinel Mode</h1>
    <p>Cursor motion steers the robot. Click anywhere to cycle between patrol, defense, and repair protocols.</p>
    <div class="mode" id="mode">Patrol Protocol</div>
  </div>
  <div class="bot-wrap" id="bot">
    <div class="robot">
      <div class="halo"></div>
      <div class="head">
        <div class="head-shell"></div>
        <div class="head-rim"></div>
        <div class="head-glass"><div class="visor"></div></div>
        <div class="eye left"></div>
        <div class="eye right"></div>
        <div class="chin"></div>
        <div class="antenna"></div>
        <div class="antenna-dot"></div>
      </div>
      <div class="torso">
        <div class="collar"></div>
        <div class="panel left"></div>
        <div class="panel right"></div>
        <div class="ring"></div>
        <div class="core"></div>
      </div>
      <div class="arm left"><div class="forearm"><div class="hand"></div></div></div>
      <div class="arm right"><div class="forearm"><div class="hand"></div></div></div>
      <div class="base"></div>
    </div>
  </div>
  <div class="label">Holographic Sentinel</div>
  <div class="hint">Move pointer • Click to change mode</div>
</div>
<script>
const stage=document.getElementById('stage');
const bot=document.getElementById('bot');
const mode=document.getElementById('mode');
const title=document.querySelector('.hud h1');
const modes=[
  {name:'Patrol Protocol',title:'Sentinel Mode',accent:'#6af7ff'},
  {name:'Defense Protocol',title:'Threat Scan',accent:'#ff8f6a'},
  {name:'Repair Protocol',title:'Maintenance Loop',accent:'#82ffb5'}
];
let modeIndex=0;
let floatTick=0;
function setMode(index){
  const next=modes[index];
  document.documentElement.style.setProperty('--accent',next.accent);
  mode.textContent=next.name;
  title.textContent=next.title;
}
setMode(0);
stage.addEventListener('mousemove',(event)=>{
  const rect=stage.getBoundingClientRect();
  const x=(event.clientX-rect.left)/rect.width;
  const y=(event.clientY-rect.top)/rect.height;
  document.documentElement.style.setProperty('--mx',(x*100)+'%');
  document.documentElement.style.setProperty('--my',(y*100)+'%');
  document.documentElement.style.setProperty('--ry',((x-.5)*32)+'deg');
  document.documentElement.style.setProperty('--rx',((.5-y)*22)+'deg');
});
stage.addEventListener('mouseleave',()=>{
  document.documentElement.style.setProperty('--ry','0deg');
  document.documentElement.style.setProperty('--rx','0deg');
});
stage.addEventListener('click',()=>{
  modeIndex=(modeIndex+1)%modes.length;
  setMode(modeIndex);
});
function animate(){
  floatTick+=0.03;
  document.documentElement.style.setProperty('--float',(Math.sin(floatTick)*10)+'px');
  requestAnimationFrame(animate);
}
animate();
</script></body></html>`,
    code: `'use client'
import { useEffect, useMemo, useRef, useState } from 'react'

type RobotMode = {
  name: string
  title: string
  accent: string
}

const MODES: RobotMode[] = [
  { name: 'Patrol Protocol', title: 'Sentinel Mode', title: 'Sentinel Mode', accent: '#6af7ff' },
  { name: 'Defense Protocol', title: 'Threat Scan', accent: '#ff8f6a' },
  { name: 'Repair Protocol', title: 'Maintenance Loop', accent: '#82ffb5' },
]

export default function HolographicSentinelRobot() {
  const stageRef = useRef<HTMLDivElement>(null)
  const [modeIndex, setModeIndex] = useState(0)
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const [floatY, setFloatY] = useState(0)

  const mode = useMemo(() => MODES[modeIndex], [modeIndex])

  useEffect(() => {
    let frame = 0
    let tick = 0

    const animate = () => {
      tick += 0.03
      setFloatY(Math.sin(tick) * 10)
      frame = window.requestAnimationFrame(animate)
    }

    animate()
    return () => window.cancelAnimationFrame(frame)
  }, [])

  const handlePointerMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = stageRef.current?.getBoundingClientRect()
    if (!rect) return

    const x = (event.clientX - rect.left) / rect.width - 0.5
    const y = (event.clientY - rect.top) / rect.height - 0.5
    setRotation({ x: -y * 18, y: x * 26 })
  }

  return (
    <div
      ref={stageRef}
      onMouseMove={handlePointerMove}
      onMouseLeave={() => setRotation({ x: 0, y: 0 })}
      onClick={() => setModeIndex((current) => (current + 1) % MODES.length)}
      className="relative h-[640px] overflow-hidden rounded-[32px] border border-white/10"
      style={{
        perspective: '1600px',
        background:
          'radial-gradient(circle at top, #17304d 0%, #07111d 38%, #03060b 100%)',
        ['--accent' as string]: mode.accent,
      }}
    >
      <div className="absolute inset-0 opacity-70" />
      <div
        className="absolute left-1/2 top-1/2"
        style={{
          transformStyle: 'preserve-3d',
          transform: \`translate(-50%, -50%) rotateX(\${rotation.x - 8}deg) rotateY(\${rotation.y}deg) translateY(\${floatY}px)\`,
        }}
      >
        {/* Layered robot markup here: head shell, glass visor, torso core, orbit ring, arms */}
      </div>
    </div>
  )
}`,
    prompt: `Create a premium interactive 3D robot component called "Holographic Sentinel Robot".
• Use CSS 3D transforms, preserve-3d, layered head/torso/arms, and a deep cinematic sci-fi background
• Cursor movement should steer the robot head + torso using rotateX / rotateY
• Add a soft floating idle motion driven by requestAnimationFrame
• Include a glowing visor sweep, pulsing antenna light, rotating chest ring, and luminous energy core
• Add a HUD panel and click interaction that cycles between 3 operating modes with different accent colors
• Keep it original and not based on a Spline embed or a Zdog character clone
• Implement as a client React component with hooks and inline style variables for the active accent`,
    likes: 0,
    author: 'Animation AI',
    featured: true,
    createdAt: '2026-05-20T09:00:00.000Z',
    updatedAt: '2026-05-20T09:00:00.000Z',
  },
  {
    _id: 'robot-orbital-mech-drone',
    slug: 'orbital-mech-drone',
    title: 'Orbital Mech Drone',
    category: 'robot',
    tag: 'canvas',
    description:
      'A pseudo-3D canvas drone with orbiting stabilizers, thrust trails, cursor steering, and click burst pulses.',
    previewCode: `<!DOCTYPE html><html><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/><style>
*{box-sizing:border-box;margin:0;padding:0}
body{overflow:hidden;background:radial-gradient(circle at top,#17212f 0%,#081018 45%,#030508 100%);font-family:Inter,system-ui,sans-serif}
canvas{display:block;width:100vw;height:100vh}
.hud{position:fixed;left:28px;top:28px;padding:16px 18px;border-radius:18px;background:rgba(5,12,20,.55);border:1px solid rgba(117,223,255,.18);color:#d6faff;backdrop-filter:blur(12px)}
.hud .eyebrow{font-size:10px;letter-spacing:.3em;text-transform:uppercase;color:#7fe8ff;margin-bottom:8px}
.hud h1{font-size:20px;line-height:1.05;margin-bottom:8px}
.hud p{font-size:12px;line-height:1.55;color:rgba(214,250,255,.66);max-width:250px}
.footer{position:fixed;right:28px;bottom:24px;font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:rgba(214,250,255,.5)}
</style></head><body>
<canvas id="c"></canvas>
<div class="hud">
  <div class="eyebrow">3D Robot</div>
  <h1>Orbital Mech Drone</h1>
  <p>Move to steer the drone. Click to emit an energy burst that pushes the stabilizers outward.</p>
</div>
<div class="footer">Move pointer • Click to pulse</div>
<script>
const canvas=document.getElementById('c');
const ctx=canvas.getContext('2d');
const pointer={x:window.innerWidth/2,y:window.innerHeight/2};
const drone={x:pointer.x,y:pointer.y,vx:0,vy:0,tiltX:0,tiltY:0,burst:0,time:0};
const particles=[];
function resize(){canvas.width=window.innerWidth;canvas.height=window.innerHeight}
function addTrail(strength){
  particles.push({
    x:drone.x+(Math.random()-.5)*26,
    y:drone.y+60+Math.random()*8,
    z:Math.random()*40,
    vx:(Math.random()-.5)*0.5,
    vy:1+Math.random()*1.8+strength*0.03,
    life:1,
    size:3+Math.random()*5
  });
}
function burst(){
  drone.burst=1;
  for(let i=0;i<24;i++){
    const angle=(i/24)*Math.PI*2;
    particles.push({
      x:drone.x+Math.cos(angle)*30,
      y:drone.y+Math.sin(angle)*22,
      z:20+Math.random()*60,
      vx:Math.cos(angle)*(1.4+Math.random()*2.4),
      vy:Math.sin(angle)*(1.4+Math.random()*2.4),
      life:1,
      size:4+Math.random()*7
    });
  }
}
window.addEventListener('resize',resize);
window.addEventListener('mousemove',(e)=>{pointer.x=e.clientX;pointer.y=e.clientY;});
window.addEventListener('mousedown',burst);
resize();
function ellipse(x,y,rx,ry,fill){
  ctx.beginPath();
  ctx.ellipse(x,y,rx,ry,0,0,Math.PI*2);
  ctx.fillStyle=fill;
  ctx.fill();
}
function drawArm(angle,radius,side){
  const spread=radius+drone.burst*26;
  const px=drone.x+Math.cos(angle)*spread;
  const py=drone.y+Math.sin(angle)*18;
  const depth=(Math.sin(angle)*0.5+0.5);
  ctx.strokeStyle='rgba(105,224,255,.55)';
  ctx.lineWidth=6-depth*2;
  ctx.beginPath();
  ctx.moveTo(drone.x,drone.y+10);
  ctx.quadraticCurveTo((drone.x+px)/2,drone.y+32+side*8,px,py);
  ctx.stroke();
  const orbSize=20+depth*10;
  const grad=ctx.createRadialGradient(px-4,py-6,2,px,py,orbSize);
  grad.addColorStop(0,'rgba(255,255,255,.95)');
  grad.addColorStop(.35,'rgba(122,241,255,.95)');
  grad.addColorStop(1,'rgba(17,111,158,.1)');
  ellipse(px,py,orbSize,orbSize*.8,grad);
  ellipse(px,py+orbSize*.72,orbSize*.95,orbSize*.24,'rgba(82,215,255,.12)');
}
function drawDrone(){
  ctx.save();
  ctx.translate(drone.x,drone.y);
  ctx.transform(1,drone.tiltX*0.12,drone.tiltY*0.16,1,0,0);
  ellipse(0,72,124,24,'rgba(63,219,255,.12)');
  const body=ctx.createLinearGradient(-70,-60,70,70);
  body.addColorStop(0,'#f1fbff');
  body.addColorStop(.3,'#9bd8ef');
  body.addColorStop(.72,'#163347');
  body.addColorStop(1,'#08111a');
  ellipse(0,0,84,58,body);
  ellipse(0,-18,62,30,'rgba(210,247,255,.58)');
  const core=ctx.createRadialGradient(0,-2,4,0,0,34);
  core.addColorStop(0,'rgba(255,255,255,.95)');
  core.addColorStop(.3,'rgba(114,245,255,.95)');
  core.addColorStop(1,'rgba(10,109,156,.12)');
  ellipse(0,0,34,34,core);
  ctx.strokeStyle='rgba(111,239,255,.28)';
  ctx.lineWidth=2;
  ctx.beginPath();
  ctx.ellipse(0,0,52,18,0,0,Math.PI*2);
  ctx.stroke();
  ellipse(-24,-10,10,12,'rgba(14,28,38,.9)');
  ellipse(24,-10,10,12,'rgba(14,28,38,.9)');
  ellipse(-24,-10,6,6,'rgba(128,245,255,.9)');
  ellipse(24,-10,6,6,'rgba(128,245,255,.9)');
  ctx.restore();
}
function drawBackground(){
  const g=ctx.createLinearGradient(0,0,0,canvas.height);
  g.addColorStop(0,'#0d1724');
  g.addColorStop(1,'#030508');
  ctx.fillStyle=g;
  ctx.fillRect(0,0,canvas.width,canvas.height);
  for(let i=0;i<18;i++){
    const y=((i+1)/19)*canvas.height;
    ctx.strokeStyle='rgba(88,210,255,.05)';
    ctx.beginPath();
    ctx.moveTo(0,y);
    ctx.lineTo(canvas.width,y);
    ctx.stroke();
  }
}
function tick(){
  requestAnimationFrame(tick);
  drone.time+=0.02;
  drone.vx+=(pointer.x-drone.x)*0.018;
  drone.vy+=(pointer.y-drone.y)*0.018;
  drone.vx*=0.87;
  drone.vy*=0.87;
  drone.x+=drone.vx;
  drone.y+=drone.vy;
  drone.tiltY=Math.max(-1,Math.min(1,drone.vx/18));
  drone.tiltX=Math.max(-1,Math.min(1,drone.vy/18));
  drone.burst*=0.92;
  if(Math.random()<0.75) addTrail(Math.abs(drone.vx)+Math.abs(drone.vy));
  drawBackground();
  const armBase=drone.time*1.35;
  drawArm(armBase,86,-1);
  drawArm(armBase+Math.PI*.5,76,1);
  drawArm(armBase+Math.PI,86,-1);
  drawArm(armBase+Math.PI*1.5,76,1);
  drawDrone();
  for(let i=particles.length-1;i>=0;i--){
    const p=particles[i];
    p.x+=p.vx;
    p.y+=p.vy;
    p.life-=0.018;
    if(p.life<=0){particles.splice(i,1);continue;}
    const glow=ctx.createRadialGradient(p.x,p.y,0,p.x,p.y,p.size+p.z*.05);
    glow.addColorStop(0,'rgba(255,255,255,'+(p.life*.95)+')');
    glow.addColorStop(.45,'rgba(125,242,255,'+(p.life*.55)+')');
    glow.addColorStop(1,'rgba(16,90,130,0)');
    ellipse(p.x,p.y,p.size+p.z*.05,p.size*.75+p.z*.025,glow);
  }
}
tick();
</script></body></html>`,
    code: `'use client'
import { useEffect, useRef } from 'react'

type Particle = {
  x: number
  y: number
  z: number
  vx: number
  vy: number
  life: number
  size: number
}

export default function OrbitalMechDrone() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const pointer = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const drone = { x: pointer.x, y: pointer.y, vx: 0, vy: 0, tiltX: 0, tiltY: 0, burst: 0, time: 0 }
    const particles: Particle[] = []
    let frame = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const handleMove = (event: MouseEvent) => {
      pointer.x = event.clientX
      pointer.y = event.clientY
    }

    const handleDown = () => {
      drone.burst = 1
    }

    const render = () => {
      frame = window.requestAnimationFrame(render)
      drone.time += 0.02
      // Drive a pseudo-3D drone with easing, orbiting stabilizers, and depth-scaled particles.
    }

    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', handleMove)
    window.addEventListener('mousedown', handleDown)
    render()

    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mousedown', handleDown)
    }
  }, [])

  return <canvas ref={canvasRef} className="block h-screen w-full" />
}`,
    prompt: `Create a highly interactive 3D-feeling robot drone called "Orbital Mech Drone".
• Render it in a full-screen canvas with a cinematic dark background and subtle horizon grid
• The drone should be a pseudo-3D floating robot core with glowing eyes, an energy reactor, and 4 orbiting stabilizer pods
• Cursor movement should steer the drone with springy easing and visual tilt/skew so it feels spatial
• Add reactive exhaust particles and a click-triggered burst pulse that pushes orbiters outward
• Use layered ellipses, gradients, depth scaling, and draw order to fake 3D depth
• Implement as a client React component using requestAnimationFrame and proper cleanup
• Keep the design distinct from Spline scene wrappers and from Zdog character anatomy`,
    likes: 0,
    author: 'Animation AI',
    featured: true,
    createdAt: '2026-05-20T09:05:00.000Z',
    updatedAt: '2026-05-20T09:05:00.000Z',
  },
]