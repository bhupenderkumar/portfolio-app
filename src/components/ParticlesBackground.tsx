import { useCallback, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface Particle {
  id: number
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
  color: string
}

const ParticlesBackground = () => {
  const [particles, setParticles] = useState<Particle[]>([])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const colors = [
    'rgba(99, 102, 241, 0.5)',   // primary
    'rgba(20, 184, 166, 0.5)',   // accent
    'rgba(139, 92, 246, 0.4)',   // purple
    'rgba(236, 72, 153, 0.3)',   // pink
  ]

  const createParticle = useCallback((id: number): Particle => {
    return {
      id,
      x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
      y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080),
      size: Math.random() * 4 + 1,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
      opacity: Math.random() * 0.5 + 0.2,
      color: colors[Math.floor(Math.random() * colors.length)],
    }
  }, [])

  useEffect(() => {
    const initialParticles = Array.from({ length: 50 }, (_, i) => createParticle(i))
    setParticles(initialParticles)
  }, [createParticle])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    const animate = () => {
      setParticles(prevParticles =>
        prevParticles.map(particle => {
          let newX = particle.x + particle.speedX
          let newY = particle.y + particle.speedY

          // Boundary check
          if (newX < 0 || newX > window.innerWidth) {
            newX = Math.random() * window.innerWidth
          }
          if (newY < 0 || newY > window.innerHeight) {
            newY = Math.random() * window.innerHeight
          }

          // Mouse interaction - particles move away from cursor
          const dx = mousePosition.x - newX
          const dy = mousePosition.y - newY
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < 150) {
            const force = (150 - distance) / 150
            newX -= (dx / distance) * force * 2
            newY -= (dy / distance) * force * 2
          }

          return {
            ...particle,
            x: newX,
            y: newY,
          }
        })
      )
    }

    const intervalId = setInterval(animate, 50)
    return () => clearInterval(intervalId)
  }, [mousePosition])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Gradient orbs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 -left-32 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl"
      />

      {/* Particles */}
      <svg className="w-full h-full">
        {particles.map(particle => (
          <motion.circle
            key={particle.id}
            cx={particle.x}
            cy={particle.y}
            r={particle.size}
            fill={particle.color}
            initial={{ opacity: 0 }}
            animate={{ opacity: particle.opacity }}
            transition={{ duration: 1 }}
          />
        ))}
        
        {/* Connection lines between nearby particles */}
        {particles.map((particle, i) =>
          particles.slice(i + 1).map(other => {
            const dx = particle.x - other.x
            const dy = particle.y - other.y
            const distance = Math.sqrt(dx * dx + dy * dy)
            
            if (distance < 150) {
              const opacity = (1 - distance / 150) * 0.2
              return (
                <line
                  key={`${particle.id}-${other.id}`}
                  x1={particle.x}
                  y1={particle.y}
                  x2={other.x}
                  y2={other.y}
                  stroke={`rgba(99, 102, 241, ${opacity})`}
                  strokeWidth="0.5"
                />
              )
            }
            return null
          })
        )}
      </svg>

      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99, 102, 241, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
    </div>
  )
}

export default ParticlesBackground
