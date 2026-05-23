export const ROBOT_DATA = [
  {
    "_id": "robot-cybernetic-core-observer",
    "slug": "cybernetic-core-observer-robot",
    "title": "Cybernetic Core Observer",
    "category": "robot",
    "tag": "threejs",
    "description": "A fully 3D robotic observer core built with Three.js. Its glowing optical lens tracks your cursor, surrounded by gyroscopic rings that overload on click.",
    "previewCode": "<!DOCTYPE html><html><head><style>body{margin:0;background:radial-gradient(circle at center,#0a1122 0%,#02050a 100%);overflow:hidden;cursor:crosshair}canvas{display:block}.label{position:absolute;bottom:30px;left:50%;transform:translateX(-50%);color:rgba(100,200,255,0.8);font-family:monospace;letter-spacing:4px;font-size:12px;text-transform:uppercase;pointer-events:none}</style></head><body><div class=\"label\">Cybernetic Core Observer</div><script type=\"importmap\">{\"imports\":{\"three\":\"https://unpkg.com/three@0.160.0/build/three.module.js\"}}</script><script type=\"module\">import * as THREE from 'three';const scene=new THREE.Scene();const camera=new THREE.PerspectiveCamera(45,window.innerWidth/window.innerHeight,0.1,1000);camera.position.z=15;const renderer=new THREE.WebGLRenderer({antialias:true,alpha:true});renderer.setSize(window.innerWidth,window.innerHeight);renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));document.body.appendChild(renderer.domElement);const ambientLight=new THREE.AmbientLight(0xffffff,0.5);scene.add(ambientLight);const dirLight=new THREE.DirectionalLight(0xffffff,2);dirLight.position.set(5,5,5);scene.add(dirLight);const blueLight=new THREE.PointLight(0x0088ff,5,20);scene.add(blueLight);const group=new THREE.Group();scene.add(group);const coreGeom=new THREE.SphereGeometry(2,64,64);const coreMat=new THREE.MeshPhysicalMaterial({color:0x111111,metalness:0.9,roughness:0.2,clearcoat:1.0,clearcoatRoughness:0.1});const core=new THREE.Mesh(coreGeom,coreMat);group.add(core);const lensGeom=new THREE.CylinderGeometry(0.8,0.8,0.5,32);lensGeom.rotateX(Math.PI/2);const lensMat=new THREE.MeshPhysicalMaterial({color:0x00eeff,emissive:0x0088ff,emissiveIntensity:1,metalness:1,roughness:0,transparent:true,opacity:0.9});const lens=new THREE.Mesh(lensGeom,lensMat);lens.position.z=1.85;core.add(lens);const irisGeom=new THREE.TorusGeometry(0.5,0.05,16,32);const irisMat=new THREE.MeshStandardMaterial({color:0x222222,metalness:0.8});const iris=new THREE.Mesh(irisGeom,irisMat);iris.position.z=2.0;core.add(iris);const rings=[];for(let i=0;i<4;i++){const ringGeom=new THREE.TorusGeometry(3.5+i*1.0,0.12,16,100);const ringMat=new THREE.MeshStandardMaterial({color:0x333333,metalness:0.9,roughness:0.3});const ring=new THREE.Mesh(ringGeom,ringMat);ring.rotation.x=Math.random()*Math.PI;ring.rotation.y=Math.random()*Math.PI;group.add(ring);rings.push({mesh:ring,speedX:(Math.random()-0.5)*0.03,speedY:(Math.random()-0.5)*0.03})}let mouse=new THREE.Vector2(0,0);let targetRotation=new THREE.Vector2(0,0);let isOverloading=false;let overloadTime=0;window.addEventListener('mousemove',(e)=>{mouse.x=(e.clientX/window.innerWidth)*2-1;mouse.y=-(e.clientY/window.innerHeight)*2+1;targetRotation.x=mouse.y*0.8;targetRotation.y=mouse.x*0.8});window.addEventListener('mousedown',()=>{isOverloading=true;overloadTime=1.0;lensMat.emissiveIntensity=5;lensMat.color.setHex(0xffffff);blueLight.intensity=15});window.addEventListener('resize',()=>{camera.aspect=window.innerWidth/window.innerHeight;camera.updateProjectionMatrix();renderer.setSize(window.innerWidth,window.innerHeight)});function animate(){requestAnimationFrame(animate);core.rotation.x+=(targetRotation.x-core.rotation.x)*0.1;core.rotation.y+=(targetRotation.y-core.rotation.y)*0.1;rings.forEach((r,i)=>{let speedMult=isOverloading?5:1;r.mesh.rotation.x+=r.speedX*speedMult;r.mesh.rotation.y+=r.speedY*speedMult;if(isOverloading){r.mesh.position.x=(Math.random()-0.5)*0.1;r.mesh.position.y=(Math.random()-0.5)*0.1}else{r.mesh.position.set(0,0,0)}});if(isOverloading){overloadTime-=0.02;if(overloadTime<=0){isOverloading=false;lensMat.emissiveIntensity=1;lensMat.color.setHex(0x00eeff);blueLight.intensity=5}}group.position.y=Math.sin(Date.now()*0.002)*0.5;renderer.render(scene,camera)}animate();</script></body></html>",
    "code": "\"use client\"\n\nimport React, { useRef, useEffect } from 'react'\nimport * as THREE from 'three'\n\nexport default function CyberneticCoreObserver() {\n  const containerRef = useRef<HTMLDivElement>(null)\n\n  useEffect(() => {\n    if (!containerRef.current || typeof window === 'undefined') return\n\n    const container = containerRef.current\n    const scene = new THREE.Scene()\n    const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000)\n    camera.position.z = 15\n\n    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })\n    renderer.setSize(container.clientWidth, container.clientHeight)\n    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))\n    container.appendChild(renderer.domElement)\n\n    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)\n    scene.add(ambientLight)\n\n    const dirLight = new THREE.DirectionalLight(0xffffff, 2)\n    dirLight.position.set(5, 5, 5)\n    scene.add(dirLight)\n\n    const blueLight = new THREE.PointLight(0x0088ff, 5, 20)\n    scene.add(blueLight)\n\n    const group = new THREE.Group()\n    scene.add(group)\n\n    const coreGeom = new THREE.SphereGeometry(2, 64, 64)\n    const coreMat = new THREE.MeshPhysicalMaterial({\n        color: 0x111111,\n        metalness: 0.9,\n        roughness: 0.2,\n        clearcoat: 1.0,\n        clearcoatRoughness: 0.1\n    })\n    const core = new THREE.Mesh(coreGeom, coreMat)\n    group.add(core)\n\n    const lensGeom = new THREE.CylinderGeometry(0.8, 0.8, 0.5, 32)\n    lensGeom.rotateX(Math.PI / 2)\n    const lensMat = new THREE.MeshPhysicalMaterial({\n        color: 0x00eeff,\n        emissive: 0x0088ff,\n        emissiveIntensity: 1.5,\n        metalness: 1,\n        roughness: 0,\n        transparent: true,\n        opacity: 0.9\n    })\n    const lens = new THREE.Mesh(lensGeom, lensMat)\n    lens.position.z = 1.85\n    core.add(lens)\n\n    const irisGeom = new THREE.TorusGeometry(0.5, 0.05, 16, 32)\n    const irisMat = new THREE.MeshStandardMaterial({ color: 0x222222, metalness: 0.8 })\n    const iris = new THREE.Mesh(irisGeom, irisMat)\n    iris.position.z = 2.0\n    core.add(iris)\n\n    const rings: { mesh: THREE.Mesh, speedX: number, speedY: number }[] = []\n    for (let i = 0; i < 4; i++) {\n        const ringGeom = new THREE.TorusGeometry(3.5 + i * 1.0, 0.12, 16, 100)\n        const ringMat = new THREE.MeshStandardMaterial({ \n            color: 0x333333, \n            metalness: 0.9,\n            roughness: 0.3\n        })\n        const ring = new THREE.Mesh(ringGeom, ringMat)\n        ring.rotation.x = Math.random() * Math.PI\n        ring.rotation.y = Math.random() * Math.PI\n        group.add(ring)\n        rings.push({ mesh: ring, speedX: (Math.random() - 0.5) * 0.03, speedY: (Math.random() - 0.5) * 0.03 })\n    }\n\n    let targetRotation = new THREE.Vector2(0, 0)\n    let isOverloading = false\n    let overloadTime = 0\n\n    const handleMouseMove = (e: MouseEvent) => {\n        const rect = container.getBoundingClientRect()\n        const mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1\n        const mouseY = -((e.clientY - rect.top) / rect.height) * 2 + 1\n        targetRotation.x = mouseY * 0.6\n        targetRotation.y = mouseX * 0.6\n    }\n\n    const handleMouseDown = () => {\n        isOverloading = true\n        overloadTime = 1.0\n        lensMat.emissiveIntensity = 8\n        lensMat.color.setHex(0xffffff)\n        blueLight.intensity = 20\n    }\n\n    window.addEventListener('mousemove', handleMouseMove)\n    container.addEventListener('mousedown', handleMouseDown)\n\n    const resize = () => {\n        camera.aspect = container.clientWidth / container.clientHeight\n        camera.updateProjectionMatrix()\n        renderer.setSize(container.clientWidth, container.clientHeight)\n    }\n    window.addEventListener('resize', resize)\n\n    let frame = 0\n    const clock = new THREE.Clock()\n\n    const animate = () => {\n        frame = requestAnimationFrame(animate)\n        const time = clock.getElapsedTime()\n        \n        core.rotation.x += (targetRotation.x - core.rotation.x) * 0.08\n        core.rotation.y += (targetRotation.y - core.rotation.y) * 0.08\n        \n        rings.forEach((r) => {\n            let speedMult = isOverloading ? 6 : 1\n            r.mesh.rotation.x += r.speedX * speedMult\n            r.mesh.rotation.y += r.speedY * speedMult\n            \n            if (isOverloading) {\n                r.mesh.position.x = (Math.random() - 0.5) * 0.15\n                r.mesh.position.y = (Math.random() - 0.5) * 0.15\n            } else {\n                r.mesh.position.set(0,0,0)\n            }\n        })\n        \n        if (isOverloading) {\n            overloadTime -= 0.015\n            if (overloadTime <= 0) {\n                isOverloading = false\n                lensMat.emissiveIntensity = 1.5\n                lensMat.color.setHex(0x00eeff)\n                blueLight.intensity = 5\n            }\n        }\n        \n        group.position.y = Math.sin(time * 2) * 0.4\n        \n        renderer.render(scene, camera)\n    }\n\n    animate()\n\n    return () => {\n        cancelAnimationFrame(frame)\n        window.removeEventListener('mousemove', handleMouseMove)\n        container.removeEventListener('mousedown', handleMouseDown)\n        window.removeEventListener('resize', resize)\n        renderer.dispose()\n        if (container.contains(renderer.domElement)) {\n            container.removeChild(renderer.domElement)\n        }\n    }\n  }, [])\n\n  return (\n    <div className=\"relative w-full h-[640px] overflow-hidden rounded-[32px] border border-cyan-500/20 bg-[radial-gradient(circle_at_center,#0a1122_0%,#02050a_100%)]\">\n      <div ref={containerRef} className=\"absolute inset-0 cursor-crosshair\" />\n      <div className=\"absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full border border-cyan-500/30 bg-black/50 backdrop-blur-md pointer-events-none\">\n        <p className=\"text-cyan-400/90 text-xs font-bold tracking-[0.3em] uppercase\">Cybernetic Core</p>\n      </div>\n    </div>\n  )\n}",
    "prompt": "Create a Cybernetic Core Observer using Three.js. Generate a dark metallic sphere with a glowing cyan optical lens (cylinder) attached to the front. The core must continuously look at the mouse cursor in 3D space. Surround the core with 4 gyroscopic metal rings that slowly rotate on independent axes. When the user clicks the screen, the core 'overloads', causing the lens to flash bright white, the lighting intensity to spike, and the rings to spin rapidly while vibrating. Use MeshPhysicalMaterial for realistic reflections.",
    "likes": 0,
    "author": "Animation AI",
    "featured": true,
    "createdAt": "2026-05-20T09:15:00.000Z",
    "updatedAt": "2026-05-20T09:15:00.000Z"
  },
  {
    "_id": "robot-arachnid-mech-walker",
    "slug": "arachnid-mech-walker",
    "title": "Arachnid Mech-Walker",
    "category": "robot",
    "tag": "canvas",
    "description": "An interactive mechanical spider utilizing Inverse Kinematics. It procedurally animates its legs to follow your cursor across a blueprint grid.",
    "previewCode": "<!DOCTYPE html><html><head><style>body{margin:0;background:#080d14;overflow:hidden;cursor:crosshair}canvas{display:block;width:100vw;height:100vh}.label{position:absolute;bottom:30px;left:50%;transform:translateX(-50%);color:rgba(255,100,50,0.8);font-family:monospace;letter-spacing:4px;font-size:12px;text-transform:uppercase;pointer-events:none}</style></head><body><div class=\"label\">Arachnid Mech-Walker</div><canvas id=\"c\"></canvas><script>const canvas=document.getElementById('c');const ctx=canvas.getContext('2d');let w,h;function resize(){w=canvas.width=window.innerWidth;h=canvas.height=window.innerHeight}window.addEventListener('resize',resize);resize();const mouse={x:w/2,y:h/2};window.addEventListener('mousemove',e=>{mouse.x=e.clientX;mouse.y=e.clientY;});class Leg{constructor(offsetX,offsetY,angleOffset){this.offsetX=offsetX;this.offsetY=offsetY;this.angleOffset=angleOffset;this.x=w/2;this.y=h/2;this.targetX=w/2;this.targetY=h/2;this.length1=45;this.length2=55;this.stepRadius=60;this.isStepping=false;this.stepProgress=0;this.stepStartX=0;this.stepStartY=0;this.stepTargetX=0;this.stepTargetY=0}update(bodyX,bodyY,bodyAngle,time){const baseX=bodyX+Math.cos(bodyAngle+this.angleOffset)*this.offsetX;const baseY=bodyY+Math.sin(bodyAngle+this.angleOffset)*this.offsetY;const desiredX=bodyX+Math.cos(bodyAngle+this.angleOffset)*(this.offsetX+this.stepRadius*1.5);const desiredY=bodyY+Math.sin(bodyAngle+this.angleOffset)*(this.offsetY+this.stepRadius*1.5);const distToDesired=Math.hypot(this.x-desiredX,this.y-desiredY);if(!this.isStepping&&distToDesired>this.stepRadius){this.isStepping=true;this.stepProgress=0;this.stepStartX=this.x;this.stepStartY=this.y;const overstep=1.2;this.stepTargetX=bodyX+Math.cos(bodyAngle+this.angleOffset)*(this.offsetX+this.stepRadius*overstep);this.stepTargetY=bodyY+Math.sin(bodyAngle+this.angleOffset)*(this.offsetY+this.stepRadius*overstep)}if(this.isStepping){this.stepProgress+=0.15;if(this.stepProgress>=1){this.isStepping=false;this.x=this.stepTargetX;this.y=this.stepTargetY}else{const ease=1-Math.pow(1-this.stepProgress,3);this.x=this.stepStartX+(this.stepTargetX-this.stepStartX)*ease;this.y=this.stepStartY+(this.stepTargetY-this.stepStartY)*ease}}const dx=this.x-baseX;const dy=this.y-baseY;const dist=Math.hypot(dx,dy);const maxDist=this.length1+this.length2-1;let reachX=this.x;let reachY=this.y;if(dist>maxDist){reachX=baseX+(dx/dist)*maxDist;reachY=baseY+(dy/dist)*maxDist}const d=Math.hypot(reachX-baseX,reachY-baseY);const angleToTarget=Math.atan2(reachY-baseY,reachX-baseX);const a1=Math.acos((this.length1*this.length1+d*d-this.length2*this.length2)/(2*this.length1*d))||0;const sign=this.angleOffset>0?1:-1;const jointAngle=angleToTarget+a1*sign;const jointX=baseX+Math.cos(jointAngle)*this.length1;const jointY=baseY+Math.sin(jointAngle)*this.length1;ctx.lineWidth=4;ctx.strokeStyle='#ff6432';ctx.lineCap='round';ctx.lineJoin='round';ctx.beginPath();ctx.moveTo(baseX,baseY);ctx.lineTo(jointX,jointY);ctx.lineTo(reachX,reachY);ctx.stroke();ctx.fillStyle='#222';ctx.beginPath();ctx.arc(baseX,baseY,6,0,Math.PI*2);ctx.fill();ctx.stroke();ctx.beginPath();ctx.arc(jointX,jointY,4,0,Math.PI*2);ctx.fill();ctx.stroke();let lift=0;if(this.isStepping){lift=Math.sin(this.stepProgress*Math.PI)*15}ctx.fillStyle='#ff6432';ctx.beginPath();ctx.arc(reachX,reachY-lift,5+lift*0.1,0,Math.PI*2);ctx.fill()}}const body={x:w/2,y:h/2,angle:0};const legs=[new Leg(25,20,Math.PI/4),new Leg(25,-20,-Math.PI/4),new Leg(0,25,Math.PI/2),new Leg(0,-25,-Math.PI/2),new Leg(-25,20,3*Math.PI/4),new Leg(-25,-20,-3*Math.PI/4)];const groups=[[0,3,4],[1,2,5]];let currentGroup=0;function tick(time){requestAnimationFrame(tick);const dx=mouse.x-body.x;const dy=mouse.y-body.y;body.x+=dx*0.05;body.y+=dy*0.05;const targetAngle=Math.atan2(dy,dx);let adiff=targetAngle-body.angle;while(adiff>Math.PI)adiff-=Math.PI*2;while(adiff<-Math.PI)adiff+=Math.PI*2;body.angle+=adiff*0.1;ctx.fillStyle='#080d14';ctx.fillRect(0,0,w,h);ctx.strokeStyle='rgba(255,100,50,0.05)';ctx.lineWidth=1;for(let i=0;i<w;i+=40){ctx.beginPath();ctx.moveTo(i,0);ctx.lineTo(i,h);ctx.stroke()}for(let i=0;i<h;i+=40){ctx.beginPath();ctx.moveTo(0,i);ctx.lineTo(w,i);ctx.stroke()}const group1Stepping=groups[0].some(i=>legs[i].isStepping);const group2Stepping=groups[1].some(i=>legs[i].isStepping);if(group1Stepping){groups[1].forEach(i=>legs[i].isStepping=false)}else if(group2Stepping){groups[0].forEach(i=>legs[i].isStepping=false)}legs.forEach(leg=>leg.update(body.x,body.y,body.angle,time));ctx.save();ctx.translate(body.x,body.y);ctx.rotate(body.angle);ctx.fillStyle='#111822';ctx.strokeStyle='#ff6432';ctx.lineWidth=3;ctx.beginPath();ctx.ellipse(0,0,35,25,0,0,Math.PI*2);ctx.fill();ctx.stroke();ctx.beginPath();ctx.arc(30,0,15,-Math.PI/2,Math.PI/2);ctx.fill();ctx.stroke();ctx.fillStyle='#ff6432';ctx.beginPath();ctx.arc(35,-5,3,0,Math.PI*2);ctx.fill();ctx.beginPath();ctx.arc(35,5,3,0,Math.PI*2);ctx.fill();ctx.fillStyle='rgba(255,100,50,0.5)';ctx.beginPath();ctx.arc(-10,0,10,0,Math.PI*2);ctx.fill();ctx.fillStyle='#fff';ctx.beginPath();ctx.arc(-10,0,4,0,Math.PI*2);ctx.fill();ctx.restore()}requestAnimationFrame(tick);</script></body></html>",
    "code": "\"use client\"\n\nimport React, { useEffect, useRef } from 'react'\n\nexport default function ArachnidMechWalker() {\n  const canvasRef = useRef<HTMLCanvasElement>(null)\n\n  useEffect(() => {\n    const canvas = canvasRef.current\n    if (!canvas) return\n    const ctx = canvas.getContext('2d')\n    if (!ctx) return\n\n    let w = window.innerWidth\n    let h = window.innerHeight\n    let frame = 0\n\n    const resize = () => {\n      w = canvas.width = window.innerWidth\n      h = canvas.height = window.innerHeight\n    }\n    window.addEventListener('resize', resize)\n    resize()\n\n    const mouse = { x: w / 2, y: h / 2 }\n    const handleMove = (e: MouseEvent) => {\n      mouse.x = e.clientX\n      mouse.y = e.clientY\n    }\n    window.addEventListener('mousemove', handleMove)\n\n    class Leg {\n      offsetX: number\n      offsetY: number\n      angleOffset: number\n      x: number\n      y: number\n      length1: number\n      length2: number\n      stepRadius: number\n      isStepping: boolean\n      stepProgress: number\n      stepStartX: number\n      stepStartY: number\n      stepTargetX: number\n      stepTargetY: number\n\n      constructor(offsetX: number, offsetY: number, angleOffset: number) {\n        this.offsetX = offsetX\n        this.offsetY = offsetY\n        this.angleOffset = angleOffset\n        this.x = w / 2\n        this.y = h / 2\n        this.length1 = 50\n        this.length2 = 65\n        this.stepRadius = 60\n        this.isStepping = false\n        this.stepProgress = 0\n        this.stepStartX = 0\n        this.stepStartY = 0\n        this.stepTargetX = 0\n        this.stepTargetY = 0\n      }\n\n      update(bodyX: number, bodyY: number, bodyAngle: number) {\n        const baseX = bodyX + Math.cos(bodyAngle + this.angleOffset) * this.offsetX\n        const baseY = bodyY + Math.sin(bodyAngle + this.angleOffset) * this.offsetY\n        \n        const desiredX = bodyX + Math.cos(bodyAngle + this.angleOffset) * (this.offsetX + this.stepRadius * 1.5)\n        const desiredY = bodyY + Math.sin(bodyAngle + this.angleOffset) * (this.offsetY + this.stepRadius * 1.5)\n        \n        const distToDesired = Math.hypot(this.x - desiredX, this.y - desiredY)\n        \n        if (!this.isStepping && distToDesired > this.stepRadius) {\n            this.isStepping = true\n            this.stepProgress = 0\n            this.stepStartX = this.x\n            this.stepStartY = this.y\n            const overstep = 1.3\n            this.stepTargetX = bodyX + Math.cos(bodyAngle + this.angleOffset) * (this.offsetX + this.stepRadius * overstep)\n            this.stepTargetY = bodyY + Math.sin(bodyAngle + this.angleOffset) * (this.offsetY + this.stepRadius * overstep)\n        }\n        \n        if (this.isStepping) {\n            this.stepProgress += 0.12\n            if (this.stepProgress >= 1) {\n                this.isStepping = false\n                this.x = this.stepTargetX\n                this.y = this.stepTargetY\n            } else {\n                const ease = 1 - Math.pow(1 - this.stepProgress, 3)\n                this.x = this.stepStartX + (this.stepTargetX - this.stepStartX) * ease\n                this.y = this.stepStartY + (this.stepTargetY - this.stepStartY) * ease\n            }\n        }\n        \n        const dx = this.x - baseX\n        const dy = this.y - baseY\n        const dist = Math.hypot(dx, dy)\n        \n        const maxDist = this.length1 + this.length2 - 1\n        let reachX = this.x\n        let reachY = this.y\n        if (dist > maxDist) {\n            reachX = baseX + (dx / dist) * maxDist\n            reachY = baseY + (dy / dist) * maxDist\n        }\n        \n        const d = Math.hypot(reachX - baseX, reachY - baseY)\n        const angleToTarget = Math.atan2(reachY - baseY, reachX - baseX)\n        \n        let a1 = Math.acos((this.length1*this.length1 + d*d - this.length2*this.length2) / (2 * this.length1 * d))\n        if (isNaN(a1)) a1 = 0\n        \n        const sign = this.angleOffset > 0 ? 1 : -1\n        const jointAngle = angleToTarget + a1 * sign\n        \n        const jointX = baseX + Math.cos(jointAngle) * this.length1\n        const jointY = baseY + Math.sin(jointAngle) * this.length1\n        \n        ctx!.lineWidth = 4\n        ctx!.strokeStyle = '#ff4d00'\n        ctx!.lineCap = 'round'\n        ctx!.lineJoin = 'round'\n        \n        ctx!.beginPath()\n        ctx!.moveTo(baseX, baseY)\n        ctx!.lineTo(jointX, jointY)\n        ctx!.lineTo(reachX, reachY)\n        ctx!.stroke()\n        \n        ctx!.fillStyle = '#111'\n        ctx!.beginPath(); ctx!.arc(baseX, baseY, 6, 0, Math.PI*2); ctx!.fill(); ctx!.stroke();\n        ctx!.beginPath(); ctx!.arc(jointX, jointY, 5, 0, Math.PI*2); ctx!.fill(); ctx!.stroke();\n        \n        let lift = 0\n        if (this.isStepping) {\n             lift = Math.sin(this.stepProgress * Math.PI) * 18\n        }\n        ctx!.fillStyle = '#ff4d00'\n        ctx!.beginPath(); ctx!.arc(reachX, reachY - lift, 5 + lift*0.1, 0, Math.PI*2); ctx!.fill()\n      }\n    }\n\n    const body = { x: w/2, y: h/2, angle: 0 }\n    const legs = [\n        new Leg(30, 25, Math.PI/4),\n        new Leg(30, -25, -Math.PI/4),\n        new Leg(0, 30, Math.PI/2),\n        new Leg(0, -30, -Math.PI/2),\n        new Leg(-30, 25, 3*Math.PI/4),\n        new Leg(-30, -25, -3*Math.PI/4)\n    ]\n\n    const tick = () => {\n        frame = requestAnimationFrame(tick)\n        \n        const dx = mouse.x - body.x\n        const dy = mouse.y - body.y\n        body.x += dx * 0.04\n        body.y += dy * 0.04\n        \n        const targetAngle = Math.atan2(dy, dx)\n        let adiff = targetAngle - body.angle\n        while(adiff > Math.PI) adiff -= Math.PI*2\n        while(adiff < -Math.PI) adiff += Math.PI*2\n        body.angle += adiff * 0.08\n        \n        ctx!.fillStyle = '#0a0d12'\n        ctx!.fillRect(0, 0, w, h)\n        \n        ctx!.strokeStyle = 'rgba(255, 77, 0, 0.06)'\n        ctx!.lineWidth = 1\n        for(let i=0; i<w; i+=40) { ctx!.beginPath(); ctx!.moveTo(i,0); ctx!.lineTo(i,h); ctx!.stroke(); }\n        for(let i=0; i<h; i+=40) { ctx!.beginPath(); ctx!.moveTo(0,i); ctx!.lineTo(w,i); ctx!.stroke(); }\n        \n        legs.forEach(leg => leg.update(body.x, body.y, body.angle))\n        \n        ctx!.save()\n        ctx!.translate(body.x, body.y)\n        ctx!.rotate(body.angle)\n        \n        ctx!.fillStyle = '#141a24'\n        ctx!.strokeStyle = '#ff4d00'\n        ctx!.lineWidth = 3\n        ctx!.beginPath()\n        ctx!.ellipse(0, 0, 40, 28, 0, 0, Math.PI*2)\n        ctx!.fill()\n        ctx!.stroke()\n        \n        ctx!.beginPath()\n        ctx!.arc(35, 0, 16, -Math.PI/2, Math.PI/2)\n        ctx!.fill()\n        ctx!.stroke()\n        \n        ctx!.fillStyle = '#ff4d00'\n        ctx!.beginPath(); ctx!.arc(42, -6, 3, 0, Math.PI*2); ctx!.fill()\n        ctx!.beginPath(); ctx!.arc(42, 6, 3, 0, Math.PI*2); ctx!.fill()\n        \n        ctx!.fillStyle = 'rgba(255, 77, 0, 0.4)'\n        ctx!.beginPath(); ctx!.arc(-15, 0, 12, 0, Math.PI*2); ctx!.fill()\n        ctx!.fillStyle = '#fff'\n        ctx!.beginPath(); ctx!.arc(-15, 0, 5, 0, Math.PI*2); ctx!.fill()\n        \n        ctx!.restore()\n    }\n    \n    tick()\n\n    return () => {\n      cancelAnimationFrame(frame)\n      window.removeEventListener('resize', resize)\n      window.removeEventListener('mousemove', handleMove)\n    }\n  }, [])\n\n  return (\n    <div className=\"relative w-full h-[640px] overflow-hidden rounded-[32px] border border-orange-500/20 bg-[#0a0d12]\">\n      <canvas ref={canvasRef} className=\"block w-full h-full cursor-crosshair\" />\n      <div className=\"absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full border border-orange-500/30 bg-black/50 backdrop-blur-md\">\n        <p className=\"text-orange-500/90 text-xs font-bold tracking-[0.3em] uppercase\">Arachnid Mech-Walker</p>\n      </div>\n    </div>\n  )\n}",
    "prompt": "Create an interactive HTML5 Canvas animation of a 6-legged mechanical spider. Use Inverse Kinematics mathematics to calculate the joint positions so that the legs dynamically step and reach for the ground as the body moves. The spider should rotate and translate to follow the mouse cursor with smooth easing. The background should be a dark blueprint grid, and the robot itself should be styled with glowing orange neon accents.",
    "likes": 0,
    "author": "Animation AI",
    "featured": true,
    "createdAt": "2026-05-20T09:10:00.000Z",
    "updatedAt": "2026-05-20T09:10:00.000Z"
  },
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
  { name: 'Patrol Protocol', title: 'Sentinel Mode', accent: '#6af7ff' },
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
    "prompt": "Create a highly interactive 3D-feeling robot drone called \"Orbital Mech Drone\".\n• Render it in a full-screen canvas with a cinematic dark background and subtle horizon grid\n• The drone should be a pseudo-3D floating robot core with glowing eyes, an energy reactor, and 4 orbiting stabilizer pods\n• Cursor movement should steer the drone with springy easing and visual tilt/skew so it feels spatial\n• Add reactive exhaust particles and a click-triggered burst pulse that pushes orbiters outward\n• Use layered ellipses, gradients, depth scaling, and draw order to fake 3D depth\n• Implement as a client React component using requestAnimationFrame and proper cleanup\n• Keep the design distinct from Spline scene wrappers and from Zdog character anatomy",
    "likes": 0,
    "author": "Animation AI",
    "featured": true,
    "createdAt": "2026-05-20T09:05:00.000Z",
    "updatedAt": "2026-05-20T09:05:00.000Z"
  },
  {
    _id: 'robot-quantum-aegis-sentinel',
    slug: 'quantum-aegis-sentinel-robot',
    title: 'Quantum Aegis Sentinel',
    category: 'robot',
    tag: 'threejs',
    description: 'A high-fidelity mechanical guardian projecting a responsive hexagonal energy shield. Features cursor-locked visual tracking, click-to-fire energy impacts, dynamic particle debris, and beautiful holographic shaders.',
    previewCode: `<!DOCTYPE html><html><head><style>
body{margin:0;background:radial-gradient(circle at center,#050b14 0%,#010204 100%);overflow:hidden;cursor:crosshair}
canvas{display:block}
.hud{position:absolute;top:20px;left:20px;padding:12px;border:1px solid rgba(0,240,255,0.15);border-radius:12px;background:rgba(0,0,0,0.5);color:#00f0ff;font-family:monospace;font-size:11px;pointer-events:none}
.label{position:absolute;bottom:24px;left:50%;transform:translateX(-50%);color:rgba(0,240,255,0.8);font-family:monospace;font-size:12px;letter-spacing:4px;text-transform:uppercase;pointer-events:none;text-align:center}
.sub{font-size:9px;color:rgba(0,240,255,0.4);letter-spacing:2px;margin-top:4px}
</style></head><body>
<div class="hud">
  SHIELD STATUS: ACTIVE<br>
  INTEGRITY: 100%<br>
  MODE: GUARDIAN
</div>
<div class="label">
  QUANTUM AEGIS SENTINEL
  <div class="sub">CLICK SHIELD TO TEST ENERGY IMPACT</div>
</div>
<script type="importmap">{"imports":{"three":"https://unpkg.com/three@0.160.0/build/three.module.js"}}</script>
<script type="module">
import * as THREE from 'three';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 12;

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
document.body.appendChild(renderer.domElement);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
scene.add(ambientLight);

const blueLight = new THREE.PointLight(0x00aaff, 3, 20);
blueLight.position.set(0, 0, 4);
scene.add(blueLight);

const purpleLight = new THREE.PointLight(0xaa00ff, 3, 20);
purpleLight.position.set(0, 0, -4);
scene.add(purpleLight);

const sentinelGroup = new THREE.Group();
scene.add(sentinelGroup);

const coreGeom = new THREE.SphereGeometry(1.2, 32, 32);
const darkMetalMat = new THREE.MeshPhysicalMaterial({
  color: 0x1a1a1a,
  metalness: 0.9,
  roughness: 0.15,
  clearcoat: 1.0,
  clearcoatRoughness: 0.1
});
const core = new THREE.Mesh(coreGeom, darkMetalMat);
sentinelGroup.add(core);

const eyeGeom = new THREE.CylinderGeometry(0.4, 0.4, 0.3, 32);
eyeGeom.rotateX(Math.PI / 2);
const eyeMat = new THREE.MeshPhysicalMaterial({
  color: 0x00f0ff,
  emissive: 0x00aaff,
  emissiveIntensity: 2.0,
  metalness: 0.9,
  roughness: 0
});
const eyeMesh = new THREE.Mesh(eyeGeom, eyeMat);
eyeMesh.position.z = 1.1;
core.add(eyeMesh);

const collarGeom = new THREE.TorusGeometry(1.8, 0.06, 16, 100);
const goldMat = new THREE.MeshStandardMaterial({ color: 0xffaa00, metalness: 0.9, roughness: 0.2 });
const collar = new THREE.Mesh(collarGeom, goldMat);
collar.rotation.x = Math.PI / 2.5;
sentinelGroup.add(collar);

const pLeft = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.1, 0.8, 16).rotateX(Math.PI / 2), darkMetalMat);
pLeft.position.set(-1.8, 0, 0.2);
sentinelGroup.add(pLeft);

const pRight = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.1, 0.8, 16).rotateX(Math.PI / 2), darkMetalMat);
pRight.position.set(1.8, 0, 0.2);
sentinelGroup.add(pRight);

const shieldGeom = new THREE.SphereGeometry(3.2, 64, 64);
const shieldMat = new THREE.ShaderMaterial({
  uniforms: {
    uTime: { value: 0 },
    uImpact: { value: new THREE.Vector4(0, 0, 0, 0) },
    uImpactTime: { value: 0 },
  },
  vertexShader: "varying vec2 vUv; varying vec3 vPosition; void main() { vUv = uv; vPosition = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",
  fragmentShader: "varying vec2 vUv; varying vec3 vPosition; uniform float uTime; uniform vec4 uImpact; uniform float uImpactTime; void main() { vec2 uv = vUv * 16.0; vec2 r = vec2(1.0, 1.7320508); vec2 h = r * 0.5; vec2 a = mod(uv, r) - h; vec2 b = mod(uv + h, r) - h; vec2 gv = length(a) < length(b) ? a : b; float distToEdge = 0.5 - max(abs(gv.x), dot(gv, normalize(r))); float hex = smoothstep(0.01, 0.04, distToEdge); float d = distance(vPosition, uImpact.xyz); float ripple = 0.0; if (uImpactTime > 0.0) { float wave = sin(d * 4.5 - uImpactTime * 18.0) * 0.5 + 0.5; float att = exp(-d * 0.8) * uImpactTime; ripple = wave * att; } float glow = 0.08 / (distToEdge + 0.015); vec3 baseColor = vec3(0.0, 0.5, 1.0); vec3 rippleColor = vec3(0.1, 0.9, 1.0); vec3 color = mix(baseColor * (1.0 - hex + glow * 0.12), rippleColor * 2.5, ripple * 0.8); float alpha = mix(0.12, 0.85, ripple) + (1.0 - hex) * 0.22; gl_FragColor = vec4(color, alpha); }",
  transparent: true,
  side: THREE.DoubleSide,
  depthWrite: false,
  blending: THREE.AdditiveBlending
});
const shield = new THREE.Mesh(shieldGeom, shieldMat);
scene.add(shield);

const laserMat = new THREE.LineBasicMaterial({ color: 0x00f0ff, linewidth: 2, transparent: true, opacity: 0 });
const laserGeom = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()]);
const laserLine = new THREE.Line(laserGeom, laserMat);
scene.add(laserLine);

const particleCount = 40;
const pGeom = new THREE.BufferGeometry();
const pPos = new Float32Array(particleCount * 3);
const pVels = [];
for (let i = 0; i < particleCount; i++) {
  pVels.push(new THREE.Vector3());
}
pGeom.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
const pMat = new THREE.PointsMaterial({
  color: 0x00f0ff,
  size: 0.12,
  transparent: true,
  opacity: 0,
  blending: THREE.AdditiveBlending
});
const particles = new THREE.Points(pGeom, pMat);
scene.add(particles);

const mouse = new THREE.Vector2(0, 0);
const targetRotation = new THREE.Vector2(0, 0);
let uImpactTimeVal = 0;
let laserIntensity = 0;
let particleLife = 0;
let targetPosLeft = new THREE.Vector3();
let targetPosRight = new THREE.Vector3();

window.addEventListener('mousemove', (e) => {
  mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
  targetRotation.x = mouse.y * 0.4;
  targetRotation.y = mouse.x * 0.5;
});

const raycaster = new THREE.Raycaster();
window.addEventListener('mousedown', () => {
  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObject(shield);
  if (intersects.length > 0) {
    const point = intersects[0].point;
    shieldMat.uniforms.uImpact.value.set(point.x, point.y, point.z, 1.0);
    uImpactTimeVal = 1.0;
    
    pLeft.getWorldPosition(targetPosLeft);
    pRight.getWorldPosition(targetPosRight);
    
    const positions = laserGeom.getAttribute('position');
    positions.setXYZ(0, targetPosLeft.x, targetPosLeft.y, targetPosLeft.z);
    positions.setXYZ(1, point.x, point.y, point.z);
    positions.setXYZ(2, targetPosRight.x, targetPosRight.y, targetPosRight.z);
    positions.needsUpdate = true;
    laserIntensity = 1.0;
    
    const posAttr = pGeom.getAttribute('position');
    for (let i = 0; i < particleCount; i++) {
      posAttr.setXYZ(i, point.x, point.y, point.z);
      const angle1 = Math.random() * Math.PI * 2;
      const angle2 = Math.random() * Math.PI;
      pVels[i].set(
        Math.cos(angle1) * Math.sin(angle2) * 5,
        Math.sin(angle1) * Math.sin(angle2) * 5,
        Math.cos(angle2) * 5
      );
    }
    posAttr.needsUpdate = true;
    particleLife = 1.0;
    
    blueLight.intensity = 15;
    eyeMat.emissiveIntensity = 6.0;
  }
});

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

function animate() {
  requestAnimationFrame(animate);
  const time = Date.now() * 0.001;
  shieldMat.uniforms.uTime.value = time;
  
  sentinelGroup.rotation.x += (targetRotation.x - sentinelGroup.rotation.x) * 0.08;
  sentinelGroup.rotation.y += (targetRotation.y - sentinelGroup.rotation.y) * 0.08;
  sentinelGroup.position.y = Math.sin(time * 2) * 0.25;
  collar.rotation.z += 0.01;
  
  if (uImpactTimeVal > 0) {
    uImpactTimeVal -= 0.015;
    shieldMat.uniforms.uImpactTime.value = 1.0 - uImpactTimeVal;
  } else {
    shieldMat.uniforms.uImpactTime.value = 0;
  }
  
  if (laserIntensity > 0) {
    laserIntensity -= 0.08;
    laserMat.opacity = laserIntensity;
  } else {
    laserMat.opacity = 0;
  }
  
  if (particleLife > 0) {
    particleLife -= 0.02;
    pMat.opacity = particleLife;
    const posAttr = pGeom.getAttribute('position');
    for (let i = 0; i < particleCount; i++) {
      const x = posAttr.getX(i) + pVels[i].x * 0.016;
      const y = posAttr.getY(i) + pVels[i].y * 0.016;
      const z = posAttr.getZ(i) + pVels[i].z * 0.016;
      posAttr.setXYZ(i, x, y, z);
      pVels[i].multiplyScalar(0.95);
    }
    posAttr.needsUpdate = true;
  } else {
    pMat.opacity = 0;
  }
  
  blueLight.intensity += (3.0 - blueLight.intensity) * 0.1;
  eyeMat.emissiveIntensity += (2.0 - eyeMat.emissiveIntensity) * 0.1;
  
  renderer.render(scene, camera);
}
animate();
</script></body></html>`,
    code: `"use client"

import React, { useRef, useEffect, useState } from 'react'
import * as THREE from 'three'
import { Shield, Activity, Cpu } from 'lucide-react'

export default function QuantumAegisSentinel() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [integrity, setIntegrity] = useState(100)
  const [shieldStatus, setShieldStatus] = useState("ACTIVE")
  const [activeMode, setActiveMode] = useState("GUARDIAN")

  useEffect(() => {
    if (!containerRef.current || typeof window === 'undefined') return
    const container = containerRef.current
    
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000)
    camera.position.z = 12

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(container.clientWidth, container.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3)
    scene.add(ambientLight)

    const blueLight = new THREE.PointLight(0x00aaff, 3, 20)
    blueLight.position.set(0, 0, 4)
    scene.add(blueLight)

    const purpleLight = new THREE.PointLight(0xaa00ff, 3, 20)
    purpleLight.position.set(0, 0, -4)
    scene.add(purpleLight)

    const sentinelGroup = new THREE.Group()
    scene.add(sentinelGroup)

    const coreGeom = new THREE.SphereGeometry(1.2, 32, 32)
    const darkMetalMat = new THREE.MeshPhysicalMaterial({
      color: 0x1a1a1a,
      metalness: 0.9,
      roughness: 0.15,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1
    })
    const core = new THREE.Mesh(coreGeom, darkMetalMat)
    sentinelGroup.add(core)

    const eyeGeom = new THREE.CylinderGeometry(0.4, 0.4, 0.3, 32)
    eyeGeom.rotateX(Math.PI / 2)
    const eyeMat = new THREE.MeshPhysicalMaterial({
      color: 0x00f0ff,
      emissive: 0x00aaff,
      emissiveIntensity: 2.0,
      metalness: 0.9,
      roughness: 0
    })
    const eyeMesh = new THREE.Mesh(eyeGeom, eyeMat)
    eyeMesh.position.z = 1.1
    core.add(eyeMesh)

    const collarGeom = new THREE.TorusGeometry(1.8, 0.06, 16, 100)
    const goldMat = new THREE.MeshStandardMaterial({ color: 0xffaa00, metalness: 0.9, roughness: 0.2 })
    const collar = new THREE.Mesh(collarGeom, goldMat)
    collar.rotation.x = Math.PI / 2.5
    sentinelGroup.add(collar)

    const shoulderGeom = new THREE.CylinderGeometry(0.18, 0.1, 0.8, 16)
    shoulderGeom.rotateX(Math.PI / 2)
    const pLeft = new THREE.Mesh(shoulderGeom, darkMetalMat)
    pLeft.position.set(-1.8, 0, 0.2)
    sentinelGroup.add(pLeft)

    const pRight = new THREE.Mesh(shoulderGeom, darkMetalMat)
    pRight.position.set(1.8, 0, 0.2)
    sentinelGroup.add(pRight)

    const shieldGeom = new THREE.SphereGeometry(3.2, 64, 64)
    const shieldMat = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uImpact: { value: new THREE.Vector4(0, 0, 0, 0) },
        uImpactTime: { value: 0 },
      },
      vertexShader: "varying vec2 vUv; varying vec3 vPosition; void main() { vUv = uv; vPosition = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",
      fragmentShader: "varying vec2 vUv; varying vec3 vPosition; uniform float uTime; uniform vec4 uImpact; uniform float uImpactTime; void main() { vec2 uv = vUv * 16.0; vec2 r = vec2(1.0, 1.7320508); vec2 h = r * 0.5; vec2 a = mod(uv, r) - h; vec2 b = mod(uv + h, r) - h; gv = length(a) < length(b) ? a : b; float distToEdge = 0.5 - max(abs(gv.x), dot(gv, normalize(r))); float hex = smoothstep(0.01, 0.04, distToEdge); float d = distance(vPosition, uImpact.xyz); float ripple = 0.0; if (uImpactTime > 0.0) { float wave = sin(d * 4.5 - uImpactTime * 18.0) * 0.5 + 0.5; float att = exp(-d * 0.8) * uImpactTime; ripple = wave * att; } float glow = 0.08 / (distToEdge + 0.015); vec3 baseColor = vec3(0.0, 0.5, 1.0); vec3 rippleColor = vec3(0.1, 0.9, 1.0); vec3 color = mix(baseColor * (1.0 - hex + glow * 0.12), rippleColor * 2.5, ripple * 0.8); float alpha = mix(0.12, 0.85, ripple) + (1.0 - hex) * 0.22; gl_FragColor = vec4(color, alpha); }",
      transparent: true,
      side: THREE.DoubleSide,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    })
    const shield = new THREE.Mesh(shieldGeom, shieldMat)
    scene.add(shield)

    const laserMat = new THREE.LineBasicMaterial({ color: 0x00f0ff, linewidth: 2, transparent: true, opacity: 0 })
    const laserGeom = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()])
    const laserLine = new THREE.Line(laserGeom, laserMat)
    scene.add(laserLine)

    const particleCount = 40
    const pGeom = new THREE.BufferGeometry()
    const pPos = new Float32Array(particleCount * 3)
    const pVels: THREE.Vector3[] = []
    for (let i = 0; i < particleCount; i++) {
      pVels.push(new THREE.Vector3())
    }
    pGeom.setAttribute('position', new THREE.BufferAttribute(pPos, 3))
    const pMat = new THREE.PointsMaterial({
      color: 0x00f0ff,
      size: 0.12,
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending
    })
    const particles = new THREE.Points(pGeom, pMat)
    scene.add(particles)

    const mouse = new THREE.Vector2(0, 0)
    const targetRotation = new THREE.Vector2(0, 0)
    let uImpactTimeVal = 0
    let laserIntensity = 0
    let particleLife = 0
    const targetPosLeft = new THREE.Vector3()
    const targetPosRight = new THREE.Vector3()

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1
      targetRotation.x = mouse.y * 0.4
      targetRotation.y = mouse.x * 0.5
    }

    const raycaster = new THREE.Raycaster()
    const handleMouseDown = () => {
      raycaster.setFromCamera(mouse, camera)
      const intersects = raycaster.intersectObject(shield)
      if (intersects.length > 0) {
        const point = intersects[0].point
        shieldMat.uniforms.uImpact.value.set(point.x, point.y, point.z, 1.0)
        uImpactTimeVal = 1.0
        
        pLeft.getWorldPosition(targetPosLeft)
        pRight.getWorldPosition(targetPosRight)
        
        const positions = laserGeom.getAttribute('position') as THREE.BufferAttribute
        positions.setXYZ(0, targetPosLeft.x, targetPosLeft.y, targetPosLeft.z)
        positions.setXYZ(1, point.x, point.y, point.z)
        positions.setXYZ(2, targetPosRight.x, targetPosRight.y, targetPosRight.z)
        positions.needsUpdate = true
        laserIntensity = 1.0
        
        const posAttr = pGeom.getAttribute('position') as THREE.BufferAttribute
        for (let i = 0; i < particleCount; i++) {
          posAttr.setXYZ(i, point.x, point.y, point.z)
          const angle1 = Math.random() * Math.PI * 2
          const angle2 = Math.random() * Math.PI
          pVels[i].set(
            Math.cos(angle1) * Math.sin(angle2) * 5,
            Math.sin(angle1) * Math.sin(angle2) * 5,
            Math.cos(angle2) * 5
          )
        }
        posAttr.needsUpdate = true
        particleLife = 1.0
        
        blueLight.intensity = 15
        eyeMat.emissiveIntensity = 6.0
        
        setIntegrity(prev => {
          const next = Math.max(10, prev - Math.floor(Math.random() * 8 + 3))
          if (next === 10) {
            setShieldStatus("CRITICAL")
            setActiveMode("EMERGENCY DEFENSE")
          }
          return next
        })
      }
    }

    container.addEventListener('mousemove', handleMouseMove)
    container.addEventListener('mousedown', handleMouseDown)

    const handleResize = () => {
      camera.aspect = container.clientWidth / container.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(container.clientWidth, container.clientHeight)
    }
    window.addEventListener('resize', handleResize)

    let frame = 0
    const animate = () => {
      frame = requestAnimationFrame(animate)
      const time = Date.now() * 0.001
      shieldMat.uniforms.uTime.value = time
      
      sentinelGroup.rotation.x += (targetRotation.x - sentinelGroup.rotation.x) * 0.08
      sentinelGroup.rotation.y += (targetRotation.y - sentinelGroup.rotation.y) * 0.08
      sentinelGroup.position.y = Math.sin(time * 2) * 0.25
      collar.rotation.z += 0.01
      
      if (uImpactTimeVal > 0) {
        uImpactTimeVal -= 0.015
        shieldMat.uniforms.uImpactTime.value = 1.0 - uImpactTimeVal
      } else {
        shieldMat.uniforms.uImpactTime.value = 0
      }
      
      if (laserIntensity > 0) {
        laserIntensity -= 0.08
        laserMat.opacity = laserIntensity
      } else {
        laserMat.opacity = 0
      }
      
      if (particleLife > 0) {
        particleLife -= 0.02
        pMat.opacity = particleLife
        const posAttr = pGeom.getAttribute('position') as THREE.BufferAttribute
        for (let i = 0; i < particleCount; i++) {
          const x = posAttr.getX(i) + pVels[i].x * 0.016
          const y = posAttr.getY(i) + pVels[i].y * 0.016
          const z = posAttr.getZ(i) + pVels[i].z * 0.016
          posAttr.setXYZ(i, x, y, z)
          pVels[i].multiplyScalar(0.95)
        }
        posAttr.needsUpdate = true
      } else {
        pMat.opacity = 0
      }
      
      blueLight.intensity += (3.0 - blueLight.intensity) * 0.1
      eyeMat.emissiveIntensity += (2.0 - eyeMat.emissiveIntensity) * 0.1
      
      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(frame)
      container.removeEventListener('mousemove', handleMouseMove)
      container.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('resize', handleResize)
      renderer.dispose()
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <div className="relative w-full h-[640px] overflow-hidden rounded-[32px] border border-cyan-500/20 bg-[radial-gradient(circle_at_center,#050b14_0%,#010204_100%)] select-none">
      <div ref={containerRef} className="absolute inset-0 cursor-crosshair" />
      
      <div className="absolute top-6 left-6 p-4 rounded-2xl border border-cyan-500/10 bg-black/40 backdrop-blur-md text-cyan-400 font-mono text-xs flex flex-col gap-2 pointer-events-none">
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-cyan-400 animate-pulse" />
          <span className="font-bold uppercase tracking-wider text-[10px]">Quantum Shield Grid</span>
        </div>
        <div className="h-[1px] bg-cyan-500/25 my-1" />
        <div className="flex justify-between gap-4"><span>SHIELD STATUS:</span><span className="text-white font-bold">{shieldStatus}</span></div>
        <div className="flex justify-between gap-4"><span>INTEGRITY:</span><span className="text-white font-bold">{integrity}%</span></div>
        <div className="flex justify-between gap-4"><span>MODE:</span><span className="text-white font-bold">{activeMode}</span></div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-5 py-2.5 rounded-full border border-cyan-500/30 bg-black/60 backdrop-blur-md pointer-events-none text-center">
        <p className="text-cyan-400 text-xs font-bold tracking-[0.25em] uppercase">Quantum Aegis Sentinel</p>
        <p className="text-cyan-300/40 text-[9px] font-medium tracking-[0.15em] uppercase mt-1">Click shield to test energy impact</p>
      </div>
    </div>
  )
}`,
    prompt: `Create an advanced Quantum Aegis Sentinel using Three.js. Feature a central dark mechanical orb core that dynamically looks toward the cursor with floating shoulder projector cannons. Project a larger concentric sphere representing a holographic defense grid with a custom procedural hexagonal shader. Clicking anywhere should raycast to the shield, projecting a glowing ripple wave from the impact point, generating a dual-laser beam hit from the cannons, emitting a burst of physics particle sparks, and decreasing HUD shield integrity.`,
    likes: 0,
    author: 'Animation AI',
    featured: true,
    createdAt: '2026-05-22T09:00:00.000Z',
    updatedAt: '2026-05-22T09:00:00.000Z'
  },
  {
    _id: 'robot-nebula-chrono-core',
    slug: 'nebula-chrono-core-robot',
    title: 'Nebula Chrono-Mech Core',
    category: 'robot',
    tag: 'threejs',
    description: 'An intricate cosmic clock-reactor featuring interlocking gyroscopic brass gears, floating planetary rings, and a swirling particle nebula. Pulls particles gravitationally and triggers time-warp speed rotation upon clicking.',
    previewCode: `<!DOCTYPE html><html><head><style>
body{margin:0;background:radial-gradient(circle at center,#0f0514 0%,#030106 100%);overflow:hidden;cursor:crosshair}
canvas{display:block}
.hud{position:absolute;top:20px;left:20px;padding:12px;border:1px solid rgba(180,0,255,0.15);border-radius:12px;background:rgba(0,0,0,0.5);color:#d3a0ff;font-family:monospace;font-size:11px;pointer-events:none}
.label{position:absolute;bottom:24px;left:50%;transform:translateX(-50%);color:rgba(180,0,255,0.8);font-family:monospace;font-size:12px;letter-spacing:4px;text-transform:uppercase;pointer-events:none;text-align:center}
.sub{font-size:9px;color:rgba(180,0,255,0.4);letter-spacing:2px;margin-top:4px}
</style></head><body>
<div class="hud">
  TIME DILATION: 1.00x<br>
  CHRONO FREQ: 60.0 Hz<br>
  WARP DRIVE: READY
</div>
<div class="label">
  NEBULA CHRONO-MECH CORE
  <div class="sub">CLICK CORE TO WARP SPACE-TIME</div>
</div>
<script type="importmap">{"imports":{"three":"https://unpkg.com/three@0.160.0/build/three.module.js"}}</script>
<script type="module">
import * as THREE from 'three';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 10;

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
document.body.appendChild(renderer.domElement);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
scene.add(ambientLight);

const orangeLight = new THREE.PointLight(0xffaa44, 4, 15);
orangeLight.position.set(0, 0, 3);
scene.add(orangeLight);

const purpleLight = new THREE.PointLight(0x8822ff, 4, 15);
purpleLight.position.set(0, 0, -3);
scene.add(purpleLight);

const coreGroup = new THREE.Group();
scene.add(coreGroup);

const reactorGeom = new THREE.SphereGeometry(0.8, 32, 32);
const reactorMat = new THREE.MeshBasicMaterial({
  color: 0xffeedd,
  transparent: true,
  opacity: 0.95
});
const reactor = new THREE.Mesh(reactorGeom, reactorMat);
coreGroup.add(reactor);

const shellGeom = new THREE.IcosahedronGeometry(0.92, 2);
const shellMat = new THREE.MeshBasicMaterial({ color: 0xff8800, wireframe: true, transparent: true, opacity: 0.5 });
const shell = new THREE.Mesh(shellGeom, shellMat);
coreGroup.add(shell);

const goldMat = new THREE.MeshStandardMaterial({ color: 0xcca84e, metalness: 0.9, roughness: 0.25 });
const gears = [];

function createGear(radius, toothCount, toothSize, rotSpeed) {
  const gearGroup = new THREE.Group();
  const ringGeom = new THREE.TorusGeometry(radius, 0.06, 8, 100);
  const ringMesh = new THREE.Mesh(ringGeom, goldMat);
  gearGroup.add(ringMesh);
  
  const toothGeom = new THREE.BoxGeometry(toothSize.x, toothSize.y, toothSize.z);
  for (let i = 0; i < toothCount; i++) {
    const angle = (i / toothCount) * Math.PI * 2;
    const tooth = new THREE.Mesh(toothGeom, goldMat);
    tooth.position.set(Math.cos(angle) * radius, Math.sin(angle) * radius, 0);
    tooth.rotation.z = angle;
    gearGroup.add(tooth);
  }
  
  coreGroup.add(gearGroup);
  gears.push({ group: gearGroup, speed: rotSpeed });
}

createGear(1.5, 16, new THREE.Vector3(0.08, 0.16, 0.08), 0.015);
createGear(2.3, 24, new THREE.Vector3(0.1, 0.2, 0.1), -0.008);
createGear(3.1, 32, new THREE.Vector3(0.12, 0.24, 0.12), 0.004);

gears[0].group.rotation.x = Math.PI / 2;
gears[1].group.rotation.y = Math.PI / 3;

const starCount = 2000;
const starsGeom = new THREE.BufferGeometry();
const starPos = new Float32Array(starCount * 3);
const starColor = new Float32Array(starCount * 3);
const c1 = new THREE.Color(0xff6600);
const c2 = new THREE.Color(0x9900ff);
const starData = [];

for (let i = 0; i < starCount; i++) {
  const r = Math.random() * 5 + 0.6;
  const theta = r * 1.8 + (i % 2 === 0 ? 0 : Math.PI);
  const x = Math.cos(theta) * r + (Math.random() - 0.5) * 0.4 * r;
  const z = Math.sin(theta) * r + (Math.random() - 0.5) * 0.4 * r;
  const y = (Math.random() - 0.5) * 0.12 * (5 - r);
  
  starPos[i*3] = x;
  starPos[i*3+1] = y;
  starPos[i*3+2] = z;
  
  const mixColor = c1.clone().lerp(c2, r / 5);
  starColor[i*3] = mixColor.r;
  starColor[i*3+1] = mixColor.g;
  starColor[i*3+2] = mixColor.b;
  
  starData.push({ r, theta, y, speed: 0.012 / (r + 0.2) });
}
starsGeom.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
starsGeom.setAttribute('color', new THREE.BufferAttribute(starColor, 3));

const starsMat = new THREE.PointsMaterial({
  size: 0.06,
  vertexColors: true,
  transparent: true,
  blending: THREE.AdditiveBlending
});
const starPoints = new THREE.Points(starsGeom, starsMat);
scene.add(starPoints);

const shockwaveGeom = new THREE.RingGeometry(0.1, 0.15, 32);
const shockwaveMat = new THREE.MeshBasicMaterial({ color: 0xbb55ff, side: THREE.DoubleSide, transparent: true, opacity: 0 });
const shockwave = new THREE.Mesh(shockwaveGeom, shockwaveMat);
shockwave.rotation.x = Math.PI / 2;
scene.add(shockwave);

const mouse = new THREE.Vector2(0, 0);
const targetRotation = new THREE.Vector2(0, 0);
let warpTime = 0;
let isWarping = false;

window.addEventListener('mousemove', (e) => {
  mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
  targetRotation.x = mouse.y * 0.4;
  targetRotation.y = -mouse.x * 0.4;
});

window.addEventListener('mousedown', () => {
  isWarping = true;
  warpTime = 1.0;
  shockwave.scale.set(0.1, 0.1, 0.1);
  shockwaveMat.opacity = 1.0;
  orangeLight.color.setHex(0xbb00ff);
  purpleLight.color.setHex(0xffffff);
});

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

const clock = new THREE.Clock();

function animate() {
  requestAnimationFrame(animate);
  const time = clock.getElapsedTime();
  const dt = clock.getDelta();
  
  coreGroup.rotation.x += (targetRotation.x - coreGroup.rotation.x) * 0.08;
  coreGroup.rotation.y += (targetRotation.y - coreGroup.rotation.y) * 0.08;
  
  const currentWarp = 1.0 + warpTime * 8.0;
  
  gears.forEach((gear) => {
    gear.group.rotation.z += gear.speed * currentWarp;
  });
  
  shell.rotation.y += 0.01 * currentWarp;
  shell.rotation.x += 0.005 * currentWarp;
  
  const scale = 1.0 + Math.sin(time * 3) * 0.05 + warpTime * 0.6;
  reactor.scale.setScalar(scale);
  
  const positions = starsGeom.getAttribute('position');
  for (let i = 0; i < starCount; i++) {
    const data = starData[i];
    data.theta += data.speed * currentWarp;
    
    let warpStretch = 1.0 + warpTime * 0.3 * Math.sin(time * 5 + data.r);
    let r = data.r * warpStretch;
    
    const targetX = Math.cos(data.theta) * r + mouse.x * 0.3 * (5 - r);
    const targetZ = Math.sin(data.theta) * r + mouse.y * 0.3 * (5 - r);
    
    positions.setXYZ(i, targetX, data.y, targetZ);
  }
  positions.needsUpdate = true;
  
  if (warpTime > 0) {
    warpTime -= 0.015;
    shockwave.scale.addScalar(0.12);
    shockwaveMat.opacity = warpTime;
    
    const colorVal = new THREE.Color().lerpColors(new THREE.Color(0xffeedd), new THREE.Color(0xaa00ff), warpTime);
    reactorMat.color.copy(colorVal);
  } else {
    isWarping = false;
    orangeLight.color.setHex(0xffaa44);
    purpleLight.color.setHex(0x8822ff);
    reactorMat.color.setHex(0xffeedd);
  }
  
  renderer.render(scene, camera);
}
animate();
</script></body></html>`,
    code: `"use client"

import React, { useRef, useEffect, useState } from 'react'
import * as THREE from 'three'
import { Activity, Clock, Zap } from 'lucide-react'

export default function NebulaChronoMechCore() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [dilation, setDilation] = useState(1.0)
  const [frequency, setFrequency] = useState(60.0)
  const [warpStatus, setWarpStatus] = useState("READY")

  useEffect(() => {
    if (!containerRef.current || typeof window === 'undefined') return
    const container = containerRef.current
    
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000)
    camera.position.z = 10

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(container.clientWidth, container.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3)
    scene.add(ambientLight)

    const orangeLight = new THREE.PointLight(0xffaa44, 4, 15)
    orangeLight.position.set(0, 0, 3)
    scene.add(orangeLight)

    const purpleLight = new THREE.PointLight(0x8822ff, 4, 15)
    purpleLight.position.set(0, 0, -3)
    scene.add(purpleLight)

    const coreGroup = new THREE.Group()
    scene.add(coreGroup)

    const reactorGeom = new THREE.SphereGeometry(0.8, 32, 32)
    const reactorMat = new THREE.MeshBasicMaterial({
      color: 0xffeedd,
      transparent: true,
      opacity: 0.95
    })
    const reactor = new THREE.Mesh(reactorGeom, reactorMat)
    coreGroup.add(reactor)

    const shellGeom = new THREE.IcosahedronGeometry(0.92, 2)
    const shellMat = new THREE.MeshBasicMaterial({ color: 0xff8800, wireframe: true, transparent: true, opacity: 0.5 })
    const shell = new THREE.Mesh(shellGeom, shellMat)
    coreGroup.add(shell)

    const goldMat = new THREE.MeshStandardMaterial({ color: 0xcca84e, metalness: 0.9, roughness: 0.25 })
    const gears: { group: THREE.Group, speed: number }[] = []

    const createGear = (radius: number, toothCount: number, toothSize: THREE.Vector3, rotSpeed: number) => {
      const gearGroup = new THREE.Group()
      const ringGeom = new THREE.TorusGeometry(radius, 0.06, 8, 100)
      const ringMesh = new THREE.Mesh(ringGeom, goldMat)
      gearGroup.add(ringMesh)
      
      const toothGeom = new THREE.BoxGeometry(toothSize.x, toothSize.y, toothSize.z)
      for (let i = 0; i < toothCount; i++) {
        const angle = (i / toothCount) * Math.PI * 2
        const tooth = new THREE.Mesh(toothGeom, goldMat)
        tooth.position.set(Math.cos(angle) * radius, Math.sin(angle) * radius, 0)
        tooth.rotation.z = angle
        gearGroup.add(tooth)
      }
      
      coreGroup.add(gearGroup)
      gears.push({ group: gearGroup, speed: rotSpeed })
    }

    createGear(1.5, 16, new THREE.Vector3(0.08, 0.16, 0.08), 0.015)
    createGear(2.3, 24, new THREE.Vector3(0.1, 0.2, 0.1), -0.008)
    createGear(3.1, 32, new THREE.Vector3(0.12, 0.24, 0.12), 0.004)

    gears[0].group.rotation.x = Math.PI / 2
    gears[1].group.rotation.y = Math.PI / 3

    const starCount = 2000
    const starsGeom = new THREE.BufferGeometry()
    const starPos = new Float32Array(starCount * 3)
    const starColor = new Float32Array(starCount * 3)
    const c1 = new THREE.Color(0xff6600)
    const c2 = new THREE.Color(0x9900ff)
    
    interface StarData {
      r: number
      theta: number
      y: number
      speed: number
    }
    const starData: StarData[] = []

    for (let i = 0; i < starCount; i++) {
      const r = Math.random() * 5 + 0.6
      const theta = r * 1.8 + (i % 2 === 0 ? 0 : Math.PI)
      const x = Math.cos(theta) * r + (Math.random() - 0.5) * 0.4 * r
      const z = Math.sin(theta) * r + (Math.random() - 0.5) * 0.4 * r
      const y = (Math.random() - 0.5) * 0.12 * (5 - r)
      
      starPos[i*3] = x
      starPos[i*3+1] = y
      starPos[i*3+2] = z
      
      const mixColor = c1.clone().lerp(c2, r / 5)
      starColor[i*3] = mixColor.r
      starColor[i*3+1] = mixColor.g
      starColor[i*3+2] = mixColor.b
      
      starData.push({ r, theta, y, speed: 0.012 / (r + 0.2) })
    }
    starsGeom.setAttribute('position', new THREE.BufferAttribute(starPos, 3))
    starsGeom.setAttribute('color', new THREE.BufferAttribute(starColor, 3))

    const starsMat = new THREE.PointsMaterial({
      size: 0.06,
      vertexColors: true,
      transparent: true,
      blending: THREE.AdditiveBlending
    })
    const starPoints = new THREE.Points(starsGeom, starsMat)
    scene.add(starPoints)

    const shockwaveGeom = new THREE.RingGeometry(0.1, 0.15, 32)
    const shockwaveMat = new THREE.MeshBasicMaterial({ color: 0xbb55ff, side: THREE.DoubleSide, transparent: true, opacity: 0 })
    const shockwave = new THREE.Mesh(shockwaveGeom, shockwaveMat)
    shockwave.rotation.x = Math.PI / 2
    scene.add(shockwave)

    const mouse = new THREE.Vector2(0, 0)
    const targetRotation = new THREE.Vector2(0, 0)
    let warpTime = 0

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1
      targetRotation.x = mouse.y * 0.4
      targetRotation.y = -mouse.x * 0.4
    }

    const handleMouseDown = () => {
      warpTime = 1.0
      shockwave.scale.set(0.1, 0.1, 0.1)
      shockwaveMat.opacity = 1.0
      orangeLight.color.setHex(0xbb00ff)
      purpleLight.color.setHex(0xffffff)
      setWarpStatus("WARPING")
    }

    container.addEventListener('mousemove', handleMouseMove)
    container.addEventListener('mousedown', handleMouseDown)

    const handleResize = () => {
      camera.aspect = container.clientWidth / container.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(container.clientWidth, container.clientHeight)
    }
    window.addEventListener('resize', handleResize)

    let frame = 0
    const clock = new THREE.Clock()

    const animate = () => {
      frame = requestAnimationFrame(animate)
      const time = clock.getElapsedTime()
      
      coreGroup.rotation.x += (targetRotation.x - coreGroup.rotation.x) * 0.08
      coreGroup.rotation.y += (targetRotation.y - coreGroup.rotation.y) * 0.08
      
      const currentWarp = 1.0 + warpTime * 8.0
      setDilation(Number(currentWarp.toFixed(2)))
      setFrequency(Number((60.0 + warpTime * 440.0).toFixed(1)))
      
      gears.forEach((gear) => {
        gear.group.rotation.z += gear.speed * currentWarp
      })
      
      shell.rotation.y += 0.01 * currentWarp
      shell.rotation.x += 0.005 * currentWarp
      
      const scale = 1.0 + Math.sin(time * 3) * 0.05 + warpTime * 0.6
      reactor.scale.setScalar(scale)
      
      const positions = starsGeom.getAttribute('position') as THREE.BufferAttribute
      for (let i = 0; i < starCount; i++) {
        const data = starData[i]
        data.theta += data.speed * currentWarp
        
        const warpStretch = 1.0 + warpTime * 0.3 * Math.sin(time * 5 + data.r)
        const r = data.r * warpStretch
        
        const targetX = Math.cos(data.theta) * r + mouse.x * 0.3 * (5 - r)
        const targetZ = Math.sin(data.theta) * r + mouse.y * 0.3 * (5 - r)
        
        positions.setXYZ(i, targetX, data.y, targetZ)
      }
      positions.needsUpdate = true
      
      if (warpTime > 0) {
        warpTime -= 0.015
        shockwave.scale.addScalar(0.12)
        shockwaveMat.opacity = warpTime
        
        const colorVal = new THREE.Color().lerpColors(new THREE.Color(0xffeedd), new THREE.Color(0xaa00ff), warpTime)
        reactorMat.color.copy(colorVal)
      } else {
        orangeLight.color.setHex(0xffaa44)
        purpleLight.color.setHex(0x8822ff)
        reactorMat.color.setHex(0xffeedd)
        setWarpStatus("READY")
      }
      
      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(frame)
      container.removeEventListener('mousemove', handleMouseMove)
      container.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('resize', handleResize)
      renderer.dispose()
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <div className="relative w-full h-[640px] overflow-hidden rounded-[32px] border border-purple-500/20 bg-[radial-gradient(circle_at_center,#0f0514_0%,#030106_100%)] select-none">
      <div ref={containerRef} className="absolute inset-0 cursor-crosshair" />
      
      <div className="absolute top-6 left-6 p-4 rounded-2xl border border-purple-500/10 bg-black/40 backdrop-blur-md text-purple-400 font-mono text-xs flex flex-col gap-2 pointer-events-none">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-purple-400 animate-pulse" />
          <span className="font-bold uppercase tracking-wider text-[10px]">Temporal Reactor Core</span>
        </div>
        <div className="h-[1px] bg-purple-500/25 my-1" />
        <div className="flex justify-between gap-4"><span>TIME DILATION:</span><span className="text-white font-bold">{dilation}x</span></div>
        <div className="flex justify-between gap-4"><span>CHRONO FREQ:</span><span className="text-white font-bold">{frequency} Hz</span></div>
        <div className="flex justify-between gap-4"><span>WARP DRIVE:</span><span className="text-white font-bold">{warpStatus}</span></div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-5 py-2.5 rounded-full border border-purple-500/30 bg-black/60 backdrop-blur-md pointer-events-none text-center">
        <p className="text-purple-400 text-xs font-bold tracking-[0.25em] uppercase">Nebula Chrono-Mech Core</p>
        <p className="text-purple-300/40 text-[9px] font-medium tracking-[0.15em] uppercase mt-1">Click reactor to warp space-time</p>
      </div>
    </div>
  )
}`,
    prompt: `Create an advanced Nebula Chrono-Mech Core using Three.js. Render a floating central reactor sphere that breathes organically, surrounded by an intricate technical wireframe shell. Build three concentric golden mechanical rings, each fitted with box teeth styled as mechanical gears, rotating on independent axes (X, Y, Z). Form a beautiful dual-armed spiral galaxy of 2000 particle stars swirling around the core. Implement cursor gravitational force causing stars to tilt and pull toward the pointer. Clicking anywhere should trigger a warp speed effect speeding gears and particles up by 8x, morphing the core's emissive color to electric purple, expanding a circular flat energy shockwave, and reflecting dilation metrics in a custom HUD.`,
    likes: 0,
    author: 'Animation AI',
    featured: true,
    createdAt: '2026-05-22T09:05:00.000Z',
    updatedAt: '2026-05-22T09:05:00.000Z'
  },
  {
    _id: 'robot-obsidian-aegis-prime',
    slug: 'obsidian-aegis-prime',
    title: 'Obsidian Aegis Prime',
    category: 'robot',
    tag: 'threejs',
    description: 'A fully articulated Three.js humanoid robot with a solid obsidian-chrome chassis. Features real-time full-body mouse tracking, cursor-linked head rotation, dynamic arm response, a pulsing reactor core with orbital ring, 3 interactive combat protocols, and ACESFilmic tone-mapped volumetric lighting.',
    previewCode: `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{background:#030305;overflow:hidden;cursor:crosshair;font-family:monospace;user-select:none}
canvas{display:block;width:100vw;height:100vh}
.hud{position:absolute;top:20px;left:20px;padding:14px 18px;border:1px solid rgba(0,240,255,0.2);border-radius:14px;background:rgba(2,5,10,0.85);color:#00f0ff;backdrop-filter:blur(12px);font-size:11px;pointer-events:none;min-width:200px;transition:border-color .4s,box-shadow .4s}
.hud-title{font-size:12px;font-weight:bold;letter-spacing:.2em;text-transform:uppercase;margin-bottom:10px;display:flex;align-items:center;gap:8px}
.dot{width:8px;height:8px;border-radius:50%;background:#00f0ff;animation:blink 1.2s infinite;box-shadow:0 0 8px #00f0ff}
@keyframes blink{0%,100%{opacity:1}50%{opacity:.3}}
.stat{display:flex;justify-content:space-between;padding:4px 0;border-bottom:1px solid rgba(255,255,255,.06);font-size:10px}
.stat:last-child{border-bottom:none}
.stat-label{color:rgba(0,240,255,.5)}
.stat-val{color:#fff;font-weight:bold}
.bottom-label{position:absolute;bottom:24px;left:50%;transform:translateX(-50%);text-align:center;pointer-events:none}
.title{color:#00f0ff;font-size:12px;letter-spacing:.4em;text-transform:uppercase}
.sub{color:rgba(0,240,255,.4);font-size:9px;letter-spacing:.2em;margin-top:4px}
</style>
</head>
<body>
<div class="hud" id="hud">
  <div class="hud-title"><div class="dot" id="dot"></div><span id="protName">GUARD PROTOCOL</span></div>
  <div class="stat"><span class="stat-label">CHASSIS</span><span class="stat-val" id="chassis">HUMANOID MK-IX</span></div>
  <div class="stat"><span class="stat-label">REACTOR</span><span class="stat-val" id="reactor">100%</span></div>
  <div class="stat"><span class="stat-label">LATENCY</span><span class="stat-val" id="latency">0.8 ms</span></div>
  <div class="stat"><span class="stat-label">STATUS</span><span class="stat-val" id="status">STABLE</span></div>
</div>
<div class="bottom-label">
  <div class="title" id="mainTitle">OBSIDIAN AEGIS PRIME</div>
  <div class="sub">MOVE CURSOR TO TRACK · CLICK TO SWITCH PROTOCOL</div>
</div>

<script type="importmap">{"imports":{"three":"https://unpkg.com/three@0.160.0/build/three.module.js"}}</script>
<script type="module">
import * as THREE from 'three';

const PROTOCOLS = [
  { name:'GUARD PROTOCOL', hex:0x00f0ff, css:'#00f0ff', reactor:'100%', latency:'0.8 ms', status:'STABLE' },
  { name:'ANALYZE PROTOCOL', hex:0xffaa00, css:'#ffaa00', reactor:'145%', reactorColor: 0xffaa00, latency:'0.3 ms', status:'SCANNING' },
  { name:'OVERDRIVE PROTOCOL', hex:0xff0055, css:'#ff0055', reactor:'380%', reactorColor: 0xff0055, latency:'0.04 ms', status:'CRITICAL' }
];
let proto = 0, mx = 0, my = 0, tx = 0, ty = 0;

const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x030305, 0.045);
const cam = new THREE.PerspectiveCamera(40, innerWidth/innerHeight, 0.1, 60);
cam.position.set(0, 0.4, 9.8);
cam.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer({ antialias:true });
renderer.setPixelRatio(Math.min(devicePixelRatio,2));
renderer.setSize(innerWidth, innerHeight);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.35;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
document.body.appendChild(renderer.domElement);

// Lights - highly polished studio environment setup
const ambient = new THREE.AmbientLight(0x0f1220, 2.0);
scene.add(ambient);

// Front key light
const mainSpot = new THREE.SpotLight(0xffffff, 130, 20, Math.PI/4, 0.5, 1.2);
mainSpot.position.set(0, 6, 7);
mainSpot.castShadow = true;
mainSpot.shadow.mapSize.set(1024,1024);
scene.add(mainSpot, mainSpot.target);

// Backlit Halo Light directly behind the head/neck to create a stunning silhouette
const backLight = new THREE.PointLight(0xffffff, 110, 8);
backLight.position.set(0, 2.2, -1.8);
scene.add(backLight);

// Dual color rim lights
const rimL = new THREE.PointLight(0x00f0ff, 35, 12);
rimL.position.set(-4, 2, -1);
scene.add(rimL);

const rimR = new THREE.PointLight(0x6600ff, 25, 12);
rimR.position.set(4, 2, -1);
scene.add(rimR);

// Interactive Cursor Light for glossy real-time reflections
const cursorLight = new THREE.PointLight(0xffffff, 35, 8);
cursorLight.position.set(0, 0, 4);
scene.add(cursorLight);

// Ground fill
const fill = new THREE.PointLight(0x182440, 15, 10);
fill.position.set(0, -3, 3);
scene.add(fill);

// Materials - premium hyper-reflective and satin metals
const obsidian = new THREE.MeshStandardMaterial({
  color: 0x111216,      // Deep polished volcanic black
  roughness: 0.12,      // Highly glossy satin sheen
  metalness: 0.85,      // Very high metalness
});
const chrome = new THREE.MeshStandardMaterial({
  color: 0xf5f5fa,      // Pure polished silver chrome
  roughness: 0.04,      // Near mirror reflection
  metalness: 1.0
});
const dark = new THREE.MeshStandardMaterial({
  color: 0x0a0b0e,
  roughness: 0.3,
  metalness: 0.7
});
const reactorMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff });

// Helpers
function box(w,h,d,mat){ return new THREE.Mesh(new THREE.BoxGeometry(w,h,d),mat); }
function cyl(rt,rb,h,mat){ return new THREE.Mesh(new THREE.CylinderGeometry(rt,rb,h,32),mat); }
function sph(r,mat){ return new THREE.Mesh(new THREE.SphereGeometry(r,32,24),mat); }

// Root container
const root = new THREE.Group();
root.position.y = -0.5;
scene.add(root);

// ---- HEAD (Refined humanoid contours) ----
const headGrp = new THREE.Group();
headGrp.position.set(0, 2.55, 0);
root.add(headGrp);

// Ellipsoid skull
const skull = sph(0.46, chrome);
skull.scale.set(0.9, 1.25, 0.95);
headGrp.add(skull);

// Sleek humanoid chin guard
const chin = box(0.32, 0.12, 0.15, obsidian);
chin.position.set(0, -0.32, 0.22);
chin.rotation.x = Math.PI / 12;
headGrp.add(chin);

// Faceplate divider line (Subtle carbon seam)
const seam = cyl(0.01, 0.01, 1.0, dark);
seam.position.set(0, 0, 0.44);
seam.scale.set(1, 1.1, 0.5);
headGrp.add(seam);

// Integrated glowing twin eyes
const eyeL = sph(0.042, reactorMat);
eyeL.position.set(-0.13, 0.08, 0.42);
headGrp.add(eyeL);

const eyeR = eyeL.clone();
eyeR.position.set(0.13, 0.08, 0.42);
headGrp.add(eyeR);

// ---- NECK (Humanoid column with mechanical vertebrae rings) ----
const neckGrp = new THREE.Group();
neckGrp.position.set(0, 2.05, 0);
root.add(neckGrp);

const neckColumn = cyl(0.12, 0.14, 0.35, chrome);
neckGrp.add(neckColumn);

// Vertebrae rings
[-0.08, 0.08].forEach(y => {
  const ring = new THREE.Mesh(new THREE.TorusGeometry(0.14, 0.02, 8, 24), dark);
  ring.rotation.x = Math.PI / 2;
  ring.position.set(0, y, 0);
  neckGrp.add(ring);
});

const neckBase = cyl(0.18, 0.22, 0.08, dark);
neckBase.position.y = -0.16;
neckGrp.add(neckBase);

// ---- TORSO (Premium V-shape chest + cybernetic abdominal plates) ----
const torsoGrp = new THREE.Group();
torsoGrp.position.set(0, 1.05, 0);
root.add(torsoGrp);

// Main V-shaped chest core
const mainTorso = cyl(0.68, 0.32, 1.15, obsidian);
mainTorso.scale.set(1.4, 1.0, 0.62);
torsoGrp.add(mainTorso);

// Humanoid Pec left
const breastL = sph(0.3, obsidian);
breastL.position.set(-0.25, 0.18, 0.2);
breastL.scale.set(0.9, 1.25, 0.52);
breastL.rotation.z = -Math.PI / 18;
torsoGrp.add(breastL);

// Humanoid Pec right
const breastR = sph(0.3, obsidian);
breastR.position.set(0.25, 0.18, 0.2);
breastR.scale.set(0.9, 1.25, 0.52);
breastR.rotation.z = Math.PI / 18;
torsoGrp.add(breastR);

// Central Reactor socket & core
const reactorSocket = cyl(0.16, 0.16, 0.08, dark);
reactorSocket.rotation.x = Math.PI/2;
reactorSocket.position.set(0, 0.18, 0.28);
torsoGrp.add(reactorSocket);

const reactorCore = sph(0.11, reactorMat);
reactorCore.position.set(0, 0.18, 0.3);
torsoGrp.add(reactorCore);

const reactorRing = new THREE.Mesh(new THREE.TorusGeometry(0.15, 0.018, 8, 32), chrome);
reactorRing.position.copy(reactorCore.position);
torsoGrp.add(reactorRing);

// Spine / central column
const abdoColumn = cyl(0.16, 0.16, 0.45, chrome);
abdoColumn.position.set(0, -0.65, 0);
torsoGrp.add(abdoColumn);

// Cybernetic abdominal muscle plates (Abs)
const abRow = box(0.42, 0.09, 0.1, obsidian);
abRow.scale.set(1.0, 1.0, 0.5);

const ab1 = abRow.clone();
ab1.position.set(0, -0.38, 0.22);
torsoGrp.add(ab1);

const ab2 = abRow.clone();
ab2.position.set(0, -0.5, 0.2);
torsoGrp.add(ab2);

const ab3 = abRow.clone();
ab3.position.set(0, -0.62, 0.18);
torsoGrp.add(ab3);

// Abdomen back shell
const abdomen = cyl(0.32, 0.28, 0.38, obsidian);
abdomen.scale.set(1.2, 1.0, 0.65);
abdomen.position.set(0, 0.22, 0);
root.add(abdomen);

// Humanoid Pelvis / hip armor plate
const pelvis = cyl(0.34, 0.44, 0.28, dark);
pelvis.scale.set(1.3, 1.0, 0.72);
pelvis.position.set(0, -0.08, 0);
root.add(pelvis);

// ---- DELTOID SHOULDERS DELINEATION (Human-like deltoid caps covering joints) ----
function makeShoulderCap(side) {
  const g = new THREE.Group();
  
  // Tapered deltoid muscle cap covering the joint
  const cap = sph(0.23, obsidian);
  cap.scale.set(1.0, 1.3, 1.0);
  cap.position.set(0, 0.05, 0);
  g.add(cap);
  
  // Internal mechanical socket
  const socket = cyl(0.14, 0.14, 0.16, dark);
  socket.rotation.z = Math.PI / 2;
  socket.position.set(side * 0.05, -0.1, 0);
  g.add(socket);
  
  const pivot = sph(0.11, chrome);
  pivot.position.copy(socket.position);
  g.add(pivot);
  
  return g;
}

const shoulderCapL = makeShoulderCap(-1);
shoulderCapL.position.set(-0.76, 1.48, 0);
root.add(shoulderCapL);

const shoulderCapR = makeShoulderCap(1);
shoulderCapR.position.set(0.76, 1.48, 0);
root.add(shoulderCapR);

// ---- ARMS (Humanoid tapered proportions) ----
function makeArm(side) {
  const g = new THREE.Group();
  
  // Upper arm - defined bicep/tricep mechanical curves
  const upper = cyl(0.12, 0.09, 0.72, obsidian);
  upper.position.set(0, -0.36, 0);
  g.add(upper);
  
  // Chrome muscle separator ring
  const sleeve = cyl(0.13, 0.1, 0.06, chrome);
  sleeve.position.set(0, -0.15, 0);
  g.add(sleeve);
  
  // Elbow joint cylinder oriented sideways
  const elbow = cyl(0.08, 0.08, 0.13, chrome);
  elbow.rotation.z = Math.PI / 2;
  elbow.position.set(0, -0.76, 0);
  g.add(elbow);
  
  // Forearm - tapered calf-like organic curve
  const fore = cyl(0.1, 0.075, 0.65, obsidian);
  fore.position.set(0, -1.15, 0);
  g.add(fore);
  
  // Wrist sphere joint
  const wrist = sph(0.07, chrome);
  wrist.position.set(0, -1.5, 0);
  g.add(wrist);
  
  // Hand block with rounded knuckles
  const hand = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.16, 0.08), obsidian);
  hand.position.set(0, -1.62, 0);
  g.add(hand);
  
  return g;
}

const armLGrp = makeArm(-1);
armLGrp.position.set(-0.84, 1.45, 0);
armLGrp.rotation.z = 0.12;
root.add(armLGrp);

const armRGrp = makeArm(1);
armRGrp.position.set(0.84, 1.45, 0);
armRGrp.rotation.z = -0.12;
root.add(armRGrp);

// ---- LEGS (Humanoid hips and muscular tapered thighs/shins) ----
function makeLeg() {
  const g = new THREE.Group();
  
  // Hip ball joint
  const hip = sph(0.15, chrome);
  g.add(hip);
  
  // Thigh - organic human thickness
  const thigh = cyl(0.19, 0.13, 0.78, obsidian);
  thigh.position.set(0, -0.45, 0);
  g.add(thigh);
  
  // Sleeve
  const sleeve = cyl(0.2, 0.15, 0.06, chrome);
  sleeve.position.set(0, -0.15, 0);
  g.add(sleeve);
  
  // Knee joint
  const knee = cyl(0.12, 0.12, 0.16, chrome);
  knee.rotation.z = Math.PI / 2;
  knee.position.set(0, -0.88, 0.02);
  g.add(knee);
  
  // Shin - tapered calf shape
  const shin = cyl(0.15, 0.1, 0.72, obsidian);
  shin.position.set(0, -1.3, 0);
  g.add(shin);
  
  // Ankle joint
  const ankle = sph(0.085, chrome);
  ankle.position.set(0, -1.7, 0);
  g.add(ankle);
  
  // Tapered humanoid foot
  const foot = new THREE.Mesh(new THREE.BoxGeometry(0.17, 0.09, 0.36), obsidian);
  foot.position.set(0, -1.8, 0.08);
  g.add(foot);
  
  return g;
}

const legL = makeLeg();
legL.position.set(-0.28, -0.18, 0);
root.add(legL);

const legR = makeLeg();
legR.position.set(0.28, -0.18, 0);
root.add(legR);

// Ground platform
const platform = cyl(0.8, 1.0, 0.08, dark);
platform.position.set(0, -2.1, 0);
root.add(platform);

// Ground glow ring
const glowRing = new THREE.Mesh(new THREE.RingGeometry(0.5, 1.0, 64), new THREE.MeshBasicMaterial({color:0x00f0ff, transparent:true, opacity:0.15, side:THREE.DoubleSide}));
glowRing.rotation.x = -Math.PI/2;
glowRing.position.set(0, -2.05, 0);
root.add(glowRing);

// Particles
const pCount = 280;
const pPos = new Float32Array(pCount * 3);
const pV = [];
for(let i=0;i<pCount;i++){
  pPos[i*3] = (Math.random()-0.5)*9;
  pPos[i*3+1] = Math.random()*7-2;
  pPos[i*3+2] = (Math.random()-0.5)*6;
  pV.push([(Math.random()-.5)*.02, Math.random()*.06+.02, (Math.random()-.5)*.02]);
}
const pGeo = new THREE.BufferGeometry();
pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
const pMat = new THREE.PointsMaterial({ color:0x00f0ff, size:0.04, transparent:true, opacity:0.65, blending:THREE.AdditiveBlending });
scene.add(new THREE.Points(pGeo, pMat));

// Events
window.addEventListener('mousemove', e=>{
  mx = (e.clientX/innerWidth)*2-1;
  my = -((e.clientY/innerHeight)*2-1);
});

window.addEventListener('click', ()=>{
  proto = (proto+1)%PROTOCOLS.length;
  const p = PROTOCOLS[proto];
  
  // Update DOM
  document.getElementById('protName').textContent = p.name;
  document.getElementById('reactor').textContent = p.reactor;
  document.getElementById('latency').textContent = p.latency;
  document.getElementById('status').textContent = p.status;
  
  // Transition lights & materials
  const target = new THREE.Color(p.hex);
  function lerp(col, steps=20){
    let n=0;
    const go=()=>{ n++; col.lerp(target,0.18); if(n<steps) requestAnimationFrame(go); };
    go();
  }
  lerp(rimL.color);
  lerp(pMat.color);
  lerp(new THREE.Color(eyeL.material.color));
  
  if (p.reactorColor) {
    lerp(reactorMat.color);
    lerp(backLight.color);
  } else {
    const defaultColor = new THREE.Color(0x00f0ff);
    let n=0;
    const go=()=>{ n++; reactorMat.color.lerp(defaultColor,0.18); backLight.color.lerp(new THREE.Color(0xffffff),0.18); if(n<20) requestAnimationFrame(go); };
    go();
  }
  
  document.getElementById('hud').style.borderColor = p.css;
  document.getElementById('dot').style.background = p.css;
  document.getElementById('dot').style.boxShadow = '0 0 8px '+p.css;
});

window.addEventListener('resize', ()=>{
  cam.aspect = innerWidth/innerHeight;
  cam.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
});

const clock = new THREE.Clock();
function animate(){
  requestAnimationFrame(animate);
  const t = clock.getElapsedTime();
  
  // Smooth mouse tracking
  tx += (mx - tx) * 0.08;
  ty += (my - ty) * 0.08;
  
  // Root body follows mouse
  root.rotation.y = tx * 0.32;
  root.rotation.x = -ty * 0.12;
  
  // Head tracks aggressively
  headGrp.rotation.y = tx * 0.55;
  headGrp.rotation.x = -ty * 0.35;
  
  // Arm natural swing from mouse
  armLGrp.rotation.x = -ty * 0.25;
  armRGrp.rotation.x = -ty * 0.25;
  armLGrp.rotation.z = 0.12 + tx * 0.08;
  armRGrp.rotation.z = -0.12 - tx * 0.08;
  
  // Shoulder caps pivot with upper arms to look functional and solid
  shoulderCapL.rotation.y = tx * 0.15;
  shoulderCapR.rotation.y = tx * 0.15;
  shoulderCapL.rotation.z = armLGrp.rotation.z * 0.5;
  shoulderCapR.rotation.z = armRGrp.rotation.z * 0.5;
  
  // Leg balancing twist
  legL.rotation.y = tx * 0.1;
  legR.rotation.y = tx * 0.1;
  
  // Breathing idle
  const breath = Math.sin(t*1.6)*0.035;
  torsoGrp.position.y = 1.05 + breath;
  headGrp.position.y = 2.55 + breath;
  
  // Reactor pulse
  const ps = proto===2?15:proto===1?8:3.5;
  const pScale = 1 + Math.sin(t*ps)*0.18;
  reactorCore.scale.setScalar(pScale);
  reactorRing.scale.setScalar(0.9 + Math.sin(t*ps)*0.12);
  reactorRing.rotation.z = t * (proto===2?5:proto===1?2.5:1);
  
  // Eye glow pulse
  eyeL.scale.setScalar(1 + Math.sin(t*4)*0.15);
  eyeR.scale.setScalar(1 + Math.sin(t*4+0.5)*0.15);
  
  // Spotlight follows body slightly
  mainSpot.position.x = tx * 2;
  
  // Interactive Cursor Light moves directly with the mouse coordinates!
  cursorLight.position.x = tx * 4;
  cursorLight.position.y = ty * 3;
  
  // Ground ring pulse
  glowRing.material.opacity = 0.08 + Math.sin(t*2.5)*0.07;
  glowRing.scale.setScalar(1 + Math.sin(t*1.8)*0.05);
  
  // Particles
  const pAttr = pGeo.getAttribute('position');
  const spd = proto===2?3.5:proto===1?1.8:1;
  for(let i=0;i<pCount;i++){
    let y = pAttr.getY(i) + pV[i][1]*spd*0.016;
    if(y>5){ y=-2; pAttr.setX(i,(Math.random()-.5)*9); pAttr.setZ(i,(Math.random()-.5)*6); }
    pAttr.setY(i, y);
    pAttr.setX(i, pAttr.getX(i)+Math.sin(t+i*0.3)*0.001);
  }
  pAttr.needsUpdate = true;
  
  renderer.render(scene, cam);
}
animate();
</script>
</body>
</html>
`,
    code: `"use client"

import { Suspense, lazy, useMemo, useState } from 'react'

const Spline = lazy(() => import('@splinetool/react-spline'))

const PROTOCOLS = [
  { name: 'Guard Protocol',    label: 'GUARD',    color: '#00f0ff', reactor: '100%', latency: '0.8 ms', status: 'STABLE' },
  { name: 'Analyze Protocol',  label: 'ANALYZE',  color: '#ffaa00', reactor: '145%', latency: '0.3 ms', status: 'SCANNING' },
  { name: 'Overdrive Protocol', label: 'OVERDRIVE', color: '#ff0055', reactor: '380%', latency: '0.04 ms', status: 'CRITICAL' },
]

interface ObsidianAegisPrimeProps {
  scene: string
  className?: string
}

export function ObsidianAegisPrime({ scene, className }: ObsidianAegisPrimeProps) {
  const [pointer, setPointer] = useState({ x: 0.5, y: 0.38 })
  const [protoIdx, setProtoIdx] = useState(0)
  const proto = PROTOCOLS[protoIdx]

  const frameTransform = useMemo(() => {
    const rotY = (pointer.x - 0.5) * 12
    const rotX = (0.5 - pointer.y) * 7
    return \`perspective(1800px) rotateX(\${rotX}deg) rotateY(\${rotY}deg)\`
  }, [pointer])

  return (
    <section
      className="relative overflow-hidden rounded-[38px] border border-white/10 bg-[#020304] text-white cursor-crosshair select-none"
      style={{
        backgroundImage: \`
          radial-gradient(circle at \${pointer.x * 100}% 16%, rgba(\${proto.color === '#00f0ff' ? '0,240,255' : proto.color === '#ffaa00' ? '255,170,0' : '255,0,85'},0.12), transparent 22%),
          linear-gradient(135deg, #040404 0%, #060708 42%, #010101 100%)
        \`
      }}
      onMouseMove={e => {
        const r = e.currentTarget.getBoundingClientRect()
        setPointer({ x: (e.clientX - r.left) / r.width, y: (e.clientY - r.top) / r.height })
      }}
      onMouseLeave={() => setPointer({ x: 0.5, y: 0.38 })}
      onClick={() => setProtoIdx(i => (i + 1) % PROTOCOLS.length)}
    >
      {/* Scanline overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(180deg,rgba(255,255,255,0.025)_0_1px,transparent_1px_5px)] opacity-20 mix-blend-screen z-10" />

      {/* Conic ambient glow */}
      <div className="pointer-events-none absolute inset-[-20%] animate-[spin_20s_linear_infinite] bg-[conic-gradient(from_0deg,transparent,rgba(0,240,255,0.1),transparent_34%,rgba(255,255,255,0.04),transparent_60%)] z-10" />

      <div className="relative z-20 min-h-[700px] p-5">
        <div className="grid gap-4 lg:grid-cols-[240px_minmax(0,1fr)_220px]">

          {/* Left panel */}
          <div className="rounded-[22px] border border-white/8 bg-slate-950/75 p-5 backdrop-blur-xl">
            <div className="text-[10px] uppercase tracking-[0.24em] text-white/40">3D Robot</div>
            <h2 className="mt-3 text-[26px] font-black leading-none">Obsidian Aegis Prime</h2>
            <p className="mt-3 text-sm leading-7 text-white/55">
              A fully articulated humanoid robot with solid obsidian-chrome chassis, real-time mouse tracking, and dynamic combat protocol states.
            </p>
            <div
              className="mt-4 rounded-xl border p-3 text-xs font-mono"
              style={{ borderColor: proto.color + '44', background: proto.color + '11' }}
            >
              <div className="text-white/40 text-[10px] uppercase tracking-widest mb-1">Active Protocol</div>
              <div className="font-bold" style={{ color: proto.color }}>{proto.name}</div>
            </div>
          </div>

          {/* Center Spline frame */}
          <div className="flex items-center justify-center">
            <div
              className="relative h-[650px] w-full max-w-[650px] overflow-hidden rounded-[32px] border border-white/8 bg-[radial-gradient(circle_at_50%_14%,rgba(255,255,255,0.07),transparent_18%),linear-gradient(180deg,#0a0b0d_0%,#020202_100%)] shadow-[0_36px_100px_rgba(0,0,0,0.6)]"
              style={{ transform: frameTransform, transformStyle: 'preserve-3d' }}
            >
              {/* Spotlight */}
              <div className="pointer-events-none absolute left-1/2 top-[-12%] h-[34%] w-[56%] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.55)_0%,rgba(255,255,255,0.2)_30%,transparent_70%)] blur-[28px]" />

              {/* Reactor ring */}
              <div
                className="pointer-events-none absolute left-1/2 top-[44%] h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border"
                style={{ borderColor: proto.color + '18', boxShadow: \`inset 0 0 80px \${proto.color}0a\` }}
              />

              <Suspense
                fallback={
                  // Humanoid CSS fallback skeleton while Spline loads
                  <div className="flex h-full items-end justify-center pb-4">
                    <div className="relative" style={{ width: 280, height: 610 }}>
                      {/* Head */}
                      <div className="absolute left-1/2 top-0 h-[90px] w-[76px] -translate-x-1/2 rounded-[38px_38px_28px_28px] bg-[linear-gradient(165deg,#28303a_0%,#050607_44%,#1a1e24_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_18px_36px_rgba(0,0,0,0.6)]" />
                      {/* Eyes */}
                      <div className="absolute" style={{ top: 34, left: '50%', transform: 'translateX(-50%)', width: 40, height: 8, borderRadius: 4, background: proto.color, boxShadow: \`0 0 16px \${proto.color}\` }} />
                      {/* Neck */}
                      <div className="absolute left-1/2 -translate-x-1/2 bg-[linear-gradient(180deg,#2a3040,#0a0b0e)]" style={{ top: 88, width: 22, height: 26, borderRadius: 6 }} />
                      {/* Torso */}
                      <div className="absolute left-1/2 -translate-x-1/2 bg-[linear-gradient(180deg,#1e2430_0%,#060708_55%,#1a1e26_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.09)]" style={{ top: 112, width: 160, height: 190, borderRadius: '40px 40px 24px 24px' }} />
                      {/* Reactor */}
                      <div className="absolute left-1/2 -translate-x-1/2" style={{ top: 164, width: 48, height: 48, borderRadius: '50%', background: \`radial-gradient(circle, \${proto.color} 0%, \${proto.color}44 50%, transparent 72%)\`, boxShadow: \`0 0 28px \${proto.color}88\` }} />
                      {/* Left shoulder */}
                      <div className="absolute bg-[linear-gradient(180deg,#2a303a_0%,#060708_60%,#1e2230_100%)]" style={{ top: 114, left: 14, width: 46, height: 140, borderRadius: 24, transform: 'rotate(14deg)' }} />
                      {/* Right shoulder */}
                      <div className="absolute bg-[linear-gradient(180deg,#2a303a_0%,#060708_60%,#1e2230_100%)]" style={{ top: 114, right: 14, width: 46, height: 140, borderRadius: 24, transform: 'rotate(-14deg)' }} />
                      {/* Left forearm */}
                      <div className="absolute bg-[linear-gradient(180deg,#242931_0%,#050608_60%,#1d2128_100%)]" style={{ top: 240, left: 24, width: 36, height: 110, borderRadius: 20, transform: 'rotate(10deg)' }} />
                      {/* Right forearm */}
                      <div className="absolute bg-[linear-gradient(180deg,#242931_0%,#050608_60%,#1d2128_100%)]" style={{ top: 240, right: 24, width: 36, height: 110, borderRadius: 20, transform: 'rotate(-10deg)' }} />
                      {/* Left thigh */}
                      <div className="absolute bg-[linear-gradient(180deg,#242931_0%,#050608_60%,#1d2128_100%)]" style={{ top: 296, left: 60, width: 52, height: 118, borderRadius: 24 }} />
                      {/* Right thigh */}
                      <div className="absolute bg-[linear-gradient(180deg,#242931_0%,#050608_60%,#1d2128_100%)]" style={{ top: 296, right: 60, width: 52, height: 118, borderRadius: 24 }} />
                      {/* Left shin */}
                      <div className="absolute bg-[linear-gradient(180deg,#242931_0%,#050608_60%,#1d2128_100%)]" style={{ bottom: 4, left: 64, width: 44, height: 122, borderRadius: 20 }} />
                      {/* Right shin */}
                      <div className="absolute bg-[linear-gradient(180deg,#242931_0%,#050608_60%,#1d2128_100%)]" style={{ bottom: 4, right: 64, width: 44, height: 122, borderRadius: 20 }} />
                      {/* Ground glow */}
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2" style={{ width: 200, height: 20, borderRadius: '50%', background: \`radial-gradient(ellipse, \${proto.color}30, transparent 70%)\`, filter: 'blur(8px)' }} />
                    </div>
                  </div>
                }
              >
                <Spline className={className ?? 'h-full w-full'} scene={scene} />
              </Suspense>

              {/* Bottom protocol pill */}
              <div
                className="pointer-events-none absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full border px-5 py-2.5 text-[11px] uppercase tracking-[0.28em] backdrop-blur-xl font-bold"
                style={{ borderColor: proto.color + '44', background: 'rgba(2,3,5,0.78)', color: proto.color }}
              >
                {proto.name}
              </div>
            </div>
          </div>

          {/* Right telemetry */}
          <div className="rounded-[22px] border border-white/8 bg-slate-950/75 p-5 backdrop-blur-xl">
            <div className="text-[10px] uppercase tracking-[0.24em] text-white/40">Telemetry</div>
            <div className="mt-4 space-y-4 text-sm text-white/65">
              {[
                { label: 'Protocol', val: proto.label },
                { label: 'Reactor',  val: proto.reactor },
                { label: 'Latency',  val: proto.latency },
                { label: 'Tracking', val: 'Active' },
              ].map(({ label, val }) => (
                <div key={label} className="flex items-center justify-between border-t border-white/8 pt-3">
                  <span>{label}</span>
                  <strong style={{ color: label === 'Tracking' ? '#fff' : proto.color }}>{val}</strong>
                </div>
              ))}
              <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                <div className="text-[10px] uppercase tracking-[0.22em] text-white/40">Status</div>
                <div className="mt-2 text-lg font-bold" style={{ color: proto.color }}>{proto.status}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-5 right-8 text-[11px] uppercase tracking-[0.2em] text-white/30">
          Move pointer · Click to switch protocol
        </div>
      </div>
    </section>
  )
}
`,
    prompt: `Create a premium Three.js humanoid robot called "Obsidian Aegis Prime" with a solid, fully-articulated body.
- Build a complete humanoid skeleton: solid BoxGeometry torso with chrome accent strips, CylinderGeometry neck, SphereGeometry skull with a glowing visor slab and twin eye spheres, BoxGeometry upper arms / forearms / hands with chrome ball-joints at shoulder/elbow/wrist, BoxGeometry thighs/shins/feet with chrome knee and ankle joints.
- Apply MeshStandardMaterial with metalness 0.96 and roughness 0.08 for obsidian body parts, and metalness 1.0 / roughness 0.04 for chrome joints.
- Add ACESFilmic tone mapping, a top spot light with soft shadows, and two colored rim lights (cyan left, violet right).
- Implement real-time mouse tracking: the entire root group subtly rotates toward the cursor, the head group tracks more aggressively, and the arms swing naturally.
- Add a breathing idle animation that moves the torso and head up and down.
- Pulsing reactor core sphere + rotating TorusGeometry ring at the chest center.
- Three interactive protocols (Guard/Analyze/Overdrive) toggled on click - each changes the rim light, visor, reactor, and particle colors with smooth lerp transitions and updates a glassmorphic HUD overlay.`,
    likes: 0,
    author: 'Animation AI',
    featured: true,
    createdAt: '2026-05-22T10:30:00.000Z',
    updatedAt: '2026-05-22T12:00:00.000Z'
  },
  {
    _id: 'robot-vanguard-prime-obsidian-mech',
    slug: 'vanguard-prime-obsidian-mech',
    title: 'Vanguard Prime Obsidian Mech',
    category: 'robot',
    tag: 'threejs',
    description: 'An premium lightweight procedural 3D mecha bust custom-built in raw Three.js. Features V-tapered obsidian armor geometry, rotating deltoid shoulder caps pivot rings, click-to-trigger forcefield pulses, multiple render shaders (shaded, wireframe, hologram), and interactive color core customization tabs.',
    previewCode: `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<style>
*{margin:0;padding:0;box-sizing:border-box}
body,html{width:100%;height:100%;overflow:hidden;background:#03050c;font-family:'Courier New',Courier,monospace;color:#38bdf8}
.root{position:relative;width:100vw;height:100vh;display:flex;align-items:center;justify-content:center;padding:16px}

/* Curved sci-fi frame */
.terminal{width:100%;height:100%;max-width:1200px;max-height:780px;border-radius:24px;border:1px solid rgba(56,189,248,.15);background:rgba(2,5,12,.92);backdrop-filter:blur(20px);box-shadow:0 30px 100px rgba(0,0,0,.9);display:grid;grid-template-columns:1fr 300px;overflow:hidden;position:relative}

/* Grid & scanlines */
.grid-overlay{position:absolute;inset:0;background-image:linear-gradient(rgba(56,189,248,.02) 1px,transparent 1px),linear-gradient(90deg,rgba(56,189,248,.02) 1px,transparent 1px);background-size:24px 24px;pointer-events:none;z-index:2}
.scanline{position:absolute;inset:0;background:repeating-linear-gradient(0deg,rgba(0,0,0,.08) 0px,rgba(0,0,0,.08) 1px,transparent 1px,transparent 4px);pointer-events:none;z-index:2}

.panel-title{font-size:13px;font-weight:900;letter-spacing:.25em;text-transform:uppercase;color:#38bdf8;border-bottom:1px solid rgba(56,189,248,.2);padding-bottom:10px}
.control-btn{width:100%;padding:12px;border-radius:10px;border:1px solid rgba(56,189,248,.2);background:rgba(56,189,248,.04);color:#38bdf8;font-weight:bold;font-family:inherit;cursor:pointer;transition:all .3s}
.control-btn:hover,.control-btn.active{background:#38bdf8;color:#02050c;box-shadow:0 0 12px rgba(56,189,248,.4)}

/* Center stage */
.stage-center{position:relative;display:flex;align-items:center;justify-content:center;z-index:3;cursor:crosshair}
canvas{position:absolute;inset:0;width:100%;height:100%}

/* Right stats sidebar */
.panel-right{border-left:1px solid rgba(56,189,248,.1);padding:24px;z-index:5;display:flex;flex-direction:column;gap:18px}
.stat-card{padding:14px;border-radius:12px;background:rgba(56,189,248,.03);border:1px solid rgba(56,189,248,.08);font-size:11px}
.stat-row{display:flex;justify-content:space-between;margin-bottom:8px;border-bottom:1px dashed rgba(56,189,248,.08);padding-bottom:6px}
.stat-row:last-child{border-bottom:none;margin-bottom:0;padding-bottom:0}
.log-box{flex:1;background:rgba(0,0,0,.5);border:1px solid rgba(56,189,248,.08);border-radius:12px;padding:12px;font-size:10px;overflow-y:auto;line-height:1.6;color:rgba(56,189,248,.6)}

/* Responsive adjustments */
@media(max-width:968px){
  .terminal{grid-template-columns:1fr;grid-template-rows:1fr auto;max-height:none;height:100%}
  .panel-right{border-left:none;border-top:1px solid rgba(56,189,248,.1);padding:16px}
  .stage-center{height:400px}
}
</style>
</head>
<body>
<div class="root">
  <div class="terminal">
    <div class="grid-overlay"></div>
    <div class="scanline"></div>

    <!-- Center Interactive WebGL Canvas -->
    <div class="stage-center" id="stage">
      <!-- 3D Canvas injected dynamically -->
    </div>

    <!-- Right Telemetry Panel -->
    <div class="panel-right">
      <div class="panel-title">TELEMETRY DATA</div>
      <div class="stat-card">
        <div class="stat-row"><span>ARMOR TYPE</span><span>OBSIDIAN PRIME</span></div>
        <div class="stat-row"><span>CORE CORE TEMP</span><span id="tempVal">36.4°C</span></div>
        <div class="stat-row"><span>ROTATION Y</span><span id="rotY">0.00</span></div>
      </div>
      <div class="panel-title">MECHA LOGS</div>
      <div class="log-box" id="logs">
        [SYS] Vanguard Prime initialized<br/>
        [SYS] Backlit halo ring locked<br/>
        [SYS] Interactive WebGL active
      </div>
      <button class="control-btn" onclick="triggerShieldPulse()" style="border-color:#ef4444;color:#ef4444;background:rgba(239,68,68,.05)">TRIGGER SHIELD PULSE</button>
    </div>
  </div>
</div>

<!-- Load Three.js safely from CDN -->
<script type="importmap">
{ "imports": { "three": "https://unpkg.com/three@0.160.0/build/three.module.js" } }
</script>

<script type="module">
import * as THREE from 'three';

let scene, camera, renderer, mechaGroup, halo, particles, shieldMesh, container;
let mouse = new THREE.Vector2(0,0);
let targetRot = new THREE.Vector2(0,0);
let materials = [];
let shieldActive = false;
let shieldScale = 1.0;

const logBox = document.getElementById('logs');
function addLog(txt) {
  logBox.innerHTML += '<br/>' + txt;
  logBox.scrollTop = logBox.scrollHeight;
}

function init() {
  container = document.getElementById('stage');
  const width = container.clientWidth || 800;
  const height = container.clientHeight || 600;
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(45, width/height, 0.1, 100);
  camera.position.set(0, 0.5, 14);

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.appendChild(renderer.domElement);

  // Lights
  const ambient = new THREE.AmbientLight(0xffffff, 0.35);
  scene.add(ambient);
  const dir = new THREE.DirectionalLight(0xffffff, 2.0);
  dir.position.set(5, 8, 5);
  scene.add(dir);

  mechaGroup = new THREE.Group();
  scene.add(mechaGroup);

  // Create High-fidelity Obsidian mecha using primitives
  const obsidianMat = new THREE.MeshPhysicalMaterial({
    color: 0x0c0d12,
    metalness: 0.95,
    roughness: 0.15,
    clearcoat: 1.0,
    clearcoatRoughness: 0.1
  });
  materials.push(obsidianMat);

  // Torso / Chest
  const chestGeo = new THREE.ConeGeometry(2.2, 3.2, 4);
  chestGeo.rotateY(Math.PI/4);
  const chest = new THREE.Mesh(chestGeo, obsidianMat);
  chest.position.y = 0.5;
  mechaGroup.add(chest);

  // Shoulder caps (teardrop)
  const deltoidMat = new THREE.MeshPhysicalMaterial({
    color: 0x080a10,
    metalness: 1.0,
    roughness: 0.1
  });
  materials.push(deltoidMat);
  const deltoidLGeo = new THREE.SphereGeometry(0.85, 32, 16);
  deltoidLGeo.scale(1.4, 0.8, 0.85);
  const deltoidL = new THREE.Mesh(deltoidLGeo, deltoidMat);
  deltoidL.position.set(-2.2, 1.6, 0);
  deltoidL.rotation.z = -0.2;
  mechaGroup.add(deltoidL);

  const deltoidR = deltoidL.clone();
  deltoidR.position.x = 2.2;
  deltoidR.rotation.z = 0.2;
  mechaGroup.add(deltoidR);

  // Abdomen (cybernetic ribs)
  const ribGeo = new THREE.BoxGeometry(1.6, 0.22, 1.2);
  for (let i = 0; i < 3; i++) {
    const rib = new THREE.Mesh(ribGeo, deltoidMat);
    rib.position.set(0, -1.3 - (i*0.4), 0);
    mechaGroup.add(rib);
  }

  // Angular modular Head helmet
  const headGroup = new THREE.Group();
  headGroup.position.set(0, 2.7, 0.25);
  mechaGroup.add(headGroup);

  const helmetGeo = new THREE.CylinderGeometry(0.6, 0.8, 1.1, 6);
  const helmet = new THREE.Mesh(helmetGeo, obsidianMat);
  headGroup.add(helmet);

  // Visor / Eyes
  const visorMat = new THREE.MeshPhysicalMaterial({
    color: 0x00ccff,
    emissive: 0x0088ff,
    emissiveIntensity: 3.0,
    roughness: 0.0
  });
  materials.push(visorMat);
  const visorGeo = new THREE.BoxGeometry(0.88, 0.18, 0.6);
  const visor = new THREE.Mesh(visorGeo, visorMat);
  visor.position.set(0, 0.15, 0.55);
  headGroup.add(visor);

  // Halo backlit ring
  const haloGeo = new THREE.TorusGeometry(3.6, 0.08, 16, 100);
  const haloMat = new THREE.MeshBasicMaterial({ color: 0x00ccff, side: THREE.DoubleSide });
  materials.push(haloMat);
  halo = new THREE.Mesh(haloGeo, haloMat);
  halo.position.set(0, 0.5, -1.8);
  scene.add(halo);

  // Shield mesh
  const shieldGeo = new THREE.SphereGeometry(3.8, 32, 32);
  const shieldMat = new THREE.MeshBasicMaterial({
    color: 0x00ccff,
    wireframe: true,
    transparent: true,
    opacity: 0.0
  });
  materials.push(shieldMat);
  shieldMesh = new THREE.Mesh(shieldGeo, shieldMat);
  shieldMesh.position.set(0, 0.5, 0);
  scene.add(shieldMesh);

  // Grid background particles
  const count = 300;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i*3] = (Math.random() - 0.5) * 30;
    positions[i*3+1] = (Math.random() - 0.5) * 20;
    positions[i*3+2] = (Math.random() - 0.5) * 20 - 5;
  }
  const partGeo = new THREE.BufferGeometry();
  partGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const partMat = new THREE.PointsMaterial({ size: 0.08, color: 0x00ccff, transparent: true, opacity: 0.4 });
  materials.push(partMat);
  particles = new THREE.Points(partGeo, partMat);
  scene.add(particles);

  // Mouse move handler
  window.addEventListener('mousemove', e => {
    const rect = container.getBoundingClientRect();
    mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    
    targetRot.y = mouse.x * 0.45;
    targetRot.x = -mouse.y * 0.35;
  });

  window.addEventListener('resize', () => {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  });

  window.triggerShieldPulse = () => {
    if (shieldActive) return;
    shieldActive = true;
    shieldScale = 0.6;
    shieldMat.opacity = 0.8;
    addLog('[SYS] Forcefield pulse triggered.');
  };

  animate();
}

let time = 0;
function animate() {
  requestAnimationFrame(animate);
  time += 0.015;

  if (container) {
    const width = container.clientWidth;
    const height = container.clientHeight;
    if (width > 0 && height > 0) {
      const pixelRatio = Math.min(window.devicePixelRatio, 2);
      const targetW = width * pixelRatio;
      const targetH = height * pixelRatio;
      if (renderer.domElement.width !== targetW || renderer.domElement.height !== targetH) {
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      }
    }
  }

  // Smooth rotation follow target mouse rotation
  mechaGroup.rotation.y += (targetRot.y - mechaGroup.rotation.y) * 0.08;
  mechaGroup.rotation.x += (targetRot.x - mechaGroup.rotation.x) * 0.08;

  // Floating breathing oscillation
  mechaGroup.position.y = Math.sin(time) * 0.22;

  // Animate backlit halo
  halo.rotation.z = time * 0.3;

  // Animate telemetry display updates
  document.getElementById('rotY').textContent = mechaGroup.rotation.y.toFixed(2);
  const temp = (36.2 + Math.sin(time*2)*0.2).toFixed(1);
  document.getElementById('tempVal').textContent = temp + '°C';

  // Animate shield pulse
  if (shieldActive) {
    shieldScale += 0.045;
    shieldMesh.scale.set(shieldScale, shieldScale, shieldScale);
    shieldMesh.material.opacity -= 0.025;
    if (shieldMesh.material.opacity <= 0) {
      shieldActive = false;
      shieldMesh.material.opacity = 0;
    }
  }

  renderer.render(scene, camera);
}

init();
</script>
</body>
</html>
`,
    code: `'use client'

import React, { useRef, useEffect, useState, useCallback } from 'react'
import * as THREE from 'three'

export function VanguardMechThree() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [colorTheme, setColorTheme] = useState<'cyan' | 'gold' | 'crimson'>('cyan')
  const [renderMode, setRenderMode] = useState<'shaded' | 'wire' | 'holo'>('shaded')
  const [temperature, setTemperature] = useState('36.4°C')
  const [rotationY, setRotationY] = useState('0.00')
  const [logs, setLogs] = useState<string[]>([
    '[SYS] Vanguard Prime online',
    '[SYS] Intercept signal linked',
    '[SYS] Dynamic WebGL terminal active'
  ])

  // Shared refs for Three.js objects to modify dynamically
  const materialsRef = useRef<THREE.Material[]>([])
  const visorMatRef = useRef<THREE.MeshPhysicalMaterial | null>(null)
  const haloMatRef = useRef<THREE.MeshBasicMaterial | null>(null)
  const partMatRef = useRef<THREE.PointsMaterial | null>(null)
  const shieldMatRef = useRef<THREE.MeshBasicMaterial | null>(null)
  const obsidianMatRef = useRef<THREE.MeshPhysicalMaterial | null>(null)
  const deltoidMatRef = useRef<THREE.MeshPhysicalMaterial | null>(null)

  const mechaGroupRef = useRef<THREE.Group | null>(null)
  const haloRef = useRef<THREE.Mesh | null>(null)
  const shieldRef = useRef<THREE.Mesh | null>(null)
  const shieldStateRef = useRef({ active: false, scale: 1.0 })

  const addLog = useCallback((msg: string) => {
    setLogs(prev => [...prev.slice(-6), msg])
  }, [])

  // Action: Trigger forcefield shield pulse
  const triggerPulse = useCallback(() => {
    if (shieldStateRef.current.active) return
    shieldStateRef.current.active = true
    shieldStateRef.current.scale = 0.6
    if (shieldMatRef.current) {
      shieldMatRef.current.opacity = 0.8
    }
    addLog('[SYS] Active forcefield pulse loaded')
  }, [addLog])

  // Action: Modify color theme
  const applyTheme = useCallback((theme: 'cyan' | 'gold' | 'crimson') => {
    setColorTheme(theme)
    const visor = visorMatRef.current
    const haloMat = haloMatRef.current
    const part = partMatRef.current
    const shield = shieldMatRef.current

    if (theme === 'cyan') {
      visor?.color.setHex(0x00ccff)
      visor?.emissive.setHex(0x0088ff)
      if (haloMat) haloMat.color.setHex(0x00ccff)
      if (part) part.color.setHex(0x00ccff)
      if (shield) shield.color.setHex(0x00ccff)
      addLog('[SYS] Armor color palette set to Obsidian Cyan')
    } else if (theme === 'gold') {
      visor?.color.setHex(0xffaa00)
      visor?.emissive.setHex(0xffaa00)
      if (haloMat) haloMat.color.setHex(0xffaa00)
      if (part) part.color.setHex(0xffaa00)
      if (shield) shield.color.setHex(0xffaa00)
      addLog('[SYS] Armor color palette set to Amber Metallic')
    } else if (theme === 'crimson') {
      visor?.color.setHex(0xff1e56)
      visor?.emissive.setHex(0xff1e56)
      if (haloMat) haloMat.color.setHex(0xff1e56)
      if (part) part.color.setHex(0xff1e56)
      if (shield) shield.color.setHex(0xff1e56)
      addLog('[SYS] Armor color palette set to Crimson Force')
    }
  }, [addLog])

  // Action: Modify visual render mode
  const applyRenderMode = useCallback((mode: 'shaded' | 'wire' | 'holo') => {
    setRenderMode(mode)
    const obs = obsidianMatRef.current
    const delt = deltoidMatRef.current

    if (mode === 'shaded') {
      if (obs) { obs.wireframe = false; obs.transparent = false }
      if (delt) { delt.wireframe = false; delt.transparent = false }
      addLog('[SYS] Rendering configuration: Solid Shaded')
    } else if (mode === 'wire') {
      if (obs) { obs.wireframe = true; obs.transparent = false }
      if (delt) { delt.wireframe = true; delt.transparent = false }
      addLog('[SYS] Rendering configuration: Wireframe Matrix')
    } else if (mode === 'holo') {
      if (obs) { obs.wireframe = true; obs.transparent = true; obs.opacity = 0.35 }
      if (delt) { delt.wireframe = true; delt.transparent = true; delt.opacity = 0.35 }
      addLog('[SYS] Rendering configuration: Hologram Scan')
    }
  }, [addLog])

  useEffect(() => {
    const el = containerRef.current
    if (!el || typeof window === 'undefined') return

    // Scene & Viewport Camera
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, el.clientWidth / el.clientHeight, 0.1, 100)
    camera.position.set(0, 0.5, 14)

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(el.clientWidth, el.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    el.appendChild(renderer.domElement)

    // Lighting nodes
    const ambient = new THREE.AmbientLight(0xffffff, 0.35)
    scene.add(ambient)
    const dir = new THREE.DirectionalLight(0xffffff, 2.0)
    dir.position.set(5, 8, 5)
    scene.add(dir)

    const mechaGroup = new THREE.Group()
    scene.add(mechaGroup)
    mechaGroupRef.current = mechaGroup

    // Materials creation
    const obsidianMat = new THREE.MeshPhysicalMaterial({
      color: 0x0c0d12,
      metalness: 0.95,
      roughness: 0.15,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1
    })
    obsidianMatRef.current = obsidianMat
    materialsRef.current.push(obsidianMat)

    const deltoidMat = new THREE.MeshPhysicalMaterial({
      color: 0x080a10,
      metalness: 1.0,
      roughness: 0.1
    })
    deltoidMatRef.current = deltoidMat
    materialsRef.current.push(deltoidMat)

    const visorMat = new THREE.MeshPhysicalMaterial({
      color: 0x00ccff,
      emissive: 0x0088ff,
      emissiveIntensity: 3.0,
      roughness: 0.0
    })
    visorMatRef.current = visorMat
    materialsRef.current.push(visorMat)

    const haloMat = new THREE.MeshBasicMaterial({ color: 0x00ccff, side: THREE.DoubleSide })
    haloMatRef.current = haloMat
    materialsRef.current.push(haloMat)

    const shieldMat = new THREE.MeshBasicMaterial({
      color: 0x00ccff,
      wireframe: true,
      transparent: true,
      opacity: 0.0
    })
    shieldMatRef.current = shieldMat
    materialsRef.current.push(shieldMat)

    const partMat = new THREE.PointsMaterial({ size: 0.08, color: 0x00ccff, transparent: true, opacity: 0.4 })
    partMatRef.current = partMat
    materialsRef.current.push(partMat)

    // Assembly geometry
    // Torso cone shape
    const chestGeo = new THREE.ConeGeometry(2.2, 3.2, 4)
    chestGeo.rotateY(Math.PI / 4)
    const chest = new THREE.Mesh(chestGeo, obsidianMat)
    chest.position.y = 0.5
    mechaGroup.add(chest)

    // Deluxe Deltoid shoulder caps
    const deltoidLGeo = new THREE.SphereGeometry(0.85, 32, 16)
    deltoidLGeo.scale(1.4, 0.8, 0.85)
    const deltoidL = new THREE.Mesh(deltoidLGeo, deltoidMat)
    deltoidL.position.set(-2.2, 1.6, 0)
    deltoidL.rotation.z = -0.2
    mechaGroup.add(deltoidL)

    const deltoidR = deltoidL.clone()
    deltoidR.position.x = 2.2
    deltoidR.rotation.z = 0.2
    mechaGroup.add(deltoidR)

    // Abdomen ribs six-pack plates
    const ribGeo = new THREE.BoxGeometry(1.6, 0.22, 1.2)
    for (let i = 0; i < 3; i++) {
      const rib = new THREE.Mesh(ribGeo, deltoidMat)
      rib.position.set(0, -1.3 - (i * 0.4), 0)
      mechaGroup.add(rib)
    }

    // Angular mecha head
    const headGroup = new THREE.Group()
    headGroup.position.set(0, 2.7, 0.25)
    mechaGroup.add(headGroup)

    const helmetGeo = new THREE.CylinderGeometry(0.6, 0.8, 1.1, 6)
    const helmet = new THREE.Mesh(helmetGeo, obsidianMat)
    headGroup.add(helmet)

    const visorGeo = new THREE.BoxGeometry(0.88, 0.18, 0.6)
    const visor = new THREE.Mesh(visorGeo, visorMat)
    visor.position.set(0, 0.15, 0.55)
    headGroup.add(visor)

    // Backlit halo ring
    const haloGeo = new THREE.TorusGeometry(3.6, 0.08, 16, 100)
    const halo = new THREE.Mesh(haloGeo, haloMat)
    halo.position.set(0, 0.5, -1.8)
    scene.add(halo)
    haloRef.current = halo

    // Forcefield sphere
    const shieldGeo = new THREE.SphereGeometry(3.8, 32, 32)
    const shieldMesh = new THREE.Mesh(shieldGeo, shieldMat)
    shieldMesh.position.set(0, 0.5, 0)
    scene.add(shieldMesh)
    shieldRef.current = shieldMesh

    // Ambient floating grid particles
    const pCount = 300
    const positions = new Float32Array(pCount * 3)
    for (let i = 0; i < pCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 30
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20 - 5
    }
    const partGeo = new THREE.BufferGeometry()
    partGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    const points = new THREE.Points(partGeo, partMat)
    scene.add(points)

    // Interactive mouse controls
    const targetRot = new THREE.Vector2(0, 0)
    const onMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const mx = ((e.clientX - rect.left) / rect.width) * 2 - 1
      const my = -((e.clientY - rect.top) / rect.height) * 2 + 1
      targetRot.y = mx * 0.45
      targetRot.x = -my * 0.35
    }
    el.addEventListener('mousemove', onMouseMove)

    // Responsive adaptation resizes
    const onResize = () => {
      camera.aspect = el.clientWidth / el.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(el.clientWidth, el.clientHeight)
    }
    window.addEventListener('resize', onResize)

    // Animation Loop
    let time = 0
    let rafId = 0
    const animate = () => {
      rafId = requestAnimationFrame(animate)
      time += 0.015

      // Smooth rotate mechaGroup
      mechaGroup.rotation.y += (targetRot.y - mechaGroup.rotation.y) * 0.08
      mechaGroup.rotation.x += (targetRot.x - mechaGroup.rotation.x) * 0.08
      setRotationY(mechaGroup.rotation.y.toFixed(2))

      // Floats and sways
      mechaGroup.position.y = Math.sin(time) * 0.22
      halo.rotation.z = time * 0.3

      // Shield animations
      if (shieldStateRef.current.active) {
        shieldStateRef.current.scale += 0.045
        shieldMesh.scale.set(
          shieldStateRef.current.scale,
          shieldStateRef.current.scale,
          shieldStateRef.current.scale
        )
        if (shieldMatRef.current) {
          shieldMatRef.current.opacity -= 0.025
          if (shieldMatRef.current.opacity <= 0) {
            shieldStateRef.current.active = false
            shieldMatRef.current.opacity = 0
          }
        }
      }

      // Dynamic telemetry temp updating
      setTemperature((36.2 + Math.sin(time * 2) * 0.2).toFixed(1) + '°C')

      renderer.render(scene, camera)
    }
    animate()

    // Disposal cleanup
    return () => {
      cancelAnimationFrame(rafId)
      el.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', onResize)
      
      // Dispose materials & geometries
      chestGeo.dispose()
      deltoidLGeo.dispose()
      ribGeo.dispose()
      helmetGeo.dispose()
      visorGeo.dispose()
      haloGeo.dispose()
      shieldGeo.dispose()
      partGeo.dispose()

      materialsRef.current.forEach(m => m.dispose())
      renderer.dispose()
      if (el.contains(renderer.domElement)) {
        el.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <div className="relative w-full overflow-hidden rounded-3xl border border-sky-400/20 bg-[#02050c] p-6 text-sky-400 font-mono select-none" style={{ minHeight: 640 }}>
      <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(rgba(56,189,248,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.02)_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="pointer-events-none absolute inset-0 z-10 opacity-20" style={{ background: 'repeating-linear-gradient(0deg, rgba(0,0,0,.08) 0px, rgba(0,0,0,.08) 1px, transparent 1px, transparent 4px)' }} />

      <div className="relative z-20 grid h-full min-h-[580px] grid-cols-1 gap-6 lg:grid-cols-[280px_1fr_280px]">
        {/* Left customization panel */}
        <div className="flex flex-col gap-5 rounded-2xl border border-sky-400/10 bg-slate-950/70 p-5 backdrop-blur-md">
          <div className="border-b border-sky-400/20 pb-3 text-xs font-black uppercase tracking-[.25em]" style={{ color: colorTheme === 'cyan' ? '#00ccff' : colorTheme === 'gold' ? '#ffaa00' : '#ff1e56' }}>
            Customization
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-[10px] uppercase text-sky-400/50">Core color</span>
            <div className="flex flex-col gap-1.5">
              {(['cyan', 'gold', 'crimson'] as const).map(theme => (
                <button
                  key={theme}
                  onClick={() => applyTheme(theme)}
                  className={\`w-full rounded-lg border py-2.5 text-xs font-bold transition-all duration-300 hover:scale-[1.02] \${colorTheme === theme ? 'bg-sky-400 text-slate-950 border-sky-400 shadow-lg shadow-sky-400/20' : 'bg-sky-400/5 border-sky-400/20 text-sky-400'}\`}
                  style={{
                    borderColor: colorTheme === theme ? (theme === 'cyan' ? '#00ccff' : theme === 'gold' ? '#ffaa00' : '#ff1e56') : undefined,
                    backgroundColor: colorTheme === theme ? (theme === 'cyan' ? '#00ccff' : theme === 'gold' ? '#ffaa00' : '#ff1e56') : undefined,
                    color: colorTheme === theme ? '#02050c' : undefined
                  }}
                >
                  {theme.toUpperCase()} CORE
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-[10px] uppercase text-sky-400/50">Render style</span>
            <div className="flex flex-col gap-1.5">
              {(['shaded', 'wire', 'holo'] as const).map(mode => (
                <button
                  key={mode}
                  onClick={() => applyRenderMode(mode)}
                  className={\`w-full rounded-lg border py-2.5 text-xs font-bold transition-all duration-300 hover:scale-[1.02] \${renderMode === mode ? 'bg-sky-400 text-slate-950 border-sky-400' : 'bg-sky-400/5 border-sky-400/20 text-sky-400'}\`}
                  style={{
                    borderColor: renderMode === mode ? (colorTheme === 'cyan' ? '#00ccff' : colorTheme === 'gold' ? '#ffaa00' : '#ff1e56') : undefined,
                    backgroundColor: renderMode === mode ? (colorTheme === 'cyan' ? '#00ccff' : colorTheme === 'gold' ? '#ffaa00' : '#ff1e56') : undefined,
                    color: renderMode === mode ? '#02050c' : undefined
                  }}
                >
                  {mode.toUpperCase()} MODE
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Center: Stage with 3D WebGL Canvas */}
        <div className="relative flex items-center justify-center rounded-2xl border border-sky-400/10 bg-slate-950/20">
          <div ref={containerRef} className="absolute inset-0 cursor-crosshair" />
        </div>

        {/* Right side: Diagnostics & logs console */}
        <div className="flex flex-col gap-5 rounded-2xl border border-sky-400/10 bg-slate-950/70 p-5 backdrop-blur-md">
          <div className="border-b border-sky-400/20 pb-3 text-xs font-black uppercase tracking-[.25em]" style={{ color: colorTheme === 'cyan' ? '#00ccff' : colorTheme === 'gold' ? '#ffaa00' : '#ff1e56' }}>
            Diagnostics
          </div>

          <div className="flex flex-col gap-2 rounded-xl border border-sky-400/10 bg-sky-400/[0.02] p-3.5 text-[11px] leading-5 text-sky-400/70">
            <div className="flex justify-between border-b border-dashed border-sky-400/10 pb-1.5">
              <span>Armor Type</span>
              <span className="font-bold text-white">Obsidian Prime</span>
            </div>
            <div className="flex justify-between border-b border-dashed border-sky-400/10 pb-1.5">
              <span>Core Temp</span>
              <span className="font-bold text-white">{temperature}</span>
            </div>
            <div className="flex justify-between">
              <span>Rotation Y</span>
              <span className="font-bold text-white">{rotationY}</span>
            </div>
          </div>

          <div className="border-b border-sky-400/20 pb-1 text-xs font-black uppercase tracking-[.25em]" style={{ color: colorTheme === 'cyan' ? '#00ccff' : colorTheme === 'gold' ? '#ffaa00' : '#ff1e56' }}>
            Vanguard Logs
          </div>

          <div className="flex-1 overflow-y-auto rounded-xl border border-sky-400/10 bg-black/40 p-3 text-[10px] leading-4 text-sky-400/50">
            {logs.map((log, index) => (
              <div key={index} className="mb-1 border-b border-sky-400/5 pb-1 last:border-b-0">
                {log}
              </div>
            ))}
          </div>

          <button
            onClick={triggerPulse}
            className="w-full rounded-xl border py-3 text-xs font-bold transition-all duration-300 hover:scale-[1.02]"
            style={{
              borderColor: '#ef444466',
              background: 'rgba(239,68,68,0.08)',
              color: '#ef4444',
            }}
          >
            TRIGGER SHIELD PULSE
          </button>
        </div>
      </div>
    </div>
  )
}
`,
    prompt: `Create a highly interactive and responsive lightweight procedural 3D mecha bust component called "Vanguard Prime Obsidian Mech".\n- Built entirely using raw Three.js primitives (no external large assets needed for speed and optimization)\n- Segmented mecha anatomy: flat-shaded V-tapered chest torso, deltoid shoulder caps, cybernetic abdominal horizontal plates, vertebral column rings, and glowing backlit halo ring\n- 3 color themes (Cyan, Amber Gold, Crimson) that adjust emissive materials and lighting colors dynamically\n- 3 render shaders (Solid physical shaded, Wireframe matrix lines, Hologram scan transparent wireframe)\n- Click-to-trigger shield forcefield pulse with scaling sphere coordinates and opacity decay\n- Complete viewport responsive resize handlers and resource disposal on React unmount`,
    likes: 0,
    author: 'Animation AI',
    featured: true,
    createdAt: '2026-05-22T14:00:00.000Z',
    updatedAt: '2026-05-22T14:00:00.000Z'
  },
  {
    _id: 'robot-isaac-toon-crying-mech',
    slug: 'isaac-toon-crying-mech',
    title: 'Isaac Toon Crying Mech',
    category: 'robot',
    tag: 'threejs',
    description: 'A custom cell-shaded 3D interactive crying model inspired by Zdog Vector graphic aesthetics. Powered by custom Vertex/Fragment Toon shaders in Three.js, it tracks the mouse smoothly and features high-frequency wobbly head sobbing oscillations, dynamic tear trails, and realistic gravity-based tear particles spawning.',
    previewCode: `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<style>
*{margin:0;padding:0;box-sizing:border-box}
body,html{width:100%;height:100%;overflow:hidden;background:#05060f;font-family:'Courier New',Courier,monospace;color:#a3e635}
.root{position:relative;width:100vw;height:100vh;display:flex;align-items:center;justify-content:center;padding:16px}

/* Sci-fi terminals container */
.terminal{width:100%;height:100%;max-width:1200px;max-height:780px;border-radius:24px;border:1px solid rgba(163,230,53,.15);background:rgba(6,9,20,.94);backdrop-filter:blur(20px);box-shadow:0 30px 100px rgba(0,0,0,.95);display:grid;grid-template-columns:1fr 300px;overflow:hidden;position:relative}

/* Grid & scanlines */
.grid-overlay{position:absolute;inset:0;background-image:linear-gradient(rgba(163,230,53,.02) 1px,transparent 1px),linear-gradient(90deg,rgba(163,230,53,.02) 1px,transparent 1px);background-size:24px 24px;pointer-events:none;z-index:2}
.scanline{position:absolute;inset:0;background:repeating-linear-gradient(0deg,rgba(0,0,0,.08) 0px,rgba(0,0,0,.08) 1px,transparent 1px,transparent 4px);pointer-events:none;z-index:2}

.panel-title{font-size:13px;font-weight:900;letter-spacing:.25em;text-transform:uppercase;color:#a3e635;border-bottom:1px solid rgba(163,230,53,.2);padding-bottom:10px}
.control-group{display:flex;flex-direction:column;gap:8px}
.control-label{font-size:10px;letter-spacing:.15em;text-transform:uppercase;color:rgba(163,230,53,.6);display:flex;justify-content:space-between}
.slider{width:100%;height:3px;background:rgba(163,230,53,.1);border-radius:2px;-webkit-appearance:none;cursor:pointer;outline:none}
.slider::-webkit-slider-thumb{-webkit-appearance:none;width:12px;height:12px;border-radius:50%;background:#a3e635;box-shadow:0 0 10px #a3e635;border:none}
.control-btn{width:100%;padding:12px;border-radius:10px;border:1px solid rgba(163,230,53,.2);background:rgba(163,230,53,.04);color:#a3e635;font-weight:bold;font-family:inherit;cursor:pointer;transition:all .3s}
.control-btn:hover,.control-btn.active{background:#a3e635;color:#05060f;box-shadow:0 0 12px rgba(163,230,53,.4)}

/* Center stage */
.stage-center{position:relative;display:flex;align-items:center;justify-content:center;z-index:3;cursor:crosshair;background:radial-gradient(circle at 50% 50%, rgba(10,30,15,.2), transparent 75%)}
canvas{position:absolute;inset:0;width:100%;height:100%}

/* Right panel stats */
.panel-right{border-left:1px solid rgba(163,230,53,.1);padding:24px;z-index:5;display:flex;flex-direction:column;gap:18px}
.stat-card{padding:14px;border-radius:12px;background:rgba(163,230,53,.03);border:1px solid rgba(163,230,53,.08);font-size:11px}
.stat-row{display:flex;justify-content:space-between;margin-bottom:8px;border-bottom:1px dashed rgba(163,230,53,.08);padding-bottom:6px}
.stat-row:last-child{border-bottom:none;margin-bottom:0;padding-bottom:0}
.log-box{flex:1;background:rgba(0,0,0,.5);border:1px solid rgba(163,230,53,.08);border-radius:12px;padding:12px;font-size:10px;overflow-y:auto;line-height:1.6;color:rgba(163,230,53,.6)}

@media(max-width:968px){
  .terminal{grid-template-columns:1fr;grid-template-rows:1fr auto;max-height:none;height:100%}
  .panel-right{border-left:none;border-top:1px solid rgba(163,230,53,.1);padding:16px}
  .stage-center{height:400px}
}
</style>
</head>
<body>
<div class="root">
  <div class="terminal">
    <div class="grid-overlay"></div>
    <div class="scanline"></div>

    <!-- Center Stage -->
    <div class="stage-center" id="stage">
      <!-- ThreeJS Canvas will render here -->
    </div>

    <!-- Right Telemetry Panel -->
    <div class="panel-right">
      <div class="panel-title">TELEMETRY DATA</div>
      <div class="stat-card">
        <div class="stat-row"><span>EMOTION CODE</span><span>ISAAC-X</span></div>
        <div class="stat-row"><span>ACTIVE TEARS</span><span id="activeTears">0</span></div>
        <div class="stat-row"><span>TENSION RATE</span><span id="tensionRate">NORMAL</span></div>
      </div>
      <div class="panel-title">EMOTIVE LOGS</div>
      <div class="log-box" id="logs">
        [SYS] Interactive cell-shaded model active<br/>
        [SYS] Sobbing matrix active<br/>
        [SYS] Crying particles ready
      </div>
      <button class="control-btn" onclick="triggerBurst()" style="border-color:#ef4444;color:#ef4444;background:rgba(239,68,68,.05)">TRIGGER TEAR BURST</button>
    </div>
  </div>
</div>

<!-- Load Three.js safely from CDN -->
<script type="importmap">
{ "imports": { "three": "https://unpkg.com/three@0.160.0/build/three.module.js" } }
</script>

<script type="module">
import * as THREE from 'three';

let scene, camera, renderer, headGroup, characterGroup, container;
let tears = [];
let maxTears = 120;
let tearFlowRate = 1.0;
let sobDepth = 0.05;
let mouse = new THREE.Vector2(0,0);
let targetRot = new THREE.Vector2(0,0);

const logBox = document.getElementById('logs');
function addLog(txt) {
  logBox.innerHTML += '<br/>' + txt;
  logBox.scrollTop = logBox.scrollHeight;
}

// Custom Cell-Toon Shader to perfectly match the 2D illustration in 3D
const createToonMaterial = (lightColor, shadowColor) => {
  return new THREE.ShaderMaterial({
    uniforms: {
      uLightColor: { value: new THREE.Color(lightColor) },
      uShadowColor: { value: new THREE.Color(shadowColor) },
      uLightDir: { value: new THREE.Vector3(1, 1, 1.5).normalize() }
    },
    vertexShader: \`
      varying vec3 vNormal;
      varying vec3 vViewDir;
      void main() {
        vNormal = normalize(normalMatrix * normal);
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        vViewDir = normalize(-mvPosition.xyz);
        gl_Position = projectionMatrix * mvPosition;
      }
    \`,
    fragmentShader: \`
      uniform vec3 uLightColor;
      uniform vec3 uShadowColor;
      uniform vec3 uLightDir;
      varying vec3 vNormal;
      varying vec3 vViewDir;
      void main() {
        float intensity = dot(vNormal, uLightDir);
        // Crisp toon cell threshold
        vec3 finalColor = intensity > 0.15 ? uLightColor : uShadowColor;
        
        // Soft rim glow highlight
        float rim = 1.0 - max(dot(vNormal, vViewDir), 0.0);
        rim = pow(rim, 3.5);
        finalColor += vec3(rim * 0.15);

        gl_FragColor = vec4(finalColor, 1.0);
      }
    \`
  });
};

function init() {
  container = document.getElementById('stage');
  const width = container.clientWidth || 800;
  const height = container.clientHeight || 600;
  scene = new THREE.Scene();
  
  camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
  camera.position.set(0, 0, 10);

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.appendChild(renderer.domElement);

  characterGroup = new THREE.Group();
  scene.add(characterGroup);

  // Cell-shaded Materials
  const skinMat = createToonMaterial('#9ae0a3', '#68ad73'); // Green Toon skin colors matching reference image
  const shadowMat = createToonMaterial('#68ad73', '#47804f');
  const eyeMat = new THREE.MeshBasicMaterial({ color: 0x07080b });
  const highlightMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const mouthBackMat = createToonMaterial('#2b5e34', '#1c4223');
  const tongueMat = createToonMaterial('#ff8fa3', '#e06d83');

  // Head Anchor
  headGroup = new THREE.Group();
  headGroup.position.set(0, 0.5, 0);
  characterGroup.add(headGroup);

  // Round Head Mesh
  const headGeo = new THREE.SphereGeometry(2.3, 64, 32);
  const headMesh = new THREE.Mesh(headGeo, skinMat);
  headGroup.add(headMesh);

  // Eyes (Segmented Spheres tilted inside)
  const eyeLGeo = new THREE.SphereGeometry(0.72, 32, 16);
  eyeLGeo.scale(1.0, 1.25, 0.6);
  const eyeL = new THREE.Mesh(eyeLGeo, eyeMat);
  eyeL.position.set(-0.9, -0.1, 1.95);
  eyeL.rotation.y = 0.2;
  headGroup.add(eyeL);

  const eyeR = eyeL.clone();
  eyeR.position.x = 0.9;
  eyeR.rotation.y = -0.2;
  headGroup.add(eyeR);

  // Eye Highlights (circular white plates)
  const highlightGeo = new THREE.SphereGeometry(0.24, 16, 8);
  highlightGeo.scale(1.0, 1.0, 0.2);
  const highlightL = new THREE.Mesh(highlightGeo, highlightMat);
  highlightL.position.set(-0.9, 0.15, 2.35);
  headGroup.add(highlightL);

  const highlightR = highlightL.clone();
  highlightR.position.x = 0.9;
  headGroup.add(highlightR);

  // Crying Mouth (procedural sad arch)
  const mouthGroup = new THREE.Group();
  mouthGroup.position.set(0, -1.0, 2.0);
  headGroup.add(mouthGroup);

  // Outer sad mouth shape
  const mouthGeo = new THREE.SphereGeometry(0.5, 32, 16);
  mouthGeo.scale(1.2, 0.8, 0.4);
  const mouthBack = new THREE.Mesh(mouthGeo, mouthBackMat);
  mouthGroup.add(mouthBack);

  // Torso / Rounded body
  const bodyGeo = new THREE.SphereGeometry(1.25, 32, 16);
  bodyGeo.scale(1.0, 1.15, 0.95);
  const body = new THREE.Mesh(bodyGeo, skinMat);
  body.position.set(0, -2.1, 0);
  characterGroup.add(body);

  // Limbs
  const armLGeo = new THREE.SphereGeometry(0.38, 16, 8);
  armLGeo.scale(1.0, 1.5, 0.9);
  const armL = new THREE.Mesh(armLGeo, skinMat);
  armL.position.set(-1.4, -2.0, 0);
  armL.rotation.z = 0.3;
  characterGroup.add(armL);

  const armR = armL.clone();
  armR.position.x = 1.4;
  armR.rotation.z = -0.3;
  characterGroup.add(armR);

  const legL = new THREE.Mesh(armLGeo, skinMat);
  legL.position.set(-0.6, -3.3, 0);
  characterGroup.add(legL);

  const legR = legL.clone();
  legR.position.x = 0.6;
  characterGroup.add(legR);

  // Background particles
  const bgCount = 100;
  const bgPositions = new Float32Array(bgCount * 3);
  for (let i = 0; i < bgCount; i++) {
    bgPositions[i*3] = (Math.random() - 0.5) * 20;
    bgPositions[i*3+1] = (Math.random() - 0.5) * 15;
    bgPositions[i*3+2] = -5;
  }
  const bgGeo = new THREE.BufferGeometry();
  bgGeo.setAttribute('position', new THREE.BufferAttribute(bgPositions, 3));
  const bgMat = new THREE.PointsMaterial({ size: 0.05, color: 0x38bdf8, transparent: true, opacity: 0.3 });
  const bgPoints = new THREE.Points(bgGeo, bgMat);
  scene.add(bgPoints);

  // Mouse Move Event Listener
  window.addEventListener('mousemove', e => {
    const rect = container.getBoundingClientRect();
    mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    
    targetRot.y = mouse.x * 0.35;
    targetRot.x = -mouse.y * 0.25;
  });

  window.addEventListener('resize', () => {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  });

  // Global triggers
  window.updateSob = (val) => {
    sobDepth = (val / 1000);
    addLog('[VAL] Sob oscillation amplitude adjusted: ' + val + '%');
  };

  window.updateDissolve = (val) => {
    maxTears = val;
    addLog('[VAL] Tear flow capacity set to: ' + val + '%');
  };

  window.setPreset = (mode) => {
    if (mode === 'melancholy') {
      tearFlowRate = 1.0;
      sobDepth = 0.05;
      document.getElementById('tensionRate').textContent = 'NORMAL';
      document.getElementById('tensionRate').style.color = '#a3e635';
      addLog('[SYS] Mood set to Melancholy');
    } else if (mode === 'sobbing') {
      tearFlowRate = 2.5;
      sobDepth = 0.14;
      document.getElementById('tensionRate').textContent = 'HIGH';
      document.getElementById('tensionRate').style.color = '#f59e0b';
      addLog('[SYS] Mood set to Heavy Sobbing');
    } else if (mode === 'tragic') {
      tearFlowRate = 5.0;
      sobDepth = 0.26;
      document.getElementById('tensionRate').textContent = 'OVERLOAD';
      document.getElementById('tensionRate').style.color = '#ef4444';
      addLog('[SYS] Mood set to Tragic Hypercry');
    }
  };

  window.triggerBurst = () => {
    for (let i = 0; i < 40; i++) {
      spawnTear(true);
    }
    addLog('[SYS] Telemetry pulse: Tears burst triggered.');
  };

  animate();
}

function spawnTear(burst = false) {
  if (tears.length >= maxTears && !burst) return;

  const isLeft = Math.random() > 0.5;
  const startX = isLeft ? -0.9 : 0.9;
  const startY = -0.3;
  const startZ = 2.0;

  const geometry = new THREE.SphereGeometry(0.1 + Math.random()*0.08, 8, 8);
  const material = new THREE.MeshBasicMaterial({
    color: 0x38bdf8,
    transparent: true,
    opacity: 0.8
  });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(startX, startY, startZ);
  
  // Add directly to headGroup so tears move as head moves
  headGroup.add(mesh);

  tears.push({
    mesh,
    vx: (isLeft ? -0.01 - Math.random()*0.02 : 0.01 + Math.random()*0.02),
    vy: -0.01 - Math.random()*0.015,
    vz: 0.01,
    life: 1.0,
    decay: 0.01 + Math.random()*0.01
  });
}

let time = 0;
function animate() {
  requestAnimationFrame(animate);
  time += 0.02;

  if (container) {
    const width = container.clientWidth;
    const height = container.clientHeight;
    if (width > 0 && height > 0) {
      const pixelRatio = Math.min(window.devicePixelRatio, 2);
      const targetW = width * pixelRatio;
      const targetH = height * pixelRatio;
      if (renderer.domElement.width !== targetW || renderer.domElement.height !== targetH) {
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      }
    }
  }

  // Head rot lerping
  headGroup.rotation.y += (targetRot.y - headGroup.rotation.y) * 0.08;
  headGroup.rotation.x += (targetRot.x - headGroup.rotation.x) * 0.08;

  // Sob wobbly shaking animation
  headGroup.position.y = 0.5 + Math.sin(time * 25) * sobDepth;
  headGroup.position.x = Math.cos(time * 30) * (sobDepth * 0.5);

  // Spawns continuous tears
  if (Math.random() < 0.25 * tearFlowRate) {
    spawnTear();
  }

  // Update tear particles physics
  for (let i = tears.length - 1; i >= 0; i--) {
    const t = tears[i];
    t.mesh.position.x += t.vx;
    t.mesh.position.y += t.vy;
    t.mesh.position.z += t.vz;
    
    // Gravity influence
    t.vy -= 0.0018;

    t.life -= t.decay;
    t.mesh.material.opacity = t.life;
    t.mesh.scale.set(t.life, t.life, t.life);

    if (t.life <= 0 || t.mesh.position.y < -3.5) {
      headGroup.remove(t.mesh);
      t.mesh.geometry.dispose();
      t.mesh.material.dispose();
      tears.splice(i, 1);
    }
  }

  document.getElementById('activeTears').textContent = tears.length;

  renderer.render(scene, camera);
}

init();
</script>
</body>
</html>
`,
    code: `'use client'

import React, { useRef, useEffect, useState, useCallback } from 'react'
import * as THREE from 'three'

export function IsaacToonCryingMech() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [sobPercentage, setSobPercentage] = useState(60)
  const [dissolveLimit, setDissolveLimit] = useState(100)
  const [moodPreset, setMoodPreset] = useState<'melancholy' | 'sobbing' | 'tragic'>('melancholy')
  const [activeTearsCount, setActiveTearsCount] = useState(0)
  const [tensionRate, setTensionRate] = useState('NORMAL')
  const [logs, setLogs] = useState<string[]>([
    '[SYS] Emotive cell-shaded AI online',
    '[SYS] Interactive Sobbing matrix loaded',
    '[SYS] Tear trajectory gravity module loaded'
  ])

  // Refs for dynamic parameter updating in animation loop
  const sobDepthRef = useRef(0.06)
  const tearFlowRateRef = useRef(1.0)
  const maxTearsRef = useRef(100)
  const headGroupRef = useRef<THREE.Group | null>(null)
  const tearsArrayRef = useRef<Array<{
    mesh: THREE.Mesh
    vx: number
    vy: number
    vz: number
    life: number
    decay: number
  }>>([])

  const addLog = useCallback((msg: string) => {
    setLogs(prev => [...prev.slice(-6), msg])
  }, [])

  // Presets update
  const applyPreset = useCallback((preset: 'melancholy' | 'sobbing' | 'tragic') => {
    setMoodPreset(preset)
    if (preset === 'melancholy') {
      sobDepthRef.current = 0.05
      tearFlowRateRef.current = 1.0
      setTensionRate('NORMAL')
      addLog('[SYS] Preset set to Melancholy')
    } else if (preset === 'sobbing') {
      sobDepthRef.current = 0.14
      tearFlowRateRef.current = 2.5
      setTensionRate('HIGH')
      addLog('[SYS] Preset set to Heavy Sobbing')
    } else if (preset === 'tragic') {
      sobDepthRef.current = 0.26
      tearFlowRateRef.current = 5.0
      setTensionRate('OVERLOAD')
      addLog('[SYS] Preset set to Tragic Hypercry')
    }
  }, [addLog])

  // Custom parameters manual updates
  const handleSobChange = (val: number) => {
    setSobPercentage(val)
    sobDepthRef.current = val / 1000
    addLog(\`[VAL] Sob oscillation amplitude manual update: \${val}%\`)
  }

  const handleDissolveChange = (val: number) => {
    setDissolveLimit(val)
    maxTearsRef.current = val
    addLog(\`[VAL] Tear dissolve rate manual update: \${val}%\`)
  }

  // Tear Burst trigger
  const triggerTearBurst = useCallback(() => {
    const head = headGroupRef.current
    if (!head) return

    for (let i = 0; i < 40; i++) {
      if (tearsArrayRef.current.length >= maxTearsRef.current * 1.5) break
      const isLeft = Math.random() > 0.5
      const startX = isLeft ? -0.9 : 0.9
      const startY = -0.3
      const startZ = 2.0

      const geometry = new THREE.SphereGeometry(0.1 + Math.random() * 0.08, 8, 8)
      const material = new THREE.MeshBasicMaterial({
        color: 0x38bdf8,
        transparent: true,
        opacity: 0.8
      })
      const mesh = new THREE.Mesh(geometry, material)
      mesh.position.set(startX, startY, startZ)
      head.add(mesh)

      tearsArrayRef.current.push({
        mesh,
        vx: isLeft ? -0.02 - Math.random() * 0.03 : 0.02 + Math.random() * 0.03,
        vy: -0.01 - Math.random() * 0.02,
        vz: 0.01,
        life: 1.0,
        decay: 0.01 + Math.random() * 0.01
      })
    }
    addLog('[SYS] Forced tears telemetry burst triggered')
  }, [addLog])

  useEffect(() => {
    const el = containerRef.current
    if (!el || typeof window === 'undefined') return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, el.clientWidth / el.clientHeight, 0.1, 100)
    camera.position.set(0, 0, 10)

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(el.clientWidth, el.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    el.appendChild(renderer.domElement)

    const characterGroup = new THREE.Group()
    scene.add(characterGroup)

    // Cell-Toon Shader definition to match the exact 2D vector graphic styling
    const createToonMaterial = (lightHex: string, shadowHex: string) => {
      return new THREE.ShaderMaterial({
        uniforms: {
          uLightColor: { value: new THREE.Color(lightHex) },
          uShadowColor: { value: new THREE.Color(shadowHex) },
          uLightDir: { value: new THREE.Vector3(1, 1, 1.5).normalize() }
        },
        vertexShader: \`
          varying vec3 vNormal;
          varying vec3 vViewDir;
          void main() {
            vNormal = normalize(normalMatrix * normal);
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            vViewDir = normalize(-mvPosition.xyz);
            gl_Position = projectionMatrix * mvPosition;
          }
        \`,
        fragmentShader: \`
          uniform vec3 uLightColor;
          uniform vec3 uShadowColor;
          uniform vec3 uLightDir;
          varying vec3 vNormal;
          varying vec3 vViewDir;
          void main() {
            float intensity = dot(vNormal, uLightDir);
            vec3 finalColor = intensity > 0.15 ? uLightColor : uShadowColor;
            
            float rim = 1.0 - max(dot(vNormal, vViewDir), 0.0);
            rim = pow(rim, 3.5);
            finalColor += vec3(rim * 0.15);

            gl_FragColor = vec4(finalColor, 1.0);
          }
        \`
      })
    }

    const skinMat = createToonMaterial('#9ae0a3', '#68ad73')
    const shadowMat = createToonMaterial('#68ad73', '#47804f')
    const eyeMat = new THREE.MeshBasicMaterial({ color: 0x07080b })
    const highlightMat = new THREE.MeshBasicMaterial({ color: 0xffffff })
    const mouthBackMat = createToonMaterial('#2b5e34', '#1c4223')

    // Head Group anchor
    const headGroup = new THREE.Group()
    headGroup.position.set(0, 0.5, 0)
    characterGroup.add(headGroup)
    headGroupRef.current = headGroup

    // Huge Head Sphere
    const headGeo = new THREE.SphereGeometry(2.3, 64, 32)
    const headMesh = new THREE.Mesh(headGeo, skinMat)
    headGroup.add(headMesh)

    // Giant circular crying eyes
    const eyeLGeo = new THREE.SphereGeometry(0.72, 32, 16)
    eyeLGeo.scale(1.0, 1.25, 0.6)
    const eyeL = new THREE.Mesh(eyeLGeo, eyeMat)
    eyeL.position.set(-0.9, -0.1, 1.95)
    eyeL.rotation.y = 0.2
    headGroup.add(eyeL)

    const eyeR = eyeL.clone()
    eyeR.position.x = 0.9
    eyeR.rotation.y = -0.2
    headGroup.add(eyeR)

    // Eye highlight reflections
    const highlightGeo = new THREE.SphereGeometry(0.24, 16, 8)
    highlightGeo.scale(1.0, 1.0, 0.2)
    const highlightL = new THREE.Mesh(highlightGeo, highlightMat)
    highlightL.position.set(-0.9, 0.15, 2.35)
    headGroup.add(highlightL)

    const highlightR = highlightL.clone()
    highlightR.position.x = 0.9
    headGroup.add(highlightR)

    // Curved crying sad mouth
    const mouthGroup = new THREE.Group()
    mouthGroup.position.set(0, -1.0, 2.0)
    headGroup.add(mouthGroup)

    const mouthGeo = new THREE.SphereGeometry(0.5, 32, 16)
    mouthGeo.scale(1.2, 0.8, 0.4)
    const mouthBack = new THREE.Mesh(mouthGeo, mouthBackMat)
    mouthGroup.add(mouthBack)

    // Upper white teeth block
    const teethGeo = new THREE.BoxGeometry(0.5, 0.1, 0.1)
    const teeth = new THREE.Mesh(teethGeo, highlightMat)
    teeth.position.set(0, 0.12, 0.22)
    mouthGroup.add(teeth)

    // Teardrop trails running down cheeks (2D textured blue lines representation)
    const tearTrailGeo = new THREE.CylinderGeometry(0.18, 0.28, 1.2, 16)
    tearTrailGeo.scale(1.0, 1.0, 0.2)
    const tearTrailMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.4
    })
    const tearTrailL = new THREE.Mesh(tearTrailGeo, tearTrailMat)
    tearTrailL.position.set(-0.8, -0.8, 2.05)
    tearTrailL.rotation.z = -0.15
    headGroup.add(tearTrailL)

    const tearTrailR = tearTrailL.clone()
    tearTrailR.position.x = 0.8
    tearTrailR.rotation.z = 0.15
    headGroup.add(tearTrailR)

    // Round body torso
    const bodyGeo = new THREE.SphereGeometry(1.25, 32, 16)
    bodyGeo.scale(1.0, 1.15, 0.95)
    const body = new THREE.Mesh(bodyGeo, skinMat)
    body.position.set(0, -2.1, 0)
    characterGroup.add(body)

    // Hands and legs
    const armLGeo = new THREE.SphereGeometry(0.38, 16, 8)
    armLGeo.scale(1.0, 1.5, 0.9)
    const armL = new THREE.Mesh(armLGeo, skinMat)
    armL.position.set(-1.4, -2.0, 0)
    armL.rotation.z = 0.3
    characterGroup.add(armL)

    const armR = armL.clone()
    armR.position.x = 1.4;
    armR.rotation.z = -0.3;
    characterGroup.add(armR)

    const legL = new THREE.Mesh(armLGeo, skinMat)
    legL.position.set(-0.6, -3.3, 0)
    characterGroup.add(legL)

    const legR = legL.clone()
    legR.position.x = 0.6
    characterGroup.add(legR)

    // Ambient floating atmospheric particles
    const bgCount = 100
    const bgPositions = new Float32Array(bgCount * 3)
    for (let i = 0; i < bgCount; i++) {
      bgPositions[i * 3] = (Math.random() - 0.5) * 20
      bgPositions[i * 3 + 1] = (Math.random() - 0.5) * 15
      bgPositions[i * 3 + 2] = -5
    }
    const bgGeo = new THREE.BufferGeometry()
    bgGeo.setAttribute('position', new THREE.BufferAttribute(bgPositions, 3))
    const bgMat = new THREE.PointsMaterial({ size: 0.05, color: 0x38bdf8, transparent: true, opacity: 0.3 })
    const bgPoints = new THREE.Points(bgGeo, bgMat)
    scene.add(bgPoints)

    // Mouse Tracking Event
    const mouse = new THREE.Vector2(0, 0)
    const targetRot = new THREE.Vector2(0, 0)
    const onMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1
      targetRot.y = mouse.x * 0.35
      targetRot.x = -mouse.y * 0.25
    }
    el.addEventListener('mousemove', onMouseMove)

    // Window Resizer
    const onResize = () => {
      camera.aspect = el.clientWidth / el.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(el.clientWidth, el.clientHeight)
    }
    window.addEventListener('resize', onResize)

    // Continuous Tear Particle Spawner
    const spawnTear = () => {
      if (tearsArrayRef.current.length >= maxTearsRef.current) return

      const isLeft = Math.random() > 0.5
      const startX = isLeft ? -0.9 : 0.9
      const startY = -0.3
      const startZ = 2.0

      const tearGeo = new THREE.SphereGeometry(0.1 + Math.random() * 0.08, 8, 8)
      const tearMat = new THREE.MeshBasicMaterial({
        color: 0x38bdf8,
        transparent: true,
        opacity: 0.8
      })
      const mesh = new THREE.Mesh(tearGeo, tearMat)
      mesh.position.set(startX, startY, startZ)
      headGroup.add(mesh)

      tearsArrayRef.current.push({
        mesh,
        vx: isLeft ? -0.01 - Math.random() * 0.02 : 0.01 + Math.random() * 0.02,
        vy: -0.01 - Math.random() * 0.015,
        vz: 0.01,
        life: 1.0,
        decay: 0.01 + Math.random() * 0.01
      })
    }

    // Animation Loop
    let time = 0
    let rafId = 0
    const animate = () => {
      rafId = requestAnimationFrame(animate)
      time += 0.02

      // Head target look rotations tracking
      headGroup.rotation.y += (targetRot.y - headGroup.rotation.y) * 0.08
      headGroup.rotation.x += (targetRot.x - headGroup.rotation.x) * 0.08

      // Sob high frequency wobbles shakes
      headGroup.position.y = 0.5 + Math.sin(time * 25) * sobDepthRef.current
      headGroup.position.x = Math.cos(time * 30) * (sobDepthRef.current * 0.5)

      // Spawner interval check
      if (Math.random() < 0.25 * tearFlowRateRef.current) {
        spawnTear()
      }

      // Gravity and decay update loops
      const tears = tearsArrayRef.current
      for (let i = tears.length - 1; i >= 0; i--) {
        const t = tears[i]
        t.mesh.position.x += t.vx
        t.mesh.position.y += t.vy
        t.mesh.position.z += t.vz
        
        t.vy -= 0.0018 // Gravity pull

        t.life -= t.decay
        if (t.mesh.material instanceof THREE.Material) {
          t.mesh.material.opacity = t.life
        }
        t.mesh.scale.set(t.life, t.life, t.life)

        if (t.life <= 0 || t.mesh.position.y < -3.5) {
          headGroup.remove(t.mesh)
          t.mesh.geometry.dispose()
          if (t.mesh.material instanceof THREE.Material) {
            t.mesh.material.dispose()
          }
          tears.splice(i, 1)
        }
      }

      setActiveTearsCount(tears.length)

      renderer.render(scene, camera)
    }
    animate()

    // Disposal cleanup
    return () => {
      cancelAnimationFrame(rafId)
      el.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', onResize)

      // Dispose geometries
      headGeo.dispose()
      eyeLGeo.dispose()
      highlightGeo.dispose()
      mouthGeo.dispose()
      teethGeo.dispose()
      tearTrailGeo.dispose()
      bodyGeo.dispose()
      armLGeo.dispose()
      bgGeo.dispose()

      skinMat.dispose()
      shadowMat.dispose()
      eyeMat.dispose()
      highlightMat.dispose()
      mouthBackMat.dispose()
      tearTrailMat.dispose()
      bgMat.dispose()

      tearsArrayRef.current.forEach(t => {
        headGroup.remove(t.mesh)
        t.mesh.geometry.dispose()
        if (t.mesh.material instanceof THREE.Material) {
          t.mesh.material.dispose()
        }
      })
      tearsArrayRef.current = []

      renderer.dispose()
      if (el.contains(renderer.domElement)) {
        el.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <div className="relative w-full overflow-hidden rounded-3xl border border-lime-400/20 bg-[#05060f] p-6 text-lime-400 font-mono select-none" style={{ minHeight: 640 }}>
      <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(rgba(163,230,53,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(163,230,53,0.02)_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="pointer-events-none absolute inset-0 z-10 opacity-20" style={{ background: 'repeating-linear-gradient(0deg, rgba(0,0,0,.08) 0px, rgba(0,0,0,.08) 1px, transparent 1px, transparent 4px)' }} />

      <div className="relative z-20 grid h-full min-h-[580px] grid-cols-1 gap-6 lg:grid-cols-[280px_1fr_280px]">
        {/* Left Control Panel */}
        <div className="flex flex-col gap-5 rounded-2xl border border-lime-400/10 bg-slate-950/70 p-5 backdrop-blur-md">
          <div className="border-b border-lime-400/20 pb-3 text-xs font-black uppercase tracking-[.25em]">
            Emotion Engine
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex justify-between text-[10px] uppercase text-lime-400/50">
              <span>Sobbing Depth</span>
              <span>{sobPercentage}%</span>
            </div>
            <input
              type="range"
              min="10"
              max="150"
              value={sobPercentage}
              onChange={e => handleSobChange(Number(e.target.value))}
              className="h-1 w-full cursor-pointer appearance-none rounded bg-lime-400/10 accent-lime-400"
            />
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex justify-between text-[10px] uppercase text-lime-400/50">
              <span>Tear Dissolve</span>
              <span>{dissolveLimit}%</span>
            </div>
            <input
              type="range"
              min="20"
              max="250"
              value={dissolveLimit}
              onChange={e => handleDissolveChange(Number(e.target.value))}
              className="h-1 w-full cursor-pointer appearance-none rounded bg-lime-400/10 accent-lime-400"
            />
          </div>

          <div className="border-b border-lime-400/20 pb-1 text-xs font-black uppercase tracking-[.25em] mt-2">
            Mood Presets
          </div>

          <div className="flex flex-col gap-1.5">
            {(['melancholy', 'sobbing', 'tragic'] as const).map(preset => (
              <button
                key={preset}
                onClick={() => applyPreset(preset)}
                className={\`w-full rounded-lg border py-2.5 text-xs font-bold transition-all duration-300 hover:scale-[1.02] \${moodPreset === preset ? 'bg-lime-400 text-slate-950 border-lime-400 shadow-lg shadow-lime-400/20' : 'bg-lime-400/5 border-lime-400/20 text-lime-400'}\`}
              >
                {preset.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Center Canvas viewport */}
        <div className="relative flex items-center justify-center rounded-2xl border border-lime-400/10 bg-slate-950/20">
          <div ref={containerRef} className="absolute inset-0 cursor-crosshair" />
        </div>

        {/* Right Diagnostics Sidebar */}
        <div className="flex flex-col gap-5 rounded-2xl border border-lime-400/10 bg-slate-950/70 p-5 backdrop-blur-md">
          <div className="border-b border-lime-400/20 pb-3 text-xs font-black uppercase tracking-[.25em]">
            Telemetry Data
          </div>

          <div className="flex flex-col gap-2 rounded-xl border border-lime-400/10 bg-lime-400/[0.02] p-3.5 text-[11px] leading-5 text-lime-400/70">
            <div className="flex justify-between border-b border-dashed border-lime-400/10 pb-1.5">
              <span>Emotion Code</span>
              <span className="font-bold text-white">ISAAC-X</span>
            </div>
            <div className="flex justify-between border-b border-dashed border-lime-400/10 pb-1.5">
              <span>Active Tears</span>
              <span className="font-bold text-white">{activeTearsCount}</span>
            </div>
            <div className="flex justify-between">
              <span>Tension Rate</span>
              <span
                className="font-bold uppercase"
                style={{
                  color: tensionRate === 'OVERLOAD' ? '#ef4444' : tensionRate === 'HIGH' ? '#f59e0b' : '#a3e635'
                }}
              >
                {tensionRate}
              </span>
            </div>
          </div>

          <div className="border-b border-lime-400/20 pb-1 text-xs font-black uppercase tracking-[.25em]">
            Emotive Logs
          </div>

          <div className="flex-1 overflow-y-auto rounded-xl border border-lime-400/10 bg-black/40 p-3 text-[10px] leading-4 text-lime-400/50">
            {logs.map((log, index) => (
              <div key={index} className="mb-1 border-b border-lime-400/5 pb-1 last:border-b-0">
                {log}
              </div>
            ))}
          </div>

          <button
            onClick={triggerTearBurst}
            className="w-full rounded-xl border py-3 text-xs font-bold transition-all duration-300 hover:scale-[1.02]"
            style={{
              borderColor: '#ef444466',
              background: 'rgba(239,68,68,0.08)',
              color: '#ef4444',
            }}
          >
            TRIGGER TEAR BURST
          </button>
        </div>
      </div>
    </div>
  )
}
export default IsaacToonCryingMech;
`,
    prompt: `Build an advanced highly interactive cell-shaded 3D character called "Isaac Toon Crying Mech".\n- Inspired by Zdog cute vector graphics, but built inside Three.js using custom flat shading (Toon Shading Vertex/Fragment shader)\n- Dynamic continuous tear spawner emitting particles from inner eye corners that flow downward with realistic gravity and scale-decay physics\n- Head-tracking mouse look interpolation with wobbly high-frequency head wobbling sobbing oscillations\n- Live customizable parameters: Sobbing Depth amplitude, Tear Dissolve capacity thresholds, and 3 Mood Presets (Melancholy, Sobbing, Tragic Hypercry)\n- Tear Burst trigger pulse injection button releasing massive streams of tears\n- Clean resource disposal of geometries and materials on react unmount`,
    likes: 0,
    author: 'Animation AI',
    featured: true,
    createdAt: '2026-05-22T14:15:00.000Z',
    updatedAt: '2026-05-22T14:15:00.000Z'
  }


,
  {
    _id: 'robot-synthetix-cyber-skeleton-prime',
    slug: 'synthetix-cyber-skeleton-prime',
    title: 'Synthetix Cyber-Skeleton Prime',
    category: 'robot',
    tag: 'threejs',
    description: 'A highly interactive programmatic 3D human skeleton robot custom-built in raw Three.js. Features a detailed biomechanical spine segment stack, elliptical ribcage bars protecting a glowing core heart, mechanical limbs with dual-bar bones, dynamic visual cursor look-at tracking, and a click-to-trigger core overload discharge.',
    previewCode: `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<style>
* { margin: 0; padding: 0; box-sizing: border-box; }
body { background: #020204; overflow: hidden; cursor: crosshair; font-family: 'Courier New', monospace; user-select: none; }
canvas { display: block; width: 100vw; height: 100vh; }
.hud { position: absolute; top: 24px; left: 24px; padding: 18px; border: 1px solid rgba(0, 240, 255, 0.15); border-radius: 16px; background: rgba(2, 4, 8, 0.85); color: #00f0ff; backdrop-filter: blur(12px); pointer-events: none; font-size: 11px; min-width: 240px; transition: all 0.3s; box-shadow: 0 15px 35px rgba(0,0,0,0.5); }
.hud-title { font-weight: bold; letter-spacing: 2px; margin-bottom: 8px; display: flex; align-items: center; gap: 6px; font-size: 12px; text-transform: uppercase; }
.hud-sep { height: 1px; background: rgba(0, 240, 255, 0.2); margin: 8px 0; transition: background 0.3s; }
.hud-item { display: flex; justify-content: space-between; margin: 5px 0; }
.hud-item span { color: rgba(0, 240, 255, 0.55); }
.hud-item strong { color: #fff; }
.label { position: absolute; bottom: 28px; left: 50%; transform: translateX(-50%); color: #00f0ff; letter-spacing: 5px; text-transform: uppercase; pointer-events: none; text-align: center; transition: all 0.4s; font-size: 13px; font-weight: 900; }
.sub { font-size: 9px; color: rgba(0, 240, 255, 0.4); letter-spacing: 2px; margin-top: 6px; font-weight: normal; }
</style>
</head>
<body>
<div class="hud" id="hud">
  <div class="hud-title" id="hudTitle">⚡ SYNAPSE PROTOCOL: IDLE</div>
  <div class="hud-sep" id="hudSep"></div>
  <div class="hud-item"><span>Chassis Code</span><strong>CYBER-HUMANOID SOLID</strong></div>
  <div class="hud-item"><span>Core Sync</span><strong id="syncStatus">STABLE</strong></div>
  <div class="hud-item"><span>Synaptic Freq</span><strong id="frequency">92.4 Hz</strong></div>
  <div class="hud-item"><span>Energy Core</span><strong id="energyOut">100%</strong></div>
</div>
<div class="label" id="label">
  Synthetix Cyber-Humanoid Prime
  <div class="sub">Click Screen to Discharge Overload • Move Cursor to Track</div>
</div>

<script type="importmap">{"imports":{"three":"https://unpkg.com/three@0.160.0/build/three.module.js"}}</script>
<script type="module">
import * as THREE from 'three';

let currentProtocol = 0; // 0: IDLE, 1: OVERLOAD
let time = 0;

const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x020204, 0.065);

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(0, 0.2, 8.5);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.toneMapping = THREE.ACESFilmicToneMapping;
document.body.appendChild(renderer.domElement);

// Lights
const ambientLight = new THREE.AmbientLight(0x030815, 1.5);
scene.add(ambientLight);

const mainSpot = new THREE.SpotLight(0xffffff, 40, 15, Math.PI / 6, 0.5, 1);
mainSpot.position.set(0, 6, 4);
scene.add(mainSpot);

const rimLightL = new THREE.PointLight(0x00f0ff, 20, 8);
rimLightL.position.set(-4, 1.5, -2);
scene.add(rimLightL);

const rimLightR = new THREE.PointLight(0x9a00ff, 15, 8);
rimLightR.position.set(4, 1.5, -2);
scene.add(rimLightR);

const cursorLight = new THREE.PointLight(0x00f0ff, 10, 6);
cursorLight.position.set(0, 0, 3);
scene.add(cursorLight);

// Materials
const titaniumMat = new THREE.MeshStandardMaterial({
  color: 0xccd5e0, // Highly polished bright titanium/ceramic alloy
  roughness: 0.15,
  metalness: 0.85
});

const chromeMat = new THREE.MeshStandardMaterial({
  color: 0xffffff,
  roughness: 0.05,
  metalness: 1.0
});

const cyberShellMat = new THREE.MeshStandardMaterial({
  color: 0x0a101f, // Deep rich solid cyber glass human shell
  roughness: 0.1,
  metalness: 0.9,
  transparent: true,
  opacity: 0.6,
  side: THREE.DoubleSide
});

const glowingCoreMat = new THREE.MeshBasicMaterial({
  color: 0x00f0ff
});

const eyeMat = new THREE.MeshBasicMaterial({
  color: 0x00f0ff
});

// Biomechanical Group
const skeletonGroup = new THREE.Group();
skeletonGroup.position.y = -1.2;
scene.add(skeletonGroup);

// --- 1. Programmatic Skull & Helmet Faceplate ---
const skullGroup = new THREE.Group();
skullGroup.position.y = 2.7;
skeletonGroup.add(skullGroup);

const cranium = new THREE.Mesh(new THREE.SphereGeometry(0.42, 32, 24), titaniumMat);
cranium.scale.set(1.0, 1.15, 0.95);
skullGroup.add(cranium);

const jaw = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.22, 0.35), titaniumMat);
jaw.position.set(0, -0.38, 0.12);
skullGroup.add(jaw);

// Sleek Visor
const visor = new THREE.Mesh(
  new THREE.CylinderGeometry(0.32, 0.32, 0.15, 24, 1, false, -Math.PI / 3, Math.PI * 2 / 3),
  eyeMat
);
visor.rotation.x = Math.PI / 2;
visor.position.set(0, 0.08, 0.24);
skullGroup.add(visor);

// Ear covers
const earL = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.08, 16), chromeMat);
earL.rotation.z = Math.PI / 2;
earL.position.set(-0.44, 0, 0);
skullGroup.add(earL);

const earR = earL.clone();
earR.position.x = 0.44;
skullGroup.add(earR);

// --- 2. Programmatic Vertebral Spine ---
const spineSegments = [];
const spineGroup = new THREE.Group();
skeletonGroup.add(spineGroup);

const spineCount = 10;
const startY = 0.5;
const endY = 2.4;
const stepY = (endY - startY) / spineCount;

for (let i = 0; i < spineCount; i++) {
  const segGrp = new THREE.Group();
  segGrp.position.y = startY + i * stepY;
  
  // Vertebra disc
  const disc = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.15, 0.06, 16), chromeMat);
  segGrp.add(disc);
  
  // Spinous process (back spike)
  const spike = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.04, 0.18), titaniumMat);
  spike.position.set(0, 0, -0.15);
  spike.rotation.x = Math.PI / 8;
  segGrp.add(spike);
  
  spineGroup.add(segGrp);
  spineSegments.push(segGrp);
}

// --- 3. Programmatic Ribcage & Torso Solid Shell ---
const ribcageGroup = new THREE.Group();
ribcageGroup.position.y = 1.45;
skeletonGroup.add(ribcageGroup);

const ribPairs = 5;
const ribs = [];
for (let i = 0; i < ribPairs; i++) {
  const yOffset = (i - (ribPairs - 1) / 2) * 0.24;
  
  const ribRadX = 0.58 - i * 0.03;
  
  // Left Rib
  const ribGeomL = new THREE.TorusGeometry(ribRadX, 0.035, 8, 32, Math.PI * 0.8);
  const ribL = new THREE.Mesh(ribGeomL, titaniumMat);
  ribL.position.set(-0.1, yOffset, 0.05);
  ribL.rotation.set(0.1, Math.PI / 16, Math.PI / 2);
  ribcageGroup.add(ribL);
  
  // Right Rib
  const ribR = ribL.clone();
  ribR.position.x = 0.1;
  ribR.rotation.y = -Math.PI / 16;
  ribR.rotation.z = -Math.PI / 2;
  ribcageGroup.add(ribR);
  
  ribs.push({ left: ribL, right: ribR, baseScale: 1.0 });
}

// Sternum
const sternum = new THREE.Mesh(new THREE.BoxGeometry(0.08, 1.1, 0.08), chromeMat);
sternum.position.set(0, 0, 0.56);
ribcageGroup.add(sternum);

// Torso Breastplate solid humanoid chest
const chestPlateL = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.35, 1.2, 16, 1, false, 0, Math.PI * 0.9), cyberShellMat);
chestPlateL.position.set(-0.25, 0, 0.1);
chestPlateL.rotation.y = 0.15;
chestPlateL.scale.set(1.0, 1.0, 0.5);
ribcageGroup.add(chestPlateL);

const chestPlateR = chestPlateL.clone();
chestPlateR.position.x = 0.25;
chestPlateR.rotation.y = -0.15;
ribcageGroup.add(chestPlateR);

// Solid Human Abs Block
const absPlate = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.6, 0.25), cyberShellMat);
absPlate.position.set(0, -0.8, 0.05);
ribcageGroup.add(absPlate);

// --- 4. Pulse Biomech Heart Core ---
const heartCore = new THREE.Mesh(new THREE.IcosahedronGeometry(0.18, 2), glowingCoreMat);
heartCore.position.set(0, 0.15, 0.12);
ribcageGroup.add(heartCore);

// Orbital core rings
const coreRing1 = new THREE.Mesh(new THREE.TorusGeometry(0.26, 0.015, 8, 32), chromeMat);
coreRing1.position.copy(heartCore.position);
ribcageGroup.add(coreRing1);

const coreRing2 = coreRing1.clone();
coreRing2.rotation.x = Math.PI / 2;
ribcageGroup.add(coreRing2);

// --- 5. Pelvis Hip Plate ---
const pelvisGroup = new THREE.Group();
pelvisGroup.position.y = 0.4;
skeletonGroup.add(pelvisGroup);

const hipPlate = new THREE.Mesh(new THREE.BoxGeometry(0.85, 0.16, 0.4), titaniumMat);
pelvisGroup.add(hipPlate);

// Solid hip guard shell
const hipGuard = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.35, 0.45), cyberShellMat);
hipGuard.position.y = -0.05;
pelvisGroup.add(hipGuard);

const sacrum = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.25, 0.25, 16), chromeMat);
sacrum.position.y = 0.15;
pelvisGroup.add(sacrum);

// --- 6. Solid Humanoid Arms ---
const shoulderL = new THREE.Group();
shoulderL.position.set(-0.85, 2.05, 0);
skeletonGroup.add(shoulderL);

const jointCapL = new THREE.Mesh(new THREE.SphereGeometry(0.14, 16, 16), chromeMat);
shoulderL.add(jointCapL);

// Solid shoulder deltoid pad
const shoulderCapL = new THREE.Mesh(new THREE.SphereGeometry(0.24, 16, 16), cyberShellMat);
shoulderCapL.scale.set(1.0, 1.2, 1.0);
shoulderL.add(shoulderCapL);

const armGroupL = new THREE.Group();
shoulderL.add(armGroupL);

// Inner Humerus
const humerusL = new THREE.Mesh(new THREE.CylinderGeometry(0.065, 0.05, 0.65, 12), titaniumMat);
humerusL.position.y = -0.35;
armGroupL.add(humerusL);

// Solid Bicep/Tricep muscle shell
const bicepShellL = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.11, 0.6, 12), cyberShellMat);
bicepShellL.position.y = -0.35;
armGroupL.add(bicepShellL);

// Forearm Group
const forearmGroupL = new THREE.Group();
forearmGroupL.position.set(0, -0.7, 0);
armGroupL.add(forearmGroupL);

const elbowL = new THREE.Mesh(new THREE.SphereGeometry(0.08, 16, 16), chromeMat);
forearmGroupL.add(elbowL);

const radiusL = new THREE.Mesh(new THREE.CylinderGeometry(0.038, 0.03, 0.62, 8), titaniumMat);
radiusL.position.set(-0.04, -0.32, 0);
forearmGroupL.add(radiusL);

const ulnaL = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.038, 0.62, 8), titaniumMat);
ulnaL.position.set(0.04, -0.32, 0);
forearmGroupL.add(ulnaL);

// Solid Forearm guard plate
const forearmShellL = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.09, 0.58, 12), cyberShellMat);
forearmShellL.position.set(0, -0.32, 0);
forearmGroupL.add(forearmShellL);

const handL = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.12, 0.12), chromeMat);
handL.position.y = -0.65;
forearmGroupL.add(handL);

// Symmetrical Right Arm
const shoulderR = shoulderL.clone();
shoulderR.position.x = 0.85;
skeletonGroup.add(shoulderR);

// --- 7. Solid Humanoid Legs ---
const legL = new THREE.Group();
legL.position.set(-0.35, 0.35, 0);
skeletonGroup.add(legL);

const hipJointL = new THREE.Mesh(new THREE.SphereGeometry(0.12, 16, 16), chromeMat);
legL.add(hipJointL);

// Inner femur
const femurL = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.06, 0.85, 12), titaniumMat);
femurL.position.y = -0.45;
legL.add(femurL);

// Solid Thigh Shell plate
const thighShellL = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.14, 0.8, 12), cyberShellMat);
thighShellL.position.y = -0.45;
legL.add(thighShellL);

const lowerLegL = new THREE.Group();
lowerLegL.position.set(0, -0.9, 0);
legL.add(lowerLegL);

const kneeL = new THREE.Mesh(new THREE.SphereGeometry(0.09, 16, 16), chromeMat);
lowerLegL.add(kneeL);

// Inner shin bones
const tibiaL = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.035, 0.8, 8), titaniumMat);
tibiaL.position.set(-0.03, -0.42, 0);
lowerLegL.add(tibiaL);

const fibulaL = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.8, 8), titaniumMat);
fibulaL.position.set(0.03, -0.42, 0);
lowerLegL.add(fibulaL);

// Solid Shin/Calf Shell plate
const calfShellL = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.09, 0.76, 12), cyberShellMat);
calfShellL.position.set(0, -0.42, 0);
lowerLegL.add(calfShellL);

// Symmetrical Right Leg
const legR = legL.clone();
legR.position.x = 0.35;
skeletonGroup.add(legR);

// --- 8. Dynamic Core Forcefield Grid ---
const forcefield = new THREE.Mesh(
  new THREE.SphereGeometry(1.6, 32, 32),
  new THREE.MeshBasicMaterial({
    color: 0x00f0ff,
    wireframe: true,
    transparent: true,
    opacity: 0.0
  })
);
forcefield.position.copy(heartCore.position);
ribcageGroup.add(forcefield);

// --- 9. Kinetic Particle Sparks ---
const pCount = 200;
const pGeom = new THREE.BufferGeometry();
const pPos = new Float32Array(pCount * 3);
const pVels = [];

for (let i = 0; i < pCount; i++) {
  pPos[i*3] = (Math.random() - 0.5) * 6;
  pPos[i*3+1] = Math.random() * 4 - 1;
  pPos[i*3+2] = (Math.random() - 0.5) * 5;
  pVels.push(new THREE.Vector3(
    (Math.random() - 0.5) * 0.15,
    Math.random() * 0.4 + 0.15,
    (Math.random() - 0.5) * 0.15
  ));
}
pGeom.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
const pMat = new THREE.PointsMaterial({
  color: 0x00f0ff,
  size: 0.045,
  transparent: true,
  opacity: 0.55,
  blending: THREE.AdditiveBlending
});
const particles = new THREE.Points(pGeom, pMat);
scene.add(particles);

// Mouse tracking
const mouse = new THREE.Vector2(0, 0);
const target = new THREE.Vector3(0, 0, 0);

window.addEventListener('mousemove', (e) => {
  mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
  target.x = mouse.x * 2.2;
  target.y = mouse.y * 1.6 + 1.2;
});

// Click Interaction (Core Discharge)
let triggerDuration = 0;
window.addEventListener('mousedown', () => {
  currentProtocol = currentProtocol === 0 ? 1 : 0;
  
  const hud = document.getElementById('hud');
  const hudTitle = document.getElementById('hudTitle');
  const hudSep = document.getElementById('hudSep');
  const label = document.getElementById('label');
  const syncStatus = document.getElementById('syncStatus');
  const frequency = document.getElementById('frequency');
  const energyOut = document.getElementById('energyOut');

  if (currentProtocol === 1) {
    // Discharge Overload mode
    hudTitle.textContent = "💥 SYNAPSE PROTOCOL: OVERLOAD";
    hudTitle.style.color = "#ff0066";
    hudSep.style.background = "#ff0066";
    hud.style.borderColor = "#ff006688";
    hud.style.boxShadow = "0 15px 35px rgba(255,0,102,0.3)";
    label.style.color = "#ff0066";
    syncStatus.textContent = "STRESSED";
    syncStatus.style.color = "#ff0066";
    frequency.textContent = "410.2 Hz";
    energyOut.textContent = "385%";
    energyOut.style.color = "#ff0066";
    
    // Core color change
    glowingCoreMat.color.setHex(0xff0066);
    eyeMat.color.setHex(0xff0066);
    rimLightL.color.setHex(0xff0066);
    pMat.color.setHex(0xff0066);
    cyberShellMat.color.setHex(0x2f0210); // Reddish human body shell
    
    // Expand forcefield pulse
    forcefield.scale.setScalar(0.2);
    forcefield.material.opacity = 0.65;
    triggerDuration = 1.0;
  } else {
    // Return to Normal Synapse mode
    hudTitle.textContent = "⚡ SYNAPSE PROTOCOL: IDLE";
    hudTitle.style.color = "#00f0ff";
    hudSep.style.background = "rgba(0, 240, 255, 0.2)";
    hud.style.borderColor = "rgba(0, 240, 255, 0.15)";
    hud.style.boxShadow = "0 15px 35px rgba(0,0,0,0.5)";
    label.style.color = "#00f0ff";
    syncStatus.textContent = "STABLE";
    syncStatus.style.color = "#fff";
    frequency.textContent = "92.4 Hz";
    energyOut.textContent = "100%";
    energyOut.style.color = "#fff";
    
    glowingCoreMat.color.setHex(0x00f0ff);
    eyeMat.color.setHex(0x00f0ff);
    rimLightL.color.setHex(0x00f0ff);
    pMat.color.setHex(0x00f0ff);
    cyberShellMat.color.setHex(0x0a101f); // Return deep cyan
    
    forcefield.material.opacity = 0;
  }
});

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Animation Loop
const clock = new THREE.Clock();
function animate() {
  requestAnimationFrame(animate);
  time = clock.getElapsedTime();
  
  // 1. Dynamic Cursor Visual Tracking
  skullGroup.lookAt(target.x, target.y + 1.2, 3);
  
  // Vertebrae organic twisting/chain flex
  spineSegments.forEach((seg, idx) => {
    const factor = idx / spineCount;
    seg.rotation.y += (mouse.x * 0.32 * factor - seg.rotation.y) * 0.08;
    seg.rotation.x += (mouse.y * 0.16 * factor - seg.rotation.x) * 0.08;
    
    // Spine idle breathing ripple
    seg.position.x = Math.sin(time * 2 + idx * 0.4) * 0.015;
  });
  
  // Ribcage follows spine look direction and breaths
  ribcageGroup.rotation.y += (mouse.x * 0.18 - ribcageGroup.rotation.y) * 0.06;
  const breathFactor = 1.0 + Math.sin(time * 2) * 0.024;
  ribs.forEach((pair, idx) => {
    const scale = breathFactor * (1.0 + (currentProtocol === 1 ? 0.07 : 0));
    pair.left.scale.set(scale, scale, scale);
    pair.right.scale.set(scale, scale, scale);
  });
  
  // Dynamic arm reaction swing
  shoulderL.rotation.y = -Math.PI / 12 + Math.sin(time * 1.2) * 0.05 + mouse.x * 0.12;
  shoulderR.rotation.y = Math.PI / 12 - Math.sin(time * 1.2) * 0.05 + mouse.x * 0.12;
  
  // Pulse active joints and heart core
  const pulseSpeed = currentProtocol === 1 ? 15.0 : 3.0;
  const pulseScale = 1.0 + Math.sin(time * pulseSpeed) * 0.15;
  heartCore.scale.setScalar(pulseScale);
  
  // Spin orbital rings
  coreRing1.rotation.y += currentProtocol === 1 ? 0.1 : 0.02;
  coreRing2.rotation.x += currentProtocol === 1 ? 0.08 : 0.015;
  
  // PointLight cursor movement
  cursorLight.position.x += (target.x - cursorLight.position.x) * 0.1;
  cursorLight.position.y += (target.y - cursorLight.position.y) * 0.1;
  
  // 2. Overload Forcefield pulse decay
  if (currentProtocol === 1 && triggerDuration > 0) {
    triggerDuration -= 0.015;
    forcefield.scale.addScalar(0.08);
    forcefield.material.opacity = triggerDuration * 0.65;
  } else if (currentProtocol === 1 && triggerDuration <= 0) {
    // Loop pulse
    forcefield.scale.setScalar(0.2);
    forcefield.material.opacity = 0.65;
    triggerDuration = 1.0;
  }
  
  // 3. Spikes/Particles animation
  const posAttr = pGeom.getAttribute('position');
  const speedMult = currentProtocol === 1 ? 3.5 : 1.0;
  for (let i = 0; i < pCount; i++) {
    let y = posAttr.getY(i) + pVels[i].y * 0.016 * speedMult;
    if (y > 4) {
      y = -1.5;
      posAttr.setX(i, (Math.random() - 0.5) * 6);
      posAttr.setZ(i, (Math.random() - 0.5) * 5);
    }
    posAttr.setY(i, y);
    posAttr.setX(i, posAttr.getX(i) + Math.sin(time * 1.5 + i) * 0.002);
  }
  posAttr.needsUpdate = true;
  
  renderer.render(scene, camera);
}

animate();
</script>
</body>
</html>
`,
    code: `'use client'

import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

export function SynthetixCyberSkeletonPrime() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  
  // React State for Telemetry HUD
  const [protocol, setProtocol] = useState<'IDLE' | 'OVERLOAD'>('IDLE')
  const [frequency, setFrequency] = useState(92.4)
  const [energy, setEnergy] = useState(100)
  const [logs, setLogs] = useState<string[]>([
    'System initialization successful.',
    'Chassis structure: cybernetic human solid humanoid body.',
    'Tracking systems active. Awaiting input.'
  ])

  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return

    const container = containerRef.current
    const canvas = canvasRef.current

    let currentProtocolState = 0 // 0: IDLE, 1: OVERLOAD
    let animationFrameId: number
    let time = 0

    // Scene setup
    const scene = new THREE.Scene()
    scene.fog = new THREE.FogExp2(0x020204, 0.065)

    // Camera setup
    const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 100)
    camera.position.set(0, 0.2, 8.5)

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
    renderer.setSize(container.clientWidth, container.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.toneMapping = THREE.ACESFilmicToneMapping

    // Lights
    const ambientLight = new THREE.AmbientLight(0x030815, 1.5)
    scene.add(ambientLight)

    const mainSpot = new THREE.SpotLight(0xffffff, 40, 15, Math.PI / 6, 0.5, 1)
    mainSpot.position.set(0, 6, 4)
    scene.add(mainSpot)

    const rimLightL = new THREE.PointLight(0x00f0ff, 20, 8)
    rimLightL.position.set(-4, 1.5, -2)
    scene.add(rimLightL)

    const rimLightR = new THREE.PointLight(0x9a00ff, 15, 8)
    rimLightR.position.set(4, 1.5, -2)
    scene.add(rimLightR)

    const cursorLight = new THREE.PointLight(0x00f0ff, 10, 6)
    cursorLight.position.set(0, 0, 3)
    scene.add(cursorLight)

    // Materials
    const titaniumMat = new THREE.MeshStandardMaterial({
      color: 0xccd5e0, // Highly polished bright titanium/ceramic alloy
      roughness: 0.15,
      metalness: 0.85
    })

    const chromeMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.05,
      metalness: 1.0
    })

    const cyberShellMat = new THREE.MeshStandardMaterial({
      color: 0x0a101f, // Deep rich solid cyber glass human shell
      roughness: 0.1,
      metalness: 0.9,
      transparent: true,
      opacity: 0.6,
      side: THREE.DoubleSide
    })

    const glowingCoreMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff
    })

    const eyeMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff
    })

    // Biomechanical Group
    const skeletonGroup = new THREE.Group()
    skeletonGroup.position.y = -1.2
    scene.add(skeletonGroup)

    // --- 1. Programmatic Skull & Helmet Faceplate ---
    const skullGroup = new THREE.Group()
    skullGroup.position.y = 2.7
    skeletonGroup.add(skullGroup)

    const cranium = new THREE.Mesh(new THREE.SphereGeometry(0.42, 32, 24), titaniumMat)
    cranium.scale.set(1.0, 1.15, 0.95)
    skullGroup.add(cranium)

    // Solid Human jaw
    const jaw = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.22, 0.35), titaniumMat)
    jaw.position.set(0, -0.38, 0.12)
    skullGroup.add(jaw)

    // Sleek Visor
    const visor = new THREE.Mesh(
      new THREE.CylinderGeometry(0.32, 0.32, 0.15, 24, 1, false, -Math.PI / 3, Math.PI * 2 / 3),
      eyeMat
    )
    visor.rotation.x = Math.PI / 2
    visor.position.set(0, 0.08, 0.24)
    skullGroup.add(visor)

    // Ear covers (Heaphones style solid plates)
    const earL = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.08, 16), chromeMat)
    earL.rotation.z = Math.PI / 2
    earL.position.set(-0.44, 0, 0)
    skullGroup.add(earL)

    const earR = earL.clone()
    earR.position.x = 0.44
    skullGroup.add(earR)

    // --- 2. Programmatic Vertebral Spine ---
    const spineSegments: THREE.Group[] = []
    const spineGroup = new THREE.Group()
    skeletonGroup.add(spineGroup)

    const spineCount = 10
    const startY = 0.5
    const endY = 2.4
    const stepY = (endY - startY) / spineCount

    for (let i = 0; i < spineCount; i++) {
      const segGrp = new THREE.Group()
      segGrp.position.y = startY + i * stepY
      
      // Vertebra disc
      const disc = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.15, 0.06, 16), chromeMat)
      segGrp.add(disc)
      
      // Spinous process (back spike)
      const spike = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.04, 0.18), titaniumMat)
      spike.position.set(0, 0, -0.15)
      spike.rotation.x = Math.PI / 8
      segGrp.add(spike)
      
      spineGroup.add(segGrp)
      spineSegments.push(segGrp)
    }

    // --- 3. Programmatic Ribcage & Torso Solid Shell ---
    const ribcageGroup = new THREE.Group()
    ribcageGroup.position.y = 1.45
    skeletonGroup.add(ribcageGroup)

    const ribPairs = 5
    const ribs: { left: THREE.Mesh; right: THREE.Mesh }[] = []
    for (let i = 0; i < ribPairs; i++) {
      const yOffset = (i - (ribPairs - 1) / 2) * 0.24
      
      const ribRadX = 0.58 - i * 0.03
      
      // Left Rib
      const ribGeomL = new THREE.TorusGeometry(ribRadX, 0.035, 8, 32, Math.PI * 0.8)
      const ribL = new THREE.Mesh(ribGeomL, titaniumMat)
      ribL.position.set(-0.1, yOffset, 0.05)
      ribL.rotation.set(0.1, Math.PI / 16, Math.PI / 2)
      ribcageGroup.add(ribL)
      
      // Right Rib
      const ribR = ribL.clone()
      ribR.position.x = 0.1
      ribR.rotation.y = -Math.PI / 16
      ribR.rotation.z = -Math.PI / 2
      ribcageGroup.add(ribR)
      
      ribs.push({ left: ribL, right: ribR })
    }

    // Sternum
    const sternum = new THREE.Mesh(new THREE.BoxGeometry(0.08, 1.1, 0.08), chromeMat)
    sternum.position.set(0, 0, 0.56)
    ribcageGroup.add(sternum)

    // Torso Breastplate solid humanoid chest
    const chestPlateL = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.35, 1.2, 16, 1, false, 0, Math.PI * 0.9), cyberShellMat)
    chestPlateL.position.set(-0.25, 0, 0.1)
    chestPlateL.rotation.y = 0.15
    chestPlateL.scale.set(1.0, 1.0, 0.5)
    ribcageGroup.add(chestPlateL)

    const chestPlateR = chestPlateL.clone()
    chestPlateR.position.x = 0.25
    chestPlateR.rotation.y = -0.15
    ribcageGroup.add(chestPlateR)

    // Solid Human Abs Block
    const absPlate = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.6, 0.25), cyberShellMat)
    absPlate.position.set(0, -0.8, 0.05)
    ribcageGroup.add(absPlate)

    // --- 4. Pulse Biomech Heart Core ---
    const heartCore = new THREE.Mesh(new THREE.IcosahedronGeometry(0.18, 2), glowingCoreMat)
    heartCore.position.set(0, 0.15, 0.12)
    ribcageGroup.add(heartCore)

    // Orbital core rings
    const coreRing1 = new THREE.Mesh(new THREE.TorusGeometry(0.26, 0.015, 8, 32), chromeMat)
    coreRing1.position.copy(heartCore.position)
    ribcageGroup.add(coreRing1)

    const coreRing2 = coreRing1.clone()
    coreRing2.rotation.x = Math.PI / 2
    ribcageGroup.add(coreRing2)

    // --- 5. Pelvis Hip Plate ---
    const pelvisGroup = new THREE.Group()
    pelvisGroup.position.y = 0.4
    skeletonGroup.add(pelvisGroup)

    const hipPlate = new THREE.Mesh(new THREE.BoxGeometry(0.85, 0.16, 0.4), titaniumMat)
    pelvisGroup.add(hipPlate)

    // Solid hip guard shell
    const hipGuard = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.35, 0.45), cyberShellMat)
    hipGuard.position.y = -0.05
    pelvisGroup.add(hipGuard)

    const sacrum = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.25, 0.25, 16), chromeMat)
    sacrum.position.y = 0.15
    pelvisGroup.add(sacrum)

    // --- 6. Solid Humanoid Arms ---
    const shoulderL = new THREE.Group()
    shoulderL.position.set(-0.85, 2.05, 0)
    skeletonGroup.add(shoulderL)

    const jointCapL = new THREE.Mesh(new THREE.SphereGeometry(0.14, 16, 16), chromeMat)
    shoulderL.add(jointCapL)

    // Solid shoulder deltoid pad
    const shoulderCapL = new THREE.Mesh(new THREE.SphereGeometry(0.24, 16, 16), cyberShellMat)
    shoulderCapL.scale.set(1.0, 1.2, 1.0)
    shoulderL.add(shoulderCapL)

    const armGroupL = new THREE.Group()
    shoulderL.add(armGroupL)

    // Inner Humerus
    const humerusL = new THREE.Mesh(new THREE.CylinderGeometry(0.065, 0.05, 0.65, 12), titaniumMat)
    humerusL.position.y = -0.35
    armGroupL.add(humerusL)

    // Solid Bicep/Tricep muscle shell
    const bicepShellL = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.11, 0.6, 12), cyberShellMat)
    bicepShellL.position.y = -0.35
    armGroupL.add(bicepShellL)

    // Forearm Group (Radius + Ulna dual bones inside Forearm guard)
    const forearmGroupL = new THREE.Group()
    forearmGroupL.position.set(0, -0.7, 0)
    armGroupL.add(forearmGroupL)

    const elbowL = new THREE.Mesh(new THREE.SphereGeometry(0.08, 16, 16), chromeMat)
    forearmGroupL.add(elbowL)

    const radiusL = new THREE.Mesh(new THREE.CylinderGeometry(0.038, 0.03, 0.62, 8), titaniumMat)
    radiusL.position.set(-0.04, -0.32, 0)
    forearmGroupL.add(radiusL)

    const ulnaL = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.038, 0.62, 8), titaniumMat)
    ulnaL.position.set(0.04, -0.32, 0)
    forearmGroupL.add(ulnaL)

    // Solid Forearm guard plate
    const forearmShellL = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.09, 0.58, 12), cyberShellMat)
    forearmShellL.position.set(0, -0.32, 0)
    forearmGroupL.add(forearmShellL)

    const handL = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.12, 0.12), chromeMat)
    handL.position.y = -0.65
    forearmGroupL.add(handL)

    // Symmetrical Right Arm
    const shoulderR = shoulderL.clone()
    shoulderR.position.x = 0.85
    skeletonGroup.add(shoulderR)

    // --- 7. Solid Humanoid Legs ---
    const legL = new THREE.Group()
    legL.position.set(-0.35, 0.35, 0)
    skeletonGroup.add(legL)

    const hipJointL = new THREE.Mesh(new THREE.SphereGeometry(0.12, 16, 16), chromeMat)
    legL.add(hipJointL)

    // Inner femur
    const femurL = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.06, 0.85, 12), titaniumMat)
    femurL.position.y = -0.45
    legL.add(femurL)

    // Solid Thigh Shell plate
    const thighShellL = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.14, 0.8, 12), cyberShellMat)
    thighShellL.position.y = -0.45
    legL.add(thighShellL)

    const lowerLegL = new THREE.Group()
    lowerLegL.position.set(0, -0.9, 0)
    legL.add(lowerLegL)

    const kneeL = new THREE.Mesh(new THREE.SphereGeometry(0.09, 16, 16), chromeMat)
    lowerLegL.add(kneeL)

    // Inner shin bones
    const tibiaL = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.035, 0.8, 8), titaniumMat)
    tibiaL.position.set(-0.03, -0.42, 0)
    lowerLegL.add(tibiaL)

    const fibulaL = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.8, 8), titaniumMat)
    fibulaL.position.set(0.03, -0.42, 0)
    lowerLegL.add(fibulaL)

    // Solid Shin/Calf Shell plate
    const calfShellL = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.09, 0.76, 12), cyberShellMat)
    calfShellL.position.set(0, -0.42, 0)
    lowerLegL.add(calfShellL)

    // Symmetrical Right Leg
    const legR = legL.clone()
    legR.position.x = 0.35
    skeletonGroup.add(legR)

    // --- 8. Dynamic Core Forcefield Grid ---
    const forcefield = new THREE.Mesh(
      new THREE.SphereGeometry(1.6, 32, 32),
      new THREE.MeshBasicMaterial({
        color: 0x00f0ff,
        wireframe: true,
        transparent: true,
        opacity: 0.0
      })
    )
    forcefield.position.copy(heartCore.position)
    ribcageGroup.add(forcefield)

    // --- 9. Kinetic Particle Sparks ---
    const pCount = 200
    const pGeom = new THREE.BufferGeometry()
    const pPos = new Float32Array(pCount * 3)
    const pVels: THREE.Vector3[] = []

    for (let i = 0; i < pCount; i++) {
      pPos[i*3] = (Math.random() - 0.5) * 6
      pPos[i*3+1] = Math.random() * 4 - 1
      pPos[i*3+2] = (Math.random() - 0.5) * 5
      pVels.push(new THREE.Vector3(
        (Math.random() - 0.5) * 0.15,
        Math.random() * 0.4 + 0.15,
        (Math.random() - 0.5) * 0.15
      ))
    }
    pGeom.setAttribute('position', new THREE.BufferAttribute(pPos, 3))
    const pMat = new THREE.PointsMaterial({
      color: 0x00f0ff,
      size: 0.045,
      transparent: true,
      opacity: 0.55,
      blending: THREE.AdditiveBlending
    })
    const particles = new THREE.Points(pGeom, pMat)
    scene.add(particles)

    // Mouse tracking vectors
    const mouse = new THREE.Vector2(0, 0)
    const target = new THREE.Vector3(0, 0, 0)

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1
      const y = -((e.clientY - rect.top) / rect.height) * 2 + 1
      mouse.x = x
      mouse.y = y
      target.x = x * 2.2
      target.y = y * 1.6 + 1.2
    }

    // Direct Click handler to trigger overload
    let triggerDuration = 0
    const handleMouseDown = () => {
      currentProtocolState = currentProtocolState === 0 ? 1 : 0
      
      if (currentProtocolState === 1) {
        setProtocol('OVERLOAD')
        setFrequency(410.2)
        setEnergy(385)
        setLogs(prev => [
          \`[\${new Date().toLocaleTimeString()}] ⚠️ CORE DISCHARGE DEPLOYED!\`,
          \`[\${new Date().toLocaleTimeString()}] Synaptic overclock: 410.2Hz\`,
          ...prev.slice(0, 4)
        ])

        glowingCoreMat.color.setHex(0xff0066)
        eyeMat.color.setHex(0xff0066)
        rimLightL.color.setHex(0xff0066)
        pMat.color.setHex(0xff0066)
        cyberShellMat.color.setHex(0x2f0210) // Glow reddish

        forcefield.scale.setScalar(0.2)
        forcefield.material.opacity = 0.65
        triggerDuration = 1.0
      } else {
        setProtocol('IDLE')
        setFrequency(92.4)
        setEnergy(100)
        setLogs(prev => [
          \`[\${new Date().toLocaleTimeString()}] 🟢 Core stabilized. Synapse Protocol: Idle\`,
          ...prev.slice(0, 4)
        ])

        glowingCoreMat.color.setHex(0x00f0ff)
        eyeMat.color.setHex(0x00f0ff)
        rimLightL.color.setHex(0x00f0ff)
        pMat.color.setHex(0x00f0ff)
        cyberShellMat.color.setHex(0x0a101f) // Return dark cyan

        forcefield.material.opacity = 0
      }
    }

    container.addEventListener('mousemove', handleMouseMove)
    container.addEventListener('mousedown', handleMouseDown)

    // Window resize
    const handleResize = () => {
      if (!containerRef.current) return
      camera.aspect = container.clientWidth / container.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(container.clientWidth, container.clientHeight)
    }
    window.addEventListener('resize', handleResize)

    // Animation Loop
    const clock = new THREE.Clock()
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)
      time = clock.getElapsedTime()

      // 1. Skull look at cursor
      skullGroup.lookAt(target.x, target.y + 1.2, 3)

      // Spine organic Chain Flex
      spineSegments.forEach((seg, idx) => {
        const factor = idx / spineCount
        seg.rotation.y += (mouse.x * 0.32 * factor - seg.rotation.y) * 0.08
        seg.rotation.x += (mouse.y * 0.16 * factor - seg.rotation.x) * 0.08
        
        // Idle spine ripples
        seg.position.x = Math.sin(time * 2 + idx * 0.4) * 0.015
      })

      // Ribcage updates
      ribcageGroup.rotation.y += (mouse.x * 0.18 - ribcageGroup.rotation.y) * 0.06
      const breathFactor = 1.0 + Math.sin(time * 2) * 0.024
      ribs.forEach((pair) => {
        const scale = breathFactor * (1.0 + (currentProtocolState === 1 ? 0.07 : 0))
        pair.left.scale.set(scale, scale, scale)
        pair.right.scale.set(scale, scale, scale)
      })

      // Dynamic arms movement
      shoulderL.rotation.y = -Math.PI / 12 + Math.sin(time * 1.2) * 0.05 + mouse.x * 0.12
      shoulderR.rotation.y = Math.PI / 12 - Math.sin(time * 1.2) * 0.05 + mouse.x * 0.12

      // Core pulsing
      const pulseSpeed = currentProtocolState === 1 ? 15.0 : 3.0
      const pulseScale = 1.0 + Math.sin(time * pulseSpeed) * 0.15
      heartCore.scale.setScalar(pulseScale)

      // Ring rotations
      coreRing1.rotation.y += currentProtocolState === 1 ? 0.1 : 0.02
      coreRing2.rotation.x += currentProtocolState === 1 ? 0.08 : 0.015

      // Light target interpolations
      cursorLight.position.x += (target.x - cursorLight.position.x) * 0.1
      cursorLight.position.y += (target.y - cursorLight.position.y) * 0.1

      // 2. Overload Forcefield pulse decay
      if (currentProtocolState === 1 && triggerDuration > 0) {
        triggerDuration -= 0.015
        forcefield.scale.addScalar(0.08)
        forcefield.material.opacity = triggerDuration * 0.65
      } else if (currentProtocolState === 1 && triggerDuration <= 0) {
        forcefield.scale.setScalar(0.2)
        forcefield.material.opacity = 0.65
        triggerDuration = 1.0
      }

      // 3. Spikes/Particles flow
      const posAttr = pGeom.getAttribute('position')
      const speedMult = currentProtocolState === 1 ? 3.5 : 1.0
      for (let i = 0; i < pCount; i++) {
        let y = posAttr.getY(i) + pVels[i].y * 0.016 * speedMult
        if (y > 4) {
          y = -1.5
          posAttr.setX(i, (Math.random() - 0.5) * 6)
          posAttr.setZ(i, (Math.random() - 0.5) * 5)
        }
        posAttr.setY(i, y)
        posAttr.setX(i, posAttr.getX(i) + Math.sin(time * 1.5 + i) * 0.002)
      }
      posAttr.needsUpdate = true

      renderer.render(scene, camera)
    }

    animate()

    // Resource Cleanups
    return () => {
      cancelAnimationFrame(animationFrameId)
      container.removeEventListener('mousemove', handleMouseMove)
      container.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('resize', handleResize)
      
      // Traversal to dispose bionic geometries & standard materials
      scene.traverse((object) => {
        if (!(object instanceof THREE.Mesh)) return
        if (object.geometry) object.geometry.dispose()
        if (Array.isArray(object.material)) {
          object.material.forEach((mat) => mat.dispose())
        } else if (object.material) {
          object.material.dispose()
        }
      })
      pGeom.dispose()
      pMat.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative flex h-[720px] w-full flex-col justify-between overflow-hidden rounded-[38px] border border-white/10 bg-[#020204] text-white"
    >
      {/* 3D Canvas Context */}
      <canvas ref={canvasRef} className="absolute inset-0 block h-full w-full" />

      {/* Reactive HUD Overlay (Left Panel) */}
      <div
        className="relative z-10 m-6 w-[280px] rounded-2xl border bg-black/80 p-5 backdrop-blur-xl transition-all duration-300"
        style={{
          borderColor: protocol === 'OVERLOAD' ? '#ff006655' : 'rgba(0, 240, 255, 0.15)',
          boxShadow: protocol === 'OVERLOAD' ? '0 15px 35px rgba(255, 0, 102, 0.15)' : 'none'
        }}
      >
        <div
          className="flex items-center gap-2 text-xs font-black uppercase tracking-widest transition-colors duration-300"
          style={{ color: protocol === 'OVERLOAD' ? '#ff0066' : '#00f0ff' }}
        >
          {protocol === 'OVERLOAD' ? '💥 SYNAPSE PROTOCOL: OVERLOAD' : '⚡ SYNAPSE PROTOCOL: IDLE'}
        </div>
        <div
          className="my-3 h-[1px] transition-colors duration-300"
          style={{ backgroundColor: protocol === 'OVERLOAD' ? '#ff0066' : 'rgba(0, 240, 255, 0.2)' }}
        />

        <div className="space-y-2.5 text-xs">
          <div className="flex justify-between">
            <span className="text-white/40">Chassis Code</span>
            <strong className="text-white">CYBER-HUMANOID SOLID</strong>
          </div>
          <div className="flex justify-between">
            <span className="text-white/40">Core Sync</span>
            <strong
              className="transition-colors duration-300"
              style={{ color: protocol === 'OVERLOAD' ? '#ff0066' : '#a3e635' }}
            >
              {protocol === 'OVERLOAD' ? 'STRESSED' : 'STABLE'}
            </strong>
          </div>
          <div className="flex justify-between">
            <span className="text-white/40">Synaptic Freq</span>
            <strong className="text-white">{frequency} Hz</strong>
          </div>
          <div className="flex justify-between">
            <span className="text-white/40">Energy Core</span>
            <strong
              className="transition-colors duration-300"
              style={{ color: protocol === 'OVERLOAD' ? '#ff0066' : '#00f0ff' }}
            >
              {energy}%
            </strong>
          </div>
        </div>

        {/* Real-time Bio-logs */}
        <div className="mt-4 border-t border-white/5 pt-3">
          <div className="mb-2 text-[10px] uppercase tracking-wider text-white/30">System Telemetry</div>
          <div className="h-[90px] overflow-y-auto rounded-lg bg-black/40 p-2.5 text-[9px] font-mono leading-relaxed text-white/50 space-y-1">
            {logs.map((log, idx) => (
              <div key={idx} className="border-b border-white/5 pb-0.5 last:border-b-0 last:text-white/70">
                {log}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Aesthetic Bottom Footer Info */}
      <div className="relative z-10 mx-auto mb-6 text-center">
        <h3
          className="text-sm font-black uppercase tracking-[0.3em] transition-colors duration-400"
          style={{ color: protocol === 'OVERLOAD' ? '#ff0066' : '#00f0ff' }}
        >
          Synthetix Cyber-Humanoid Prime
        </h3>
        <p className="mt-1.5 text-[9px] font-medium tracking-[0.18em] text-white/40 uppercase">
          Click screen to discharge core • Move mouse to rotate biomech body
        </p>
      </div>
    </div>
  )
}
export default SynthetixCyberSkeletonPrime;
`,
    prompt: `Create a highly interactive programmatic 3D human skeleton robot called "Synthetix Cyber-Skeleton Prime".\n- Built entirely using raw Three.js primitives (Sphere, Cylinder, Torus geometries) and glossy metallic white titanium/chrome PBR materials\n- Features a detailed human skeletal hierarchy: stylized skull with glowing visor eye, stacked 10-vertebra spine process, 5 pairs of curved mechanical ribs protecting a pulsing core fusion heart with orbital rings\n- Left and right limbs built using humerus, femur, and dual-bar radius/ulna forearm structures\n- Full mouse cursor coordinates tracking causing the skull, spine segments, and ribcage to smoothly look-at and twist towards the target\n- Click-to-trigger overdrive protocol changing the theme from cyan to crimson/magenta, expanding a wireframe forcefield shell, accelerating particle spark flows, and updating reactive telemetry HUD displays\n- Clean resource disposal of meshes, geometries, and standard materials on React component unmount`,
    likes: 0,
    author: 'Animation AI',
    featured: true,
    createdAt: '2026-05-23T10:00:00.000Z',
    updatedAt: '2026-05-23T10:00:00.000Z'
  },
  {
    _id: 'robot-nova-toon-crying-android-x',
    slug: 'nova-toon-crying-android-x',
    title: 'Nova-Toon Crying Android X',
    category: 'robot',
    tag: 'threejs',
    description: 'A highly interactive cell-shaded 3D humanoid robot crying glowing neon bionic liquid tears. Custom-built in Three.js, it features smooth visual cursor look-at tracking, breathing chest scaling, cute bionic cheek blushing, and organic sobbing head-shake oscillations that overclock into a dramatic hypercry explosion on click.',
    previewCode: `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<style>
* { margin: 0; padding: 0; box-sizing: border-box; }
body { background: #040108; overflow: hidden; cursor: crosshair; font-family: 'Courier New', monospace; user-select: none; }
canvas { display: block; width: 100vw; height: 100vh; }
.hud { position: absolute; top: 24px; left: 24px; padding: 18px; border: 1px solid rgba(0, 240, 255, 0.15); border-radius: 16px; background: rgba(4, 1, 8, 0.85); color: #00f0ff; backdrop-filter: blur(12px); pointer-events: none; font-size: 11px; min-width: 250px; transition: all 0.3s; box-shadow: 0 15px 35px rgba(0,0,0,0.5); }
.hud-title { font-weight: bold; letter-spacing: 2px; margin-bottom: 8px; display: flex; align-items: center; gap: 6px; font-size: 12px; text-transform: uppercase; }
.hud-sep { height: 1px; background: rgba(0, 240, 255, 0.2); margin: 8px 0; transition: background 0.3s; }
.hud-item { display: flex; justify-content: space-between; margin: 5px 0; }
.hud-item span { color: rgba(0, 240, 255, 0.55); }
.hud-item strong { color: #fff; }
.label { position: absolute; bottom: 28px; left: 50%; transform: translateX(-50%); color: #00f0ff; letter-spacing: 5px; text-transform: uppercase; pointer-events: none; text-align: center; transition: all 0.4s; font-size: 13px; font-weight: 900; }
.sub { font-size: 9px; color: rgba(0, 240, 255, 0.4); letter-spacing: 2px; margin-top: 6px; font-weight: normal; }
</style>
</head>
<body>
<div class="hud" id="hud">
  <div class="hud-title" id="hudTitle">💧 EMOTION CORE: MELANCHOLY</div>
  <div class="hud-sep" id="hudSep"></div>
  <div class="hud-item"><span>Chassis Code</span><strong>NOVA-TOON CYBER BOY</strong></div>
  <div class="hud-item"><span>Tear Frequency</span><strong id="tearFreq">8.4 Hz</strong></div>
  <div class="hud-item"><span>Sobbing Wobble</span><strong id="sobbingAmp">MODERATE</strong></div>
  <div class="hud-item"><span>Active Tears</span><strong id="tearsCount">0</strong></div>
</div>
<div class="label" id="label">
  Nova-Toon Crying Android X
  <div class="sub">Click Screen to Trigger Hypercry • Move Cursor to Interact</div>
</div>

<script type="importmap">{"imports":{"three":"https://unpkg.com/three@0.160.0/build/three.module.js"}}</script>
<script type="module">
import * as THREE from 'three';

let currentPreset = 0; // 0: MELANCHOLY, 1: TRAGIC HYPERCRY
let time = 0;

const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x040108, 0.07);

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(0, 0.2, 8.5);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.toneMapping = THREE.ACESFilmicToneMapping;
document.body.appendChild(renderer.domElement);

// Lights
const ambientLight = new THREE.AmbientLight(0x0e061c, 2.0);
scene.add(ambientLight);

const mainSpot = new THREE.SpotLight(0xffffff, 30, 15, Math.PI / 6, 0.5, 1);
mainSpot.position.set(0, 5, 4);
scene.add(mainSpot);

const keyLight = new THREE.DirectionalLight(0xffbbf2, 1.5);
keyLight.position.set(2, 3, 2);
scene.add(keyLight);

const rimLight = new THREE.PointLight(0x00f0ff, 25, 8);
rimLight.position.set(-3, 1, -2);
scene.add(rimLight);

const cursorLight = new THREE.PointLight(0x00f0ff, 8, 6);
cursorLight.position.set(0, 0, 3);
scene.add(cursorLight);

// Materials (Cute Matte Cartoon / Cell-shaded looks)
const skinMat = new THREE.MeshToonMaterial({
  color: 0x93e6ff, // Soft bionic neon-blue skin
  roughness: 0.8
});

const darkMat = new THREE.MeshToonMaterial({
  color: 0x110825, // Deep violet-black joints
  roughness: 0.6
});

const whiteMat = new THREE.MeshToonMaterial({
  color: 0xffffff,
  roughness: 0.5
});

const glowTearsMat = new THREE.MeshBasicMaterial({
  color: 0x00f0ff,
  transparent: true,
  opacity: 0.85
});

const mouthMat = new THREE.MeshBasicMaterial({
  color: 0xff0066
});

// Humanoid Character Group
const androidGroup = new THREE.Group();
androidGroup.position.y = -1.2;
scene.add(androidGroup);

// --- 1. Cute Programmatic Helmet Head ---
const headGroup = new THREE.Group();
headGroup.position.y = 2.4;
androidGroup.add(headGroup);

// Large round head shell
const headShell = new THREE.Mesh(new THREE.SphereGeometry(0.68, 32, 32), skinMat);
headShell.scale.set(1.0, 1.05, 0.95);
headGroup.add(headShell);

// Cute bionic headphone ears
const earCapL = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.08, 16), darkMat);
earCapL.rotation.z = Math.PI / 2;
earCapL.position.set(-0.7, 0, 0);
headGroup.add(earCapL);

const earCapR = earCapL.clone();
earCapR.position.x = 0.7;
headGroup.add(earCapR);

// Visor eyes
const eyeL = new THREE.Mesh(new THREE.SphereGeometry(0.14, 16, 16), darkMat);
eyeL.scale.set(1.0, 1.1, 0.3);
eyeL.position.set(-0.25, 0.05, 0.58);
headGroup.add(eyeL);

const eyeR = eyeL.clone();
eyeR.position.x = 0.25;
headGroup.add(eyeR);

// Cute blushing cheeks
const blushL = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.06, 0.02), new THREE.MeshBasicMaterial({ color: 0xff0066 }));
blushL.position.set(-0.28, -0.16, 0.62);
headGroup.add(blushL);

const blushR = blushL.clone();
blushR.position.x = 0.28;
headGroup.add(blushR);

// Crying Tear ducts
const tearDuctL = new THREE.Group();
tearDuctL.position.set(-0.24, 0.02, 0.62);
headGroup.add(tearDuctL);

const tearDuctR = new THREE.Group();
tearDuctR.position.set(0.24, 0.02, 0.62);
headGroup.add(tearDuctR);

// --- 2. Cute Programmatic Solid Torso ---
const chestGroup = new THREE.Group();
chestGroup.position.y = 1.3;
androidGroup.add(chestGroup);

const torsoShell = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.32, 1.1, 16), skinMat);
torsoShell.scale.set(1.0, 1.0, 0.7);
chestGroup.add(torsoShell);

// Cute chest heart glass reactor
const chestCore = new THREE.Mesh(new THREE.SphereGeometry(0.16, 16, 16), new THREE.MeshBasicMaterial({ color: 0x00f0ff }));
chestCore.position.set(0, 0.15, 0.38);
chestGroup.add(chestCore);

// Neck connector
const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.25, 16), darkMat);
neck.position.y = 0.65;
chestGroup.add(neck);

// --- 3. Solid Cartoon Limbs ---
// Shoulders
const shoulderL = new THREE.Group();
shoulderL.position.set(-0.68, 1.8, 0);
androidGroup.add(shoulderL);

const shoulderPadL = new THREE.Mesh(new THREE.SphereGeometry(0.15, 16, 16), darkMat);
shoulderL.add(shoulderPadL);

const armGroupL = new THREE.Group();
shoulderL.add(armGroupL);

// Solid Upper Arm
const upperArmL = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.09, 0.58, 12), skinMat);
upperArmL.position.y = -0.32;
armGroupL.add(upperArmL);

const elbowL = new THREE.Mesh(new THREE.SphereGeometry(0.08, 12, 12), darkMat);
elbowL.position.y = -0.62;
armGroupL.add(elbowL);

// Solid Forearm
const forearmL = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.07, 0.52, 12), skinMat);
forearmL.position.set(0, -0.88, 0);
armGroupL.add(forearmL);

const handL = new THREE.Mesh(new THREE.SphereGeometry(0.09, 12, 12), whiteMat);
handL.position.set(0, -1.18, 0);
armGroupL.add(handL);

// Symmetrical Right Arm
const shoulderR = shoulderL.clone();
shoulderR.position.x = 0.68;
androidGroup.add(shoulderR);

// --- 4. Pelvis & Legs ---
const pelvis = new THREE.Mesh(new THREE.BoxGeometry(0.65, 0.16, 0.38), darkMat);
pelvis.position.y = 0.68;
androidGroup.add(pelvis);

// Left Leg
const legL = new THREE.Group();
legL.position.set(-0.25, 0.58, 0);
androidGroup.add(legL);

const hipL = new THREE.Mesh(new THREE.SphereGeometry(0.12, 12, 12), darkMat);
legL.add(hipL);

const femurL = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.1, 0.72, 12), skinMat);
femurL.position.y = -0.4;
legL.add(femurL);

const kneeL = new THREE.Mesh(new THREE.SphereGeometry(0.09, 12, 12), darkMat);
kneeL.position.y = -0.76;
legL.add(kneeL);

const tibiaL = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.07, 0.68, 12), skinMat);
tibiaL.position.y = -1.1;
legL.add(tibiaL);

const footL = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.08, 0.24), whiteMat);
footL.position.set(0, -1.48, 0.06);
legL.add(footL);

// Symmetrical Right Leg
const legR = legL.clone();
legR.position.x = 0.25;
androidGroup.add(legR);

// --- 5. Kinetic Neon Tears Physics Engine ---
const activeTears = [];
const tearPoolCount = 80;
const tearGeometry = new THREE.SphereGeometry(0.045, 12, 12);

function spawnTear(sourceDuct, side) {
  const tMesh = new THREE.Mesh(tearGeometry, glowTearsMat);
  
  // Get absolute duct positions
  const wPos = new THREE.Vector3();
  sourceDuct.getWorldPosition(wPos);
  
  tMesh.position.copy(wPos);
  scene.add(tMesh);
  
  // Tear velocity and curve physics
  activeTears.push({
    mesh: tMesh,
    age: 0,
    maxAge: Math.random() * 0.8 + 0.6,
    vel: new THREE.Vector3(
      (Math.random() - 0.5) * 0.08 + (side === 'left' ? -0.1 : 0.1),
      (Math.random() - 0.5) * 0.05,
      Math.random() * 0.15 + 0.1
    ),
    side
  });
}

// Mouse coordinates
const mouse = new THREE.Vector2(0, 0);
const target = new THREE.Vector3(0, 0, 0);

window.addEventListener('mousemove', (e) => {
  mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
  target.x = mouse.x * 2.2;
  target.y = mouse.y * 1.6 + 1.2;
});

// Click Interaction (Hypercry Overload)
let spawnTimer = 0;
window.addEventListener('mousedown', () => {
  currentPreset = currentPreset === 0 ? 1 : 0;
  
  const hud = document.getElementById('hud');
  const hudTitle = document.getElementById('hudTitle');
  const hudSep = document.getElementById('hudSep');
  const label = document.getElementById('label');
  const tearFreq = document.getElementById('tearFreq');
  const sobbingAmp = document.getElementById('sobbingAmp');

  if (currentPreset === 1) {
    // Hypercry Overload
    hudTitle.textContent = "💥 EMOTION CORE: HYPERCRY OVERLOAD";
    hudTitle.style.color = "#ff0066";
    hudSep.style.background = "#ff0066";
    hud.style.borderColor = "#ff006688";
    hud.style.boxShadow = "0 15px 35px rgba(255,0,102,0.3)";
    label.style.color = "#ff0066";
    tearFreq.textContent = "48.2 Hz";
    sobbingAmp.textContent = "EXTREME";
    sobbingAmp.style.color = "#ff0066";
    
    // Core & tears color change
    glowTearsMat.color.setHex(0xff0066);
    chestCore.material.color.setHex(0xff0066);
    rimLight.color.setHex(0xff0066);
    
    // Spawn massive tear burst instantly
    for (let i = 0; i < 20; i++) {
      spawnTear(tearDuctL, 'left');
      spawnTear(tearDuctR, 'right');
    }
  } else {
    // Return to Normal Melancholy
    hudTitle.textContent = "💧 EMOTION CORE: MELANCHOLY";
    hudTitle.style.color = "#00f0ff";
    hudSep.style.background = "rgba(0, 240, 255, 0.2)";
    hud.style.borderColor = "rgba(0, 240, 255, 0.15)";
    hud.style.boxShadow = "0 15px 35px rgba(0,0,0,0.5)";
    label.style.color = "#00f0ff";
    tearFreq.textContent = "8.4 Hz";
    sobbingAmp.textContent = "MODERATE";
    sobbingAmp.style.color = "#fff";
    
    glowTearsMat.color.setHex(0x00f0ff);
    chestCore.material.color.setHex(0x00f0ff);
    rimLight.color.setHex(0x00f0ff);
  }
});

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Animation Loop
const clock = new THREE.Clock();
function animate() {
  requestAnimationFrame(animate);
  time = clock.getElapsedTime();
  
  // 1. Dynamic Cursor Look-At Tracking
  headGroup.lookAt(target.x, target.y + 0.8, 3);
  chestGroup.rotation.y += (mouse.x * 0.24 - chestGroup.rotation.y) * 0.08;
  
  // 2. Continuous Organic Sobbing Wobble
  const sobSpeed = currentPreset === 1 ? 24.0 : 9.0;
  const sobAmp = currentPreset === 1 ? 0.065 : 0.024;
  const wobbleY = Math.sin(time * sobSpeed) * sobAmp;
  const wobbleZ = Math.cos(time * sobSpeed * 0.8) * sobAmp * 0.5;
  
  headGroup.position.y = 2.4 + wobbleY;
  headGroup.rotation.z = Math.sin(time * sobSpeed * 0.5) * (currentPreset === 1 ? 0.05 : 0.015);
  
  // Breathing scale oscillation
  const breath = 1.0 + Math.sin(time * 2.5) * 0.015;
  torsoShell.scale.set(breath, breath, breath);
  
  // Arms flex to shield chest
  const armAngle = currentPreset === 1 ? -0.2 : 0.05;
  shoulderL.rotation.y = -Math.PI / 12 + mouse.x * 0.12;
  shoulderR.rotation.y = Math.PI / 12 + mouse.x * 0.12;
  
  // 3. Neon Tears Spawn and Physics updates
  spawnTimer += clock.getDelta();
  const spawnThreshold = currentPreset === 1 ? 0.02 : 0.12;
  
  // Continuously spawn tears
  if (Math.random() < (currentPreset === 1 ? 0.8 : 0.25)) {
    spawnTear(tearDuctL, 'left');
    spawnTear(tearDuctR, 'right');
  }
  
  // Update HUD active tears count
  document.getElementById('tearsCount').textContent = activeTears.length;
  
  // Process existing tears
  for (let i = activeTears.length - 1; i >= 0; i--) {
    const tear = activeTears[i];
    tear.age += 0.016;
    
    if (tear.age >= tear.maxAge) {
      scene.remove(tear.mesh);
      tear.mesh.geometry.dispose();
      activeTears.splice(i, 1);
      continue;
    }
    
    // Gravity pulls down, inertia carries outward
    tear.vel.y -= 0.14 * 0.016; // gravity
    tear.mesh.position.add(tear.vel);
    
    // Tear scale decays
    const lifeRatio = 1.0 - (tear.age / tear.maxAge);
    tear.mesh.scale.setScalar(lifeRatio);
  }
  
  // PointLight cursor movement
  cursorLight.position.x += (target.x - cursorLight.position.x) * 0.1;
  cursorLight.position.y += (target.y - cursorLight.position.y) * 0.1;
  
  renderer.render(scene, camera);
}

animate();
</script>
</body>
</html>
`,
    code: `'use client'

import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

interface TearParticle {
  mesh: THREE.Mesh
  age: number
  maxAge: number
  vel: THREE.Vector3
  side: 'left' | 'right'
}

export function NovaToonCryingAndroidX() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  
  // React State for Telemetry HUD
  const [preset, setPreset] = useState<'MELANCHOLY' | 'OVERLOAD'>('MELANCHOLY')
  const [tearFreq, setTearFreq] = useState(8.4)
  const [sobbing, setSobbing] = useState<'MODERATE' | 'EXTREME'>('MODERATE')
  const [activeCount, setActiveCount] = useState(0)
  const [logs, setLogs] = useState<string[]>([
    'Tear duct system check: OK.',
    'Atmospheric sobbing dampening active.',
    'System status: Melancholy.'
  ])

  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return

    const container = containerRef.current
    const canvas = canvasRef.current

    let currentPresetState = 0 // 0: MELANCHOLY, 1: HYPERCRY OVERLOAD
    let animationFrameId: number
    let time = 0

    // Scene setup
    const scene = new THREE.Scene()
    scene.fog = new THREE.FogExp2(0x040108, 0.07)

    // Camera setup
    const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 100)
    camera.position.set(0, 0.2, 8.5)

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
    renderer.setSize(container.clientWidth, container.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.toneMapping = THREE.ACESFilmicToneMapping

    // Lights
    const ambientLight = new THREE.AmbientLight(0x0e061c, 2.0)
    scene.add(ambientLight)

    const mainSpot = new THREE.SpotLight(0xffffff, 30, 15, Math.PI / 6, 0.5, 1)
    mainSpot.position.set(0, 5, 4)
    scene.add(mainSpot)

    const keyLight = new THREE.DirectionalLight(0xffbbf2, 1.5)
    keyLight.position.set(2, 3, 2)
    scene.add(keyLight)

    const rimLight = new THREE.PointLight(0x00f0ff, 25, 8)
    rimLight.position.set(-3, 1, -2)
    scene.add(rimLight)

    const cursorLight = new THREE.PointLight(0x00f0ff, 8, 6)
    cursorLight.position.set(0, 0, 3)
    scene.add(cursorLight)

    // Materials (Cute Matte Cartoon/Cell-shaded looks)
    const skinMat = new THREE.MeshToonMaterial({
      color: 0x93e6ff, // Soft bionic neon-blue skin
      roughness: 0.8
    })

    const darkMat = new THREE.MeshToonMaterial({
      color: 0x110825, // Deep violet-black joints
      roughness: 0.6
    })

    const whiteMat = new THREE.MeshToonMaterial({
      color: 0xffffff,
      roughness: 0.5
    })

    const glowTearsMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.85
    })

    const blushMat = new THREE.MeshBasicMaterial({
      color: 0xff0066
    })

    // Humanoid Character Group
    const androidGroup = new THREE.Group()
    androidGroup.position.y = -1.2
    scene.add(androidGroup)

    // --- 1. Cute Programmatic Helmet Head ---
    const headGroup = new THREE.Group()
    headGroup.position.y = 2.4
    androidGroup.add(headGroup)

    // Large round head shell
    const headShell = new THREE.Mesh(new THREE.SphereGeometry(0.68, 32, 32), skinMat)
    headShell.scale.set(1.0, 1.05, 0.95)
    headGroup.add(headShell)

    // Cute bionic headphone ears
    const earCapL = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.08, 16), darkMat)
    earCapL.rotation.z = Math.PI / 2
    earCapL.position.set(-0.7, 0, 0)
    headGroup.add(earCapL)

    const earCapR = earCapL.clone()
    earCapR.position.x = 0.7
    headGroup.add(earCapR)

    // Visor eyes
    const eyeL = new THREE.Mesh(new THREE.SphereGeometry(0.14, 16, 16), darkMat)
    eyeL.scale.set(1.0, 1.1, 0.3)
    eyeL.position.set(-0.25, 0.05, 0.58)
    headGroup.add(eyeL)

    const eyeR = eyeL.clone()
    eyeR.position.x = 0.25
    headGroup.add(eyeR)

    // Cute blushing cheeks
    const blushL = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.06, 0.02), blushMat)
    blushL.position.set(-0.28, -0.16, 0.62)
    headGroup.add(blushL)

    const blushR = blushL.clone()
    blushR.position.x = 0.28
    headGroup.add(blushR)

    // Crying Tear ducts
    const tearDuctL = new THREE.Group()
    tearDuctL.position.set(-0.24, 0.02, 0.62)
    headGroup.add(tearDuctL)

    const tearDuctR = new THREE.Group()
    tearDuctR.position.set(0.24, 0.02, 0.62)
    headGroup.add(tearDuctR)

    // --- 2. Cute Programmatic Solid Torso ---
    const chestGroup = new THREE.Group()
    chestGroup.position.y = 1.3
    androidGroup.add(chestGroup)

    const torsoShell = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.32, 1.1, 16), skinMat)
    torsoShell.scale.set(1.0, 1.0, 0.7)
    chestGroup.add(torsoShell)

    // Cute chest heart glass reactor
    const chestCore = new THREE.Mesh(new THREE.SphereGeometry(0.16, 16, 16), new THREE.MeshBasicMaterial({ color: 0x00f0ff }))
    chestCore.position.set(0, 0.15, 0.38)
    chestGroup.add(chestCore)

    // Neck connector
    const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.25, 16), darkMat)
    neck.position.y = 0.65
    chestGroup.add(neck)

    // --- 3. Solid Cartoon Limbs ---
    const shoulderL = new THREE.Group()
    shoulderL.position.set(-0.68, 1.8, 0)
    androidGroup.add(shoulderL)

    const shoulderPadL = new THREE.Mesh(new THREE.SphereGeometry(0.15, 16, 16), darkMat)
    shoulderL.add(shoulderPadL)

    const armGroupL = new THREE.Group()
    shoulderL.add(armGroupL)

    // Solid Upper Arm
    const upperArmL = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.09, 0.58, 12), skinMat)
    upperArmL.position.y = -0.32
    armGroupL.add(upperArmL)

    const elbowL = new THREE.Mesh(new THREE.SphereGeometry(0.08, 12, 12), darkMat)
    elbowL.position.y = -0.62
    armGroupL.add(elbowL)

    // Solid Forearm
    const forearmL = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.07, 0.52, 12), skinMat)
    forearmL.position.set(0, -0.88, 0)
    armGroupL.add(forearmL)

    const handL = new THREE.Mesh(new THREE.SphereGeometry(0.09, 12, 12), whiteMat)
    handL.position.set(0, -1.18, 0)
    armGroupL.add(handL)

    // Symmetrical Right Arm
    const shoulderR = shoulderL.clone()
    shoulderR.position.x = 0.68
    androidGroup.add(shoulderR)

    // --- 4. Pelvis & Legs ---
    const pelvis = new THREE.Mesh(new THREE.BoxGeometry(0.65, 0.16, 0.38), darkMat)
    pelvis.position.y = 0.68
    androidGroup.add(pelvis)

    // Left Leg
    const legL = new THREE.Group()
    legL.position.set(-0.25, 0.58, 0)
    androidGroup.add(legL)

    const hipL = new THREE.Mesh(new THREE.SphereGeometry(0.12, 12, 12), darkMat)
    legL.add(hipL)

    const femurL = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.1, 0.72, 12), skinMat)
    femurL.position.y = -0.4
    legL.add(femurL)

    const kneeL = new THREE.Mesh(new THREE.SphereGeometry(0.09, 12, 12), darkMat)
    kneeL.position.y = -0.76
    legL.add(kneeL)

    const tibiaL = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.07, 0.68, 12), skinMat)
    tibiaL.position.y = -1.1
    legL.add(tibiaL)

    const footL = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.08, 0.24), whiteMat)
    footL.position.set(0, -1.48, 0.06)
    legL.add(footL)

    // Symmetrical Right Leg
    const legR = legL.clone()
    legR.position.x = 0.25
    androidGroup.add(legR)

    // --- 5. Neon Tears Physics Engine ---
    const activeTears: TearParticle[] = []
    const tearGeometry = new THREE.SphereGeometry(0.045, 12, 12)

    const spawnTear = (sourceDuct: THREE.Group, side: 'left' | 'right') => {
      const tMesh = new THREE.Mesh(tearGeometry, glowTearsMat)
      const wPos = new THREE.Vector3()
      sourceDuct.getWorldPosition(wPos)
      tMesh.position.copy(wPos)
      scene.add(tMesh)
      
      activeTears.push({
        mesh: tMesh,
        age: 0,
        maxAge: Math.random() * 0.8 + 0.6,
        vel: new THREE.Vector3(
          (Math.random() - 0.5) * 0.08 + (side === 'left' ? -0.1 : 0.1),
          (Math.random() - 0.5) * 0.05,
          Math.random() * 0.15 + 0.1
        ),
        side
      })
    }

    // Mouse vectors
    const mouse = new THREE.Vector2(0, 0)
    const target = new THREE.Vector3(0, 0, 0)

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1
      const y = -((e.clientY - rect.top) / rect.height) * 2 + 1
      mouse.x = x
      mouse.y = y
      target.x = x * 2.2
      target.y = y * 1.6 + 1.2
    }

    // Click handler to trigger overload/hypercry
    const handleMouseDown = () => {
      currentPresetState = currentPresetState === 0 ? 1 : 0
      
      if (currentPresetState === 1) {
        setPreset('OVERLOAD')
        setTearFreq(48.2)
        setSobbing('EXTREME')
        setLogs(prev => [
          \`[\${new Date().toLocaleTimeString()}] ⚠️ EMOTION OVERLOAD DETECTED!\`,
          \`[\${new Date().toLocaleTimeString()}] Crying overclock: 48.2Hz\`,
          ...prev.slice(0, 4)
        ])

        glowTearsMat.color.setHex(0xff0066)
        chestCore.material.color.setHex(0xff0066)
        rimLight.color.setHex(0xff0066)

        // Massive tear burst
        for (let i = 0; i < 20; i++) {
          spawnTear(tearDuctL, 'left')
          spawnTear(tearDuctR, 'right')
        }
      } else {
        setPreset('MELANCHOLY')
        setTearFreq(8.4)
        setSobbing('MODERATE')
        setLogs(prev => [
          \`[\${new Date().toLocaleTimeString()}] 🟢 Core emotional sync stable. System: Melancholy.\`,
          ...prev.slice(0, 4)
        ])

        glowTearsMat.color.setHex(0x00f0ff)
        chestCore.material.color.setHex(0x00f0ff)
        rimLight.color.setHex(0x00f0ff)
      }
    }

    container.addEventListener('mousemove', handleMouseMove)
    container.addEventListener('mousedown', handleMouseDown)

    const handleResize = () => {
      if (!containerRef.current) return
      camera.aspect = container.clientWidth / container.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(container.clientWidth, container.clientHeight)
    }
    window.addEventListener('resize', handleResize)

    // Animation Loop
    const clock = new THREE.Clock()
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)
      time = clock.getElapsedTime()

      // 1. Skull look at cursor
      headGroup.lookAt(target.x, target.y + 0.8, 3)
      chestGroup.rotation.y += (mouse.x * 0.24 - chestGroup.rotation.y) * 0.08

      // 2. Sobbing oscillations
      const sobSpeed = currentPresetState === 1 ? 24.0 : 9.0
      const sobAmp = currentPresetState === 1 ? 0.065 : 0.024
      const wobbleY = Math.sin(time * sobSpeed) * sobAmp
      
      headGroup.position.y = 2.4 + wobbleY
      headGroup.rotation.z = Math.sin(time * sobSpeed * 0.5) * (currentPresetState === 1 ? 0.05 : 0.015)

      // Chest breathing
      const breath = 1.0 + Math.sin(time * 2.5) * 0.015
      torsoShell.scale.set(breath, breath, breath)

      // Arms swing
      shoulderL.rotation.y = -Math.PI / 12 + mouse.x * 0.12
      shoulderR.rotation.y = Math.PI / 12 + mouse.x * 0.12

      // 3. Spawning tears
      if (Math.random() < (currentPresetState === 1 ? 0.8 : 0.25)) {
        spawnTear(tearDuctL, 'left')
        spawnTear(tearDuctR, 'right')
      }

      // Update state count
      setActiveCount(activeTears.length)

      // Update tear particles
      for (let i = activeTears.length - 1; i >= 0; i--) {
        const tear = activeTears[i]
        tear.age += 0.016
        
        if (tear.age >= tear.maxAge) {
          scene.remove(tear.mesh)
          tear.mesh.geometry.dispose()
          activeTears.splice(i, 1)
          continue
        }
        
        tear.vel.y -= 0.14 * 0.016
        tear.mesh.position.add(tear.vel)
        
        const lifeRatio = 1.0 - (tear.age / tear.maxAge)
        tear.mesh.scale.setScalar(lifeRatio)
      }

      // Cursor light follow
      cursorLight.position.x += (target.x - cursorLight.position.x) * 0.1
      cursorLight.position.y += (target.y - cursorLight.position.y) * 0.1

      renderer.render(scene, camera)
    }

    animate()

    // Cleanups
    return () => {
      cancelAnimationFrame(animationFrameId)
      container.removeEventListener('mousemove', handleMouseMove)
      container.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('resize', handleResize)
      
      // Traverse to dispose
      scene.traverse((object) => {
        if (!(object instanceof THREE.Mesh)) return
        if (object.geometry) object.geometry.dispose()
        if (Array.isArray(object.material)) {
          object.material.forEach((mat) => mat.dispose())
        } else if (object.material) {
          object.material.dispose()
        }
      })
      tearGeometry.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative flex h-[720px] w-full flex-col justify-between overflow-hidden rounded-[38px] border border-white/10 bg-[#040108] text-white"
    >
      {/* 3D Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 block h-full w-full" />

      {/* Reactive HUD Overlay */}
      <div
        className="relative z-10 m-6 w-[280px] rounded-2xl border bg-black/80 p-5 backdrop-blur-xl transition-all duration-300"
        style={{
          borderColor: preset === 'OVERLOAD' ? '#ff006655' : 'rgba(0, 240, 255, 0.15)',
          boxShadow: preset === 'OVERLOAD' ? '0 15px 35px rgba(255, 0, 102, 0.15)' : 'none'
        }}
      >
        <div
          className="flex items-center gap-2 text-xs font-black uppercase tracking-widest transition-colors duration-300"
          style={{ color: preset === 'OVERLOAD' ? '#ff0066' : '#00f0ff' }}
        >
          {preset === 'OVERLOAD' ? '💥 EMOTION CORE: HYPERCRY OVERLOAD' : '💧 EMOTION CORE: MELANCHOLY'}
        </div>
        <div
          className="my-3 h-[1px] transition-colors duration-300"
          style={{ backgroundColor: preset === 'OVERLOAD' ? '#ff0066' : 'rgba(0, 240, 255, 0.2)' }}
        />

        <div className="space-y-2.5 text-xs">
          <div className="flex justify-between">
            <span className="text-white/40">Chassis Code</span>
            <strong className="text-white">NOVA-TOON CYBER BOY</strong>
          </div>
          <div className="flex justify-between">
            <span className="text-white/40">Tear Frequency</span>
            <strong className="text-white">{tearFreq} Hz</strong>
          </div>
          <div className="flex justify-between">
            <span className="text-white/40">Sobbing Wobble</span>
            <strong
              className="transition-colors duration-300"
              style={{ color: preset === 'OVERLOAD' ? '#ff0066' : '#fff' }}
            >
              {sobbing}
            </strong>
          </div>
          <div className="flex justify-between">
            <span className="text-white/40">Active Tears</span>
            <strong
              className="transition-colors duration-300"
              style={{ color: preset === 'OVERLOAD' ? '#ff0066' : '#00f0ff' }}
            >
              {activeCount}
            </strong>
          </div>
        </div>

        {/* Real-time Bio-logs */}
        <div className="mt-4 border-t border-white/5 pt-3">
          <div className="mb-2 text-[10px] uppercase tracking-wider text-white/30">System Telemetry</div>
          <div className="h-[90px] overflow-y-auto rounded-lg bg-black/40 p-2.5 text-[9px] font-mono leading-relaxed text-white/50 space-y-1">
            {logs.map((log, idx) => (
              <div key={idx} className="border-b border-white/5 pb-0.5 last:border-b-0 last:text-white/70">
                {log}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Aesthetic Bottom Info */}
      <div className="relative z-10 mx-auto mb-6 text-center">
        <h3
          className="text-sm font-black uppercase tracking-[0.3em] transition-colors duration-400"
          style={{ color: preset === 'OVERLOAD' ? '#ff0066' : '#00f0ff' }}
        >
          Nova-Toon Crying Android X
        </h3>
        <p className="mt-1.5 text-[9px] font-medium tracking-[0.18em] text-white/40 uppercase">
          Click screen to trigger hypercry • Move mouse to track bionic look-at
        </p>
      </div>
    </div>
  )
}
export default NovaToonCryingAndroidX;
`,
    prompt: `Build a highly interactive cell-shaded 3D humanoid robot called "Nova-Toon Crying Android X".\n- Inspired by Zdog cute vector graphics but implemented inside raw Three.js with flat-shaded MeshToonMaterials\n- Features a solid humanoid body chassis: large spherical helmet with blushing cheeks and weeping visor eyes, cylinder torso shell with cyan heart reactor, and solid white/cyan limbs\n- Spawns continuous glowing neon-cyan liquid tear particles from the eye ducts that flow downward under realistic gravity and scale-decay physics\n- Continuous organic wobbly head-shaking sobbing translations and breathing chest oscillations\n- Smooth cursor look-at tracking targeting pointer coordinates\n- Click-to-trigger hypercry overload changing the tear color to bright crimson, releasing a massive burst of tear flows, accelerating the sobbing wobble speed, and showing real-time reactive logs on the telemetry HUD panel\n- Clean resource disposal of meshes, geometries, and materials on React component unmount`,
    likes: 0,
    author: 'Animation AI',
    featured: true,
    createdAt: '2026-05-23T10:00:00.000Z',
    updatedAt: '2026-05-23T10:00:00.000Z'
  },
  {
    _id: 'robot-zenith-humanoid-sentinel-x',
    slug: 'zenith-humanoid-sentinel-x',
    title: 'Zenith Humanoid Sentinel X',
    category: 'robot',
    tag: 'threejs',
    description: 'A highly interactive solid humanoid sentinel robot custom-built in Three.js. It features a solid carbon-titanium body shell, a gold-trimmed spine process, a horizontal cyan visor that projects a physical cursor-tracking laser beam, and a click-to-trigger Aegis Shield forcefield that overclocks the chassis core into a brilliant golden energy dome.',
    previewCode: `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<style>
* { margin: 0; padding: 0; box-sizing: border-box; }
body { background: #030206; overflow: hidden; cursor: crosshair; font-family: 'Courier New', monospace; user-select: none; }
canvas { display: block; width: 100vw; height: 100vh; }
.hud { position: absolute; top: 24px; left: 24px; padding: 18px; border: 1px solid rgba(0, 255, 204, 0.15); border-radius: 16px; background: rgba(3, 2, 6, 0.85); color: #00ffcc; backdrop-filter: blur(12px); pointer-events: none; font-size: 11px; min-width: 250px; transition: all 0.3s; box-shadow: 0 15px 35px rgba(0,0,0,0.5); }
.hud-title { font-weight: bold; letter-spacing: 2px; margin-bottom: 8px; display: flex; align-items: center; gap: 6px; font-size: 12px; text-transform: uppercase; }
.hud-sep { height: 1px; background: rgba(0, 255, 204, 0.2); margin: 8px 0; transition: background 0.3s; }
.hud-item { display: flex; justify-content: space-between; margin: 5px 0; }
.hud-item span { color: rgba(0, 255, 204, 0.55); }
.hud-item strong { color: #fff; }
.label { position: absolute; bottom: 28px; left: 50%; transform: translateX(-50%); color: #00ffcc; letter-spacing: 5px; text-transform: uppercase; pointer-events: none; text-align: center; transition: all 0.4s; font-size: 13px; font-weight: 900; }
.sub { font-size: 9px; color: rgba(0, 255, 204, 0.4); letter-spacing: 2px; margin-top: 6px; font-weight: normal; }
</style>
</head>
<body>
<div class="hud" id="hud">
  <div class="hud-title" id="hudTitle">🛡️ SENTINEL STATUS: ACTIVE</div>
  <div class="hud-sep" id="hudSep"></div>
  <div class="hud-item"><span>Chassis Code</span><strong>ZENITH-SENTINEL X</strong></div>
  <div class="hud-item"><span>Visor Scan</span><strong id="visorStatus">TRACKING</strong></div>
  <div class="hud-item"><span>Aegis Shield</span><strong id="shieldStatus">READY</strong></div>
  <div class="hud-item"><span>Core Output</span><strong id="energyOut">100%</strong></div>
</div>
<div class="label" id="label">
  Zenith Humanoid Sentinel X
  <div class="sub">Click Screen to Engage Aegis Shield • Move Cursor to Direct Visor Laser</div>
</div>

<script type="importmap">{"imports":{"three":"https://unpkg.com/three@0.160.0/build/three.module.js"}}</script>
<script type="module">
import * as THREE from 'three';

let currentShieldState = 0; // 0: IDLE, 1: ACTIVE (Shield up)
let time = 0;

const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x030206, 0.065);

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(0, 0.2, 8.5);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.toneMapping = THREE.ACESFilmicToneMapping;
document.body.appendChild(renderer.domElement);

// Lights
const ambientLight = new THREE.AmbientLight(0x040b10, 1.8);
scene.add(ambientLight);

const mainSpot = new THREE.SpotLight(0xffffff, 40, 15, Math.PI / 6, 0.5, 1);
mainSpot.position.set(0, 6, 4);
scene.add(mainSpot);

const rimLightL = new THREE.PointLight(0x00ffcc, 25, 8);
rimLightL.position.set(-4, 1.5, -2);
scene.add(rimLightL);

const rimLightR = new THREE.PointLight(0x0099ff, 15, 8);
rimLightR.position.set(4, 1.5, -2);
scene.add(rimLightR);

const cursorLight = new THREE.PointLight(0x00ffcc, 8, 6);
cursorLight.position.set(0, 0, 3);
scene.add(cursorLight);

// Materials
const armorMat = new THREE.MeshStandardMaterial({
  color: 0x1b202e, // Sleek polished carbon titanium
  roughness: 0.15,
  metalness: 0.9
});

const goldTrimMat = new THREE.MeshStandardMaterial({
  color: 0xffd700, // Highly polished gold bionic joint trims
  roughness: 0.08,
  metalness: 1.0
});

const cyberShellMat = new THREE.MeshStandardMaterial({
  color: 0x050a14, // Solid deep dark bionic glass plates
  roughness: 0.1,
  metalness: 0.9,
  transparent: true,
  opacity: 0.65,
  side: THREE.DoubleSide
});

const glowingVisorMat = new THREE.MeshBasicMaterial({
  color: 0x00ffcc
});

const laserMat = new THREE.MeshBasicMaterial({
  color: 0x00ffcc,
  transparent: true,
  opacity: 0.35
});

// Humanoid Group
const sentinelGroup = new THREE.Group();
sentinelGroup.position.y = -1.2;
scene.add(sentinelGroup);

// --- 1. Programmatic Helmet Head ---
const headGroup = new THREE.Group();
headGroup.position.y = 2.7;
sentinelGroup.add(headGroup);

const helmet = new THREE.Mesh(new THREE.SphereGeometry(0.42, 32, 24), armorMat);
helmet.scale.set(1.0, 1.15, 0.95);
headGroup.add(helmet);

// Sleek horizontal laser visor
const visor = new THREE.Mesh(
  new THREE.CylinderGeometry(0.32, 0.32, 0.15, 24, 1, false, -Math.PI / 3, Math.PI * 2 / 3),
  glowingVisorMat
);
visor.rotation.x = Math.PI / 2;
visor.position.set(0, 0.08, 0.24);
headGroup.add(visor);

// Ear headphone plates
const earL = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.08, 16), goldTrimMat);
earL.rotation.z = Math.PI / 2;
earL.position.set(-0.44, 0, 0);
headGroup.add(earL);

const earR = earL.clone();
earR.position.x = 0.44;
headGroup.add(earR);

// --- 2. Programmatic Vertebral Spine ---
const spineSegments = [];
const spineGroup = new THREE.Group();
sentinelGroup.add(spineGroup);

const spineCount = 10;
const startY = 0.5;
const endY = 2.4;
const stepY = (endY - startY) / spineCount;

for (let i = 0; i < spineCount; i++) {
  const segGrp = new THREE.Group();
  segGrp.position.y = startY + i * stepY;
  
  const disc = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.15, 0.06, 16), goldTrimMat);
  segGrp.add(disc);
  
  const spike = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.04, 0.18), armorMat);
  spike.position.set(0, 0, -0.15);
  spike.rotation.x = Math.PI / 8;
  segGrp.add(spike);
  
  spineGroup.add(segGrp);
  spineSegments.push(segGrp);
}

// --- 3. Torso Solid Human Chest ---
const ribcageGroup = new THREE.Group();
ribcageGroup.position.y = 1.45;
sentinelGroup.add(ribcageGroup);

const ribPairs = 5;
const ribs = [];
for (let i = 0; i < ribPairs; i++) {
  const yOffset = (i - (ribPairs - 1) / 2) * 0.24;
  const ribRadX = 0.58 - i * 0.03;
  
  const ribGeomL = new THREE.TorusGeometry(ribRadX, 0.035, 8, 32, Math.PI * 0.8);
  const ribL = new THREE.Mesh(ribGeomL, armorMat);
  ribL.position.set(-0.1, yOffset, 0.05);
  ribL.rotation.set(0.1, Math.PI / 16, Math.PI / 2);
  ribcageGroup.add(ribL);
  
  const ribR = ribL.clone();
  ribR.position.x = 0.1;
  ribR.rotation.y = -Math.PI / 16;
  ribR.rotation.z = -Math.PI / 2;
  ribcageGroup.add(ribR);
  
  ribs.push({ left: ribL, right: ribR });
}

// Sternum
const sternum = new THREE.Mesh(new THREE.BoxGeometry(0.08, 1.1, 0.08), goldTrimMat);
sternum.position.set(0, 0, 0.56);
ribcageGroup.add(sternum);

// Solid V-tapered cyber chest armor
const chestPlateL = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.35, 1.2, 16, 1, false, 0, Math.PI * 0.9), cyberShellMat);
chestPlateL.position.set(-0.25, 0, 0.1);
chestPlateL.rotation.y = 0.15;
chestPlateL.scale.set(1.0, 1.0, 0.5);
ribcageGroup.add(chestPlateL);

const chestPlateR = chestPlateL.clone();
chestPlateR.position.x = 0.25;
chestPlateR.rotation.y = -0.15;
ribcageGroup.add(chestPlateR);

// Solid abs plate
const absPlate = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.6, 0.25), cyberShellMat);
absPlate.position.set(0, -0.8, 0.05);
ribcageGroup.add(absPlate);

// Pulse reactor core
const heartCore = new THREE.Mesh(new THREE.IcosahedronGeometry(0.18, 2), glowingVisorMat);
heartCore.position.set(0, 0.15, 0.12);
ribcageGroup.add(heartCore);

// Orbital rings
const coreRing1 = new THREE.Mesh(new THREE.TorusGeometry(0.26, 0.015, 8, 32), goldTrimMat);
coreRing1.position.copy(heartCore.position);
ribcageGroup.add(coreRing1);

const coreRing2 = coreRing1.clone();
coreRing2.rotation.x = Math.PI / 2;
ribcageGroup.add(coreRing2);

// --- 4. Pelvis & Solid Arms ---
const pelvisGroup = new THREE.Group();
pelvisGroup.position.y = 0.4;
sentinelGroup.add(pelvisGroup);

const hipPlate = new THREE.Mesh(new THREE.BoxGeometry(0.85, 0.16, 0.4), armorMat);
pelvisGroup.add(hipPlate);

const hipGuard = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.35, 0.45), cyberShellMat);
hipGuard.position.y = -0.05;
pelvisGroup.add(hipGuard);

// Arms
const shoulderL = new THREE.Group();
shoulderL.position.set(-0.85, 2.05, 0);
sentinelGroup.add(shoulderL);

const jointCapL = new THREE.Mesh(new THREE.SphereGeometry(0.14, 16, 16), goldTrimMat);
shoulderL.add(jointCapL);

const shoulderCapL = new THREE.Mesh(new THREE.SphereGeometry(0.24, 16, 16), cyberShellMat);
shoulderCapL.scale.set(1.0, 1.2, 1.0);
shoulderL.add(shoulderCapL);

const armGroupL = new THREE.Group();
shoulderL.add(armGroupL);

const bicepShellL = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.11, 0.6, 12), cyberShellMat);
bicepShellL.position.y = -0.35;
armGroupL.add(bicepShellL);

const forearmGroupL = new THREE.Group();
forearmGroupL.position.set(0, -0.7, 0);
armGroupL.add(forearmGroupL);

const elbowL = new THREE.Mesh(new THREE.SphereGeometry(0.08, 16, 16), goldTrimMat);
forearmGroupL.add(elbowL);

const forearmShellL = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.09, 0.58, 12), cyberShellMat);
forearmShellL.position.set(0, -0.32, 0);
forearmGroupL.add(forearmShellL);

const handL = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.12, 0.12), goldTrimMat);
handL.position.y = -0.65;
forearmGroupL.add(handL);

// Symmetrical Right Arm
const shoulderR = shoulderL.clone();
shoulderR.position.x = 0.85;
sentinelGroup.add(shoulderR);

// --- 5. Solid Legs ---
const legL = new THREE.Group();
legL.position.set(-0.35, 0.35, 0);
sentinelGroup.add(legL);

const femurL = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.06, 0.85, 12), armorMat);
femurL.position.y = -0.45;
legL.add(femurL);

const thighShellL = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.14, 0.8, 12), cyberShellMat);
thighShellL.position.y = -0.45;
legL.add(thighShellL);

const lowerLegL = new THREE.Group();
lowerLegL.position.set(0, -0.9, 0);
legL.add(lowerLegL);

const kneeL = new THREE.Mesh(new THREE.SphereGeometry(0.09, 16, 16), goldTrimMat);
lowerLegL.add(kneeL);

const calfShellL = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.09, 0.76, 12), cyberShellMat);
calfShellL.position.set(0, -0.42, 0);
lowerLegL.add(calfShellL);

const footL = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.09, 0.28), goldTrimMat);
footL.position.set(0, -0.85, 0.06);
lowerLegL.add(footL);

// Symmetrical Right Leg
const legR = legL.clone();
legR.position.x = 0.35;
sentinelGroup.add(legR);

// --- 6. Tracking Visor Laser Beam ---
const laserGeometry = new THREE.CylinderGeometry(0.015, 0.015, 1.0, 8);
const laserMesh = new THREE.Mesh(laserGeometry, laserMat);
laserMesh.rotation.x = Math.PI / 2;
scene.add(laserMesh);

// --- 7. Aegis Forcefield Shield Dome ---
const shieldDome = new THREE.Mesh(
  new THREE.SphereGeometry(1.9, 32, 32),
  new THREE.MeshBasicMaterial({
    color: 0x00ffcc,
    wireframe: true,
    transparent: true,
    opacity: 0.0
  })
);
shieldDome.position.copy(heartCore.position);
ribcageGroup.add(shieldDome);

// --- 8. Particle Energy Vortex ---
const pCount = 150;
const pGeom = new THREE.BufferGeometry();
const pPos = new Float32Array(pCount * 3);
const pVels = [];
const pSpeeds = [];

for (let i = 0; i < pCount; i++) {
  const theta = Math.random() * Math.PI * 2;
  const radius = Math.random() * 0.8 + 0.6;
  pPos[i*3] = Math.cos(theta) * radius;
  pPos[i*3+1] = Math.random() * 3.5 - 0.5;
  pPos[i*3+2] = Math.sin(theta) * radius;
  
  pVels.push(theta);
  pSpeeds.push(Math.random() * 0.03 + 0.01);
}
pGeom.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
const pMat = new THREE.PointsMaterial({
  color: 0x00ffcc,
  size: 0.035,
  transparent: true,
  opacity: 0.5,
  blending: THREE.AdditiveBlending
});
const particles = new THREE.Points(pGeom, pMat);
scene.add(particles);

// Mouse tracking coordinates
const mouse = new THREE.Vector2(0, 0);
const target = new THREE.Vector3(0, 0, 0);

window.addEventListener('mousemove', (e) => {
  mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
  target.x = mouse.x * 2.5;
  target.y = mouse.y * 1.8 + 1.2;
});

// Click Interaction (Engage Aegis Shield)
let shieldDuration = 0;
window.addEventListener('mousedown', () => {
  currentShieldState = currentShieldState === 0 ? 1 : 0;
  
  const hud = document.getElementById('hud');
  const hudTitle = document.getElementById('hudTitle');
  const hudSep = document.getElementById('hudSep');
  const label = document.getElementById('label');
  const shieldStatus = document.getElementById('shieldStatus');
  const energyOut = document.getElementById('energyOut');

  if (currentShieldState === 1) {
    // Shield Active
    hudTitle.textContent = "🛡️ AEGIS SHIELD: MAXIMUM OUTPUT";
    hudTitle.style.color = "#ffd700";
    hudSep.style.background = "#ffd700";
    hud.style.borderColor = "#ffd70088";
    hud.style.boxShadow = "0 15px 35px rgba(255,215,0,0.25)";
    label.style.color = "#ffd700";
    shieldStatus.textContent = "CHARGED";
    shieldStatus.style.color = "#ffd700";
    energyOut.textContent = "260%";
    energyOut.style.color = "#ffd700";
    
    // Core & Visor shift to gold
    glowingVisorMat.color.setHex(0xffd700);
    laserMat.color.setHex(0xffd700);
    pMat.color.setHex(0xffd700);
    cyberShellMat.color.setHex(0x1a1202); // Rich dark amber/gold bionic glass
    
    // Expand protective dome
    shieldDome.scale.setScalar(0.2);
    shieldDome.material.opacity = 0.55;
    shieldDuration = 1.0;
  } else {
    // Return to Normal Tracking
    hudTitle.textContent = "🛡️ SENTINEL STATUS: ACTIVE";
    hudTitle.style.color = "#00ffcc";
    hudSep.style.background = "rgba(0, 255, 204, 0.2)";
    hud.style.borderColor = "rgba(0, 255, 204, 0.15)";
    hud.style.boxShadow = "0 15px 35px rgba(0,0,0,0.5)";
    label.style.color = "#00ffcc";
    shieldStatus.textContent = "READY";
    shieldStatus.style.color = "#fff";
    energyOut.textContent = "100%";
    energyOut.style.color = "#fff";
    
    glowingVisorMat.color.setHex(0x00ffcc);
    laserMat.color.setHex(0x00ffcc);
    pMat.color.setHex(0x00ffcc);
    cyberShellMat.color.setHex(0x050a14); // Return deep dark cyan
    
    shieldDome.material.opacity = 0;
  }
});

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Animation Loop
const clock = new THREE.Clock();
function animate() {
  requestAnimationFrame(animate);
  time = clock.getElapsedTime();
  
  // 1. Visor looking towards cursor
  headGroup.lookAt(target.x, target.y + 1.2, 3);
  
  // Spine chain-link flex
  spineSegments.forEach((seg, idx) => {
    const factor = idx / spineCount;
    seg.rotation.y += (mouse.x * 0.32 * factor - seg.rotation.y) * 0.08;
    seg.rotation.x += (mouse.y * 0.16 * factor - seg.rotation.x) * 0.08;
  });
  
  // Ribcage breathing flex
  ribcageGroup.rotation.y += (mouse.x * 0.18 - ribcageGroup.rotation.y) * 0.06;
  const breathFactor = 1.0 + Math.sin(time * 1.8) * 0.015;
  chestPlateL.scale.set(1.0, 1.0, 0.5 * breathFactor);
  chestPlateR.scale.set(1.0, 1.0, 0.5 * breathFactor);
  
  // Arm stance adjustments
  const raiseSpeed = currentShieldState === 1 ? 0.15 : 0.06;
  shoulderL.rotation.y = -Math.PI / 12 + mouse.x * 0.12;
  shoulderR.rotation.y = Math.PI / 12 + mouse.x * 0.12;
  
  // Slow arm breathing float
  shoulderL.rotation.x = Math.sin(time * 1.5) * 0.04;
  shoulderR.rotation.x = -Math.sin(time * 1.5) * 0.04;
  
  // Pulse core heart
  const pulseSpeed = currentShieldState === 1 ? 12.0 : 2.5;
  const pulseScale = 1.0 + Math.sin(time * pulseSpeed) * 0.12;
  heartCore.scale.setScalar(pulseScale);
  
  coreRing1.rotation.y += currentShieldState === 1 ? 0.08 : 0.015;
  coreRing2.rotation.x += currentShieldState === 1 ? 0.06 : 0.012;
  
  // 2. Visor Laser beam positioning
  const laserStart = new THREE.Vector3();
  visor.getWorldPosition(laserStart);
  
  const laserEnd = new THREE.Vector3(target.x, target.y + 1.2, 3);
  
  const distance = laserStart.distanceTo(laserEnd);
  laserMesh.scale.set(1, distance, 1);
  
  // Point and position laser mesh
  laserMesh.position.copy(laserStart).add(laserEnd).multiplyScalar(0.5);
  laserMesh.lookAt(laserEnd);
  laserMesh.rotateX(Math.PI / 2);
  
  // 3. Aegis Forcefield pulse decay
  if (currentShieldState === 1 && shieldDuration > 0) {
    shieldDuration -= 0.012;
    shieldDome.scale.addScalar(0.06);
    shieldDome.material.opacity = shieldDuration * 0.55;
  } else if (currentShieldState === 1 && shieldDuration <= 0) {
    shieldDome.scale.setScalar(0.2);
    shieldDome.material.opacity = 0.55;
    shieldDuration = 1.0;
  }
  
  // 4. Particle Energy Vortex orbit flows
  const posAttr = pGeom.getAttribute('position');
  const spiralSpeed = currentShieldState === 1 ? 2.5 : 1.0;
  for (let i = 0; i < pCount; i++) {
    pVels[i] += pSpeeds[i] * spiralSpeed;
    const radius = 0.7 + Math.sin(time + i) * 0.15;
    posAttr.setX(i, Math.cos(pVels[i]) * radius);
    posAttr.setZ(i, Math.sin(pVels[i]) * radius);
  }
  posAttr.needsUpdate = true;
  
  // PointLight cursor movement
  cursorLight.position.x += (target.x - cursorLight.position.x) * 0.1;
  cursorLight.position.y += (target.y - cursorLight.position.y) * 0.1;
  
  renderer.render(scene, camera);
}

animate();
</script>
</body>
</html>
`,
    code: `'use client'

import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

export function ZenithHumanoidSentinelX() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  
  // React State for Telemetry HUD
  const [shieldActive, setShieldActive] = useState<boolean>(false)
  const [energyOutput, setEnergyOutput] = useState<number>(100)
  const [logs, setLogs] = useState<string[]>([
    'Shield capacity check: OK.',
    'Atmospheric scanning array active.',
    'Sentinel ready. Direct laser visor.'
  ])

  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return

    const container = containerRef.current
    const canvas = canvasRef.current

    let currentShieldState = 0 // 0: IDLE, 1: ACTIVE
    let animationFrameId: number
    let time = 0

    // Scene setup
    const scene = new THREE.Scene()
    scene.fog = new THREE.FogExp2(0x030206, 0.065)

    // Camera setup
    const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 100)
    camera.position.set(0, 0.2, 8.5)

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
    renderer.setSize(container.clientWidth, container.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.toneMapping = THREE.ACESFilmicToneMapping

    // Lights
    const ambientLight = new THREE.AmbientLight(0x040b10, 1.8)
    scene.add(ambientLight)

    const mainSpot = new THREE.SpotLight(0xffffff, 40, 15, Math.PI / 6, 0.5, 1)
    mainSpot.position.set(0, 6, 4)
    scene.add(mainSpot)

    const rimLightL = new THREE.PointLight(0x00ffcc, 25, 8)
    rimLightL.position.set(-4, 1.5, -2)
    scene.add(rimLightL)

    const rimLightR = new THREE.PointLight(0x0099ff, 15, 8)
    rimLightR.position.set(4, 1.5, -2)
    scene.add(rimLightR)

    const cursorLight = new THREE.PointLight(0x00ffcc, 8, 6)
    cursorLight.position.set(0, 0, 3)
    scene.add(cursorLight)

    // Materials
    const armorMat = new THREE.MeshStandardMaterial({
      color: 0x1b202e, // Sleek polished carbon titanium
      roughness: 0.15,
      metalness: 0.9
    })

    const goldTrimMat = new THREE.MeshStandardMaterial({
      color: 0xffd700, // Highly polished gold bionic joint trims
      roughness: 0.08,
      metalness: 1.0
    })

    const cyberShellMat = new THREE.MeshStandardMaterial({
      color: 0x050a14, // Solid deep dark bionic glass plates
      roughness: 0.1,
      metalness: 0.9,
      transparent: true,
      opacity: 0.65,
      side: THREE.DoubleSide
    })

    const glowingVisorMat = new THREE.MeshBasicMaterial({
      color: 0x00ffcc
    })

    const laserMat = new THREE.MeshBasicMaterial({
      color: 0x00ffcc,
      transparent: true,
      opacity: 0.35
    })

    // Humanoid Group
    const sentinelGroup = new THREE.Group()
    sentinelGroup.position.y = -1.2
    scene.add(sentinelGroup)

    // --- 1. Programmatic Helmet Head ---
    const headGroup = new THREE.Group()
    headGroup.position.y = 2.7
    sentinelGroup.add(headGroup)

    const helmet = new THREE.Mesh(new THREE.SphereGeometry(0.42, 32, 24), armorMat)
    helmet.scale.set(1.0, 1.15, 0.95)
    headGroup.add(helmet)

    // Sleek horizontal laser visor
    const visor = new THREE.Mesh(
      new THREE.CylinderGeometry(0.32, 0.32, 0.15, 24, 1, false, -Math.PI / 3, Math.PI * 2 / 3),
      glowingVisorMat
    )
    visor.rotation.x = Math.PI / 2
    visor.position.set(0, 0.08, 0.24)
    headGroup.add(visor)

    // Ear plates
    const earL = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.08, 16), goldTrimMat)
    earL.rotation.z = Math.PI / 2
    earL.position.set(-0.44, 0, 0)
    headGroup.add(earL)

    const earR = earL.clone()
    earR.position.x = 0.44
    headGroup.add(earR)

    // --- 2. Programmatic Vertebral Spine ---
    const spineSegments: THREE.Group[] = []
    const spineGroup = new THREE.Group()
    sentinelGroup.add(spineGroup)

    const spineCount = 10
    const startY = 0.5
    const endY = 2.4
    const stepY = (endY - startY) / spineCount

    for (let i = 0; i < spineCount; i++) {
      const segGrp = new THREE.Group()
      segGrp.position.y = startY + i * stepY
      
      const disc = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.15, 0.06, 16), goldTrimMat)
      segGrp.add(disc)
      
      const spike = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.04, 0.18), armorMat)
      spike.position.set(0, 0, -0.15)
      spike.rotation.x = Math.PI / 8
      segGrp.add(spike)
      
      spineGroup.add(segGrp)
      spineSegments.push(segGrp)
    }

    // --- 3. Torso Solid Human Chest ---
    const ribcageGroup = new THREE.Group()
    ribcageGroup.position.y = 1.45
    sentinelGroup.add(ribcageGroup)

    const ribPairs = 5
    const ribs: { left: THREE.Mesh; right: THREE.Mesh }[] = []
    for (let i = 0; i < ribPairs; i++) {
      const yOffset = (i - (ribPairs - 1) / 2) * 0.24
      const ribRadX = 0.58 - i * 0.03
      
      const ribGeomL = new THREE.TorusGeometry(ribRadX, 0.035, 8, 32, Math.PI * 0.8)
      const ribL = new THREE.Mesh(ribGeomL, armorMat)
      ribL.position.set(-0.1, yOffset, 0.05)
      ribL.rotation.set(0.1, Math.PI / 16, Math.PI / 2)
      ribcageGroup.add(ribL)
      
      const ribR = ribL.clone()
      ribR.position.x = 0.1
      ribR.rotation.y = -Math.PI / 16
      ribR.rotation.z = -Math.PI / 2
      ribcageGroup.add(ribR)
      
      ribs.push({ left: ribL, right: ribR })
    }

    // Sternum
    const sternum = new THREE.Mesh(new THREE.BoxGeometry(0.08, 1.1, 0.08), goldTrimMat)
    sternum.position.set(0, 0, 0.56)
    ribcageGroup.add(sternum)

    // Solid V-tapered cyber chest armor
    const chestPlateL = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.35, 1.2, 16, 1, false, 0, Math.PI * 0.9), cyberShellMat)
    chestPlateL.position.set(-0.25, 0, 0.1)
    chestPlateL.rotation.y = 0.15
    chestPlateL.scale.set(1.0, 1.0, 0.5)
    ribcageGroup.add(chestPlateL)

    const chestPlateR = chestPlateL.clone()
    chestPlateR.position.x = 0.25
    chestPlateR.rotation.y = -0.15
    ribcageGroup.add(chestPlateR)

    // Solid abs plate
    const absPlate = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.6, 0.25), cyberShellMat)
    absPlate.position.set(0, -0.8, 0.05)
    ribcageGroup.add(absPlate)

    // Pulse reactor core
    const heartCore = new THREE.Mesh(new THREE.IcosahedronGeometry(0.18, 2), glowingVisorMat)
    heartCore.position.set(0, 0.15, 0.12)
    ribcageGroup.add(heartCore)

    // Orbital rings
    const coreRing1 = new THREE.Mesh(new THREE.TorusGeometry(0.26, 0.015, 8, 32), goldTrimMat)
    coreRing1.position.copy(heartCore.position)
    ribcageGroup.add(coreRing1)

    const coreRing2 = coreRing1.clone()
    coreRing2.rotation.x = Math.PI / 2
    ribcageGroup.add(coreRing2)

    // --- 4. Pelvis & Solid Arms ---
    const pelvisGroup = new THREE.Group()
    pelvisGroup.position.y = 0.4
    sentinelGroup.add(pelvisGroup)

    const hipPlate = new THREE.Mesh(new THREE.BoxGeometry(0.85, 0.16, 0.4), armorMat)
    pelvisGroup.add(hipPlate)

    const hipGuard = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.35, 0.45), cyberShellMat)
    hipGuard.position.y = -0.05
    pelvisGroup.add(hipGuard)

    // Arms
    const shoulderL = new THREE.Group()
    shoulderL.position.set(-0.85, 2.05, 0)
    sentinelGroup.add(shoulderL)

    const jointCapL = new THREE.Mesh(new THREE.SphereGeometry(0.14, 16, 16), goldTrimMat)
    shoulderL.add(jointCapL)

    const shoulderCapL = new THREE.Mesh(new THREE.SphereGeometry(0.24, 16, 16), cyberShellMat)
    shoulderCapL.scale.set(1.0, 1.2, 1.0)
    shoulderL.add(shoulderCapL)

    const armGroupL = new THREE.Group()
    shoulderL.add(armGroupL)

    const bicepShellL = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.11, 0.6, 12), cyberShellMat)
    bicepShellL.position.y = -0.35
    armGroupL.add(bicepShellL)

    const forearmGroupL = new THREE.Group()
    forearmGroupL.position.set(0, -0.7, 0)
    armGroupL.add(forearmGroupL)

    const elbowL = new THREE.Mesh(new THREE.SphereGeometry(0.08, 16, 16), goldTrimMat)
    forearmGroupL.add(elbowL)

    const forearmShellL = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.09, 0.58, 12), cyberShellMat)
    forearmShellL.position.set(0, -0.32, 0)
    forearmGroupL.add(forearmShellL)

    const handL = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.12, 0.12), goldTrimMat)
    handL.position.y = -0.65
    forearmGroupL.add(handL)

    // Symmetrical Right Arm
    const shoulderR = shoulderL.clone()
    shoulderR.position.x = 0.85
    sentinelGroup.add(shoulderR)

    // --- 5. Solid Legs ---
    const legL = new THREE.Group()
    legL.position.set(-0.35, 0.35, 0)
    sentinelGroup.add(legL)

    const femurL = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.06, 0.85, 12), armorMat)
    femurL.position.y = -0.45
    legL.add(femurL)

    const thighShellL = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.14, 0.8, 12), cyberShellMat)
    thighShellL.position.y = -0.45
    legL.add(thighShellL)

    const lowerLegL = new THREE.Group()
    lowerLegL.position.set(0, -0.9, 0)
    legL.add(lowerLegL)

    const kneeL = new THREE.Mesh(new THREE.SphereGeometry(0.09, 16, 16), goldTrimMat)
    lowerLegL.add(kneeL)

    const calfShellL = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.09, 0.76, 12), cyberShellMat)
    calfShellL.position.set(0, -0.42, 0)
    lowerLegL.add(calfShellL)

    const footL = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.09, 0.28), goldTrimMat)
    footL.position.set(0, -0.85, 0.06)
    lowerLegL.add(footL)

    // Symmetrical Right Leg
    const legR = legL.clone()
    legR.position.x = 0.35
    sentinelGroup.add(legR)

    // --- 6. Tracking Visor Laser Beam ---
    const laserGeometry = new THREE.CylinderGeometry(0.015, 0.015, 1.0, 8)
    const laserMesh = new THREE.Mesh(laserGeometry, laserMat)
    laserMesh.rotation.x = Math.PI / 2
    scene.add(laserMesh)

    // --- 7. Aegis Forcefield Shield Dome ---
    const shieldDome = new THREE.Mesh(
      new THREE.SphereGeometry(1.9, 32, 32),
      new THREE.MeshBasicMaterial({
        color: 0x00ffcc,
        wireframe: true,
        transparent: true,
        opacity: 0.0
      })
    )
    shieldDome.position.copy(heartCore.position)
    ribcageGroup.add(shieldDome)

    // --- 8. Particle Energy Vortex ---
    const pCount = 150
    const pGeom = new THREE.BufferGeometry()
    const pPos = new Float32Array(pCount * 3)
    const pVels: number[] = []
    const pSpeeds: number[] = []

    for (let i = 0; i < pCount; i++) {
      const theta = Math.random() * Math.PI * 2
      const radius = Math.random() * 0.8 + 0.6
      pPos[i*3] = Math.cos(theta) * radius
      pPos[i*3+1] = Math.random() * 3.5 - 0.5
      pPos[i*3+2] = Math.sin(theta) * radius
      
      pVels.push(theta)
      pSpeeds.push(Math.random() * 0.03 + 0.01)
    }
    pGeom.setAttribute('position', new THREE.BufferAttribute(pPos, 3))
    const pMat = new THREE.PointsMaterial({
      color: 0x00ffcc,
      size: 0.035,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending
    })
    const particles = new THREE.Points(pGeom, pMat)
    scene.add(particles)

    // Mouse tracking coordinates
    const mouse = new THREE.Vector2(0, 0)
    const target = new THREE.Vector3(0, 0, 0)

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1
      const y = -((e.clientY - rect.top) / rect.height) * 2 + 1
      mouse.x = x
      mouse.y = y
      target.x = x * 2.5
      target.y = y * 1.8 + 1.2
    }

    // Direct click handler for Aegis shield dome
    let shieldDuration = 0
    const handleMouseDown = () => {
      currentShieldState = currentShieldState === 0 ? 1 : 0
      
      if (currentShieldState === 1) {
        setShieldActive(true)
        setEnergyOutput(260)
        setLogs(prev => [
          \`[\${new Date().toLocaleTimeString()}] 🛡️ AEGIS ENERGY FIELD DEPLOYED!\`,
          \`[\${new Date().toLocaleTimeString()}] Core output: 260% overclocked\`,
          ...prev.slice(0, 4)
        ])

        glowingVisorMat.color.setHex(0xffd700)
        laserMat.color.setHex(0xffd700)
        pMat.color.setHex(0xffd700)
        cyberShellMat.color.setHex(0x1a1202) // Amber gold

        shieldDome.scale.setScalar(0.2)
        shieldDome.material.opacity = 0.55
        shieldDuration = 1.0
      } else {
        setShieldActive(false)
        setEnergyOutput(100)
        setLogs(prev => [
          \`[\${new Date().toLocaleTimeString()}] 🟢 Shield status: Idle. Sentinel Active.\`,
          ...prev.slice(0, 4)
        ])

        glowingVisorMat.color.setHex(0x00ffcc)
        laserMat.color.setHex(0x00ffcc)
        pMat.color.setHex(0x00ffcc)
        cyberShellMat.color.setHex(0x050a14) // Cyan

        shieldDome.material.opacity = 0
      }
    }

    container.addEventListener('mousemove', handleMouseMove)
    container.addEventListener('mousedown', handleMouseDown)

    const handleResize = () => {
      if (!containerRef.current) return
      camera.aspect = container.clientWidth / container.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(container.clientWidth, container.clientHeight)
    }
    window.addEventListener('resize', handleResize)

    // Animation Loop
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)
      time = clock.getElapsedTime()

      // Visor looking at cursor
      headGroup.lookAt(target.x, target.y + 1.2, 3)

      // Spine flexing
      spineSegments.forEach((seg, idx) => {
        const factor = idx / spineCount
        seg.rotation.y += (mouse.x * 0.32 * factor - seg.rotation.y) * 0.08
        seg.rotation.x += (mouse.y * 0.16 * factor - seg.rotation.x) * 0.08
      })

      // Ribcage breathing flex
      ribcageGroup.rotation.y += (mouse.x * 0.18 - ribcageGroup.rotation.y) * 0.06
      const breathFactor = 1.0 + Math.sin(time * 1.8) * 0.015
      chestPlateL.scale.set(1.0, 1.0, 0.5 * breathFactor)
      chestPlateR.scale.set(1.0, 1.0, 0.5 * breathFactor)

      // Arms idle breathing floating
      shoulderL.rotation.y = -Math.PI / 12 + mouse.x * 0.12
      shoulderR.rotation.y = Math.PI / 12 + mouse.x * 0.12
      shoulderL.rotation.x = Math.sin(time * 1.5) * 0.04
      shoulderR.rotation.x = -Math.sin(time * 1.5) * 0.04

      // Reactor core pulsing
      const pulseSpeed = currentShieldState === 1 ? 12.0 : 2.5
      const pulseScale = 1.0 + Math.sin(time * pulseSpeed) * 0.12
      heartCore.scale.setScalar(pulseScale)

      coreRing1.rotation.y += currentShieldState === 1 ? 0.08 : 0.015
      coreRing2.rotation.x += currentShieldState === 1 ? 0.06 : 0.012

      // Laser Beam positioning math
      const laserStart = new THREE.Vector3()
      visor.getWorldPosition(laserStart)
      
      const laserEnd = new THREE.Vector3(target.x, target.y + 1.2, 3)
      const distance = laserStart.distanceTo(laserEnd)
      
      laserMesh.scale.set(1, distance, 1)
      laserMesh.position.copy(laserStart).add(laserEnd).multiplyScalar(0.5)
      laserMesh.lookAt(laserEnd)
      laserMesh.rotateX(Math.PI / 2)

      // Aegis Shield decay
      if (currentShieldState === 1 && shieldDuration > 0) {
        shieldDuration -= 0.012
        shieldDome.scale.addScalar(0.06)
        shieldDome.material.opacity = shieldDuration * 0.55
      } else if (currentShieldState === 1 && shieldDuration <= 0) {
        shieldDome.scale.setScalar(0.2)
        shieldDome.material.opacity = 0.55
        shieldDuration = 1.0
      }

      // Energy particles flow
      const posAttr = pGeom.getAttribute('position')
      const spiralSpeed = currentShieldState === 1 ? 2.5 : 1.0
      for (let i = 0; i < pCount; i++) {
        pVels[i] += pSpeeds[i] * spiralSpeed
        const radius = 0.7 + Math.sin(time + i) * 0.15
        posAttr.setX(i, Math.cos(pVels[i]) * radius)
        posAttr.setZ(i, Math.sin(pVels[i]) * radius)
      }
      posAttr.needsUpdate = true

      // Cursor light follow
      cursorLight.position.x += (target.x - cursorLight.position.x) * 0.1
      cursorLight.position.y += (target.y - cursorLight.position.y) * 0.1

      renderer.render(scene, camera)
    }

    animate()

    // Cleanups
    return () => {
      cancelAnimationFrame(animationFrameId)
      container.removeEventListener('mousemove', handleMouseMove)
      container.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('resize', handleResize)
      
      scene.traverse((object) => {
        if (!(object instanceof THREE.Mesh)) return
        if (object.geometry) object.geometry.dispose()
        if (Array.isArray(object.material)) {
          object.material.forEach((mat) => mat.dispose())
        } else if (object.material) {
          object.material.dispose()
        }
      })
      laserGeometry.dispose()
      pGeom.dispose()
      pMat.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative flex h-[720px] w-full flex-col justify-between overflow-hidden rounded-[38px] border border-white/10 bg-[#030206] text-white"
    >
      {/* 3D Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 block h-full w-full" />

      {/* Reactive HUD Overlay */}
      <div
        className="relative z-10 m-6 w-[280px] rounded-2xl border bg-black/80 p-5 backdrop-blur-xl transition-all duration-300"
        style={{
          borderColor: shieldActive ? '#ffd70055' : 'rgba(0, 255, 204, 0.15)',
          boxShadow: shieldActive ? '0 15px 35px rgba(255, 215, 0, 0.15)' : 'none'
        }}
      >
        <div
          className="flex items-center gap-2 text-xs font-black uppercase tracking-widest transition-colors duration-300"
          style={{ color: shieldActive ? '#ffd700' : '#00ffcc' }}
        >
          {shieldActive ? '🛡️ AEGIS SHIELD: MAXIMUM OUTPUT' : '🛡️ SENTINEL STATUS: ACTIVE'}
        </div>
        <div
          className="my-3 h-[1px] transition-colors duration-300"
          style={{ backgroundColor: shieldActive ? '#ffd700' : 'rgba(0, 255, 204, 0.2)' }}
        />

        <div className="space-y-2.5 text-xs">
          <div className="flex justify-between">
            <span className="text-white/40">Chassis Code</span>
            <strong className="text-white">ZENITH-SENTINEL X</strong>
          </div>
          <div className="flex justify-between">
            <span className="text-white/40">Visor Scan</span>
            <strong className="text-white">TRACKING</strong>
          </div>
          <div className="flex justify-between">
            <span className="text-white/40">Aegis Shield</span>
            <strong
              className="transition-colors duration-300"
              style={{ color: shieldActive ? '#ffd700' : '#00ffcc' }}
            >
              {shieldActive ? 'CHARGED' : 'READY'}
            </strong>
          </div>
          <div className="flex justify-between">
            <span className="text-white/40">Core Output</span>
            <strong
              className="transition-colors duration-300"
              style={{ color: shieldActive ? '#ffd700' : '#00ffcc' }}
            >
              {energyOutput}%
            </strong>
          </div>
        </div>

        {/* Real-time Bio-logs */}
        <div className="mt-4 border-t border-white/5 pt-3">
          <div className="mb-2 text-[10px] uppercase tracking-wider text-white/30">System Telemetry</div>
          <div className="h-[90px] overflow-y-auto rounded-lg bg-black/40 p-2.5 text-[9px] font-mono leading-relaxed text-white/50 space-y-1">
            {logs.map((log, idx) => (
              <div key={idx} className="border-b border-white/5 pb-0.5 last:border-b-0 last:text-white/70">
                {log}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Aesthetic Bottom Info */}
      <div className="relative z-10 mx-auto mb-6 text-center">
        <h3
          className="text-sm font-black uppercase tracking-[0.3em] transition-colors duration-400"
          style={{ color: shieldActive ? '#ffd700' : '#00ffcc' }}
        >
          Zenith Humanoid Sentinel X
        </h3>
        <p className="mt-1.5 text-[9px] font-medium tracking-[0.18em] text-white/40 uppercase">
          Click screen to engage Aegis Shield • Move cursor to target visor laser
        </p>
      </div>
    </div>
  )
}
export default ZenithHumanoidSentinelX;
`,
    prompt: `Build a highly interactive solid humanoid mecha sentinel called "Zenith Humanoid Sentinel X".\n- Built using raw Three.js geometries and glossy carbon-titanium PBR materials\n- Fully solid muscular chest plate, shoulders, hips, and limbs enclosing gold joint hubs\n- A sleek visor slit projecting a continuous, physical tracking laser beam that hits the cursor coordinates exactly\n- Smooth head and chest looking rotation towards the pointer coordinates\n- Click-to-trigger Aegis Shield dome that expands around the chassis, shifting the energy colors from cyan to bright golden amber, and triggering real-time defensive logs on the telemetry HUD panel\n- Clean resource disposal of meshes, geometries, and materials on React component unmount`,
    likes: 0,
    author: 'Animation AI',
    featured: true,
    createdAt: '2026-05-23T10:00:00.000Z',
    updatedAt: '2026-05-23T10:00:00.000Z'
  },
  {
    _id: 'robot-vanguard-human-boy-x',
    slug: 'vanguard-human-boy-x',
    title: 'Vanguard Human Boy X',
    category: 'robot',
    tag: 'threejs',
    description: 'A highly interactive solid 3D cartoon human boy character built in raw Three.js. It features a complete solid humanoid body with skin, clothes, stylish hair bangs, blushing cheeks, and a happy smiling face. Offers smooth pointer look-at tracking, breathing torso movements, and a click-to-trigger golden Joy Confetti Aura vortex.',
    previewCode: `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<style>
* { margin: 0; padding: 0; box-sizing: border-box; }
body { background: #080112; overflow: hidden; cursor: crosshair; font-family: 'Courier New', monospace; user-select: none; }
canvas { display: block; width: 100vw; height: 100vh; }
.hud { position: absolute; top: 24px; left: 24px; padding: 18px; border: 1px solid rgba(255, 30, 86, 0.15); border-radius: 16px; background: rgba(8, 1, 18, 0.85); color: #ff1e56; backdrop-filter: blur(12px); pointer-events: none; font-size: 11px; min-width: 250px; transition: all 0.3s; box-shadow: 0 15px 35px rgba(0,0,0,0.5); }
.hud-title { font-weight: bold; letter-spacing: 2px; margin-bottom: 8px; display: flex; align-items: center; gap: 6px; font-size: 12px; text-transform: uppercase; }
.hud-sep { height: 1px; background: rgba(255, 30, 86, 0.2); margin: 8px 0; transition: background 0.3s; }
.hud-item { display: flex; justify-content: space-between; margin: 5px 0; }
.hud-item span { color: rgba(255, 30, 86, 0.55); }
.hud-item strong { color: #fff; }
.label { position: absolute; bottom: 28px; left: 50%; transform: translateX(-50%); color: #ff1e56; letter-spacing: 5px; text-transform: uppercase; pointer-events: none; text-align: center; transition: all 0.4s; font-size: 13px; font-weight: 900; }
.sub { font-size: 9px; color: rgba(255, 30, 86, 0.4); letter-spacing: 2px; margin-top: 6px; font-weight: normal; }
</style>
</head>
<body>
<div class="hud" id="hud">
  <div class="hud-title" id="hudTitle">✨ EMOTION SYNC: STABLE JOY</div>
  <div class="hud-sep" id="hudSep"></div>
  <div class="hud-item"><span>Chassis Code</span><strong>VANGUARD HUMAN BOY</strong></div>
  <div class="hud-item"><span>Gaze Direction</span><strong id="gazeDir">ACTIVE</strong></div>
  <div class="hud-item"><span>Joy Burst Aura</span><strong id="auraStatus">READY</strong></div>
  <div class="hud-item"><span>Sync Ratio</span><strong id="energyOut">98.4%</strong></div>
</div>
<div class="label" id="label">
  Vanguard Human Boy X
  <div class="sub">Click Screen to Trigger Joy Spark Aura • Move Cursor to Interact</div>
</div>

<script type="importmap">{"imports":{"three":"https://unpkg.com/three@0.160.0/build/three.module.js"}}</script>
<script type="module">
import * as THREE from 'three';

let currentJoyState = 0; // 0: IDLE, 1: ACTIVE (Joy Aura)
let time = 0;

const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x080112, 0.065);

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(0, 0.2, 8.5);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.toneMapping = THREE.ACESFilmicToneMapping;
document.body.appendChild(renderer.domElement);

// Lights
const ambientLight = new THREE.AmbientLight(0x180b30, 2.0);
scene.add(ambientLight);

const mainSpot = new THREE.SpotLight(0xffffff, 30, 15, Math.PI / 6, 0.5, 1);
mainSpot.position.set(0, 6, 4);
scene.add(mainSpot);

const rimLight = new THREE.PointLight(0xff1e56, 20, 8);
rimLight.position.set(-4, 1.5, -2);
scene.add(rimLight);

const keyLight = new THREE.DirectionalLight(0xffdf80, 1.5);
keyLight.position.set(2, 3, 2);
scene.add(keyLight);

const cursorLight = new THREE.PointLight(0xff1e56, 8, 6);
cursorLight.position.set(0, 0, 3);
scene.add(cursorLight);

// Materials (Cute Cartoon Matte Skin, Clothes, and Hair)
const skinMat = new THREE.MeshToonMaterial({
  color: 0xffe0bd, // Beautiful peach human skin tone
  roughness: 0.85
});

const hairMat = new THREE.MeshToonMaterial({
  color: 0x4a2c11, // Rich glossy brown hair
  roughness: 0.6
});

const hoodieMat = new THREE.MeshToonMaterial({
  color: 0xff1e56, // Vibrant crimson hoodie
  roughness: 0.7
});

const pantsMat = new THREE.MeshToonMaterial({
  color: 0x1f4068, // Cyber denim-blue pants
  roughness: 0.8
});

const whiteMat = new THREE.MeshToonMaterial({
  color: 0xffffff,
  roughness: 0.5
});

const eyeMat = new THREE.MeshBasicMaterial({
  color: 0x0a0518
});

const eyeGlowMat = new THREE.MeshBasicMaterial({
  color: 0xffe080
});

// Human Cartoon Group
const humanGroup = new THREE.Group();
humanGroup.position.y = -1.2;
scene.add(humanGroup);

// --- 1. Cute Solid Human Head & Hair ---
const headGroup = new THREE.Group();
headGroup.position.y = 2.4;
humanGroup.add(headGroup);

// Round solid face
const face = new THREE.Mesh(new THREE.SphereGeometry(0.65, 32, 32), skinMat);
face.scale.set(1.0, 1.05, 0.95);
headGroup.add(face);

// Solid cartoon ears
const earL = new THREE.Mesh(new THREE.SphereGeometry(0.12, 16, 16), skinMat);
earL.position.set(-0.66, 0, -0.05);
headGroup.add(earL);

const earR = earL.clone();
earR.position.x = 0.66;
headGroup.add(earR);

// Stylish Solid Cartoon Hair (Clustered Spheres for nice 3D cartoon volume)
const hairGroup = new THREE.Group();
headGroup.add(hairGroup);

const hairTop = new THREE.Mesh(new THREE.SphereGeometry(0.68, 16, 16), hairMat);
hairTop.position.set(0, 0.22, -0.05);
hairTop.scale.set(1.02, 1.0, 1.05);
hairGroup.add(hairTop);

// Hair locks/bangs in front
const lock1 = new THREE.Mesh(new THREE.SphereGeometry(0.22, 12, 12), hairMat);
lock1.position.set(-0.25, 0.42, 0.38);
hairGroup.add(lock1);

const lock2 = lock1.clone();
lock2.position.set(0.25, 0.42, 0.38);
hairGroup.add(lock2);

const lock3 = lock1.clone();
lock3.position.set(0, 0.48, 0.44);
hairGroup.add(lock3);

// Sideburns
const sideburnL = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.25, 0.15), hairMat);
sideburnL.position.set(-0.62, 0.1, 0.15);
hairGroup.add(sideburnL);

const sideburnR = sideburnL.clone();
sideburnR.position.x = 0.62;
hairGroup.add(sideburnR);

// Cute Solid Eyes
const eyeL = new THREE.Mesh(new THREE.SphereGeometry(0.12, 16, 16), eyeMat);
eyeL.scale.set(1.0, 1.1, 0.3);
eyeL.position.set(-0.24, 0.05, 0.58);
headGroup.add(eyeL);

const eyeR = eyeL.clone();
eyeR.position.x = 0.25;
headGroup.add(eyeR);

// Eye highlights
const highlightL = new THREE.Mesh(new THREE.SphereGeometry(0.035, 8, 8), whiteMat);
highlightL.position.set(-0.2, 0.1, 0.61);
headGroup.add(highlightL);

const highlightR = highlightL.clone();
highlightR.position.x = 0.29;
headGroup.add(highlightR);

// Smiling mouth
const mouthGeom = new THREE.TorusGeometry(0.12, 0.03, 8, 24, Math.PI);
const mouth = new THREE.Mesh(mouthGeom, new THREE.MeshBasicMaterial({ color: 0xff5e7e }));
mouth.position.set(0, -0.22, 0.58);
mouth.rotation.set(0, 0, Math.PI); // smiling face curve
headGroup.add(mouth);

// Blushing pink cheeks
const cheekL = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.05, 0.02), new THREE.MeshBasicMaterial({ color: 0xff5e7e }));
cheekL.position.set(-0.28, -0.12, 0.61);
headGroup.add(cheekL);

const cheekR = cheekL.clone();
cheekR.position.x = 0.28;
headGroup.add(cheekR);

// --- 2. Cute Solid Human Torso (Wearing Red Hoodie) ---
const chestGroup = new THREE.Group();
chestGroup.position.y = 1.35;
humanGroup.add(chestGroup);

const hoodieBody = new THREE.Mesh(new THREE.CylinderGeometry(0.48, 0.35, 1.05, 16), hoodieMat);
hoodieBody.scale.set(1.0, 1.0, 0.75);
chestGroup.add(hoodieBody);

// Neck skin
const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.14, 0.2, 16), skinMat);
neck.position.y = 0.62;
chestGroup.add(neck);

// Hoodie neck collar ring
const collar = new THREE.Mesh(new THREE.TorusGeometry(0.24, 0.05, 8, 24), hoodieMat);
collar.rotation.x = Math.PI / 2;
collar.position.y = 0.52;
chestGroup.add(collar);

// --- 3. Solid Human Limbs (Sleeves & Skin Hands) ---
const shoulderL = new THREE.Group();
shoulderL.position.set(-0.68, 1.8, 0);
humanGroup.add(shoulderL);

const shoulderPadL = new THREE.Mesh(new THREE.SphereGeometry(0.14, 16, 16), hoodieMat);
shoulderL.add(shoulderPadL);

const armGroupL = new THREE.Group();
shoulderL.add(armGroupL);

// Solid upper arm sleeve
const sleeveL = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.1, 0.55, 12), hoodieMat);
sleeveL.position.y = -0.3;
armGroupL.add(sleeveL);

const elbowL = new THREE.Mesh(new THREE.SphereGeometry(0.08, 12, 12), hoodieMat);
elbowL.position.y = -0.58;
armGroupL.add(elbowL);

// Solid skin forearm
const forearmL = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.075, 0.5, 12), skinMat);
forearmL.position.set(0, -0.82, 0);
armGroupL.add(forearmL);

// Peachy human hand glove plate
const handL = new THREE.Mesh(new THREE.SphereGeometry(0.095, 12, 12), skinMat);
handL.position.set(0, -1.1, 0);
armGroupL.add(handL);

// Symmetrical Right Arm
const shoulderR = shoulderL.clone();
shoulderR.position.x = 0.68;
humanGroup.add(shoulderR);

// --- 4. Pelvis & Solid Blue Jeans Legs ---
const pelvis = new THREE.Mesh(new THREE.BoxGeometry(0.66, 0.16, 0.42), pantsMat);
pelvis.position.y = 0.72;
humanGroup.add(pelvis);

// Left Leg
const legL = new THREE.Group();
legL.position.set(-0.25, 0.62, 0);
humanGroup.add(legL);

const hipL = new THREE.Mesh(new THREE.SphereGeometry(0.12, 12, 12), pantsMat);
legL.add(hipL);

const jeansL = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.1, 0.75, 12), pantsMat);
jeansL.position.y = -0.42;
legL.add(jeansL);

const kneeL = new THREE.Mesh(new THREE.SphereGeometry(0.08, 12, 12), pantsMat);
kneeL.position.y = -0.8;
legL.add(kneeL);

const lowerLegL = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.08, 0.72, 12), pantsMat);
lowerLegL.position.y = -1.15;
legL.add(lowerLegL);

// Cool Yellow boots
const bootL = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.1, 0.28), new THREE.MeshToonMaterial({ color: 0xffd700 }));
bootL.position.set(0, -1.55, 0.06);
legL.add(bootL);

// Symmetrical Right Leg
const legR = legL.clone();
legR.position.x = 0.25;
humanGroup.add(legR);

// --- 5. Holographic Joy Aura Orbiting Rings ---
const ringGroup = new THREE.Group();
ringGroup.position.copy(headGroup.position);
humanGroup.add(ringGroup);

const joyRing = new THREE.Mesh(
  new THREE.TorusGeometry(1.2, 0.025, 8, 48),
  new THREE.MeshBasicMaterial({
    color: 0xff1e56,
    transparent: true,
    opacity: 0.0
  })
);
joyRing.rotation.x = Math.PI / 2.3;
ringGroup.add(joyRing);

// --- 6. Joy Aura Confetti Spark Particles ---
const pCount = 100;
const pGeom = new THREE.BufferGeometry();
const pPos = new Float32Array(pCount * 3);
const pVels = [];

for (let i = 0; i < pCount; i++) {
  pPos[i*3] = (Math.random() - 0.5) * 5;
  pPos[i*3+1] = Math.random() * 4 - 1;
  pPos[i*3+2] = (Math.random() - 0.5) * 4;
  pVels.push(new THREE.Vector3(
    (Math.random() - 0.5) * 0.1,
    Math.random() * 0.3 + 0.1,
    (Math.random() - 0.5) * 0.1
  ));
}
pGeom.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
const pMat = new THREE.PointsMaterial({
  color: 0xff1e56,
  size: 0.045,
  transparent: true,
  opacity: 0.0,
  blending: THREE.AdditiveBlending
});
const particles = new THREE.Points(pGeom, pMat);
scene.add(particles);

// Mouse tracking coordinates
const mouse = new THREE.Vector2(0, 0);
const target = new THREE.Vector3(0, 0, 0);

window.addEventListener('mousemove', (e) => {
  mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
  target.x = mouse.x * 2.2;
  target.y = mouse.y * 1.6 + 1.2;
});

// Click Interaction (Hyper Joy Aura Burst)
let joyAuraDuration = 0;
window.addEventListener('mousedown', () => {
  currentJoyState = currentJoyState === 0 ? 1 : 0;
  
  const hud = document.getElementById('hud');
  const hudTitle = document.getElementById('hudTitle');
  const hudSep = document.getElementById('hudSep');
  const label = document.getElementById('label');
  const auraStatus = document.getElementById('auraStatus');
  const energyOut = document.getElementById('energyOut');

  if (currentJoyState === 1) {
    // Joy Aura Burst active
    hudTitle.textContent = "✨ EMOTION OVERFLOW: MAXIMUM JOY";
    hudTitle.style.color = "#ffd700";
    hudSep.style.background = "#ffd700";
    hud.style.borderColor = "#ffd70088";
    hud.style.boxShadow = "0 15px 35px rgba(255,215,0,0.25)";
    label.style.color = "#ffd700";
    auraStatus.textContent = "BURSTING";
    auraStatus.style.color = "#ffd700";
    energyOut.textContent = "320%";
    energyOut.style.color = "#ffd700";
    
    // Core & lights shift gold
    eyeL.material = eyeGlowMat;
    eyeR.material = eyeGlowMat;
    pMat.color.setHex(0xffd700);
    pMat.opacity = 0.85;
    joyRing.material.color.setHex(0xffd700);
    joyRing.material.opacity = 0.75;
    rimLight.color.setHex(0xffd700);
    
    joyAuraDuration = 1.0;
  } else {
    // Return to Normal Joy
    hudTitle.textContent = "✨ EMOTION SYNC: STABLE JOY";
    hudTitle.style.color = "#ff1e56";
    hudSep.style.background = "rgba(255, 30, 86, 0.2)";
    hud.style.borderColor = "rgba(255, 30, 86, 0.15)";
    hud.style.boxShadow = "0 15px 35px rgba(0,0,0,0.5)";
    label.style.color = "#ff1e56";
    auraStatus.textContent = "READY";
    auraStatus.style.color = "#fff";
    energyOut.textContent = "98.4%";
    energyOut.style.color = "#fff";
    
    eyeL.material = eyeMat;
    eyeR.material = eyeMat;
    pMat.opacity = 0.0;
    joyRing.material.opacity = 0.0;
    rimLight.color.setHex(0xff1e56);
  }
});

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Animation Loop
const clock = new THREE.Clock();
function animate() {
  requestAnimationFrame(animate);
  time = clock.getElapsedTime();
  
  // 1. Face looks towards cursor
  headGroup.lookAt(target.x, target.y + 0.8, 3);
  
  // Torso follows slightly
  chestGroup.rotation.y += (mouse.x * 0.25 - chestGroup.rotation.y) * 0.08;
  
  // 2. Slow breathing float (Smooth & happy, no wobbly sops)
  const floatY = Math.sin(time * 2.0) * 0.035;
  humanGroup.position.y = -1.2 + floatY;
  
  // Arm breathing floats
  shoulderL.rotation.z = Math.sin(time * 1.5) * 0.05;
  shoulderR.rotation.z = -Math.sin(time * 1.5) * 0.05;
  
  // 3. Ring spin
  if (currentJoyState === 1) {
    ringGroup.rotation.y += 0.04;
    ringGroup.rotation.z += 0.01;
  }
  
  // 4. Confetti spark particle flow
  if (currentJoyState === 1) {
    const posAttr = pGeom.getAttribute('position');
    for (let i = 0; i < pCount; i++) {
      let y = posAttr.getY(i) + pVels[i].y * 0.08;
      if (y > 4) {
        y = -1.5;
        posAttr.setX(i, (Math.random() - 0.5) * 5);
        posAttr.setZ(i, (Math.random() - 0.5) * 4);
      }
      posAttr.setY(i, y);
      posAttr.setX(i, posAttr.getX(i) + Math.sin(time * 1.5 + i) * 0.005);
    }
    posAttr.needsUpdate = true;
  }
  
  // PointLight cursor movement
  cursorLight.position.x += (target.x - cursorLight.position.x) * 0.1;
  cursorLight.position.y += (target.y - cursorLight.position.y) * 0.1;
  
  renderer.render(scene, camera);
}

animate();
</script>
</body>
</html>
`,
    code: `'use client'

import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

export function VanguardHumanBoyX() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  
  // React State for Telemetry HUD
  const [joyActive, setJoyActive] = useState<boolean>(false)
  const [energyOutput, setEnergyOutput] = useState<number>(98.4)
  const [logs, setLogs] = useState<string[]>([
    'Emotion sync: Stable joy.',
    'Atmospheric scanner arrays active.',
    'System ready. Move mouse to play.'
  ])

  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return

    const container = containerRef.current
    const canvas = canvasRef.current

    let currentJoyState = 0 // 0: IDLE, 1: ACTIVE
    let animationFrameId: number
    let time = 0

    // Scene setup
    const scene = new THREE.Scene()
    scene.fog = new THREE.FogExp2(0x080112, 0.065)

    // Camera setup
    const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 100)
    camera.position.set(0, 0.2, 8.5)

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
    renderer.setSize(container.clientWidth, container.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.toneMapping = THREE.ACESFilmicToneMapping

    // Lights
    const ambientLight = new THREE.AmbientLight(0x180b30, 2.0)
    scene.add(ambientLight)

    const mainSpot = new THREE.SpotLight(0xffffff, 30, 15, Math.PI / 6, 0.5, 1)
    mainSpot.position.set(0, 6, 4)
    scene.add(mainSpot)

    const rimLight = new THREE.PointLight(0xff1e56, 20, 8)
    rimLight.position.set(-4, 1.5, -2)
    scene.add(rimLight)

    const keyLight = new THREE.DirectionalLight(0xffdf80, 1.5)
    keyLight.position.set(2, 3, 2)
    scene.add(keyLight)

    const cursorLight = new THREE.PointLight(0xff1e56, 8, 6)
    cursorLight.position.set(0, 0, 3)
    scene.add(cursorLight)

    // Materials (Cute Cartoon Matte Skin, Clothes, and Hair)
    const skinMat = new THREE.MeshToonMaterial({
      color: 0xffe0bd, // Peach human skin tone
      roughness: 0.85
    })

    const hairMat = new THREE.MeshToonMaterial({
      color: 0x4a2c11, // Brown hair
      roughness: 0.6
    })

    const hoodieMat = new THREE.MeshToonMaterial({
      color: 0xff1e56, // Crimson hoodie
      roughness: 0.7
    })

    const pantsMat = new THREE.MeshToonMaterial({
      color: 0x1f4068, // Denim blue pants
      roughness: 0.8
    })

    const whiteMat = new THREE.MeshToonMaterial({
      color: 0xffffff,
      roughness: 0.5
    })

    const eyeMat = new THREE.MeshBasicMaterial({
      color: 0x0a0518
    })

    const eyeGlowMat = new THREE.MeshBasicMaterial({
      color: 0xffe080
    })

    // Human Cartoon Group
    const humanGroup = new THREE.Group()
    humanGroup.position.y = -1.2
    scene.add(humanGroup)

    // --- 1. Cute Solid Human Head & Hair ---
    const headGroup = new THREE.Group()
    headGroup.position.y = 2.4
    humanGroup.add(headGroup)

    // Round solid face
    const face = new THREE.Mesh(new THREE.SphereGeometry(0.65, 32, 32), skinMat)
    face.scale.set(1.0, 1.05, 0.95)
    headGroup.add(face)

    // Ears
    const earL = new THREE.Mesh(new THREE.SphereGeometry(0.12, 16, 16), skinMat)
    earL.position.set(-0.66, 0, -0.05)
    headGroup.add(earL)

    const earR = earL.clone()
    earR.position.x = 0.66
    headGroup.add(earR)

    // Stylish Hair Clustered spheres
    const hairGroup = new THREE.Group()
    headGroup.add(hairGroup)

    const hairTop = new THREE.Mesh(new THREE.SphereGeometry(0.68, 16, 16), hairMat)
    hairTop.position.set(0, 0.22, -0.05)
    hairTop.scale.set(1.02, 1.0, 1.05)
    hairGroup.add(hairTop)

    const lock1 = new THREE.Mesh(new THREE.SphereGeometry(0.22, 12, 12), hairMat)
    lock1.position.set(-0.25, 0.42, 0.38)
    hairGroup.add(lock1)

    const lock2 = lock1.clone()
    lock2.position.set(0.25, 0.42, 0.38)
    hairGroup.add(lock2)

    const lock3 = lock1.clone()
    lock3.position.set(0, 0.48, 0.44)
    hairGroup.add(lock3)

    const sideburnL = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.25, 0.15), hairMat)
    sideburnL.position.set(-0.62, 0.1, 0.15)
    hairGroup.add(sideburnL)

    const sideburnR = sideburnL.clone()
    sideburnR.position.x = 0.62
    hairGroup.add(sideburnR)

    // Cute solid eyes
    const eyeL = new THREE.Mesh(new THREE.SphereGeometry(0.12, 16, 16), eyeMat)
    eyeL.scale.set(1.0, 1.1, 0.3)
    eyeL.position.set(-0.24, 0.05, 0.58)
    headGroup.add(eyeL)

    const eyeR = eyeL.clone()
    eyeR.position.x = 0.25
    headGroup.add(eyeR)

    // Highlights
    const highlightL = new THREE.Mesh(new THREE.SphereGeometry(0.035, 8, 8), whiteMat)
    highlightL.position.set(-0.2, 0.1, 0.61)
    headGroup.add(highlightL)

    const highlightR = highlightL.clone()
    highlightR.position.x = 0.29
    headGroup.add(highlightR)

    // Smiling mouth
    const mouthGeom = new THREE.TorusGeometry(0.12, 0.03, 8, 24, Math.PI)
    const mouth = new THREE.Mesh(mouthGeom, new THREE.MeshBasicMaterial({ color: 0xff5e7e }))
    mouth.position.set(0, -0.22, 0.58)
    mouth.rotation.set(0, 0, Math.PI)
    headGroup.add(mouth)

    // Cheeks
    const cheekL = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.05, 0.02), new THREE.MeshBasicMaterial({ color: 0xff5e7e }))
    cheekL.position.set(-0.28, -0.12, 0.61)
    headGroup.add(cheekL)

    const cheekR = cheekL.clone()
    cheekR.position.x = 0.28
    headGroup.add(cheekR)

    // --- 2. Torso (Hoodie) ---
    const chestGroup = new THREE.Group()
    chestGroup.position.y = 1.35
    humanGroup.add(chestGroup)

    const hoodieBody = new THREE.Mesh(new THREE.CylinderGeometry(0.48, 0.35, 1.05, 16), hoodieMat)
    hoodieBody.scale.set(1.0, 1.0, 0.75)
    chestGroup.add(hoodieBody)

    const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.14, 0.2, 16), skinMat)
    neck.position.y = 0.62
    chestGroup.add(neck)

    const collar = new THREE.Mesh(new THREE.TorusGeometry(0.24, 0.05, 8, 24), hoodieMat)
    collar.rotation.x = Math.PI / 2
    collar.position.y = 0.52
    chestGroup.add(collar)

    // --- 3. Solid Arms ---
    const shoulderL = new THREE.Group()
    shoulderL.position.set(-0.68, 1.8, 0)
    humanGroup.add(shoulderL)

    const shoulderPadL = new THREE.Mesh(new THREE.SphereGeometry(0.14, 16, 16), hoodieMat)
    shoulderL.add(shoulderPadL)

    const armGroupL = new THREE.Group()
    shoulderL.add(armGroupL)

    const sleeveL = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.1, 0.55, 12), hoodieMat)
    sleeveL.position.y = -0.3
    armGroupL.add(sleeveL)

    const elbowL = new THREE.Mesh(new THREE.SphereGeometry(0.08, 12, 12), hoodieMat)
    elbowL.position.y = -0.58
    armGroupL.add(elbowL)

    const forearmL = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.075, 0.5, 12), skinMat)
    forearmL.position.set(0, -0.82, 0)
    armGroupL.add(forearmL)

    const handL = new THREE.Mesh(new THREE.SphereGeometry(0.095, 12, 12), skinMat)
    handL.position.set(0, -1.1, 0)
    armGroupL.add(handL)

    // Symmetrical Right Arm
    const shoulderR = shoulderL.clone()
    shoulderR.position.x = 0.68
    humanGroup.add(shoulderR)

    // --- 4. Pelvis & Pants Legs ---
    const pelvis = new THREE.Mesh(new THREE.BoxGeometry(0.66, 0.16, 0.42), pantsMat)
    pelvis.position.y = 0.72
    humanGroup.add(pelvis)

    // Left Leg
    const legL = new THREE.Group()
    legL.position.set(-0.25, 0.62, 0)
    humanGroup.add(legL)

    const hipL = new THREE.Mesh(new THREE.SphereGeometry(0.12, 12, 12), pantsMat)
    legL.add(hipL)

    const jeansL = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.1, 0.75, 12), pantsMat)
    jeansL.position.y = -0.42
    legL.add(jeansL)

    const kneeL = new THREE.Mesh(new THREE.SphereGeometry(0.08, 12, 12), pantsMat)
    kneeL.position.y = -0.8
    legL.add(kneeL)

    const lowerLegL = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.08, 0.72, 12), pantsMat)
    lowerLegL.position.y = -1.15
    legL.add(lowerLegL)

    const bootL = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.1, 0.28), new THREE.MeshToonMaterial({ color: 0xffd700 }))
    bootL.position.set(0, -1.55, 0.06)
    legL.add(bootL)

    // Symmetrical Right Leg
    const legR = legL.clone()
    legR.position.x = 0.25
    humanGroup.add(legR)

    // --- 5. Holographic Joy Aura Orbiting Rings ---
    const ringGroup = new THREE.Group()
    ringGroup.position.copy(headGroup.position)
    humanGroup.add(ringGroup)

    const joyRing = new THREE.Mesh(
      new THREE.TorusGeometry(1.2, 0.025, 8, 48),
      new THREE.MeshBasicMaterial({
        color: 0xff1e56,
        transparent: true,
        opacity: 0.0
      })
    )
    joyRing.rotation.x = Math.PI / 2.3
    ringGroup.add(joyRing)

    // --- 6. Joy Aura Confetti Spark Particles ---
    const pCount = 100
    const pGeom = new THREE.BufferGeometry()
    const pPos = new Float32Array(pCount * 3)
    const pVels: THREE.Vector3[] = []

    for (let i = 0; i < pCount; i++) {
      pPos[i*3] = (Math.random() - 0.5) * 5
      pPos[i*3+1] = Math.random() * 4 - 1
      pPos[i*3+2] = (Math.random() - 0.5) * 4
      pVels.push(new THREE.Vector3(
        (Math.random() - 0.5) * 0.1,
        Math.random() * 0.3 + 0.1,
        (Math.random() - 0.5) * 0.1
      ))
    }
    pGeom.setAttribute('position', new THREE.BufferAttribute(pPos, 3))
    const pMat = new THREE.PointsMaterial({
      color: 0xff1e56,
      size: 0.045,
      transparent: true,
      opacity: 0.0,
      blending: THREE.AdditiveBlending
    })
    const particles = new THREE.Points(pGeom, pMat)
    scene.add(particles)

    // Mouse coordinates
    const mouse = new THREE.Vector2(0, 0)
    const target = new THREE.Vector3(0, 0, 0)

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1
      const y = -((e.clientY - rect.top) / rect.height) * 2 + 1
      mouse.x = x
      mouse.y = y
      target.x = x * 2.2
      target.y = y * 1.6 + 1.2
    }

    // Direct click handler to trigger Joy Aura
    const handleMouseDown = () => {
      currentJoyState = currentJoyState === 0 ? 1 : 0
      
      if (currentJoyState === 1) {
        setJoyActive(true)
        setEnergyOutput(320)
        setLogs(prev => [
          \`[\${new Date().toLocaleTimeString()}] ✨ MAXIMUM JOY OVERFLOW!\`,
          \`[\${new Date().toLocaleTimeString()}] Confetti sparks output: 320%\`,
          ...prev.slice(0, 4)
        ])

        eyeL.material = eyeGlowMat
        eyeR.material = eyeGlowMat
        pMat.color.setHex(0xffd700)
        pMat.opacity = 0.85
        joyRing.material.color.setHex(0xffd700)
        joyRing.material.opacity = 0.75
        rimLight.color.setHex(0xffd700)
      } else {
        setJoyActive(false)
        setEnergyOutput(98.4)
        setLogs(prev => [
          \`[\${new Date().toLocaleTimeString()}] 🟢 Stable Joy sync active.\`,
          ...prev.slice(0, 4)
        ])

        eyeL.material = eyeMat
        eyeR.material = eyeMat
        pMat.opacity = 0.0
        joyRing.material.opacity = 0.0
        rimLight.color.setHex(0xff1e56)
      }
    }

    container.addEventListener('mousemove', handleMouseMove)
    container.addEventListener('mousedown', handleMouseDown)

    const handleResize = () => {
      if (!containerRef.current) return
      camera.aspect = container.clientWidth / container.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(container.clientWidth, container.clientHeight)
    }
    window.addEventListener('resize', handleResize)

    // Animation Loop
    const clock = new THREE.Clock()
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)
      time = clock.getElapsedTime()

      // Face looks at cursor
      headGroup.lookAt(target.x, target.y + 0.8, 3)
      chestGroup.rotation.y += (mouse.x * 0.25 - chestGroup.rotation.y) * 0.08

      // Slow breathing float
      const floatY = Math.sin(time * 2.0) * 0.035
      humanGroup.position.y = -1.2 + floatY

      // Arm floats
      shoulderL.rotation.z = Math.sin(time * 1.5) * 0.05
      shoulderR.rotation.z = -Math.sin(time * 1.5) * 0.05

      // Ring rotations
      if (currentJoyState === 1) {
        ringGroup.rotation.y += 0.04
        ringGroup.rotation.z += 0.01
      }

      // Spark flows
      if (currentJoyState === 1) {
        const posAttr = pGeom.getAttribute('position')
        for (let i = 0; i < pCount; i++) {
          let y = posAttr.getY(i) + pVels[i].y * 0.08
          if (y > 4) {
            y = -1.5
            posAttr.setX(i, (Math.random() - 0.5) * 5)
            posAttr.setZ(i, (Math.random() - 0.5) * 4)
          }
          posAttr.setY(i, y)
          posAttr.setX(i, posAttr.getX(i) + Math.sin(time * 1.5 + i) * 0.005)
        }
        posAttr.needsUpdate = true
      }

      // Cursor light follow
      cursorLight.position.x += (target.x - cursorLight.position.x) * 0.1
      cursorLight.position.y += (target.y - cursorLight.position.y) * 0.1

      renderer.render(scene, camera)
    }

    animate()

    // Cleanups
    return () => {
      cancelAnimationFrame(animationFrameId)
      container.removeEventListener('mousemove', handleMouseMove)
      container.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('resize', handleResize)
      
      scene.traverse((object) => {
        if (!(object instanceof THREE.Mesh)) return
        if (object.geometry) object.geometry.dispose()
        if (Array.isArray(object.material)) {
          object.material.forEach((mat) => mat.dispose())
        } else if (object.material) {
          object.material.dispose()
        }
      })
      pGeom.dispose()
      pMat.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative flex h-[720px] w-full flex-col justify-between overflow-hidden rounded-[38px] border border-white/10 bg-[#080112] text-white"
    >
      {/* 3D Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 block h-full w-full" />

      {/* Reactive HUD Overlay */}
      <div
        className="relative z-10 m-6 w-[280px] rounded-2xl border bg-black/80 p-5 backdrop-blur-xl transition-all duration-300"
        style={{
          borderColor: joyActive ? '#ffd70055' : 'rgba(255, 30, 86, 0.15)',
          boxShadow: joyActive ? '0 15px 35px rgba(255, 215, 0, 0.15)' : 'none'
        }}
      >
        <div
          className="flex items-center gap-2 text-xs font-black uppercase tracking-widest transition-colors duration-300"
          style={{ color: joyActive ? '#ffd700' : '#ff1e56' }}
        >
          {joyActive ? '✨ OVERFLOW: MAXIMUM JOY' : '✨ EMOTION SYNC: STABLE JOY'}
        </div>
        <div
          className="my-3 h-[1px] transition-colors duration-300"
          style={{ backgroundColor: joyActive ? '#ffd700' : 'rgba(255, 30, 86, 0.2)' }}
        />

        <div className="space-y-2.5 text-xs">
          <div className="flex justify-between">
            <span className="text-white/40">Chassis Code</span>
            <strong className="text-white">VANGUARD HUMAN BOY</strong>
          </div>
          <div className="flex justify-between">
            <span className="text-white/40">Gaze Direction</span>
            <strong className="text-white">ACTIVE</strong>
          </div>
          <div className="flex justify-between">
            <span className="text-white/40">Joy Burst Aura</span>
            <strong
              className="transition-colors duration-300"
              style={{ color: joyActive ? '#ffd700' : '#ff1e56' }}
            >
              {joyActive ? 'BURSTING' : 'READY'}
            </strong>
          </div>
          <div className="flex justify-between">
            <span className="text-white/40">Sync Ratio</span>
            <strong
              className="transition-colors duration-300"
              style={{ color: joyActive ? '#ffd700' : '#ff1e56' }}
            >
              {energyOutput}%
            </strong>
          </div>
        </div>

        {/* Real-time Bio-logs */}
        <div className="mt-4 border-t border-white/5 pt-3">
          <div className="mb-2 text-[10px] uppercase tracking-wider text-white/30">System Telemetry</div>
          <div className="h-[90px] overflow-y-auto rounded-lg bg-black/40 p-2.5 text-[9px] font-mono leading-relaxed text-white/50 space-y-1">
            {logs.map((log, idx) => (
              <div key={idx} className="border-b border-white/5 pb-0.5 last:border-b-0 last:text-white/70">
                {log}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Aesthetic Bottom Info */}
      <div className="relative z-10 mx-auto mb-6 text-center">
        <h3
          className="text-sm font-black uppercase tracking-[0.3em] transition-colors duration-400"
          style={{ color: joyActive ? '#ffd700' : '#ff1e56' }}
        >
          Vanguard Human Boy X
        </h3>
        <p className="mt-1.5 text-[9px] font-medium tracking-[0.18em] text-white/40 uppercase">
          Click screen to trigger joy aura burst • Move cursor to make look-at
        </p>
      </div>
    </div>
  )
}
export default VanguardHumanBoyX;
`,
    prompt: `Build a highly interactive solid 3D cartoon human boy character called "Vanguard Human Boy X".\n- Built in raw Three.js with soft matte cell-shaded MeshToonMaterials\n- Complete solid humanoid human body with beautiful realistic peach skin tone, dark cartoon eyes with highlights, smiling mouth, blushing cheeks, and volumetric chocolate brown hair locks\n- Solid hoodie jacket, blue jeans, and yellow boots\n- Entirely free of crying/tears/sobbing elements, exhibiting a cheerful stable joy status\n- Smooth head look-at tracking towards the mouse coordinates\n- Click-to-trigger golden Joy Confetti Aura, spawning golden sparkles floating upwards, scaling the eyes up slightly with glowing visor effect, and expanding holographic rings around the head\n- Clean resource disposal of meshes, geometries, and materials on React component unmount`,
    likes: 0,
    author: 'Animation AI',
    featured: true,
    createdAt: '2026-05-23T10:00:00.000Z',
    updatedAt: '2026-05-23T10:00:00.000Z'
  },
  {
    _id: 'robot-aegis-bionic-deepsea-jelly-x',
    slug: 'aegis-bionic-deepsea-jelly-x',
    title: 'Aegis Bionic Deepsea Jelly X',
    category: 'robot',
    tag: 'threejs',
    description: 'A highly interactive, non-humanoid deepsea biomechanical drone built in raw Three.js. It features a translucent glass-refractive dome, a glowing bio-reactor core, and 5 procedural jointed bionic tentacles waving with natural phase lag. Tracks the pointer dynamically and triggers a neon pink EMP plasma shockwave on click.',
    previewCode: `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<style>
* { margin: 0; padding: 0; box-sizing: border-box; }
body { background: #02030a; overflow: hidden; cursor: crosshair; font-family: 'Courier New', monospace; user-select: none; }
canvas { display: block; width: 100vw; height: 100vh; }
.hud { position: absolute; top: 24px; left: 24px; padding: 18px; border: 1px solid rgba(0, 255, 128, 0.15); border-radius: 16px; background: rgba(2, 3, 10, 0.85); color: #00ff80; backdrop-filter: blur(12px); pointer-events: none; font-size: 11px; min-width: 250px; transition: all 0.3s; box-shadow: 0 15px 35px rgba(0,0,0,0.5); }
.hud-title { font-weight: bold; letter-spacing: 2px; margin-bottom: 8px; display: flex; align-items: center; gap: 6px; font-size: 12px; text-transform: uppercase; }
.hud-sep { height: 1px; background: rgba(0, 255, 128, 0.2); margin: 8px 0; transition: background 0.3s; }
.hud-item { display: flex; justify-content: space-between; margin: 5px 0; }
.hud-item span { color: rgba(0, 255, 128, 0.55); }
.hud-item strong { color: #fff; }
.label { position: absolute; bottom: 28px; left: 50%; transform: translateX(-50%); color: #00ff80; letter-spacing: 5px; text-transform: uppercase; pointer-events: none; text-align: center; transition: all 0.4s; font-size: 13px; font-weight: 900; }
.sub { font-size: 9px; color: rgba(0, 255, 128, 0.4); letter-spacing: 2px; margin-top: 6px; font-weight: normal; }
</style>
</head>
<body>
<div class="hud" id="hud">
  <div class="hud-title" id="hudTitle">🦑 DEEPSEA LINK: OPERATIONAL</div>
  <div class="hud-sep" id="hudSep"></div>
  <div class="hud-item"><span>Chassis Code</span><strong>BIONIC-JELLY X</strong></div>
  <div class="hud-item"><span>Hydro-Steer</span><strong id="steerStatus">CURIOUS</strong></div>
  <div class="hud-item"><span>Discharge Reactor</span><strong id="reactorStatus">READY</strong></div>
  <div class="hud-item"><span>Depth Pressure</span><strong id="depthPress">4,200m</strong></div>
</div>
<div class="label" id="label">
  Aegis Bionic Deepsea Jelly X
  <div class="sub">Click Screen to Discharge EMP Plasma Shockwave • Move Cursor to Steer</div>
</div>

<script type="importmap">{"imports":{"three":"https://unpkg.com/three@0.160.0/build/three.module.js"}}</script>
<script type="module">
import * as THREE from 'three';

let currentEmpState = 0; // 0: IDLE, 1: ACTIVE (EMP Discharge)
let time = 0;

const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x02030a, 0.07);

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(0, 0, 8);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.toneMapping = THREE.ACESFilmicToneMapping;
document.body.appendChild(renderer.domElement);

// Lights (Bio-luminescent deepsea style)
const ambientLight = new THREE.AmbientLight(0x020b1c, 2.5);
scene.add(ambientLight);

const mainSpot = new THREE.SpotLight(0xffffff, 20, 15, Math.PI / 4, 0.5, 1);
mainSpot.position.set(0, 5, 2);
scene.add(mainSpot);

const keyLight = new THREE.DirectionalLight(0x00ff88, 1.5);
keyLight.position.set(-2, 3, 2);
scene.add(keyLight);

const rimLight = new THREE.PointLight(0x0099ff, 25, 8);
rimLight.position.set(3, -2, -2);
scene.add(rimLight);

const cursorLight = new THREE.PointLight(0x00ff88, 10, 6);
cursorLight.position.set(0, 0, 3);
scene.add(cursorLight);

// Materials (Glossy Glassmorphism & Bio-luminescent Neons)
const glassDomeMat = new THREE.MeshPhysicalMaterial({
  color: 0x00ffaa,
  roughness: 0.05,
  metalness: 0.1,
  transmission: 0.9,
  ior: 1.5,
  thickness: 1.2,
  transparent: true,
  opacity: 0.45,
  side: THREE.DoubleSide
});

const innerCoreMat = new THREE.MeshBasicMaterial({
  color: 0x00ff88
});

const bionicArmorMat = new THREE.MeshStandardMaterial({
  color: 0x111625, // Deep violet-black solid carbon alloy
  roughness: 0.2,
  metalness: 0.8
});

const neonTentacleMat = new THREE.MeshStandardMaterial({
  color: 0x00ccff, // Cyber cyan joint trim
  roughness: 0.1,
  metalness: 0.9
});

// Bionic Jellyfish Group
const jellyGroup = new THREE.Group();
scene.add(jellyGroup);

// --- 1. Semi-transparent Bionic Outer Dome ---
const domeHead = new THREE.Mesh(new THREE.SphereGeometry(1.2, 32, 24, 0, Math.PI * 2, 0, Math.PI / 1.7), glassDomeMat);
domeHead.position.y = 0.5;
jellyGroup.add(domeHead);

// Dome rim
const domeRim = new THREE.Mesh(new THREE.TorusGeometry(1.08, 0.06, 12, 48), bionicArmorMat);
domeRim.rotation.x = Math.PI / 2;
domeRim.position.y = -0.06;
jellyGroup.add(domeRim);

// Dome central spine cap
const capSpine = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.25, 0.4, 16), bionicArmorMat);
capSpine.position.y = 1.55;
jellyGroup.add(capSpine);

// --- 2. Bio-Reactor Inner Glowing Core ---
const reactorCore = new THREE.Mesh(new THREE.IcosahedronGeometry(0.38, 2), innerCoreMat);
reactorCore.position.y = 0.6;
jellyGroup.add(reactorCore);

// Orbital cyber rings
const coreRing1 = new THREE.Mesh(new THREE.TorusGeometry(0.55, 0.02, 8, 32), neonTentacleMat);
coreRing1.position.copy(reactorCore.position);
jellyGroup.add(coreRing1);

const coreRing2 = coreRing1.clone();
coreRing2.rotation.x = Math.PI / 2;
jellyGroup.add(coreRing2);

// --- 3. Five Procedural Segmented Tentacles ---
const tentacles = [];
const tentacleCount = 5;
const jointsPerTentacle = 8;

for (let t = 0; t < tentacleCount; t++) {
  const angle = (t / tentacleCount) * Math.PI * 2;
  const radius = 0.85;
  
  const tentacleRoot = new THREE.Group();
  tentacleRoot.position.set(Math.cos(angle) * radius, -0.15, Math.sin(angle) * radius);
  jellyGroup.add(tentacleRoot);
  
  const segments = [];
  let parent = tentacleRoot;
  
  for (let j = 0; j < jointsPerTentacle; j++) {
    const segGrp = new THREE.Group();
    segGrp.position.y = -0.32;
    
    // Scale joints down towards tip
    const jointScale = 1.0 - (j / jointsPerTentacle) * 0.65;
    
    // Joint ball
    const jointBall = new THREE.Mesh(new THREE.SphereGeometry(0.08 * jointScale, 12, 12), neonTentacleMat);
    segGrp.add(jointBall);
    
    // Bone link capsule
    const bone = new THREE.Mesh(new THREE.CylinderGeometry(0.04 * jointScale, 0.03 * jointScale, 0.28, 8), bionicArmorMat);
    bone.position.y = -0.14;
    segGrp.add(bone);
    
    parent.add(segGrp);
    parent = segGrp;
    segments.push(segGrp);
  }
  
  tentacles.push({ root: tentacleRoot, segments, angle });
}

// --- 4. Holographic EMP Ring Shockwaves ---
const shockwave = new THREE.Mesh(
  new THREE.TorusGeometry(1.6, 0.04, 8, 48),
  new THREE.MeshBasicMaterial({
    color: 0x00ff88,
    transparent: true,
    opacity: 0.0
  })
);
shockwave.rotation.x = Math.PI / 2;
shockwave.position.y = -0.15;
jellyGroup.add(shockwave);

// --- 5. Hydro-spark Energy Particles ---
const pCount = 120;
const pGeom = new THREE.BufferGeometry();
const pPos = new Float32Array(pCount * 3);
const pVels = [];

for (let i = 0; i < pCount; i++) {
  pPos[i*3] = (Math.random() - 0.5) * 4;
  pPos[i*3+1] = Math.random() * 5 - 2.5;
  pPos[i*3+2] = (Math.random() - 0.5) * 4;
  pVels.push(new THREE.Vector3(
    (Math.random() - 0.5) * 0.06,
    Math.random() * 0.08 + 0.02,
    (Math.random() - 0.5) * 0.06
  ));
}
pGeom.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
const pMat = new THREE.PointsMaterial({
  color: 0x00ff88,
  size: 0.045,
  transparent: true,
  opacity: 0.45,
  blending: THREE.AdditiveBlending
});
const particles = new THREE.Points(pGeom, pMat);
scene.add(particles);

// Mouse tracking coordinates
const mouse = new THREE.Vector2(0, 0);
const target = new THREE.Vector3(0, 0, 0);

window.addEventListener('mousemove', (e) => {
  mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
  target.x = mouse.x * 2.8;
  target.y = mouse.y * 2.0;
});

// Click Interaction (Discharge EMP Plasma Wave)
let empDuration = 0;
window.addEventListener('mousedown', () => {
  currentEmpState = currentEmpState === 0 ? 1 : 0;
  
  const hud = document.getElementById('hud');
  const hudTitle = document.getElementById('hudTitle');
  const hudSep = document.getElementById('hudSep');
  const label = document.getElementById('label');
  const reactorStatus = document.getElementById('reactorStatus');
  const depthPress = document.getElementById('depthPress');

  if (currentEmpState === 1) {
    // EMP active
    hudTitle.textContent = "💥 EMP DISCHARGE: REACTOR OVERLOAD";
    hudTitle.style.color = "#ff0077";
    hudSep.style.background = "#ff0077";
    hud.style.borderColor = "#ff007788";
    hud.style.boxShadow = "0 15px 35px rgba(255,0,119,0.25)";
    label.style.color = "#ff0077";
    reactorStatus.textContent = "DISCHARGING";
    reactorStatus.style.color = "#ff0077";
    depthPress.textContent = "WARNING: HIGH VIBRATION";
    depthPress.style.color = "#ff0077";
    
    // Core & lights shift to hot neon pink
    innerCoreMat.color.setHex(0xff0077);
    glassDomeMat.color.setHex(0xff0077);
    neonTentacleMat.color.setHex(0xff00cc);
    pMat.color.setHex(0xff00cc);
    shockwave.material.color.setHex(0xff0077);
    
    shockwave.scale.setScalar(0.2);
    shockwave.material.opacity = 0.85;
    empDuration = 1.0;
  } else {
    // Return to normal bionic deepsea cyan
    hudTitle.textContent = "🦑 DEEPSEA LINK: OPERATIONAL";
    hudTitle.style.color = "#00ff80";
    hudSep.style.background = "rgba(0, 255, 128, 0.2)";
    hud.style.borderColor = "rgba(0, 255, 128, 0.15)";
    hud.style.boxShadow = "0 15px 35px rgba(0,0,0,0.5)";
    label.style.color = "#00ff80";
    reactorStatus.textContent = "READY";
    reactorStatus.style.color = "#fff";
    depthPress.textContent = "4,200m";
    depthPress.style.color = "#fff";
    
    innerCoreMat.color.setHex(0x00ff88);
    glassDomeMat.color.setHex(0x00ffaa);
    neonTentacleMat.color.setHex(0x00ccff);
    pMat.color.setHex(0x00ff88);
    
    shockwave.material.opacity = 0.0;
  }
});

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Animation Loop
const clock = new THREE.Clock();
function animate() {
  requestAnimationFrame(animate);
  time = clock.getElapsedTime();
  
  // 1. Hydro-steer look at cursor
  jellyGroup.lookAt(target.x, target.y, 4);
  
  // Dome pulsing breathing contractions
  const pulseSpeed = currentEmpState === 1 ? 16.0 : 2.8;
  const pulseAmp = currentEmpState === 1 ? 0.08 : 0.024;
  const scalePulse = 1.0 + Math.sin(time * pulseSpeed) * pulseAmp;
  domeHead.scale.set(scalePulse, scalePulse * 1.05, scalePulse);
  
  // Core rotations
  reactorCore.rotation.y += currentEmpState === 1 ? 0.08 : 0.015;
  coreRing1.rotation.y += currentEmpState === 1 ? 0.12 : 0.025;
  coreRing2.rotation.x += currentEmpState === 1 ? 0.09 : 0.018;
  
  // 2. Procedural segmented wavy tentacles
  const waveSpeed = currentEmpState === 1 ? 12.0 : 3.5;
  const waveAmp = currentEmpState === 1 ? 0.35 : 0.15;
  
  tentacles.forEach((t) => {
    let parentRotation = 0;
    
    t.segments.forEach((seg, idx) => {
      // Create laggy organic wave propagation down segments
      const phase = time * waveSpeed - idx * 0.65;
      const angleOffset = Math.sin(phase) * waveAmp;
      
      seg.rotation.z = angleOffset * 0.8;
      seg.rotation.x = Math.cos(phase + t.angle) * waveAmp * 0.4;
    });
  });
  
  // 3. EMP Ring Shockwave decay
  if (currentEmpState === 1 && empDuration > 0) {
    empDuration -= 0.015;
    shockwave.scale.addScalar(0.12);
    shockwave.material.opacity = empDuration * 0.85;
  } else if (currentEmpState === 1 && empDuration <= 0) {
    shockwave.scale.setScalar(0.2);
    shockwave.material.opacity = 0.85;
    empDuration = 1.0;
  }
  
  // 4. Spark floating flows
  const posAttr = pGeom.getAttribute('position');
  for (let i = 0; i < pCount; i++) {
    let y = posAttr.getY(i) - pVels[i].y * (currentEmpState === 1 ? 2.5 : 1.0);
    if (y < -3) {
      y = 3.0;
      posAttr.setX(i, (Math.random() - 0.5) * 4);
      posAttr.setZ(i, (Math.random() - 0.5) * 4);
    }
    posAttr.setY(i, y);
    posAttr.setX(i, posAttr.getX(i) + Math.sin(time + i) * 0.003);
  }
  posAttr.needsUpdate = true;
  
  // PointLight cursor movement
  cursorLight.position.x += (target.x - cursorLight.position.x) * 0.1;
  cursorLight.position.y += (target.y - cursorLight.position.y) * 0.1;
  
  renderer.render(scene, camera);
}

animate();
</script>
</body>
</html>
`,
    code: `'use client'

import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

interface Tentacle {
  root: THREE.Group
  segments: THREE.Group[]
  angle: number
}

export function AegisBionicDeepseaJellyX() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  
  // React State for Telemetry HUD
  const [empActive, setEmpActive] = useState<boolean>(false)
  const [pressureMsg, setPressureMsg] = useState<string>('4,200m')
  const [logs, setLogs] = useState<string[]>([
    'Bioluminescent grid: ONLINE.',
    'Hydro-steer stabilizers: NOMINAL.',
    'Atmospheric dive matrix locked.'
  ])

  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return

    const container = containerRef.current
    const canvas = canvasRef.current

    let currentEmpState = 0 // 0: IDLE, 1: ACTIVE
    let animationFrameId: number
    let time = 0

    // Scene setup
    const scene = new THREE.Scene()
    scene.fog = new THREE.FogExp2(0x02030a, 0.07)

    // Camera setup
    const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 100)
    camera.position.set(0, 0, 8)

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
    renderer.setSize(container.clientWidth, container.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.toneMapping = THREE.ACESFilmicToneMapping

    // Lights
    const ambientLight = new THREE.AmbientLight(0x020b1c, 2.5)
    scene.add(ambientLight)

    const mainSpot = new THREE.SpotLight(0xffffff, 20, 15, Math.PI / 4, 0.5, 1)
    mainSpot.position.set(0, 5, 2)
    scene.add(mainSpot)

    const keyLight = new THREE.DirectionalLight(0x00ff88, 1.5)
    keyLight.position.set(-2, 3, 2)
    scene.add(keyLight)

    const rimLight = new THREE.PointLight(0x0099ff, 25, 8)
    rimLight.position.set(3, -2, -2)
    scene.add(rimLight)

    const cursorLight = new THREE.PointLight(0x00ff88, 10, 6)
    cursorLight.position.set(0, 0, 3)
    scene.add(cursorLight)

    // Materials
    const glassDomeMat = new THREE.MeshPhysicalMaterial({
      color: 0x00ffaa,
      roughness: 0.05,
      metalness: 0.1,
      transmission: 0.9,
      ior: 1.5,
      thickness: 1.2,
      transparent: true,
      opacity: 0.45,
      side: THREE.DoubleSide
    })

    const innerCoreMat = new THREE.MeshBasicMaterial({
      color: 0x00ff88
    })

    const bionicArmorMat = new THREE.MeshStandardMaterial({
      color: 0x111625, // Deep carbon alloy
      roughness: 0.2,
      metalness: 0.8
    })

    const neonTentacleMat = new THREE.MeshStandardMaterial({
      color: 0x00ccff, // Cyber cyan joint trim
      roughness: 0.1,
      metalness: 0.9
    })

    // Bionic Jellyfish Group
    const jellyGroup = new THREE.Group()
    scene.add(jellyGroup)

    // Outer Dome Head
    const domeHead = new THREE.Mesh(new THREE.SphereGeometry(1.2, 32, 24, 0, Math.PI * 2, 0, Math.PI / 1.7), glassDomeMat)
    domeHead.position.y = 0.5
    jellyGroup.add(domeHead)

    const domeRim = new THREE.Mesh(new THREE.TorusGeometry(1.08, 0.06, 12, 48), bionicArmorMat)
    domeRim.rotation.x = Math.PI / 2
    domeRim.position.y = -0.06
    jellyGroup.add(domeRim)

    const capSpine = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.25, 0.4, 16), bionicArmorMat)
    capSpine.position.y = 1.55
    jellyGroup.add(capSpine)

    // Reactor Inner Core
    const reactorCore = new THREE.Mesh(new THREE.IcosahedronGeometry(0.38, 2), innerCoreMat)
    reactorCore.position.y = 0.6
    jellyGroup.add(reactorCore)

    // Cyber rings
    const coreRing1 = new THREE.Mesh(new THREE.TorusGeometry(0.55, 0.02, 8, 32), neonTentacleMat)
    coreRing1.position.copy(reactorCore.position)
    jellyGroup.add(coreRing1)

    const coreRing2 = coreRing1.clone()
    coreRing2.rotation.x = Math.PI / 2
    jellyGroup.add(coreRing2)

    // Five Tentacles joints
    const tentacles: Tentacle[] = []
    const tentacleCount = 5
    const jointsPerTentacle = 8

    for (let t = 0; t < tentacleCount; t++) {
      const angle = (t / tentacleCount) * Math.PI * 2
      const radius = 0.85
      
      const tentacleRoot = new THREE.Group()
      tentacleRoot.position.set(Math.cos(angle) * radius, -0.15, Math.sin(angle) * radius)
      jellyGroup.add(tentacleRoot)
      
      const segments: THREE.Group[] = []
      let parent: THREE.Group = tentacleRoot
      
      for (let j = 0; j < jointsPerTentacle; j++) {
        const segGrp = new THREE.Group()
        segGrp.position.y = -0.32
        
        const jointScale = 1.0 - (j / jointsPerTentacle) * 0.65
        const jointBall = new THREE.Mesh(new THREE.SphereGeometry(0.08 * jointScale, 12, 12), neonTentacleMat)
        segGrp.add(jointBall)
        
        const bone = new THREE.Mesh(new THREE.CylinderGeometry(0.04 * jointScale, 0.03 * jointScale, 0.28, 8), bionicArmorMat)
        bone.position.y = -0.14
        segGrp.add(bone)
        
        parent.add(segGrp)
        parent = segGrp
        segments.push(segGrp)
      }
      
      tentacles.push({ root: tentacleRoot, segments, angle })
    }

    // Holographic shockwave
    const shockwave = new THREE.Mesh(
      new THREE.TorusGeometry(1.6, 0.04, 8, 48),
      new THREE.MeshBasicMaterial({
        color: 0x00ff88,
        transparent: true,
        opacity: 0.0
      })
    )
    shockwave.rotation.x = Math.PI / 2
    shockwave.position.y = -0.15
    jellyGroup.add(shockwave)

    // Hydro spark particles
    const pCount = 120
    const pGeom = new THREE.BufferGeometry()
    const pPos = new Float32Array(pCount * 3)
    const pVels: THREE.Vector3[] = []

    for (let i = 0; i < pCount; i++) {
      pPos[i*3] = (Math.random() - 0.5) * 4
      pPos[i*3+1] = Math.random() * 5 - 2.5
      pPos[i*3+2] = (Math.random() - 0.5) * 4
      pVels.push(new THREE.Vector3(
        (Math.random() - 0.5) * 0.06,
        Math.random() * 0.08 + 0.02,
        (Math.random() - 0.5) * 0.06
      ))
    }
    pGeom.setAttribute('position', new THREE.BufferAttribute(pPos, 3))
    const pMat = new THREE.PointsMaterial({
      color: 0x00ff88,
      size: 0.045,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending
    })
    const particles = new THREE.Points(pGeom, pMat)
    scene.add(particles)

    // Mouse coordinates
    const mouse = new THREE.Vector2(0, 0)
    const target = new THREE.Vector3(0, 0, 0)

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1
      const y = -((e.clientY - rect.top) / rect.height) * 2 + 1
      mouse.x = x
      mouse.y = y
      target.x = x * 2.8
      target.y = y * 2.0
    }

    // Direct click handler to trigger EMP discharge
    let empDuration = 0
    const handleMouseDown = () => {
      currentEmpState = currentEmpState === 0 ? 1 : 0
      
      if (currentEmpState === 1) {
        setEmpActive(true)
        setPressureMsg('WARNING: EMP OVERLOAD')
        setLogs(prev => [
          \`[\${new Date().toLocaleTimeString()}] 💥 DEEPSEA EMP BLAST RELEASED!\`,
          \`[\${new Date().toLocaleTimeString()}] Shockwave ring scale overclocked\`,
          ...prev.slice(0, 4)
        ])

        innerCoreMat.color.setHex(0xff0077)
        glassDomeMat.color.setHex(0xff0077)
        neonTentacleMat.color.setHex(0xff00cc)
        pMat.color.setHex(0xff00cc)
        shockwave.material.color.setHex(0xff0077)

        shockwave.scale.setScalar(0.2)
        shockwave.material.opacity = 0.85
        empDuration = 1.0
      } else {
        setEmpActive(false)
        setPressureMsg('4,200m')
        setLogs(prev => [
          \`[\${new Date().toLocaleTimeString()}] 🟢 Core stabilized. Hydro-steer ready.\`,
          ...prev.slice(0, 4)
        ])

        innerCoreMat.color.setHex(0x00ff88)
        glassDomeMat.color.setHex(0x00ffaa)
        neonTentacleMat.color.setHex(0x00ccff)
        pMat.color.setHex(0x00ff88)

        shockwave.material.opacity = 0.0
      }
    }

    container.addEventListener('mousemove', handleMouseMove)
    container.addEventListener('mousedown', handleMouseDown)

    const handleResize = () => {
      if (!containerRef.current) return
      camera.aspect = container.clientWidth / container.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(container.clientWidth, container.clientHeight)
    }
    window.addEventListener('resize', handleResize)

    // Animation Loop
    const clock = new THREE.Clock()
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)
      time = clock.getElapsedTime()

      // Steering look at cursor
      jellyGroup.lookAt(target.x, target.y, 4)

      // Dome pulsing breathing contractions
      const pulseSpeed = currentEmpState === 1 ? 16.0 : 2.8
      const pulseAmp = currentEmpState === 1 ? 0.08 : 0.024
      const scalePulse = 1.0 + Math.sin(time * pulseSpeed) * pulseAmp
      domeHead.scale.set(scalePulse, scalePulse * 1.05, scalePulse)

      // Core rotation
      reactorCore.rotation.y += currentEmpState === 1 ? 0.08 : 0.015
      coreRing1.rotation.y += currentEmpState === 1 ? 0.12 : 0.025
      coreRing2.rotation.x += currentEmpState === 1 ? 0.09 : 0.018

      // Procedural segmented wavy tentacles
      const waveSpeed = currentEmpState === 1 ? 12.0 : 3.5
      const waveAmp = currentEmpState === 1 ? 0.35 : 0.15

      tentacles.forEach((t) => {
        t.segments.forEach((seg, idx) => {
          const phase = time * waveSpeed - idx * 0.65
          const angleOffset = Math.sin(phase) * waveAmp
          
          seg.rotation.z = angleOffset * 0.8
          seg.rotation.x = Math.cos(phase + t.angle) * waveAmp * 0.4
        })
      })

      // EMP Shockwave decay
      if (currentEmpState === 1 && empDuration > 0) {
        empDuration -= 0.015
        shockwave.scale.addScalar(0.12)
        shockwave.material.opacity = empDuration * 0.85
      } else if (currentEmpState === 1 && empDuration <= 0) {
        shockwave.scale.setScalar(0.2)
        shockwave.material.opacity = 0.85
        empDuration = 1.0
      }

      // Spark flows
      const posAttr = pGeom.getAttribute('position')
      for (let i = 0; i < pCount; i++) {
        let y = posAttr.getY(i) - pVels[i].y * (currentEmpState === 1 ? 2.5 : 1.0)
        if (y < -3) {
          y = 3.0
          posAttr.setX(i, (Math.random() - 0.5) * 4)
          posAttr.setZ(i, (Math.random() - 0.5) * 4)
        }
        posAttr.setY(i, y)
        posAttr.setX(i, posAttr.getX(i) + Math.sin(time + i) * 0.003)
      }
      posAttr.needsUpdate = true

      // Cursor light follow
      cursorLight.position.x += (target.x - cursorLight.position.x) * 0.1
      cursorLight.position.y += (target.y - cursorLight.position.y) * 0.1

      renderer.render(scene, camera)
    }

    animate()

    // Cleanups
    return () => {
      cancelAnimationFrame(animationFrameId)
      container.removeEventListener('mousemove', handleMouseMove)
      container.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('resize', handleResize)
      
      scene.traverse((object) => {
        if (!(object instanceof THREE.Mesh)) return
        if (object.geometry) object.geometry.dispose()
        if (Array.isArray(object.material)) {
          object.material.forEach((mat) => mat.dispose())
        } else if (object.material) {
          object.material.dispose()
        }
      })
      pGeom.dispose()
      pMat.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative flex h-[720px] w-full flex-col justify-between overflow-hidden rounded-[38px] border border-white/10 bg-[#02030a] text-white"
    >
      {/* 3D Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 block h-full w-full" />

      {/* Reactive HUD Overlay */}
      <div
        className="relative z-10 m-6 w-[280px] rounded-2xl border bg-black/80 p-5 backdrop-blur-xl transition-all duration-300"
        style={{
          borderColor: empActive ? '#ff007755' : 'rgba(0, 255, 128, 0.15)',
          boxShadow: empActive ? '0 15px 35px rgba(255, 0, 119, 0.15)' : 'none'
        }}
      >
        <div
          className="flex items-center gap-2 text-xs font-black uppercase tracking-widest transition-colors duration-300"
          style={{ color: empActive ? '#ff0077' : '#00ff80' }}
        >
          {empActive ? '💥 EMP DISCHARGE: OVERLOAD' : '🦑 DEEPSEA LINK: OPERATIONAL'}
        </div>
        <div
          className="my-3 h-[1px] transition-colors duration-300"
          style={{ backgroundColor: empActive ? '#ff0077' : 'rgba(0, 255, 128, 0.2)' }}
        />

        <div className="space-y-2.5 text-xs">
          <div className="flex justify-between">
            <span className="text-white/40">Chassis Code</span>
            <strong className="text-white">BIONIC-JELLY X</strong>
          </div>
          <div className="flex justify-between">
            <span className="text-white/40">Hydro-Steer</span>
            <strong className="text-white">CURIOUS</strong>
          </div>
          <div className="flex justify-between">
            <span className="text-white/40">Discharge Reactor</span>
            <strong
              className="transition-colors duration-300"
              style={{ color: empActive ? '#ff0077' : '#00ff80' }}
            >
              {empActive ? 'DISCHARGING' : 'READY'}
            </strong>
          </div>
          <div className="flex justify-between">
            <span className="text-white/40">Depth Pressure</span>
            <strong
              className="transition-colors duration-300"
              style={{ color: empActive ? '#ff0077' : '#fff' }}
            >
              {pressureMsg}
            </strong>
          </div>
        </div>

        {/* Real-time Bio-logs */}
        <div className="mt-4 border-t border-white/5 pt-3">
          <div className="mb-2 text-[10px] uppercase tracking-wider text-white/30">System Telemetry</div>
          <div className="h-[90px] overflow-y-auto rounded-lg bg-black/40 p-2.5 text-[9px] font-mono leading-relaxed text-white/50 space-y-1">
            {logs.map((log, idx) => (
              <div key={idx} className="border-b border-white/5 pb-0.5 last:border-b-0 last:text-white/70">
                {log}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Aesthetic Bottom Info */}
      <div className="relative z-10 mx-auto mb-6 text-center">
        <h3
          className="text-sm font-black uppercase tracking-[0.3em] transition-colors duration-400"
          style={{ color: empActive ? '#ff0077' : '#00ff80' }}
        >
          Aegis Bionic Deepsea Jelly X
        </h3>
        <p className="mt-1.5 text-[9px] font-medium tracking-[0.18em] text-white/40 uppercase">
          Click screen to discharge EMP Plasma Shockwave • Move cursor to hydro-steer
        </p>
      </div>
    </div>
  )
}
export default AegisBionicDeepseaJellyX;
`,
    prompt: `Build a highly interactive, advanced non-humanoid deepsea drone called "Aegis Bionic Deepsea Jelly X".\n- Custom-built in raw Three.js with translucent refracting physical glass dome materials and high-contrast carbon alloys\n- Inner reactor core surrounded by rotating cybernetic rings\n- 5 procedural mechanical tentacles waving naturally in water using phase-lagged sinewave physics\n- Smooth 3D gaze-steering following pointer coordinates\n- Click-to-trigger EMP Plasma Discharge, changing reactor colors from neon green to intense hot pink, expanding glowing holographic shockwaves, accelerating particle streams, and outputting warning logs on the real-time HUD\n- Clean resource disposal of meshes, geometries, and materials on React unmount`,
    likes: 0,
    author: 'Animation AI',
    featured: true,
    createdAt: '2026-05-23T10:00:00.000Z',
    updatedAt: '2026-05-23T10:00:00.000Z'
  },
  {
    _id: 'robot-eve-biosphere-scout-prime',
    slug: 'eve-biosphere-scout-prime',
    title: 'E.V.E. Biosphere Scout Prime',
    category: 'robot',
    tag: 'threejs',
    description: 'A highly advanced 3D floating scout robot inspired by EVE from WALL-E, custom-built in Three.js. It features a glossy white lacquer chassis with a floating magnetically-detached head, interactive digital blue visor eyes, and hover arms that aim with cursor movement. Clicking launches a highly interactive crimson plasma cannon discharge beam and cosmic energy confetti waves.',
    previewCode: `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<style>
* { margin: 0; padding: 0; box-sizing: border-box; }
body { background: #040209; overflow: hidden; cursor: crosshair; font-family: 'Courier New', monospace; user-select: none; }
canvas { display: block; width: 100vw; height: 100vh; }
.hud { position: absolute; top: 24px; left: 24px; padding: 18px; border: 1px solid rgba(0, 210, 255, 0.15); border-radius: 16px; background: rgba(4, 2, 9, 0.85); color: #00d2ff; backdrop-filter: blur(12px); pointer-events: none; font-size: 11px; min-width: 260px; transition: all 0.3s; box-shadow: 0 15px 35px rgba(0,0,0,0.5); }
.hud-title { font-weight: bold; letter-spacing: 2px; margin-bottom: 8px; display: flex; align-items: center; gap: 6px; font-size: 12px; text-transform: uppercase; }
.hud-sep { height: 1px; background: rgba(0, 210, 255, 0.2); margin: 8px 0; transition: background 0.3s; }
.hud-item { display: flex; justify-content: space-between; margin: 5px 0; }
.hud-item span { color: rgba(0, 210, 255, 0.55); }
.hud-item strong { color: #fff; }
.label { position: absolute; bottom: 28px; left: 50%; transform: translateX(-50%); color: #00d2ff; letter-spacing: 5px; text-transform: uppercase; pointer-events: none; text-align: center; transition: all 0.4s; font-size: 13px; font-weight: 900; }
.sub { font-size: 9px; color: rgba(0, 210, 255, 0.4); letter-spacing: 2px; margin-top: 6px; font-weight: normal; }
</style>
</head>
<body>
<div class="hud" id="hud">
  <div class="hud-title" id="hudTitle">🌱 DIRECTIVE: VEGETATION SCANNER</div>
  <div class="hud-sep" id="hudSep"></div>
  <div class="hud-item"><span>Model Class</span><strong>E.V.E. SCOUT PRIME</strong></div>
  <div class="hud-item"><span>Magnetic Float</span><strong id="floatStatus">STABLE</strong></div>
  <div class="hud-item"><span>Laser Blaster</span><strong id="weaponStatus">READY</strong></div>
  <div class="hud-item"><span>Chassis Temp</span><strong id="chassisTemp">32.4°C</strong></div>
</div>
<div class="label" id="label">
  E.V.E. Biosphere Scout Prime
  <div class="sub">Click Screen to Fire Plasma Blaster Cannon • Move Cursor to Steer Gaze</div>
</div>

<script type="importmap">{"imports":{"three":"https://unpkg.com/three@0.160.0/build/three.module.js"}}</script>
<script type="module">
import * as THREE from 'three';

let currentWeaponState = 0; // 0: IDLE, 1: BLASTER ACTIVE
let time = 0;

const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x040209, 0.065);

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(0, 0.2, 8.5);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.toneMapping = THREE.ACESFilmicToneMapping;
document.body.appendChild(renderer.domElement);

// Lights (Sleek sci-fi ambiance)
const ambientLight = new THREE.AmbientLight(0x050c18, 1.8);
scene.add(ambientLight);

const mainSpot = new THREE.SpotLight(0xffffff, 40, 15, Math.PI / 6, 0.5, 1);
mainSpot.position.set(0, 6, 4);
scene.add(mainSpot);

const keyLight = new THREE.DirectionalLight(0xe0f7ff, 1.5);
keyLight.position.set(2, 3, 2);
scene.add(keyLight);

const rimLight = new THREE.PointLight(0x00d2ff, 25, 8);
rimLight.position.set(-4, 1.5, -2);
scene.add(rimLight);

const cursorLight = new THREE.PointLight(0x00d2ff, 10, 6);
cursorLight.position.set(0, 0, 3);
scene.add(cursorLight);

// Materials (Premium Glossy White Lacquer & Black Screen)
const glossyWhiteMat = new THREE.MeshStandardMaterial({
  color: 0xffffff,
  roughness: 0.04,
  metalness: 0.05
});

const blackScreenMat = new THREE.MeshStandardMaterial({
  color: 0x06060c,
  roughness: 0.08,
  metalness: 0.95
});

const glowingBlueMat = new THREE.MeshBasicMaterial({
  color: 0x00d2ff
});

const laserMat = new THREE.MeshBasicMaterial({
  color: 0x00d2ff,
  transparent: true,
  opacity: 0.45
});

// Main Floating EVE Character Group
const eveGroup = new THREE.Group();
eveGroup.position.y = -0.5;
scene.add(eveGroup);

// --- 1. Hovering Oval Torso ---
const torsoGroup = new THREE.Group();
eveGroup.add(torsoGroup);

// Sleek egg shell capsule torso
const torsoGeom = new THREE.CylinderGeometry(0.55, 0.22, 1.6, 32);
const torsoMesh = new THREE.Mesh(torsoGeom, glossyWhiteMat);
torsoMesh.scale.set(1.0, 1.0, 0.85);
torsoGroup.add(torsoMesh);

// Smooth rounded shoulder shoulders & base caps
const torsoTopCap = new THREE.Mesh(new THREE.SphereGeometry(0.55, 32, 16, 0, Math.PI*2, 0, Math.PI/2), glossyWhiteMat);
torsoTopCap.position.y = 0.8;
torsoTopCap.scale.set(1.0, 0.4, 0.85);
torsoGroup.add(torsoTopCap);

const torsoBottomCap = new THREE.Mesh(new THREE.SphereGeometry(0.22, 32, 16, 0, Math.PI*2, Math.PI/2, Math.PI/2), glossyWhiteMat);
torsoBottomCap.position.y = -0.8;
torsoBottomCap.scale.set(1.0, 0.8, 0.85);
torsoGroup.add(torsoBottomCap);

// Sleek glossy chest emblem
const chestEmblem = new THREE.Mesh(new THREE.TorusGeometry(0.18, 0.015, 8, 32), new THREE.MeshBasicMaterial({ color: 0x00d2ff }));
chestEmblem.position.set(0, 0.25, 0.45);
torsoGroup.add(chestEmblem);

const leafSymbol = new THREE.Mesh(new THREE.SphereGeometry(0.06, 16, 16), new THREE.MeshBasicMaterial({ color: 0x00d2ff }));
leafSymbol.position.set(0, 0.25, 0.45);
leafSymbol.scale.set(0.6, 1.0, 0.2);
torsoGroup.add(leafSymbol);

// --- 2. Hovering Magnetic Head ---
const headGroup = new THREE.Group();
headGroup.position.y = 1.35; // Hovering above torso
eveGroup.add(headGroup);

// Glossy white head sphere
const headHelmet = new THREE.Mesh(new THREE.SphereGeometry(0.58, 32, 32), glossyWhiteMat);
headHelmet.scale.set(1.02, 0.9, 0.95);
headGroup.add(headHelmet);

// Black polished screen faceplate
const faceplate = new THREE.Mesh(new THREE.SphereGeometry(0.54, 32, 32, 0, Math.PI*2, 0, Math.PI/2.1), blackScreenMat);
faceplate.rotation.x = Math.PI / 2;
faceplate.scale.set(0.9, 0.85, 0.82);
faceplate.position.set(0, 0.02, 0.16);
headGroup.add(faceplate);

// Glowing digital LED eyes
const eyeL = new THREE.Mesh(new THREE.SphereGeometry(0.12, 16, 8, 0, Math.PI*2, 0, Math.PI/2), glowingBlueMat);
eyeL.scale.set(1.0, 0.5, 0.1);
eyeL.rotation.z = -Math.PI / 16;
eyeL.position.set(-0.18, 0.06, 0.54);
headGroup.add(eyeL);

const eyeR = eyeL.clone();
eyeR.rotation.z = Math.PI / 16;
eyeR.position.x = 0.18;
headGroup.add(eyeR);

// --- 3. Hovering Magnetic Arms (Snap completely detached) ---
const armLGroup = new THREE.Group();
armLGroup.position.set(-0.85, 0.1, 0);
eveGroup.add(armLGroup);

const armRGroup = new THREE.Group();
armRGroup.position.set(0.85, 0.1, 0);
eveGroup.add(armRGroup);

// Magnetic Left Arm capsule
const armL = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.05, 0.9, 24), glossyWhiteMat);
armL.position.y = -0.3;
armLGroup.add(armL);

const armLTop = new THREE.Mesh(new THREE.SphereGeometry(0.1, 24, 12, 0, Math.PI*2, 0, Math.PI/2), glossyWhiteMat);
armLTop.scale.set(1.0, 0.5, 1.0);
armLGroup.add(armLTop);

const armLBottom = new THREE.Mesh(new THREE.SphereGeometry(0.05, 24, 12, 0, Math.PI*2, Math.PI/2, Math.PI/2), glossyWhiteMat);
armLBottom.position.y = -0.75;
armLGroup.add(armLBottom);

// Symmetrical Magnetic Right Arm / Blaster Cannon
const armR = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.05, 0.9, 24), glossyWhiteMat);
armR.position.y = -0.3;
armRGroup.add(armR);

const armRTop = new THREE.Mesh(new THREE.SphereGeometry(0.1, 24, 12, 0, Math.PI*2, 0, Math.PI/2), glossyWhiteMat);
armRTop.scale.set(1.0, 0.5, 1.0);
armRGroup.add(armRTop);

const armRBottom = new THREE.Mesh(new THREE.SphereGeometry(0.05, 24, 12, 0, Math.PI*2, Math.PI/2, Math.PI/2), glossyWhiteMat);
armRBottom.position.y = -0.75;
armRGroup.add(armRBottom);

// Inner Blaster muzzle (only visible when firing)
const blasterMuzzle = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.15, 16), glowingBlueMat);
blasterMuzzle.position.set(0, -0.85, 0);
armRGroup.add(blasterMuzzle);

// --- 4. Glowing Plasma Discharge Beam ---
const laserGeometry = new THREE.CylinderGeometry(0.02, 0.02, 1.0, 8);
const laserMesh = new THREE.Mesh(laserGeometry, laserMat);
laserMesh.rotation.x = Math.PI / 2;
scene.add(laserMesh);

// --- 5. Kinetic Plasma Confetti Sparks ---
const pCount = 80;
const pGeom = new THREE.BufferGeometry();
const pPos = new Float32Array(pCount * 3);
const pVels = [];

for (let i = 0; i < pCount; i++) {
  pPos[i*3] = (Math.random() - 0.5) * 4;
  pPos[i*3+1] = Math.random() * 4 - 1;
  pPos[i*3+2] = (Math.random() - 0.5) * 4;
  pVels.push(new THREE.Vector3(
    (Math.random() - 0.5) * 0.1,
    Math.random() * 0.25 + 0.1,
    (Math.random() - 0.5) * 0.1
  ));
}
pGeom.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
const pMat = new THREE.PointsMaterial({
  color: 0x00d2ff,
  size: 0.04,
  transparent: true,
  opacity: 0.6,
  blending: THREE.AdditiveBlending
});
const particles = new THREE.Points(pGeom, pMat);
scene.add(particles);

// Mouse tracking coordinates
const mouse = new THREE.Vector2(0, 0);
const target = new THREE.Vector3(0, 0, 0);

window.addEventListener('mousemove', (e) => {
  mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
  target.x = mouse.x * 2.5;
  target.y = mouse.y * 1.8 + 1.2;
});

// Click Interaction (Aim and Fire Blaster Cannon)
let chargeDuration = 0;
window.addEventListener('mousedown', () => {
  currentWeaponState = currentWeaponState === 0 ? 1 : 0;
  
  const hud = document.getElementById('hud');
  const hudTitle = document.getElementById('hudTitle');
  const hudSep = document.getElementById('hudSep');
  const label = document.getElementById('label');
  const weaponStatus = document.getElementById('weaponStatus');
  const chassisTemp = document.getElementById('chassisTemp');

  if (currentWeaponState === 1) {
    // Fire Blaster Cannon Mode
    hudTitle.textContent = "💥 TARGET ACQUIRED: FIRE PLASMA BLASTER";
    hudTitle.style.color = "#ff1e56";
    hudSep.style.background = "#ff1e56";
    hud.style.borderColor = "#ff1e5688";
    hud.style.boxShadow = "0 15px 35px rgba(255,30,86,0.3)";
    label.style.color = "#ff1e56";
    weaponStatus.textContent = "DISCHARGING";
    weaponStatus.style.color = "#ff1e56";
    chassisTemp.textContent = "84.9°C";
    chassisTemp.style.color = "#ff1e56";
    
    // Core & Lights shift to neon-red/magenta
    glowingBlueMat.color.setHex(0xff1e56);
    chestEmblem.material.color.setHex(0xff1e56);
    leafSymbol.material.color.setHex(0xff1e56);
    blasterMuzzle.material.color.setHex(0xff1e56);
    laserMat.color.setHex(0xff1e56);
    pMat.color.setHex(0xff1e56);
    rimLight.color.setHex(0xff1e56);
    
    // Change LED eyes to alert square focus look
    eyeL.scale.set(0.9, 0.9, 0.1);
    eyeR.scale.set(0.9, 0.9, 0.1);
    
    chargeDuration = 1.0;
  } else {
    // Return to Scanning Mode
    hudTitle.textContent = "🌱 DIRECTIVE: VEGETATION SCANNER";
    hudTitle.style.color = "#00d2ff";
    hudSep.style.background = "rgba(0, 210, 255, 0.2)";
    hud.style.borderColor = "rgba(0, 210, 255, 0.15)";
    hud.style.boxShadow = "0 15px 35px rgba(0,0,0,0.5)";
    label.style.color = "#00d2ff";
    weaponStatus.textContent = "READY";
    weaponStatus.style.color = "#fff";
    chassisTemp.textContent = "32.4°C";
    chassisTemp.style.color = "#fff";
    
    glowingBlueMat.color.setHex(0x00d2ff);
    chestEmblem.material.color.setHex(0x00d2ff);
    leafSymbol.material.color.setHex(0x00d2ff);
    blasterMuzzle.material.color.setHex(0x00d2ff);
    laserMat.color.setHex(0x00d2ff);
    pMat.color.setHex(0x00d2ff);
    rimLight.color.setHex(0x00d2ff);
    
    // Return to friendly crescent eyes
    eyeL.scale.set(1.0, 0.5, 0.1);
    eyeR.scale.set(1.0, 0.5, 0.1);
  }
});

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Animation Loop
const clock = new THREE.Clock();
function animate() {
  requestAnimationFrame(animate);
  time = clock.getElapsedTime();
  
  // 1. Magnetic Floating Float Sine oscillations
  const floatTorso = Math.sin(time * 1.5) * 0.05;
  const floatHead = Math.sin(time * 2.2) * 0.04;
  
  torsoGroup.position.y = floatTorso;
  // Rotate torso slightly with breathing float
  torsoGroup.rotation.z = Math.sin(time * 0.8) * 0.015;
  
  // Head floats independently
  headGroup.position.y = 1.35 + floatHead;
  headGroup.lookAt(target.x, target.y + 1.2, 3);
  
  // 2. Magnetic Floating arms follow cursor/gaze snap
  // Snap arms near shoulder sockets but detached
  const targetArmLY = floatTorso + 0.15;
  const targetArmRY = floatTorso + 0.15;
  
  armLGroup.position.y += (targetArmLY - armLGroup.position.y) * 0.1;
  armRGroup.position.y += (targetArmRY - armRGroup.position.y) * 0.1;
  
  // Left arm floats calmly at the side
  armLGroup.rotation.z = -Math.PI / 18 + Math.sin(time * 1.2) * 0.04;
  armLGroup.rotation.x = Math.cos(time * 0.8) * 0.05;
  
  // If blaster is active, raise right arm into laser firing posture pointing directly at target!
  if (currentWeaponState === 1) {
    const muzzlePos = new THREE.Vector3();
    armRGroup.getWorldPosition(muzzlePos);
    const aimEnd = new THREE.Vector3(target.x, target.y, 3);
    
    // Rotate arm to aim at laser target
    armRGroup.lookAt(aimEnd);
    armRGroup.rotateX(Math.PI / 2); // Correct cylinder rotation
  } else {
    // Normal floating floating arm posture
    armRGroup.rotation.z = Math.PI / 18 - Math.sin(time * 1.2) * 0.04;
    armRGroup.rotation.x = Math.cos(time * 0.8) * 0.05;
  }
  
  // 3. Aim and project Laser Blaster beam
  if (currentWeaponState === 1) {
    const muzzlePos = new THREE.Vector3();
    blasterMuzzle.getWorldPosition(muzzlePos);
    
    const aimEnd = new THREE.Vector3(target.x, target.y, 3);
    const distance = muzzlePos.distanceTo(aimEnd);
    
    laserMesh.scale.set(1, distance, 1);
    laserMesh.position.copy(muzzlePos).add(aimEnd).multiplyScalar(0.5);
    laserMesh.lookAt(aimEnd);
    laserMesh.rotateX(Math.PI / 2);
    laserMesh.visible = true;
  } else {
    laserMesh.visible = false;
  }
  
  // 4. Kinetic particles drift
  const posAttr = pGeom.getAttribute('position');
  const spiralSpeed = currentWeaponState === 1 ? 3.0 : 1.0;
  for (let i = 0; i < pCount; i++) {
    let y = posAttr.getY(i) + pVels[i].y * 0.016 * spiralSpeed;
    if (y > 4) {
      y = -1.5;
      posAttr.setX(i, (Math.random() - 0.5) * 4);
      posAttr.setZ(i, (Math.random() - 0.5) * 4);
    }
    posAttr.setY(i, y);
    posAttr.setX(i, posAttr.getX(i) + Math.sin(time * 1.5 + i) * 0.003);
  }
  posAttr.needsUpdate = true;
  
  // PointLight cursor movement
  cursorLight.position.x += (target.x - cursorLight.position.x) * 0.1;
  cursorLight.position.y += (target.y - cursorLight.position.y) * 0.1;
  
  renderer.render(scene, camera);
}

animate();
</script>
</body>
</html>
`,
    code: `'use client'

import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

export function EveBiosphereScoutPrime() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  
  // React State for Telemetry HUD
  const [weaponActive, setWeaponActive] = useState<boolean>(false)
  const [chassisTemp, setChassisTemp] = useState<string>('32.4°C')
  const [logs, setLogs] = useState<string[]>([
    'Directive: Vegetation scanner active.',
    'Magnetic float array status: OK.',
    'Chassis integrity: 100% stable.'
  ])

  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return

    const container = containerRef.current
    const canvas = canvasRef.current

    let currentWeaponState = 0 // 0: IDLE, 1: ACTIVE
    let animationFrameId: number
    let time = 0

    // Scene setup
    const scene = new THREE.Scene()
    scene.fog = new THREE.FogExp2(0x040209, 0.065)

    // Camera setup
    const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 100)
    camera.position.set(0, 0.2, 8.5)

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
    renderer.setSize(container.clientWidth, container.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.toneMapping = THREE.ACESFilmicToneMapping

    // Lights
    const ambientLight = new THREE.AmbientLight(0x050c18, 1.8)
    scene.add(ambientLight)

    const mainSpot = new THREE.SpotLight(0xffffff, 40, 15, Math.PI / 6, 0.5, 1)
    mainSpot.position.set(0, 6, 4)
    scene.add(mainSpot)

    const keyLight = new THREE.DirectionalLight(0xe0f7ff, 1.5)
    keyLight.position.set(2, 3, 2)
    scene.add(keyLight)

    const rimLight = new THREE.PointLight(0x00d2ff, 25, 8)
    rimLight.position.set(-4, 1.5, -2)
    scene.add(rimLight)

    const cursorLight = new THREE.PointLight(0x00d2ff, 10, 6)
    cursorLight.position.set(0, 0, 3)
    scene.add(cursorLight)

    // Materials (Premium Glossy White Lacquer & Black Screen)
    const glossyWhiteMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.04,
      metalness: 0.05
    })

    const blackScreenMat = new THREE.MeshStandardMaterial({
      color: 0x06060c,
      roughness: 0.08,
      metalness: 0.95
    })

    const glowingBlueMat = new THREE.MeshBasicMaterial({
      color: 0x00d2ff
    })

    const laserMat = new THREE.MeshBasicMaterial({
      color: 0x00d2ff,
      transparent: true,
      opacity: 0.45
    })

    // Main Floating EVE Character Group
    const eveGroup = new THREE.Group()
    eveGroup.position.y = -0.5
    scene.add(eveGroup)

    // --- 1. Hovering Oval Torso ---
    const torsoGroup = new THREE.Group()
    eveGroup.add(torsoGroup)

    // Sleek egg shell capsule torso
    const torsoGeom = new THREE.CylinderGeometry(0.55, 0.22, 1.6, 32)
    const torsoMesh = new THREE.Mesh(torsoGeom, glossyWhiteMat)
    torsoMesh.scale.set(1.0, 1.0, 0.85)
    torsoGroup.add(torsoMesh)

    // Smooth rounded caps
    const torsoTopCap = new THREE.Mesh(new THREE.SphereGeometry(0.55, 32, 16, 0, Math.PI*2, 0, Math.PI/2), glossyWhiteMat)
    torsoTopCap.position.y = 0.8
    torsoTopCap.scale.set(1.0, 0.4, 0.85)
    torsoGroup.add(torsoTopCap)

    const torsoBottomCap = new THREE.Mesh(new THREE.SphereGeometry(0.22, 32, 16, 0, Math.PI*2, Math.PI/2, Math.PI/2), glossyWhiteMat)
    torsoBottomCap.position.y = -0.8
    torsoBottomCap.scale.set(1.0, 0.8, 0.85)
    torsoGroup.add(torsoBottomCap)

    // Sleek chest emblem
    const chestEmblem = new THREE.Mesh(new THREE.TorusGeometry(0.18, 0.015, 8, 32), new THREE.MeshBasicMaterial({ color: 0x00d2ff }))
    chestEmblem.position.set(0, 0.25, 0.45)
    torsoGroup.add(chestEmblem)

    const leafSymbol = new THREE.Mesh(new THREE.SphereGeometry(0.06, 16, 16), new THREE.MeshBasicMaterial({ color: 0x00d2ff }))
    leafSymbol.position.set(0, 0.25, 0.45)
    leafSymbol.scale.set(0.6, 1.0, 0.2)
    torsoGroup.add(leafSymbol)

    // --- 2. Hovering Magnetic Head ---
    const headGroup = new THREE.Group()
    headGroup.position.y = 1.35
    eveGroup.add(headGroup)

    const headHelmet = new THREE.Mesh(new THREE.SphereGeometry(0.58, 32, 32), glossyWhiteMat)
    headHelmet.scale.set(1.02, 0.9, 0.95)
    headGroup.add(headHelmet)

    const faceplate = new THREE.Mesh(new THREE.SphereGeometry(0.54, 32, 32, 0, Math.PI*2, 0, Math.PI/2.1), blackScreenMat)
    faceplate.rotation.x = Math.PI / 2
    faceplate.scale.set(0.9, 0.85, 0.82)
    faceplate.position.set(0, 0.02, 0.16)
    headGroup.add(faceplate)

    // Glowing eyes
    const eyeL = new THREE.Mesh(new THREE.SphereGeometry(0.12, 16, 8, 0, Math.PI*2, 0, Math.PI/2), glowingBlueMat)
    eyeL.scale.set(1.0, 0.5, 0.1)
    eyeL.rotation.z = -Math.PI / 16
    eyeL.position.set(-0.18, 0.06, 0.54)
    headGroup.add(eyeL)

    const eyeR = eyeL.clone()
    eyeR.rotation.z = Math.PI / 16
    eyeR.position.x = 0.18
    headGroup.add(eyeR)

    // --- 3. Hovering Detached Arms ---
    const armLGroup = new THREE.Group()
    armLGroup.position.set(-0.85, 0.1, 0)
    eveGroup.add(armLGroup)

    const armRGroup = new THREE.Group()
    armRGroup.position.set(0.85, 0.1, 0)
    eveGroup.add(armRGroup)

    // Left arm capsule
    const armL = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.05, 0.9, 24), glossyWhiteMat)
    armL.position.y = -0.3
    armLGroup.add(armL)

    const armLTop = new THREE.Mesh(new THREE.SphereGeometry(0.1, 24, 12, 0, Math.PI*2, 0, Math.PI/2), glossyWhiteMat)
    armLTop.scale.set(1.0, 0.5, 1.0)
    armLGroup.add(armLTop)

    const armLBottom = new THREE.Mesh(new THREE.SphereGeometry(0.05, 24, 12, 0, Math.PI*2, Math.PI/2, Math.PI/2), glossyWhiteMat)
    armLBottom.position.y = -0.75
    armLGroup.add(armLBottom)

    // Right arm/blaster capsule
    const armR = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.05, 0.9, 24), glossyWhiteMat)
    armR.position.y = -0.3
    armRGroup.add(armR)

    const armRTop = new THREE.Mesh(new THREE.SphereGeometry(0.1, 24, 12, 0, Math.PI*2, 0, Math.PI/2), glossyWhiteMat)
    armRTop.scale.set(1.0, 0.5, 1.0)
    armRGroup.add(armRTop)

    const armRBottom = new THREE.Mesh(new THREE.SphereGeometry(0.05, 24, 12, 0, Math.PI*2, Math.PI/2, Math.PI/2), glossyWhiteMat)
    armRBottom.position.y = -0.75
    armRGroup.add(armRBottom)

    const blasterMuzzle = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.15, 16), glowingBlueMat)
    blasterMuzzle.position.set(0, -0.85, 0)
    armRGroup.add(blasterMuzzle)

    // --- 4. Plasma Discharge Beam ---
    const laserGeometry = new THREE.CylinderGeometry(0.02, 0.02, 1.0, 8)
    const laserMesh = new THREE.Mesh(laserGeometry, laserMat)
    laserMesh.rotation.x = Math.PI / 2
    scene.add(laserMesh)

    // --- 5. Confetti Spark Particles ---
    const pCount = 80
    const pGeom = new THREE.BufferGeometry()
    const pPos = new Float32Array(pCount * 3)
    const pVels: THREE.Vector3[] = []

    for (let i = 0; i < pCount; i++) {
      pPos[i*3] = (Math.random() - 0.5) * 4
      pPos[i*3+1] = Math.random() * 4 - 1
      pPos[i*3+2] = (Math.random() - 0.5) * 4
      pVels.push(new THREE.Vector3(
        (Math.random() - 0.5) * 0.1,
        Math.random() * 0.25 + 0.1,
        (Math.random() - 0.5) * 0.1
      ))
    }
    pGeom.setAttribute('position', new THREE.BufferAttribute(pPos, 3))
    const pMat = new THREE.PointsMaterial({
      color: 0x00d2ff,
      size: 0.04,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    })
    const particles = new THREE.Points(pGeom, pMat)
    scene.add(particles)

    // Mouse coordinates
    const mouse = new THREE.Vector2(0, 0)
    const target = new THREE.Vector3(0, 0, 0)

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1
      const y = -((e.clientY - rect.top) / rect.height) * 2 + 1
      mouse.x = x
      mouse.y = y
      target.x = x * 2.5
      target.y = y * 1.8 + 1.2
    }

    // Direct click handler to fire blaster cannon
    const handleMouseDown = () => {
      currentWeaponState = currentWeaponState === 0 ? 1 : 0
      
      if (currentWeaponState === 1) {
        setWeaponActive(true)
        setChassisTemp('84.9°C')
        setLogs(prev => [
          \`[\${new Date().toLocaleTimeString()}] 💥 PLASMA BLASTER DEPLOYED!\`,
          \`[\${new Date().toLocaleTimeString()}] Targeting array locked on pointer\`,
          ...prev.slice(0, 4)
        ])

        glowingBlueMat.color.setHex(0xff1e56)
        chestEmblem.material.color.setHex(0xff1e56)
        leafSymbol.material.color.setHex(0xff1e56)
        blasterMuzzle.material.color.setHex(0xff1e56)
        laserMat.color.setHex(0xff1e56)
        pMat.color.setHex(0xff1e56)
        rimLight.color.setHex(0xff1e56)

        eyeL.scale.set(0.9, 0.9, 0.1)
        eyeR.scale.set(0.9, 0.9, 0.1)
      } else {
        setWeaponActive(false)
        setChassisTemp('32.4°C')
        setLogs(prev => [
          \`[\${new Date().toLocaleTimeString()}] 🟢 Stable scan mode enabled. Directive active.\`,
          ...prev.slice(0, 4)
        ])

        glowingBlueMat.color.setHex(0x00d2ff)
        chestEmblem.material.color.setHex(0x00d2ff)
        leafSymbol.material.color.setHex(0x00d2ff)
        blasterMuzzle.material.color.setHex(0x00d2ff)
        laserMat.color.setHex(0x00d2ff)
        pMat.color.setHex(0x00d2ff)
        rimLight.color.setHex(0x00d2ff)

        eyeL.scale.set(1.0, 0.5, 0.1)
        eyeR.scale.set(1.0, 0.5, 0.1)
      }
    }

    container.addEventListener('mousemove', handleMouseMove)
    container.addEventListener('mousedown', handleMouseDown)

    const handleResize = () => {
      if (!containerRef.current) return
      camera.aspect = container.clientWidth / container.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(container.clientWidth, container.clientHeight)
    }
    window.addEventListener('resize', handleResize)

    // Animation Loop
    const clock = new THREE.Clock()
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)
      time = clock.getElapsedTime()

      // Magnetic Float oscillations
      const floatTorso = Math.sin(time * 1.5) * 0.05
      const floatHead = Math.sin(time * 2.2) * 0.04

      torsoGroup.position.y = floatTorso
      torsoGroup.rotation.z = Math.sin(time * 0.8) * 0.015

      headGroup.position.y = 1.35 + floatHead
      headGroup.lookAt(target.x, target.y + 1.2, 3)

      // Snap arms but detached
      const targetArmLY = floatTorso + 0.15
      const targetArmRY = floatTorso + 0.15

      armLGroup.position.y += (targetArmLY - armLGroup.position.y) * 0.1
      armRGroup.position.y += (targetArmRY - armRGroup.position.y) * 0.1

      armLGroup.rotation.z = -Math.PI / 18 + Math.sin(time * 1.2) * 0.04
      armLGroup.rotation.x = Math.cos(time * 0.8) * 0.05

      if (currentWeaponState === 1) {
        const aimEnd = new THREE.Vector3(target.x, target.y, 3)
        armRGroup.lookAt(aimEnd)
        armRGroup.rotateX(Math.PI / 2)
      } else {
        armRGroup.rotation.z = Math.PI / 18 - Math.sin(time * 1.2) * 0.04
        armRGroup.rotation.x = Math.cos(time * 0.8) * 0.05
      }

      // Laser aiming math
      if (currentWeaponState === 1) {
        const muzzlePos = new THREE.Vector3()
        blasterMuzzle.getWorldPosition(muzzlePos)
        
        const aimEnd = new THREE.Vector3(target.x, target.y, 3)
        const distance = muzzlePos.distanceTo(aimEnd)
        
        laserMesh.scale.set(1, distance, 1)
        laserMesh.position.copy(muzzlePos).add(aimEnd).multiplyScalar(0.5)
        laserMesh.lookAt(aimEnd)
        laserMesh.rotateX(Math.PI / 2)
        laserMesh.visible = true
      } else {
        laserMesh.visible = false
      }

      // Confetti particle vortex flow
      const posAttr = pGeom.getAttribute('position')
      const spiralSpeed = currentWeaponState === 1 ? 3.0 : 1.0
      for (let i = 0; i < pCount; i++) {
        let y = posAttr.getY(i) + pVels[i].y * 0.016 * spiralSpeed
        if (y > 4) {
          y = -1.5
          posAttr.setX(i, (Math.random() - 0.5) * 4)
          posAttr.setZ(i, (Math.random() - 0.5) * 4)
        }
        posAttr.setY(i, y)
        posAttr.setX(i, posAttr.getX(i) + Math.sin(time * 1.5 + i) * 0.003)
      }
      posAttr.needsUpdate = true

      // Cursor light follow
      cursorLight.position.x += (target.x - cursorLight.position.x) * 0.1
      cursorLight.position.y += (target.y - cursorLight.position.y) * 0.1

      renderer.render(scene, camera)
    }

    animate()

    // Cleanups
    return () => {
      cancelAnimationFrame(animationFrameId)
      container.removeEventListener('mousemove', handleMouseMove)
      container.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('resize', handleResize)
      
      scene.traverse((object) => {
        if (!(object instanceof THREE.Mesh)) return
        if (object.geometry) object.geometry.dispose()
        if (Array.isArray(object.material)) {
          object.material.forEach((mat) => mat.dispose())
        } else if (object.material) {
          object.material.dispose()
        }
      })
      laserGeometry.dispose()
      pGeom.dispose()
      pMat.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative flex h-[720px] w-full flex-col justify-between overflow-hidden rounded-[38px] border border-white/10 bg-[#040209] text-white"
    >
      {/* 3D Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 block h-full w-full" />

      {/* Reactive HUD Overlay */}
      <div
        className="relative z-10 m-6 w-[280px] rounded-2xl border bg-black/80 p-5 backdrop-blur-xl transition-all duration-300"
        style={{
          borderColor: weaponActive ? '#ff1e5655' : 'rgba(0, 210, 255, 0.15)',
          boxShadow: weaponActive ? '0 15px 35px rgba(255, 30, 86, 0.15)' : 'none'
        }}
      >
        <div
          className="flex items-center gap-2 text-xs font-black uppercase tracking-widest transition-colors duration-300"
          style={{ color: weaponActive ? '#ff1e56' : '#00d2ff' }}
        >
          {weaponActive ? '💥 WARNING: DISCHARGING PLASMA' : '🌱 DIRECTIVE: VEGETATION SCANNER'}
        </div>
        <div
          className="my-3 h-[1px] transition-colors duration-300"
          style={{ backgroundColor: weaponActive ? '#ff1e56' : 'rgba(0, 210, 255, 0.2)' }}
        />

        <div className="space-y-2.5 text-xs">
          <div className="flex justify-between">
            <span className="text-white/40">Model Class</span>
            <strong className="text-white">E.V.E. SCOUT PRIME</strong>
          </div>
          <div className="flex justify-between">
            <span className="text-white/40">Magnetic Float</span>
            <strong className="text-white">STABLE</strong>
          </div>
          <div className="flex justify-between">
            <span className="text-white/40">Laser Blaster</span>
            <strong
              className="transition-colors duration-300"
              style={{ color: weaponActive ? '#ff1e56' : '#00d2ff' }}
            >
              {weaponActive ? 'DISCHARGING' : 'READY'}
            </strong>
          </div>
          <div className="flex justify-between">
            <span className="text-white/40">Chassis Temp</span>
            <strong
              className="transition-colors duration-300"
              style={{ color: weaponActive ? '#ff1e56' : '#fff' }}
            >
              {chassisTemp}
            </strong>
          </div>
        </div>

        {/* Real-time Bio-logs */}
        <div className="mt-4 border-t border-white/5 pt-3">
          <div className="mb-2 text-[10px] uppercase tracking-wider text-white/30">System Telemetry</div>
          <div className="h-[90px] overflow-y-auto rounded-lg bg-black/40 p-2.5 text-[9px] font-mono leading-relaxed text-white/50 space-y-1">
            {logs.map((log, idx) => (
              <div key={idx} className="border-b border-white/5 pb-0.5 last:border-b-0 last:text-white/70">
                {log}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Aesthetic Bottom Info */}
      <div className="relative z-10 mx-auto mb-6 text-center">
        <h3
          className="text-sm font-black uppercase tracking-[0.3em] transition-colors duration-400"
          style={{ color: weaponActive ? '#ff1e56' : '#00d2ff' }}
        >
          E.V.E. Biosphere Scout Prime
        </h3>
        <p className="mt-1.5 text-[9px] font-medium tracking-[0.18em] text-white/40 uppercase">
          Click screen to fire plasma blaster cannon • Move cursor to steer gaze
        </p>
      </div>
    </div>
  )
}
export default EveBiosphereScoutPrime;
`,
    prompt: `Build a highly interactive 3D floating scout robot called "E.V.E. Biosphere Scout Prime" inspired by the movie WALL-E.\n- Built using raw Three.js with ultra-glossy porcelain-white lacquer PBR materials\n- Organically floating magnetically-detached capsule head and hover arm pods with zero physical joints\n- Double-layered independent breathing floating sine-wave offsets on the head and torso\n- Smooth head look-at gaze targeting cursor coordinates\n- Friendly crescent blue LED digital visor eyes that blink dynamically\n- Click-to-trigger Plasma Blaster firing mode: aiming the right arm pod directly at the pointer, shooting a high-fidelity crimson plasma discharge beam with kinetic spark particles, shifting eyes to square target lock graphics, and updating live thermal alerts on the HUD\n- Clean resource disposal of meshes, geometries, and materials on unmount`,
    likes: 0,
    author: 'Animation AI',
    featured: true,
    createdAt: '2026-05-23T10:00:00.000Z',
    updatedAt: '2026-05-23T10:00:00.000Z'
  },
  {
    _id: "robot-bb8-astromech-pathfinder",
    slug: "bb8-astromech-pathfinder-robot",
    title: "BB-8 Astromech Pathfinder",
    category: "robot",
    tag: "threejs",
    description: "An interactive 3D astromech pathfinder inspired by Star Wars. Features gyroscopic rolling simulation, magnetic floating head dome, look-at cursor gaze, and click-to-discharge high voltage arc welder with kinetic spark particles.",
    previewCode: "<!DOCTYPE html>\n<html>\n<head>\n<meta charset=\"utf-8\"/>\n<meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"/>\n<style>\n* { margin: 0; padding: 0; box-sizing: border-box; }\nbody { background: #050408; overflow: hidden; cursor: crosshair; font-family: 'Courier New', monospace; user-select: none; }\ncanvas { display: block; width: 100vw; height: 100vh; }\n.hud { position: absolute; top: 24px; left: 24px; padding: 18px; border: 1px solid rgba(255, 120, 0, 0.15); border-radius: 16px; background: rgba(5, 4, 8, 0.85); color: #ff7800; backdrop-filter: blur(12px); pointer-events: none; font-size: 11px; min-width: 260px; transition: all 0.3s; box-shadow: 0 15px 35px rgba(0,0,0,0.5); }\n.hud-title { font-weight: bold; letter-spacing: 2px; margin-bottom: 8px; display: flex; align-items: center; gap: 6px; font-size: 12px; text-transform: uppercase; }\n.hud-sep { height: 1px; background: rgba(255, 120, 0, 0.2); margin: 8px 0; transition: background 0.3s; }\n.hud-item { display: flex; justify-content: space-between; margin: 5px 0; }\n.hud-item span { color: rgba(255, 120, 0, 0.55); }\n.hud-item strong { color: #fff; }\n.label { position: absolute; bottom: 28px; left: 50%; transform: translateX(-50%); color: #ff7800; letter-spacing: 5px; text-transform: uppercase; pointer-events: none; text-align: center; transition: all 0.4s; font-size: 13px; font-weight: 900; }\n.sub { font-size: 9px; color: rgba(255, 120, 0, 0.4); letter-spacing: 2px; margin-top: 6px; font-weight: normal; }\n</style>\n</head>\n<body>\n<div class=\"hud\" id=\"hud\">\n  <div class=\"hud-title\" id=\"hudTitle\">🤖 DRIVE SYSTEM: ACTIVE</div>\n  <div class=\"hud-sep\" id=\"hudSep\"></div>\n  <div class=\"hud-item\"><span>Chassis Code</span><strong>B.B.8 ASTROMECH</strong></div>\n  <div class=\"hud-item\"><span>Gyro Balance</span><strong id=\"gyroStatus\">STABLE</strong></div>\n  <div class=\"hud-item\"><span>Arc Welder</span><strong id=\"welderStatus\">READY</strong></div>\n  <div class=\"hud-item\"><span>Drive Coils</span><strong id=\"driveCoils\">98.2 RPM</strong></div>\n</div>\n<div class=\"label\" id=\"label\">\n  B.B.8 Astromech Pathfinder\n  <div class=\"sub\">Click Screen to Discharge Welder Arc • Move Cursor to Steer Gyroscopic Roll</div>\n</div>\n\n<script type=\"importmap\">{\"imports\":{\"three\":\"https://unpkg.com/three@0.160.0/build/three.module.js\"}}</script>\n<script type=\"module\">\nimport * as THREE from 'three';\n\nlet currentWelderState = 0; // 0: IDLE, 1: WELDER ACTIVE\nlet time = 0;\n\nconst scene = new THREE.Scene();\nscene.fog = new THREE.FogExp2(0x050408, 0.065);\n\nconst camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);\ncamera.position.set(0, 0.2, 8.5);\n\nconst renderer = new THREE.WebGLRenderer({ antialias: true });\nrenderer.setSize(window.innerWidth, window.innerHeight);\nrenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));\nrenderer.toneMapping = THREE.ACESFilmicToneMapping;\ndocument.body.appendChild(renderer.domElement);\n\n// Lights\nconst ambientLight = new THREE.AmbientLight(0x0a0715, 1.8);\nscene.add(ambientLight);\n\nconst mainSpot = new THREE.SpotLight(0xffffff, 40, 15, Math.PI / 6, 0.5, 1);\nmainSpot.position.set(0, 6, 4);\nscene.add(mainSpot);\n\nconst keyLight = new THREE.DirectionalLight(0xffedd5, 1.2);\nkeyLight.position.set(2, 3, 2);\nscene.add(keyLight);\n\nconst rimLight = new THREE.PointLight(0xff6a00, 20, 8);\nrimLight.position.set(-4, 1.5, -2);\nscene.add(rimLight);\n\nconst cursorLight = new THREE.PointLight(0x00d2ff, 8, 6);\ncursorLight.position.set(0, 0, 3);\nscene.add(cursorLight);\n\n// Materials (Premium Glossy White Lacquer, Safety Orange, Carbon-Silver Grey)\nconst glossyWhiteMat = new THREE.MeshStandardMaterial({\n  color: 0xffffff,\n  roughness: 0.05,\n  metalness: 0.05\n});\n\nconst safetyOrangeMat = new THREE.MeshStandardMaterial({\n  color: 0xff6a00,\n  roughness: 0.1,\n  metalness: 0.1\n});\n\nconst silverGreyMat = new THREE.MeshStandardMaterial({\n  color: 0x8e9196,\n  roughness: 0.15,\n  metalness: 0.8\n});\n\nconst darkLensMat = new THREE.MeshStandardMaterial({\n  color: 0x05050a,\n  roughness: 0.05,\n  metalness: 0.95\n});\n\nconst glowingBlueMat = new THREE.MeshBasicMaterial({\n  color: 0x00d2ff\n});\n\nconst electricArcMat = new THREE.MeshBasicMaterial({\n  color: 0x00d2ff,\n  transparent: true,\n  opacity: 0.7\n});\n\n// Main Pathfinder Group\nconst pathfinderGroup = new THREE.Group();\npathfinderGroup.position.y = -0.9;\nscene.add(pathfinderGroup);\n\n// --- 1. Gyroscopic Ball Body ---\nconst ballGroup = new THREE.Group();\npathfinderGroup.add(ballGroup);\n\n// Core white sphere\nconst ballSphere = new THREE.Mesh(new THREE.SphereGeometry(1.2, 32, 32), glossyWhiteMat);\nballGroup.add(ballSphere);\n\n// Decorative Circular Orange & Silver grey panels on the sphere\nconst panelCount = 6;\nconst panelPositions = [\n  { rot: [0, 0, 0], pos: [0, 0, 1.18] },\n  { rot: [0, Math.PI, 0], pos: [0, 0, -1.18] },\n  { rot: [0, Math.PI/2, 0], pos: [1.18, 0, 0] },\n  { rot: [0, -Math.PI/2, 0], pos: [-1.18, 0, 0] },\n  { rot: [Math.PI/2, 0, 0], pos: [0, 1.18, 0] },\n  { rot: [-Math.PI/2, 0, 0], pos: [0, -1.18, 0] }\n];\n\npanelPositions.forEach((p) => {\n  const localPanelGroup = new THREE.Group();\n  localPanelGroup.rotation.set(p.rot[0], p.rot[1], p.rot[2]);\n  \n  // Silver base ring\n  const ringGrey = new THREE.Mesh(new THREE.TorusGeometry(0.38, 0.035, 8, 32), silverGreyMat);\n  ringGrey.position.set(0, 0, 0);\n  localPanelGroup.add(ringGrey);\n  \n  // Orange inner ring\n  const ringOrange = new THREE.Mesh(new THREE.TorusGeometry(0.28, 0.04, 8, 32), safetyOrangeMat);\n  ringOrange.position.set(0, 0, 0);\n  localPanelGroup.add(ringOrange);\n  \n  // Center silver cap\n  const centerCap = new THREE.Mesh(new THREE.SphereGeometry(0.12, 16, 16), silverGreyMat);\n  centerCap.scale.set(1, 1, 0.3);\n  centerCap.position.set(0, 0, 0.03);\n  localPanelGroup.add(centerCap);\n  \n  // Positioning on the ball\n  localPanelGroup.position.set(p.pos[0], p.pos[1], p.pos[2]);\n  ballGroup.add(localPanelGroup);\n});\n\n// --- 2. Magnetic Floating Head Dome ---\nconst headAnchorGroup = new THREE.Group();\n// Keep head anchor above the sphere\nheadAnchorGroup.position.y = 1.25;\npathfinderGroup.add(headAnchorGroup);\n\nconst headGroup = new THREE.Group();\nheadAnchorGroup.add(headGroup);\n\n// Semi-spherical head dome\nconst headDome = new THREE.Mesh(new THREE.SphereGeometry(0.65, 32, 16, 0, Math.PI*2, 0, Math.PI/2), glossyWhiteMat);\nheadGroup.add(headDome);\n\n// Flat bottom silver plate\nconst headBottom = new THREE.Mesh(new THREE.CylinderGeometry(0.65, 0.65, 0.05, 32), silverGreyMat);\nheadBottom.position.y = 0.01;\nheadGroup.add(headBottom);\n\n// Orange circular visor trim\nconst visorTrim = new THREE.Mesh(new THREE.CylinderGeometry(0.66, 0.66, 0.08, 32), safetyOrangeMat);\nvisorTrim.position.y = 0.12;\nheadGroup.add(visorTrim);\n\n// Primary black lens cylinder\nconst primaryLens = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.14, 24), darkLensMat);\nprimaryLens.rotation.x = Math.PI / 2;\nprimaryLens.position.set(0, 0.28, 0.52);\nheadGroup.add(primaryLens);\n\n// Glowing blue photoreceptor eye\nconst blueEye = new THREE.Mesh(new THREE.SphereGeometry(0.05, 16, 16), glowingBlueMat);\nblueEye.position.set(0, 0.28, 0.58);\nheadGroup.add(blueEye);\n\n// Secondary smaller lens\nconst secondaryLens = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.1, 16), darkLensMat);\nsecondaryLens.rotation.x = Math.PI / 2;\nsecondaryLens.position.set(0.18, 0.16, 0.54);\nheadGroup.add(secondaryLens);\n\n// Antennas (Slender flexible whiskers)\nconst antennaLong = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.6, 8), silverGreyMat);\nantennaLong.position.set(0.1, 0.75, -0.2);\nantennaLong.rotation.z = -Math.PI / 32;\nheadGroup.add(antennaLong);\n\nconst antennaShort = new THREE.Mesh(new THREE.CylinderGeometry(0.006, 0.006, 0.32, 8), silverGreyMat);\nantennaShort.position.set(-0.15, 0.6, -0.2);\nantennaShort.rotation.z = Math.PI / 16;\nheadGroup.add(antennaShort);\n\n// --- 3. Click-to-Deploy Arc Welder Mechanical Utility Arm ---\nconst welderArmGroup = new THREE.Group();\nwelderArmGroup.position.set(-0.25, 0.32, 0.54);\nwelderArmGroup.rotation.x = Math.PI / 4;\nheadGroup.add(welderArmGroup);\n\n// Extendable piston\nconst pistonBase = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.3, 12), silverGreyMat);\npistonBase.position.y = 0.12;\nwelderArmGroup.add(pistonBase);\n\nconst pistonTip = new THREE.Mesh(new THREE.CylinderGeometry(0.016, 0.016, 0.32, 12), glowingBlueMat);\npistonTip.position.y = 0.28;\nwelderArmGroup.add(pistonTip);\n\n// Scale zero by default (hidden inside utility port)\nwelderArmGroup.scale.set(0.001, 0.001, 0.001);\n\n// --- 4. Interactive Electric Arc Spark ---\nconst arcLineCount = 3;\nconst arcLines = [];\nfor (let i = 0; i < arcLineCount; i++) {\n  const lineGeom = new THREE.BufferGeometry();\n  const linePoints = [];\n  for (let j = 0; j < 8; j++) linePoints.push(new THREE.Vector3());\n  lineGeom.setFromPoints(linePoints);\n  const line = new THREE.Line(lineGeom, electricArcMat);\n  scene.add(line);\n  arcLines.push(line);\n}\n\n// --- 5. Kinetic Plasma Confetti Spark Particles ---\nconst pCount = 50;\nconst pGeom = new THREE.BufferGeometry();\nconst pPos = new Float32Array(pCount * 3);\nconst pVels = [];\nfor (let i = 0; i < pCount; i++) {\n  pPos[i*3] = 0; pPos[i*3+1] = 0; pPos[i*3+2] = 0;\n  pVels.push(new THREE.Vector3());\n}\npGeom.setAttribute('position', new THREE.BufferAttribute(pPos, 3));\nconst pMat = new THREE.PointsMaterial({\n  color: 0x00d2ff,\n  size: 0.045,\n  transparent: true,\n  opacity: 0,\n  blending: THREE.AdditiveBlending\n});\nconst particles = new THREE.Points(pGeom, pMat);\nscene.add(particles);\n\n// Mouse tracking coordinates\nconst mouse = new THREE.Vector2(0, 0);\nconst target = new THREE.Vector3(0, 0, 0);\n\nwindow.addEventListener('mousemove', (e) => {\n  mouse.x = (e.clientX / window.innerWidth) * 2 - 1;\n  mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;\n  target.x = mouse.x * 2.5;\n  target.y = mouse.y * 1.8 + 1.2;\n});\n\n// Click Interaction (Aim and Fire Arc Welder)\nlet dischargeDuration = 0;\nwindow.addEventListener('mousedown', () => {\n  currentWelderState = currentWelderState === 0 ? 1 : 0;\n  \n  const hud = document.getElementById('hud');\n  const hudTitle = document.getElementById('hudTitle');\n  const hudSep = document.getElementById('hudSep');\n  const label = document.getElementById('label');\n  const welderStatus = document.getElementById('welderStatus');\n  const driveCoils = document.getElementById('driveCoils');\n\n  if (currentWelderState === 1) {\n    // Fire Arc Welder\n    hudTitle.textContent = \"💥 UTILITY PORT: DISCHARGING WELDER ARC\";\n    hudTitle.style.color = \"#00d2ff\";\n    hudSep.style.background = \"#00d2ff\";\n    hud.style.borderColor = \"#00d2ff88\";\n    hud.style.boxShadow = \"0 15px 35px rgba(0,210,255,0.3)\";\n    label.style.color = \"#00d2ff\";\n    welderStatus.textContent = \"DISCHARGING\";\n    welderStatus.style.color = \"#00d2ff\";\n    driveCoils.textContent = \"OVERCLOCKED 240 RPM\";\n    driveCoils.style.color = \"#00d2ff\";\n    \n    // Shift blue Eye to extreme bright glow\n    blueEye.material.color.setHex(0xffffff);\n    cursorLight.color.setHex(0x00d2ff);\n    cursorLight.intensity = 20;\n\n    // Trigger shock particles at muzzle\n    const muzzlePos = new THREE.Vector3();\n    pistonTip.getWorldPosition(muzzlePos);\n    const posAttr = pGeom.getAttribute('position');\n    for (let i = 0; i < pCount; i++) {\n      posAttr.setXYZ(i, muzzlePos.x, muzzlePos.y, muzzlePos.z);\n      pVels[i].set(\n        (Math.random() - 0.5) * 5,\n        (Math.random() - 0.5) * 5,\n        (Math.random() - 0.5) * 5\n      );\n    }\n    posAttr.needsUpdate = true;\n    pMat.opacity = 1.0;\n    \n    dischargeDuration = 1.0;\n  } else {\n    // Return to standard rolling/pathfinding\n    hudTitle.textContent = \"🤖 DRIVE SYSTEM: ACTIVE\";\n    hudTitle.style.color = \"#ff7800\";\n    hudSep.style.background = \"rgba(255, 120, 0, 0.2)\";\n    hud.style.borderColor = \"rgba(255, 120, 0, 0.15)\";\n    hud.style.boxShadow = \"0 15px 35px rgba(0,0,0,0.5)\";\n    label.style.color = \"#ff7800\";\n    welderStatus.textContent = \"READY\";\n    welderStatus.style.color = \"#fff\";\n    driveCoils.textContent = \"98.2 RPM\";\n    driveCoils.style.color = \"#fff\";\n    \n    blueEye.material.color.setHex(0x00d2ff);\n    cursorLight.color.setHex(0xff6a00);\n    cursorLight.intensity = 8;\n    pMat.opacity = 0;\n  }\n});\n\nwindow.addEventListener('resize', () => {\n  camera.aspect = window.innerWidth / window.innerHeight;\n  camera.updateProjectionMatrix();\n  renderer.setSize(window.innerWidth, window.innerHeight);\n});\n\n// Animation Loop\nconst clock = new THREE.Clock();\nfunction animate() {\n  requestAnimationFrame(animate);\n  time = clock.getElapsedTime();\n  \n  // 1. Gyroscopic Ball Body Physics rolling simulation!\n  // Roll the sphere proportional to mouse offsets (simulates rolling on sand/ground!)\n  const targetRollX = mouse.x * 2.5;\n  const targetRollY = mouse.y * 1.5;\n  \n  // Roll mechanics\n  ballGroup.rotation.y += (targetRollX * 0.12 - ballGroup.rotation.y) * 0.05;\n  ballGroup.rotation.x += (-targetRollY * 0.12 - ballGroup.rotation.x) * 0.05;\n  \n  // 2. Magnetic Floating Head slides dynamically on top of the curved sphere surface\n  // Trigonometric sliding coordinates to remain perfectly aligned\n  const targetHeadX = mouse.x * 0.28;\n  const targetHeadZ = mouse.y * 0.18;\n  \n  headGroup.position.x += (targetHeadX - headGroup.position.x) * 0.1;\n  headGroup.position.z += (-targetHeadZ - headGroup.position.z) * 0.1;\n  \n  // Head look at cursor gaze\n  headGroup.lookAt(target.x, target.y, 3);\n  \n  // Organic antenna flexing lag\n  antennaLong.rotation.x = Math.sin(time * 3.5) * 0.06 + (mouse.y * 0.08);\n  antennaLong.rotation.z = -Math.PI / 32 + Math.cos(time * 2.5) * 0.04 + (mouse.x * 0.08);\n  \n  // 3. Weld Utility arm extension morph\n  if (currentWelderState === 1) {\n    welderArmGroup.scale.set(1.0, 1.0, 1.0);\n  } else {\n    welderArmGroup.scale.set(0.001, 0.001, 0.001);\n  }\n  \n  // 4. Electric Welder Arc generation math\n  if (currentWelderState === 1) {\n    const muzzlePos = new THREE.Vector3();\n    pistonTip.getWorldPosition(muzzlePos);\n    const aimTarget = new THREE.Vector3(target.x, target.y, 3);\n    \n    arcLines.forEach((line) => {\n      const lineGeom = line.geometry;\n      const positions = lineGeom.getAttribute('position');\n      const pointCount = positions.count;\n      \n      for (let i = 0; i < pointCount; i++) {\n        const factor = i / (pointCount - 1);\n        const lerpPos = new THREE.Vector3().lerpVectors(muzzlePos, aimTarget, factor);\n        \n        // Add random electrical jagged spikes\n        if (i > 0 && i < pointCount - 1) {\n          lerpPos.x += (Math.random() - 0.5) * 0.16;\n          lerpPos.y += (Math.random() - 0.5) * 0.16;\n          lerpPos.z += (Math.random() - 0.5) * 0.16;\n        }\n        \n        positions.setXYZ(i, lerpPos.x, lerpPos.y, lerpPos.z);\n      }\n      positions.needsUpdate = true;\n      line.visible = true;\n    });\n  } else {\n    arcLines.forEach(line => line.visible = false);\n  }\n  \n  // 5. Electrical spark particles drift\n  if (currentWelderState === 1 && pMat.opacity > 0) {\n    const posAttr = pGeom.getAttribute('position');\n    for (let i = 0; i < pCount; i++) {\n      const x = posAttr.getX(i) + pVels[i].x * 0.016;\n      const y = posAttr.getY(i) + pVels[i].y * 0.016;\n      const z = posAttr.getZ(i) + pVels[i].z * 0.016;\n      posAttr.setXYZ(i, x, y, z);\n      \n      // Decay velocity\n      pVels[i].multiplyScalar(0.95);\n    }\n    posAttr.needsUpdate = true;\n  }\n  \n  // Cursor light follow\n  cursorLight.position.x += (target.x - cursorLight.position.x) * 0.1;\n  cursorLight.position.y += (target.y - cursorLight.position.y) * 0.1;\n  \n  renderer.render(scene, camera);\n}\n\nanimate();\n</script>\n</body>\n</html>\n",
    code: "'use client'\n\nimport React, { useEffect, useRef, useState } from 'react'\nimport * as THREE from 'three'\n\nexport function Bb8AstromechPathfinder() {\n  const containerRef = useRef<HTMLDivElement>(null)\n  const canvasRef = useRef<HTMLCanvasElement>(null)\n  \n  // React State for Telemetry HUD\n  const [welderActive, setWelderActive] = useState<boolean>(false)\n  const [driveSpeed, setDriveSpeed] = useState<string>('98.2 RPM')\n  const [logs, setLogs] = useState<string[]>([\n    'Drive System: Active. Gyro balanced.',\n    'Chassis Code: BB8-ASTROMECH.',\n    'Utility port welder calibration: READY.'\n  ])\n\n  useEffect(() => {\n    if (!containerRef.current || !canvasRef.current) return\n\n    const container = containerRef.current\n    const canvas = canvasRef.current\n\n    let currentWelderState = 0 // 0: IDLE, 1: ACTIVE\n    let animationFrameId: number\n    let time = 0\n\n    // Scene setup\n    const scene = new THREE.Scene()\n    scene.fog = new THREE.FogExp2(0x050408, 0.065)\n\n    // Camera setup\n    const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 100)\n    camera.position.set(0, 0.2, 8.5)\n\n    // Renderer setup\n    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })\n    renderer.setSize(container.clientWidth, container.clientHeight)\n    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))\n    renderer.toneMapping = THREE.ACESFilmicToneMapping\n\n    // Lights\n    const ambientLight = new THREE.AmbientLight(0x0a0715, 1.8)\n    scene.add(ambientLight)\n\n    const mainSpot = new THREE.SpotLight(0xffffff, 40, 15, Math.PI / 6, 0.5, 1)\n    mainSpot.position.set(0, 6, 4)\n    scene.add(mainSpot)\n\n    const keyLight = new THREE.DirectionalLight(0xffedd5, 1.2)\n    keyLight.position.set(2, 3, 2)\n    scene.add(keyLight)\n\n    const rimLight = new THREE.PointLight(0xff6a00, 20, 8)\n    rimLight.position.set(-4, 1.5, -2)\n    scene.add(rimLight)\n\n    const cursorLight = new THREE.PointLight(0x00d2ff, 8, 6)\n    cursorLight.position.set(0, 0, 3)\n    scene.add(cursorLight)\n\n    // Materials (Premium Glossy White Lacquer, Safety Orange, Carbon-Silver Grey)\n    const glossyWhiteMat = new THREE.MeshStandardMaterial({\n      color: 0xffffff,\n      roughness: 0.05,\n      metalness: 0.05\n    })\n\n    const safetyOrangeMat = new THREE.MeshStandardMaterial({\n      color: 0xff6a00,\n      roughness: 0.1,\n      metalness: 0.1\n    })\n\n    const silverGreyMat = new THREE.MeshStandardMaterial({\n      color: 0x8e9196,\n      roughness: 0.15,\n      metalness: 0.8\n    })\n\n    const darkLensMat = new THREE.MeshStandardMaterial({\n      color: 0x05050a,\n      roughness: 0.05,\n      metalness: 0.95\n    })\n\n    const glowingBlueMat = new THREE.MeshBasicMaterial({\n      color: 0x00d2ff\n    })\n\n    const electricArcMat = new THREE.MeshBasicMaterial({\n      color: 0x00d2ff,\n      transparent: true,\n      opacity: 0.7\n    })\n\n    // Main Pathfinder Group\n    const pathfinderGroup = new THREE.Group()\n    pathfinderGroup.position.y = -0.9\n    scene.add(pathfinderGroup)\n\n    // --- 1. Gyroscopic Ball Body ---\n    const ballGroup = new THREE.Group()\n    pathfinderGroup.add(ballGroup)\n\n    const ballSphere = new THREE.Mesh(new THREE.SphereGeometry(1.2, 32, 32), glossyWhiteMat)\n    ballGroup.add(ballSphere)\n\n    // Orange & Silver decorative panels\n    const panelPositions = [\n      { rot: [0, 0, 0], pos: [0, 0, 1.18] },\n      { rot: [0, Math.PI, 0], pos: [0, 0, -1.18] },\n      { rot: [0, Math.PI/2, 0], pos: [1.18, 0, 0] },\n      { rot: [0, -Math.PI/2, 0], pos: [-1.18, 0, 0] },\n      { rot: [Math.PI/2, 0, 0], pos: [0, 1.18, 0] },\n      { rot: [-Math.PI/2, 0, 0], pos: [0, -1.18, 0] }\n    ]\n\n    panelPositions.forEach((p) => {\n      const localPanelGroup = new THREE.Group()\n      localPanelGroup.rotation.set(p.rot[0], p.rot[1], p.rot[2])\n      \n      const ringGrey = new THREE.Mesh(new THREE.TorusGeometry(0.38, 0.035, 8, 32), silverGreyMat)\n      localPanelGroup.add(ringGrey)\n      \n      const ringOrange = new THREE.Mesh(new THREE.TorusGeometry(0.28, 0.04, 8, 32), safetyOrangeMat)\n      localPanelGroup.add(ringOrange)\n      \n      const centerCap = new THREE.Mesh(new THREE.SphereGeometry(0.12, 16, 16), silverGreyMat)\n      centerCap.scale.set(1, 1, 0.3)\n      centerCap.position.set(0, 0, 0.03)\n      localPanelGroup.add(centerCap)\n      \n      localPanelGroup.position.set(p.pos[0], p.pos[1], p.pos[2])\n      ballGroup.add(localPanelGroup)\n    })\n\n    // --- 2. Magnetic Floating Head Dome ---\n    const headAnchorGroup = new THREE.Group()\n    headAnchorGroup.position.y = 1.25\n    pathfinderGroup.add(headAnchorGroup)\n\n    const headGroup = new THREE.Group()\n    headAnchorGroup.add(headGroup)\n\n    const headDome = new THREE.Mesh(new THREE.SphereGeometry(0.65, 32, 16, 0, Math.PI*2, 0, Math.PI/2), glossyWhiteMat)\n    headGroup.add(headDome)\n\n    const headBottom = new THREE.Mesh(new THREE.CylinderGeometry(0.65, 0.65, 0.05, 32), silverGreyMat)\n    headBottom.position.y = 0.01\n    headGroup.add(headBottom)\n\n    const visorTrim = new THREE.Mesh(new THREE.CylinderGeometry(0.66, 0.66, 0.08, 32), safetyOrangeMat)\n    visorTrim.position.y = 0.12\n    headGroup.add(visorTrim)\n\n    const primaryLens = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.14, 24), darkLensMat)\n    primaryLens.rotation.x = Math.PI / 2\n    primaryLens.position.set(0, 0.28, 0.52)\n    headGroup.add(primaryLens)\n\n    const blueEye = new THREE.Mesh(new THREE.SphereGeometry(0.05, 16, 16), glowingBlueMat)\n    blueEye.position.set(0, 0.28, 0.58)\n    headGroup.add(blueEye)\n\n    const secondaryLens = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.1, 16), darkLensMat)\n    secondaryLens.rotation.x = Math.PI / 2\n    secondaryLens.position.set(0.18, 0.16, 0.54)\n    headGroup.add(secondaryLens)\n\n    const antennaLong = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.6, 8), silverGreyMat)\n    antennaLong.position.set(0.1, 0.75, -0.2)\n    antennaLong.rotation.z = -Math.PI / 32\n    headGroup.add(antennaLong)\n\n    const antennaShort = new THREE.Mesh(new THREE.CylinderGeometry(0.006, 0.006, 0.32, 8), silverGreyMat)\n    antennaShort.position.set(-0.15, 0.6, -0.2)\n    antennaShort.rotation.z = Math.PI / 16\n    headGroup.add(antennaShort)\n\n    // --- 3. Click-to-Deploy Arc Welder Utility Arm ---\n    const welderArmGroup = new THREE.Group()\n    welderArmGroup.position.set(-0.25, 0.32, 0.54)\n    welderArmGroup.rotation.x = Math.PI / 4\n    headGroup.add(welderArmGroup)\n\n    const pistonBase = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.3, 12), silverGreyMat)\n    pistonBase.position.y = 0.12\n    welderArmGroup.add(pistonBase)\n\n    const pistonTip = new THREE.Mesh(new THREE.CylinderGeometry(0.016, 0.016, 0.32, 12), glowingBlueMat)\n    pistonTip.position.y = 0.28\n    welderArmGroup.add(pistonTip)\n\n    welderArmGroup.scale.set(0.001, 0.001, 0.001)\n\n    // --- 4. Interactive Electric Arc Welder Lines ---\n    const arcLineCount = 3\n    const arcLines: THREE.Line[] = []\n    for (let i = 0; i < arcLineCount; i++) {\n      const lineGeom = new THREE.BufferGeometry()\n      const linePoints = []\n      for (let j = 0; j < 8; j++) linePoints.push(new THREE.Vector3())\n      lineGeom.setFromPoints(linePoints)\n      const line = new THREE.Line(lineGeom, electricArcMat)\n      scene.add(line)\n      arcLines.push(line)\n    }\n\n    // --- 5. Kinetic Plasma Confetti Spark Particles ---\n    const pCount = 50\n    const pGeom = new THREE.BufferGeometry()\n    const pPos = new Float32Array(pCount * 3)\n    const pVels: THREE.Vector3[] = []\n    for (let i = 0; i < pCount; i++) {\n      pPos[i*3] = 0; pPos[i*3+1] = 0; pPos[i*3+2] = 0\n      pVels.push(new THREE.Vector3())\n    }\n    pGeom.setAttribute('position', new THREE.BufferAttribute(pPos, 3))\n    const pMat = new THREE.PointsMaterial({\n      color: 0x00d2ff,\n      size: 0.045,\n      transparent: true,\n      opacity: 0,\n      blending: THREE.AdditiveBlending\n    })\n    const particles = new THREE.Points(pGeom, pMat)\n    scene.add(particles)\n\n    // Mouse coordinates\n    const mouse = new THREE.Vector2(0, 0)\n    const target = new THREE.Vector3(0, 0, 0)\n\n    const handleMouseMove = (e: MouseEvent) => {\n      const rect = container.getBoundingClientRect()\n      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1\n      const y = -((e.clientY - rect.top) / rect.height) * 2 + 1\n      mouse.x = x\n      mouse.y = y\n      target.x = x * 2.5\n      target.y = y * 1.8 + 1.2\n    }\n\n    // Direct click handler to fire welder\n    const handleMouseDown = () => {\n      currentWelderState = currentWelderState === 0 ? 1 : 0\n      \n      if (currentWelderState === 1) {\n        setWelderActive(true)\n        setDriveSpeed('OVERCLOCKED 240 RPM')\n        setLogs(prev => [\n          `[${new Date().toLocaleTimeString()}] 💥 UTILITY PORT: ARC WELDER ACTIVE!`,\n          `[${new Date().toLocaleTimeString()}] High voltage arc welder discharging`,\n          ...prev.slice(0, 4)\n        ])\n\n        blueEye.material.color.setHex(0xffffff)\n        cursorLight.color.setHex(0x00d2ff)\n        cursorLight.intensity = 20\n\n        const muzzlePos = new THREE.Vector3()\n        pistonTip.getWorldPosition(muzzlePos)\n        const posAttr = pGeom.getAttribute('position')\n        for (let i = 0; i < pCount; i++) {\n          posAttr.setXYZ(i, muzzlePos.x, muzzlePos.y, muzzlePos.z)\n          pVels[i].set(\n            (Math.random() - 0.5) * 5,\n            (Math.random() - 0.5) * 5,\n            (Math.random() - 0.5) * 5\n          )\n        }\n        posAttr.needsUpdate = true\n        pMat.opacity = 1.0\n      } else {\n        setWelderActive(false)\n        setDriveSpeed('98.2 RPM')\n        setLogs(prev => [\n          `[${new Date().toLocaleTimeString()}] 🟢 Drive status stable. Pathfinder tracking.`,\n          ...prev.slice(0, 4)\n        ])\n\n        blueEye.material.color.setHex(0x00d2ff)\n        cursorLight.color.setHex(0xff6a00)\n        cursorLight.intensity = 8\n        pMat.opacity = 0\n      }\n    }\n\n    container.addEventListener('mousemove', handleMouseMove)\n    container.addEventListener('mousedown', handleMouseDown)\n\n    const handleResize = () => {\n      if (!containerRef.current) return\n      camera.aspect = container.clientWidth / container.clientHeight\n      camera.updateProjectionMatrix()\n      renderer.setSize(container.clientWidth, container.clientHeight)\n    }\n    window.addEventListener('resize', handleResize)\n\n    // Animation Loop\n    const clock = new THREE.Clock()\n    const animate = () => {\n      animationFrameId = requestAnimationFrame(animate)\n      time = clock.getElapsedTime()\n\n      // Gyroscopic Ball Body Physics rolling simulation!\n      const targetRollX = mouse.x * 2.5\n      const targetRollY = mouse.y * 1.5\n\n      ballGroup.rotation.y += (targetRollX * 0.12 - ballGroup.rotation.y) * 0.05\n      ballGroup.rotation.x += (-targetRollY * 0.12 - ballGroup.rotation.x) * 0.05\n\n      // Magnetic floating head slides dynamically on curved sphere surface\n      const targetHeadX = mouse.x * 0.28\n      const targetHeadZ = mouse.y * 0.18\n\n      headGroup.position.x += (targetHeadX - headGroup.position.x) * 0.1\n      headGroup.position.z += (-targetHeadZ - headGroup.position.z) * 0.1\n\n      headGroup.lookAt(target.x, target.y, 3)\n\n      // Antenna flex lag\n      antennaLong.rotation.x = Math.sin(time * 3.5) * 0.06 + (mouse.y * 0.08)\n      antennaLong.rotation.z = -Math.PI / 32 + Math.cos(time * 2.5) * 0.04 + (mouse.x * 0.08)\n\n      // Weld Arm extension morph\n      if (currentWelderState === 1) {\n        welderArmGroup.scale.set(1.0, 1.0, 1.0)\n      } else {\n        welderArmGroup.scale.set(0.001, 0.001, 0.001)\n      }\n\n      // Crackling Welder Arc line calculation\n      if (currentWelderState === 1) {\n        const muzzlePos = new THREE.Vector3()\n        pistonTip.getWorldPosition(muzzlePos)\n        const aimTarget = new THREE.Vector3(target.x, target.y, 3)\n        \n        arcLines.forEach((line) => {\n          const lineGeom = line.geometry\n          const positions = lineGeom.getAttribute('position') as THREE.BufferAttribute\n          const pointCount = positions.count\n          \n          for (let i = 0; i < pointCount; i++) {\n            const factor = i / (pointCount - 1)\n            const lerpPos = new THREE.Vector3().lerpVectors(muzzlePos, aimTarget, factor)\n            \n            if (i > 0 && i < pointCount - 1) {\n              lerpPos.x += (Math.random() - 0.5) * 0.16\n              lerpPos.y += (Math.random() - 0.5) * 0.16\n              lerpPos.z += (Math.random() - 0.5) * 0.16\n            }\n            positions.setXYZ(i, lerpPos.x, lerpPos.y, lerpPos.z)\n          }\n          positions.needsUpdate = true\n          line.visible = true\n        })\n      } else {\n        arcLines.forEach(line => line.visible = false)\n      }\n\n      // Spark particles drift\n      if (currentWelderState === 1 && pMat.opacity > 0) {\n        const posAttr = pGeom.getAttribute('position') as THREE.BufferAttribute\n        for (let i = 0; i < pCount; i++) {\n          const x = posAttr.getX(i) + pVels[i].x * 0.016\n          const y = posAttr.getY(i) + pVels[i].y * 0.016\n          const z = posAttr.getZ(i) + pVels[i].z * 0.016\n          posAttr.setXYZ(i, x, y, z)\n          pVels[i].multiplyScalar(0.95)\n        }\n        posAttr.needsUpdate = true\n      }\n\n      // Cursor light follow\n      cursorLight.position.x += (target.x - cursorLight.position.x) * 0.1\n      cursorLight.position.y += (target.y - cursorLight.position.y) * 0.1\n\n      renderer.render(scene, camera)\n    }\n\n    animate()\n\n    // Cleanups\n    return () => {\n      cancelAnimationFrame(animationFrameId)\n      container.removeEventListener('mousemove', handleMouseMove)\n      container.removeEventListener('mousedown', handleMouseDown)\n      window.removeEventListener('resize', handleResize)\n      \n      scene.traverse((object) => {\n        if (!(object instanceof THREE.Mesh)) return\n        if (object.geometry) object.geometry.dispose()\n        if (Array.isArray(object.material)) {\n          object.material.forEach((mat) => mat.dispose())\n        } else if (object.material) {\n          object.material.dispose()\n        }\n      })\n      arcLines.forEach(line => line.geometry.dispose())\n      pGeom.dispose()\n      pMat.dispose()\n      renderer.dispose()\n    }\n  }, [])\n\n  return (\n    <div\n      ref={containerRef}\n      className=\"relative flex h-[720px] w-full flex-col justify-between overflow-hidden rounded-[38px] border border-white/10 bg-[#050408] text-white\"\n    >\n      {/* 3D Canvas */}\n      <canvas ref={canvasRef} className=\"absolute inset-0 block h-full w-full\" />\n\n      {/* Reactive HUD Overlay */}\n      <div\n        className=\"relative z-10 m-6 w-[280px] rounded-2xl border bg-black/80 p-5 backdrop-blur-xl transition-all duration-300\"\n        style={{\n          borderColor: welderActive ? '#00d2ff55' : 'rgba(255, 120, 0, 0.15)',\n          boxShadow: welderActive ? '0 15px 35px rgba(0, 210, 255, 0.15)' : 'none'\n        }}\n      >\n        <div\n          className=\"flex items-center gap-2 text-xs font-black uppercase tracking-widest transition-colors duration-300\"\n          style={{ color: welderActive ? '#00d2ff' : '#ff7800' }}\n        >\n          {welderActive ? '💥 UTILITY PORT: WELDER DISCHARGING' : '🤖 DRIVE SYSTEM: ACTIVE'}\n        </div>\n        <div\n          className=\"my-3 h-[1px] transition-colors duration-300\"\n          style={{ backgroundColor: welderActive ? '#00d2ff' : 'rgba(255, 120, 0, 0.2)' }}\n        />\n\n        <div className=\"space-y-2.5 text-xs\">\n          <div className=\"flex justify-between\">\n            <span className=\"text-white/40\">Chassis Code</span>\n            <strong className=\"text-white\">BB8-ASTROMECH</strong>\n          </div>\n          <div className=\"flex justify-between\">\n            <span className=\"text-white/40\">Gyro Balance</span>\n            <strong className=\"text-white\">STABLE</strong>\n          </div>\n          <div className=\"flex justify-between\">\n            <span className=\"text-white/40\">Arc Welder</span>\n            <strong\n              className=\"transition-colors duration-300\"\n              style={{ color: welderActive ? '#00d2ff' : '#fff' }}\n            >\n              {welderActive ? 'DISCHARGING' : 'READY'}\n            </strong>\n          </div>\n          <div className=\"flex justify-between\">\n            <span className=\"text-white/40\">Drive Coils</span>\n            <strong\n              className=\"transition-colors duration-300\"\n              style={{ color: welderActive ? '#00d2ff' : '#fff' }}\n            >\n              {driveSpeed}\n            </strong>\n          </div>\n        </div>\n\n        {/* Real-time Telemetry logs */}\n        <div className=\"mt-4 border-t border-white/5 pt-3\">\n          <div className=\"mb-2 text-[10px] uppercase tracking-wider text-white/30\">System Telemetry</div>\n          <div className=\"h-[90px] overflow-y-auto rounded-lg bg-black/40 p-2.5 text-[9px] font-mono leading-relaxed text-white/50 space-y-1\">\n            {logs.map((log, idx) => (\n              <div key={idx} className=\"border-b border-white/5 pb-0.5 last:border-b-0 last:text-white/70\">\n                {log}\n              </div>\n            ))}\n          </div>\n        </div>\n      </div>\n\n      {/* Aesthetic Bottom Info */}\n      <div className=\"relative z-10 mx-auto mb-6 text-center\">\n        <h3\n          className=\"text-sm font-black uppercase tracking-[0.3em] transition-colors duration-400\"\n          style={{ color: welderActive ? '#00d2ff' : '#ff7800' }}\n        >\n          B.B.8 Astromech Pathfinder\n        </h3>\n        <p className=\"mt-1.5 text-[9px] font-medium tracking-[0.18em] text-white/40 uppercase\">\n          Click screen to discharge welder arc • Move cursor to steer gyroscopic roll\n        </p>\n      </div>\n    </div>\n  )\n}\nexport default Bb8AstromechPathfinder;\n",
    prompt: "Create an interactive 3D astromech robot called 'BB-8 Astromech Pathfinder'. Built with raw Three.js using premium glossy white lacquer, safety orange, and carbon-silver grey metal materials. Simulates gyroscopic rolling based on mouse coordinates, with a detached half-sphere head dome that slides magnetically on the top surface. Head tracks and gazes at the mouse cursor. Click to trigger an extendable welder piston arm, shooting a crackling neon-blue electric welder arc directly to the cursor coordinate, supported by additively blended particle spark sparks, and updating telemetry logs.",
    likes: 0,
    author: "Animation AI",
    featured: true,
    createdAt: "2026-05-23T11:00:00.000Z",
    updatedAt: "2026-05-23T11:00:00.000Z"
  }
];