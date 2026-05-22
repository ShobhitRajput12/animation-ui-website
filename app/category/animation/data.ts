export const ANIMATION_DATA = [
  {
    "slug": "purple-galaxy-nebula",
    "title": "Premium Purple Galaxy Nebula",
    "category": "animation",
    "tag": "threejs",
    "description": "The ultimate 3D cinematic space experience. A massive spiral galaxy with 200,000 particles, interactive gravitational warping, volumetric dust clouds, and post-processed bloom.",
    "previewCode": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Premium Purple Galaxy Nebula</title>\n    <style>\n        * { margin: 0; padding: 0; box-sizing: border-box; }\n        body { width: 100%; height: 100vh; overflow: hidden; background: #000; font-family: 'Inter', sans-serif; cursor: none; }\n        canvas { display: block; width: 100%; height: 100%; }\n        #overlay { position: absolute; inset: 0; pointer-events: none; z-index: 10; }\n        .badge { position: absolute; top: 30px; left: 30px; display: flex; align-items: center; gap: 12px; }\n        .badge-dot { width: 8px; height: 8px; border-radius: 50%; background: #9d00ff; box-shadow: 0 0 10px #9d00ff; animation: pulse 2s infinite; }\n        .badge-text { font-size: 10px; font-weight: 700; letter-spacing: 0.3em; color: rgba(255,255,255,0.4); text-transform: uppercase; }\n        .hud { position: absolute; bottom: 30px; right: 30px; text-align: right; }\n        .hud-title { font-size: 28px; font-weight: 200; color: white; letter-spacing: -0.02em; margin-bottom: 4px; opacity: 0.9; }\n        .hud-status { font-size: 9px; font-weight: 700; letter-spacing: 0.5em; color: #7b2cbf; text-transform: uppercase; }\n        @keyframes pulse { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.3; transform: scale(1.5); } }\n        #cursor { position: fixed; width: 40px; height: 40px; border: 1px solid rgba(157, 0, 255, 0.3); border-radius: 50%; pointer-events: none; transform: translate(-50%, -50%); transition: width 0.2s, height 0.2s, border-color 0.2s; z-index: 100; }\n        #cursor-dot { position: fixed; width: 4px; height: 4px; background: #9d00ff; border-radius: 50%; pointer-events: none; transform: translate(-50%, -50%); z-index: 101; }\n    </style>\n</head>\n<body>\n    <div id=\"cursor\"></div>\n    <div id=\"cursor-dot\"></div>\n    <div id=\"overlay\">\n        <div class=\"badge\"><div class=\"badge-dot\"></div><span class=\"badge-text\">Nebula Engine v4.0</span></div>\n        <div class=\"hud\">\n            <div class=\"hud-title\">Andromeda Alpha</div>\n            <div class=\"hud-status\">Interactive Simulation • 200K Particles</div>\n        </div>\n    </div>\n\n    <script type=\"importmap\">\n        { \"imports\": { \"three\": \"https://unpkg.com/three@0.160.0/build/three.module.js\", \"three/addons/\": \"https://unpkg.com/three@0.160.0/examples/jsm/\" } }\n    </script>\n    <script type=\"module\">\n        import * as THREE from 'three';\n        import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';\n        import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';\n        import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';\n\n        const scene = new THREE.Scene();\n        const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 2000);\n        camera.position.set(0, 300, 600);\n        camera.lookAt(0, 0, 0);\n\n        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });\n        renderer.setSize(window.innerWidth, window.innerHeight);\n        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));\n        document.body.appendChild(renderer.domElement);\n\n        // Galaxy Core & Particles\n        const particleCount = 200000;\n        const geometry = new THREE.BufferGeometry();\n        const positions = new Float32Array(particleCount * 3);\n        const colors = new Float32Array(particleCount * 3);\n        const sizes = new Float32Array(particleCount);\n\n        const color1 = new THREE.Color(0x9d00ff); // Deep Purple\n        const color2 = new THREE.Color(0x7b2cbf); // Violet\n        const color3 = new THREE.Color(0xe0aaff); // Lavender\n        const color4 = new THREE.Color(0xffffff); // White (Core)\n\n        for (let i = 0; i < particleCount; i++) {\n            const i3 = i * 3;\n            const armCount = 4;\n            const armIndex = i % armCount;\n            const armAngle = (armIndex / armCount) * Math.PI * 2;\n            const radius = Math.random() * 500 + 20;\n            const spiralAngle = armAngle + radius * 0.015;\n            const spread = 20 + radius * 0.12;\n\n            positions[i3] = Math.cos(spiralAngle) * radius + (Math.random() - 0.5) * spread;\n            positions[i3 + 1] = (Math.random() - 0.5) * spread * 0.4; // Disk thickness\n            positions[i3 + 2] = Math.sin(spiralAngle) * radius + (Math.random() - 0.5) * spread;\n\n            const mix = Math.random();\n            let color = mix < 0.3 ? color1 : mix < 0.6 ? color2 : color3;\n            if (radius < 100 && Math.random() > 0.5) color = color4; // Brighter core\n\n            const dist = Math.sqrt(positions[i3]**2 + positions[i3+2]**2);\n            const brightness = Math.max(0.2, 1 - dist / 500);\n            \n            colors[i3] = color.r * brightness;\n            colors[i3 + 1] = color.g * brightness;\n            colors[i3 + 2] = color.b * brightness;\n            \n            sizes[i] = Math.random() * 2 + 1;\n        }\n\n        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));\n        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));\n        geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));\n\n        const material = new THREE.ShaderMaterial({\n            uniforms: {\n                uTime: { value: 0 },\n                uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) }\n            },\n            vertexShader: `\n                attribute float size;\n                varying vec3 vColor;\n                uniform float uTime;\n                uniform float uPixelRatio;\n                void main() {\n                    vColor = color;\n                    vec3 pos = position;\n                    // Subtle breathing animation\n                    pos.y += sin(uTime * 0.5 + position.x * 0.01) * 2.0;\n                    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);\n                    gl_PointSize = size * uPixelRatio * (300.0 / -mvPosition.z);\n                    gl_Position = projectionMatrix * mvPosition;\n                }\n            `,\n            fragmentShader: `\n                varying vec3 vColor;\n                void main() {\n                    float dist = length(gl_PointCoord - vec2(0.5));\n                    if (dist > 0.5) discard;\n                    float alpha = 1.0 - smoothstep(0.0, 0.5, dist);\n                    alpha = pow(alpha, 2.0);\n                    gl_FragColor = vec4(vColor, alpha);\n                }\n            `,\n            transparent: true,\n            vertexColors: true,\n            blending: THREE.AdditiveBlending,\n            depthWrite: false\n        });\n\n        const galaxy = new THREE.Points(geometry, material);\n        scene.add(galaxy);\n\n        // Background Stars\n        const starGeo = new THREE.BufferGeometry();\n        const starPos = new Float32Array(30000 * 3);\n        for(let i=0; i<30000*3; i++) starPos[i] = (Math.random()-0.5) * 2000;\n        starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));\n        const starMat = new THREE.PointsMaterial({ size: 1, color: 0x4444ff, transparent: true, opacity: 0.4, blending: THREE.AdditiveBlending });\n        const stars = new THREE.Points(starGeo, starMat);\n        scene.add(stars);\n\n        // Post Processing\n        const composer = new EffectComposer(renderer);\n        composer.addPass(new RenderPass(scene, camera));\n        const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);\n        bloomPass.threshold = 0.2;\n        bloomPass.strength = 1.8;\n        bloomPass.radius = 0.6;\n        composer.addPass(bloomPass);\n\n        // Mouse Handling\n        let mx = 0, my = 0, tmx = 0, tmy = 0;\n        const cursor = document.getElementById('cursor');\n        const dot = document.getElementById('cursor-dot');\n\n        window.addEventListener('mousemove', (e) => {\n            tmx = (e.clientX / window.innerWidth) * 2 - 1;\n            tmy = -(e.clientY / window.innerHeight) * 2 + 1;\n            cursor.style.left = e.clientX + 'px';\n            cursor.style.top = e.clientY + 'px';\n            dot.style.left = e.clientX + 'px';\n            dot.style.top = e.clientY + 'px';\n        });\n\n        window.addEventListener('mousedown', () => {\n            cursor.style.width = '60px';\n            cursor.style.height = '60px';\n            cursor.style.borderColor = '#e0aaff';\n            tmx *= 2; tmy *= 2; // Warp speed feel\n        });\n\n        window.addEventListener('mouseup', () => {\n            cursor.style.width = '40px';\n            cursor.style.height = '40px';\n            cursor.style.borderColor = 'rgba(157, 0, 255, 0.3)';\n        });\n\n        function animate() {\n            requestAnimationFrame(animate);\n            const time = performance.now() * 0.0005;\n            material.uniforms.uTime.value = time;\n\n            mx += (tmx - mx) * 0.05;\n            my += (tmy - my) * 0.05;\n\n            galaxy.rotation.y = time * 0.1;\n            galaxy.rotation.x = my * 0.4;\n            galaxy.rotation.z = mx * 0.2;\n\n            stars.rotation.y = time * 0.02;\n\n            composer.render();\n        }\n        animate();\n\n        window.addEventListener('resize', () => {\n            camera.aspect = window.innerWidth / window.innerHeight;\n            camera.updateProjectionMatrix();\n            renderer.setSize(window.innerWidth, window.innerHeight);\n            composer.setSize(window.innerWidth, window.innerHeight);\n        });\n    </script>\n</body>\n</html>",
    "code": "// Premium Purple Galaxy Nebula • High-Performance Three.js Experience\nimport React, { useEffect, useRef } from 'react'\nimport * as THREE from 'three'\nimport { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'\nimport { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'\nimport { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass'\n\nconst VERTEX_SHADER = `\n  attribute float size;\n  varying vec3 vColor;\n  uniform float uTime;\n  uniform float uPixelRatio;\n  void main() {\n    vColor = color;\n    vec3 pos = position;\n    pos.y += sin(uTime * 0.5 + position.x * 0.01) * 2.0;\n    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);\n    gl_PointSize = size * uPixelRatio * (300.0 / -mvPosition.z);\n    gl_Position = projectionMatrix * mvPosition;\n  }\n`\n\nconst FRAGMENT_SHADER = `\n  varying vec3 vColor;\n  void main() {\n    float dist = length(gl_PointCoord - vec2(0.5));\n    if (dist > 0.5) discard;\n    float alpha = 1.0 - smoothstep(0.0, 0.5, dist);\n    alpha = pow(alpha, 2.0);\n    gl_FragColor = vec4(vColor, alpha);\n  }\n`\n\nexport default function PremiumGalaxy() {\n  const containerRef = useRef<HTMLDivElement>(null)\n\n  useEffect(() => {\n    const container = containerRef.current\n    if (!container) return\n\n    const scene = new THREE.Scene()\n    const camera = new THREE.PerspectiveCamera(60, container.clientWidth / container.clientHeight, 0.1, 2000)\n    camera.position.set(0, 300, 600)\n\n    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })\n    renderer.setSize(container.clientWidth, container.clientHeight)\n    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))\n    container.appendChild(renderer.domElement)\n\n    const particleCount = 200000\n    const geometry = new THREE.BufferGeometry()\n    const positions = new Float32Array(particleCount * 3)\n    const colors = new Float32Array(particleCount * 3)\n    const sizes = new Float32Array(particleCount)\n\n    const color1 = new THREE.Color(0x9d00ff)\n    const color2 = new THREE.Color(0x7b2cbf)\n    const color3 = new THREE.Color(0xe0aaff)\n\n    for (let i = 0; i < particleCount; i++) {\n      const i3 = i * 3\n      const radius = Math.random() * 500 + 20\n      const angle = (i % 4) * (Math.PI / 2) + radius * 0.015\n      const spread = 20 + radius * 0.12\n\n      positions[i3] = Math.cos(angle) * radius + (Math.random() - 0.5) * spread\n      positions[i3 + 1] = (Math.random() - 0.5) * spread * 0.4\n      positions[i3 + 2] = Math.sin(angle) * radius + (Math.random() - 0.5) * spread\n\n      const mix = Math.random()\n      const color = mix < 0.3 ? color1 : mix < 0.6 ? color2 : color3\n      const brightness = Math.max(0.2, 1 - radius / 500)\n      \n      colors[i3] = color.r * brightness\n      colors[i3 + 1] = color.g * brightness\n      colors[i3 + 2] = color.b * brightness\n      sizes[i] = Math.random() * 2 + 1\n    }\n\n    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))\n    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))\n    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1))\n\n    const material = new THREE.ShaderMaterial({\n      uniforms: { uTime: { value: 0 }, uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) } },\n      vertexShader: VERTEX_SHADER,\n      fragmentShader: FRAGMENT_SHADER,\n      transparent: true, vertexColors: true, blending: THREE.AdditiveBlending, depthWrite: false\n    })\n\n    const galaxy = new THREE.Points(geometry, material)\n    scene.add(galaxy)\n\n    const composer = new EffectComposer(renderer)\n    composer.addPass(new RenderPass(scene, camera))\n    composer.addPass(new UnrealBloomPass(new THREE.Vector2(container.clientWidth, container.clientHeight), 1.5, 0.4, 0.85))\n\n    let mouse = { x: 0, y: 0 }\n    const handleMouseMove = (e: MouseEvent) => {\n      mouse.x = (e.clientX / window.innerWidth) * 2 - 1\n      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1\n    }\n    window.addEventListener('mousemove', handleMouseMove)\n\n    const animate = () => {\n      requestAnimationFrame(animate)\n      material.uniforms.uTime.value = performance.now() * 0.0005\n      galaxy.rotation.y += 0.001\n      galaxy.rotation.x += (mouse.y * 0.2 - galaxy.rotation.x) * 0.05\n      galaxy.rotation.z += (mouse.x * 0.2 - galaxy.rotation.z) * 0.05\n      composer.render()\n    }\n    animate()\n\n    return () => {\n      window.removeEventListener('mousemove', handleMouseMove)\n      renderer.dispose()\n      container.removeChild(renderer.domElement)\n    }\n  }, [])\n\n  return <div ref={containerRef} className=\"w-full h-full bg-black\" />\n}",
    "prompt": "Create a Premium 3D Purple Galaxy Nebula with Three.js:\n• 200,000 particles in a cinematic 4-arm spiral formation\n• Advanced GLSL Shaders for size attenuation and soft additive glow\n• Color palette: deep purple #9d00ff, light lavender #e0aaff, white core accents\n• Interactive gravitational tilt: galaxy follows mouse with smooth lerp physics\n• Post-processing: High-intensity UnrealBloom for stellar brilliance\n• 30,000 background stars for parallax depth\n• Premium HUD overlay with simulation status and coordinates\n• Custom glowing cursor that pulses on click\n• Performance optimized for 60fps on high-DPI displays",
    "likes": 0,
    "author": "Animation AI",
    "featured": true,
    "createdAt": "2026-05-10T13:19:37.565Z",
    "updatedAt": "2026-05-11T05:11:13.505Z"
  },
  {
    "slug": "neural-core-hologram",
    "title": "Neural Core Hologram",
    "category": "animation",
    "tag": "threejs",
    "description": "Futuristic 3D neural core with displacement shaders and pulsing network tendrils.",
    "previewCode": "<!-- Full self-contained HTML • paste and run -->\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\"/>\n<meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"/>\n<title>Neural Core Hologram</title>\n<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\"/>\n<link href=\"https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap\" rel=\"stylesheet\"/>\n<style>\n*{margin:0;padding:0;box-sizing:border-box}\nhtml,body{width:100%;height:100%;background:#000;overflow:hidden}\n#root{width:100vw;height:100vh;position:relative;cursor:none;font-family:'Inter',sans-serif}\ncanvas{display:block;width:100%;height:100%}\n#ov{position:absolute;inset:0;pointer-events:none}\n.badge{position:absolute;top:28px;left:28px;display:flex;align-items:center;gap:10px}\n.badge-dot{width:6px;height:6px;border-radius:50%;background:#6366f1;animation:pd 2s ease-in-out infinite}\n.badge-text{font-size:11px;letter-spacing:2px;color:rgba(255,255,255,.4)}\n.hud{position:absolute;bottom:28px;right:28px;text-align:right}\n.hud-title{font-size:22px;font-weight:300;color:rgba(255,255,255,.9);letter-spacing:.3px;line-height:1.25}\n.hud-sub{font-size:11px;color:rgba(255,255,255,.3);letter-spacing:2px;margin-top:6px}\n.controls{position:absolute;bottom:28px;left:28px;display:flex;gap:10px}\n.ctrl{font-size:10px;letter-spacing:1.5px;color:rgba(255,255,255,.3);padding:5px 12px;border:0.5px solid rgba(255,255,255,.08);border-radius:20px;background:rgba(255,255,255,.03)}\n.cur{position:absolute;pointer-events:none;top:0;left:0}\n#cd{width:5px;height:5px;border-radius:50%;background:#6366f1;position:absolute;transform:translate(-50%,-50%);box-shadow:0 0 8px #6366f1,0 0 22px rgba(99,102,241,.5)}\n#cr{width:28px;height:28px;border-radius:50%;border:1px solid rgba(99,102,241,.4);position:absolute;transform:translate(-50%,-50%);transition:width .2s,height .2s}\n#cr2{width:52px;height:52px;border-radius:50%;border:0.5px solid rgba(99,102,241,.14);position:absolute;transform:translate(-50%,-50%)}\n@keyframes pd{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.3;transform:scale(1.5)}}\n</style>\n</head>\n<body>\n<div id=\"root\">\n <canvas id=\"cv\"></canvas>\n <canvas id=\"ov\"></canvas>\n <div class=\"badge\"><div class=\"badge-dot\"></div><span class=\"badge-text\">NEURAL CORE v2.4</span></div>\n <div class=\"hud\"><div class=\"hud-title\">Intelligence<br>Visualized</div><div class=\"hud-sub\">DRAG • SCROLL • CLICK</div></div>\n <div class=\"controls\"><div class=\"ctrl\">ORBIT</div><div class=\"ctrl\">PULSE</div><div class=\"ctrl\">REPEL</div></div>\n <div class=\"cur\" id=\"cd\"></div>\n <div class=\"cur\" id=\"cr\"></div>\n <div class=\"cur\" id=\"cr2\"></div>\n</div>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js\"></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js\"></script>\n<script>\nconst scene = new THREE.Scene();\nconst cam = new THREE.PerspectiveCamera(50, window.innerWidth/window.innerHeight, 0.1, 1000);\ncam.position.z = 6.5;\nconst ren = new THREE.WebGLRenderer({ canvas: document.getElementById('cv'), antialias: true });\nren.setSize(window.innerWidth, window.innerHeight);\nren.setPixelRatio(window.devicePixelRatio);\n\nconst coreMat = new THREE.ShaderMaterial({\n uniforms: { uT: {value:0} },\n vertexShader: `varying vec3 vN; void main() { vN = normalize(normalMatrix * normal); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,\n fragmentShader: `varying vec3 vN; void main() { float rim = pow(1.0 - max(dot(vN, vec3(0,0,1)), 0.0), 3.0); gl_FragColor = vec4(vec3(0.4, 0.4, 1.0) * rim, rim); }`,\n transparent: true\n});\nconst core = new THREE.Mesh(new THREE.SphereGeometry(1.5, 64, 64), coreMat);\nscene.add(core);\n\nfunction animate() {\n requestAnimationFrame(animate);\n coreMat.uniforms.uT.value += 0.01;\n core.rotation.y += 0.005;\n ren.render(scene, cam);\n}\nanimate();\n\n// Cursor logic\nconst cd = document.getElementById('cd');\nconst cr = document.getElementById('cr');\nconst cr2 = document.getElementById('cr2');\nwindow.addEventListener('mousemove', (e) => {\n gsap.to(cd, { x: e.clientX, y: e.clientY, duration: 0.1 });\n gsap.to(cr, { x: e.clientX, y: e.clientY, duration: 0.2 });\n gsap.to(cr2, { x: e.clientX, y: e.clientY, duration: 0.4 });\n});\n</script>\n</body>\n</html>",
    "code": "// NeuralCoreHologram.js • Production React Component\nimport { useRef, useEffect } from 'react'\nimport * as THREE from 'three'\nimport { gsap } from 'gsap'\n\nconst VERTEX_SHADER = `\n varying vec3 vN; varying vec3 vP; varying vec2 vUv;\n uniform float uT;\n void main() {\n vN = normalize(normalMatrix * normal); vP = position; vUv = uv;\n float d = sin(position.y*12.+uT*2.5)*.009\n + sin(position.x*9.-uT*2.)*.007\n + sin(position.z*10.+uT*1.8)*.006;\n gl_Position = projectionMatrix * modelViewMatrix * vec4(position + normal*d, 1.0);\n }`\n\nconst FRAGMENT_SHADER = `\n varying vec3 vN; varying vec3 vP;\n uniform float uT; uniform float uFlick; uniform float uEnergy;\n void main() {\n float rim = pow(1.0 - max(dot(vN, vec3(0,0,1)), 0.0), 2.0);\n float scan = step(.88, sin(vP.y*28.-uT*6.)*.5+.5) * .1;\n float lat = sin(vP.y*8.+uT*.5)*.5+.5;\n float lon = sin(atan(vP.x,vP.z)*8.+uT*.4)*.5+.5;\n float grid = (step(.94,lat)+step(.94,lon))*.07;\n float flick = .9 + uFlick*.1*sin(uT*60.);\n vec3 col = mix(\n mix(vec3(.38,.40,.95), vec3(.54,.36,.98), rim),\n vec3(.04,.71,.84), rim*rim*.6\n );\n gl_FragColor = vec4(col, clamp((rim*.52+scan+grid+uEnergy*.4+.06)*flick, 0., 1.));\n }`\n\nexport default function NeuralCoreHologram({ className = '' }) {\n const mountRef = useRef(null)\n useEffect(() => {\n const el = mountRef.current\n if (!el) return\n\n const W = () => el.offsetWidth, H = () => el.offsetHeight\n const ren = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' })\n ren.setPixelRatio(Math.min(devicePixelRatio, 2))\n ren.setSize(W(), H())\n ren.setClearColor(0x000000, 1)\n el.appendChild(ren.domElement)\n\n const scene = new THREE.Scene()\n scene.fog = new THREE.FogExp2(0x000000, 0.022)\n const cam = new THREE.PerspectiveCamera(50, W()/H(), .1, 300)\n cam.position.set(0, 0, 6.5)\n\n const G = new THREE.Group()\n scene.add(G)\n const Gpos = new THREE.Vector3(), Gvel = new THREE.Vector3()\n\n const coreMat = new THREE.ShaderMaterial({\n vertexShader: VERTEX_SHADER, fragmentShader: FRAGMENT_SHADER,\n uniforms: { uT: {value:0}, uFlick: {value:0}, uEnergy: {value:0} },\n transparent: true, depthWrite: false, side: THREE.FrontSide,\n })\n G.add(new THREE.Mesh(new THREE.SphereGeometry(1.5, 72, 72), coreMat))\n\n const COLORS = { purple: 0x6366f1, violet: 0x8b5cf6, cyan: 0x06b6d4 }\n [[1.52,.05,20,COLORS.purple],[1.60,.022,12,COLORS.violet],[1.68,.009,8,COLORS.cyan]]\n .forEach(([r,op,s,c]) => G.add(new THREE.Mesh(\n new THREE.SphereGeometry(r,s,s),\n new THREE.MeshBasicMaterial({color:c, wireframe:true, transparent:true, opacity:op})\n )))\n\n [[1.82,.055],[2.2,.022],[2.75,.007]].forEach(([r,op]) =>\n G.add(new THREE.Mesh(new THREE.SphereGeometry(r,24,24),\n new THREE.MeshBasicMaterial({color:COLORS.purple, transparent:true, opacity:op, side:THREE.BackSide}))))\n\n const oct = new THREE.Mesh(new THREE.OctahedronGeometry(.22),\n new THREE.MeshBasicMaterial({color:COLORS.cyan, wireframe:true, transparent:true, opacity:.7}))\n const dod = new THREE.Mesh(new THREE.DodecahedronGeometry(.18),\n new THREE.MeshBasicMaterial({color:COLORS.purple, wireframe:true, transparent:true, opacity:.65}))\n const tet = new THREE.Mesh(new THREE.TetrahedronGeometry(.16),\n new THREE.MeshBasicMaterial({color:COLORS.violet, wireframe:true, transparent:true, opacity:.6}))\n ;[oct, dod, tet].forEach(m => G.add(m))\n\n const PC = 3200, pp = new Float32Array(PC*3), pc = new Float32Array(PC*3), pd = []\n const mkP = (i) => {\n const th = Math.random()*Math.PI*2, ph = Math.acos(2*Math.random()-1)\n const x = 1.5*Math.sin(ph)*Math.cos(th), y = 1.5*Math.sin(ph)*Math.sin(th), z = 1.5*Math.cos(ph)\n const d = new THREE.Vector3(x,y,z).normalize()\n let perp = new THREE.Vector3().crossVectors(d, new THREE.Vector3(0,1,0)).normalize()\n if (perp.length() < .1) perp.crossVectors(d, new THREE.Vector3(1,0,0)).normalize()\n pd[i] = {x,y,z,d,perp,sp:.014+Math.random()*.044,life:Math.floor(Math.random()*100),\n max:50+Math.random()*90,wb:.012+Math.random()*.055,ws:.035+Math.random()*.08,cy:Math.random()<.4}\n }\n for (let i=0;i<PC;i++) mkP(i)\n const pge = new THREE.BufferGeometry()\n pge.setAttribute('position', new THREE.BufferAttribute(pp,3))\n pge.setAttribute('color', new THREE.BufferAttribute(pc,3))\n G.add(new THREE.Points(pge, new THREE.PointsMaterial({size:.017,vertexColors:true,transparent:true,opacity:.88,depthWrite:false})))\n\n scene.add(new THREE.AmbientLight(0x0a0a1a, 3))\n const ptP = new THREE.PointLight(COLORS.purple, 6, 20); G.add(ptP)\n\n let fr=0, rafId\n const animate = () => {\n rafId = requestAnimationFrame(animate)\n fr++; const t = fr*.012\n coreMat.uniforms.uT.value = t\n G.rotation.y+=.0035; G.rotation.x+=.001\n \n for(let i=0;i<PC;i++){\n const p=pd[i]; p.life++\n const w=Math.sin(p.life*p.ws)*p.wb\n p.x+=p.d.x*p.sp+p.perp.x*w\n p.y+=p.d.y*p.sp+p.perp.y*w\n p.z+=p.d.z*p.sp+p.perp.z*w\n const pg=p.life/p.max, f=pg<.1?pg/.1:(pg>.65?1-(pg-.65)/.35:1)\n if(p.life>=p.max) mkP(i)\n const ix=i*3; pp[ix]=p.x; pp[ix+1]=p.y; pp[ix+2]=p.z\n if(p.cy){ pc[ix]=.04;pc[ix+1]=f*.7;pc[ix+2]=f*.84 }\n else { pc[ix]=f*.38;pc[ix+1]=f*.4;pc[ix+2]=f*.95 }\n }\n pge.attributes.position.needsUpdate=true\n pge.attributes.color.needsUpdate=true\n ren.render(scene, cam)\n }\n animate()\n\n return () => {\n cancelAnimationFrame(rafId)\n ren.dispose()\n el.removeChild(ren.domElement)\n }\n }, [])\n return <div ref={mountRef} className={`w-full h-full ${className}`} style={{cursor:'none'}} />\n}",
    "likes": 0,
    "author": "Animation AI",
    "featured": true,
    "prompt": "Create a futuristic 3D neural core with displacement shaders and pulsing network tendrils.",
    "updatedAt": "2026-05-10T13:19:37.565Z"
  },
  {
    "slug": "abyssal-matrix-core",
    "title": "Abyssal Matrix Core",
    "category": "animation",
    "tag": "threejs",
    "description": "An advanced 3D point cloud inspired by undulating surfaces, twisted into a continuous magnetic cylinder. Features thousands of responsive particles that warp violently away from the cursor using raycasting and math-driven physics.",
    "previewCode": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<title>Abyssal Matrix Core</title>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js\"></script>\n<style>\n*{margin:0;padding:0;box-sizing:border-box}\nbody{background:#010103;overflow:hidden;width:100vw;height:100vh}\ncanvas{display:block}\n.label{position:absolute;bottom:30px;left:50%;transform:translateX(-50%);color:rgba(255,255,255,0.4);font:700 9px/1 sans-serif;letter-spacing:0.4em;text-transform:uppercase;pointer-events:none}\n</style>\n</head>\n<body>\n<canvas id=\"c\"></canvas>\n<div class=\"label\">Move mouse to repel the core</div>\n<script>\nvar W=window.innerWidth,H=window.innerHeight;\nvar scene=new THREE.Scene();\nscene.fog=new THREE.FogExp2('#010103',0.001);\nvar camera=new THREE.PerspectiveCamera(45,W/H,1,2000);\ncamera.position.set(0,0,450);\nvar renderer=new THREE.WebGLRenderer({canvas:document.getElementById('c'),alpha:true,antialias:true});\nrenderer.setSize(W,H);renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));\n\n// Matrix Geometry\nvar amountX=80,amountY=80,spacing=6;\nvar numParticles=amountX*amountY;\nvar geometry=new THREE.BufferGeometry();\nvar positions=new Float32Array(numParticles*3);\nvar colors=new Float32Array(numParticles*3);\nvar basePositions=new Float32Array(numParticles*3);\nvar color=new THREE.Color();\n\nvar idx=0;\nfor(var ix=0;ix<amountX;ix++){\n for(var iy=0;iy<amountY;iy++){\n var theta=(ix/amountX)*Math.PI*4;\n var y=(iy-amountY/2)*spacing;\n var radius=120+Math.sin((iy/amountY)*Math.PI)*40;\n \n var x=Math.cos(theta)*radius;\n var z=Math.sin(theta)*radius;\n \n positions[idx]=x;positions[idx+1]=y;positions[idx+2]=z;\n basePositions[idx]=x;basePositions[idx+1]=y;basePositions[idx+2]=z;\n \n color.setHSL((ix/amountX)*0.2+0.4, 0.9, 0.6); // Cyan/Blue range\n colors[idx]=color.r;colors[idx+1]=color.g;colors[idx+2]=color.b;\n \n idx+=3;\n }\n}\n\ngeometry.setAttribute('position',new THREE.BufferAttribute(positions,3));\ngeometry.setAttribute('color',new THREE.BufferAttribute(colors,3));\n\nvar material=new THREE.PointsMaterial({size:2,vertexColors:true,transparent:true,opacity:0.8,blending:THREE.AdditiveBlending});\nvar particles=new THREE.Points(geometry,material);\nscene.add(particles);\n\nvar mouse=new THREE.Vector2();\nvar raycaster=new THREE.Raycaster();\nvar plane=new THREE.Plane(new THREE.Vector3(0,0,1),0);\nvar target=new THREE.Vector3();\nvar isHovering=false;\n\nwindow.addEventListener('mousemove',function(e){\n mouse.x=(e.clientX/W)*2-1;\n mouse.y=-(e.clientY/H)*2+1;\n raycaster.setFromCamera(mouse,camera);\n raycaster.ray.intersectPlane(plane,target);\n isHovering=true;\n});\nwindow.addEventListener('mouseout',function(){isHovering=false;});\nwindow.addEventListener('resize',function(){W=window.innerWidth;H=window.innerHeight;camera.aspect=W/H;camera.updateProjectionMatrix();renderer.setSize(W,H);});\n\nvar clock=new THREE.Clock();\nfunction animate(){\n requestAnimationFrame(animate);\n var t=clock.getElapsedTime();\n \n particles.rotation.y=t*0.2;\n particles.rotation.z=Math.sin(t*0.1)*0.1;\n \n var posAttr=geometry.attributes.position;\n var posArray=posAttr.array;\n \n // Inverse rotation to calculate accurate mouse repulsion in world space\n var invMatrix=new THREE.Matrix4().copy(particles.matrixWorld).invert();\n var localTarget=target.clone().applyMatrix4(invMatrix);\n \n for(var i=0;i<numParticles;i++){\n var i3=i*3;\n var bx=basePositions[i3], by=basePositions[i3+1], bz=basePositions[i3+2];\n \n // Wave motion\n var wave=Math.sin(bx*0.02+t*2)*10+Math.cos(by*0.02+t*1.5)*10;\n \n // Mouse repulsion\n var dx=bx-localTarget.x, dy=by-localTarget.y, dz=bz-localTarget.z;\n var distSq=dx*dx+dy*dy+dz*dz;\n var force=0;\n if(isHovering && distSq<25000){\n force=(25000-distSq)/25000 * 40;\n }\n \n // Normalize vector for push direction\n var len=Math.sqrt(distSq)||1;\n var nx=dx/len, ny=dy/len, nz=dz/len;\n \n posArray[i3]=bx+nx*force+Math.cos(t+by*0.05)*wave;\n posArray[i3+1]=by+ny*force;\n posArray[i3+2]=bz+nz*force+Math.sin(t+bx*0.05)*wave;\n }\n \n posAttr.needsUpdate=true;\n renderer.render(scene,camera);\n}\nanimate();\n</script>\n</body>\n</html>",
    "code": "'use client';\nimport { useRef, useMemo, useState } from 'react';\nimport { Canvas, useFrame } from '@react-three/fiber';\nimport * as THREE from 'three';\n\nconst ParticleCore = () => {\n const pointsRef = useRef<THREE.Points>(null);\n const [hovered, setHovered] = useState(false);\n const target = useRef(new THREE.Vector3());\n \n const { positions, colors, basePositions, numParticles } = useMemo(() => {\n const amountX = 80;\n const amountY = 80;\n const spacing = 6;\n const num = amountX * amountY;\n const pos = new Float32Array(num * 3);\n const col = new Float32Array(num * 3);\n const base = new Float32Array(num * 3);\n const color = new THREE.Color();\n \n let idx = 0;\n for (let ix = 0; ix < amountX; ix++) {\n for (let iy = 0; iy < amountY; iy++) {\n const theta = (ix / amountX) * Math.PI * 4;\n const y = (iy - amountY / 2) * spacing;\n const radius = 120 + Math.sin((iy / amountY) * Math.PI) * 40;\n \n const x = Math.cos(theta) * radius;\n const z = Math.sin(theta) * radius;\n \n pos[idx] = x; pos[idx+1] = y; pos[idx+2] = z;\n base[idx] = x; base[idx+1] = y; base[idx+2] = z;\n \n color.setHSL((ix / amountX) * 0.2 + 0.4, 0.9, 0.6);\n col[idx] = color.r; col[idx+1] = color.g; col[idx+2] = color.b;\n \n idx += 3;\n }\n }\n return { positions: pos, colors: col, basePositions: base, numParticles: num };\n }, []);\n\n useFrame((state) => {\n if (!pointsRef.current) return;\n const t = state.clock.getElapsedTime();\n const pts = pointsRef.current;\n \n pts.rotation.y = t * 0.2;\n pts.rotation.z = Math.sin(t * 0.1) * 0.1;\n \n // Unproject mouse to a 3D coordinate on z=0 plane\n target.current.set(state.mouse.x, state.mouse.y, 0.5).unproject(state.camera);\n const dir = target.current.clone().sub(state.camera.position).normalize();\n const dist = -state.camera.position.z / dir.z;\n target.current.copy(state.camera.position).add(dir.multiplyScalar(dist));\n \n const invMatrix = new THREE.Matrix4().copy(pts.matrixWorld).invert();\n const localTarget = target.current.clone().applyMatrix4(invMatrix);\n \n const posArray = pts.geometry.attributes.position.array as Float32Array;\n \n for (let i = 0; i < numParticles; i++) {\n const i3 = i * 3;\n const bx = basePositions[i3], by = basePositions[i3+1], bz = basePositions[i3+2];\n \n const wave = Math.sin(bx * 0.02 + t * 2) * 10 + Math.cos(by * 0.02 + t * 1.5) * 10;\n \n const dx = bx - localTarget.x, dy = by - localTarget.y, dz = bz - localTarget.z;\n const distSq = dx*dx + dy*dy + dz*dz;\n let force = 0;\n if (hovered && distSq < 25000) {\n force = (25000 - distSq) / 25000 * 40;\n }\n \n const len = Math.sqrt(distSq) || 1;\n const nx = dx/len, ny = dy/len, nz = dz/len;\n \n posArray[i3] = bx + nx * force + Math.cos(t + by * 0.05) * wave;\n posArray[i3+1] = by + ny * force;\n posArray[i3+2] = bz + nz * force + Math.sin(t + bx * 0.05) * wave;\n }\n \n pts.geometry.attributes.position.needsUpdate = true;\n });\n\n return (\n <points \n ref={pointsRef} \n onPointerOver={() => setHovered(true)} \n onPointerOut={() => setHovered(false)}\n >\n <bufferGeometry>\n <bufferAttribute attach=\"attributes-position\" count={numParticles} array={positions} itemSize={3} />\n <bufferAttribute attach=\"attributes-color\" count={numParticles} array={colors} itemSize={3} />\n </bufferGeometry>\n <pointsMaterial size={2} vertexColors transparent opacity={0.8} blending={THREE.AdditiveBlending} depthWrite={false} />\n </points>\n );\n};\n\nexport const AbyssalMatrixCore = () => {\n return (\n <div className=\"relative w-full h-screen bg-[#010103] overflow-hidden font-sans\">\n <Canvas camera={{ position: [0, 0, 450], fov: 45 }}>\n <fog attach=\"fog\" args={['#010103', 200, 1000]} />\n <ParticleCore />\n </Canvas>\n <div className=\"absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 text-[9px] font-bold tracking-[0.4em] uppercase pointer-events-none z-30\">\n Hover to repel the core\n </div>\n </div>\n );\n};",
    "likes": 0,
    "author": "Animation AI",
    "featured": true,
    "prompt": "Create a 3D abyssal matrix core with undulating point clouds that repel from the cursor.",
    "createdAt": "2026-05-10T13:19:37.565Z",
    "updatedAt": "2026-05-10T13:19:37.565Z"
  },
  {
    "slug": "aurora-plexus-sphere",
    "title": "Aurora Plexus Sphere",
    "category": "animation",
    "tag": "threejs",
    "description": "A 3D spherical mesh of interconnected glowing nodes that undulates via Simplex noise. Features intense raycast-driven magnetic attraction where vertices stretch toward the cursor, creating organic, aurora-like deformations.",
    "previewCode": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<title>Aurora Plexus Sphere</title>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js\"></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/simplex-noise/2.4.0/simplex-noise.min.js\"></script>\n<style>\n*{margin:0;padding:0;box-sizing:border-box}\nbody{background:#000;overflow:hidden;width:100vw;height:100vh}\ncanvas{display:block}\n.label{position:absolute;bottom:30px;left:50%;transform:translateX(-50%);color:rgba(180,100,255,0.6);font:700 9px/1 sans-serif;letter-spacing:0.4em;text-transform:uppercase;pointer-events:none}\n</style>\n</head>\n<body>\n<canvas id=\"c\"></canvas>\n<div class=\"label\">Move mouse to attract the plexus</div>\n<script>\nvar W=window.innerWidth,H=window.innerHeight;\nvar scene=new THREE.Scene();\nscene.fog=new THREE.FogExp2('#000',0.001);\nvar camera=new THREE.PerspectiveCamera(45,W/H,1,2000);\ncamera.position.set(0,0,400);\nvar renderer=new THREE.WebGLRenderer({canvas:document.getElementById('c'),alpha:true,antialias:true});\nrenderer.setSize(W,H);renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));\n\nvar simplex=new SimplexNoise();\n\n// Create base sphere geometry\nvar geometry=new THREE.IcosahedronGeometry(120, 4); // High detail\nvar basePositions=new Float32Array(geometry.attributes.position.array);\n\n// Create Line Segments (Wireframe)\nvar wireframeGeometry=new THREE.WireframeGeometry(geometry);\nvar lineMaterial=new THREE.LineBasicMaterial({color:0xb464ff, transparent:true, opacity:0.15, blending:THREE.AdditiveBlending});\nvar lines=new THREE.LineSegments(wireframeGeometry, lineMaterial);\nscene.add(lines);\n\n// Create Points at vertices\nvar pointMaterial=new THREE.PointsMaterial({color:0x00ffaa, size:2, transparent:true, opacity:0.8, blending:THREE.AdditiveBlending});\nvar points=new THREE.Points(geometry, pointMaterial);\nscene.add(points);\n\nvar group=new THREE.Group();\ngroup.add(lines);\ngroup.add(points);\nscene.add(group);\n\nvar mouse=new THREE.Vector2();\nvar raycaster=new THREE.Raycaster();\nvar plane=new THREE.Plane(new THREE.Vector3(0,0,1),0);\nvar target=new THREE.Vector3();\nvar isHovering=false;\n\nwindow.addEventListener('mousemove',function(e){\n mouse.x=(e.clientX/W)*2-1;\n mouse.y=-(e.clientY/H)*2+1;\n raycaster.setFromCamera(mouse,camera);\n raycaster.ray.intersectPlane(plane,target);\n isHovering=true;\n});\nwindow.addEventListener('mouseout',function(){isHovering=false;});\nwindow.addEventListener('resize',function(){W=window.innerWidth;H=window.innerHeight;camera.aspect=W/H;camera.updateProjectionMatrix();renderer.setSize(W,H);});\n\nvar clock=new THREE.Clock();\n\nfunction animate(){\n requestAnimationFrame(animate);\n var t=clock.getElapsedTime();\n \n group.rotation.y=t*0.1;\n group.rotation.x=Math.sin(t*0.05)*0.2;\n \n var posAttr=geometry.attributes.position;\n var posArray=posAttr.array;\n var wirePosArray=wireframeGeometry.attributes.position.array;\n \n var invMatrix=new THREE.Matrix4().copy(group.matrixWorld).invert();\n var localTarget=target.clone().applyMatrix4(invMatrix);\n \n for(var i=0;i<basePositions.length;i+=3){\n var bx=basePositions[i], by=basePositions[i+1], bz=basePositions[i+2];\n \n // Simplex Noise Undulation\n var noiseVal=simplex.noise3D(bx*0.01, by*0.01, t*0.5);\n var scale=1 + noiseVal*0.15;\n \n var nx=bx*scale, ny=by*scale, nz=bz*scale;\n \n // Mouse Attraction (Gravity)\n var dx=localTarget.x-nx, dy=localTarget.y-ny, dz=localTarget.z-nz;\n var distSq=dx*dx+dy*dy+dz*dz;\n \n if(isHovering && distSq<40000){\n var pull=(40000-distSq)/40000 * 30; // Max pull distance\n var len=Math.sqrt(distSq)||1;\n nx+= (dx/len)*pull;\n ny+= (dy/len)*pull;\n nz+= (dz/len)*pull;\n }\n \n posArray[i]=nx; posArray[i+1]=ny; posArray[i+2]=nz;\n }\n \n // Wireframe geometry doesn't automatically sync with the base geometry in Three.js\n // We have to rebuild it or manually update it. For performance, we recreate the wireframe buffer.\n var newWireframeGeom = new THREE.WireframeGeometry(geometry);\n lines.geometry.dispose();\n lines.geometry = newWireframeGeom;\n \n posAttr.needsUpdate=true;\n renderer.render(scene,camera);\n}\nanimate();\n</script>\n</body>\n</html>",
    "code": "'use client';\nimport { useRef, useMemo, useState } from 'react';\nimport { Canvas, useFrame } from '@react-three/fiber';\nimport * as THREE from 'three';\nimport { createNoise3D } from 'simplex-noise';\n\nconst PlexusCore = () => {\n const groupRef = useRef<THREE.Group>(null);\n const meshRef = useRef<THREE.Mesh>(null);\n const linesRef = useRef<THREE.LineSegments>(null);\n const pointsRef = useRef<THREE.Points>(null);\n const [hovered, setHovered] = useState(false);\n const target = useRef(new THREE.Vector3());\n const noise3D = useMemo(() => createNoise3D(), []);\n \n const { geometry, basePositions } = useMemo(() => {\n const geom = new THREE.IcosahedronGeometry(120, 4);\n const basePos = new Float32Array(geom.attributes.position.array);\n return { geometry: geom, basePositions: basePos };\n }, []);\n\n useFrame((state) => {\n if (!groupRef.current || !meshRef.current || !linesRef.current || !pointsRef.current) return;\n const t = state.clock.getElapsedTime();\n const group = groupRef.current;\n \n group.rotation.y = t * 0.1;\n group.rotation.x = Math.sin(t * 0.05) * 0.2;\n \n target.current.set(state.mouse.x, state.mouse.y, 0.5).unproject(state.camera);\n const dir = target.current.clone().sub(state.camera.position).normalize();\n const dist = -state.camera.position.z / dir.z;\n target.current.copy(state.camera.position).add(dir.multiplyScalar(dist));\n \n const invMatrix = new THREE.Matrix4().copy(group.matrixWorld).invert();\n const localTarget = target.current.clone().applyMatrix4(invMatrix);\n \n const posAttr = meshRef.current.geometry.attributes.position;\n const posArray = posAttr.array as Float32Array;\n \n for (let i = 0; i < basePositions.length; i += 3) {\n const bx = basePositions[i], by = basePositions[i+1], bz = basePositions[i+2];\n \n const noiseVal = noise3D(bx * 0.01, by * 0.01, t * 0.5);\n const scale = 1 + noiseVal * 0.15;\n \n let nx = bx * scale, ny = by * scale, nz = bz * scale;\n \n const dx = localTarget.x - nx, dy = localTarget.y - ny, dz = bz - nx;\n const distSq = dx*dx + dy*dy + dz*dz;\n \n if (hovered && distSq < 40000) {\n const pull = (40000 - distSq) / 40000 * 30;\n const len = Math.sqrt(distSq) || 1;\n nx += (dx / len) * pull;\n ny += (dy / len) * pull;\n nz += (dz / len) * pull;\n }\n \n posArray[i] = nx; posArray[i+1] = ny; posArray[i+2] = nz;\n }\n \n posAttr.needsUpdate = true;\n \n // Manually sync wireframe geometry\n const newWireframeGeom = new THREE.WireframeGeometry(meshRef.current.geometry);\n linesRef.current.geometry.dispose();\n linesRef.current.geometry = newWireframeGeom;\n });\n\n return (\n <group \n ref={groupRef}\n onPointerOver={() => setHovered(true)} \n onPointerOut={() => setHovered(false)}\n >\n {/* Hidden mesh used just to hold the animated geometry */}\n <mesh ref={meshRef} geometry={geometry} visible={false} />\n \n <lineSegments ref={linesRef}>\n <lineBasicMaterial color={0xb464ff} transparent opacity={0.15} blending={THREE.AdditiveBlending} depthWrite={false} />\n </lineSegments>\n \n <points ref={pointsRef} geometry={geometry}>\n <pointsMaterial color={0x00ffaa} size={2} transparent opacity={0.8} blending={THREE.AdditiveBlending} depthWrite={false} />\n </points>\n </group>\n );\n};\n\nexport const AuroraPlexusSphere = () => {\n return (\n <div className=\"relative w-full h-screen bg-black overflow-hidden font-sans\">\n <Canvas camera={{ position: [0, 0, 400], fov: 45 }}>\n <fog attach=\"fog\" args={['#000', 200, 1000]} />\n <PlexusCore />\n </Canvas>\n <div className=\"absolute bottom-8 left-1/2 -translate-x-1/2 text-[#b464ff]/60 text-[9px] font-bold tracking-[0.4em] uppercase pointer-events-none z-30\">\n Hover to attract the plexus\n </div>\n </div>\n );\n};",
    "likes": 0,
    "author": "Animation AI",
    "featured": true,
    "prompt": "Create an aurora plexus sphere that organically undulates with simplex noise and attracts to the mouse.",
    "createdAt": "2026-05-10T13:19:37.565Z",
    "updatedAt": "2026-05-10T13:19:37.565Z"
  },
  {
    "slug": "dynamic-3d-dna-helix",
    "title": "Interactive 3D DNA Helix Particle System",
    "category": "animation",
    "tag": "threejs",
    "description": "An interactive 3D particle system that forms a DNA helix, with mouse-guided morphing and dynamic color controls.",
    "previewCode": "\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n <meta charset=\"UTF-8\">\n <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n <title>Interactive 3D DNA Helix</title>\n <style>\n body { margin: 0; padding: 0; overflow: hidden; background-color: black; font-family: 'Courier New', Courier, monospace; color: white; user-select: none; }\n #canvas-container { width: 100vw; height: 100vh; position: relative; }\n \n .ui-element { position: absolute; background: rgba(10, 10, 20, 0.6); border: 1px solid rgba(50, 50, 70, 0.4); border-radius: 8px; backdrop-filter: blur(5px); }\n \n #top-info { top: 20px; left: 50%; transform: translateX(-50%); padding: 10px 20px; text-align: center; font-size: 14px; box-shadow: 0 4px 15px rgba(0,0,0,0.5); }\n \n #bottom-controls { bottom: 20px; left: 50%; transform: translateX(-50%); padding: 15px 25px; display: flex; flex-direction: column; align-items: center; gap: 15px; box-shadow: 0 -4px 15px rgba(0,0,0,0.5); }\n \n #change-shape-btn { padding: 10px 20px; background: rgba(30, 80, 150, 0.8); border: 1px solid #3366cc; border-radius: 6px; font-weight: bold; cursor: pointer; transition: all 0.2s ease; font-size: 12px; }\n #change-shape-btn:hover { background: rgba(50, 100, 180, 0.9); box-shadow: 0 0 10px rgba(100, 150, 250, 0.6); }\n \n #color-picker { display: flex; gap: 12px; }\n .color-dot { width: 22px; height: 22px; border-radius: 50%; cursor: pointer; border: 2px solid transparent; transition: all 0.2s ease; box-shadow: 0 0 5px rgba(255,255,255,0.2); }\n .color-dot:hover { transform: scale(1.15); box-shadow: 0 0 10px rgba(255,255,255,0.4); }\n .color-dot.active { border-color: white; box-shadow: 0 0 12px rgba(255,255,255,0.7); }\n \n #orange { background-color: #ff9933; }\n #purple { background-color: #9933ff; }\n #green { background-color: #33cc33; }\n #multi { background: linear-gradient(135deg, #ff9933 0%, #33cc33 50%, #9933ff 100%); }\n\n </style>\n</head>\n<body>\n <div id=\"canvas-container\">\n </div>\n\n <div id=\"top-info\" class=\"ui-element\">\n Shape: <span id=\"current-shape-text\">DNA Helix</span> (Click to morph)\n </div>\n\n <div id=\"bottom-controls\" class=\"ui-element\">\n <div id=\"change-shape-btn\">Change Shape</div>\n <div id=\"color-picker\">\n <div id=\"orange\" class=\"color-dot\" data-color=\"#ff9933\"></div>\n <div id=\"purple\" class=\"color-dot\" data-color=\"#9933ff\"></div>\n <div id=\"green\" class=\"color-dot\" data-color=\"#33cc33\"></div>\n <div id=\"multi\" class=\"color-dot active\" data-color=\"multi\"></div>\n </div>\n </div>\n\n <script type=\"importmap\">\n {\n \"imports\": {\n \"three\": \"https://unpkg.com/three@0.160.0/build/three.module.js\",\n \"three/examples/jsm/\": \"https://unpkg.com/three@0.160.0/examples/jsm/\"\n }\n }\n </script>\n <script type=\"module\">\n import * as THREE from 'three';\n import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';\n import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';\n import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';\n import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';\n import { CopyShader } from 'three/examples/jsm/shaders/CopyShader.js';\n\n // Scene Setup\n const container = document.getElementById('canvas-container');\n const scene = new THREE.Scene();\n const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);\n camera.position.z = 20;\n\n const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });\n renderer.setSize(window.innerWidth, window.innerHeight);\n renderer.setPixelRatio(window.devicePixelRatio);\n container.appendChild(renderer.domElement);\n\n // Particle System Setup\n const particleCount = 2500;\n const positions = new Float32Array(particleCount * 3);\n const colors = new Float32Array(particleCount * 3);\n const targetPositions = new Float32Array(particleCount * 3);\n const baseColors = new Float32Array(particleCount * 3);\n const initialStates = new Float32Array(particleCount);\n\n const geometry = new THREE.BufferGeometry();\n geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));\n geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));\n \n const material = new THREE.PointsMaterial({\n size: 0.1,\n vertexColors: true,\n blending: THREE.AdditiveBlending,\n depthTest: false,\n transparent: true,\n opacity: 0.8\n });\n\n const points = new THREE.Points(geometry, material);\n scene.add(points);\n\n // Particle Shape Definitions\n function createHelixPositions() {\n const pos = new Float32Array(particleCount * 3);\n const cols = new Float32Array(particleCount * 3);\n const initial = new Float32Array(particleCount);\n const numTurns = 6;\n const radius = 5;\n const height = 15;\n const separation = 2; // Distance between strands\n\n for (let i = 0; i < particleCount; i++) {\n const strand = i < particleCount / 2 ? 1 : -1;\n const idx = i % (particleCount / 2);\n const t = idx / (particleCount / 2); // 0 to 1\n\n const angle = t * Math.PI * 2 * numTurns;\n const h = (t - 0.5) * height;\n\n // Position\n pos[i * 3 + 0] = (radius + strand * separation / 2) * Math.cos(angle);\n pos[i * 3 + 1] = h;\n pos[i * 3 + 2] = (radius + strand * separation / 2) * Math.sin(angle);\n \n // Colors - initial multi-color from image\n let col;\n if (strand === 1) {\n col = new THREE.Color().setHSL(0.5, 0.8, 0.7); // Light Blue\n } else {\n col = new THREE.Color().setHSL(0.3, 0.8, 0.7); // Light Green\n }\n cols[i * 3 + 0] = col.r;\n cols[i * 3 + 1] = col.g;\n cols[i * 3 + 2] = col.b;\n\n // Add random initial noise\n pos[i * 3 + 0] += (Math.random() - 0.5) * 0.2;\n pos[i * 3 + 1] += (Math.random() - 0.5) * 0.2;\n pos[i * 3 + 2] += (Math.random() - 0.5) * 0.2;\n\n // Initial positions can be random\n positions[i * 3 + 0] = (Math.random() - 0.5) * 50;\n positions[i * 3 + 1] = (Math.random() - 0.5) * 50;\n positions[i * 3 + 2] = (Math.random() - 0.5) * 50;\n\n colors[i * 3 + 0] = cols[i * 3 + 0];\n colors[i * 3 + 1] = cols[i * 3 + 1];\n colors[i * 3 + 2] = cols[i * 3 + 2];\n }\n targetPositions.set(pos);\n baseColors.set(cols);\n }\n\n function setParticleTarget(shape) {\n const height = 15;\n const radius = 5;\n const multiColor = document.querySelector('.color-dot.active').id === 'multi';\n\n for (let i = 0; i < particleCount; i++) {\n const idx = i % (particleCount / 2);\n const t = idx / (particleCount / 2);\n const strand = i < particleCount / 2 ? 1 : -1;\n const h = (t - 0.5) * height;\n\n let tx, ty, tz;\n let t_col;\n\n switch(shape) {\n case 'DNA Helix':\n const numTurns = 6;\n const separation = 2;\n const angle = t * Math.PI * 2 * numTurns;\n tx = (radius + strand * separation / 2) * Math.cos(angle);\n ty = h;\n tz = (radius + strand * separation / 2) * Math.sin(angle);\n break;\n case 'Double Helix Wave':\n const numWaves = 4;\n const waveAngle = t * Math.PI * 2 * numWaves;\n const strandOffset = strand * 1.5;\n tx = radius * Math.cos(waveAngle);\n ty = h;\n tz = radius * Math.sin(waveAngle) + strandOffset;\n break;\n case 'Particle Voids':\n // Disperse particles to the sphere edges with noise\n const sph_radius = 15;\n tx = (Math.random() - 0.5) * sph_radius * 2;\n ty = (Math.random() - 0.5) * sph_radius * 2;\n tz = (Math.random() - 0.5) * sph_radius * 2;\n // But slightly gravitate to a void pattern\n break;\n }\n\n // Add dynamic noise to target\n targetPositions[i * 3 + 0] = tx + (Math.random() - 0.5) * 0.1;\n targetPositions[i * 3 + 1] = ty + (Math.random() - 0.5) * 0.1;\n targetPositions[i * 3 + 2] = tz + (Math.random() - 0.5) * 0.1;\n\n if (multiColor) {\n // Update multi-color base on shape strands if needed\n // For now, use the initial base colors\n t_col = new THREE.Color(baseColors[i*3], baseColors[i*3+1], baseColors[i*3+2]);\n colors[i * 3 + 0] = t_col.r;\n colors[i * 3 + 1] = t_col.g;\n colors[i * 3 + 2] = t_col.b;\n }\n }\n geometry.attributes.position.needsUpdate = true;\n geometry.attributes.color.needsUpdate = true;\n }\n\n // Initialize shape\n createHelixPositions();\n setParticleTarget('DNA Helix');\n\n // Post-processing: Bloom for glow\n const renderPass = new RenderPass(scene, camera);\n const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.0, 0.4, 0.85);\n bloomPass.threshold = 0.3;\n bloomPass.strength = 1.2;\n bloomPass.radius = 0.5;\n\n const composer = new EffectComposer(renderer);\n composer.addPass(renderPass);\n composer.addPass(bloomPass);\n\n // Animation and Mouse Interaction\n let mouseX = 0;\n let mouseY = 0;\n const lerpFactor = 0.05; // Position lerping\n const colorLerpFactor = 0.02; // Color lerping\n\n document.addEventListener('mousemove', (event) => {\n mouseX = (event.clientX / window.innerWidth - 0.5) * 2;\n mouseY = -(event.clientY / window.innerHeight - 0.5) * 2;\n });\n\n const clock = new THREE.Clock();\n\n function animate() {\n requestAnimationFrame(animate);\n const time = clock.getElapsedTime();\n\n // Lerp points to targets and add dynamic motion\n const positions = geometry.attributes.position.array;\n const colorsAttr = geometry.attributes.color.array;\n\n for (let i = 0; i < particleCount; i++) {\n // Lerp position to target\n positions[i * 3 + 0] += (targetPositions[i * 3 + 0] - positions[i * 3 + 0]) * lerpFactor;\n positions[i * 3 + 1] += (targetPositions[i * 3 + 1] - positions[i * 3 + 1]) * lerpFactor;\n positions[i * 3 + 2] += (targetPositions[i * 3 + 2] - positions[i * 3 + 2]) * lerpFactor;\n\n // Dynamic point motion (wiggling)\n positions[i * 3 + 0] += Math.sin(time + i * 0.1) * 0.01;\n positions[i * 3 + 1] += Math.cos(time + i * 0.1) * 0.01;\n positions[i * 3 + 2] += Math.sin(time + i * 0.1) * 0.01;\n\n // Dynamic color fading/cycling (slight)\n const currentShape = document.getElementById('current-shape-text').innerText;\n if (currentShape === 'DNA Helix') {\n // Slight brightness oscillation for glow effect\n const brightness = 0.7 + 0.1 * Math.sin(time * 2 + i * 0.05);\n colorsAttr[i * 3 + 0] = baseColors[i * 3 + 0] * brightness;\n colorsAttr[i * 3 + 1] = baseColors[i * 3 + 1] * brightness;\n colorsAttr[i * 3 + 2] = baseColors[i * 3 + 2] * brightness;\n }\n }\n geometry.attributes.position.needsUpdate = true;\n geometry.attributes.color.needsUpdate = true;\n\n // Rotation and Mouse Follow for overall structure\n points.rotation.y = time * 0.2 + mouseX * 0.3; // Rotate and follow x-mouse\n points.rotation.x = mouseY * 0.2; // Tilt with y-mouse\n\n // Render with post-processing\n composer.render();\n }\n\n animate();\n\n // UI Interactions\n const shapes = ['DNA Helix', 'Double Helix Wave', 'Particle Voids'];\n let currentShapeIndex = 0;\n const changeShapeBtn = document.getElementById('change-shape-btn');\n const topInfoText = document.getElementById('current-shape-text');\n\n changeShapeBtn.addEventListener('click', () => {\n currentShapeIndex = (currentShapeIndex + 1) % shapes.length;\n const newShape = shapes[currentShapeIndex];\n topInfoText.innerText = newShape;\n setParticleTarget(newShape);\n });\n\n // Click on info panel to morph too\n document.getElementById('top-info').addEventListener('click', () => {\n changeShapeBtn.click();\n });\n\n const colorDots = document.querySelectorAll('.color-dot');\n colorDots.forEach(dot => {\n dot.addEventListener('click', () => {\n colorDots.forEach(d => d.classList.remove('active'));\n dot.classList.add('active');\n \n const colorCode = dot.getAttribute('data-color');\n const multiColor = colorCode === 'multi';\n\n for (let i = 0; i < particleCount; i++) {\n const strand = i < particleCount / 2 ? 1 : -1;\n const idx = i % (particleCount / 2);\n const t = idx / (particleCount / 2);\n\n let newColor;\n if (multiColor) {\n // Blend between Blue and Green based on strand\n if (strand === 1) {\n newColor = new THREE.Color().setHSL(0.5, 0.8, 0.7); // Light Blue\n } else {\n newColor = new THREE.Color().setHSL(0.3, 0.8, 0.7); // Light Green\n }\n } else {\n // Single color - slightly vary per strand for depth\n const base_col = new THREE.Color(colorCode);\n const hsl = {};\n base_col.getHSL(hsl);\n hsl.l *= (0.9 + 0.2 * Math.random());\n newColor = new THREE.Color().setHSL(hsl.h, hsl.s, hsl.l);\n }\n baseColors[i * 3 + 0] = newColor.r;\n baseColors[i * 3 + 1] = newColor.g;\n baseColors[i * 3 + 2] = newColor.b;\n }\n geometry.attributes.color.needsUpdate = true;\n });\n });\n\n // Window Resize Handling\n window.addEventListener('resize', () => {\n camera.aspect = window.innerWidth / window.innerHeight;\n camera.updateProjectionMatrix();\n renderer.setSize(window.innerWidth, window.innerHeight);\n composer.setSize(window.innerWidth, window.innerHeight);\n bloomPass.setSize(window.innerWidth, window.innerHeight);\n });\n\n </script>\n</body>\n</html>\n",
    "code": "\n// Three.js Interactive DNA Helix Component\nimport React, { useEffect, useRef } from 'react';\nimport * as THREE from 'three';\nimport { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';\nimport { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';\nimport { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';\n\nexport default function DNAHelix() {\n const containerRef = useRef<HTMLDivElement>(null);\n\n useEffect(() => {\n const container = containerRef.current;\n if (!container) return;\n\n const scene = new THREE.Scene();\n const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);\n camera.position.z = 20;\n\n const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });\n renderer.setSize(window.innerWidth, window.innerHeight);\n container.appendChild(renderer.domElement);\n\n const particleCount = 2500;\n const positions = new Float32Array(particleCount * 3);\n const colors = new Float32Array(particleCount * 3);\n const targetPositions = new Float32Array(particleCount * 3);\n const baseColors = new Float32Array(particleCount * 3);\n\n const geometry = new THREE.BufferGeometry();\n geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));\n geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));\n \n const material = new THREE.PointsMaterial({\n size: 0.1, vertexColors: true, blending: THREE.AdditiveBlending,\n depthTest: false, transparent: true, opacity: 0.8\n });\n\n const points = new THREE.Points(geometry, material);\n scene.add(points);\n\n // Helper to set targets (Helix)\n const setHelix = () => {\n for (let i = 0; i < particleCount; i++) {\n const strand = i < particleCount / 2 ? 1 : -1;\n const idx = i % (particleCount / 2);\n const t = idx / (particleCount / 2);\n const angle = t * Math.PI * 12;\n const h = (t - 0.5) * 15;\n targetPositions[i * 3] = (5 + strand) * Math.cos(angle);\n targetPositions[i * 3 + 1] = h;\n targetPositions[i * 3 + 2] = (5 + strand) * Math.sin(angle);\n const col = new THREE.Color().setHSL(strand === 1 ? 0.5 : 0.3, 0.8, 0.7);\n baseColors[i*3] = col.r; baseColors[i*3+1] = col.g; baseColors[i*3+2] = col.b;\n }\n };\n setHelix();\n\n const composer = new EffectComposer(renderer);\n composer.addPass(new RenderPass(scene, camera));\n composer.addPass(new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.2, 0.4, 0.85));\n\n let mx = 0, my = 0;\n const onMove = (e: MouseEvent) => { mx = (e.clientX/window.innerWidth - 0.5)*2; my = -(e.clientY/window.innerHeight - 0.5)*2; };\n window.addEventListener('mousemove', onMove);\n\n const animate = () => {\n requestAnimationFrame(animate);\n const time = Date.now() * 0.001;\n const pos = geometry.attributes.position.array as Float32Array;\n for (let i = 0; i < particleCount; i++) {\n pos[i*3] += (targetPositions[i*3] - pos[i*3]) * 0.05 + Math.sin(time + i)*0.01;\n pos[i*3+1] += (targetPositions[i*3+1] - pos[i*3+1]) * 0.05 + Math.cos(time + i)*0.01;\n pos[i*3+2] += (targetPositions[i*3+2] - pos[i*3+2]) * 0.05 + Math.sin(time + i)*0.01;\n }\n geometry.attributes.position.needsUpdate = true;\n points.rotation.y = time * 0.2 + mx * 0.3;\n points.rotation.x = my * 0.2;\n composer.render();\n };\n animate();\n\n return () => {\n window.removeEventListener('mousemove', onMove);\n renderer.dispose();\n container.removeChild(renderer.domElement);\n };\n }, []);\n\n return <div ref={containerRef} style={{ width: '100%', height: '100vh', background: 'black' }} />;\n}\n",
    "likes": 0,
    "author": "Animation AI",
    "featured": true,
    "prompt": "Replicate a complex interactive UI: A glowing, 3D particle system forming a DNA helix on a dark, star-field-like background.",
    "createdAt": "2026-05-10T13:19:37.565Z",
    "updatedAt": "2026-05-10T13:19:37.565Z"
  },
  {
    "slug": "torus-system",
    "title": "Torus System",
    "category": "animation",
    "tag": "threejs",
    "description": "Parametric visualization of a toroidal surface with glowing meridians and parallel fields.",
    "previewCode": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Torus System Simulation</title>\n  <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n  <link href=\"https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&family=Syne:wght@400;600;800&display=swap\" rel=\"stylesheet\">\n  <style>\n    * { margin: 0; padding: 0; box-sizing: border-box; }\n    body {\n      width: 100vw;\n      height: 100vh;\n      overflow: hidden;\n      background: #020408;\n      color: #fff;\n      font-family: 'DM Mono', monospace;\n      user-select: none;\n    }\n    #canvas-container {\n      position: absolute;\n      inset: 0;\n      z-index: 1;\n    }\n    canvas {\n      display: block;\n      width: 100%;\n      height: 100%;\n    }\n    /* HUD Layout */\n    .hud-overlay {\n      position: absolute;\n      inset: 0;\n      z-index: 10;\n      pointer-events: none;\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n      padding: 40px;\n    }\n    .hud-element {\n      pointer-events: auto;\n    }\n    /* Top Row */\n    .top-row {\n      display: flex;\n      justify-content: space-between;\n      align-items: flex-start;\n      width: 100%;\n    }\n    .title-group {\n      display: flex;\n      flex-direction: column;\n      gap: 6px;\n    }\n    .title-group h1 {\n      font-family: 'Syne', sans-serif;\n      font-size: 28px;\n      font-weight: 800;\n      letter-spacing: 2px;\n      text-transform: uppercase;\n      color: rgba(255, 255, 255, 0.95);\n    }\n    .title-divider {\n      width: 60px;\n      height: 2px;\n      background: #fbbf24;\n      box-shadow: 0 0 8px #fbbf24;\n    }\n    .status-badge {\n      font-size: 11px;\n      color: rgba(255, 255, 255, 0.4);\n      letter-spacing: 2px;\n      text-transform: uppercase;\n      display: flex;\n      align-items: center;\n      gap: 8px;\n    }\n    .status-dot {\n      width: 6px;\n      height: 6px;\n      background: #10b981;\n      border-radius: 50%;\n      box-shadow: 0 0 8px #10b981;\n      animation: pulseGreen 2s infinite;\n    }\n    /* Bottom Row */\n    .bottom-row {\n      display: flex;\n      justify-content: space-between;\n      align-items: flex-end;\n      width: 100%;\n    }\n    .desc-card {\n      max-width: 340px;\n      background: rgba(2, 4, 8, 0.45);\n      border: 1px solid rgba(255, 255, 255, 0.05);\n      border-radius: 12px;\n      padding: 20px;\n      backdrop-filter: blur(10px);\n      display: flex;\n      flex-direction: column;\n      gap: 16px;\n    }\n    .desc-card p {\n      font-size: 12px;\n      line-height: 1.6;\n      color: rgba(255, 255, 255, 0.6);\n      font-family: system-ui, -apple-system, sans-serif;\n    }\n    /* Slider Styling */\n    .control-group {\n      display: flex;\n      align-items: center;\n      gap: 16px;\n      width: 100%;\n    }\n    .slider-container {\n      flex: 1;\n      position: relative;\n      display: flex;\n      align-items: center;\n    }\n    .custom-slider {\n      -webkit-appearance: none;\n      width: 100%;\n      background: rgba(255, 255, 255, 0.1);\n      height: 2px;\n      border-radius: 1px;\n      outline: none;\n      transition: background 0.3s;\n    }\n    .custom-slider::-webkit-slider-thumb {\n      -webkit-appearance: none;\n      width: 12px;\n      height: 12px;\n      border-radius: 50%;\n      background: #fbbf24;\n      box-shadow: 0 0 10px #fbbf24;\n      cursor: pointer;\n      transition: transform 0.1s, background-color 0.2s;\n    }\n    .custom-slider::-webkit-slider-thumb:hover {\n      transform: scale(1.3);\n    }\n    .pulse-container {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      width: 28px;\n      height: 28px;\n      border-radius: 50%;\n      border: 1px solid rgba(255, 255, 255, 0.08);\n      background: rgba(255, 255, 255, 0.02);\n      flex-shrink: 0;\n    }\n    .pulse-dot {\n      width: 6px;\n      height: 6px;\n      border-radius: 50%;\n      background: #fbbf24;\n      box-shadow: 0 0 8px #fbbf24;\n      animation: pulseYellow 1.5s infinite;\n    }\n    .metric-label {\n      font-size: 10px;\n      color: rgba(255, 255, 255, 0.3);\n      letter-spacing: 1px;\n      text-transform: uppercase;\n    }\n    .metric-value {\n      font-size: 10px;\n      color: #fbbf24;\n      font-weight: bold;\n    }\n    /* Diamond Vector Graphic */\n    .diamond-vector {\n      width: 56px;\n      height: 56px;\n      border: 1px solid rgba(255, 255, 255, 0.08);\n      background: rgba(255, 255, 255, 0.02);\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      transform: rotate(45deg);\n      backdrop-filter: blur(5px);\n      transition: border-color 0.3s, background-color 0.3s;\n    }\n    .diamond-vector:hover {\n      border-color: rgba(251, 191, 36, 0.4);\n      background-color: rgba(251, 191, 36, 0.05);\n    }\n    .diamond-inner {\n      width: 28px;\n      height: 28px;\n      border: 1px solid rgba(251, 191, 36, 0.3);\n      transform: rotate(-45deg);\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    }\n    .diamond-core {\n      width: 6px;\n      height: 6px;\n      background: #fbbf24;\n      box-shadow: 0 0 6px #fbbf24;\n      transform: rotate(45deg);\n    }\n    \n    @keyframes pulseGreen {\n      0%, 100% { opacity: 0.6; transform: scale(1); }\n      50% { opacity: 1; transform: scale(1.2); }\n    }\n    @keyframes pulseYellow {\n      0%, 100% { opacity: 0.7; transform: scale(1); }\n      50% { opacity: 1; transform: scale(1.3); }\n    }\n    /* Loading overlay */\n    #loading {\n      position: absolute;\n      inset: 0;\n      background: #020408;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      z-index: 100;\n      transition: opacity 0.5s;\n    }\n    .spinner {\n      width: 40px;\n      height: 40px;\n      border: 2px solid rgba(255,255,255,0.05);\n      border-top-color: #fbbf24;\n      border-radius: 50%;\n      animation: spin 1s linear infinite;\n    }\n    @keyframes spin {\n      to { transform: rotate(360deg); }\n    }\n  </style>\n</head>\n<body>\n  <div id=\"loading\"><div class=\"spinner\"></div></div>\n  <div id=\"canvas-container\"></div>\n  \n  <div class=\"hud-overlay\">\n    <div class=\"top-row\">\n      <div class=\"title-group hud-element\">\n        <h1>Torus System</h1>\n        <div class=\"title-divider\"></div>\n      </div>\n      <div class=\"status-badge hud-element\">\n        <div class=\"status-dot\"></div>\n        <span>Simulation.v4 // Active</span>\n      </div>\n    </div>\n    \n    <div class=\"bottom-row\">\n      <div class=\"desc-card hud-element\">\n        <p>Parametric visualization of a toroidal surface with glowing meridians and parallel fields.</p>\n        \n        <div style=\"display: flex; justify-content: space-between; align-items: center;\">\n          <span class=\"metric-label\">Engine Warp</span>\n          <span class=\"metric-value\" id=\"speed-indicator\">1.00x</span>\n        </div>\n        \n        <div class=\"control-group\">\n          <div class=\"pulse-container\">\n            <div class=\"pulse-dot\"></div>\n          </div>\n          <div class=\"slider-container\">\n            <input type=\"range\" class=\"custom-slider\" id=\"speed-slider\" min=\"0.2\" max=\"3\" step=\"0.05\" value=\"1\">\n          </div>\n        </div>\n      </div>\n      \n      <div class=\"diamond-vector hud-element\">\n        <div class=\"diamond-inner\">\n          <div class=\"diamond-core\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <script type=\"importmap\">\n    {\n      \"imports\": {\n        \"three\": \"https://unpkg.com/three@0.160.0/build/three.module.js\",\n        \"three/addons/\": \"https://unpkg.com/three@0.160.0/examples/jsm/\"\n      }\n    }\n  </script>\n  <script type=\"module\">\n    import * as THREE from 'three';\n    import { OrbitControls } from 'three/addons/controls/OrbitControls.js';\n    import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';\n    import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';\n    import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';\n\n    // Scene & Renderer\n    const container = document.getElementById('canvas-container');\n    const scene = new THREE.Scene();\n    scene.fog = new THREE.FogExp2(0x020408, 0.025);\n\n    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);\n    camera.position.set(0, 3, 10);\n\n    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });\n    renderer.setSize(window.innerWidth, window.innerHeight);\n    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));\n    renderer.toneMapping = THREE.ACESFilmicToneMapping;\n    renderer.toneMappingExposure = 1.2;\n    container.appendChild(renderer.domElement);\n\n    // Orbit Controls\n    const controls = new OrbitControls(camera, renderer.domElement);\n    controls.enableDamping = true;\n    controls.dampingFactor = 0.05;\n    controls.maxDistance = 20;\n    controls.minDistance = 4;\n    controls.autoRotate = true;\n    controls.autoRotateSpeed = 0.5;\n\n    // Torus Main Shader Material\n    const uniforms = {\n      uTime: { value: 0 },\n      uPulseSpeed: { value: 1.5 },\n      uDeform: { value: 1.0 },\n      uColorCyan: { value: new THREE.Color(0x06b6d4) },\n      uColorAmber: { value: new THREE.Color(0xfbbf24) }\n    };\n\n    const torusMat = new THREE.ShaderMaterial({\n      uniforms,\n      vertexShader: `\n        varying vec2 vUv;\n        varying vec3 vNormal;\n        varying vec3 vViewPosition;\n        uniform float uTime;\n        uniform float uDeform;\n        \n        void main() {\n          vUv = uv;\n          vNormal = normalize(normalMatrix * normal);\n          \n          vec3 pos = position;\n          // Add organic waves deforming the torus grid\n          float wave = sin(pos.x * 1.2 + uTime * 1.5) * cos(pos.z * 1.2 + uTime * 1.2) * uDeform;\n          pos += normal * wave * 0.15;\n          \n          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);\n          vViewPosition = -mvPosition.xyz;\n          gl_Position = projectionMatrix * mvPosition;\n        }\n      `,\n      fragmentShader: `\n        varying vec2 vUv;\n        varying vec3 vNormal;\n        varying vec3 vViewPosition;\n        uniform float uTime;\n        uniform float uPulseSpeed;\n        uniform vec3 uColorCyan;\n        uniform vec3 uColorAmber;\n        \n        void main() {\n          // Draw high fidelity wireframe grid lines\n          float lineU = smoothstep(0.04, 0.0, abs(fract(vUv.x * 40.0 - 0.5) - 0.5) / 40.0);\n          float lineV = smoothstep(0.04, 0.0, abs(fract(vUv.y * 20.0 - 0.5) - 0.5) / 20.0);\n          float grid = max(lineU, lineV);\n          \n          if (grid < 0.05) discard;\n          \n          // Running pulse light glow\n          float pulse = sin(vUv.x * 6.28318 * 4.0 - uTime * uPulseSpeed) * 0.5 + 0.5;\n          pulse *= sin(vUv.y * 6.28318 * 2.0 + uTime * uPulseSpeed * 0.7) * 0.5 + 0.5;\n          pulse = pow(pulse, 4.0);\n          \n          // Fresnel rim highlight\n          vec3 normal = normalize(vNormal);\n          vec3 viewDir = normalize(vViewPosition);\n          float fresnel = pow(1.0 - max(dot(normal, viewDir), 0.0), 3.0);\n          \n          vec3 color = mix(uColorCyan, uColorAmber, pulse);\n          color += uColorAmber * fresnel * 0.7;\n          \n          float alpha = grid * (0.2 + 0.8 * pulse + fresnel * 0.4);\n          gl_FragColor = vec4(color, alpha);\n        }\n      `,\n      transparent: true,\n      blending: THREE.AdditiveBlending,\n      side: THREE.DoubleSide,\n      depthWrite: false\n    });\n\n    const group = new THREE.Group();\n    scene.add(group);\n\n    // Grid Torus mesh\n    const torusGeo = new THREE.TorusGeometry(3.2, 1.1, 45, 120);\n    const torusMesh = new THREE.Mesh(torusGeo, torusMat);\n    group.add(torusMesh);\n\n    // Extra Outer Orbit Wireframe Ring\n    const outerTorusGeo = new THREE.TorusGeometry(3.2, 1.15, 8, 32);\n    const outerWireMat = new THREE.MeshBasicMaterial({\n      color: 0x06b6d4,\n      wireframe: true,\n      transparent: true,\n      opacity: 0.08,\n      blending: THREE.AdditiveBlending\n    });\n    const outerMesh = new THREE.Mesh(outerTorusGeo, outerWireMat);\n    group.add(outerMesh);\n\n    // Center Core Glow Sphere\n    const coreGeo = new THREE.SphereGeometry(0.7, 32, 32);\n    const coreMat = new THREE.ShaderMaterial({\n      vertexShader: `\n        varying vec3 vNormal;\n        void main() {\n          vNormal = normalize(normalMatrix * normal);\n          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n        }\n      `,\n      fragmentShader: `\n        varying vec3 vNormal;\n        void main() {\n          float glow = pow(0.6 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.5);\n          gl_FragColor = vec4(vec3(0xfbbf24) * glow * 1.8, glow * 0.8);\n        }\n      `,\n      transparent: true,\n      blending: THREE.AdditiveBlending,\n      side: THREE.DoubleSide,\n      depthWrite: false\n    });\n    const coreMesh = new THREE.Mesh(coreGeo, coreMat);\n    scene.add(coreMesh);\n\n    // Ambient dust particles (stars)\n    const starCount = 500;\n    const starGeo = new THREE.BufferGeometry();\n    const starPositions = new Float32Array(starCount * 3);\n    for(let i = 0; i < starCount * 3; i++) {\n      starPositions[i] = (Math.random() - 0.5) * 35;\n    }\n    starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));\n    const starMat = new THREE.PointsMaterial({\n      size: 0.05,\n      color: 0xffffff,\n      transparent: true,\n      opacity: 0.4,\n      blending: THREE.AdditiveBlending\n    });\n    const stars = new THREE.Points(starGeo, starMat);\n    scene.add(stars);\n\n    // Lighting\n    const pointLight1 = new THREE.PointLight(0xfbbf24, 2, 15);\n    pointLight1.position.set(4, 4, 4);\n    scene.add(pointLight1);\n\n    const pointLight2 = new THREE.PointLight(0x06b6d4, 2, 15);\n    pointLight2.position.set(-4, -4, -4);\n    scene.add(pointLight2);\n\n    // Post-Processing Bloom\n    const renderPass = new RenderPass(scene, camera);\n    const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);\n    bloomPass.threshold = 0.15;\n    bloomPass.strength = 1.6;\n    bloomPass.radius = 0.65;\n\n    const composer = new EffectComposer(renderer);\n    composer.addPass(renderPass);\n    composer.addPass(bloomPass);\n\n    // Hide loader\n    document.getElementById('loading').style.opacity = '0';\n    setTimeout(() => document.getElementById('loading').remove(), 500);\n\n    // Interactivity: Speed/Deform Slider\n    const speedSlider = document.getElementById('speed-slider');\n    const speedIndicator = document.getElementById('speed-indicator');\n    \n    let warpFactor = 1.0;\n    \n    speedSlider.addEventListener('input', (e) => {\n      const val = parseFloat(e.target.value);\n      warpFactor = val;\n      speedIndicator.innerText = val.toFixed(2) + 'x';\n      \n      // Sync speed and deformation with input\n      uniforms.uPulseSpeed.value = 1.5 * val;\n      uniforms.uDeform.value = val;\n      controls.autoRotateSpeed = 0.5 * val;\n    });\n\n    // Animation loop\n    const clock = new THREE.Clock();\n    function animate() {\n      requestAnimationFrame(animate);\n      \n      const delta = clock.getDelta();\n      const time = clock.getElapsedTime();\n      \n      // Update uniform uTime\n      uniforms.uTime.value = time;\n      \n      // Gentle floating animation\n      group.position.y = Math.sin(time * 0.8) * 0.15;\n      \n      // Rotate Torus meshes independently\n      torusMesh.rotation.z = time * 0.05;\n      outerMesh.rotation.y = -time * 0.08;\n      outerMesh.rotation.x = time * 0.03;\n      \n      // Pulsing scale for the core\n      const coreScale = 1.0 + Math.sin(time * 3.0) * 0.06 * warpFactor;\n      coreMesh.scale.set(coreScale, coreScale, coreScale);\n      \n      // Rotate space background stars\n      stars.rotation.y = time * 0.01;\n      \n      controls.update();\n      composer.render();\n    }\n    animate();\n\n    // Window Resize Handling\n    window.addEventListener('resize', () => {\n      camera.aspect = window.innerWidth / window.innerHeight;\n      camera.updateProjectionMatrix();\n      renderer.setSize(window.innerWidth, window.innerHeight);\n      composer.setSize(window.innerWidth, window.innerHeight);\n    });\n  </script>\n</body>\n</html>",
    "code": "// TorusSystem.tsx • Interactive 3D Torus Wireframe Simulation Component\nimport React, { useEffect, useRef, useState } from 'react';\nimport * as THREE from 'three';\nimport { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';\nimport { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';\nimport { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';\nimport { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';\n\nconst VERTEX_SHADER = `\n  varying vec2 vUv;\n  varying vec3 vNormal;\n  varying vec3 vViewPosition;\n  uniform float uTime;\n  uniform float uDeform;\n  \n  void main() {\n    vUv = uv;\n    vNormal = normalize(normalMatrix * normal);\n    \n    vec3 pos = position;\n    float wave = sin(pos.x * 1.2 + uTime * 1.5) * cos(pos.z * 1.2 + uTime * 1.2) * uDeform;\n    pos += normal * wave * 0.15;\n    \n    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);\n    vViewPosition = -mvPosition.xyz;\n    gl_Position = projectionMatrix * mvPosition;\n  }\n`;\n\nconst FRAGMENT_SHADER = `\n  varying vec2 vUv;\n  varying vec3 vNormal;\n  varying vec3 vViewPosition;\n  uniform float uTime;\n  uniform float uPulseSpeed;\n  uniform vec3 uColorCyan;\n  uniform vec3 uColorAmber;\n  \n  void main() {\n    float lineU = smoothstep(0.04, 0.0, abs(fract(vUv.x * 40.0 - 0.5) - 0.5) / 40.0);\n    float lineV = smoothstep(0.04, 0.0, abs(fract(vUv.y * 20.0 - 0.5) - 0.5) / 20.0);\n    float grid = max(lineU, lineV);\n    \n    if (grid < 0.05) discard;\n    \n    float pulse = sin(vUv.x * 6.28318 * 4.0 - uTime * uPulseSpeed) * 0.5 + 0.5;\n    pulse *= sin(vUv.y * 6.28318 * 2.0 + uTime * uPulseSpeed * 0.7) * 0.5 + 0.5;\n    pulse = pow(pulse, 4.0);\n    \n    vec3 normal = normalize(vNormal);\n    vec3 viewDir = normalize(vViewPosition);\n    float fresnel = pow(1.0 - max(dot(normal, viewDir), 0.0), 3.0);\n    \n    vec3 color = mix(uColorCyan, uColorAmber, pulse);\n    color += uColorAmber * fresnel * 0.7;\n    \n    float alpha = grid * (0.2 + 0.8 * pulse + fresnel * 0.4);\n    gl_FragColor = vec4(color, alpha);\n  }\n`;\n\nexport default function TorusSystem() {\n  const containerRef = useRef<HTMLDivElement>(null);\n  const [warpSpeed, setWarpSpeed] = useState<number>(1.0);\n  const uniformsRef = useRef({\n    uTime: { value: 0 },\n    uPulseSpeed: { value: 1.5 },\n    uDeform: { value: 1.0 },\n    uColorCyan: { value: new THREE.Color(0x06b6d4) },\n    uColorAmber: { value: new THREE.Color(0xfbbf24) }\n  });\n\n  const controlsRef = useRef<OrbitControls | null>(null);\n\n  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {\n    const val = parseFloat(e.target.value);\n    setWarpSpeed(val);\n    if (uniformsRef.current) {\n      uniformsRef.current.uPulseSpeed.value = 1.5 * val;\n      uniformsRef.current.uDeform.value = val;\n    }\n    if (controlsRef.current) {\n      controlsRef.current.autoRotateSpeed = 0.5 * val;\n    }\n  };\n\n  useEffect(() => {\n    const container = containerRef.current;\n    if (!container) return;\n\n    const scene = new THREE.Scene();\n    scene.fog = new THREE.FogExp2(0x020408, 0.025);\n\n    const camera = new THREE.PerspectiveCamera(50, container.clientWidth / container.clientHeight, 0.1, 1000);\n    camera.position.set(0, 3, 10);\n\n    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });\n    renderer.setSize(container.clientWidth, container.clientHeight);\n    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));\n    renderer.toneMapping = THREE.ACESFilmicToneMapping;\n    renderer.toneMappingExposure = 1.2;\n    container.appendChild(renderer.domElement);\n\n    const controls = new OrbitControls(camera, renderer.domElement);\n    controls.enableDamping = true;\n    controls.dampingFactor = 0.05;\n    controls.maxDistance = 20;\n    controls.minDistance = 4;\n    controls.autoRotate = true;\n    controls.autoRotateSpeed = 0.5 * warpSpeed;\n    controlsRef.current = controls;\n\n    const group = new THREE.Group();\n    scene.add(group);\n\n    // Torus Grid Mesh\n    const torusGeo = new THREE.TorusGeometry(3.2, 1.1, 45, 120);\n    const torusMat = new THREE.ShaderMaterial({\n      uniforms: uniformsRef.current,\n      vertexShader: VERTEX_SHADER,\n      fragmentShader: FRAGMENT_SHADER,\n      transparent: true,\n      blending: THREE.AdditiveBlending,\n      side: THREE.DoubleSide,\n      depthWrite: false\n    });\n    const torusMesh = new THREE.Mesh(torusGeo, torusMat);\n    group.add(torusMesh);\n\n    // Secondary Wireframe Mesh\n    const outerTorusGeo = new THREE.TorusGeometry(3.2, 1.15, 8, 32);\n    const outerWireMat = new THREE.MeshBasicMaterial({\n      color: 0x06b6d4,\n      wireframe: true,\n      transparent: true,\n      opacity: 0.08,\n      blending: THREE.AdditiveBlending\n    });\n    const outerMesh = new THREE.Mesh(outerTorusGeo, outerWireMat);\n    group.add(outerMesh);\n\n    // Core Glow Mesh\n    const coreGeo = new THREE.SphereGeometry(0.7, 32, 32);\n    const coreMat = new THREE.ShaderMaterial({\n      vertexShader: \\`\n        varying vec3 vNormal;\n        void main() {\n          vNormal = normalize(normalMatrix * normal);\n          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n        }\n      \\`,\n      fragmentShader: \\`\n        varying vec3 vNormal;\n        void main() {\n          float glow = pow(0.6 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.5);\n          gl_FragColor = vec4(vec3(0xfbbf24) * glow * 1.8, glow * 0.8);\n        }\n      \\`,\n      transparent: true,\n      blending: THREE.AdditiveBlending,\n      side: THREE.DoubleSide,\n      depthWrite: false\n    });\n    const coreMesh = new THREE.Mesh(coreGeo, coreMat);\n    scene.add(coreMesh);\n\n    // Ambient background stars\n    const starCount = 500;\n    const starGeo = new THREE.BufferGeometry();\n    const starPositions = new Float32Array(starCount * 3);\n    for (let i = 0; i < starCount * 3; i++) {\n      starPositions[i] = (Math.random() - 0.5) * 35;\n    }\n    starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));\n    const starMat = new THREE.PointsMaterial({\n      size: 0.05,\n      color: 0xffffff,\n      transparent: true,\n      opacity: 0.4,\n      blending: THREE.AdditiveBlending\n    });\n    const stars = new THREE.Points(starGeo, starMat);\n    scene.add(stars);\n\n    // Lighting\n    const pointLight1 = new THREE.PointLight(0xfbbf24, 2, 15);\n    pointLight1.position.set(4, 4, 4);\n    scene.add(pointLight1);\n\n    const pointLight2 = new THREE.PointLight(0x06b6d4, 2, 15);\n    pointLight2.position.set(-4, -4, -4);\n    scene.add(pointLight2);\n\n    // Post processing\n    const renderPass = new RenderPass(scene, camera);\n    const bloomPass = new UnrealBloomPass(new THREE.Vector2(container.clientWidth, container.clientHeight), 1.5, 0.4, 0.85);\n    bloomPass.threshold = 0.15;\n    bloomPass.strength = 1.6;\n    bloomPass.radius = 0.65;\n\n    const composer = new EffectComposer(renderer);\n    composer.addPass(renderPass);\n    composer.addPass(bloomPass);\n\n    const clock = new THREE.Clock();\n    let frameId: number;\n\n    const animate = () => {\n      frameId = requestAnimationFrame(animate);\n      const time = clock.getElapsedTime();\n      \n      uniformsRef.current.uTime.value = time;\n      \n      group.position.y = Math.sin(time * 0.8) * 0.15;\n      torusMesh.rotation.z = time * 0.05;\n      outerMesh.rotation.y = -time * 0.08;\n      outerMesh.rotation.x = time * 0.03;\n      \n      const currentWarp = uniformsRef.current.uDeform.value;\n      const coreScale = 1.0 + Math.sin(time * 3.0) * 0.06 * currentWarp;\n      coreMesh.scale.set(coreScale, coreScale, coreScale);\n      \n      stars.rotation.y = time * 0.01;\n      \n      controls.update();\n      composer.render();\n    };\n    \n    animate();\n\n    const handleResize = () => {\n      if (!container) return;\n      camera.aspect = container.clientWidth / container.clientHeight;\n      camera.updateProjectionMatrix();\n      renderer.setSize(container.clientWidth, container.clientHeight);\n      composer.setSize(container.clientWidth, container.clientHeight);\n    };\n    \n    window.addEventListener('resize', handleResize);\n\n    return () => {\n      window.removeEventListener('resize', handleResize);\n      cancelAnimationFrame(frameId);\n      controls.dispose();\n      renderer.dispose();\n      if (container.contains(renderer.domElement)) {\n        container.removeChild(renderer.domElement);\n      }\n    };\n  }, []);\n\n  return (\n    <div className=\"relative w-full h-screen overflow-hidden bg-[#020408]\">\n      {/* 3D Canvas mount */}\n      <div ref={containerRef} className=\"absolute inset-0 z-0\" />\n\n      {/* HUD UI overlay */}\n      <div className=\"absolute inset-0 z-10 pointer-events-none flex flex-col justify-between p-8\">\n        \n        {/* Top bar */}\n        <div className=\"flex justify-between items-start w-full pointer-events-auto\">\n          <div className=\"flex flex-col gap-1.5\">\n            <h1 className=\"text-white font-extrabold text-2xl tracking-wider uppercase font-sans\">\n              Torus System\n            </h1>\n            <div className=\"h-0.5 w-12 bg-amber-400 shadow-[0_0_8px_#fbbf24]\" />\n          </div>\n          <div className=\"text-xs text-white/40 tracking-widest uppercase flex items-center gap-2\">\n            <div className=\"w-1.5 h-1.5 bg-emerald-500 rounded-full shadow-[0_0_8px_#10b981] animate-pulse\" />\n            <span>Simulation.v4 // Active</span>\n          </div>\n        </div>\n\n        {/* Bottom Panel */}\n        <div className=\"flex justify-between items-end w-full pointer-events-auto\">\n          \n          {/* Controls Card */}\n          <div className=\"max-w-xs bg-black/40 border border-white/5 rounded-xl p-5 backdrop-blur-md flex flex-col gap-4\">\n            <p className=\"text-xs text-white/60 leading-relaxed font-sans\">\n              Parametric visualization of a toroidal surface with glowing meridians and parallel fields.\n            </p>\n            \n            <div className=\"flex justify-between items-center text-[10px] tracking-wider font-semibold text-white/30 uppercase\">\n              <span>Engine Warp</span>\n              <span className=\"text-amber-400 font-bold\">{warpSpeed.toFixed(2)}x</span>\n            </div>\n            \n            <div className=\"flex items-center gap-4\">\n              <div className=\"flex items-center justify-center w-7 h-7 rounded-full border border-white/10 bg-white/[0.02] flex-shrink-0\">\n                <div className=\"w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_#fbbf24] animate-pulse\" />\n              </div>\n              <input \n                type=\"range\" \n                min=\"0.2\" \n                max=\"3\" \n                step=\"0.05\" \n                value={warpSpeed}\n                onChange={handleSliderChange}\n                className=\"w-full accent-amber-400 cursor-pointer\"\n              />\n            </div>\n          </div>\n\n          {/* Diamond Decorative Element */}\n          <div className=\"w-14 h-14 border border-white/10 bg-white/[0.02] flex items-center justify-center rotate-45 backdrop-blur-sm transition-colors hover:border-amber-400/40 hover:bg-amber-400/5\">\n            <div className=\"w-7 h-7 border border-amber-400/30 -rotate-45 flex items-center justify-center\">\n              <div className=\"w-1.5 h-1.5 bg-amber-400 shadow-[0_0_6px_#fbbf24] rotate-45\" />\n            </div>\n          </div>\n          \n        </div>\n      </div>\n    </div>\n  );\n}\n",
    "likes": 0,
    "author": "Animation AI",
    "featured": true,
    "createdAt": "2026-05-10T13:19:37.564Z",
    "updatedAt": "2026-05-20T04:57:30.231Z",
    "prompt": "Create a Premium 3D Torus System Simulation with Three.js:\n• Custom GLSL vertex and fragment shader materials to render a neon holographic torus mesh\n• Hollow grid construction (using vUv math and discard in shader) with glowing running light pulses\n• Organic wave deformation in the vertex shader reacting to time and input warp speed\n• Fresnel rim highlight for extra depth and a center-pulsing plasma core sphere\n• Auto-rotating PerspectiveCamera with OrbitControls, floating ambient dust particles, and custom point lights\n• Post-processing: UnrealBloomPass to create intense cinematic bloom glow on glowing components\n• Premium sci-fi HUD overlay containing active status indicators, descriptions, and custom slider controls\n• Slider interactivity dynamically syncing to Three.js uniform speed parameters and camera auto-rotate damping\n• Designed with rich responsive typography (Syne/DM Mono) and premium vectors (rotated wireframe diamond HUD details)\n• Performance optimized for 60fps on modern screens"
  },
  {
    "_id": "animation-cybernetic-core-observer",
    "slug": "cybernetic-core-observer",
    "title": "Cybernetic Core Observer",
    "category": "animation",
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
    _id: 'animation-quantum-aegis-sentinel',
    slug: 'quantum-aegis-sentinel',
    title: 'Quantum Aegis Sentinel',
    category: 'animation',
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
    collar.rotation.x = Math.PI / 2.5;
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
      fragmentShader: "varying vec2 vUv; varying vec3 vPosition; uniform float uTime; uniform vec4 uImpact; uniform float uImpactTime; void main() { vec2 uv = vUv * 16.0; vec2 r = vec2(1.0, 1.7320508); vec2 h = r * 0.5; vec2 a = mod(uv, r) - h; vec2 b = mod(uv + h, r) - h; vec2 gv = length(a) < length(b) ? a : b; float distToEdge = 0.5 - max(abs(gv.x), dot(gv, normalize(r))); float hex = smoothstep(0.01, 0.04, distToEdge); float d = distance(vPosition, uImpact.xyz); float ripple = 0.0; if (uImpactTime > 0.0) { float wave = sin(d * 4.5 - uImpactTime * 18.0) * 0.5 + 0.5; float att = exp(-d * 0.8) * uImpactTime; ripple = wave * att; } float glow = 0.08 / (distToEdge + 0.015); vec3 baseColor = vec3(0.0, 0.5, 1.0); vec3 rippleColor = vec3(0.1, 0.9, 1.0); vec3 color = mix(baseColor * (1.0 - hex + glow * 0.125), rippleColor * 2.5, ripple * 0.8); float alpha = mix(0.12, 0.85, ripple) + (1.0 - hex) * 0.22; gl_FragColor = vec4(color, alpha); }",
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
    prompt: "Create an advanced Quantum Aegis Sentinel using Three.js. Feature a central dark mechanical orb core that dynamically looks toward the cursor with floating shoulder projector cannons. Project a larger concentric sphere representing a holographic defense grid with a custom procedural hexagonal shader. Clicking anywhere should raycast to the shield, projecting a glowing ripple wave from the impact point, generating a dual-laser beam hit from the cannons, emitting a burst of physics particle sparks, and decreasing HUD shield integrity.",
    likes: 0,
    author: "Animation AI",
    featured: true,
    createdAt: "2026-05-22T09:00:00.000Z",
    updatedAt: "2026-05-22T09:00:00.000Z"
  },
  {
    _id: "animation-nebula-chrono-core",
    slug: "nebula-chrono-core",
    title: "Nebula Chrono-Mech Core",
    category: "animation",
    tag: "threejs",
    description: "An intricate cosmic clock-reactor featuring interlocking gyroscopic brass gears, floating planetary rings, and a swirling particle nebula. Pulls particles gravitationally and triggers time-warp speed rotation upon clicking.",
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
  }
];
