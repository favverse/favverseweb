import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)

  // Parallax scroll transforms
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const rawEyebrowY  = useTransform(scrollYProgress, [0, 1], [0, -40])
  const rawHeadlineY = useTransform(scrollYProgress, [0, 1], [0, -100])
  const rawSubY      = useTransform(scrollYProgress, [0, 1], [0, -70])
  const rawBtnsY     = useTransform(scrollYProgress, [0, 1], [0, -50])
  const rawOpacity   = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  const eyebrowY      = useSpring(rawEyebrowY,  { stiffness: 80, damping: 20 })
  const headlineY     = useSpring(rawHeadlineY, { stiffness: 80, damping: 20 })
  const subY          = useSpring(rawSubY,       { stiffness: 80, damping: 20 })
  const btnsY         = useSpring(rawBtnsY,      { stiffness: 80, damping: 20 })
  const contentOpacity = useSpring(rawOpacity,   { stiffness: 80, damping: 20 })

  const handleScrollDown = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      ref={sectionRef}
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
      {/*
        VIDEO — native loop, preload, no JS loop, no CSS filter.
        will-change: transform forces its own GPU compositing layer
        so the browser decodes video independently of page paint.
      */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/videos/hero_poster.jpg"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
          willChange: 'transform',
          transform: 'translateZ(0)',
        }}
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Primary darkening overlay — replaces the expensive CSS filter */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0,0,0,0.68)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      {/* Radial vignette */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at center, transparent 20%, rgba(5,5,5,0.7) 100%)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />

      {/* Bottom fade into page background */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '40%',
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
        {/* Eyebrow — slowest parallax layer */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ y: eyebrowY, opacity: contentOpacity, willChange: 'transform' }}
        >
          <span className="eyebrow"> Digital Growth , Designed Beautifully</span>
        </motion.div>

        {/* Headline — deepest parallax layer */}
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
            y: headlineY,
            willChange: 'transform',
          }}
        >
          We shape how the world sees your brand.
        </motion.h1>

        {/* Subtitle — mid parallax */}
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
            y: subY,
            willChange: 'transform',
          }}
        >
          Favverse designs modern websites and growth-focused digital experiences that help businesses establish trust, attract customers, and stand out online.
        </motion.p>

        {/* Buttons — shallowest parallax layer */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', y: btnsY, willChange: 'transform' }}
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
