import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Monitor, Search, TrendingUp } from 'lucide-react'

const services = [
  {
    icon: Monitor,
    title: 'Website Design',
    description: 'Modern websites crafted for speed, usability, responsiveness, and conversion. Every pixel purposeful, every interaction intentional.',
    index: '01',
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Increase visibility, improve rankings, and attract qualified traffic through modern SEO strategies built for sustainable growth.',
    index: '02',
  },
  {
    icon: TrendingUp,
    title: 'Digital Growth',
    description: 'Helping businesses build stronger online presence and long-term digital credibility that compounds over time.',
    index: '03',
  },
]

export default function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="services" ref={ref} className="section-padding">
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: '4rem', textAlign: 'center' }}
        >
          <span className="eyebrow">What We Do</span>
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
            Our services.
          </h2>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40, filter: 'blur(6px)' }}
                animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
                transition={{ duration: 0.7, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{
                  y: -8,
                  boxShadow: '0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.1)',
                }}
                className="glass-card"
                style={{
                  padding: '2.5rem',
                  cursor: 'default',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.5rem',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'box-shadow 0.3s ease',
                }}
              >
                {/* Card number */}
                <div
                  style={{
                    position: 'absolute',
                    top: '2rem',
                    right: '2rem',
                    fontFamily: '"Instrument Serif", serif',
                    fontSize: '1rem',
                    color: 'rgba(255,255,255,0.15)',
                    letterSpacing: '0.05em',
                  }}
                >
                  {service.index}
                </div>

                {/* Icon */}
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '14px',
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'rgba(255,255,255,0.85)',
                  }}
                >
                  <Icon size={22} strokeWidth={1.5} />
                </div>

                <div>
                  <h3
                    style={{
                      fontFamily: '"Instrument Serif", Georgia, serif',
                      fontSize: '1.75rem',
                      fontWeight: 400,
                      color: '#ffffff',
                      letterSpacing: '-0.02em',
                      marginBottom: '0.875rem',
                    }}
                  >
                    {service.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: '"Inter", sans-serif',
                      fontSize: '0.9rem',
                      color: 'rgba(255,255,255,0.55)',
                      lineHeight: 1.75,
                    }}
                  >
                    {service.description}
                  </p>
                </div>

                {/* Subtle glow on hover via pseudo-element via box-shadow */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '1px',
                    background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.08), transparent)',
                  }}
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
