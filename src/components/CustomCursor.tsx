import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  const springConfig = { damping: 28, stiffness: 280, mass: 0.5 }
  const orbX = useSpring(mouseX, { damping: 20, stiffness: 150, mass: 0.8 })
  const orbY = useSpring(mouseY, { damping: 20, stiffness: 150, mass: 0.8 })

  const dotX = useSpring(mouseX, springConfig)
  const dotY = useSpring(mouseY, springConfig)

  const orbScaleVal = useMotionValue(1)
  const orbScale = useSpring(orbScaleVal, { damping: 20, stiffness: 300 })

  const isHoveringRef = useRef(false)

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    const handleEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const interactive = target.closest('a, button, [role="button"], input, textarea, label')
      if (interactive && !isHoveringRef.current) {
        isHoveringRef.current = true
        orbScaleVal.set(2.2)
      }
    }

    const handleLeave = () => {
      isHoveringRef.current = false
      orbScaleVal.set(1)
    }

    window.addEventListener('mousemove', handleMove, { passive: true })
    document.addEventListener('mouseover', handleEnter)
    document.addEventListener('mouseout', handleLeave)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      document.removeEventListener('mouseover', handleEnter)
      document.removeEventListener('mouseout', handleLeave)
    }
  }, [mouseX, mouseY, orbScaleVal])

  // Only show on non-touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches) {
    return null
  }

  return (
    <>
      {/* Outer glow orb */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          x: orbX,
          y: orbY,
          translateX: '-50%',
          translateY: '-50%',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.06)',
          border: '1px solid rgba(255,255,255,0.12)',
          backdropFilter: 'blur(2px)',
          pointerEvents: 'none',
          zIndex: 99998,
          scale: orbScale,
          willChange: 'transform',
        }}
      />

      {/* Inner dot */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
          width: '5px',
          height: '5px',
          borderRadius: '50%',
          background: '#ffffff',
          pointerEvents: 'none',
          zIndex: 99999,
          willChange: 'transform',
        }}
      />

      {/* Spotlight glow */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          x: orbX,
          y: orbY,
          translateX: '-50%',
          translateY: '-50%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.032) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 99990,
          willChange: 'transform',
        }}
      />

      <style>{`
        @media (hover: hover) {
          * { cursor: none !important; }
        }
      `}</style>
    </>
  )
}
