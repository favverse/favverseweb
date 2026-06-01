import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function IntroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" ref={ref} className="section-padding">
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
          animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="glass-card"
          style={{ padding: 'clamp(2.5rem, 6vw, 5rem)' }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="eyebrow">Who We Are</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              fontFamily: '"Instrument Serif", Georgia, serif',
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              fontWeight: 400,
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
              color: '#ffffff',
              marginTop: '1.25rem',
              marginBottom: '2rem',
            }}
          >
            More than a website.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.45, duration: 0.7 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
            }}
          >
            <p
              style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)',
                color: 'rgba(255,255,255,0.65)',
                lineHeight: 1.8,
              }}
            >
              Favverse helps businesses create meaningful digital experiences through thoughtful design, modern development practices, and long-term growth strategies.
            </p>
            <p
              style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)',
                color: 'rgba(255,255,255,0.65)',
                lineHeight: 1.8,
              }}
            >
              We focus on building websites that not only look exceptional but also help businesses establish credibility and connect with their audience.
            </p>
          </motion.div>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.6, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              height: '1px',
              background: 'linear-gradient(to right, rgba(255,255,255,0.15), transparent)',
              marginTop: '3rem',
              transformOrigin: 'left',
            }}
          />
        </motion.div>
      </div>
    </section>
  )
}
