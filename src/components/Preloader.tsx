import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface PreloaderProps {
  onComplete: () => void
}

const letters = ['F', 'a', 'v', 'v', 'e', 'r', 's', 'e']

export default function Preloader({ onComplete }: PreloaderProps) {
  const [visible, setVisible] = useState(true)
  const [lineVisible, setLineVisible] = useState(false)

  useEffect(() => {
    // Show line after letters animate in
    const lineTimer = setTimeout(() => setLineVisible(true), 800)

    // Start exit after 2.2s
    const exitTimer = setTimeout(() => {
      setVisible(false)
    }, 2200)

    // Signal parent after animation completes
    const doneTimer = setTimeout(() => {
      onComplete()
    }, 2900)

    return () => {
      clearTimeout(lineTimer)
      clearTimeout(exitTimer)
      clearTimeout(doneTimer)
    }
  }, [onComplete])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ y: '-100%', transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] } }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
            background: '#050505',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2rem',
          }}
        >
          {/* Logo letters */}
          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              overflow: 'hidden',
            }}
          >
            {letters.map((letter, i) => (
              <motion.span
                key={i}
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.06,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                style={{
                  display: 'inline-block',
                  fontFamily: '"Instrument Serif", Georgia, serif',
                  fontSize: 'clamp(3rem, 8vw, 6rem)',
                  fontWeight: 400,
                  color: '#ffffff',
                  letterSpacing: '-0.04em',
                  lineHeight: 1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              style={{
                fontFamily: '"Instrument Serif", serif',
                fontSize: 'clamp(1.5rem, 4vw, 3rem)',
                color: 'rgba(255,255,255,0.35)',
                marginLeft: '2px',
                lineHeight: 1,
              }}
            >
                          </motion.span>
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            style={{
              fontFamily: '"Inter", sans-serif',
              fontSize: '0.7rem',
              fontWeight: 600,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.3)',
            }}
          >
            Design. Visibility. Growth.
          </motion.p>

          {/* Loading line */}
          <div
            style={{
              position: 'absolute',
              bottom: '2.5rem',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '120px',
              height: '1px',
              background: 'rgba(255,255,255,0.08)',
              borderRadius: '999px',
              overflow: 'hidden',
            }}
          >
            <motion.div
              initial={{ scaleX: 0, originX: 0 }}
              animate={lineVisible ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{
                height: '100%',
                background: 'rgba(255,255,255,0.5)',
                borderRadius: '999px',
                transformOrigin: 'left',
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
