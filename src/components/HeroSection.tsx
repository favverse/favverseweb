import { useEffect, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const rafRef = useRef<number>(0)
  const overlayRef = useRef<HTMLDivElement>(null)

  const handleScrollDown = () => {
    const next = document.querySelector('#about')
    if (next) next.scrollIntoView({ behavior: 'smooth' })
  }

  const runVideoLoop = useCallback(() => {
    const video = videoRef.current
    const overlay = overlayRef.current
    if (!video || !overlay) return

    const duration = video.duration
    const current = video.currentTime
    const fadeWindow = 0.5

    if (duration && current < fadeWindow) {
      const t = current / fadeWindow
      overlay.style.opacity = String(1 - t * 0.65)
    } else if (duration && current > duration - fadeWindow) {
      const t = (duration - current) / fadeWindow
      overlay.style.opacity = String(1 - t * 0.65)
    } else {
      overlay.style.opacity = '0.35'
    }

    rafRef.current = requestAnimationFrame(runVideoLoop)
  }, [])

  const handleVideoEnd = useCallback(() => {
    const video = videoRef.current
    const overlay = overlayRef.current
    if (!video || !overlay) return

    overlay.style.transition = 'opacity 0.15s ease'
    overlay.style.opacity = '1'

    setTimeout(() => {
      video.currentTime = 0
      video.play().then(() => {
        overlay.style.transition = ''
        rafRef.current = requestAnimationFrame(runVideoLoop)
      })
    }, 100)
  }, [runVideoLoop])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.play().catch(() => {})
    rafRef.current = requestAnimationFrame(runVideoLoop)
    video.addEventListener('ended', handleVideoEnd)

    return () => {
      cancelAnimationFrame(rafRef.current)
      video.removeEventListener('ended', handleVideoEnd)
    }
  }, [runVideoLoop, handleVideoEnd])

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        minHeight: '600px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
        }}
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Cinematic overlay managed by RAF */}
      <div
        ref={overlayRef}
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0,0,0,0.35)',
          zIndex: 1,
          opacity: 1,
          pointerEvents: 'none',
        }}
      />

      {/* Gradient vignette */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at center, transparent 30%, rgba(5,5,5,0.6) 100%)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '30%',
          background: 'linear-gradient(to top, #050505, transparent)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />

      {/* Hero Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 3,
          maxWidth: '1200px',
          width: '100%',
          padding: '0 1.5rem',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2rem',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="eyebrow">Premium Digital Studio</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            fontFamily: '"Instrument Serif", Georgia, serif',
            fontSize: 'clamp(3.2rem, 9vw, 8.5rem)',
            fontWeight: 400,
            letterSpacing: '-0.04em',
            lineHeight: 0.95,
            color: '#ffffff',
            maxWidth: '1100px',
          }}
        >
          Crafting websites that leave a lasting impression.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          style={{
            fontFamily: '"Inter", sans-serif',
            fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
            fontWeight: 400,
            color: 'rgba(255,255,255,0.65)',
            maxWidth: '700px',
            lineHeight: 1.75,
          }}
        >
          Favverse designs modern websites and growth-focused digital experiences that help businesses establish trust, attract customers, and stand out online.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}
        >
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="btn-primary"
          >
            Start a Project <ArrowRight size={16} />
          </a>
          <a
            href="#services"
            onClick={(e) => { e.preventDefault(); document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="btn-secondary"
          >
            Explore Services
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={handleScrollDown}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 3,
          background: 'rgba(255,255,255,0.06)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '50%',
          width: '44px',
          height: '44px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          color: 'rgba(255,255,255,0.65)',
          backdropFilter: 'blur(8px)',
          animation: 'float 3s ease-in-out infinite',
        }}
        aria-label="Scroll down"
      >
        <ChevronDown size={18} />
      </motion.button>
    </section>
  )
}
