import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

interface StatItem {
  value: string
  numericEnd: number
  suffix: string
  label: string
}

const stats: StatItem[] = [
  { value: '10+', numericEnd: 10, suffix: '+', label: 'Happy Clients' },
  { value: '100%', numericEnd: 100, suffix: '%', label: 'Client Satisfaction' },
  { value: '∞', numericEnd: 0, suffix: '', label: 'Modern Web Experiences' },
  { value: '📈', numericEnd: 0, suffix: '', label: 'Growth Focused Strategy' },
]

function CountUp({ end, suffix, started }: { end: number; suffix: string; started: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!started || end === 0) return
    let start = 0
    const duration = 1800
    const step = 16
    const increment = end / (duration / step)

    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, step)

    return () => clearInterval(timer)
  }, [started, end])

  if (end === 0) return null
  return <>{count}{suffix}</>
}

export default function TrustStrip() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} style={{ padding: '0 1.5rem 6rem' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="glass-card"
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '2.5rem 3rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '2rem',
        }}
      >
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 + 0.2 }}
            style={{
              textAlign: 'center',
              padding: '1rem 0',
            }}
          >
            <div
              style={{
                fontFamily: '"Instrument Serif", Georgia, serif',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 400,
                color: '#ffffff',
                lineHeight: 1,
                marginBottom: '0.5rem',
              }}
            >
              {stat.numericEnd > 0 ? (
                <CountUp end={stat.numericEnd} suffix={stat.suffix} started={isInView} />
              ) : (
                stat.value
              )}
            </div>
            <div
              style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: '0.8rem',
                fontWeight: 500,
                color: 'rgba(255,255,255,0.45)',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
              }}
            >
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .trust-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .trust-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
