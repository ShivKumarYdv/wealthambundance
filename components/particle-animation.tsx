"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  color: string
  type: "herb" | "coin"
}

export default function ParticleAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas to full window size
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    // Create particles
    const particles: Particle[] = []
    const particleCount = Math.min(Math.floor(window.innerWidth / 20), 50)

    const herbColors = ["#10b981", "#059669", "#047857", "#065f46"]
    const coinColors = ["#fbbf24", "#f59e0b", "#d97706", "#b45309"]

    for (let i = 0; i < particleCount; i++) {
      const type = Math.random() > 0.5 ? "herb" : "coin"
      const colors = type === "herb" ? herbColors : coinColors

      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 5 + 2,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        type,
      })
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.forEach((particle) => {
        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        // Draw particle
        ctx.beginPath()
        ctx.fillStyle = particle.color

        if (particle.type === "herb") {
          // Draw leaf shape
          ctx.ellipse(particle.x, particle.y, particle.size * 2, particle.size, Math.PI / 4, 0, Math.PI * 2)
        } else {
          // Draw coin shape
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        }

        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    const animationId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 bg-gradient-to-b from-green-100/50 to-white/30" />
}
