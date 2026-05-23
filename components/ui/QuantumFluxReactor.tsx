'use client'

import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function QuantumFluxReactor() {
  const containerRef = useRef<HTMLDivElement>(null)
  const stateRef = useRef({
    mouseX: 0,
    mouseY: 0,
    isActive: false,
    energy: 0,
    particles: [] as any[],
    time: 0,
  })

  useEffect(() => {
    if (!containerRef.current || typeof window === 'undefined') return

    const container = containerRef.current
    const state = stateRef.current

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      55,
      container.clientWidth / container.clientHeight,
      0.1,
      2000
    )
    camera.position.z = 18

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(container.clientWidth, container.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0.1)
    container.appendChild(renderer.domElement)

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3)
    scene.add(ambientLight)

    const pointLight1 = new THREE.PointLight(0x00ff88, 3, 50)
    pointLight1.position.set(10, 10, 10)
    scene.add(pointLight1)

    const pointLight2 = new THREE.PointLight(0xff0088, 2.5, 40)
    pointLight2.position.set(-10, -8, 8)
    scene.add(pointLight2)

    // Main reactor core
    const coreGroup = new THREE.Group()
    scene.add(coreGroup)

    // Central sphere
    const coreGeom = new THREE.IcosahedronGeometry(2, 6)
    const coreMat = new THREE.MeshPhysicalMaterial({
      color: 0x00ff88,
      emissive: 0x00ff88,
      emissiveIntensity: 0.8,
      metalness: 0.9,
      roughness: 0.1,
      wireframe: false,
    })
    const core = new THREE.Mesh(coreGeom, coreMat)
    coreGroup.add(core)

    // Wireframe overlay
    const wireGeom = new THREE.IcosahedronGeometry(2.05, 6)
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x00ff88,
      wireframe: true,
      transparent: true,
      opacity: 0.4,
    })
    const wireframe = new THREE.Mesh(wireGeom, wireMat)
    coreGroup.add(wireframe)

    // Rotating rings
    const rings: THREE.Mesh[] = []
    const ringColors = [0x00ff88, 0xff0088, 0x00d4ff, 0xffaa00]
    for (let i = 0; i < 4; i++) {
      const ringGeom = new THREE.TorusGeometry(4 + i * 1.5, 0.15, 16, 100)
      const ringMat = new THREE.MeshStandardMaterial({
        color: ringColors[i],
        emissive: ringColors[i],
        emissiveIntensity: 0.6,
        metalness: 0.8,
        roughness: 0.2,
      })
      const ring = new THREE.Mesh(ringGeom, ringMat)
      ring.rotation.x = Math.random() * Math.PI
      ring.rotation.y = Math.random() * Math.PI
      coreGroup.add(ring)
      rings.push(ring)
    }

    // Particle system
    const particleCount = 800
    const particleGeom = new THREE.BufferGeometry()
    const positions = new Float32Array(particleCount * 3)
    const velocities = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2
      const radius = Math.random() * 8 + 2
      positions[i * 3] = Math.cos(angle) * radius
      positions[i * 3 + 1] = (Math.random() - 0.5) * 12
      positions[i * 3 + 2] = Math.sin(angle) * radius

      velocities[i * 3] = (Math.random() - 0.5) * 0.1
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.1
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.1

      const colorChoice = Math.random()
      if (colorChoice < 0.33) {
        colors[i * 3] = 0
        colors[i * 3 + 1] = 1
        colors[i * 3 + 2] = 0.53
      } else if (colorChoice < 0.66) {
        colors[i * 3] = 1
        colors[i * 3 + 1] = 0
        colors[i * 3 + 2] = 0.53
      } else {
        colors[i * 3] = 0
        colors[i * 3 + 1] = 0.83
        colors[i * 3 + 2] = 1
      }
    }

    particleGeom.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    particleGeom.setAttribute('color', new THREE.BufferAttribute(colors, 3))

    const particleMat = new THREE.PointsMaterial({
      size: 0.15,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true,
    })

    const particles = new THREE.Points(particleGeom, particleMat)
    coreGroup.add(particles)

    // Event handlers
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      state.mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1
      state.mouseY = -((e.clientY - rect.top) / rect.height) * 2 + 1
    }

    const handleMouseDown = () => {
      state.isActive = true
      state.energy = 1
    }

    const handleMouseUp = () => {
      state.isActive = false
    }

    window.addEventListener('mousemove', handleMouseMove)
    container.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)

    const handleResize = () => {
      camera.aspect = container.clientWidth / container.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(container.clientWidth, container.clientHeight)
    }
    window.addEventListener('resize', handleResize)

    // Animation loop
    let frameId = 0
    const clock = new THREE.Clock()

    const animate = () => {
      frameId = requestAnimationFrame(animate)
      const time = clock.getElapsedTime()
      state.time = time

      // Update core
      core.rotation.x += 0.0008
      core.rotation.y += 0.0012
      wireframe.rotation.x -= 0.0006
      wireframe.rotation.y -= 0.0009

      // Update rings
      rings.forEach((ring, i) => {
        ring.rotation.x += 0.0004 * (i % 2 === 0 ? 1 : -1)
        ring.rotation.y += 0.0006 * (i % 2 === 0 ? 1 : -1)
        ring.rotation.z += 0.0003
      })

      // Mouse tracking
      coreGroup.rotation.x += (state.mouseY * 0.3 - coreGroup.rotation.x) * 0.08
      coreGroup.rotation.y += (state.mouseX * 0.3 - coreGroup.rotation.y) * 0.08

      // Energy decay
      if (state.isActive) {
        state.energy = Math.min(state.energy + 0.08, 1)
      } else {
        state.energy = Math.max(state.energy - 0.04, 0)
      }

      // Update core material based on energy
      coreMat.emissiveIntensity = 0.5 + state.energy * 1.5
      pointLight1.intensity = 2 + state.energy * 3
      pointLight2.intensity = 1.5 + state.energy * 2.5

      // Update particles
      const posAttr = particleGeom.getAttribute('position') as THREE.BufferAttribute
      const posArray = posAttr.array as Float32Array

      for (let i = 0; i < particleCount; i++) {
        const idx = i * 3
        posArray[idx] += velocities[idx] * (0.5 + state.energy)
        posArray[idx + 1] += velocities[idx + 1] * (0.5 + state.energy)
        posArray[idx + 2] += velocities[idx + 2] * (0.5 + state.energy)

        // Wrap around
        if (Math.abs(posArray[idx]) > 15) velocities[idx] *= -1
        if (Math.abs(posArray[idx + 1]) > 15) velocities[idx + 1] *= -1
        if (Math.abs(posArray[idx + 2]) > 15) velocities[idx + 2] *= -1

        // Attract to center when active
        if (state.isActive) {
          const dist = Math.hypot(posArray[idx], posArray[idx + 1], posArray[idx + 2])
          velocities[idx] -= (posArray[idx] / dist) * 0.02 * state.energy
          velocities[idx + 1] -= (posArray[idx + 1] / dist) * 0.02 * state.energy
          velocities[idx + 2] -= (posArray[idx + 2] / dist) * 0.02 * state.energy
        }
      }
      posAttr.needsUpdate = true

      // Floating animation
      coreGroup.position.y = Math.sin(time * 0.5) * 0.3

      renderer.render(scene, camera)
    }

    animate()

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('mousemove', handleMouseMove)
      container.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('resize', handleResize)
      renderer.dispose()
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <div className="relative w-full h-[640px] overflow-hidden rounded-[32px] border border-cyan-500/30 bg-[radial-gradient(circle_at_center,#0a0a1a_0%,#000000_100%)]">
      <div ref={containerRef} className="absolute inset-0 cursor-crosshair" />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-black/40" />
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full border border-cyan-500/40 bg-black/60 backdrop-blur-md pointer-events-none">
        <p className="text-cyan-400/90 text-xs font-bold tracking-[0.3em] uppercase">
          Quantum Flux Reactor
        </p>
      </div>
    </div>
  )
}
