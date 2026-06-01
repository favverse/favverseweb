import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Compass, Palette, Code2, BarChart3 } from 'lucide-react'

const steps = [
  {
    icon: Compass,
    number: '01',
    title: 'Discover',
    description: 'Understanding your business, audience, and goals. Deep research, honest conversations, and strategic clarity.',
  },
  {
    icon: Palette,
    number: '02',
    title: 'Design',
    description: 'Crafting beautiful user experiences and visual systems. Every element considered, every detail intentional.',
  },
  {
    icon: Code2,
    number: '03',
    title: 'Build',
    description: 'Developing fast, responsive, and reliable websites. Clean code, modern stack, performance first.',
  },
  {
    icon: BarChart3,
    number: '04',
    title: 'Grow',
    description: 'Helping businesses strengthen their digital presence and visibility. Strategy, SEO, and long-term support.',
  },
]

export default function ProcessSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="process" ref={ref} className="section-padding">
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: '5rem', textAlign: 'center' }}
        >
          <span className="eyebrow">How We Work</span>
          <h2
            style={{
              fontFamily: '"Instrument Serif", Georgia, serif',
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              fontWeight: 400,
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
              color: '#ffffff',
              marginTop: '1rem',
            }}
          >
            Our Process.
          </h2>
        </motion.div>

        <div style={{ position: 'relative' }}>
          {/* Timeline line - desktop */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              position: 'absolute',
              top: '2.5rem',
              left: '12.5%',
              right: '12.5%',
              height: '1px',
              background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.12), transparent)',
              transformOrigin: 'left',
              zIndex: 0,
            }}
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '1.5rem',
              position: 'relative',
              zIndex: 1,
            }}
          >
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.15 + 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    gap: '1.25rem',
                  }}
                >
                  {/* Icon circle */}
                  <motion.div
                    whileHover={{ scale: 1.08, boxShadow: '0 0 30px rgba(255,255,255,0.08)' }}
                    style={{
                      width: '72px',
                      height: '72px',
                      borderRadius: '50%',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      backdropFilter: 'blur(12px)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'rgba(255,255,255,0.8)',
                      flexShrink: 0,
                      position: 'relative',
                      transition: 'box-shadow 0.3s ease',
                    }}
                  >
                    <Icon size={26} strokeWidth={1.4} />
                    {/* Step number badge */}
                    <div
                      style={{
                        position: 'absolute',
                        top: '-4px',
                        right: '-4px',
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        background: 'rgba(255,255,255,0.1)',
                        border: '1px solid rgba(255,255,255,0.15)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontFamily: '"Inter", sans-serif',
                        fontSize: '0.6rem',
                        fontWeight: 600,
                        color: 'rgba(255,255,255,0.6)',
                      }}
                    >
                      {i + 1}
                    </div>
                  </motion.div>

                  <div>
                    <h3
                      style={{
                        fontFamily: '"Instrument Serif", Georgia, serif',
                        fontSize: '1.5rem',
                        fontWeight: 400,
                        color: '#ffffff',
                        letterSpacing: '-0.02em',
                        marginBottom: '0.625rem',
                      }}
                    >
                      {step.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: '"Inter", sans-serif',
                        fontSize: '0.85rem',
                        color: 'rgba(255,255,255,0.5)',
                        lineHeight: 1.7,
                      }}
                    >
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #process .process-grid { grid-template-columns: repeat(2, 1fr) !important; }
          #process .timeline-line { display: none !important; }
        }
        @media (max-width: 480px) {
          #process .process-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
