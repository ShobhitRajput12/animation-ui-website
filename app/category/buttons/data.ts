export const BUTTONS_DATA = [ { "slug": "neon-button", "title": "Neon Glow Button", "category": "buttons", "tag": "css", "description": "Button with animated neon glow pulse and gradient border.", "previewCode": "<!DOCTYPE html><html><head><style>\n*{margin:0;padding:0}body{background:#050510;display:flex;align-items:center;justify-content:center;height:100vh;gap:20px;font-family:sans-serif;flex-wrap:wrap;padding:20px}\n.btn{position:relative;background:transparent;border:none;padding:0;cursor:pointer;border-radius:12px}\n.btn-inner{position:relative;background:#0a0a0b;border-radius:12px;padding:14px 28px;font-size:14px;font-weight:700;color:#fff;letter-spacing:0.02em;z-index:1}\n.btn::before{content:'';position:absolute;inset:-1px;border-radius:13px;background:linear-gradient(135deg,#7c5cfc,#22d3ee,#4ade80);z-index:0;animation:border-spin 3s linear infinite}\n.btn::after{content:'';position:absolute;inset:-4px;border-radius:16px;background:linear-gradient(135deg,#7c5cfc,#22d3ee,#4ade80);filter:blur(12px);opacity:0;z-index:-1;transition:opacity 0.3s;animation:glow-pulse 2s ease-in-out infinite}\n.btn:hover::after{opacity:0.6}\n@keyframes border-spin{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}\n@keyframes glow-pulse{0%,100%{opacity:0.2}50%{opacity:0.5}}\n.btn-solid{background:linear-gradient(135deg,#7c5cfc,#a78bfa);border:none;padding:14px 28px;font-size:14px;font-weight:700;color:#fff;border-radius:12px;cursor:pointer;position:relative;overflow:hidden}\n.btn-solid::after{content:'';position:absolute;inset:0;background:white;opacity:0;transition:opacity 0.2s}\n.btn-solid:hover::after{opacity:0.1}\n.btn-ghost{background:rgba(124,92,252,0.08);border:1px solid rgba(124,92,252,0.3);padding:14px 28px;font-size:14px;font-weight:700;color:#a78bfa;border-radius:12px;cursor:pointer;transition:all 0.2s}\n.btn-ghost:hover{background:rgba(124,92,252,0.15);border-color:rgba(124,92,252,0.6)}\n</style></head><body>\n<div class=\"btn\"><div class=\"btn-inner\">Neon Border</div></div>\n<button class=\"btn-solid\">Gradient Fill</button>\n<button class=\"btn-ghost\">Ghost Button</button>\n</body></html>", "code": "/* Neon Glow Button • CSS */\n\n/* Gradient border trick using ::before */\n.btn-neon {\n position: relative;\n background: transparent;\n border: none;\n padding: 0;\n cursor: pointer;\n border-radius: 12px;\n}\n\n.btn-neon-inner {\n position: relative;\n background: #0a0a0b;\n border-radius: 12px;\n padding: 14px 28px;\n font-size: 14px;\n font-weight: 700;\n color: #fff;\n z-index: 1;\n}\n\n/* Gradient border */\n.btn-neon::before {\n content: '';\n position: absolute;\n inset: -1px;\n border-radius: 13px;\n background: linear-gradient(135deg, #7c5cfc, #22d3ee, #4ade80);\n z-index: 0;\n}\n\n/* Glow on hover */\n.btn-neon::after {\n content: '';\n position: absolute;\n inset: -4px;\n border-radius: 16px;\n background: linear-gradient(135deg, #7c5cfc, #22d3ee);\n filter: blur(12px);\n opacity: 0;\n z-index: -1;\n transition: opacity 0.3s;\n}\n\n.btn-neon:hover::after { opacity: 0.6; }\n\n/* Tailwind version */\n/* Use ring, ring-offset, and shadow utilities for similar effect */", "prompt": "Neon glow button with gradient border:\n• Gradient border: use ::before pseudo-element inset -1px with gradient bg\n• Inner button: dark bg #0a0a0b, rounded-xl, sits on top with z-index\n• Glow effect: ::after with blur(12px) gradient, opacity 0 •→ 0.6 on hover\n• Three variants: neon-border, solid-fill, ghost\n• Solid: linear-gradient fill with white overlay on hover (opacity trick)\n• Ghost: transparent bg with purple border, hover increases saturation", "likes": 0, "author": "Animation AI", "featured": false, "createdAt": "2026-05-10T13:19:37.564Z", "updatedAt": "2026-05-10T13:19:37.564Z" }, { "slug": "magnetic-liquid-button", "title": "Magnetic Liquid Button", "category": "buttons", "tag": "canvas", "description": "A gooey, magnetic liquid button that organically stretches toward the cursor using SVG filters and spring physics.", "previewCode": "<!DOCTYPE html><html><head><style>body{margin:0;background:#050510;display:flex;align-items:center;justify-content:center;height:100vh;overflow:hidden}.container{position:relative;filter:url('#goo')}.btn{position:relative;width:180px;height:60px;background:#7c5cfc;border-radius:30px;cursor:pointer;display:flex;align-items:center;justify-content:center;color:white;font-family:sans-serif;font-weight:700;letter-spacing:1px;z-index:1}.blob{position:absolute;width:40px;height:40px;background:#7c5cfc;border-radius:50%;top:50%;left:50%;transform:translate(-50%,-50%);z-index:0;pointer-events:none}</style></head><body><div class=\"container\"><div class=\"btn\" id=\"btn\">EXPLORE</div><div class=\"blob\" id=\"blob\"></div></div><svg style=\"display:none\"><defs><filter id=\"goo\"><feGaussianBlur in=\"SourceGraphic\" stdDeviation=\"10\" result=\"blur\"/><feColorMatrix in=\"blur\" mode=\"matrix\" values=\"1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 20 -10\" result=\"goo\"/></filter></defs></svg><script>const btn=document.getElementById('btn');const blob=document.getElementById('blob');let mx=0,my=0;let bx=0,by=0;window.addEventListener('mousemove',(e)=>{mx=e.clientX;my=e.clientY;});function animate(){const rect=btn.getBoundingClientRect();const cx=rect.left+rect.width/2;const cy=rect.top+rect.height/2;const dx=mx-cx;const dy=my-cy;const dist=Math.sqrt(dx*dx+dy*dy);if(dist<200){bx+=(dx-bx)*0.1;by+=(dy-by)*0.1;}else{bx+=(0-bx)*0.1;by+=(0-by)*0.1;}blob.style.transform=`translate(calc(-50% + ${bx}px), calc(-50% + ${by}px))`;requestAnimationFrame(animate);}animate();</script></body></html>", "code": "/* Magnetic Liquid Button • React + Framer Motion */\nimport { motion, useSpring, useMotionValue } from 'framer-motion';\n\nexport const MagneticButton = () => {\n const x = useMotionValue(0); const y = useMotionValue(0);\n const sx = useSpring(x, { stiffness: 150, damping: 15 });\n const sy = useSpring(y, { stiffness: 150, damping: 15 });\n\n return (\n <div className=\"relative group\">\n <motion.button \n style={{ x: sx, y: sy }} \n className=\"bg-indigo-600 px-8 py-3 rounded-full text-white font-bold\"\n onMouseMove={(e) => {\n const { left, top, width, height } = e.currentTarget.getBoundingClientRect();\n x.set(e.clientX - (left + width/2)); y.set(e.clientY - (top + height/2));\n }}\n onMouseLeave={() => { x.set(0); y.set(0); }}\n >\n EXPLORE\n </motion.button>\n <svg style={{ display: 'none' }}>\n <defs>\n <filter id=\"goo\">\n <feGaussianBlur in=\"SourceGraphic\" stdDeviation=\"10\" result=\"blur\"/>\n <feColorMatrix in=\"blur\" mode=\"matrix\" values=\"1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 20 -10\" result=\"goo\"/>\n </filter>\n </defs>\n </svg>\n </div>\n );\n};", "prompt": "Create a 'Magnetic Liquid Button' that uses SVG gooey filters and Framer Motion spring physics. The button should have a companion 'blob' that stretches toward the mouse when it's within a 200px radius. Use a deep indigo palette (#7c5cfc).", "likes": 0, "author": "Animation AI", "featured": true, "createdAt": "2026-05-10T14:52:00.000Z", "updatedAt": "2026-05-10T14:52:00.000Z" } , {
  "slug": "quantum-particle-warp-button",
  "title": "Quantum Particle Warp Button",
  "category": "buttons",
  "tag": "threejs",
  "description": "A high-end 3D WebGL button filled with 4,000 glowing particles that orbit a custom path, swirl magnetically around the cursor, and burst outward in hyperdrive streaks on click.",
  "previewCode": `<!DOCTYPE html>
<html>
<head>
  <style>
    body, html {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      background: #020208;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    }
    .button-container {
      position: relative;
      width: 220px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    canvas {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 0;
    }
    .warp-btn {
      position: relative;
      width: 200px;
      height: 50px;
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 25px;
      color: #ffffff;
      font-size: 13px;
      font-weight: 600;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      cursor: pointer;
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      backdrop-blur: 12px;
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
      box-shadow: 
        inset 0 0 12px rgba(255, 255, 255, 0.03),
        0 4px 20px rgba(0, 0, 0, 0.4);
    }
    .warp-btn:hover {
      background: rgba(255, 255, 255, 0.06);
      border-color: rgba(255, 255, 255, 0.15);
      color: #00ffcc;
      box-shadow: 
        inset 0 0 16px rgba(0, 255, 200, 0.05),
        0 6px 24px rgba(0, 255, 200, 0.1);
    }
  </style>
</head>
<body>
  <div class="button-container">
    <button class="warp-btn" id="warpBtn">Warp Portal</button>
    <canvas id="warpCanvas"></canvas>
  </div>

  <script type="importmap">
    { "imports": { "three": "https://unpkg.com/three@0.160.0/build/three.module.js" } }
  </script>
  <script type="module">
    import * as THREE from 'three';

    const canvas = document.getElementById('warpCanvas');
    const container = canvas.parentElement;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-110, 110, 30, -30, 0.1, 100);
    camera.position.z = 10;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(220, 60);

    const particleCount = 4000;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const originalCoords = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);

    const w = 180;
    const h = 40;
    const radius = 20;

    function getBorderPoint(t) {
      const angle = t * Math.PI * 2;
      const x = Math.cos(angle) * (w / 2);
      const y = Math.sin(angle) * (h / 2);
      return new THREE.Vector2(x, y);
    }

    const color1 = new THREE.Color(0x00ffcc);
    const color2 = new THREE.Color(0x3a5bbf);

    for (let i = 0; i < particleCount; i++) {
      const t = i / particleCount;
      const borderPt = getBorderPoint(t);
      
      const angle = t * Math.PI * 2;
      const rx = borderPt.x + (Math.random() - 0.5) * 8;
      const ry = borderPt.y + (Math.random() - 0.5) * 8;
      
      positions[i * 3] = rx;
      positions[i * 3 + 1] = ry;
      positions[i * 3 + 2] = 0;

      originalCoords[i * 3] = rx;
      originalCoords[i * 3 + 1] = ry;
      originalCoords[i * 3 + 2] = 0;

      const mixedColor = color1.clone().lerp(color2, Math.sin(t * Math.PI * 2) * 0.5 + 0.5);
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;

      sizes[i] = Math.random() * 1.5 + 0.5;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.ShaderMaterial({
      vertexColors: true,
      uniforms: {
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector3(-999, -999, 0) },
        uHover: { value: 0 },
        uClick: { value: 0 }
      },
      vertexShader: \`
        uniform float uTime;
        uniform vec3 uMouse;
        uniform float uHover;
        uniform float uClick;
        varying vec3 vColor;

        void main() {
          vColor = color;
          vec3 pos = position;

          float distToMouse = distance(pos.xy, uMouse.xy);
          
          if (uHover > 0.01 && distToMouse < 45.0) {
            float pull = smoothstep(45.0, 0.0, distToMouse) * uHover;
            vec2 dir = normalize(pos.xy - uMouse.xy);
            float angle = uTime * 4.0;
            vec2 rotated = vec2(
              dir.x * cos(angle) - dir.y * sin(angle),
              dir.x * sin(angle) + dir.y * cos(angle)
            );
            pos.xy = mix(pos.xy, uMouse.xy + rotated * 12.0, pull * 0.85);
          } else {
            pos.x += sin(uTime * 2.0 + pos.y * 0.1) * 0.8;
            pos.y += cos(uTime * 2.0 + pos.x * 0.1) * 0.8;
          }

          if (uClick > 0.01) {
            vec2 center = vec2(0.0);
            vec2 dir = normalize(pos.xy - center);
            pos.xy += dir * uClick * 65.0;
          }

          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = (1.5 + uClick * 2.0) * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      \`,
      fragmentShader: \`
        varying vec3 vColor;
        void main() {
          float dist = length(gl_PointCoord - vec2(0.5));
          if (dist > 0.5) discard;
          float alpha = smoothstep(0.5, 0.1, dist);
          gl_FragColor = vec4(vColor, alpha * 0.85);
        }
      \`,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    let mouse = new THREE.Vector3(-999, -999, 0);
    let hoverState = 0;
    let clickState = 0;

    const btn = document.getElementById('warpBtn');

    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 220 - 110;
      const y = -(((e.clientY - rect.top) / rect.height) * 60 - 30);
      mouse.set(x, y, 0);
      hoverState = 1.0;
    });

    btn.addEventListener('mouseenter', () => { hoverState = 1.0; });
    btn.addEventListener('mouseleave', () => { hoverState = 0.0; mouse.set(-999, -999, 0); });

    btn.addEventListener('mousedown', () => {
      clickState = 1.0;
    });

    const clock = new THREE.Clock();

    function animate() {
      requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      material.uniforms.uTime.value = time;
      material.uniforms.uMouse.value.copy(mouse);
      
      material.uniforms.uHover.value += (hoverState - material.uniforms.uHover.value) * 0.1;
      
      if (clickState > 0) {
        clickState -= 0.035;
        if (clickState < 0) clickState = 0;
      }
      material.uniforms.uClick.value += (clickState - material.uniforms.uClick.value) * 0.15;

      const posArray = geometry.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        const ix = i * 3;
        const iy = i * 3 + 1;
        const ox = originalCoords[ix];
        const oy = originalCoords[iy];

        if (clickState < 0.01 && hoverState < 0.01) {
          posArray[ix] += (ox - posArray[ix]) * 0.08;
          posArray[iy] += (oy - posArray[iy]) * 0.08;
        }
      }
      geometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    }
    animate();

    window.addEventListener('resize', () => {
      renderer.setSize(220, 60);
    });
  </script>
</body>
</html>`,
  "code": `"use client";
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

export default function QuantumWarpButton() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const btn = containerRef.current;
    const canvas = canvasRef.current;
    if (!btn || !canvas || typeof window === 'undefined') return;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-110, 110, 30, -30, 0.1, 100);
    camera.position.z = 10;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(220, 60);

    const particleCount = 4000;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const originalCoords = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const w = 180;
    const h = 40;

    function getBorderPoint(t: number) {
      const angle = t * Math.PI * 2;
      return new THREE.Vector2(Math.cos(angle) * (w / 2), Math.sin(angle) * (h / 2));
    }

    const color1 = new THREE.Color(0x00ffcc);
    const color2 = new THREE.Color(0x3a5bbf);

    for (let i = 0; i < particleCount; i++) {
      const t = i / particleCount;
      const borderPt = getBorderPoint(t);
      const rx = borderPt.x + (Math.random() - 0.5) * 8;
      const ry = borderPt.y + (Math.random() - 0.5) * 8;
      
      positions[i * 3] = rx;
      positions[i * 3 + 1] = ry;
      positions[i * 3 + 2] = 0;

      originalCoords[i * 3] = rx;
      originalCoords[i * 3 + 1] = ry;
      originalCoords[i * 3 + 2] = 0;

      const mixedColor = color1.clone().lerp(color2, Math.sin(t * Math.PI * 2) * 0.5 + 0.5);
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.ShaderMaterial({
      vertexColors: true,
      uniforms: {
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector3(-999, -999, 0) },
        uHover: { value: 0 },
        uClick: { value: 0 }
      },
      vertexShader: \`
        uniform float uTime;
        uniform vec3 uMouse;
        uniform float uHover;
        uniform float uClick;
        varying vec3 vColor;

        void main() {
          vColor = color;
          vec3 pos = position;

          float distToMouse = distance(pos.xy, uMouse.xy);
          
          if (uHover > 0.01 && distToMouse < 45.0) {
            float pull = smoothstep(45.0, 0.0, distToMouse) * uHover;
            vec2 dir = normalize(pos.xy - uMouse.xy);
            float angle = uTime * 4.0;
            vec2 rotated = vec2(
              dir.x * cos(angle) - dir.y * sin(angle),
              dir.x * sin(angle) + dir.y * cos(angle)
            );
            pos.xy = mix(pos.xy, uMouse.xy + rotated * 12.0, pull * 0.85);
          } else {
            pos.x += sin(uTime * 2.0 + pos.y * 0.1) * 0.8;
            pos.y += cos(uTime * 2.0 + pos.x * 0.1) * 0.8;
          }

          if (uClick > 0.01) {
            vec2 center = vec2(0.0);
            vec2 dir = normalize(pos.xy - center);
            pos.xy += dir * uClick * 65.0;
          }

          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = (1.5 + uClick * 2.0) * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      \`,
      fragmentShader: \`
        varying vec3 vColor;
        void main() {
          float dist = length(gl_PointCoord - vec2(0.5));
          if (dist > 0.5) discard;
          float alpha = smoothstep(0.5, 0.1, dist);
          gl_FragColor = vec4(vColor, alpha * 0.85);
        }
      \`,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    let mouse = new THREE.Vector3(-999, -999, 0);
    let hoverState = 0;
    let clickState = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 220 - 110;
      const y = -(((e.clientY - rect.top) / rect.height) * 60 - 30);
      mouse.set(x, y, 0);
      hoverState = 1.0;
    };

    const handleMouseEnter = () => { hoverState = 1.0; };
    const handleMouseLeave = () => { hoverState = 0.0; mouse.set(-999, -999, 0); };
    const handleMouseDown = () => { clickState = 1.0; };

    btn.addEventListener('mousemove', handleMouseMove);
    btn.addEventListener('mouseenter', handleMouseEnter);
    btn.addEventListener('mouseleave', handleMouseLeave);
    btn.addEventListener('mousedown', handleMouseDown);

    const clock = new THREE.Clock();

    let animId: number;
    function animate() {
      animId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      material.uniforms.uTime.value = time;
      material.uniforms.uMouse.value.copy(mouse);
      material.uniforms.uHover.value += (hoverState - material.uniforms.uHover.value) * 0.1;
      
      if (clickState > 0) {
        clickState -= 0.035;
        if (clickState < 0) clickState = 0;
      }
      material.uniforms.uClick.value += (clickState - material.uniforms.uClick.value) * 0.15;

      const posArray = geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        const ix = i * 3;
        const iy = i * 3 + 1;
        const ox = originalCoords[ix];
        const oy = originalCoords[iy];

        if (clickState < 0.01 && hoverState < 0.01) {
          posArray[ix] += (ox - posArray[ix]) * 0.08;
          posArray[iy] += (oy - posArray[iy]) * 0.08;
        }
      }
      geometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    }
    animate();

    return () => {
      cancelAnimationFrame(animId);
      btn.removeEventListener('mousemove', handleMouseMove);
      btn.removeEventListener('mouseenter', handleMouseEnter);
      btn.removeEventListener('mouseleave', handleMouseLeave);
      btn.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  return (
    <div className="relative w-[220px] h-[60px] flex items-center justify-center bg-transparent group">
      <button 
        ref={containerRef}
        className="relative w-[200px] h-[50px] bg-white/[0.03] border border-white/[0.08] rounded-full text-white text-xs font-semibold tracking-[0.15em] uppercase cursor-pointer z-10 flex items-center justify-center backdrop-blur-md transition-all duration-300 hover:bg-white/[0.06] hover:border-white/[0.15] hover:text-[#00ffcc] active:scale-95"
      >
        Warp Portal
      </button>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />
    </div>
  );
}`,
  "prompt": "Create an advanced Quantum Particle Warp Button in Three.js. Standard view should display 4,000 tiny glowing particles circling along a rounded rectangular track. When mouse hovers, particles are magnetically attracted to the cursor position, forming a swirling orbital tornado around the cursor. On click, the particles instantly expand outwards in satisfying hyperdrive speed streaks, returning smoothly afterwards.",
  "likes": 0,
  "author": "Animation AI",
  "featured": true,
  "createdAt": "2026-05-21T10:00:00.000Z",
  "updatedAt": "2026-05-21T10:00:00.000Z"
}, {
  "slug": "plasma-liquid-border-button",
  "title": "Plasma Liquid Border Button",
  "category": "buttons",
  "tag": "threejs",
  "description": "An interactive button surrounded by a multi-layered 3D plasma energy ring generated via custom vertex noise shaders that magnetically flexes towards the cursor.",
  "previewCode": `<!DOCTYPE html>
<html>
<head>
  <style>
    body, html {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      background: #020208;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    }
    .button-container {
      position: relative;
      width: 240px;
      height: 70px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    canvas {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 0;
    }
    .plasma-btn {
      position: relative;
      width: 200px;
      height: 50px;
      background: rgba(10, 10, 15, 0.7);
      border: 1px solid rgba(255, 255, 255, 0.05);
      border-radius: 25px;
      color: #ffffff;
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      cursor: pointer;
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      backdrop-blur: 15px;
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .plasma-btn:hover {
      color: #ff33aa;
      border-color: rgba(255, 50, 170, 0.3);
      box-shadow: 0 0 30px rgba(255, 50, 170, 0.15);
    }
  </style>
</head>
<body>
  <div class="button-container">
    <button class="plasma-btn" id="plasmaBtn">Plasma Ring</button>
    <canvas id="plasmaCanvas"></canvas>
  </div>

  <script type="importmap">
    { "imports": { "three": "https://unpkg.com/three@0.160.0/build/three.module.js" } }
  </script>
  <script type="module">
    import * as THREE from 'three';

    const canvas = document.getElementById('plasmaCanvas');
    const container = canvas.parentElement;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-120, 120, 35, -35, 0.1, 100);
    camera.position.z = 10;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(240, 70);

    const segmentCount = 280;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(segmentCount * 3);
    const colors = new Float32Array(segmentCount * 3);

    const w = 196;
    const h = 46;

    function getRectPoint(t) {
      const angle = t * Math.PI * 2;
      return new THREE.Vector2(Math.cos(angle) * (w / 2), Math.sin(angle) * (h / 2));
    }

    for (let i = 0; i < segmentCount; i++) {
      const t = i / segmentCount;
      const pt = getRectPoint(t);
      positions[i * 3] = pt.x;
      positions[i * 3 + 1] = pt.y;
      positions[i * 3 + 2] = 0;

      const c = new THREE.Color();
      c.setHSL(0.85 + t * 0.15, 0.95, 0.55);
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.ShaderMaterial({
      vertexColors: true,
      uniforms: {
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector3(-999, -999, 0) },
        uHover: { value: 0 },
        uClick: { value: 0 }
      },
      vertexShader: \`
        uniform float uTime;
        uniform vec3 uMouse;
        uniform float uHover;
        uniform float uClick;
        varying vec3 vColor;

        void main() {
          vColor = color;
          vec3 pos = position;

          float distToMouse = distance(pos.xy, uMouse.xy);
          
          float wave = sin(pos.x * 0.08 + uTime * 6.0) * cos(pos.y * 0.08 + uTime * 4.0) * (2.2 + uHover * 4.0);
          
          vec2 center = vec2(0.0);
          vec2 outwardDir = normalize(pos.xy - center);
          pos.xy += outwardDir * wave;

          if (uHover > 0.01 && distToMouse < 60.0) {
            float pull = smoothstep(60.0, 0.0, distToMouse) * uHover;
            pos.xy += normalize(uMouse.xy - pos.xy) * pull * 14.0;
          }

          if (uClick > 0.01) {
            pos.xy += outwardDir * sin(uTime * 15.0) * uClick * 12.0;
          }

          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = (2.2 + uHover * 1.5) * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      \`,
      fragmentShader: \`
        varying vec3 vColor;
        void main() {
          float dist = length(gl_PointCoord - vec2(0.5));
          if (dist > 0.5) discard;
          float alpha = smoothstep(0.5, 0.05, dist);
          gl_FragColor = vec4(vColor, alpha * 0.9);
        }
      \`,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const line = new THREE.Points(geometry, material);
    scene.add(line);

    let mouse = new THREE.Vector3(-999, -999, 0);
    let hoverVal = 0;
    let clickVal = 0;

    const btn = document.getElementById('plasmaBtn');

    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 240 - 120;
      const y = -(((e.clientY - rect.top) / rect.height) * 70 - 35);
      mouse.set(x, y, 0);
      hoverVal = 1.0;
    });

    btn.addEventListener('mouseenter', () => { hoverVal = 1.0; });
    btn.addEventListener('mouseleave', () => { hoverVal = 0.0; mouse.set(-999, -999, 0); });
    btn.addEventListener('mousedown', () => {
      clickVal = 1.0;
    });

    const clock = new THREE.Clock();

    function animate() {
      requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      material.uniforms.uTime.value = time;
      material.uniforms.uMouse.value.copy(mouse);

      material.uniforms.uHover.value += (hoverVal - material.uniforms.uHover.value) * 0.1;

      if (clickVal > 0) {
        clickVal -= 0.04;
        if (clickVal < 0) clickVal = 0;
      }
      material.uniforms.uClick.value += (clickVal - material.uniforms.uClick.value) * 0.15;

      renderer.render(scene, camera);
    }
    animate();

    window.addEventListener('resize', () => {
      renderer.setSize(240, 70);
    });
  </script>
</body>
</html>`,
  "code": `"use client";
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

export default function PlasmaLiquidButton() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const btn = containerRef.current;
    const canvas = canvasRef.current;
    if (!btn || !canvas || typeof window === 'undefined') return;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-120, 120, 35, -35, 0.1, 100);
    camera.position.z = 10;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(240, 70);

    const segmentCount = 280;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(segmentCount * 3);
    const colors = new Float32Array(segmentCount * 3);

    const w = 196;
    const h = 46;

    function getRectPoint(t: number) {
      const angle = t * Math.PI * 2;
      return new THREE.Vector2(Math.cos(angle) * (w / 2), Math.sin(angle) * (h / 2));
    }

    for (let i = 0; i < segmentCount; i++) {
      const t = i / segmentCount;
      const pt = getRectPoint(t);
      positions[i * 3] = pt.x;
      positions[i * 3 + 1] = pt.y;
      positions[i * 3 + 2] = 0;

      const c = new THREE.Color();
      c.setHSL(0.85 + t * 0.15, 0.95, 0.55);
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.ShaderMaterial({
      vertexColors: true,
      uniforms: {
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector3(-999, -999, 0) },
        uHover: { value: 0 },
        uClick: { value: 0 }
      },
      vertexShader: \`
        uniform float uTime;
        uniform vec3 uMouse;
        uniform float uHover;
        uniform float uClick;
        varying vec3 vColor;

        void main() {
          vColor = color;
          vec3 pos = position;

          float distToMouse = distance(pos.xy, uMouse.xy);
          float wave = sin(pos.x * 0.08 + uTime * 6.0) * cos(pos.y * 0.08 + uTime * 4.0) * (2.2 + uHover * 4.0);
          
          vec2 center = vec2(0.0);
          vec2 outwardDir = normalize(pos.xy - center);
          pos.xy += outwardDir * wave;

          if (uHover > 0.01 && distToMouse < 60.0) {
            float pull = smoothstep(60.0, 0.0, distToMouse) * uHover;
            pos.xy += normalize(uMouse.xy - pos.xy) * pull * 14.0;
          }

          if (uClick > 0.01) {
            pos.xy += outwardDir * sin(uTime * 15.0) * uClick * 12.0;
          }

          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = (2.2 + uHover * 1.5) * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      \`,
      fragmentShader: \`
        varying vec3 vColor;
        void main() {
          float dist = length(gl_PointCoord - vec2(0.5));
          if (dist > 0.5) discard;
          float alpha = smoothstep(0.5, 0.05, dist);
          gl_FragColor = vec4(vColor, alpha * 0.9);
        }
      \`,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const line = new THREE.Points(geometry, material);
    scene.add(line);

    let mouse = new THREE.Vector3(-999, -999, 0);
    let hoverVal = 0;
    let clickVal = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 240 - 120;
      const y = -(((e.clientY - rect.top) / rect.height) * 70 - 35);
      mouse.set(x, y, 0);
      hoverVal = 1.0;
    };

    const handleMouseEnter = () => { hoverVal = 1.0; };
    const handleMouseLeave = () => { hoverVal = 0.0; mouse.set(-999, -999, 0); };
    const handleMouseDown = () => { clickVal = 1.0; };

    btn.addEventListener('mousemove', handleMouseMove);
    btn.addEventListener('mouseenter', handleMouseEnter);
    btn.addEventListener('mouseleave', handleMouseLeave);
    btn.addEventListener('mousedown', handleMouseDown);

    const clock = new THREE.Clock();

    let animId: number;
    function animate() {
      animId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      material.uniforms.uTime.value = time;
      material.uniforms.uMouse.value.copy(mouse);
      material.uniforms.uHover.value += (hoverVal - material.uniforms.uHover.value) * 0.1;

      if (clickVal > 0) {
        clickVal -= 0.04;
        if (clickVal < 0) clickVal = 0;
      }
      material.uniforms.uClick.value += (clickVal - material.uniforms.uClick.value) * 0.15;

      renderer.render(scene, camera);
    }
    animate();

    return () => {
      cancelAnimationFrame(animId);
      btn.removeEventListener('mousemove', handleMouseMove);
      btn.removeEventListener('mouseenter', handleMouseEnter);
      btn.removeEventListener('mouseleave', handleMouseLeave);
      btn.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  return (
    <div className="relative w-[240px] h-[70px] flex items-center justify-center bg-transparent group">
      <button 
        ref={containerRef}
        className="relative w-[200px] h-[50px] bg-[#0a0a0f]/70 border border-white/[0.05] rounded-full text-white text-[10px] font-bold tracking-[0.2em] uppercase cursor-pointer z-10 flex items-center justify-center backdrop-blur-md transition-all duration-300 hover:text-[#ff33aa] hover:border-pink-500/30 hover:shadow-[0_0_30px_rgba(255,50,170,0.15)] active:scale-95"
      >
        Plasma Ring
      </button>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />
    </div>
  );
}`,
  "prompt": "Create an advanced Plasma Liquid Border Button in Three.js. The button should be surrounded by a highly detailed, flowing 3D plasma energy ring generated via custom vertex noise shaders. Standard view should display organic fluid-like wave ripples circulating around the border. When mouse hovers, the plasma wave organically stretches and flexes towards the cursor. On click, it triggers a powerful chromatic aberration pulse.",
  "likes": 0,
  "author": "Animation AI",
  "featured": true,
  "createdAt": "2026-05-21T10:00:00.000Z",
  "updatedAt": "2026-05-21T10:00:00.000Z"
}, {
  "slug": "bioluminescent-shimmer-wave-button",
  "title": "Bioluminescent Shimmer Button",
  "category": "buttons",
  "tag": "canvas",
  "description": "A glassmorphic button with an active metallic sweeping gradient, producing reactive bioluminescent trails and concentric ripples on click.",
  "previewCode": `<!DOCTYPE html>
<html>
<head>
  <style>
    body, html {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      background: #020208;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    }
    .btn-container {
      position: relative;
      width: 220px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    canvas {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 2;
    }
    .shimmer-btn {
      position: relative;
      width: 200px;
      height: 50px;
      background: rgba(15, 23, 42, 0.35);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 25px;
      color: rgba(255, 255, 255, 0.9);
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      cursor: pointer;
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      backdrop-filter: blur(16px);
      box-shadow: 
        inset 0 1px 1px rgba(255, 255, 255, 0.1),
        0 10px 30px rgba(0, 0, 0, 0.5);
      overflow: hidden;
      transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .shimmer-btn::before {
      content: '';
      position: absolute;
      top: 0;
      left: -150%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.08) 30%,
        rgba(255, 255, 255, 0.25) 50%,
        rgba(255, 255, 255, 0.08) 70%,
        transparent
      );
      animation: sweep 4.5s cubic-bezier(0.25, 1, 0.5, 1) infinite;
      z-index: 0;
    }
    .shimmer-btn:hover {
      color: #00ffcc;
      border-color: rgba(0, 255, 204, 0.35);
      box-shadow: 
        0 0 30px rgba(0, 255, 204, 0.15),
        inset 0 1px 1px rgba(0, 255, 204, 0.2);
      transform: translateY(-2px);
    }
    .shimmer-btn:active {
      transform: translateY(0) scale(0.97);
    }
    .btn-text {
      position: relative;
      z-index: 3;
      pointer-events: none;
    }
    @keyframes sweep {
      0% { left: -150%; }
      50% { left: 150%; }
      100% { left: 150%; }
    }
  </style>
</head>
<body>
  <div class="btn-container">
    <button class="shimmer-btn" id="shimmerBtn">
      <span class="btn-text">Shimmer Wave</span>
    </button>
    <canvas id="shimmerCanvas"></canvas>
  </div>

  <script>
    const canvas = document.getElementById('shimmerCanvas');
    const ctx = canvas.getContext('2d');
    const btn = document.getElementById('shimmerBtn');

    let w = 220;
    let h = 60;
    
    const dpr = window.devicePixelRatio || 1;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.scale(dpr, dpr);

    let particles = [];
    let ripples = [];
    let isHovered = false;
    let mouse = { x: -999, y: -999 };

    class Particle {
      constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 1.5;
        this.vy = -Math.random() * 0.8 - 0.2;
        this.radius = Math.random() * 3 + 2;
        this.alpha = 1;
        this.decay = Math.random() * 0.015 + 0.01;
        this.color = color;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= this.decay;
        this.radius -= 0.03;
      }
      draw() {
        if (this.radius <= 0 || this.alpha <= 0) return;
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        
        const grad = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius);
        grad.addColorStop(0, '#ffffff');
        grad.addColorStop(0.3, this.color);
        grad.addColorStop(1, 'transparent');
        ctx.fillStyle = grad;
        
        ctx.shadowBlur = 12;
        ctx.shadowColor = this.color;
        ctx.fill();
        ctx.restore();
      }
    }

    class Ripple {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = 2;
        this.maxRadius = 75;
        this.alpha = 1;
        this.speed = 2.5;
      }
      update() {
        this.radius += this.speed;
        this.alpha = 1 - (this.radius / this.maxRadius);
      }
      draw() {
        if (this.alpha <= 0) return;
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(0, 255, 204, 0.6)';
        ctx.lineWidth = 2.5;
        ctx.shadowBlur = 15;
        ctx.shadowColor = '#00ffcc';
        ctx.stroke();
        ctx.restore();
      }
    }

    let lastAdded = 0;
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left + 10;
      const y = e.clientY - rect.top + 5;
      mouse.x = x;
      mouse.y = y;
      isHovered = true;

      const now = Date.now();
      if (now - lastAdded > 35) {
        lastAdded = now;
        const ratio = x / rect.width;
        const hue = Math.floor(180 + ratio * 90);
        const color = \`hsl(\${hue}, 100%, 60%)\`;
        particles.push(new Particle(x, y, color));
      }
    });

    btn.addEventListener('mouseenter', () => { isHovered = true; });
    btn.addEventListener('mouseleave', () => { isHovered = false; mouse = { x: -999, y: -999 }; });
    
    btn.addEventListener('click', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left + 10;
      const y = e.clientY - rect.top + 5;
      
      for (let i = 0; i < 18; i++) {
        const ratio = x / rect.width;
        const hue = Math.floor(180 + ratio * 90);
        const color = \`hsl(\${hue}, 100%, 60%)\`;
        const p = new Particle(x, y, color);
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 3.5 + 1.5;
        p.vx = Math.cos(angle) * speed;
        p.vy = Math.sin(angle) * speed;
        p.decay = Math.random() * 0.03 + 0.02;
        particles.push(p);
      }
      ripples.push(new Ripple(x, y));
    });

    function render() {
      ctx.clearRect(0, 0, w, h);

      ripples = ripples.filter(r => r.alpha > 0);
      ripples.forEach(r => {
        r.update();
        r.draw();
      });

      particles = particles.filter(p => p.alpha > 0 && p.radius > 0);
      particles.forEach(p => {
        p.update();
        p.draw();
      });

      if (isHovered && mouse.x > 0) {
        ctx.save();
        const grad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 35);
        grad.addColorStop(0, 'rgba(0, 255, 204, 0.12)');
        grad.addColorStop(1, 'transparent');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 35, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      requestAnimationFrame(render);
    }
    render();
  </script>
</body>
</html>`,
  "code": `"use client";

import React, { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface BioluminescentShimmerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function BioluminescentShimmerButton({
  children,
  className,
  ...props
}: BioluminescentShimmerButtonProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const btn = buttonRef.current;
    if (!canvas || !btn) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const w = 220;
    const h = 60;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.scale(dpr, dpr);

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      alpha: number;
      decay: number;
      color: string;
    }

    interface Ripple {
      x: number;
      y: number;
      radius: number;
      maxRadius: number;
      alpha: number;
      speed: number;
    }

    let particles: Particle[] = [];
    let ripples: Ripple[] = [];
    let mouse = { x: -999, y: -999 };
    let active = false;

    const createParticle = (x: number, y: number, color: string): Particle => {
      return {
        x,
        y,
        vx: (Math.random() - 0.5) * 1.5,
        vy: -Math.random() * 0.8 - 0.2,
        radius: Math.random() * 3 + 2,
        alpha: 1,
        decay: Math.random() * 0.015 + 0.01,
        color,
      };
    };

    const createRipple = (x: number, y: number): Ripple => {
      return {
        x,
        y,
        radius: 2,
        maxRadius: 75,
        alpha: 1,
        speed: 2.5,
      };
    };

    let lastAdded = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left + 10;
      const y = e.clientY - rect.top + 5;
      mouse.x = x;
      mouse.y = y;
      active = true;

      const now = Date.now();
      if (now - lastAdded > 35) {
        lastAdded = now;
        const ratio = x / rect.width;
        const hue = Math.floor(180 + ratio * 90);
        const color = \`hsl(\${hue}, 100%, 60%)\`;
        particles.push(createParticle(x, y, color));
      }
    };

    const handleMouseEnter = () => { active = true; };
    const handleMouseLeave = () => { active = false; mouse = { x: -999, y: -999 }; };

    const handleClick = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left + 10;
      const y = e.clientY - rect.top + 5;

      for (let i = 0; i < 18; i++) {
        const ratio = x / rect.width;
        const hue = Math.floor(180 + ratio * 90);
        const color = \`hsl(\${hue}, 100%, 60%)\`;
        const p = createParticle(x, y, color);
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 3.5 + 1.5;
        p.vx = Math.cos(angle) * speed;
        p.vy = Math.sin(angle) * speed;
        p.decay = Math.random() * 0.03 + 0.02;
        particles.push(p);
      }
      ripples.push(createRipple(x, y));
    };

    btn.addEventListener("mousemove", handleMouseMove);
    btn.addEventListener("mouseenter", handleMouseEnter);
    btn.addEventListener("mouseleave", handleMouseLeave);
    btn.addEventListener("click", handleClick);

    let animId: number;
    const render = () => {
      ctx.clearRect(0, 0, w, h);

      ripples = ripples.filter((r) => {
        r.radius += r.speed;
        r.alpha = 1 - r.radius / r.maxRadius;
        if (r.alpha <= 0) return false;

        ctx.save();
        ctx.globalAlpha = r.alpha;
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(0, 255, 204, 0.6)";
        ctx.lineWidth = 2.5;
        ctx.shadowBlur = 15;
        ctx.shadowColor = "#00ffcc";
        ctx.stroke();
        ctx.restore();
        return true;
      });

      particles = particles.filter((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= p.decay;
        p.radius -= 0.03;

        if (p.radius <= 0 || p.alpha <= 0) return false;

        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);

        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
        grad.addColorStop(0, "#ffffff");
        grad.addColorStop(0.3, p.color);
        grad.addColorStop(1, "transparent");
        ctx.fillStyle = grad;

        ctx.shadowBlur = 12;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.restore();
        return true;
      });

      if (active && mouse.x > 0) {
        ctx.save();
        const grad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 35);
        grad.addColorStop(0, "rgba(0, 255, 204, 0.12)");
        grad.addColorStop(1, "transparent");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 35, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      btn.removeEventListener("mousemove", handleMouseMove);
      btn.removeEventListener("mouseenter", handleMouseEnter);
      btn.removeEventListener("mouseleave", handleMouseLeave);
      btn.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-[220px] h-[60px] flex items-center justify-center bg-transparent group">
      <button
        ref={buttonRef}
        className={cn(
          "relative w-[200px] h-[50px] bg-slate-900/35 border border-white/10 rounded-full text-white text-[11px] font-bold tracking-[0.25em] uppercase cursor-pointer z-10 flex items-center justify-center backdrop-blur-md overflow-hidden transition-all duration-500 hover:text-[#00ffcc] hover:border-emerald-400/35 hover:shadow-[0_0_30px_rgba(0,255,204,0.15),inset_0_1px_1px_rgba(0,255,204,0.2)] hover:-translate-y-0.5 active:translate-y-0 active:scale-95",
          "before:content-[''] before:absolute before:top-0 before:left-[-150%] before:w-full before:height-full before:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.08)_30%,rgba(255,255,255,0.25)_50%,rgba(255,255,255,0.08)_70%,transparent)] before:animate-[sweep_4.5s_cubic-bezier(0.25,1,0.5,1)_infinite] before:z-0",
          className
        )}
        {...props}
      >
        <span className="relative z-20 pointer-events-none">{children}</span>
      </button>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />
    </div>
  );
}
`,
  "prompt": "Create an advanced Bioluminescent Shimmer Button. It should combine a continuous elegant sweeping metallic gradient highlight mask with a highly interactive canvas overlay that spawns trailing bioluminescent particles on cursor hover. The particles should drift upwards organically using damping spring physics, dynamically colored from cyan to purple based on the cursor X coordinate. On click, trigger circular glowing ripples and explosive sparks.",
  "likes": 0,
  "author": "Animation AI",
  "featured": true,
  "createdAt": "2026-05-21T10:00:00.000Z",
  "updatedAt": "2026-05-21T10:00:00.000Z"
}, {
  "slug": "cybernetic-magnetic-spark-button",
  "title": "Cybernetic Spark Button",
  "category": "buttons",
  "tag": "canvas",
  "description": "An obsidian cyber-button featuring a high-frequency laser sweep border that magnetically pulls electrostatic sparks to its rounded border path.",
  "previewCode": `<!DOCTYPE html>
<html>
<head>
  <style>
    body, html {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      background: #020206;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Courier New', Courier, monospace;
    }
    .btn-container {
      position: relative;
      width: 220px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    canvas {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 2;
    }
    .cyber-btn {
      position: relative;
      width: 200px;
      height: 50px;
      background: rgba(6, 6, 12, 0.85);
      border: 1px solid rgba(0, 255, 255, 0.15);
      border-radius: 4px;
      color: #00ffff;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.3em;
      text-transform: uppercase;
      cursor: pointer;
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 
        inset 0 0 10px rgba(0, 255, 255, 0.05),
        0 8px 24px rgba(0, 0, 0, 0.7);
      overflow: hidden;
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .cyber-btn::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 50%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(0, 255, 255, 0.35) 50%,
        transparent
      );
      animation: laser-sweep 2.8s linear infinite;
      z-index: 0;
    }
    .cyber-btn:hover {
      color: #ff007f;
      border-color: rgba(255, 0, 127, 0.5);
      box-shadow: 
        0 0 25px rgba(255, 0, 127, 0.25),
        inset 0 0 10px rgba(255, 0, 127, 0.1);
      text-shadow: 0 0 5px rgba(255, 0, 127, 0.5);
    }
    .cyber-btn:active {
      transform: scale(0.95);
    }
    .btn-text {
      position: relative;
      z-index: 3;
      pointer-events: none;
    }
    @keyframes laser-sweep {
      0% { left: -100%; }
      70% { left: 150%; }
      100% { left: 150%; }
    }
  </style>
</head>
<body>
  <div class="btn-container">
    <button class="cyber-btn" id="cyberBtn">
      <span class="btn-text">Cyber Spark</span>
    </button>
    <canvas id="cyberCanvas"></canvas>
  </div>

  <script>
    const canvas = document.getElementById('cyberCanvas');
    const ctx = canvas.getContext('2d');
    const btn = document.getElementById('cyberBtn');

    let w = 220;
    let h = 60;
    
    const dpr = window.devicePixelRatio || 1;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.scale(dpr, dpr);

    let sparks = [];
    let explosions = [];
    let isHovered = false;
    let mouse = { x: -999, y: -999 };

    const trackWidth = 200;
    const trackHeight = 50;
    const trackLeft = 10;
    const trackTop = 5;

    function getClosestTrackPoint(x, y) {
      const xMin = trackLeft;
      const xMax = trackLeft + trackWidth;
      const yMin = trackTop;
      const yMax = trackTop + trackHeight;

      let cx = x;
      let cy = y;

      if (x < xMin) cx = xMin;
      else if (x > xMax) cx = xMax;
      
      if (y < yMin) cy = yMin;
      else if (y > yMax) cy = yMax;

      const dLeft = Math.abs(x - xMin);
      const dRight = Math.abs(x - xMax);
      const dTop = Math.abs(y - yMin);
      const dBottom = Math.abs(y - yMax);

      const minDist = Math.min(dLeft, dRight, dTop, dBottom);

      if (minDist === dLeft) return { x: xMin, y: cy };
      if (minDist === dRight) return { x: xMax, y: cy };
      if (minDist === dTop) return { x: cx, y: yMin };
      return { x: cx, y: yMax };
    }

    class Spark {
      constructor(x, y, color) {
        this.x = x;
        this.y = y;
        const trackPt = getClosestTrackPoint(x, y);
        this.tx = trackPt.x;
        this.ty = trackPt.y;
        this.color = color;
        this.alpha = 1;
        this.decay = Math.random() * 0.02 + 0.015;
        this.size = Math.random() * 1.5 + 1;
        this.speed = Math.random() * 0.08 + 0.04;
      }
      update() {
        this.x += (this.tx - this.x) * this.speed;
        this.y += (this.ty - this.y) * this.speed;
        
        const trackPt = getClosestTrackPoint(this.x + (Math.random() - 0.5) * 4, this.y + (Math.random() - 0.5) * 4);
        this.tx = trackPt.x;
        this.ty = trackPt.y;

        this.alpha -= this.decay;
      }
      draw() {
        if (this.alpha <= 0) return;
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.beginPath();
        ctx.rect(this.x - this.size/2, this.y - this.size/2, this.size, this.size);
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 8;
        ctx.shadowColor = this.color;
        ctx.fill();
        ctx.restore();
      }
    }

    class ShockwaveParticle {
      constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 7;
        this.vy = (Math.random() - 0.5) * 7;
        this.size = Math.random() * 2 + 1;
        this.color = color;
        this.alpha = 1;
        this.decay = Math.random() * 0.04 + 0.03;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.vx *= 0.95;
        this.vy *= 0.95;
        this.alpha -= this.decay;
      }
      draw() {
        if (this.alpha <= 0) return;
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
        ctx.fill();
        ctx.restore();
      }
    }

    let lastAdded = 0;
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left + 10;
      const y = e.clientY - rect.top + 5;
      mouse.x = x;
      mouse.y = y;
      isHovered = true;

      const now = Date.now();
      if (now - lastAdded > 25) {
        lastAdded = now;
        const color = Math.random() > 0.5 ? '#00ffff' : '#ff007f';
        sparks.push(new Spark(x, y, color));
      }
    });

    btn.addEventListener('mouseenter', () => { isHovered = true; });
    btn.addEventListener('mouseleave', () => { isHovered = false; mouse = { x: -999, y: -999 }; });

    btn.addEventListener('click', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left + 10;
      const y = e.clientY - rect.top + 5;
      
      const color = '#ff007f';
      for (let i = 0; i < 30; i++) {
        explosions.push(new ShockwaveParticle(x, y, color));
      }
    });

    function loop() {
      ctx.clearRect(0, 0, w, h);

      sparks = sparks.filter(s => s.alpha > 0);
      sparks.forEach(s => {
        s.update();
        s.draw();
      });

      explosions = explosions.filter(p => p.alpha > 0);
      explosions.forEach(p => {
        p.update();
        p.draw();
      });

      if (isHovered && mouse.x > 0) {
        ctx.save();
        ctx.strokeStyle = 'rgba(255, 0, 127, 0.25)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(10, mouse.y);
        ctx.lineTo(210, mouse.y);
        ctx.stroke();
        ctx.restore();
      }

      requestAnimationFrame(loop);
    }
    loop();
  </script>
</body>
</html>`,
  "code": `"use client";

import React, { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface CyberneticSparkButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function CyberneticSparkButton({
  children,
  className,
  ...props
}: CyberneticSparkButtonProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const btn = buttonRef.current;
    if (!canvas || !btn) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const w = 220;
    const h = 60;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.scale(dpr, dpr);

    interface Spark {
      x: number;
      y: number;
      tx: number;
      ty: number;
      color: string;
      alpha: number;
      decay: number;
      size: number;
      speed: number;
    }

    interface ShockwaveParticle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      alpha: number;
      decay: number;
    }

    let sparks: Spark[] = [];
    let explosions: ShockwaveParticle[] = [];
    let mouse = { x: -999, y: -999 };
    let active = false;

    const trackWidth = 200;
    const trackHeight = 50;
    const trackLeft = 10;
    const trackTop = 5;

    const getClosestTrackPoint = (x: number, y: number): { x: number; y: number } => {
      const xMin = trackLeft;
      const xMax = trackLeft + trackWidth;
      const yMin = trackTop;
      const yMax = trackTop + trackHeight;

      let cx = x;
      let cy = y;

      if (x < xMin) cx = xMin;
      else if (x > xMax) cx = xMax;

      if (y < yMin) cy = yMin;
      else if (y > yMax) cy = yMax;

      const dLeft = Math.abs(x - xMin);
      const dRight = Math.abs(x - xMax);
      const dTop = Math.abs(y - yMin);
      const dBottom = Math.abs(y - yMax);

      const minDist = Math.min(dLeft, dRight, dTop, dBottom);

      if (minDist === dLeft) return { x: xMin, y: cy };
      if (minDist === dRight) return { x: xMax, y: cy };
      if (minDist === dTop) return { x: cx, y: yMin };
      return { x: cx, y: yMax };
    };

    const createSpark = (x: number, y: number, color: string): Spark => {
      const trackPt = getClosestTrackPoint(x, y);
      return {
        x,
        y,
        tx: trackPt.x,
        ty: trackPt.y,
        color,
        alpha: 1,
        decay: Math.random() * 0.02 + 0.015,
        size: Math.random() * 1.5 + 1,
        speed: Math.random() * 0.08 + 0.04,
      };
    };

    const createExplosionParticle = (x: number, y: number, color: string): ShockwaveParticle => {
      return {
        x,
        y,
        vx: (Math.random() - 0.5) * 7,
        vy: (Math.random() - 0.5) * 7,
        size: Math.random() * 2 + 1,
        color,
        alpha: 1,
        decay: Math.random() * 0.04 + 0.03,
      };
    };

    let lastAdded = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left + 10;
      const y = e.clientY - rect.top + 5;
      mouse.x = x;
      mouse.y = y;
      active = true;

      const now = Date.now();
      if (now - lastAdded > 25) {
        lastAdded = now;
        const color = Math.random() > 0.5 ? "#00ffff" : "#ff007f";
        sparks.push(createSpark(x, y, color));
      }
    };

    const handleMouseEnter = () => { active = true; };
    const handleMouseLeave = () => { active = false; mouse = { x: -999, y: -999 }; };

    const handleClick = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left + 10;
      const y = e.clientY - rect.top + 5;

      const color = "#ff007f";
      for (let i = 0; i < 30; i++) {
        explosions.push(createExplosionParticle(x, y, color));
      }
    };

    btn.addEventListener("mousemove", handleMouseMove);
    btn.addEventListener("mouseenter", handleMouseEnter);
    btn.addEventListener("mouseleave", handleMouseLeave);
    btn.addEventListener("click", handleClick);

    let animId: number;
    const loop = () => {
      ctx.clearRect(0, 0, w, h);

      sparks = sparks.filter((s) => {
        s.x += (s.tx - s.x) * s.speed;
        s.y += (s.ty - s.y) * s.speed;

        const trackPt = getClosestTrackPoint(
          s.x + (Math.random() - 0.5) * 4,
          s.y + (Math.random() - 0.5) * 4
        );
        s.tx = trackPt.x;
        s.ty = trackPt.y;

        s.alpha -= s.decay;

        if (s.alpha <= 0) return false;

        ctx.save();
        ctx.globalAlpha = s.alpha;
        ctx.beginPath();
        ctx.rect(s.x - s.size / 2, s.y - s.size / 2, s.size, s.size);
        ctx.fillStyle = s.color;
        ctx.shadowBlur = 8;
        ctx.shadowColor = s.color;
        ctx.fill();
        ctx.restore();
        return true;
      });

      explosions = explosions.filter((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.95;
        p.vy *= 0.95;
        p.alpha -= p.decay;

        if (p.alpha <= 0) return false;

        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.restore();
        return true;
      });

      if (active && mouse.x > 0) {
        ctx.save();
        ctx.strokeStyle = "rgba(255, 0, 127, 0.25)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(10, mouse.y);
        ctx.lineTo(210, mouse.y);
        ctx.stroke();
        ctx.restore();
      }

      animId = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      cancelAnimationFrame(animId);
      btn.removeEventListener("mousemove", handleMouseMove);
      btn.removeEventListener("mouseenter", handleMouseEnter);
      btn.removeEventListener("mouseleave", handleMouseLeave);
      btn.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-[220px] h-[60px] flex items-center justify-center bg-transparent group">
      <button
        ref={buttonRef}
        className={cn(
          "relative w-[200px] h-[50px] bg-[#06060c]/85 border border-[#00ffff]/15 rounded text-[#00ffff] text-[11px] font-bold tracking-[0.3em] uppercase cursor-pointer z-10 flex items-center justify-center overflow-hidden transition-all duration-300 hover:text-[#ff007f] hover:border-[#ff007f]/50 hover:shadow-[0_0_25px_rgba(255,0,127,0.25),inset_0_0_10px_rgba(255,0,127,0.1)] active:scale-95",
          "before:content-[''] before:absolute before:top-0 before:left-[-100%] before:w-[50%] before:height-full before:bg-[linear-gradient(90deg,transparent,rgba(0,255,255,0.35)_50%,transparent)] before:animate-[laser-sweep_2.8s_linear_infinite] before:z-0",
          className
        )}
        {...props}
      >
        <span className="relative z-20 pointer-events-none">{children}</span>
      </button>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />
    </div>
  );
}
`,
  "prompt": "Create an advanced Cybernetic Spark Button. It should features an obsidian cyber-button layout with a high-frequency looping neon cybernetic laser scanner line sweep, combined with an interactive 2D canvas overlay. The canvas should spawn electro-static sparks under the cursor which are magnetically pulled to the button's outer rounded border track and orbit along it. On click, it triggers a satisfying cybernetic particle detonate explosion.",
  "likes": 0,
  "author": "Animation AI",
  "featured": true,
  "createdAt": "2026-05-21T10:00:00.000Z",
  "updatedAt": "2026-05-21T10:00:00.000Z"
}, {
  "slug": "gravity-well-particle-vortex-button",
  "title": "Gravity Vortex Button",
  "category": "buttons",
  "tag": "canvas",
  "description": "A glassmorphic space-inspired button featuring a swirling orbital particle field that reacts dynamically to cursor gravitational forces.",
  "previewCode": `<!DOCTYPE html>
<html>
<head>
  <style>
    body, html {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      background: #010105;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    }
    .btn-container {
      position: relative;
      width: 220px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    canvas {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 2;
    }
    .gravity-btn {
      position: relative;
      width: 200px;
      height: 50px;
      background: rgba(10, 5, 20, 0.4);
      border: 1px solid rgba(139, 92, 246, 0.15);
      border-radius: 25px;
      color: rgba(255, 255, 255, 0.95);
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      cursor: pointer;
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      backdrop-filter: blur(16px);
      box-shadow: 
        inset 0 1px 1px rgba(255, 255, 255, 0.05),
        0 10px 30px rgba(0, 0, 0, 0.6);
      overflow: hidden;
      transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .gravity-btn::before {
      content: '';
      position: absolute;
      top: 0;
      left: -150%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(167, 139, 250, 0.05) 30%,
        rgba(167, 139, 250, 0.2) 50%,
        rgba(167, 139, 250, 0.05) 70%,
        transparent
      );
      animation: sweep 5s cubic-bezier(0.25, 1, 0.5, 1) infinite;
      z-index: 0;
    }
    .gravity-btn:hover {
      color: #c084fc;
      border-color: rgba(167, 139, 250, 0.4);
      box-shadow: 
        0 0 30px rgba(167, 139, 250, 0.2),
        inset 0 1px 1px rgba(167, 139, 250, 0.3);
      transform: translateY(-2px);
    }
    .gravity-btn:active {
      transform: translateY(0) scale(0.97);
    }
    .btn-text {
      position: relative;
      z-index: 3;
      pointer-events: none;
    }
    @keyframes sweep {
      0% { left: -150%; }
      50% { left: 150%; }
      100% { left: 150%; }
    }
  </style>
</head>
<body>
  <div class="btn-container">
    <button class="gravity-btn" id="gravityBtn">
      <span class="btn-text">Gravity Vortex</span>
    </button>
    <canvas id="gravityCanvas"></canvas>
  </div>

  <script>
    const canvas = document.getElementById('gravityCanvas');
    const ctx = canvas.getContext('2d');
    const btn = document.getElementById('gravityBtn');

    let w = 220;
    let h = 60;
    
    const dpr = window.devicePixelRatio || 1;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.scale(dpr, dpr);

    let particles = [];
    let isHovered = false;
    let mouse = { x: -999, y: -999 };
    let clickAnimActive = false;
    let clickTime = 0;
    let clickPos = { x: 0, y: 0 };

    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * 200 + 10;
        this.y = Math.random() * 50 + 5;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.radius = Math.random() * 1.5 + 0.8;
        this.color = Math.random() > 0.4 ? '#a78bfa' : '#c084fc';
        this.angle = Math.random() * Math.PI * 2;
        this.orbitRadius = Math.random() * 25 + 10;
        this.orbitSpeed = (Math.random() - 0.5) * 0.05;
      }
      update() {
        if (clickAnimActive) {
          const dx = clickPos.x - this.x;
          const dy = clickPos.y - this.y;
          const dist = Math.hypot(dx, dy);
          
          if (clickTime < 0.15) {
            const pull = (1 - clickTime / 0.15) * 0.35;
            this.x += dx * pull;
            this.y += dy * pull;
            this.radius *= 0.95;
          } else {
            if (this.vx === (Math.random() - 0.5) * 0.4) {
              const angle = Math.random() * Math.PI * 2;
              const spd = Math.random() * 4.5 + 2;
              this.vx = Math.cos(angle) * spd;
              this.vy = Math.sin(angle) * spd;
              this.radius = Math.random() * 2.5 + 1;
            }
            this.x += this.vx;
            this.y += this.vy;
            this.vx *= 0.95;
            this.vy *= 0.95;
            this.radius -= 0.05;
            if (this.radius <= 0.1) this.reset();
          }
          return;
        }

        if (isHovered && mouse.x > 0) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.hypot(dx, dy);

          if (dist < 55) {
            const pull = (1 - dist / 55) * 0.15;
            this.angle += this.orbitSpeed * 3;
            this.x += dx * pull + Math.cos(this.angle) * 1.2;
            this.y += dy * pull + Math.sin(this.angle) * 1.2;
            this.radius = Math.min(this.radius + 0.03, 2.5);
          } else {
            this.x += this.vx;
            this.y += this.vy;
            this.radius = Math.max(this.radius - 0.03, 1);
          }
        } else {
          this.x += this.vx;
          this.y += this.vy;
          this.radius = Math.max(this.radius - 0.02, 1);
        }

        if (this.x < 10 || this.x > 210) this.vx *= -1;
        if (this.y < 5 || this.y > 55) this.vy *= -1;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 8;
        ctx.shadowColor = this.color;
        ctx.fill();
      }
    }

    for (let i = 0; i < 60; i++) {
      particles.push(new Particle());
    }

    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left + 10;
      const y = e.clientY - rect.top + 5;
      mouse.x = x;
      mouse.y = y;
      isHovered = true;
    });

    btn.addEventListener('mouseenter', () => { isHovered = true; });
    btn.addEventListener('mouseleave', () => { isHovered = false; mouse = { x: -999, y: -999 }; });

    btn.addEventListener('click', (e) => {
      const rect = btn.getBoundingClientRect();
      clickPos.x = e.clientX - rect.left + 10;
      clickPos.y = e.clientY - rect.top + 5;
      clickAnimActive = true;
      clickTime = 0;
    });

    function loop() {
      ctx.clearRect(0, 0, w, h);

      if (clickAnimActive) {
        clickTime += 0.016;
        if (clickTime > 0.8) {
          clickAnimActive = false;
          particles.forEach(p => p.reset());
        }
      }

      particles.forEach(p => {
        p.update();
        p.draw();
      });

      if (isHovered && mouse.x > 0 && !clickAnimActive) {
        ctx.save();
        ctx.strokeStyle = 'rgba(192, 132, 252, 0.08)';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 25, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      }

      requestAnimationFrame(loop);
    }
    loop();
  </script>
</body>
</html>`,
  "code": `"use client";

import React, { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface GravityVortexButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function GravityVortexButton({
  children,
  className,
  ...props
}: GravityVortexButtonProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const btn = buttonRef.current;
    if (!canvas || !btn) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const w = 220;
    const h = 60;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.scale(dpr, dpr);

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      angle: number;
      orbitRadius: number;
      orbitSpeed: number;
    }

    let particles: Particle[] = [];
    let mouse = { x: -999, y: -999 };
    let active = false;
    let clickAnimActive = false;
    let clickTime = 0;
    let clickPos = { x: 0, y: 0 };

    const createParticle = (): Particle => {
      return {
        x: Math.random() * 200 + 10,
        y: Math.random() * 50 + 5,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.5 + 0.8,
        color: Math.random() > 0.4 ? "#a78bfa" : "#c084fc",
        angle: Math.random() * Math.PI * 2,
        orbitRadius: Math.random() * 25 + 10,
        orbitSpeed: (Math.random() - 0.5) * 0.05,
      };
    };

    for (let i = 0; i < 60; i++) {
      particles.push(createParticle());
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      mouse.x = e.clientX - rect.left + 10;
      mouse.y = e.clientY - rect.top + 5;
      active = true;
    };

    const handleMouseEnter = () => { active = true; };
    const handleMouseLeave = () => { active = false; mouse = { x: -999, y: -999 }; };

    const handleClick = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      clickPos.x = e.clientX - rect.left + 10;
      clickPos.y = e.clientY - rect.top + 5;
      clickAnimActive = true;
      clickTime = 0;
    };

    btn.addEventListener("mousemove", handleMouseMove);
    btn.addEventListener("mouseenter", handleMouseEnter);
    btn.addEventListener("mouseleave", handleMouseLeave);
    btn.addEventListener("click", handleClick);

    let animId: number;
    const loop = () => {
      ctx.clearRect(0, 0, w, h);

      if (clickAnimActive) {
        clickTime += 0.016;
        if (clickTime > 0.8) {
          clickAnimActive = false;
          particles = particles.map(() => createParticle());
        }
      }

      particles.forEach((p) => {
        if (clickAnimActive) {
          const dx = clickPos.x - p.x;
          const dy = clickPos.y - p.y;
          const dist = Math.hypot(dx, dy);

          if (clickTime < 0.15) {
            const pull = (1 - clickTime / 0.15) * 0.35;
            p.x += dx * pull;
            p.y += dy * pull;
            p.radius *= 0.95;
          } else {
            if (p.vx === (Math.random() - 0.5) * 0.4) {
              const angle = Math.random() * Math.PI * 2;
              const spd = Math.random() * 4.5 + 2;
              p.vx = Math.cos(angle) * spd;
              p.vy = Math.sin(angle) * spd;
              p.radius = Math.random() * 2.5 + 1;
            }
            p.x += p.vx;
            p.y += p.vy;
            p.vx *= 0.95;
            p.vy *= 0.95;
            p.radius -= 0.05;
          }
        } else {
          if (active && mouse.x > 0) {
            const dx = mouse.x - p.x;
            const dy = mouse.y - p.y;
            const dist = Math.hypot(dx, dy);

            if (dist < 55) {
              const pull = (1 - dist / 55) * 0.15;
              p.angle += p.orbitSpeed * 3;
              p.x += dx * pull + Math.cos(p.angle) * 1.2;
              p.y += dy * pull + Math.sin(p.angle) * 1.2;
              p.radius = Math.min(p.radius + 0.03, 2.5);
            } else {
              p.x += p.vx;
              p.y += p.vy;
              p.radius = Math.max(p.radius - 0.03, 1);
            }
          } else {
            p.x += p.vx;
            p.y += p.vy;
            p.radius = Math.max(p.radius - 0.02, 1);
          }

          if (p.x < 10 || p.x > 210) p.vx *= -1;
          if (p.y < 5 || p.y > 55) p.vy *= -1;
        }

        if (p.radius > 0) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.shadowBlur = 8;
          ctx.shadowColor = p.color;
          ctx.fill();
        }
      });

      if (active && mouse.x > 0 && !clickAnimActive) {
        ctx.save();
        ctx.strokeStyle = "rgba(192, 132, 252, 0.08)";
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 25, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      }

      animId = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      cancelAnimationFrame(animId);
      btn.removeEventListener("mousemove", handleMouseMove);
      btn.removeEventListener("mouseenter", handleMouseEnter);
      btn.removeEventListener("mouseleave", handleMouseLeave);
      btn.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-[220px] h-[60px] flex items-center justify-center bg-transparent group">
      <button
        ref={buttonRef}
        className={cn(
          "relative w-[200px] h-[50px] bg-indigo-950/20 border border-violet-500/15 rounded-full text-white text-[11px] font-bold tracking-[0.25em] uppercase cursor-pointer z-10 flex items-center justify-center backdrop-blur-md overflow-hidden transition-all duration-500 hover:text-[#c084fc] hover:border-violet-500/40 hover:shadow-[0_0_30px_rgba(167,139,250,0.2),inset_0_1px_1px_rgba(167,139,250,0.3)] hover:-translate-y-0.5 active:translate-y-0 active:scale-95",
          "before:content-[''] before:absolute before:top-0 before:left-[-150%] before:w-full before:height-full before:bg-[linear-gradient(90deg,transparent,rgba(167,139,250,0.05)_30%,rgba(167,139,250,0.2)_50%,rgba(167,139,250,0.05)_70%,transparent)] before:animate-[sweep_5s_cubic-bezier(0.25,1,0.5,1)_infinite] before:z-0",
          className
        )}
        {...props}
      >
        <span className="relative z-20 pointer-events-none">{children}</span>
      </button>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />
    </div>
  );
}
`,
  "prompt": "Create an advanced Gravity Vortex Button. It features a space-inspired event horizon outline border sweep with a continuous looping nebula light mask. The layout incorporates a 2D canvas particle overlay representing cosmic dust field nodes. Moving the cursor acts as a highly responsive gravitational singularity well, drawing all nearby particles into a tight spiral orbital trajectory centered around the pointer. Clicking triggers a supernova collapse followed by a massive radial stardust expansion.",
  "likes": 0,
  "author": "Animation AI",
  "featured": true,
  "createdAt": "2026-05-21T10:00:00.000Z",
  "updatedAt": "2026-05-21T10:00:00.000Z"
}, {
  "slug": "chronos-time-warp-distortion-button",
  "title": "Chronos Warp Button",
  "category": "buttons",
  "tag": "canvas",
  "description": "A retro-futuristic dark brass amber button presenting a magnifying time-warp lens distortion effect on an underlying grid layout.",
  "previewCode": `<!DOCTYPE html>
<html>
<head>
  <style>
    body, html {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      background: #020100;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: monospace;
    }
    .btn-container {
      position: relative;
      width: 220px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    canvas {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 2;
    }
    .chronos-btn {
      position: relative;
      width: 200px;
      height: 50px;
      background: rgba(15, 10, 5, 0.7);
      border: 1px solid rgba(245, 158, 11, 0.15);
      border-radius: 4px;
      color: rgba(245, 158, 11, 0.85);
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      cursor: pointer;
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      backdrop-filter: blur(12px);
      box-shadow: 
        inset 0 0 10px rgba(245, 158, 11, 0.05),
        0 8px 24px rgba(0, 0, 0, 0.7);
      overflow: hidden;
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .chronos-btn::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 50%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(245, 158, 11, 0.25) 50%,
        transparent
      );
      animation: sweep 3.2s linear infinite;
      z-index: 0;
    }
    .chronos-btn:hover {
      color: #f59e0b;
      border-color: rgba(245, 158, 11, 0.5);
      box-shadow: 
        0 0 25px rgba(245, 158, 11, 0.25),
        inset 0 0 12px rgba(245, 158, 11, 0.1);
    }
    .chronos-btn:active {
      transform: scale(0.96);
    }
    .btn-text {
      position: relative;
      z-index: 3;
      pointer-events: none;
    }
    @keyframes sweep {
      0% { left: -100%; }
      75% { left: 150%; }
      100% { left: 150%; }
    }
  </style>
</head>
<body>
  <div class="btn-container">
    <button class="chronos-btn" id="chronosBtn">
      <span class="btn-text">Chronos Warp</span>
    </button>
    <canvas id="chronosCanvas"></canvas>
  </div>

  <script>
    const canvas = document.getElementById('chronosCanvas');
    const ctx = canvas.getContext('2d');
    const btn = document.getElementById('chronosBtn');

    let w = 220;
    let h = 60;
    
    const dpr = window.devicePixelRatio || 1;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.scale(dpr, dpr);

    let isHovered = false;
    let mouse = { x: -999, y: -999 };
    let timeDialAngle = 0;
    let dialSpeed = 0.02;
    let freezeTime = 0;
    let gridNodes = [];

    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 4; j++) {
        const ox = 15 + i * 23;
        const oy = 10 + j * 13;
        gridNodes.push({
          ox, oy,
          x: ox, y: oy,
          vx: 0, vy: 0
        });
      }
    }

    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      mouse.x = e.clientX - rect.left + 10;
      mouse.y = e.clientY - rect.top + 5;
      isHovered = true;
      dialSpeed = 0.07;
    });

    btn.addEventListener('mouseenter', () => { isHovered = true; });
    btn.addEventListener('mouseleave', () => { isHovered = false; mouse = { x: -999, y: -999 }; dialSpeed = 0.02; });

    btn.addEventListener('click', (e) => {
      freezeTime = 45;
    });

    function loop() {
      ctx.clearRect(0, 0, w, h);

      if (freezeTime > 0) {
        freezeTime--;
        dialSpeed = 0.002;
      } else {
        dialSpeed = isHovered ? 0.05 : 0.015;
      }

      timeDialAngle += dialSpeed;

      ctx.save();
      ctx.strokeStyle = 'rgba(245, 158, 11, 0.08)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(110, 30, 20, 0, Math.PI * 2);
      ctx.stroke();

      const hx = 110 + Math.cos(timeDialAngle) * 20;
      const hy = 30 + Math.sin(timeDialAngle) * 20;
      ctx.beginPath();
      ctx.moveTo(110, 30);
      ctx.lineTo(hx, hy);
      ctx.strokeStyle = 'rgba(245, 158, 11, 0.25)';
      ctx.stroke();
      ctx.restore();

      ctx.save();
      gridNodes.forEach(node => {
        let tx = node.ox;
        let ty = node.oy;

        if (isHovered && mouse.x > 0 && freezeTime === 0) {
          const dx = mouse.x - node.ox;
          const dy = mouse.y - node.oy;
          const dist = Math.hypot(dx, dy);

          if (dist < 40) {
            const push = (1 - dist / 40) * 12;
            const angle = Math.atan2(dy, dx);
            tx = node.ox - Math.cos(angle) * push;
            ty = node.oy - Math.sin(angle) * push;
          }
        }

        node.x += (tx - node.x) * 0.15;
        node.y += (ty - node.y) * 0.15;

        ctx.fillStyle = 'rgba(245, 158, 11, 0.4)';
        ctx.beginPath();
        ctx.arc(node.x, node.y, 1.2, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.restore();

      requestAnimationFrame(loop);
    }
    loop();
  </script>
</body>
</html>`,
  "code": `"use client";

import React, { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface ChronosWarpButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function ChronosWarpButton({
  children,
  className,
  ...props
}: ChronosWarpButtonProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const btn = buttonRef.current;
    if (!canvas || !btn) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const w = 220;
    const h = 60;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.scale(dpr, dpr);

    interface GridNode {
      ox: number;
      oy: number;
      x: number;
      y: number;
    }

    const gridNodes: GridNode[] = [];
    let isHovered = false;
    let mouse = { x: -999, y: -999 };
    let timeDialAngle = 0;
    let dialSpeed = 0.02;
    let freezeTime = 0;

    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 4; j++) {
        const ox = 15 + i * 23;
        const oy = 10 + j * 13;
        gridNodes.push({ ox, oy, x: ox, y: oy });
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      mouse.x = e.clientX - rect.left + 10;
      mouse.y = e.clientY - rect.top + 5;
      isHovered = true;
      dialSpeed = 0.07;
    };

    const handleMouseEnter = () => { isHovered = true; };
    const handleMouseLeave = () => { isHovered = false; mouse = { x: -999, y: -999 }; dialSpeed = 0.02; };

    const handleClick = () => {
      freezeTime = 45;
    };

    btn.addEventListener("mousemove", handleMouseMove);
    btn.addEventListener("mouseenter", handleMouseEnter);
    btn.addEventListener("mouseleave", handleMouseLeave);
    btn.addEventListener("click", handleClick);

    let animId: number;
    const loop = () => {
      ctx.clearRect(0, 0, w, h);

      if (freezeTime > 0) {
        freezeTime--;
        dialSpeed = 0.002;
      } else {
        dialSpeed = isHovered ? 0.05 : 0.015;
      }

      timeDialAngle += dialSpeed;

      ctx.save();
      ctx.strokeStyle = "rgba(245, 158, 11, 0.08)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(110, 30, 20, 0, Math.PI * 2);
      ctx.stroke();

      const hx = 110 + Math.cos(timeDialAngle) * 20;
      const hy = 30 + Math.sin(timeDialAngle) * 20;
      ctx.beginPath();
      ctx.moveTo(110, 30);
      ctx.lineTo(hx, hy);
      ctx.strokeStyle = "rgba(245, 158, 11, 0.25)";
      ctx.stroke();
      ctx.restore();

      ctx.save();
      gridNodes.forEach((node) => {
        let tx = node.ox;
        let ty = node.oy;

        if (isHovered && mouse.x > 0 && freezeTime === 0) {
          const dx = mouse.x - node.ox;
          const dy = mouse.y - node.oy;
          const dist = Math.hypot(dx, dy);

          if (dist < 40) {
            const push = (1 - dist / 40) * 12;
            const angle = Math.atan2(dy, dx);
            tx = node.ox - Math.cos(angle) * push;
            ty = node.oy - Math.sin(angle) * push;
          }
        }

        node.x += (tx - node.x) * 0.15;
        node.y += (ty - node.y) * 0.15;

        ctx.fillStyle = "rgba(245, 158, 11, 0.4)";
        ctx.beginPath();
        ctx.arc(node.x, node.y, 1.2, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.restore();

      animId = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      cancelAnimationFrame(animId);
      btn.removeEventListener("mousemove", handleMouseMove);
      btn.removeEventListener("mouseenter", handleMouseEnter);
      btn.removeEventListener("mouseleave", handleMouseLeave);
      btn.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-[220px] h-[60px] flex items-center justify-center bg-transparent group">
      <button
        ref={buttonRef}
        className={cn(
          "relative w-[200px] h-[50px] bg-[#0f0a05]/70 border border-amber-500/15 rounded text-amber-500/85 text-[11px] font-bold tracking-[0.25em] uppercase cursor-pointer z-10 flex items-center justify-center backdrop-blur-md overflow-hidden transition-all duration-300 hover:text-amber-500 hover:border-amber-500/50 hover:shadow-[0_0_25px_rgba(245,158,11,0.25),inset_0_0_12px_rgba(245,158,11,0.1)] active:scale-95",
          "before:content-[''] before:absolute before:top-0 before:left-[-100%] before:w-[50%] before:height-full before:bg-[linear-gradient(90deg,transparent,rgba(245,158,11,0.25)_50%,transparent)] before:animate-[sweep_3.2s_linear_infinite] before:z-0",
          className
        )}
        {...props}
      >
        <span className="relative z-20 pointer-events-none">{children}</span>
      </button>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />
    </div>
  );
}
`,
  "prompt": "Create an advanced Chronos Warp Button. The design presents a retro-futuristic dark brass amber chassis with a sweeping chronograph time-dial ray overlay on top. The 2D canvas contains a coordinates lattice network grid connected by timeline threads. Moving the pointer creates a space-time glass lens dilation/magnification refraction warping effect, dynamically pulling and bending coordinates around it. Clicking the button freezes time temporarily for 300ms.",
  "likes": 0,
  "author": "Animation AI",
  "featured": true,
  "createdAt": "2026-05-21T10:00:00.000Z",
  "updatedAt": "2026-05-21T10:00:00.000Z"
}, {
  "slug": "acoustic-soundwave-visualizer-button",
  "title": "Acoustic Wave Button",
  "category": "buttons",
  "tag": "canvas",
  "description": "A carbon carbon-fiber dark button displaying a live 2D graphic equalizer visualizer wave that spikes and speeds up on cursor movement.",
  "previewCode": `<!DOCTYPE html>
<html>
<head>
  <style>
    body, html {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      background: #020402;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Inter', sans-serif;
    }
    .btn-container {
      position: relative;
      width: 220px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    canvas {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 2;
    }
    .audio-btn {
      position: relative;
      width: 200px;
      height: 50px;
      background: rgba(10, 20, 10, 0.4);
      border: 1px solid rgba(16, 185, 129, 0.15);
      border-radius: 4px;
      color: rgba(255, 255, 255, 0.95);
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      cursor: pointer;
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      backdrop-filter: blur(16px);
      box-shadow: 
        inset 0 1px 1px rgba(255, 255, 255, 0.05),
        0 10px 30px rgba(0, 0, 0, 0.6);
      overflow: hidden;
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .audio-btn::before {
      content: '';
      position: absolute;
      top: 0;
      left: -150%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(52, 211, 153, 0.05) 30%,
        rgba(52, 211, 153, 0.2) 50%,
        rgba(52, 211, 153, 0.05) 70%,
        transparent
      );
      animation: sweep 4s cubic-bezier(0.25, 1, 0.5, 1) infinite;
      z-index: 0;
    }
    .audio-btn:hover {
      color: #34d399;
      border-color: rgba(52, 211, 153, 0.4);
      box-shadow: 
        0 0 30px rgba(52, 211, 153, 0.2),
        inset 0 1px 1px rgba(52, 211, 153, 0.3);
    }
    .audio-btn:active {
      transform: scale(0.97);
    }
    .btn-text {
      position: relative;
      z-index: 3;
      pointer-events: none;
    }
    @keyframes sweep {
      0% { left: -150%; }
      50% { left: 150%; }
      100% { left: 150%; }
    }
  </style>
</head>
<body>
  <div class="btn-container">
    <button class="audio-btn" id="audioBtn">
      <span class="btn-text">Audio Wave</span>
    </button>
    <canvas id="audioCanvas"></canvas>
  </div>

  <script>
    const canvas = document.getElementById('audioCanvas');
    const ctx = canvas.getContext('2d');
    const btn = document.getElementById('audioBtn');

    let w = 220;
    let h = 60;
    
    const dpr = window.devicePixelRatio || 1;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.scale(dpr, dpr);

    let isHovered = false;
    let mouse = { x: -999, y: -999 };
    let clickAnimActive = false;
    let clickTime = 0;
    let lastX = 0;
    let velocity = 0;

    let bars = [];
    const barCount = 18;
    for (let i = 0; i < barCount; i++) {
      bars.push({
        x: 18 + i * 10.8,
        height: 5,
        targetHeight: 5,
        phase: Math.random() * Math.PI * 2
      });
    }

    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left + 10;
      mouse.x = x;
      mouse.y = e.clientY - rect.top + 5;
      isHovered = true;
      
      const diff = Math.abs(x - lastX);
      velocity = Math.min(diff * 1.5, 45);
      lastX = x;
    });

    btn.addEventListener('mouseenter', () => { isHovered = true; });
    btn.addEventListener('mouseleave', () => { isHovered = false; mouse = { x: -999, y: -999 }; velocity = 0; });

    btn.addEventListener('click', (e) => {
      clickAnimActive = true;
      clickTime = 0;
    });

    function loop() {
      ctx.clearRect(0, 0, w, h);

      if (clickAnimActive) {
        clickTime += 0.05;
        if (clickTime > 1) {
          clickAnimActive = false;
        }
      }

      velocity *= 0.95;

      bars.forEach((bar, index) => {
        bar.phase += 0.08 + (velocity * 0.005);
        let baseHeight = Math.sin(bar.phase) * 8 + 12;

        if (isHovered && mouse.x > 0) {
          const dx = Math.abs(bar.x - mouse.x);
          if (dx < 35) {
            const scale = (1 - dx / 35) * 22;
            baseHeight += scale + velocity;
          }
        }

        if (clickAnimActive) {
          const pulse = Math.sin(clickTime * Math.PI) * 35;
          baseHeight += pulse;
        }

        bar.targetHeight = Math.max(baseHeight, 3);
        bar.height += (bar.targetHeight - bar.height) * 0.2;

        ctx.fillStyle = 'rgba(52, 211, 153, 0.85)';
        ctx.beginPath();
        const by = 30 - bar.height / 2;
        ctx.rect(bar.x, by, 3, bar.height);
        
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#10b981';
        ctx.fill();
      });

      requestAnimationFrame(loop);
    }
    loop();
  </script>
</body>
</html>`,
  "code": `"use client";

import React, { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface AudioVisualizerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function AudioVisualizerButton({
  children,
  className,
  ...props
}: AudioVisualizerButtonProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const btn = buttonRef.current;
    if (!canvas || !btn) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const w = 220;
    const h = 60;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.scale(dpr, dpr);

    interface Bar {
      x: number;
      height: number;
      targetHeight: number;
      phase: number;
    }

    const bars: Bar[] = [];
    const barCount = 18;
    let isHovered = false;
    let mouse = { x: -999, y: -999 };
    let clickAnimActive = false;
    let clickTime = 0;
    let lastX = 0;
    let velocity = 0;

    for (let i = 0; i < barCount; i++) {
      bars.push({
        x: 18 + i * 10.8,
        height: 5,
        targetHeight: 5,
        phase: Math.random() * Math.PI * 2,
      });
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left + 10;
      mouse.x = x;
      mouse.y = e.clientY - rect.top + 5;
      isHovered = true;

      const diff = Math.abs(x - lastX);
      velocity = Math.min(diff * 1.5, 45);
      lastX = x;
    };

    const handleMouseEnter = () => { isHovered = true; };
    const handleMouseLeave = () => { isHovered = false; mouse = { x: -999, y: -999 }; velocity = 0; };

    const handleClick = () => {
      clickAnimActive = true;
      clickTime = 0;
    };

    btn.addEventListener("mousemove", handleMouseMove);
    btn.addEventListener("mouseenter", handleMouseEnter);
    btn.addEventListener("mouseleave", handleMouseLeave);
    btn.addEventListener("click", handleClick);

    let animId: number;
    const loop = () => {
      ctx.clearRect(0, 0, w, h);

      if (clickAnimActive) {
        clickTime += 0.05;
        if (clickTime > 1) {
          clickAnimActive = false;
        }
      }

      velocity *= 0.95;

      bars.forEach((bar) => {
        bar.phase += 0.08 + velocity * 0.005;
        let baseHeight = Math.sin(bar.phase) * 8 + 12;

        if (isHovered && mouse.x > 0) {
          const dx = Math.abs(bar.x - mouse.x);
          if (dx < 35) {
            const scale = (1 - dx / 35) * 22;
            baseHeight += scale + velocity;
          }
        }

        if (clickAnimActive) {
          const pulse = Math.sin(clickTime * Math.PI) * 35;
          baseHeight += pulse;
        }

        bar.targetHeight = Math.max(baseHeight, 3);
        bar.height += (bar.targetHeight - bar.height) * 0.2;

        ctx.fillStyle = "rgba(52, 211, 153, 0.85)";
        ctx.beginPath();
        const by = 30 - bar.height / 2;
        ctx.rect(bar.x, by, 3, bar.height);

        ctx.shadowBlur = 10;
        ctx.shadowColor = "#10b981";
        ctx.fill();
      });

      animId = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      cancelAnimationFrame(animId);
      btn.removeEventListener("mousemove", handleMouseMove);
      btn.removeEventListener("mouseenter", handleMouseEnter);
      btn.removeEventListener("mouseleave", handleMouseLeave);
      btn.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-[220px] h-[60px] flex items-center justify-center bg-transparent group">
      <button
        ref={buttonRef}
        className={cn(
          "relative w-[200px] h-[50px] bg-emerald-950/20 border border-emerald-500/15 rounded text-white text-[11px] font-bold tracking-[0.25em] uppercase cursor-pointer z-10 flex items-center justify-center backdrop-blur-md overflow-hidden transition-all duration-300 hover:text-emerald-400 hover:border-emerald-500/40 hover:shadow-[0_0_30px_rgba(52,211,153,0.2),inset_0_1px_1px_rgba(52,211,153,0.3)] hover:-translate-y-0.5 active:translate-y-0 active:scale-95",
          "before:content-[''] before:absolute before:top-0 before:left-[-150%] before:w-full before:height-full before:bg-[linear-gradient(90deg,transparent,rgba(52,211,153,0.05)_30%,rgba(52,211,153,0.2)_50%,rgba(52,211,153,0.05)_70%,transparent)] before:animate-[sweep_4s_cubic-bezier(0.25,1,0.5,1)_infinite] before:z-0",
          className
        )}
        {...props}
      >
        <span className="relative z-20 pointer-events-none">{children}</span>
      </button>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />
    </div>
  );
}
`,
  "prompt": "Create an advanced Acoustic Wave Button. The layout integrates a sleek dark design with a 2D canvas overlay running a live audio graphic equalizer. Frequency spectrum bars pulse elegantly. Moving the pointer creates active audio interference ripples, scaling frequency bars upwards proportionally to cursor velocity. Clicking triggers a simulated beat drop peak pulse across the layout.",
  "likes": 0,
  "author": "Animation AI",
  "featured": true,
  "createdAt": "2026-05-21T10:00:00.000Z",
  "updatedAt": "2026-05-21T10:00:00.000Z"
}, {
  "slug": "neural-network-synapse-button",
  "title": "Neural Net Button",
  "category": "buttons",
  "tag": "canvas",
  "description": "An intelligent cyber blue glassmorphic button exhibiting an interactive neural synapse network that fires signals on hover.",
  "previewCode": `<!DOCTYPE html>
<html>
<head>
  <style>
    body, html {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      background: #02020a;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: monospace;
    }
    .btn-container {
      position: relative;
      width: 220px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    canvas {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 2;
    }
    .neural-btn {
      position: relative;
      width: 200px;
      height: 50px;
      background: rgba(6, 12, 24, 0.7);
      border: 1px solid rgba(14, 165, 233, 0.15);
      border-radius: 25px;
      color: rgba(14, 165, 233, 0.85);
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      cursor: pointer;
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      backdrop-filter: blur(12px);
      box-shadow: 
        inset 0 0 10px rgba(14, 165, 233, 0.05),
        0 8px 24px rgba(0, 0, 0, 0.7);
      overflow: hidden;
      transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .neural-btn::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 50%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(14, 165, 233, 0.25) 50%,
        transparent
      );
      animation: sweep 3.5s linear infinite;
      z-index: 0;
    }
    .neural-btn:hover {
      color: #06b6d4;
      border-color: rgba(6, 182, 212, 0.5);
      box-shadow: 
        0 0 25px rgba(6, 182, 212, 0.25),
        inset 0 0 12px rgba(6, 182, 212, 0.1);
    }
    .neural-btn:active {
      transform: scale(0.96);
    }
    .btn-text {
      position: relative;
      z-index: 3;
      pointer-events: none;
    }
    @keyframes sweep {
      0% { left: -100%; }
      75% { left: 150%; }
      100% { left: 150%; }
    }
  </style>
</head>
<body>
  <div class="btn-container">
    <button class="neural-btn" id="neuralBtn">
      <span class="btn-text">Neural Net</span>
    </button>
    <canvas id="neuralCanvas"></canvas>
  </div>

  <script>
    const canvas = document.getElementById('neuralCanvas');
    const ctx = canvas.getContext('2d');
    const btn = document.getElementById('neuralBtn');

    let w = 220;
    let h = 60;
    
    const dpr = window.devicePixelRatio || 1;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.scale(dpr, dpr);

    let isHovered = false;
    let mouse = { x: -999, y: -999 };
    let clickPulse = 0;
    let nodes = [];

    for (let i = 0; i < 20; i++) {
      nodes.push({
        x: Math.random() * 180 + 20,
        y: Math.random() * 40 + 10,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        baseRadius: Math.random() * 2 + 1,
        radius: 1.5,
        pulseOffset: Math.random() * Math.PI * 2
      });
    }

    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      mouse.x = e.clientX - rect.left + 10;
      mouse.y = e.clientY - rect.top + 5;
      isHovered = true;
    });

    btn.addEventListener('mouseenter', () => { isHovered = true; });
    btn.addEventListener('mouseleave', () => { isHovered = false; mouse = { x: -999, y: -999 }; });

    btn.addEventListener('click', (e) => {
      clickPulse = 1;
    });

    function loop() {
      ctx.clearRect(0, 0, w, h);

      if (clickPulse > 0) {
        clickPulse -= 0.025;
      }

      nodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 15 || node.x > 205) node.vx *= -1;
        if (node.y < 8 || node.y > 52) node.vy *= -1;

        node.radius = node.baseRadius + Math.sin(Date.now() * 0.005 + node.pulseOffset) * 0.6;
      });

      ctx.lineWidth = 0.5;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.hypot(dx, dy);

          if (dist < 45) {
            const alpha = (1 - dist / 45) * 0.15 + (clickPulse * 0.65);
            ctx.strokeStyle = 'rgba(14, 165, 233, ' + alpha + ')';
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      if (isHovered && mouse.x > 0) {
        nodes.forEach(node => {
          const dx = mouse.x - node.x;
          const dy = mouse.y - node.y;
          const dist = Math.hypot(dx, dy);

          if (dist < 55) {
            ctx.save();
            ctx.lineWidth = 0.8;
            ctx.strokeStyle = 'rgba(6, 182, 212, ' + ((1 - dist / 55) * 0.45) + ')';
            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(node.x, node.y);
            ctx.stroke();
            ctx.restore();
          }
        });
      }

      nodes.forEach(node => {
        ctx.save();
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius + (clickPulse * 3), 0, Math.PI * 2);
        ctx.fillStyle = clickPulse > 0 ? '#38bdf8' : '#0ea5e9';
        ctx.shadowBlur = 8;
        ctx.shadowColor = '#0ea5e9';
        ctx.fill();
        ctx.restore();
      });

      requestAnimationFrame(loop);
    }
    loop();
  </script>
</body>
</html>`,
  "code": `"use client";

import React, { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface NeuralSynapseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function NeuralSynapseButton({
  children,
  className,
  ...props
}: NeuralSynapseButtonProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const btn = buttonRef.current;
    if (!canvas || !btn) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const w = 220;
    const h = 60;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.scale(dpr, dpr);

    interface Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      baseRadius: number;
      radius: number;
      pulseOffset: number;
    }

    const nodes: Node[] = [];
    let isHovered = false;
    let mouse = { x: -999, y: -999 };
    let clickPulse = 0;

    for (let i = 0; i < 20; i++) {
      nodes.push({
        x: Math.random() * 180 + 20,
        y: Math.random() * 40 + 10,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        baseRadius: Math.random() * 2 + 1,
        radius: 1.5,
        pulseOffset: Math.random() * Math.PI * 2,
      });
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      mouse.x = e.clientX - rect.left + 10;
      mouse.y = e.clientY - rect.top + 5;
      isHovered = true;
    };

    const handleMouseEnter = () => { isHovered = true; };
    const handleMouseLeave = () => { isHovered = false; mouse = { x: -999, y: -999 }; };

    const handleClick = () => {
      clickPulse = 1;
    };

    btn.addEventListener("mousemove", handleMouseMove);
    btn.addEventListener("mouseenter", handleMouseEnter);
    btn.addEventListener("mouseleave", handleMouseLeave);
    btn.addEventListener("click", handleClick);

    let animId: number;
    const loop = () => {
      ctx.clearRect(0, 0, w, h);

      if (clickPulse > 0) {
        clickPulse -= 0.025;
      }

      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 15 || node.x > 205) node.vx *= -1;
        if (node.y < 8 || node.y > 52) node.vy *= -1;

        node.radius = node.baseRadius + Math.sin(Date.now() * 0.005 + node.pulseOffset) * 0.6;
      });

      ctx.lineWidth = 0.5;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.hypot(dx, dy);

          if (dist < 45) {
            const alpha = (1 - dist / 45) * 0.15 + clickPulse * 0.65;
            ctx.strokeStyle = 'rgba(14, 165, 233, ' + alpha + ')';
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      if (isHovered && mouse.x > 0) {
        nodes.forEach((node) => {
          const dx = mouse.x - node.x;
          const dy = mouse.y - node.y;
          const dist = Math.hypot(dx, dy);

          if (dist < 55) {
            ctx.save();
            ctx.lineWidth = 0.8;
            ctx.strokeStyle = 'rgba(6, 182, 212, ' + ((1 - dist / 55) * 0.45) + ')';
            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(node.x, node.y);
            ctx.stroke();
            ctx.restore();
          }
        });
      }

      nodes.forEach((node) => {
        ctx.save();
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius + clickPulse * 3, 0, Math.PI * 2);
        ctx.fillStyle = clickPulse > 0 ? "#38bdf8" : "#0ea5e9";
        ctx.shadowBlur = 8;
        ctx.shadowColor = "#0ea5e9";
        ctx.fill();
        ctx.restore();
      });

      animId = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      cancelAnimationFrame(animId);
      btn.removeEventListener("mousemove", handleMouseMove);
      btn.removeEventListener("mouseenter", handleMouseEnter);
      btn.removeEventListener("mouseleave", handleMouseLeave);
      btn.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-[220px] h-[60px] flex items-center justify-center bg-transparent group">
      <button
        ref={buttonRef}
        className={cn(
          "relative w-[200px] h-[50px] bg-[#060c18]/75 border border-sky-500/15 rounded-full text-sky-500/85 text-[11px] font-bold tracking-[0.25em] uppercase cursor-pointer z-10 flex items-center justify-center backdrop-blur-md overflow-hidden transition-all duration-500 hover:text-cyan-400 hover:border-cyan-500/50 hover:shadow-[0_0_25px_rgba(6,182,212,0.25),inset_0_0_12px_rgba(6,182,212,0.1)] active:scale-95",
          "before:content-[''] before:absolute before:top-0 before:left-[-100%] before:w-[50%] before:height-full before:bg-[linear-gradient(90deg,transparent,rgba(14,165,233,0.25)_50%,transparent)] before:animate-[sweep_3.5s_linear_infinite] before:z-0",
          className
        )}
        {...props}
      >
        <span className="relative z-20 pointer-events-none">{children}</span>
      </button>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />
    </div>
  );
}
`,
  "prompt": "Create an advanced Neural Net Button. The layout features an elegant deep cyber blue structure surrounded by a continuous looping gradient highlights mask. Inside the 2D canvas overlay, nodes representing synaptic cells float organically. Hovering the pointer activates active synapse dendrite branches that target the cursor node, firing glowing cyber impulses. Clicking triggers a high-voltage electrical pulse overload, momentarily lightning up the complete network.",
  "likes": 0,
  "author": "Animation AI",
  "featured": true,
  "createdAt": "2026-05-21T10:00:00.000Z",
  "updatedAt": "2026-05-21T10:00:00.000Z"
}, {
  "slug": "quantum-superfluid-vortex-button",
  "title": "Quantum Fluid Button",
  "category": "buttons",
  "tag": "canvas",
  "description": "A pink-indigo quantum stardust button featuring phase-locking quantum wave condensate flows that wrap around the cursor.",
  "previewCode": `<!DOCTYPE html>
<html>
<head>
  <style>
    body, html {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      background: #020108;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Inter', sans-serif;
    }
    .btn-container {
      position: relative;
      width: 220px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    canvas {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 2;
    }
    .quantum-btn {
      position: relative;
      width: 200px;
      height: 50px;
      background: rgba(8, 4, 20, 0.5);
      border: 1px solid rgba(236, 72, 153, 0.15);
      border-radius: 25px;
      color: rgba(255, 255, 255, 0.95);
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      cursor: pointer;
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      backdrop-filter: blur(16px);
      box-shadow: 
        inset 0 1px 1px rgba(255, 255, 255, 0.05),
        0 10px 30px rgba(0, 0, 0, 0.6);
      overflow: hidden;
      transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .quantum-btn::before {
      content: '';
      position: absolute;
      top: 0;
      left: -150%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(236, 72, 153, 0.05) 30%,
        rgba(236, 72, 153, 0.2) 50%,
        rgba(99, 102, 241, 0.2) 60%,
        transparent
      );
      animation: sweep 4.5s cubic-bezier(0.25, 1, 0.5, 1) infinite;
      z-index: 0;
    }
    .quantum-btn:hover {
      color: #f472b6;
      border-color: rgba(236, 72, 153, 0.4);
      box-shadow: 
        0 0 30px rgba(236, 72, 153, 0.2),
        inset 0 1px 1px rgba(236, 72, 153, 0.3);
      transform: translateY(-2px);
    }
    .quantum-btn:active {
      transform: translateY(0) scale(0.97);
    }
    .btn-text {
      position: relative;
      z-index: 3;
      pointer-events: none;
    }
    @keyframes sweep {
      0% { left: -150%; }
      50% { left: 150%; }
      100% { left: 150%; }
    }
  </style>
</head>
<body>
  <div class="btn-container">
    <button class="quantum-btn" id="quantumBtn">
      <span class="btn-text">Quantum Fluid</span>
    </button>
    <canvas id="quantumCanvas"></canvas>
  </div>

  <script>
    const canvas = document.getElementById('quantumCanvas');
    const ctx = canvas.getContext('2d');
    const btn = document.getElementById('quantumBtn');

    let w = 220;
    let h = 60;
    
    const dpr = window.devicePixelRatio || 1;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.scale(dpr, dpr);

    let particles = [];
    let isHovered = false;
    let mouse = { x: -999, y: -999 };
    let clickTime = 0;
    let clickActive = false;

    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * 200 + 10;
        this.y = Math.random() * 50 + 5;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.radius = Math.random() * 1.5 + 0.8;
        this.color = Math.random() > 0.5 ? '#ec4899' : '#6366f1';
        this.phase = Math.random() * Math.PI * 2;
        this.entangled = false;
        this.entangledPartner = null;
      }
      update() {
        if (clickActive) {
          this.radius = Math.max(this.radius - 0.05, 0.1);
          if (this.radius <= 0.1) this.reset();
          return;
        }

        if (isHovered && mouse.x > 0) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.hypot(dx, dy);

          if (dist < 40) {
            this.phase += 0.12;
            const waveX = Math.cos(this.phase) * 2;
            const waveY = Math.sin(this.phase) * 2;
            
            this.x += dx * 0.18 + waveX;
            this.y += dy * 0.18 + waveY;
            this.radius = Math.min(this.radius + 0.04, 2.5);
          } else {
            this.x += this.vx;
            this.y += this.vy;
            this.radius = Math.max(this.radius - 0.02, 1);
          }
        } else {
          this.x += this.vx;
          this.y += this.vy;
          this.radius = Math.max(this.radius - 0.02, 1);
        }

        if (this.x < 10 || this.x > 210) this.vx *= -1;
        if (this.y < 5 || this.y > 55) this.vy *= -1;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 8;
        ctx.shadowColor = this.color;
        ctx.fill();
      }
    }

    for (let i = 0; i < 45; i++) {
      particles.push(new Particle());
    }

    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      mouse.x = e.clientX - rect.left + 10;
      mouse.y = e.clientY - rect.top + 5;
      isHovered = true;
    });

    btn.addEventListener('mouseenter', () => { isHovered = true; });
    btn.addEventListener('mouseleave', () => { isHovered = false; mouse = { x: -999, y: -999 }; });

    btn.addEventListener('click', (e) => {
      clickActive = true;
      clickTime = 0;
    });

    function loop() {
      ctx.clearRect(0, 0, w, h);

      if (clickActive) {
        clickTime += 0.016;
        if (clickTime > 0.4) {
          clickActive = false;
        }
      }

      particles.forEach(p => {
        p.update();
        p.draw();
      });

      if (isHovered && mouse.x > 0 && !clickActive) {
        ctx.save();
        ctx.strokeStyle = 'rgba(236, 72, 153, 0.05)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 18, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      }

      requestAnimationFrame(loop);
    }
    loop();
  </script>
</body>
</html>`,
  "code": `"use client";

import React, { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface QuantumSuperfluidButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function QuantumSuperfluidButton({
  children,
  className,
  ...props
}: QuantumSuperfluidButtonProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const btn = buttonRef.current;
    if (!canvas || !btn) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const w = 220;
    const h = 60;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.scale(dpr, dpr);

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      phase: number;
    }

    let particles: Particle[] = [];
    let mouse = { x: -999, y: -999 };
    let isHovered = false;
    let clickTime = 0;
    let clickActive = false;

    const createParticle = (): Particle => {
      return {
        x: Math.random() * 200 + 10,
        y: Math.random() * 50 + 5,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.5 + 0.8,
        color: Math.random() > 0.5 ? "#ec4899" : "#6366f1",
        phase: Math.random() * Math.PI * 2,
      };
    };

    for (let i = 0; i < 45; i++) {
      particles.push(createParticle());
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      mouse.x = e.clientX - rect.left + 10;
      mouse.y = e.clientY - rect.top + 5;
      isHovered = true;
    };

    const handleMouseEnter = () => { isHovered = true; };
    const handleMouseLeave = () => { isHovered = false; mouse = { x: -999, y: -999 }; };

    const handleClick = () => {
      clickActive = true;
      clickTime = 0;
    };

    btn.addEventListener("mousemove", handleMouseMove);
    btn.addEventListener("mouseenter", handleMouseEnter);
    btn.addEventListener("mouseleave", handleMouseLeave);
    btn.addEventListener("click", handleClick);

    let animId: number;
    const loop = () => {
      ctx.clearRect(0, 0, w, h);

      if (clickActive) {
        clickTime += 0.016;
        if (clickTime > 0.4) {
          clickActive = false;
          particles = particles.map(() => createParticle());
        }
      }

      particles.forEach((p) => {
        if (clickActive) {
          p.radius = Math.max(p.radius - 0.05, 0.1);
        } else {
          if (isHovered && mouse.x > 0) {
            const dx = mouse.x - p.x;
            const dy = mouse.y - p.y;
            const dist = Math.hypot(dx, dy);

            if (dist < 40) {
              p.phase += 0.12;
              const waveX = Math.cos(p.phase) * 2;
              const waveY = Math.sin(p.phase) * 2;
              p.x += dx * 0.18 + waveX;
              p.y += dy * 0.18 + waveY;
              p.radius = Math.min(p.radius + 0.04, 2.5);
            } else {
              p.x += p.vx;
              p.y += p.vy;
              p.radius = Math.max(p.radius - 0.03, 1);
            }
          } else {
            p.x += p.vx;
            p.y += p.vy;
            p.radius = Math.max(p.radius - 0.02, 1);
          }

          if (p.x < 10 || p.x > 210) p.vx *= -1;
          if (p.y < 5 || p.y > 55) p.vy *= -1;
        }

        if (p.radius > 0) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.shadowBlur = 8;
          ctx.shadowColor = p.color;
          ctx.fill();
        }
      });

      if (isHovered && mouse.x > 0 && !clickActive) {
        ctx.save();
        ctx.strokeStyle = "rgba(236, 72, 153, 0.05)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 18, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      }

      animId = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      cancelAnimationFrame(animId);
      btn.removeEventListener("mousemove", handleMouseMove);
      btn.removeEventListener("mouseenter", handleMouseEnter);
      btn.removeEventListener("mouseleave", handleMouseLeave);
      btn.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-[220px] h-[60px] flex items-center justify-center bg-transparent group">
      <button
        ref={buttonRef}
        className={cn(
          "relative w-[200px] h-[50px] bg-[#080414]/50 border border-pink-500/15 rounded-full text-white text-[11px] font-bold tracking-[0.25em] uppercase cursor-pointer z-10 flex items-center justify-center backdrop-blur-md overflow-hidden transition-all duration-500 hover:text-pink-400 hover:border-pink-500/40 hover:shadow-[0_0_30px_rgba(236,72,153,0.2),inset_0_1px_1px_rgba(236,72,153,0.3)] hover:-translate-y-0.5 active:translate-y-0 active:scale-95",
          "before:content-[''] before:absolute before:top-0 before:left-[-150%] before:w-full before:height-full before:bg-[linear-gradient(90deg,transparent,rgba(236,72,153,0.05)_30%,rgba(236,72,153,0.2)_50%,rgba(99,102,241,0.2)_60%,transparent)] before:animate-[sweep_4.5s_cubic-bezier(0.25,1,0.5,1)_infinite] before:z-0",
          className
        )}
        {...props}
      >
        <span className="relative z-20 pointer-events-none">{children}</span>
      </button>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />
    </div>
  );
}
`,
  "prompt": "Create an advanced Quantum Superfluid Button. The design presents a sleek violet dark body surrounded by stardust sweep highlights. The 2D canvas particle overlay runs a physical superfluid simulator. Hovering the pointer locks the phases of stardust nodes, causing them to group and flow into a synchronized waves coordinate flow around the cursor. Clicking triggers quantum tunneling.",
  "likes": 0,
  "author": "Animation AI",
  "featured": true,
  "createdAt": "2026-05-21T10:00:00.000Z",
  "updatedAt": "2026-05-21T10:00:00.000Z"
}, {
  "slug": "magnetic-ferrofluid-ripple-button",
  "title": "Ferrofluid Button",
  "category": "buttons",
  "tag": "canvas",
  "description": "An obsidian black metallic button showcasing an interactive magnetic liquid simulation that spikes and ripples on hover.",
  "previewCode": `<!DOCTYPE html>
<html>
<head>
  <style>
    body, html {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      background: #020202;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Inter', sans-serif;
    }
    .btn-container {
      position: relative;
      width: 220px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    canvas {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 2;
    }
    .ferro-btn {
      position: relative;
      width: 200px;
      height: 50px;
      background: rgba(15, 15, 15, 0.75);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 4px;
      color: rgba(255, 255, 255, 0.85);
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      cursor: pointer;
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      backdrop-filter: blur(12px);
      box-shadow: 
        inset 0 0 10px rgba(255, 255, 255, 0.05),
        0 8px 24px rgba(0, 0, 0, 0.8);
      overflow: hidden;
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .ferro-btn::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 50%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.15) 50%,
        transparent
      );
      animation: sweep 3.5s linear infinite;
      z-index: 0;
    }
    .ferro-btn:hover {
      color: #ffffff;
      border-color: rgba(255, 255, 255, 0.4);
      box-shadow: 
        0 0 25px rgba(255, 255, 255, 0.15),
        inset 0 0 12px rgba(255, 255, 255, 0.05);
    }
    .ferro-btn:active {
      transform: scale(0.96);
    }
    .btn-text {
      position: relative;
      z-index: 3;
      pointer-events: none;
    }
    @keyframes sweep {
      0% { left: -100%; }
      75% { left: 150%; }
      100% { left: 150%; }
    }
  </style>
</head>
<body>
  <div class="btn-container">
    <button class="ferro-btn" id="ferroBtn">
      <span class="btn-text">Ferrofluid</span>
    </button>
    <canvas id="ferroCanvas"></canvas>
  </div>

  <script>
    const canvas = document.getElementById('ferroCanvas');
    const ctx = canvas.getContext('2d');
    const btn = document.getElementById('ferroBtn');

    let w = 220;
    let h = 60;
    
    const dpr = window.devicePixelRatio || 1;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.scale(dpr, dpr);

    let isHovered = false;
    let mouse = { x: -999, y: -999 };
    let points = [];
    let clickTime = 0;
    let clickActive = false;

    for (let i = 0; i < 22; i++) {
      points.push({
        x: 10 + i * 9.5,
        y: 30,
        oy: 30,
        vy: 0
      });
    }

    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      mouse.x = e.clientX - rect.left + 10;
      mouse.y = e.clientY - rect.top + 5;
      isHovered = true;
    });

    btn.addEventListener('mouseenter', () => { isHovered = true; });
    btn.addEventListener('mouseleave', () => { isHovered = false; mouse = { x: -999, y: -999 }; });

    btn.addEventListener('click', (e) => {
      clickActive = true;
      clickTime = 0;
    });

    function loop() {
      ctx.clearRect(0, 0, w, h);

      if (clickActive) {
        clickTime += 0.05;
        if (clickTime > 1) {
          clickActive = false;
        }
      }

      ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
      ctx.lineWidth = 1;
      for (let r = 10; r < 50; r += 12) {
        ctx.beginPath();
        ctx.arc(w / 2, h / 2, r, 0, Math.PI * 2);
        ctx.stroke();
      }

      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);

      points.forEach((pt, index) => {
        let ty = pt.oy;

        if (isHovered && mouse.x > 0) {
          const dx = Math.abs(pt.x - mouse.x);
          if (dx < 30) {
            const strength = (1 - dx / 30) * 15;
            ty = pt.oy - strength * Math.sign(pt.oy - mouse.y);
          }
        }

        if (clickActive) {
          const wave = Math.sin(clickTime * Math.PI * 4 + index * 0.5) * 12;
          ty += wave;
        }

        pt.vy += (ty - pt.y) * 0.1;
        pt.vy *= 0.8;
        pt.y += pt.vy;

        if (index > 0) {
          const prev = points[index - 1];
          const cx = (prev.x + pt.x) / 2;
          const cy = (prev.y + pt.y) / 2;
          ctx.quadraticCurveTo(prev.x, prev.y, cx, cy);
        }
      });

      ctx.lineTo(points[points.length - 1].x, points[points.length - 1].y);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
      ctx.lineWidth = 2.5;
      ctx.stroke();

      points.forEach(pt => {
        if (Math.abs(pt.y - pt.oy) > 2) {
          ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, 1.2, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      requestAnimationFrame(loop);
    }
    loop();
  </script>
</body>
</html>`,
  "code": `"use client";

import React, { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface MagneticFerrofluidButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function MagneticFerrofluidButton({
  children,
  className,
  ...props
}: MagneticFerrofluidButtonProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const btn = buttonRef.current;
    if (!canvas || !btn) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const w = 220;
    const h = 60;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.scale(dpr, dpr);

    interface Point {
      x: number;
      y: number;
      oy: number;
      vy: number;
    }

    const points: Point[] = [];
    let isHovered = false;
    let mouse = { x: -999, y: -999 };
    let clickTime = 0;
    let clickActive = false;

    for (let i = 0; i < 22; i++) {
      points.push({
        x: 10 + i * 9.5,
        y: 30,
        oy: 30,
        vy: 0,
      });
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      mouse.x = e.clientX - rect.left + 10;
      mouse.y = e.clientY - rect.top + 5;
      isHovered = true;
    };

    const handleMouseEnter = () => { isHovered = true; };
    const handleMouseLeave = () => { isHovered = false; mouse = { x: -999, y: -999 }; };

    const handleClick = () => {
      clickActive = true;
      clickTime = 0;
    };

    btn.addEventListener("mousemove", handleMouseMove);
    btn.addEventListener("mouseenter", handleMouseEnter);
    btn.addEventListener("mouseleave", handleMouseLeave);
    btn.addEventListener("click", handleClick);

    let animId: number;
    const loop = () => {
      ctx.clearRect(0, 0, w, h);

      if (clickActive) {
        clickTime += 0.05;
        if (clickTime > 1) {
          clickActive = false;
        }
      }

      ctx.strokeStyle = "rgba(255, 255, 255, 0.03)";
      ctx.lineWidth = 1;
      for (let r = 10; r < 50; r += 12) {
        ctx.beginPath();
        ctx.arc(w / 2, h / 2, r, 0, Math.PI * 2);
        ctx.stroke();
      }

      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);

      points.forEach((pt, index) => {
        let ty = pt.oy;

        if (isHovered && mouse.x > 0) {
          const dx = Math.abs(pt.x - mouse.x);
          if (dx < 30) {
            const strength = (1 - dx / 30) * 15;
            ty = pt.oy - strength * Math.sign(pt.oy - mouse.y);
          }
        }

        if (clickActive) {
          const wave = Math.sin(clickTime * Math.PI * 4 + index * 0.5) * 12;
          ty += wave;
        }

        pt.vy += (ty - pt.y) * 0.1;
        pt.vy *= 0.8;
        pt.y += pt.vy;

        if (index > 0) {
          const prev = points[index - 1];
          const cx = (prev.x + pt.x) / 2;
          const cy = (prev.y + pt.y) / 2;
          ctx.quadraticCurveTo(prev.x, prev.y, cx, cy);
        }
      });

      ctx.lineTo(points[points.length - 1].x, points[points.length - 1].y);
      ctx.strokeStyle = "rgba(255, 255, 255, 0.25)";
      ctx.lineWidth = 2.5;
      ctx.stroke();

      points.forEach((pt) => {
        if (Math.abs(pt.y - pt.oy) > 2) {
          ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, 1.2, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      animId = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      cancelAnimationFrame(animId);
      btn.removeEventListener("mousemove", handleMouseMove);
      btn.removeEventListener("mouseenter", handleMouseEnter);
      btn.removeEventListener("mouseleave", handleMouseLeave);
      btn.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-[220px] h-[60px] flex items-center justify-center bg-transparent group">
      <button
        ref={buttonRef}
        className={cn(
          "relative w-[200px] h-[50px] bg-neutral-900/75 border border-white/10 rounded text-white/85 text-[11px] font-bold tracking-[0.25em] uppercase cursor-pointer z-10 flex items-center justify-center backdrop-blur-md overflow-hidden transition-all duration-300 hover:text-white hover:border-white/40 hover:shadow-[0_0_25px_rgba(255,255,255,0.15),inset_0_0_12px_rgba(255,255,255,0.05)] active:scale-95",
          "before:content-[''] before:absolute before:top-0 before:left-[-100%] before:w-[50%] before:height-full before:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.15)_50%,transparent)] before:animate-[sweep_3.5s_linear_infinite] before:z-0",
          className
        )}
        {...props}
      >
        <span className="relative z-20 pointer-events-none">{children}</span>
      </button>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />
    </div>
  );
}
`,
  "prompt": "Create an advanced Ferrofluid Button. The design presents a dark obsidian body. Inside the 2D canvas overlay runs a smooth magnetic fluid simulator. Concentric magnetic field contours are visible. Hovering the pointer acts as a high-intensity Neodymium magnet, growing dynamic metallic liquid spikes that reach towards the cursor. Clicking triggers a simulated electromagnetic wave ripple shockwave across the liquid body.",
  "likes": 0,
  "author": "Animation AI",
  "featured": true,
  "createdAt": "2026-05-21T10:00:00.000Z",
  "updatedAt": "2026-05-21T10:00:00.000Z"
}, {
  "slug": "gravitational-singularity-button",
  "title": "Singularity Button",
  "category": "buttons",
  "tag": "canvas",
  "description": "An ultra-violet space-theme button containing an interactive starfield orbiting a central gravitational singularity core.",
  "previewCode": `<!DOCTYPE html>
<html>
<head>
  <style>
    body, html {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      background: #010103;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Inter', sans-serif;
    }
    .btn-container {
      position: relative;
      width: 220px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    canvas {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 2;
    }
    .singularity-btn {
      position: relative;
      width: 200px;
      height: 50px;
      background: rgba(3, 2, 8, 0.6);
      border: 1px solid rgba(139, 92, 246, 0.15);
      border-radius: 4px;
      color: rgba(255, 255, 255, 0.95);
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      cursor: pointer;
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      backdrop-filter: blur(16px);
      box-shadow: 
        inset 0 1px 1px rgba(255, 255, 255, 0.05),
        0 10px 30px rgba(0, 0, 0, 0.7);
      overflow: hidden;
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .singularity-btn::before {
      content: '';
      position: absolute;
      top: 0;
      left: -150%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(139, 92, 246, 0.05) 30%,
        rgba(139, 92, 246, 0.25) 50%,
        rgba(245, 158, 11, 0.1) 60%,
        transparent
      );
      animation: sweep 4s cubic-bezier(0.25, 1, 0.5, 1) infinite;
      z-index: 0;
    }
    .singularity-btn:hover {
      color: #a78bfa;
      border-color: rgba(139, 92, 246, 0.4);
      box-shadow: 
        0 0 30px rgba(139, 92, 246, 0.2),
        inset 0 1px 1px rgba(139, 92, 246, 0.3);
    }
    .singularity-btn:active {
      transform: scale(0.97);
    }
    .btn-text {
      position: relative;
      z-index: 3;
      pointer-events: none;
    }
    @keyframes sweep {
      0% { left: -150%; }
      50% { left: 150%; }
      100% { left: 150%; }
    }
  </style>
</head>
<body>
  <div class="btn-container">
    <button class="singularity-btn" id="singularityBtn">
      <span class="btn-text">Singularity</span>
    </button>
    <canvas id="singularityCanvas"></canvas>
  </div>

  <script>
    const canvas = document.getElementById('singularityCanvas');
    const ctx = canvas.getContext('2d');
    const btn = document.getElementById('singularityBtn');

    let w = 220;
    let h = 60;
    
    const dpr = window.devicePixelRatio || 1;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.scale(dpr, dpr);

    let stars = [];
    let isHovered = false;
    let mouse = { x: -999, y: -999 };
    let clickAnimActive = false;
    let clickTime = 0;

    class Star {
      constructor() {
        this.reset();
      }
      reset() {
        this.angle = Math.random() * Math.PI * 2;
        this.distance = Math.random() * 45 + 10;
        this.speed = (0.015 + Math.random() * 0.02) * (Math.random() > 0.5 ? 1 : -1);
        this.radius = Math.random() * 1.2 + 0.6;
        this.color = Math.random() > 0.6 ? '#8b5cf6' : '#f59e0b';
      }
      update() {
        this.angle += this.speed;

        let tx = 110 + Math.cos(this.angle) * this.distance;
        let ty = 30 + Math.sin(this.angle) * this.distance;

        if (isHovered && mouse.x > 0) {
          const dx = mouse.x - tx;
          const dy = mouse.y - ty;
          const dist = Math.hypot(dx, dy);
          if (dist < 35) {
            const pull = (1 - dist / 35) * 12;
            tx += (mouse.x - tx) * 0.25;
            ty += (mouse.y - ty) * 0.25;
          }
        }

        if (clickAnimActive) {
          const force = Math.sin(clickTime * Math.PI) * 45;
          tx += Math.cos(this.angle) * force;
          ty += Math.sin(this.angle) * force;
        }

        this.x = tx;
        this.y = ty;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 6;
        ctx.shadowColor = this.color;
        ctx.fill();
      }
    }

    for (let i = 0; i < 45; i++) {
      stars.push(new Star());
    }

    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      mouse.x = e.clientX - rect.left + 10;
      mouse.y = e.clientY - rect.top + 5;
      isHovered = true;
    });

    btn.addEventListener('mouseenter', () => { isHovered = true; });
    btn.addEventListener('mouseleave', () => { isHovered = false; mouse = { x: -999, y: -999 }; });

    btn.addEventListener('click', (e) => {
      clickAnimActive = true;
      clickTime = 0;
    });

    function loop() {
      ctx.clearRect(0, 0, w, h);

      if (clickAnimActive) {
        clickTime += 0.05;
        if (clickTime > 1) {
          clickAnimActive = false;
        }
      }

      ctx.save();
      ctx.beginPath();
      ctx.arc(110, 30, 4 + (clickAnimActive ? Math.sin(clickTime * Math.PI) * 15 : 0), 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(139, 92, 246, 0.08)';
      ctx.shadowBlur = 15;
      ctx.shadowColor = '#8b5cf6';
      ctx.fill();
      ctx.restore();

      stars.forEach(star => {
        star.update();
        star.draw();
      });

      requestAnimationFrame(loop);
    }
    loop();
  </script>
</body>
</html>`,
  "code": `"use client";

import React, { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface GravitationalSingularityButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function GravitationalSingularityButton({
  children,
  className,
  ...props
}: GravitationalSingularityButtonProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const btn = buttonRef.current;
    if (!canvas || !btn) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const w = 220;
    const h = 60;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.scale(dpr, dpr);

    interface Star {
      angle: number;
      distance: number;
      speed: number;
      radius: number;
      color: string;
      x: number;
      y: number;
    }

    const stars: Star[] = [];
    let isHovered = false;
    let mouse = { x: -999, y: -999 };
    let clickAnimActive = false;
    let clickTime = 0;

    for (let i = 0; i < 45; i++) {
      stars.push({
        angle: Math.random() * Math.PI * 2,
        distance: Math.random() * 45 + 10,
        speed: (0.015 + Math.random() * 0.02) * (Math.random() > 0.5 ? 1 : -1),
        radius: Math.random() * 1.2 + 0.6,
        color: Math.random() > 0.6 ? "#8b5cf6" : "#f59e0b",
        x: 0,
        y: 0,
      });
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      mouse.x = e.clientX - rect.left + 10;
      mouse.y = e.clientY - rect.top + 5;
      isHovered = true;
    };

    const handleMouseEnter = () => { isHovered = true; };
    const handleMouseLeave = () => { isHovered = false; mouse = { x: -999, y: -999 }; };

    const handleClick = () => {
      clickAnimActive = true;
      clickTime = 0;
    };

    btn.addEventListener("mousemove", handleMouseMove);
    btn.addEventListener("mouseenter", handleMouseEnter);
    btn.addEventListener("mouseleave", handleMouseLeave);
    btn.addEventListener("click", handleClick);

    let animId: number;
    const loop = () => {
      ctx.clearRect(0, 0, w, h);

      if (clickAnimActive) {
        clickTime += 0.05;
        if (clickTime > 1) {
          clickAnimActive = false;
        }
      }

      ctx.save();
      ctx.beginPath();
      ctx.arc(110, 30, 4 + (clickAnimActive ? Math.sin(clickTime * Math.PI) * 15 : 0), 0, Math.PI * 2);
      ctx.fillStyle = "rgba(139, 92, 246, 0.08)";
      ctx.shadowBlur = 15;
      ctx.shadowColor = "#8b5cf6";
      ctx.fill();
      ctx.restore();

      stars.forEach((star) => {
        star.angle += star.speed;

        let tx = 110 + Math.cos(star.angle) * star.distance;
        let ty = 30 + Math.sin(star.angle) * star.distance;

        if (isHovered && mouse.x > 0) {
          const dx = mouse.x - tx;
          const dy = mouse.y - ty;
          const dist = Math.hypot(dx, dy);
          if (dist < 35) {
            tx += (mouse.x - tx) * 0.25;
            ty += (mouse.y - ty) * 0.25;
          }
        }

        if (clickAnimActive) {
          const force = Math.sin(clickTime * Math.PI) * 45;
          tx += Math.cos(star.angle) * force;
          ty += Math.sin(star.angle) * force;
        }

        star.x = tx;
        star.y = ty;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.shadowBlur = 6;
        ctx.shadowColor = star.color;
        ctx.fill();
      });

      animId = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      cancelAnimationFrame(animId);
      btn.removeEventListener("mousemove", handleMouseMove);
      btn.removeEventListener("mouseenter", handleMouseEnter);
      btn.removeEventListener("mouseleave", handleMouseLeave);
      btn.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-[220px] h-[60px] flex items-center justify-center bg-transparent group">
      <button
        ref={buttonRef}
        className={cn(
          "relative w-[200px] h-[50px] bg-[#030208]/60 border border-violet-500/15 rounded text-white text-[11px] font-bold tracking-[0.25em] uppercase cursor-pointer z-10 flex items-center justify-center backdrop-blur-md overflow-hidden transition-all duration-300 hover:text-violet-400 hover:border-violet-500/40 hover:shadow-[0_0_30px_rgba(139,92,246,0.2),inset_0_1px_1px_rgba(139,92,246,0.3)] hover:-translate-y-0.5 active:translate-y-0 active:scale-95",
          "before:content-[''] before:absolute before:top-0 before:left-[-150%] before:w-full before:height-full before:bg-[linear-gradient(90deg,transparent,rgba(139,92,246,0.05)_30%,rgba(139,92,246,0.25)_50%,rgba(245,158,11,0.1)_60%,transparent)] before:animate-[sweep_4_cubic-bezier(0.25,1,0.5,1)_infinite] before:z-0",
          className
        )}
        {...props}
      >
        <span className="relative z-20 pointer-events-none">{children}</span>
      </button>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />
    </div>
  );
}
`,
  "prompt": "Create an advanced Gravitational Singularity Button. The layout presents a sleek violet dark body surrounded by stardust sweep highlights. In the 2D canvas overlay, stardust orbits a central gravitational singularity. Hovering the pointer warps spacetime, pulling local stardust towards the cursor. Clicking triggers a supernova accretion expansion burst.",
  "likes": 0,
  "author": "Animation AI",
  "featured": true,
  "createdAt": "2026-05-21T10:00:00.000Z",
  "updatedAt": "2026-05-21T10:00:00.000Z"
}, {
  "slug": "bioluminescent-coral-button",
  "title": "Bio Coral Button",
  "category": "buttons",
  "tag": "canvas",
  "description": "A deep-ocean bioluminescent button featuring recursively growing marine coral branches that light up and bend towards the cursor.",
  "previewCode": `<!DOCTYPE html>
<html>
<head>
  <style>
    body, html {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      background: #020408;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Inter', sans-serif;
    }
    .btn-container {
      position: relative;
      width: 220px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    canvas {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 2;
    }
    .coral-btn {
      position: relative;
      width: 200px;
      height: 50px;
      background: rgba(4, 10, 20, 0.7);
      border: 1px solid rgba(6, 182, 212, 0.15);
      border-radius: 4px;
      color: rgba(6, 182, 212, 0.85);
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      cursor: pointer;
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      backdrop-filter: blur(16px);
      box-shadow: 
        inset 0 1px 1px rgba(255, 255, 255, 0.05),
        0 10px 30px rgba(0, 0, 0, 0.6);
      overflow: hidden;
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .coral-btn::before {
      content: '';
      position: absolute;
      top: 0;
      left: -150%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(6, 182, 212, 0.05) 30%,
        rgba(6, 182, 212, 0.2) 50%,
        rgba(168, 85, 247, 0.1) 70%,
        transparent
      );
      animation: sweep 4s cubic-bezier(0.25, 1, 0.5, 1) infinite;
      z-index: 0;
    }
    .coral-btn:hover {
      color: #22d3ee;
      border-color: rgba(6, 182, 212, 0.4);
      box-shadow: 
        0 0 30px rgba(6, 182, 212, 0.2),
        inset 0 1px 1px rgba(6, 182, 212, 0.3);
    }
    .coral-btn:active {
      transform: scale(0.97);
    }
    .btn-text {
      position: relative;
      z-index: 3;
      pointer-events: none;
    }
    @keyframes sweep {
      0% { left: -150%; }
      50% { left: 150%; }
      100% { left: 150%; }
    }
  </style>
</head>
<body>
  <div class="btn-container">
    <button class="coral-btn" id="coralBtn">
      <span class="btn-text">Bio Coral</span>
    </button>
    <canvas id="coralCanvas"></canvas>
  </div>

  <script>
    const canvas = document.getElementById('coralCanvas');
    const ctx = canvas.getContext('2d');
    const btn = document.getElementById('coralBtn');

    let w = 220;
    let h = 60;
    
    const dpr = window.devicePixelRatio || 1;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.scale(dpr, dpr);

    let isHovered = false;
    let mouse = { x: -999, y: -999 };
    let spores = [];
    let clickPulse = 0;

    class Spore {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 1.5;
        this.vy = -Math.random() * 1.2 - 0.5;
        this.alpha = 1;
        this.radius = Math.random() * 1.2 + 0.5;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= 0.015;
      }
      draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = '#22d3ee';
        ctx.shadowBlur = 8;
        ctx.shadowColor = '#22d3ee';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      mouse.x = e.clientX - rect.left + 10;
      mouse.y = e.clientY - rect.top + 5;
      isHovered = true;
    });

    btn.addEventListener('mouseenter', () => { isHovered = true; });
    btn.addEventListener('mouseleave', () => { isHovered = false; mouse = { x: -999, y: -999 }; });

    btn.addEventListener('click', (e) => {
      clickPulse = 1;
      for (let i = 0; i < 18; i++) {
        spores.push(new Spore(Math.random() * 140 + 40, 50));
      }
    });

    function drawBranch(startX, startY, len, angle, branchWidth) {
      ctx.beginPath();
      ctx.save();
      ctx.lineWidth = branchWidth;
      ctx.strokeStyle = isHovered ? 'rgba(34, 211, 238, 0.45)' : 'rgba(168, 85, 247, 0.25)';
      ctx.shadowBlur = isHovered ? 8 : 2;
      ctx.shadowColor = '#22d3ee';
      
      ctx.translate(startX, startY);
      ctx.rotate(angle * Math.PI / 180);
      ctx.moveTo(0, 0);
      ctx.lineTo(0, -len);
      ctx.stroke();

      if (len < 5) {
        ctx.restore();
        return;
      }

      let sway = 0;
      if (isHovered && mouse.x > 0) {
        const globalX = startX + Math.sin(angle * Math.PI / 180) * len;
        sway = (mouse.x - globalX) * 0.04;
      }

      drawBranch(0, -len, len * 0.75, angle - 18 + sway, branchWidth * 0.75);
      drawBranch(0, -len, len * 0.75, angle + 18 + sway, branchWidth * 0.75);

      ctx.restore();
    }

    function loop() {
      ctx.clearRect(0, 0, w, h);

      drawBranch(65, 52, 12, 0, 3.5);
      drawBranch(110, 52, 14, 0, 4);
      drawBranch(155, 52, 11, 0, 3.2);

      spores = spores.filter(s => s.alpha > 0);
      spores.forEach(s => {
        s.update();
        s.draw();
      });

      requestAnimationFrame(loop);
    }
    loop();
  </script>
</body>
</html>`,
  "code": `"use client";

import React, { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface BioluminescentCoralButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function BioluminescentCoralButton({
  children,
  className,
  ...props
}: BioluminescentCoralButtonProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const btn = buttonRef.current;
    if (!canvas || !btn) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const w = 220;
    const h = 60;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.scale(dpr, dpr);

    interface Spore {
      x: number;
      y: number;
      vx: number;
      vy: number;
      alpha: number;
      radius: number;
    }

    let spores: Spore[] = [];
    let isHovered = false;
    let mouse = { x: -999, y: -999 };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      mouse.x = e.clientX - rect.left + 10;
      mouse.y = e.clientY - rect.top + 5;
      isHovered = true;
    };

    const handleMouseEnter = () => { isHovered = true; };
    const handleMouseLeave = () => { isHovered = false; mouse = { x: -999, y: -999 }; };

    const handleClick = () => {
      for (let i = 0; i < 18; i++) {
        spores.push({
          x: Math.random() * 140 + 40,
          y: 50,
          vx: (Math.random() - 0.5) * 1.5,
          vy: -Math.random() * 1.2 - 0.5,
          alpha: 1,
          radius: Math.random() * 1.2 + 0.5,
        });
      }
    };

    btn.addEventListener("mousemove", handleMouseMove);
    btn.addEventListener("mouseenter", handleMouseEnter);
    btn.addEventListener("mouseleave", handleMouseLeave);
    btn.addEventListener("click", handleClick);

    const drawBranch = (startX: number, startY: number, len: number, angle: number, branchWidth: number) => {
      if (!ctx) return;
      ctx.beginPath();
      ctx.save();
      ctx.lineWidth = branchWidth;
      ctx.strokeStyle = isHovered ? "rgba(34, 211, 238, 0.45)" : "rgba(168, 85, 247, 0.25)";
      ctx.shadowBlur = isHovered ? 8 : 2;
      ctx.shadowColor = "#22d3ee";

      ctx.translate(startX, startY);
      ctx.rotate((angle * Math.PI) / 180);
      ctx.moveTo(0, 0);
      ctx.lineTo(0, -len);
      ctx.stroke();

      if (len < 5) {
        ctx.restore();
        return;
      }

      let sway = 0;
      if (isHovered && mouse.x > 0) {
        const globalX = startX + Math.sin((angle * Math.PI) / 180) * len;
        sway = (mouse.x - globalX) * 0.04;
      }

      drawBranch(0, -len, len * 0.75, angle - 18 + sway, branchWidth * 0.75);
      drawBranch(0, -len, len * 0.75, angle + 18 + sway, branchWidth * 0.75);

      ctx.restore();
    };

    let animId: number;
    const loop = () => {
      ctx.clearRect(0, 0, w, h);

      drawBranch(65, 52, 12, 0, 3.5);
      drawBranch(110, 52, 14, 0, 4);
      drawBranch(155, 52, 11, 0, 3.2);

      spores = spores.filter((s) => s.alpha > 0);
      spores.forEach((s) => {
        s.x += s.vx;
        s.y += s.vy;
        s.alpha -= 0.015;

        ctx.save();
        ctx.globalAlpha = s.alpha;
        ctx.fillStyle = "#22d3ee";
        ctx.shadowBlur = 8;
        ctx.shadowColor = "#22d3ee";
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      animId = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      cancelAnimationFrame(animId);
      btn.removeEventListener("mousemove", handleMouseMove);
      btn.removeEventListener("mouseenter", handleMouseEnter);
      btn.removeEventListener("mouseleave", handleMouseLeave);
      btn.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-[220px] h-[60px] flex items-center justify-center bg-transparent group">
      <button
        ref={buttonRef}
        className={cn(
          "relative w-[200px] h-[50px] bg-[#040a14]/70 border border-cyan-500/15 rounded text-cyan-400 text-[11px] font-bold tracking-[0.25em] uppercase cursor-pointer z-10 flex items-center justify-center backdrop-blur-md overflow-hidden transition-all duration-300 hover:text-cyan-300 hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.2),inset_0_1px_1px_rgba(6,182,212,0.3)] active:scale-95",
          "before:content-[''] before:absolute before:top-0 before:left-[-150%] before:w-full before:height-full before:bg-[linear-gradient(90deg,transparent,rgba(6,182,212,0.05)_30%,rgba(6,182,212,0.2)_50%,rgba(168,85,247,0.1)_70%,transparent)] before:animate-[sweep_4_cubic-bezier(0.25,1,0.5,1)_infinite] before:z-0",
          className
        )}
        {...props}
      >
        <span className="relative z-20 pointer-events-none">{children}</span>
      </button>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />
    </div>
  );
}
`,
  "prompt": "Create an advanced Bioluminescent Coral Button. The layout displays a deep-ocean structure with smooth cyan highlights sweep. Inside the 2D canvas overlay, organically grown marine coral branches stretch from the bottom boundary. Hovering the pointer illuminates and gently bends branches towards the cursor coordinate. Clicking triggers a release of neon bioluminescent spores.",
  "likes": 0,
  "author": "Animation AI",
  "featured": true,
  "createdAt": "2026-05-21T10:00:00.000Z",
  "updatedAt": "2026-05-21T10:00:00.000Z"
}, {
  "slug": "cyberspace-lightcycle-button",
  "title": "Lightcycle Button",
  "category": "buttons",
  "tag": "canvas",
  "description": "An 80s outrun style cyberspace button with high-speed light cycles chasing the cursor and leaving glowing neon turn trails.",
  "previewCode": `<!DOCTYPE html>
<html>
<head>
  <style>
    body, html {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      background: #020205;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Inter', sans-serif;
    }
    .btn-container {
      position: relative;
      width: 220px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    canvas {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 2;
    }
    .lightcycle-btn {
      position: relative;
      width: 200px;
      height: 50px;
      background: rgba(5, 5, 15, 0.7);
      border: 1px solid rgba(236, 72, 153, 0.15);
      border-radius: 4px;
      color: rgba(236, 72, 153, 0.85);
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      cursor: pointer;
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      backdrop-filter: blur(16px);
      box-shadow: 
        inset 0 1px 1px rgba(255, 255, 255, 0.05),
        0 10px 30px rgba(0, 0, 0, 0.6);
      overflow: hidden;
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .lightcycle-btn::before {
      content: '';
      position: absolute;
      top: 0;
      left: -150%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(236, 72, 153, 0.05) 30%,
        rgba(236, 72, 153, 0.2) 50%,
        rgba(6, 182, 212, 0.1) 70%,
        transparent
      );
      animation: sweep 4s cubic-bezier(0.25, 1, 0.5, 1) infinite;
      z-index: 0;
    }
    .lightcycle-btn:hover {
      color: #f472b6;
      border-color: rgba(236, 72, 153, 0.45);
      box-shadow: 
        0 0 30px rgba(236, 72, 153, 0.2),
        inset 0 1px 1px rgba(236, 72, 153, 0.3);
    }
    .lightcycle-btn:active {
      transform: scale(0.97);
    }
    .btn-text {
      position: relative;
      z-index: 3;
      pointer-events: none;
    }
    @keyframes sweep {
      0% { left: -150%; }
      50% { left: 150%; }
      100% { left: 150%; }
    }
  </style>
</head>
<body>
  <div class="btn-container">
    <button class="lightcycle-btn" id="lightcycleBtn">
      <span class="btn-text">Lightcycle</span>
    </button>
    <canvas id="lightcycleCanvas"></canvas>
  </div>

  <script>
    const canvas = document.getElementById('lightcycleCanvas');
    const ctx = canvas.getContext('2d');
    const btn = document.getElementById('lightcycleBtn');

    let w = 220;
    let h = 60;
    
    const dpr = window.devicePixelRatio || 1;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.scale(dpr, dpr);

    let isHovered = false;
    let mouse = { x: -999, y: -999 };
    let cycles = [];
    let empPulse = 0;

    class Cycle {
      constructor(color) {
        this.color = color;
        this.reset();
      }
      reset() {
        this.x = Math.random() * 200 + 10;
        this.y = Math.random() * 50 + 5;
        this.vx = Math.random() > 0.5 ? 2.5 : -2.5;
        this.vy = 0;
        this.history = [];
        this.turnTimer = 0;
      }
      update() {
        this.history.push({ x: this.x, y: this.y });
        if (this.history.length > 25) this.history.shift();

        this.x += this.vx;
        this.y += this.vy;

        this.turnTimer++;
        if (isHovered && mouse.x > 0 && this.turnTimer > 12) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;

          if (Math.random() < 0.28) {
            this.turnTimer = 0;
            if (Math.abs(dx) > Math.abs(dy)) {
              this.vx = 0;
              this.vy = dy > 0 ? 2.5 : -2.5;
            } else {
              this.vy = 0;
              this.vx = dx > 0 ? 2.5 : -2.5;
            }
          }
        }

        if (this.x < 10 || this.x > 210 || this.y < 5 || this.y > 55) {
          this.reset();
        }
      }
      draw() {
        if (this.history.length < 2) return;
        ctx.beginPath();
        ctx.moveTo(this.history[0].x, this.history[0].y);
        for (let i = 1; i < this.history.length; i++) {
          ctx.lineTo(this.history[i].x, this.history[i].y);
        }
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 1.8;
        ctx.shadowBlur = 8;
        ctx.shadowColor = this.color;
        ctx.stroke();
      }
    }

    cycles.push(new Cycle('#ec4899'), new Cycle('#06b6d4'));

    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      mouse.x = e.clientX - rect.left + 10;
      mouse.y = e.clientY - rect.top + 5;
      isHovered = true;
    });

    btn.addEventListener('mouseenter', () => { isHovered = true; });
    btn.addEventListener('mouseleave', () => { isHovered = false; mouse = { x: -999, y: -999 }; });

    btn.addEventListener('click', (e) => {
      empPulse = 1;
    });

    function loop() {
      ctx.clearRect(0, 0, w, h);

      if (empPulse > 0) {
        empPulse -= 0.04;
        ctx.fillStyle = 'rgba(6, 182, 212, ' + (empPulse * 0.15) + ')';
        ctx.fillRect(0, 0, w, h);
      }

      cycles.forEach(c => {
        c.update();
        c.draw();
      });

      requestAnimationFrame(loop);
    }
    loop();
  </script>
</body>
</html>`,
  "code": `"use client";

import React, { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface CyberspaceLightcycleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function CyberspaceLightcycleButton({
  children,
  className,
  ...props
}: CyberspaceLightcycleButtonProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const btn = buttonRef.current;
    if (!canvas || !btn) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const w = 220;
    const h = 60;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.scale(dpr, dpr);

    interface Point {
      x: number;
      y: number;
    }

    interface Cycle {
      color: string;
      x: number;
      y: number;
      vx: number;
      vy: number;
      history: Point[];
      turnTimer: number;
    }

    const createCycle = (color: string): Cycle => {
      return {
        color,
        x: Math.random() * 200 + 10,
        y: Math.random() * 50 + 5,
        vx: Math.random() > 0.5 ? 2.5 : -2.5,
        vy: 0,
        history: [],
        turnTimer: 0,
      };
    };

    let cycles: Cycle[] = [createCycle("#ec4899"), createCycle("#06b6d4")];
    let isHovered = false;
    let mouse = { x: -999, y: -999 };
    let empPulse = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      mouse.x = e.clientX - rect.left + 10;
      mouse.y = e.clientY - rect.top + 5;
      isHovered = true;
    };

    const handleMouseEnter = () => { isHovered = true; };
    const handleMouseLeave = () => { isHovered = false; mouse = { x: -999, y: -999 }; };

    const handleClick = () => {
      empPulse = 1;
    };

    btn.addEventListener("mousemove", handleMouseMove);
    btn.addEventListener("mouseenter", handleMouseEnter);
    btn.addEventListener("mouseleave", handleMouseLeave);
    btn.addEventListener("click", handleClick);

    let animId: number;
    const loop = () => {
      ctx.clearRect(0, 0, w, h);

      if (empPulse > 0) {
        empPulse -= 0.04;
        ctx.fillStyle = 'rgba(6, 182, 212, ' + (empPulse * 0.15) + ')';
        ctx.fillRect(0, 0, w, h);
      }

      cycles.forEach((c) => {
        c.history.push({ x: c.x, y: c.y });
        if (c.history.length > 25) c.history.shift();

        c.x += c.vx;
        c.y += c.vy;

        c.turnTimer++;
        if (isHovered && mouse.x > 0 && c.turnTimer > 12) {
          const dx = mouse.x - c.x;
          const dy = mouse.y - c.y;

          if (Math.random() < 0.28) {
            c.turnTimer = 0;
            if (Math.abs(dx) > Math.abs(dy)) {
              c.vx = 0;
              c.vy = dy > 0 ? 2.5 : -2.5;
            } else {
              c.vy = 0;
              c.vx = dx > 0 ? 2.5 : -2.5;
            }
          }
        }

        if (c.x < 10 || c.x > 210 || c.y < 5 || c.y > 55) {
          const fresh = createCycle(c.color);
          c.x = fresh.x;
          c.y = fresh.y;
          c.vx = fresh.vx;
          c.vy = fresh.vy;
          c.history = [];
          c.turnTimer = 0;
        }

        if (c.history.length >= 2) {
          ctx.beginPath();
          ctx.moveTo(c.history[0].x, c.history[0].y);
          for (let i = 1; i < c.history.length; i++) {
            ctx.lineTo(c.history[i].x, c.history[i].y);
          }
          ctx.strokeStyle = c.color;
          ctx.lineWidth = 1.8;
          ctx.shadowBlur = 8;
          ctx.shadowColor = c.color;
          ctx.stroke();
        }
      });

      animId = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      cancelAnimationFrame(animId);
      btn.removeEventListener("mousemove", handleMouseMove);
      btn.removeEventListener("mouseenter", handleMouseEnter);
      btn.removeEventListener("mouseleave", handleMouseLeave);
      btn.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-[220px] h-[60px] flex items-center justify-center bg-transparent group">
      <button
        ref={buttonRef}
        className={cn(
          "relative w-[200px] h-[50px] bg-[#05050f]/70 border border-pink-500/15 rounded text-pink-500/85 text-[11px] font-bold tracking-[0.25em] uppercase cursor-pointer z-10 flex items-center justify-center backdrop-blur-md overflow-hidden transition-all duration-300 hover:text-pink-400 hover:border-pink-500/45 hover:shadow-[0_0_30px_rgba(236,72,153,0.2),inset_0_1px_1px_rgba(236,72,153,0.3)] active:scale-95",
          "before:content-[''] before:absolute before:top-0 before:left-[-150%] before:w-full before:height-full before:bg-[linear-gradient(90deg,transparent,rgba(236,72,153,0.05)_30%,rgba(236,72,153,0.2)_50%,rgba(6,182,212,0.1)_70%,transparent)] before:animate-[sweep_4_cubic-bezier(0.25,1,0.5,1)_infinite] before:z-0",
          className
        )}
        {...props}
      >
        <span className="relative z-20 pointer-events-none">{children}</span>
      </button>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />
    </div>
  );
}
`,
  "prompt": "Create an advanced Cyberspace Lightcycle Button. The layout displays a hot pink outrun cyber grid. Inside the 2D canvas overlay, multiple neon lightcycles travel at high velocity. Hovering the pointer commands the cycles to break their linear path, chasing the cursor and making sharp 90-degree turns. Clicking triggers an EMP reboot flash.",
  "likes": 0,
  "author": "Animation AI",
  "featured": true,
  "createdAt": "2026-05-21T10:00:00.000Z",
  "updatedAt": "2026-05-21T10:00:00.000Z"
}, {
  "slug": "solar-flare-corona-button",
  "title": "Solar Flare Button",
  "category": "buttons",
  "tag": "canvas",
  "description": "A cosmic plasma button surrounded by dynamic solar coronal loops that stretch and erupt towards the cursor.",
  "previewCode": `<!DOCTYPE html>
<html>
<head>
  <style>
    body, html {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      background: #040100;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Inter', sans-serif;
    }
    .btn-container {
      position: relative;
      width: 220px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    canvas {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 2;
    }
    .solar-btn {
      position: relative;
      width: 200px;
      height: 50px;
      background: rgba(12, 4, 0, 0.7);
      border: 1px solid rgba(249, 115, 22, 0.15);
      border-radius: 25px;
      color: rgba(249, 115, 22, 0.85);
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      cursor: pointer;
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      backdrop-filter: blur(16px);
      box-shadow: 
        inset 0 1px 1px rgba(255, 255, 255, 0.05),
        0 10px 30px rgba(0, 0, 0, 0.6);
      overflow: hidden;
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .solar-btn::before {
      content: '';
      position: absolute;
      top: 0;
      left: -150%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(249, 115, 22, 0.05) 30%,
        rgba(249, 115, 22, 0.2) 50%,
        rgba(239, 68, 68, 0.1) 70%,
        transparent
      );
      animation: sweep 4s cubic-bezier(0.25, 1, 0.5, 1) infinite;
      z-index: 0;
    }
    .solar-btn:hover {
      color: #fdba74;
      border-color: rgba(249, 115, 22, 0.45);
      box-shadow: 
        0 0 30px rgba(249, 115, 22, 0.2),
        inset 0 1px 1px rgba(249, 115, 22, 0.3);
    }
    .solar-btn:active {
      transform: scale(0.97);
    }
    .btn-text {
      position: relative;
      z-index: 3;
      pointer-events: none;
    }
    @keyframes sweep {
      0% { left: -150%; }
      50% { left: 150%; }
      100% { left: 150%; }
    }
  </style>
</head>
<body>
  <div class="btn-container">
    <button class="solar-btn" id="solarBtn">
      <span class="btn-text">Solar Flare</span>
    </button>
    <canvas id="solarCanvas"></canvas>
  </div>

  <script>
    const canvas = document.getElementById('solarCanvas');
    const ctx = canvas.getContext('2d');
    const btn = document.getElementById('solarBtn');

    let w = 220;
    let h = 60;
    
    const dpr = window.devicePixelRatio || 1;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.scale(dpr, dpr);

    let isHovered = false;
    let mouse = { x: -999, y: -999 };
    let flares = [];
    let clickTime = 0;
    let clickActive = false;

    class Flare {
      constructor() {
        this.reset();
      }
      reset() {
        this.angle = Math.random() * Math.PI * 2;
        this.radius = 28;
        this.x = 110 + Math.cos(this.angle) * this.radius;
        this.y = 30 + Math.sin(this.angle) * this.radius;
        this.len = Math.random() * 8 + 4;
        this.phase = Math.random() * Math.PI * 2;
      }
      update() {
        this.phase += 0.08;
        let currentLen = this.len + Math.sin(this.phase) * 3;

        if (isHovered && mouse.x > 0) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 40) {
            currentLen += (1 - dist / 40) * 12;
          }
        }

        if (clickActive) {
          currentLen += Math.sin(clickTime * Math.PI) * 22;
        }

        this.tx = 110 + Math.cos(this.angle) * (this.radius + currentLen);
        this.ty = 30 + Math.sin(this.angle) * (this.radius + currentLen);
      }
      draw() {
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.tx, this.ty);
        ctx.strokeStyle = Math.random() > 0.5 ? '#f97316' : '#ef4444';
        ctx.lineWidth = 1.2;
        ctx.shadowBlur = 6;
        ctx.shadowColor = '#f97316';
        ctx.stroke();
      }
    }

    for (let i = 0; i < 35; i++) {
      flares.push(new Flare());
    }

    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      mouse.x = e.clientX - rect.left + 10;
      mouse.y = e.clientY - rect.top + 5;
      isHovered = true;
    });

    btn.addEventListener('mouseenter', () => { isHovered = true; });
    btn.addEventListener('mouseleave', () => { isHovered = false; mouse = { x: -999, y: -999 }; });

    btn.addEventListener('click', (e) => {
      clickActive = true;
      clickTime = 0;
    });

    function loop() {
      ctx.clearRect(0, 0, w, h);

      if (clickActive) {
        clickTime += 0.05;
        if (clickTime > 1) {
          clickActive = false;
        }
      }

      flares.forEach(f => {
        f.update();
        f.draw();
      });

      requestAnimationFrame(loop);
    }
    loop();
  </script>
</body>
</html>`,
  "code": `"use client";

import React, { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface SolarFlareCoronaButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function SolarFlareCoronaButton({
  children,
  className,
  ...props
}: SolarFlareCoronaButtonProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const btn = buttonRef.current;
    if (!canvas || !btn) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const w = 220;
    const h = 60;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.scale(dpr, dpr);

    interface Flare {
      angle: number;
      radius: number;
      x: number;
      y: number;
      len: number;
      phase: number;
      tx: number;
      ty: number;
    }

    const flares: Flare[] = [];
    let isHovered = false;
    let mouse = { x: -999, y: -999 };
    let clickTime = 0;
    let clickActive = false;

    for (let i = 0; i < 35; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 28;
      flares.push({
        angle,
        radius,
        x: 110 + Math.cos(angle) * radius,
        y: 30 + Math.sin(angle) * radius,
        len: Math.random() * 8 + 4,
        phase: Math.random() * Math.PI * 2,
        tx: 0,
        ty: 0,
      });
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      mouse.x = e.clientX - rect.left + 10;
      mouse.y = e.clientY - rect.top + 5;
      isHovered = true;
    };

    const handleMouseEnter = () => { isHovered = true; };
    const handleMouseLeave = () => { isHovered = false; mouse = { x: -999, y: -999 }; };

    const handleClick = () => {
      clickActive = true;
      clickTime = 0;
    };

    btn.addEventListener("mousemove", handleMouseMove);
    btn.addEventListener("mouseenter", handleMouseEnter);
    btn.addEventListener("mouseleave", handleMouseLeave);
    btn.addEventListener("click", handleClick);

    let animId: number;
    const loop = () => {
      ctx.clearRect(0, 0, w, h);

      if (clickActive) {
        clickTime += 0.05;
        if (clickTime > 1) {
          clickActive = false;
        }
      }

      flares.forEach((f) => {
        f.phase += 0.08;
        let currentLen = f.len + Math.sin(f.phase) * 3;

        if (isHovered && mouse.x > 0) {
          const dx = mouse.x - f.x;
          const dy = mouse.y - f.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 40) {
            currentLen += (1 - dist / 40) * 12;
          }
        }

        if (clickActive) {
          currentLen += Math.sin(clickTime * Math.PI) * 22;
        }

        f.tx = 110 + Math.cos(f.angle) * (f.radius + currentLen);
        f.ty = 30 + Math.sin(f.angle) * (f.radius + currentLen);

        ctx.beginPath();
        ctx.moveTo(f.x, f.y);
        ctx.lineTo(f.tx, f.ty);
        ctx.strokeStyle = Math.random() > 0.5 ? "#f97316" : "#ef4444";
        ctx.lineWidth = 1.2;
        ctx.shadowBlur = 6;
        ctx.shadowColor = "#f97316";
        ctx.stroke();
      });

      animId = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      cancelAnimationFrame(animId);
      btn.removeEventListener("mousemove", handleMouseMove);
      btn.removeEventListener("mouseenter", handleMouseEnter);
      btn.removeEventListener("mouseleave", handleMouseLeave);
      btn.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-[220px] h-[60px] flex items-center justify-center bg-transparent group">
      <button
        ref={buttonRef}
        className={cn(
          "relative w-[200px] h-[50px] bg-[#0c0400]/70 border border-orange-500/15 rounded-full text-orange-500/85 text-[11px] font-bold tracking-[0.25em] uppercase cursor-pointer z-10 flex items-center justify-center backdrop-blur-md overflow-hidden transition-all duration-300 hover:text-orange-300 hover:border-orange-500/45 hover:shadow-[0_0_30px_rgba(249,115,22,0.2),inset_0_1px_1px_rgba(249,115,22,0.3)] active:scale-95",
          "before:content-[''] before:absolute before:top-0 before:left-[-150%] before:w-full before:height-full before:bg-[linear-gradient(90deg,transparent,rgba(249,115,22,0.05)_30%,rgba(249,115,22,0.2)_50%,rgba(239,68,68,0.1)_70%,transparent)] before:animate-[sweep_4_cubic-bezier(0.25,1,0.5,1)_infinite] before:z-0",
          className
        )}
        {...props}
      >
        <span className="relative z-20 pointer-events-none">{children}</span>
      </button>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />
    </div>
  );
}
`,
  "prompt": "Create an advanced Solar Flare Coronal Loop Button. The layout displays a stellar orange body with solar sweep highlights. Inside the 2D canvas overlay, dynamic solar flares emerge from the coronal ring. Hovering the pointer acts as a strong gravitational field, bending and pulling plasma arcs toward the cursor. Clicking triggers a high-velocity coronal mass ejection wave burst.",
  "likes": 0,
  "author": "Animation AI",
  "featured": true,
  "createdAt": "2026-05-21T10:00:00.000Z",
  "updatedAt": "2026-05-21T10:00:00.000Z"
}, {
  "slug": "hyperdimensional-tesseract-button",
  "title": "Tesseract Button",
  "category": "buttons",
  "tag": "canvas",
  "description": "A futuristic 4D tesseract portal button that dynamically rotates and warps dimensions under pointer movement.",
  "previewCode": `<!DOCTYPE html>
<html>
<head>
  <style>
    body, html {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      background: #020104;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Inter', sans-serif;
    }
    .btn-container {
      position: relative;
      width: 220px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    canvas {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 2;
    }
    .tesseract-btn {
      position: relative;
      width: 200px;
      height: 50px;
      background: rgba(8, 2, 12, 0.7);
      border: 1px solid rgba(168, 85, 247, 0.15);
      border-radius: 4px;
      color: rgba(168, 85, 247, 0.85);
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      cursor: pointer;
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      backdrop-filter: blur(16px);
      box-shadow: 
        inset 0 1px 1px rgba(255, 255, 255, 0.05),
        0 10px 30px rgba(0, 0, 0, 0.6);
      overflow: hidden;
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .tesseract-btn::before {
      content: '';
      position: absolute;
      top: 0;
      left: -150%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(168, 85, 247, 0.05) 30%,
        rgba(168, 85, 247, 0.25) 50%,
        rgba(34, 211, 238, 0.1) 70%,
        transparent
      );
      animation: sweep 4s cubic-bezier(0.25, 1, 0.5, 1) infinite;
      z-index: 0;
    }
    .tesseract-btn:hover {
      color: #c084fc;
      border-color: rgba(168, 85, 247, 0.45);
      box-shadow: 
        0 0 30px rgba(168, 85, 247, 0.2),
        inset 0 1px 1px rgba(168, 85, 247, 0.3);
    }
    .tesseract-btn:active {
      transform: scale(0.97);
    }
    .btn-text {
      position: relative;
      z-index: 3;
      pointer-events: none;
    }
    @keyframes sweep {
      0% { left: -150%; }
      50% { left: 150%; }
      100% { left: 150%; }
    }
  </style>
</head>
<body>
  <div class="btn-container">
    <button class="tesseract-btn" id="tesseractBtn">
      <span class="btn-text">Tesseract</span>
    </button>
    <canvas id="tesseractCanvas"></canvas>
  </div>

  <script>
    const canvas = document.getElementById('tesseractCanvas');
    const ctx = canvas.getContext('2d');
    const btn = document.getElementById('tesseractBtn');

    let w = 220;
    let h = 60;
    
    const dpr = window.devicePixelRatio || 1;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.scale(dpr, dpr);

    let isHovered = false;
    let mouse = { x: -999, y: -999 };
    let rotationAngle = 0;
    let riftCollapseTime = 0;
    let riftActive = false;

    // 8 Vertices of Outer Cube, 8 of Inner Cube
    const cubeVertices = [
      {x: -1, y: -1, z: -1}, {x: 1, y: -1, z: -1},
      {x: 1, y: 1, z: -1}, {x: -1, y: 1, z: -1},
      {x: -1, y: -1, z: 1}, {x: 1, y: -1, z: 1},
      {x: 1, y: 1, z: 1}, {x: -1, y: 1, z: 1}
    ];

    const cubeEdges = [
      [0, 1], [1, 2], [2, 3], [3, 0],
      [4, 5], [5, 6], [6, 7], [7, 4],
      [0, 4], [1, 5], [2, 6], [3, 7]
    ];

    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      mouse.x = e.clientX - rect.left + 10;
      mouse.y = e.clientY - rect.top + 5;
      isHovered = true;
    });

    btn.addEventListener('mouseenter', () => { isHovered = true; });
    btn.addEventListener('mouseleave', () => { isHovered = false; mouse = { x: -999, y: -999 }; });

    btn.addEventListener('click', (e) => {
      riftActive = true;
      riftCollapseTime = 0;
    });

    function rotate3D(point, angle) {
      const rad = angle * Math.PI / 180;
      // Rotate around Y and X axis
      let x1 = point.x * Math.cos(rad) - point.z * Math.sin(rad);
      let z1 = point.x * Math.sin(rad) + point.z * Math.cos(rad);
      
      let y2 = point.y * Math.cos(rad) - z1 * Math.sin(rad);
      let z2 = point.y * Math.sin(rad) + z1 * Math.cos(rad);

      return { x: x1, y: y2, z: z2 };
    }

    function loop() {
      ctx.clearRect(0, 0, w, h);
      rotationAngle += isHovered ? 1.5 : 0.6;

      if (riftActive) {
        riftCollapseTime += 0.05;
        if (riftCollapseTime > 1) riftActive = false;
      }

      let centerOffsetX = 110;
      let centerOffsetY = 30;

      if (isHovered && mouse.x > 0) {
        centerOffsetX += (mouse.x - 110) * 0.12;
        centerOffsetY += (mouse.y - 30) * 0.12;
      }

      function project(v, scale) {
        let rotated = rotate3D(v, rotationAngle);
        let dist = 3.5;
        let zoom = 40 * scale;
        
        if (riftActive) {
          const factor = Math.sin(riftCollapseTime * Math.PI);
          zoom *= (1 - factor * 0.85);
        }

        let px = rotated.x / (rotated.z + dist) * zoom + centerOffsetX;
        let py = rotated.y / (rotated.z + dist) * zoom + centerOffsetY;
        return { x: px, y: py };
      }

      // Draw Outer Cube (scale = 0.95)
      let outerProj = cubeVertices.map(v => project(v, 0.95));
      // Draw Inner Cube (scale = 0.45)
      let innerProj = cubeVertices.map(v => project(v, 0.45));

      ctx.save();
      ctx.lineWidth = 1.0;
      ctx.strokeStyle = isHovered ? '#c084fc' : 'rgba(168, 85, 247, 0.35)';
      ctx.shadowBlur = isHovered ? 6 : 1;
      ctx.shadowColor = '#a855f7';

      // Draw Outer Edges
      cubeEdges.forEach(edge => {
        ctx.beginPath();
        ctx.moveTo(outerProj[edge[0]].x, outerProj[edge[0]].y);
        ctx.lineTo(outerProj[edge[1]].x, outerProj[edge[1]].y);
        ctx.stroke();
      });

      // Draw Inner Edges
      ctx.strokeStyle = isHovered ? '#22d3ee' : 'rgba(34, 211, 238, 0.25)';
      ctx.shadowColor = '#22d3ee';
      cubeEdges.forEach(edge => {
        ctx.beginPath();
        ctx.moveTo(innerProj[edge[0]].x, innerProj[edge[0]].y);
        ctx.lineTo(innerProj[edge[1]].x, innerProj[edge[1]].y);
        ctx.stroke();
      });

      // Connect Vertices
      ctx.strokeStyle = 'rgba(168, 85, 247, 0.25)';
      for (let i = 0; i < 8; i++) {
        ctx.beginPath();
        ctx.moveTo(outerProj[i].x, outerProj[i].y);
        ctx.lineTo(innerProj[i].x, innerProj[i].y);
        ctx.stroke();
      }

      ctx.restore();
      requestAnimationFrame(loop);
    }
    loop();
  </script>
</body>
</html>`,
  "code": `"use client";

import React, { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface HyperdimensionalTesseractButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function HyperdimensionalTesseractButton({
  children,
  className,
  ...props
}: HyperdimensionalTesseractButtonProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const btn = buttonRef.current;
    if (!canvas || !btn) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const w = 220;
    const h = 60;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.scale(dpr, dpr);

    interface Point3D {
      x: number;
      y: number;
      z: number;
    }

    const cubeVertices: Point3D[] = [
      { x: -1, y: -1, z: -1 }, { x: 1, y: -1, z: -1 },
      { x: 1, y: 1, z: -1 }, { x: -1, y: 1, z: -1 },
      { x: -1, y: -1, z: 1 }, { x: 1, y: -1, z: 1 },
      { x: 1, y: 1, z: 1 }, { x: -1, y: 1, z: 1 }
    ];

    const cubeEdges = [
      [0, 1], [1, 2], [2, 3], [3, 0],
      [4, 5], [5, 6], [6, 7], [7, 4],
      [0, 4], [1, 5], [2, 6], [3, 7]
    ];

    let isHovered = false;
    let mouse = { x: -999, y: -999 };
    let rotationAngle = 0;
    let riftCollapseTime = 0;
    let riftActive = false;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      mouse.x = e.clientX - rect.left + 10;
      mouse.y = e.clientY - rect.top + 5;
      isHovered = true;
    };

    const handleMouseEnter = () => { isHovered = true; };
    const handleMouseLeave = () => { isHovered = false; mouse = { x: -999, y: -999 }; };

    const handleClick = () => {
      riftActive = true;
      riftCollapseTime = 0;
    };

    btn.addEventListener("mousemove", handleMouseMove);
    btn.addEventListener("mouseenter", handleMouseEnter);
    btn.addEventListener("mouseleave", handleMouseLeave);
    btn.addEventListener("click", handleClick);

    const rotate3D = (point: Point3D, angle: number): Point3D => {
      const rad = (angle * Math.PI) / 180;
      const x1 = point.x * Math.cos(rad) - point.z * Math.sin(rad);
      const z1 = point.x * Math.sin(rad) + point.z * Math.cos(rad);
      const y2 = point.y * Math.cos(rad) - z1 * Math.sin(rad);
      const z2 = point.y * Math.sin(rad) + z1 * Math.cos(rad);
      return { x: x1, y: y2, z: z2 };
    };

    let animId: number;
    const loop = () => {
      ctx.clearRect(0, 0, w, h);
      rotationAngle += isHovered ? 1.5 : 0.6;

      if (riftActive) {
        riftCollapseTime += 0.05;
        if (riftCollapseTime > 1) riftActive = false;
      }

      let centerOffsetX = 110;
      let centerOffsetY = 30;

      if (isHovered && mouse.x > 0) {
        centerOffsetX += (mouse.x - 110) * 0.12;
        centerOffsetY += (mouse.y - 30) * 0.12;
      }

      const project = (v: Point3D, scale: number) => {
        const rotated = rotate3D(v, rotationAngle);
        const dist = 3.5;
        let zoom = 40 * scale;

        if (riftActive) {
          const factor = Math.sin(riftCollapseTime * Math.PI);
          zoom *= 1 - factor * 0.85;
        }

        const px = (rotated.x / (rotated.z + dist)) * zoom + centerOffsetX;
        const py = (rotated.y / (rotated.z + dist)) * zoom + centerOffsetY;
        return { x: px, y: py };
      };

      const outerProj = cubeVertices.map((v) => project(v, 0.95));
      const innerProj = cubeVertices.map((v) => project(v, 0.45));

      ctx.save();
      ctx.lineWidth = 1.0;
      ctx.strokeStyle = isHovered ? "#c084fc" : "rgba(168, 85, 247, 0.35)";
      ctx.shadowBlur = isHovered ? 6 : 1;
      ctx.shadowColor = "#a855f7";

      cubeEdges.forEach((edge) => {
        ctx.beginPath();
        ctx.moveTo(outerProj[edge[0]].x, outerProj[edge[0]].y);
        ctx.lineTo(outerProj[edge[1]].x, outerProj[edge[1]].y);
        ctx.stroke();
      });

      ctx.strokeStyle = isHovered ? "#22d3ee" : "rgba(34, 211, 238, 0.25)";
      ctx.shadowColor = "#22d3ee";
      cubeEdges.forEach((edge) => {
        ctx.beginPath();
        ctx.moveTo(innerProj[edge[0]].x, innerProj[edge[0]].y);
        ctx.lineTo(innerProj[edge[1]].x, innerProj[edge[1]].y);
        ctx.stroke();
      });

      ctx.strokeStyle = "rgba(168, 85, 247, 0.25)";
      for (let i = 0; i < 8; i++) {
        ctx.beginPath();
        ctx.moveTo(outerProj[i].x, outerProj[i].y);
        ctx.lineTo(innerProj[i].x, innerProj[i].y);
        ctx.stroke();
      }

      ctx.restore();
      animId = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      cancelAnimationFrame(animId);
      btn.removeEventListener("mousemove", handleMouseMove);
      btn.removeEventListener("mouseenter", handleMouseEnter);
      btn.removeEventListener("mouseleave", handleMouseLeave);
      btn.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-[220px] h-[60px] flex items-center justify-center bg-transparent group">
      <button
        ref={buttonRef}
        className={cn(
          "relative w-[200px] h-[50px] bg-[#08020c]/70 border border-purple-500/15 rounded text-purple-400 text-[11px] font-bold tracking-[0.25em] uppercase cursor-pointer z-10 flex items-center justify-center backdrop-blur-md overflow-hidden transition-all duration-300 hover:text-purple-300 hover:border-purple-500/45 hover:shadow-[0_0_30px_rgba(168,85,247,0.2),inset_0_1px_1px_rgba(168,85,247,0.3)] active:scale-95",
          "before:content-[''] before:absolute before:top-0 before:left-[-150%] before:w-full before:height-full before:bg-[linear-gradient(90deg,transparent,rgba(168,85,247,0.05)_30%,rgba(168,85,247,0.25)_50%,rgba(34,211,238,0.1)_70%,transparent)] before:animate-[sweep_4_cubic-bezier(0.25,1,0.5,1)_infinite] before:z-0",
          className
        )}
        {...props}
      >
        <span className="relative z-20 pointer-events-none">{children}</span>
      </button>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />
    </div>
  );
}
`,
  "prompt": "Create an advanced Hyperdimensional Tesseract Portal Button. The layout displays a cosmic dark violet portal body. Inside the 2D canvas overlay runs a projected 3D hypercube wireframe. Hovering the pointer warps the tesseract projection coordinates towards the cursor coordinate. Clicking triggers a dimensions rift collapse.",
  "likes": 0,
  "author": "Animation AI",
  "featured": true,
  "createdAt": "2026-05-21T10:00:00.000Z",
  "updatedAt": "2026-05-21T10:00:00.000Z"
}, {
  "slug": "liquid-mercury-ripple-button",
  "title": "Liquid Mercury Button",
  "category": "buttons",
  "tag": "canvas",
  "description": "A high-end glossy button featuring fluid metallic chrome mercury droplets that naturally splash and coalesce under click actions.",
  "previewCode": `<!DOCTYPE html>
<html>
<head>
  <style>
    body, html {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      background: #020202;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Inter', sans-serif;
    }
    .btn-container {
      position: relative;
      width: 220px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    canvas {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 2;
    }
    .mercury-btn {
      position: relative;
      width: 200px;
      height: 50px;
      background: rgba(10, 10, 10, 0.7);
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 25px;
      color: rgba(255, 255, 255, 0.85);
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      cursor: pointer;
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      backdrop-filter: blur(16px);
      box-shadow: 
        inset 0 1px 1px rgba(255, 255, 255, 0.05),
        0 10px 30px rgba(0, 0, 0, 0.6);
      overflow: hidden;
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .mercury-btn::before {
      content: '';
      position: absolute;
      top: 0;
      left: -150%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.05) 30%,
        rgba(255, 255, 255, 0.2) 50%,
        rgba(255, 255, 255, 0.05) 70%,
        transparent
      );
      animation: sweep 4s cubic-bezier(0.25, 1, 0.5, 1) infinite;
      z-index: 0;
    }
    .mercury-btn:hover {
      color: #ffffff;
      border-color: rgba(255, 255, 255, 0.45);
      box-shadow: 
        0 0 30px rgba(255, 255, 255, 0.15),
        inset 0 1px 1px rgba(255, 255, 255, 0.3);
    }
    .mercury-btn:active {
      transform: scale(0.97);
    }
    .btn-text {
      position: relative;
      z-index: 3;
      pointer-events: none;
    }
    @keyframes sweep {
      0% { left: -150%; }
      50% { left: 150%; }
      100% { left: 150%; }
    }
  </style>
</head>
<body>
  <div class="btn-container">
    <button class="mercury-btn" id="mercuryBtn">
      <span class="btn-text">Mercury</span>
    </button>
    <canvas id="mercuryCanvas"></canvas>
  </div>

  <script>
    const canvas = document.getElementById('mercuryCanvas');
    const ctx = canvas.getContext('2d');
    const btn = document.getElementById('mercuryBtn');

    let w = 220;
    let h = 60;
    
    const dpr = window.devicePixelRatio || 1;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.scale(dpr, dpr);

    let isHovered = false;
    let mouse = { x: -999, y: -999 };
    let drops = [];

    class MercuryDrop {
      constructor(x, y, vx, vy, radius) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.radius = radius;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Pull back towards center (mercury attraction physics)
        this.vx += (110 - this.x) * 0.025;
        this.vy += (30 - this.y) * 0.025;

        // Mouse magnetic repulsion
        if (isHovered && mouse.x > 0) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 35) {
            this.vx -= dx * 0.05;
            this.vy -= dy * 0.05;
          }
        }
      }
      draw() {
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);

        // Shiny reflective chrome gradient
        let grad = ctx.createRadialGradient(
          this.x - this.radius * 0.3, 
          this.y - this.radius * 0.3, 
          this.radius * 0.1, 
          this.x, 
          this.y, 
          this.radius
        );
        grad.addColorStop(0, '#ffffff');
        grad.addColorStop(0.3, '#d1d5db');
        grad.addColorStop(0.7, '#6b7280');
        grad.addColorStop(1, '#1f2937');

        ctx.fillStyle = grad;
        ctx.shadowBlur = 4;
        ctx.shadowColor = 'rgba(255, 255, 255, 0.4)';
        ctx.fill();
        ctx.restore();
      }
    }

    // Initialize 6 metallic droplets
    for (let i = 0; i < 6; i++) {
      drops.push(new MercuryDrop(110 + (Math.random() - 0.5) * 80, 30 + (Math.random() - 0.5) * 10, 0, 0, Math.random() * 5 + 6));
    }

    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      mouse.x = e.clientX - rect.left + 10;
      mouse.y = e.clientY - rect.top + 5;
      isHovered = true;
    });

    btn.addEventListener('mouseenter', () => { isHovered = true; });
    btn.addEventListener('mouseleave', () => { isHovered = false; mouse = { x: -999, y: -999 }; });

    btn.addEventListener('click', (e) => {
      drops.forEach(d => {
        d.vx += (Math.random() - 0.5) * 14;
        d.vy += (Math.random() - 0.5) * 14;
      });
    });

    function loop() {
      ctx.clearRect(0, 0, w, h);

      drops.forEach(d => {
        d.update();
        d.draw();
      });

      requestAnimationFrame(loop);
    }
    loop();
  </script>
</body>
</html>`,
  "code": `"use client";

import React, { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface LiquidMercuryRippleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function LiquidMercuryRippleButton({
  children,
  className,
  ...props
}: LiquidMercuryRippleButtonProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const btn = buttonRef.current;
    if (!canvas || !btn) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const w = 220;
    const h = 60;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.scale(dpr, dpr);

    interface Drop {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
    }

    const drops: Drop[] = [];
    let isHovered = false;
    let mouse = { x: -999, y: -999 };

    for (let i = 0; i < 6; i++) {
      drops.push({
        x: 110 + (Math.random() - 0.5) * 80,
        y: 30 + (Math.random() - 0.5) * 10,
        vx: 0,
        vy: 0,
        radius: Math.random() * 5 + 6,
      });
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      mouse.x = e.clientX - rect.left + 10;
      mouse.y = e.clientY - rect.top + 5;
      isHovered = true;
    };

    const handleMouseEnter = () => { isHovered = true; };
    const handleMouseLeave = () => { isHovered = false; mouse = { x: -999, y: -999 }; };

    const handleClick = () => {
      drops.forEach((d) => {
        d.vx += (Math.random() - 0.5) * 14;
        d.vy += (Math.random() - 0.5) * 14;
      });
    };

    btn.addEventListener("mousemove", handleMouseMove);
    btn.addEventListener("mouseenter", handleMouseEnter);
    btn.addEventListener("mouseleave", handleMouseLeave);
    btn.addEventListener("click", handleClick);

    let animId: number;
    const loop = () => {
      ctx.clearRect(0, 0, w, h);

      drops.forEach((d) => {
        d.x += d.vx;
        d.y += d.vy;

        d.vx += (110 - d.x) * 0.025;
        d.vy += (30 - d.y) * 0.025;

        if (isHovered && mouse.x > 0) {
          const dx = mouse.x - d.x;
          const dy = mouse.y - d.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 35) {
            d.vx -= dx * 0.05;
            d.vy -= dy * 0.05;
          }
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.radius, 0, Math.PI * 2);

        const grad = ctx.createRadialGradient(
          d.x - d.radius * 0.3,
          d.y - d.radius * 0.3,
          d.radius * 0.1,
          d.x,
          d.y,
          d.radius
        );
        grad.addColorStop(0, "#ffffff");
        grad.addColorStop(0.3, "#d1d5db");
        grad.addColorStop(0.7, "#6b7280");
        grad.addColorStop(1, "#1f2937");

        ctx.fillStyle = grad;
        ctx.shadowBlur = 4;
        ctx.shadowColor = "rgba(255, 255, 255, 0.4)";
        ctx.fill();
        ctx.restore();
      });

      animId = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      cancelAnimationFrame(animId);
      btn.removeEventListener("mousemove", handleMouseMove);
      btn.removeEventListener("mouseenter", handleMouseEnter);
      btn.removeEventListener("mouseleave", handleMouseLeave);
      btn.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-[220px] h-[60px] flex items-center justify-center bg-transparent group">
      <button
        ref={buttonRef}
        className={cn(
          "relative w-[200px] h-[50px] bg-[#0a0a0a]/70 border border-white/15 rounded-full text-white/85 text-[11px] font-bold tracking-[0.25em] uppercase cursor-pointer z-10 flex items-center justify-center backdrop-blur-md overflow-hidden transition-all duration-300 hover:text-white hover:border-white/45 hover:shadow-[0_0_30px_rgba(255,255,255,0.15),inset_0_1px_1px_rgba(255,255,255,0.3)] active:scale-95",
          "before:content-[''] before:absolute before:top-0 before:left-[-150%] before:w-full before:height-full before:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.05)_30%,rgba(255,255,255,0.2)_50%,rgba(255,255,255,0.05)_70%,transparent)] before:animate-[sweep_4_cubic-bezier(0.25,1,0.5,1)_infinite] before:z-0",
          className
        )}
        {...props}
      >
        <span className="relative z-20 pointer-events-none">{children}</span>
      </button>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />
    </div>
  );
}
`,
  "prompt": "Create an advanced Hydrodynamic Liquid Mercury Ripple Button. The layout displays a highly glossy chrome body with silver sweep highlights. Inside the 2D canvas overlay runs a hydrodynamic liquid mercury simulation. Hovering the pointer warps mercury droplet boundaries, and clicking splits it into multiple high-shine droplets that dynamically coalesce back together.",
  "likes": 0,
  "author": "Animation AI",
  "featured": true,
  "createdAt": "2026-05-21T10:00:00.000Z",
  "updatedAt": "2026-05-21T10:00:00.000Z"
}, {
  "slug": "quantum-string-resonance-button",
  "title": "Quantum String Button",
  "category": "buttons",
  "tag": "canvas",
  "description": "An interactive quantum mechanics theme button where strings vibrate and resonate dynamically with pointer movements.",
  "previewCode": `<!DOCTYPE html>
<html>
<head>
  <style>
    body, html {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      background: #020105;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Inter', sans-serif;
    }
    .btn-container {
      position: relative;
      width: 220px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    canvas {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 2;
    }
    .quantum-btn {
      position: relative;
      width: 200px;
      height: 50px;
      background: rgba(4, 2, 10, 0.7);
      border: 1px solid rgba(236, 72, 153, 0.15);
      border-radius: 4px;
      color: rgba(236, 72, 153, 0.85);
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      cursor: pointer;
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      backdrop-filter: blur(16px);
      box-shadow: 
        inset 0 1px 1px rgba(255, 255, 255, 0.05),
        0 10px 30px rgba(0, 0, 0, 0.6);
      overflow: hidden;
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .quantum-btn::before {
      content: '';
      position: absolute;
      top: 0;
      left: -150%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(236, 72, 153, 0.05) 30%,
        rgba(236, 72, 153, 0.2) 50%,
        rgba(6, 182, 212, 0.1) 70%,
        transparent
      );
      animation: sweep 4s cubic-bezier(0.25, 1, 0.5, 1) infinite;
      z-index: 0;
    }
    .quantum-btn:hover {
      color: #f472b6;
      border-color: rgba(236, 72, 153, 0.45);
      box-shadow: 
        0 0 30px rgba(236, 72, 153, 0.2),
        inset 0 1px 1px rgba(236, 72, 153, 0.3);
    }
    .quantum-btn:active {
      transform: scale(0.97);
    }
    .btn-text {
      position: relative;
      z-index: 3;
      pointer-events: none;
    }
    @keyframes sweep {
      0% { left: -150%; }
      50% { left: 150%; }
      100% { left: 150%; }
    }
  </style>
</head>
<body>
  <div class="btn-container">
    <button class="quantum-btn" id="quantumBtn">
      <span class="btn-text">Quantum String</span>
    </button>
    <canvas id="quantumCanvas"></canvas>
  </div>

  <script>
    const canvas = document.getElementById('quantumCanvas');
    const ctx = canvas.getContext('2d');
    const btn = document.getElementById('quantumBtn');

    let w = 220;
    let h = 60;
    
    const dpr = window.devicePixelRatio || 1;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.scale(dpr, dpr);

    let isHovered = false;
    let mouse = { x: -999, y: -999 };
    let time = 0;
    let burstActive = false;
    let burstTime = 0;

    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      mouse.x = e.clientX - rect.left + 10;
      mouse.y = e.clientY - rect.top + 5;
      isHovered = true;
    });

    btn.addEventListener('mouseenter', () => { isHovered = true; });
    btn.addEventListener('mouseleave', () => { isHovered = false; mouse = { x: -999, y: -999 }; });

    btn.addEventListener('click', (e) => {
      burstActive = true;
      burstTime = 0;
    });

    function loop() {
      ctx.clearRect(0, 0, w, h);
      time += 0.04;

      if (burstActive) {
        burstTime += 0.05;
        if (burstTime > 1) burstActive = false;
      }

      ctx.save();
      ctx.lineWidth = 1.2;

      // Draw 3 quantum resonating strings
      for (let s = 0; s < 3; s++) {
        ctx.beginPath();
        let grad = ctx.createLinearGradient(10, 0, 210, 0);
        grad.addColorStop(0, '#ec4899');
        grad.addColorStop(0.5, '#a855f7');
        grad.addColorStop(1, '#06b6d4');
        ctx.strokeStyle = grad;
        ctx.shadowBlur = isHovered ? 8 : 2;
        ctx.shadowColor = '#ec4899';

        let yOffset = 20 + s * 10;

        for (let x = 10; x <= 210; x += 2) {
          let y = yOffset;

          // Normal vibrational frequency
          let freq = 0.08 + s * 0.02;
          let amp = isHovered ? 6 : 2;
          
          if (burstActive) {
            amp += Math.sin(burstTime * Math.PI) * 16;
          }

          y += Math.sin(x * freq + time * 3) * amp;

          // Mouse resonant pull deformation
          if (isHovered && mouse.x > 0) {
            const dist = Math.abs(x - mouse.x);
            if (dist < 40) {
              const pull = (1 - dist / 40) * (mouse.y - yOffset) * 0.8;
              y += pull;
            }
          }

          if (x === 10) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      ctx.restore();
      requestAnimationFrame(loop);
    }
    loop();
  </script>
</body>
</html>`,
  "code": `"use client";

import React, { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface QuantumStringResonanceButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function QuantumStringResonanceButton({
  children,
  className,
  ...props
}: QuantumStringResonanceButtonProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const btn = buttonRef.current;
    if (!canvas || !btn) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const w = 220;
    const h = 60;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.scale(dpr, dpr);

    let isHovered = false;
    let mouse = { x: -999, y: -999 };
    let time = 0;
    let burstActive = false;
    let burstTime = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      mouse.x = e.clientX - rect.left + 10;
      mouse.y = e.clientY - rect.top + 5;
      isHovered = true;
    };

    const handleMouseEnter = () => { isHovered = true; };
    const handleMouseLeave = () => { isHovered = false; mouse = { x: -999, y: -999 }; };

    const handleClick = () => {
      burstActive = true;
      burstTime = 0;
    };

    btn.addEventListener("mousemove", handleMouseMove);
    btn.addEventListener("mouseenter", handleMouseEnter);
    btn.addEventListener("mouseleave", handleMouseLeave);
    btn.addEventListener("click", handleClick);

    let animId: number;
    const loop = () => {
      ctx.clearRect(0, 0, w, h);
      time += 0.04;

      if (burstActive) {
        burstTime += 0.05;
        if (burstTime > 1) burstActive = false;
      }

      ctx.save();
      ctx.lineWidth = 1.2;

      for (let s = 0; s < 3; s++) {
        ctx.beginPath();
        const grad = ctx.createLinearGradient(10, 0, 210, 0);
        grad.addColorStop(0, "#ec4899");
        grad.addColorStop(0.5, "#a855f7");
        grad.addColorStop(1, "#06b6d4");
        ctx.strokeStyle = grad;
        ctx.shadowBlur = isHovered ? 8 : 2;
        ctx.shadowColor = "#ec4899";

        const yOffset = 20 + s * 10;

        for (let x = 10; x <= 210; x += 2) {
          let y = yOffset;
          const freq = 0.08 + s * 0.02;
          let amp = isHovered ? 6 : 2;

          if (burstActive) {
            amp += Math.sin(burstTime * Math.PI) * 16;
          }

          y += Math.sin(x * freq + time * 3) * amp;

          if (isHovered && mouse.x > 0) {
            const dist = Math.abs(x - mouse.x);
            if (dist < 40) {
              const pull = (1 - dist / 40) * (mouse.y - yOffset) * 0.8;
              y += pull;
            }
          }

          if (x === 10) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      ctx.restore();
      animId = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      cancelAnimationFrame(animId);
      btn.removeEventListener("mousemove", handleMouseMove);
      btn.removeEventListener("mouseenter", handleMouseEnter);
      btn.removeEventListener("mouseleave", handleMouseLeave);
      btn.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-[220px] h-[60px] flex items-center justify-center bg-transparent group">
      <button
        ref={buttonRef}
        className={cn(
          "relative w-[200px] h-[50px] bg-[#04020a]/70 border border-pink-500/15 rounded text-pink-500/85 text-[11px] font-bold tracking-[0.25em] uppercase cursor-pointer z-10 flex items-center justify-center backdrop-blur-md overflow-hidden transition-all duration-300 hover:text-pink-400 hover:border-pink-500/45 hover:shadow-[0_0_30px_rgba(236,72,153,0.2),inset_0_1px_1px_rgba(236,72,153,0.3)] active:scale-95",
          "before:content-[''] before:absolute before:top-0 before:left-[-150%] before:w-full before:height-full before:bg-[linear-gradient(90deg,transparent,rgba(236,72,153,0.05)_30%,rgba(236,72,153,0.2)_50%,rgba(6,182,212,0.1)_70%,transparent)] before:animate-[sweep_4_cubic-bezier(0.25,1,0.5,1)_infinite] before:z-0",
          className
        )}
        {...props}
      >
        <span className="relative z-20 pointer-events-none">{children}</span>
      </button>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />
    </div>
  );
}
`,
  "prompt": "Create an advanced Quantum String Vibrational Resonance Button. The layout displays an ultra-vibrant electric violet frame. Inside the 2D canvas overlay run multiple quantum vibrating strings. Hovering the pointer pinches and warps the strings local frequency and amplitude. Clicking triggers a high-frequency symmetry burst ripple.",
  "likes": 0,
  "author": "Animation AI",
  "featured": true,
  "createdAt": "2026-05-21T10:00:00.000Z",
  "updatedAt": "2026-05-21T10:00:00.000Z"
}, {
  "slug": "nanite-swarm-hive-button",
  "title": "Nanite Hive Button",
  "category": "buttons",
  "tag": "canvas",
  "description": "A sci-fi nanotech button featuring micro-nanites that coordinate, orbit, and align dynamically towards the pointer.",
  "previewCode": `<!DOCTYPE html>
<html>
<head>
  <style>
    body, html {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      background: #020302;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Inter', sans-serif;
    }
    .btn-container {
      position: relative;
      width: 220px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    canvas {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 2;
    }
    .nanite-btn {
      position: relative;
      width: 200px;
      height: 50px;
      background: rgba(2, 8, 4, 0.7);
      border: 1px solid rgba(16, 185, 129, 0.15);
      border-radius: 4px;
      color: rgba(16, 185, 129, 0.85);
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      cursor: pointer;
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      backdrop-filter: blur(16px);
      box-shadow: 
        inset 0 1px 1px rgba(255, 255, 255, 0.05),
        0 10px 30px rgba(0, 0, 0, 0.6);
      overflow: hidden;
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .nanite-btn::before {
      content: '';
      position: absolute;
      top: 0;
      left: -150%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(16, 185, 129, 0.05) 30%,
        rgba(16, 185, 129, 0.25) 50%,
        rgba(34, 211, 238, 0.1) 70%,
        transparent
      );
      animation: sweep 4s cubic-bezier(0.25, 1, 0.5, 1) infinite;
      z-index: 0;
    }
    .nanite-btn:hover {
      color: #34d399;
      border-color: rgba(16, 185, 129, 0.45);
      box-shadow: 
        0 0 30px rgba(16, 185, 129, 0.2),
        inset 0 1px 1px rgba(16, 185, 129, 0.3);
    }
    .nanite-btn:active {
      transform: scale(0.97);
    }
    .btn-text {
      position: relative;
      z-index: 3;
      pointer-events: none;
    }
    @keyframes sweep {
      0% { left: -150%; }
      50% { left: 150%; }
      100% { left: 150%; }
    }
  </style>
</head>
<body>
  <div class="btn-container">
    <button class="nanite-btn" id="naniteBtn">
      <span class="btn-text">Nanite Hive</span>
    </button>
    <canvas id="naniteCanvas"></canvas>
  </div>

  <script>
    const canvas = document.getElementById('naniteCanvas');
    const ctx = canvas.getContext('2d');
    const btn = document.getElementById('naniteBtn');

    let w = 220;
    let h = 60;
    
    const dpr = window.devicePixelRatio || 1;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.scale(dpr, dpr);

    let isHovered = false;
    let mouse = { x: -999, y: -999 };
    let nanites = [];

    class Nanite {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = 110 + (Math.random() - 0.5) * 80;
        this.y = 30 + (Math.random() - 0.5) * 20;
        this.vx = (Math.random() - 0.5) * 1.2;
        this.vy = (Math.random() - 0.5) * 1.2;
        this.size = Math.random() * 1.2 + 0.8;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Attract towards mouse if hovered, else attract to center
        let tx = 110;
        let ty = 30;

        if (isHovered && mouse.x > 0) {
          tx = mouse.x;
          ty = mouse.y;
        }

        const dx = tx - this.x;
        const dy = ty - this.y;
        this.vx += dx * 0.012;
        this.vy += dy * 0.012;

        // Limit speed
        const speed = Math.hypot(this.vx, this.vy);
        if (speed > 2.5) {
          this.vx = (this.vx / speed) * 2.5;
          this.vy = (this.vy / speed) * 2.5;
        }
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = isHovered ? '#34d399' : '#059669';
        ctx.fill();
      }
    }

    for (let i = 0; i < 40; i++) {
      nanites.push(new Nanite());
    }

    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      mouse.x = e.clientX - rect.left + 10;
      mouse.y = e.clientY - rect.top + 5;
      isHovered = true;
    });

    btn.addEventListener('mouseenter', () => { isHovered = true; });
    btn.addEventListener('mouseleave', () => { isHovered = false; mouse = { x: -999, y: -999 }; });

    btn.addEventListener('click', (e) => {
      nanites.forEach(n => {
        n.vx = (Math.random() - 0.5) * 12;
        n.vy = (Math.random() - 0.5) * 12;
      });
    });

    function loop() {
      ctx.clearRect(0, 0, w, h);

      ctx.save();
      nanites.forEach(n => {
        n.update();
        n.draw();
      });

      // Connect near nanites with high-speed lines
      if (isHovered) {
        ctx.strokeStyle = 'rgba(52, 211, 153, 0.15)';
        ctx.lineWidth = 0.6;
        for (let i = 0; i < nanites.length; i++) {
          for (let j = i + 1; j < nanites.length; j++) {
            const dist = Math.hypot(nanites[i].x - nanites[j].x, nanites[i].y - nanites[j].y);
            if (dist < 18) {
              ctx.beginPath();
              ctx.moveTo(nanites[i].x, nanites[i].y);
              ctx.lineTo(nanites[j].x, nanites[j].y);
              ctx.stroke();
            }
          }
        }
      }
      ctx.restore();

      requestAnimationFrame(loop);
    }
    loop();
  </script>
</body>
</html>`,
  "code": `"use client";

import React, { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface NaniteSwarmHiveButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function NaniteSwarmHiveButton({
  children,
  className,
  ...props
}: NaniteSwarmHiveButtonProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const btn = buttonRef.current;
    if (!canvas || !btn) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const w = 220;
    const h = 60;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.scale(dpr, dpr);

    interface Nanite {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
    }

    const nanites: Nanite[] = [];
    let isHovered = false;
    let mouse = { x: -999, y: -999 };

    for (let i = 0; i < 40; i++) {
      nanites.push({
        x: 110 + (Math.random() - 0.5) * 80,
        y: 30 + (Math.random() - 0.5) * 20,
        vx: (Math.random() - 0.5) * 1.2,
        vy: (Math.random() - 0.5) * 1.2,
        size: Math.random() * 1.2 + 0.8,
      });
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      mouse.x = e.clientX - rect.left + 10;
      mouse.y = e.clientY - rect.top + 5;
      isHovered = true;
    };

    const handleMouseEnter = () => { isHovered = true; };
    const handleMouseLeave = () => { isHovered = false; mouse = { x: -999, y: -999 }; };

    const handleClick = () => {
      nanites.forEach((n) => {
        n.vx = (Math.random() - 0.5) * 12;
        n.vy = (Math.random() - 0.5) * 12;
      });
    };

    btn.addEventListener("mousemove", handleMouseMove);
    btn.addEventListener("mouseenter", handleMouseEnter);
    btn.addEventListener("mouseleave", handleMouseLeave);
    btn.addEventListener("click", handleClick);

    let animId: number;
    const loop = () => {
      ctx.clearRect(0, 0, w, h);

      ctx.save();
      nanites.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;

        let tx = 110;
        let ty = 30;

        if (isHovered && mouse.x > 0) {
          tx = mouse.x;
          ty = mouse.y;
        }

        const dx = tx - n.x;
        const dy = ty - n.y;
        n.vx += dx * 0.012;
        n.vy += dy * 0.012;

        const speed = Math.hypot(n.vx, n.vy);
        if (speed > 2.5) {
          n.vx = (n.vx / speed) * 2.5;
          n.vy = (n.vy / speed) * 2.5;
        }

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.size, 0, Math.PI * 2);
        ctx.fillStyle = isHovered ? "#34d399" : "#059669";
        ctx.fill();
      });

      if (isHovered) {
        ctx.strokeStyle = "rgba(52, 211, 153, 0.15)";
        ctx.lineWidth = 0.6;
        for (let i = 0; i < nanites.length; i++) {
          for (let j = i + 1; j < nanites.length; j++) {
            const dist = Math.hypot(
              nanites[i].x - nanites[j].x,
              nanites[i].y - nanites[j].y
            );
            if (dist < 18) {
              ctx.beginPath();
              ctx.moveTo(nanites[i].x, nanites[i].y);
              ctx.lineTo(nanites[j].x, nanites[j].y);
              ctx.stroke();
            }
          }
        }
      }
      ctx.restore();

      animId = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      cancelAnimationFrame(animId);
      btn.removeEventListener("mousemove", handleMouseMove);
      btn.removeEventListener("mouseenter", handleMouseEnter);
      btn.removeEventListener("mouseleave", handleMouseLeave);
      btn.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-[220px] h-[60px] flex items-center justify-center bg-transparent group">
      <button
        ref={buttonRef}
        className={cn(
          "relative w-[200px] h-[50px] bg-[#020804]/70 border border-emerald-500/15 rounded text-emerald-400 text-[11px] font-bold tracking-[0.25em] uppercase cursor-pointer z-10 flex items-center justify-center backdrop-blur-md overflow-hidden transition-all duration-300 hover:text-emerald-300 hover:border-emerald-500/45 hover:shadow-[0_0_30px_rgba(16,185,129,0.2),inset_0_1px_1px_rgba(16,185,129,0.3)] active:scale-95",
          "before:content-[''] before:absolute before:top-0 before:left-[-150%] before:w-full before:height-full before:bg-[linear-gradient(90deg,transparent,rgba(16,185,129,0.05)_30%,rgba(16,185,129,0.25)_50%,rgba(34,211,238,0.1)_70%,transparent)] before:animate-[sweep_4_cubic-bezier(0.25,1,0.5,1)_infinite] before:z-0",
          className
        )}
        {...props}
      >
        <span className="relative z-20 pointer-events-none">{children}</span>
      </button>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />
    </div>
  );
}
`,
  "prompt": "Create an advanced Cybernetic Nanite Swarm Hive Button. The layout displays a dark hexagonal framework. Inside the 2D canvas overlay, a swarm of micro-nanites orbit. Hovering the pointer acts as a hive beacon, causing nanites to align and build connection vectors toward the cursor coordinates. Clicking triggers an explosive swarm dispersal.",
  "likes": 0,
  "author": "Animation AI",
  "featured": true,
  "createdAt": "2026-05-21T10:00:00.000Z",
  "updatedAt": "2026-05-21T10:00:00.000Z"
}, {
  "slug": "gravitational-lensing-button",
  "title": "Black Hole Button",
  "category": "buttons",
  "tag": "canvas",
  "description": "A stellar astrophysics button showcasing gravitational light bending (lensing) around a central black hole singularity.",
  "previewCode": `<!DOCTYPE html>
<html>
<head>
  <style>
    body, html {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      background: #010003;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Inter', sans-serif;
    }
    .btn-container {
      position: relative;
      width: 220px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    canvas {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 2;
    }
    .singularity-btn {
      position: relative;
      width: 200px;
      height: 50px;
      background: rgba(4, 1, 8, 0.7);
      border: 1px solid rgba(249, 115, 22, 0.15);
      border-radius: 25px;
      color: rgba(249, 115, 22, 0.85);
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      cursor: pointer;
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      backdrop-filter: blur(16px);
      box-shadow: 
        inset 0 1px 1px rgba(255, 255, 255, 0.05),
        0 10px 30px rgba(0, 0, 0, 0.6);
      overflow: hidden;
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .singularity-btn::before {
      content: '';
      position: absolute;
      top: 0;
      left: -150%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(249, 115, 22, 0.05) 30%,
        rgba(249, 115, 22, 0.2) 50%,
        rgba(239, 68, 68, 0.1) 70%,
        transparent
      );
      animation: sweep 4s cubic-bezier(0.25, 1, 0.5, 1) infinite;
      z-index: 0;
    }
    .singularity-btn:hover {
      color: #fdba74;
      border-color: rgba(249, 115, 22, 0.45);
      box-shadow: 
        0 0 30px rgba(249, 115, 22, 0.2),
        inset 0 1px 1px rgba(249, 115, 22, 0.3);
    }
    .singularity-btn:active {
      transform: scale(0.97);
    }
    .btn-text {
      position: relative;
      z-index: 3;
      pointer-events: none;
    }
    @keyframes sweep {
      0% { left: -150%; }
      50% { left: 150%; }
      100% { left: 150%; }
    }
  </style>
</head>
<body>
  <div class="btn-container">
    <button class="singularity-btn" id="singularityBtn">
      <span class="btn-text">Singularity</span>
    </button>
    <canvas id="singularityCanvas"></canvas>
  </div>

  <script>
    const canvas = document.getElementById('singularityCanvas');
    const ctx = canvas.getContext('2d');
    const btn = document.getElementById('singularityBtn');

    let w = 220;
    let h = 60;
    
    const dpr = window.devicePixelRatio || 1;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.scale(dpr, dpr);

    let isHovered = false;
    let mouse = { x: -999, y: -999 };
    let time = 0;
    let particles = [];
    let hawkingActive = false;
    let hawkingTime = 0;

    class Photon {
      constructor(angle, radius) {
        this.angle = angle;
        this.radius = radius;
      }
      update() {
        this.angle += 0.04;
        let baseRadius = this.radius;

        // Gravitational lensing deformation (bending light)
        if (isHovered && mouse.x > 0) {
          const px = 110 + Math.cos(this.angle) * baseRadius;
          const py = 30 + Math.sin(this.angle) * baseRadius;
          const dx = mouse.x - px;
          const dy = mouse.y - py;
          const dist = Math.hypot(dx, dy);
          if (dist < 45) {
            baseRadius -= (1 - dist / 45) * 8;
          }
        }

        if (hawkingActive) {
          baseRadius += Math.sin(hawkingTime * Math.PI) * 25;
        }

        this.x = 110 + Math.cos(this.angle) * baseRadius;
        this.y = 30 + Math.sin(this.angle) * baseRadius;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, 1.2, 0, Math.PI * 2);
        ctx.fillStyle = hawkingActive ? '#ffffff' : '#f97316';
        ctx.fill();
      }
    }

    for (let i = 0; i < 45; i++) {
      particles.push(new Photon((i * 8) * Math.PI / 180, 22 + Math.random() * 6));
    }

    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      mouse.x = e.clientX - rect.left + 10;
      mouse.y = e.clientY - rect.top + 5;
      isHovered = true;
    });

    btn.addEventListener('mouseenter', () => { isHovered = true; });
    btn.addEventListener('mouseleave', () => { isHovered = false; mouse = { x: -999, y: -999 }; });

    btn.addEventListener('click', (e) => {
      hawkingActive = true;
      hawkingTime = 0;
    });

    function loop() {
      ctx.clearRect(0, 0, w, h);
      time += 0.03;

      if (hawkingActive) {
        hawkingTime += 0.06;
        if (hawkingTime > 1) hawkingActive = false;
      }

      // Draw Singularity Shadow Center
      ctx.save();
      ctx.beginPath();
      ctx.arc(110, 30, 15, 0, Math.PI * 2);
      ctx.fillStyle = '#000000';
      ctx.shadowBlur = isHovered ? 12 : 4;
      ctx.shadowColor = '#f97316';
      ctx.fill();
      ctx.restore();

      // Accretion disk rendering
      ctx.save();
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      ctx.restore();

      requestAnimationFrame(loop);
    }
    loop();
  </script>
</body>
</html>`,
  "code": `"use client";

import React, { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface GravitationalLensingButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function GravitationalLensingButton({
  children,
  className,
  ...props
}: GravitationalLensingButtonProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const btn = buttonRef.current;
    if (!canvas || !btn) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const w = 220;
    const h = 60;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.scale(dpr, dpr);

    interface Photon {
      angle: number;
      radius: number;
      x: number;
      y: number;
    }

    const particles: Photon[] = [];
    let isHovered = false;
    let mouse = { x: -999, y: -999 };
    let hawkingActive = false;
    let hawkingTime = 0;

    for (let i = 0; i < 45; i++) {
      particles.push({
        angle: (i * 8 * Math.PI) / 180,
        radius: 22 + Math.random() * 6,
        x: 0,
        y: 0,
      });
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      mouse.x = e.clientX - rect.left + 10;
      mouse.y = e.clientY - rect.top + 5;
      isHovered = true;
    };

    const handleMouseEnter = () => { isHovered = true; };
    const handleMouseLeave = () => { isHovered = false; mouse = { x: -999, y: -999 }; };

    const handleClick = () => {
      hawkingActive = true;
      hawkingTime = 0;
    };

    btn.addEventListener("mousemove", handleMouseMove);
    btn.addEventListener("mouseenter", handleMouseEnter);
    btn.addEventListener("mouseleave", handleMouseLeave);
    btn.addEventListener("click", handleClick);

    let animId: number;
    const loop = () => {
      ctx.clearRect(0, 0, w, h);

      if (hawkingActive) {
        hawkingTime += 0.06;
        if (hawkingTime > 1) hawkingActive = false;
      }

      ctx.save();
      ctx.beginPath();
      ctx.arc(110, 30, 15, 0, Math.PI * 2);
      ctx.fillStyle = "#000000";
      ctx.shadowBlur = isHovered ? 12 : 4;
      ctx.shadowColor = "#f97316";
      ctx.fill();
      ctx.restore();

      ctx.save();
      particles.forEach((p) => {
        p.angle += 0.04;
        let baseRadius = p.radius;

        if (isHovered && mouse.x > 0) {
          const px = 110 + Math.cos(p.angle) * baseRadius;
          const py = 30 + Math.sin(p.angle) * baseRadius;
          const dx = mouse.x - px;
          const dy = mouse.y - py;
          const dist = Math.hypot(dx, dy);
          if (dist < 45) {
            baseRadius -= (1 - dist / 45) * 8;
          }
        }

        if (hawkingActive) {
          baseRadius += Math.sin(hawkingTime * Math.PI) * 25;
        }

        p.x = 110 + Math.cos(p.angle) * baseRadius;
        p.y = 30 + Math.sin(p.angle) * baseRadius;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.2, 0, Math.PI * 2);
        ctx.fillStyle = hawkingActive ? "#ffffff" : "#f97316";
        ctx.fill();
      });
      ctx.restore();

      animId = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      cancelAnimationFrame(animId);
      btn.removeEventListener("mousemove", handleMouseMove);
      btn.removeEventListener("mouseenter", handleMouseEnter);
      btn.removeEventListener("mouseleave", handleMouseLeave);
      btn.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-[220px] h-[60px] flex items-center justify-center bg-transparent group">
      <button
        ref={buttonRef}
        className={cn(
          "relative w-[200px] h-[50px] bg-[#040108]/70 border border-orange-500/15 rounded-full text-orange-500/85 text-[11px] font-bold tracking-[0.25em] uppercase cursor-pointer z-10 flex items-center justify-center backdrop-blur-md overflow-hidden transition-all duration-300 hover:text-orange-300 hover:border-orange-500/45 hover:shadow-[0_0_30px_rgba(249,115,22,0.2),inset_0_1px_1px_rgba(249,115,22,0.3)] active:scale-95",
          "before:content-[''] before:absolute before:top-0 before:left-[-150%] before:w-full before:height-full before:bg-[linear-gradient(90deg,transparent,rgba(249,115,22,0.05)_30%,rgba(249,115,22,0.2)_50%,rgba(239,68,68,0.1)_70%,transparent)] before:animate-[sweep_4_cubic-bezier(0.25,1,0.5,1)_infinite] before:z-0",
          className
        )}
        {...props}
      >
        <span className="relative z-20 pointer-events-none">{children}</span>
      </button>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />
    </div>
  );
}
`,
  "prompt": "Create an advanced Astrophysical Black Hole Gravitational Lensing Button. The layout displays a dark orange accretion ring. Inside the 2D canvas overlay runs an active orbit simulation around a dark singularity. Hovering the pointer acts as an external gravitational wave source bending light, and clicking triggers a white Hawking Radiation wave burst.",
  "likes": 0,
  "author": "Animation AI",
  "featured": true,
  "createdAt": "2026-05-21T10:00:00.000Z",
  "updatedAt": "2026-05-21T10:00:00.000Z"
}, {
  "slug": "bioluminescent-synaptic-button",
  "title": "Synaptic Button",
  "category": "buttons",
  "tag": "canvas",
  "description": "An organic neural net theme button featuring electrical action potential pulses that light up Axons and Synaptic Nodes.",
  "previewCode": `<!DOCTYPE html>
<html>
<head>
  <style>
    body, html {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      background: #010204;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Inter', sans-serif;
    }
    .btn-container {
      position: relative;
      width: 220px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    canvas {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 2;
    }
    .synaptic-btn {
      position: relative;
      width: 200px;
      height: 50px;
      background: rgba(1, 6, 12, 0.7);
      border: 1px solid rgba(6, 182, 212, 0.15);
      border-radius: 4px;
      color: rgba(6, 182, 212, 0.85);
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      cursor: pointer;
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      backdrop-filter: blur(16px);
      box-shadow: 
        inset 0 1px 1px rgba(255, 255, 255, 0.05),
        0 10px 30px rgba(0, 0, 0, 0.6);
      overflow: hidden;
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .synaptic-btn::before {
      content: '';
      position: absolute;
      top: 0;
      left: -150%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(6, 182, 212, 0.05) 30%,
        rgba(6, 182, 212, 0.25) 50%,
        rgba(168, 85, 247, 0.1) 70%,
        transparent
      );
      animation: sweep 4s cubic-bezier(0.25, 1, 0.5, 1) infinite;
      z-index: 0;
    }
    .synaptic-btn:hover {
      color: #22d3ee;
      border-color: rgba(6, 182, 212, 0.45);
      box-shadow: 
        0 0 30px rgba(6, 182, 212, 0.2),
        inset 0 1px 1px rgba(6, 182, 212, 0.3);
    }
    .synaptic-btn:active {
      transform: scale(0.97);
    }
    .btn-text {
      position: relative;
      z-index: 3;
      pointer-events: none;
    }
    @keyframes sweep {
      0% { left: -150%; }
      50% { left: 150%; }
      100% { left: 150%; }
    }
  </style>
</head>
<body>
  <div class="btn-container">
    <button class="synaptic-btn" id="synapticBtn">
      <span class="btn-text">Synaptic</span>
    </button>
    <canvas id="synapticCanvas"></canvas>
  </div>

  <script>
    const canvas = document.getElementById('synapticCanvas');
    const ctx = canvas.getContext('2d');
    const btn = document.getElementById('synapticBtn');

    let w = 220;
    let h = 60;
    
    const dpr = window.devicePixelRatio || 1;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.scale(dpr, dpr);

    let isHovered = false;
    let mouse = { x: -999, y: -999 };
    let nodes = [];
    let signalTime = 0;
    let clickSignal = false;

    // Build 6 interconnected brain synaptic nodes
    const nodeCoords = [
      {x: 35, y: 15}, {x: 75, y: 45}, {x: 110, y: 18},
      {x: 145, y: 42}, {x: 185, y: 16}, {x: 110, y: 48}
    ];

    nodeCoords.forEach(c => {
      nodes.push({
        x: c.x,
        y: c.y,
        size: Math.random() * 2 + 2.5,
        pulsePhase: Math.random() * Math.PI
      });
    });

    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      mouse.x = e.clientX - rect.left + 10;
      mouse.y = e.clientY - rect.top + 5;
      isHovered = true;
    });

    btn.addEventListener('mouseenter', () => { isHovered = true; });
    btn.addEventListener('mouseleave', () => { isHovered = false; mouse = { x: -999, y: -999 }; });

    btn.addEventListener('click', (e) => {
      clickSignal = true;
      signalTime = 0;
    });

    function loop() {
      ctx.clearRect(0, 0, w, h);

      if (clickSignal) {
        signalTime += 0.04;
        if (signalTime > 1.2) clickSignal = false;
      }

      ctx.save();
      // Draw synaptic connections (Axons)
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.12)';
      ctx.lineWidth = 1.0;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          if (Math.hypot(dx, dy) < 85) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();

            // Action Potential signal sweeps
            if (isHovered || clickSignal) {
              let t = (Date.now() * 0.0035 + i) % 1;
              if (clickSignal) t = signalTime % 1;
              
              const px = nodes[i].x + (nodes[j].x - nodes[i].x) * t;
              const py = nodes[i].y + (nodes[j].y - nodes[i].y) * t;

              ctx.beginPath();
              ctx.arc(px, py, 1.5, 0, Math.PI * 2);
              ctx.fillStyle = clickSignal ? '#a855f7' : '#22d3ee';
              ctx.shadowBlur = 4;
              ctx.shadowColor = ctx.fillStyle;
              ctx.fill();
            }
          }
        }
      }

      // Draw Synaptic Nodes
      nodes.forEach(n => {
        n.pulsePhase += 0.06;
        let scale = 1.0 + Math.sin(n.pulsePhase) * 0.2;

        if (isHovered && mouse.x > 0) {
          const dist = Math.hypot(n.x - mouse.x, n.y - mouse.y);
          if (dist < 40) {
            scale += (1 - dist / 40) * 0.6;
          }
        }

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.size * scale, 0, Math.PI * 2);
        ctx.fillStyle = isHovered ? '#22d3ee' : '#0891b2';
        ctx.shadowBlur = isHovered ? 8 : 2;
        ctx.shadowColor = '#06b6d4';
        ctx.fill();
      });

      ctx.restore();
      requestAnimationFrame(loop);
    }
    loop();
  </script>
</body>
</html>`,
  "code": `"use client";

import React, { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface BioluminescentSynapticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function BioluminescentSynapticButton({
  children,
  className,
  ...props
}: BioluminescentSynapticButtonProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const btn = buttonRef.current;
    if (!canvas || !btn) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const w = 220;
    const h = 60;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.scale(dpr, dpr);

    interface SynNode {
      x: number;
      y: number;
      size: number;
      pulsePhase: number;
    }

    const nodes: SynNode[] = [];
    let isHovered = false;
    let mouse = { x: -999, y: -999 };
    let signalTime = 0;
    let clickSignal = false;

    const nodeCoords = [
      { x: 35, y: 15 }, { x: 75, y: 45 }, { x: 110, y: 18 },
      { x: 145, y: 42 }, { x: 185, y: 16 }, { x: 110, y: 48 }
    ];

    nodeCoords.forEach((c) => {
      nodes.push({
        x: c.x,
        y: c.y,
        size: Math.random() * 2 + 2.5,
        pulsePhase: Math.random() * Math.PI,
      });
    });

    const handleMouseMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      mouse.x = e.clientX - rect.left + 10;
      mouse.y = e.clientY - rect.top + 5;
      isHovered = true;
    };

    const handleMouseEnter = () => { isHovered = true; };
    const handleMouseLeave = () => { isHovered = false; mouse = { x: -999, y: -999 }; };

    const handleClick = () => {
      clickSignal = true;
      signalTime = 0;
    };

    btn.addEventListener("mousemove", handleMouseMove);
    btn.addEventListener("mouseenter", handleMouseEnter);
    btn.addEventListener("mouseleave", handleMouseLeave);
    btn.addEventListener("click", handleClick);

    let animId: number;
    const loop = () => {
      ctx.clearRect(0, 0, w, h);

      if (clickSignal) {
        signalTime += 0.04;
        if (signalTime > 1.2) clickSignal = false;
      }

      ctx.save();
      ctx.strokeStyle = "rgba(6, 182, 212, 0.12)";
      ctx.lineWidth = 1.0;

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          if (Math.hypot(dx, dy) < 85) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();

            if (isHovered || clickSignal) {
              let t = ((Date.now() * 0.0035 + i) % 1);
              if (clickSignal) t = signalTime % 1;

              const px = nodes[i].x + (nodes[j].x - nodes[i].x) * t;
              const py = nodes[i].y + (nodes[j].y - nodes[i].y) * t;

              ctx.beginPath();
              ctx.arc(px, py, 1.5, 0, Math.PI * 2);
              ctx.fillStyle = clickSignal ? "#a855f7" : "#22d3ee";
              ctx.shadowBlur = 4;
              ctx.shadowColor = ctx.fillStyle;
              ctx.fill();
            }
          }
        }
      }

      nodes.forEach((n) => {
        n.pulsePhase += 0.06;
        let scale = 1.0 + Math.sin(n.pulsePhase) * 0.2;

        if (isHovered && mouse.x > 0) {
          const dist = Math.hypot(n.x - mouse.x, n.y - mouse.y);
          if (dist < 40) {
            scale += (1 - dist / 40) * 0.6;
          }
        }

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.size * scale, 0, Math.PI * 2);
        ctx.fillStyle = isHovered ? "#22d3ee" : "#0891b2";
        ctx.shadowBlur = isHovered ? 8 : 2;
        ctx.shadowColor = "#06b6d4";
        ctx.fill();
      });

      ctx.restore();
      animId = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      cancelAnimationFrame(animId);
      btn.removeEventListener("mousemove", handleMouseMove);
      btn.removeEventListener("mouseenter", handleMouseEnter);
      btn.removeEventListener("mouseleave", handleMouseLeave);
      btn.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-[220px] h-[60px] flex items-center justify-center bg-transparent group">
      <button
        ref={buttonRef}
        className={cn(
          "relative w-[200px] h-[50px] bg-[#01060c]/70 border border-cyan-500/15 rounded text-cyan-400 text-[11px] font-bold tracking-[0.25em] uppercase cursor-pointer z-10 flex items-center justify-center backdrop-blur-md overflow-hidden transition-all duration-300 hover:text-cyan-300 hover:border-cyan-500/45 hover:shadow-[0_0_30px_rgba(6,182,212,0.2),inset_0_1px_1px_rgba(6,182,212,0.3)] active:scale-95",
          "before:content-[''] before:absolute before:top-0 before:left-[-150%] before:w-full before:height-full before:bg-[linear-gradient(90deg,transparent,rgba(6,182,212,0.05)_30%,rgba(6,182,212,0.25)_50%,rgba(168,85,247,0.1)_70%,transparent)] before:animate-[sweep_4_cubic-bezier(0.25,1,0.5,1)_infinite] before:z-0",
          className
        )}
        {...props}
      >
        <span className="relative z-20 pointer-events-none">{children}</span>
      </button>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />
    </div>
  );
}
`,
  "prompt": "Create an advanced Bioluminescent Neural Synaptic Grid Button. The layout displays a deep cyan organic framework. Inside the 2D canvas overlay, an interconnected network of neural nodes and axonal connections pulsate action potentials. Hovering deforms and enlarges nodes, and clicking triggers a vibrant violet synapse thoughts burst.",
  "likes": 0,
  "author": "Animation AI",
  "featured": true,
  "createdAt": "2026-05-21T10:00:00.000Z",
  "updatedAt": "2026-05-21T10:00:00.000Z"
}, {
  "slug": "interactive-ferrofluid-button",
  "title": "Ferrofluid Button",
  "category": "buttons",
  "tag": "canvas",
  "description": "A high-end dark laboratory physics button featuring a metallic black liquid ferrofluid blob that spikes aggressively under magnetic mouse pointer actions.",
  "previewCode": `<!DOCTYPE html>
<html>
<head>
  <style>
    body, html {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      background: #020202;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Inter', sans-serif;
    }
    .btn-container {
      position: relative;
      width: 220px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    canvas {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 2;
    }
    .ferrofluid-btn {
      position: relative;
      width: 200px;
      height: 50px;
      background: rgba(15, 15, 15, 0.7);
      border: 1px solid rgba(255, 255, 255, 0.12);
      border-radius: 4px;
      color: rgba(255, 255, 255, 0.85);
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      cursor: pointer;
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      backdrop-filter: blur(16px);
      box-shadow: 
        inset 0 1px 1px rgba(255, 255, 255, 0.05),
        0 10px 30px rgba(0, 0, 0, 0.6);
      overflow: hidden;
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .ferrofluid-btn::before {
      content: '';
      position: absolute;
      top: 0;
      left: -150%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.05) 30%,
        rgba(255, 255, 255, 0.2) 50%,
        rgba(255, 255, 255, 0.05) 70%,
        transparent
      );
      animation: sweep 4s cubic-bezier(0.25, 1, 0.5, 1) infinite;
      z-index: 0;
    }
    .ferrofluid-btn:hover {
      color: #ffffff;
      border-color: rgba(255, 255, 255, 0.4);
      box-shadow: 
        0 0 30px rgba(255, 255, 255, 0.15),
        inset 0 1px 1px rgba(255, 255, 255, 0.2);
    }
    .ferrofluid-btn:active {
      transform: scale(0.97);
    }
    .btn-text {
      position: relative;
      z-index: 3;
      pointer-events: none;
    }
    @keyframes sweep {
      0% { left: -150%; }
      50% { left: 150%; }
      100% { left: 150%; }
    }
  </style>
</head>
<body>
  <div class="btn-container">
    <button class="ferrofluid-btn" id="ferrofluidBtn">
      <span class="btn-text">Ferrofluid</span>
    </button>
    <canvas id="ferrofluidCanvas"></canvas>
  </div>

  <script>
    const canvas = document.getElementById('ferrofluidCanvas');
    const ctx = canvas.getContext('2d');
    const btn = document.getElementById('ferrofluidBtn');

    let w = 220;
    let h = 60;
    
    const dpr = window.devicePixelRatio || 1;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.scale(dpr, dpr);

    let isHovered = false;
    let mouse = { x: -999, y: -999 };
    let pulseTime = 0;
    let polarizationActive = false;
    let polarizationTime = 0;

    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      mouse.x = e.clientX - rect.left + 10;
      mouse.y = e.clientY - rect.top + 5;
      isHovered = true;
    });

    btn.addEventListener('mouseenter', () => { isHovered = true; });
    btn.addEventListener('mouseleave', () => { isHovered = false; mouse = { x: -999, y: -999 }; });

    btn.addEventListener('click', (e) => {
      polarizationActive = true;
      polarizationTime = 0;
    });

    function loop() {
      ctx.clearRect(0, 0, w, h);
      pulseTime += 0.05;

      if (polarizationActive) {
        polarizationTime += 0.05;
        if (polarizationTime > 1.2) polarizationActive = false;
      }

      ctx.save();
      ctx.beginPath();

      const blobCenterY = 30;
      const blobCenterX = 110;
      const baseRadius = 18;

      // Draw spiked ferrofluid organic outline
      for (let angle = 0; angle < Math.PI * 2; angle += 0.05) {
        let currentRadius = baseRadius + Math.sin(angle * 8 + pulseTime) * 1.5;

        // Pull and spike outline towards mouse magnetic direction
        if (isHovered && mouse.x > 0) {
          const px = blobCenterX + Math.cos(angle) * baseRadius;
          const py = blobCenterY + Math.sin(angle) * baseRadius;
          const dx = mouse.x - px;
          const dy = mouse.y - py;
          const dist = Math.hypot(dx, dy);

          if (dist < 55) {
            const angleToMouse = Math.atan2(mouse.y - blobCenterY, mouse.x - blobCenterX);
            const diffAngle = Math.abs(angle - angleToMouse);
            if (diffAngle < 0.45) {
              currentRadius += (1 - dist / 55) * 15;
            }
          }
        }

        if (polarizationActive) {
          currentRadius += Math.sin(polarizationTime * Math.PI) * 12 * Math.sin(angle * 12);
        }

        const sx = blobCenterX + Math.cos(angle) * currentRadius;
        const sy = blobCenterY + Math.sin(angle) * currentRadius;

        if (angle === 0) ctx.moveTo(sx, sy);
        else ctx.lineTo(sx, sy);
      }

      ctx.closePath();

      // Shiny dark gradient for liquid chrome/ferrofluid look
      let grad = ctx.createRadialGradient(blobCenterX - 4, blobCenterY - 4, 2, blobCenterX, blobCenterY, 30);
      grad.addColorStop(0, '#374151');
      grad.addColorStop(0.5, '#111827');
      grad.addColorStop(1, '#030712');

      ctx.fillStyle = grad;
      ctx.shadowBlur = isHovered ? 8 : 2;
      ctx.shadowColor = 'rgba(255, 255, 255, 0.25)';
      ctx.fill();

      ctx.restore();
      requestAnimationFrame(loop);
    }
    loop();
  </script>
</body>
</html>`,
  "code": `"use client";

import React, { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface InteractiveFerrofluidButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function InteractiveFerrofluidButton({
  children,
  className,
  ...props
}: InteractiveFerrofluidButtonProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const btn = buttonRef.current;
    if (!canvas || !btn) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const w = 220;
    const h = 60;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.scale(dpr, dpr);

    let isHovered = false;
    let mouse = { x: -999, y: -999 };
    let pulseTime = 0;
    let polarizationActive = false;
    let polarizationTime = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      mouse.x = e.clientX - rect.left + 10;
      mouse.y = e.clientY - rect.top + 5;
      isHovered = true;
    };

    const handleMouseEnter = () => { isHovered = true; };
    const handleMouseLeave = () => { isHovered = false; mouse = { x: -999, y: -999 }; };

    const handleClick = () => {
      polarizationActive = true;
      polarizationTime = 0;
    };

    btn.addEventListener("mousemove", handleMouseMove);
    btn.addEventListener("mouseenter", handleMouseEnter);
    btn.addEventListener("mouseleave", handleMouseLeave);
    btn.addEventListener("click", handleClick);

    let animId: number;
    const loop = () => {
      ctx.clearRect(0, 0, w, h);
      pulseTime += 0.05;

      if (polarizationActive) {
        polarizationTime += 0.05;
        if (polarizationTime > 1.2) polarizationActive = false;
      }

      ctx.save();
      ctx.save();
      ctx.beginPath();

      const blobCenterY = 30;
      const blobCenterX = 110;
      const baseRadius = 18;

      for (let angle = 0; angle < Math.PI * 2; angle += 0.05) {
        let currentRadius = baseRadius + Math.sin(angle * 8 + pulseTime) * 1.5;

        if (isHovered && mouse.x > 0) {
          const px = blobCenterX + Math.cos(angle) * baseRadius;
          const py = blobCenterY + Math.sin(angle) * baseRadius;
          const dx = mouse.x - px;
          const dy = mouse.y - py;
          const dist = Math.hypot(dx, dy);

          if (dist < 55) {
            const angleToMouse = Math.atan2(mouse.y - blobCenterY, mouse.x - blobCenterX);
            const diffAngle = Math.abs(angle - angleToMouse);
            if (diffAngle < 0.45) {
              currentRadius += (1 - dist / 55) * 15;
            }
          }
        }

        if (polarizationActive) {
          currentRadius += Math.sin(polarizationTime * Math.PI) * 12 * Math.sin(angle * 12);
        }

        const sx = blobCenterX + Math.cos(angle) * currentRadius;
        const sy = blobCenterY + Math.sin(angle) * currentRadius;

        if (angle === 0) ctx.moveTo(sx, sy);
        else ctx.lineTo(sx, sy);
      }

      ctx.closePath();

      const grad = ctx.createRadialGradient(
        blobCenterX - 4,
        blobCenterY - 4,
        2,
        blobCenterX,
        blobCenterY,
        30
      );
      grad.addColorStop(0, "#374151");
      grad.addColorStop(0.5, "#111827");
      grad.addColorStop(1, "#030712");

      ctx.fillStyle = grad;
      ctx.shadowBlur = isHovered ? 8 : 2;
      ctx.shadowColor = "rgba(255, 255, 255, 0.25)";
      ctx.fill();
      ctx.restore();

      animId = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      cancelAnimationFrame(animId);
      btn.removeEventListener("mousemove", handleMouseMove);
      btn.removeEventListener("mouseenter", handleMouseEnter);
      btn.removeEventListener("mouseleave", handleMouseLeave);
      btn.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-[220px] h-[60px] flex items-center justify-center bg-transparent group">
      <button
        ref={buttonRef}
        className={cn(
          "relative w-[200px] h-[50px] bg-[#0c0c0c]/70 border border-white/10 rounded text-white/80 text-[11px] font-bold tracking-[0.25em] uppercase cursor-pointer z-10 flex items-center justify-center backdrop-blur-md overflow-hidden transition-all duration-300 hover:text-white hover:border-white/40 hover:shadow-[0_0_30px_rgba(255,255,255,0.15),inset_0_1px_1px_rgba(255,255,255,0.2)] active:scale-95",
          "before:content-[''] before:absolute before:top-0 before:left-[-150%] before:w-full before:height-full before:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.05)_30%,rgba(255,255,255,0.2)_50%,rgba(255,255,255,0.05)_70%,transparent)] before:animate-[sweep_4_cubic-bezier(0.25,1,0.5,1)_infinite] before:z-0",
          className
        )}
        {...props}
      >
        <span className="relative z-20 pointer-events-none">{children}</span>
      </button>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />
    </div>
  );
}
`,
  "prompt": "Create an advanced Magnetic Iron Fluid Ferrofluid Blob Button. The layout displays a dark experimental chrome frame. Inside the 2D canvas overlay runs an organic liquid blob. Hovering deforms and shapes magnetic spiked outlines pointing towards coordinates, and clicking triggers polar inversion spike ripples.",
  "likes": 0,
  "author": "Animation AI",
  "featured": true,
  "createdAt": "2026-05-21T10:00:00.000Z",
  "updatedAt": "2026-05-21T10:00:00.000Z"
}, {
  "slug": "subatomic-orbital-button",
  "title": "Subatomic Button",
  "category": "buttons",
  "tag": "canvas",
  "description": "A physics theme button featuring subatomic electrons that revolve fast inside intersecting orbital shell loops.",
  "previewCode": `<!DOCTYPE html>
<html>
<head>
  <style>
    body, html {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      background: #020104;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Inter', sans-serif;
    }
    .btn-container {
      position: relative;
      width: 220px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    canvas {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 2;
    }
    .orbital-btn {
      position: relative;
      width: 200px;
      height: 50px;
      background: rgba(10, 2, 15, 0.7);
      border: 1px solid rgba(236, 72, 153, 0.15);
      border-radius: 25px;
      color: rgba(236, 72, 153, 0.85);
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      cursor: pointer;
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      backdrop-filter: blur(16px);
      box-shadow: 
        inset 0 1px 1px rgba(255, 255, 255, 0.05),
        0 10px 30px rgba(0, 0, 0, 0.6);
      overflow: hidden;
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .orbital-btn::before {
      content: '';
      position: absolute;
      top: 0;
      left: -150%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(236, 72, 153, 0.05) 30%,
        rgba(236, 72, 153, 0.2) 50%,
        rgba(6, 182, 212, 0.1) 70%,
        transparent
      );
      animation: sweep 4s cubic-bezier(0.25, 1, 0.5, 1) infinite;
      z-index: 0;
    }
    .orbital-btn:hover {
      color: #f472b6;
      border-color: rgba(236, 72, 153, 0.45);
      box-shadow: 
        0 0 30px rgba(236, 72, 153, 0.2),
        inset 0 1px 1px rgba(236, 72, 153, 0.3);
    }
    .orbital-btn:active {
      transform: scale(0.97);
    }
    .btn-text {
      position: relative;
      z-index: 3;
      pointer-events: none;
    }
    @keyframes sweep {
      0% { left: -150%; }
      50% { left: 150%; }
      100% { left: 150%; }
    }
  </style>
</head>
<body>
  <div class="btn-container">
    <button class="orbital-btn" id="orbitalBtn">
      <span class="btn-text">Orbital Shell</span>
    </button>
    <canvas id="orbitalCanvas"></canvas>
  </div>

  <script>
    const canvas = document.getElementById('orbitalCanvas');
    const ctx = canvas.getContext('2d');
    const btn = document.getElementById('orbitalBtn');

    let w = 220;
    let h = 60;
    
    const dpr = window.devicePixelRatio || 1;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.scale(dpr, dpr);

    let isHovered = false;
    let mouse = { x: -999, y: -999 };
    let time = 0;
    let quantumActive = false;
    let quantumTime = 0;

    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      mouse.x = e.clientX - rect.left + 10;
      mouse.y = e.clientY - rect.top + 5;
      isHovered = true;
    });

    btn.addEventListener('mouseenter', () => { isHovered = true; });
    btn.addEventListener('mouseleave', () => { isHovered = false; mouse = { x: -999, y: -999 }; });

    btn.addEventListener('click', (e) => {
      quantumActive = true;
      quantumTime = 0;
    });

    function loop() {
      ctx.clearRect(0, 0, w, h);
      time += 0.08;

      if (quantumActive) {
        quantumTime += 0.05;
        if (quantumTime > 1) quantumActive = false;
      }

      ctx.save();
      
      // Central nucleus
      ctx.beginPath();
      ctx.arc(110, 30, 4.5, 0, Math.PI * 2);
      ctx.fillStyle = '#ec4899';
      ctx.shadowBlur = 8;
      ctx.shadowColor = '#ec4899';
      ctx.fill();

      // Intersecting orbital paths (3 shells)
      for (let s = 0; s < 3; s++) {
        ctx.save();
        ctx.translate(110, 30);
        ctx.rotate((s * 60) * Math.PI / 180);

        // Path curve
        ctx.beginPath();
        ctx.ellipse(0, 0, 35, 12, 0, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(6, 182, 212, 0.15)';
        ctx.lineWidth = 0.8;
        ctx.stroke();

        // Traveling subatomic Electron
        let eAngle = time + s * 1.5;
        if (isHovered) eAngle += 0.08;

        let ex = Math.cos(eAngle) * 35;
        let ey = Math.sin(eAngle) * 12;

        if (quantumActive) {
          const factor = Math.sin(quantumTime * Math.PI) * 12;
          ex += Math.cos(time * 5) * factor;
          ey += Math.sin(time * 5) * factor;
        }

        ctx.beginPath();
        ctx.arc(ex, ey, 2.2, 0, Math.PI * 2);
        ctx.fillStyle = '#06b6d4';
        ctx.shadowBlur = 6;
        ctx.shadowColor = '#06b6d4';
        ctx.fill();

        ctx.restore();
      }

      ctx.restore();
      requestAnimationFrame(loop);
    }
    loop();
  </script>
</body>
</html>`,
  "code": `"use client";

import React, { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface SubatomicOrbitalShellButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function SubatomicOrbitalShellButton({
  children,
  className,
  ...props
}: SubatomicOrbitalShellButtonProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const btn = buttonRef.current;
    if (!canvas || !btn) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const w = 220;
    const h = 60;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.scale(dpr, dpr);

    let isHovered = false;
    let mouse = { x: -999, y: -999 };
    let time = 0;
    let quantumActive = false;
    let quantumTime = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      mouse.x = e.clientX - rect.left + 10;
      mouse.y = e.clientY - rect.top + 5;
      isHovered = true;
    };

    const handleMouseEnter = () => { isHovered = true; };
    const handleMouseLeave = () => { isHovered = false; mouse = { x: -999, y: -999 }; };

    const handleClick = () => {
      quantumActive = true;
      quantumTime = 0;
    };

    btn.addEventListener("mousemove", handleMouseMove);
    btn.addEventListener("mouseenter", handleMouseEnter);
    btn.addEventListener("mouseleave", handleMouseLeave);
    btn.addEventListener("click", handleClick);

    let animId: number;
    const loop = () => {
      ctx.clearRect(0, 0, w, h);
      time += 0.08;

      if (quantumActive) {
        quantumTime += 0.05;
        if (quantumTime > 1) quantumActive = false;
      }

      ctx.save();

      ctx.beginPath();
      ctx.arc(110, 30, 4.5, 0, Math.PI * 2);
      ctx.fillStyle = "#ec4899";
      ctx.shadowBlur = 8;
      ctx.shadowColor = "#ec4899";
      ctx.fill();

      for (let s = 0; s < 3; s++) {
        ctx.save();
        ctx.translate(110, 30);
        ctx.rotate((s * 60 * Math.PI) / 180);

        ctx.beginPath();
        ctx.ellipse(0, 0, 35, 12, 0, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(6, 182, 212, 0.15)";
        ctx.lineWidth = 0.8;
        ctx.stroke();

        let eAngle = time + s * 1.5;
        if (isHovered) eAngle += 0.08;

        let ex = Math.cos(eAngle) * 35;
        let ey = Math.sin(eAngle) * 12;

        if (quantumActive) {
          const factor = Math.sin(quantumTime * Math.PI) * 12;
          ex += Math.cos(time * 5) * factor;
          ey += Math.sin(time * 5) * factor;
        }

        ctx.beginPath();
        ctx.arc(ex, ey, 2.2, 0, Math.PI * 2);
        ctx.fillStyle = "#06b6d4";
        ctx.shadowBlur = 6;
        ctx.shadowColor = "#06b6d4";
        ctx.fill();

        ctx.restore();
      }

      ctx.restore();
      animId = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      cancelAnimationFrame(animId);
      btn.removeEventListener("mousemove", handleMouseMove);
      btn.removeEventListener("mouseenter", handleMouseEnter);
      btn.removeEventListener("mouseleave", handleMouseLeave);
      btn.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-[220px] h-[60px] flex items-center justify-center bg-transparent group">
      <button
        ref={buttonRef}
        className={cn(
          "relative w-[200px] h-[50px] bg-[#0a020f]/70 border border-pink-500/15 rounded-full text-pink-500/85 text-[11px] font-bold tracking-[0.25em] uppercase cursor-pointer z-10 flex items-center justify-center backdrop-blur-md overflow-hidden transition-all duration-300 hover:text-pink-400 hover:border-pink-500/45 hover:shadow-[0_0_30px_rgba(236,72,153,0.2),inset_0_1px_1px_rgba(236,72,153,0.3)] active:scale-95",
          "before:content-[''] before:absolute before:top-0 before:left-[-150%] before:w-full before:height-full before:bg-[linear-gradient(90deg,transparent,rgba(236,72,153,0.05)_30%,rgba(236,72,153,0.2)_50%,rgba(6,182,212,0.1)_70%,transparent)] before:animate-[sweep_4_cubic-bezier(0.25,1,0.5,1)_infinite] before:z-0",
          className
        )}
        {...props}
      >
        <span className="relative z-20 pointer-events-none">{children}</span>
      </button>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />
    </div>
  );
}
`,
  "prompt": "Create an advanced Subatomic Electron Orbital Shell Button. The layout displays an orbital hot pink shell framework. Inside the 2D canvas overlay run intersecting atomic orbit paths with traveling subatomic electrons. Hovering speeds up the electrons spin, and clicking triggers a quantum energy state transition flash.",
  "likes": 0,
  "author": "Animation AI",
  "featured": true,
  "createdAt": "2026-05-21T10:00:00.000Z",
  "updatedAt": "2026-05-21T10:00:00.000Z"
}, {
  "slug": "aurora-plasma-wave-button",
  "title": "Aurora Wave Button",
  "category": "buttons",
  "tag": "canvas",
  "description": "A breathtaking northern-lights button featuring shimmering aurora plasma ribbons that ripple and billow dynamically toward the cursor.",
  "previewCode": `<!DOCTYPE html>
<html>
<head>
  <style>
    body, html {
      margin: 0; padding: 0;
      width: 100%; height: 100%;
      overflow: hidden;
      background: #010308;
      display: flex; align-items: center; justify-content: center;
      font-family: 'Inter', sans-serif;
    }
    .btn-container {
      position: relative; width: 220px; height: 60px;
      display: flex; align-items: center; justify-content: center;
    }
    canvas {
      position: absolute; top: 0; left: 0;
      width: 100%; height: 100%;
      pointer-events: none; z-index: 2;
    }
    .aurora-btn {
      position: relative; width: 200px; height: 50px;
      background: rgba(2, 8, 20, 0.75);
      border: 1px solid rgba(52, 211, 153, 0.18);
      border-radius: 6px;
      color: rgba(52, 211, 153, 0.9);
      font-size: 11px; font-weight: 700;
      letter-spacing: 0.25em; text-transform: uppercase;
      cursor: pointer; z-index: 1;
      display: flex; align-items: center; justify-content: center;
      backdrop-filter: blur(16px);
      box-shadow: inset 0 1px 1px rgba(255,255,255,0.04), 0 10px 30px rgba(0,0,0,0.6);
      overflow: hidden;
      transition: all 0.3s cubic-bezier(0.16,1,0.3,1);
    }
    .aurora-btn::before {
      content: ''; position: absolute; top: 0; left: -150%;
      width: 100%; height: 100%;
      background: linear-gradient(90deg,transparent,rgba(52,211,153,0.07) 30%,rgba(52,211,153,0.22) 50%,rgba(6,182,212,0.08) 70%,transparent);
      animation: sweep 4s cubic-bezier(0.25,1,0.5,1) infinite; z-index: 0;
    }
    .aurora-btn:hover { color: #6ee7b7; border-color: rgba(52,211,153,0.5); box-shadow: 0 0 28px rgba(52,211,153,0.18), inset 0 1px 1px rgba(52,211,153,0.25); }
    .aurora-btn:active { transform: scale(0.97); }
    .btn-text { position: relative; z-index: 3; pointer-events: none; }
    @keyframes sweep { 0%{left:-150%} 50%{left:150%} 100%{left:150%} }
  </style>
</head>
<body>
  <div class="btn-container">
    <button class="aurora-btn" id="auroraBtn"><span class="btn-text">Aurora</span></button>
    <canvas id="auroraCanvas"></canvas>
  </div>
  <script>
    const canvas = document.getElementById('auroraCanvas');
    const ctx = canvas.getContext('2d');
    const btn = document.getElementById('auroraBtn');
    const W = 220, H = 60;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = W * dpr; canvas.height = H * dpr;
    ctx.scale(dpr, dpr);

    let isHovered = false, mouse = {x: 110, y: 30}, t = 0, burstT = 0, burst = false;

    const RIBBONS = [
      { amp: 7, freq: 0.022, speed: 1.1, yBase: 20, color: '#34d399' },
      { amp: 6, freq: 0.028, speed: 0.85, yBase: 30, color: '#06b6d4' },
      { amp: 5, freq: 0.018, speed: 1.3, yBase: 40, color: '#818cf8' },
    ];

    btn.addEventListener('mousemove', e => {
      const r = btn.getBoundingClientRect();
      mouse = { x: e.clientX - r.left + 10, y: e.clientY - r.top + 5 };
      isHovered = true;
    });
    btn.addEventListener('mouseenter', () => isHovered = true);
    btn.addEventListener('mouseleave', () => { isHovered = false; mouse = {x:110,y:30}; });
    btn.addEventListener('click', () => { burst = true; burstT = 0; });

    function loop() {
      ctx.clearRect(0, 0, W, H);
      t += 0.04;
      if (burst) { burstT += 0.06; if (burstT > 1) burst = false; }

      RIBBONS.forEach((rb, ri) => {
        ctx.beginPath();
        for (let x = 0; x <= W; x += 2) {
          let y = rb.yBase + Math.sin(x * rb.freq + t * rb.speed) * rb.amp;

          // Cursor pull — ribbon bends toward mouse.y
          if (isHovered) {
            const dx = Math.abs(x - mouse.x);
            if (dx < 55) y += (mouse.y - rb.yBase) * (1 - dx / 55) * 0.45;
          }
          if (burst) y += Math.sin(x * 0.07 + burstT * 8) * 10 * Math.sin(burstT * Math.PI);

          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }

        ctx.lineWidth = 1.6 - ri * 0.25;
        ctx.strokeStyle = rb.color;
        ctx.shadowBlur = isHovered ? 10 : 3;
        ctx.shadowColor = rb.color;
        ctx.globalAlpha = 0.6 + (isHovered ? 0.3 : 0);
        ctx.stroke();
        ctx.globalAlpha = 1;
      });

      requestAnimationFrame(loop);
    }
    loop();
  </script>
</body>
</html>`,
  "code": `"use client";

import React, { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface AuroraPlasmaWaveButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function AuroraPlasmaWaveButton({
  children, className, ...props
}: AuroraPlasmaWaveButtonProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef   = useRef<HTMLCanvasElement>(null);
  const buttonRef   = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const btn    = buttonRef.current;
    if (!canvas || !btn) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = 220, H = 60;
    const dpr = window.devicePixelRatio || 1;
    canvas.width  = W * dpr;
    canvas.height = H * dpr;
    ctx.scale(dpr, dpr);

    const RIBBONS = [
      { amp: 7, freq: 0.022, speed: 1.1, yBase: 20, color: "#34d399" },
      { amp: 6, freq: 0.028, speed: 0.85, yBase: 30, color: "#06b6d4" },
      { amp: 5, freq: 0.018, speed: 1.3,  yBase: 40, color: "#818cf8" },
    ];

    let isHovered = false;
    let mouse = { x: 110, y: 30 };
    let t = 0, burstT = 0, burst = false;

    const onMove  = (e: MouseEvent) => { const r = btn.getBoundingClientRect(); mouse = { x: e.clientX - r.left + 10, y: e.clientY - r.top + 5 }; isHovered = true; };
    const onEnter = () => (isHovered = true);
    const onLeave = () => { isHovered = false; mouse = { x: 110, y: 30 }; };
    const onClick = () => { burst = true; burstT = 0; };

    btn.addEventListener("mousemove",  onMove);
    btn.addEventListener("mouseenter", onEnter);
    btn.addEventListener("mouseleave", onLeave);
    btn.addEventListener("click",      onClick);

    let animId: number;
    const loop = () => {
      ctx.clearRect(0, 0, W, H);
      t += 0.04;
      if (burst) { burstT += 0.06; if (burstT > 1) burst = false; }

      RIBBONS.forEach((rb, ri) => {
        ctx.beginPath();
        for (let x = 0; x <= W; x += 2) {
          let y = rb.yBase + Math.sin(x * rb.freq + t * rb.speed) * rb.amp;
          if (isHovered) {
            const dx = Math.abs(x - mouse.x);
            if (dx < 55) y += (mouse.y - rb.yBase) * (1 - dx / 55) * 0.45;
          }
          if (burst) y += Math.sin(x * 0.07 + burstT * 8) * 10 * Math.sin(burstT * Math.PI);
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.lineWidth   = 1.6 - ri * 0.25;
        ctx.strokeStyle = rb.color;
        ctx.shadowBlur  = isHovered ? 10 : 3;
        ctx.shadowColor = rb.color;
        ctx.globalAlpha = 0.6 + (isHovered ? 0.3 : 0);
        ctx.stroke();
        ctx.globalAlpha = 1;
      });

      animId = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      cancelAnimationFrame(animId);
      btn.removeEventListener("mousemove",  onMove);
      btn.removeEventListener("mouseenter", onEnter);
      btn.removeEventListener("mouseleave", onLeave);
      btn.removeEventListener("click",      onClick);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-[220px] h-[60px] flex items-center justify-center bg-transparent">
      <button
        ref={buttonRef}
        className={cn(
          "relative w-[200px] h-[50px] bg-[#020814]/75 border border-emerald-400/18 rounded text-emerald-400/90 text-[11px] font-bold tracking-[0.25em] uppercase cursor-pointer z-10 flex items-center justify-center backdrop-blur-md overflow-hidden transition-all duration-300 hover:text-emerald-300 hover:border-emerald-400/50 hover:shadow-[0_0_28px_rgba(52,211,153,0.18)] active:scale-95",
          className
        )}
        {...props}
      >
        <span className="relative z-20 pointer-events-none">{children}</span>
      </button>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />
    </div>
  );
}
`,
  "prompt": "Create an advanced Aurora Borealis Plasma Wave Button. Three shimmering aurora ribbons (emerald, cyan, indigo) undulate across the button in constant sine motion. Hovering bends the ribbons toward the cursor like a magnetic field pulling plasma sheets. Clicking erupts a high-frequency ripple burst across all three ribbons.",
  "likes": 0,
  "author": "Animation AI",
  "featured": true,
  "createdAt": "2026-05-21T10:00:00.000Z",
  "updatedAt": "2026-05-21T10:00:00.000Z"
}, {
  "slug": "digital-rain-matrix-button",
  "title": "Matrix Rain Button",
  "category": "buttons",
  "tag": "canvas",
  "description": "A cyberpunk Matrix-inspired button where columns of falling katakana glyphs accelerate on hover and explode outward on click.",
  "previewCode": `<!DOCTYPE html>
<html>
<head>
  <style>
    body, html {
      margin: 0; padding: 0;
      width: 100%; height: 100%;
      overflow: hidden;
      background: #010501;
      display: flex; align-items: center; justify-content: center;
      font-family: 'Inter', sans-serif;
    }
    .btn-container {
      position: relative; width: 220px; height: 60px;
      display: flex; align-items: center; justify-content: center;
    }
    canvas {
      position: absolute; top: 0; left: 0;
      width: 100%; height: 100%;
      pointer-events: none; z-index: 2;
    }
    .matrix-btn {
      position: relative; width: 200px; height: 50px;
      background: rgba(1, 8, 2, 0.75);
      border: 1px solid rgba(74, 222, 128, 0.18);
      border-radius: 4px;
      color: rgba(74, 222, 128, 0.9);
      font-size: 11px; font-weight: 700;
      letter-spacing: 0.25em; text-transform: uppercase;
      cursor: pointer; z-index: 1;
      display: flex; align-items: center; justify-content: center;
      backdrop-filter: blur(12px);
      box-shadow: inset 0 1px 1px rgba(255,255,255,0.04), 0 10px 30px rgba(0,0,0,0.7);
      overflow: hidden;
      transition: all 0.3s cubic-bezier(0.16,1,0.3,1);
    }
    .matrix-btn::before {
      content: ''; position: absolute; top: 0; left: -150%;
      width: 100%; height: 100%;
      background: linear-gradient(90deg,transparent,rgba(74,222,128,0.06) 30%,rgba(74,222,128,0.2) 50%,rgba(74,222,128,0.06) 70%,transparent);
      animation: sweep 4s cubic-bezier(0.25,1,0.5,1) infinite; z-index: 0;
    }
    .matrix-btn:hover { color: #86efac; border-color: rgba(74,222,128,0.5); box-shadow: 0 0 28px rgba(74,222,128,0.18), inset 0 1px 1px rgba(74,222,128,0.2); }
    .matrix-btn:active { transform: scale(0.97); }
    .btn-text { position: relative; z-index: 3; pointer-events: none; }
    @keyframes sweep { 0%{left:-150%} 50%{left:150%} 100%{left:150%} }
  </style>
</head>
<body>
  <div class="btn-container">
    <button class="matrix-btn" id="matrixBtn"><span class="btn-text">Matrix</span></button>
    <canvas id="matrixCanvas"></canvas>
  </div>
  <script>
    const canvas = document.getElementById('matrixCanvas');
    const ctx = canvas.getContext('2d');
    const btn = document.getElementById('matrixBtn');
    const W = 220, H = 60;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = W * dpr; canvas.height = H * dpr;
    ctx.scale(dpr, dpr);

    const CHARS = 'ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ';
    const COL_W = 10;
    const COLS = Math.floor(W / COL_W);

    let isHovered = false, burst = false, burstT = 0;
    const drops = Array.from({length: COLS}, () => Math.random() * -H);
    const speeds = Array.from({length: COLS}, () => 0.5 + Math.random() * 0.8);

    btn.addEventListener('mouseenter', () => isHovered = true);
    btn.addEventListener('mouseleave', () => isHovered = false);
    btn.addEventListener('click', () => { burst = true; burstT = 0; });

    ctx.font = '8px monospace';

    function loop() {
      // Faint trail fade
      ctx.fillStyle = 'rgba(1,8,2,0.35)';
      ctx.fillRect(0, 0, W, H);

      if (burst) { burstT += 0.055; if (burstT > 1) burst = false; }

      drops.forEach((y, i) => {
        const ch = CHARS[Math.floor(Math.random() * CHARS.length)];
        const x = i * COL_W;

        let alpha = 0.55;
        if (isHovered) alpha = 0.9;
        if (burst) alpha = 0.4 + Math.sin(burstT * Math.PI) * 0.6;

        ctx.fillStyle = i % 5 === 0
          ? 'rgba(134,239,172,' + alpha + ')'
          : 'rgba(74,222,128,'  + alpha + ')';
        ctx.shadowBlur  = isHovered ? 6 : 1;
        ctx.shadowColor = '#4ade80';
        ctx.fillText(ch, x + 1, y);

        const speed = speeds[i] * (isHovered ? 2.8 : 1) * (burst ? 3.5 : 1);
        drops[i] += speed;
        if (drops[i] > H + 10) drops[i] = -8 - Math.random() * 20;
      });

      requestAnimationFrame(loop);
    }
    loop();
  </script>
</body>
</html>`,
  "code": `"use client";

import React, { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface DigitalRainMatrixButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function DigitalRainMatrixButton({
  children, className, ...props
}: DigitalRainMatrixButtonProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef    = useRef<HTMLCanvasElement>(null);
  const buttonRef    = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const btn    = buttonRef.current;
    if (!canvas || !btn) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = 220, H = 60;
    const dpr = window.devicePixelRatio || 1;
    canvas.width  = W * dpr;
    canvas.height = H * dpr;
    ctx.scale(dpr, dpr);

    const CHARS  = "ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ";
    const COL_W  = 10;
    const COLS   = Math.floor(W / COL_W);

    let isHovered = false, burst = false, burstT = 0;
    const drops  = Array.from({ length: COLS }, () => Math.random() * -H);
    const speeds = Array.from({ length: COLS }, () => 0.5 + Math.random() * 0.8);

    const onEnter = () => (isHovered = true);
    const onLeave = () => (isHovered = false);
    const onClick = () => { burst = true; burstT = 0; };

    btn.addEventListener("mouseenter", onEnter);
    btn.addEventListener("mouseleave", onLeave);
    btn.addEventListener("click",      onClick);

    ctx.font = "8px monospace";

    let animId: number;
    const loop = () => {
      ctx.fillStyle = "rgba(1,8,2,0.35)";
      ctx.fillRect(0, 0, W, H);

      if (burst) { burstT += 0.055; if (burstT > 1) burst = false; }

      drops.forEach((y, i) => {
        const ch = CHARS[Math.floor(Math.random() * CHARS.length)];
        const x  = i * COL_W;

        let alpha = isHovered ? 0.9 : 0.55;
        if (burst) alpha = 0.4 + Math.sin(burstT * Math.PI) * 0.6;

        ctx.fillStyle   = i % 5 === 0
          ? "rgba(134,239,172," + alpha + ")"
          : "rgba(74,222,128,"  + alpha + ")";
        ctx.shadowBlur  = isHovered ? 6 : 1;
        ctx.shadowColor = "#4ade80";
        ctx.fillText(ch, x + 1, y);

        const speed = speeds[i] * (isHovered ? 2.8 : 1) * (burst ? 3.5 : 1);
        drops[i] += speed;
        if (drops[i] > H + 10) drops[i] = -8 - Math.random() * 20;
      });

      animId = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      cancelAnimationFrame(animId);
      btn.removeEventListener("mouseenter", onEnter);
      btn.removeEventListener("mouseleave", onLeave);
      btn.removeEventListener("click",      onClick);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-[220px] h-[60px] flex items-center justify-center bg-transparent">
      <button
        ref={buttonRef}
        className={cn(
          "relative w-[200px] h-[50px] bg-[#010802]/75 border border-green-400/18 rounded text-green-400/90 text-[11px] font-bold tracking-[0.25em] uppercase cursor-pointer z-10 flex items-center justify-center backdrop-blur-md overflow-hidden transition-all duration-300 hover:text-green-300 hover:border-green-400/50 hover:shadow-[0_0_28px_rgba(74,222,128,0.18)] active:scale-95",
          className
        )}
        {...props}
      >
        <span className="relative z-20 pointer-events-none">{children}</span>
      </button>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />
    </div>
  );
}
`,
  "prompt": "Create an advanced Digital Rain Matrix Button. Columns of falling katakana glyphs cascade continuously across the button surface in classic Matrix green. Hovering triples their fall speed and brightens the glow. Clicking detonates a flash-burst that briefly floods all columns with maximum brightness before fading back to the ambient rain.",
  "likes": 0,
  "author": "Animation AI",
  "featured": true,
  "createdAt": "2026-05-21T10:00:00.000Z",
  "updatedAt": "2026-05-21T10:00:00.000Z"
}, {
  "slug": "lava-lamp-blob-button",
  "title": "Lava Lamp Button",
  "category": "buttons",
  "tag": "canvas",
  "description": "A hypnotic lava-lamp button where glowing metaball blobs slowly drift, merge, and separate — snapping toward the cursor on hover.",
  "previewCode": `<!DOCTYPE html>
<html>
<head>
  <style>
    body,html{margin:0;padding:0;width:100%;height:100%;overflow:hidden;background:#0d0005;display:flex;align-items:center;justify-content:center;font-family:'Inter',sans-serif}
    .btn-container{position:relative;width:220px;height:60px;display:flex;align-items:center;justify-content:center}
    canvas{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:2}
    .lava-btn{position:relative;width:200px;height:50px;background:rgba(20,2,12,0.78);border:1px solid rgba(232,72,130,0.2);border-radius:6px;color:rgba(232,72,130,0.9);font-size:11px;font-weight:700;letter-spacing:.25em;text-transform:uppercase;cursor:pointer;z-index:1;display:flex;align-items:center;justify-content:center;backdrop-filter:blur(14px);box-shadow:inset 0 1px 1px rgba(255,255,255,.04),0 10px 30px rgba(0,0,0,.6);overflow:hidden;transition:all .3s cubic-bezier(.16,1,.3,1)}
    .lava-btn::before{content:'';position:absolute;top:0;left:-150%;width:100%;height:100%;background:linear-gradient(90deg,transparent,rgba(232,72,130,.07) 30%,rgba(232,72,130,.22) 50%,rgba(168,85,247,.08) 70%,transparent);animation:sweep 4s cubic-bezier(.25,1,.5,1) infinite;z-index:0}
    .lava-btn:hover{color:#f9a8d4;border-color:rgba(232,72,130,.5);box-shadow:0 0 28px rgba(232,72,130,.2),inset 0 1px 1px rgba(232,72,130,.2)}
    .lava-btn:active{transform:scale(.97)}
    .btn-text{position:relative;z-index:3;pointer-events:none}
    @keyframes sweep{0%{left:-150%}50%{left:150%}100%{left:150%}}
  </style>
</head>
<body>
  <div class="btn-container">
    <button class="lava-btn" id="lavaBtn"><span class="btn-text">Lava Lamp</span></button>
    <canvas id="lavaCanvas"></canvas>
  </div>
  <script>
    const canvas=document.getElementById('lavaCanvas');
    const ctx=canvas.getContext('2d');
    const btn=document.getElementById('lavaBtn');
    const W=220,H=60;
    const dpr=window.devicePixelRatio||1;
    canvas.width=W*dpr;canvas.height=H*dpr;ctx.scale(dpr,dpr);

    let isHovered=false,mouse={x:110,y:30},burst=false,burstT=0;

    const blobs=[
      {x:75,y:22,vx:.25,vy:.18,r:14,hue:340},
      {x:110,y:40,vx:-.2,vy:-.22,r:12,hue:310},
      {x:150,y:20,vx:.18,vy:.25,r:11,hue:280},
      {x:55,y:40,vx:-.15,vy:.2,r:10,hue:355},
    ];

    btn.addEventListener('mousemove',e=>{const r=btn.getBoundingClientRect();mouse={x:e.clientX-r.left+10,y:e.clientY-r.top+5};isHovered=true;});
    btn.addEventListener('mouseenter',()=>isHovered=true);
    btn.addEventListener('mouseleave',()=>{isHovered=false;mouse={x:110,y:30};});
    btn.addEventListener('click',()=>{burst=true;burstT=0;});

    function loop(){
      ctx.clearRect(0,0,W,H);
      if(burst){burstT+=.06;if(burstT>1)burst=false;}

      blobs.forEach(b=>{
        // drift
        b.x+=b.vx*(burst?3:1);
        b.y+=b.vy*(burst?3:1);
        // wall bounce
        if(b.x<b.r||b.x>W-b.r)b.vx*=-1;
        if(b.y<b.r||b.y>H-b.r)b.vy*=-1;
        // hover attraction
        if(isHovered){
          b.vx+=(mouse.x-b.x)*.004;
          b.vy+=(mouse.y-b.y)*.004;
        }
        // speed cap
        const sp=Math.hypot(b.vx,b.vy);
        if(sp>1.2){b.vx=b.vx/sp*1.2;b.vy=b.vy/sp*1.2;}

        const rad=ctx.createRadialGradient(b.x-b.r*.3,b.y-b.r*.35,b.r*.05,b.x,b.y,b.r*(burst?1.6:1));
        rad.addColorStop(0,'hsla('+b.hue+',90%,75%,.95)');
        rad.addColorStop(.6,'hsla('+b.hue+',80%,50%,.6)');
        rad.addColorStop(1,'hsla('+b.hue+',70%,30%,0)');
        ctx.beginPath();
        ctx.arc(b.x,b.y,b.r*(burst?1+Math.sin(burstT*Math.PI)*.5:1),0,Math.PI*2);
        ctx.fillStyle=rad;
        ctx.shadowBlur=isHovered?16:6;
        ctx.shadowColor='hsl('+b.hue+',80%,60%)';
        ctx.fill();
      });
      requestAnimationFrame(loop);
    }
    loop();
  </script>
</body>
</html>`,
  "code": `"use client";

import React, { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface LavaLampBlobButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function LavaLampBlobButton({
  children, className, ...props
}: LavaLampBlobButtonProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef    = useRef<HTMLCanvasElement>(null);
  const buttonRef    = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const btn    = buttonRef.current;
    if (!canvas || !btn) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = 220, H = 60;
    const dpr = window.devicePixelRatio || 1;
    canvas.width  = W * dpr;
    canvas.height = H * dpr;
    ctx.scale(dpr, dpr);

    interface Blob { x:number; y:number; vx:number; vy:number; r:number; hue:number; }

    const blobs: Blob[] = [
      { x:75,  y:22, vx:.25,  vy:.18,  r:14, hue:340 },
      { x:110, y:40, vx:-.2,  vy:-.22, r:12, hue:310 },
      { x:150, y:20, vx:.18,  vy:.25,  r:11, hue:280 },
      { x:55,  y:40, vx:-.15, vy:.2,   r:10, hue:355 },
    ];

    let isHovered = false;
    let mouse = { x: 110, y: 30 };
    let burst = false, burstT = 0;

    const onMove  = (e: MouseEvent) => { const r = btn.getBoundingClientRect(); mouse = { x: e.clientX-r.left+10, y: e.clientY-r.top+5 }; isHovered = true; };
    const onEnter = () => (isHovered = true);
    const onLeave = () => { isHovered = false; mouse = { x:110, y:30 }; };
    const onClick = () => { burst = true; burstT = 0; };

    btn.addEventListener("mousemove",  onMove);
    btn.addEventListener("mouseenter", onEnter);
    btn.addEventListener("mouseleave", onLeave);
    btn.addEventListener("click",      onClick);

    let animId: number;
    const loop = () => {
      ctx.clearRect(0, 0, W, H);
      if (burst) { burstT += .06; if (burstT > 1) burst = false; }

      blobs.forEach(b => {
        b.x += b.vx * (burst ? 3 : 1);
        b.y += b.vy * (burst ? 3 : 1);
        if (b.x < b.r || b.x > W - b.r) b.vx *= -1;
        if (b.y < b.r || b.y > H - b.r) b.vy *= -1;

        if (isHovered) {
          b.vx += (mouse.x - b.x) * .004;
          b.vy += (mouse.y - b.y) * .004;
        }
        const sp = Math.hypot(b.vx, b.vy);
        if (sp > 1.2) { b.vx = b.vx/sp*1.2; b.vy = b.vy/sp*1.2; }

        const burstScale = burst ? 1 + Math.sin(burstT * Math.PI) * .5 : 1;
        const grad = ctx.createRadialGradient(b.x-b.r*.3, b.y-b.r*.35, b.r*.05, b.x, b.y, b.r * burstScale);
        grad.addColorStop(0, 'hsla('+b.hue+',90%,75%,.95)');
        grad.addColorStop(.6,'hsla('+b.hue+',80%,50%,.6)');
        grad.addColorStop(1, 'hsla('+b.hue+',70%,30%,0)');

        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r * burstScale, 0, Math.PI * 2);
        ctx.fillStyle   = grad;
        ctx.shadowBlur  = isHovered ? 16 : 6;
        ctx.shadowColor = 'hsl('+b.hue+',80%,60%)';
        ctx.fill();
      });

      animId = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      cancelAnimationFrame(animId);
      btn.removeEventListener("mousemove",  onMove);
      btn.removeEventListener("mouseenter", onEnter);
      btn.removeEventListener("mouseleave", onLeave);
      btn.removeEventListener("click",      onClick);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-[220px] h-[60px] flex items-center justify-center bg-transparent">
      <button
        ref={buttonRef}
        className={cn(
          "relative w-[200px] h-[50px] bg-[#14020c]/78 border border-pink-500/20 rounded text-pink-400/90 text-[11px] font-bold tracking-[0.25em] uppercase cursor-pointer z-10 flex items-center justify-center backdrop-blur-md overflow-hidden transition-all duration-300 hover:text-pink-200 hover:border-pink-500/50 hover:shadow-[0_0_28px_rgba(232,72,130,0.2)] active:scale-95",
          className
        )}
        {...props}
      >
        <span className="relative z-20 pointer-events-none">{children}</span>
      </button>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />
    </div>
  );
}
`,
  "prompt": "Create an advanced Lava Lamp Metaball Blob Button. Four glowing radial-gradient blobs drift lazily inside the button, bouncing off walls with soft physics. On hover they gravitate toward the cursor. On click they burst apart at 3× speed with expanded radii, then slowly settle back into their slow drift.",
  "likes": 0,
  "author": "Animation AI",
  "featured": true,
  "createdAt": "2026-05-21T10:00:00.000Z",
  "updatedAt": "2026-05-21T10:00:00.000Z"
}, {
  "slug": "starfield-warp-button",
  "title": "Warp Speed Button",
  "category": "buttons",
  "tag": "canvas",
  "description": "A warp-drive space button where stars expand outward from the center; hovering engages full warp and click triggers a hyperspace jump flash.",
  "previewCode": `<!DOCTYPE html>
<html>
<head>
  <style>
    body,html{margin:0;padding:0;width:100%;height:100%;overflow:hidden;background:#00010a;display:flex;align-items:center;justify-content:center;font-family:'Inter',sans-serif}
    .btn-container{position:relative;width:220px;height:60px;display:flex;align-items:center;justify-content:center}
    canvas{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:2}
    .warp-btn{position:relative;width:200px;height:50px;background:rgba(0,2,18,0.8);border:1px solid rgba(148,163,255,0.18);border-radius:6px;color:rgba(165,180,252,0.9);font-size:11px;font-weight:700;letter-spacing:.25em;text-transform:uppercase;cursor:pointer;z-index:1;display:flex;align-items:center;justify-content:center;backdrop-filter:blur(14px);box-shadow:inset 0 1px 1px rgba(255,255,255,.04),0 10px 30px rgba(0,0,0,.7);overflow:hidden;transition:all .3s cubic-bezier(.16,1,.3,1)}
    .warp-btn::before{content:'';position:absolute;top:0;left:-150%;width:100%;height:100%;background:linear-gradient(90deg,transparent,rgba(148,163,255,.06) 30%,rgba(148,163,255,.2) 50%,rgba(99,102,241,.08) 70%,transparent);animation:sweep 4s cubic-bezier(.25,1,.5,1) infinite;z-index:0}
    .warp-btn:hover{color:#c7d2fe;border-color:rgba(148,163,255,.5);box-shadow:0 0 28px rgba(148,163,255,.2),inset 0 1px 1px rgba(148,163,255,.2)}
    .warp-btn:active{transform:scale(.97)}
    .btn-text{position:relative;z-index:3;pointer-events:none}
    @keyframes sweep{0%{left:-150%}50%{left:150%}100%{left:150%}}
  </style>
</head>
<body>
  <div class="btn-container">
    <button class="warp-btn" id="warpBtn"><span class="btn-text">Warp Drive</span></button>
    <canvas id="warpCanvas"></canvas>
  </div>
  <script>
    const canvas=document.getElementById('warpCanvas');
    const ctx=canvas.getContext('2d');
    const btn=document.getElementById('warpBtn');
    const W=220,H=60,CX=110,CY=30;
    const dpr=window.devicePixelRatio||1;
    canvas.width=W*dpr;canvas.height=H*dpr;ctx.scale(dpr,dpr);

    let isHovered=false,jump=false,jumpT=0;
    const N=90;
    const stars=Array.from({length:N},()=>({
      angle:Math.random()*Math.PI*2,
      dist:Math.random()*35+2,
      speed:.3+Math.random()*.4,
      size:Math.random()*.8+.3,
    }));

    btn.addEventListener('mouseenter',()=>isHovered=true);
    btn.addEventListener('mouseleave',()=>isHovered=false);
    btn.addEventListener('click',()=>{jump=true;jumpT=0;});

    function loop(){
      ctx.clearRect(0,0,W,H);
      if(jump){jumpT+=.06;if(jumpT>1)jump=false;}

      const baseSpeed=isHovered?4.5:jump?12:1;

      stars.forEach(s=>{
        s.dist+=s.speed*baseSpeed;
        if(s.dist>Math.max(W,H)){s.dist=1+Math.random()*3;s.angle=Math.random()*Math.PI*2;}

        const x0=CX+Math.cos(s.angle)*s.dist;
        const y0=CY+Math.sin(s.angle)*s.dist;
        const streakLen=isHovered?s.dist*.25:jump?s.dist*.55:s.dist*.06;
        const x1=CX+Math.cos(s.angle)*(s.dist-streakLen);
        const y1=CY+Math.sin(s.angle)*(s.dist-streakLen);

        const alpha=Math.min(s.dist/30,1)*(jump?(.4+Math.sin(jumpT*Math.PI)*.6):1);
        ctx.beginPath();
        ctx.moveTo(x1,y1);
        ctx.lineTo(x0,y0);
        ctx.lineWidth=s.size*(isHovered?1.6:1);
        ctx.strokeStyle='rgba(165,180,252,'+alpha+')';
        ctx.shadowBlur=isHovered?4:1;
        ctx.shadowColor='#a5b4fc';
        ctx.stroke();
      });
      requestAnimationFrame(loop);
    }
    loop();
  </script>
</body>
</html>`,
  "code": `"use client";

import React, { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface StarfieldWarpButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function StarfieldWarpButton({
  children, className, ...props
}: StarfieldWarpButtonProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef    = useRef<HTMLCanvasElement>(null);
  const buttonRef    = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const btn    = buttonRef.current;
    if (!canvas || !btn) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = 220, H = 60, CX = 110, CY = 30;
    const dpr = window.devicePixelRatio || 1;
    canvas.width  = W * dpr;
    canvas.height = H * dpr;
    ctx.scale(dpr, dpr);

    interface Star { angle:number; dist:number; speed:number; size:number; }

    const N = 90;
    const stars: Star[] = Array.from({ length: N }, () => ({
      angle: Math.random() * Math.PI * 2,
      dist:  Math.random() * 35 + 2,
      speed: .3 + Math.random() * .4,
      size:  Math.random() * .8 + .3,
    }));

    let isHovered = false, jump = false, jumpT = 0;

    const onEnter = () => (isHovered = true);
    const onLeave = () => (isHovered = false);
    const onClick = () => { jump = true; jumpT = 0; };

    btn.addEventListener("mouseenter", onEnter);
    btn.addEventListener("mouseleave", onLeave);
    btn.addEventListener("click",      onClick);

    let animId: number;
    const loop = () => {
      ctx.clearRect(0, 0, W, H);
      if (jump) { jumpT += .06; if (jumpT > 1) jump = false; }

      const baseSpeed = isHovered ? 4.5 : jump ? 12 : 1;

      stars.forEach(s => {
        s.dist += s.speed * baseSpeed;
        if (s.dist > Math.max(W, H)) { s.dist = 1 + Math.random() * 3; s.angle = Math.random() * Math.PI * 2; }

        const x0 = CX + Math.cos(s.angle) * s.dist;
        const y0 = CY + Math.sin(s.angle) * s.dist;
        const streakLen = isHovered ? s.dist * .25 : jump ? s.dist * .55 : s.dist * .06;
        const x1 = CX + Math.cos(s.angle) * (s.dist - streakLen);
        const y1 = CY + Math.sin(s.angle) * (s.dist - streakLen);

        const alpha = Math.min(s.dist / 30, 1) * (jump ? (.4 + Math.sin(jumpT * Math.PI) * .6) : 1);

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x0, y0);
        ctx.lineWidth   = s.size * (isHovered ? 1.6 : 1);
        ctx.strokeStyle = 'rgba(165,180,252,' + alpha + ')';
        ctx.shadowBlur  = isHovered ? 4 : 1;
        ctx.shadowColor = '#a5b4fc';
        ctx.stroke();
      });

      animId = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      cancelAnimationFrame(animId);
      btn.removeEventListener("mouseenter", onEnter);
      btn.removeEventListener("mouseleave", onLeave);
      btn.removeEventListener("click",      onClick);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-[220px] h-[60px] flex items-center justify-center bg-transparent">
      <button
        ref={buttonRef}
        className={cn(
          "relative w-[200px] h-[50px] bg-[#000212]/80 border border-indigo-300/18 rounded text-indigo-300/90 text-[11px] font-bold tracking-[0.25em] uppercase cursor-pointer z-10 flex items-center justify-center backdrop-blur-md overflow-hidden transition-all duration-300 hover:text-indigo-200 hover:border-indigo-300/50 hover:shadow-[0_0_28px_rgba(148,163,255,0.2)] active:scale-95",
          className
        )}
        {...props}
      >
        <span className="relative z-20 pointer-events-none">{children}</span>
      </button>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />
    </div>
  );
}
`,
  "prompt": "Create an advanced Starfield Warp Drive Button. 90 stars radiate outward from a central vanishing point with short streak tails at idle. Hovering engages warp speed — stars accelerate 4.5× and grow longer streaks. Clicking triggers a hyperspace jump: speed surges to 12×, streaks become massive light trails, then everything fades and resets.",
  "likes": 0,
  "author": "Animation AI",
  "featured": true,
  "createdAt": "2026-05-21T10:00:00.000Z",
  "updatedAt": "2026-05-21T10:00:00.000Z"
}, {
  "slug": "emp-shockwave-ring-button",
  "title": "EMP Shockwave Button",
  "category": "buttons",
  "tag": "canvas",
  "description": "A high-tech military EMP button that fires expanding concentric shockwave pulse rings outward from the cursor on click.",
  "previewCode": `<!DOCTYPE html>
<html>
<head>
  <style>
    body,html{margin:0;padding:0;width:100%;height:100%;overflow:hidden;background:#010208;display:flex;align-items:center;justify-content:center;font-family:'Inter',sans-serif}
    .btn-container{position:relative;width:220px;height:60px;display:flex;align-items:center;justify-content:center}
    canvas{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:2}
    .emp-btn{position:relative;width:200px;height:50px;background:rgba(1,4,18,0.8);border:1px solid rgba(56,189,248,0.2);border-radius:4px;color:rgba(56,189,248,0.9);font-size:11px;font-weight:700;letter-spacing:.25em;text-transform:uppercase;cursor:pointer;z-index:1;display:flex;align-items:center;justify-content:center;backdrop-filter:blur(14px);box-shadow:inset 0 1px 1px rgba(255,255,255,.04),0 10px 30px rgba(0,0,0,.7);overflow:hidden;transition:all .3s cubic-bezier(.16,1,.3,1)}
    .emp-btn::before{content:'';position:absolute;top:0;left:-150%;width:100%;height:100%;background:linear-gradient(90deg,transparent,rgba(56,189,248,.06) 30%,rgba(56,189,248,.22) 50%,rgba(99,102,241,.08) 70%,transparent);animation:sweep 4s cubic-bezier(.25,1,.5,1) infinite;z-index:0}
    .emp-btn:hover{color:#7dd3fc;border-color:rgba(56,189,248,.5);box-shadow:0 0 28px rgba(56,189,248,.2),inset 0 1px 1px rgba(56,189,248,.2)}
    .emp-btn:active{transform:scale(.97)}
    .btn-text{position:relative;z-index:3;pointer-events:none}
    @keyframes sweep{0%{left:-150%}50%{left:150%}100%{left:150%}}
  </style>
</head>
<body>
  <div class="btn-container">
    <button class="emp-btn" id="empBtn"><span class="btn-text">EMP Pulse</span></button>
    <canvas id="empCanvas"></canvas>
  </div>
  <script>
    const canvas=document.getElementById('empCanvas');
    const ctx=canvas.getContext('2d');
    const btn=document.getElementById('empBtn');
    const W=220,H=60;
    const dpr=window.devicePixelRatio||1;
    canvas.width=W*dpr;canvas.height=H*dpr;ctx.scale(dpr,dpr);

    let isHovered=false,mouse={x:110,y:30};
    const rings=[];

    // Idle ambient rings
    let ambientT=0;

    btn.addEventListener('mousemove',e=>{const r=btn.getBoundingClientRect();mouse={x:e.clientX-r.left+10,y:e.clientY-r.top+5};isHovered=true;});
    btn.addEventListener('mouseenter',()=>isHovered=true);
    btn.addEventListener('mouseleave',()=>{isHovered=false;mouse={x:110,y:30};});
    btn.addEventListener('click',e=>{
      const r=btn.getBoundingClientRect();
      const cx=e.clientX-r.left+10;
      const cy=e.clientY-r.top+5;
      for(let i=0;i<4;i++) rings.push({cx,cy,r:2,maxR:90,speed:2.8+i*1.2,alpha:1,width:1.5-i*.2});
    });

    function loop(){
      ctx.clearRect(0,0,W,H);
      ambientT+=0.025;

      // Soft idle pulse at center
      if(!isHovered){
        const idle=Math.abs(Math.sin(ambientT))*12+4;
        ctx.beginPath();
        ctx.arc(110,30,idle,0,Math.PI*2);
        ctx.strokeStyle='rgba(56,189,248,0.12)';
        ctx.lineWidth=1;
        ctx.stroke();
      }

      // Hover aura
      if(isHovered){
        ctx.beginPath();
        ctx.arc(mouse.x,mouse.y,6+Math.sin(ambientT*3)*2,0,Math.PI*2);
        ctx.strokeStyle='rgba(56,189,248,0.5)';
        ctx.lineWidth=1;
        ctx.shadowBlur=8;ctx.shadowColor='#38bdf8';
        ctx.stroke();
        ctx.shadowBlur=0;
      }

      // EMP shockwave rings
      for(let i=rings.length-1;i>=0;i--){
        const rg=rings[i];
        rg.r+=rg.speed;
        rg.alpha=Math.max(0,1-rg.r/rg.maxR);
        if(rg.alpha<=0){rings.splice(i,1);continue;}

        ctx.beginPath();
        ctx.arc(rg.cx,rg.cy,rg.r,0,Math.PI*2);
        ctx.strokeStyle='rgba(56,189,248,'+rg.alpha+')';
        ctx.lineWidth=rg.width;
        ctx.shadowBlur=6*rg.alpha;ctx.shadowColor='#38bdf8';
        ctx.stroke();
        ctx.shadowBlur=0;
      }
      requestAnimationFrame(loop);
    }
    loop();
  </script>
</body>
</html>`,
  "code": `"use client";

import React, { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface EmpShockwaveRingButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function EmpShockwaveRingButton({
  children, className, ...props
}: EmpShockwaveRingButtonProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef    = useRef<HTMLCanvasElement>(null);
  const buttonRef    = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const btn    = buttonRef.current;
    if (!canvas || !btn) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = 220, H = 60;
    const dpr = window.devicePixelRatio || 1;
    canvas.width  = W * dpr;
    canvas.height = H * dpr;
    ctx.scale(dpr, dpr);

    interface Ring { cx:number; cy:number; r:number; maxR:number; speed:number; alpha:number; width:number; }

    let isHovered = false;
    let mouse = { x: 110, y: 30 };
    const rings: Ring[] = [];
    let ambientT = 0;

    const onMove  = (e: MouseEvent) => { const r = btn.getBoundingClientRect(); mouse = { x: e.clientX-r.left+10, y: e.clientY-r.top+5 }; isHovered = true; };
    const onEnter = () => (isHovered = true);
    const onLeave = () => { isHovered = false; mouse = { x: 110, y: 30 }; };
    const onClick = (e: MouseEvent) => {
      const r  = btn.getBoundingClientRect();
      const cx = e.clientX - r.left + 10;
      const cy = e.clientY - r.top  + 5;
      for (let i = 0; i < 4; i++) {
        rings.push({ cx, cy, r: 2, maxR: 90, speed: 2.8 + i * 1.2, alpha: 1, width: 1.5 - i * .2 });
      }
    };

    btn.addEventListener("mousemove",  onMove);
    btn.addEventListener("mouseenter", onEnter);
    btn.addEventListener("mouseleave", onLeave);
    btn.addEventListener("click",      onClick);

    let animId: number;
    const loop = () => {
      ctx.clearRect(0, 0, W, H);
      ambientT += .025;

      if (!isHovered) {
        const idle = Math.abs(Math.sin(ambientT)) * 12 + 4;
        ctx.beginPath();
        ctx.arc(110, 30, idle, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(56,189,248,0.12)";
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      if (isHovered) {
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 6 + Math.sin(ambientT * 3) * 2, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(56,189,248,0.5)";
        ctx.lineWidth   = 1;
        ctx.shadowBlur  = 8;
        ctx.shadowColor = "#38bdf8";
        ctx.stroke();
        ctx.shadowBlur  = 0;
      }

      for (let i = rings.length - 1; i >= 0; i--) {
        const rg = rings[i];
        rg.r    += rg.speed;
        rg.alpha = Math.max(0, 1 - rg.r / rg.maxR);
        if (rg.alpha <= 0) { rings.splice(i, 1); continue; }

        ctx.beginPath();
        ctx.arc(rg.cx, rg.cy, rg.r, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(56,189,248," + rg.alpha + ")";
        ctx.lineWidth   = rg.width;
        ctx.shadowBlur  = 6 * rg.alpha;
        ctx.shadowColor = "#38bdf8";
        ctx.stroke();
        ctx.shadowBlur  = 0;
      }

      animId = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      cancelAnimationFrame(animId);
      btn.removeEventListener("mousemove",  onMove);
      btn.removeEventListener("mouseenter", onEnter);
      btn.removeEventListener("mouseleave", onLeave);
      btn.removeEventListener("click",      onClick);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-[220px] h-[60px] flex items-center justify-center bg-transparent">
      <button
        ref={buttonRef}
        className={cn(
          "relative w-[200px] h-[50px] bg-[#010412]/80 border border-sky-400/20 rounded text-sky-400/90 text-[11px] font-bold tracking-[0.25em] uppercase cursor-pointer z-10 flex items-center justify-center backdrop-blur-md overflow-hidden transition-all duration-300 hover:text-sky-300 hover:border-sky-400/50 hover:shadow-[0_0_28px_rgba(56,189,248,0.2)] active:scale-95",
          className
        )}
        {...props}
      >
        <span className="relative z-20 pointer-events-none">{children}</span>
      </button>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />
    </div>
  );
}
`,
  "prompt": "Create an advanced EMP Shockwave Pulse Ring Button. At idle a soft breathing ring pulses at the centre. On hover a live targeting reticle tracks the cursor. Clicking fires 4 concentric EMP shockwave rings from the exact click position, each with staggered speeds and fading opacity as they expand outward.",
  "likes": 0,
  "author": "Animation AI",
  "featured": true,
  "createdAt": "2026-05-21T10:00:00.000Z",
  "updatedAt": "2026-05-21T10:00:00.000Z"
}, {
  "slug": "ink-diffusion-button",
  "title": "Ink Diffusion Button",
  "category": "buttons",
  "tag": "canvas",
  "description": "An artistic sumi-e ink button where droplets bloom organically through simulated water on hover and explode into a full ink wash on click.",
  "previewCode": `<!DOCTYPE html>
<html>
<head>
  <style>
    body,html{margin:0;padding:0;width:100%;height:100%;overflow:hidden;background:#f5f0eb;display:flex;align-items:center;justify-content:center;font-family:'Inter',sans-serif}
    .btn-container{position:relative;width:220px;height:60px;display:flex;align-items:center;justify-content:center}
    canvas{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:2}
    .ink-btn{position:relative;width:200px;height:50px;background:rgba(245,240,235,0.85);border:1px solid rgba(30,20,10,0.25);border-radius:4px;color:rgba(20,12,4,0.85);font-size:11px;font-weight:700;letter-spacing:.25em;text-transform:uppercase;cursor:pointer;z-index:1;display:flex;align-items:center;justify-content:center;backdrop-filter:blur(8px);box-shadow:inset 0 1px 1px rgba(0,0,0,.08),0 6px 20px rgba(0,0,0,.15);overflow:hidden;transition:all .3s cubic-bezier(.16,1,.3,1)}
    .ink-btn:hover{color:rgba(20,12,4,1);border-color:rgba(30,20,10,.5);box-shadow:0 0 20px rgba(30,20,10,.12),inset 0 1px 1px rgba(0,0,0,.1)}
    .ink-btn:active{transform:scale(.97)}
    .btn-text{position:relative;z-index:3;pointer-events:none}
  </style>
</head>
<body>
  <div class="btn-container">
    <button class="ink-btn" id="inkBtn"><span class="btn-text">Ink & Water</span></button>
    <canvas id="inkCanvas"></canvas>
  </div>
  <script>
    const canvas=document.getElementById('inkCanvas');
    const ctx=canvas.getContext('2d');
    const btn=document.getElementById('inkBtn');
    const W=220,H=60;
    const dpr=window.devicePixelRatio||1;
    canvas.width=W*dpr;canvas.height=H*dpr;ctx.scale(dpr,dpr);

    let isHovered=false,mouse={x:-999,y:-999};
    const drops=[];

    function spawnDrop(x,y,big){
      drops.push({
        x,y,
        r:0,
        maxR:big?45+Math.random()*25:8+Math.random()*12,
        speed:big?1.5:0.6+Math.random()*0.5,
        alpha:big?0.55:0.3+Math.random()*0.25,
        tendrils:Array.from({length:big?8:4},(_,i)=>({
          angle:(i/(big?8:4))*Math.PI*2+Math.random()*.5,
          len:0,maxLen:big?28+Math.random()*18:10+Math.random()*8,speed:0.5+Math.random()*.4
        }))
      });
    }

    // Idle ambient drips
    let idleTimer=0;

    btn.addEventListener('mousemove',e=>{
      const r=btn.getBoundingClientRect();
      mouse={x:e.clientX-r.left+10,y:e.clientY-r.top+5};
      isHovered=true;
      if(Math.random()<0.08) spawnDrop(mouse.x+((Math.random()-.5)*12),mouse.y+((Math.random()-.5)*8),false);
    });
    btn.addEventListener('mouseenter',()=>isHovered=true);
    btn.addEventListener('mouseleave',()=>{isHovered=false;mouse={x:-999,y:-999};});
    btn.addEventListener('click',e=>{
      const r=btn.getBoundingClientRect();
      const cx=e.clientX-r.left+10,cy=e.clientY-r.top+5;
      for(let i=0;i<6;i++) spawnDrop(cx+((Math.random()-.5)*30),cy+((Math.random()-.5)*20),true);
    });

    function loop(){
      ctx.clearRect(0,0,W,H);
      idleTimer++;
      if(!isHovered&&idleTimer%55===0) spawnDrop(30+Math.random()*160,10+Math.random()*40,false);

      for(let i=drops.length-1;i>=0;i--){
        const d=drops[i];
        d.r=Math.min(d.r+d.speed,d.maxR);
        const fade=1-d.r/d.maxR;
        if(fade<=0){drops.splice(i,1);continue;}

        // Main bloom
        const g=ctx.createRadialGradient(d.x,d.y,0,d.x,d.y,d.r);
        g.addColorStop(0,'rgba(15,10,5,'+(d.alpha*fade)+')');
        g.addColorStop(.55,'rgba(30,18,8,'+(d.alpha*fade*.55)+')');
        g.addColorStop(1,'rgba(0,0,0,0)');
        ctx.beginPath();ctx.arc(d.x,d.y,d.r,0,Math.PI*2);
        ctx.fillStyle=g;ctx.fill();

        // Ink tendrils
        d.tendrils.forEach(t=>{
          t.len=Math.min(t.len+t.speed,t.maxLen);
          const tx=d.x+Math.cos(t.angle)*t.len;
          const ty=d.y+Math.sin(t.angle)*t.len;
          ctx.beginPath();ctx.moveTo(d.x,d.y);ctx.lineTo(tx,ty);
          ctx.strokeStyle='rgba(20,12,4,'+(d.alpha*fade*.7)+')';
          ctx.lineWidth=.8;ctx.stroke();
        });
      }
      requestAnimationFrame(loop);
    }
    loop();
  </script>
</body>
</html>`,
  "code": `"use client";

import React, { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface InkDiffusionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function InkDiffusionButton({
  children, className, ...props
}: InkDiffusionButtonProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef    = useRef<HTMLCanvasElement>(null);
  const buttonRef    = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const btn    = buttonRef.current;
    if (!canvas || !btn) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = 220, H = 60;
    const dpr = window.devicePixelRatio || 1;
    canvas.width  = W * dpr;
    canvas.height = H * dpr;
    ctx.scale(dpr, dpr);

    interface Tendril { angle:number; len:number; maxLen:number; speed:number; }
    interface Drop { x:number; y:number; r:number; maxR:number; speed:number; alpha:number; tendrils:Tendril[]; }

    let isHovered = false;
    let mouse = { x: -999, y: -999 };
    const drops: Drop[] = [];
    let idleTimer = 0;

    const spawnDrop = (x: number, y: number, big: boolean) => {
      drops.push({
        x, y, r: 0,
        maxR:   big ? 45 + Math.random() * 25 : 8 + Math.random() * 12,
        speed:  big ? 1.5 : .6 + Math.random() * .5,
        alpha:  big ? .55 : .3 + Math.random() * .25,
        tendrils: Array.from({ length: big ? 8 : 4 }, (_, i) => ({
          angle:  (i / (big ? 8 : 4)) * Math.PI * 2 + Math.random() * .5,
          len:    0,
          maxLen: big ? 28 + Math.random() * 18 : 10 + Math.random() * 8,
          speed:  .5 + Math.random() * .4,
        })),
      });
    };

    const onMove = (e: MouseEvent) => {
      const r = btn.getBoundingClientRect();
      mouse = { x: e.clientX - r.left + 10, y: e.clientY - r.top + 5 };
      isHovered = true;
      if (Math.random() < .08) spawnDrop(mouse.x + (Math.random() - .5) * 12, mouse.y + (Math.random() - .5) * 8, false);
    };
    const onEnter = () => (isHovered = true);
    const onLeave = () => { isHovered = false; mouse = { x: -999, y: -999 }; };
    const onClick = (e: MouseEvent) => {
      const r  = btn.getBoundingClientRect();
      const cx = e.clientX - r.left + 10;
      const cy = e.clientY - r.top  + 5;
      for (let i = 0; i < 6; i++) spawnDrop(cx + (Math.random() - .5) * 30, cy + (Math.random() - .5) * 20, true);
    };

    btn.addEventListener("mousemove",  onMove);
    btn.addEventListener("mouseenter", onEnter);
    btn.addEventListener("mouseleave", onLeave);
    btn.addEventListener("click",      onClick);

    let animId: number;
    const loop = () => {
      ctx.clearRect(0, 0, W, H);
      idleTimer++;
      if (!isHovered && idleTimer % 55 === 0) spawnDrop(30 + Math.random() * 160, 10 + Math.random() * 40, false);

      for (let i = drops.length - 1; i >= 0; i--) {
        const d = drops[i];
        d.r = Math.min(d.r + d.speed, d.maxR);
        const fade = 1 - d.r / d.maxR;
        if (fade <= 0) { drops.splice(i, 1); continue; }

        const g = ctx.createRadialGradient(d.x, d.y, 0, d.x, d.y, d.r);
        g.addColorStop(0,   "rgba(15,10,5,"  + (d.alpha * fade)       + ")");
        g.addColorStop(.55, "rgba(30,18,8,"  + (d.alpha * fade * .55) + ")");
        g.addColorStop(1,   "rgba(0,0,0,0)");
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();

        d.tendrils.forEach(t => {
          t.len = Math.min(t.len + t.speed, t.maxLen);
          const tx = d.x + Math.cos(t.angle) * t.len;
          const ty = d.y + Math.sin(t.angle) * t.len;
          ctx.beginPath();
          ctx.moveTo(d.x, d.y);
          ctx.lineTo(tx, ty);
          ctx.strokeStyle = "rgba(20,12,4," + (d.alpha * fade * .7) + ")";
          ctx.lineWidth   = .8;
          ctx.stroke();
        });
      }

      animId = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      cancelAnimationFrame(animId);
      btn.removeEventListener("mousemove",  onMove);
      btn.removeEventListener("mouseenter", onEnter);
      btn.removeEventListener("mouseleave", onLeave);
      btn.removeEventListener("click",      onClick);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-[220px] h-[60px] flex items-center justify-center bg-transparent">
      <button
        ref={buttonRef}
        className={cn(
          "relative w-[200px] h-[50px] bg-[#f5f0eb]/85 border border-stone-800/25 rounded text-stone-900/85 text-[11px] font-bold tracking-[0.25em] uppercase cursor-pointer z-10 flex items-center justify-center backdrop-blur-sm overflow-hidden transition-all duration-300 hover:text-stone-900 hover:border-stone-800/50 hover:shadow-[0_0_20px_rgba(30,20,10,0.12)] active:scale-95",
          className
        )}
        {...props}
      >
        <span className="relative z-20 pointer-events-none">{children}</span>
      </button>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />
    </div>
  );
}
`,
  "prompt": "Create an advanced Sumi-e Ink Diffusion Button. The button uses a warm parchment background. Idle mode drips one random ink bloom every few seconds. Hovering trails small ink droplets that bloom with organic radial tendrils. Clicking erupts 6 large ink washes simultaneously with long spreading tendril arms, creating a full sumi-e ink splash.",
  "likes": 0,
  "author": "Animation AI",
  "featured": true,
  "createdAt": "2026-05-21T10:00:00.000Z",
  "updatedAt": "2026-05-21T10:00:00.000Z"
}, {
  "slug": "thermal-heatmap-button",
  "title": "Thermal Scan Button",
  "category": "buttons",
  "tag": "canvas",
  "description": "An infrared thermal scanner button that paints dynamic hot/cold heatmap zones under the cursor and flares to max temperature on click.",
  "previewCode": `<!DOCTYPE html>
<html>
<head>
  <style>
    body,html{margin:0;padding:0;width:100%;height:100%;overflow:hidden;background:#070008;display:flex;align-items:center;justify-content:center;font-family:'Inter',sans-serif}
    .btn-container{position:relative;width:220px;height:60px;display:flex;align-items:center;justify-content:center}
    canvas{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:2}
    .thermal-btn{position:relative;width:200px;height:50px;background:rgba(10,0,14,0.8);border:1px solid rgba(251,146,60,0.2);border-radius:4px;color:rgba(251,146,60,0.9);font-size:11px;font-weight:700;letter-spacing:.25em;text-transform:uppercase;cursor:pointer;z-index:1;display:flex;align-items:center;justify-content:center;backdrop-filter:blur(14px);box-shadow:inset 0 1px 1px rgba(255,255,255,.04),0 10px 30px rgba(0,0,0,.7);overflow:hidden;transition:all .3s cubic-bezier(.16,1,.3,1)}
    .thermal-btn::before{content:'';position:absolute;top:0;left:-150%;width:100%;height:100%;background:linear-gradient(90deg,transparent,rgba(251,146,60,.06) 30%,rgba(251,146,60,.22) 50%,rgba(239,68,68,.08) 70%,transparent);animation:sweep 4s cubic-bezier(.25,1,.5,1) infinite;z-index:0}
    .thermal-btn:hover{color:#fdba74;border-color:rgba(251,146,60,.5);box-shadow:0 0 28px rgba(251,146,60,.2),inset 0 1px 1px rgba(251,146,60,.2)}
    .thermal-btn:active{transform:scale(.97)}
    .btn-text{position:relative;z-index:3;pointer-events:none}
    @keyframes sweep{0%{left:-150%}50%{left:150%}100%{left:150%}}
  </style>
</head>
<body>
  <div class="btn-container">
    <button class="thermal-btn" id="thermalBtn"><span class="btn-text">Thermal Scan</span></button>
    <canvas id="thermalCanvas"></canvas>
  </div>
  <script>
    const canvas=document.getElementById('thermalCanvas');
    const ctx=canvas.getContext('2d');
    const btn=document.getElementById('thermalBtn');
    const W=220,H=60;
    const dpr=window.devicePixelRatio||1;
    canvas.width=W*dpr;canvas.height=H*dpr;ctx.scale(dpr,dpr);

    // Off-screen heat grid
    const GW=44,GH=12;
    const heat=new Float32Array(GW*GH).fill(0);
    let mouse={x:-1,y:-1},isHovered=false,flare=false,flareT=0;

    btn.addEventListener('mousemove',e=>{
      const r=btn.getBoundingClientRect();
      mouse={x:(e.clientX-r.left+10)/W*GW,y:(e.clientY-r.top+5)/H*GH};
      isHovered=true;
    });
    btn.addEventListener('mouseenter',()=>isHovered=true);
    btn.addEventListener('mouseleave',()=>{isHovered=false;mouse={x:-1,y:-1};});
    btn.addEventListener('click',()=>{flare=true;flareT=0;});

    // Thermal colour: cold(blue)→warm(green)→hot(orange)→max(white)
    function heatColor(t){
      // t 0..1
      if(t<.25){const s=t/.25;return[0,0,Math.round(80+s*175)];}
      if(t<.5){const s=(t-.25)/.25;return[0,Math.round(s*200),255-Math.round(s*200)];}
      if(t<.75){const s=(t-.5)/.25;return[Math.round(s*255),200,0];}
      const s=(t-.75)/.25;return[255,Math.round(200-s*200),Math.round(s*255)];
    }

    function loop(){
      ctx.clearRect(0,0,W,H);
      if(flare){flareT+=.05;if(flareT>1)flare=false;}

      // Diffuse & cool heat grid
      const next=new Float32Array(GW*GH);
      for(let y=0;y<GH;y++){
        for(let x=0;x<GW;x++){
          const i=y*GW+x;
          const n=heat[i];
          const neighbours=(
            (heat[Math.max(0,y-1)*GW+x]||0)+
            (heat[Math.min(GH-1,y+1)*GW+x]||0)+
            (heat[y*GW+Math.max(0,x-1)]||0)+
            (heat[y*GW+Math.min(GW-1,x+1)]||0)
          )/4;
          next[i]=Math.max(0,(n+neighbours*.15)*.92-.008);
        }
      }

      // Add heat at cursor
      if(isHovered&&mouse.x>=0){
        const gx=Math.floor(mouse.x),gy=Math.floor(mouse.y);
        for(let dy=-2;dy<=2;dy++){
          for(let dx=-2;dx<=2;dx++){
            const nx=gx+dx,ny=gy+dy;
            if(nx>=0&&nx<GW&&ny>=0&&ny<GH){
              const d=Math.hypot(dx,dy);
              next[ny*GW+nx]=Math.min(1,next[ny*GW+nx]+(1-d/3)*.35*(flare?3:1));
            }
          }
        }
      }
      heat.set(next);

      // Render heat tiles
      const cw=W/GW,ch=H/GH;
      for(let y=0;y<GH;y++){
        for(let x=0;x<GW;x++){
          const t=heat[y*GW+x];
          if(t<.01)continue;
          const [r,g,b]=heatColor(t);
          ctx.fillStyle='rgba('+r+','+g+','+b+','+(t*.55)+')';
          ctx.fillRect(x*cw,y*ch,cw+1,ch+1);
        }
      }
      requestAnimationFrame(loop);
    }
    loop();
  </script>
</body>
</html>`,
  "code": `"use client";

import React, { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface ThermalHeatmapButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function ThermalHeatmapButton({
  children, className, ...props
}: ThermalHeatmapButtonProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef    = useRef<HTMLCanvasElement>(null);
  const buttonRef    = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const btn    = buttonRef.current;
    if (!canvas || !btn) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = 220, H = 60;
    const dpr = window.devicePixelRatio || 1;
    canvas.width  = W * dpr;
    canvas.height = H * dpr;
    ctx.scale(dpr, dpr);

    const GW = 44, GH = 12;
    const heat = new Float32Array(GW * GH).fill(0);
    let mouse = { x: -1, y: -1 }, isHovered = false, flare = false, flareT = 0;

    const heatColor = (t: number): [number, number, number] => {
      if (t < .25) { const s = t / .25; return [0, 0, Math.round(80 + s * 175)]; }
      if (t < .5)  { const s = (t - .25) / .25; return [0, Math.round(s * 200), 255 - Math.round(s * 200)]; }
      if (t < .75) { const s = (t - .5)  / .25; return [Math.round(s * 255), 200, 0]; }
      const s = (t - .75) / .25; return [255, Math.round(200 - s * 200), Math.round(s * 255)];
    };

    const onMove = (e: MouseEvent) => {
      const r = btn.getBoundingClientRect();
      mouse = { x: (e.clientX - r.left + 10) / W * GW, y: (e.clientY - r.top + 5) / H * GH };
      isHovered = true;
    };
    const onEnter = () => (isHovered = true);
    const onLeave = () => { isHovered = false; mouse = { x: -1, y: -1 }; };
    const onClick = () => { flare = true; flareT = 0; };

    btn.addEventListener("mousemove",  onMove);
    btn.addEventListener("mouseenter", onEnter);
    btn.addEventListener("mouseleave", onLeave);
    btn.addEventListener("click",      onClick);

    let animId: number;
    const loop = () => {
      ctx.clearRect(0, 0, W, H);
      if (flare) { flareT += .05; if (flareT > 1) flare = false; }

      const next = new Float32Array(GW * GH);
      for (let y = 0; y < GH; y++) {
        for (let x = 0; x < GW; x++) {
          const i = y * GW + x;
          const n = heat[i];
          const neighbours = (
            (heat[Math.max(0, y-1) * GW + x] || 0) +
            (heat[Math.min(GH-1, y+1) * GW + x] || 0) +
            (heat[y * GW + Math.max(0, x-1)] || 0) +
            (heat[y * GW + Math.min(GW-1, x+1)] || 0)
          ) / 4;
          next[i] = Math.max(0, (n + neighbours * .15) * .92 - .008);
        }
      }

      if (isHovered && mouse.x >= 0) {
        const gx = Math.floor(mouse.x), gy = Math.floor(mouse.y);
        for (let dy = -2; dy <= 2; dy++) {
          for (let dx = -2; dx <= 2; dx++) {
            const nx = gx + dx, ny = gy + dy;
            if (nx >= 0 && nx < GW && ny >= 0 && ny < GH) {
              const d = Math.hypot(dx, dy);
              next[ny * GW + nx] = Math.min(1, next[ny * GW + nx] + (1 - d / 3) * .35 * (flare ? 3 : 1));
            }
          }
        }
      }
      heat.set(next);

      const cw = W / GW, ch = H / GH;
      for (let y = 0; y < GH; y++) {
        for (let x = 0; x < GW; x++) {
          const t = heat[y * GW + x];
          if (t < .01) continue;
          const [r, g, b] = heatColor(t);
          ctx.fillStyle = 'rgba(' + r + ',' + g + ',' + b + ',' + (t * .55) + ')';
          ctx.fillRect(x * cw, y * ch, cw + 1, ch + 1);
        }
      }
      animId = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      cancelAnimationFrame(animId);
      btn.removeEventListener("mousemove",  onMove);
      btn.removeEventListener("mouseenter", onEnter);
      btn.removeEventListener("mouseleave", onLeave);
      btn.removeEventListener("click",      onClick);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-[220px] h-[60px] flex items-center justify-center bg-transparent">
      <button
        ref={buttonRef}
        className={cn(
          "relative w-[200px] h-[50px] bg-[#0a000e]/80 border border-orange-400/20 rounded text-orange-400/90 text-[11px] font-bold tracking-[0.25em] uppercase cursor-pointer z-10 flex items-center justify-center backdrop-blur-md overflow-hidden transition-all duration-300 hover:text-orange-300 hover:border-orange-400/50 hover:shadow-[0_0_28px_rgba(251,146,60,0.2)] active:scale-95",
          className
        )}
        {...props}
      >
        <span className="relative z-20 pointer-events-none">{children}</span>
      </button>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />
    </div>
  );
}
`,
  "prompt": "Create an advanced Infrared Thermal Heatmap Scanner Button. A low-resolution heat grid physically simulates diffusion and cooling. Hovering deposits heat at the cursor position which spreads organically through the grid using a diffusion algorithm, cycling through cold-blue to hot-white IR colours. Clicking flares the heat source to 3× intensity.",
  "likes": 0,
  "author": "Animation AI",
  "featured": true,
  "createdAt": "2026-05-21T10:00:00.000Z",
  "updatedAt": "2026-05-21T10:00:00.000Z"
}, {
  "slug": "glitch-corrupt-button",
  "title": "Glitch Corrupt Button",
  "category": "buttons",
  "tag": "canvas",
  "description": "A cyberpunk data-corruption button with randomised RGB channel splits, scanline tears, and block-displacement glitch artifacts.",
  "previewCode": `<!DOCTYPE html>
<html>
<head>
  <style>
    body,html{margin:0;padding:0;width:100%;height:100%;overflow:hidden;background:#010101;display:flex;align-items:center;justify-content:center;font-family:'Inter',sans-serif}
    .btn-container{position:relative;width:220px;height:60px;display:flex;align-items:center;justify-content:center}
    canvas{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:2}
    .glitch-btn{position:relative;width:200px;height:50px;background:rgba(4,4,4,0.85);border:1px solid rgba(255,30,90,0.22);border-radius:0px;color:rgba(255,30,90,0.9);font-size:11px;font-weight:700;letter-spacing:.28em;text-transform:uppercase;cursor:pointer;z-index:1;display:flex;align-items:center;justify-content:center;backdrop-filter:blur(4px);box-shadow:inset 0 0 20px rgba(255,30,90,.04),0 0 0 1px rgba(0,255,200,.08);overflow:hidden;transition:color .15s,box-shadow .2s}
    .glitch-btn:hover{color:#ff4db2;box-shadow:inset 0 0 20px rgba(255,30,90,.08),0 0 20px rgba(255,30,90,.15),0 0 0 1px rgba(0,255,200,.18)}
    .glitch-btn:active{transform:scale(.97)}
    .btn-text{position:relative;z-index:3;pointer-events:none}
  </style>
</head>
<body>
  <div class="btn-container">
    <button class="glitch-btn" id="glitchBtn"><span class="btn-text">CORRUPT</span></button>
    <canvas id="glitchCanvas"></canvas>
  </div>
  <script>
    const canvas=document.getElementById('glitchCanvas');
    const ctx=canvas.getContext('2d');
    const btn=document.getElementById('glitchBtn');
    const W=220,H=60;
    const dpr=window.devicePixelRatio||1;
    canvas.width=W*dpr;canvas.height=H*dpr;ctx.scale(dpr,dpr);

    let isHovered=false,glitching=false,glitchT=0,idleT=0;

    btn.addEventListener('mouseenter',()=>isHovered=true);
    btn.addEventListener('mouseleave',()=>isHovered=false);
    btn.addEventListener('click',()=>{glitching=true;glitchT=0;});

    function rand(min,max){return min+Math.random()*(max-min);}

    function drawGlitch(intensity){
      // Scanline tears
      const lines=Math.floor(intensity*8)+1;
      for(let i=0;i<lines;i++){
        const y=rand(0,H);
        const h=rand(1,3);
        const dx=rand(-18,18)*intensity;
        ctx.save();
        ctx.fillStyle='rgba(255,30,90,'+rand(.05,.18)*intensity+')';
        ctx.fillRect(dx,y,W,h);
        ctx.restore();
      }

      // RGB channel split blocks
      const blocks=Math.floor(intensity*5)+1;
      for(let i=0;i<blocks;i++){
        const x=rand(0,W-40),y=rand(0,H-8),w=rand(20,80),h=rand(3,10);
        const shift=rand(2,10)*intensity;
        ctx.save();
        ctx.globalCompositeOperation='screen';
        ctx.fillStyle='rgba(0,255,200,'+rand(.08,.18)*intensity+')';
        ctx.fillRect(x-shift,y,w,h);
        ctx.fillStyle='rgba(255,0,100,'+rand(.08,.18)*intensity+')';
        ctx.fillRect(x+shift,y,w,h);
        ctx.restore();
      }

      // Vertical noise bar
      if(Math.random()<.3*intensity){
        const x=rand(0,W-6);
        const g=ctx.createLinearGradient(x,0,x+4,0);
        g.addColorStop(0,'rgba(255,30,90,0)');
        g.addColorStop(.5,'rgba(255,30,90,'+rand(.1,.35)*intensity+')');
        g.addColorStop(1,'rgba(255,30,90,0)');
        ctx.fillStyle=g;
        ctx.fillRect(x,0,4,H);
      }
    }

    function loop(){
      ctx.clearRect(0,0,W,H);
      idleT+=.016;

      if(glitching){
        glitchT+=.07;
        if(glitchT>1)glitching=false;
        drawGlitch(Math.sin(glitchT*Math.PI)*1.2);
      } else if(isHovered){
        // Subtle random micro-glitch on hover
        if(Math.random()<.12) drawGlitch(.35);
      } else {
        // Very faint idle flicker
        if(Math.random()<.03) drawGlitch(.12);
      }

      requestAnimationFrame(loop);
    }
    loop();
  </script>
</body>
</html>`,
  "code": `"use client";

import React, { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface GlitchCorruptButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function GlitchCorruptButton({
  children, className, ...props
}: GlitchCorruptButtonProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef    = useRef<HTMLCanvasElement>(null);
  const buttonRef    = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const btn    = buttonRef.current;
    if (!canvas || !btn) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = 220, H = 60;
    const dpr = window.devicePixelRatio || 1;
    canvas.width  = W * dpr;
    canvas.height = H * dpr;
    ctx.scale(dpr, dpr);

    let isHovered = false, glitching = false, glitchT = 0;

    const rand = (min: number, max: number) => min + Math.random() * (max - min);

    const drawGlitch = (intensity: number) => {
      // Scanline tears
      const lines = Math.floor(intensity * 8) + 1;
      for (let i = 0; i < lines; i++) {
        const y  = rand(0, H);
        const h  = rand(1, 3);
        const dx = rand(-18, 18) * intensity;
        ctx.save();
        ctx.fillStyle = 'rgba(255,30,90,' + rand(.05, .18) * intensity + ')';
        ctx.fillRect(dx, y, W, h);
        ctx.restore();
      }

      // RGB channel split blocks
      const blocks = Math.floor(intensity * 5) + 1;
      for (let i = 0; i < blocks; i++) {
        const x = rand(0, W - 40), y = rand(0, H - 8), w = rand(20, 80), h = rand(3, 10);
        const shift = rand(2, 10) * intensity;
        ctx.save();
        ctx.globalCompositeOperation = "screen";
        ctx.fillStyle = 'rgba(0,255,200,' + rand(.08, .18) * intensity + ')';
        ctx.fillRect(x - shift, y, w, h);
        ctx.fillStyle = 'rgba(255,0,100,' + rand(.08, .18) * intensity + ')';
        ctx.fillRect(x + shift, y, w, h);
        ctx.restore();
      }

      // Vertical noise bar
      if (Math.random() < .3 * intensity) {
        const x = rand(0, W - 6);
        const g = ctx.createLinearGradient(x, 0, x + 4, 0);
        g.addColorStop(0,   'rgba(255,30,90,0)');
        g.addColorStop(.5,  'rgba(255,30,90,' + rand(.1, .35) * intensity + ')');
        g.addColorStop(1,   'rgba(255,30,90,0)');
        ctx.fillStyle = g;
        ctx.fillRect(x, 0, 4, H);
      }
    };

    const onEnter = () => (isHovered = true);
    const onLeave = () => (isHovered = false);
    const onClick = () => { glitching = true; glitchT = 0; };

    btn.addEventListener("mouseenter", onEnter);
    btn.addEventListener("mouseleave", onLeave);
    btn.addEventListener("click",      onClick);

    let animId: number;
    const loop = () => {
      ctx.clearRect(0, 0, W, H);

      if (glitching) {
        glitchT += .07;
        if (glitchT > 1) glitching = false;
        drawGlitch(Math.sin(glitchT * Math.PI) * 1.2);
      } else if (isHovered) {
        if (Math.random() < .12) drawGlitch(.35);
      } else {
        if (Math.random() < .03) drawGlitch(.12);
      }

      animId = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      cancelAnimationFrame(animId);
      btn.removeEventListener("mouseenter", onEnter);
      btn.removeEventListener("mouseleave", onLeave);
      btn.removeEventListener("click",      onClick);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-[220px] h-[60px] flex items-center justify-center bg-transparent">
      <button
        ref={buttonRef}
        className={cn(
          "relative w-[200px] h-[50px] bg-[#040404]/85 border border-rose-600/22 rounded-none text-rose-500/90 text-[11px] font-bold tracking-[0.28em] uppercase cursor-pointer z-10 flex items-center justify-center backdrop-blur-sm overflow-hidden transition-colors duration-150 hover:text-pink-400 hover:shadow-[0_0_20px_rgba(255,30,90,0.15),inset_0_0_20px_rgba(255,30,90,0.08)] active:scale-95",
          className
        )}
        {...props}
      >
        <span className="relative z-20 pointer-events-none">{children}</span>
      </button>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />
    </div>
  );
}
`,
  "prompt": "Create an advanced Cyberpunk Glitch Data-Corruption Button. A sharp-edged dark button with faint idle flickers. Hovering triggers random micro-glitch artifacts including scanline tears and RGB channel splits. Clicking unleashes a full glitch storm — displaced blocks, colour-channel separation, vertical noise bars — all fading naturally via sin curve over ~1 second.",
  "likes": 0,
  "author": "Animation AI",
  "featured": true,
  "createdAt": "2026-05-21T10:00:00.000Z",
  "updatedAt": "2026-05-21T10:00:00.000Z"
}, {
  "slug": "sound-waveform-button",
  "title": "Waveform Button",
  "category": "buttons",
  "tag": "canvas",
  "description": "A music-studio equaliser button with reactive frequency bars that idle softly, surge on hover, and detonate a bass-drop beat on click.",
  "previewCode": `<!DOCTYPE html>
<html>
<head>
  <style>
    body,html{margin:0;padding:0;width:100%;height:100%;overflow:hidden;background:#03010a;display:flex;align-items:center;justify-content:center;font-family:'Inter',sans-serif}
    .btn-container{position:relative;width:220px;height:60px;display:flex;align-items:center;justify-content:center}
    canvas{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:2}
    .wave-btn{position:relative;width:200px;height:50px;background:rgba(6,2,16,0.82);border:1px solid rgba(167,139,250,0.2);border-radius:6px;color:rgba(167,139,250,0.9);font-size:11px;font-weight:700;letter-spacing:.25em;text-transform:uppercase;cursor:pointer;z-index:1;display:flex;align-items:center;justify-content:center;backdrop-filter:blur(14px);box-shadow:inset 0 1px 1px rgba(255,255,255,.04),0 10px 30px rgba(0,0,0,.7);overflow:hidden;transition:all .3s cubic-bezier(.16,1,.3,1)}
    .wave-btn::before{content:'';position:absolute;top:0;left:-150%;width:100%;height:100%;background:linear-gradient(90deg,transparent,rgba(167,139,250,.06) 30%,rgba(167,139,250,.22) 50%,rgba(99,102,241,.08) 70%,transparent);animation:sweep 4s cubic-bezier(.25,1,.5,1) infinite;z-index:0}
    .wave-btn:hover{color:#c4b5fd;border-color:rgba(167,139,250,.5);box-shadow:0 0 28px rgba(167,139,250,.2),inset 0 1px 1px rgba(167,139,250,.2)}
    .wave-btn:active{transform:scale(.97)}
    .btn-text{position:relative;z-index:3;pointer-events:none}
    @keyframes sweep{0%{left:-150%}50%{left:150%}100%{left:150%}}
  </style>
</head>
<body>
  <div class="btn-container">
    <button class="wave-btn" id="waveBtn"><span class="btn-text">Waveform</span></button>
    <canvas id="waveCanvas"></canvas>
  </div>
  <script>
    const canvas=document.getElementById('waveCanvas');
    const ctx=canvas.getContext('2d');
    const btn=document.getElementById('waveBtn');
    const W=220,H=60;
    const dpr=window.devicePixelRatio||1;
    canvas.width=W*dpr;canvas.height=H*dpr;ctx.scale(dpr,dpr);

    const BARS=28;
    const barW=Math.floor((W-20)/BARS)-1;
    // Each bar has a target height that varies by simulated frequency
    const phases=Array.from({length:BARS},()=>Math.random()*Math.PI*2);
    const freqs=Array.from({length:BARS},()=>0.8+Math.random()*1.4);
    const heights=new Float32Array(BARS).fill(2);

    let t=0,isHovered=false,beat=false,beatT=0;

    btn.addEventListener('mouseenter',()=>isHovered=true);
    btn.addEventListener('mouseleave',()=>isHovered=false);
    btn.addEventListener('click',()=>{beat=true;beatT=0;});

    function loop(){
      ctx.clearRect(0,0,W,H);
      t+=0.055;
      if(beat){beatT+=.065;if(beatT>1)beat=false;}

      const beatBoost=beat?Math.sin(beatT*Math.PI)*18:0;
      const hoverBoost=isHovered?1.9:1;

      for(let i=0;i<BARS;i++){
        // Simulate frequency oscillation
        const target=(Math.sin(t*freqs[i]+phases[i])+1)/2;
        const maxH=isHovered?22:10;
        heights[i]+=(target*maxH*hoverBoost+beatBoost-heights[i])*.18;
        heights[i]=Math.max(1.5,heights[i]);

        const x=10+i*(barW+1);
        const bh=heights[i];
        const cy=H/2;

        // Mirrored bars (top+bottom)
        const grad=ctx.createLinearGradient(x,cy-bh,x,cy+bh);
        grad.addColorStop(0,'rgba(99,102,241,0)');
        grad.addColorStop(.3,'rgba(139,92,246,.7)');
        grad.addColorStop(.5,'rgba(167,139,250,1)');
        grad.addColorStop(.7,'rgba(139,92,246,.7)');
        grad.addColorStop(1,'rgba(99,102,241,0)');

        ctx.fillStyle=grad;
        ctx.shadowBlur=isHovered?6:2;
        ctx.shadowColor='#a78bfa';
        ctx.fillRect(x,cy-bh,barW,bh*2);
      }
      ctx.shadowBlur=0;
      requestAnimationFrame(loop);
    }
    loop();
  </script>
</body>
</html>`,
  "code": `"use client";

import React, { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface SoundWaveformButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function SoundWaveformButton({
  children, className, ...props
}: SoundWaveformButtonProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef    = useRef<HTMLCanvasElement>(null);
  const buttonRef    = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const btn    = buttonRef.current;
    if (!canvas || !btn) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = 220, H = 60;
    const dpr = window.devicePixelRatio || 1;
    canvas.width  = W * dpr;
    canvas.height = H * dpr;
    ctx.scale(dpr, dpr);

    const BARS = 28;
    const barW = Math.floor((W - 20) / BARS) - 1;
    const phases  = Array.from({ length: BARS }, () => Math.random() * Math.PI * 2);
    const freqs   = Array.from({ length: BARS }, () => .8 + Math.random() * 1.4);
    const heights = new Float32Array(BARS).fill(2);

    let t = 0, isHovered = false, beat = false, beatT = 0;

    const onEnter = () => (isHovered = true);
    const onLeave = () => (isHovered = false);
    const onClick = () => { beat = true; beatT = 0; };

    btn.addEventListener("mouseenter", onEnter);
    btn.addEventListener("mouseleave", onLeave);
    btn.addEventListener("click",      onClick);

    let animId: number;
    const loop = () => {
      ctx.clearRect(0, 0, W, H);
      t += .055;
      if (beat) { beatT += .065; if (beatT > 1) beat = false; }

      const beatBoost  = beat ? Math.sin(beatT * Math.PI) * 18 : 0;
      const hoverBoost = isHovered ? 1.9 : 1;

      for (let i = 0; i < BARS; i++) {
        const target = (Math.sin(t * freqs[i] + phases[i]) + 1) / 2;
        const maxH   = isHovered ? 22 : 10;
        heights[i]  += (target * maxH * hoverBoost + beatBoost - heights[i]) * .18;
        heights[i]   = Math.max(1.5, heights[i]);

        const x  = 10 + i * (barW + 1);
        const bh = heights[i];
        const cy = H / 2;

        const grad = ctx.createLinearGradient(x, cy - bh, x, cy + bh);
        grad.addColorStop(0,  "rgba(99,102,241,0)");
        grad.addColorStop(.3, "rgba(139,92,246,.7)");
        grad.addColorStop(.5, "rgba(167,139,250,1)");
        grad.addColorStop(.7, "rgba(139,92,246,.7)");
        grad.addColorStop(1,  "rgba(99,102,241,0)");

        ctx.fillStyle  = grad;
        ctx.shadowBlur  = isHovered ? 6 : 2;
        ctx.shadowColor = "#a78bfa";
        ctx.fillRect(x, cy - bh, barW, bh * 2);
      }
      ctx.shadowBlur = 0;
      animId = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      cancelAnimationFrame(animId);
      btn.removeEventListener("mouseenter", onEnter);
      btn.removeEventListener("mouseleave", onLeave);
      btn.removeEventListener("click",      onClick);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-[220px] h-[60px] flex items-center justify-center bg-transparent">
      <button
        ref={buttonRef}
        className={cn(
          "relative w-[200px] h-[50px] bg-[#060210]/82 border border-violet-400/20 rounded text-violet-400/90 text-[11px] font-bold tracking-[0.25em] uppercase cursor-pointer z-10 flex items-center justify-center backdrop-blur-md overflow-hidden transition-all duration-300 hover:text-violet-300 hover:border-violet-400/50 hover:shadow-[0_0_28px_rgba(167,139,250,0.2)] active:scale-95",
          className
        )}
        {...props}
      >
        <span className="relative z-20 pointer-events-none">{children}</span>
      </button>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />
    </div>
  );
}
`,
  "prompt": "Create an advanced Sound Equaliser Waveform Button. 28 frequency bars rendered as mirrored vertical rectangles with violet gradient fills oscillate at independent simulated frequencies. Hovering nearly doubles their amplitude and glow. Clicking detonates a bass-drop that temporarily pushes all bars to maximum height via a sin-curve envelope.",
  "likes": 0,
  "author": "Animation AI",
  "featured": true,
  "createdAt": "2026-05-21T10:00:00.000Z",
  "updatedAt": "2026-05-21T10:00:00.000Z"
}, {
  "slug": "crystal-frost-shatter-button",
  "title": "Crystal Frost Button",
  "category": "buttons",
  "tag": "canvas",
  "description": "A frozen crystal button where ice-fracture lines branch recursively from the click point and frost builds up under the cursor on hover.",
  "previewCode": `<!DOCTYPE html>
<html>
<head>
  <style>
    body,html{margin:0;padding:0;width:100%;height:100%;overflow:hidden;background:#020810;display:flex;align-items:center;justify-content:center;font-family:'Inter',sans-serif}
    .btn-container{position:relative;width:220px;height:60px;display:flex;align-items:center;justify-content:center}
    canvas{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:2}
    .frost-btn{position:relative;width:200px;height:50px;background:rgba(4,14,28,0.82);border:1px solid rgba(147,210,255,0.2);border-radius:6px;color:rgba(147,210,255,0.9);font-size:11px;font-weight:700;letter-spacing:.25em;text-transform:uppercase;cursor:pointer;z-index:1;display:flex;align-items:center;justify-content:center;backdrop-filter:blur(14px);box-shadow:inset 0 1px 1px rgba(255,255,255,.06),0 10px 30px rgba(0,0,0,.7);overflow:hidden;transition:all .3s cubic-bezier(.16,1,.3,1)}
    .frost-btn::before{content:'';position:absolute;top:0;left:-150%;width:100%;height:100%;background:linear-gradient(90deg,transparent,rgba(147,210,255,.06) 30%,rgba(147,210,255,.2) 50%,rgba(186,230,253,.06) 70%,transparent);animation:sweep 4s cubic-bezier(.25,1,.5,1) infinite;z-index:0}
    .frost-btn:hover{color:#bae6fd;border-color:rgba(147,210,255,.5);box-shadow:0 0 28px rgba(147,210,255,.18),inset 0 1px 1px rgba(147,210,255,.2)}
    .frost-btn:active{transform:scale(.97)}
    .btn-text{position:relative;z-index:3;pointer-events:none}
    @keyframes sweep{0%{left:-150%}50%{left:150%}100%{left:150%}}
  </style>
</head>
<body>
  <div class="btn-container">
    <button class="frost-btn" id="frostBtn"><span class="btn-text">Crystal</span></button>
    <canvas id="frostCanvas"></canvas>
  </div>
  <script>
    const canvas=document.getElementById('frostCanvas');
    const ctx=canvas.getContext('2d');
    const btn=document.getElementById('frostBtn');
    const W=220,H=60;
    const dpr=window.devicePixelRatio||1;
    canvas.width=W*dpr;canvas.height=H*dpr;ctx.scale(dpr,dpr);

    let isHovered=false,mouse={x:-1,y:-1};
    const cracks=[];   // active crack systems
    const frost=[];    // hover frost dots

    function spawnCrack(ox,oy,angle,len,depth){
      if(depth<=0||len<2)return;
      const ex=ox+Math.cos(angle)*len;
      const ey=oy+Math.sin(angle)*len;
      cracks.push({ox,oy,ex,ey,prog:0,alpha:0.7-depth*.08,depth});
      // Branch 1-3 children after a delay proportional to depth
      const branches=depth>3?3:2;
      for(let b=0;b<branches;b++){
        const spread=(Math.random()-.5)*1.1;
        setTimeout(()=>spawnCrack(ex,ey,angle+spread,len*(0.55+Math.random()*.2),depth-1),40*b);
      }
    }

    btn.addEventListener('mousemove',e=>{
      const r=btn.getBoundingClientRect();
      mouse={x:e.clientX-r.left+10,y:e.clientY-r.top+5};
      isHovered=true;
      // Frost breath on hover
      if(Math.random()<.15) frost.push({
        x:mouse.x+(Math.random()-.5)*16,
        y:mouse.y+(Math.random()-.5)*10,
        r:Math.random()*2+.5,alpha:.5+Math.random()*.3,life:1
      });
    });
    btn.addEventListener('mouseenter',()=>isHovered=true);
    btn.addEventListener('mouseleave',()=>{isHovered=false;mouse={x:-1,y:-1};});
    btn.addEventListener('click',e=>{
      const r=btn.getBoundingClientRect();
      const cx=e.clientX-r.left+10,cy=e.clientY-r.top+5;
      cracks.length=0;
      // Fire 5 primary cracks in a star
      for(let i=0;i<5;i++){
        const a=(i/5)*Math.PI*2+Math.random()*.3;
        spawnCrack(cx,cy,a,18+Math.random()*10,6);
      }
    });

    function loop(){
      ctx.clearRect(0,0,W,H);

      // Draw frost dots
      for(let i=frost.length-1;i>=0;i--){
        const f=frost[i];
        f.life-=.018;
        if(f.life<=0){frost.splice(i,1);continue;}
        ctx.beginPath();
        ctx.arc(f.x,f.y,f.r,0,Math.PI*2);
        ctx.fillStyle='rgba(186,230,253,'+(f.alpha*f.life)+')';
        ctx.fill();
      }

      // Draw cracks
      ctx.lineCap='round';
      for(let i=cracks.length-1;i>=0;i--){
        const c=cracks[i];
        c.prog=Math.min(1,c.prog+.08);
        const ex=c.ox+(c.ex-c.ox)*c.prog;
        const ey=c.oy+(c.ey-c.oy)*c.prog;
        ctx.beginPath();
        ctx.moveTo(c.ox,c.oy);
        ctx.lineTo(ex,ey);
        ctx.strokeStyle='rgba(147,210,255,'+c.alpha+')';
        ctx.lineWidth=c.depth*.18;
        ctx.shadowBlur=4;ctx.shadowColor='#93d2ff';
        ctx.stroke();
        ctx.shadowBlur=0;
        if(c.prog>=1&&c.alpha>0) c.alpha=Math.max(0,c.alpha-.004);
        if(c.alpha<=0) cracks.splice(i,1);
      }
      requestAnimationFrame(loop);
    }
    loop();
  </script>
</body>
</html>`,
  "code": `"use client";

import React, { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface CrystalFrostShatterButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function CrystalFrostShatterButton({
  children, className, ...props
}: CrystalFrostShatterButtonProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef    = useRef<HTMLCanvasElement>(null);
  const buttonRef    = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const btn    = buttonRef.current;
    if (!canvas || !btn) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = 220, H = 60;
    const dpr = window.devicePixelRatio || 1;
    canvas.width  = W * dpr;
    canvas.height = H * dpr;
    ctx.scale(dpr, dpr);

    interface Crack { ox:number; oy:number; ex:number; ey:number; prog:number; alpha:number; depth:number; }
    interface FrostDot { x:number; y:number; r:number; alpha:number; life:number; }

    let isHovered = false;
    let mouse = { x: -1, y: -1 };
    const cracks: Crack[] = [];
    const frost: FrostDot[] = [];

    const spawnCrack = (ox: number, oy: number, angle: number, len: number, depth: number) => {
      if (depth <= 0 || len < 2) return;
      const ex = ox + Math.cos(angle) * len;
      const ey = oy + Math.sin(angle) * len;
      cracks.push({ ox, oy, ex, ey, prog: 0, alpha: .7 - depth * .08, depth });
      const branches = depth > 3 ? 3 : 2;
      for (let b = 0; b < branches; b++) {
        const spread = (Math.random() - .5) * 1.1;
        setTimeout(() => spawnCrack(ex, ey, angle + spread, len * (.55 + Math.random() * .2), depth - 1), 40 * b);
      }
    };

    const onMove = (e: MouseEvent) => {
      const r = btn.getBoundingClientRect();
      mouse = { x: e.clientX - r.left + 10, y: e.clientY - r.top + 5 };
      isHovered = true;
      if (Math.random() < .15) frost.push({
        x: mouse.x + (Math.random() - .5) * 16,
        y: mouse.y + (Math.random() - .5) * 10,
        r: Math.random() * 2 + .5,
        alpha: .5 + Math.random() * .3,
        life: 1,
      });
    };
    const onEnter = () => (isHovered = true);
    const onLeave = () => { isHovered = false; mouse = { x: -1, y: -1 }; };
    const onClick = (e: MouseEvent) => {
      const r  = btn.getBoundingClientRect();
      const cx = e.clientX - r.left + 10;
      const cy = e.clientY - r.top  + 5;
      cracks.length = 0;
      for (let i = 0; i < 5; i++) {
        const a = (i / 5) * Math.PI * 2 + Math.random() * .3;
        spawnCrack(cx, cy, a, 18 + Math.random() * 10, 6);
      }
    };

    btn.addEventListener("mousemove",  onMove);
    btn.addEventListener("mouseenter", onEnter);
    btn.addEventListener("mouseleave", onLeave);
    btn.addEventListener("click",      onClick);

    let animId: number;
    const loop = () => {
      ctx.clearRect(0, 0, W, H);

      for (let i = frost.length - 1; i >= 0; i--) {
        const f = frost[i];
        f.life -= .018;
        if (f.life <= 0) { frost.splice(i, 1); continue; }
        ctx.beginPath();
        ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(186,230,253," + (f.alpha * f.life) + ")";
        ctx.fill();
      }

      ctx.lineCap = "round";
      for (let i = cracks.length - 1; i >= 0; i--) {
        const c = cracks[i];
        c.prog = Math.min(1, c.prog + .08);
        const ex = c.ox + (c.ex - c.ox) * c.prog;
        const ey = c.oy + (c.ey - c.oy) * c.prog;

        ctx.beginPath();
        ctx.moveTo(c.ox, c.oy);
        ctx.lineTo(ex, ey);
        ctx.strokeStyle = "rgba(147,210,255," + c.alpha + ")";
        ctx.lineWidth   = c.depth * .18;
        ctx.shadowBlur  = 4;
        ctx.shadowColor = "#93d2ff";
        ctx.stroke();
        ctx.shadowBlur  = 0;

        if (c.prog >= 1 && c.alpha > 0) c.alpha = Math.max(0, c.alpha - .004);
        if (c.alpha <= 0) cracks.splice(i, 1);
      }

      animId = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      cancelAnimationFrame(animId);
      btn.removeEventListener("mousemove",  onMove);
      btn.removeEventListener("mouseenter", onEnter);
      btn.removeEventListener("mouseleave", onLeave);
      btn.removeEventListener("click",      onClick);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-[220px] h-[60px] flex items-center justify-center bg-transparent">
      <button
        ref={buttonRef}
        className={cn(
          "relative w-[200px] h-[50px] bg-[#040e1c]/82 border border-sky-300/20 rounded text-sky-300/90 text-[11px] font-bold tracking-[0.25em] uppercase cursor-pointer z-10 flex items-center justify-center backdrop-blur-md overflow-hidden transition-all duration-300 hover:text-sky-200 hover:border-sky-300/50 hover:shadow-[0_0_28px_rgba(147,210,255,0.18)] active:scale-95",
          className
        )}
        {...props}
      >
        <span className="relative z-20 pointer-events-none">{children}</span>
      </button>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />
    </div>
  );
}
`,
  "prompt": "Create an advanced Crystal Ice Frost Shatter Button. Hovering the cursor breathes tiny frost particle dots that fade. Clicking fires 5 primary crack lines from the exact click point, each recursively branching 2-3 children with staggered delays, creating a realistic ice-fracture pattern that slowly fades after expanding.",
  "likes": 0,
  "author": "Animation AI",
  "featured": true,
  "createdAt": "2026-05-21T10:00:00.000Z",
  "updatedAt": "2026-05-21T10:00:00.000Z"
}
];

