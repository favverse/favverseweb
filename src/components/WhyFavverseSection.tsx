import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Sparkles, SearchCheck, Zap, Smartphone, Cpu, Headphones } from 'lucide-react'

const features = [
  { icon: Sparkles, label: 'Premium Design' },
  { icon: SearchCheck, label: 'SEO Focused' },
  { icon: Zap, label: 'Fast Performance' },
  { icon: Smartphone, label: 'Mobile First' },
  { icon: Cpu, label: 'Modern Technology' },
  { icon: Headphones, label: 'Long-Term Support' },
]

export default function WhyFavverseSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="section-padding" style={{ background: 'transparent' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '4rem',
            alignItems: 'center',
          }}
        >
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="eyebrow">Why Favverse</span>

            <h2
              style={{
                fontFamily: '"Instrument Serif", Georgia, serif',
                fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                fontWeight: 400,
                letterSpacing: '-0.03em',
                lineHeight: 1.05,
                color: '#ffffff',
                marginTop: '1rem',
                marginBottom: '1.5rem',
              }}
            >
              Designed for growth.
            </h2>

            <p
              style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: '1rem',
                color: 'rgba(255,255,255,0.6)',
                lineHeight: 1.8,
                marginBottom: '1.5rem',
              }}
            >
              We believe websites should do more than exist online.
            </p>

            <p
              style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: '1rem',
                color: 'rgba(255,255,255,0.55)',
                lineHeight: 1.8,
              }}
            >
              Every project is created with clarity, performance, user experience, and long-term value in mind.
            </p>
          </motion.div>

          {/* Right column - features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1rem',
              }}
            >
              {features.map((feat, i) => {
                const Icon = feat.icon
                return (
                  <motion.div
                    key={feat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: i * 0.08 + 0.3 }}
                    whileHover={{ background: 'rgba(255,255,255,0.06)', borderColor: 'rgba(255,255,255,0.12)' }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.875rem',
                      padding: '1rem 1.25rem',
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.07)',
                      borderRadius: '14px',
                      cursor: 'default',
                      transition: 'background 0.25s ease, border-color 0.25s ease',
                    }}
                  >
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '10px',
                        background: 'rgba(255,255,255,0.06)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        color: 'rgba(255,255,255,0.7)',
                      }}
                    >
                      <Icon size={16} strokeWidth={1.5} />
                    </div>
                    <span
                      style={{
                        fontFamily: '"Inter", sans-serif',
                        fontSize: '0.875rem',
                        fontWeight: 500,
                        color: 'rgba(255,255,255,0.75)',
                        letterSpacing: '0.01em',
                      }}
                    >
                      {feat.label}
                    </span>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
