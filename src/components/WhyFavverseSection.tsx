import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Sparkles, SearchCheck, Zap, Smartphone, Cpu, Headphones } from 'lucide-react'

const features = [
  { icon: Sparkles, label: 'Premium Design', desc: 'Crafted to impress' },
  { icon: SearchCheck, label: 'SEO Focused', desc: 'Built to be found' },
  { icon: Zap, label: 'Fast Performance', desc: 'Sub-second load times' },
  { icon: Smartphone, label: 'Mobile First', desc: 'Perfect on all screens' },
  { icon: Cpu, label: 'Modern Technology', desc: 'Latest web stack' },
  { icon: Headphones, label: 'Long-Term Support', desc: 'We grow with you' },
]

function RadarChart({ isInView }: { isInView: boolean }) {
  const values = [88, 92, 85, 95, 90, 87]
  const labels = ['Design', 'SEO', 'Speed', 'Mobile', 'Tech', 'Support']
  const cx = 140
  const cy = 140
  const r = 100
  const n = 6

  const getPoint = (i: number, radius: number) => {
    const angle = (Math.PI * 2 * i) / n - Math.PI / 2
    return {
      x: cx + radius * Math.cos(angle),
      y: cy + radius * Math.sin(angle),
    }
  }

  const gridLevels = [25, 50, 75, 100]

  const dataPolygon = values.map((v, i) => {
    const pt = getPoint(i, (v / 100) * r)
    return `${pt.x},${pt.y}`
  }).join(' ')

  const outerPolygon = Array.from({ length: n }).map((_, i) => {
    const pt = getPoint(i, r)
    return `${pt.x},${pt.y}`
  }).join(' ')

  return (
    <div style={{ position: 'relative', width: '280px', height: '280px', flexShrink: 0 }}>
      <svg viewBox="0 0 280 280" width="280" height="280">
        {/* Grid rings */}
        {gridLevels.map((level) => {
          const pts = Array.from({ length: n }).map((_, i) => {
            const pt = getPoint(i, (level / 100) * r)
            return `${pt.x},${pt.y}`
          }).join(' ')
          return (
            <polygon
              key={level}
              points={pts}
              fill="none"
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="1"
            />
          )
        })}

        {/* Axis lines */}
        {Array.from({ length: n }).map((_, i) => {
          const pt = getPoint(i, r)
          return (
            <line
              key={i}
              x1={cx} y1={cy}
              x2={pt.x} y2={pt.y}
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="1"
            />
          )
        })}

        {/* Outer border */}
        <polygon
          points={outerPolygon}
          fill="none"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="1"
        />

        {/* Data polygon */}
        <motion.polygon
          points={dataPolygon}
          fill="rgba(255,255,255,0.07)"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="1.5"
          initial={{ opacity: 0, scale: 0.3 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ transformOrigin: `${cx}px ${cy}px` }}
        />

        {/* Data points */}
        {values.map((v, i) => {
          const pt = getPoint(i, (v / 100) * r)
          return (
            <motion.circle
              key={i}
              cx={pt.x}
              cy={pt.y}
              r="3.5"
              fill="rgba(255,255,255,0.8)"
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="1"
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.8 + i * 0.07 }}
            />
          )
        })}

        {/* Labels */}
        {labels.map((label, i) => {
          const pt = getPoint(i, r + 22)
          return (
            <motion.text
              key={label}
              x={pt.x}
              y={pt.y}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="9"
              fontFamily="Inter, sans-serif"
              fontWeight="500"
              letterSpacing="0.08em"
              fill="rgba(255,255,255,0.35)"
              textTransform="uppercase"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1 + i * 0.05, duration: 0.4 }}
            >
              {label}
            </motion.text>
          )
        })}

        {/* Center dot */}
        <circle cx={cx} cy={cy} r="3" fill="rgba(255,255,255,0.3)" />
      </svg>
    </div>
  )
}

export default function WhyFavverseSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="section-padding" style={{ position: 'relative' }}>
      {/* Dot pattern background */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          zIndex: 0,
          maskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, black, transparent)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, black, transparent)',
        }}
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '5rem',
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
                color: 'rgba(255,255,255,0.5)',
                lineHeight: 1.8,
                marginBottom: '2.5rem',
              }}
            >
              Every project is created with clarity, performance, user experience, and long-term value in mind.
            </p>

            {/* Radar chart */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="glass-card"
                style={{ padding: '2rem', display: 'inline-block' }}
              >
                <RadarChart isInView={isInView} />
              </motion.div>
            </div>
          </motion.div>

          {/* Right column - features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
              }}
            >
              {features.map((feat, i) => {
                const Icon = feat.icon
                return (
                  <motion.div
                    key={feat.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: i * 0.07 + 0.3 }}
                    whileHover={{
                      background: 'rgba(255,255,255,0.06)',
                      borderColor: 'rgba(255,255,255,0.12)',
                      x: 4,
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      padding: '1rem 1.25rem',
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.07)',
                      borderRadius: '14px',
                      cursor: 'default',
                      transition: 'background 0.2s ease, border-color 0.2s ease, transform 0.2s ease',
                    }}
                  >
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '12px',
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        color: 'rgba(255,255,255,0.7)',
                      }}
                    >
                      <Icon size={16} strokeWidth={1.5} />
                    </div>
                    <div>
                      <div
                        style={{
                          fontFamily: '"Inter", sans-serif',
                          fontSize: '0.9rem',
                          fontWeight: 500,
                          color: 'rgba(255,255,255,0.8)',
                          letterSpacing: '0.01em',
                        }}
                      >
                        {feat.label}
                      </div>
                      <div
                        style={{
                          fontFamily: '"Inter", sans-serif',
                          fontSize: '0.78rem',
                          color: 'rgba(255,255,255,0.35)',
                          marginTop: '0.1rem',
                        }}
                      >
                        {feat.desc}
                      </div>
                    </div>

                    {/* Right arrow indicator */}
                    <div
                      style={{
                        marginLeft: 'auto',
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        border: '1px solid rgba(255,255,255,0.08)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'rgba(255,255,255,0.2)',
                        fontSize: '0.6rem',
                        flexShrink: 0,
                      }}
                    >
                      ✓
                    </div>
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
