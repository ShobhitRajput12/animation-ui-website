'use client'

import React, { useEffect, useRef } from 'react'

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  layer: number
  index: number
  activation: number
  targetActivation: number
  connections: number[]
}

interface Connection {
  from: number
  to: number
  weight: number
  flow: number
}

export default function NeuralNetworkVisualizer() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const stateRef = useRef({
    nodes: [] as Node[],
    connections: [] as Connection[],
    mouseX: 0,
    mouseY: 0,
    selectedNode: -1,
    pulseEnergy: 0,
    time: 0,
  })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const state = stateRef.current
    let w = canvas.width
    let h = canvas.height
    let frameId = 0

    const resize = () => {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', resize)
    resize()

    // Initialize neural network
    const layers = [8, 12, 10, 8, 6]
    const nodes: Node[] = []
    const connections: Connection[] = []

    layers.forEach((layerSize, layerIdx) => {
      const layerX = (layerIdx / (layers.length - 1)) * (w - 200) + 100
      for (let i = 0; i < layerSize; i++) {
        const layerY = (i / (layerSize - 1)) * (h - 200) + 100
        nodes.push({
          x: layerX,
          y: layerY,
          vx: 0,
          vy: 0,
          layer: layerIdx,
          index: i,
          activation: 0,
          targetActivation: 0,
          connections: [],
        })
      }
    })

    // Create connections between layers
    let nodeIdx = 0
    for (let layer = 0; layer < layers.length - 1; layer++) {
      const currentLayerStart = layers.slice(0, layer).reduce((a, b) => a + b, 0)
      const nextLayerStart = layers.slice(0, layer + 1).reduce((a, b) => a + b, 0)
      const currentLayerSize = layers[layer]
      const nextLayerSize = layers[layer + 1]

      for (let i = 0; i < currentLayerSize; i++) {
        for (let j = 0; j < nextLayerSize; j++) {
          if (Math.random() > 0.3) {
            const fromIdx = currentLayerStart + i
            const toIdx = nextLayerStart + j
            connections.push({
              from: fromIdx,
              to: toIdx,
              weight: Math.random() * 0.8 + 0.2,
              flow: 0,
            })
            nodes[fromIdx].connections.push(connections.length - 1)
          }
        }
      }
    }

    state.nodes = nodes
    state.connections = connections

    // Event handlers
    const handleMouseMove = (e: MouseEvent) => {
      state.mouseX = e.clientX
      state.mouseY = e.clientY

      // Find nearest node
      let minDist = 50
      let nearest = -1
      nodes.forEach((node, idx) => {
        const dist = Math.hypot(node.x - e.clientX, node.y - e.clientY)
        if (dist < minDist) {
          minDist = dist
          nearest = idx
        }
      })
      state.selectedNode = nearest
    }

    const handleMouseDown = () => {
      if (state.selectedNode >= 0) {
        state.pulseEnergy = 1
        // Trigger activation cascade
        const queue = [state.selectedNode]
        const visited = new Set<number>()

        while (queue.length > 0) {
          const nodeIdx = queue.shift()!
          if (visited.has(nodeIdx)) continue
          visited.add(nodeIdx)

          nodes[nodeIdx].targetActivation = 1
          nodes[nodeIdx].connections.forEach((connIdx) => {
            const conn = connections[connIdx]
            if (!visited.has(conn.to)) {
              queue.push(conn.to)
            }
          })
        }
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('mousedown', handleMouseDown)

    const handleResize = () => {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)

    // Animation loop
    const animate = () => {
      frameId = requestAnimationFrame(animate)
      state.time += 0.016

      // Clear canvas
      ctx.fillStyle = '#0a0a14'
      ctx.fillRect(0, 0, w, h)

      // Draw grid
      ctx.strokeStyle = 'rgba(100, 200, 255, 0.04)'
      ctx.lineWidth = 1
      for (let i = 0; i < w; i += 60) {
        ctx.beginPath()
        ctx.moveTo(i, 0)
        ctx.lineTo(i, h)
        ctx.stroke()
      }
      for (let i = 0; i < h; i += 60) {
        ctx.beginPath()
        ctx.moveTo(0, i)
        ctx.lineTo(w, i)
        ctx.stroke()
      }

      // Update node activations
      nodes.forEach((node) => {
        node.activation += (node.targetActivation - node.activation) * 0.12
        node.targetActivation *= 0.96
      })

      // Update connection flows
      connections.forEach((conn) => {
        const fromNode = nodes[conn.from]
        const toNode = nodes[conn.to]
        conn.flow = fromNode.activation * conn.weight
        toNode.targetActivation = Math.max(toNode.targetActivation, conn.flow * 0.7)
      })

      // Draw connections
      connections.forEach((conn) => {
        const fromNode = nodes[conn.from]
        const toNode = nodes[conn.to]

        const intensity = conn.flow * 0.8
        const hue = 180 + intensity * 60

        ctx.strokeStyle = `hsla(${hue}, 100%, 50%, ${intensity * 0.6})`
        ctx.lineWidth = 1 + intensity * 2
        ctx.lineCap = 'round'

        ctx.beginPath()
        ctx.moveTo(fromNode.x, fromNode.y)

        // Bezier curve
        const cpX = (fromNode.x + toNode.x) / 2 + (Math.random() - 0.5) * 20
        const cpY = (fromNode.y + toNode.y) / 2 + (Math.random() - 0.5) * 20
        ctx.quadraticCurveTo(cpX, cpY, toNode.x, toNode.y)
        ctx.stroke()

        // Draw flow particles
        if (conn.flow > 0.1) {
          const t = (state.time * 2) % 1
          const px = fromNode.x + (toNode.x - fromNode.x) * t
          const py = fromNode.y + (toNode.y - fromNode.y) * t

          ctx.fillStyle = `hsla(${hue}, 100%, 60%, ${conn.flow})`
          ctx.beginPath()
          ctx.arc(px, py, 2 + conn.flow * 2, 0, Math.PI * 2)
          ctx.fill()
        }
      })

      // Draw nodes
      nodes.forEach((node, idx) => {
        const isSelected = idx === state.selectedNode
        const baseSize = 6 + node.activation * 8
        const glowSize = baseSize + 8

        // Glow
        const glowIntensity = node.activation * 0.4
        ctx.fillStyle = `rgba(100, 200, 255, ${glowIntensity})`
        ctx.beginPath()
        ctx.arc(node.x, node.y, glowSize, 0, Math.PI * 2)
        ctx.fill()

        // Node body
        const hue = 180 + node.activation * 60
        ctx.fillStyle = `hsl(${hue}, 100%, ${50 + node.activation * 20}%)`
        ctx.beginPath()
        ctx.arc(node.x, node.y, baseSize, 0, Math.PI * 2)
        ctx.fill()

        // Node border
        ctx.strokeStyle = `hsl(${hue}, 100%, 70%)`
        ctx.lineWidth = 2
        ctx.stroke()

        // Selection highlight
        if (isSelected) {
          ctx.strokeStyle = 'rgba(255, 100, 200, 0.8)'
          ctx.lineWidth = 3
          ctx.beginPath()
          ctx.arc(node.x, node.y, baseSize + 6, 0, Math.PI * 2)
          ctx.stroke()

          // Pulse ring
          const pulseRadius = baseSize + 12 + Math.sin(state.time * 8) * 4
          ctx.strokeStyle = `rgba(255, 100, 200, ${0.6 - Math.sin(state.time * 8) * 0.3})`
          ctx.lineWidth = 1.5
          ctx.beginPath()
          ctx.arc(node.x, node.y, pulseRadius, 0, Math.PI * 2)
          ctx.stroke()
        }
      })

      // Draw info panel
      ctx.fillStyle = 'rgba(10, 10, 20, 0.8)'
      ctx.fillRect(20, 20, 280, 120)
      ctx.strokeStyle = 'rgba(100, 200, 255, 0.3)'
      ctx.lineWidth = 1
      ctx.strokeRect(20, 20, 280, 120)

      ctx.fillStyle = 'rgba(100, 200, 255, 0.9)'
      ctx.font = 'bold 14px monospace'
      ctx.fillText('Neural Network Visualizer', 35, 45)

      ctx.font = '12px monospace'
      ctx.fillStyle = 'rgba(100, 200, 255, 0.6)'
      ctx.fillText(`Nodes: ${nodes.length}`, 35, 70)
      ctx.fillText(`Connections: ${connections.length}`, 35, 90)
      ctx.fillText(`Selected: ${state.selectedNode >= 0 ? 'Node ' + state.selectedNode : 'None'}`, 35, 110)
      ctx.fillText(`Energy: ${(state.pulseEnergy * 100).toFixed(0)}%`, 35, 130)

      // Draw instructions
      ctx.fillStyle = 'rgba(100, 200, 255, 0.5)'
      ctx.font = '11px monospace'
      ctx.fillText('Click nodes to activate network', 20, h - 20)
    }

    animate()

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#0a0a14]">
      <canvas
        ref={canvasRef}
        className="block w-full h-full cursor-crosshair"
        style={{ display: 'block' }}
      />
      <div className="absolute top-6 right-6 px-4 py-2 rounded-full border border-cyan-500/40 bg-black/60 backdrop-blur-md pointer-events-none">
        <p className="text-cyan-400/90 text-xs font-bold tracking-[0.3em] uppercase">
          Neural Network
        </p>
      </div>
    </div>
  )
}
