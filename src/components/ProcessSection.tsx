import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Compass, Palette, Code2, BarChart3 } from 'lucide-react'
import { RevealText, RevealLine, EASE_OUT_EXPO } from './ScrollReveal'

const steps = [
  {
    icon: Compass,
    number: '01',
    title: 'Discover',
    description: 'Understanding your business, audience, and goals. Deep research, honest conversations, and strategic clarity.',
    color: 'rgba(180,200,255,0.12)',
  },
  {
    icon: Palette,
    number: '02',
    title: 'Design',
    description: 'Crafting beautiful user experiences and visual systems. Every element considered, every detail intentional.',
    color: 'rgba(200,180,255,0.12)',
  },
  {
    icon: Code2,
    number: '03',
    title: 'Build',
    description: 'Developing fast, responsive, and reliable websites. Clean code, modern stack, performance first.',
    color: 'rgba(180,255,220,0.10)',
  },
  {
    icon: BarChart3,
    number: '04',
    title: 'Grow',
    description: 'Helping businesses strengthen their digital presence and visibility. Strategy, SEO, and long-term support.',
    color: 'rgba(255,220,180,0.10)',
  },
]

export default function ProcessSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="process" ref={ref} className="section-padding" style={{ position: 'relative' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ marginBottom: '5rem', textAlign: 'center' }}>
          <RevealLine>
            <span className="eyebrow">How We Work</span>
          </RevealLine>
          <RevealText
            text="Our Process."
            as="h2"
            delay={0.1}
            stagger={0.09}
            style={{ fontFamily: '"Instrument Serif", Georgia, serif', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 400, letterSpacing: '-0.03em', lineHeight: 1.05, color: '#ffffff', marginTop: '1rem' }}
          />
        </div>

        {/* Timeline connector */}
        <div style={{ position: 'relative' }}>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.4, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              position: 'absolute',
              top: '3.5rem',
              left: '12.5%',
              right: '12.5%',
              height: '1px',
              background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.15) 20%, rgba(255,255,255,0.15) 80%, transparent)',
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
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: i * 0.13, ease: EASE_OUT_EXPO }}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    gap: '1.25rem',
                  }}
                >
                  {/* Icon circle with pulsing glow */}
                  <div style={{ position: 'relative' }}>
                    {/* Pulse ring */}
                    <motion.div
                      animate={isInView ? {
                        scale: [1, 1.35, 1],
                        opacity: [0.3, 0, 0.3],
                      } : {}}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.5,
                        ease: 'easeInOut',
                      }}
                      style={{
                        position: 'absolute',
                        inset: '-12px',
                        borderRadius: '50%',
                        background: step.color,
                        pointerEvents: 'none',
                      }}
                    />

                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      style={{
                        width: '72px',
                        height: '72px',
                        borderRadius: '50%',
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.12)',
                        backdropFilter: 'blur(12px)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'rgba(255,255,255,0.8)',
                        position: 'relative',
                        zIndex: 1,
                        transition: 'box-shadow 0.3s ease',
                        boxShadow: `0 0 30px ${step.color}`,
                      }}
                    >
                      <Icon size={26} strokeWidth={1.4} />

                      {/* Step number badge */}
                      <div
                        style={{
                          position: 'absolute',
                          top: '-6px',
                          right: '-6px',
                          width: '22px',
                          height: '22px',
                          borderRadius: '50%',
                          background: 'rgba(255,255,255,0.08)',
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
                  </div>

                  {/* Content card */}
                  <motion.div
                    whileHover={{
                      y: -4,
                      background: 'rgba(255,255,255,0.04)',
                      borderColor: 'rgba(255,255,255,0.1)',
                    }}
                    style={{
                      padding: '1.5rem 1.25rem',
                      background: 'rgba(255,255,255,0.02)',
                      border: '1px solid rgba(255,255,255,0.06)',
                      borderRadius: '16px',
                      transition: 'all 0.25s ease',
                      width: '100%',
                    }}
                  >
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
                        fontSize: '0.82rem',
                        color: 'rgba(255,255,255,0.45)',
                        lineHeight: 1.7,
                      }}
                    >
                      {step.description}
                    </p>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #process [style*="grid-template-columns: repeat(4, 1fr)"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          #process [style*="top: 3.5rem"] {
            display: none !important;
          }
        }
        @media (max-width: 520px) {
          #process [style*="grid-template-columns: repeat(4, 1fr)"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
