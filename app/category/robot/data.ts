export const ROBOT_DATA = [
  {
    "_id": "robot-cybernetic-core-observer",
    "slug": "cybernetic-core-observer",
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
    "prompt": "Create a highly interactive 3D-feeling robot drone called \"Orbital Mech Drone\".\n• Render it in a full-screen canvas with a cinematic dark background and subtle horizon grid\n• The drone should be a pseudo-3D floating robot core with glowing eyes, an energy reactor, and 4 orbiting stabilizer pods\n• Cursor movement should steer the drone with springy easing and visual tilt/skew so it feels spatial\n• Add reactive exhaust particles and a click-triggered burst pulse that pushes orbiters outward\n• Use layered ellipses, gradients, depth scaling, and draw order to fake 3D depth\n• Implement as a client React component using requestAnimationFrame and proper cleanup\n• Keep the design distinct from Spline scene wrappers and from Zdog character anatomy",
    "likes": 0,
    "author": "Animation AI",
    "featured": true,
    "createdAt": "2026-05-20T09:05:00.000Z",
    "updatedAt": "2026-05-20T09:05:00.000Z"
  },
  {
    _id: 'robot-quantum-aegis-sentinel',
    slug: 'quantum-aegis-sentinel',
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
    slug: 'nebula-chrono-core',
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
    _id: 'robot-spline-obsidian-sentinel-x',
    slug: 'spline-obsidian-sentinel-x',
    title: 'Spline Obsidian Sentinel X',
    category: 'robot',
    tag: 'react',
    description:
      'An advanced robotic Spline presentation with cursor-linked lighting, protocol switching, immersive HUD overlays, and a stronger black-chrome silhouette than the reference.',
    previewCode: `<!DOCTYPE html><html><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/><style>
*{box-sizing:border-box;margin:0;padding:0}body{background:#020304;font-family:Arial,sans-serif;overflow:hidden}
.stage{position:relative;min-height:100vh;padding:28px;background:
radial-gradient(circle at var(--mx,24%) 18%,rgba(255,255,255,.22),transparent 18%),
radial-gradient(circle at 74% 52%,rgba(110,244,255,.08),transparent 22%),
linear-gradient(135deg,#040404 0%,#050607 42%,#010101 100%)}
.stage:before{content:'';position:absolute;inset:0;background:linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px);background-size:52px 52px;mask-image:linear-gradient(to bottom,transparent,black 12%,black 88%,transparent);opacity:.26}
.panel{position:absolute;z-index:3;padding:18px 18px 16px;border-radius:24px;border:1px solid rgba(255,255,255,.08);background:rgba(6,9,12,.72);backdrop-filter:blur(14px);color:#edfaff;box-shadow:0 20px 45px rgba(0,0,0,.28)}
.panel small{display:block;font-size:10px;letter-spacing:.24em;text-transform:uppercase;color:rgba(213,243,255,.5);margin-bottom:10px}
.panel h1{font-size:28px;line-height:1;margin-bottom:10px}
.panel p{font-size:13px;line-height:1.6;color:rgba(230,245,255,.65)}
.panel.left{left:26px;top:26px;width:270px}.panel.right{right:26px;top:26px;width:210px}
.stat{display:flex;justify-content:space-between;gap:18px;padding:10px 0;border-top:1px solid rgba(255,255,255,.07);font-size:12px}
.stat b{color:#fff}
.dock{position:relative;z-index:2;display:flex;align-items:center;justify-content:center;min-height:100vh}
.frame{position:relative;width:min(720px,100%);height:min(82vh,760px);border-radius:38px;border:1px solid rgba(255,255,255,.08);overflow:hidden;background:
radial-gradient(circle at 50% 14%,rgba(255,255,255,.08),transparent 16%),
radial-gradient(circle at 50% 44%,rgba(255,255,255,.04),transparent 24%),
linear-gradient(180deg,#0a0b0d 0%,#020202 100%);
box-shadow:0 36px 100px rgba(0,0,0,.55),inset 0 1px 0 rgba(255,255,255,.06)}
.frame:before{content:'';position:absolute;inset:-24%;background:conic-gradient(from 0deg,transparent,rgba(137,240,255,.12),transparent 34%,rgba(255,255,255,.06),transparent 60%,rgba(255,98,98,.08),transparent 82%);animation:spin 18s linear infinite}
.frame:after{content:'';position:absolute;inset:0;background:linear-gradient(180deg,rgba(255,255,255,.04),transparent 16%,transparent 78%,rgba(255,255,255,.02));pointer-events:none}
.spot{position:absolute;left:50%;top:-14%;width:58%;height:36%;transform:translateX(-50%);background:radial-gradient(circle,rgba(255,255,255,.58) 0%,rgba(255,255,255,.22) 30%,transparent 72%);filter:blur(28px)}
.ring{position:absolute;left:50%;top:46%;width:410px;height:410px;transform:translate(-50%,-50%);border-radius:50%;border:1px solid rgba(145,241,255,.12);box-shadow:0 0 80px rgba(145,241,255,.08) inset}
.ring:before,.ring:after{content:'';position:absolute;inset:18px;border-radius:50%;border:1px dashed rgba(255,255,255,.09)}.ring:after{inset:52px;animation:spin 24s linear reverse infinite}
.robot{position:absolute;left:50%;bottom:42px;width:310px;height:610px;transform:translateX(-50%) rotateY(calc((var(--x,.5) - .5)*20deg)) rotateX(calc((.5 - var(--y,.5))*10deg));transform-style:preserve-3d}
.robot:before{content:'';position:absolute;left:50%;bottom:6px;width:250px;height:56px;transform:translateX(-50%);background:radial-gradient(circle,rgba(120,240,255,.18),transparent 70%);filter:blur(14px)}
.head{position:absolute;left:50%;top:12px;width:136px;height:160px;transform:translateX(-50%);border-radius:44px 44px 36px 36px;background:linear-gradient(165deg,#20242b 0%,#020202 40%,#0c0d10 70%,#252a31 100%);box-shadow:inset 0 1px 0 rgba(255,255,255,.16),inset 0 -12px 18px rgba(255,255,255,.04),0 22px 40px rgba(0,0,0,.56)}
.head:before{content:'';position:absolute;left:26px;right:26px;top:28px;height:42px;border-radius:22px;background:linear-gradient(180deg,rgba(255,255,255,.16),rgba(255,255,255,.03));box-shadow:inset 0 0 32px rgba(132,245,255,.12)}
.head:after{content:'';position:absolute;left:50%;top:42px;width:34px;height:18px;transform:translateX(-50%);border-radius:999px;background:radial-gradient(circle,#ffffff 0%,#d7fdff 20%,#83f2ff 45%,#091015 85%);box-shadow:0 0 32px rgba(131,242,255,.72)}
.neck{position:absolute;left:50%;top:158px;width:56px;height:34px;transform:translateX(-50%);border-radius:16px;background:linear-gradient(180deg,#2d323a,#0a0b0d)}
.torso{position:absolute;left:50%;top:174px;width:198px;height:266px;transform:translateX(-50%);border-radius:32% 32% 22% 22%/18% 18% 16% 16%;background:linear-gradient(180deg,#181c22 0%,#010101 54%,#171b21 100%);box-shadow:inset 0 1px 0 rgba(255,255,255,.08),inset 0 -18px 22px rgba(255,255,255,.04),0 28px 54px rgba(0,0,0,.58)}
.torso:before{content:'';position:absolute;left:50%;top:74px;width:68px;height:68px;transform:translateX(-50%);border-radius:24px;background:radial-gradient(circle,#f8ffff 0%,#7bf1ff 18%,rgba(123,241,255,.22) 44%,rgba(12,19,24,.2) 70%);box-shadow:0 0 34px rgba(123,241,255,.4)}
.torso:after{content:'';position:absolute;left:50%;top:52px;width:138px;height:138px;transform:translateX(-50%) rotateX(74deg);border-radius:50%;border:1px solid rgba(134,245,255,.2);animation:spin 10s linear infinite}
.shoulder,.forearm,.thigh,.shin{position:absolute;background:linear-gradient(180deg,#242931 0%,#050608 60%,#1d2128 100%);box-shadow:inset 0 1px 0 rgba(255,255,255,.08)}
.shoulder{top:210px;width:56px;height:158px;border-radius:28px}.shoulder.left{left:18px;transform:rotate(16deg)}.shoulder.right{right:18px;transform:rotate(-16deg)}
.forearm{top:338px;width:42px;height:124px;border-radius:22px}.forearm.left{left:30px;transform:rotate(12deg)}.forearm.right{right:30px;transform:rotate(-12deg)}
.thigh{top:428px;width:62px;height:126px;border-radius:26px}.thigh.left{left:86px}.thigh.right{right:86px}
.shin{bottom:4px;width:54px;height:134px;border-radius:22px}.shin.left{left:90px}.shin.right{right:90px}
.scan{position:absolute;inset:0;background:repeating-linear-gradient(180deg,rgba(255,255,255,.03) 0 1px,transparent 1px 5px);mix-blend-mode:screen;opacity:.22;pointer-events:none}
.mode{position:absolute;left:50%;bottom:24px;transform:translateX(-50%);z-index:3;padding:12px 18px;border-radius:999px;border:1px solid rgba(255,255,255,.08);background:rgba(6,10,14,.76);color:#f2fbff;font-size:11px;letter-spacing:.28em;text-transform:uppercase;backdrop-filter:blur(14px)}
.hint{position:absolute;right:30px;bottom:30px;z-index:3;color:rgba(225,244,255,.44);font-size:11px;letter-spacing:.16em;text-transform:uppercase}
@keyframes spin{to{transform:rotate(360deg)}}@media(max-width:900px){.panel.left,.panel.right{position:relative;left:auto;right:auto;top:auto;width:auto;margin:0 0 16px}.stage{padding:18px}.dock{min-height:auto}.frame{height:720px}.hint{display:none}}@media(max-height:560px){.stage{padding:0}.panel.left,.panel.right,.hint{display:none}.dock{min-height:100vh}.frame{width:100%;height:100vh;border-radius:0;border:none}.spot{top:-10%;width:64%;height:34%}.ring{top:56%;width:300px;height:300px;opacity:.7}.robot{bottom:-18px;transform:translateX(-50%) scale(.82) rotateY(calc((var(--x,.5) - .5)*16deg)) rotateX(calc((.5 - var(--y,.5))*8deg))}.mode{bottom:10px;padding:9px 14px;font-size:10px;letter-spacing:.18em}}
</style></head><body><section class="stage" id="stage"><div class="panel left"><small>Robot Category</small><h1>Obsidian Sentinel X</h1><p>Built as a richer robot presentation layer for Spline scenes, with dramatic spotlighting, black-chrome surfacing, and protocol-aware UI.</p></div><div class="panel right"><small>Telemetry</small><div class="stat"><span>Mode</span><b id="modeLabel">Guard</b></div><div class="stat"><span>Core</span><b>99%</b></div><div class="stat"><span>Tracking</span><b>Active</b></div></div><div class="dock"><div class="frame"><div class="spot"></div><div class="ring"></div><div class="robot"><div class="head"></div><div class="neck"></div><div class="torso"></div><div class="shoulder left"></div><div class="shoulder right"></div><div class="forearm left"></div><div class="forearm right"></div><div class="thigh left"></div><div class="thigh right"></div><div class="shin left"></div><div class="shin right"></div></div><div class="scan"></div></div></div><div class="mode" id="modePill">Guard Protocol</div><div class="hint">Move pointer · Click to change protocol</div></section><script>const stage=document.getElementById('stage');const modes=['Guard Protocol','Analyze Protocol','Repair Protocol'];let index=0;stage.addEventListener('mousemove',e=>{const r=stage.getBoundingClientRect();const x=(e.clientX-r.left)/r.width;const y=(e.clientY-r.top)/r.height;stage.style.setProperty('--mx',x*100+'%');stage.style.setProperty('--x',x);stage.style.setProperty('--y',y)});stage.addEventListener('click',()=>{index=(index+1)%modes.length;document.getElementById('modePill').textContent=modes[index];document.getElementById('modeLabel').textContent=modes[index].split(' ')[0]});</script></body></html>`,
    code: `'use client'

import { Suspense, lazy, useMemo, useState } from 'react'

const Spline = lazy(() => import('@splinetool/react-spline'))

const PROTOCOLS = [
  { name: 'Guard Protocol', accent: '#8cf0ff', status: 'Perimeter Stable' },
  { name: 'Analyze Protocol', accent: '#ffb37a', status: 'Threat Parsing' },
  { name: 'Repair Protocol', accent: '#8df7b5', status: 'Self-Healing Mesh' },
]

interface SplineObsidianSentinelXProps {
  scene: string
  className?: string
}

export function SplineObsidianSentinelX({ scene, className }: SplineObsidianSentinelXProps) {
  const [pointer, setPointer] = useState({ x: 0.5, y: 0.38 })
  const [protocolIndex, setProtocolIndex] = useState(0)

  const protocol = PROTOCOLS[protocolIndex]

  const frameTransform = useMemo(() => {
    const rotateY = (pointer.x - 0.5) * 10
    const rotateX = (0.5 - pointer.y) * 6
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
      onMouseLeave={() => setPointer({ x: 0.5, y: 0.38 })}
      onClick={() => setProtocolIndex((current) => (current + 1) % PROTOCOLS.length)}
      className="relative overflow-hidden rounded-[38px] border border-white/10 bg-[#020304] text-white"
      style={{
        ['--accent' as string]: protocol.accent,
        backgroundImage: \`
          radial-gradient(circle at \${pointer.x * 100}% 18%, rgba(255,255,255,0.2), transparent 18%),
          radial-gradient(circle at 74% 52%, rgba(110,244,255,0.08), transparent 22%),
          linear-gradient(135deg, #040404 0%, #050607 42%, #010101 100%)
        \`,
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:52px_52px] opacity-25 [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]" />

      <div className="relative z-10 min-h-[760px] px-5 py-5 md:px-7">
        <div className="grid gap-4 lg:grid-cols-[270px_minmax(0,1fr)_220px]">
          <div className="rounded-[24px] border border-white/8 bg-slate-950/72 p-5 backdrop-blur-xl">
            <div className="text-[10px] uppercase tracking-[0.24em] text-white/45">Robot Category</div>
            <h2 className="mt-3 text-[30px] font-black leading-none">Obsidian Sentinel X</h2>
            <p className="mt-3 text-sm leading-7 text-white/65">
              A stronger presentation shell for robot-focused Spline scenes with dramatic spotlighting,
              richer chrome surfacing, and a protocol-aware HUD.
            </p>
          </div>

          <div className="flex items-center justify-center">
            <div
              className="relative h-[720px] w-full max-w-[720px] overflow-hidden rounded-[38px] border border-white/8 bg-[radial-gradient(circle_at_50%_14%,rgba(255,255,255,0.08),transparent_16%),radial-gradient(circle_at_50%_44%,rgba(255,255,255,0.04),transparent_24%),linear-gradient(180deg,#0a0b0d_0%,#020202_100%)] shadow-[0_36px_100px_rgba(0,0,0,0.55)]"
              style={{ transform: frameTransform, transformStyle: 'preserve-3d' }}
            >
              <div className="pointer-events-none absolute inset-[-24%] animate-[spin_18s_linear_infinite] bg-[conic-gradient(from_0deg,transparent,rgba(137,240,255,0.12),transparent_34%,rgba(255,255,255,0.06),transparent_60%,rgba(255,98,98,0.08),transparent_82%)]" />
              <div className="pointer-events-none absolute left-1/2 top-[-14%] h-[36%] w-[58%] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.58)_0%,rgba(255,255,255,0.22)_30%,transparent_72%)] blur-[28px]" />
              <div className="pointer-events-none absolute left-1/2 top-[46%] h-[410px] w-[410px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-100/10 shadow-[inset_0_0_80px_rgba(145,241,255,0.08)]" />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_16%,transparent_78%,rgba(255,255,255,0.02))]" />
              <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(180deg,rgba(255,255,255,0.03)_0_1px,transparent_1px_5px)] opacity-20 mix-blend-screen" />

              <Suspense
                fallback={
                  <div className="flex h-full items-end justify-center">
                    <div className="relative h-[610px] w-[310px]">
                      <div className="absolute left-1/2 top-3 h-40 w-[136px] -translate-x-1/2 rounded-[44px_44px_36px_36px] bg-[linear-gradient(165deg,#20242b_0%,#020202_40%,#0c0d10_70%,#252a31_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_22px_40px_rgba(0,0,0,0.56)]" />
                      <div className="absolute left-1/2 top-11 h-[18px] w-[34px] -translate-x-1/2 rounded-full bg-white shadow-[0_0_32px_rgba(131,242,255,0.72)]" />
                      <div className="absolute left-1/2 top-[158px] h-[34px] w-14 -translate-x-1/2 rounded-2xl bg-[linear-gradient(180deg,#2d323a,#0a0b0d)]" />
                      <div className="absolute left-1/2 top-[174px] h-[266px] w-[198px] -translate-x-1/2 rounded-[32%_32%_22%_22%/18%_18%_16%_16%] bg-[linear-gradient(180deg,#181c22_0%,#010101_54%,#171b21_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_28px_54px_rgba(0,0,0,0.58)]" />
                      <div className="absolute left-1/2 top-[248px] h-[68px] w-[68px] -translate-x-1/2 rounded-[24px] bg-[radial-gradient(circle,#f8ffff_0%,#7bf1ff_18%,rgba(123,241,255,0.22)_44%,rgba(12,19,24,0.2)_70%)] shadow-[0_0_34px_rgba(123,241,255,0.4)]" />
                      <div className="absolute left-[18px] top-[210px] h-[158px] w-14 rotate-[16deg] rounded-[28px] bg-[linear-gradient(180deg,#242931_0%,#050608_60%,#1d2128_100%)]" />
                      <div className="absolute right-[18px] top-[210px] h-[158px] w-14 -rotate-[16deg] rounded-[28px] bg-[linear-gradient(180deg,#242931_0%,#050608_60%,#1d2128_100%)]" />
                      <div className="absolute left-[30px] top-[338px] h-[124px] w-[42px] rotate-[12deg] rounded-[22px] bg-[linear-gradient(180deg,#242931_0%,#050608_60%,#1d2128_100%)]" />
                      <div className="absolute right-[30px] top-[338px] h-[124px] w-[42px] -rotate-[12deg] rounded-[22px] bg-[linear-gradient(180deg,#242931_0%,#050608_60%,#1d2128_100%)]" />
                      <div className="absolute left-[86px] top-[428px] h-[126px] w-[62px] rounded-[26px] bg-[linear-gradient(180deg,#242931_0%,#050608_60%,#1d2128_100%)]" />
                      <div className="absolute right-[86px] top-[428px] h-[126px] w-[62px] rounded-[26px] bg-[linear-gradient(180deg,#242931_0%,#050608_60%,#1d2128_100%)]" />
                      <div className="absolute bottom-1 left-[90px] h-[134px] w-[54px] rounded-[22px] bg-[linear-gradient(180deg,#242931_0%,#050608_60%,#1d2128_100%)]" />
                      <div className="absolute bottom-1 right-[90px] h-[134px] w-[54px] rounded-[22px] bg-[linear-gradient(180deg,#242931_0%,#050608_60%,#1d2128_100%)]" />
                      <div className="absolute bottom-4 left-1/2 h-14 w-[250px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(120,240,255,0.18),transparent_70%)] blur-xl" />
                    </div>
                  </div>
                }
              >
                <Spline className={className ?? 'h-full w-full'} scene={scene} />
              </Suspense>
            </div>
          </div>

          <div className="rounded-[24px] border border-white/8 bg-slate-950/72 p-5 backdrop-blur-xl">
            <div className="text-[10px] uppercase tracking-[0.24em] text-white/45">Telemetry</div>
            <div className="mt-4 space-y-4 text-sm text-white/68">
              <div className="flex items-center justify-between border-t border-white/8 pt-3">
                <span>Mode</span>
                <strong style={{ color: protocol.accent }}>{protocol.name.replace(' Protocol', '')}</strong>
              </div>
              <div className="flex items-center justify-between border-t border-white/8 pt-3">
                <span>Core</span>
                <strong className="text-white">99%</strong>
              </div>
              <div className="flex items-center justify-between border-t border-white/8 pt-3">
                <span>Tracking</span>
                <strong className="text-white">Active</strong>
              </div>
              <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                <div className="text-[10px] uppercase tracking-[0.22em] text-white/40">Status</div>
                <div className="mt-2 text-lg font-bold" style={{ color: protocol.accent }}>
                  {protocol.status}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-7 left-1/2 -translate-x-1/2 rounded-full border border-white/8 bg-slate-950/76 px-5 py-3 text-[11px] uppercase tracking-[0.28em] text-white backdrop-blur-xl">
          {protocol.name}
        </div>
      </div>
    </section>
  )
}`,
    prompt: `Create a new robot-category component called "Spline Obsidian Sentinel X".
- Build it as a premium wrapper around a Spline robot scene using React Suspense + lazy-loaded @splinetool/react-spline
- The robot presentation must feel stronger and more cinematic than a simple black robot screenshot: deeper black-chrome surfaces, spotlight stage lighting, larger silhouette, and more confident framing
- Add cursor-linked radial lighting and slight 3D tilt so the whole frame feels responsive
- Add protocol switching on click, with a right-side telemetry card that updates its label and accent color
- Add scanline texture, ambient conic glow, circular reactor rings, and a polished robot fallback silhouette while Spline loads
- Use a dark monochrome palette with cold cyan highlights and optional warm amber mode
- Make the component feel like a finished showcase card, not just a loading wrapper`,
    likes: 0,
    author: 'Animation AI',
    featured: true,
    createdAt: '2026-05-22T10:20:00.000Z',
    updatedAt: '2026-05-22T10:20:00.000Z'

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
];